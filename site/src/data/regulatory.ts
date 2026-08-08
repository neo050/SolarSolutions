/**
 * Verified regulatory facts.
 *
 * Sourced from the market research in docs/research/market-research-2026-08.md, restricted
 * to items the research marked confidence = HIGH with a named official source.
 *
 * ── EXCLUDED ON PURPOSE ───────────────────────────────────────────────────────
 * Anything the research flagged LOW or MEDIUM confidence is absent, including:
 *   · ת"י 1424 — could not be verified as an existing standard. Israeli panels are built
 *     to ת"י 61439, which superseded 1419. Several competitor sites cite 1424; repeating
 *     an unverifiable standard number is exactly the kind of borrowed error that destroys
 *     credibility with a professional reader.
 *   · Thermographic inspection intervals / ת"י 1525 — widely repeated, no official source.
 *   · Licence validity period — commonly stated as 3 years, not confirmed on gov.il.
 *   · Any price, tariff or payback figure.
 *
 * Tariffs are excluded even though the research verified them: they change by regulatory
 * decision, and a stale number on a service page is worse than no number. Explain the
 * mechanism, quote no figure.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Licence classes under תקנות החשמל (רישיונות), התשמ"ה-1985.
 *
 * This is the strongest verifiable differentiator available. The research found that
 * seven of ten competitors claim to be a "חשמלאי ראשי" without ever showing a licence
 * number, and none explain what the grade actually permits. Publishing the number and
 * the scope is checkable, and it reframes the licence from a label into a capability.
 *
 * Note the second column: a חשמלאי ראשי may DESIGN as well as EXECUTE up to 3x250A.
 * Most competitors present themselves as installers only.
 */
export const LICENCE_CLASSES = [
  { grade: "חשמלאי עוזר", scope: "עבודת עזר בלבד, בפיקוח", capacity: "—", isOurs: false },
  { grade: "חשמלאי מעשי", scope: "ביצוע ותכנון", capacity: "1×40A", isOurs: false },
  { grade: "חשמלאי מוסמך", scope: "ביצוע ותכנון", capacity: "3×80A", isOurs: false },
  { grade: "חשמלאי ראשי", scope: "ביצוע ותכנון", capacity: "3×250A", isOurs: true },
  { grade: "חשמלאי הנדסאי", scope: "ביצוע ותכנון", capacity: "3×400A", isOurs: false },
  { grade: "חשמלאי טכנאי", scope: "ביצוע ותכנון", capacity: "3×630A", isOurs: false },
  { grade: "חשמלאי מהנדס", scope: "ביצוע ותכנון", capacity: "ללא הגבלה", isOurs: false },
] as const;

export const LICENCE_NOTE =
  "הדרגה קובעת את גודל החיבור שמותר לתכנן ולבצע. מעבר לתקרה שברישיון נדרש בעל רישיון בדרגה " +
  "מתאימה — ולכן כדאי לוודא מול כל בעל מקצוע שהדרגה שלו מכסה את גודל החיבור בפרויקט שלכם.";

/**
 * Statutory periodic inspection intervals for businesses and public buildings.
 * Source: חוזר מהנדס ראשי, 20.9.2010 (מ2010-3977).
 *
 * No competitor site examined published this. It is genuinely useful, it is checkable,
 * and it converts: a business owner who learns their interval has lapsed has a reason to
 * act today.
 */
export const INSPECTION_INTERVALS = [
  { subject: "מבנה או עסק עד 200 מ״ר", licensed: "כל 5 שנים", inspector: "—" },
  { subject: "200–500 מ״ר", licensed: "כל שנתיים", inspector: "—" },
  { subject: "מעל 500 מ״ר", licensed: "כל שנה", inspector: "כל 5 שנים" },
  { subject: "מבנה או עסק עם קהל מבקרים", licensed: "כל שנה", inspector: "כל 5 שנים" },
  { subject: "תחנת תדלוק", licensed: "—", inspector: "כל 5 שנים" },
  { subject: "מפעל מסוכן — אתר רעילים A", licensed: "כל שנה", inspector: "כל שנה" },
  { subject: "מפעל מסוכן — אתר רעילים B", licensed: "כל שנתיים", inspector: "כל 5 שנים" },
  { subject: "מפעל מסוכן — אתר רעילים C", licensed: "כל 3 שנים", inspector: "כל 5 שנים" },
] as const;

export const INSPECTION_SOURCE = "חוזר מהנדס ראשי, משרד העבודה — 20.9.2010 (מ2010-3977)";

/**
 * Facts about solar work that are both verified and commercially useful, because they
 * describe the seam most solar companies avoid.
 *
 * The research found solar installers routinely subcontract the electrical connection and
 * disclaim responsibility for it. A business that holds the electrician's licence itself
 * closes that seam — which is a real, defensible position rather than a slogan.
 */
export const SOLAR_FACTS = [
  {
    id: "pv-requires-licence",
    fact:
      "תכנון, התקנה וחיבור של מתקן פוטו-וולטאי מחייבים בעל רישיון חשמלאי. מי שאינו חשמלאי " +
      "רשאי לבצע רק עבודות שאינן עבודות חשמל — פירוק, בניית גג או התקנת מבנה נשיאה — ורק בפיקוח חשמלאי.",
    source: "חוק החשמל, התשי״ד-1954 ותקנות החשמל",
  },
  {
    id: "single-phase-limit",
    fact:
      "הספק מתקן פוטו-וולטאי בחיבור חד-פאזי מוגבל ל-5 קילוואט. מערכת גדולה יותר מחייבת מעבר לחיבור תלת-פאזי.",
    source: "תקנות החשמל",
  },
  {
    id: "permit-exemption",
    fact:
      "קיים פטור מהיתר בנייה למתקנים העומדים בתנאים מסוימים — בהם הספק DC עד 700 קילוואט, " +
      "התקנה לפי ת״י 62548, וללא חריגה מהיקף הגג. עמידה בתנאים נבדקת פרטנית לכל נכס.",
    source: "תקנות התכנון והבנייה (עבודות ומבנים הפטורים מהיתר), התשע״ד-2014",
  },
  {
    id: "grid-outage",
    fact:
      "מערכת מחוברת רשת ללא אגירה מפסיקה לייצר בהפסקת חשמל, מדרישת התקן — כדי למנוע הזנה " +
      "לרשת בזמן עבודת אנשי תחזוקה. גיבוי בהפסקה מחייב ממיר היברידי ולוח מגובה נפרד.",
    source: "דרישות חיבור ותקינה",
  },
  {
    id: "earthing",
    fact:
      "אסור להשתמש בצנרת מים כמקור הארקה במתקן פוטו-וולטאי. במתקן קיים שבו הצנרת משמשת " +
      "כהארקה, נדרשת התקנת מערכת הארקה חלופית.",
    source: "תקנות החשמל (הארקות ואמצעי הגנה)",
  },
] as const;

/** Documents a main contractor's procurement typically asks for. */
export const SUPPLIER_PACK = [
  { item: "רישיון חשמלאי ראשי", status: "available" as const, detail: "מס׳ 991433" },
  { item: "תעודת עוסק / ניכוי מס במקור", status: "pending" as const, gapId: "fact.insurance" },
  { item: "אישור ניהול ספרים", status: "pending" as const, gapId: "fact.insurance" },
  { item: "ביטוח צד ג׳ וחבות מעבידים", status: "pending" as const, gapId: "fact.insurance" },
  { item: "ביטוח עבודות קבלניות", status: "pending" as const, gapId: "fact.insurance" },
  { item: "רישום בפנקס הקבלנים", status: "pending" as const, gapId: "fact.contractor-registry" },
];
