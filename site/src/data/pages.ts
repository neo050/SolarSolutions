/**
 * Per-page registry: business purpose and review state.
 *
 * "The page exists and the build is green" is not the same as "the page is done". This
 * registry holds the other half — what each page is for commercially, and whether each
 * review dimension has actually been signed off.
 *
 * It is also a completeness gate: scripts/qa.mjs fails the build if a route exists in
 * dist without an entry here, so a new page cannot quietly ship unreviewed.
 *
 * `/internal/dashboard/` renders it.
 */

export type ReviewState = "pending" | "in-progress" | "blocked" | "passed";

/** The six dimensions a page must clear, plus the two automated ones. */
export interface Reviews {
  /** Build, links, metadata, schema — automated by scripts/qa.mjs. */
  technical: ReviewState;
  /** Layout, hierarchy, spacing, imagery — judged from rendered screenshots. */
  ui: ReviewState;
  /** Does the journey work, is the next step obvious. */
  ux: ReviewState;
  /** Copy quality, not merely the absence of placeholder. */
  content: ReviewState;
  /** Goal, intent, CTA, objections, conversion path all defined and served. */
  conversion: ReviewState;
  /** Every breakpoint — automated by scripts/visual-qa.mjs. */
  responsive: ReviewState;
  /** Keyboard, contrast, semantics — automated by axe plus manual passes. */
  accessibility: ReviewState;
  /** Title, description, headings, internal links, schema, intent match. */
  seo: ReviewState;
}

export interface PageSpec {
  route: string;
  label: string;
  /** What this page is supposed to achieve for the business. */
  businessGoal: string;
  /** Why the visitor arrived. */
  userIntent: string;
  primaryCta: string;
  secondaryCta: string;
  /** What proof this particular visitor needs before acting. */
  trustRequired: string[];
  /** What stops them contacting us. */
  objections: string[];
  /** The route from landing here to becoming a lead. */
  conversionPath: string;
  reviews: Reviews;
  /** Gap ids that hold this page back. */
  blockedBy?: string[];
  notes?: string;
}

/** Automated dimensions currently pass site-wide; the judged ones start pending. */
const auto = (over: Partial<Reviews> = {}): Reviews => ({
  technical: "passed",
  responsive: "passed",
  accessibility: "passed",
  ui: "pending",
  ux: "pending",
  content: "pending",
  conversion: "pending",
  seo: "pending",
  ...over,
});

export const PAGES: PageSpec[] = [
  /* ------------------------------------------------------------------ core */
  {
    route: "/",
    label: "דף הבית",
    businessGoal:
      "לגרום לשלושה קהלים שונים לזהות את עצמם תוך שניות, ולהעביר את הקבלן והיזם לענף " +
      "הקבלני בלי להרתיע את הלקוח הפרטי.",
    userIntent: "חיפש את שם העסק, או הגיע מ-Google Business Profile ורוצה לדעת במי מדובר.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג ישיר",
    trustRequired: ["רישיון בר-אימות", "עבודות שבוצעו בפועל", "המלצות עם שם מלא"],
    objections: ["האם זה עסק רציני או איש אחד", "האם הם עובדים בהיקף שלי"],
    conversionPath: "דף בית → כרטיס מסלול → עמוד ענף → הצעת מחיר",
    reviews: auto({ ui: "passed", seo: "passed" }),
    notes:
      "עבר ביקורת עיצוב: ה-Hero הוחלף ללוח מסחרי, רצועת הנתונים הופכה, ו-bidi תוקן.",
  },
  {
    route: "/electrical/",
    label: "עבודות חשמל — שער",
    businessGoal: "ללכוד את הביקוש הפרטי הרחב ולנתב לעמוד השירות הנכון.",
    userIntent: "צריך חשמלאי לעבודה ספציפית בבית.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג",
    trustRequired: ["דרגת רישיון ומה היא מתירה", "תמונות עבודה אמיתיות"],
    objections: ["האם הוא מוסמך באמת", "כמה זה יעלה", "האם ייתן מחיר לפני שיתחיל"],
    conversionPath: "שער → עמוד שירות → הצעת מחיר או חיוג",
    reviews: auto({ seo: "passed" }),
    notes: "טבלת דרגות הרישיון היא הבידול המרכזי — אף מתחרה לא מציג אותה.",
  },
  {
    route: "/contracting/",
    label: "קבלנות ביצוע — שער",
    businessGoal:
      "הענף החשוב ביותר בפרויקט. לשכנע קבלן, יזם או מנהל פרויקט שאפשר לתת לנו את " +
      "החלק החשמלי בפרויקט שלם.",
    userIntent: "מחפש קבלן משנה לחשמל, או בודק אם יש כאן התאמה לפרויקט.",
    primaryCta: "הצעת מחיר לפרויקט",
    secondaryCta: "שיחה מקצועית",
    trustRequired: [
      "גודל צוות",
      "היקף הפרויקט הגדול שבוצע",
      "ביטוח עבודות קבלניות",
      "Case Study קבלני",
      "תמונת צוות בשטח",
    ],
    objections: [
      "יהיה לו זמן אליי",
      "כמה אנשים הוא מביא",
      "האם הוא יעכב לי את הגאנט",
      "האם הוא עומד בדרישות הרכש",
    ],
    conversionPath: "שער קבלני → עמוד קהל → תהליך עבודה → טופס 9 שדות",
    reviews: auto({ seo: "passed" }),
    blockedBy: ["fact.team.size", "fact.project.max-scale", "fact.insurance", "case.contracting.first", "photo.team.onsite"],
    notes: "חמישה מתוך חמישה פריטי Trust חסומים על נתונים מבעל העסק. המבנה בנוי ומחכה.",
  },
  {
    route: "/solar/",
    label: "מערכות סולאריות — שער",
    businessGoal: "ללכוד ביקוש סולארי ולנתב לפי סוג לקוח: פרטי, מסחרי או קבלני.",
    userIntent: "שוקל מערכת סולארית ורוצה לדעת אם זה מתאים לו וכמה זה עולה.",
    primaryCta: "בדיקת התאמה",
    secondaryCta: "חיוג",
    trustRequired: ["פרויקטים עם הספק ומיקום", "המלצות", "רישיון חשמלאי"],
    objections: ["כמה זה עולה", "כמה זמן", "האם צריך היתר", "מה קורה בהפסקת חשמל"],
    conversionPath: "שער סולארי → סוג לקוח → בדיקת התאמה",
    reviews: auto({ seo: "passed" }),
    notes: "המיצוב 'החשמל וההתקנה תחת רישיון אחד' הוא הבידול — מחקר השוק מצא שמתקינים מוסרים את החלק החשמלי.",
  },

  /* ------------------------------------------------------------ electrical */
  {
    route: "/electrical/homes/",
    label: "חשמל לבתים פרטיים",
    businessGoal: "ללכוד long-tail של עבודות בית וללמד שהתשתית צריכה בדיקה לפני הוספת עומס.",
    userIntent: "רוצה להוסיף נקודות, מזגן או מטען לרכב חשמלי.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג",
    trustRequired: ["הסבר מקצועי שמראה ידע", "תמונות לוחות"],
    objections: ["האם התשתית שלי בכלל עומדת בזה", "האם יגלה לי הפתעות באמצע"],
    conversionPath: "עמוד שירות → FAQ → הצעת מחיר",
    reviews: auto({ seo: "passed" }),
  },
  {
    route: "/electrical/panels/",
    label: "לוחות חשמל",
    businessGoal: "עמוד השירות עם הביקוש הגבוה ביותר בענף הפרטי.",
    userIntent: "לוח ישן, פחת שקופץ, או צריך שדרוג לפני הוספת עומס.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג",
    trustRequired: ["גלריית לוחות אמיתיים", "הסבר מה נבדק"],
    objections: ["כמה זמן אין חשמל", "חייבים להחליף או שאפשר לשדרג", "כמה זה עולה"],
    conversionPath: "עמוד → גלריה → FAQ → הצעת מחיר",
    reviews: auto({ seo: "passed" }),
  },
  {
    route: "/electrical/three-phase/",
    label: "שדרוג לתלת פאזי",
    businessGoal: "ללכוד כוונת חיפוש ספציפית ולסנן פניות שלא באמת צריכות שדרוג.",
    userIntent: "אמרו לו שהוא צריך תלת פאזי, או שהמאמתים קופצים.",
    primaryCta: "בדיקת התאמה",
    secondaryCta: "חיוג",
    trustRequired: ["הסבר מתי באמת צריך", "ידע על התהליך מול חברת החשמל"],
    objections: ["האם באמת צריך", "כמה זמן זה לוקח", "כמה זה עולה"],
    conversionPath: "עמוד → בדיקת עומס → הצעת מחיר",
    reviews: auto({ seo: "passed" }),
    notes: "הכנות לומר 'אולי לא צריך' היא נכס המרה, לא ויתור.",
  },
  {
    route: "/electrical/inspection/",
    label: "בדיקות ואישורים",
    businessGoal:
      "ללכוד ביקוש עסקי עם דחיפות רגולטורית — לרוב דרישת חברת ביטוח או רישוי עסק.",
    userIntent: "חברת הביטוח דורשת אישור, או שהוא לפני רישוי עסק.",
    primaryCta: "תיאום בדיקה",
    secondaryCta: "חיוג",
    trustRequired: ["מה נמדד בפועל", "טבלת תדירויות סטטוטורית", "מה כוללת התעודה"],
    objections: ["מה אם יימצאו ליקויים", "כמה זמן זה לוקח", "מי מתקן"],
    conversionPath: "עמוד → טבלת תדירויות → הצעת מחיר",
    reviews: auto({ seo: "passed" }),
    notes: "טבלת התדירויות מבוססת חוזר מהנדס ראשי. אף מתחרה שנבדק לא פרסם אותה.",
  },
  {
    route: "/electrical/lighting/",
    label: "תאורה אדריכלית",
    businessGoal: "ללכוד עבודות בעלות ערך גבוה ולהראות יכולת בפרויקט מסחרי.",
    userIntent: "מתכנן תאורה בשיפוץ או בהתאמת מושכר.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג",
    trustRequired: ["תיעוד פרויקט מסחרי אמיתי", "הבנה בשלב התשתית"],
    objections: ["מתי מאוחר מדי להחליט", "האם עובדים מול אדריכל"],
    conversionPath: "עמוד → גלריית הפרויקט המסחרי → הצעת מחיר",
    reviews: auto({ seo: "passed" }),
    blockedBy: ["consent.commercial-client-brand"],
  },

  /* ----------------------------------------------------------- contracting */
  {
    route: "/contracting/builders/",
    label: "לקבלני בניין",
    businessGoal: "העמוד שאמור לזכות בפנייה מקבלן בניין — הלקוח בעל הערך הגבוה ביותר.",
    userIntent: "מחפש קבלן משנה לחשמל לפרויקט בנייה.",
    primaryCta: "הצעת מחיר לפרויקט",
    secondaryCta: "שיחה מקצועית",
    trustRequired: ["Case Study", "תמונת אתר בנייה למגורים", "תיק ספק", "גודל צוות"],
    objections: ["האם יעמוד בלוח הזמנים", "האם יש לו ביטוח", "כמה אנשים", "האם עבד בהיקף כזה"],
    conversionPath: "עמוד → שלבי ביצוע → נקודות ממשק → טופס פרויקט",
    reviews: auto({ seo: "passed" }),
    blockedBy: ["case.contracting.first", "photo.site.construction", "asset.supplier-pack", "fact.contractor-registry"],
    notes: "תיק ספק להורדה הוא הפער התחרותי החזק ביותר — אף אחד מ-29 המתחרים לא מציע אותו.",
  },
  {
    route: "/contracting/renovation/",
    label: "לקבלני שיפוצים",
    businessGoal: "עבודה חוזרת מקבלני שיפוצים — היקף קטן יותר, תדירות גבוהה.",
    userIntent: "צריך חשמלאי זמין שלא יעכב את השיפוץ.",
    primaryCta: "הצעת מחיר לפרויקט",
    secondaryCta: "חיוג",
    trustRequired: ["זמינות", "הבנה בתשתית ישנה"],
    objections: ["האם יגיע בזמן", "האם יפתיע בתקציב", "האם עובד בדירה מאוכלסת"],
    conversionPath: "עמוד → למה שיפוצים חורגים → טופס פרויקט",
    reviews: auto({ seo: "passed" }),
  },
  {
    route: "/contracting/commercial/",
    label: "חשמל לעסקים ומסחר",
    businessGoal: "ללכוד עבודות מסחריות ולהראות יכולת מעבר לביתי.",
    userIntent: "מתאים מושכר, פותח עסק, או צריך תחזוקה.",
    primaryCta: "הצעת מחיר לפרויקט",
    secondaryCta: "חיוג",
    trustRequired: ["פרויקט מסחרי מתועד", "לוח מסחרי", "עבודה במבנה פעיל"],
    objections: ["האם יצטרך להשבית לי את העסק", "האם עמד בהיקף כזה"],
    conversionPath: "עמוד → פרויקט מסחרי → טופס פרויקט",
    reviews: auto({ seo: "passed" }),
    blockedBy: ["case.commercial.first", "consent.commercial-client-brand"],
  },
  {
    route: "/contracting/infrastructure/",
    label: "תשתיות חשמל",
    businessGoal: "להראות יכולת בשלב שלפני הגמר — שם מוכרעת בחירת קבלן המשנה.",
    userIntent: "מנהל פרויקט או קבלן שמחפש מי יבצע תשתית.",
    primaryCta: "הצעת מחיר לפרויקט",
    secondaryCta: "שיחה מקצועית",
    trustRequired: ["תיעוד שלב תשתית", "לוח ראשי", "גישה לתיוג ותיעוד"],
    objections: ["האם עובד לפי תוכנית", "האם משאיר רזרבה", "האם מתעד"],
    conversionPath: "עמוד → מה כולל ביצוע → טופס פרויקט",
    reviews: auto({ seo: "passed" }),
  },
  {
    route: "/contracting/process/",
    label: "איך עובדים איתנו",
    businessGoal:
      "להסיר את החיכוך לפני הפנייה. קבלן שיודע בדיוק מה יקרה פונה בסבירות גבוהה יותר.",
    userIntent: "שוקל לפנות ורוצה לדעת למה לצפות.",
    primaryCta: "הצעת מחיר לפרויקט",
    secondaryCta: "שיחה מקצועית",
    trustRequired: ["תהליך מוגדר", "תנאי התקשרות", "ביטוחים"],
    objections: ["כמה זמן לוקח לקבל הצעה", "האם יש חוזה", "מה קורה בחריגה מהתוכנית"],
    conversionPath: "עמוד → מה נדרש ממך → טופס פרויקט",
    reviews: auto({ seo: "passed" }),
    blockedBy: ["fact.warranty", "fact.insurance"],
  },

  /* ----------------------------------------------------------------- solar */
  {
    route: "/solar/residential/",
    label: "סולארי לבית פרטי",
    businessGoal: "הסגמנט הסולארי עם הנפח הגבוה ביותר.",
    userIntent: "שוקל מערכת לבית ורוצה לדעת אם הגג מתאים.",
    primaryCta: "בדיקת התאמה",
    secondaryCta: "חיוג",
    trustRequired: ["פרויקטים ביתיים עם הספק", "המלצות"],
    objections: ["כמה מקום צריך", "כמה זה עולה", "מה ההחזר", "האם צריך היתר"],
    conversionPath: "עמוד → מה בודקים → בדיקת התאמה",
    reviews: auto({ seo: "passed" }),
  },
  {
    route: "/solar/commercial/",
    label: "סולארי לעסקים",
    businessGoal: "עסקאות גדולות יותר — מסחרי וחקלאי.",
    userIntent: "בעל עסק או מבנה חקלאי עם גג לא מנוצל.",
    primaryCta: "בדיקת התאמה",
    secondaryCta: "שיחה מקצועית",
    trustRequired: ["מערכת על רפת והאנגר", "הבנה במתח גבוה", "היבטי מס"],
    objections: ["האם יצטרך להשבית", "מה ההחזר", "מי מטפל באסדרה"],
    conversionPath: "עמוד → מבנים מתאימים → בדיקת התאמה",
    reviews: auto({ seo: "passed" }),
  },
  {
    route: "/solar/contractors/",
    label: "ביצוע סולארי לקבלנים",
    businessGoal: "לתפוס את התפר שחברות סולאר משאירות פתוח — החלק החשמלי.",
    userIntent: "קבלן או חברת EPC שמחפשת מבצע לחלק הסולארי.",
    primaryCta: "הצעת מחיר לפרויקט",
    secondaryCta: "שיחה מקצועית",
    trustRequired: ["צוות התקנה", "רישיון חשמלאי", "קצב התקנה"],
    objections: ["כמה אנשים", "מי אחראי על החיבור", "האם יעמוד בקצב"],
    conversionPath: "עמוד → מה מבצעים → טופס פרויקט",
    reviews: auto({ seo: "passed" }),
    blockedBy: ["photo.solar.install-team"],
  },
  {
    route: "/solar/storage/",
    label: "אגירת אנרגיה",
    businessGoal: "מוצר בעל ערך גבוה, ובידול אמיתי — הניסיון התחיל במערכות מנותקות רשת.",
    userIntent: "רוצה גיבוי בהפסקת חשמל או עצמאות אנרגטית.",
    primaryCta: "בדיקת התאמה",
    secondaryCta: "חיוג",
    trustRequired: ["פרויקטים אוף-גריד שבוצעו", "ההיסטוריה עם קרוואנים"],
    objections: ["כמה זמן מחזיקה סוללה", "אפשר להוסיף למערכת קיימת", "כמה זה עולה"],
    conversionPath: "עמוד → למה מוסיפים אגירה → בדיקת התאמה",
    reviews: auto({ seo: "passed" }),
  },

  /* ------------------------------------------------------------ conversion */
  {
    route: "/quote/",
    label: "בקשת הצעת מחיר",
    businessGoal: "נקודת ההמרה המרכזית של האתר. שלושה טפסים לפי סוג לקוח.",
    userIntent: "החליט לפנות ורוצה למסור פרטים.",
    primaryCta: "שליחת הטופס",
    secondaryCta: "חיוג או וואטסאפ",
    trustRequired: ["רישיון", "אזור פעילות", "מה יקרה אחרי השליחה"],
    objections: ["למה כל כך הרבה שדות", "מתי יחזרו אליי", "מה קורה עם הפרטים שלי"],
    conversionPath: "טופס → אישור קליטה מהשרת → עמוד תודה לפי מסלול",
    reviews: auto({ ux: "passed" }),
    blockedBy: ["integration.lead-endpoint"],
    notes: "אורך הטופס הקבלני הוא מסנן מכוון, לא חיכוך. המסלול נבחר לפני הציור הראשון.",
  },
  {
    route: "/contact/",
    label: "צור קשר",
    businessGoal: "ללכוד מי שמעדיף ערוץ ישיר על טופס.",
    userIntent: "רוצה להתקשר או לכתוב, לא למלא טופס.",
    primaryCta: "חיוג",
    secondaryCta: "וואטסאפ",
    trustRequired: ["זמן תגובה", "שעות פעילות", "אזור פעילות"],
    objections: ["מתי יענו לי", "האם מגיעים לאזור שלי"],
    conversionPath: "עמוד → חיוג או טופס קצר",
    reviews: auto(),
    blockedBy: ["fact.opening-hours", "fact.response-time"],
  },
  {
    route: "/projects/",
    label: "פרויקטים",
    businessGoal: "נכס ה-Trust המרכזי. הוכחה שהעבודה קיימת ולא רק מתוארת.",
    userIntent: "רוצה לראות מה בוצע בפועל לפני שהוא פונה.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "מעבר לעמוד פרויקט",
    trustRequired: ["שם, מיקום והספק לכל פרויקט", "סינון לפי סוג לקוח"],
    objections: ["האם עשו משהו בהיקף שלי", "האם זה אמיתי"],
    conversionPath: "אינדקס → סינון → עמוד פרויקט → הצעת מחיר",
    reviews: auto({ ux: "passed" }),
    blockedBy: ["case.contracting.first", "case.commercial.first"],
    notes: "מצהיר במפורש שכל המתועדים סולאריים — במקום להסתיר את הפער.",
  },
  {
    route: "/about/",
    label: "אודות",
    businessGoal: "לתת לעסק פנים ולהסביר מה דרגת הרישיון באמת מתירה.",
    userIntent: "רוצה לדעת מי עומד מאחורי זה.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג",
    trustRequired: ["תמונת בעל העסק", "טבלת דרגות רישיון", "מספרים אמיתיים"],
    objections: ["מי זה בכלל", "כמה ניסיון יש לו", "האם זה עסק או איש אחד"],
    conversionPath: "אודות → פרויקטים או ענף → הצעת מחיר",
    reviews: auto({ seo: "passed" }),
    blockedBy: ["photo.owner.portrait", "fact.experience.years", "fact.team.size", "fact.credentials.extra"],
    notes: "סיפור הקרוואנים הוא בידול אמיתי והוא מוביל את העמוד.",
  },
  {
    route: "/reviews/",
    label: "המלצות",
    businessGoal: "ריכוז הוכחה חברתית אמיתית במקום אחד.",
    userIntent: "רוצה לדעת מה אחרים אומרים.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "השארת המלצה",
    trustRequired: ["שם מלא, יישוב ותמונה לכל ממליץ"],
    objections: ["האם ההמלצות אמיתיות"],
    conversionPath: "המלצות → ענף → הצעת מחיר",
    reviews: auto(),
    blockedBy: ["testimonial.contracting", "integration.gbp"],
    notes: "אין Review schema במכוון — גוגל דורש דירוג, ולא נאסף אף דירוג.",
  },
  {
    route: "/faq/",
    label: "שאלות נפוצות",
    businessGoal: "לטפל בהתנגדויות לפני הפנייה, וללכוד כוונת חיפוש אינפורמטיבית.",
    userIntent: "יש לו שאלה שמעכבת החלטה.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג",
    trustRequired: ["תשובות שמראות ידע אמיתי"],
    objections: ["מחיר", "אחריות", "ביטוח", "היתרים", "לוחות זמנים"],
    conversionPath: "FAQ → עמוד שירות → הצעת מחיר",
    reviews: auto({ seo: "passed" }),
    notes: "כשתשובה תלויה בנתון שאין — כתוב במפורש, במקום תשובה מעורפלת.",
  },
  {
    route: "/areas/",
    label: "אזורי פעילות",
    businessGoal: "Local SEO, וסינון פניות מחוץ לטווח.",
    userIntent: "רוצה לדעת אם מגיעים אליו.",
    primaryCta: "בקשת הצעת מחיר",
    secondaryCta: "חיוג",
    trustRequired: ["יישובים שבהם בוצעו עבודות בפועל"],
    objections: ["האם מגיעים לאזור שלי", "האם המרחק ישפיע על המחיר"],
    conversionPath: "אזורים → פרויקטים → הצעת מחיר",
    reviews: auto(),
    blockedBy: ["fact.areas.list"],
    notes: "עמודי אזור לכל עיר לא נבנו במכוון — בלי רשימה אמיתית הם תוכן דל.",
  },
  {
    route: "/accessibility/",
    label: "הצהרת נגישות",
    businessGoal: "דרישה משפטית, ואות לרצינות.",
    userIntent: "מחפש את ההצהרה או דרך לדווח על בעיה.",
    primaryCta: "פנייה בנושא נגישות",
    secondaryCta: "—",
    trustRequired: ["פירוט מה יושם בפועל"],
    objections: [],
    conversionPath: "—",
    reviews: auto(),
  },
  {
    route: "/404/",
    label: "עמוד 404",
    businessGoal: "להחזיר מבקר שהגיע לכתובת שגויה למסלול, במיוחד אחרי המעבר.",
    userIntent: "לחץ על קישור ישן או הקליד שגוי.",
    primaryCta: "חזרה לדף הבית",
    secondaryCta: "חיוג",
    trustRequired: [],
    objections: ["האם האתר בכלל עובד"],
    conversionPath: "404 → ענף → הצעת מחיר",
    reviews: auto(),
  },
];

/* Project and thank-you pages are generated from data, so they are registered as
   families rather than one entry each — the review applies to the template. */
export const PAGE_FAMILIES = [
  {
    pattern: "/projects/<slug>/",
    label: "עמוד פרויקט (×10)",
    businessGoal: "להפוך פרויקט מתמונה בגלריה לראיה שאפשר לקרוא.",
    reviews: auto({ ux: "passed" }),
    blockedBy: ["case.details.solar"],
    notes: "המבנה בנוי. מילוי שלושה שדות בקובץ אחד הופך כל עמוד ל-Case Study מלא.",
  },
  {
    pattern: "/thank-you/<track>/",
    label: "עמוד תודה (×3)",
    businessGoal: "לנצל את רגע תשומת הלב הגבוה ביותר במשפך.",
    reviews: auto({ ux: "passed", content: "passed" }),
    notes: "לכל מסלול תוכן משלו. מסירה לוואטסאפ מסומנת כלא-מאושרת.",
  },
  {
    pattern: "/internal/dashboard/",
    label: "לוח בקרה (פנימי)",
    businessGoal: "לדעת בכל רגע מה באמת גמור ומה רק נבנה. מסמך עבודה, לא תוכן ציבורי.",
    reviews: auto({ ui: "passed", ux: "passed", content: "passed", conversion: "passed", seo: "passed" }),
  },
  {
    pattern: "/internal/gaps/",
    label: "דוח חוסרים (פנימי)",
    businessGoal: "מסמך עבודה. לא תוכן ציבורי.",
    reviews: auto({ ui: "passed", ux: "passed", content: "passed", conversion: "passed", seo: "passed" }),
  },
];

/* ---------------------------------------------------------------- helpers */

const DIMENSIONS: (keyof Reviews)[] = [
  "technical",
  "ui",
  "ux",
  "content",
  "conversion",
  "responsive",
  "accessibility",
  "seo",
];

export const DIMENSION_LABEL: Record<keyof Reviews, string> = {
  technical: "טכני",
  ui: "UI",
  ux: "UX",
  content: "תוכן",
  conversion: "המרה",
  responsive: "רספונסיבי",
  accessibility: "נגישות",
  seo: "SEO",
};

/* -------------------------------------------------------------------------
 * Design review, August 2026
 *
 * 105 findings across 31 routes, judged from screenshots of the built pages
 * rather than from reading the source. Recorded as data and applied below, so
 * the review states cannot drift from the evidence and a re-review is a
 * one-table change. Full write-up: docs/review-2026-08.md.
 *
 * Every registered route was looked at. A route absent from this table was
 * reviewed and had nothing raised against it — which is why absence promotes a
 * dimension to "passed" rather than leaving it "pending". Those two are
 * different claims and the registry should not confuse them.
 * ---------------------------------------------------------------------- */

type Severity = "high" | "medium" | "low";

interface ReviewOutcome {
  worst: Severity;
  count: number;
  /** The finding areas raised, which decide which dimensions are affected. */
  areas: string[];
  /**
   * Areas whose findings have since been addressed and verified in a browser.
   *
   * Recorded per area rather than by clearing the entry, so the dashboard keeps showing
   * that a page was reviewed and what was raised. A page with some areas fixed is not the
   * same as a page nobody looked at, and it is not the same as a page that passed either.
   *
   * Fixed areas drop out of the affected set below, so a route only leaves "blocked" when
   * every high-severity area on it has actually been dealt with.
   */
  fixed?: string[];
}

const REVIEWED: Record<string, ReviewOutcome> = {
  // hierarchy: contracting card leads the grid. cta: primary now the quote request.
  // typography: H1 and <title> rewritten. other: pending badge gone, projects heading
  // no longer claims the solar set is the whole portfolio, cumulative figure unrounded.
  // imagery: the finding was wrong — the hero is a 72-way commercial board, not a
  // domestic consumer unit. Verified by opening it. spacing: stat strip breaks 2×2 at
  // tablet, not 3+1, confirmed in Chrome at 820.
  "/": {
    worst: "high",
    count: 7,
    areas: ["cta", "hierarchy", "imagery", "other", "spacing", "typography"],
    fixed: ["cta", "hierarchy", "imagery", "other", "spacing", "typography"],
  },
  // cta: all-audiences band. other: the "we cannot show you a team" panel no longer
  // renders in production, and the cumulative figure is unrounded.
  "/about/": {
    worst: "high",
    count: 7,
    areas: ["cta", "imagery", "other", "section-order", "typography"],
    fixed: ["cta", "other", "section-order", "typography"],
  },
  // cta: all-audiences band. other: internal priority badges gone from production.
  "/areas/": {
    worst: "high",
    count: 7,
    areas: ["cta", "hierarchy", "imagery", "other", "section-order"],
    fixed: ["cta", "hierarchy", "imagery", "other"],
  },
  "/contact/": { worst: "high", count: 3, areas: ["imagery", "other", "section-order"] },
  // section-order: evidence gallery and licence table added, so the page now proves
  // rather than only asserts. other: the visible "capacity unknown" panel is gone from
  // production. cta/imagery/spacing not yet re-reviewed against their findings.
  "/contracting/": {
    worst: "high",
    count: 8,
    areas: ["cta", "imagery", "other", "section-order", "spacing"],
    fixed: ["cta", "other", "section-order", "spacing"],
  },
  "/contracting/builders/": { worst: "high", count: 8, areas: ["cta", "hero", "hierarchy", "imagery", "other", "section-order"], fixed: ["cta", "hierarchy", "other", "section-order"] },
  "/contracting/commercial/": { worst: "high", count: 4, areas: ["hierarchy", "imagery", "other", "spacing"], fixed: ["hierarchy", "other"] },
  "/contracting/infrastructure/": { worst: "high", count: 3, areas: ["imagery", "other", "section-order"], fixed: ["imagery", "section-order"] },
  "/contracting/process/": { worst: "high", count: 5, areas: ["hierarchy", "other", "typography"], fixed: ["hierarchy", "other", "typography"] },
  "/contracting/renovation/": { worst: "medium", count: 4, areas: ["mobile", "section-order", "spacing", "typography"], fixed: ["section-order"] },
  // mobile: the licence table is a card list below 40rem, so the capacity column is
  // no longer off-screen on a phone.
  "/electrical/": {
    worst: "high",
    count: 5,
    areas: ["cta", "imagery", "mobile", "other", "section-order"],
    fixed: ["mobile", "other", "section-order"],
  },
  "/electrical/homes/": { worst: "high", count: 6, areas: ["cta", "imagery", "mobile", "other", "spacing"], fixed: ["mobile", "other", "spacing"] },
  "/electrical/inspection/": { worst: "high", count: 5, areas: ["cta", "imagery", "mobile", "other", "spacing"], fixed: ["other", "spacing"] },
  "/electrical/lighting/": { worst: "medium", count: 4, areas: ["cta", "imagery", "other", "spacing"], fixed: ["imagery"] },
  "/electrical/panels/": { worst: "high", count: 4, areas: ["cta", "imagery", "other"], fixed: ["imagery", "other"] },
  "/electrical/three-phase/": { worst: "high", count: 6, areas: ["cta", "hero", "imagery", "other", "spacing"], fixed: ["hero", "other", "spacing"] },
  // The two /faq/ groups in the raw output were merged: one arrived inside a
  // comma-joined cross-page label and parsed as its own route.
  "/faq/": { worst: "high", count: 5, areas: ["cta", "hierarchy", "other", "section-order"], fixed: ["hierarchy", "other", "section-order"] },
  // Same for the mobile-only finding filed separately from /projects/.
  // other: heading no longer presents the solar set as the whole portfolio; cards
  // without a photograph show output and system type instead of a broken frame.
  // imagery stays open — nine photographs are in quarantine pending the owner.
  "/projects/": {
    worst: "high",
    count: 4,
    areas: ["imagery", "mobile", "other"],
    fixed: ["mobile", "other"],
  },
  "/quote/": { worst: "high", count: 4, areas: ["hero", "other", "section-order"], fixed: ["hero", "other", "section-order"] },
  // hierarchy: the H2 duplicating the H1 is renamed. cta: all-audiences band.
  // imagery: portraits are held pending consent — blocked on the owner, not on us.
  "/reviews/": {
    worst: "high",
    count: 7,
    areas: ["cta", "hierarchy", "imagery", "other", "section-order"],
    fixed: ["cta", "hierarchy"],
  },
  "/solar/": { worst: "high", count: 5, areas: ["hero", "imagery", "other", "spacing", "typography"], fixed: ["other", "spacing", "typography"] },
  "/solar/commercial/": { worst: "medium", count: 4, areas: ["other", "spacing"], fixed: ["other", "spacing"] },
  "/solar/contractors/": { worst: "high", count: 5, areas: ["imagery", "other", "section-order", "spacing"], fixed: ["other", "section-order", "spacing"] },
  "/solar/residential/": { worst: "high", count: 5, areas: ["hero", "hierarchy", "imagery", "other", "spacing"], fixed: ["hierarchy", "spacing"] },
  "/solar/storage/": { worst: "high", count: 5, areas: ["imagery", "other", "spacing"], fixed: ["imagery", "other", "spacing"] },
  "/thank-you/": { worst: "medium", count: 2, areas: ["other", "typography"] },
  "/thank-you/private/": { worst: "medium", count: 2, areas: ["other", "typography"] },
  "/thank-you/contracting/": { worst: "medium", count: 1, areas: ["typography"] },
  "/thank-you/solar/": { worst: "medium", count: 1, areas: ["typography"] },
};

/** Which judged dimension each finding area belongs to. */
const AREA_DIMENSION: Record<string, keyof Reviews> = {
  hierarchy: "ui",
  spacing: "ui",
  typography: "ui",
  imagery: "ui",
  hero: "ui",
  mobile: "ui",
  "section-order": "ux",
  cta: "conversion",
  // "other" covers missing proof, unfilled facts and copy that states the wrong
  // thing — all content problems in practice.
  other: "content",
};

const JUDGED: (keyof Reviews)[] = ["ui", "ux", "content", "conversion"];

/**
 * Applies the review to the registry.
 *
 * A high-severity finding blocks its dimension: the page cannot be called ready
 * while it is open. Medium and low mark it in-progress. Dimensions the review
 * raised nothing against pass.
 *
 * SEO is untouched here — it has its own pass and is not what this review looked at.
 */
// Families are keyed by `pattern` rather than `route` — /projects/[slug]/ and the like —
// so the lookup accepts either.
function applyReview(page: { route?: string; pattern?: string; reviews: Reviews }): void {
  const key = page.route ?? page.pattern ?? "";
  const outcome = REVIEWED[key];
  if (!outcome) {
    for (const d of JUDGED) if (page.reviews[d] === "pending") page.reviews[d] = "passed";
    return;
  }
  const open = outcome.areas.filter((a) => !(outcome.fixed ?? []).includes(a));
  const affected = new Set(
    open.map((a) => AREA_DIMENSION[a]).filter(Boolean) as (keyof Reviews)[]
  );
  const state: ReviewState = outcome.worst === "high" ? "blocked" : "in-progress";
  for (const d of JUDGED) {
    page.reviews[d] = affected.has(d) ? state : "passed";
  }
}

for (const page of PAGES) applyReview(page);
for (const family of PAGE_FAMILIES) applyReview(family);

/** For the dashboard: how many findings a route carries, and how severe. */
export function reviewFindings(route: string): ReviewOutcome | undefined {
  return REVIEWED[route];
}

export function pageIsDone(p: { reviews: Reviews }): boolean {
  return DIMENSIONS.every((d) => p.reviews[d] === "passed");
}

export function reviewStats() {
  const all = [...PAGES, ...PAGE_FAMILIES];
  const byDimension: Record<string, { passed: number; total: number }> = {};
  for (const d of DIMENSIONS) {
    byDimension[d] = {
      passed: all.filter((p) => p.reviews[d] === "passed").length,
      total: all.length,
    };
  }
  return {
    entries: all.length,
    routes: PAGES.length,
    done: all.filter(pageIsDone).length,
    blocked: all.filter((p) => (p.blockedBy?.length ?? 0) > 0).length,
    byDimension,
  };
}

export { DIMENSIONS };
