# Missing Visual Assets — מפרט מלא

8 נכסים. 5 ניתנים לייצור עכשיו,
3 חסומים על צילום אמיתי.

---

## GEN-PERSON-PORTRAIT-001

> **חסום על צילום אמיתי.** דיוקן של אדם אמיתי חייב להיות צילום. ניתן לשפר חיתוך, רקע וצבע — אך לא לייצר פנים.

> לא נוצר עבורו Prompt.

| שדה | ערך |
|---|---|
| Page | `/about/` |
| Section | Team |
| Component | `pending-block` |
| Purpose | לתת לעסק פנים. אתר שירות ללא דמות אנושית אחת אינו מייצר אמון. |
| Scene | דיוקן מקצועי של בעל העסק בסביבת עבודה אמיתית |
| People | רוני חג׳ג׳ בלבד |
| Environment | ליד לוח חשמל פתוח או ברכב העבודה |
| Composition | דמות בשליש הימני, מבט למצלמה, פלג גוף עליון |
| Camera | עדשה 50–85 מ״מ, גובה עיניים |
| Lighting | אור יום רך מהצד, ללא פלאש ישיר |
| References | `SRC-RONI-001` + `SRC-PANEL-001` |
| Ratio | 4:5 |
| Resolution | 1600×2000 |
| **Crop Safe Area** | לשמור 25% נקיים בצד שמאל — שם יושב הטקסט בעמוד האודות |
| Final Filename | `roni-portrait.webp` |
| Destination | `/public/images/person/roni-portrait.webp` |
| Alt Text | רוני חג׳ג׳, בעל RNRG — הנדסאי חשמל וחשמלאי ראשי |
| Priority | P0 |
| Status | **BLOCKED ON REAL PHOTO** |

---

## GEN-TEAM-ONSITE-001

> **חסום על צילום אמיתי.** תמונת צוות היא טענה עובדתית על גודל הצוות ועל יכולת הביצוע. זו בדיוק ההמצאה שהפרויקט הזה קיים כדי להסיר. חייבת צילום אמיתי.

> לא נוצר עבורו Prompt.

| שדה | ערך |
|---|---|
| Page | `/contracting/` |
| Section | Hero / capacity |
| Component | `pending-block` |
| Purpose | לגבות את הטענה המרכזית של הענף הקבלני — שיש כאן צוות ולא איש אחד. |
| Scene | צוות חשמלאים בעבודה באתר |
| People | מספר האנשים חייב להתאים לגודל הצוות האמיתי |
| Environment | אתר בנייה או מבנה מסחרי בשלב גמר |
| Composition | שני אנשים לפחות, פעולה אמיתית ולא פוזה |
| Camera | עדשה רחבה 28–35 מ״מ |
| Lighting | אור יום טבעי |
| References | `SRC-TEAM-001` + `SRC-SITE-001` + `SRC-COMMERCIAL-001` |
| Ratio | 16:9 |
| Resolution | 2400×1350 |
| **Crop Safe Area** | לשמור 40% נקיים בצד ימין לכותרת ול-CTA; המרכז נחתך במובייל |
| Final Filename | `contracting-team-onsite.webp` |
| Destination | `/public/images/contracting/contracting-team-onsite.webp` |
| Alt Text | צוות RNRG בעבודת חשמל באתר |
| Priority | P0 |
| Status | **BLOCKED ON REAL PHOTO** |

---

## GEN-CONTRACTING-SITE-001

| שדה | ערך |
|---|---|
| Page | `/contracting/builders/` |
| Section | Hero |
| Component | `PageHero` |
| Purpose | להראות לקבלן בניין שהעסק עובד בשלב שלו — שלד, לפני גמר. |
| Scene | תשתית חשמל באתר בנייה למגורים לפני יציקה |
| People | ללא אנשים, או ידיים בלבד |
| Environment | שלד בטון, קירות בלוקים, צנרת שרשורית וקופסאות מותקנות |
| Composition | צנרת מובילה את העין לעומק הפריים |
| Camera | עדשה 24–35 מ״מ, גובה חזה |
| Lighting | אור יום דרך פתחים, ניגודיות בינונית |
| References | `SRC-SITE-001` + `SRC-COMMERCIAL-001` + `SRC-PANEL-005` |
| Ratio | 16:9 |
| Resolution | 2400×1350 |
| **Crop Safe Area** | 40% ימין נקיים לכותרת; שליש תחתון עלול להיחתך במובייל |
| Final Filename | `builders-hero-shell-stage.webp` |
| Destination | `/public/images/contracting/builders-hero-shell-stage.webp` |
| Alt Text | תשתית חשמל בשלב שלד באתר בנייה |
| Priority | P1 |
| Status | **NEEDS AI GENERATION** |

---

## GEN-SOLAR-INSTALL-001

> **חסום על צילום אמיתי.** מציג צוות בעבודה — טענה על כושר ביצוע. דורש צילום.

> לא נוצר עבורו Prompt.

| שדה | ערך |
|---|---|
| Page | `/solar/contractors/` |
| Section | Hero |
| Component | `PageHero` |
| Purpose | להראות תהליך התקנה ולא רק גג גמור. |
| Scene | התקנת מערכת סולארית תוך כדי עבודה על גג |
| People | מתקינים בעבודה — מספר תואם לצוות האמיתי |
| Environment | גג שטוח או רעפים, מבנה נשיאה מותקן חלקית, פאנלים באמצע הרכבה |
| Composition | שורות פאנלים באלכסון, שמיים בשליש העליון |
| Camera | עדשה 24–35 מ״מ, גובה נמוך יחסית לגג |
| Lighting | שעת בוקר או אחר צהריים, שמש נמוכה |
| References | `SRC-SOLARWORK-001` + `SRC-SOLAR-001` + `SRC-SOLAR-002` |
| Ratio | 16:9 |
| Resolution | 2400×1350 |
| **Crop Safe Area** | לשמור 40% שמאל נקיים; אין להציב פנים במרכז |
| Final Filename | `solar-contractors-install.webp` |
| Destination | `/public/images/solar/solar-contractors-install.webp` |
| Alt Text | צוות מתקין מערכת סולארית על גג |
| Priority | P1 |
| Status | **BLOCKED ON REAL PHOTO** |

---

## GEN-ELECTRICAL-TEXTURE-001

| שדה | ערך |
|---|---|
| Page | `/electrical/*` |
| Section | Section background |
| Component | `section--sunken` |
| Purpose | רקע עדין שמוסיף עומק לעמודי השירות בלי להתחרות בתוכן. |
| Scene | מקרו מופשט של פסי צבירה מנחושת ומוליכים, מטושטש מאוד |
| People | ללא |
| Environment | מקרו סטודיו |
| Composition | מרקם אחיד ללא נקודת מוקד |
| Camera | מקרו, עומק שדה רדוד מאוד |
| Lighting | אור צד רך שמדגיש את ברק הנחושת |
| References | `SRC-PANEL-005` + `SRC-PANEL-001` |
| Ratio | 21:9 |
| Resolution | 2560×1097 |
| **Crop Safe Area** | כל הפריים — טקסט יונח מעל, לכן ללא פרטים חדים |
| Final Filename | `texture-copper-busbar.webp` |
| Destination | `/public/images/texture/texture-copper-busbar.webp` |
| Alt Text | — (דקורטיבי) |
| Priority | P2 |
| Status | **NEEDS AI GENERATION** |

---

## GEN-OG-CONTRACTING-001

| שדה | ערך |
|---|---|
| Page | `/contracting/` |
| Section | Open Graph |
| Component | `Base head` |
| Purpose | תצוגה מקדימה בשיתוף בוואטסאפ ובלינקדאין, לקהל B2B. |
| Scene | לוח מסחרי גדול, עם שכבת כהות ומקום לכותרת |
| People | ללא |
| Environment | חדר חשמל או קיר גמר |
| Composition | הלוח בצד ימין, שני שלישים שמאליים כהים לטקסט |
| Camera | חזיתי, ללא עיוות פרספקטיבה |
| Lighting | אחיד |
| References | `SRC-PANEL-005` |
| Ratio | 1.91:1 |
| Resolution | 1200×630 |
| **Crop Safe Area** | וואטסאפ חותך לריבוע מהמרכז — הלוח חייב להיות במרכז |
| Final Filename | `og-contracting.png` |
| Destination | `/public/og/og-contracting.png` |
| Alt Text | — (דקורטיבי) |
| Priority | P1 |
| Status | **NEEDS AI GENERATION** |

---

## GEN-OG-SOLAR-001

| שדה | ערך |
|---|---|
| Page | `/solar/` |
| Section | Open Graph |
| Component | `Base head` |
| Purpose | תצוגה מקדימה לשיתוף עמוד הסולארי. |
| Scene | שורות פאנלים על גג, שמיים נקיים, שכבת כהות לטקסט |
| People | ללא |
| Environment | גג בית פרטי או מבנה חקלאי |
| Composition | פאנלים באלכסון מהפינה הימנית התחתונה |
| Camera | מוגבה מעט |
| Lighting | אור בוקר |
| References | `SRC-SOLAR-001` + `SRC-SOLAR-002` |
| Ratio | 1.91:1 |
| Resolution | 1200×630 |
| **Crop Safe Area** | מרכז נקי לחיתוך ריבועי |
| Final Filename | `og-solar.png` |
| Destination | `/public/og/og-solar.png` |
| Alt Text | — (דקורטיבי) |
| Priority | P1 |
| Status | **NEEDS AI GENERATION** |

---

## GEN-ELECTRICAL-EV-001

| שדה | ערך |
|---|---|
| Page | `/electrical/homes/` |
| Section | EV charging |
| Component | `prose` |
| Purpose | להמחיש התקנת עמדת טעינה לרכב חשמלי — נושא בעל כוונת חיפוש גבוהה. |
| Scene | עמדת טעינה ביתית מותקנת על קיר חניה, כבל מסודר |
| People | ללא |
| Environment | חניה פרטית או חניון תת-קרקעי |
| Composition | העמדה בשליש הימני, קיר נקי משמאל |
| Camera | עדשה 35 מ״מ, גובה מותן |
| Lighting | אור יום עקיף |
| References | `SRC-PANEL-001` + `SRC-PANEL-004` |
| Ratio | 3:2 |
| Resolution | 1800×1200 |
| **Crop Safe Area** | ללא טקסט מעל — תמונת תוכן רגילה |
| Final Filename | `ev-charger-install.webp` |
| Destination | `/public/images/electrical/ev-charger-install.webp` |
| Alt Text | עמדת טעינה לרכב חשמלי מותקנת בחניה פרטית |
| Priority | P2 |
| Status | **NEEDS AI GENERATION** |
