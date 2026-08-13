/**
 * Solar branch.
 *
 * The system descriptions carry over the business's own claims from solutions.html
 * (time-of-use pricing, the 200 sqm threshold for commercial). The old 'green track'
 * wording was dropped: market research found it is not the current regulatory name.
 * Anything
 * beyond that — quotas, tariffs, payback figures — is deliberately absent: the previous
 * site's savings calculator promised a flat 90% saving to every visitor, and that is
 * exactly the kind of number this branch must not invent.
 *
 * Every figure that does appear on these pages is counted from src/data/projects.ts —
 * 20 kW on a cowshed roof, 12 kW on an industrial hangar, 8 kW on a shared apartment
 * roof — or from src/data/business.ts. The design review's note that "there is not one
 * number on any of the three solar pages" was fair, and the fix was to surface the
 * figures that already exist rather than to estimate the ones that do not.
 *
 * Card grids are sized to 3 or 6 items on purpose. The template's grid is
 * repeat(auto-fit, minmax(17rem, 1fr)), so a section of 4 or 5 leaves an orphan card
 * alone on the last row — the review found that on every page in this branch. It is
 * fixable here, in the data, without touching the shared grid.
 */
import type { ServicePage } from "./types";

const PARENT = { label: "מערכות סולאריות", href: "/solar/" };

export const SOLAR: ServicePage[] = [
  {
    slug: "/solar/",
    track: "solar",
    eyebrow: "ביתי · מסחרי · קבלני",
    h1: "מערכות סולאריות — תכנון, אספקה והתקנה",
    title:
      "התקנת מערכות סולאריות — החשמל וההתקנה ברישיון אחד",
    description:
      "מערכות לבית, לעסק ולמבנה חקלאי — כולל אגירה ומערכות מנותקות רשת. את החיבור החשמלי מבצע בעל רישיון חשמלאי ראשי 991433 ולא קבלן משנה. מתקינים מ-2018.",
    lede:
      "אנחנו מתקינים מערכות סולאריות מאז 2018 — התחלנו ממערכות לקרוואנים ולרכבים ניידים, " +
      "והיום מבצעים מערכות ביתיות, מסחריות וחקלאיות בכל הארץ.",
    heroPoints: [
      "מערכות מחוברות רשת ומנותקות רשת",
      "אגירת אנרגיה כתוספת או כמערכת עצמאית",
      "התקנה על גג, על סככה קיימת או על סככה חדשה",
      "ביצוע על ידי בעל רישיון חשמלאי ראשי",
    ],
    // Was argaman-revivim.webp, now quarantined — see the provenance.project-photos gap.
    // The replacement is one of the three photographs that are demonstrably ours.
    heroImage: {
      src: "/images/projects/beit-knesset-yona-02.webp",
      alt: "מערך פאנלים סולאריים על מסגרות הטיה, על גג בית כנסת יונה בגני תקווה",
    },
    sections: [
      {
        kind: "bullets",
        id: "types",
        title: "סוגי מערכות",
        items: [
          {
            // The previous site said this system "enters the green track — immediate approval
            // to sell electricity". Market research found "מסלול ירוק" is not the current
            // regulatory name (the arrangement sits under אמות מידה 70104 from 15.1.2025), and
            // "immediate approval" sets a timeline expectation nobody can guarantee.
            // Reworded to what is true; the actual track used is a gap for the owner.
            title: "מערכת ביתית מחוברת רשת",
            text:
              "מותאמת לצריכה בפועל של הבית, כוללת אפליקציה למעקב אחר הייצור, ומוגשת " +
              "להסדרה מול הגורמים הרלוונטיים כחלק מהשירות.",
          },
          {
            title: "מערכת מסחרית",
            text:
              "מותאמת לשטחים של 200 מ״ר ומעלה, תורמת לחיסכון במס ומאפשרת חיבור למתח גבוה.",
          },
          {
            // Numbers counted from projects.ts, not estimated. These two installations are
            // the branch's only quantified evidence and they belong on the hub, not buried
            // in an FAQ answer on a child page.
            title: "מערכת חקלאית",
            text:
              "על גג רפת, לול, האנגר או סככה. ביצענו 20 קילוואט על גג רפת ו-12 קילוואט " +
              "על גג האנגר תעשייתי.",
          },
          {
            title: "סככה סולארית",
            text:
              "כשאין גג מתאים — מבנה שנבנה עבור המערכת, ומספק בדרך גם הצללה לחניה או לחצר.",
          },
          {
            title: "אגירת אנרגיה",
            text:
              "בנפרד או כתוספת למערכת ביתית או מסחרית. מאפשרת עצמאות אנרגטית ומכירת " +
              "חשמל לפי מחירי תעו״ז.",
          },
          {
            title: "מערכת מנותקת רשת",
            text:
              "לנכסים ללא חיבור לרשת או כאשר רוצים עצמאות מלאה — כולל מערך אגירה ובקרה.",
          },
        ],
      },
      {
        // The single strongest differentiator the market research surfaced: solar installers
        // routinely subcontract the electrical connection and disclaim it, while electricians
        // don't market solar. Holding the electrician's licence closes that seam — and unlike
        // most positioning claims, it is checkable against the licence register.
        //
        // Moved up from fourth to second. It is the one thing on the page a competitor
        // cannot copy, and it was sitting below a five-step process list that says what
        // every installer says.
        kind: "prose",
        id: "one-contractor",
        title: "החשמל והסולארי — אותו בעל מקצוע",
        body: [
          "תכנון, התקנה וחיבור של מתקן פוטו-וולטאי מחייבים בעל רישיון חשמלאי. מי שאינו חשמלאי " +
            "רשאי לבצע רק את מה שאינו עבודת חשמל — בניית מבנה נשיאה למשל — ורק בפיקוח.",
          "בפועל, חלק מחברות הסולאר מוסרות את החלק החשמלי לקבלן משנה. זה עובד, אבל זה יוצר תפר: " +
            "כשמשהו לא עובד, לא תמיד ברור מי אחראי — המתקין או החשמלאי.",
          "אצלנו זה אותו גורם. ההתקנה, החיבור ללוח, ההתאמה של החיבור הקיים והליווי לבדיקה — " +
            "הכול תחת רישיון אחד, ולכן גם באחריות אחת.",
        ],
        note:
          "רישיון חשמלאי ראשי מס׳ 991433. מספר רישיון הוא דבר שאפשר לבדוק, ולכן הוא מופיע " +
          "כאן במלואו.",
      },
      {
        kind: "steps",
        id: "process",
        title: "איך זה עובד",
        items: [
          { title: "בדיקת התאמה", text: "סוג הנכס, שטח פנוי, מיקום, וכיוון והצללה של הגג." },
          { title: "תכנון והצעה", text: "גודל מערכת, סוג ההתקנה והצעת מחיר מפורטת." },
          { title: "אסדרה ואישורים", text: "טיפול בתהליך הרישוי והחיבור מול הגורמים הרלוונטיים." },
          { title: "התקנה", text: "עבודות תשתית, הרכבת מבנה, פאנלים, ממיר וחיבור חשמלי." },
          { title: "חיבור והפעלה", text: "בדיקות, חיבור לרשת והדגמת מערכת הניטור." },
        ],
      },
      {
        /*
         * This was a section headed "על החזר השקעה ומספרים" that contained two paragraphs
         * and no number, and the review was right that it read as an apology.
         *
         * What it must not become is a table of estimated payback periods. The previous
         * site's calculator promised every visitor a flat 90% saving off a fixed formula,
         * and inventing a "typical range" is the same mistake in a more respectable
         * typeface. So the claim is unchanged and the shape is not: the heading now says
         * what the section actually contains, the refusal is one line of intro instead of
         * two paragraphs, and the body is the three variables that decide the answer.
         *
         * A reader who lands here wanting a number leaves knowing which three things to
         * measure before anyone can give them one — which is more than a range would have
         * given them, and true.
         */
        kind: "bullets",
        id: "returns",
        title: "מה קובע את החזר ההשקעה",
        intro:
          "לא נציג כאן אחוז חיסכון או תקופת החזר לפני שראינו את הנכס — כל מספר גורף הוא ניחוש. " +
          "אחרי בדיקת התאמה אפשר לתת הערכה שמבוססת על הנכס שלכם. אלה שלושת הדברים שקובעים אותה:",
        items: [
          {
            title: "הגג",
            text:
              "שטח פנוי בפועל, כיוון, שיפוע והצללה לאורך היום ולאורך השנה. שני גגות באותו " +
              "גודל יכולים לייצר בפער גדול.",
          },
          {
            title: "הצריכה בפועל",
            text:
              "כמה חשמל צורכים ובאילו שעות. מערכת שמייצרת הרבה יותר ממה שהנכס צורך לא " +
              "בהכרח מחזירה מהר יותר.",
          },
          {
            title: "המערכת ותנאי החיבור",
            text:
              "גודל המערכת, אם יש אגירה, וגודל החיבור הקיים בנכס — שלושתם משנים גם את " +
              "העלות וגם את מה שאפשר לעשות עם הייצור.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "כמה זמן לוקח מהזמנה ועד הפעלה?",
        a:
          "ההתקנה עצמה קצרה יחסית. מה שקובע את משך התהליך הוא האסדרה והחיבור מול הגורמים " +
          "הרלוונטיים, שאינם בשליטתנו. נעדכן על הסטטוס לאורך הדרך.",
      },
      {
        q: "מה קורה בהפסקת חשמל?",
        a:
          "מערכת מחוברת רשת רגילה מפסיקה לייצר בהפסקת חשמל, מטעמי בטיחות. כדי לקבל חשמל גם " +
          "אז נדרשת מערכת אגירה עם יכולת גיבוי.",
      },
      {
        q: "צריך היתר בנייה?",
        a:
          "תלוי בסוג ההתקנה ובנכס. התקנה על גג קיים לרוב שונה מהקמת סככה חדשה. זו אחת השאלות " +
          "בבדיקת ההתאמה.",
      },
      {
        q: "אתם עובדים גם עם קבלנים?",
        a:
          "כן — ביצוע סולארי כקבלן משנה בפרויקטים. פירוט בעמוד ביצוע סולארי לקבלנים.",
      },
    ],
    related: [
      { label: "סולארי לבתים פרטיים", href: "/solar/residential/" },
      { label: "סולארי לעסקים", href: "/solar/commercial/" },
      // Replaced the /electrical/ link: storage is a full child page of this hub and was
      // reachable from it only through the navigation bar.
      { label: "אגירת אנרגיה", href: "/solar/storage/" },
    ],
  },

  {
    slug: "/solar/residential/",
    track: "solar",
    parent: PARENT,
    eyebrow: "מערכות סולאריות",
    h1: "מערכת סולארית לבית פרטי",
    title:
      "מערכת סולארית לבית פרטי — מה בודקים בגג",
    description:
      "מערכת סולארית לבית פרטי, לפי סוג הגג: רעפים, גג שטוח, סככה או גג משותף. מה בודקים לפני שמתחייבים — שטח פנוי, הצללה, מצב הגג, הלוח והצריכה בפועל.",
    lede:
      "רוב הפרויקטים שביצענו הם בתים פרטיים — על גג רעפים, על גג שטוח, על סככה קיימת או על " +
      "סככה שנבנתה לצורך המערכת.",
    heroPoints: [
      "התאמה אישית לגג ולצריכה בפועל",
      "אפליקציה למעקב אחר הייצור",
      "הגשה להסדרה כחלק מהשירות",
      "אפשרות להוסיף אגירה",
    ],
    /*
     * No heroImage, and this is not an oversight.
     *
     * The review flagged the page as the one place a private customer most wants to see a
     * roof like their own. Three photographs in the whole library are demonstrably ours,
     * and all three are the same institutional project in Ganei Tikva. Putting a synagogue
     * roof at the top of a page headed "מערכת סולארית לבית פרטי" would be either a caption
     * that contradicts the picture or a picture that contradicts the caption. The missing
     * asset is tracked as provenance.project-photos.
     *
     * What the page can do instead is be specific: every installation type below is one
     * this business has actually done, two of them carry the real output figure, and the
     * survey is written as the order the questions are asked in.
     */
    sections: [
      {
        kind: "bullets",
        id: "options",
        title: "סוגי התקנה",
        intro: "הגג הוא מה שקובע את המערכת, ולא להפך. אלה המצבים הנפוצים:",
        items: [
          {
            title: "גג רעפים",
            text:
              "מבנה נשיאה מותאם לרעפים. הכיוון והשיפוע נתונים מראש, ולכן הם שקובעים כמה " +
              "אפשר להתקין ומה תהיה התפוקה.",
          },
          {
            title: "גג שטוח או גג בטון",
            text:
              "פאנלים על מסגרות הטיה עם משקולות. כאן הכיוון והזווית נבחרים בתכנון ולא " +
              "נכפים על ידי הגג.",
          },
          {
            title: "סככה קיימת",
            text:
              "ניצול מבנה שכבר קיים, בלי בנייה נוספת — בתנאי שהמבנה נושא את העומס.",
          },
          {
            title: "סככה סולארית חדשה",
            text: "מבנה שנבנה עבור המערכת, ומספק בדרך גם הצללה לחניה או לחצר.",
          },
          {
            title: "גג משותף בבניין",
            text:
              "אפשרי, אבל מתחיל בתיאום מול הדיירים או הוועד ולא בגג. ביצענו מערכת " +
              "8 קילוואט בבניין משותף ביבנה.",
          },
          {
            title: "מערכת מנותקת רשת",
            text:
              "לנכס מרוחק או כשרוצים עצמאות מלאה. ביצענו מערכות מנותקות רשת בבתים " +
              "ביישוב עדי ובכליל.",
          },
        ],
      },
      {
        /*
         * Was a second identical card grid directly under the first — nine white boxes in a
         * row, which the review called out as the page reading like a template. Same five
         * checks, now as the numbered list they always were: this really is the order the
         * questions get asked in, and the template numbers a steps list automatically.
         */
        kind: "steps",
        id: "check",
        title: "מה בודקים לפני שמתחייבים",
        intro: "בסדר הזה, כי כל שלב מצמצם את מה שהבא אחריו צריך לענות עליו.",
        items: [
          {
            title: "שטח פנוי",
            text: "כמה שטח באמת זמין להתקנה — בלי ארובות, מזגנים, דודים ומעברי שירות.",
          },
          {
            title: "כיוון והצללה",
            text: "כיוון הגג, ומקורות הצללה לאורך היום ולאורך השנה — עץ, מבנה שכן, מעקה.",
          },
          {
            title: "מצב הגג",
            text:
              "אם הגג דורש טיפול — עדיף לפניו ולא אחריו. פירוק מערכת כדי להגיע לאיטום " +
              "עולה הרבה יותר מלטפל בו מראש.",
          },
          {
            title: "לוח והזנה",
            text: "מצב הלוח וגודל החיבור הקיים, והאם הם מתאימים למערכת המתוכננת.",
          },
          {
            title: "צריכה בפועל",
            text: "כדי להתאים גודל מערכת לצריכה האמיתית ולא למכור יותר מהנדרש.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "כמה מקום צריך?",
        a:
          "תלוי בהספק הרצוי ובסוג הפאנלים. בבדיקת ההתאמה אנחנו שואלים על שטח פנוי בדיוק בגלל " +
          "זה — זה הנתון הראשון שקובע מה אפשרי.",
      },
      {
        q: "אנחנו לא יודעים כמה חשמל אנחנו צורכים — זו בעיה?",
        a:
          "לא. חשבון חשמל אחרון נותן את התמונה. אם צפוי שינוי — רכב חשמלי, מזגן נוסף, " +
          "בריכה — כדאי להגיד מראש, כי זה משנה את גודל המערכת שכדאי להתקין.",
      },
      {
        q: "אפשר להוסיף אגירה בהמשך?",
        a:
          "בדרך כלל כן, אבל עדיף לדעת מראש. אם ידוע שתהיה אגירה בעתיד, אפשר להיערך לכך " +
          "בתכנון ולחסוך עבודה כפולה.",
      },
      {
        q: "המערכת דורשת תחזוקה?",
        a:
          "התחזוקה השוטפת מינימלית. מה שחשוב הוא מעקב אחר הייצור — ירידה חריגה היא הסימן " +
          "הראשון לתקלה, ובשביל זה יש אפליקציה.",
      },
    ],
    related: [
      { label: "אגירת אנרגיה", href: "/solar/storage/" },
      { label: "שדרוג לתלת פאזי", href: "/electrical/three-phase/" },
      { label: "פרויקטים", href: "/projects/" },
    ],
  },

  {
    slug: "/solar/commercial/",
    track: "solar",
    parent: PARENT,
    eyebrow: "מערכות סולאריות",
    h1: "מערכת סולארית לעסקים",
    title:
      "מערכת סולארית לעסק, למפעל ולמבנה חקלאי",
    description:
      "מערכות מסחריות לשטחים של 200 מ״ר ומעלה, כולל הצד החשמלי: הלוח, החיבור וגודל החיבור הקיים. ביצענו 20 קילוואט על גג רפת ו-12 קילוואט על האנגר.",
    lede:
      "בעסק, גג הוא נכס לא מנוצל. מערכת מסחרית מותאמת לשטחים של 200 מ״ר ומעלה, תורמת לחיסכון " +
      "במס ומאפשרת חיבור למתח גבוה.",
    heroPoints: [
      "מותאמת לשטחים של 200 מ״ר ומעלה",
      "תורמת לחיסכון במס",
      "מאפשרת חיבור למתח גבוה",
      "התקנה גם על מבנים חקלאיים",
    ],
    // Was yaakobi-beit-ezra.webp, now quarantined. The installation-in-progress frame
    // suits a B2B page better than a finished array anyway: it shows the work, and it is
    // the only photograph in the library with a person in it.
    heroImage: {
      src: "/images/projects/beit-knesset-yona-03.webp",
      alt: "מתקין מרכיב מסגרות אלומיניום על גג לפני הנחת פאנלים, בית כנסת יונה בגני תקווה",
    },
    sections: [
      {
        // Was four cards, one of them "בניין משותף" — which is a residential situation and
        // has moved to /solar/residential/. The three that remain each carry the real
        // output of an installation on that building type, counted from projects.ts.
        kind: "bullets",
        id: "suitable",
        title: "מבנים שמתאימים במיוחד",
        items: [
          {
            title: "מבנה חקלאי",
            text:
              "רפתות, לולים וסככות. ביצענו מערכת 20 קילוואט על גג רפת במושב בית עזרא.",
          },
          {
            title: "מבנה תעשייתי או האנגר",
            text:
              "גג גדול ורציף, ולכן התקנה יעילה. ביצענו 12 קילוואט על גג האנגר תעשייתי " +
              "במושב שתולים.",
          },
          {
            title: "מבנה מסחרי",
            text:
              "מרכז מסחרי, מוסך או מחסן — לרוב עם פעילות שאי אפשר לעצור, ולכן ההתקנה " +
              "מתוכננת סביבה.",
          },
        ],
      },
      {
        kind: "prose",
        id: "operations",
        title: "התקנה במבנה פעיל",
        body: [
          "ברוב המבנים המסחריים אי אפשר לעצור את הפעילות בשביל ההתקנה. לכן מתכננים מראש מתי " +
          "נדרשת הפסקת מתח, לכמה זמן ובאילו אזורים — ומתאמים את זה עם לוח הזמנים של העסק.",
          "בעבודה על גג של מבנה פעיל, גם הבטיחות של מי שנמצא מתחת היא חלק מהתכנון.",
        ],
        note:
          "מועד ההפסקה ומשכה נסגרים בשלב התכנון, לא ביום ההתקנה.",
      },
      {
        /*
         * New. The page's description promised "כולל הצד החשמלי" and nothing on the page
         * delivered it — the electrical side is the reason this business is different from
         * a solar installer, and on the commercial page it is also the part with the
         * highest chance of surprising the customer late.
         */
        kind: "bullets",
        id: "electrical-side",
        title: "הצד החשמלי, לא רק הגג",
        items: [
          {
            title: "גודל החיבור הקיים",
            text:
              "מערכת גדולה יכולה לחייב התאמה של החיבור. נבדק לפני שמתחייבים על גודל מערכת, " +
              "ולא אחרי שהפאנלים על הגג.",
          },
          {
            title: "לוח, הגנות והזנה",
            text:
              "מקום בלוח, ההגנות הנדרשות והמסלול מהממיר אל הלוח — עבודת חשמל לכל דבר.",
          },
          {
            title: "מי מבצע בפועל",
            text:
              "החיבור החשמלי נעשה על ידי בעל רישיון חשמלאי ראשי מטעמנו, לא על ידי קבלן משנה.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "מה ההבדל מול מערכת ביתית?",
        a:
          "בעיקר בהיקף ובאסדרה. מערכת מסחרית מותאמת לשטחים גדולים יותר, יכולה להתחבר למתח " +
          "גבוה, ויש לה השלכות מס שאין למערכת ביתית.",
      },
      {
        q: "אפשר על גג של מבנה חקלאי?",
        a:
          "כן, וזה נפוץ. שתי המערכות החקלאיות שביצענו — 20 קילוואט על גג רפת ו-12 קילוואט " +
          "על גג האנגר תעשייתי — מופיעות בעמוד הפרויקטים.",
      },
      {
        q: "צריך להפסיק את הפעילות בזמן ההתקנה?",
        a:
          "חלק גדול מהעבודה — מבנה נשיאה, פאנלים וחיווט צד ה-DC — לא דורש הפסקת מתח. " +
          "ההפסקות נדרשות בשלב החיבור, ואת המועד, המשך והאזורים קובעים מראש מולכם.",
      },
      {
        q: "אנחנו שוכרים את המבנה — זה משנה?",
        a:
          "כן. התקנה על גג שאינו בבעלותכם דורשת את הסכמת בעל הנכס, ולעיתים גם התייחסות " +
          "בהסכם השכירות. זו אחת השאלות הראשונות בבדיקת ההתאמה.",
      },
    ],
    related: [
      { label: "ביצוע סולארי לקבלנים", href: "/solar/contractors/" },
      { label: "חשמל לעסקים", href: "/contracting/commercial/" },
      { label: "פרויקטים", href: "/projects/" },
    ],
  },

  {
    slug: "/solar/contractors/",
    track: "contracting",
    parent: PARENT,
    eyebrow: "מערכות סולאריות",
    h1: "ביצוע סולארי לקבלנים",
    title:
      "קבלן ביצוע סולארי לקבלנים ולחברות",
    description:
      "ביצוע סולארי כקבלן משנה: תשתית, מבנה נשיאה, פאנלים, ממירים וחיבור חשמלי תחת רישיון חשמלאי ראשי — ומה סוגרים מראש כדי לא לעכב את האתר.",
    lede:
      "כשפרויקט כולל ייצור סולארי, אתם צריכים גורם שיודע גם את החלק החשמלי וגם את ההתקנה " +
      "עצמה — ושמתנהל בלוח הזמנים של האתר ולא בלוח זמנים משלו.",
    heroPoints: [
      "עבודה כקבלן משנה בפרויקט",
      "תשתית, מבנה נשיאה, פאנלים וממירים",
      "חיבור חשמלי תחת רישיון חשמלאי ראשי",
      "תיאום מול הקבלן הראשי ומנהל הפרויקט",
    ],
    /*
     * No heroImage. The one photograph in the library that shows work in progress rather
     * than a finished array — an installer bolting tilt frames before the panels go down —
     * already leads /solar/commercial/, and a third page carrying a frame from the same
     * single project would say more about the size of the photo library than about the
     * business. Tracked as photo.solar.install-team.
     */
    sections: [
      {
        // Six items rather than five: string wiring and DC protection were folded into
        // "הרכבת פאנלים", and commissioning into "חיבור ובדיקות". Separating them is both
        // more accurate about the scope and leaves no orphan card on the last row.
        kind: "bullets",
        id: "scope",
        title: "מה אנחנו מבצעים",
        items: [
          { title: "הכנות ותשתית", text: "מובילים, מעברים והכנות בגג לפני שלב הגמר." },
          { title: "מבנה נשיאה", text: "התקנה על גג קיים, על סככה קיימת או על מבנה חדש." },
          { title: "הרכבת פאנלים", text: "הרכבה ועיגון לפי התכנון ולפי מפרט היצרן." },
          { title: "חיווט מחרוזות והגנות", text: "חיווט צד ה-DC, מעברים והגנות." },
          { title: "ממירים ולוחות", text: "התקנה, חיבור והגנות בצד ה-AC." },
          { title: "חיבור, בדיקות ומסירה", text: "חיבור המערכת, בדיקות תקינות ומסירה." },
        ],
      },
      {
        /*
         * New, and written to assert nothing.
         *
         * The review asked this page for capacity figures, a crew photograph and
         * contractor references. None of the three exists, and inventing any of them is
         * exactly what this rebuild is undoing. What a main contractor actually needs from
         * a subcontractor's page before the first phone call is the list of things that
         * cause solar packages to slip — and that list can be written without claiming a
         * single fact about this business, because it is a list of questions, not answers.
         */
        kind: "bullets",
        id: "interface",
        title: "מה סוגרים לפני שעולים לגג",
        intro:
          "אלה שלוש הנקודות שמעכבות חבילות סולאריות בפרויקטים. עדיף לסגור אותן בהתחלה " +
          "ובכתב, גם כשזה נראה מובן מאליו.",
        items: [
          {
            title: "מתי הגג נמסר",
            text:
              "באיזה שלב הגג זמין להתקנה ביחס לאיטום, למעקות ולשאר בעלי המקצוע. זה מה " +
              "שקובע מתי אנחנו נכנסים, ולא היומן שלנו.",
          },
          {
            title: "הפסקות מתח",
            text:
              "מתי נדרשת הפסקה לצורך החיבור, לכמה זמן ובאילו אזורים — נקבע בתכנון ולא " +
              "ביום העבודה.",
          },
          {
            title: "חלוקת אחריות",
            text:
              "מי מטפל בהיתרים ובאסדרה, מי אחראי לאיטום ולחיזוק הגג, ומה בדיוק נכלל " +
              "בהיקף שלנו ומה לא.",
          },
        ],
      },
      {
        /*
         * Production-invisible: the template filters kind:"pending" out unless SHOW_PENDING
         * (dev only), and /internal/gaps/ reads the registry directly. Kept because the
         * hole is real and belongs in the slot where a contractor looks for it.
         *
         * The explanation was rewritten. It said every solar photograph in the library is
         * of a finished system and none of the installation process — that was wrong, and
         * gaps.ts had already corrected it: beit-knesset-yona-03 is a process photograph
         * with a person working in frame. What is missing is narrower than that.
         */
        kind: "pending",
        id: "capacity",
        title: "כושר ביצוע והיקפים",
        gapId: "photo.solar.install-team",
        explain:
          "כאן יופיעו גודל צוות ההתקנה, קצב ההתקנה והיקף הפרויקטים שבוצעו — לצד תיעוד " +
          "נוסף מתוך עבודה. קיים תצלום תהליך אחד, ובו מתקין אחד; אין עדיין תצלום שמראה " +
          "צוות, ואין תיעוד תהליך מאף פרויקט אחר.",
      },
    ],
    faq: [
      {
        q: "אתם עובדים כקבלן משנה?",
        a: "כן. ביצוע החלק הסולארי תחת קבלן ראשי, בתיאום עם מנהל העבודה ולפי לוח הזמנים.",
      },
      {
        q: "מבצעים גם את החלק החשמלי וגם את ההתקנה?",
        a:
          "כן, וזה היתרון המרכזי — אין ממשק בין שני קבלנים שונים ואין ויכוח על מי אחראי למה " +
          "כשמשהו לא עובד.",
      },
      {
        q: "מי מטפל באסדרה ובחיבור לרשת?",
        a:
          "משתנה לפי הפרויקט. את החיבור החשמלי אנחנו מבצעים תחת הרישיון; מי מגיש את ההסדרה " +
          "ומול מי — נקבע מול הקבלן הראשי לפני תחילת הביצוע, וזו אחת הנקודות שכדאי לסגור בכתב.",
      },
      {
        q: "עובדים לפי תכנון שלנו או מתכננים בעצמכם?",
        a:
          "שתי הדרכים. אם יש תכנון קיים אנחנו מבצעים לפיו ומעירים מראש על מה שלא יעבוד " +
          "בשטח; אם אין — מתכננים את המערכת ומביאים אותה לאישור.",
      },
    ],
    related: [
      { label: "קבלנות ביצוע", href: "/contracting/" },
      { label: "סולארי לעסקים", href: "/solar/commercial/" },
      { label: "איך עובדים איתנו", href: "/contracting/process/" },
    ],
  },

  {
    slug: "/solar/storage/",
    track: "solar",
    parent: PARENT,
    eyebrow: "מערכות סולאריות",
    h1: "אגירת אנרגיה ומערכות מנותקות רשת",
    title:
      "אגירת אנרגיה לבית ולעסק — גיבוי בהפסקת חשמל",
    description:
      "אגירת אנרגיה כתוספת למערכת סולארית או כמערכת עצמאית: מה באמת נדרש לגיבוי בהפסקת חשמל, מה קובע את גודל הסוללה, וניסיון במערכות מנותקות רשת.",
    lede:
      "אגירה היא מה שהופך מערכת סולארית ממקור ייצור ביום למקור אנרגיה זמין. היא מגיעה בנפרד " +
      "או כתוספת למערכת ביתית או מסחרית.",
    heroPoints: [
      "תוספת למערכת קיימת או מערכת עצמאית",
      "גיבוי לבית או לעסק בהפסקת חשמל",
      "מכירת חשמל לפי מחירי תעו״ז",
      "ניסיון במערכות מנותקות רשת",
    ],
    /*
     * The one photograph in the library that shows storage equipment — a Solis inverter
     * with the battery below it in the cabinet — and until now it appeared only on the
     * project page. It is the off-grid synagogue system this page's own text describes, so
     * the caption and the picture say the same thing.
     */
    heroImage: {
      src: "/images/projects/beit-knesset-yona-01.webp",
      alt: "ממיר Solis וסוללת אגירה בארון, במערכת מנותקת רשת בבית כנסת יונה בגני תקווה",
    },
    sections: [
      {
        kind: "bullets",
        id: "why",
        title: "למה מוסיפים אגירה",
        items: [
          {
            title: "גיבוי בהפסקת חשמל",
            text:
              "מערכת מחוברת רשת בלי אגירה מפסיקה לייצר בהפסקה, מטעמי בטיחות. אגירה עם " +
              "יכולת גיבוי היא מה שממשיך להזין את הנכס.",
          },
          {
            title: "ניצול הייצור בשעות הנכונות",
            text:
              "אנרגיה שנוצרה ביום זמינה גם בערב, ומכירת חשמל נעשית לפי מחירי תעריף " +
              "עומס וזמן.",
          },
          {
            title: "נכס מנותק רשת",
            text: "כשאין חיבור לרשת, האגירה היא המערכת עצמה ולא תוספת לה.",
          },
        ],
      },
      {
        /*
         * New. "כמה זמן מחזיקה סוללה" was an FAQ answer that said "it depends" — which is
         * true, and useless in that form. As a section it becomes the three questions the
         * sizing conversation actually consists of, in the order they get asked.
         */
        kind: "steps",
        id: "sizing",
        title: "מה קובע את גודל הסוללה",
        intro: "לא הקיבולת לבדה. שלוש שאלות, ורק אחריהן מספר:",
        items: [
          {
            title: "מה רוצים לגבות",
            text:
              "את כל הנכס או מעגלים נבחרים — מקרר, תאורה, תקשורת, משאבה, קופה. ההבדל " +
              "בין השניים גדול.",
          },
          {
            title: "לכמה זמן",
            text: "הפסקה של שעתיים ולילה שלם הם שתי מערכות שונות, לא אותה מערכת בגודל אחר.",
          },
          {
            title: "מה באמת עובד באותן שעות",
            text:
              "לא הצריכה החודשית הממוצעת, אלא מה שדולק ופועל בזמן הגיבוי. זה הנתון " +
              "שקובע את הקיבולת.",
          },
        ],
      },
      {
        kind: "prose",
        id: "experience",
        title: "ניסיון במערכות מנותקות רשת",
        body: [
          "המערכות הראשונות שהתקנו היו לקרוואנים ולרכבים ניידים — כלומר מערכות מנותקות רשת " +
          "מטבען, שבהן האגירה היא לב המערכת ולא תוספת.",
          "מאז ביצענו מערכות מנותקות רשת גם על מבנים: מערכת אוף גריד עם אגירה בבית כנסת בגני " +
          "תקווה, ומערכות מנותקות רשת בבתים ביישוב עדי ובכליל.",
        ],
      },
    ],
    faq: [
      {
        q: "מה ההבדל בין גיבוי לבין מערכת מנותקת רשת?",
        a:
          "מערכת מנותקת רשת חייבת לכסות כל שעה בשנה מהשמש ומהאגירה בלבד. מערכת עם גיבוי " +
          "נשענת על הרשת כברירת מחדל ונכנסת לפעולה כשהיא נופלת. זה מוביל לגדלים שונים לגמרי.",
      },
      {
        q: "אפשר להוסיף אגירה למערכת קיימת?",
        a:
          "בדרך כלל כן. צריך לבדוק את סוג הממיר הקיים ואת הלוח — לפעמים נדרשת התאמה.",
      },
      {
        q: "מה קורה כשהסוללה מתרוקנת בהפסקה ארוכה?",
        a:
          "אם יש פאנלים, הם ממשיכים לטעון ביום גם כשהרשת למטה, כך שהמחזור מתחדש. כמה זה " +
          "מספיק תלוי בעונה ובמה שבחרתם לגבות.",
      },
      {
        q: "אגירה בלי מערכת סולארית — יש בזה היגיון?",
        a:
          "יש מצבים כאלה, והאגירה אכן מגיעה גם בנפרד. השיקול שם הוא גיבוי וניהול צריכה " +
          "מול מחירי תעו״ז, ולא ניצול ייצור עצמי — ולכן בודקים אותו בנפרד.",
      },
    ],
    related: [
      { label: "סולארי לבתים פרטיים", href: "/solar/residential/" },
      { label: "סולארי לעסקים", href: "/solar/commercial/" },
      { label: "פרויקטים", href: "/projects/" },
    ],
  },
];
