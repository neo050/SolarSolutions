/**
 * Loads src/data/assets.ts into a plain ES module.
 *
 * The manifest is authored in TypeScript so the site can import it with full type
 * checking; this strips the types at runtime so the pack generator can read the same
 * single source of truth rather than a duplicated copy.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(join(here, "..", "src", "data", "assets.ts"), "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;

const mod = await import("data:text/javascript;base64," + Buffer.from(js).toString("base64"));
export const { SOURCE_ASSETS, GENERATED_ASSETS, assetStats } = mod;
