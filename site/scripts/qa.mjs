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

  /* ---- images ---- */
  const imgs = html.match(/<img[^>]*>/g) ?? [];
  for (const img of imgs) {
    if (!/\salt=/.test(img)) failures.push(`${label} — <img> without alt: ${img.slice(0, 90)}`);
    const src = img.match(/src="([^"]+)"/)?.[1];
    if (src && src.startsWith("/") && !assets.has(decodeURI(src))) {
      failures.push(`${label} — image not found: ${src}`);
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

/* ---- required artefacts ---- */
for (const required of ["sitemap-index.xml", "404.html", "robots.txt"]) {
  if (!existsSync(join(DIST, required))) failures.push(`missing build artefact: ${required}`);
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
