/**
 * Contracting branch — six pages aimed at one reader: a main contractor, a developer or a
 * project manager deciding whether to let this business near their programme.
 *
 * Copy rule applied throughout: describe the work, the process and the licence — all of
 * which are verifiable — and never assert a track record, crew size, insurance cover,
 * warranty period or project scale. Those are business facts nobody has supplied, and the
 * pages are written so that their absence is not a hole in the argument.
 *
 * What changed in the August 2026 pass, and why:
 *
 * 1. The four `pending` blocks are gone. They were filtered out of production by
 *    SHOW_PENDING already, which meant the four questions a contractor actually opens
 *    these pages to answer — capacity, a built example, engagement terms — were simply
 *    absent, and in dev they were answered with editorial notes about what the site was
 *    still missing. Each is now replaced with a section that answers the question as far
 *    as it can be answered truthfully: what is fixed and checkable (licence grade and the
 *    connection size it permits), what varies per project and is therefore given in the
 *    fit call, and what the reader should ask for before deciding. The gaps themselves
 *    stay registered in src/data/gaps.ts and in pages.ts `blockedBy` — they are still
 *    tracked, they are just no longer the page's answer to its own reader.
 *
 * 2. 3×250A now appears on four of the six pages. It is the one hard number this branch
 *    owns: LICENCE_CLASSES records that a חשמלאי ראשי may design as well as execute up to
 *    that connection size, and the licence number is published beside it. A main
 *    contractor sizing a subcontractor wants exactly this figure, it is checkable against
 *    the register, and it needs no photograph, no client consent and no fact the owner
 *    has not already supplied.
 *
 * 3. The word "בכנות" appeared five times across four pages. Announcing your own honesty
 *    is the weakest form of it. It survives once, in step 2 of /contracting/process/,
 *    stated as a fact about the fit check rather than as a virtue.
 */
import type { ServicePage } from "./types";

const PARENT = { label: "קבלנות ביצוע", href: "/contracting/" };

export const CONTRACTING: ServicePage[] = [
  /* ------------------------------------------------------------------ hub */
  {
    slug: "/contracting/",
    track: "contracting",
    eyebrow: "לקבלנים, ליזמים ולמנהלי פרויקט",
    h1: "קבלנות ביצוע חשמל לפרויקטים",
    // Both halves of the old title ("קבלן חשמל לפרויקטים | קבלנות ביצוע חשמל") said the
    // same thing twice. The pipe is the most valuable real estate this branch has in a
    // search result; it now carries the scope of the engagement instead of a repeat.
    title: "קבלן משנה חשמל לפרויקטים | משלד עד מסירה",
    description:
      "ביצוע החלק החשמלי בפרויקט מול קבלנים, יזמים ומנהלי פרויקט: תשתיות בשלד, לוחות, " +
      "נקודות, בדיקות ומסירה. רישיון חשמלאי ראשי 991433 — תכנון וביצוע עד 3×250A.",
    lede:
      "פרויקט הוא לא קריאת שירות גדולה. הוא דורש עמידה בלוח זמנים של אתר, עבודה לפי תוכניות, " +
      "תיאום מול קבלנים אחרים ואיש קשר אחד שאפשר להשיג. זה מה שאנחנו לוקחים על עצמנו.",
    heroPoints: [
      "ביצוע משלב השלד ועד המסירה",
      "עבודה לפי תוכניות ומול יועץ חשמל",
      "תיאום מול קבלן ראשי ובעלי מקצוע נוספים",
      // Was "אחריות על החלק החשמלי בפרויקט" — a tautology, since a subcontractor for
      // electrical work is responsible for the electrical work by definition. This slot
      // now carries the one thing on the page a competitor cannot copy without a number.
      "חשמלאי ראשי (רישיון 991433) חתום על הביצוע",
    ],
    heroImage: {
      // A 72-module commercial board with an insulation monitor and contactors — the
      // strongest evidence of non-domestic capability in the whole asset library, and it
      // was previously captioned merely "wiring work in a panel".
      src: "/images/gallery/panel-05-wide.jpeg",
      alt: "לוח חשמל מסחרי בן 72 מודולים — הגנות מדורגות, מנתקים ובקרת בידוד",
    },
    sections: [
      {
        kind: "bullets",
        id: "scope",
        title: "מה אנחנו מבצעים בפרויקט",
        intro:
          "היקף העבודה נקבע מול הקבלן הראשי או מנהל הפרויקט, ויכול לכלול חלק מהרשימה או את כולה.",
        items: [
          {
            title: "תשתיות חשמל בשלב השלד",
            text:
              "צנרת, קופסאות הסתעפות, שרוולים והכנות — לפני יציקה ולפני גמר, לפי תוכניות " +
              "החשמל של הפרויקט.",
          },
          {
            title: "לוחות חשמל",
            text:
              "לוחות דירתיים, קומתיים וראשיים — הרכבה, חיווט, הגנות מדורגות, תיוג ובדיקה. " +
              "עד 3×250A, שזו תקרת גודל החיבור שהרישיון מתיר לתכנן ולבצע.",
          },
          {
            title: "נקודות חשמל, תאורה ותקשורת",
            text: "פריסה, השחלה, חיבור והרכבת אביזרי קצה בהתאם למפרט.",
          },
          {
            title: "הזנות ומערכות משותפות",
            text:
              "הזנות ראשיות, חדרי חשמל, תאורת חירום, תאורת חוץ ומערכות שירות בבניין משותף.",
          },
          {
            title: "בדיקות ומסירה",
            text:
              "בדיקות תקינות והארקה, ליווי בדיקת מהנדס או בודק מוסמך, ותיקון ליקויים עד מסירה.",
          },
          {
            title: "מערכות סולאריות בפרויקט",
            text:
              "כשהפרויקט כולל ייצור סולארי — תשתית, מובילים, הכנות לגג וחיבור. פירוט בעמוד " +
              "הסולארי לקבלנים.",
          },
        ],
      },
      /*
       * Proof. The design review's most serious finding on this page was that it explains
       * capability and demonstrates none: no photographs beyond the hero, no projects, no
       * references, no numbers. The most sceptical audience on the site was getting the
       * page with the most promises and the least evidence.
       *
       * These three photographs are the only ones in the library that document work which
       * is demonstrably not a domestic call-out, and they were scattered across the
       * electrical pages as decoration. They are captioned as what they are — evidence of
       * a type of work — and deliberately not as named projects: no client agreed to be
       * named, and inventing that framing is how the nine stock project photographs came
       * to be presented as this business's portfolio in the first place.
       *
       * The intro used to end by explaining that the site would not fabricate case
       * studies. True, but it is a sentence about the site. It now ends by telling the
       * reader what he can get instead, which is a phone call.
       */
      {
        kind: "gallery",
        id: "evidence",
        title: "עבודות שאינן קריאת שירות ביתית",
        intro:
          "שלושה תיעודים מתוך עבודות שבוצעו: לוח דירתי בבניין רב-דיירים, מונה ולוח בדירה " +
          "נוספת באותו בניין, ותשתית תאורה בפרויקט מסחרי לפני סגירת תקרות. שם הלקוח וסיפור " +
          "הפרויקט לא מתפרסמים בלי אישורו — בשיחה אפשר לעבור על מה בוצע בכל אחת מהן.",
        images: [
          {
            src: "/images/gallery/panel-03.jpeg",
            alt: "לוח חשמל דירתי מסומן 'דירה 17' בבניין משותף — מאמתים ABB, פחת ראשי ותיוג מלא",
          },
          {
            src: "/images/gallery/panel-04.jpeg",
            alt: "לוח ומונה המסומנים 'מונה דירה 2' — פיצול פאזות, פחת ראשי ותיוג מודפס לכל מעגל",
          },
          {
            src: "/images/gallery/lighting-01-wide.jpeg",
            alt: "תשתית תאורה בפרויקט מסחרי — תקרת גבס עם פתחים, מובילים וחיווט לפני גמר",
          },
        ],
      },
      /*
       * Five cards became four, which also stops the grid breaking 3+2. The merge is not
       * cosmetic: "יזמים" was the thinnest item on the page and it addressed the most
       * valuable reader on it, while "מנהלי פרויקט" said much the same thing. Together
       * they can say what a developer actually buys — repeatability across units — instead
       * of "ליווי מתמשך", which is a phrase and not a service.
       */
      {
        kind: "audience",
        id: "who",
        title: "מול מי אנחנו עובדים",
        intro:
          "קבלן שיפוצים צריך זמינות, יזם צריך אחידות בין יחידות, ומנהל פרויקט צריך שלא " +
          "יפתיעו אותו בגאנט. אלה ההבדלים בפועל.",
        items: [
          {
            title: "קבלני בניין",
            text:
              "ביצוע החלק החשמלי בסנכרון עם שלבי הבנייה: מה חייב להיות מותקן לפני יציקה, " +
              "מתי נכנסים לגמר, ומה השלב שלנו חוסם אצל אחרים.",
          },
          {
            title: "קבלני שיפוצים",
            text:
              "היקפים קטנים ומשתנים ולוח זמנים צפוף, כולל עבודה בדירה מאוכלסת ותיאום מול " +
              "האינסטלטור, הנגר והרצף.",
          },
          {
            title: "יזמים ומנהלי פרויקט",
            text:
              "אותו מפרט ואותה רמת ביצוע בכל היחידות, תמחור לפי יחידה שאפשר להכפיל, ותיק " +
              "מסירה שאפשר להעביר הלאה. בגאנט — איש קשר אחד ועדכון על מה בוצע ומה הבא בתור.",
          },
          {
            title: "עסקים וחברות",
            text:
              "עבודות חשמל במבנה פעיל: חלון זמן מוסכם לניתוק, עבודה מחוץ לשעות הפעילות " +
              "כשצריך, ובדיקות תקופתיות לפי גודל המבנה.",
          },
        ],
      },
      /*
       * The licence table was only on the electrical pages, which is the wrong place for
       * it. A homeowner does not check licence class; a main contractor does, because the
       * class caps the connection size his subcontractor may legally design and execute.
       * Market research found seven of ten competitors claiming "ראשי" without publishing
       * a number, so a table that states the class, what it permits, and the licence
       * number alongside it is the single cheapest differentiator available here — and it
       * needs no photograph, no client permission and no data the business does not have.
       */
      {
        kind: "data-table",
        id: "licence",
        variant: "licence",
        title: "דרגת הרישיון, ומה היא מתירה",
        intro:
          "לפני שמכניסים קבלן משנה לחשמל לפרויקט, הדרגה קובעת מה מותר לו לתכנן ולבצע ועד " +
          "איזה גודל חיבור. הדרגה שלנו — חשמלאי ראשי, רישיון 991433 — מתירה תכנון וביצוע " +
          "עד 3×250A.",
      },
      /*
       * Replaces the `pending` panel headed "היקף וכושר ביצוע", whose body explained to
       * the reader which business facts the site owner had not yet supplied. Team size,
       * largest project and insurance cover are still unknown and are not invented here.
       * What this section does instead is separate the part of the answer that is fixed
       * and checkable from the part that genuinely varies per project — which is a true
       * description of how capacity works in this trade, and is more useful to a project
       * manager than a single averaged number would have been.
       */
      {
        kind: "prose",
        id: "capacity",
        title: "היקף וכושר ביצוע — מה קבוע ומה נמסר בשיחה",
        body: [
          "מי יהיה באתר, מה כבר רץ באותו חודש, ומה קורה אם לוח הזמנים שלכם זז — אלה " +
          "משתנים מפרויקט לפרויקט ומחודש לחודש. מספר אחד שמתפרסם בעמוד היה נכון ליום " +
          "שבו נכתב, ולכן התשובה נמסרת בשיחת ההתאמה מול הפרויקט שלכם.",
          "מה שקבוע ואפשר לבדוק עוד לפני השיחה: הביצוע נעשה תחת רישיון חשמלאי ראשי מס׳ " +
          "991433, שמתיר תכנון וביצוע עד גודל חיבור של 3×250A. מעל התקרה הזו נדרש בעל " +
          "רישיון בדרגה גבוהה יותר — ואם הפרויקט שלכם שם, תדעו את זה בשיחה הראשונה ולא " +
          "בשלב הבדיקה.",
          "בשיחת ההתאמה תקבלו את הזמינות באותו חודש, מי יהיה איש הקשר לאורך הפרויקט, ומה " +
          "נדרש לפתיחת התקשרות אצלכם — כולל אילו אישורים אנחנו יכולים להעביר ואילו לא. " +
          "עדיף לדעת את זה לפני שאתם משקיעים זמן בהעברת תוכניות לתמחור.",
        ],
      },
      {
        kind: "steps",
        id: "how",
        title: "איך זה עובד",
        intro: "התהליך המלא, כולל מה נדרש מכם בכל שלב, מפורט בעמוד ייעודי.",
        items: [
          {
            title: "פנייה ובדיקת התאמה",
            text:
              "אתם שולחים סוג פרויקט, מיקום, שלב והיקף. אנחנו חוזרים עם תשובה אם זה מתאים " +
              "לנו — גם כשהתשובה שלילית. עדיף לפסול מוקדם מאשר לעכב אתכם.",
          },
          {
            title: "עיון בתוכניות והצעת מחיר",
            text:
              "הצעה לפי סעיפי כתב הכמויות שלכם. מה בדיוק נכנס להצעה ומה נשאר מחוץ לה — " +
              "בעמוד התהליך.",
          },
          {
            title: "תיאום ולוח זמנים",
            text: "שיבוץ מול הגאנט של האתר וסיכום נקודות הממשק מול הקבלנים האחרים.",
          },
          {
            title: "ביצוע",
            text: "עבודה בשלבים לפי התקדמות האתר, עם עדכון שוטף על מה בוצע ומה הבא בתור.",
          },
          {
            title: "בדיקות ומסירה",
            text: "בדיקות, ליווי הבודק, תיקון ליקויים ומסירה מסודרת.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "אתם עובדים כקבלן משנה תחת קבלן ראשי?",
        a:
          "כן. זו צורת ההתקשרות המקובלת בפרויקט — ביצוע החלק החשמלי תחת הקבלן הראשי, בתיאום " +
          "מול מנהל העבודה ולפי לוח הזמנים של האתר.",
      },
      {
        q: "אפשר לקבל הצעת מחיר לפי כתב כמויות?",
        a:
          "כן, וזו גם הדרך המדויקת ביותר. אם יש כתב כמויות או תוכניות חשמל — שלחו אותם ונחזור " +
          "עם הצעה לפי סעיפים. אם עדיין אין, אפשר להתחיל משיחה ולתת טווח.",
      },
      {
        q: "מה קורה אם לוח הזמנים באתר זז?",
        a:
          "זה קורה כמעט בכל פרויקט. מה שחשוב הוא שנדע מראש — עדכון על שינוי מאפשר לשבץ מחדש " +
          "בלי שהחשמל יהפוך לצוואר בקבוק.",
      },
      {
        q: "אתם מלווים גם את בדיקת המהנדס או הבודק?",
        a:
          "כן. הבדיקה היא חלק מהמסירה, לא שלב נפרד — כולל תיקון ליקויים אם עולים ובדיקה חוזרת.",
      },
      {
        // The strongest objection on the page used to be answered with a paragraph about
        // the site's content policy. The reader did not ask about the site.
        q: "אפשר לדבר עם קבלן שעבדתם איתו?",
        a:
          "אין באתר המלצות מלקוחות עסקיים — עוד לא ביקשנו מאף אחד מהם אישור פרסום, ולא " +
          "נציג המלצה של לקוח פרטי כאילו היא מפרויקט. אם חשוב לכם לדבר עם מישהו לפני " +
          "שמחליטים, תגידו איזה סוג פרויקט אתם בוחנים ונבדוק מי מוכן לשיחה. באתר לא " +
          "מוצגות המלצות עסקיות — לקוח עסקי מעדיף בדרך כלל שיחה ישירה על פני ציטוט עם השם " +
          "שלו בעמוד.",
      },
    ],
    related: [
      { label: "לקבלני בניין", href: "/contracting/builders/" },
      { label: "לקבלני שיפוצים", href: "/contracting/renovation/" },
      { label: "ביצוע סולארי לקבלנים", href: "/solar/contractors/" },
      { label: "איך עובדים איתנו", href: "/contracting/process/" },
    ],
  },

  /* -------------------------------------------------------------- builders */
  {
    slug: "/contracting/builders/",
    track: "contracting",
    parent: PARENT,
    eyebrow: "קבלנות ביצוע",
    h1: "חשמל לקבלני בניין",
    title: "קבלן משנה חשמל לקבלני בניין וליזמים",
    description:
      "קבלן משנה לביצוע החלק החשמלי בפרויקט בנייה: תשתיות בשלד, השחלה ופריסה, לוחות " +
      "דירתיים וקומתיים, גמר, בדיקות ומסירה — לפי תוכניות ולפי כתב כמויות.",
    lede:
      "בפרויקט בנייה, החשמל נכנס בשלבים ולא בבת אחת. כל שלב תלוי בקודם ומעכב את הבא אחריו — " +
      "ולכן מה שקובע הוא לא רק איכות הביצוע אלא גם היכולת להיות באתר בזמן הנכון.",
    heroPoints: [
      "עבודה לפי תוכניות חשמל וכתב כמויות",
      "כניסה בשלבים לפי התקדמות האתר",
      "תיאום ממשקים מול יתר קבלני המשנה",
      "ליווי בדיקות ומסירה",
    ],
    sections: [
      /*
       * Rewritten so this list stops being a second copy of the eight commercial steps on
       * /contracting/process/. The two pages were showing the same component with
       * overlapping content; the difference that matters to a main contractor is that
       * these steps are gated — each one has something that must be ready before it, and
       * something it blocks afterwards. That framing is what he schedules against.
       */
      {
        kind: "steps",
        id: "stages",
        title: "שלבי הביצוע בפרויקט בנייה",
        intro:
          "לכל שלב יש מה שחייב להיות מוכן לפניו ומה שהוא חוסם אחריו. זה מה שקובע אם החשמל " +
          "מעכב את הגאנט או נגרר אחריו.",
        items: [
          {
            title: "הכנות ותשתית בשלד",
            text:
              "צנרת, שרוולים, קופסאות והכנות לפני יציקה. דורש תוכנית חשמל מאושרת ומועד יציקה " +
              "ידוע מראש; חוסם את היציקה עצמה. זה השלב היחיד שאי אפשר לחזור אליו אחר כך, " +
              "ולכן הוא נעשה לפי תוכנית ולא לפי אלתור באתר.",
          },
          {
            title: "השחלה ופריסה",
            text:
              "השחלת מוליכים, פריסת נקודות והכנת מיקומי לוחות וחדרי חשמל. דורש מחיצות " +
              "בנויות וחריצים סגורים; חוסם את הטיח ואת הגבס.",
          },
          {
            title: "לוחות והזנות",
            text:
              "הרכבת לוחות דירתיים, קומתיים וראשיים, כולל הגנות מדורגות ותיוג מלא — עד " +
              "3×250A, תקרת גודל החיבור שהרישיון מתיר לתכנן ולבצע. דורש חדר חשמל גמור " +
              "ונגיש; חוסם את חיבור החשמל הקבוע.",
          },
          {
            title: "גמר והרכבת אביזרים",
            text:
              "שקעים, מפסקים, גופי תאורה ואביזרי קצה. דורש צבע, ריצוף ונגרות שהסתיימו " +
              "באזור; חוסם את המסירה לדיירים.",
          },
          {
            title: "בדיקות, ליקויים ומסירה",
            text:
              "בדיקות תקינות והארקה, ליווי הבודק המוסמך, תיקון הליקויים שעלו ובדיקה חוזרת. " +
              "כאן מתקבלים האישורים שנדרשים מהחלק החשמלי להמשך הליכי המסירה.",
          },
        ],
      },
      /*
       * Four interface points became six. The two that were missing — temporary site
       * power, and the date of the permanent connection — are the two that most often
       * turn into an argument on site, and neither requires a fact about this business.
       */
      {
        kind: "bullets",
        id: "interfaces",
        title: "נקודות הממשק שגורמות לרוב העיכובים",
        intro:
          "אלה הנקודות שבהן פרויקטים נתקעים. אנחנו מסכמים אותן מראש ולא בדיעבד.",
        items: [
          {
            title: "מול קבלן השלד",
            text: "מועדי יציקה — מה חייב להיות מותקן לפני, ומי מודיע למי.",
          },
          {
            title: "מול האינסטלטור ומיזוג האוויר",
            text: "מסלולי צנרת משותפים וקדיחות, כדי שלא נתנגש בקירות ובתקרות.",
          },
          {
            title: "מול קבלן הגמר",
            text: "מועד הרכבת האביזרים ביחס לצבע, לריצוף ולנגרות.",
          },
          {
            title: "מול היועץ והבודק",
            text: "שינויים מהתוכנית מתועדים ומאושרים, כדי שהבדיקה לא תיפול על פער בין תוכנית לביצוע.",
          },
          {
            title: "חשמל זמני באתר",
            text:
              "מי מספק את לוח החשמל הזמני, מי אחראי לתקינותו ומה קורה כשהוא מגיע לגבול " +
              "העומס. סיכום מראש חוסך את הוויכוח הזה בשלב הגמר.",
          },
          {
            title: "מועד החיבור הקבוע",
            text:
              "הטיפול מול חברת החשמל אינו בקצב של האתר. ככל שהוא מתחיל מוקדם יותר, כך פוחת " +
              "הסיכוי שהחשמל יהיה הסעיף שמעכב אכלוס.",
          },
        ],
      },
      /*
       * Replaces the `pending` panel headed "פרויקט לדוגמה", whose body told the reader,
       * in the business's own words, that not one contracting project was documented.
       *
       * No case study can be written until the owner supplies one (gap
       * case.contracting.first), and no site photograph exists (gap
       * photo.site.construction). What can be offered without either is the thing a main
       * contractor does at this stage anyway: a checklist of what to demand from a
       * prospective electrical subcontractor. It is useful whether or not he picks us, it
       * is entirely truthful, and every item routes to a conversation.
       */
      {
        kind: "bullets",
        id: "vetting",
        title: "מה לבקש מאיתנו לפני שמחליטים",
        intro:
          "זו הרשימה שכדאי לעבור עליה מול כל קבלן משנה לחשמל, לא רק מולנו. אצלנו אפשר לבקש " +
          "את כולה בשיחה אחת.",
        items: [
          {
            title: "התאמת דרגת הרישיון לגודל החיבור",
            text:
              "רישיון חשמלאי ראשי מס׳ 991433 מתיר תכנון וביצוע עד 3×250A. אם החיבור בפרויקט " +
              "גדול מזה, תדעו את זה בשיחה הראשונה — לא אחרי שהתחלנו.",
          },
          {
            title: "שאלות שכדאי לשאול אותנו",
            text:
              "מה בוצע, באיזה שלב נכנסנו, מול מי היה התיאום ומי היה איש הקשר. באתר לא מפורסם " +
              "פרויקט בנייה מצולם — צילום באתר פעיל תלוי באישור של הקבלן הראשי, ותמונות שאינן " +
              "שלנו לא ייכנסו לכאן.",
          },
          {
            title: "תמחור על המסמכים שלכם",
            text:
              "כתב הכמויות שלכם חוזר מתומחר לפי הסעיפים שלו, כדי שתוכלו להשוות שורה מול שורה " +
              "מול הצעות אחרות במקום להשוות מחיר גלובלי.",
          },
          {
            title: "סיכום ממשקים לפני התחלה",
            text:
              "מה חייב להיות מוכן לפני כל שלב שלנו, ומה השלב שלנו חוסם. זה מה שקובע אם החשמל " +
              "מופיע בגאנט כסיכון או כשורה שקטה.",
          },
          {
            // "חיבור לממליץ" promised a connection as though a pool of business
            // references were on file to pick from. It is not: no contracting client has
            // been asked for permission to be named. The heading now describes the
            // request, which is what can actually be honoured.
            title: "בקשת ממליץ",
            text:
              "תגידו איזה סוג פרויקט אתם בוחנים ונבדוק מי מהלקוחות מוכן לשיחה. אין באתר " +
              "המלצות עסקיות מפני שטרם ביקשנו אישור פרסום.",
          },
          {
            title: "מסמכי ההתקשרות",
            text:
              "שלחו את נוהל ההתקשרות שלכם — אישורים, טפסים ודרישות רכש — ונעבור עליו סעיף " +
              "אחרי סעיף לפני תחילת עבודה, כולל מה אנחנו יכולים להעביר ומה לא.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "אתם נכנסים לפרויקט שכבר התחיל?",
        a:
          "כן, וזה נפוץ. צריך רק לעבור על מה שכבר בוצע לפני שממשיכים — כדי שלא נחתום על עבודה " +
          "של מישהו אחר בלי לבדוק אותה.",
      },
      {
        q: "מי אחראי על הזמנת החומרים?",
        a:
          "משתנה לפי ההתקשרות. אפשר עבודה כוללת חומרים ואפשר ביצוע בלבד כשהקבלן הראשי מספק — " +
          "מסכמים מראש כי זה משפיע גם על המחיר וגם על לוח הזמנים.",
      },
      {
        q: "אתם עובדים לפי מפרט של יועץ חשמל?",
        a:
          "כן. כשיש יועץ ותוכניות, מבצעים לפיהן. במקרה של סתירה בין התוכנית לשטח, מעלים את זה " +
          "מול היועץ ומתעדים במקום להחליט לבד.",
      },
      {
        q: "מי חתום על החלק החשמלי מול הבודק?",
        a:
          "בעל הרישיון שביצע — חשמלאי ראשי מס׳ 991433. הוא זה שמלווה את הבדיקה, מטפל בליקויים " +
          "שעולים בה וחוזר לבדיקה החוזרת, כך שאין שלב שבו מישהו אחר צריך לחתום על עבודה שלא ראה.",
      },
    ],
    related: [
      { label: "תשתיות חשמל", href: "/contracting/infrastructure/" },
      { label: "איך עובדים איתנו", href: "/contracting/process/" },
      // Five of the six pages in this branch ended in sideways navigation only. A builder
      // who has read this far has the highest intent in the branch, and the action that
      // follows from what he just read is sending the bill of quantities.
      { label: "שליחת כתב כמויות לתמחור", href: "/quote/?track=contracting" },
    ],
  },

  /* ------------------------------------------------------------ renovation */
  {
    slug: "/contracting/renovation/",
    track: "contracting",
    parent: PARENT,
    eyebrow: "קבלנות ביצוע",
    h1: "חשמל לקבלני שיפוצים",
    title: "חשמל לקבלני שיפוצים — תשתית, לו״ז ומסירה",
    description:
      "קבלן משנה לעבודות חשמל בשיפוץ: סקר תשתית קיימת, החלפת תשתית, הוספת נקודות, לוח חדש " +
      "ובדיקה — בתיאום עם האינסטלטור, הנגר והרצף, גם בדירה מאוכלסת.",
    lede:
      "בשיפוץ, החשמלאי הוא לרוב זה שמעכב או מקדם את כל השאר. היקף העבודה קטן יותר מפרויקט " +
      "בנייה, אבל הדרישה לזמינות ולתיאום גבוהה בהרבה.",
    heroPoints: [
      "היקפים משתנים — מדירה בודדת ועד מספר יחידות",
      "עבודה גם בנכס מאוכלס",
      "תיאום מול אינסטלטור, נגר ורצף",
      // Was "פתיחת קירות ותשתית קיימת ללא הפתעות" — a promise the page itself contradicts
      // two sections later, and one nobody can keep about a wall they have not opened.
      "תשתית קיימת נבדקת לפני התמחור, לא באמצע העבודה",
    ],
    sections: [
      {
        kind: "bullets",
        id: "scope",
        title: "מה נכנס לעבודת שיפוץ",
        items: [
          {
            title: "החלפת תשתית ישנה",
            text:
              "בדירות ישנות התשתית לרוב לא עומדת בעומס של היום. מחליפים מה שצריך ומסבירים " +
              "מראש מה חובה ומה שיפור.",
          },
          {
            title: "הוספת נקודות",
            text: "שקעים, תאורה, תקשורת ונקודות ייעודיות למכשירים.",
          },
          {
            title: "החלפה או חידוש לוח",
            text: "לוח חדש עם ממסר פחת והגנות מתאימות, מתויג ומסודר.",
          },
          {
            title: "התאמה לעומס חדש",
            text: "מיזוג, תנור, מטען לרכב חשמלי — בדיקה שהתשתית והחיבור עומדים בזה.",
          },
          {
            title: "בדיקה ואישור",
            text: "בסיום — בדיקה, ואם צריך גם דוח לחברת ביטוח.",
          },
        ],
      },
      /*
       * New. The review found this the thinnest page in the branch — two content sections,
       * nothing that distinguishes it from /contracting/builders/ — and a renovation
       * contractor left it knowing nothing about how the work would actually run in his
       * flat. These steps are specific to renovation and are the opposite of the new-build
       * sequence: the first job is finding out what is already in the wall.
       */
      {
        kind: "steps",
        id: "stages",
        title: "איך רצה עבודת חשמל בשיפוץ",
        intro:
          "הסדר הזה קיים כדי שההחלטות היקרות ייפלו לפני הפירוק ולא אחריו.",
        items: [
          {
            title: "סקר תשתית קיימת",
            text:
              "מה יש בקירות: חתך מוליכים, סוג התשתית, מצב ההארקה וגודל החיבור. זה השלב " +
              "שקובע אם מדובר בהוספת נקודות או בהחלפת תשתית, וההפרש ביניהם הוא כל התקציב.",
          },
          {
            title: "סימון מה נשאר ומה מוחלף",
            text:
              "עוברים בדירה ומסמנים בפועל, יחד אתכם ועם הלקוח. מה שמסומן נכנס להצעה; מה " +
              "שנשאר קיים נרשם ככזה, כדי שלא יתגלה בסוף כאחריות של מישהו.",
          },
          {
            title: "פירוק והכנות",
            text:
              "חציבה, פירוק תשתית ישנה והכנת מסלולים. השלב הרועש והמלוכלך — עדיף לרכז אותו " +
              "לפני שהאינסטלטור והטייח נכנסים.",
          },
          {
            title: "תשתית חדשה והשחלה",
            text:
              "צנרת חדשה, השחלת מוליכים ופריסת הנקודות לפי הסימון. כאן נסגרות נקודות המטבח " +
              "והארונות — לפני שהנגר מייצר, לא אחרי.",
          },
          {
            title: "לוח והגנות",
            text:
              "לוח חדש או חידוש לוח קיים, עם ממסר פחת, הגנות מתאימות לעומס החדש ותיוג לכל " +
              "מעגל. בדירה מאוכלסת מתאמים מראש את שעות הניתוק.",
          },
          {
            title: "אביזרים, בדיקה ומסירה",
            text:
              "הרכבת אביזרי קצה אחרי צבע וריצוף, בדיקת תקינות והארקה, ומסירה עם טבלת מעגלים " +
              "לפי מה שבוצע בפועל.",
          },
        ],
      },
      /*
       * New. Same reasoning as the builders interface list: in renovation the schedule is
       * decided almost entirely at the seams between trades, and these are the seams.
       */
      {
        kind: "bullets",
        id: "interfaces",
        title: "הממשקים שקובעים את הלו״ז בשיפוץ",
        items: [
          {
            title: "מול האינסטלטור",
            text:
              "מקלחת ומטבח — מי חוצה את מי בקיר, ואיפה נקודות החשמל ביחס לצנרת המים " +
              "והניקוז.",
          },
          {
            title: "מול הנגר והמטבח",
            text:
              "נקודות למכשירים, לתאורת ארונות ולשקעי משטח נסגרות לפני ההזמנה למפעל. שינוי " +
              "אחרי ייצור עולה בנגרות, לא בחשמל.",
          },
          {
            title: "מול הטייח והרצף",
            text: "מועד סגירת החריצים והשלמת הריצוף — שקובע מתי אפשר להרכיב אביזרים.",
          },
          {
            title: "מול הדייר בנכס מאוכלס",
            text:
              "אילו שעות מתאימות, אילו מעגלים חייבים להישאר חיים, ומה מנותק ולכמה זמן.",
          },
          {
            title: "מול הלוח והמונה בבניין",
            text:
              "גישה לחדר מדרגות או לחדר מונים, ותיאום עם ועד הבית כשנדרשת עבודה בשטח משותף.",
          },
          {
            title: "מול הבודק",
            text:
              "מה נבדק בסוף ומה נדרש כדי לעבור בפעם הראשונה — בעיקר הארקה והגנות, ששם נופלות " +
              "רוב הבדיקות החוזרות בשיפוץ.",
          },
        ],
      },
      {
        kind: "prose",
        id: "surprises",
        title: "למה שיפוצים מתפוצצים בתקציב",
        body: [
          "רוב חריגות התקציב בחשמל בשיפוץ לא נובעות מהעבודה עצמה אלא ממה שמתגלה כשפותחים קיר: " +
          "תשתית אלומיניום, חיבורים ישנים בתוך הקיר, היעדר הארקה או חתך מוליכים שלא מתאים לעומס.",
          "אנחנו מעדיפים לבדוק את זה בביקור הראשון ולומר מראש מה הסיכון, גם כשזה מייקר את " +
          "ההצעה. קבלן שיפוצים שמקבל הפתעה באמצע העבודה משלם עליה פעמיים — בכסף ובלוח זמנים.",
        ],
      },
    ],
    faq: [
      {
        q: "כמה זמן לוקחת עבודת חשמל בשיפוץ דירה?",
        a:
          "תלוי בהיקף ובשאלה אם מחליפים תשתית או רק מוסיפים נקודות. אחרי ביקור באתר אפשר לתת " +
          "לוח זמנים אמיתי. מספר שניתן לפני שראינו את הנכס תמיד זז, וזה בדיוק מה ששובר לוח " +
          "זמנים של שיפוץ.",
      },
      {
        q: "אפשר לעבוד בדירה מאוכלסת?",
        a:
          "כן, בתיאום. עובדים במקטעים כדי שלא יישארו בלי חשמל, ומסכמים מראש אילו שעות מתאימות.",
      },
      {
        q: "מה קורה כשמתגלה תשתית אלומיניום?",
        a:
          "מסמנים אותה ומראים לכם. חיבורי אלומיניום מתרופפים עם הזמן והם מקור מוכר להתחממות, " +
          "ולכן ההמלצה היא להחליף את המעגלים הרלוונטיים ולא לחבר עליהם. מה שמוחלף ומה שנשאר " +
          "נרשם בהצעה, כדי שיהיה ברור על מה ניתנת אחריות.",
      },
      {
        q: "אתם עובדים עם קבלני שיפוצים באופן קבוע?",
        a:
          "כן. בעבודה חוזרת שווה לסכם מראש שיטה אחת לכל היחידות — אותו מפרט, אותו אופן תמחור " +
          "ותיאום ישיר מול מנהל העבודה — במקום להתחיל כל דירה מחדש.",
      },
    ],
    related: [
      { label: "לוחות חשמל", href: "/electrical/panels/" },
      { label: "בדיקות ואישורים", href: "/electrical/inspection/" },
      { label: "בקשת ביקור באתר", href: "/quote/?track=contracting" },
    ],
  },

  /* ------------------------------------------------------------ commercial */
  {
    slug: "/contracting/commercial/",
    track: "contracting",
    parent: PARENT,
    eyebrow: "קבלנות ביצוע",
    // "ותעשייה" removed from the H1, the title and the description. The page's five cards
    // were all retail and office scale, there is no documented industrial work, and the
    // review's own conclusion was that narrowing the claim beats padding the body with
    // industrial cards nobody can stand behind. A plant manager who lands here now learns
    // that in one line instead of five sections.
    h1: "חשמל לעסקים ולמבנים מסחריים",
    title: "חשמל לעסקים ולמבנים מסחריים | לוחות ותשתיות",
    description:
      "עבודות חשמל לחנות, למשרד ולמחסן: לוחות מסחריים, תשתיות ומובילים, תאורה ותאורת " +
      "חירום, ובדיקה תקופתית לפי חוזר מהנדס ראשי. גם במבנה פעיל, מחוץ לשעות הפעילות.",
    lede:
      "במבנה מסחרי, השבתה עולה כסף. לכן מה שקובע הוא לא רק הביצוע אלא גם התכנון של מתי " +
      "עובדים, על מה מפסיקים מתח ולכמה זמן.",
    // No hero image, deliberately.
    //
    // This page used lighting-04-wide.jpeg — the finished shop interior — which carries
    // the client's brand name, logo, full price list and a neighbouring tenant's signage.
    // Held until permission to publish is on record (consent.commercial-client-brand).
    //
    // The obvious substitute, panel-05-wide.jpeg, already leads both the homepage and the
    // contracting gateway. Putting it here too would make one photograph the face of three
    // pages, which reads as a business with one photograph rather than as a considered
    // choice. Eight usable photographs exist for forty-three routes; a text hero is the
    // honest answer until there are more. PageHero renders without an image by design.
    heroPoints: [
      "עבודה במבנה פעיל, כולל מחוץ לשעות הפעילות",
      "לוחות מסחריים, הזנות ותשתיות",
      "תאורה, תעלות ומובילים",
      "בדיקות תקופתיות לפי חוזר מהנדס ראשי",
    ],
    sections: [
      {
        kind: "bullets",
        id: "scope",
        // Was "סוגי עבודות" — the most generic heading in either services file.
        title: "מה מבצעים בחנות, במשרד ובמחסן",
        items: [
          {
            title: "התאמת חנות או משרד",
            text: "תשתית, תאורה, נקודות ולוח — כחלק מהתאמת מושכר לפני פתיחה.",
          },
          {
            title: "לוחות מסחריים",
            text:
              "לוחות בהיקף שאינו ביתי, כולל הגנות מדורגות, סימון ותכנון עומסים — עד 3×250A, " +
              "תקרת גודל החיבור שהרישיון מתיר לתכנן ולבצע.",
          },
          {
            title: "תשתיות ומובילים",
            text: "תעלות, סולמות כבלים, הזנות וחלוקה בין אזורים.",
          },
          {
            title: "נקודות ומעגלים ייעודיים",
            text:
              "ציוד מטבח, מקררים, עמדות עבודה ועמדות טעינה — מעגל ייעודי והגנה מתאימה במקום " +
              "העמסה על מה שכבר קיים.",
          },
          {
            title: "תאורת מבנה ותאורת חירום",
            text: "תכנון פריסה, התקנה ובדיקה.",
          },
          {
            title: "תחזוקה ובדיקות תקופתיות",
            text:
              "בדיקה תקופתית של לוחות, הארקה והגנות, בתדירות שנגזרת מגודל המבנה ומקהל " +
              "המבקרים — ראו הטבלה למטה.",
          },
        ],
      },
      /*
       * New. The lede promises that the plan for the shutdown matters more than the work,
       * and then the page never said how a shutdown is planned. For a shop or an office
       * this is the whole purchase decision: not whether the work can be done, but what it
       * costs in closed hours.
       */
      {
        kind: "prose",
        id: "downtime",
        title: "עבודה במבנה פעיל",
        body: [
          "רוב העבודות אפשר לבצע בלי לעצור את הפעילות: תוספת מעגל, פריסת תשתית, החלפת גופי " +
          "תאורה והכנות בלוח נעשות כשהעסק פתוח. מה שמחייב ניתוק מתח הוא עבודה על ההזנה " +
          "עצמה, החלפת לוח או הוספת הגנה ראשית.",
          "כשנדרש ניתוק, מסכמים מראש חלון זמן ואת גבולותיו — איזה אזור מנותק, לכמה זמן, ומה " +
          "חייב להישאר חי: מקררים, שרתים, מצלמות, מערכת גילוי אש. כל מה שאפשר להכין מראש " +
          "מוכן לפני החלון, כדי שהזמן שבו העסק סגור יהיה הקצר ביותר ולא הנוח ביותר לנו.",
        ],
      },
      /*
       * Replaces the `pending` panel headed "פרויקט מסחרי לדוגמה", whose body stated on a
       * page selling commercial work that the site had no visual proof of commercial work.
       *
       * The statutory inspection intervals go here instead. They are verified (חוזר מהנדס
       * ראשי, 20.9.2010), no competitor site examined publishes them, and they answer a
       * question the reader has a legal obligation to answer anyway. It is the one kind of
       * proof this page can carry today: not proof of what was built, but proof that the
       * person writing it knows what the reader is required to do.
       */
      {
        kind: "data-table",
        id: "inspection",
        variant: "inspection",
        title: "כל כמה זמן חייבים לבדוק את המתקן בעסק",
        intro:
          "התדירות נקבעת לפי גודל המבנה, סוג העסק והאם יש בו קהל מבקרים. אם עברה התקופה " +
          "שבשורה הרלוונטית אליכם, זו העבודה שכדאי להזמין ראשונה.",
      },
    ],
    faq: [
      {
        q: "אפשר לעבוד בלי להשבית את העסק?",
        a:
          "לרוב כן, אם מתכננים מראש. חלק מהעבודות מחייבות ניתוק מתח — במקרה כזה מסכמים חלון " +
          "זמן, בדרך כלל מחוץ לשעות הפעילות.",
      },
      {
        q: "אתם מבצעים גם בדיקות תקופתיות?",
        a:
          "כן. בדיקה יזומה של לוחות, הארקה והגנות עולה פחות מהשבתה לא מתוכננת, והדוח שמתקבל " +
          "בסופה הוא המסמך שמבקשים בדרך כלל ברישוי עסק ובחידוש ביטוח.",
      },
      {
        q: "מה קורה אם הבדיקה מעלה ליקויים?",
        a:
          "הדוח מפרט אותם לפי חומרה. מתקנים את מה שמסכן, מתמחרים את מה שדורש עבודה גדולה " +
          "יותר ובודקים שוב — כדי שהדוח שנשאר בידיכם יהיה דוח תקין ולא רשימת פתוחים.",
      },
      {
        q: "מה לגבי עבודות מעבר לגודל החיבור שלכם?",
        a:
          "היקף העבודה המותר נגזר מדרגת הרישיון: חשמלאי ראשי מתכנן ומבצע עד 3×250A. מעל זה, " +
          "וכן בעבודות מתח גבוה, נדרש בעל רישיון בדרגה אחרת — ונאמר לכם את זה לפני שמתחילים " +
          "במקום לקחת את העבודה ולהסתבך.",
      },
    ],
    related: [
      { label: "תשתיות חשמל", href: "/contracting/infrastructure/" },
      { label: "בדיקות ואישורים", href: "/electrical/inspection/" },
      { label: "בקשת הצעת מחיר לעסק", href: "/quote/?track=contracting" },
    ],
  },

  /* -------------------------------------------------------- infrastructure */
  {
    slug: "/contracting/infrastructure/",
    track: "contracting",
    parent: PARENT,
    eyebrow: "קבלנות ביצוע",
    h1: "תשתיות חשמל",
    title: "תשתיות חשמל — הזנות, תעלות ולוחות ראשיים",
    description:
      "ביצוע תשתיות חשמל בפרויקט: מסלולי מובילים, תעלות וסולמות כבלים, הזנות ראשיות, לוחות " +
      "ראשיים וקומתיים עד 3×250A, ותיק מסירה שאפשר לתחזק לפיו כעבור שנים.",
    lede:
      "תשתית היא החלק שאף אחד לא רואה אחרי המסירה, ובדיוק לכן היא החלק שהכי יקר לתקן. " +
      // Was "ההבדל בין עבודה מסודרת לעבודה מהירה" — which tells a contractor, for whom
      // speed is a buying criterion and not a sin, that we are the slow option.
      "כאן ההבדל בין ביצוע נכון לביצוע חפוז מתגלה רק כעבור שנים — בדרך כלל על חשבון מי " +
      "שקנה את הדירה, ובשם של מי שבנה אותה.",
    heroImage: {
      src: "/images/gallery/lighting-01-wide.jpeg",
      // Alt narrowed to what is actually in the frame. The previous wording invited the
      // reader to look for cable ladders and main feeds that this photograph does not
      // contain; a caption that promises more than the image shows costs more credibility
      // than the image earns.
      alt: "שלב תשתית בפרויקט מסחרי — מובילים וחיווט מעל תקרה פתוחה, לפני סגירה וגמר",
    },
    heroPoints: [
      "הזנות ראשיות וחדרי חשמל",
      "תעלות, סולמות כבלים ומובילים",
      "לוחות ראשיים וקומתיים — תכנון וביצוע עד 3×250A",
      "תיוג ותיק מסירה לתחזוקה עתידית",
    ],
    sections: [
      {
        kind: "bullets",
        id: "scope",
        title: "מה כולל ביצוע תשתית",
        items: [
          {
            title: "תכנון מסלולים",
            text:
              "קביעת מסלולי הובלה בתיאום עם יתר המערכות במבנה, לפני שקודחים ולא אחרי.",
          },
          {
            title: "מובילים ותעלות",
            text: "התקנת תעלות, סולמות ושרוולים עם רזרבה למערכות עתידיות.",
          },
          {
            title: "הזנות וחלוקה",
            text:
              "הזנות ראשיות, חלוקה לאזורים ומיקום נקודות הניתוק. גודל החיבור שאנחנו מתכננים " +
              "ומבצעים מגיע עד 3×250A — התקרה שדרגת הרישיון מתירה.",
          },
          {
            title: "לוחות",
            text: "לוח ראשי ולוחות משנה, עם הגנות מדורגות ותיוג ברור.",
          },
          {
            title: "רזרבה לעתיד",
            text:
              "מקום פנוי בתעלה ומקומות פנויים בלוח. תוספת מערכות אחרי מסירה היא כמעט ודאות, " +
              "ורזרבה שנשמרה בשלב התשתית עולה שבריר ממה שתעלה הוספתה אחר כך.",
          },
          {
            title: "תיעוד מסירה",
            text:
              "טבלת מעגלים לפי מה שבוצע בפועל, סימון נקודות הניתוק ופרטי מי שביצע — כך שאפשר " +
              "לתחזק את המבנה בלי לחפש אותנו.",
          },
        ],
      },
      /*
       * Retitled and rewritten. The old heading, "למה תיוג ותיעוד הם לא פינוק", defended
       * against an accusation nobody made, and the body restated the bullet above it with
       * the same "guessing which breaker" metaphor used twice more elsewhere on the site.
       * The section now says what is actually handed over, which is the part a facilities
       * manager or a main contractor is receiving.
       */
      {
        kind: "prose",
        id: "handover",
        title: "מה נמסר בסוף, מעבר ללוח עצמו",
        body: [
          "את מי שיתחזק את המבנה בעוד שנתיים לא מעניין התיוג כשלעצמו אלא מה נמסר יחד איתו: " +
          "טבלת מעגלים לפי הביצוע בפועל ולא לפי התוכנית המקורית, סימון נקודות הניתוק, " +
          "ותוצאות הבדיקות שנעשו לפני המסירה.",
          "זה מה שהופך מסירה למסמך במקום לערימת מדבקות בלוח — ובפרויקט שנמסר לוועד בית או " +
          "למנהל מבנה, זה גם ההבדל בין תקלה שמטופלת בשיחת טלפון אחת לבין תקלה שמתחילה " +
          "בשעתיים של חיפוש.",
        ],
      },
    ],
    faq: [
      {
        q: "מי מספק את התעלות, הכבלים והלוחות?",
        a:
          "שתי הצורות אפשריות: עבודה כוללת חומרים, או ביצוע בלבד כשהרכש אצלכם. מסכמים מראש, " +
          "כי זה משפיע גם על המחיר וגם על זמני האספקה — ובתשתית זמן אספקה של לוח או של סולם " +
          "כבלים הוא לרוב מה שקובע את התאריך.",
      },
      {
        q: "איך מתואמת התשתית מול המיזוג והספרינקלרים?",
        a:
          "לפני הביצוע קובעים מי עובר איפה ובאיזה גובה, ומי חוצה את מי. תשתית חשמל שנקבעה " +
          "אחרי שתעלות המיזוג כבר במקום מסתיימת בעקיפות, ועקיפה היא חיבור נוסף בכל פעם. " +
          "שינויים בשטח מתועדים ומאושרים כדי שהתיעוד למסירה יתאר את מה שקיים.",
      },
      {
        q: "אתם משאירים רזרבה בתעלות?",
        a:
          "כן, במידת האפשר. תוספת מערכות אחרי מסירה היא כמעט ודאות, ותעלה מלאה עד הסוף אומרת " +
          "שכל תוספת עתידית תדרוש עבודה כפולה.",
      },
      {
        q: "מי קובע את חתך המוליכים?",
        a:
          "כשיש יועץ חשמל — התוכנית. כשאין, מחשבים לפי העומס המתוכנן ולפי התקן, ולא לפי מה " +
          "שהיה קיים קודם.",
      },
      {
        q: "עד איזה גודל חיבור אתם מתכננים ומבצעים?",
        a:
          "עד 3×250A. זו התקרה שדרגת חשמלאי ראשי מתירה לתכנן ולבצע, והרישיון — מס׳ 991433 — " +
          "מופיע בכל עמוד באתר. מעל התקרה הזו נדרש בעל רישיון בדרגה גבוהה יותר, ונאמר לכם " +
          "את זה לפני שנכנסים לתמחור.",
      },
    ],
    related: [
      { label: "לקבלני בניין", href: "/contracting/builders/" },
      { label: "חשמל לעסקים", href: "/contracting/commercial/" },
      { label: "שליחת תוכניות חשמל לתמחור", href: "/quote/?track=contracting" },
    ],
  },

  /* --------------------------------------------------------------- process */
  {
    slug: "/contracting/process/",
    track: "contracting",
    parent: PARENT,
    eyebrow: "קבלנות ביצוע",
    h1: "איך עובדים איתנו בפרויקט",
    title: "הצעת מחיר לחשמל בפרויקט — התהליך מול קבלנים",
    description:
      "מפנייה ראשונה ועד מסירה: בדיקת התאמה, תמחור לפי סעיפי כתב הכמויות, שיבוץ בגאנט, " +
      "ביצוע בשלבים, בדיקות ומסירה — ומה נדרש מכם בכל שלב כדי לעמוד בלוח הזמנים.",
    // Was a sentence about the page itself, which also framed the phone call as a
    // commitment the reader should prepare for. A process page exists to remove friction.
    lede:
      "מפנייה ראשונה ועד מסירה: מה קורה בכל שלב, מה אנחנו צריכים מכם, ובאיזה שלב המחיר " +
      "נסגר. אם משהו כאן לא מתאים לצורת העבודה שלכם — עדיף שנדע עכשיו.",
    heroPoints: [
      "הצעה לפי סעיפי כתב הכמויות שלכם",
      "שינויים מאושרים בכתב לפני ביצוע, לא בחשבון הסופי",
      "איש קשר אחד לאורך הפרויקט",
      "מסירה עם בדיקות, תיקון ליקויים ותיעוד",
    ],
    sections: [
      {
        kind: "steps",
        id: "steps",
        title: "התהליך, שלב אחר שלב",
        // The "N · " prefixes are gone: the template numbers these with a CSS counter, so
        // every heading was rendering as "01  1 · פנייה ראשונית".
        items: [
          {
            title: "פנייה ראשונית",
            text:
              "שולחים סוג פרויקט, מיקום, שלב נוכחי והיקף משוער. לא צריך תוכניות בשלב הזה. " +
              "המטרה היא לדעת מהר אם יש התאמה.",
          },
          {
            title: "בדיקת התאמה",
            text:
              "בדיקת ההתאמה היא שלב אמיתי ולא נימוס: אם ההיקף, המרחק או לוח הזמנים לא " +
              "מתאימים — תדעו את זה באותה שיחה, בכנות, ולא אחרי שבועיים של המתנה להצעה.",
          },
          {
            title: "עיון בחומרים",
            text:
              "תוכניות חשמל, כתב כמויות או לפחות תוכנית אדריכלית. אם אין — ביקור באתר. " +
              "בלי אחד מהשניים אי אפשר לתמחר ברצינות.",
          },
          {
            title: "הצעת מחיר",
            text:
              "הצעה מפורטת לפי סעיפים: מה כלול, מה לא, מי מספק חומרים ומה ההנחות שעליהן היא " +
              "מבוססת. כך אפשר להשוות אותה להצעות אחרות באמת.",
          },
          {
            title: "תיאום ולוח זמנים",
            text:
              "שיבוץ מול הגאנט של האתר, וסיכום נקודות הממשק מול קבלני המשנה האחרים — " +
              "מתי נכנסים, מה חייב להיות מוכן לפני, ומי מודיע.",
          },
          {
            title: "ביצוע",
            text:
              "עבודה בשלבים לפי התקדמות האתר, עם עדכון על מה בוצע ומה הבא בתור. שינויים " +
              "מהתוכנית מתועדים ומאושרים לפני שמבצעים אותם.",
          },
          {
            // The last two steps were a line each, on the page selling an orderly process,
            // and handover plus warranty are exactly the two steps a main contractor reads.
            title: "בדיקות ומסירה",
            text:
              "בדיקות תקינות והארקה, ליווי הבודק המוסמך ותיקון הליקויים שהוא מעלה עד לסגירת " +
              "הדוח ולבדיקה חוזרת. במסירה נמסרים טבלת מעגלים לפי הביצוע בפועל, סימון נקודות " +
              "הניתוק, תוצאות הבדיקות והאישורים שנדרשים מהחלק החשמלי להמשך הליכי המסירה.",
          },
          {
            title: "אחרי המסירה",
            text:
              "קריאה אחרי המסירה מגיעה לאותו בעל רישיון שביצע וחתם, ולא למוקד שצריך להסביר " +
              "לו את הפרויקט מחדש. תנאי האחריות נמסרים בכתב עם ההצעה, ומופרדים בה: אחריות " +
              "על העבודה ואחריות היצרן על הציוד הן שני דברים נפרדים.",
          },
        ],
      },
      {
        kind: "bullets",
        id: "you",
        // Retitled and reframed. This list is in practice a division of responsibility —
        // it decides who is at fault when the programme slips — and it was written as a
        // polite request.
        title: "מה אנחנו צריכים מכם כדי לעמוד בלוח הזמנים",
        intro:
          "אלה התנאים שמונעים ויכוח באמצע הפרויקט. אין כאן דרישות חריגות — זה מה שכל קבלן " +
          "משנה צריך כדי לעמוד בלו״ז שהתחייב אליו.",
        items: [
          {
            title: "איש קשר אחד",
            text: "מנהל עבודה או מנהל פרויקט שאפשר להשיג ושמוסמך להחליט.",
          },
          {
            title: "עדכון על שינויים בלוח הזמנים",
            text: "מוקדם ככל האפשר. שינוי ידוע מראש נפתר בשיבוץ, שינוי בדיעבד עולה זמן.",
          },
          {
            title: "אישור שהשלב מוכן לכניסה",
            text:
              "לפני כל שלב שלנו יש משהו שחייב להיות גמור — יציקה, מחיצות, חדר חשמל, צבע. " +
              "הודעה שהוא מוכן שווה יותר מתאריך שנקבע חודש קודם.",
          },
          {
            title: "גישה לאתר ותנאי עבודה",
            text: "חשמל זמני, מקום לאחסון חומר, ותיאום מול מערכות אחרות שעובדות במקביל.",
          },
          {
            title: "החלטות על אביזרי קצה במועד",
            text:
              "דגמי שקעים, גופי תאורה ומיקומים סופיים. החלטה שמתקבלת אחרי שהתשתית סגורה " +
              "מייצרת עבודה כפולה, וזו החריגה הנפוצה ביותר בשלב הגמר.",
          },
          {
            title: "אישור שינויים בכתב",
            text: "כל חריגה מהתוכנית או מכתב הכמויות — מאושרת לפני ביצוע.",
          },
        ],
      },
      /*
       * Replaces the `pending` panel headed "תנאי התקשרות", which named payment terms,
       * warranty and insurance as things only the owner could supply — on the page where a
       * main contractor's procurement decides whether to proceed.
       *
       * Payment terms, warranty length and insurance cover are still unknown and are not
       * stated here. What replaces them is the part of the engagement that is knowable
       * today: what the offer itself contains, how variations are handled, who signs, and
       * an explicit invitation to send the buyer's own procurement requirements so they
       * can be answered document by document — including where the answer is "not yet".
       */
      {
        kind: "bullets",
        id: "terms",
        title: "מה סוגר את ההתקשרות",
        intro:
          "מה שנסגר בכתב לפני תחילת עבודה, ומה שנשאר פתוח לשיחה מולכם.",
        items: [
          {
            title: "מה כלול ומה לא",
            text:
              "ההצעה מפרטת את הסעיפים, את מה שמחוץ להיקף ואת ההנחות שעליהן היא נשענת — " +
              "כולל מי מספק חומרים. תנאי התשלום נסגרים בה ולא בעל פה.",
          },
          {
            title: "שינויים וחריגות",
            text:
              "כל חריגה מתומחרת ומאושרת לפני ביצוע. חשבון שמגיע עם הפתעה בסוף הוא כישלון של " +
              "התהליך, לא שלב בתוכו.",
          },
          {
            title: "מסמכי ההתקשרות שלכם",
            text:
              "שלחו את נוהל הרכש שלכם — אישורים, טפסים ונוסחים שאתם דורשים — ונעבור עליו " +
              "סעיף אחרי סעיף לפני תחילת עבודה. מה שאפשר להעביר יועבר, ואם משהו ברשימה חסר " +
              "אצלנו תדעו את זה מראש ולא ביום הכניסה לאתר.",
          },
          {
            title: "בטיחות באתר",
            text:
              "עבודה לפי נוהלי מנהל העבודה שלכם, כולל השתתפות בהדרכת הבטיחות של האתר. ניתוק " +
              "אזור או עבודה בקרבת מתקן חי מתואמים מראש ולא מוחלטים בשטח.",
          },
          {
            title: "מי חתום על הביצוע",
            text:
              "רישיון חשמלאי ראשי מס׳ 991433. אותו בעל רישיון מבצע, מלווה את הבדיקה וחותם " +
              "על המסירה — אין שלב שבו העבודה עוברת למישהו שלא ראה אותה.",
          },
          {
            title: "אחריות",
            text:
              "תנאי האחריות נמסרים בכתב עם ההצעה. לא מופיע כאן מספר שנים גורף, כי אחריות " +
              "על העבודה ואחריות היצרן על הציוד אינן אותו דבר ונקבעות מול הפרויקט.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "כמה זמן לוקח לקבל הצעת מחיר?",
        a:
          "אחרי שיש תוכניות או ביקור באתר — בדרך כלל תוך כמה ימי עבודה, תלוי בהיקף. תשובה " +
          "ראשונית על התאמה מגיעה הרבה יותר מהר.",
      },
      {
        q: "מה אתם צריכים לספק לנו לפני כניסה לאתר?",
        a:
          "תשלחו את רשימת הדרישות שלכם — אישורים, טפסים ונוסחים שאתם עובדים לפיהם — ונעבור " +
          "עליה לפני תחילת העבודה ולא באמצע. מה שקבוע ואפשר לבדוק כבר עכשיו: הביצוע נעשה " +
          "תחת רישיון חשמלאי ראשי מס׳ 991433, שמתיר תכנון וביצוע עד 3×250A, ובעל הרישיון " +
          "הוא זה שחותם על הבדיקה ועל המסירה.",
      },
      {
        q: "אתם עובדים עם חוזה?",
        a:
          "כן, בפרויקטים. הצעת המחיר המפורטת היא הבסיס, והיא כוללת את מה שכלול, את מה שלא, " +
          "ואת ההנחות שעליהן היא נשענת.",
      },
      {
        q: "מה קורה כשמתגלה משהו שלא היה בתוכנית?",
        a:
          "מעלים את זה מיד מול מנהל הפרויקט או היועץ, עם הצעה לפתרון ולעלות, ומחכים לאישור. " +
          "לא מבצעים חריגה ואז מציגים חשבון.",
      },
    ],
    related: [
      { label: "קבלנות ביצוע", href: "/contracting/" },
      { label: "לקבלני בניין", href: "/contracting/builders/" },
      { label: "בקשת הצעת מחיר", href: "/quote/?track=contracting" },
    ],
  },
];
