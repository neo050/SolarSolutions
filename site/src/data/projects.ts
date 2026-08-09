/**
 * Completed projects.
 *
 * Facts here are carried over verbatim from projects.html on the previous site — customer
 * name, location, system type and rated output. Those were already published publicly, so
 * republishing them is not a new disclosure, but consent to keep naming customers is
 * tracked as a gap (`case.details.solar`).
 *
 * What is deliberately absent: challenge, solution, duration, crew size and outcome. Those
 * turn a gallery into a case study, and none of them are known. They are typed as optional
 * so a project renders correctly without them and the page shows an honest placeholder
 * instead of invented narrative.
 *
 * Note every project below is solar and residential/agricultural. There is not one
 * contracting or commercial-electrical project on record — that is the single largest
 * evidence gap in the rebuild (`case.contracting.first`).
 */

import type { Track } from "./business";

export type CustomerType = "private" | "institutional" | "agricultural" | "multi-tenant" | "commercial";

export interface Project {
  slug: string;
  /** Customer and place, as published. */
  title: string;
  location: string;
  customerType: CustomerType;
  track: Track;
  /** Rated output in kWp, where known. */
  sizeKw?: number;
  systemType: string;
  image: string;
  gallery?: string[];
  /** One line describing what was installed — derived only from known facts. */
  summary: string;
  /** Promote to a full case study page once the story fields are supplied. */
  featured: boolean;

  /* ---- Story fields: unknown until the owner supplies them ---- */
  challenge?: string;
  solution?: string;
  durationDays?: number;
  crewSize?: number;
  outcome?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "beit-knesset-yona-ganei-tikva",
    title: "בית כנסת יונה",
    location: "גני תקווה",
    customerType: "institutional",
    track: "solar",
    systemType: "מערכת אוף גריד עם אגירת אנרגיה",
    image: "/images/projects/beit-knesset-yona-01.webp",
    gallery: [
      "/images/projects/beit-knesset-yona-01.webp",
      "/images/projects/beit-knesset-yona-02.webp",
      "/images/projects/beit-knesset-yona-03.webp",
    ],
    summary: "מערכת מנותקת רשת הכוללת מערך אגירת אנרגיה, עבור מבנה ציבור.",
    featured: true,
  },
  {
    slug: "argaman-revivim",
    title: "בית משפחת ארגמן",
    location: "קיבוץ רביבים",
    customerType: "private",
    track: "solar",
    sizeKw: 22,
    systemType: "מערכת מחוברת רשת",
    image: "/images/projects/argaman-revivim.webp",
    summary: "המערכת הגדולה ביותר המתועדת באתר — 22 קילוואט על גג בית פרטי.",
    featured: true,
  },
  {
    slug: "yaakobi-beit-ezra",
    title: "בית משפחת יעקובי",
    location: "מושב בית עזרא",
    customerType: "agricultural",
    track: "solar",
    sizeKw: 20,
    systemType: "מערכת על גג רפת",
    image: "/images/projects/yaakobi-beit-ezra.webp",
    summary: "התקנה על גג מבנה חקלאי פעיל — 20 קילוואט.",
    featured: true,
  },
  {
    slug: "saban-shtulim",
    title: "בית משפחת סבן",
    location: "מושב שתולים",
    customerType: "agricultural",
    track: "solar",
    sizeKw: 12,
    systemType: "מערכת על גג האנגר תעשייתי",
    image: "/images/projects/saban-shtulim.webp",
    summary: "12 קילוואט על גג האנגר — סביבה תעשייתית ולא ביתית.",
    featured: true,
  },
  {
    slug: "sigalon-yavne",
    title: "רחוב סיגלון",
    location: "יבנה",
    customerType: "multi-tenant",
    track: "solar",
    sizeKw: 8,
    systemType: "מערכת לבניין משותף",
    image: "/images/projects/sigalon-yavne.webp",
    summary: "8 קילוואט בבניין משותף — התקנה הדורשת תיאום בין דיירים.",
    featured: true,
  },
  {
    slug: "avishai-adi",
    title: "בית משפחת אבישי",
    location: "יישוב עדי",
    customerType: "private",
    track: "solar",
    sizeKw: 7,
    systemType: "מערכת מנותקת רשת",
    image: "/images/projects/avishai-adi.webp",
    summary: "מערכת עצמאית מנותקת רשת על גג בית — 7 קילוואט.",
    featured: false,
  },
  {
    slug: "amar-kfar-yona",
    title: "בית משפחת עמר",
    location: "כפר יונה",
    customerType: "private",
    track: "solar",
    sizeKw: 6,
    systemType: "סככה סולארית",
    image: "/images/projects/amar-kfar-yona.webp",
    summary: "סככה סולארית בהספק 6 קילוואט.",
    featured: false,
  },
  {
    slug: "sharabani-ben-zakai",
    title: "בית משפחת שהרבני",
    location: "בן זכאי",
    customerType: "private",
    track: "solar",
    sizeKw: 4,
    systemType: "פאנלים על סככה קיימת",
    image: "/images/projects/sharabani-ben-zakai.webp",
    summary: "התקנה על סככה קיימת — 4 קילוואט, ללא בניית מבנה חדש.",
    featured: false,
  },
  {
    slug: "gemini-metzer",
    title: "משפחת ג׳מיני",
    location: "קיבוץ מצר",
    customerType: "private",
    track: "solar",
    sizeKw: 3.5,
    systemType: "סככה סולארית",
    image: "/images/projects/gemini-metzer.webp",
    summary: "סככה סולארית בהספק 3.5 קילוואט.",
    featured: false,
  },
  {
    slug: "lifshitz-klil",
    title: "בית משפחת ליפשיץ",
    location: "כליל",
    customerType: "private",
    track: "solar",
    sizeKw: 3,
    systemType: "מערכת מנותקת רשת",
    image: "/images/projects/lifshitz-klil.webp",
    summary: "מערכת מנותקת רשת בהספק 3 קילוואט.",
    featured: false,
  },
];

export const CUSTOMER_TYPE_LABEL: Record<CustomerType, string> = {
  private: "לקוח פרטי",
  institutional: "מבנה ציבור",
  agricultural: "חקלאי",
  "multi-tenant": "בניין משותף",
  commercial: "מסחרי",
};

export const featuredProjects = () => PROJECTS.filter((p) => p.featured);

/** True once there is enough narrative to justify a dedicated case-study page. */
export const hasStory = (p: Project) => Boolean(p.challenge && p.solution && p.outcome);

/** Aggregates that are safe to publish because they are counted, not estimated. */
export const projectStats = () => {
  const withSize = PROJECTS.filter((p) => typeof p.sizeKw === "number");
  return {
    count: PROJECTS.length,
    totalKw: withSize.reduce((sum, p) => sum + (p.sizeKw ?? 0), 0),
    largestKw: Math.max(...withSize.map((p) => p.sizeKw ?? 0)),
    locations: new Set(PROJECTS.map((p) => p.location)).size,
  };
};
