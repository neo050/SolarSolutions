/**
 * Single source of truth for business facts.
 *
 * The old site hard-coded the phone number in six places, invented five customer
 * testimonials, and published an aggregateRating of 4.9 from 120 reviews that did not
 * exist. This module exists so that can't recur.
 *
 * The split is deliberate and load-bearing:
 *   VERIFIED  — traceable to something checkable. Free to render anywhere.
 *   UNVERIFIED — awaiting confirmation from the business owner. NOT exported for
 *                rendering. Each entry names what would close it.
 *
 * If a page needs a number that isn't in VERIFIED, it must use <Pending> from
 * `~/components/Pending.astro` rather than an estimate. See src/data/gaps.ts.
 */

export const BUSINESS = {
  legalName: "RNRG",
  displayName: "RNRG — רוני חג׳ג׳ הנדסת חשמל",
  shortName: "RNRG",
  owner: "רוני חג׳ג׳",
  ownerRole: "הנדסאי חשמל · בעל רישיון חשמלאי ראשי",

  /** Source: BRAND.license in the previous site's LandingPage.tsx */
  licenceNumber: "991433",
  licenceLabel: "רישיון חשמלאי ראשי מס׳ 991433",

  phone: "+972546656076",
  phonePretty: "054-665-6076",
  whatsapp: "972546656076",
  email: "office@rnrg.co.il",

  locality: "אשדוד",
  region: "דרום",
  country: "IL",

  /** Source: BRAND.areas. Deliberately kept as the business's own wording. */
  areaServed: "ממצפה רמון ועד עמק חפר",

  /** Source: about.html — solar activity began in 2018 with systems for caravans. */
  solarSince: 2018,

  siteUrl: "https://rnrg.co.il",
} as const;

/**
 * Claims the previous site made that could not be traced to a verifiable source.
 * Exported only so the gap report and the owner questionnaire can enumerate them.
 * Never render these.
 */
export const UNVERIFIED = [
  {
    claim: "מעל 8 שנות ניסיון",
    wasOn: "LandingPage.tsx:369",
    problem:
      "עמוד האודות מציין 2018 כתחילת הפעילות הסולארית — 8 שנים. ייתכן שהניסיון המקצועי קודם לעסק, " +
      "ואז המספר נמוך מדי. צריך להפריד בין שנת תחילת העיסוק בחשמל לשנת הקמת העסק.",
    closes: "בעל העסק מוסר את שנת תחילת העיסוק בחשמל",
  },
  {
    claim: "דירוג 4.9 מתוך 120 ביקורות",
    wasOn: "LandingPage.tsx:774 (JSON-LD)",
    problem: "לא קיימת מערכת ביקורות. פרסום דירוג מומצא חושף לפעולה ידנית של גוגל.",
    closes: "מספרי הדירוג האמיתיים מ-Google Business Profile, אם קיים",
  },
  {
    claim: "שעות פעילות א׳–ה׳ 08:00–19:00, ו׳ 08:00–13:30",
    wasOn: "LandingPage.tsx:775 (JSON-LD)",
    problem: "הופיע ב-Schema בלבד, מעולם לא הוצג באתר ולא אומת.",
    closes: "בעל העסק מאשר שעות פעילות",
  },
  {
    claim: "עבדנו עם מיטב הקבלנים והאדריכלים",
    wasOn: "LandingPage.tsx:512",
    problem: "טענת ניסיון ללא ולו פרויקט קבלני אחד מתועד באתר.",
    closes: "Case Study קבלני אחד, או שם לקוח עסקי שמותר לפרסם",
  },
  {
    claim: "חיסכון של 90% בחשבון החשמל",
    wasOn: "main.js:81 (מחשבון החיסכון)",
    problem: "נוסחה קבועה שהוחלה על כל משתמש ללא קשר לגג, לצריכה או לגודל המערכת.",
    closes: "מודל תמחור אמיתי מבעל העסק, או שהמחשבון נשאר מושבת",
  },
  {
    claim: "מספר עובדים / גודל צוות",
    wasOn: "לא הופיע כלל",
    problem: "הענף הקבלני כולו נשען על היכולת להביא צוות. אין נתון.",
    closes: "בעל העסק מוסר גודל צוות קבוע ולפי פרויקט",
  },
] as const;

/** Contact links, built once so every CTA on the site is consistent. */
export const links = {
  tel: `tel:${BUSINESS.phone}`,
  mailto: `mailto:${BUSINESS.email}`,
  whatsapp(message?: string) {
    const base = `https://wa.me/${BUSINESS.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  },
} as const;

/** The three conversion tracks. Everything on the site routes into one of them. */
export type Track = "private" | "contracting" | "solar";

export const TRACKS: Record<
  Track,
  { id: Track; label: string; short: string; href: string; quoteHref: string; event: string }
> = {
  private: {
    id: "private",
    label: "עבודות חשמל לבית",
    short: "פרטי",
    href: "/electrical/",
    quoteHref: "/quote/?track=private",
    event: "lead_private",
  },
  contracting: {
    id: "contracting",
    label: "קבלנות ביצוע ופרויקטים",
    short: "קבלני",
    href: "/contracting/",
    quoteHref: "/quote/?track=contracting",
    event: "lead_contracting",
  },
  solar: {
    id: "solar",
    label: "מערכות סולאריות",
    short: "סולארי",
    href: "/solar/",
    quoteHref: "/quote/?track=solar",
    event: "lead_solar",
  },
};
