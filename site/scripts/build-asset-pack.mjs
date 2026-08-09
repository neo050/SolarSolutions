/**
 * Emits /AI-ASSET-PACK/ from src/data/assets.ts.
 *
 * The pack is generated, never hand-maintained, so it cannot drift from what the site
 * actually renders. Run with `npm run pack`.
 *
 * Output:
 *   AI-ASSET-PACK/
 *     README.md                      how to run the batch, start to finish
 *     MANIFEST/asset-manifest.csv    every asset, one row — opens in Sheets
 *     MANIFEST/asset-manifest.json   same, machine-readable
 *     SOURCE-ASSETS/INVENTORY.md     every existing photo, catalogued
 *     SOURCE-ASSETS/<CATEGORY>/      drop folders for the photos still to come
 *     MISSING-ASSETS/missing.md      every gap, full spec
 *     PROMPTS/prompt-pack.md         a ready prompt per generatable asset
 *     PROMPTS/MASTER-PROMPT.md       the batch-production instruction
 *     STYLE-GUIDE/style-guide.md     one visual language across every generation
 *     OUTPUT-STRUCTURE/destinations.csv   filename → destination, for integration
 */
import { mkdirSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SITE = join(here, "..");
const OUT = join(SITE, "..", "AI-ASSET-PACK");

// The manifest is TypeScript; strip the types rather than pulling in a compiler.
const { SOURCE_ASSETS, GENERATED_ASSETS, assetStats } = await import(
  "./_load-assets.mjs"
);

const stats = assetStats();
const write = (rel, body) => {
  const p = join(OUT, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, body, "utf8");
  return rel;
};

const csvCell = (v) => {
  const s = Array.isArray(v) ? v.join(" | ") : String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csvRow = (cells) => cells.map(csvCell).join(",");

/* ===================================================================== README */
write(
  "README.md",
  `# RNRG — AI Asset Generation Pack

נוצר אוטומטית מ-\`site/src/data/assets.ts\`. אל תערוך ידנית — הרץ \`npm run pack\`.

## מצב נוכחי

| | |
|---|---|
| נכסי מקור קיימים | ${stats.sourceAvailable} |
| ממתינים להעלאה ממך | ${stats.awaitingUpload} |
| בבידוד | ${stats.quarantined} |
| נכסים לייצור | ${stats.generateTotal} |
| **ניתנים לייצור עכשיו** | **${stats.generatable}** |
| חסומים על צילום אמיתי | ${stats.blockedOnPhoto} |

## התהליך, מקצה לקצה

1. **העלה את החומרים שלך** לתיקיות תחת \`SOURCE-ASSETS/\`. כל תיקייה מכילה \`_README.md\`
   שאומר בדיוק מה נדרש שם ובאיזה מזהה.
2. **הרץ \`npm run pack\` שוב** — הקבצים החדשים נכנסים ל-Manifest.
3. **פתח \`PROMPTS/MASTER-PROMPT.md\`** והעלה למודל יחד עם:
   - כל התיקייה \`SOURCE-ASSETS/\`
   - \`MANIFEST/asset-manifest.json\`
   - \`STYLE-GUIDE/style-guide.md\`
   - \`PROMPTS/prompt-pack.md\`
4. **הרץ Batch.** המודל מחזיר קבצים בשמות שכבר נקבעו.
5. **החזר לנו את התיקייה** — כל קובץ יודע לאן הוא הולך לפי
   \`OUTPUT-STRUCTURE/destinations.csv\`.

## הכלל שקובע מה מותר לייצר

**AI מרחיב עולם ויזואלי. הוא לא קובע עובדות.**

מותר: מרקמים, רקעים, סצנות משלימות, קומפוזיציות, תמונות OG, עיבוד של חומר קיים.

אסור: תמונה שמתפקדת כטענה עובדתית — צוות בגודל שלא אומת, פרויקט שלא בוצע, אתר שלא
עבדנו בו, אדם אמיתי שאין לו צילום. ${stats.blockedOnPhoto} מהנכסים ברשימה מסומנים
\`BLOCKED ON REAL PHOTO\` בדיוק מהסיבה הזו, ולא נוצר עבורם Prompt — הם ממתינים לצילום.

הסיבה מעשית ולא רק עקרונית: תמונת צוות של חמישה אנשים שנוצרה ב-AI, מול קבלן ששואל
"כמה אנשים אתם מביאים לאתר", היא התחייבות שהעסק לא בהכרח יכול לעמוד בה.

## מה כבר תוקן בעקבות סקירת החומרים

- תמונה שהייתה **תמונת ה-Hero של דף הבית** הוסרה: היא כוללת מדבקה עם שם וטלפון של
  חשמלאי אחר. ראה \`SRC-PANEL-002\`.
- תמונה נוספת נגזרה כדי להסיר מספר טלפון של צד שלישי מקצה הפריים.
- לוח מסחרי בן 72 מודולים היה מתויג כ"עבודת חיווט" — הועלה לתמונה הראשית של ענף הקבלנות.
- התגלה שקיים תיעוד מלא של פרויקט מסחרי אמיתי, כולל שלב בנייה. הוא היה באתר ולא היה בשימוש.
`
);

/* ================================================================= MANIFEST */
const manifestRows = [
  csvRow([
    "Asset ID", "Category", "Existing/Generate", "Page", "Section", "Component",
    "Purpose", "Source References", "Reference Paths", "Ratio", "Resolution",
    "Crop Safe Area", "Final Filename", "Destination Path", "Alt Text",
    "Asserts Fact", "Priority", "Status",
  ]),
];

for (const a of SOURCE_ASSETS) {
  manifestRows.push(
    csvRow([
      a.id, a.category, "EXISTING", a.usedOn.join(" "), "-", "-",
      a.contains, "-", a.path, "-", a.dimensions, "-",
      a.path.split("/").pop(), a.path, "-", "-", "-", a.status,
    ])
  );
}

const pathOf = (id) => SOURCE_ASSETS.find((s) => s.id === id)?.path ?? "AWAITING UPLOAD";

for (const a of GENERATED_ASSETS) {
  manifestRows.push(
    csvRow([
      a.id, a.category, "GENERATE", a.page, a.section, a.component,
      a.purpose, a.references, a.references.map(pathOf), a.ratio, a.resolution,
      a.cropSafeArea, a.filename, a.destination, a.alt,
      a.assertsFact ? "YES — needs a real photograph" : "no", a.priority, a.status,
    ])
  );
}

write("MANIFEST/asset-manifest.csv", "﻿" + manifestRows.join("\n") + "\n");
write(
  "MANIFEST/asset-manifest.json",
  JSON.stringify({ generatedAt: null, stats, source: SOURCE_ASSETS, generate: GENERATED_ASSETS }, null, 2)
);

/* =========================================================== SOURCE INVENTORY */
const inv = [
  "# Source Asset Inventory",
  "",
  "כל תמונה שקיימת, ממופה לאחר פתיחה בפועל של הקובץ — לא לפי שם הקובץ.",
  "",
];
for (const a of SOURCE_ASSETS) {
  inv.push(`## ${a.id}`, "");
  inv.push(`| | |`, `|---|---|`);
  inv.push(`| קובץ | \`${a.path}\` |`);
  if (a.originalName) inv.push(`| שם מקורי | ${a.originalName} |`);
  inv.push(`| קטגוריה | ${a.category} |`);
  inv.push(`| מי מופיע | ${a.people} |`);
  inv.push(`| מה מופיע | ${a.contains} |`);
  inv.push(`| סוג עבודה | ${a.workType.join(", ")} |`);
  inv.push(`| איכות | ${a.quality} |`);
  inv.push(`| ממדים | ${a.dimensions} |`);
  inv.push(`| שימוש אפשרי | ${a.potentialUse.join(", ")} |`);
  inv.push(`| כרפרנס ל-AI | ${a.aiReference ? "כן" : "**לא**"} |`);
  inv.push(`| טיפול נדרש | ${a.treatment.length ? a.treatment.join(", ") : "—"} |`);
  inv.push(`| בשימוש ב | ${a.usedOn.length ? a.usedOn.join(", ") : "—"} |`);
  inv.push(`| סטטוס | **${a.status}** |`);
  inv.push("", `**הערות:** ${a.notes}`, "");
}
write("SOURCE-ASSETS/INVENTORY.md", inv.join("\n"));

/* Drop folders, each explaining exactly what belongs in it. */
const DROPS = {
  PERSON: ["SRC-RONI-001"],
  TEAM: ["SRC-TEAM-001"],
  CONTRACTING: ["SRC-SITE-001"],
  SOLAR: ["SRC-SOLARWORK-001"],
};
for (const [folder, ids] of Object.entries(DROPS)) {
  const wanted = SOURCE_ASSETS.filter((a) => ids.includes(a.id));
  write(
    `SOURCE-ASSETS/${folder}/_README.md`,
    [
      `# SOURCE-ASSETS/${folder}`,
      "",
      "העלה לכאן את הקבצים הבאים. שמור על המזהה בשם הקובץ, למשל `SRC-RONI-001-a.jpg`,",
      "`SRC-RONI-001-b.jpg` — כך המודל יודע לקשר בין כמה זוויות של אותו נושא.",
      "",
      ...wanted.flatMap((a) => [
        `## ${a.id}`,
        "",
        `**מה נדרש:** ${a.contains}`,
        "",
        `**למה:** ${a.notes}`,
        "",
        `**כמה:** 3–5 תמונות מזוויות שונות. ככל שיש יותר, כך הזהות עקבית יותר.`,
        "",
      ]),
      "## איכות מינימלית",
      "",
      "- לפחות 1600px בצד הארוך",
      "- אור יום או תאורת פנים סבירה, בלי פלאש ישיר",
      "- **בדוק לפני העלאה:** אין בפריים שם, טלפון או לוגו של צד שלישי.",
      "  זו בדיוק הסיבה שתמונה אחת כבר הוצאה מהאתר.",
      "",
    ].join("\n")
  );
}

/* =============================================================== MISSING LIST */
const miss = [
  "# Missing Visual Assets — מפרט מלא",
  "",
  `${stats.generateTotal} נכסים. ${stats.generatable} ניתנים לייצור עכשיו,`,
  `${stats.blockedOnPhoto} חסומים על צילום אמיתי.`,
  "",
];
for (const a of GENERATED_ASSETS) {
  miss.push(`---`, "", `## ${a.id}`, "");
  if (a.assertsFact) {
    miss.push(
      `> **חסום על צילום אמיתי.** ${a.factNote}`,
      "",
      "> לא נוצר עבורו Prompt.",
      ""
    );
  }
  miss.push("| שדה | ערך |", "|---|---|");
  miss.push(`| Page | \`${a.page}\` |`);
  miss.push(`| Section | ${a.section} |`);
  miss.push(`| Component | \`${a.component}\` |`);
  miss.push(`| Purpose | ${a.purpose} |`);
  miss.push(`| Scene | ${a.scene} |`);
  miss.push(`| People | ${a.people} |`);
  miss.push(`| Environment | ${a.environment} |`);
  miss.push(`| Composition | ${a.composition} |`);
  miss.push(`| Camera | ${a.camera} |`);
  miss.push(`| Lighting | ${a.lighting} |`);
  miss.push(`| References | ${a.references.map((r) => `\`${r}\``).join(" + ")} |`);
  miss.push(`| Ratio | ${a.ratio} |`);
  miss.push(`| Resolution | ${a.resolution} |`);
  miss.push(`| **Crop Safe Area** | ${a.cropSafeArea} |`);
  miss.push(`| Final Filename | \`${a.filename}\` |`);
  miss.push(`| Destination | \`${a.destination}\` |`);
  miss.push(`| Alt Text | ${a.alt || "— (דקורטיבי)"} |`);
  miss.push(`| Priority | ${a.priority} |`);
  miss.push(`| Status | **${a.status}** |`);
  miss.push("");
}
write("MISSING-ASSETS/missing-visual-assets.md", miss.join("\n"));

/* ================================================================= PROMPTS */
function buildPrompt(a) {
  const refs = a.references
    .map((r) => {
      const src = SOURCE_ASSETS.find((s) => s.id === r);
      return `  - ${r} — ${src ? src.contains.slice(0, 110) : "AWAITING UPLOAD"}`;
    })
    .join("\n");

  return `### ${a.id}

**Filename to return:** \`${a.filename}\`
**Aspect ratio:** ${a.ratio} · **Resolution:** ${a.resolution}

**Reference images to use (attached):**
${refs}

**המפרט (לקריאה שלך):** ${a.scene} · ${a.environment} · ${a.composition}

**Prompt (paste this):**

> Photorealistic documentary photograph for an Israeli electrical contracting company.
>
> ${a.promptEn}
>
> Style: honest working documentary, not a stock photo. Real materials, real wear on
> surfaces, natural imperfection. Muted realistic colour, no orange-teal grade, no
> lens flare, no artificial glow.
> Match the reference images for equipment type, clothing and environment.
> **Framing constraint (this is not optional — it fills a fixed slot in a built
> layout): ${a.cropSafeAreaEn ?? a.cropSafeArea}**
> Negative: no text, no logos, no brand names, no phone numbers, no readable signage,
> no identifiable faces other than those in the references, no over-saturated colour,
> no plastic skin, no impossible wiring, no unsafe practice, no missing PPE.

`;
}

const prompts = [
  "# Prompt Pack",
  "",
  "Prompt מוכן לכל נכס שמותר לייצר. העתק, צרף את תמונות ה-Reference, הרץ.",
  "",
  `נכסים שמסומנים \`BLOCKED ON REAL PHOTO\` אינם מופיעים כאן בכוונה —`,
  "הם דורשים צילום ולא ייצור.",
  "",
];
for (const a of GENERATED_ASSETS.filter((x) => !x.assertsFact)) {
  prompts.push(buildPrompt(a));
}
write("PROMPTS/prompt-pack.md", prompts.join("\n"));

/* ============================================================ MASTER PROMPT */
write(
  "PROMPTS/MASTER-PROMPT.md",
  `# Master AI Asset Generation Prompt

העלה למודל את כל אלה יחד, ואז הדבק את ההוראה שלמטה:

1. את התיקייה \`SOURCE-ASSETS/\` במלואה
2. \`MANIFEST/asset-manifest.json\`
3. \`STYLE-GUIDE/style-guide.md\`
4. \`PROMPTS/prompt-pack.md\`

---

## ההוראה

You are producing a batch of photographic assets for RNRG, an Israeli electrical
contracting and solar business. Work through the manifest systematically. Do not skip
entries and do not reorder them.

**Read the manifest first.** \`asset-manifest.json\` has two arrays. \`source\` is the
photographs that already exist — these are your reference material. \`generate\` is what
you are producing. Each generate entry names the exact \`references\` it must be built
from, by Asset ID; those IDs correspond to files in \`SOURCE-ASSETS/\`.

**Honour the hard constraint.** Any entry with \`"assertsFact": true\` must be SKIPPED.
Report it as skipped and move on. Those images would function as factual claims about the
business — crew size, track record, a real person's face — and must come from a camera.
There is no prompt for them in the prompt pack. Do not improvise one.

**For every remaining entry, in order:**

1. Load the reference images named in \`references\`.
2. Apply \`STYLE-GUIDE/style-guide.md\` in full. Every asset in this batch must look like
   it came from the same photographer on the same job.
3. Use the matching prompt from \`prompt-pack.md\` verbatim as the base.
4. Produce at the exact \`ratio\` and \`resolution\` in the manifest. Do not substitute a
   convenient aspect ratio — these fill fixed slots in a built layout.
5. **Respect \`cropSafeArea\` literally.** It records where text sits in the real design
   and where mobile crops the frame. An image that ignores it is unusable even if it is
   beautiful.
6. Return the file named exactly \`filename\`. Not \`image1.png\`. The filename is how the
   asset finds its way back into the site without anyone having to ask.

**Identity consistency.** Where several assets share a reference person, that person must
be recognisably the same individual across all of them — same face, same build, same
working clothes. Inconsistent identity across a site reads as fake faster than any
single flaw.

**Materials consistency.** Israeli electrical work has a specific look: CHINT and ABB and
Hager breakers on DIN rail, white plastic consumer units, Hebrew label tape, plaster and
block walls, corrugated conduit. Match the references. Do not produce American-style
breaker panels or European sockets.

**When you finish**, output a table: Asset ID · produced / skipped · filename · one line
on any deviation from the spec and why.
`
);

/* ================================================================ STYLE GUIDE */
write(
  "STYLE-GUIDE/style-guide.md",
  `# RNRG Visual AI Style Guide

מסמך אחד שכל Generation נשען עליו, כדי שכל תמונה באתר תרגיש מאותו עולם.

## הרעיון המרכזי

**תיעוד עבודה, לא צילום סטוק.**

העסק הזה מוכר יכולת ביצוע. תמונה מלוטשת מדי מרחיקה בדיוק את הקהל שהיא אמורה לשכנע —
קבלן מזהה סטוק בשנייה, וזה גורם לו לפקפק בכל השאר. הכיוון הוא צילום עיתונאי־תיעודי:
נקי, מקצועי, אבל של עבודה אמיתית.

## פוטוגרפיה

| | |
|---|---|
| סגנון | דוקומנטרי, לא מבוים |
| ריאליזם | פוטוריאליסטי מלא |
| עדשות | 24–35 מ״מ לסצנות, 50–85 מ״מ לדיוקנאות |
| עומק שדה | בינוני. רקע קריא, לא מטושטש לגמרי |
| זווית | גובה עיניים או גובה חזה. להימנע מזוויות דרמטיות |
| תאורה | אור יום טבעי, או תאורת עבודה קיימת. ללא פלאש ישיר |
| ניגודיות | בינונית. צללים נשארים עם פרטים |

## צבע

הצבעים חייבים להתיישב עם ה-Design System של האתר:

- **כחול־שחור של פאנל** \`#0E2C33\` — לוחות, ציוד, בגדי עבודה
- **נחושת** \`#B87333\` — מוליכים, פסי צבירה, הדגשות
- **אפור מגולוון** — תעלות, מובילים, ארונות
- אור יום ניטרלי. **בלי** grade כתום־טורקיז, בלי HDR, בלי סטורציה מוגזמת

## אנשים

- ביגוד עבודה אמיתי, לא חדש מהאריזה
- **ציוד מגן חובה בכל סצנה שדורשת אותו.** תמונה שמציגה עבודה לא בטיחותית פוגעת
  בדיוק בטענה שהאתר מנסה לבסס
- ידיים עובדות, לא פוזה למצלמה
- שמירת זהות עקבית לחלוטין בין תמונות

## סביבות

| הקשר | סביבה |
|---|---|
| חשמל פרטי | דירה או בית, לוח על קיר, גמר קיים |
| קבלני | שלד בטון, קירות בלוקים, גבס פתוח, סולמות, תוכניות |
| מסחרי | חלל מסחרי בגמר, תקרה אקוסטית או גבס, תאורה שקועה |
| סולארי | גג רעפים, גג שטוח, סככה, מבנה חקלאי |

## ציוד — חייב להיות ישראלי־נכון

זה הפרט שהכי מסגיר תמונה שנוצרה בחו״ל:

- מאמתים על מסילת DIN — CHINT, ABB, Hager
- ארונות פלסטיק לבנים, לא ארגזי מתכת אמריקאיים
- **שקעים ישראליים** (SI 32 / Type H), לא אמריקאיים ולא בריטיים
- 230V חד-פאזי, 400V תלת-פאזי
- סרט תיוג בעברית
- צנרת שרשורית כתומה או אפורה
- קירות בלוקים וטיח, לא drywall אמריקאי על סטדים

## אסור בכל תמונה

- טקסט, לוגו, שם מותג או מספר טלפון קריא
- שילוט מזוהה של לקוח ללא אישור
- פרצוף מזוהה שאינו מבוסס על רפרנס מאושר
- עבודה לא בטיחותית — היעדר ציוד מגן, עמידה על משהו לא יציב, חיווט חשוף תחת מתח
- חיווט שאינו הגיוני פיזית
- ניצוצות, זוהר, ברקים — קלישאות של "חשמל" שמוזילות את התדמית
- ערבוב סגנונות: כל התמונות בבאטץ׳ חייבות להיראות מאותו יום צילום

## התאמה ל-Design System

- תמונות Hero נחתכות ל-4:3 או 16:9 ומקבלות טקסט מעל — לכן צריך שטח שקט
- כרטיסים נחתכים ל-4:3 מהמרכז
- OG נחתך לריבוע מהמרכז בוואטסאפ
- כל \`cropSafeArea\` ב-Manifest נגזר מהעיצוב האמיתי. הוא לא המלצה.
`
);

/* =========================================================== DESTINATIONS */
const dest = [csvRow(["Asset ID", "Final Filename", "Destination Path", "Alt Text", "Status"])];
for (const a of GENERATED_ASSETS) {
  dest.push(csvRow([a.id, a.filename, a.destination, a.alt, a.status]));
}
write("OUTPUT-STRUCTURE/destinations.csv", "﻿" + dest.join("\n") + "\n");

/*
 * Copy source photos into the pack so it is self-contained — but ONLY those cleared as
 * AI references.
 *
 * Two exclusions matter, and both were caught by the first run putting files here that
 * should never reach a generation model:
 *   - QUARANTINED assets. One carries another electrician's name and phone number;
 *     handing it to a model as reference material would propagate it into new images.
 *   - Customer portraits. Those people consented to a testimonial on a website, not to
 *     having their face used as training or reference input.
 */
let copied = 0;
const excluded = [];
for (const a of SOURCE_ASSETS) {
  if (!a.path.startsWith("/images/")) continue;
  if (a.status === "QUARANTINED") {
    excluded.push(`${a.id} — quarantined`);
    continue;
  }
  if (!a.aiReference) {
    excluded.push(`${a.id} — not cleared as an AI reference`);
    continue;
  }
  const from = join(SITE, "public", a.path.replace(/^\//, ""));
  if (!existsSync(from)) continue;
  const to = join(OUT, "SOURCE-ASSETS", a.category, `${a.id}${a.path.slice(a.path.lastIndexOf("."))}`);
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
  copied++;
}

console.log(`AI-ASSET-PACK written to ${OUT}`);
console.log(`  source catalogued : ${stats.sourceTotal} (${copied} cleared for reference)`);
for (const e of excluded) console.log(`    excluded        : ${e}`);
console.log(`  awaiting upload   : ${stats.awaitingUpload}`);
console.log(`  quarantined       : ${stats.quarantined}`);
console.log(`  to generate       : ${stats.generateTotal}`);
console.log(`    generatable now : ${stats.generatable}`);
console.log(`    needs a camera  : ${stats.blockedOnPhoto}`);
