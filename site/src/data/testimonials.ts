/**
 * Customer testimonials.
 *
 * Every entry is a real, attributable review from an identifiable customer. Source: the
 * reviews previously published on solar.html. Only whitespace and stray RTL punctuation
 * artefacts were normalised — no wording was changed.
 *
 * This file previously described the portraits as "supplied by the customer". Nothing
 * supported that; they were profile pictures lifted from the reviews. See `photo` below.
 *
 * The previous site shipped five invented reviews on the electrical page, with abstract
 * gradient SVGs standing in for photos, alongside a fabricated 4.9/120 aggregateRating.
 * All of that has been removed.
 *
 * ── RULE ──────────────────────────────────────────────────────────────────────
 * Do not add an entry without a real source and the customer's consent to publish.
 * If a plausible-sounding quote is needed to fill a layout, use the empty state on
 * the Testimonials component instead. An invented review is a consumer-protection
 * problem and a Google manual-action risk, not a copy decision.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Track } from "./business";

export interface Testimonial {
  name: string;
  city: string;
  /** What the job actually was, derived from the review text itself. */
  work: string;
  quote: string;
  /**
   * Optional, and currently unset for every entry.
   *
   * The five portraits that used to sit here were the reviewers' own Google and social
   * profile pictures — among them a personal selfie and a family snapshot. Quoting a
   * public review under the reviewer's name is ordinary practice; republishing their
   * personal photograph on a commercial site is a separate act, and no consent for it is
   * on record. They are held in quarantine/testimonials/ until it is.
   *
   * Set this again only for a portrait a customer has explicitly agreed to publish.
   */
  photo?: string;
  /** Which track this review is evidence for. */
  tracks: Track[];
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "ניר רווח",
    city: "גני תקווה",
    work: "התקנת מערכת סולארית",
    quote:
      "מבקש ושמח להמליץ בחום על רוני חג׳ג׳! חשמלאי מקצועי ואמין. התקין אצלנו מערכת סולארית. " +
      "עבודה יסודית עם גימור מעולה!! יותר מכל רוצה לציין את השירות האדיב של רוני שלא עזב אותנו " +
      "עד שהכל היה מושלם. תמיד עם חיוך וסבלנות.",
    tracks: ["solar", "private"],
  },
  {
    name: "נועה חממי",
    city: "בת עין",
    work: "חשמל סולארי למשאית",
    quote:
      "הייתי צריכה בנאדם תותח שיעשה לי חשמל סולארי למשאית — והרבה המליצו עליו, אז יצרתי איתו " +
      "קשר. הוא מקצועי, עושה את העבודה עד לפרטים הקטנים. כבר עברה יותר משנה ועד היום אני " +
      "מרוצה מהעבודה שלו.",
    tracks: ["solar"],
  },
  {
    name: "בר טופז",
    city: "אשדוד",
    work: "מערכת סולארית לבית פרטי",
    quote:
      "אחרי תקופה שרציתי להתקין מערכת סולארית היה לי כל כך הרבה חששות למי לפנות, עד שמצאתי " +
      "את רוני. הוא באמת מקצוען — הסביר לי את כל התהליך ומיקסם את מלוא הפוטנציאל של השטח " +
      "הפנוי שהיה לי, ובעלות הכי שווה שמצאתי.",
    tracks: ["solar", "private"],
  },
  {
    name: "רז אבישי",
    city: "קיבוץ הרדוף",
    work: "עבודות חשמל",
    quote:
      "רוני מקצועי מאוד, והכי חשוב — בן אדם ישר ואכפתי ללקוחות. עשה אצלי עבודה מעולה, " +
      "תמיד זמין לכל שאלה או עזרה.",
    tracks: ["private"],
  },
  {
    name: "אלכס סוחוליטקו",
    city: "אשדוד",
    work: "עבודות חשמל",
    quote: "ממליץ בחום. בחור מקצועי מאוד בעבודות חשמל, מחירים טובים והשירות טוב.",
    tracks: ["private"],
  },
];

/**
 * Reviews relevant to a track. Note there are currently none for `contracting` —
 * that is a real gap (`testimonial.contracting`), and the component shows an honest
 * empty state rather than borrowing a private-customer review to fill the space.
 */
export function testimonialsFor(track: Track): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.tracks.includes(track));
}
