/**
 * Thank-you content, per track.
 *
 * A single generic confirmation wastes the highest-attention moment in the funnel. Each
 * track gets what that visitor actually needs next: a private customer wants to know when
 * someone will call; a contractor wants to know what to have ready so the next
 * conversation is productive; a solar enquirer wants to know what is being assessed.
 */
import type { Track } from "./business";

export interface ThanksContent {
  heading: string;
  lede: string;
  nextTitle: string;
  next: string[];
  prepareTitle?: string;
  prepare?: string[];
  urgentNote: string;
  links: { label: string; href: string }[];
}

export const THANKS: Record<Track, ThanksContent> = {
  private: {
    heading: "הפנייה התקבלה",
    lede: "קיבלנו את הפרטים. נחזור אליכם בטלפון.",
    nextTitle: "מה קורה עכשיו",
    next: [
      "נעבור על הפרטים ששלחתם ונבין מה בדיוק נדרש.",
      "נחזור אליכם טלפונית. אם משהו לא ברור, נשאל לפני שנשלח הצעה — ולא אחרי.",
      "אם צריך לראות את הנכס כדי לתמחר נכון, נתאם ביקור. לא ניתן מחיר על סמך ניחוש.",
    ],
    urgentNote:
      "אם מדובר בתקלה שמשביתה חשמל בבית — אל תחכו לחזרה. עדיף להתקשר עכשיו.",
    links: [
      { label: "עבודות חשמל", href: "/electrical/" },
      { label: "לוחות חשמל", href: "/electrical/panels/" },
      { label: "שאלות נפוצות", href: "/faq/" },
    ],
  },

  contracting: {
    heading: "פרטי הפרויקט התקבלו",
    lede: "נעבור עליהם ונחזור אליכם עם התייחסות מקצועית — כולל תשובה שלילית ברורה אם הפרויקט לא מתאים לנו.",
    nextTitle: "מה השלב הבא",
    next: [
      "בדיקת התאמה ראשונית: היקף, מיקום ולוח זמנים מול מה שאנחנו יכולים לקחת בפועל.",
      "אם יש התאמה — נבקש תוכניות או כתב כמויות, או נתאם ביקור באתר.",
      "הצעת מחיר לפי סעיפים: מה כלול, מה לא, מי מספק חומרים ועל אילו הנחות היא מבוססת.",
      "סיכום ממשקים מול הקבלן הראשי ויתר קבלני המשנה, ושיבוץ מול לוח הזמנים של האתר.",
    ],
    prepareTitle: "מה כדאי שיהיה מוכן לשיחה",
    prepare: [
      "תוכניות חשמל או כתב כמויות, אם קיימים. אם אין — תוכנית אדריכלית מספיקה להתחלה.",
      "לוח הזמנים הצפוי של האתר, ומתי החשמל אמור להיכנס.",
      "האם יש יועץ חשמל בפרויקט, ומי מספק את החומרים.",
      "דרישות רכש מצידכם — אישורים וביטוחים שתצטרכו מאיתנו.",
    ],
    urgentNote:
      "צריכים תשובה מהירה כי אתם באמצע תמחור? התקשרו ונאמר לכם מיד אם זה בטווח שלנו.",
    links: [
      { label: "איך עובדים איתנו", href: "/contracting/process/" },
      { label: "לקבלני בניין", href: "/contracting/builders/" },
      { label: "תשתיות חשמל", href: "/contracting/infrastructure/" },
    ],
  },

  solar: {
    heading: "בקשת בדיקת ההתאמה התקבלה",
    lede: "נבדוק את הנתונים ונחזור אליכם עם הערכה שמבוססת על הנכס שלכם — לא על ממוצע.",
    nextTitle: "מה נבדק עכשיו",
    next: [
      "השטח הפנוי שדיווחתם עליו מול גודל המערכת שאפשר להתקין בפועל.",
      "סוג ההתקנה — גג קיים, סככה קיימת או מבנה חדש — וההשלכות שלו על העלות.",
      "החיבור החשמלי הקיים בנכס. בחיבור חד-פאזי ההספק מוגבל ל-5 קילוואט, ומעבר לכך נדרש תלת-פאזי.",
      "האם נדרש היתר, ומה מסלול ההסדרה הרלוונטי לנכס.",
    ],
    prepareTitle: "מה יעזור לנו לדייק",
    prepare: [
      "חשבון חשמל אחרון — הוא מראה את הצריכה בפועל, וזה מה שקובע את גודל המערכת הנכון.",
      "תמונה של הגג או של השטח המיועד, ותמונה של לוח החשמל.",
      "אם ידוע לכם על הצללה בשעות מסוימות — שווה לציין.",
    ],
    urgentNote: "יש שאלה שקשה לכתוב בטופס? מוזמנים להתקשר.",
    links: [
      { label: "מערכות סולאריות", href: "/solar/" },
      { label: "אגירת אנרגיה", href: "/solar/storage/" },
      { label: "פרויקטים שבוצעו", href: "/projects/" },
    ],
  },
};
