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

// Public base URL (CRA uses this when homepage is set)
const PUBLIC_URL = process.env.PUBLIC_URL || "";

/** Services, trust points, and gallery are extracted so content can be edited easily. */
const SERVICES = [
  { title: "החלפת/חידוש לוחות חשמל", desc: "תכנון, חיווט מסודר, הגנות מתקדמות ותיוג מלא", icon: <Home className="w-6 h-6" /> },
  { title: "שדרוג לתלת פאזי", desc: " כולל בדיקות מקדימות והתאמה לתקן עדכני", icon: <Zap className="w-6 h-6" /> },
  { title: "בדיקות ואישורים לביטוח", desc: "בדיקת הארקה, לולאת תקלה, בדיקת התנגדות הבידוד", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "תאורה אדריכלית", desc: "עיצוב ותכנון פריסת גופי תאורה", icon: <Lightbulb className="w-6 h-6" /> },
  { title: "מסחרי/עסקי", desc: "תכנון והרכבה, תשתיות, לוחות, תעלות ותחזוקה", icon: <Building2 className="w-6 h-6" /> },
  { title: "מערכות סולאריות", desc: "תכנון והתקנה לצרכן הביתי והעסקי – חיסכון בחחשמל", icon: <Sun className="w-6 h-6" /> },
];

const TRUST_POINTS = [
  { title: "אמינות ושקיפות", text: "הצעת מחיר ברורה ללא הפתעות, הסבר מלא לפני כל ביצוע" },
  { title: "תקינה ובטיחות", text: "עבודה לפי תקן ישראלי, בדיקות חובה ואחריות" },
  { title: "דיוק ואסתטיקה", text: "חיווט נקי, תיוג מסודר וגימור מוקפד שמעלה את ערך הנכס" },
];

const GALLERY = [
  { src: PUBLIC_URL + "/images/gallery/1.svg", alt: "לוח חשמל ביתי מסודר ואסתטי" },
  { src: PUBLIC_URL + "/images/gallery/2.svg", alt: "לוח חשמל תעשייתי עם הגנות מתקדמות" },
  { src: PUBLIC_URL + "/images/gallery/3.svg", alt: "תאורה לחלל מעוצב – תאורה אדריכלית" },
  { src: PUBLIC_URL + "/images/gallery/4.svg", alt: "גופי תאורה יוקרתיים – עיצוב פנים" },
  { src: PUBLIC_URL + "/images/gallery/5.svg", alt: "חשמלאי מוסמך בעבודת שטח מוקפדת" },
  { src: PUBLIC_URL + "/images/gallery/6.svg", alt: "תאורת LED חסכונית – פתרונות חסכון באנרגיה" },
  { src: PUBLIC_URL + "/images/gallery/7.svg", alt: "תשתיות חשמל במפעל ועסקים" },
  { src: PUBLIC_URL + "/images/gallery/8.svg", alt: "חיווט מסודר ומאובטח – קופסת נתיכים" },
];

// Testimonials content
const TESTIMONIALS = [
  {
    name: "הילה מ.",
    city: "תל אביב",
    work: "חידוש לוח חשמל ותאורה",
    text:
      "רוני עשה עבודה מדהימה, מסודרת ואסתטית. קיבלנו הסבר מלא על כל שלב ובטיחות מעל הכול.",
    img: PUBLIC_URL + "/images/testimonials/1.svg",
  },
  {
    name: "דניאל ר.",
    city: "אשדוד",
    work: "שדרוג לתלת פאזי",
    text:
      "טיפול מלא מול חברת החשמל ותיאום באתר בזמן. העבודה נקייה ומקצועית, ממליץ בחום!",
    img: PUBLIC_URL + "/images/testimonials/2.svg",
  },
  {
    name: "גיל ל.",
    city: "הרצליה",
    work: "תאורה אדריכלית בסלון",
    text:
      "הצעת פתרונות חכמים ששדרגו את העיצוב. התוצאה נראית יוקרתית ומאירה את החלל בצורה מושלמת.",
    img: PUBLIC_URL + "/images/testimonials/3.svg",
  },
  {
    name: "אלמוג ק.",
    city: "ראשון לציון",
    work: "בדיקה ואישור לביטוח",
    text:
      "בדיקות תקן יסודיות וקיבלנו דו" + "\"" + "ח מסודר. השירות היה מהיר ומדויק.",
    img: PUBLIC_URL + "/images/testimonials/4.svg",
  },
  {
    name: "רותם ש.",
    city: "אבן יהודה",
    work: "תשתיות חשמל לעסק",
    text:
      "פרויקט מורכב שבוצע במקצועיות ובתיאום מלא עם הקבלנים. רוני זמין ושקוף לאורך כל הדרך.",
    img: PUBLIC_URL + "/images/testimonials/5.svg",
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
        <link rel="canonical" href={BRAND.siteUrl} />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 md:h-20 lg:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="shrink-0 h-16 sm:h-18 md:h-22 lg:h-26 max-w-[260px] overflow-hidden">
                
                <img
                  src={PUBLIC_URL + "/images/gallery/logo.svg"}
                  className="h-full w-auto object-contain"
                  alt="עבודת חשמל מקצועית – התקנות ובטיחות"
                  // className="w-full h-full object-cover"
                  // loading="lazy"
                  // decoding="async"
                  // referrerPolicy="no-referrer"
                  // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  //   const t = e.currentTarget as HTMLImageElement;
                  //   if (t.src !== FALLBACK_IMG) t.src = FALLBACK_IMG;
                  // }}
                />
            </div>
            {/* <div>
              <div className="font-bold text-lg tracking-tight">{BRAND.name}</div>
             
            </div> */}
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
                <img
                  src={PUBLIC_URL + "/images/hero.svg"}
                  alt="עבודת חשמל מקצועית – התקנות ובטיחות"
                  className="w-full h-full object-cover"
                  loading="lazy"
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
            <div className="text-sm text-gray-600">לוחות חשמל ביתיים ותעשייתיים · גופי תאורה מיוחדים · חללים מעוצבים</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((g, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (t.src !== window.location.origin + FALLBACK_IMG) t.src = FALLBACK_IMG;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-2 right-2 text-white text-xs bg-black/40 px-2 py-0.5 rounded-full">{g.alt}</span>
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
            <div className="text-sm text-gray-600">עבודות נבחרות והמלצות מלקוחות ברחבי הארץ</div>
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
                <div className="font-bold text-lg">עבדנו עם מיטב הקבלנים והאדריכלים</div>
                <div className="text-gray-600 text-sm">התאמה מלאה ללוחות זמנים באתר, תיאומים, בטיחות ותקשורת רציפה</div>
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

      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        // Note: Keep the JSON minimal, accurate, and consistent with visible content
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            name: BRAND.name,
            description:
              "חשמלאי מוסמך וראשי – הנדסאי חשמל. מומחה בכל עבודות החשמל לבית, לעסק ולתעשייה. מעל 8 שנות ניסיון, אמינות ובטיחות.",
            url: BRAND.siteUrl,
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
            priceRange: "₪₪",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "19:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "08:00", closes: "13:30" },
            ],
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

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            style={{ width: `${TESTIMONIALS.length * 100}%` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-1">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <img
                      src={t.img}
                      alt={`עבודה שבוצעה – ${t.work}`}
                      className="w-full h-64 md:h-72 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-teal-700 font-semibold">{t.city} · {t.work}</div>
                    <div className="mt-1 text-lg font-bold">{t.name}</div>
                    <p className="mt-3 text-gray-700 leading-relaxed">{t.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
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
