/**
 * The Missing Assets & Content Report, as data.
 *
 * The brief requires that missing material never stalls the build: design and structure
 * the page correctly, mark the hole, keep going. This registry is how that works in
 * practice — a page renders <Pending id="..."/> where a fact or asset is missing, the
 * component looks the gap up here, and /internal/gaps/ renders the whole set as a live
 * report the owner can work through.
 *
 * Because the report is generated from the same ids the pages consume, it cannot drift:
 * remove a <Pending> and the entry shows as unused; add one with an unknown id and the
 * build fails.
 */

export type Category =
  | "business-fact"
  | "copy"
  | "photo"
  | "video"
  | "case-study"
  | "testimonial"
  | "logo"
  | "credential"
  | "seo"
  | "integration";

export type Priority = "P0" | "P1" | "P2";
export type Status = "missing" | "requested" | "received" | "ai-filled" | "not-relevant";
export type Owner = "business-owner" | "client" | "studio" | "ai" | "research";

export interface Gap {
  id: string;
  page: string;
  category: Category;
  /** Exactly what is missing — never "more content". */
  what: string;
  /** Why the site needs it. */
  why: string;
  source: Owner;
  /** Must this be real, or can it be generated? */
  needsTruth: boolean;
  aiFillable: "yes" | "partial" | "no";
  priority: Priority;
  status: Status;
  /** What specifically closes this gap. */
  closes: string;
  /** Ids of gaps that must close first. */
  dependsOn?: string[];
}

export const GAPS: Gap[] = [
  /* ---------------------------------------------------------------- people */
  {
    id: "photo.owner.portrait",
    page: "/ · /about/",
    category: "photo",
    what: "צילום של רוני — פנים, ביגוד עבודה, סביבה אמיתית, קשר עין. יחס 4:5, לפחות 1600px בצד הארוך.",
    why: "אין ולו תמונה אחת של אדם בכל 78 הנכסים של האתר. אתר שירות ללא פנים לא מייצר אמון, ובענף הקבלני זה קריטי.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "צילום אחד. גם בטלפון, באור יום, על רקע נקי — עדיף על כלום.",
  },
  {
    id: "photo.team.onsite",
    page: "/contracting/",
    category: "photo",
    what: "צוות עובדים בשטח — לפחות שני אנשים, ציוד נראה לעין, סביבת עבודה אמיתית. יחס 16:9.",
    why: "הטענה המרכזית של הענף הקבלני היא שיש כאן צוות ולא איש אחד. בלי תמונה זו טענה ריקה.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "תמונה מכל פרויקט שבו עבדו יותר מאדם אחד",
  },
  {
    // CORRECTED. A previous entry claimed there was no construction-phase photograph at
    // all. lighting-01 is exactly that — an open plasterboard ceiling with downlight
    // cut-outs, ducting, pulled wiring and drawings taped to the wall — and it is now the
    // hero of the infrastructure page. What is still missing is residential new-build.
    id: "photo.site.construction",
    page: "/contracting/builders/",
    category: "photo",
    what:
      "אתר בנייה למגורים בשלב שלד — צנרת ושרוולים לפני יציקה, קופסאות, הכנות. " +
      "(שלב תשתית בפרויקט מסחרי כבר מתועד בתמונה אחת ומשמש בעמוד התשתיות.)",
    why:
      "קבלן בניין רוצה לראות עבודה בשלב שלו. יש כבר תיעוד משלב תשתית מסחרי; חסר המקבילה " +
      "בבנייה למגורים, שהיא הסגמנט המרכזי בענף הקבלני.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "תמונות מאתר בנייה למגורים",
  },
  {
    id: "photo.panel.commercial",
    page: "/contracting/commercial/ · /contracting/infrastructure/",
    category: "photo",
    what:
      "תמונות נוספות של לוחות מסחריים ותעשייתיים, ובמיוחד לוח ראשי או חדר חשמל בהיקף גדול.",
    why:
      "תוקן: קיים כבר תצלום של לוח מסחרי בן 72 מודולים עם בקרת בידוד ומנתקים — הוא הועלה " +
      "לתמונה הראשית של עמוד הקבלנות. חסרות תמונות נוספות כדי להראות שזה לא מקרה יחיד.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P2",
    status: "missing",
    closes: "2–3 תמונות נוספות מלוחות מסחריים"
  },
  {
    id: "photo.solar.install-team",
    page: "/solar/contractors/",
    category: "photo",
    what:
      "עוד תצלומי התקנה תוך כדי עבודה, ובפרט כאלה שבהם נראה יותר מאדם אחד — כדי לתעד " +
      "צוות ולא רק מתקין בודד.",
    why:
      "תוקן. הדוח קבע קודם ש'עשרת תצלומי הסולארי הם כולם אחרי, ואין תיעוד של תהליך' — " +
      "וזה לא היה נכון. beit-knesset-yona-03 הוא תצלום תהליך מלא: שלד מסגרות מוברג על " +
      "הגג לפני הנחת הפאנלים, פאנלים ארוזים ממתינים בצד, ומתקין עובד בפריים. הוא היה " +
      "בתיקייה המפורסמת בלי רשומה ב-manifest, ולכן לא נספר. " +
      "מה שבאמת חסר צומצם: תיעוד תהליך אחד קיים, ובו אדם אחד. אין עדיין תצלום שמראה " +
      "צוות, ואין תיעוד תהליך מאף פרויקט אחר — במיוחד לא בקבלנות.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    // Still "missing": nothing new has arrived from the owner. What changed is the
    // description of what is missing, which had been overstated.
    status: "missing",
    closes: "עוד תמונות מתוך התקנה, ורצוי אחת שבה נראה הצוות במלואו",
  },

  /* ------------------------------------------------------------ core facts */
  {
    id: "fact.experience.years",
    page: "/ · /about/",
    category: "business-fact",
    what: "שנת תחילת העיסוק בחשמל, בנפרד משנת הקמת העסק (2018).",
    why: "האתר הישן טען 'מעל 8 שנות ניסיון' בזמן שעמוד האודות מציין 2018. או שהמספר סותר או שהוא נמוך מדי.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "שנה אחת",
  },
  {
    id: "fact.team.size",
    page: "/contracting/ · /about/",
    category: "business-fact",
    what: "מספר אנשי צוות קבועים, ומספר לפי פרויקט. מי מנהל בשטח.",
    why: "השאלה הראשונה שקבלן שואל. בלעדיה עמוד הקבלנות לא יכול לטעון דבר על יכולת ביצוע.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "שני מספרים ותיאור קצר של מבנה הצוות",
  },
  {
    id: "fact.project.max-scale",
    page: "/contracting/",
    category: "business-fact",
    what: "הפרויקט הגדול ביותר שבוצע — בהיקף כספי, מ״ר, יחידות דיור או נקודות חשמל.",
    why: "מסנן התאמה. יזם צריך לדעת תוך שניות אם העסק בסדר הגודל שלו.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "מספר אחד ביחידה כלשהי",
  },
  {
    id: "fact.concurrent-projects",
    page: "/contracting/",
    category: "business-fact",
    what: "כמה פרויקטים ניתן לקחת במקביל.",
    why: "התנגדות נפוצה של מנהל פרויקט: 'יהיה לו זמן אליי?'",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "מספר",
  },
  {
    id: "fact.insurance",
    page: "/contracting/",
    category: "credential",
    what: "ביטוח עבודות קבלניות וצד ג׳ — קיים? מה ההיקף?",
    why: "דרישת סף אצל כל קבלן ראשי מסודר. בלי זה פנייה נופלת בשלב הרכש.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "כן/לא + סכום כיסוי",
  },
  {
    id: "fact.warranty",
    page: "כל עמודי השירות",
    category: "business-fact",
    what: "תנאי אחריות מדויקים — כמה שנים, על מה חלה, מה לא כלול.",
    why: "האתר הישן הבטיח 'אחריות לשנים קדימה' ללא מספר או הגדרה. הפחתת סיכון היא מנוף המרה מרכזי.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "מספר שנים + מה מכוסה",
  },
  {
    id: "fact.areas.list",
    page: "/areas/",
    category: "business-fact",
    what: "רשימת יישובים בפועל, ובנפרד: האם 'ממצפה רמון ועד עמק חפר' נכון גם לפרויקט קבלני ארוך או רק לקריאות שירות.",
    why: "Local SEO ועמודי אזור מחייבים רשימה אמיתית. עמוד אזור ללא בסיס אמיתי הוא תוכן דל.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "רשימת יישובים + הבחנה בין סוגי עבודה",
  },
  {
    id: "fact.response-time",
    page: "/ · /contact/",
    category: "business-fact",
    what: "זמן תגובה ממוצע לפנייה חדשה.",
    why: "משפיע ישירות על שיעור השארת פרטים. 'נחזור אליכם' חלש מ'נחזור תוך X שעות'.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "טווח שעות שבעל העסק מוכן להתחייב אליו",
  },
  {
    id: "fact.opening-hours",
    page: "Footer · Schema",
    category: "business-fact",
    what: "שעות פעילות מאומתות.",
    why: "הופיע ב-Schema של האתר הישן מבלי שאומת ומבלי שהוצג. הוסר.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "שעות בפועל",
  },
  {
    id: "fact.credentials.extra",
    page: "/about/",
    category: "credential",
    what: "הסמכות מעבר לרישיון 991433 — סולארי, מתח גבוה, בדיקות, בטיחות.",
    why: "Authority, ותנאי סף בפרויקטים מסוימים.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "רשימת הסמכות",
  },

  /* -------------------------------------------------------------- proof */
  {
    id: "case.contracting.first",
    page: "/contracting/ · /projects/",
    category: "case-study",
    what: "Case Study קבלני אחד: סוג לקוח, היקף, אתגר, מה בוצע, גודל צוות, משך, תוצאה.",
    why: "עשרת הפרויקטים המתועדים הם כולם סולאריים־ביתיים. אין ולו הוכחה אחת לענף שהוא מרכז הפרויקט.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "partial",
    priority: "P0",
    status: "missing",
    closes: "פרויקט אחד. הניסוח ייכתב מהעובדות שיימסרו.",
  },
  {
    // CORRECTED after visually inspecting every source photograph.
    // The earlier entry claimed no commercial electrical work was documented. That was
    // wrong: four photographs record a single real retail fit-out — ceiling infrastructure
    // during construction, then the finished space — and panel-05 is a 72-module
    // commercial board. The evidence existed; nobody had looked at it.
    // What is genuinely missing is the story and the client's consent to name them.
    id: "case.commercial.first",
    page: "/contracting/commercial/",
    category: "case-study",
    what:
      "הסיפור של פרויקט התאורה המסחרי שכבר מתועד בארבע תמונות: מי הלקוח, מה היה ההיקף, " +
      "כמה זמן, ומה כלל הביצוע. בנוסף — אישור הלקוח לציין את שמו.",
    why:
      "יש כבר תיעוד ויזואלי מלא של הפרויקט הזה, כולל שלב הבנייה וגמר. חסר רק הסיפור " +
      "שהופך אותו מגלריה ל-Case Study, ואישור לפרסום שם העסק שמופיע בתמונות.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "partial",
    priority: "P1",
    status: "missing",
    closes: "שיחה קצרה על הפרויקט + אישור הלקוח",
  },
  {
    id: "consent.commercial-client-brand",
    page: "/electrical/lighting/ · /contracting/commercial/",
    category: "credential",
    what:
      'אישור מבעל העסק המסחרי שמופיע בתמונות התאורה (מותג גלוי בשילוט: "Luna Park of ' +
      'Flavors") לפרסם את התמונות ולציין את שמו.',
    why:
      "התמונות מציגות מותג מזוהה של צד שלישי. פרסום עבודה אצל לקוח מזוהה בלי אישורו הוא " +
      "סיכון מיותר, ועם אישורו זו הוכחה מסחרית חזקה מאוד.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "אישור בכתב, גם בהודעת וואטסאפ",
  },
  {
    id: "provenance.panel-02",
    page: "— (הוסרה מהאתר)",
    category: "photo",
    what:
      'הבהרה על התמונה שהייתה תמונת ה-Hero של דף הבית: היא כוללת מדבקה של חשמלאי אחר — ' +
      '"חשמלאי מוסמך · רוני בורוכוב · 058-5442623". האם זו עבודה שלנו בלוח שכבר נשא מדבקה ' +
      "קודמת, או שהתמונה הגיעה ממקור אחר?",
    why:
      "התמונה שימשה כתמונה הראשית של דף הבית ושל עמוד הקבלנות, והציגה שם וטלפון של בעל " +
      "מקצוע אחר. הוסרה מיידית לבידוד. אם העבודה שלנו — אפשר לצלם מחדש. אם לא — היא לא " +
      "יכולה להופיע באתר כלל.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "תשובה של משפט אחד",
  },
  {
    id: "provenance.project-photos",
    page: "/projects/ · /solar/ · /solar/commercial/ · 9 עמודי פרויקט",
    category: "photo",
    what:
      "הסבר מאיפה הגיעו תשעה מתוך שנים־עשר תצלומי הפרויקטים, ואילו מהפרויקטים אכן בוצעו " +
      "על ידינו. שמות הלקוחות, היישובים וההספקים — נשארו באתר; רק התמונות הוסרו.",
    why:
      "התמונות מציגות התקנות שאינן נראות ישראליות: מיכלי מים על גגות, מבנה בטון ביציקה " +
      "עם עמודי ברזל חשופים, מזגן Mitsubishi, גשר רכבת עילית, טחנת רוח, אדמה אדומה " +
      "לטריטית. כולן מטושטשות ומוגדלות מרזולוציה נמוכה, חלקן עם פסים לבנים בקצוות — " +
      "סימנים של תמונות שנלקחו ממקור אחר. שלוש התמונות של בית כנסת יונה, לעומת זאת, " +
      "חדות ברזולוציה מקורית ומראות בבירור מבנים וצמחייה בישראל. " +
      "תמונה של פרויקט היא טענה עובדתית שהעבודה הזו שלנו. אם היא לא — זו אותה בעיה " +
      "שבגללה הוסרו חמש ההמלצות המומצאות, ובענף הקבלני היא חמורה יותר: קבלן שמזהה " +
      "תמונת סטוק בתיק עבודות מפסיק לקרוא.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes:
      "לכל אחד מתשעת הפרויקטים: האם הוא בוצע על ידינו, ואם כן — האם יש צילום אמיתי " +
      "בטלפון. פרויקט אמיתי בלי צילום נשאר באתר עם הפרטים בלבד, וזה תקין. פרויקט שלא " +
      "בוצע על ידינו — יורד.",
  },
  {
    id: "provenance.panel-01",
    page: "— (הוסרה מהתיקייה המפורסמת)",
    category: "photo",
    what:
      "אישור שאפשר למחוק את הקובץ המקורי הלא־גזור של תמונת ה-Hero. הגרסה הגזורה " +
      "(panel-01-hero.jpeg) היא זו שבשימוש, והמקורי נשמר רק כדי לאפשר גזירה מחדש.",
    why:
      "הקובץ המקורי כלל בקצה השמאלי ארגז כלים עם מספר טלפון של צד שלישי — 050-3440004. " +
      "הוא נגזר ממנו והגרסה הגזורה עלתה לאתר, אבל המקורי נשאר ב-public/ ולכן נבנה ל-dist " +
      "והיה מתפרסם ככתובת ציבורית ניתנת לאחזור. הועבר ל-quarantine/. אין לו רשומה " +
      "ב-manifest וזו הסיבה שהבדיקה לא תפסה אותו — נוספה בדיקה שכל תמונה מפורסמת חייבת רשומה.",
    source: "business-owner",
    needsTruth: false,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "אישור למחוק, או החלטה לשמור מחוץ ל-public/",
  },
  {
    id: "consent.testimonial-photos",
    page: "/ · /reviews/ · כל עמודי החשמל",
    category: "photo",
    what:
      "אישור פרסום מכל אחד מחמשת הממליצים לתמונה שלו, או לחלופין תמונה שהוא בוחר למסור. " +
      "ניר רווח, נועה חממי, בר טופז, רז אבישי, אלכס סוחוליטקו.",
    why:
      "חמש התמונות שהופיעו לצד ההמלצות היו תמונות הפרופיל של הממליצים מ-Google — לא תמונות " +
      "שנמסרו לפרסום. ביניהן סלפי אישי ליד נחל ללא חולצה, ותמונה שבה מופיע אדם נוסף שאינו " +
      "הממליץ וייתכן שקטין. ציטוט ביקורת ציבורית בשם הכותב הוא נוהג מקובל; פרסום התמונה " +
      "האישית שלו באתר מסחרי הוא מעשה נפרד שדורש הסכמה. התמונות הוסרו והועברו ל-quarantine/ " +
      "— ההמלצות עצמן, השמות והיישובים נשארו באתר, ובמקום התמונה מוצגת אות ראשונה.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes:
      "הודעת וואטסאפ לכל אחד: 'אפשר להשתמש בתמונה שלך לצד ההמלצה באתר?'. תשובה חיובית " +
      "בכתב מספיקה. מי שלא עונה — נשאר עם אות ראשונה, וזה תקין לחלוטין.",
  },
  {
    id: "case.details.solar",
    page: "/projects/",
    category: "case-study",
    what: "לחמשת הפרויקטים הסולאריים המובילים: האתגר, הפתרון, משך הביצוע, גודל הצוות, התוצאה, ואישור לפרסום שם הלקוח.",
    why: "קיימים שם, יישוב והספק — בסיס טוב. חסר הסיפור שהופך גלריה ל-Case Study.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "partial",
    priority: "P0",
    status: "missing",
    closes: "שיחה אחת של 20 דקות על חמישה פרויקטים",
  },
  {
    id: "proof.contractor-clients",
    page: "/contracting/",
    category: "logo",
    what: "שמות או לוגואים של קבלנים/חברות שאפשר להציג, ובאילו מהם מותר להשתמש.",
    why: "Trust signal החזק ביותר מול קהל B2B.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "רשימה + אישור שימוש",
  },
  {
    id: "testimonial.contracting",
    page: "/contracting/ · /reviews/",
    category: "testimonial",
    what: "המלצה אחת מקבלן, יזם או מנהל פרויקט.",
    why: "חמש ההמלצות הקיימות כולן מלקוחות פרטיים בסולארי. אין קול מהקהל העסקי.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "בקשת המלצה מלקוח עסקי אחד",
  },

  /* --------------------------------------------------------- integrations */
  {
    id: "integration.gtm",
    page: "כל האתר",
    category: "integration",
    what: "מזהה מכולת Google Tag Manager (GTM-XXXXXXX) ומזהה מדידה של GA4 (G-XXXXXXXXXX).",
    why: "כל תשתית המדידה בנויה ומחכה. ללא המזהים אין נתונים, וללא נתונים אין דרך להוכיח שהאתר החדש שיפר משהו.",
    source: "client",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "שני מזהים",
  },
  {
    id: "integration.gbp",
    page: "Footer · Schema · /reviews/",
    category: "integration",
    what: "קישור לפרופיל Google Business Profile ומספר הביקורות והדירוג האמיתיים בו.",
    why: "מחליף את הדירוג המפוברק שהוסר, ומחבר את האתר ל-Local SEO.",
    source: "client",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "קישור לפרופיל",
  },
  {
    id: "integration.lead-endpoint",
    page: "/quote/ · /contact/",
    category: "integration",
    what: "החלטת אירוח לנקודת קצה לקליטת לידים (Cloudflare Pages Functions / Netlify / שירות טפסים).",
    why: "GitHub Pages הוא אירוח סטטי בלבד ואינו יכול להריץ קוד צד שרת. ללא נקודת קצה אין מקור אמת אחד ללידים, אין ניסיון חוזר ואין התראה על כשל.",
    source: "client",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "בחירת ספק אירוח",
  },
  {
    id: "integration.maps-key",
    page: "/quote/",
    category: "integration",
    what: "אימות שמפתח Google Maps מוגבל ל-HTTP referrer של rnrg.co.il בקונסולת Google Cloud.",
    why: "המפתח גלוי בקוד המקור — כך זה תמיד בצד לקוח. ההגנה היחידה היא הגבלת referrer. אחרת אפשר לחייב את חשבון העסק.",
    source: "client",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "בדיקה בקונסולה",
  },
  {
    id: "integration.old-domain",
    page: "Migration",
    category: "seo",
    what: "האם neo050.github.io/SolarSolutions עדיין פעיל ומאונדקס.",
    why: "אם כן, הוא מתחרה ב-rnrg.co.il על אותו תוכן וצריך 301 מלא.",
    source: "client",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "בדיקה ב-Search Console",
  },

  /* ------------------------------------------- surfaced by market research */
  {
    id: "fact.contractor-registry",
    page: "/contracting/ · /contracting/builders/",
    category: "credential",
    what:
      "האם העסק רשום בפנקס הקבלנים (ענף 160 — חשמל, או 191), ובאיזה סיווג כספי.",
    why:
      'מחקר השוק העלה ש"קבלן חשמל" הוא תיאור מסחרי ולא דרגת רישיון. רישום בפנקס הקבלנים הוא ' +
      "דבר נפרד לגמרי, והוא תנאי סף אצל חלק מהקבלנים הראשיים והגופים הציבוריים. אסור לרמוז " +
      "על רישום שאינו קיים.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P0",
    status: "missing",
    closes: "כן/לא, ואם כן — ענף וסיווג",
  },
  {
    id: "asset.supplier-pack",
    page: "/contracting/builders/",
    category: "credential",
    what:
      "תיק ספק להורדה: רישיון, אישור ניהול ספרים, ניכוי מס במקור, ביטוח צד ג׳ וחבות מעבידים, " +
      "ביטוח עבודות קבלניות, ורישום בפנקס הקבלנים אם קיים.",
    why:
      "מחקר השוק מצא שאף אחד מ-29 המתחרים שנבדקו אינו מציע זאת. זה בדיוק המסמך שרכש של קבלן " +
      "ראשי מבקש בפנייה הראשונה, והיכולת להוריד אותו בלחיצה אחת מקצרת את מחזור המכירה.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "קבצי PDF של המסמכים",
    dependsOn: ["fact.insurance", "fact.contractor-registry"],
  },
  {
    id: "fact.solar-regulatory-track",
    page: "/solar/",
    category: "business-fact",
    what:
      'באיזה מסלול אסדרה העסק מגיש בפועל היום. הטקסט הישן באתר אמר "נכנסת למסלול הירוק — ' +
      'אישור מיידי למכירת החשמל".',
    why:
      'מחקר השוק מצא ש"מסלול ירוק" אינו שם רגולטורי רשמי היום — ההסדרה מעוגנת באמות מידה 70104 ' +
      "מ-15.1.2025. שימוש בשם מיושן מול לקוח מקצועי פוגע באמינות, ומול לקוח פרטי עלול ליצור " +
      "ציפייה שגויה לגבי לוחות זמנים.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "שם המסלול שבו מגישים בפועל",
  },

  /* ---------------------------------------------------------------- brand */
  {
    id: "brand.logo.vector",
    page: "כל האתר",
    category: "logo",
    what: "קובץ לוגו מקורי בווקטור (AI / EPS / SVG אמיתי).",
    why: "ה-PNG שהיה בשימוש היה 8883×8851 פיקסלים ו-3.1MB עבור תצוגה ב-320px, וה-SVG היה תמונה רסטרית עטופה במשקל 494KB. אף אחד מהם אינו מקור אמיתי.",
    source: "business-owner",
    needsTruth: true,
    aiFillable: "no",
    priority: "P1",
    status: "missing",
    closes: "הקובץ מהמעצב שיצר את הלוגו",
  },
];

/** Fast lookup used by <Pending>. Throws at build time on an unknown id. */
const byId = new Map(GAPS.map((g) => [g.id, g]));

export function getGap(id: string): Gap {
  const gap = byId.get(id);
  if (!gap) {
    throw new Error(
      `Unknown gap id "${id}". Add it to src/data/gaps.ts so it appears in the Missing Assets report.`
    );
  }
  return gap;
}

export const gapStats = () => ({
  total: GAPS.length,
  p0: GAPS.filter((g) => g.priority === "P0").length,
  p1: GAPS.filter((g) => g.priority === "P1").length,
  p2: GAPS.filter((g) => g.priority === "P2").length,
  open: GAPS.filter((g) => g.status === "missing").length,
  needsOwner: GAPS.filter((g) => g.source === "business-owner").length,
  blocksLaunch: GAPS.filter((g) => g.priority === "P0" && g.status === "missing").length,
});
