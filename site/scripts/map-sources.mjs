/**
 * Auto-mapping for uploaded source photographs.
 *
 *     npm run assets:map              measure, route and draft rows for source-inbox/
 *     npm run assets:map -- --write   also copy the files to their destinations
 *
 * The owner drops photographs into source-inbox/, optionally under a category folder
 * (PERSON, TEAM, CONTRACTING, SOLAR, ELECTRICAL, PROJECT). This measures each one, works
 * out whether it fills a slot the manifest is already waiting on, assigns it an id, an
 * ASCII filename and a destination, checks it for the things that must never ship, and
 * prints a manifest row ready to paste into src/data/assets.ts.
 *
 * ── WHAT THIS DOES NOT DO ────────────────────────────────────────────────────
 * It does not describe the photograph, and it does not clear it.
 *
 * The most valuable finding of the whole asset audit came from opening the files: the
 * homepage and contracting hero both carried a sticker reading "חשמלאי מוסמך · רוני
 * בורוכוב · 058-5442623" — a different electrician's name and phone number — and a second
 * photograph had a third-party number on a toolbox edge. No filename, dimension or hash
 * would have surfaced either. Two of the report's own gap entries were also wrong, and
 * only looking corrected them.
 *
 * So every new photograph lands as NEEDS REVIEW with a checklist attached, and the
 * description fields are left as questions rather than guesses. This automates the
 * measuring, the naming, the routing and the duplicate check. The looking stays manual,
 * because that is the part that has actually caught things.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { readdirSync, existsSync, mkdirSync, statSync, copyFileSync } from "node:fs";
import { join, extname, basename, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { SOURCE_ASSETS } from "./_load-assets.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, "..");
const INBOX = join(ROOT, "source-inbox");
const WRITE = process.argv.includes("--write");
const RASTER = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".heic", ".tif", ".tiff"];

/** Category folder -> where files of that category are served from. */
const DESTINATIONS = {
  PERSON: "public/images/person",
  TEAM: "public/images/team",
  CONTRACTING: "public/images/contracting",
  SOLAR: "public/images/solar",
  ELECTRICAL: "public/images/gallery",
  PROJECT: "public/images/projects",
  UNSORTED: "public/images/gallery",
};

/**
 * The audit checklist, in the order it is worth reading. Every item here corresponds to
 * something that has actually turned up in this project's own photographs or is a
 * standing condition of using someone else's premises.
 */
const REVIEW_CHECKLIST = [
  "phone number anywhere in frame — on a sticker, a van, a toolbox, a noticeboard",
  "another tradesperson's name, licence number or business card",
  "a logo, brand mark or watermark, including on equipment and packaging",
  "readable text of any kind — labels, documents, delivery notes, screens",
  "a person whose permission to appear has not been confirmed",
  "a client's brand, signage or interior that identifies their business",
  "anything identifying a client's address, or a house number on a door",
];

/* ---------- measuring ---------- */

/**
 * Average hash. Downscale to 8×8 greyscale, threshold each pixel against the mean, read
 * the bits as hex. Two photographs of the same scene at different sizes or compression
 * levels produce the same or a near-identical hash, which is what catches a re-upload
 * under a new filename — the failure mode that quietly produces two manifest rows for one
 * picture.
 */
async function averageHash(file) {
  const px = await sharp(file).greyscale().resize(8, 8, { fit: "fill" }).raw().toBuffer();
  const mean = px.reduce((a, b) => a + b, 0) / px.length;
  let bits = "";
  for (const v of px) bits += v >= mean ? "1" : "0";
  return BigInt("0b" + bits).toString(16).padStart(16, "0");
}

function hamming(a, b) {
  let d = 0;
  let x = BigInt("0x" + a) ^ BigInt("0x" + b);
  while (x) {
    d += Number(x & 1n);
    x >>= 1n;
  }
  return d;
}

/** Enough pixels for the use, judged against what each slot actually needs. */
function assessQuality(width, height) {
  const px = width * height;
  if (px >= 2_000_000) return "high";
  if (px >= 700_000) return "medium";
  return "low";
}

function ratioLabel(width, height) {
  const g = (a, b) => (b ? g(b, a % b) : a);
  const d = g(width, height);
  const w = width / d;
  const h = height / d;
  // Reduce awkward fractions like 1248:936 to something readable.
  return w <= 40 && h <= 40 ? `${w}:${h}` : (width / height).toFixed(2) + ":1";
}

/**
 * ASCII, lowercase, hyphenated. The manifest already records an `originalName` for every
 * photograph because the first batch arrived as "לוח חשמל 1.jpeg" — Hebrew filenames
 * survive a local checkout and then break somewhere between a CDN, a URL encoder and a
 * build cache. Renaming on the way in stops that recurring.
 */
function asciiName(original, category, index) {
  const ext = extname(original).toLowerCase() === ".jpg" ? ".jpeg" : extname(original).toLowerCase();
  const stem = basename(original, extname(original))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const prefix = category.toLowerCase();
  return /^[a-z0-9-]+$/.test(stem) && stem.length > 2
    ? `${stem}${ext}`
    : `${prefix}-${String(index).padStart(2, "0")}${ext}`;
}

/* ---------- main ---------- */

if (!existsSync(INBOX)) {
  mkdirSync(INBOX, { recursive: true });
  for (const cat of Object.keys(DESTINATIONS)) {
    if (cat !== "UNSORTED") mkdirSync(join(INBOX, cat), { recursive: true });
  }
  console.log(`Created source-inbox/ with a folder per category. Drop photographs in and run again.\n`);
}

/** Every file in the inbox, tagged with the category folder it was dropped into. */
function collect(dir, category) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      const cat = DESTINATIONS[entry.toUpperCase()] ? entry.toUpperCase() : category;
      out.push(...collect(full, cat));
    } else if (RASTER.includes(extname(entry).toLowerCase())) {
      out.push({ file: full, category });
    }
  }
  return out;
}

const uploads = collect(INBOX, "UNSORTED");

/** Hash everything already catalogued, so a re-upload is recognised rather than duplicated. */
const known = [];
for (const a of SOURCE_ASSETS) {
  const p = a.path.startsWith("/quarantine/")
    ? join(ROOT, a.path.replace(/^\//, ""))
    : join(ROOT, "public", a.path.replace(/^\//, ""));
  if (!existsSync(p)) continue;
  known.push({ id: a.id, status: a.status, hash: await averageHash(p) });
}

const mapped = [];

for (const [i, { file, category }] of uploads.entries()) {
  const meta = await sharp(file).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  const hash = await averageHash(file);

  // 3 bits of difference is comfortably inside "the same photograph, re-encoded", while
  // staying well clear of two different photographs of the same panel.
  const duplicate = known.find((k) => hamming(k.hash, hash) <= 3);

  // Does it fill a slot the manifest is already waiting on? Category is the only signal
  // available without looking at the image, so the match is proposed, never assumed.
  const awaiting = SOURCE_ASSETS.find(
    (a) => a.status === "AWAITING UPLOAD" && a.category === category
  );

  const dest = DESTINATIONS[category] ?? DESTINATIONS.UNSORTED;
  const name = asciiName(basename(file), category, i + 1);

  mapped.push({
    file,
    category,
    width,
    height,
    hash,
    duplicate,
    awaiting,
    meta,
    renamed: name !== basename(file),
    name,
    dest,
    servedAt: "/" + relative("public", dest).split("\\").join("/") + "/" + name,
  });
}

/* ---------- write ---------- */

if (WRITE) {
  for (const m of mapped) {
    if (m.duplicate) continue;
    mkdirSync(join(ROOT, m.dest), { recursive: true });
    copyFileSync(m.file, join(ROOT, m.dest, m.name));
  }
}

/* ---------- report ---------- */

console.log(`\nSource asset mapping${WRITE ? "" : " (report only — pass --write to copy files)"}\n`);

if (!uploads.length) {
  console.log("source-inbox/ is empty.\n");
  const waiting = SOURCE_ASSETS.filter((a) => a.status === "AWAITING UPLOAD");
  if (waiting.length) {
    console.log(`${waiting.length} slots are waiting on a photograph:`);
    for (const a of waiting) {
      console.log(`  · ${a.id} [${a.category}] — drop into source-inbox/${a.category}/`);
      console.log(`      ${a.contains.split("\n")[0]}`);
    }
    console.log("");
  }
  process.exit(0);
}

for (const m of mapped) {
  console.log(`${basename(m.file)}`);

  if (m.duplicate) {
    console.log(
      `  = already catalogued as ${m.duplicate.id} (${m.duplicate.status}) — same image, ` +
        `not re-added. Delete it from the inbox, or rename the manifest row if this is ` +
        `meant to replace it.\n`
    );
    continue;
  }

  console.log(`  category   ${m.category}${m.category === "UNSORTED" ? "  (dropped in the root — move it into a category folder for a better match)" : ""}`);
  console.log(`  measured   ${m.width}×${m.height}  ${ratioLabel(m.width, m.height)}  ${m.meta.format}  ${(statSync(m.file).size / 1024).toFixed(0)}KB  quality: ${assessQuality(m.width, m.height)}`);

  // Camera metadata travels with phone photographs and carries GPS. A client's home
  // coordinates are not ours to publish. Nothing currently in public/ retains any, and
  // this is what keeps that true.
  const carried = [
    m.meta.exif && `EXIF ${m.meta.exif.length}B`,
    m.meta.xmp && "XMP",
    m.meta.icc && "ICC",
  ].filter(Boolean);
  if (carried.length) {
    console.log(
      `  metadata   ${carried.join(", ")} — may include GPS coordinates and device ` +
        `details. Re-encoding through npm run images strips it; a straight copy does not.`
    );
  }

  if (m.renamed) console.log(`  renamed    ${basename(m.file)} -> ${m.name}   (ASCII, so it survives URLs and caches)`);
  console.log(`  ${WRITE ? "copied to " : "would go to"} ${m.servedAt}`);

  if (m.awaiting) {
    console.log(`  fills      ${m.awaiting.id}, which is AWAITING UPLOAD — confirm it matches:`);
    console.log(`             "${m.awaiting.contains.split("\n")[0]}"`);
  } else if (m.category !== "UNSORTED") {
    console.log(`  fills      no pending slot in this category — this is a new entry`);
  }

  console.log(`  review     before this can be used anywhere, check for:`);
  for (const item of REVIEW_CHECKLIST) console.log(`               [ ] ${item}`);

  console.log(`\n  manifest row — paste into SOURCE_ASSETS in src/data/assets.ts:`);
  console.log(`  {`);
  console.log(`    id: "${m.awaiting ? m.awaiting.id : `SRC-${m.category}-XXX`}",`);
  console.log(`    category: "${m.category === "UNSORTED" ? "ELECTRICAL" : m.category}",`);
  console.log(`    path: "${m.servedAt}",`);
  if (m.renamed) console.log(`    originalName: "${basename(m.file)}",`);
  console.log(`    people: "", // who is visible, or "ללא אנשים"`);
  console.log(`    contains: "", // what is actually in frame — from looking, not from the filename`);
  console.log(`    workType: [], // private | contracting | solar | electrical`);
  console.log(`    quality: "${assessQuality(m.width, m.height)}",`);
  console.log(`    dimensions: "${m.width}×${m.height}",`);
  console.log(`    potentialUse: [],`);
  console.log(`    aiReference: false, // true only once the checklist above is clear`);
  console.log(`    treatment: [],`);
  console.log(`    notes: "",`);
  console.log(`    status: "NEEDS REVIEW",`);
  console.log(`    usedOn: [],`);
  console.log(`  },`);
  console.log("");
}

const fresh = mapped.filter((m) => !m.duplicate).length;
const dupes = mapped.length - fresh;
console.log(
  `${mapped.length} photograph${mapped.length === 1 ? "" : "s"}: ${fresh} new, ${dupes} already catalogued.`
);
console.log(
  `Every new one is NEEDS REVIEW. Nothing becomes a reference for AI generation, and ` +
    `nothing appears on the site, until someone has opened it and cleared the checklist.\n`
);
