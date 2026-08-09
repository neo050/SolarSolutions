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
  { pattern: /lorem ipsum|כותרת קלף|טקסט לדוגמה/i, why: "placeholder copy" },
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
