/**
 * The return path for generated assets.
 *
 *     npm run assets:ingest            place everything in asset-inbox/
 *     npm run assets:ingest -- --dry   report what would happen, touch nothing
 *
 * The pack (`npm run pack`) is the outbound half: it decides every filename, ratio,
 * resolution and destination *before* anything is generated. This is the inbound half.
 * The owner drops finished files into asset-inbox/ under the names the pack already gave
 * them, runs this, and each one is validated, converted, placed at its destination, given
 * its responsive variants, and moved on in the manifest.
 *
 * Why a script and not a drag into public/: a hand-placed file is a file whose ratio
 * nobody measured, whose resolution nobody checked, and whose manifest row still says
 * NEEDS AI GENERATION a month later. Every one of those failures is silent. This makes
 * them loud, at the only moment when fixing them is cheap.
 *
 * Nothing here overwrites without saying so, and --dry is free.
 */
import { readdirSync, existsSync, mkdirSync, renameSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname, basename, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { SOURCE_ASSETS, GENERATED_ASSETS } from "./_load-assets.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, "..");
const INBOX = join(ROOT, "asset-inbox");
const MANIFEST = join(ROOT, "src", "data", "assets.ts");
const DRY = process.argv.includes("--dry") || process.argv.includes("--dry-run");

/** Ratio tolerance. Generators rarely land on the exact pixel, and 1% is invisible. */
const RATIO_TOLERANCE = 0.01;
const RASTER = [".webp", ".png", ".jpg", ".jpeg", ".avif"];

const accepted = [];
const rejected = [];
const unmatched = [];

/* ---------- helpers ---------- */

/** "16:9" and "1.91:1" both parse; "1600×2000" carries either × or x. */
function parseRatio(text) {
  const [w, h] = String(text).split(":").map(Number);
  return w > 0 && h > 0 ? w / h : null;
}

function parseResolution(text) {
  const m = String(text).match(/(\d+)\s*[×xX]\s*(\d+)/);
  return m ? { width: Number(m[1]), height: Number(m[2]) } : null;
}

/** /public/images/foo/bar.webp -> the real path on disk. */
function destinationPath(asset) {
  return join(ROOT, asset.destination.replace(/^\//, ""));
}

function reject(file, asset, reason) {
  rejected.push({ file, id: asset ? asset.id : "—", reason });
}

/* ---------- match an inbox file to a manifest row ---------- */

/**
 * Matched on the filename the pack assigned, ignoring extension: a model asked for a webp
 * commonly returns png, and that is a format question, not an identity question — we
 * convert below. The asset id is accepted as an alternative name because it is what
 * appears in the pack's own headings, and people name files after what they are reading.
 */
function matchAsset(fileName) {
  const stem = basename(fileName, extname(fileName)).toLowerCase();
  return (
    GENERATED_ASSETS.find((a) => basename(a.filename, extname(a.filename)).toLowerCase() === stem) ??
    GENERATED_ASSETS.find((a) => a.id.toLowerCase() === stem) ??
    null
  );
}

/* ---------- the gate that implements the owner's constraint ---------- */

/**
 * Three assets are WAITING_FOR_SOURCE_REFERENCE: the portrait, the team on site, and the
 * solar install. They depict real people and real capacity, so generating them from
 * nothing would be a claim about the business rather than decoration. The owner has the
 * photographs; the agreement was that generation runs *from* them, not before them.
 *
 * "The references arrived" is checkable rather than remembered: every SRC id the asset
 * names must exist in the manifest, must have a file on disk, and must not itself be
 * quarantined. A file arriving for one of these assets while that is untrue means it was
 * generated without the references, and it is refused.
 */
function referencesSatisfied(asset) {
  const missing = [];
  for (const id of asset.references ?? []) {
    const src = SOURCE_ASSETS.find((s) => s.id === id);
    if (!src) {
      missing.push(`${id} (not in the manifest)`);
    } else if (src.status === "QUARANTINED") {
      missing.push(`${id} (quarantined)`);
    } else if (src.status === "AWAITING UPLOAD") {
      missing.push(`${id} (not yet supplied)`);
    } else {
      const onDisk = join(ROOT, "public", src.path.replace(/^\//, ""));
      const alt = join(ROOT, src.path.replace(/^\//, ""));
      if (!existsSync(onDisk) && !existsSync(alt)) missing.push(`${id} (no file at ${src.path})`);
    }
  }
  return missing;
}

/* ---------- main ---------- */

if (!existsSync(INBOX)) {
  mkdirSync(INBOX, { recursive: true });
  console.log(`Created ${relative(ROOT, INBOX)}/ — drop generated files there and run this again.\n`);
}

const inboxFiles = readdirSync(INBOX).filter((f) => RASTER.includes(extname(f).toLowerCase()));

for (const fileName of inboxFiles) {
  const asset = matchAsset(fileName);
  if (!asset) {
    unmatched.push(fileName);
    continue;
  }

  const src = join(INBOX, fileName);
  const meta = await sharp(src).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  if (asset.assertsFact && asset.status === "WAITING_FOR_SOURCE_REFERENCE") {
    const missing = referencesSatisfied(asset);
    if (missing.length) {
      reject(
        fileName,
        asset,
        `this asset depicts a real person or real capacity, so it may only be generated ` +
          `from photographs. Missing references: ${missing.join(", ")}`
      );
      continue;
    }
  }

  const spec = parseResolution(asset.resolution);
  if (spec && (width < spec.width || height < spec.height)) {
    reject(
      fileName,
      asset,
      `${width}×${height} is below the specified ${asset.resolution}. Upscaling a ` +
        `generation loses the detail the slot was sized for — regenerate at spec.`
    );
    continue;
  }

  const wanted = parseRatio(asset.ratio);
  if (wanted && height > 0) {
    const got = width / height;
    if (Math.abs(got - wanted) / wanted > RATIO_TOLERANCE) {
      reject(
        fileName,
        asset,
        `aspect ratio ${got.toFixed(3)} does not match ${asset.ratio} ` +
          `(${wanted.toFixed(3)}). The crop-safe area was designed around that ratio, so ` +
          `the layout would crop into the composition.`
      );
      continue;
    }
  }

  const out = destinationPath(asset);
  const outExt = extname(out).toLowerCase();
  const replacing = existsSync(out);

  accepted.push({ fileName, asset, width, height, out, replacing, converted: extname(fileName).toLowerCase() !== outExt });

  if (DRY) continue;

  mkdirSync(dirname(out), { recursive: true });
  const pipeline = sharp(src);
  if (outExt === ".webp") await pipeline.webp({ quality: 82, effort: 6 }).toFile(out);
  else if (outExt === ".png") await pipeline.png({ compressionLevel: 9 }).toFile(out);
  else if (outExt === ".avif") await pipeline.avif({ quality: 55 }).toFile(out);
  else await pipeline.jpeg({ quality: 84, progressive: true, mozjpeg: true }).toFile(out);

  // Keep the original out of the way but do not delete it — a generation is not always
  // reproducible, and the file that arrived is the only copy of that particular roll.
  const keep = join(INBOX, "ingested");
  mkdirSync(keep, { recursive: true });
  renameSync(src, join(keep, fileName));
}

/* ---------- move the manifest on ---------- */

/**
 * Status becomes NEEDS VISUAL REVIEW, never INTEGRATED. The file is in place and the site
 * will render it, but nobody has looked at it — and "a script put it there" is not review.
 * qa.mjs surfaces every asset sitting in this state, so it stays visible until a person
 * either approves it or replaces it.
 */
if (!DRY && accepted.length) {
  let manifest = readFileSync(MANIFEST, "utf8");
  for (const { asset } of accepted) {
    // Anchor on the id so the rewrite cannot land on another entry's status line.
    const block = new RegExp(`(id:\\s*"${asset.id}"[\\s\\S]*?status:\\s*)"[^"]+"`);
    if (block.test(manifest)) {
      manifest = manifest.replace(block, `$1"NEEDS VISUAL REVIEW"`);
    } else {
      console.log(`  ! could not update the manifest row for ${asset.id} — edit it by hand`);
    }
  }
  writeFileSync(MANIFEST, manifest);
}

/* ---------- report ---------- */

const label = DRY ? "would ingest" : "ingested";
console.log(`\nAsset ingest${DRY ? " (dry run — nothing written)" : ""}\n`);

if (accepted.length) {
  console.log(`${accepted.length} ${label}:`);
  for (const a of accepted) {
    const notes = [
      `${a.width}×${a.height}`,
      a.converted ? `converted to ${extname(a.out).slice(1)}` : null,
      a.replacing ? "replaced an existing file" : null,
    ].filter(Boolean);
    console.log(`  + ${a.asset.id}  ${a.fileName} -> ${a.asset.destination}  (${notes.join(", ")})`);
  }
  console.log("");
}

if (rejected.length) {
  console.log(`${rejected.length} rejected:`);
  for (const r of rejected) console.log(`  x ${r.file} [${r.id}]\n      ${r.reason}`);
  console.log("");
}

if (unmatched.length) {
  console.log(`${unmatched.length} unrecognised — no manifest row has this filename:`);
  for (const u of unmatched) console.log(`  ? ${u}`);
  console.log(`  Expected names are listed in AI-ASSET-PACK/. Rename to match, or add a row.\n`);
}

const outstanding = GENERATED_ASSETS.filter(
  (a) => a.status === "NEEDS AI GENERATION" || a.status === "WAITING_FOR_SOURCE_REFERENCE"
);
if (outstanding.length) {
  console.log(`still outstanding (${outstanding.length}):`);
  for (const a of outstanding) {
    const why = a.status === "WAITING_FOR_SOURCE_REFERENCE" ? "needs your photographs first" : "ready to generate";
    console.log(`  · ${a.priority} ${a.id} — ${a.filename} — ${why}`);
  }
  console.log("");
}

if (!inboxFiles.length) {
  console.log(`asset-inbox/ is empty. Drop generated files there using the filenames the pack assigned.\n`);
}

if (accepted.length && !DRY) {
  console.log("Next: npm run images   (responsive variants)");
  console.log("      npm run verify   (build, QA and endpoint tests)\n");
}

// Rejections are a reason to look, not a reason to fail a build — this script is run by
// hand, and exiting non-zero on a bad generation would only obscure the report above.
process.exit(0);
