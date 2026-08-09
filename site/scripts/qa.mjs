/**
 * Build-output QA.
 *
 * Runs against dist/ after a build and checks the things that actually broke on the old
 * site: broken links, missing or duplicated H1s, absent canonicals, unverified claims
 * leaking back into copy, and images without alt text.
 *
 * Exits non-zero on any failure so it can gate a deploy.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const failures = [];
const warnings = [];

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith(".html"));

/** Map every emitted route so internal links can be resolved. */
const routes = new Set(
  htmlFiles.map((f) => {
    const rel = relative(DIST, f).split("\\").join("/");
    return "/" + rel.replace(/index\.html$/, "").replace(/\.html$/, "/");
  })
);

const assets = new Set(
  files.map((f) => "/" + relative(DIST, f).split("\\").join("/"))
);

/**
 * Claims that were removed from the site because nothing supports them.
 * If any reappears, the build fails — this is the regression guard for the
 * highest-risk problem the audit found.
 *
 * Split in two because the checks need different inputs:
 *   RAW  — structured data and URLs, which live in attributes and <script> blocks.
 *   TEXT — visible copy, checked against tag-stripped output so that a legitimate
 *          `placeholder="050-1234567"` form attribute is not mistaken for placeholder copy.
 */
const BANNED_RAW = [
  { pattern: /aggregateRating/i, why: "fabricated review aggregate" },
  { pattern: /"reviewCount"/i, why: "fabricated review count" },
  { pattern: /"ratingValue"/i, why: "fabricated rating" },
  { pattern: /neo050\.github\.io/, why: "abandoned domain" },
];

const BANNED_TEXT = [
  { pattern: /הילה מ\.|דניאל ר\.|גיל ל\.|אלמוג ק\.|רותם ש\./, why: "invented testimonial name" },
  { pattern: /חיסכון של 90%|90% חיסכון/, why: "the withdrawn flat savings promise" },
  { pattern: /ת"י 1424|ת״י 1424/, why: "standard the research could not verify" },
  // Content completeness. Anything unfinished must be recorded in the gap report, not
  // left sitting quietly in a page where nobody notices it until a visitor does.
  { pattern: /lorem ipsum|כותרת קלף|טקסט לדוגמה/i, why: "placeholder copy" },
  { pattern: /\bTODO\b|\bTBD\b|\bFIXME\b/, why: "an unfinished marker" },
  { pattern: /example text|sample text|dummy|בקרוב יתווסף|יתווסף בהמשך/i, why: "filler copy" },
  { pattern: /ישראל ישראלי|יוסי כהן|John Doe/i, why: "a placeholder person" },
  { pattern: /\b(999-?9999|050-?0000000)\b/, why: "placeholder contact details" },
];

/**
 * /internal/ pages are the working report. Documenting a withdrawn claim is their whole
 * purpose, so the banned-content rules do not apply there — but every other check does.
 */
const isInternal = (route) => route.startsWith("/internal/");

const stripTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");

let checkedLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const route = "/" + relative(DIST, file).split("\\").join("/").replace(/index\.html$/, "");
  const label = route || "/";

  /* ---- headings ---- */
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length === 0) failures.push(`${label} — no <h1>`);
  if (h1s.length > 1) failures.push(`${label} — ${h1s.length} <h1> elements (expected 1)`);

  /* ---- head essentials ---- */
  if (!/<link rel="canonical"/.test(html)) failures.push(`${label} — no canonical`);
  if (!/<meta name="description"/.test(html)) failures.push(`${label} — no meta description`);
  if (!/<html lang="he" dir="rtl">/.test(html)) failures.push(`${label} — missing lang/dir`);

  const title = html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "";
  if (!title) failures.push(`${label} — empty <title>`);
  if (title.length > 75) warnings.push(`${label} — title is ${title.length} chars: ${title}`);

  const desc = html.match(/<meta name="description" content="(.*?)"/s)?.[1] ?? "";
  if (desc.length > 165) warnings.push(`${label} — description is ${desc.length} chars`);

  /* ---- banned claims ---- */
  if (!isInternal(label)) {
    for (const { pattern, why } of BANNED_RAW) {
      if (pattern.test(html)) failures.push(`${label} — contains ${why}`);
    }
    const visible = stripTags(html);
    for (const { pattern, why } of BANNED_TEXT) {
      if (pattern.test(visible)) failures.push(`${label} — visible copy contains ${why}`);
    }
  }

  /* ---- structural completeness ----
   *
   * A control that goes nowhere, a heading with no words, or a section with no content
   * all render without error and all read as broken. The build should refuse them.
   */
  if (!isInternal(label)) {
    const deadLinks = [...html.matchAll(/<a[^>]*href="(#|javascript:void\(0\)|)"[^>]*>/g)];
    if (deadLinks.length) {
      failures.push(`${label} — ${deadLinks.length} link(s) with no destination (href="#" or empty)`);
    }

    // A button that is not a submit and carries no handler attribute goes nowhere.
    for (const btn of html.match(/<button[^>]*>[\s\S]*?<\/button>/g) ?? []) {
      const text = stripTags(btn).replace(/\s+/g, " ").trim();
      if (!text) failures.push(`${label} — <button> with no accessible text`);
    }

    // Empty headings.
    for (const m of html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/g)) {
      if (!stripTags(m[2]).replace(/\s+/g, "").length) {
        failures.push(`${label} — empty <${m[1]}>`);
      }
    }

    // A section that renders a heading and nothing else.
    for (const m of html.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)) {
      const inner = m[1];
      const words = stripTags(inner.replace(/<h[1-6][\s\S]*?<\/h[1-6]>/g, ""))
        .replace(/\s+/g, " ")
        .trim();
      const hasMedia = /<(img|svg|video|iframe|form|table|input)/.test(inner);
      if (/<h[1-6]/.test(inner) && words.length < 12 && !hasMedia) {
        failures.push(`${label} — <section> with a heading and no content`);
      }
    }
  }

  /* ---- images ----
   *
   * srcset candidates are checked as well as src. A srcset built by string substitution
   * silently points at files that may not exist, and the browser simply falls back —
   * so the waste is invisible in the page and only shows up as a 404 in the log.
   */
  const imgs = html.match(/<img[^>]*>/g) ?? [];
  for (const img of imgs) {
    if (!/\salt=/.test(img)) failures.push(`${label} — <img> without alt: ${img.slice(0, 90)}`);

    const src = img.match(/src="([^"]+)"/)?.[1];
    if (src && src.startsWith("/") && !assets.has(decodeURI(src))) {
      failures.push(`${label} — image not found: ${src}`);
    }

    const srcset = img.match(/srcset="([^"]+)"/)?.[1];
    if (srcset) {
      for (const candidate of srcset.split(",")) {
        const url = candidate.trim().split(/\s+/)[0];
        if (!url || !url.startsWith("/")) continue;
        if (!assets.has(decodeURI(url))) {
          failures.push(`${label} — srcset candidate not found: ${url}`);
        }
      }
      if (!/\ssizes="/.test(img)) {
        failures.push(`${label} — srcset without sizes: ${src ?? "(no src)"}`);
      }
    }

    // Dimensions must be declared, or the layout shifts as each image arrives.
    if (!/\swidth="/.test(img) || !/\sheight="/.test(img)) {
      warnings.push(`${label} — <img> without width/height: ${(src ?? "").slice(0, 70)}`);
    }
  }

  /* ---- internal links ---- */
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const clean = decodeURI(href.split("#")[0].split("?")[0]);
    if (!clean) continue;
    checkedLinks++;
    if (routes.has(clean) || assets.has(clean)) continue;
    // tolerate directory links that resolve to an index
    if (routes.has(clean.endsWith("/") ? clean : clean + "/")) continue;
    failures.push(`${label} — broken internal link: ${href}`);
  }
}

/* ---- orphan pages ----
 *
 * A page nothing links to is invisible to crawlers and to visitors, and the broken-link
 * check cannot see it — there is no broken link, just no link at all. All ten project
 * detail pages were orphaned this way until a card was made clickable.
 *
 * Inbound links from the header and footer do not count: those appear on every page and
 * would mask a genuinely unreachable one. Only links from within <main> count.
 */
const EXPECT_NO_INBOUND = new Set([
  "/", // the root is reached directly
  "/404/", // emitted as dist/404.html; served by the host on any unmatched path
  "/accessibility/", // legal page: a footer link on every page is the correct treatment
  "/internal/gaps/", // working document, deliberately unlinked from the public site
  "/internal/dashboard/",
  "/thank-you/", // reached only by redirect from the retired success page
  "/thank-you/private/",
  "/thank-you/contracting/",
  "/thank-you/solar/",
]);

const inbound = new Map([...routes].map((r) => [r, 0]));

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const from = "/" + relative(DIST, file).split("\\").join("/").replace(/index\.html$/, "");
  // Count only links inside <main>, so chrome-wide navigation cannot hide an orphan.
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? "";
  for (const [, href] of main.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const clean = decodeURI(href.split("#")[0].split("?")[0]);
    const target = routes.has(clean) ? clean : routes.has(clean + "/") ? clean + "/" : null;
    if (target && target !== from) inbound.set(target, (inbound.get(target) ?? 0) + 1);
  }
}

for (const [route, count] of inbound) {
  if (count === 0 && !EXPECT_NO_INBOUND.has(route)) {
    failures.push(`${route} — orphan: no inbound link from any page's <main>`);
  }
}

/* ---- structured data ---- */
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const label = "/" + relative(DIST, file).split("\\").join("/").replace(/index\.html$/, "");
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];

  let faqPages = 0;
  for (const [, raw] of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      failures.push(`${label} — invalid JSON-LD (does not parse)`);
      continue;
    }
    const items = Array.isArray(parsed) ? parsed : [parsed];
    for (const item of items) {
      if (!item["@context"]) failures.push(`${label} — JSON-LD block without @context`);
      if (!item["@type"]) failures.push(`${label} — JSON-LD block without @type`);
      if (item["@type"] === "FAQPage") faqPages++;
      if (item["@type"] === "BreadcrumbList") {
        const list = item.itemListElement ?? [];
        if (list[0]?.position !== 1) failures.push(`${label} — BreadcrumbList must start at position 1`);
        for (const crumb of list) {
          if (!/^https?:\/\//.test(crumb.item ?? "")) {
            failures.push(`${label} — BreadcrumbList item is not an absolute URL: ${crumb.item}`);
          }
        }
      }
    }
  }
  // More than one FAQPage on a page is a structured-data violation Google flags.
  if (faqPages > 1) failures.push(`${label} — ${faqPages} FAQPage blocks (only one allowed)`);
}

/* ---- every route must be registered for review ----
 *
 * "The page exists and the build is green" is three of eight review dimensions. The
 * registry in src/data/pages.ts holds the other five. Gating on it means a new page
 * cannot quietly ship without anyone having judged its design, copy or conversion path.
 */
{
  const registry = readFileSync("src/data/pages.ts", "utf8");
  const registered = new Set(
    [...registry.matchAll(/(?:route|pattern):\s*"([^"]+)"/g)].map((m) => m[1])
  );

  const familyOf = (r) =>
    r.replace(/^\/projects\/[^/]+\/$/, "/projects/<slug>/")
      .replace(/^\/thank-you\/(private|contracting|solar)\/$/, "/thank-you/<track>/");

  for (const route of routes) {
    if (route === "/thank-you/") continue; // redirect stub, covered by the family
    const key = familyOf(route);
    if (!registered.has(route) && !registered.has(key)) {
      failures.push(
        `${route} — not registered in src/data/pages.ts, so no design, content or ` +
          `conversion review has been recorded for it`
      );
    }
  }
}

/* ---- asset integrity: the manifest and the build output must agree ---- */
//
// The quarantine rule is the reason this check exists. panel-02.jpeg carries another
// electrician's licence sticker and phone number, and it used to live in
// public/images/_quarantine/ — a directory whose name implied isolation while Astro
// copied it into dist/ like any other public file. Unlinked is not unpublished: the
// image was being deployed to a fetchable URL on this business's own domain. Holding a
// file back is now a build-enforced property rather than a convention someone remembers.
{
  const { SOURCE_ASSETS, GENERATED_ASSETS } = await import("./_load-assets.mjs");
  const all = [...SOURCE_ASSETS, ...GENERATED_ASSETS];

  const publishedPath = (a) =>
    // GENERATED_ASSETS record where the file is written (/public/...); SOURCE_ASSETS
    // record where it is served from. Normalise to the served URL.
    (a.path ?? a.destination ?? "").replace(/^\/public\//, "/");

  for (const a of all.filter((x) => x.status === "QUARANTINED")) {
    // Matched on filename, not on the path the manifest records. Someone re-adding the
    // image is exactly the case this guards, and they would re-add it under a new path —
    // checking the recorded path would then compare against a location the file no longer
    // occupies and pass. The filename is what survives the move.
    const name = publishedPath(a).split("/").pop();
    for (const url of assets) {
      if (url.split("/").pop() === name) {
        failures.push(
          `${a.id} is QUARANTINED but ${url} is in the build output — it would be ` +
            `fetchable on the live domain. Quarantined files belong outside public/.`
        );
      }
    }
    for (const file of htmlFiles) {
      if (readFileSync(file, "utf8").includes(name)) {
        const where = "/" + relative(DIST, file).split("\\").join("/").replace(/index\.html$/, "");
        failures.push(`${a.id} is QUARANTINED but ${where} references ${name}`);
      }
    }
  }

  // A manifest entry claiming IN USE whose file is absent is a broken image nobody sees
  // until a visitor does. The reverse — a file present but the entry stale — is why the
  // manifest is the source of truth rather than a description written after the fact.
  for (const a of all.filter((x) => x.status === "IN USE")) {
    const url = publishedPath(a);
    if (url && !assets.has(url)) {
      failures.push(`${a.id} is marked IN USE but ${url} is not in the build output`);
    }
  }

  // Placed by `npm run assets:ingest`, not yet looked at by a human. Warned rather than
  // failed: the file being on disk is what makes review possible.
  for (const a of all.filter((x) => x.status === "NEEDS VISUAL REVIEW")) {
    warnings.push(`${a.id} is in place but has had no visual review — ${publishedPath(a)}`);
  }
}

/* ---- required artefacts ---- */
for (const required of ["sitemap-index.xml", "404.html", "robots.txt", "_headers", "_redirects"]) {
  if (!existsSync(join(DIST, required))) failures.push(`missing build artefact: ${required}`);
}

/* ---- redirect map covers every retired URL ---- */
const redirects = existsSync(join(DIST, "_redirects"))
  ? readFileSync(join(DIST, "_redirects"), "utf8")
  : "";
const RETIRED = [
  "/energy/",
  "/solar.html",
  "/solutions.html",
  "/projects.html",
  "/about.html",
  "/contact.html",
  "/success.html",
  "/recommendation.html",
  "/m.html",
  "/new.html",
  "/solar-calculator.html",
  "/CompatibilityCheck.html",
];
for (const old of RETIRED) {
  if (!redirects.includes(old)) failures.push(`redirect map is missing the retired URL ${old}`);
}
// Redirects must be 301, not 302 — a temporary redirect passes no link equity.
for (const line of redirects.split("\n")) {
  const t = line.trim();
  if (!t || t.startsWith("#")) continue;
  if (/\s30[2378]\s*$/.test(t)) failures.push(`redirect is not a 301: ${t}`);
}

/* ---- report ---- */
console.log(`QA: ${htmlFiles.length} pages, ${checkedLinks} internal links checked\n`);

if (warnings.length) {
  console.log(`warnings (${warnings.length}):`);
  for (const w of warnings) console.log("  ~ " + w);
  console.log("");
}

if (failures.length) {
  console.log(`FAILURES (${failures.length}):`);
  for (const f of failures) console.log("  x " + f);
  process.exit(1);
}

console.log("PASS — no broken links, every page has one h1, canonical, description and alt text,");
console.log("       and no unverified claim reappeared in the output.");
