/**
 * Lead form definitions — one per conversion track.
 *
 * Form length is a deliberate filter, not friction. A three-field form maximises volume
 * from private customers. A nine-field form for contractors also maximises value: it
 * screens out irrelevant enquiries and signals that the business operates commercially.
 * A contractor asked only for a name and phone number concludes they have reached a
 * call-out electrician.
 */

import type { Track } from "./business";

export type FieldType = "text" | "tel" | "email" | "select" | "textarea" | "radio";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  hint?: string;
  options?: string[];
  autocomplete?: string;
  inputmode?: string;
  /** Spans the full width of the grid. */
  full?: boolean;
}

export interface FormDefinition {
  track: Track;
  title: string;
  lede: string;
  submitLabel: string;
  /** Shown under the submit button — sets the expectation for what happens next. */
  reassurance: string;
  fields: FormField[];
}

const CONTACT_HINT = "נשתמש בפרטים רק כדי לחזור אליכם בנוגע לפנייה הזו.";

export const FORMS: Record<Track, FormDefinition> = {
  /* ------------------------------------------------------------- private */
  private: {
    track: "private",
    title: "עבודת חשמל לבית",
    lede: "שלושה שדות. לתקלה דחופה — עדיף להתקשר, זה מהיר יותר.",
    submitLabel: "שליחת הפנייה",
    reassurance: CONTACT_HINT,
    fields: [
      {
        name: "name",
        label: "שם",
        type: "text",
        required: true,
        placeholder: "שם מלא",
        autocomplete: "name",
      },
      {
        name: "phone",
        label: "טלפון",
        type: "tel",
        required: true,
        placeholder: "050-1234567",
        autocomplete: "tel",
        inputmode: "tel",
      },
      {
        name: "city",
        label: "יישוב",
        type: "text",
        required: true,
        placeholder: "אשדוד",
        autocomplete: "address-level2",
      },
      {
        name: "service",
        label: "סוג העבודה",
        type: "select",
        required: true,
        options: [
          "החלפה או חידוש לוח חשמל",
          "שדרוג לתלת פאזי",
          "בדיקה ואישור לחברת ביטוח",
          "תאורה",
          "הוספת נקודות או תשתית",
          "תקלה או תיקון",
          "הכנה למטען לרכב חשמלי",
          "אחר",
        ],
      },
      {
        name: "details",
        label: "פרטים נוספים",
        type: "textarea",
        placeholder: "כמה מילים על מה שצריך — סוג הנכס, מה קיים היום, מה חשוב לכם",
        full: true,
      },
    ],
  },

  /* --------------------------------------------------------- contracting */
  contracting: {
    track: "contracting",
    title: "פרויקט / עבודה קבלנית",
    lede:
      "השדות כאן מפורטים יותר בכוונה — הם מאפשרים לחזור אליכם עם התייחסות מקצועית ולא עם " +
      "בקשה לעוד פרטים. אין צורך בתוכניות בשלב הזה.",
    submitLabel: "שליחת פרטי הפרויקט",
    reassurance:
      "נחזור אליכם עם בדיקת התאמה ראשונית — כולל תשובה שלילית ברורה אם הפרויקט לא מתאים לנו.",
    fields: [
      {
        name: "name",
        label: "שם",
        type: "text",
        required: true,
        placeholder: "שם מלא",
        autocomplete: "name",
      },
      {
        name: "company",
        label: "חברה",
        type: "text",
        required: true,
        placeholder: "שם החברה",
        autocomplete: "organization",
      },
      {
        name: "role",
        label: "תפקיד",
        type: "select",
        required: true,
        options: [
          "קבלן בניין",
          "קבלן שיפוצים",
          "יזם",
          "מנהל פרויקט",
          "מנהל עבודה",
          "אדריכל / יועץ",
          "רכש",
          "אחר",
        ],
      },
      {
        name: "phone",
        label: "טלפון",
        type: "tel",
        required: true,
        placeholder: "050-1234567",
        autocomplete: "tel",
        inputmode: "tel",
      },
      {
        name: "email",
        label: "אימייל",
        type: "email",
        required: true,
        placeholder: "name@company.co.il",
        autocomplete: "email",
        hint: "לשליחת הצעת מחיר מפורטת",
      },
      {
        name: "projectType",
        label: "סוג הפרויקט",
        type: "select",
        required: true,
        options: [
          "בנייה חדשה — מגורים",
          "בנייה חדשה — מסחרי",
          "שיפוץ / התחדשות",
          "התאמת מושכר",
          "תשתיות",
          "מבנה תעשייתי או חקלאי",
          "פרויקט סולארי",
          "אחר",
        ],
      },
      {
        name: "location",
        label: "מיקום הפרויקט",
        type: "text",
        required: true,
        placeholder: "עיר או אזור",
      },
      {
        name: "stage",
        label: "שלב הפרויקט",
        type: "select",
        required: true,
        options: [
          "בתכנון — עדיין אין תוכניות",
          "יש תוכניות, לפני ביצוע",
          "שלד",
          "גמר",
          "בביצוע — מחפשים החלפה או תגבור",
          "לא ידוע",
        ],
        hint: "עוזר לנו לדעת אם אנחנו יכולים להיכנס בזמן",
      },
      {
        name: "scope",
        label: "היקף משוער",
        type: "select",
        options: [
          "יחידה בודדת",
          "עד 10 יחידות",
          "10–50 יחידות",
          "מעל 50 יחידות",
          "מבנה מסחרי / תעשייתי",
          "עדיין לא ידוע",
        ],
      },
      {
        name: "details",
        label: "פרטים נוספים",
        type: "textarea",
        placeholder:
          "מה נדרש מאיתנו, לוח זמנים צפוי, האם יש יועץ חשמל, ומי מספק את החומרים",
        full: true,
      },
    ],
  },

  /* --------------------------------------------------------------- solar */
  solar: {
    track: "solar",
    title: "בדיקת התאמה למערכת סולארית",
    lede:
      "השאלות כאן הן מה שבאמת קובע אם הנכס מתאים ומה גודל המערכת האפשרי. נחזור אליכם עם " +
      "הערכה שמבוססת על הנכס שלכם.",
    submitLabel: "שליחה לבדיקת התאמה",
    reassurance: "לא נשלח הצעת מחיר גורפת — נחזור עם שאלות או עם הערכה מבוססת.",
    fields: [
      {
        name: "customerKind",
        label: "מי אתם",
        type: "radio",
        required: true,
        options: ["לקוח פרטי", "עסק", "קבלן / יזם"],
        full: true,
      },
      {
        name: "propertyType",
        label: "סוג הנכס",
        type: "select",
        required: true,
        options: [
          "בית פרטי",
          "דירה / בניין משותף",
          "מבנה מסחרי",
          "מבנה תעשייתי או האנגר",
          "מבנה חקלאי — רפת, לול, סככה",
          "נכס מנותק רשת",
          "אחר",
        ],
      },
      {
        name: "location",
        label: "מיקום",
        type: "text",
        required: true,
        placeholder: "עיר או יישוב",
        autocomplete: "address-level2",
      },
      {
        name: "roofArea",
        label: "שטח פנוי משוער (מ״ר)",
        type: "text",
        required: true,
        placeholder: "למשל 80",
        inputmode: "numeric",
        hint: "שטח שבאמת פנוי להתקנה, לא שטח הגג הכולל. הערכה גסה מספיקה.",
      },
      {
        name: "roofKind",
        label: "סוג ההתקנה",
        type: "select",
        options: [
          "גג רעפים",
          "גג שטוח",
          "סככה קיימת",
          "בניית סככה חדשה",
          "קרקע",
          "לא בטוח",
        ],
      },
      {
        name: "permit",
        label: "האם יש היתר בנייה לנכס",
        type: "select",
        options: ["כן", "לא", "לא יודע"],
      },
      {
        name: "storage",
        label: "מעוניינים באגירת אנרגיה",
        type: "select",
        options: ["כן", "לא", "רוצים לשמוע על זה"],
      },
      {
        name: "name",
        label: "שם",
        type: "text",
        required: true,
        placeholder: "שם מלא",
        autocomplete: "name",
      },
      {
        name: "phone",
        label: "טלפון",
        type: "tel",
        required: true,
        placeholder: "050-1234567",
        autocomplete: "tel",
        inputmode: "tel",
      },
      {
        name: "details",
        label: "פרטים נוספים",
        type: "textarea",
        placeholder: "צריכת חשמל חודשית משוערת, הצללה על הגג, או כל דבר שכדאי שנדע",
        full: true,
      },
    ],
  },
};
