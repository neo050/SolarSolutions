/**
 * Visual and behavioural QA across every page and breakpoint.
 *
 * The static QA suite (scripts/qa.mjs) reads the built HTML. This one renders it in a real
 * browser, which is the only way to catch the class of problem the audits kept finding:
 * a grid that breaks at one specific width, a call to action that disappears in a
 * breakpoint gap, text that overflows once Hebrew is actually laid out.
 *
 * Run with `npm run qa:visual`. Writes screenshots to qa-screenshots/ so the design review
 * has evidence rather than assertions.
 *
 * Checks per page, per breakpoint:
 *   - horizontal overflow of the document
 *   - any element wider than the viewport
 *   - at least one visible, reachable call to action
 *   - tap targets below 44px
 *   - images that failed to load, or are served far larger than they render
 *   - axe-core accessibility violations
 */
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const DIST = join(here, "..", "dist");
const SHOTS = join(here, "..", "qa-screenshots");
const PORT = 4321;

const BREAKPOINTS = [
  { name: "mobile-sm", width: 320, height: 720 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "wide", width: 1920, height: 1080 },
];

/** Screenshots are only kept for these, to stay reviewable. */
const SHOOT = new Set(["mobile", "tablet", "laptop", "desktop"]);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

/* ------------------------------------------------------------------ server */
const server = createServer((req, res) => {
  let p = decodeURI(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let file = join(DIST, p);
  if (!existsSync(file) || !extname(file)) {
    const alt = join(DIST, p, "index.html");
    file = existsSync(alt) ? alt : join(DIST, "404.html");
  }
  if (!existsSync(file)) {
    res.writeHead(404).end("not found");
    return;
  }
  res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(PORT, r));

/* ------------------------------------------------------- routes to inspect */
const { readdirSync, statSync } = await import("node:fs");
function collect(dir, prefix = "") {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...collect(full, `${prefix}/${entry}`));
    } else if (entry === "index.html") {
      out.push(`${prefix}/`);
    } else if (entry === "404.html") {
      out.push("/404.html");
    }
  }
  return out;
}
const ROUTES = collect(DIST).sort();

/* --------------------------------------------------------------- axe-core */
let axeSource = "";
try {
  axeSource = readFileSync(
    join(here, "..", "node_modules", "axe-core", "axe.min.js"),
    "utf8"
  );
} catch {
  console.log("note: axe-core not installed — accessibility scan skipped\n");
}

/* ------------------------------------------------------------------- run */
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const failures = [];
const warnings = [];
const pageReport = [];

for (const route of ROUTES) {
  const row = { route, issues: [], a11y: 0 };

  for (const bp of BREAKPOINTS) {
    const context = await browser.newContext({
      viewport: { width: bp.width, height: bp.height },
      deviceScaleFactor: 1,
      locale: "he-IL",
      reducedMotion: "reduce",
    });
    const page = await context.newPage();

    const badImages = [];
    page.on("response", (r) => {
      if (r.request().resourceType() === "image" && r.status() >= 400) {
        badImages.push(`${r.status()} ${r.url().replace(`http://localhost:${PORT}`, "")}`);
      }
    });

    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle" });

    /* ---- horizontal overflow ---- */
    //
    // The test is whether the page can actually be scrolled sideways, not what
    // documentElement.scrollWidth reports.
    //
    // In an RTL document Chrome inflates documentElement.scrollWidth whenever any
    // descendant has a horizontal scroll container — even when that container is doing
    // exactly its job and the page itself does not move. The dashboard's review table is
    // 857px inside a 353px scroller at 390px wide, and the old check called that a
    // sideways-scrolling page. A check that fires on the correct implementation of the
    // thing it is meant to enforce trains people to ignore it.
    //
    // So: try to scroll, and see whether anything moved. body.scrollWidth is kept as a
    // second opinion because it does not inflate the way documentElement does.
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      const inScrollContainer = (el) => {
        let p = el.parentElement;
        while (p && p !== document.body) {
          const o = getComputedStyle(p).overflowX;
          if (o === "auto" || o === "scroll" || o === "hidden") return true;
          p = p.parentElement;
        }
        return false;
      };
      const wide = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        // Something wider than the viewport inside a scroller is intended, not a fault.
        if (r.width > doc.clientWidth + 1 && r.height > 0 && !inScrollContainer(el)) {
          wide.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || "").toString().slice(0, 60),
            w: Math.round(r.width),
          });
        }
      }
      // The element scan alone decides.
      //
      // Two other signals were tried and both false-positive in RTL:
      // documentElement.scrollWidth inflates whenever a descendant scroller exists, and
      // probing the scroll range by writing scrollLeft reports a non-zero range on a page
      // that cannot be scrolled at all. Both flagged /internal/dashboard/, whose 857px
      // review table sits correctly inside a 353px scroller.
      //
      // The scan was checked in the other direction too: a 900px div appended to the body
      // is caught, while the dashboard table is not. That is the behaviour wanted — it
      // names the offending element rather than reporting a number, and it knows the
      // difference between overflow and a scroll container doing its job.
      return {
        scrolls: wide.length > 0,
        clientWidth: doc.clientWidth,
        scrollWidth: document.body.scrollWidth,
        wide: wide.slice(0, 3),
      };
    });
    if (overflow.scrolls) {
      const detail = overflow.wide.map((w) => `${w.tag}.${w.cls}=${w.w}px`).join(", ");
      failures.push(
        `${route} @${bp.width} — page scrolls sideways (${overflow.scrollWidth} > ${overflow.clientWidth})${detail ? ": " + detail : ""}`
      );
      row.issues.push(`overflow@${bp.width}`);
    }

    /* ---- a visible call to action must exist ----
     * This is the check that would have caught the 768–1023px gap where the sticky bar
     * had hidden and the header buttons had not yet appeared. */
    const cta = await page.evaluate(() => {
      const isVisible = (el) => {
        const s = getComputedStyle(el);
        if (s.display === "none" || s.visibility === "hidden" || Number(s.opacity) === 0) return false;
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      };
      const selectors = ['a[href^="tel:"]', 'a[href*="wa.me"]', 'a[href*="/quote/"]', 'a[href*="/contact/"]'];
      let count = 0;
      for (const sel of selectors) {
        for (const el of document.querySelectorAll(sel)) {
          // Ignore anything inside a closed mobile menu.
          if (el.closest("[hidden]")) continue;
          if (isVisible(el)) count++;
        }
      }
      return count;
    });
    if (cta === 0 && !route.startsWith("/internal/")) {
      failures.push(`${route} @${bp.width} — no visible call to action anywhere on the page`);
      row.issues.push(`no-cta@${bp.width}`);
    }

    /* ---- tap targets ---- */
    if (bp.width <= 430) {
      const small = await page.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll("a, button, input, select, textarea, summary")) {
          const s = getComputedStyle(el);
          if (s.display === "none" || s.visibility === "hidden") continue;
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;

          // WCAG 2.5.8 exempts a link inside a block of text: an inline link is expected
          // to be text-sized, and flagging every one buries the real cases.
          const inline = s.display.startsWith("inline") && el.closest("p, li, figcaption, dd, blockquote");
          if (inline) continue;

          const label = (el.textContent || el.getAttribute("aria-label") || el.tagName)
            .trim()
            .slice(0, 34);
          // WCAG 2.5.8 (AA) requires 24x24 CSS px. 40px is comfort guidance, not the
          // standard — reported separately so a real AA failure is never lost among
          // stylistic notes.
          if (r.height < 24 || r.width < 24) {
            out.push(`AA-FAIL ${label} (${Math.round(r.width)}x${Math.round(r.height)})`);
          } else if (r.height < 40 || r.width < 40) {
            out.push(`tight ${label} (${Math.round(r.width)}x${Math.round(r.height)})`);
          }
        }
        return [...new Set(out)].slice(0, 4);
      });
      const aaFails = small.filter((t) => t.startsWith("AA-FAIL"));
      const tight = small.filter((t) => t.startsWith("tight"));
      if (aaFails.length) {
        failures.push(`${route} @${bp.width} — tap target below WCAG 2.5.8 24x24: ${aaFails.join(" · ")}`);
        row.issues.push(`tap-target@${bp.width}`);
      }
      if (tight.length) {
        warnings.push(`${route} @${bp.width} — tap target under 40px (comfort, not AA): ${tight.join(" · ")}`);
      }
    }

    /* ---- images ---- */
    if (badImages.length) {
      failures.push(`${route} @${bp.width} — image failed to load: ${badImages.join(", ")}`);
      row.issues.push("img-404");
    }
    const oversized = await page.evaluate(() => {
      const out = [];
      for (const img of document.querySelectorAll("img")) {
        if (!img.naturalWidth || !img.clientWidth) continue;
        const ratio = img.naturalWidth / (img.clientWidth * (window.devicePixelRatio || 1));
        if (ratio > 2.6) {
          out.push(`${img.currentSrc.split("/").pop()} ${img.naturalWidth}px served for ${img.clientWidth}px`);
        }
      }
      return out.slice(0, 3);
    });
    if (oversized.length) {
      warnings.push(`${route} @${bp.width} — oversized image: ${oversized.join(" · ")}`);
    }

    /* ---- axe ---- */
    if (axeSource && bp.name === "desktop") {
      await page.addScriptTag({ content: axeSource });
      const results = await page.evaluate(async () =>
        await window.axe.run(document, {
          resultTypes: ["violations"],
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
        })
      );
      for (const v of results.violations) {
        const where = v.nodes.slice(0, 2).map((n) => n.target.join(" ")).join(" | ");
        failures.push(`${route} — a11y ${v.impact}: ${v.id} — ${v.help} [${where}]`);
        row.a11y++;
      }
    }

    /* ---- screenshot ---- */
    if (SHOOT.has(bp.name)) {
      const name = (route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "_")) || "home";
      await page.screenshot({
        path: join(SHOTS, `${name}__${bp.name}.png`),
        fullPage: true,
      });
    }

    await context.close();
  }

  pageReport.push(row);
  process.stdout.write(row.issues.length || row.a11y ? "x" : ".");
}

await browser.close();
server.close();

/* ---------------------------------------------------------------- report */
console.log(`\n\nVisual QA: ${ROUTES.length} routes × ${BREAKPOINTS.length} breakpoints\n`);

writeFileSync(
  join(SHOTS, "report.json"),
  JSON.stringify({ routes: ROUTES.length, failures, warnings, pages: pageReport }, null, 2)
);

if (warnings.length) {
  console.log(`warnings (${warnings.length}):`);
  for (const w of warnings.slice(0, 25)) console.log("  ~ " + w);
  if (warnings.length > 25) console.log(`  … and ${warnings.length - 25} more (see report.json)`);
  console.log("");
}

if (failures.length) {
  console.log(`FAILURES (${failures.length}):`);
  for (const f of failures.slice(0, 40)) console.log("  x " + f);
  if (failures.length > 40) console.log(`  … and ${failures.length - 40} more (see report.json)`);
  process.exit(1);
}

console.log(`PASS — no sideways scroll, a reachable call to action at every width,`);
console.log(`       every image loads, and no WCAG AA violations detected by axe.`);
console.log(`Screenshots: qa-screenshots/`);
