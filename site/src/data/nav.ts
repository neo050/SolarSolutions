/**
 * Site navigation and information architecture.
 *
 * Three branches at the top level, each with its own children. Contracting is a peer of
 * the other two rather than a section inside "electrical" — that placement is the whole
 * point of the rebuild, and burying it would reproduce the problem it exists to fix.
 */

export interface NavItem {
  label: string;
  href: string;
  /** Short line shown in the mega-menu and on hub pages. */
  blurb?: string;
  children?: NavItem[];
}

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "עבודות חשמל",
    href: "/electrical/",
    blurb: "לבתים פרטיים, לדירות ולשיפוצים",
    children: [
      {
        label: "חשמל לבתים פרטיים",
        href: "/electrical/homes/",
        blurb: "תשתיות, נקודות, תיקונים ושדרוגים",
      },
      {
        label: "לוחות חשמל",
        href: "/electrical/panels/",
        blurb: "החלפה, חידוש והגנות מתקדמות",
      },
      {
        label: "שדרוג לתלת פאזי",
        href: "/electrical/three-phase/",
        blurb: "בדיקות מקדימות והתאמה לתקן",
      },
      {
        label: "בדיקות ואישורים",
        href: "/electrical/inspection/",
        blurb: "הארקה, לולאת תקלה ודוח לחברת ביטוח",
      },
      {
        label: "תאורה אדריכלית",
        href: "/electrical/lighting/",
        blurb: "תכנון פריסה וביצוע",
      },
    ],
  },
  {
    label: "קבלנות ביצוע",
    href: "/contracting/",
    blurb: "לקבלנים, ליזמים ולמנהלי פרויקט",
    children: [
      {
        label: "לקבלני בניין",
        href: "/contracting/builders/",
        blurb: "משלב השלד ועד המסירה",
      },
      {
        label: "לקבלני שיפוצים",
        href: "/contracting/renovation/",
        blurb: "זמינות, תיאום והיקפים משתנים",
      },
      {
        label: "חשמל לעסקים ומסחר",
        href: "/contracting/commercial/",
        blurb: "משרדים, מסחר ותעשייה",
      },
      {
        label: "תשתיות חשמל",
        href: "/contracting/infrastructure/",
        blurb: "תעלות, הזנות ולוחות ראשיים",
      },
      {
        label: "איך עובדים איתנו",
        href: "/contracting/process/",
        blurb: "התהליך מהצעת מחיר ועד מסירה",
      },
    ],
  },
  {
    label: "מערכות סולאריות",
    href: "/solar/",
    blurb: "ביתי, מסחרי, אגירה וביצוע לקבלנים",
    children: [
      {
        label: "סולארי לבתים פרטיים",
        href: "/solar/residential/",
        blurb: "מערכות על גג ועל סככה",
      },
      {
        label: "סולארי לעסקים",
        href: "/solar/commercial/",
        blurb: "שטחים של 200 מ״ר ומעלה",
      },
      {
        label: "ביצוע סולארי לקבלנים",
        href: "/solar/contractors/",
        blurb: "צוותי התקנה לפרויקטים",
      },
      {
        label: "אגירת אנרגיה",
        href: "/solar/storage/",
        blurb: "עצמאות אנרגטית ומערכות אוף גריד",
      },
    ],
  },
  { label: "פרויקטים", href: "/projects/", blurb: "עבודות שבוצעו" },
  { label: "אודות", href: "/about/", blurb: "מי אנחנו" },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "אזורי פעילות", href: "/areas/" },
  { label: "המלצות", href: "/reviews/" },
  { label: "שאלות נפוצות", href: "/faq/" },
  { label: "צור קשר", href: "/contact/" },
];

/** Footer link groups. The footer is a navigation and SEO asset, not a copyright line. */
export const FOOTER_GROUPS: { title: string; items: NavItem[] }[] = [
  { title: "עבודות חשמל", items: PRIMARY_NAV[0].children ?? [] },
  { title: "קבלנות ביצוע", items: PRIMARY_NAV[1].children ?? [] },
  { title: "מערכות סולאריות", items: PRIMARY_NAV[2].children ?? [] },
  {
    title: "החברה",
    items: [
      { label: "אודות", href: "/about/" },
      { label: "פרויקטים", href: "/projects/" },
      { label: "אזורי פעילות", href: "/areas/" },
      { label: "המלצות", href: "/reviews/" },
      { label: "שאלות נפוצות", href: "/faq/" },
      { label: "צור קשר", href: "/contact/" },
    ],
  },
];

/** True when `href` is the current page or an ancestor of it. */
export function isActive(current: string, href: string): boolean {
  if (href === "/") return current === "/";
  return current === href || current.startsWith(href);
}
