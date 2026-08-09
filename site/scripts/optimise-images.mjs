/**
 * Generates the narrow variants that `srcset` refers to.
 *
 * Run with `npm run images` after adding or replacing any photograph in
 * public/images/gallery or public/images/projects.
 *
 * Why a script rather than a one-off: srcset URLs are built by string substitution
 * (`foo.jpeg` -> `foo-800w.jpeg`), so a hero image without its variant produces a
 * candidate that silently 404s and the browser quietly falls back. The QA suite now
 * fails the build on that, and this script is what makes the check pass — together they
 * mean adding an image can no longer half-break responsive loading.
 *
 * Idempotent: existing variants are skipped unless the source is newer.
 */
import { readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const ROOTS = [
  join(here, "..", "public", "images", "gallery"),
  join(here, "..", "public", "images", "projects"),
];

/** The one narrow step. A phone at 2x needs ~800px for a full-bleed hero. */
const WIDTH = 800;
const SUFFIX = `-${WIDTH}w`;

let made = 0;
let skipped = 0;
let tooSmall = 0;

for (const root of ROOTS) {
  if (!existsSync(root)) continue;

  for (const name of readdirSync(root)) {
    const ext = extname(name).toLowerCase();
    if (![".jpg", ".jpeg", ".webp", ".png"].includes(ext)) continue;
    if (basename(name, ext).endsWith(SUFFIX)) continue; // already a variant

    const src = join(root, name);
    const out = join(root, basename(name, ext) + SUFFIX + ext);

    const meta = await sharp(src).metadata();
    if ((meta.width ?? 0) <= WIDTH) {
      // Upscaling would produce a larger file than the original — pointless.
      tooSmall++;
      continue;
    }

    if (existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) {
      skipped++;
      continue;
    }

    const pipeline = sharp(src).resize({ width: WIDTH, withoutEnlargement: true });
    if (ext === ".webp") await pipeline.webp({ quality: 76, effort: 6 }).toFile(out);
    else if (ext === ".png") await pipeline.png({ compressionLevel: 9 }).toFile(out);
    else await pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(out);

    made++;
    console.log(`  + ${basename(out)}`);
  }
}

console.log(
  `\n${made} variants generated · ${skipped} up to date · ${tooSmall} already at or below ${WIDTH}px`
);
