import { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ShieldCheck,
  Zap,
  Lightbulb,
  Sun,
  Building2,
  Home,
  ArrowUp,
} from "lucide-react";

/* =========================
   Brand & Content Config
   ========================= */
const BRAND = {
  name: "RNRG | רוני חג׳ג׳",
  tagline: "חשמלאי מוסמך וראשי · הנדסאי חשמל",
  license: "מס׳ רישיון חשמלאי ראשי: 991433",
  phone: "+972546656076", // E.164 format
  phonePretty: "054-665-6076",
  whatsapp: "+972546656076", // same number for WhatsApp
  email: "office@rnrg.co.il",
  siteUrl: "https://rnrg.co.il/", // ← change to your domain
  areas: "מאזור מצפה רמון ועד עמק חפר",
  address: {
    country: "ישראל",
    region: "דרום",
    locality: "אשדוד",
  },
  sameAs: [
    // Social/authority links (optional)
    // "https://www.facebook.com/yourpage",
    // "https://www.instagram.com/yourprofile",
    // "https://wa.me/972520000000",
    // "https://www.linkedin.com/company/your-company",
  ],
  leadEndpoint: "", // e.g. "/api/lead" | Google Apps Script URL | leave empty to disable
};

// Public base URL (CRA uses this when homepage is set) — resolves to /energy in production
const PUBLIC_URL = process.env.PUBLIC_URL || "";

// Shared assets that live at the site root, outside this app's build output.
// Customer photos are published once under /assets/img and reused by both branches.
const SITE_ASSETS = "/assets/img";

// The canonical address of THIS page. The app is mounted at /energy/.
const PAGE_URL = "https://rnrg.co.il/energy/";

/** Services, trust points, and gallery are extracted so content can be edited easily. */
const SERVICES = [
  { title: "החלפת/חידוש לוחות חשמל", desc: "תכנון, חיווט מסודר, הגנות מתקדמות ותיוג מלא", icon: <Home className="w-6 h-6" /> },
  { title: "שדרוג לתלת פאזי", desc: " כולל בדיקות מקדימות והתאמה לתקן עדכני", icon: <Zap className="w-6 h-6" /> },
  { title: "בדיקות ואישורים לביטוח", desc: "בדיקת הארקה, לולאת תקלה, בדיקת התנגדות הבידוד", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "תאורה אדריכלית", desc: "עיצוב ותכנון פריסת גופי תאורה", icon: <Lightbulb className="w-6 h-6" /> },
  { title: "מסחרי/עסקי", desc: "תכנון והרכבה, תשתיות, לוחות, תעלות ותחזוקה", icon: <Building2 className="w-6 h-6" /> },
  { title: "מערכות סולאריות", desc: "תכנון והתקנה לצרכן הביתי והעסקי – חיסכון בחשמל", icon: <Sun className="w-6 h-6" /> },
];

const TRUST_POINTS = [
  { title: "אמינות ושקיפות", text: "הצעת מחיר ברורה ללא הפתעות, הסבר מלא לפני כל ביצוע" },
  { title: "תקינה ובטיחות", text: "עבודה לפי תקן ישראלי, בדיקות חובה ואחריות" },
  { title: "דיוק ואסתטיקה", text: "חיווט נקי, תיוג מסודר וגימור מוקפד שמעלה את ערך הנכס" },
];

const GALLERY = [
  { src: PUBLIC_URL + "/images/gallery/לוח חשמל 1.jpeg", alt: "לוח חשמל ביתי מסודר ואסתטי" },
  { src: PUBLIC_URL + "/images/gallery/לוח חשמל 2.jpeg", alt: "לוח חשמל תעשייתי עם הגנות מתקדמות" },
  { src: PUBLIC_URL + "/images/gallery/לוח חשמל 3.jpeg", alt: "תאורה לחלל מעוצב – תאורה אדריכלית" },
  { src: PUBLIC_URL + "/images/gallery/לוח חשמל 4.jpeg", alt: "גופי תאורה יוקרתיים – עיצוב פנים" },
  { src: PUBLIC_URL + "/images/gallery/לוח חשמל 5.jpeg", alt: "חשמלאי מוסמך בעבודת שטח מוקפדת" },
  { src: PUBLIC_URL + "/images/gallery/תאורה 1.jpeg", alt: "תאורת LED חסכונית – פתרונות חסכון באנרגיה" },
  { src: PUBLIC_URL + "/images/gallery/תאורה 2.jpeg", alt: "תשתיות חשמל במפעל ועסקים" },
  { src: PUBLIC_URL + "/images/gallery/תאורה 3.jpeg", alt: "חיווט מסודר ומאובטח – קופסת נתיכים" },
];

// Grouped topics for the gallery (3 cards, each auto-rotates its images)
const TOPIC_GALLERIES: { title: string; images: string[] }[] = [
  {
    title: "לוחות חשמל",
    images: [GALLERY[0].src, GALLERY[1].src, GALLERY[2].src,GALLERY[3].src, GALLERY[4].src].filter(Boolean),
  },
  {
    title: "התקנות תאורה",
    images: [GALLERY[5].src, GALLERY[6].src, GALLERY[7].src].filter(Boolean),
  },
  // {
  //   title: "תשתיות ותעלות",
  //   images: [GALLERY[2].src, GALLERY[3].src, GALLERY[5].src].filter(Boolean),
  // },
];

/**
 * Real customer testimonials only.
 *
 * Every entry below is a verbatim review from an identifiable customer, with their
 * own photo, previously published on the solar side of the site (solar.html).
 * Only whitespace and stray RTL punctuation artifacts were normalised — no wording changed.
 *
 * DO NOT add an entry here without a real, attributable source. Invented testimonials
 * expose the business to consumer-protection liability and to a Google manual action.
 */
const TESTIMONIALS = [
  {
    name: "ניר רווח",
    city: "גני תקווה",
    work: "התקנת מערכת סולארית",
    text:
      "מבקש ושמח להמליץ בחום על רוני חג׳ג׳! חשמלאי מקצועי ואמין. התקין אצלנו מערכת סולארית. " +
      "עבודה יסודית עם גימור מעולה!! יותר מכל רוצה לציין את השירות האדיב של רוני שלא עזב אותנו " +
      "עד שהכל היה מושלם. תמיד עם חיוך וסבלנות. בטוח שיגיע רחוק ב״ה. בשורות טובות!",
    img: SITE_ASSETS + "/ניר רווח, גני תקווה.jpg",
  },
  {
    name: "נועה חממי",
    city: "בת עין",
    work: "חשמל סולארי למשאית",
    text:
      "הכרתי את רוני האלוף דרך פוסט שפרסמתי בבתים על גלגלים. הייתי צריכה בנאדם תותח שיעשה לי " +
      "חשמל סולארי למשאית – והאמת הרבה המליצו עליו, אז יצרתי איתו קשר. הוא מקצועי, עושה את " +
      "העבודה עד לפרטים הקטנים. כבר עברה יותר משנה ועד היום אני מרוצה מהעבודה שלו.",
    img: SITE_ASSETS + "/נועה חממי, בת עין.jpg",
  },
  {
    name: "בר טופז",
    city: "אשדוד",
    work: "מערכת סולארית לבית פרטי",
    text:
      "אחרי תקופה שרציתי להתקין מערכת סולארית היה לי כל כך הרבה חששות למי לפנות, עד שמצאתי " +
      "את רוני. הוא באמת מקצוען — הסביר לי את כל התהליך ומיקסם את מלוא הפוטנציאל של השטח הפנוי " +
      "שהיה לי כדי להתקין את המערכת, ובעלות הכי שווה שמצאתי.",
    img: SITE_ASSETS + "/בר טופז.jpg",
  },
  {
    name: "רז אבישי",
    city: "קיבוץ הרדוף",
    work: "עבודות חשמל",
    text:
      "רוני מקצועי מאוד, והכי חשוב — בן אדם ישר ואכפתי ללקוחות. עשה אצלי עבודה מעולה, " +
      "תמיד זמין לכל שאלה או עזרה.",
    img: SITE_ASSETS + "/רז אבישי.jpg",
  },
  {
    name: "אלכס סוחוליטקו",
    city: "אשדוד",
    work: "עבודות חשמל",
    text: "ממליץ בחום. בחור מקצועי מאוד בעבודות חשמל, מחירים טובים והשירות טוב.",
    img: SITE_ASSETS + "/אלכס.jpg",
  },
];

// Local fallback image for when remote images cannot load (e.g., network/CORS/AdBlock)
const FALLBACK_IMG = PUBLIC_URL + "/images/placeholder.svg";

/* =========================
   Helpers
   ========================= */
const e164 = (num: string) => num.replace(/\s|-/g, "");

function buildWhatsAppText({
  name,
  city,
  phone,
  topic,
  desc,
}: {
  name: string;
  city: string;
  phone: string;
  topic: string;
  desc: string;
}) {
  // Builds a human-readable WhatsApp prefill message from form values.
  return `היי ${BRAND.name}, אשמח להצעת מחיר/שיחה לגבי עבודת חשמל.
שם: ${name || "____"}
טלפון: ${phone || "____"}
יישוב: ${city || "____"}
נושא: ${topic || "____"}
תיאור: ${desc || "____"}`;
}

function makeWaLink(text: string) {
  const base = `https://wa.me/${e164(BRAND.whatsapp).replace("+", "")}`;
  const query = `?text=${encodeURIComponent(text)}`;
  return `${base}${query}`;
}

// Small rotating image component for topic cards
function RotatingImage({
  sources,
  alt,
  intervalMs = 3000,
  heightClass = "h-52",
}: {
  sources: string[];
  alt: string;
  intervalMs?: number;
  heightClass?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!sources || sources.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sources.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [sources, intervalMs]);

  if (!sources || sources.length === 0) return null;

  return (
    <div className={`relative ${heightClass}`}>
      {sources.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 transition-transform ${i === index ? "opacity-100" : "opacity-0"} group-hover:scale-105`}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const t = e.currentTarget as HTMLImageElement;
            if (t.src !== FALLBACK_IMG) t.src = FALLBACK_IMG;
          }}
        />
      ))}
    </div>
  );
}

/* =========================
   Component
   ========================= */
export default function LandingPage() {
  // Controlled form state for better UX + WhatsApp prefill
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    topic: "החלפת/חידוש לוח חשמל",
    desc: "",
  });

  // Mobile sticky scroll-to-top button visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Default WhatsApp message for header/hero quick CTAs
  const defaultWaLink = useMemo(() => {
    const msg = buildWhatsAppText({
      name: "",
      city: "",
      phone: "",
      topic: "",
      desc: "",
    });
    return makeWaLink(msg);
  }, []);

  // Mailto link using BRAND email
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("פנייה מדף הנחיתה – עבודות חשמל");
    const body = encodeURIComponent(
      "שלום,\nמעוניין/ת ב: ____ (לוח חשמל/בדיקה/תלת פאזי/תאורה/סולארי/אחר)\nשם: ____ | טלפון: ____ | יישוב: ____ | תיאור קצר: ____"
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, []);

  // Submit handler: send lead to optional endpoint, then open WhatsApp
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const waText = buildWhatsAppText(form);

    // Optional: fire-and-forget lead capture
    if (BRAND.leadEndpoint) {
      try {
        await fetch(BRAND.leadEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "landing-page",
            timestamp: new Date().toISOString(),
            ...form,
          }),
        });
      } catch {
        // Silently ignore network errors; WhatsApp is the primary channel
      }
    }

    // Open WhatsApp with prefilled message
    window.open(makeWaLink(waText), "_blank", "noopener,noreferrer");
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-rose-50 text-gray-900">
      {/* SEO Head */}
      <Helmet>
        <html lang="he" />
        <title>רוני חג׳ג׳ – חשמלאי מוסמך וראשי | עבודות חשמל לבית, לעסק ולתעשייה</title>
        <meta
          name="description"
          content="חשמלאי מוסמך וראשי – הנדסאי חשמל. מומחה בלוחות חשמל, בדיקות ואישורים, תאורה אדריכלית, תלת פאזי, וחשמל תעשייתי. שירות מהיר, בטיחות ותקן ישראלי."
        />
        {/*
          Must point at THIS page, not the site root. Pointing it at BRAND.siteUrl told
          Google that the entire electrician page was a duplicate of the root splash page,
          which is an instruction to drop this page from the index.
        */}
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="RNRG — רוני חג׳ג׳ הנדסת חשמל" />
        <meta
          property="og:title"
          content="רוני חג׳ג׳ – חשמלאי מוסמך וראשי | עבודות חשמל לבית, לעסק ולתעשייה"
        />
        <meta
          property="og:description"
          content="חשמלאי מוסמך וראשי – הנדסאי חשמל. לוחות חשמל, בדיקות ואישורים, תלת פאזי, תאורה אדריכלית וחשמל מסחרי."
        />
        <meta property="og:locale" content="he_IL" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-44 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="shrink-0 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-44 max-w-[80vw] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[720px] 2xl:max-w-[820px] overflow-hidden">
              <a href="/energy" className="inline-block h-full">
                <img
                  src={PUBLIC_URL + "/images/gallery/logo.png"}
                  className="block h-full w-auto object-contain"
                  alt="עבודת חשמל מקצועית – התקנות ובטיחות"
                />
              </a>
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight">רוני אנרג'י הנדסת חשמל</div>
             
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
            <a href="#services" className="hover:text-teal-700">
              שירותים
            </a>
            <a href="#gallery" className="hover:text-teal-700">
              גלריה
            </a>
            <a href="#testimonials" className="hover:text-teal-700">
              לקוחות ממליצים
            </a>
            <a href="#trust" className="hover:text-teal-700">
              למה אנחנו
            </a>
            <a href="#contact" className="hover:text-teal-700">
              צור קשר
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BRAND.phone}`}
              aria-label={`Call ${BRAND.phonePretty}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-teal-600 text-white shadow hover:bg-teal-700 transition"
            >
              <Phone className="w-4 h-4" />
              <span>חייגו {BRAND.phonePretty}</span>
            </a>
            <a
              href={defaultWaLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-500 text-white shadow hover:bg-rose-600 transition"
            >
              <MessageCircle className="w-4 h-4" />
              ווטסאפ
            </a>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.12),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  חברת RNRG בבעלותו של רוני חג׳ג׳ - הנדסאי חשמל בעל תעודת ביצוע של חשמלאי ראשי.<br />
                  החברה מבצעת  מגוון עבודות חשמל בסקטור ביתי • מסחרי • תעשייתי.<br />
        
               {/* הנדסאי חשמל בעל תעודת חשמלאי ראשי
                <span className="block text-teal-700"> מבצע מגוון עבודות חשמל </span>
                <span className="block text-teal-700">   ביתי • מסחרי • תעשייתי</span> */}
              </h2>
              <h2 className="mt-5 text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                מעל 8 שנות נסיון עם קבלנים, אדריכלים ופרטיים, הקפדה על תקן ישראלי, בטיחות ללא פשרות וגימור אסתטי. שירות מהיר, אמין ושקוף{" "}
            
              </h2>
              {/* <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  { icon: <CheckCircle className="w-4 h-4 text-teal-600" />, txt: "לוחות חשמל – החלפה, חידוש ושדרוג לתלת פאזי" },
                  {
                    icon: <CheckCircle className="w-4 h-4 text-teal-600" />,
                    txt: 'בדיקות ואישורים לחברת ביטוח + דו\'ח חשמלאי',
                  },
                  { icon: <CheckCircle className="w-4 h-4 text-teal-600" />, txt: "תאורה אדריכלית – חללים מעוצבים וגופי פרימיום" },
                  { icon: <CheckCircle className="w-4 h-4 text-teal-600" />, txt: "פתרון תקלות מהיר · אחריות מלאה" },
                ].map((i, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/70 rounded-xl px-3 py-2 shadow-sm border border-teal-100">
                    {i.icon}
                    <span>{i.txt}</span>
                  </li>
                ))}
              </ul> */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BRAND.phone}`}
                  aria-label={`Call ${BRAND.phonePretty}`}
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 text-white text-base font-semibold shadow hover:bg-teal-700"
                >
                  <Phone className="w-5 h-5" />
                  שיחה מיידית – {BRAND.phonePretty}
                </a>
                <a
                  href={defaultWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp chat"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-2xl bg-rose-500 text-white text-base font-semibold shadow hover:bg-rose-600"
                >
                  <MessageCircle className="w-5 h-5" />
                  הודעה בוואטסאפ
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-500">{BRAND.license}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-teal-100">
                {/*
                  Was /images/hero.svg — an abstract gradient placeholder standing in for the
                  single most important image on the page. Swapped for a real photograph of
                  work actually done. eager + fetchPriority because this is the LCP element.
                */}
                <img
                  src={GALLERY[1].src}
                  alt={GALLERY[1].alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  // @ts-expect-error fetchpriority is valid HTML, not yet in this React version's types
                  fetchpriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (t.src !== FALLBACK_IMG) t.src = FALLBACK_IMG;
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-rose-100">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-rose-500" aria-hidden />
                  <div className="text-sm">
                    <div className="font-semibold">בטיחות מעל הכול</div>
                    <div className="text-gray-600">עמידה מלאה בדרישות התקן הישראלי</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">שירותים מובילים</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SERVICES.map((card, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-teal-100 shadow-sm hover:shadow-md transition">
                <div className="p-2 w-fit rounded-2xl bg-teal-50 text-teal-700 mb-4" aria-hidden>
                  {card.icon}
                </div>
                <div className="font-bold text-lg mb-1">{card.title}</div>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-white/70 border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">גלריית עבודות</h2>
            <div className="text-sm text-gray-600">לוחות חשמל ביתיים ותעשייתיים  ·גופי תאורה מיוחדים · חללים מעוצבים</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOPIC_GALLERIES.map((topic, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <RotatingImage sources={topic.images} alt={topic.title} heightClass="h-56 md:h-64" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-2 right-2 text-white text-xs bg-black/40 px-2 py-0.5 rounded-full">{topic.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white/70 border-y border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">לקוחות ממליצים</h2>
            <div className="text-sm text-gray-600">המלצות מלקוחות אמיתיים, בשמם המלא</div>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">למה לבחור בנו</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TRUST_POINTS.map((t, i) => (
              <div key={i} className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-rose-600">
                  <CheckCircle className="w-5 h-5" aria-hidden />
                  <div className="font-semibold">{t.title}</div>
                </div>
                <p className="text-gray-600 text-sm">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-teal-600 to-rose-500 p-1">
            <div className="rounded-[20px] bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                {/*
                  Reworded from "עבדנו עם מיטב הקבלנים והאדריכלים" — a track-record claim with
                  no supporting project, client or case study anywhere on the site. This states
                  the capability instead, which is defensible. Restore a track-record claim only
                  once a real contracting case study is published.
                */}
                <div className="font-bold text-lg">עובדים מול קבלנים, אדריכלים ומנהלי פרויקט</div>
                <div className="text-gray-600 text-sm">התאמה ללוחות זמנים באתר, תיאום מול בעלי מקצוע, בטיחות ותקשורת רציפה</div>
              </div>
              <div className="flex gap-3">
                <a
                  href={`tel:${BRAND.phone}`}
                  aria-label={`Call ${BRAND.phonePretty}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 text-white shadow hover:bg-teal-700"
                >
                  <Phone className="w-4 h-4" /> שיחה עם מומחה
                </a>
                <a
                  href={defaultWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp chat"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-rose-500 text-white shadow hover:bg-rose-600"
                >
                  <MessageCircle className="w-4 h-4" /> הודעה מיידית
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">דברו איתנו</h2>
              <p className="text-gray-700 mb-6">
                השאירו פרטים ונחזור אליכם במהירות, או חייגו עכשיו. זמינות גבוהה ושירות בפריסה {BRAND.areas}.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600" aria-hidden />
                  <span className="sr-only">מספר טלפון</span> {BRAND.phonePretty}
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-rose-600" aria-hidden />
                  וואטסאפ – מענה מהיר
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-b from-teal-50 to-rose-50 border border-teal-100 rounded-3xl p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    שם מלא
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="ישראל ישראלי"
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm((f) => ({ ...f, name: e.target.value }))}
                    autoComplete="name"
                    aria-label="שם מלא"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    טלפון
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="052-1234567"
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))}
                    autoComplete="tel"
                    inputMode="tel"
                    aria-label="טלפון"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="city">
                    יישוב
                  </label>
                  <input
                    id="city"
                    name="city"
                    placeholder="אשדוד"
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={form.city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm((f) => ({ ...f, city: e.target.value }))}
                    autoComplete="address-level2"
                    aria-label="יישוב"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="topic">
                    נושא הפנייה
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full rounded-xl border border-gray-200 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={form.topic}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setForm((f) => ({ ...f, topic: e.target.value }))}
                    aria-label="נושא הפנייה"
                  >
                    {[
                      "החלפת/חידוש לוח חשמל",
                      "שדרוג לתלת פאזי",
                      "בדיקה ואישור לחברת ביטוח",
                      "תאורה אדריכלית",
                      "חשמל לעסק/תעשייה",
                      "מערכת סולארית",
                      "אחר",
                    ].map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-1" htmlFor="desc">
                    תיאור קצר
                  </label>
                  <textarea
                    id="desc"
                    name="desc"
                    rows={4}
                    placeholder="כמה מילים על הצורך שלכם..."
                    className="w-full rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={form.desc}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setForm((f) => ({ ...f, desc: e.target.value }))}
                    aria-label="תיאור קצר"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 text-white font-semibold shadow hover:bg-teal-700"
                  aria-label="שליחת פרטים בוואטסאפ"
                >
                  <MessageCircle className="w-5 h-5" /> שליחת פרטים בוואטסאפ
                </button>
                <a
                  href={mailto}
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-50"
                  aria-label="שליחת מייל"
                >
                  שליחת מייל
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="font-semibold">{BRAND.name}</div>
         
              <div className="text-xs mt-1">{BRAND.license}</div>
            </div>
            <div className="flex gap-3">
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-teal-600 text-white shadow hover:bg-teal-700"
                aria-label={`Call ${BRAND.phonePretty}`}
              >
                <Phone className="w-4 h-4" />
                חייגו עכשיו
              </a>
              <a
                href={defaultWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-500 text-white shadow hover:bg-rose-600"
                aria-label="Open WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4" />
                ווטסאפ
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} כל הזכויות שמורות. התמונות הן המחשה בלבד.</p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-3 inset-x-3 z-50 md:hidden">
        <div className="grid grid-cols-2 gap-2 bg-white rounded-2xl p-2 shadow-xl border border-teal-100">
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex justify-center items-center gap-2 px-3 py-3 rounded-xl bg-teal-600 text-white font-semibold"
            aria-label={`Call ${BRAND.phonePretty}`}
          >
            <Phone className="w-4 h-4" /> שיחה
          </a>
          <a
            href={defaultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 px-3 py-3 rounded-xl bg-rose-500 text-white font-semibold"
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle className="w-4 h-4" /> וואטסאפ
          </a>
        </div>
      </div>

      {/* Scroll-to-top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-4 z-50 p-3 rounded-full bg-white border border-gray-200 shadow hover:shadow-md"
          aria-label="חזרה לראש הדף"
          title="חזרה לראש"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/*
        JSON-LD (SEO)

        Every field here must be verifiable against something a person can check.
        Removed in this pass because none of it was backed by fact:
          - aggregateRating 4.9 / 120 reviews — no review system exists anywhere on the site.
            Publishing an invented rating risks a Google structured-data manual action.
          - priceRange "₪₪" — arbitrary.
          - openingHoursSpecification — never confirmed by the business, and not shown anywhere
            on the page. Re-add once confirmed (see the intake questionnaire).
        Re-add aggregateRating ONLY by mirroring the real Google Business Profile numbers.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            name: BRAND.name,
            description:
              "חשמלאי מוסמך וראשי – הנדסאי חשמל. עבודות חשמל לבית, לעסק ולתעשייה: לוחות חשמל, שדרוג לתלת פאזי, בדיקות ואישורים, תאורה אדריכלית ומערכות סולאריות.",
            url: PAGE_URL,
            areaServed: BRAND.areas,
            telephone: BRAND.phone,
            email: BRAND.email,
            image: GALLERY.slice(0, 4).map((g) => g.src),
            address: {
              "@type": "PostalAddress",
              addressCountry: BRAND.address.country,
              addressRegion: BRAND.address.region,
              addressLocality: BRAND.address.locality,
            },
            sameAs: BRAND.sameAs,
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "רישיון חשמלאי ראשי",
              identifier: "991433",
            },
          }),
        }}
      />
    </div>
  );
}

// Testimonials carousel component
function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.06),transparent_40%)]" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">{index + 1} / {TESTIMONIALS.length}</div>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm hover:bg-gray-50"
              onClick={() => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="הקודם"
            >
              ◀
            </button>
            <button
              type="button"
              className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm hover:bg-gray-50"
              onClick={() => setIndex((index + 1) % TESTIMONIALS.length)}
              aria-label="הבא"
            >
              ▶
            </button>
          </div>
        </div>

        {/*
          Renders only the active testimonial and cross-fades between them.

          The previous implementation animated a horizontal track using percentage
          translateX against a 500%-wide flex container, whose children were also `w-full`
          — so each slide resolved to five times the viewport width and only a fifth of it
          was ever visible. The sign of the translate was also wrong under `dir="rtl"`.
          A fade sidesteps both problems and reads better for short quotes.
        */}
        <div className="relative min-h-[16rem] sm:min-h-[13rem]">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              className="absolute inset-0 m-0 flex flex-col sm:flex-row sm:items-start gap-5"
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 0.45 }}
              aria-hidden={i !== index}
              style={{ pointerEvents: i === index ? "auto" : "none" }}
            >
              <img
                src={t.img}
                alt={`${t.name}, ${t.city}`}
                className="w-20 h-20 rounded-full object-cover border border-teal-100 shadow-sm shrink-0"
                loading="lazy"
                decoding="async"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const el = e.currentTarget as HTMLImageElement;
                  if (el.src !== FALLBACK_IMG) el.src = FALLBACK_IMG;
                }}
              />
              <div>
                <blockquote className="text-gray-700 leading-relaxed">{t.text}</blockquote>
                <figcaption className="mt-3">
                  <span className="font-bold">{t.name}</span>
                  <span className="text-gray-500"> · {t.city}</span>
                  <span className="block text-sm text-teal-700 font-semibold mt-0.5">{t.work}</span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`שקופית ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${index === i ? 'bg-teal-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
