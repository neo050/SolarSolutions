# מפת תוכן ו-SEO — כל המסלולים

39 מסלולים. לכל אחד: מילת מפתח ראשית, כוונת חיפוש, כותרת ותיאור מוצעים, מבנה כותרות, קישורים פנימיים, חוסרים, ומפרט המרה.

## איך לקרוא את המסמך הזה

המפה נכתבה על ידי שישה סוכנים שקראו את הקוד בפועל, ואז נבדקה על ידי שני סוכנים נוספים שתפקידם היה **להפריך אותה**. שניהם מצאו טעויות אמיתיות, ולכן האזהרות מופיעות בתוך כל רשומה ולא בנספח:

- **⚠ טענה לא מבוססת** — 51 ממצאים. הצעות שמכילות עובדה שאיש לא אימת: שנות ניסיון, גודל צוות, ביטוח, אחריות, זמן תגובה, או הוכחה שלא קיימת.
- **✕ לא תואם לקוד** — 25 ממצאים. רובם קישורים פנימיים שהמפה מייחסת לעמוד אבל בפועל מגיעים מהתפריט או מהפוטר, ולכן אינם קישור מהעמוד.

**אל תיישמו רשומה בלי לקרוא את האזהרות שלה.** במיוחד: כותרות מוצעות שמבטיחות ביטוח, אחריות, ותק או תיעוד מצולם — כל אלה חסומים על נתונים מבעל העסק, וחלק מהתמונות ירדו מהאתר.

---

## /

**מילת מפתח ראשית:** חשמלאי אשדוד  
**כוונת חיפוש:** transactional  
**מילות משנה:** חשמלאי ראשי אשדוד · רוני חג׳ג׳ חשמל · RNRG חשמל · עבודות חשמל אשדוד · חשמלאי בדרום

**מה לא בסדר בכותרת הנוכחית:**

> Currently "חשמלאי ראשי, קבלנות ביצוע ומערכות סולאריות" (42 chars, renders as 49 with the auto " | RNRG" suffix). Three faults. (1) No locality. business.ts verifies locality: אשדוד, and the LocalBusiness schema emits addressLocality on every page — but no indexable text on the homepage contains the word, so nothing supports the one query the domain root can realistically win. (2) It is a near-verbatim restatement of the H1 ("עבודות חשמל, קבלנות ביצוע ומערכות סולאריות"), which spends the site's second-most valuable string saying what the H1 already says. (3) "חשמלאי ראשי" leads with a licence grade, which is a credential, not a query — nobody searching for an electrician types it. The description (152 chars) is the right length but front-loads credentials before the offer and closes on the area slogan, which is the weakest position for the only geographic signal on the page.

**מוצע:**

```
title       חשמלאי ראשי באשדוד — חשמל, קבלנות ומערכות סולאריות   (50)
description רוני חג׳ג׳, בעל רישיון חשמלאי ראשי מס׳ 991433. עבודות חשמל לבית, קבלנות ביצוע לקבלנים וליזמים והתקנת מערכות סולאריות — ממצפה רמון ועד עמק חפר.   (142)
h1          חשמלאי ראשי מאשדוד — עבודות חשמל, קבלנות ביצוע ומערכות סולאריות
```

**מבנה כותרות:**

- שלושה תחומי פעילות, עסק אחד
- מה אפשר לאמת עלינו לפני שפונים
- עובדים מול קבלנים, יזמים ומנהלי פרויקט
- עבודות שבוצעו — עשרה פרויקטים סולאריים מתועדים
- לקוחות ממליצים
- אזור השירות — מאשדוד, ממצפה רמון ועד עמק חפר
- שאלות שנשאלות לפני פנייה
- צריכים חשמלאי, קבלן חשמל או מערכת סולארית?

**⚠ טענות לא מבוססות (2):**

- `headingOutline` — «עובדים מול קבלנים, יזמים ומנהלי פרויקט»
  - Present-tense assertion of an existing B2B client base. This is a reworded form of the claim already struck in business.ts UNVERIFIED ('עבדנו עם מיטב הקבלנים והאדריכלים' — 'טענת ניסיון ללא ולו פרויקט קבלני אחד מתועד באתר'). projects.ts header states there is not one contracting or commercial project on record; `proof.contractor-clients` and `testimonial.contracting` are both open. Zero contractor names, zero B2B reviews, zero contracting case studies.
  - **במקום:** קבלנות ביצוע — למי היא מיועדת: קבלנים, יזמים ומנהלי פרויקט
- `description, headingOutline` — «ממצפה רמון ועד עמק חפר / "אזור השירות — מאשדוד, ממצפה רמון ועד עמק חפר"»
  - The wording itself is verified (BUSINESS.areaServed), but `fact.areas.list` (P0) is open specifically on whether it holds 'גם לפרויקט קבלני ארוך או רק לקריאות שירות'. Stated flat on the homepage next to the contracting track, it reads as a coverage guarantee for both. The /areas/ page handles this honestly ('אזור השירות המוצהר', 'קריאת שירות ופרויקט קבלני הם לא אותו מרחק'); the homepage should not contradict it.
  - **במקום:** אזור השירות — בסיס באשדוד, ממצפה רמון ועד עמק חפר (עם קישור ל-/areas/ להבחנה בין קריאת שירות לפרויקט)

**✕ לא תואם לקוד:**

- The claimed H1 is stale. The map says the title is "a near-verbatim restatement of the H1 (\"עבודות חשמל, קבלנות ביצוע ומערכות סולאריות\")". The actual H1 at src/pages/index.astro:96 is "קבלנות ביצוע חשמל לפרויקטים — ועבודות חשמל ומערכות סולאריות" (58 chars). The comment at index.astro:89-95 records the string the map quotes as the OLD H1, already replaced precisely because it led with "עבודות חשמל". Fault (2) of three is therefore void: the title and H1 now lead with different claims. Faults (1) and (3) verify — title is 42 chars / 49 rendered, description is 152 chars, and grep confirms "אשדוד" appears nowhere in src/pages/index.astro (it exists only in business.ts, forms.ts, testimonials.ts). internalLinksOut omits the three project-detail links the page actually emits via ProjectCard (featuredProjects().slice(0,3) = /projects/beit-knesset-yona-ganei-tikva/, /projects/argaman-revivim/, /projects/yaakobi-beit-ezra/), and lists /about/ and /areas/, which are chrome-only.
  - **תיקון:** Re-derive the H1-duplication argument against the current H1 (it no longer holds). Add the three featured project links; drop /about/ and /areas/.

**קישורים פנימיים מוצעים:** /electrical/ · /contracting/ · /solar/ · /contracting/builders/ · /contracting/process/ · /quote/?track=contracting · /quote/ · /projects/ · /about/ · /areas/ · /reviews/ · /contact/

**חוסרים:**

- No locality anywhere in indexable copy. אשדוד appears only inside JSON-LD addressLocality — not in title, description, H1, or any body text. The page cannot rank for a local query on schema alone. The service-area section proposed as H2 #6 is where it belongs, paired with the verified area phrase so the wider reach is not narrowed falsely.
- The trust strip renders four numbers with no H2 above it — a whole section with no heading in the outline. Worse, all four are solar-derived (10 projects, 22 kWp largest, 10 localities, 85.5 kWp cumulative), so on the page whose stated commercial priority is contracting, the only quantified proof comes from the line that matters least commercially.
- The "עבודות שבוצעו" strip shows three featured solar projects without stating that zero contracting and zero commercial-electrical projects are documented. /projects/ makes that admission explicitly (per its own notes); the homepage does not — so the homepage sets an expectation that the click-through immediately breaks.
- No body-content link to /about/, though "האם זה עסק רציני או איש אחד" is the registered objection and /about/ is the only page addressing it. Reachable from header and footer nav only.
- No FAQ block and therefore no FAQPage structured data. FaqList.astro already emits FAQPage JSON-LD and is used on every service page — the homepage is the only major route with none, so it competes for a local query with no question-level surface at all.
- Three signals that decide local-pack placement are all absent: opening hours (fact.opening-hours), response time (fact.response-time), and a Google Business Profile link (integration.gbp). Until integration.gbp closes there is nothing tying the site to the local entity Google would rank.
- The closing CtaBand is hard-coded track="private", so the final conversion opportunity on the site's most-visited page addresses one of three audiences and routes a contractor to /quote/?track=private.
- The hero image (/images/gallery/panel-05-wide.jpeg) is the same photograph used as the /contracting/ hero. The homepage and the contracting gateway share their only piece of visual proof, so neither reads as having a portfolio.
- No owner photograph anywhere (photo.owner.portrait, P0). The page's registered objection is whether this is a real business or one person, and it presents no face.

**מפרט המרה:**

- **CTA ראשי:** לבקשת הצעת מחיר → /quote/. But the hero must carry a second, equal-weight button, הצעת מחיר לפרויקט → /quote/?track=contracting, rather than burying the contracting path in a mid-page band — a page whose declared commercial priority is contracting cannot make the contractor scroll past a private-customer CTA to find his own.
- **CTA משני:** חיוג 054-665-6076 — the action of someone with a live fault. Must stay visible without scrolling on mobile (StickyCta already does this); the tel: link in the hero is what serves the transactional half of "חשמלאי אשדוד".
- **מה נדרש כדי לבנות אמון:**
  - Licence number 991433 shown on the hero badge and checkable against the register — the strongest asset on the page and already working
  - Four counted, not estimated, figures in the trust strip, with the note that says so explicitly
  - A photograph of רוני — missing (photo.owner.portrait, P0). Nothing else converts the "one person or a business" objection.
  - Five testimonials with full name and locality — present, but all five are private solar customers, so they prove one third of the offer
  - A Google Business Profile link and real review counts — missing (integration.gbp, P0), and it is what a local query is actually ranked and clicked on
- **התנגדויות:**
  - האם זה עסק רציני או איש אחד — unanswerable today: no owner photo, no crew size, no years of trading (photo.owner.portrait, fact.team.size, fact.experience.years all open)
  - האם הם עובדים בהיקף שלי — the only scale figure on the page is 22 kWp on a domestic roof, which actively signals "too small" to the contractor audience
  - כל הפרויקטים המתועדים סולאריים — אז האם הם באמת עושים חשמל וקבלנות. This objection is created by the page's own projects strip and is not acknowledged anywhere on it.
  - האם הם מגיעים אליי — the area is a slogan phrase, not a list, and fact.areas.list is still open
  - מתי יחזרו אליי — no response time and no opening hours anywhere on the site
- **מסלול המרה:** Three parallel paths, not one funnel. Private: hero → tel: or /quote/. Contracting: contracting band, which must sit above the second fold → /contracting/ or straight to /quote/?track=contracting, two clicks maximum. Solar: track card → /solar/ → בדיקת התאמה. The current single chain (דף בית → כרטיס מסלול → עמוד ענף → הצעת מחיר) forces the two highest-value audiences through a routing step built for the lowest-value one.

---

## /electrical/

**מילת מפתח ראשית:** עבודות חשמל לבית  
**כוונת חיפוש:** commercial  
**מילות משנה:** דרגות רישיון חשמלאי · מה מותר לחשמלאי מוסמך · חשמלאי מוסמך או חשמלאי ראשי · חשמלאי לשיפוץ · הצעת מחיר לעבודות חשמל

**מה לא בסדר בכותרת הנוכחית:**

> Currently "עבודות חשמל לבית ולעסק | חשמלאי בעל רישיון" (42 chars). Three faults. (1) "ולעסק" promises a segment this page does not serve — its track is "private", its H1 is "עבודות חשמל לבתים פרטיים ולדירות", and it contains no business content. It competes directly with /contracting/commercial/ ("חשמל לעסק ולמבנה מסחרי — לוחות ותשתיות") for the same query and will lose, because that page actually has the content. (2) "חשמלאי בעל רישיון" is a category label, not a query, and it duplicates the homepage's licence angle. (3) The pipe splits the title into two fragments, neither of which is a search phrase. The description is worse than the title: at 107 characters it leaves roughly a third of the SERP line unused, and it closes by disqualifying readers ("קבלן או יזם? יש מסלול נפרד") — routing belongs on the page, not in the snippet, whose only job is to earn the click for this page.

**מוצע:**

```
title       עבודות חשמל לבית ולדירה — מה מותר לכל דרגת רישיון   (49)
description לוחות, שדרוג לתלת פאזי, בדיקות ואישורים, תאורה ותקלות — לבית ולדירה, תחת רישיון חשמלאי ראשי מס׳ 991433. וטבלה שמראה מה מותר לכל דרגת רישיון.   (140)
h1          עבודות חשמל לבתים פרטיים ולדירות
```

**מבנה כותרות:**

- עבודות חשמל לבית — לפי סוג העבודה
- מה מותר לכל דרגת רישיון
- מתי צריך חשמלאי מיד ומתי אפשר לתאם
- איך אנחנו עובדים — הצעת מחיר לפני, ועצירה כשמתגלה משהו
- על מה תלוי המחיר
- לקוחות ממליצים
- שאלות נפוצות
- קשור לעמוד הזה
- צריכים חשמלאי?

**⚠ טענות לא מבוססות (2):**

- `headingOutline` — «איך אנחנו עובדים — הצעת מחיר לפני, ועצירה כשמתגלה משהו»
  - A service commitment stated as fact — quote before starting, stop and consult on discovery. No pricing or working policy is recorded in business.ts or anywhere else. pages.ts lists 'האם ייתן מחיר לפני שיתחיל' as an objection to answer, not as a verified answer.
  - **במקום:** מה כדאי לסכם מראש — הצעת מחיר, והחלטה משותפת כשמתגלה משהו בקיר
- `headingOutline` — «מתי צריך חשמלאי מיד ומתי אפשר לתאם»
  - Implies immediate/emergency call-out capability. `fact.response-time` and `fact.opening-hours` are both open; there is no emergency service, no callout window and no hours on record anywhere in the repo.
  - **במקום:** מה מחייב טיפול מיידי ומה אפשר לתאם מראש

**קישורים פנימיים מוצעים:** /electrical/homes/ · /electrical/panels/ · /electrical/three-phase/ · /electrical/inspection/ · /electrical/lighting/ · /quote/?track=private · /contracting/ · /solar/residential/ · /about/ · /faq/ · /areas/ · /contact/

**חוסרים:**

- The gateway cannot route. Its main block, the six-item "מה אנחנו מבצעים" list, is rendered from ServiceSection kind:"bullets", whose Bullet type is {title, text} with no href — the items are inert text. The only in-body path to the children is the `related` array, which lists three entries (panels, inspection, contracting). /electrical/homes/, /electrical/three-phase/ and /electrical/lighting/ are reachable from this page only through the header menu, on a page whose single registered purpose is "לנתב לעמוד השירות הנכון".
- No pricing content of any kind, while "כמה זה יעלה" is a registered objection here and on the three highest-demand children. Prices are not verified and must not be invented — but the variables that set them (גודל הלוח, מצב התשתית הקיימת, האם נדרשת הארקה חדשה, גישה ומרחק) are trade facts, publishable today, and they convert the searcher who came for a number.
- The licence-grade table is the page's strongest asset — pages.ts calls it the central differentiator and the market research found no competitor publishes it — but it sits second, carries no anchor or table markup, and no other page on the site links to it as a reference, so it accrues no internal authority and earns none of the informational queries it could own.
- Four of five child services have no visual evidence at gateway level. The page carries one photograph, a domestic panel — the same subject as /electrical/panels/. Nothing depicts three-phase work, an inspection, or lighting. This is an owner request, not a stock-image problem: nine of twelve project photographs were withdrawn precisely because they were not this business's work.
- No warranty statement (fact.warranty, P0) and no response time (fact.response-time). Risk reduction is the main conversion lever for a private customer, and the page makes no risk claim at all.
- The strongest line of copy on the page — "עוצרים, מסבירים ומקבלים אישור לפני שממשיכים", which answers the objection about mid-job surprises — is buried in prose in the third section, below the licence table, and appears in neither the hero points nor the description.
- No triage content. Someone searching a symptom (פחת שקופץ, ריח שרוף, מאמת קופץ) has no entry point here, and the gateway is the natural place to catch that long tail and route it to the right child page.

**מפרט המרה:**

- **CTA ראשי:** לבקשת הצעת מחיר → /quote/?track=private — but the real primary in-page action is choosing the job, and it is broken: the six service items must become links to the five child pages before the CTA is worth optimising, or the gateway converts nothing it was built to convert.
- **CTA משני:** חיוג 054-665-6076. The dominant action in private electrical work — for a live fault a form is friction, and the mobile StickyCta is the single most valuable conversion element on the page. The number must appear above the fold, not only in the closing CtaBand.
- **מה נדרש כדי לבנות אמון:**
  - The licence-grade table with 991433 marked — present and working; it converts the credential from a label into a checkable capability
  - A real panel photograph in the hero (panel-01-hero.jpeg) — present, though provenance.panel-01 is still open on the uncropped source file
  - Testimonials with full name and locality — five exist, but all five are solar customers; not one covers a classic private electrical job
  - Warranty terms as a number and a scope — missing (fact.warranty)
  - A stated response time — missing (fact.response-time); "נחזור אליכם" converts measurably worse than a committed window
- **התנגדויות:**
  - האם הוא מוסמך באמת — the one objection this page already beats, via the licence table with 991433 marked as ours
  - כמה זה יעלה — unaddressed. No price, no range, and no explanation of what the price depends on.
  - האם ייתן מחיר לפני שיתחיל — answered in prose, but buried below the licence table and absent from the hero
  - מה אם ימצא בעיות באמצע ויעלה את המחיר — the strongest answer on the page exists and is not promoted
  - מתי הוא יגיע — no availability, no opening hours, no response time (fact.opening-hours, fact.response-time)
  - יש אחריות ולכמה זמן — the page claims nothing (fact.warranty, P0)
- **מסלול המרה:** Gateway → linked service card → child page → /quote/?track=private or call. On mobile a large share will never reach the child: they tap the sticky call button from the gateway, which is the correct outcome and the reason the phone number must be above the fold. Secondary path for the misrouted contractor: a single visible line routing to /contracting/ — on the page, not in the meta description where it currently sits.

---

## /contracting/

**מילת מפתח ראשית:** קבלן משנה לחשמל  
**כוונת חיפוש:** commercial  
**מילות משנה:** קבלן חשמל לפרויקטים · קבלנות ביצוע חשמל · חשמל לפרויקט בנייה · חשמלאי לפרויקט · מה ההבדל בין חשמלאי לקבלן חשמל · קבלן חשמל לקבלן ראשי

**מה לא בסדר בכותרת הנוכחית:**

> Currently "קבלן חשמל לפרויקטים | קבלנות ביצוע חשמל" (39 chars). Both halves are the same query rephrased — the pipe buys nothing and half of the most commercially important title on the site repeats the first half. It also omits קבלן משנה, the actual procurement word the buyer uses, while the child page /contracting/builders/ does use it — so the gateway is out-positioned by its own child for its own head term. And it offers no qualifier a project manager can shortlist on: no scope, no stage, no boundary, though "האם הוא בהיקף שלי" is the registered objection. Rendered it becomes "קבלן חשמל לפרויקטים | קבלנות ביצוע חשמל | RNRG" — two pipes, three fragments, and near-certain rewriting by Google. The description (103 chars) is separately broken: it is 37 characters short of the useful floor, and it promises two topics — "מה ההבדל בין חשמלאי לקבלן חשמל" and "מי אחראי על מה" — that appear nowhere in the page's sections. That is a pogo-stick generator on the page that can least afford one. The fix is to write those sections, not to soften the description.

**מוצע:**

```
title       קבלן משנה לחשמל — ביצוע פרויקטים משלד עד מסירה   (46)
description ביצוע החלק החשמלי בפרויקט — תשתיות בשלד, לוחות, נקודות, בדיקות ומסירה. עבודה לפי תוכניות וכתב כמויות, מול קבלן ראשי ומנהל פרויקט, תחת רישיון ראשי 991433.   (153)
h1          קבלנות ביצוע חשמל — קבלן משנה לפרויקטים
```

**מבנה כותרות:**

- מה אנחנו לוקחים על עצמנו בפרויקט
- היקף וכושר ביצוע
- מה ההבדל בין חשמלאי לקבלן חשמל — ומה זה אומר על הפרויקט שלכם
- מול מי אנחנו עובדים
- נקודות ממשק — מי אחראי על מה
- איך זה עובד — מפנייה ועד מסירה
- מה נדרש מכם כדי לקבל הצעה
- שאלות מקבלנים וממנהלי פרויקט
- יש לכם פרויקט שדורש קבלן חשמל?

**⚠ טענות לא מבוססות (3):**

- `title, description` — «קבלן משנה לחשמל — ביצוע פרויקטים משלד עד מסירה / ...עבודה לפי תוכניות וכתב כמויות, מול קבלן ראשי ומנהל פרויקט»
  - 'משלד עד מסירה' and the present-tense 'עבודה... מול קבלן ראשי ומנהל פרויקט' assert a delivered full-lifecycle project history. There is not one contracting project on record (`case.contracting.first`, P0 open; projects.ts header). Separately, `fact.contractor-registry` (P0) is open — whether the business is on פנקס הקבלנים is unknown, and the gap states 'אסור לרמוז על רישום שאינו קיים'.
  - **במקום:** title: "קבלן משנה לחשמל — ביצוע החלק החשמלי בפרויקט" · description: "ביצוע החלק החשמלי בפרויקט — תשתיות בשלד, לוחות, נקודות, בדיקות ומסירה. עובדים לפי תוכניות וכתב כמויות, תחת רישיון חשמלאי ראשי מס׳ 991433."
- `headingOutline` — «היקף וכושר ביצוע»
  - Every number this heading promises is an open P0/P1 gap: `fact.team.size`, `fact.project.max-scale`, `fact.concurrent-projects`, `fact.insurance`. The live page already renders it as kind:"pending" with an explicit 'לא נכתוב כאן הערכה'. Keep it — but the map must state that it stays a Pending block, or the next writer fills it.
  - **במקום:** היקף וכושר ביצוע — נתונים שטרם פורסמו (בלוק Pending על fact.team.size)
- `headingOutline` — «שאלות מקבלנים וממנהלי פרויקט»
  - Implies these questions were actually asked by contractors and project managers. No B2B enquiry, client or testimonial is on record (`testimonial.contracting`, `proof.contractor-clients`, both open).
  - **במקום:** שאלות שקבלן או מנהל פרויקט צריך לשאול לפני שהוא בוחר קבלן משנה

**קישורים פנימיים מוצעים:** /contracting/builders/ · /contracting/renovation/ · /contracting/commercial/ · /contracting/infrastructure/ · /contracting/process/ · /solar/contractors/ · /quote/?track=contracting · /electrical/inspection/ · /about/ · /faq/ · /contact/

**חוסרים:**

- The one section a main contractor opens this page to read does not render in production. "היקף וכושר ביצוע" is kind:"pending", and [...path].astro line 80 filters every pending section out unless SHOW_PENDING. The filter is the right call — an empty band is worse than none — but the consequence is that the live gateway has three sections (scope, audience, process) and says nothing at all about capacity, maximum project scale, crew, or insurance. The shortlist question is not deferred honestly; it is simply absent.
- Zero proof of any kind on the site's most commercially important page: no case study, no client name, no logo, no B2B testimonial, no team photograph. Testimonials are deliberately suppressed for this track (page.track !== "contracting" in the template), which is correct given all five are private solar customers — but the net effect is a page with no social proof whatsoever. Blocked on case.contracting.first, proof.contractor-clients, testimonial.contracting, photo.team.onsite.
- The audience block is inert, exactly as on /electrical/. The five "מול מי אנחנו עובדים" items are Bullet {title, text} with no hrefs, and `related` omits /contracting/commercial/ and /contracting/infrastructure/ — so two of the four audience children are unreachable from the gateway body on a page whose job is routing by buyer type.
- Licence 991433 and its actual capability ceiling — 3×250A, design as well as execution, per LICENCE_CLASSES — are not stated on this page at all. It is the only verified, register-checkable capability claim the business owns and the only credential that speaks to a professional buyer, and it currently lives on /electrical/, where the audience cares least.
- No supplier pack and no downloadable procurement document, although SUPPLIER_PACK already exists in regulatory.ts with one item available (the licence) and five pending. The research found none of 29 competitors offers one. Publishing the single available item plus an explicit list of what follows would beat the entire competitive set today, without waiting for fact.insurance to close.
- Nothing addresses פנקס הקבלנים, which the research identified as a threshold requirement at some main contractors and public bodies. Silence is safer than a claim and must stay silence until fact.contractor-registry closes — but the question costs enquiries in the meantime, and the honest version (what the licence covers, what registration is separately, and where the business stands) is writable the moment that gap closes.
- The only image on the page is panel-05-wide.jpeg, shared with the homepage hero. One photograph, used twice, is the entire visual evidence for the branch that is the centre of the rebuild. photo.team.onsite (P0) and photo.site.construction remain open, and nothing here may be filled with stock.
- A contractor who follows the page's own internal links to /projects/ lands on an explicit statement that every documented project is solar and residential. The gateway does not prepare him for that, so its strongest internal link is also its strongest disproof.

**מפרט המרה:**

- **CTA ראשי:** הצעת מחיר לפרויקט → /quote/?track=contracting. Add a parallel channel next to it: "שלחו כתב כמויות או תוכניות" → office@rnrg.co.il. The nine-field form is a deliberate filter, but procurement converts by sending attachments, and the verified business email is an existing asset that no button currently uses.
- **CTA משני:** שיחה מקצועית — direct dial to 054-665-6076, labelled as a professional call rather than a generic "צור קשר". A project manager screens a subcontractor in a three-minute conversation, not through a form, and this is the one channel where the absence of team-size and insurance data can be answered live.
- **מה נדרש כדי לבנות אמון:**
  - Licence 991433 with its 3×250A design-and-execution scope — verified, checkable, relevant to this buyer, and currently absent from this page
  - A downloadable supplier pack (asset.supplier-pack, P1) — the single highest-leverage asset on the site for this page; no competitor in the 29 surveyed offers one
  - One contracting case study: client type, scope, challenge, what was executed, crew, duration, outcome (case.contracting.first, P0)
  - Crew size and concurrent-project capacity (fact.team.size, fact.concurrent-projects)
  - Contractor's all-risks and third-party insurance, with cover amount (fact.insurance, P0)
  - One testimonial from a contractor, developer, or project manager (testimonial.contracting)
  - One photograph of a crew on site — at least two people, visible equipment (photo.team.onsite, P0)
- **התנגדויות:**
  - כמה אנשים הוא מביא — unanswerable (fact.team.size, P0)
  - האם עמד בהיקף כמו שלי — unanswerable (fact.project.max-scale, P0), and the only quantified work anywhere on the site is a 22 kWp domestic solar system, which reads as "too small"
  - האם יש לו ביטוח עבודות קבלניות וצד ג׳ — unanswerable (fact.insurance, P0). This one fails at procurement screening, before anyone reads a word of copy.
  - האם הוא רשום בפנקס הקבלנים — unanswerable (fact.contractor-registry, P0); a threshold requirement at public bodies and larger mains
  - יהיה לו זמן אליי — unanswerable (fact.concurrent-projects)
  - האם הוא יעכב לי את הגאנט — partly answerable today, with interface-point and staging content, using no business facts that are missing
  - כל מה שמוצג באתר הוא סולארי ביתי — האם הוא בכלל ביצע פרויקט קבלני. Listed nowhere in the current spec, created by the site's own evidence state, and the most likely reason a qualified contractor closes the tab.
- **מסלול המרה:** Gateway → "היקף וכושר ביצוע" (the self-qualifying filter, and the section where the decision is actually made — a /quote/?track=contracting link belongs at its foot, not only in the closing band) → audience child page → /contracting/process/ → nine-field form. A short path must exist in parallel: from the hero, one click to the form or to office@rnrg.co.il with a bill of quantities, because a share of this traffic has already decided to request a quote and is only looking for where to send files.

---

## /solar/

**מילת מפתח ראשית:** התקנת מערכות סולאריות  
**כוונת חיפוש:** commercial  
**מילות משנה:** כמה עולה מערכת סולארית · חשמלאי מוסמך להתקנת מערכת סולארית · מערכת סולארית מחוברת רשת · התקנת פאנלים סולאריים · מערכת סולארית למבנה חקלאי

**מה לא בסדר בכותרת הנוכחית:**

> Currently "מערכות סולאריות — תכנון, אספקה והתקנה" (37 chars) — character-for-character identical to the H1. A title that duplicates the H1 forfeits the one string that can target a different query shape from the on-page heading, and gives Google nothing to prefer when composing the SERP entry. Beyond the duplication, "תכנון, אספקה והתקנה" is supplier-side vocabulary that nobody searches; the buyer types outcome and price words. And it omits the single differentiator the entire branch is built on and that the market research identified as defensible — the electrical work and the installation under one licence, verifiable against register entry 991433. The description is the best of the four gateways because it does carry that differentiator, but at 117 characters it is 23 short of the useful floor, and it opens on system taxonomy (מחוברות רשת / מנותקות רשת) — jargon the private buyer does not use — which pushes the differentiator to the last clause.

**מוצע:**

```
title       התקנת מערכות סולאריות — החשמל וההתקנה ברישיון אחד   (49)
description מערכות לבית, לעסק ולמבנה חקלאי — כולל אגירה ומערכות מנותקות רשת. את החיבור החשמלי מבצע בעל רישיון חשמלאי ראשי 991433 ולא קבלן משנה. מתקינים מ-2018.   (147)
h1          מערכות סולאריות לבית, לעסק ולמבנה חקלאי
```

**מבנה כותרות:**

- החשמל והסולארי — אותו בעל רישיון, אותה אחריות
- לאיזה נכס אתם מתקינים
- מה בודקים לפני שמתחייבים
- מה שצריך לדעת לפני שמתקינים
- איך זה עובד — מבדיקת התאמה ועד חיבור
- פרויקטים סולאריים שבוצעו
- על החזר השקעה ומספרים
- לקוחות ממליצים
- שאלות נפוצות
- רוצים לדעת אם הנכס שלכם מתאים?

**⚠ טענות לא מבוססות (2):**

- `headingOutline` — «החשמל והסולארי — אותו בעל רישיון, אותה אחריות»
  - 'אותה אחריות' is a warranty claim. `fact.warranty` (P0) is open — 'כמה שנים, על מה חלה, מה לא כלול' are all unknown, and business.ts records that the old site's 'אחריות לשנים קדימה' was struck for exactly this reason. The licence half of the sentence is verified; the warranty half is not.
  - **במקום:** החשמל והסולארי — אותו בעל רישיון, אותה אחריות מקצועית על הביצוע
- `headingOutline` — «על החזר השקעה ומספרים»
  - Ambiguous where the sibling pages are explicit. /solar/residential/ says 'למה אין כאן מספר' and /solar/commercial/ says 'למה אין כאן אחוז'; this heading reads as a promise to supply ROI figures. regulatory.ts excludes 'any price, tariff or payback figure' on purpose, and the removed calculator's flat 90% is the precedent.
  - **במקום:** על החזר השקעה — למה אין כאן מספר

**קישורים פנימיים מוצעים:** /solar/residential/ · /solar/commercial/ · /solar/storage/ · /solar/contractors/ · /quote/?track=solar · /projects/ · /electrical/three-phase/ · /electrical/panels/ · /about/ · /faq/ · /contact/

**חוסרים:**

- SOLAR_FACTS in regulatory.ts holds five verified, individually sourced facts — the licence requirement for PV work, the 5 kW single-phase ceiling, the permit-exemption conditions under תקנות התכנון והבנייה, why a grid-tied system stops producing during an outage, and the earthing prohibition on water pipes — and not one of them renders on the solar gateway. It is the highest-quality content the branch owns, it is sourced, and it directly answers three of the four registered objections. It is currently dead code.
- Ten documented projects with customer, locality, system type and rated output, and the gateway displays none. The projects strip appears on the homepage and on /projects/ but not on the page a solar buyer actually lands on. The facts remain verified even for the nine projects whose photographs were withdrawn — they can be shown as data.
- The four system-type bullets are inert (Bullet {title, text}, no href), so no solar child is reachable from the gateway's main routing block; `related` covers only residential and commercial, leaving /solar/storage/ and /solar/contractors/ body-unreachable.
- No price framing. "על החזר השקעה ומספרים" correctly explains why no percentage appears — it is the best copy on the site and replaces the old calculator's flat 90% claim — but it never says what does determine the number (שטח פנוי, כיוון והצללה, צריכה בפועל, גודל החיבור הקיים). Those are publishable trade facts, and without them the honesty reads as evasion to the visitor who arrived on "כמה עולה".
- The regulatory track the business actually files under is unknown (fact.solar-regulatory-track, P1). Dropping the outdated "מסלול ירוק" wording was correct, but the replacement — "מול הגורמים הרלוונטיים" — names nothing, which reads evasive to a commercial buyer and gives the private buyer no timeline anchor.
- No cross-link to /electrical/three-phase/, although the verified 5 kW single-phase ceiling makes a connection upgrade a precondition for most worthwhile systems. It is a genuine qualification step for the buyer and a strong internal link in both directions, and it exploits the cross-branch capability that is the whole positioning.
- Visual proof capacity is genuinely three images (the beit-knesset-yona set), one of which is already spent as the hero; the other nine project photographs were withdrawn as unverified. The gallery should be those three plus the remaining projects rendered as data — not filled, and provenance.project-photos left open.
- No answer to the first question a homeowner actually has — "האם הגג שלי בכלל מתאים". The check-list exists on /solar/residential/ but the gateway, which is where that visitor arrives, has no version of it.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה → /quote/?track=solar. The wording is already the asset — it promises a diagnosis rather than a sales call, which is precisely the difference from the solar companies. What is missing is naming the three questions it asks (סוג נכס, מיקום, שטח פנוי) beside the button, so the click looks like three questions instead of a form.
- **CTA משני:** וואטסאפ עם תמונת הגג, via the existing links.whatsapp() helper with a pre-filled message — stronger here than a phone call, because a solar system is measured by an area the visitor can photograph in ten seconds and the conversation then starts with evidence. Keep חיוג as the third option.
- **מה נדרש כדי לבנות אמון:**
  - Ten projects with customer, locality and rated output — present in projects.ts, shown nowhere on this page
  - Licence 991433 and the fact that PV connection legally requires a licensed electrician — verified in SOLAR_FACTS, and the pairing is what makes the differentiator checkable rather than a slogan
  - Five testimonials with full name and locality — present, and all five are solar customers, so this is the one branch where the social proof is genuinely on-target
  - 2018 as the start of solar activity — verified in business.ts and already in the lede; it is the only quantitative tenure claim permitted anywhere on the site
  - Installation photographs that are demonstrably ours — three exist (beit-knesset-yona), one of which shows work in progress; nine projects stay photograph-free until provenance.project-photos closes
  - The name of the regulatory track actually used — missing (fact.solar-regulatory-track)
- **התנגדויות:**
  - כמה זה עולה — deliberately unanswered, and rightly so, but the honesty section must sit beside the CTA rather than above the fold, or it deflates the visit instead of earning the suitability check
  - כמה זמן לוקח — partly answered (installation short, regulatory approval outside our control); the missing piece is which track is actually filed (fact.solar-regulatory-track)
  - האם צריך היתר — answerable far better than the current "תלוי": SOLAR_FACTS carries the exemption conditions with the naming regulation
  - מה קורה בהפסקת חשמל — answered in the FAQ, but SOLAR_FACTS explains the mechanism and the standard's reason and belongs on-page
  - האם הגג שלי בכלל מתאים — the actual first question, with no answer block on the page
  - מי מטפל ברגולציה ומה קורה אם זה נתקע — the process step says "טיפול בתהליך הרישוי" and names neither track nor responsibility split
  - מי מגיע כשמשהו לא עובד אחרי ההתקנה — the entire point of the one-licence differentiator, and it is never stated as an after-sales promise
- **מסלול המרה:** Gateway → "לאיזה נכס אתם מתקינים" (linked, routing by property rather than by system type) → segment child → "מה בודקים לפני שמתחייבים" → /quote/?track=solar. Parallel path for the visitor who already knows what they want: WhatsApp with a roof photo, straight from the hero, bypassing the gateway entirely. The current spec's single chain assumes everyone needs educating first; a meaningful share do not.

---

## /electrical/homes/

**מילת מפתח ראשית:** עבודות חשמל בבית פרטי  
**כוונת חיפוש:** commercial  
**מילות משנה:** הוספת נקודות חשמל בבית · התקנת מטען לרכב חשמלי בבית · החלפת תשתית חשמל בבית ישן · מעגל ייעודי למיזוג מרכזי · פחת קופץ שוב ושוב · חשמל בגינה ובחצר

**מה לא בסדר בכותרת הנוכחית:**

> "חשמלאי לבית פרטי ולדירה — נקודות ותשתיות" (40 תווים) מתחרה ראש בראש עם השער /electrical/ ("עבודות חשמל לבית ולעסק | חשמלאי בעל רישיון") — שני עמודים על אותה שאילתה, קניבליזציה מובנית. בנוסף המילה "חשמלאי" מסמנת כוונת קריאת שירות דחופה, בעוד שכל גוף העמוד עוסק בתכנון תשתית ובבדיקת עומס לפני הוספה — אי-התאמת כוונה. "נקודות ותשתיות" הוא זנב גנרי שאיש לא מקליד. התיאור באורך 110 תווים בלבד (כ-45 תווי סניפט מבוזבזים) ולא מזכיר ולו ברמז את בדיקת העומס, שהיא כל הבידול של העמוד.

**מוצע:**

```
title       עבודות חשמל לבית פרטי — תשתית, נקודות ומטען לרכב   (48)
description תשתית חשמל לבית פרטי ולדירה: הוספת נקודות, מעגלים ייעודיים, הכנה למיזוג ולמטען לרכב חשמלי, החלפת תשתית ישנה ואיתור תקלות. בודקים עומס לפני שמזמינים ציוד.   (153)
h1          עבודות חשמל לבית פרטי ולדירה
```

**מבנה כותרות:**

- עבודות נפוצות בבית פרטי
- בדיקת עומס — איך יודעים אם התשתית עומדת בתוספת
- הכנה למטען לרכב חשמלי בבית
- בית ותיק: הארקה, תשתית אלומיניום וחתך מוליכים
- פחת שקופץ ותקלות חוזרות — למה לא מנטרלים את ההגנה
- לקוחות ממליצים
- שאלות נפוצות
- קשור לעמוד הזה
- צריכים חשמלאי?

**קישורים פנימיים מוצעים:** /electrical/panels/ · /electrical/three-phase/ · /electrical/inspection/ · /electrical/lighting/ · /contracting/renovation/ · /solar/residential/ · /about/ · /areas/ · /quote/?track=private

**חוסרים:**

- אין ולו נכס ויזואלי אחד בעמוד — heroImage לא מוגדר ואין גלריה. זהו העמוד היחיד מבין החמישה בלי שום תמונה, כשלוחות ותאורה כן נשענים על תמונות. עשרת הקבצים שנשארו בספרייה (panel-01/03/04/05, lighting-01..04) הם כולם לוחות או תאורה מסחרית — אין תמונה מתאימה במלאי. נדרש צילום אחד של עבודה בבית: נקודה חדשה, קופסה פתוחה בקיר, או עמדת טעינה מותקנת.
- שתיים משלוש ההמלצות שהתבנית מציגה כאן (ניר רווח, בר טופז) הן על התקנת מערכת סולארית ולא על עבודת חשמל בבית. אין באתר אף המלצה שמזכירה הוספת נקודות, מטען לרכב חשמלי או החלפת תשתית — הוכחה חברתית שלא תואמת את השירות שבעמוד.
- ה-blurb הקבוע של רכיב ההמלצות אומר "המלצות מלקוחות אמיתיים, בשמם המלא ובתמונתם", אבל התמונות הוסרו ובמקומן מוצגת אות ראשונה. הבטחה שמופרת מול העין באותו מסך.
- "מטען לרכב חשמלי" מקבל שתי פסקאות בתוך עמוד שמכסה שישה נושאים. זו שאילתה מסחרית נפרדת, בביקוש עולה ובמחיר עסקה גבוה ("התקנת עמדת טעינה בבית", "מטען לרכב חשמלי בבית פרטי") — היא לא תדורג מתוך סעיף מוטמע. נדרש עמוד ייעודי /electrical/ev-charger/ עם קישור פנימי מכאן.
- אין ולו משפט אחד על מנגנון התמחור. אין צורך במחיר, אבל כן במה שקובע אותו: מרחק מהלוח, פתיחת קיר מול תעלה, גבס מול בלוק, כמות הנקודות באותו ביקור. זו השאלה הראשונה של כל דייר והעמוד שותק.
- אין מענה ל"כמה ימים זה ייקח" ול"האם צריך לפנות רהיטים / להיות בבית" — ההתנגדות המעשית שמעכבת פנייה בעבודה בנכס מאוכלס.
- תנאי אחריות חסרים (gaps.ts › fact.warranty). העמוד מבטיח התנהלות בלי הפתעות אך לא אומר על מה יש אחריות ולכמה זמן.
- אין שום איתות מקומי: אין רשימת יישובים (fact.areas.list), אין אזכור אזור פעילות בגוף העמוד ואין קישור ל-/areas/. עמוד שירות ביתי בלי עוגן גיאוגרפי לא מתחרה על "חשמלאי + עיר".

**מפרט המרה:**

- **CTA ראשי:** "לקבלת הצעת מחיר לעבודת חשמל בבית" → /quote/?track=private — ניסוח ספציפי במקום "בקשת הצעת מחיר" הגנרי שב-pages.ts
- **CTA משני:** "שיחה על תקלה דחופה" → tel:+972546656076 — ממוצב במפורש כערוץ לדחוף בלבד, כדי שלא יתחרה בטופס אצל מי שמתכנן עבודה
- **מה נדרש כדי לבנות אמון:**
  - מספר רישיון 991433 גלוי בגוף העמוד ולא רק בפוטר
  - קישור לטבלת דרגות הרישיון — מה 3×250A מתיר לתכנן ולבצע
  - צילום אחד לפחות של עבודה שבוצעה בבית פרטי
  - המלצה אחת שעוסקת בעבודת חשמל ביתית ולא בהתקנה סולארית
  - אמירה מפורשת מה כלול בהצעה, מה לא, ומה קורה כשמתגלה חריגה באמצע
- **התנגדויות:**
  - האם התשתית שלי בכלל עומדת בעומס שאני רוצה להוסיף
  - האם יתגלו לי הפתעות אחרי שיפתחו את הקיר, ומי משלם עליהן
  - כמה זה יעלה ולפי מה מתמחרים תוספת נקודה
  - כמה ימים זה ייקח ואיך זה משפיע על החיים בבית בזמן העבודה
  - האם הוא בכלל מגיע ליישוב שלי
- **מסלול המרה:** כניסה מ-long-tail ("הוספת נקודות", "מטען לרכב חשמלי") → סעיף בדיקת העומס כהוכחת ידע → הסעיף הרלוונטי לו (מטען / בית ותיק / פחת) → FAQ → טופס פרטי בן 3 שדות. שיפור נדרש: /quote/ קורא כרגע רק ?track=. הוספת ?service= שתבחר מראש את הערך ב-select "סוג העבודה" מורידה שדה אחד מתוך שלושה בטופס הקצר ביותר באתר.

---

## /electrical/panels/

**מילת מפתח ראשית:** החלפת לוח חשמל  
**כוונת חיפוש:** transactional  
**מילות משנה:** שדרוג לוח חשמל · חידוש לוח חשמל ישן · התקנת ממסר פחת · לוח חשמל עם נתיכי ברגים · כמה זמן לוקחת החלפת לוח חשמל · מחיר החלפת לוח חשמל

**מה לא בסדר בכותרת הנוכחית:**

> "החלפת לוח חשמל — תהליך, הגנות ותקן 61439" (40 תווים) פותחת נכון ואז מבזבזת את השליש האחרון על מספר תקן: לקוח פרטי לא מחפש "תקן 61439", וגוף העמוד לא מזכיר את התקן ולו פעם אחת — כותרת שמבטיחה תוכן שאינו קיים בעמוד. אותו מקום שווה בדיוק למודיפיירים שכן נשאלים ("מתי צריך", "כמה זמן", "כמה עולה"). התיאור באורך 104 תווים בלבד — כ-50 תווי סניפט מבוזבזים — ונשען על "מאמתים", ז׳רגון מקצועי שדייר לא מקליד, בזמן שהמילה "שדרוג" — חצי מכוונת החיפוש בקטגוריה — חסרה ממנו לגמרי.

**מוצע:**

```
title       החלפת לוח חשמל — מתי צריך, כמה זמן ומה נבדק   (43)
description החלפה וחידוש לוח חשמל: ממסר פחת, הגנות מדורגות, הארקה, חלוקת מעגלים ותיוג מלא. מתי מספיק שדרוג ומתי צריך לוח חדש, כמה שעות אין חשמל, ומה נבדק במסירה.   (149)
h1          החלפת לוח חשמל — חידוש, שדרוג והוספת הגנות
```

**מבנה כותרות:**

- מתי לוח חשמל צריך טיפול
- החלפה מלאה או שדרוג של הלוח הקיים
- איך מתבצעת החלפת לוח, שלב אחר שלב
- כמה שעות אין חשמל ואיך מתאמים את זה
- לפי מה מתומחרת החלפת לוח
- בדיקה ומסירה — מה נמדד בסיום ומה מקבלים בכתב
- לוחות שבוצעו
- לקוחות ממליצים
- שאלות נפוצות
- קשור לעמוד הזה
- צריכים חשמלאי?

**⚠ טענות לא מבוססות (3):**

- `title, description, headingOutline` — «כמה זמן / "כמה שעות אין חשמל" / "כמה שעות אין חשמל ואיך מתאמים את זה"»
  - Promises a stated outage duration. No job-duration data exists in the repo. The live FAQ deliberately answers this without a number ('בדרך כלל בשעות בודדות'); a title and an H2 that both lead with 'כמה שעות' set up a figure the business has never supplied.
  - **במקום:** title: "החלפת לוח חשמל — מתי צריך, איך מתבצע ומה נבדק" · heading: "הפסקת החשמל בזמן העבודה — איך מתאמים אותה"
- `headingOutline` — «בדיקה ומסירה — מה נמדד בסיום ומה מקבלים בכתב»
  - 'מה מקבלים בכתב' asserts a written handover document is issued as standard. No such deliverable is defined anywhere; the only written-document commitment in the repo is the FAQ's warranty answer, which says terms are given in the quote and are otherwise unpublished.
  - **במקום:** בדיקה ומסירה — מה נמדד בסיום העבודה
- `headingOutline` — «לוחות שבוצעו»
  - Asserts the gallery images are boards RNRG installed. The panel set's provenance is partly under question: SRC-PANEL-002 is quarantined because it carries another electrician's sticker ('חשמלאי מוסמך · רוני בורוכוב'), and SRC-PANEL-001's uncropped original carried a third party's phone number. `provenance.panel-02` (P0) is still open and the owner has not confirmed authorship of the set.
  - **במקום:** לוחות מתוך העבודה (או: 'תיעוד מלוחות' — ולהמתין ל-provenance.panel-02 לפני ניסוח בעלות מפורש)

**קישורים פנימיים מוצעים:** /electrical/three-phase/ · /electrical/inspection/ · /electrical/homes/ · /contracting/commercial/ · /contracting/infrastructure/ · /about/ · /faq/ · /quote/?track=private

**חוסרים:**

- הגלריה מציגה ארבעה לוחות ואחד מהם — panel-05, לוח מסחרי בן 72 מודולים עם בקרת בידוד ומנתקים — אינו לוח ביתי כלל. זו ההוכחה הקבלנית החזקה ביותר במלאי והיא יושבת בעמוד פרטי בלי כיתוב שמסביר מה רואים ובלי קישור למי שזה רלוונטי עבורו.
- אין באף אחת מארבע התמונות זוג "לפני/אחרי" של אותו לוח. זה בדיוק מה שמוכר החלפת לוח: הפער בין קופסת נתיכים ישנה ללוח מתויג. אין כזה במלאי כלל.
- panel-01-hero.jpeg נושא לבדו את משקל ההוכחה בשני עמודים (hero של /electrical/ וגלריה כאן), ו-gaps.ts › provenance.panel-01 עדיין פתוח — הקובץ הלא-גזור הכיל טלפון של צד שלישי והועבר לבידוד.
- אין תשובה למנגנון המחיר. "כמה עולה החלפת לוח חשמל" היא שאילתת ה-long-tail הגדולה ביותר בקטגוריה, וניתן לענות עליה בכנות בלי לנקוב במספר: מספר מעגלים, גודל החיבור, האם נדרשת השלמת הארקה, לוח שקוע מול חיצוני, והאם יש מקום פיזי להרחבה.
- "מקבלים אישור בסיום?" נענה ב-FAQ בלבד ובאופן חלקי. לא נאמר מה בדיוק נמדד בבדיקת המסירה ומה נמסר בכתב — וזה בדיוק החיבור ל-/electrical/inspection/ שמכפיל עסקה בפנייה אחת.
- תנאי אחריות חסרים (gaps.ts › fact.warranty). בעמוד שמוכר החלפת מרכיב ההגנה של כל המתקן, מספר שנות אחריות הוא מנוף ההמרה החזק ביותר האפשרי — והוא ריק.
- אין באתר אף המלצה שמזכירה לוח חשמל. שלוש ההמלצות שמוצגות כאן הן על סולארי ועל "עבודות חשמל" כלליות.
- העמוד לא מזכיר לוח בבניין משותף מול בית פרטי, ולא אומר אם נדרש תיאום עם ועד או עם חברת החשמל — שאלה מעשית שעוצרת פניות מדירות.

**מפרט המרה:**

- **CTA ראשי:** "לקבלת הצעת מחיר להחלפת לוח" → /quote/?track=private, עם "החלפה או חידוש לוח חשמל" נבחר מראש ב-select
- **CTA משני:** "שליחת תמונה של הלוח הקיים בוואטסאפ" → links.whatsapp() עם טקסט מוכן. זהו שיפור ממשי על "חיוג" שב-pages.ts: הוא מסיר את החיכוך הגדול ביותר בקטגוריה — הלקוח לא יודע מה יש לו, ותמונה אחת פותרת את זה בלי שיחה
- **מה נדרש כדי לבנות אמון:**
  - זוג תמונות לפני/אחרי של אותו לוח
  - רישיון 991433 ומה שדרגת "חשמלאי ראשי" מתירה — 3×250A, מוצג בעמוד עצמו
  - פירוט מה נמדד בבדיקת המסירה ומה נמסר בכתב
  - תנאי אחריות מספריים (חסום על fact.warranty)
  - המלצה אחת שעוסקת בלוח חשמל ולא בסולארי
- **התנגדויות:**
  - כמה שעות בדיוק אני בלי חשמל, ומה קורה עם המקרר והמזגן
  - חייבים להחליף את כל הלוח או שאפשר להסתפק בשדרוג
  - כמה זה עולה, ולמה יש פער כזה בין הצעות שקיבלתי
  - מי אחראי אם משהו יישרף אחרי ההחלפה
  - האם נדרש אישור של ועד הבית או של חברת החשמל
- **מסלול המרה:** שאילתה טרנזקציונית → סעיף הסימנים לזיהוי עצמי → "החלפה או שדרוג" שמסיר את החשד שדוחפים עבודה מיותרת → "לפי מה מתומחר" → גלריה → וואטסאפ עם תמונת הלוח, או טופס פרטי. נתיב מקביל שחייב להיות מסומן: מבקר שמזהה את הלוח המסחרי בגלריה עובר ל-/contracting/commercial/ ומשם לטופס הקבלני — עסקה מסדר גודל אחר שהעמוד כרגע מפיל.

---

## /electrical/three-phase/

**מילת מפתח ראשית:** שדרוג לתלת פאזי  
**כוונת חיפוש:** commercial  
**מילות משנה:** מעבר מחד פאזי לתלת פאזי · הגדלת חיבור חשמל לבית · כמה עולה שדרוג לתלת פאזי · בדיקת עומס חשמלי בבית · איזון פאזות בלוח · האם אני צריך תלת פאזי

**מה לא בסדר בכותרת הנוכחית:**

> "הגדלת חיבור חשמל ומעבר לתלת פאזי" (32 תווים) קוברת את מילת המפתח: "תלת פאזי" — מה שאנשים באמת מקלידים — נמצא בסוף המחרוזת, ו-28 תווים מתקציב הכותרת פשוט לא נוצלו. חמור מכך, "הגדלת חיבור חשמל" הוא נושא בפני עצמו שהעמוד אינו מכסה: אין בו מילה על הגשת הבקשה, על האגרה או על מה שמשתנה בתעריף, והעמוד עצמו מודה בפירוש שהטיפול מול חברת החשמל "אינו בשליטתנו". כותרת שמבטיחה נושא שאינו נמסר. התיאור, 87 תווים, הוא הקצר מבין חמשת העמודים — כשני שלישים מהסניפט מבוזבזים.

**מוצע:**

```
title       שדרוג לתלת פאזי — מתי באמת צריך ומה התהליך   (42)
description מתי חיבור תלת פאזי באמת נדרש ומתי איזון מעגלים בלוח פותר את הבעיה, מה משתנה בלוח ובתשתית, איך מתנהל התהליך מול חברת החשמל וכמה זמן לוקח כל שלב.   (143)
h1          שדרוג לתלת פאזי
```

**מבנה כותרות:**

- מתי חיבור תלת פאזי באמת נדרש
- מתי לא צריך — הבדיקה שחוסכת את השדרוג
- מה נבדק לפני ההחלטה: גודל חיבור, לוח, מוליכים והארקה
- שלבי השדרוג
- מה תלוי בנו ומה תלוי בחברת החשמל
- תלת פאזי ומערכת סולארית — מתי החיבור הוא הגורם המגביל
- לקוחות ממליצים
- שאלות נפוצות
- קשור לעמוד הזה
- צריכים חשמלאי?

**⚠ טענות לא מבוססות (1):**

- `description` — «איך מתנהל התהליך מול חברת החשמל וכמה זמן לוקח כל שלב»
  - Promises per-stage timeline figures for the IEC upgrade process. No timeline data is in regulatory.ts, which explicitly excludes anything the research rated below HIGH confidence with a named official source.
  - **במקום:** ...איך מתנהל התהליך מול חברת החשמל, ומה תלוי בנו ומה תלוי בהם.

**✕ לא תואם לקוד:**

- The claim "אין בו מילה על הגשת הבקשה" is false. src/data/services/electrical.ts:277 is a numbered step titled "תיאום מול חברת החשמל" with text "הגשה וליווי התהליך מול הגורם המספק"; heroPoints:256 says "ליווי מול חברת החשמל"; and the description itself says "איך מגישים בקשה לחברת החשמל". The rest of the claim verifies: no אגרה, no תעריף, and the FAQ at line 285 does say the Israel Electric process "אינו בשליטתנו". Title 32 chars and description 87 chars both confirmed, and 87 is the shortest of the five /electrical/ child pages (110/104/87/99/91).
  - **תיקון:** Narrow the fault to fee and tariff coverage only; the application/submission step is delivered on the page.

**קישורים פנימיים מוצעים:** /electrical/panels/ · /electrical/homes/ · /electrical/inspection/ · /solar/residential/ · /about/ · /faq/ · /quote/?track=private

**חוסרים:**

- העמוד לא מזכיר את הקשר הסולארי, למרות שב-src/data/regulatory.ts יושבת עובדה מאומתת שמייצרת אותו: הספק מתקן פוטו-וולטאי בחיבור חד-פאזי מוגבל ל-5 קילוואט, ומעליו נדרש מעבר לתלת פאזי. זו אחת הסיבות השכיחות לשדרוג בישראל, היא שאילתה בפני עצמה, והיא הגשר היחיד בין המסלול הפרטי למסלול הסולארי. חסרה לחלוטין.
- אין בעמוד שום נכס ויזואלי — לא hero ולא גלריה. אין קובץ מתאים במלאי; נדרש צילום של לוח לאחר מעבר לתלת פאזי שבו נראית החלוקה לשלוש פאזות.
- אין ולו משפט אחד על מה מרכיב את העלות. regulatory.ts אוסר לצטט תעריף וזה נכון — אבל אפשר וצריך לפרט את הרכיבים (עבודת החשמלאי, לוח מותאם, מוליכים, אגרת הגורם המספק) ולומר מפורשות שהאגרה נקבעת מחוץ לנו.
- "כמה זמן לוקח התהליך" נענה ב-FAQ באמירה ש"אינו בשליטתנו", בלי טווח ובלי הפרדה בין משך העבודה שלנו לבין ההמתנה מול חברת החשמל. זו ההתנגדות הראשונה בעמוד והתשובה הנוכחית מגדילה אותה.
- אין הסבר מה קורה בזמן העבודה עצמה — האם הבית ללא חשמל ולכמה זמן.
- "בדיקת עומס" מוצגת בכל העמוד כשירות המפתח וכ-CTA ("בדיקת התאמה"), אבל לא נאמר מה היא כוללת, כמה זמן היא לוקחת, האם היא בתשלום ומה מקבלים בסופה. ה-CTA מוכר מוצר שהעמוד לא מגדיר.
- אין אזכור אזור פעילות ואין קישור ל-/areas/ (חסום גם על fact.areas.list).

**מפרט המרה:**

- **CTA ראשי:** "לבדיקת עומס לפני החלטה על שדרוג" → /quote/?track=private. ה-CTA צריך למכור את הבדיקה ולא את השדרוג: זו ההצעה שהכי קל לומר לה כן, והיא גם המסנן שמונע פניות של מי שלא צריך
- **CTA משני:** "שאלה קצרה בטלפון: האם אני בכלל צריך" → tel:+972546656076 — ממוצב מפורשות כשיחת ייעוץ ולא כהזמנת עבודה
- **מה נדרש כדי לבנות אמון:**
  - אמירה מפורשת שלעיתים התשובה היא "לא צריך", ושבדיקת העומס יכולה להסתיים בהמלצה לאיזון מעגלים בלבד — זה נכס ההמרה המרכזי, לא ויתור
  - פירוט מה נבדק בבדיקת העומס ומה מתקבל בסופה
  - רישיון 991433 ודרגת חשמלאי ראשי — 3×250A, המכסה כל חיבור ביתי תלת פאזי סביר
  - הפרדה חדה בין מה שבאחריותנו לבין מה שמתנהל מול חברת החשמל, כולל טווח זמן לחלק שלנו
- **התנגדויות:**
  - אמרו לי שאני צריך תלת פאזי — אבל האם באמת
  - כמה זה עולה בסך הכול, כולל האגרה של חברת החשמל
  - כמה זמן זה נמשך, ואיזה חלק מהזמן תלוי בכם
  - כמה זמן אני בלי חשמל בזמן הביצוע
  - האם ישכנעו אותי לעבודה מיותרת כדי להגדיל את ההצעה
- **מסלול המרה:** שאילתה אבחונית ("האם אני צריך תלת פאזי") → סעיף "מתי לא צריך" שקונה אמון בכך שהוא עלול לשלול את העסקה → "מה נבדק לפני ההחלטה" → CTA לבדיקת עומס → טופס פרטי. פיצול: מבקר שהגיע בגלל מערכת סולארית מעל 5kW מנותב ל-/solar/residential/ ומשם לטופס הסולארי — עסקה גדולה בהרבה מהשדרוג עצמו.

---

## /electrical/inspection/

**מילת מפתח ראשית:** בדיקת חשמל תקופתית לעסק  
**כוונת חיפוש:** transactional  
**מילות משנה:** אישור חשמלאי לחברת ביטוח · בדיקת חשמל לרישוי עסק · כל כמה זמן חייבים בדיקת חשמל · דוח בדיקת חשמל · בדיקת הארקה ולולאת תקלה · חשמלאי בודק

**מה לא בסדר בכותרת הנוכחית:**

> "בדיקת חשמל ואישור לביטוח — הכנה וליווי" (38 תווים), שתי בעיות. הראשונה: "הכנה וליווי" אומר שאנחנו מכינים אתכם לבדיקה של מישהו אחר ומלווים אותה — ההפך הגמור מה-CTA שהעמוד נושא ("תיאום בדיקה") ומגוף העמוד, שמתאר ביצוע מדידות והפקת דוח. השנייה: הכותרת ממוקדת לקוח פרטי ("לביטוח"), בעוד שהמטרה העסקית של העמוד ב-pages.ts היא ביקוש עסקי עם דחיפות רגולטורית, והנכס הייחודי שלו — טבלת התדירויות מחוזר מהנדס ראשי — הוא כולו על עסקים ומבני ציבור. המילים "לעסק" ו"תקופתית", שמחברות את הכותרת לטבלה, נעדרות. התיאור, 99 תווים, פותח ב"מה נמדד בפועל" ולא חוזר על מילת החיפוש ולו פעם אחת.

**מוצע:**

```
title       בדיקת חשמל תקופתית לעסק ואישור לחברת ביטוח   (42)
description בדיקת חשמל לעסק ולמבנה: הארקה, לולאת תקלה, התנגדות בידוד ותקינות פחת. כל כמה שנים חייבים בדיקה לפי גודל העסק, מה כוללת התעודה ומי סוגר את הליקויים.   (147)
h1          בדיקת חשמל תקופתית ואישור לחברת ביטוח
```

**מבנה כותרות:**

- מה נמדד בבדיקה
- כל כמה זמן חייבים בדיקה — לפי גודל העסק וסוג המבנה
- חשמלאי מוסמך או חשמלאי בודק — מי צריך לבצע אצלכם
- מתי מזמינים בדיקה
- מה כוללת תעודת הבדיקה
- נמצאו ליקויים — מה קורה עכשיו
- כמה זמן לוקחת הבדיקה ומה נדרש מכם לפניה
- לקוחות ממליצים
- שאלות נפוצות
- קשור לעמוד הזה
- צריכים חשמלאי?

**⚠ טענות לא מבוססות (3):**

- `title, h1` — «בדיקת חשמל תקופתית לעסק ואישור לחברת ביטוח / בדיקת חשמל תקופתית ואישור לחברת ביטוח»
  - Certification claim. Asserts RNRG performs the statutory periodic inspection and issues the insurance certificate. regulatory.ts INSPECTION_INTERVALS shows whole categories (over 500 m², public-facing premises, fuel stations, hazardous plants) require a חשמלאי בודק — a grade RNRG is not on record as holding. gaps.ts `fact.credentials.extra` ('הסמכות מעבר לרישיון 991433 — סולארי, מתח גבוה, בדיקות, בטיחות') is open. The live page deliberately hedges with 'הכנה וליווי'; this map removes the hedge.
  - **במקום:** title: "בדיקת חשמל תקופתית לעסק — הכנה, ליווי ואישור" · h1: "בדיקת חשמל תקופתית ואישור לביטוח — הכנה וליווי"
- `headingOutline` — «מה כוללת תעודת הבדיקה»
  - Implies RNRG issues the inspection certificate. See the title/h1 finding — the inspector grade is unverified (`fact.credentials.extra` open). The sibling heading 'חשמלאי מוסמך או חשמלאי בודק — מי צריך לבצע אצלכם' is the right instinct and should govern the whole page.
  - **במקום:** מה כוללת תעודת בדיקה, ומי רשאי להנפיק אותה
- `headingOutline` — «כמה זמן לוקחת הבדיקה ומה נדרש מכם לפניה»
  - Promises an inspection duration. No job-duration figure exists in the repo.
  - **במקום:** מה נדרש מכם לפני הבדיקה

**✕ לא תואם לקוד:**

- The claim "התיאור ... לא חוזר על מילת החיפוש ולו פעם אחת" is imprecise: the description contains "תעודת הבדיקה", so the root בדיקה is present — what is absent is the exact phrase "בדיקת חשמל". Everything else verifies: title 38 chars, description 99 chars, pages.ts primaryCta is "תיאום בדיקה", and the frequency table (data-table variant "inspection", section id "intervals") opens with "לעסקים ולמבנים ציבוריים יש תדירות בדיקה קבועה בחוזר מהנדס ראשי". internalLinksOut claims /quote/?track=contracting; this page's track is "private", so both PageHero and CtaBand emit /quote/?track=private only. /contracting/process/ and /contracting/infrastructure/ are chrome-only; related[] is /electrical/panels/, /contracting/commercial/, /electrical/.
  - **תיקון:** Restate as 'the exact query phrase does not repeat'. Remove /quote/?track=contracting, /contracting/process/, /contracting/infrastructure/.

**קישורים פנימיים מוצעים:** /electrical/panels/ · /contracting/commercial/ · /contracting/process/ · /contracting/infrastructure/ · /electrical/ · /about/ · /faq/ · /quote/?track=private · /quote/?track=contracting

**חוסרים:**

- הפער החמור ביותר בקבוצה: הטבלה מציגה שתי עמודות — "בדיקת חשמלאי מוסמך" ו"בדיקת חשמלאי בודק" — והעמוד אינו אומר באיזו מהן אנחנו יכולים לשרת. רישיון חשמלאי ראשי אינו הסמכת "חשמלאי בודק"; אלה שני דברים נפרדים לגמרי. מבקר שנדרש לבדיקת בודק ואינו יכול לדעת אם הגיע לכתובת הנכונה פשוט עוזב. חסום על gaps.ts › fact.credentials.extra, שמונה במפורש "בדיקות" בין ההסמכות החסרות. עד שייסגר — נדרש משפט מפורש שמפריד בין השניים ואומר מה אנחנו כן מבצעים.
- אין דוגמת דוח. "מה מקבלים בסוף" נענה במילים בלבד; עמוד ראשון מושחר של תעודת בדיקה אמיתית היה הופך הבטחה לראיה. אין כזה במלאי.
- אין שום נכס ויזואלי בעמוד — לא hero ולא גלריה — בעמוד B2B ורגולטורי שכל כולו נשען על אמינות.
- ה-CtaBand בתחתית רץ במסלול private וכותרתו "צריכים חשמלאי?" — פנייה שגויה למנהל מבנה שהגיע בגלל דרישת רגולציה. הרכיב כן מקבל title ו-body כ-props, ו-src/pages/[...path].astro אינו מעביר אותם.
- אין נתיב נפרד לפנייה מרובת אתרים — רשת חנויות, חברת ניהול נכסים, ועד בית עם כמה מבנים. פנייה כזו שווה פי כמה ושייכת לטופס הקבלני, ואין ממנה זכר בעמוד.
- "כמה זה עולה" לא נענה גם לא במנגנון. בבדיקה תקופתית התמחור נגזר מגודל המבנה ומספר הלוחות — אפשר לומר את זה בלי מספר.
- זמן תגובה חסר (gaps.ts › fact.response-time), וכאן הוא קריטי יותר מבכל עמוד אחר: מי שהפוליסה שלו נגמרת בעוד שבוע קונה לפי זמינות, לא לפי מחיר.
- אין שום איתות מקומי — עסק מחפש "בדיקת חשמל לעסק באשדוד". אין קישור ל-/areas/ ואין אזכור אזור פעילות בגוף העמוד.
- שלוש ההמלצות שמוצגות כאן הן מלקוחות פרטיים בסולארי. אין אף קול של בעל עסק שנדרש לבדיקה — פער הוכחה שמנוגד ישירות לקהל היעד של העמוד.

**מפרט המרה:**

- **CTA ראשי:** "לתיאום בדיקה" → /quote/?track=private עם "בדיקה ואישור לחברת ביטוח" נבחר מראש. הביקור הוא המוצר — הכפתור לא צריך לומר "בקשת הצעת מחיר", כי אין כאן הצעה אלא מועד
- **CTA משני:** "לתיאום מועד בטלפון" → tel:+972546656076 — קהל בלוח זמנים רגולטורי סוגר תאריך בשיחה, לא בטופס. שיפור על "חיוג" הגנרי שב-pages.ts
- **מה נדרש כדי לבנות אמון:**
  - אמירה חד-משמעית איזו מבין שתי העמודות בטבלה אנחנו מבצעים (חסום על fact.credentials.extra)
  - רשימת המדידות בפועל — הארקה, לולאת תקלה, התנגדות בידוד ותקינות פחת
  - טבלת התדירויות עם המקור המצוטט (חוזר מהנדס ראשי, 20.9.2010, מ2010-3977) — כבר קיימת, וזה הנכס החזק ביותר בעמוד ואולי באתר
  - דוגמת דוח, ולו עמוד אחד מושחר
  - זמן אספקת הדוח מרגע הבדיקה (חסום על fact.response-time)
- **התנגדויות:**
  - מה אם יימצאו ליקויים — האם אז אני חייב לתקן, ומי מתקן
  - האם אתם בכלל מורשים לבצע את הבדיקה שאני נדרש לה — מוסמך או בודק
  - האם צריך להשבית את העסק בזמן הבדיקה
  - כמה זמן עובר עד שהדוח בידיי, ואני חייב אותו עד תאריך
  - כמה זה עולה למבנה בגודל שלי
- **מסלול המרה:** שאילתה רגולטורית דחופה → טבלת התדירויות, שבה המבקר מגלה שהמועד שלו חלף (זה רגע הדחיפות ולכן הטבלה חייבת להישאר גבוה בעמוד) → סעיף "מוסמך או בודק" שמסיר את חשש הפסילה → "מה קורה אם יימצאו ליקויים" → תיאום בדיקה או חיוג. פיצול חובה: אתר בודד → טופס פרטי; מספר אתרים, מבנה מעל 500 מ"ר או חברת ניהול → /contracting/commercial/ → /contracting/process/ → טופס קבלני בן 9 שדות.

---

## /electrical/lighting/

**מילת מפתח ראשית:** תאורה אדריכלית  
**כוונת חיפוש:** commercial  
**מילות משנה:** תכנון תאורה לבית · תאורה שקועה בתקרת גבס · מעגלי דימר ובקרת תאורה · תאורה לחנות ולמשרד · מתי מתכננים תאורה בשיפוץ · פסי תאורה ותאורת הדגשה

**מה לא בסדר בכותרת הנוכחית:**

> "תאורה אדריכלית — תשתית וביצוע לפי תכנון" (39 תווים) אינה שגויה אבל היא ממקמת אותנו כמבצעים של תוכנית של מישהו אחר, בזמן שהעמוד עצמו פותח ב"היא מתחילה בתכנון פריסה" ומציע לבנות פריסה יחד כשאין תוכנית — סתירה בין הכותרת לתוכן. היא גם אינה נושאת שום רמז לרגע הקנייה, שהוא כל הכוח של העמוד: לפני סגירת התקרה. הבעיה החמורה יותר היא בתיאור: "הצד שאף אחד לא מכסה" מבזבז את עשרים התווים הראשונים של הסניפט על טענה בגנות מתחרים במקום על השאילתה, וממשיך בז׳רגון ("הנמכות גבס, חתכים, מעגלי דימר") שמעצב מבין ובעל דירה לא מקליד — 91 תווים בסך הכול. גם ה-H1 הנוכחי, "תאורה ותאורה אדריכלית", הוא כפילות מגושמת.

**מוצע:**

```
title       תאורה אדריכלית — תכנון וביצוע לפני סגירת תקרה   (45)
description תכנון פריסת תאורה, חלוקה למעגלים והכנות לעמעום, וביצוע התשתית לפני סגירת התקרות — בבית, בשיפוץ ובחלל מסחרי, בתיאום עם האדריכל, המעצב או תוכנית התאורה.   (150)
h1          תכנון וביצוע תאורה אדריכלית
```

**מבנה כותרות:**

- איך מתכננים תאורה, שלב אחר שלב
- מתי מאוחר מדי להחליט — לוח הזמנים של החלטות התאורה
- מה נדרש בתשתית: הנמכות, קופסאות, מעגלי דימר ובקרה
- עבודות תאורה — משלב התשתית ועד הגמר
- תאורה בחלל מסחרי לעומת תאורה בבית
- עבודה מול אדריכל, מעצב או תוכנית תאורה
- מה אנחנו מספקים ומה מספק הלקוח
- לקוחות ממליצים
- שאלות נפוצות
- קשור לעמוד הזה
- צריכים חשמלאי?

**⚠ טענות לא מבוססות (2):**

- `description, headingOutline` — «בתיאום עם האדריכל, המעצב או תוכנית התאורה / "עבודה מול אדריכל, מעצב או תוכנית תאורה"»
  - Present-tense assertion of established working relationships with architects and designers — the same claim as the removed 'עבדנו עם מיטב הקבלנים והאדריכלים' (business.ts UNVERIFIED, LandingPage.tsx:512). No architect, designer or design-led project is documented.
  - **במקום:** description: "...וביצוע התשתית לפני סגירת התקרות — בבית, בשיפוץ ובחלל מסחרי, לפי תוכנית התאורה אם קיימת." · heading: "עבודה לפי תוכנית תאורה של אדריכל או מעצב"
- `headingOutline` — «תאורה בחלל מסחרי לעומת תאורה בבית»
  - The only commercial lighting evidence is the four-photograph fit-out set, all of which sit in quarantine/commercial/ pending `consent.commercial-client-brand`; pages.ts marks this route blockedBy that gap. The section is legitimate as explanation but must not be illustrated or presented as a portfolio.
  - **במקום:** שמור על הכותרת כהסבר בלבד — בלי תמונות ובלי הפניה ל'פרויקט שלנו' עד שייסגר consent.commercial-client-brand.

**✕ לא תואם לקוד:**

- internalLinksOut claims /quote/?track=contracting. The page's track is "private" (src/data/services/electrical.ts:384), so the only quote link emitted is /quote/?track=private. /contracting/infrastructure/, /contracting/renovation/ and /contracting/process/ are chrome-only; related[] is /electrical/homes/, /contracting/commercial/, /electrical/panels/. The title critique itself verifies fully: title 39 chars, description 91 chars, h1 "תאורה ותאורה אדריכלית", and the lede does say "לכן היא מתחילה בתכנון פריסה ולא בבחירת גופים".
  - **תיקון:** Remove /quote/?track=contracting and the three chrome-only contracting links.

**קישורים פנימיים מוצעים:** /contracting/commercial/ · /contracting/infrastructure/ · /contracting/renovation/ · /contracting/process/ · /electrical/homes/ · /electrical/panels/ · /quote/?track=private · /quote/?track=contracting

**חוסרים:**

- העמוד חסום על gaps.ts › consent.commercial-client-brand. ארבע תמונות התאורה הן פרויקט מסחרי אמיתי אחד שבו מותג צד שלישי גלוי בשילוט ("Luna Park of Flavors"), והן מוצגות כרגע בלי אישור הלקוח. עד שיתקבל — או שהשילוט מטושטש או שהתמונות יורדות. עם אישור, זו ההוכחה המסחרית החזקה ביותר באתר כולו.
- lighting-01 (תקרה פתוחה, שלב תשתית) ו-lighting-02 (אותו חלל לאחר גמר) הן זוג לפני/אחרי של אותו מקום, אבל הגלריה מציגה ארבע תמונות שוות במשקל ולא אומרת שמדובר באותו פרויקט. הכיתובים מרמזים על כך; המבנה לא. סידור כזוג מתועד, עם משפט אחד על מה קרה בין השתיים, הופך גלריה לראיה.
- אין ולו תמונה אחת של תאורה בבית פרטי, בזמן שהעמוד יושב תחת /electrical/ במסלול הפרטי וה-related שלו מוביל ל-/electrical/homes/. כל ההוכחה הוויזואלית מסחרית.
- אין סיפור לפרויקט המסחרי — סוג העסק, ההיקף, מה בוצע, כמה זמן (gaps.ts › case.commercial.first). הגלריה מראה ולא מספרת.
- העמוד לא אומר מה אנחנו מספקים ומה מספק הלקוח: האם אנחנו מזמינים גופי תאורה, האם יש ספקים שאנחנו עובדים מולם, או שאנחנו רק מבצעים. זו השאלה המעשית הראשונה בכל פרויקט תאורה והיא לא נענית.
- אין שום התייחסות לטמפרטורת צבע, ל-CRI או להספק — הפרמטרים שכל מי שמחפש "תאורה אדריכלית" נתקל בהם. אין צורך בטבלה, אבל היעדר מוחלט של הנושא מוציא את העמוד מהשיחה מול אדריכלים ומעצבים.
- אין תוכן על בקרת תאורה ותרחישי תאורה (דימרים חכמים, בקרה, ממשק לבית חכם) — ההיקף בעל הערך הגבוה ביותר בקטגוריה, ומוזכר רק כ"הכנה לעמעום ולבקרה" בנקודת hero.
- ה-FAQ מכיל שתי שאלות בלבד, הקצר מבין חמשת העמודים, ואינו נוגע במחיר, בלוח זמנים או באחריות.
- העמוד רץ כולו במסלול private, כך שמבקר מסחרי (התאמת מושכר, פתיחת חנות) נופל לטופס בן 3 שדות ולבאנר CTA שכותרתו "צריכים חשמלאי?" — ניתוב שגוי של הפנייה בעלת הערך הגבוה ביותר שהעמוד הזה מייצר.

**מפרט המרה:**

- **CTA ראשי:** "שליחת תוכנית או תמונת החלל לקבלת פריסה ראשונית" → /quote/?track=private. זו התחייבות נמוכה שמתאימה לשלב שבו המבקר באמת נמצא — הוא עוד לא בחר גופים — ועדיפה על "בקשת הצעת מחיר" שב-pages.ts, שמניחה החלטה שטרם התקבלה
- **CTA משני:** מסלול מסחרי נפרד ובולט: "התאמת מושכר או חלל מסחרי" → /quote/?track=contracting דרך /contracting/commercial/. כרגע אין לו שום נתיב בעמוד
- **מה נדרש כדי לבנות אמון:**
  - זוג לפני/אחרי מתועד של אותו פרויקט (lighting-01 מול lighting-02) עם משפט שמסביר את הקשר
  - אישור הלקוח המסחרי לפרסום התמונות ולציון שמו (חסום על consent.commercial-client-brand)
  - סיפור הפרויקט: סוג העסק, היקף, משך וביצוע (חסום על case.commercial.first)
  - דוגמה ביתית אחת לפחות — כל ההוכחה הקיימת מסחרית
  - אמירה מפורשת מה כלול: תכנון פריסה, ביצוע תשתית, אספקת גופים, הרכבה וכיוון
- **התנגדויות:**
  - מתי מאוחר מדי — כבר סגרנו תקרות בחלק מהנכס
  - האם תעבדו לפי התוכנית של האדריכל שלי או תתווכחו איתה
  - מי קונה את גופי התאורה ומי אחראי אם הם לא מתאימים בפועל
  - כמה זה מייקר לעומת תאורה סטנדרטית
  - האם ביצעתם פרויקט בסדר גודל של חלל מסחרי
- **מסלול המרה:** מבקר בשלב תכנון (שיפוץ או התאמת מושכר) → סעיף "מתי מאוחר מדי" שיוצר דחיפות אמיתית ולא מלאכותית → זוג לפני/אחרי → פיצול גלוי בגוף העמוד ולא רק ב-related: פרטי → טופס 3 שדות; מסחרי או מושכר → /contracting/commercial/ → /contracting/process/ → טופס קבלני בן 9 שדות. בלי הפיצול הזה העמוד ממיר את הפנייה היקרה שלו לפנייה הזולה.

---

## /contracting/builders/

**מילת מפתח ראשית:** קבלן משנה חשמל  
**כוונת חיפוש:** commercial  
**מילות משנה:** חשמל לבנייה חדשה · קבלן חשמל לקבלני בניין · תשתית חשמל בשלד · ביצוע חשמל בפרויקט מגורים · לוחות דירתיים וקומתיים · חשמלאי לפרויקט בנייה

**מה לא בסדר בכותרת הנוכחית:**

> בקוד: "קבלן משנה חשמל לקבלני בניין וליזמים" (35 תווים, 42 אחרי תוספת " | RNRG" ב-Base.astro). שלוש בעיות. ראשית, הזנב "וליזמים" מכניס לכותרת אחת שתי כוונות חיפוש שונות ולא מוסיף שאילתה — יזם לא מקליד "קבלן משנה חשמל ליזמים" — ובאשדוד/דרום זה גם לא מבדל. שנית, נותרו 18 תווים לא מנוצלים שיכלו לשאת את הסיגנל היחיד שקבלן ראשי באמת מחפש: באיזה שלב אנחנו נכנסים (שלד עד מסירה). שלישית, אין בכותרת "בנייה" או "בנייה חדשה", ולכן העמוד לא מתחרה על השאילתה שמביאה אליו את הקהל השני בגודלו. התיאור בקוד: 106 תווים — נמוך ב-34 תווים מהמינימום, כלומר גוגל מקבל פחות טקסט ממה שהוא מוכן להציג ונוטה לשכתב אותו מהעמוד; והוא מסתיים ב"וכתב כמויות" בלי אף אלמנט של הפחתת סיכון, שהוא כל מה שמעניין קבלן ראשי בקליק.

**מוצע:**

```
title       קבלן משנה חשמל לקבלני בניין — משלד ועד מסירה   (44)
description ביצוע החלק החשמלי בפרויקט בנייה: תשתית בשלד, השחלה, לוחות דירתיים וקומתיים, גמר, בדיקות ומסירה. עבודה לפי תוכניות וכתב כמויות ובתיאום עם קבלני המשנה.   (149)
h1          קבלן משנה חשמל לקבלני בניין
```

**מבנה כותרות:**

- שלבי הביצוע בפרויקט בנייה — מהשלד ועד המסירה
- מה נכנס לתמחור לפי כתב כמויות ומה לא
- נקודות הממשק שגורמות לרוב העיכובים
- מי אחראי על מה — אנחנו, הקבלן הראשי והיועץ
- מסמכים שהרכש שלכם יבקש לפני פתיחת הזמנה
- היקף וכושר ביצוע
- פרויקט בנייה לדוגמה
- שאלות שקבלני בניין שואלים אותנו
- קשור לעמוד הזה

**⚠ טענות לא מבוססות (4):**

- `title, h1, description` — «קבלן משנה חשמל לקבלני בניין — משלד ועד מסירה / ...תשתית בשלד, השחלה, לוחות דירתיים וקומתיים, גמר, בדיקות ומסירה»
  - Asserts completed residential new-build delivery. `case.contracting.first` (P0) and `photo.site.construction` (P1) are both open; pages.ts marks this route blockedBy both plus `asset.supplier-pack` and `fact.contractor-registry`. Nothing in the repo documents a בניין project of any size.
  - **במקום:** title: "קבלן משנה חשמל לקבלני בניין — מה אנחנו מבצעים" · description: "מה כולל ביצוע החלק החשמלי בפרויקט בנייה: תשתית בשלד, השחלה, לוחות דירתיים וקומתיים, גמר, בדיקות ומסירה — לפי תוכניות וכתב כמויות, בתיאום עם יתר קבלני המשנה."
- `headingOutline` — «מסמכים שהרכש שלכם יבקש לפני פתיחת הזמנה»
  - Reads as 'here is our supplier pack'. regulatory.ts SUPPLIER_PACK has five of six items at status:"pending" — only the licence is available. `asset.supplier-pack` (P1) and `fact.insurance` (P0) are open, and `fact.contractor-registry` is unanswered. Publishing this heading without the pending markers in the heading itself invites a fabricated document list.
  - **במקום:** מסמכי ספק — מה כבר קיים ומה עדיין לא פורסם
- `headingOutline` — «פרויקט בנייה לדוגמה»
  - Narrows the live page's honest 'פרויקט לדוגמה' Pending block into a claim that a building project exists. Zero contracting projects on record; `case.contracting.first` open P0.
  - **במקום:** פרויקט בנייה לדוגמה — טרם פורסם (בלוק Pending על case.contracting.first)
- `headingOutline` — «נקודות הממשק שגורמות לרוב העיכובים»
  - 'רוב העיכובים' is a statistical claim about the industry with no source in the repo. regulatory.ts is explicit that only HIGH-confidence, named-source research items may be published.
  - **במקום:** נקודות הממשק שבהן פרויקטים נתקעים

**קישורים פנימיים מוצעים:** /quote/?track=contracting · /contracting/process/ · /contracting/infrastructure/ · /contracting/renovation/ · /contracting/ · /electrical/panels/ · /electrical/inspection/ · /solar/contractors/ · /about/ · /contact/

**חוסרים:**

- אין בעמוד ולו נכס ויזואלי אחד. אין heroImage בכלל ב-CONTRACTING[1] — בזמן שלעמוד המסחרי ולעמוד התשתיות יש. הראיה הקרובה ביותר שקיימת היא lighting-01 (שלב תשתית מסחרי), והיא כבר תפוסה כ-Hero של /contracting/infrastructure/. מה שחסר ספציפית: אתר בנייה למגורים בשלב שלד — צנרת ושרוולים לפני יציקה (gap photo.site.construction, GEN-CONTRACTING-SITE-001 מסומן assertsFact:false ולכן ניתן לייצור, אבל עדיין לא יוצר).
- סעיף "פרויקט לדוגמה" הוא kind:"pending" ולכן [...path].astro מסנן אותו החוצה כש-SHOW_PENDING כבוי. התוצאה: בפרודקשן העמוד שאמור לזכות בפנייה מקבלן בניין מכיל בדיוק שני בלוקים — שלבי ביצוע ונקודות ממשק — ואפס הוכחה. זה גם הפער התוכני מול המתחרים וגם הסיבה שהעמוד קצר מכדי לדרג על שאילתה מסחרית.
- panel-03 ("דירה 17") ו-panel-04 ("מונה דירה 2") הן הראיה הישירה ביותר שקיימת לעבודה בבניין רב-דיירים, כלומר בהקשר קבלני — והן מוצגות היום רק ב-/electrical/panels/, עמוד לקהל פרטי. צריך להביא אותן לכאן תחת H2 של לוחות דירתיים וקומתיים, עם כיתוב שמסביר מה רואים.
- אין בעמוד H2 שעונה על "כמה זה עולה" בשפה של קבלן. כתב כמויות מוזכר פעמיים כאמירה כללית, אבל אין שום פירוט של מה נכלל בסעיף ומה נחשב תוספת — וזו השאילתה שמביאה קבלן שכבר מתמחר.
- חסר בלוק מסמכי רכש. SUPPLIER_PACK כבר קיים ב-regulatory.ts עם שישה פריטים, מהם רק אחד (רישיון 991433) במצב available. הבלוק צריך להופיע גם כשחמישה מתוך שישה חסרים — טבלת דרישות עם סטטוס אמיתי חזקה יותר מהיעדר הסעיף, ואף אחד מ-29 המתחרים לא מציג אותה (gaps: fact.insurance, fact.contractor-registry, asset.supplier-pack).
- אין תשובה לשאלת ההתאמה בסדר גודל. fact.project.max-scale ו-fact.team.size חסרים, ולכן העמוד לא יכול לומר לקבלן תוך שניות אם הוא בסדר הגודל שלו — וזו ההתנגדות הראשונה, לא השלישית.
- אין שום איזכור של רישיון 991433 בעמוד הזה, למרות ש-LICENCE_CLASSES מראה ש"חשמלאי ראשי" מתיר תכנון וביצוע עד 3×250A. לקבלן בניין זה בדיוק המסנן שקובע אם הוא ממשיך לקרוא — ואם הפרויקט שלו חורג, עדיף שידע כאן ולא אחרי הצעה.
- FAQ קיים אבל אינו נוגע בשאלות של רכש: ביטוח, ניכוי מס במקור, תנאי תשלום, פנקס קבלנים. שלוש השאלות הקיימות טובות מקצועית וחסרות מסחרית.
- internalLinks: העמוד מקשר היום לשלושה יעדים בלבד (infrastructure, process, renovation) ואין בו ולו קישור אחד ל-/quote/?track=contracting מתוך גוף העמוד — רק דרך CtaBand הגלובלי.

**מפרט המרה:**

- **CTA ראשי:** שליחת פרטי הפרויקט ב-/quote/?track=contracting — סוג פרויקט, מיקום, שלב והיקף. הכפתור צריך לומר במפורש שלא נדרשות תוכניות בשלב הזה ושהתשובה החוזרת היא בדיקת התאמה, לא הצעת מחיר. זו הבטחה שאפשר לקיים ושמפרקת את החשש "עוד ליד שיירדף אחריי".
- **CTA משני:** וואטסאפ עם הודעה מוכנה מראש בנוסח "פרויקט בנייה ב___, שלב ___, מחפשים קבלן משנה לחשמל" (links.whatsapp כבר תומך בפרמטר text). לא "שיחה מקצועית" גנרית — קבלן באתר לא מתקשר, הוא כותב.
- **מה נדרש כדי לבנות אמון:**
  - Case Study קבלני אחד עם היקף, משך ביצוע וגודל צוות — לא סיפור שיווקי (case.contracting.first). זהו פריט ה-Trust היחיד שאם ייסגר, שאר הפערים נסבלים
  - צילום אחד מאתר בנייה למגורים בשלב שלד. הראיה הקיימת (lighting-01) היא מסחרית ותפוסה בעמוד אחר; קבלן בניין רוצה לראות את השלב שלו (photo.site.construction)
  - טבלת מסמכי ספק עם סטטוס לכל פריט, גם כשרובם עדיין לא הועלו — רישיון 991433 מוצג, השאר מסומן. שקיפות על מה שחסר עדיפה על השמטת הסעיף
  - תשובה חד-משמעית על פנקס הקבלנים: כן/לא, ואם כן — ענף וסיווג. אסור לרמוז על רישום שאינו קיים
  - רישיון 991433 מוצג לצד תקרת החיבור שהוא מתיר (3×250A, מ-LICENCE_CLASSES) — הופך תווית ליכולת ניתנת לבדיקה
  - panel-03 ו-panel-04 כראיה ללוחות בבניין רב-דיירים, עם כיתוב שמסביר מה רואים בתמונה
- **התנגדויות:**
  - כמה אנשים הוא מביא לאתר, ומה קורה כשאני צריך תגבור לשבועיים — היום אין באתר מספר (fact.team.size)
  - האם הוא בכלל בסדר הגודל שלי. עשר יחידות זה לא חמישים, ואין נתון על הפרויקט הגדול שבוצע (fact.project.max-scale)
  - האם יש ביטוח עבודות קבלניות וצד ג׳ שהרכש שלי ידרוש לפני פתיחת הזמנה (fact.insurance)
  - האם הוא רשום בפנקס הקבלנים ובאיזה סיווג — תנאי סף אצל חלק מהקבלנים הראשיים (fact.contractor-registry)
  - אין באתר אף פרויקט קבלני מתועד — עשרת המתועדים סולאריים־ביתיים. אולי זה חשמלאי קריאות שכתב עמוד לקבלנים
  - אם הגאנט שלי יזוז בשלושה שבועות, האם אאבד את התור שלי אצלו
  - מי מזמין את החומרים ומה זה עושה למחיר ולאחריות
- **מסלול המרה:** חיפוש "קבלן משנה חשמל" / "חשמל לבנייה חדשה" → נחיתה על שלבי הביצוע (הקורא מזהה את השלב שלו) → נקודות הממשק (הוכחת ניסיון תפעולי, לא שיווקי) → מסמכי רכש (הסרת חסם הרכש לפני הפנייה) → טופס פרויקט ב-/quote/?track=contracting → תשובת התאמה כנה, כולל שלילית → עיון בכתב כמויות → הצעה לפי סעיפים. מסלול חלופי קצר לקבלן שכבר מתמחר: Hero → וואטסאפ עם הודעה מוכנה. מסלול צד למי שעדיין בודק רצינות: /contracting/process/ ואז חזרה לטופס.

---

## /contracting/commercial/

**מילת מפתח ראשית:** עבודות חשמל לעסקים  
**כוונת חיפוש:** commercial  
**מילות משנה:** חשמלאי למבנה מסחרי · לוח חשמל מסחרי · התאמת מושכר חשמל · חשמל לחנות ולמשרד · תאורת חירום במבנה מסחרי · בדיקת חשמל תקופתית לעסק

**מה לא בסדר בכותרת הנוכחית:**

> בקוד: "חשמל לעסק ולמבנה מסחרי — לוחות ותשתיות" (38 תווים, 45 עם " | RNRG"). הבעיה המרכזית היא הפתיח "חשמל לעסק": ביחיד ובצורת סמיכות זו לא הצורה שמקלידים — הביקוש יושב על "עבודות חשמל לעסקים" ו"חשמלאי לעסקים", ושתי הצורות האלה לא מופיעות בכותרת. שנית, "לוחות ותשתיות" חופף מילה במילה לכותרת של /contracting/infrastructure/ ("תשתיות חשמל — הזנות, תעלות ולוחות ראשיים") ויוצר קניבליזציה בין שני עמודים בענף אחד. שלישית, הבידול היחיד שיש לעמוד הזה — עבודה במבנה פעיל בלי להשבית עסק — נעדר לגמרי מהכותרת ומופיע רק בשורה החמישית של העמוד. התיאור בקוד: 106 תווים, מתחת לרף, ומסיים ב"גם במבנה פעיל" כהערת אגב במקום להוביל בה.

**מוצע:**

```
title       עבודות חשמל לעסקים — לוחות, תשתיות ותאורה   (41)
description התאמת מושכר, לוחות מסחריים, תעלות ומובילים, תאורה ותאורת חירום ובדיקות תקופתיות. עבודה במבנה פעיל, כולל חלון זמן מחוץ לשעות הפעילות של העסק.   (140)
h1          עבודות חשמל לעסקים ולמבנים מסחריים
```

**מבנה כותרות:**

- סוגי עבודות חשמל בעסק ובמבנה מסחרי
- עבודה במבנה פעיל — איך מתכננים חלון השבתה
- לוח חשמל מסחרי — מה שונה מלוח ביתי
- התאמת מושכר לפני פתיחת עסק
- תאורה ותאורת חירום במבנה מסחרי
- כל כמה זמן חייבים בדיקת חשמל לפי גודל העסק
- פרויקט מסחרי לדוגמה
- שאלות נפוצות
- קשור לעמוד הזה

**⚠ טענות לא מבוססות (2):**

- `description` — «עבודה במבנה פעיל, כולל חלון זמן מחוץ לשעות הפעילות של העסק»
  - An availability commitment — work outside the client's trading hours. `fact.opening-hours` (P1) is open; the business's own working hours are unverified, so a promise to work outside someone else's is unsupported.
  - **במקום:** עבודה במבנה פעיל — מתאמים מראש חלון השבתה שמתאים לפעילות של העסק.
- `headingOutline` — «פרויקט מסחרי לדוגמה»
  - `case.commercial.first` (P1) is open — the story and the client's consent are both missing — and all four photographs of the one documented commercial fit-out are in quarantine/commercial/ under `consent.commercial-client-brand`, with QA failing if any returns. pages.ts marks the route blockedBy both. The section can exist only as a Pending block.
  - **במקום:** פרויקט מסחרי לדוגמה — טרם פורסם (בלוק Pending על case.commercial.first)

**✕ לא תואם לקוד:**

- Two supporting claims overstate. (1) "'לוחות ותשתיות' חופף מילה במילה לכותרת של /contracting/infrastructure/" — the infrastructure title is "תשתיות חשמל — הזנות, תעלות ולוחות ראשיים"; the overlap is thematic and word-level, not verbatim. (2) "עבודה במבנה פעיל ... מופיע רק בשורה החמישית של העמוד" — it is the closing clause of the meta description ("גם במבנה פעיל") and the opening sentence of the lede ("במבנה מסחרי, השבתה עולה כסף"), i.e. the second visible line. Title 38 chars / 45 rendered and description 106 chars both confirmed, as is its absence from the title.
  - **תיקון:** Restate the cannibalisation as shared head terms rather than verbatim overlap, and correct the position of the מבנה פעיל claim to the lede.

**קישורים פנימיים מוצעים:** /quote/?track=contracting · /electrical/inspection/ · /contracting/infrastructure/ · /electrical/lighting/ · /solar/commercial/ · /contracting/process/ · /contracting/ · /contact/

**חוסרים:**

- הנכס החזק ביותר בכל ספריית התמונות — panel-05, לוח מסחרי בן 72 מודולים עם בקר בידוד ISO-2 ומגענים Eaton — לא מופיע בעמוד הזה בכלל. הוא יושב ב-/contracting/ וב-/electrical/panels/. זו הראיה היחידה ליכולת מעבר לביתי, והעמוד שכל כולו "מעבר לביתי" לא מציג אותה.
- ה-Hero כאן הוא lighting-04 — החלל הגמור שבו שילוט המותג "Luna Park of Flavors" נראה בבירור, בלי אישור פרסום (gap consent.commercial-client-brand). זהו סיכון פעיל בעמוד חי, לא פער תיאורטי: אנחנו מציגים לקוח מזוהה של צד שלישי כתיק עבודות.
- INSPECTION_INTERVALS ב-regulatory.ts הוא נתון מאומת ממקור רשמי (חוזר מהנדס ראשי 20.9.2010), הוא מוצג היום רק ב-/electrical/inspection/, ואף מתחרה שנבדק לא פרסם אותו. בעל עסק מעל 500 מ״ר שמגלה שהוא חייב בדיקה שנתית מקבל סיבה לפעול היום — זהו טריגר המרה רגולטורי, ובעמוד המסחרי הוא נעדר. ליישם כ-data-table (variant "inspection" כבר נתמך בתבנית).
- העמוד כולו הוא בלוק bullets אחד בן חמישה פריטים ועוד בלוק pending שמסונן החוצה בפרודקשן. בפועל זה עמוד של פסקה אחת ורשימה — דק מכדי לדרג על "עבודות חשמל לעסקים", שהיא שאילתה מסחרית תחרותית.
- "עבודה במבנה פעיל" הוא הבידול היחיד וקיים רק כשורת heroPoint וכתשובת FAQ. אין H2, אין הסבר תפעולי: מה מחייב ניתוק מתח ומה לא, כמה זמן חלון טיפוסי, מי מודיע לעובדים ולדיירים, מה קורה עם מקררים ושרתים.
- "התאמת מושכר" — שאילתה עסקית מובהקת עם דחיפות (יש תאריך פתיחה) — קבורה כשורה אחת ברשימת הבולטים. מגיע לה H2 עם רצף השלבים מול תאריך הפתיחה.
- אין ולו מספר אחד שמסנן התאמה: אין אמירה על גודל החיבור המרבי, על סוגי מבנים שכבר בוצעו, ולא הפניה לטבלת הרישיונות. מנהל נכס עם חיבור גדול לא יודע אם הוא בכתובת הנכונה.
- case.commercial.first הוא ה-gap שסוגר את העמוד כמעט לבדו: ארבע התמונות של הפרויקט המסחרי כבר קיימות ומתועדות — חסרים רק הסיפור והאישור. זה מרחק של שיחת טלפון אחת, ולא של פרויקט חדש.

**מפרט המרה:**

- **CTA ראשי:** תיאום סיור במבנה + הגדרת חלון עבודה — הפנייה ל-/quote/?track=contracting עם המסגור "מתי אפשר להיכנס בלי להשבית אתכם". המרה במסחרי נופלת על שאלת ההשבתה, ולכן ה-CTA צריך להישמע כמו פתרון לה ולא כמו טופס.
- **CTA משני:** תיאום בדיקת חשמל תקופתית לפי גודל העסק — CTA נפרד ובעל דחיפות עצמאית, שמניע גם מי שלא מתכנן פרויקט. יעד: /electrical/inspection/ ומשם לטופס. חיוג ישיר נשאר כערוץ שלישי לבעל עסק שמעדיף לדבר.
- **מה נדרש כדי לבנות אמון:**
  - panel-05 מוצג בעמוד הזה עם כיתוב שמסביר מה רואים — 72 מודולים, ארבע שורות, בקר בידוד, מגענים. תמונה בלי הסבר היא דקורציה; עם הסבר היא הוכחת יכולת
  - הסיפור של פרויקט התאורה המסחרי המתועד: מי הלקוח, מה ההיקף, כמה זמן, ומה כלל הביצוע (case.commercial.first) — ארבע התמונות כבר קיימות
  - אישור פרסום מהלקוח שהמותג שלו נראה בתמונות. עד שיתקבל — Hero חלופי או גזירה שמסתירה את השילוט (consent.commercial-client-brand)
  - טבלת תדירויות הבדיקה הסטטוטורית עם ציון המקור — נתון מאומת שאף מתחרה לא פרסם, ושהוא גם הוכחת ידע וגם עילה לפעולה
  - אמירה מפורשת מה מותר ומה לא לפי דרגת הרישיון, כולל "נאמר לכם אם צריך בעל רישיון אחר" — סירוב מוצהר הוא נכס אמון מול קונה מקצועי
  - תיאור קונקרטי של חלון עבודה טיפוסי מחוץ לשעות פעילות: מה מנותק, לכמה זמן, ומה ממשיך לעבוד
- **התנגדויות:**
  - כמה זמן העסק שלי יהיה בלי חשמל, ומתי בדיוק — לא "בתיאום", אלא שעות
  - האם הוא עבד במבנה מסחרי או שכל התיק שלו דירות ומערכות סולאריות ביתיות
  - האם הוא יכול לעבוד בלילה או בסוף שבוע, ומה זה עושה למחיר
  - האם החיבור שלי בכלל בתחום הרישיון שלו, או שנגלה את זה באמצע
  - מי אחראי מול רישוי עסקים ומול חברת הביטוח על האישור בסוף
  - האם יש מי שיגיע כשתיפול תקלה אחרי המסירה, או שזה נגמר בקבלה
  - האם אני מקבל מישהו שמבין בתאורת חירום ובדרישות בטיחות, או חשמלאי כללי
- **מסלול המרה:** חיפוש "חשמלאי לעסקים" / "לוח חשמל מסחרי" / "התאמת מושכר" → סוגי עבודות → תכנון חלון ההשבתה (מפרק את ההתנגדות המרכזית לפני שהיא נשאלת) → לוח מסחרי כהוכחת יכולת → טבלת הבדיקות התקופתיות (טריגר רגולטורי עצמאי) → טופס פרויקט או חיוג. שני משפכים נפרדים במכוון: פרויקט/התאמת מושכר → /quote/?track=contracting; תחזוקה ובדיקה → /electrical/inspection/ ומשם לטופס. מסלול הצלבה: /solar/commercial/ לבעל מבנה עם גג לא מנוצל.

---

## /contracting/infrastructure/

**מילת מפתח ראשית:** ביצוע תשתיות חשמל  
**כוונת חיפוש:** commercial  
**מילות משנה:** לוח חשמל ראשי · חדר חשמל בבניין · תעלות וסולמות כבלים · הזנה ראשית וגודל חיבור · תיוג ותיעוד לוח חשמל · מובילים ושרוולים בפרויקט

**מה לא בסדר בכותרת הנוכחית:**

> בקוד: "תשתיות חשמל — הזנות, תעלות ולוחות ראשיים" (40 תווים, 47 עם " | RNRG"). "תשתיות חשמל" לבדו הוא ביטוי דו-משמעי — הוא נקרא כמו תשתית לאומית של חברת החשמל ולא כמו קבלן משנה שמבצע תשתית בפרויקט, ולכן הכותרת מושכת כוונת חיפוש שהעמוד לא משרת ומפספסת את זו שכן. חסרה מילת פעולה ("ביצוע") שמסמנת שירות. בנוסף "לוחות ראשיים" ברבים מפספס את "לוח חשמל ראשי" ביחיד, שהוא הצורה המדויקת שמקלידים ואחת השאילתות הכי בעלות ערך שהעמוד יכול לתפוס. התיאור בקוד: 108 תווים — קצר מדי, ומסתיים ב"ותיעוד לתחזוקה" שהוא בדיוק הבידול של העמוד אבל נאמר כפריט אחרון ברשימה במקום כטענה.

**מוצע:**

```
title       ביצוע תשתיות חשמל — הזנות, מובילים ולוח ראשי   (44)
description תכנון מסלולים, תעלות וסולמות כבלים, הזנות ראשיות, חדרי חשמל ולוחות ראשיים וקומתיים — כולל תיוג ותיעוד שהופכים תקלה עתידית לחמש דקות במקום לחצי יום.   (147)
h1          ביצוע תשתיות חשמל בפרויקט
```

**מבנה כותרות:**

- מה כולל ביצוע תשתית חשמל בפרויקט
- מסלולי הובלה ותיאום מול יתר המערכות
- הזנות ראשיות וגודל חיבור — עד לאן מגיע הרישיון
- לוח ראשי, לוחות קומתיים וחדר חשמל
- למה תיוג ותיעוד הם לא פינוק
- מה נמסר בסוף — תיוג, תיאור מעגלים ותיק מתקן
- שאלות נפוצות
- קשור לעמוד הזה

**⚠ טענות לא מבוססות (2):**

- `description` — «כולל תיוג ותיעוד שהופכים תקלה עתידית לחמש דקות במקום לחצי יום»
  - Quantified performance claim — a future fault resolved in 'five minutes instead of half a day'. Neither number exists in business.ts, projects.ts or anywhere in the repo. It is an invented service-outcome metric of exactly the class that produced the removed '90% saving' calculator (business.ts UNVERIFIED).
  - **במקום:** תכנון מסלולים, תעלות וסולמות כבלים, הזנות ראשיות, חדרי חשמל ולוחות ראשיים וקומתיים — כולל תיוג ותיעוד מלא, כדי שמי שיפתח את הלוח אחרינו יידע מה מזין מה.
- `headingOutline` — «מה נמסר בסוף — תיוג, תיאור מעגלים ותיק מתקן»
  - Asserts a defined handover deliverable set including a תיק מתקן. No handover specification, deliverable list or documentation standard is recorded anywhere in the repo.
  - **במקום:** מה חשוב שיימסר בסוף — תיוג, תיאור מעגלים ותיעוד המתקן

**קישורים פנימיים מוצעים:** /quote/?track=contracting · /contracting/builders/ · /contracting/commercial/ · /electrical/panels/ · /contracting/process/ · /electrical/inspection/ · /contracting/ · /about/

**חוסרים:**

- ה-Hero כאן (lighting-01) הוא התצלום היחיד באתר שמתעד שלב תשתית בפרויקט אמיתי — תקרת גבס פתוחה, צנרת שרשורית, מוליכים משוכים ותוכניות מודבקות על הקיר. הוא מוצג בלי מילה של הסבר. Alt text לבדו אינו כיתוב: צריך שורת הקשר שאומרת מה בוצע כאן ובאיזה שלב, אחרת הראיה החזקה ביותר בעמוד נקראת כתמונת אווירה.
- LICENCE_CLASSES מראה שחשמלאי ראשי רשאי לתכנן ולבצע עד 3×250A — וזו בדיוק השאלה שמכריעה התאמה בעמוד תשתיות, כי גודל החיבור הוא הפרמטר. הטבלה קיימת ומאומתת, ומוצגת רק ב-/electrical/ (עמוד לקהל פרטי). כאן היא גם מסנן וגם הוכחת שקיפות, ואין לה זכר.
- אין בעמוד ולו תמונה אחת של תיוג בפועל, למרות שכל טיעון העמוד נשען על תיוג ותיעוד. panel-03 ו-panel-04 מתועדים כ"התמונה הטובה ביותר להדגמת איכות התיוג" עם תוויות מודפסות בעברית לכל רכיב — והן מוצגות בעמוד הלוחות הביתי. טענה על תיוג בלי תמונה של תיוג היא בדיוק סוג הטענה שקבלן לא קונה.
- החלק על מה שנמסר בסוף אינו קיים. "תיעוד" מופיע כפריט ברשימה, אבל מנהל פרויקט צריך לדעת מה בדיוק הוא מקבל בקבלה: תיוג פיזי, טבלת מעגלים, מה מזין מה, איפה נקודות הניתוק. זו רשימה שאפשר לכתוב היום מהמקצוע עצמו, בלי אף נתון עסקי חסר.
- העמוד לא מבחין בין תשתית בשלב שלד לבין תשתית במבנה קיים או במבנה פעיל — שני מצבים תפעוליים שונים לחלוטין מבחינת מנהל פרויקט, ושתי קבוצות שאילתות שונות.
- אין הסבר איך מתנהלים כשהתוכנית סותרת את השטח. זה מופיע כשורה ב-/contracting/builders/ ("מול היועץ והבודק") ולא כאן, למרות שבתשתית זה קורה הכי הרבה.
- FAQ בן שתי שאלות בלבד — הקצר מכל חמשת עמודי הענף. חסרות שאלות עם ביקוש: מי קובע את מיקום חדר החשמל, מה נדרש לפני יציקה, האם עובדים לפי תוכנית יועץ או מתכננים בעצמנו (וכאן אפשר לומר דבר אמיתי וחזק — הרישיון מתיר תכנון, לא רק ביצוע).
- העמוד לא מקשר לאף עמוד המרה מגוף התוכן. שלושת ה-related מובילים לעמודי שירות בלבד.

**מפרט המרה:**

- **CTA ראשי:** שליחת תוכניות או כתב כמויות לתמחור תשתית ב-/quote/?track=contracting. בשונה מעמודי הקהל, כאן הקורא כבר יודע מה הוא צריך — ה-CTA צריך לבקש מסמך ולא לבקש שיחת היכרות. חסר בטופס שדה העלאת קובץ, וזו הוספה שמצדיקה את עצמה כאן יותר מבכל עמוד אחר.
- **CTA משני:** בדיקת התאמה לפי גודל החיבור — קישור פנימי לטבלת דרגות הרישיון עם 3×250A מסומן, ומשם חיוג ישיר. מסנן שמונע פנייה מבוזבזת בשני הכיוונים, ומשדר שקיפות במקום התחמקות.
- **מה נדרש כדי לבנות אמון:**
  - כיתוב הסבר על תצלום שלב התשתית — מה בוצע בפריים ובאיזה שלב. תמונה בלי כיתוב אינה עדות
  - טבלת דרגות הרישיון עם ציון 3×250A והמשמעות שלה לגודל חיבור — הופכת את הרישיון ממדבקה למסנן טכני שאפשר לבדוק
  - תמונת תיוג אמיתית (panel-03 / panel-04) לצד הטענה על תיוג, ולא במקום אחר באתר
  - רשימה מפורשת של תוצרי המסירה: תיוג פיזי, טבלת מעגלים, מה מזין מה, מיקומי ניתוק
  - אמירה על עבודה מול יועץ חשמל ועל תיעוד חריגות מהתוכנית — הנוהל, לא הבטחה
  - הצהרה שהרישיון מתיר תכנון ולא רק ביצוע — יתרון אמיתי מול מתחרים שמציגים את עצמם כמבצעים בלבד
- **התנגדויות:**
  - האם הוא עובד לפי תוכנית או מאלתר בשטח ואחר כך אני משלם על ההפרש
  - מה קורה כשיש סתירה בין התוכנית לשטח — מי מחליט ומי מתעד
  - האם גודל החיבור בפרויקט שלי בכלל בתחום הרישיון שלו
  - האם אקבל בסוף מתקן שאפשר לתחזק, או קופסה שחורה שכל תקלה בה מתחילה בניחוש
  - האם הוא משאיר רזרבה בתעלות או ממלא עד הסוף ומשאיר לי בעיה בעוד שנתיים
  - האם הוא מתאם מסלולים עם מיזוג ואינסטלציה מראש או מגלה התנגשות אחרי הקדיחה
  - תשתית זה החלק שאי אפשר לחזור אליו — האם יש כאן מספיק ניסיון כדי לקחת את הסיכון
- **מסלול המרה:** חיפוש "ביצוע תשתיות חשמל" / "לוח חשמל ראשי" / "חדר חשמל" → Hero עם תצלום שלב התשתית וכיתוב מסביר → מה כולל הביצוע → סעיף גודל חיבור ורישיון (מסנן התאמה דו-כיווני) → תיוג ותיעוד עם תמונה → מה נמסר בסוף → שליחת תוכניות/כתב כמויות ב-/quote/?track=contracting. מנהל פרויקט שנחת כאן ראשון עובר בדרך כלל ל-/contracting/process/ לפני שהוא פונה — הקישור צריך להיות בגוף העמוד ולא רק בבלוק "קשור".

---

## /contracting/renovation/

**מילת מפתח ראשית:** חשמלאי לקבלני שיפוצים  
**כוונת חיפוש:** commercial  
**מילות משנה:** החלפת תשתית חשמל בשיפוץ · חשמל בשיפוץ דירה · עבודות חשמל בדירה מאוכלסת · תשתית אלומיניום בדירה ישנה · הוספת נקודות חשמל בשיפוץ · תיאום חשמלאי מול אינסטלטור

**מה לא בסדר בכותרת הנוכחית:**

> בקוד: "חשמל לקבלני שיפוצים — תשתית, לו״ז ומסירה" (40 תווים, 47 עם " | RNRG"). שתי בעיות ממשיות. ראשית "לו״ז" — קיצור עם גרשיים בתוך תגית title: הוא לא נכתב כך באף שאילתה, הוא נחתך מכוער בתצוגות SERP מסוימות, והוא מבזבז את המקום שבו צריכה לשבת המילה שקבלן שיפוצים באמת מחפש. שנית, הפתיח "חשמל ל..." חלש מ"חשמלאי ל...": קבלן שיפוצים מחפש בעל מקצוע, לא תחום. שלישית "מסירה" שייך לעולם המושגים של פרויקט בנייה, לא של שיפוץ דירה, והוא מטשטש את ההבדל מול /contracting/builders/. התיאור בקוד: 109 תווים, ומסיים ב"זמינות ותיאום מול בעלי מקצוע" — נכון אבל גנרי, בלי אף רמז לנושא שבאמת מכריע את הבחירה: מה מתגלה כשפותחים קיר.

**מוצע:**

```
title       חשמלאי לקבלני שיפוצים — זמינות ותשתית ישנה   (42)
description קבלן משנה לחשמל בשיפוץ: החלפת תשתית ישנה, הוספת נקודות, לוח חדש והתאמה לעומס. עבודה בדירה מאוכלסת, תיאום מול אינסטלטור ורצף, ומה שמתגלה כשפותחים קיר.   (149)
h1          חשמלאי לקבלני שיפוצים
```

**מבנה כותרות:**

- מה נכנס לעבודת חשמל בשיפוץ
- למה שיפוצים מתפוצצים בתקציב
- מה בודקים בביקור הראשון לפני שנותנים מחיר
- תשתית ישנה — אלומיניום, הארקה וחתך מוליכים
- עבודה בדירה מאוכלסת
- תיאום מול בעלי המקצוע האחרים — מי נכנס מתי
- שאלות נפוצות
- קשור לעמוד הזה

**⚠ טענות לא מבוססות (1):**

- `title` — «חשמלאי לקבלני שיפוצים — זמינות ותשתית ישנה»
  - 'זמינות' as a headline selling point is a response-time claim. `fact.response-time` (P1) is open — gaps.ts notes the site cannot say more than 'נחזור אליכם'. pages.ts lists 'זמינות' under trustRequired for this route precisely because it is unproven.
  - **במקום:** חשמלאי לקבלני שיפוצים — תשתית ישנה ודירה מאוכלסת

**קישורים פנימיים מוצעים:** /quote/?track=contracting · /electrical/panels/ · /electrical/inspection/ · /electrical/homes/ · /electrical/three-phase/ · /contracting/builders/ · /contracting/process/ · /contact/

**חוסרים:**

- אין heroImage בעמוד. הנכס שהיה מושלם כאן — panel-02, שני לוחות סמוכים, ישן עם חיווט חשוף לצד חדש ומסודר, "לפני ואחרי" מדויק לשיפוץ — נמצא בבידוד בגלל מדבקה של חשמלאי אחר על הארון (provenance.panel-02). זו שאלה שנסגרת בתשובה של משפט אחד מבעל העסק, והיא חוסמת את התמונה הרלוונטית ביותר לעמוד הזה.
- "זמינות" היא המילה שמופיעה בכל תיאור של העמוד ואין מאחוריה שום תוכן. אין תיאור של איך משבצים, מה זמן ההיערכות לעבודה קטנה, האם יש עדיפות ללקוח חוזר, ומה קורה כשהקבלן מתקשר ביום שני על יום רביעי. בשיפוצים זו הסיבה מספר אחת לבחירה — ואי אפשר לכתוב אותה בלי fact.concurrent-projects ו-fact.team.size.
- הבלוק "למה שיפוצים מתפוצצים בתקציב" הוא הכתיבה החזקה ביותר בכל ענף הקבלנות באתר, והוא יושב שני בעמוד בלי כל המשך מעשי. חסר אחריו רשימת בדיקה של הביקור הראשון — מה נבדק, מה מסומן כסיכון, ומה זה עושה להצעה. זה הופך תובנה לשיטת עבודה.
- "עבודה בדירה מאוכלסת" קיים כשורת heroPoint וכתשובת FAQ, בלי H2. זו גם שאילתה עם ביקוש אמיתי וגם ההתנגדות של הדייר שהקבלן צריך לענות עליה במקומו — ולכן ראוי לה סעיף עם נוהל: עבודה במקטעים, אילו שעות, מה נשאר מחובר בלילה.
- התיאום מול האינסטלטור, הנגר והרצף מופיע רק ברשימת הבולטים של ה-Hero. בשיפוץ זה בדיוק מקור העיכוב, וזה מה שמבדיל קבלן משנה טוב מזמין — מגיע לו סעיף עם רצף כניסה אמיתי.
- אין שום הוכחה חברתית מהקהל הזה. חמש ההמלצות באתר הן מלקוחות פרטיים בסולארי, ובענף הקבלני התבנית Testimonials אפילו לא נטענת (page.track !== "contracting" בתבנית). המלצה אחת מקבלן שיפוצים תשנה את העמוד יותר מכל שינוי טקסט (testimonial.contracting).
- העומק הטכני שנרמז ב"למה שיפוצים מתפוצצים" — אלומיניום, היעדר הארקה, חתך מוליכים — לא נפרס לתוכן שאפשר לדרג עליו, למרות שאלה שאילתות long-tail עם כוונה מקצועית ואפשר לכתוב אותן מהמקצוע בלי אף נתון עסקי חסר.
- העמוד מקשר ל-/electrical/panels/ ול-/electrical/inspection/ — נכון — אבל אין קישור ל-/electrical/three-phase/, למרות שהתאמה לעומס חדש (מיזוג, תנור, מטען רכב) מופיעה במפורש בתוכן ומובילה ישירות לשאלת גודל החיבור.

**מפרט המרה:**

- **CTA ראשי:** וואטסאפ או חיוג לבדיקת זמינות לשבוע הקרוב, עם הודעה מוכנה מראש: יישוב, סוג הנכס ומועד מבוקש. זהו שינוי מכוון מול הרישום ב-pages.ts שמעמיד את הטופס הקבלני כ-CTA ראשי: טופס בן עשרה שדות מול קבלן שיפוצים שצריך חשמלאי לדירה אחת בשבוע הבא הוא אי-התאמה בין המאמץ לגודל העסקה, והוא מסנן החוצה בדיוק את הפניות התכופות והחוזרות שהעמוד קיים בשבילן.
- **CTA משני:** טופס פרויקט ב-/quote/?track=contracting למי שמביא מספר יחידות או מחפש קבלן משנה קבוע — שם עשרת השדות הופכים ממכשול למסנן שעובד לטובתנו. יעד שלישי: /electrical/panels/ למי שהגיע בעצם בשביל החלפת לוח.
- **מה נדרש כדי לבנות אמון:**
  - תוכן ממשי מאחורי המילה זמינות: איך משבצים, מה זמן ההיערכות לעבודה קטנה, ומה קורה לקבלן חוזר (תלוי ב-fact.concurrent-projects ו-fact.team.size)
  - המלצה אחת מקבלן שיפוצים בשמו — הקול היחיד שקהל היעד הזה מקבל כרלוונטי (testimonial.contracting)
  - תמונת לפני/אחרי של לוח בשיפוץ. panel-02 היא בדיוק זה ונמצאת בבידוד עד להבהרת מקור — פתיחת החסם הזה שווה יותר מכל שכתוב טקסט בעמוד
  - רשימת בדיקה של הביקור הראשון שמראה שההצעה נשענת על בדיקה ולא על ניחוש — הבטחה נגד הפתעת אמצע העבודה
  - נוהל עבודה בדירה מאוכלסת: מקטעים, שעות מוסכמות, מה נשאר מחובר
  - הסבר מה כולל האישור שניתן בסוף העבודה ולמי אפשר להעביר אותו
- **התנגדויות:**
  - האם יגיע בתאריך שסיכמנו, או שאני אשב עם רצף שמחכה
  - כמה זה יעלה, ומה יתגלה כשנפתח קיר שיהפוך את ההצעה למספר אחר
  - האם יעבוד בדירה מאוכלסת בלי להשאיר את הדיירים בלי חשמל בלילה
  - האם יתאם ישירות עם האינסטלטור והנגר, או שאני אתווך בין כולם
  - האם יגיד לי מראש מה חובה ומה שדרוג, או שיעמיס לי סעיפים
  - האם ייתן בסוף דוח או אישור שאני יכול להעביר לדייר או לחברת ביטוח
  - האם הוא לוקח עבודות בגודל הזה בכלל, או שאני קטן מדי בשבילו
- **מסלול המרה:** חיפוש "חשמלאי לקבלני שיפוצים" / "החלפת תשתית חשמל בשיפוץ" → מה נכנס לעבודה → למה שיפוצים חורגים בתקציב (הפסקה שבונה את האמון) → רשימת בדיקת הביקור הראשון (הופכת אמון לשיטה) → זמינות ותיאום → וואטסאפ או חיוג לבדיקת חלון → ביקור בנכס → הצעה. הערך האמיתי אינו הפנייה הראשונה אלא הפנייה השנייה: העמוד צריך לסיים בהצעת עבודה חוזרת מול אותו קבלן, שהיא ההצעה המסחרית הכי כדאית בענף הזה ולא נאמרת בשום מקום בעמוד היום.

---

## /contracting/process/

**מילת מפתח ראשית:** הצעת מחיר לעבודות חשמל בפרויקט  
**כוונת חיפוש:** informational  
**מילות משנה:** כתב כמויות חשמל · תמחור עבודות חשמל · חוזה עם קבלן משנה חשמל · לוח זמנים לביצוע חשמל · מסירת מתקן חשמל · אישור חריגות בפרויקט

**מה לא בסדר בכותרת הנוכחית:**

> בקוד: "כתב כמויות, לוח זמנים ומסירה — כך אנחנו עובדים" (46 תווים, 53 עם " | RNRG"). זו כותרת שנכתבה כמו כותרת של סעיף באתר, לא כמו כותרת שמתחרה על קליק. "כך אנחנו עובדים" תופס שליש מהמקום ואינו שאילתה של אף אחד — הוא גם המשפט הכי גנרי בענף, ולכן גם לא מבדל בין תוצאה לתוצאה. הפתיח "כתב כמויות" הוא מונח חזק אבל העמוד אינו התשובה הטובה ביותר לשאילתה "כתב כמויות" (שמחפשת תבניות ומסמכים) — הכוונה שהעמוד באמת משרת היא "איך מקבלים הצעת מחיר לחשמל בפרויקט", והמילים "הצעת מחיר" נעדרות מהכותרת לגמרי, למרות שהן מופיעות שמונה פעמים בגוף העמוד. התיאור בקוד: 105 תווים — הקצר מבין חמשת עמודי הענף, כשליש ממנו מבוזבז על "התהליך מול קבלנים ומנהלי פרויקט" שחוזר על מה שהכותרת כבר אמרה.

**מוצע:**

```
title       הצעת מחיר לחשמל בפרויקט — התהליך מול קבלנים   (43)
description איך מתקבלת הצעת מחיר לעבודות חשמל בפרויקט: בדיקת התאמה, עיון בתוכניות ובכתב כמויות, תמחור לפי סעיפים, שיבוץ בגאנט, ביצוע בשלבים ומסירה מסודרת.   (142)
h1          הצעת מחיר וביצוע חשמל בפרויקט — כך זה עובד
```

**מבנה כותרות:**

- התהליך, שלב אחר שלב
- מה צריך כדי לקבל הצעת מחיר
- איך בנויה ההצעה — סעיפים, הנחות יסוד ומה לא כלול
- תיאום ממשקים ולוח זמנים מול הגאנט
- שינויים וחריגות — איך מאשרים ומי מחליט
- מה נדרש מכם
- תנאי התקשרות, ביטוח ואחריות
- שאלות נפוצות
- קשור לעמוד הזה

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תנאי התקשרות, ביטוח ואחריות»
  - Asserts insurance cover and warranty terms exist. Both are open P0 gaps — `fact.insurance` ('ביטוח עבודות קבלניות וצד ג׳ — קיים? מה ההיקף?') and `fact.warranty` ('כמה שנים, על מה חלה, מה לא כלול'). pages.ts lists this exact route as blockedBy both. The live FAQ answers both honestly with 'טרם פורסמו'; a section heading that names them as things the page delivers reverses that.
  - **במקום:** תנאי התקשרות — ומה עדיין לא פורסם באתר (ביטוח ואחריות נמסרים בכתב בהצעת המחיר)

**✕ לא תואם לקוד:**

- Count is inflated. The map claims "הצעת מחיר" appears "שמונה פעמים בגוף העמוד". The exact phrase appears 5 times across the whole entry (src/data/services/contracting.ts:636-760), and one of those 5 is the description and another is a related-link label "בקשת הצעת מחיר", so the on-page body count is 3-4. Adding "הצעת המחיר" gives 6; only counting two bare "הצעה" as well reaches 8. Title 46 chars / 53 rendered and description 105 chars (shortest of the five contracting pages) both confirmed.
  - **תיקון:** State the exact-phrase count (5, of which 3-4 render in the body) or drop the number.

**קישורים פנימיים מוצעים:** /quote/?track=contracting · /contracting/ · /contracting/builders/ · /contracting/commercial/ · /contracting/infrastructure/ · /contracting/renovation/ · /electrical/inspection/ · /contact/ · /about/

**חוסרים:**

- סעיף "תנאי התקשרות" הוא kind:"pending" ולכן מסונן החוצה בפרודקשן. התוצאה חמורה במיוחד כאן: עמוד שכל תפקידו להסיר חיכוך לפני פנייה מסתיים בלי תנאי תשלום, בלי ביטוח ובלי אחריות — כלומר בלי שלושת הדברים שקבלן פותח אותו כדי למצוא. שני נתונים סוגרים את זה: fact.warranty (מספר שנים + מה מכוסה) ו-fact.insurance (כן/לא + סכום כיסוי).
- אין תיק ספק להורדה. מחקר השוק מצא שאף אחד מ-29 המתחרים שנבדקו אינו מציע אותו, וזה בדיוק המסמך שרכש של קבלן ראשי מבקש בפנייה הראשונה. SUPPLIER_PACK כבר קיים כמבנה נתונים ב-regulatory.ts; חסרים קובצי ה-PDF (asset.supplier-pack, תלוי ב-fact.insurance ו-fact.contractor-registry). זהו הפער התחרותי החזק ביותר שנותר פתוח בכל האתר.
- סתירה עובדתית בין קבצים: forms.ts מגדיר עשרה שדות בטופס הקבלני, ובעוד ש-pages.ts מתאר את conversionPath של /contracting/ כ"טופס 9 שדות" וההערה בראש forms.ts כותבת "a nine-field form". צריך להכריע מספר אחד — עמוד שמסביר תהליך הוא המקום שבו אי-דיוק כזה עולה הכי ביוקר.
- "תוך כמה ימי עבודה" ב-FAQ הוא בדיוק סוג האמירה שהעמוד הזה קיים כדי להחליף. fact.response-time חסר, ובלעדיו לא ניתן להתחייב לטווח — וטווח מוצהר משפיע ישירות על שיעור השארת הפרטים אצל קורא שמשווה בין שלושה ספקים באותו יום.
- אין הסבר איך בנויה ההצעה עצמה. "לפי סעיפים" נאמר שלוש פעמים בלי דוגמה אחת של מה נכלל בסעיף, מה נחשב הנחת יסוד ומה במפורש לא כלול. קבלן שמשווה שלוש הצעות מחפש בדיוק את זה, וזה גם הבידול היחיד שאפשר לכתוב היום בלי אף נתון חסר.
- נושא החריגות והשינויים — הטיפול המשכנע ביותר בעמוד ("לא מבצעים חריגה ואז מציגים חשבון") — קבור כשאלת FAQ שלישית. מגיע לו H2 עם נוהל: מי מעלה, מי מאשר, בכתב או בעל פה, ומה קורה בינתיים באתר.
- תיאום הממשקים מול הגאנט מופיע כשלב 5 מתוך שמונה. מנהל פרויקט שנחת כאן קורא בדיוק את זה ותו לא — הוא ראוי לסעיף עצמאי ולא לשורה ברשימה ממוספרת.
- העמוד אינו מקשר ל-/contracting/commercial/, ל-/contracting/infrastructure/ ולא ל-/contact/. שלושת ה-related מובילים ל-hub, ל-builders ולטופס — קורא שהגיע מחיפוש אינפורמטיבי ("תמחור עבודות חשמל") אינו מוצא מכאן את עמוד הענף שמתאים לו.

**מפרט המרה:**

- **CTA ראשי:** שליחת פרטי הפרויקט ב-/quote/?track=contracting, ממוסגר בדיוק כפי שהעמוד לימד: מה שנשלח עכשיו הוא קלט לבדיקת התאמה, לא בקשה להצעה. העמוד הזה הוא היחיד בענף שבו הקורא כבר יודע מה יקרה אחרי הלחיצה — ולכן ה-CTA שלו צריך לחזור על ההבטחה במילים של השלבים, לא בקריאה כללית.
- **CTA משני:** הורדת תיק ספק בלחיצה אחת — רישיון 991433, ניכוי מס במקור, ניהול ספרים, ביטוחים, ופנקס קבלנים אם קיים. חסום היום על asset.supplier-pack, וכשייפתח יהיה ה-CTA המשני היחיד באתר שאף מתחרה לא מציע. עד אז: טבלת המסמכים עם סטטוס גלוי לכל פריט, ששקיפותה שווה בפני עצמה.
- **מה נדרש כדי לבנות אמון:**
  - תנאי אחריות במספר שנים ובהגדרה של מה מכוסה ומה לא — לא "אחריות לשנים קדימה" (fact.warranty)
  - ביטוח עבודות קבלניות וצד ג׳ עם סכום כיסוי. בלי זה פנייה נופלת בשלב הרכש, לפני שמישהו בכלל קרא את ההצעה (fact.insurance)
  - תנאי תשלום מפורשים: שוטף+X, מקדמה, חשבונות חלקיים לפי התקדמות
  - תיק ספק להורדה, או לכל הפחות טבלת המסמכים עם סטטוס אמיתי לכל פריט (asset.supplier-pack)
  - טווח זמן מוצהר לתשובת התאמה ולהצעה — מספר שהעסק מוכן להתחייב אליו, לא ניסוח גמיש (fact.response-time)
  - דוגמה למבנה סעיף בהצעה: מה כלול, מה הנחת היסוד, ומה במפורש מחוץ להיקף
  - נוהל אישור שינויים בכתב, מנוסח כהגנה על הקבלן ולא כהגנה עלינו
- **התנגדויות:**
  - כמה זמן ייקח לקבל הצעה — אני צריך להגיש מחר, ו"כמה ימי עבודה" לא עוזר לי
  - האם ההצעה תהיה ברת השוואה להצעות אחרות או שאצטרך לפרק אותה בעצמי
  - מה קורה כשמתגלה חריגה — אקבל חשבון בדיעבד או שיחה מראש
  - יש חוזה? תנאי תשלום? שוטף פלוס כמה, ומה עם מקדמה
  - מה האחריות אחרי המסירה, על מה היא חלה, ומי מגיע לקריאה
  - האם הוא עומד בדרישות הרכש שלנו — ביטוח, ניכוי מס, ניהול ספרים, פנקס קבלנים
  - מי בדיוק יהיה איש הקשר שלי, ומה קורה כשהוא לא זמין
- **מסלול המרה:** שני מקורות תנועה שונים ושתי יציאות. תנועה פנימית: /contracting/builders/ או /commercial/ או /infrastructure/ → העמוד הזה כתחנת הסרת חיכוך אחרונה → טופס ב-/quote/?track=contracting. תנועה מחיפוש אינפורמטיבי ("תמחור עבודות חשמל", "כתב כמויות חשמל", "חוזה עם קבלן משנה") → העמוד הזה → עמוד הענף המתאים לקורא → ומשם לטופס; ולכן דווקא כאן הקישורים לעמודי הענף חשובים יותר מהקישור לטופס. יציאה שלישית לקורא שנמצא בשלב רכש ולא בשלב מכירה: הורדת תיק ספק, שאינה ליד היום אבל היא מה שמכריע את ההזמנה בעוד שבועיים.

---

## /solar/residential/

**מילת מפתח ראשית:** התקנת מערכת סולארית לבית פרטי  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת סולארית לבית פרטי מחיר · פאנלים סולאריים על גג רעפים · סככה סולארית לבית · כמה מקום צריך למערכת סולארית · מערכת סולארית 5 קילוואט חד פאזי · היתר בנייה למערכת סולארית · מערכת סולארית על גג שטוח

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת בקוד היא "מערכת סולארית לבית פרטי — תהליך וגודל" (37 תווים). שתי בעיות: (1) "תהליך וגודל" הוא זנב מופשט שאף אחד לא מחפש — הוא צורך 12 תווים בלי להוסיף אף מונח חיפוש ובלי להוסיף סיבה להקליק; (2) הכותרת זהה כמעט מילה במילה ל-h1 ("מערכת סולארית לבית פרטי"), כלומר שורת התוצאה בגוגל לא מוסיפה דבר על מה שכבר רואים בעמוד, ואין בה את המילה שמסמנת כוונת ביצוע — "התקנת". בנוסף אין בכותרת שום בידול, בזמן שקיים בידול אמיתי ובר-אימות (רישיון 991433, החשמל וההתקנה תחת אותו בעל מקצוע). התיאור הקיים (110 תווים) קצר מדי — מפסיד כ-40 תווים של שטח SERP.

**מוצע:**

```
title       התקנת מערכת סולארית לבית פרטי — מה בודקים בגג   (45)
description התקנת מערכת סולארית לבית פרטי — על גג רעפים, גג שטוח או סככה. מה בודקים לפני שמתחייבים: שטח פנוי, כיוון והצללה, מצב הגג והלוח, ומתי כדאי להוסיף אגירה.   (150)
h1          התקנת מערכת סולארית לבית פרטי
```

**מבנה כותרות:**

- מה קובע אם הגג שלכם מתאים
- סוגי התקנה — גג רעפים, גג שטוח, סככה קיימת או סככה חדשה
- איך נקבע גודל המערכת, ולמה חיבור חד-פאזי מוגבל ל-5 קילוואט
- היתר בנייה — מתי נדרש ומתי חל פטור
- מערכות ביתיות שביצענו
- החשמל וההתקנה תחת רישיון אחד
- על מחיר והחזר השקעה — למה אין כאן מספר
- מה קורה אחרי שממלאים בדיקת התאמה
- שאלות נפוצות

**✕ לא תואם לקוד:**

- internalLinksOut claims /projects/argaman-revivim/ and /projects/sigalon-yavne/. Neither is linked: related[] (src/data/services/solar.ts:214) is /solar/storage/, /electrical/three-phase/, /projects/. /solar/, /electrical/panels/, /reviews/ and /about/ come from chrome or the Testimonials block, not the page. Title 37 chars, description 110 chars, and the near-identity with h1 "מערכת סולארית לבית פרטי" all verify.
  - **תיקון:** Replace the project-detail links with /projects/; keep /quote/?track=solar, /contact/, /reviews/.

**קישורים פנימיים מוצעים:** /solar/ · /solar/storage/ · /electrical/three-phase/ · /electrical/panels/ · /projects/ · /projects/argaman-revivim/ · /projects/sigalon-yavne/ · /quote/?track=solar · /reviews/ · /about/

**חוסרים:**

- אין heroImage כלל — זהו העמוד היחיד מארבעת עמודי הסולארי בלי תמונה ראשית, והוא סגמנט הנפח הגבוה ביותר. שלוש התמונות היחידות שהוכחו כשלנו (beit-knesset-yona-01/02/03) הן מבנה ציבור אוף-גריד ולא בית פרטי; שימוש בהן כאן יטעה. נדרש תצלום אחד של גג בית פרטי מפרויקט שאושר כשלנו.
- שבע מערכות ביתיות קיימות ב-projects.ts עם הספק ויישוב (22 ק"ו רביבים, 8 יבנה, 7 עדי, 6 כפר יונה, 4 בן זכאי, 3.5 מצר, 3 כליל) ואף אחת מהן לא מופיעה בעמוד. רשימת טקסט של הספק + יישוב + סוג התקנה ניתנת לפרסום היום, לא דורשת תמונה, והיא נכס ההוכחה היחיד שזמין כרגע — גם לדירוג וגם להמרה.
- העובדה המאומתת single-phase-limit (5 ק"ו בחיבור חד-פאזי) קיימת ב-regulatory.ts ולא מופיעה בעמוד. היא עונה ישירות על ההתנגדות "האם החשמל בבית שלי בכלל עומד בזה", והיא הגשר הטבעי ל-/electrical/three-phase/ — עמוד שכרגע מקבל קישור מ-related בלי שום הקשר תוכני.
- התשובה ב-FAQ לשאלה "צריך היתר בנייה?" היא "תלוי בסוג ההתקנה ובנכס" — לא-תשובה. העובדה המאומתת permit-exemption (פטור לפי תקנות התכנון והבנייה, עד 700 ק"ו DC, התקנה לפי ת"י 62548) קיימת ב-regulatory.ts ומאפשרת תשובה אמיתית שיכולה לזכות ב-featured snippet.
- אין שום התייחסות למחיר או להחזר השקעה. עמוד /solar/ נושא את סעיף "על החזר השקעה ומספרים", אבל דווקא בעמוד הזה — שבו התנגדות המחיר הכי חזקה — הוא נעדר. המבקר נשאר בלי הסבר למה אין מספר, ופרשנות ברירת המחדל היא הסתרה ולא יושרה.
- סעיף "החשמל והסולארי — אותו בעל מקצוע" קיים רק ב-/solar/. הבידול היחיד שנמצא במחקר השוק ושהוא בר-אימות (רישיון חשמלאי ראשי 991433) לא מופיע בעמוד שבו הלקוח הכי חשוף לתפר בין מתקין לחשמלאי.
- FAQ בן שלוש שאלות בלבד, ואף אחת מהן אינה השאלה הנפוצה ביותר בסגמנט: "כמה זה עולה", "כמה זמן לוקח מהחתימה ועד הפעלה", "מה קורה אם אני מוכר את הבית". FAQPage schema כבר נפלט מהתבנית — כרגע הוא נפלט על שלוש שאלות חלשות.
- אין תיאור של מה מכיל טופס בדיקת ההתאמה ומה מקבלים בחזרה. הטופס הסולארי הוא 10 שדות; מבקר שלא יודע מה מחכה לו נוטש. משפט אחד לפני ה-CTA ("עשר שאלות, ובחזרה הערכה שמבוססת על הנכס שלכם ולא על נוסחה") הוא שיפור המרה זול.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה לגג — /quote/?track=solar (מוגדר בעמוד כ"בדיקת התאמה" עם ציפייה מפורשת: 10 שאלות, ובחזרה הערכה מבוססת נכס ולא מחשבון)
- **CTA משני:** שליחת תמונת הגג בוואטסאפ עם הודעה מוכנה מראש דרך links.whatsapp() — לא "חיוג". רכישה נשקלת של עשרות אלפי שקלים אינה מומרת בטלפון בשעה 23:00, אבל כן בצילום גג. חיוג יורד למקום שלישי, בפס ה-CTA ובסטיקי מובייל בלבד.
- **מה נדרש כדי לבנות אמון:**
  - מספר רישיון חשמלאי ראשי 991433 גלוי בגוף העמוד, לא רק בפוטר — הוא בר-אימות מול פנקס הרישיונות, וזה בדיוק מה שהופך אותו לנכס אמון ולא לסלוגן
  - רשימת המערכות הביתיות שבוצעו עם הספק ויישוב — עובדות מ-projects.ts, ניתנות לפרסום היום גם בלי תצלום
  - שלוש ההמלצות הסולאריות עם שם מלא ויישוב (ניר רווח · גני תקווה, נועה חממי · בת עין, בר טופז · אשדוד) — אמיתיות, מיוחסות, וכבר מרונדרות דרך רכיב Testimonials
  - הסבר גלוי למה אין מחשבון חיסכון — ההסרה של הבטחת 90% היא נכס המרה אם מסבירים אותה, ונטל אם שותקים עליה
  - תצלום אחד אמיתי של התקנה ביתית (חסר — חוסם)
  - טווח זמן תגובה לפנייה (חסום על fact.response-time)
- **התנגדויות:**
  - כמה זה עולה ומה תקופת ההחזר — ואם אין מספר באתר, האם מסתירים ממני
  - האם ימכרו לי מערכת גדולה ממה שאני צריך
  - כמה שטח באמת צריך, והאם הגג שלי בכיוון הנכון או מוצל
  - האם החשמל הקיים בבית עומד בזה, או שאצטרך גם תלת פאזי
  - מה קורה אם הגג יצטרך תיקון אחרי שהפאנלים כבר עליו
  - האם צריך היתר בנייה
  - מי אחראי כשמשהו מפסיק לעבוד — המתקין או החשמלאי
  - האם אפשר להוסיף אגירה בהמשך או שאני נועל את עצמי עכשיו
- **מסלול המרה:** כניסה אורגנית → "מה קובע אם הגג שלכם מתאים" (עונה על השאלה שבגללה הגיע) → "מערכות ביתיות שביצענו" (הוכחה) → "למה אין כאן מספר" (מנטרל את התנגדות המחיר במקום להתחמק ממנה) → בדיקת התאמה /quote/?track=solar → /thank-you/solar/. מסלול משני למי שלא מוכן לטופס: וואטסאפ עם תמונת גג → שיחה → טופס. מסלול שלישי למי שצריך עוד הוכחה: /projects/ מסונן לסולארי → חזרה ל-CTA.

---

## /solar/commercial/

**מילת מפתח ראשית:** מערכת סולארית לעסק  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת סולארית למבנה חקלאי · מערכת סולארית על גג רפת · מערכת סולארית על גג האנגר · מערכת סולארית מסחרית 200 מ"ר · פאנלים סולאריים על גג מפעל · מערכת סולארית לבניין משותף

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת בקוד היא "מערכת סולארית לעסק, למפעל ולמבנה חקלאי" (38 תווים). שלוש בעיות: (1) רשימת שלושה קהלים בפסיקים לא תואמת אף שאילתה בודדת — גוגל מדרג עמוד לפי מונח, לא לפי תפריט, ורשימה מדללת את שלושתם; (2) "למפעל" הוא הרחבה שאין לה שום כיסוי — אין ולו פרויקט תעשייתי אחד ב-projects.ts, והגדולה ביותר המתועדת היא 20 ק"ו על גג רפת ו-12 ק"ו על האנגר. כותרת שמבטיחה מפעל מביאה פניות שהעסק ייפול בהן בשלב ההתאמה; (3) הקהל שבו כן קיימת הוכחה — חקלאי — נדחק לסוף הכותרת במקום להוביל אותה. התיאור הקיים 96 תווים בלבד — הקצר מכולם, מפסיד כ-50 תווי SERP, ופותח ב"מערכות מסחריות" במקום בקהל.

**מוצע:**

```
title       מערכת סולארית לעסק ולמבנה חקלאי — מ-200 מ״ר   (43)
description מערכת סולארית לעסק, להאנגר ולמבנה חקלאי משטח של 200 מ״ר ומעלה. ביצענו 20 קילוואט על גג רפת ו-12 על גג האנגר. כולל הצד החשמלי — לוח, הזנה וחיבור.   (144)
h1          מערכת סולארית לעסק ולמבנה חקלאי
```

**מבנה כותרות:**

- מבנים שמתאימים במיוחד
- למה 200 מ״ר הוא הסף
- מערכות שביצענו על מבנים חקלאיים ותעשייתיים
- התקנה במבנה פעיל — מתי נדרשת הפסקת מתח ולכמה זמן
- הצד החשמלי — לוח, הזנה והתאמת גודל החיבור הקיים
- אסדרה, חיבור והיתרים — מי מטפל במה
- על החזר השקעה — למה אין כאן אחוז
- שאלות נפוצות

**⚠ טענות לא מבוססות (3):**

- `title, headingOutline` — «מערכת סולארית לעסק ולמבנה חקלאי — מ-200 מ״ר / "למה 200 מ״ר הוא הסף"»
  - Escalates a soft marketing phrase into a hard qualifying threshold with a stated rationale. services/solar.ts carries the business's own wording 'מותאמת לשטחים של 200 מ״ר ומעלה' from solutions.html — 'suited to', not a minimum — and its header explicitly flags this as a carried-over claim, not a verified fact. 'הסף' plus a section explaining why it is the threshold manufactures a technical justification nobody supplied, and turns away sub-200 m² enquiries on an invented rule.
  - **במקום:** title: "מערכת סולארית לעסק ולמבנה חקלאי — גגות לא מנוצלים" · heading: "מאיזה שטח מערכת מסחרית מתחילה להשתלם"
- `description` — «ביצענו 20 קילוואט על גג רפת ו-12 על גג האנגר»
  - Both figures are in projects.ts, but both projects are precisely the ones under `provenance.project-photos` (P0, open): their photographs were quarantined as suspected stock ('גג תעשייתי כחול... מול קו רקיע עירוני צפוף' — SRC-SOLAR-004), and the gap's closing question is 'האם הוא בוצע על ידינו'. Leading a meta description with 'ביצענו' commits the business to an answer it has not given.
  - **במקום:** מערכת סולארית לעסק, להאנגר ולמבנה חקלאי. בין הפרויקטים המתועדים: 20 קילוואט על גג רפת ו-12 קילוואט על גג האנגר. כולל הצד החשמלי — לוח, הזנה וחיבור.
- `headingOutline` — «אסדרה, חיבור והיתרים — מי מטפל במה»
  - Asserts RNRG handles the regulatory filing. `fact.solar-regulatory-track` (P1) is open — the owner has not said which arrangement they actually file under, and the research found the old site's 'מסלול ירוק' is not a current regulatory name (the arrangement sits under אמות מידה 70104 from 15.1.2025). Writing 'מי מטפל במה' before that answer exists invites the wrong track name back onto the page.
  - **במקום:** היתרים וחיבור לרשת — מה נבדק ומה עדיין תלוי בגורמים חיצוניים

**✕ לא תואם לקוד:**

- Factual error in the supporting evidence. The map says "הגדולה ביותר המתועדת היא 20 ק\"ו על גג רפת ו-12 ק\"ו על האנגר". The largest documented system in src/data/projects.ts is 22 kWp — argaman-revivim, קיבוץ רביבים, private, מערכת מחוברת רשת (line 84) — and it is rendered on the homepage as "המערכת הגדולה שהותקנה" via projectStats().largestKw. Second: "אין ולו פרויקט תעשייתי אחד ב-projects.ts" is contestable — saban-shtulim carries systemType "מערכת על גג האנגר תעשייתי" (line 107), and the page's own bullet at solar.ts:253 is titled "מבנה תעשייתי או האנגר". Title 38 chars and description 96 chars (shortest of the four solar pages) both confirmed. internalLinksOut claims /projects/yaakobi-beit-ezra/ and /projects/saban-shtulim/; the page's related[] is /solar/contractors/, /contracting/commercial/, /projects/ — neither detail page is linked.
  - **תיקון:** Correct the largest-system figure to 22 kWp / argaman-revivim, and restate the מפעל objection as 'no factory-scale project' rather than 'no industrial project'. Drop the two project-detail links.

**קישורים פנימיים מוצעים:** /solar/ · /solar/contractors/ · /solar/storage/ · /contracting/commercial/ · /electrical/inspection/ · /projects/yaakobi-beit-ezra/ · /projects/saban-shtulim/ · /projects/ · /quote/?track=solar

**חוסרים:**

- טענת "מאפשרת חיבור למתח גבוה" מופיעה גם ב-heroPoints, גם ב-lede וגם ב-FAQ — והיא סותרת את טבלת הרישיונות שהאתר עצמו מפרסם: חשמלאי ראשי מוגבל ל-3×250A, כלומר מתח נמוך. עמוד שמצהיר על יכולת מתח גבוה במקום אחד ומפרסם במקום אחר טבלה שמראה שאין לו אותה — נופל בדיוק מול הקורא המקצועי שהוא מנסה לשכנע. נדרשת החלטה: או להסיר, או לנסח מחדש כ"התאמה מול חיבור מתח גבוה קיים", או להוכיח הסמכה נוספת (fact.credentials.extra).
- טענת "תורמת לחיסכון במס" מופיעה שלוש פעמים בלי שום מנגנון, מקור או הסתייגות. זו טענה פיננסית לבעל עסק, ובמצב הנוכחי היא באותה קטגוריה של "חיסכון 90%" שהוסר. נדרש: או הסבר קצר עם מקור (פחת/הכרה בהוצאה), או הורדה, או ניסוח כ"יש היבטי מס — הם תלויים במבנה העסק ואינם ייעוץ מס".
- שני הפרויקטים שמוכיחים בדיוק את מה שהעמוד טוען — 20 ק"ו על גג רפת בבית עזרא ו-12 ק"ו על גג האנגר בשתולים — מוזכרים רק בתשובת FAQ אחת, בלי קישור לעמוד הפרויקט ובלי סעיף משלהם. זו ההוכחה המסחרית היחידה שקיימת בעסק והיא קבורה בתחתית העמוד.
- תמונת ה-hero (beit-knesset-yona-03) היא מבנה ציבור, לא מבנה מסחרי או חקלאי. היא נבחרה כי היא אחת משלוש התמונות שהוכחו כשלנו ויש בה אדם — שיקול נכון — אבל היא לא מראה את סוג המבנה שהעמוד מוכר. חסר תצלום של הגג ברפת או בהאנגר.
- אין תשובה לשאלה "מה ההחזר" — היא רשומה כהתנגדות ב-pages.ts ולא מטופלת בעמוד. אצל בעל עסק זו לא סקרנות אלא שלב בהחלטת השקעה, והיעדר אפילו הסבר על המנגנון (צריכה עצמית מול הזרמה, תעו"ז, גודל חיבור) מעביר אותו למתחרה שכן כותב משהו.
- סעיף האסדרה חסר לגמרי, אף שההתנגדות "מי מטפל באסדרה" מופיעה ב-pages.ts. הנתון החוסם קיים כבר כפער (fact.solar-regulatory-track) — עד שייסגר, אפשר לכתוב מה בטיפולנו ומה לא, בלי לנקוב בשם מסלול.
- עמוד מסחרי מבלי הצהרה על ביטוח ותנאי התקשרות. בעל מבנה פעיל שמכניס צוות לגג שואל את זה ראשון (חסום על fact.insurance).
- FAQ בן שתי שאלות בלבד — הקצר באתר. חסרות: כמה זמן לוקח מהחלטה עד הפעלה, האם צריך לחזק את הגג, מה קורה בגג אסבסט או פאנל מבודד, האם אפשר להתקין על גג מושכר, מי אחראי לתחזוקה אחרי המסירה.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה לגג העסקי — /quote/?track=solar עם בחירת "עסק" בשדה customerKind. יש להוסיף מסנן התאמה מפורש ליד ה-CTA ("מתחת ל-200 מ״ר לרוב לא כלכלי — נגיד את זה לפני שנשלח הצעה"), כי סינון מוקדם שווה כאן יותר מנפח.
- **CTA משני:** שיחה מקצועית — חיוג ישיר 054-665-6076 בשעות עבודה. בעל עסק או מנהל משק ממיר בטלפון, לא בטופס. וואטסאפ נשאר כערוץ שלישי לשליחת תמונת גג או צילום לוח.
- **מה נדרש כדי לבנות אמון:**
  - 20 ק"ו על גג רפת בבית עזרא ו-12 ק"ו על גג האנגר בשתולים — כסעיף עם קישור לעמודי הפרויקט, לא כהערת שוליים ב-FAQ
  - טבלת דרגות הרישיון עם 991433 מסומן — היא מגדירה בדיוק עד איזה גודל חיבור מותר לנו לתכנן ולבצע, וזה בדיוק מה שקונה מסחרי צריך לדעת לפני שהוא מבזבז פגישה
  - הסבר ממשי של רצף העבודה במבנה פעיל: מתי בדיוק נדרשת הפסקת מתח, לכמה זמן ובאילו אזורים
  - תצלום מגג חקלאי או תעשייתי שבוצע על ידינו (חסר)
  - אישור ביטוח עבודות קבלניות וצד ג׳ (חסום על fact.insurance)
  - מקור או הסתייגות לטענת חיסכון המס (לא קיים — כרגע טענה חשופה)
- **התנגדויות:**
  - האם אצטרך להשבית את הפעילות, מתי ולכמה זמן
  - מה ההחזר, ובאיזה טווח — ואם אין מספר, על סמך מה אחליט
  - מה מצב הגג שלי סובל — אסבסט, פאנל מבודד, גג ישן
  - מי מטפל באסדרה ובחיבור, ומה נשאר עליי
  - האם החיבור הקיים שלי בכלל מספיק, וכמה עולה לשדרג אותו
  - האם עשו פרויקט בסדר גודל שלי
  - מה עם ביטוח — מי מכניס אנשים לגג שלי
  - מה קורה עם המערכת אם אני שוכר את המבנה ולא בעליו
- **מסלול המרה:** כניסה אורגנית → "מבנים שמתאימים במיוחד" (זיהוי עצמי תוך שניות) → "למה 200 מ״ר הוא הסף" (סינון דו-כיווני: מי שמתחת יוצא, מי שמעל מזהה שהעסק רציני) → "מערכות שביצענו על מבנים חקלאיים ותעשייתיים" (ההוכחה היחידה שקיימת) → "התקנה במבנה פעיל" (מנטרל את ההתנגדות התפעולית שהיא החזקה ביותר בסגמנט) → בדיקת התאמה או חיוג → /thank-you/solar/. ענף צדדי חשוב: מבקר שהוא קבלן או יזם ולא בעל מבנה — קישור מפורש ל-/solar/contractors/ בראש העמוד, לא רק ב-related.

---

## /solar/storage/

**מילת מפתח ראשית:** אגירת אנרגיה לבית  
**כוונת חיפוש:** commercial  
**מילות משנה:** גיבוי חשמל בהפסקת חשמל · סוללה למערכת סולארית · ממיר היברידי · מערכת סולארית מנותקת רשת · מערכת אוף גריד · הוספת אגירה למערכת סולארית קיימת · אגירת אנרגיה לעסק

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת בקוד היא "אגירת אנרגיה וגיבוי חשמל לבית ולעסק" (35 תווים) — הטובה מבין הארבע, אבל היא חולקת על ה-h1 של אותו עמוד. ה-h1 הוא "אגירת אנרגיה ומערכות מנותקות רשת", כלומר הכותרת וה-h1 לא מסכימים על מה העמוד. "מנותק רשת" הוא בדיוק המונח שהעסק היחיד באתר יכול להוכיח — ההתחלה ב-2018 בקרוואנים, ושלושה פרויקטים אוף-גריד אמיתיים (בית כנסת יונה, עדי 7 ק"ו, כליל 3 ק"ו) — והוא נעדר מהכותרת. "לבית ולעסק" צורך 11 תווים ולא מכוון לאף אחד. הבעיה הגדולה יותר היא בתיאור: הוא מבטיח שלושה דברים — "למה נדרש ממיר היברידי ולוח מגובה נפרד" ו"איך בוחרים גודל סוללה" — ואף אחד מהם לא קיים בגוף העמוד. זו אי-התאמת כוונה שגורמת לנטישה מיידית ומחזירה אות שלילי לגוגל.

**מוצע:**

```
title       אגירת אנרגיה לבית ולעסק — גיבוי בהפסקת חשמל   (43)
description אגירת אנרגיה לבית ולעסק, כתוספת למערכת סולארית או כמערכת עצמאית. מה באמת נדרש לגיבוי בהפסקת חשמל, איך בוחרים גודל סוללה, וניסיון במערכות מנותקות רשת.   (149)
h1          אגירת אנרגיה וגיבוי חשמל לבית ולעסק
```

**מבנה כותרות:**

- מה באמת קורה בהפסקת חשמל
- מה נדרש כדי לקבל גיבוי — ממיר היברידי ולוח מגובה נפרד
- למה מוסיפים אגירה
- איך בוחרים גודל סוללה
- הוספת אגירה למערכת קיימת — מה בודקים
- מערכות מנותקות רשת — מקרוואנים ועד מבנים
- שאלות נפוצות

**✕ לא תואם לקוד:**

- Two of the three broken description promises are not broken. The map says the description "promises three things ... and none of them exists in the page body". "מה באמת קורה בהפסקת חשמל" IS delivered — src/data/services/solar.ts:377, bullet "גיבוי בהפסקת חשמל: מערכת מחוברת רשת ללא אגירה מפסיקה לייצר בהפסקה". Battery sizing is partially delivered — FAQ at line 397, "כמה זמן מחזיקה סוללה?", answers "מה שקובע הוא לא רק גודל הסוללה אלא גם אילו מכשירים רוצים להפעיל בזמן הגיבוי — זה חלק מהתכנון". Only "ממיר היברידי" and "לוח מגובה נפרד" are genuinely absent from the entire page. Everything else verifies: title 35 chars, h1 "אגירת אנרגיה ומערכות מנותקות רשת" disagrees with the title, and the three off-grid projects (beit-knesset-yona 0 kW listed, avishai-adi 7 kW, lifshitz-klil 3 kW) are named in the prose section at line 386.
  - **תיקון:** Reduce the intent-mismatch claim to the two genuinely missing terms (ממיר היברידי, לוח מגובה) — the abandonment argument does not survive at three-for-three.

**קישורים פנימיים מוצעים:** /solar/ · /solar/residential/ · /solar/commercial/ · /electrical/panels/ · /projects/beit-knesset-yona-ganei-tikva/ · /projects/avishai-adi/ · /projects/lifshitz-klil/ · /projects/ · /about/ · /quote/?track=solar

**חוסרים:**

- התיאור מבטיח "למה נדרש ממיר היברידי ולוח מגובה נפרד" ו"איך בוחרים גודל סוללה" — ובעמוד אין אף סעיף על אף אחד מהשניים. שני הסעיפים החסרים הם בדיוק מה שמבקר מגיע לחפש, וזו אי-התאמה בין מה שהובטח ב-SERP למה שנמצא. זה הפער החמור ביותר בעמוד.
- העובדה המאומתת grid-outage מ-regulatory.ts — "מערכת מחוברת רשת ללא אגירה מפסיקה לייצר בהפסקה, מדרישת התקן, כדי למנוע הזנה לרשת בזמן עבודת אנשי תחזוקה; גיבוי מחייב ממיר היברידי ולוח מגובה נפרד" — כתובה, מאומתת, ולא בשימוש בשום מקום בעמוד. זהו סעיף H2 שלם שכבר קיים כנתון ורק צריך לרנדר אותו.
- אין heroImage. שלוש התמונות של בית כנסת יונה — פרויקט אוף-גריד עם אגירה שהוא ההוכחה המרכזית של העמוד — קיימות, מוכחות כשלנו, ומשמשות בשני עמודים אחרים. אחת מהן שייכת כאן יותר מאשר בכל מקום אחר.
- סיפור הקרוואנים והרכבים הניידים הוא הבידול האמיתי היחיד בעמוד — מערכות שהאגירה בהן היא לב המערכת ולא תוספת — והוא מקבל פסקה אחת בתחתית. יש לו גם חיזוק חיצוני זמין: ההמלצה של נועה חממי מבת עין על חשמל סולארי למשאית, המלצה אמיתית ומיוחסת שלא מופיעה בעמוד הזה.
- שלושה פרויקטים אוף-גריד קיימים ב-projects.ts (בית כנסת יונה — אוף גריד עם אגירה, עדי 7 ק"ו, כליל 3 ק"ו) ומוזכרים בטקסט חופשי בלי ולו קישור אחד לעמוד הפרויקט. זה מבזבז גם קישוריות פנימית וגם הוכחה.
- אין שום התייחסות לעלות או לסדר גודל של החלטה. אגירה היא מוצר בעל ערך גבוה שנמכר כתוספת — מבקר שלא מקבל אפילו את מסגרת ההחלטה (כמה זה מוסיף באחוזים לפרויקט, מה מתומחר לפי מה) לא ממשיך לטופס.
- אין הסבר מה קורה כשהסוללה מתבלה — אורך חיים, מחזורי טעינה, אחריות היצרן מול האחריות שלנו. זו ההתנגדות המובילה במוצר הזה והיא לא מוזכרת (חסום חלקית על fact.warranty).
- "מערכת סולארית מנותקת רשת" הוא צביר שאילתות עם תחרות נמוכה ועם ההוכחה החזקה ביותר שיש בעסק. כרגע הוא נדחס לתוך עמוד שהמונח הראשי שלו הוא אגירה. שווה לשקול עמוד נפרד /solar/off-grid/ אחרי שהעמוד הזה יתמלא — זו השאילתה הסולארית היחידה שאפשר לזכות בה על בסיס הוכחה ולא על בסיס תוכן.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה לאגירה — /quote/?track=solar, עם שדה storage מסומן מראש. שאלת ההסמכה שצריכה לעלות ראשונה בעמוד ולא בטופס: "מה אתם רוצים שימשיך לעבוד בהפסקה" — היא גם מסננת, גם מלמדת, וגם קובעת את גודל הסוללה.
- **CTA משני:** וואטסאפ עם צילום הממיר והלוח הקיימים — הכי רלוונטי לקהל הגדול בעמוד, בעלי מערכת קיימת ששוקלים להוסיף אגירה. זו בדיקת היתכנות של דקה במקום טופס של עשרה שדות. חיוג נשאר שלישי.
- **מה נדרש כדי לבנות אמון:**
  - ההסבר הטכני של מנגנון הגיבוי — ממיר היברידי ולוח מגובה נפרד, ולמה מערכת רגילה נכבית בהפסקה. הסבר שמראה ידע אמיתי הוא כאן נכס האמון החזק ביותר, והוא היחיד שאינו חסום על נתון מבעל העסק
  - שלושת הפרויקטים האוף-גריד עם קישור לעמוד הפרויקט — בית כנסת יונה (אוף גריד עם אגירה), עדי 7 ק"ו, כליל 3 ק"ו
  - רצף הקרוואנים מ-2018 כהיסטוריה מוכחת שהאגירה היא לא מוצר חדש בעסק אלא נקודת ההתחלה שלו — 2018 מאומת ב-business.ts
  - ההמלצה של נועה חממי (חשמל סולארי למשאית, בת עין) — הראיה החיצונית היחידה למערכת ניידת מנותקת רשת
  - תנאי אחריות מספריים על הסוללה ועל העבודה (חסום על fact.warranty)
  - תצלום של מערך אגירה שהותקן על ידינו (חסר)
- **התנגדויות:**
  - כמה זמן הסוללה באמת מחזיקה — ומה יעבוד בזמן הזה
  - אפשר להוסיף אגירה למערכת שכבר יש לי, או שאצטרך להחליף ממיר
  - כמה זה מוסיף לעלות המערכת
  - כמה שנים הסוללה מחזיקה ומה קורה אחר כך
  - האם צריך מקום מיוחד להתקנה, והאם זה בטוח בתוך הבית
  - האם זה בכלל משתלם, או שזה צעצוע יקר
  - מה ההבדל בין גיבוי לבין אוף גריד מלא
- **מסלול המרה:** כניסה אורגנית על "מה קורה בהפסקת חשמל" (כוונה אינפורמטיבית) → "מה באמת קורה בהפסקת חשמל" (עונה מיד, בונה סמכות) → "מה נדרש כדי לקבל גיבוי" (הופך אינפורמטיבי למסחרי — עכשיו הוא יודע שהוא צריך רכיבים שאין לו) → "איך בוחרים גודל סוללה" (מסגרת החלטה) → "מערכות מנותקות רשת" (הוכחה) → בדיקת התאמה → /thank-you/solar/. מסלול בעל מערכת קיימת, שהוא הקהל בעל הכוונה הגבוהה ביותר: וואטסאפ עם צילום ממיר → תשובת היתכנות → טופס. מסלול נכנס מ-/solar/residential/ בשלב התכנון: "אם ידוע שתהיה אגירה בעתיד, עדיף לדעת מראש".

---

## /solar/contractors/

**מילת מפתח ראשית:** קבלן משנה לביצוע מערכות סולאריות  
**כוונת חיפוש:** transactional  
**מילות משנה:** ביצוע סולארי לקבלנים · קבלן חשמל לפרויקט סולארי · חיבור חשמלי למערכת סולארית · התקנת מערכות סולאריות לחברות · קבלן ביצוע פאנלים סולאריים · ממשק חשמל בפרויקט סולארי

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת בקוד היא "קבלן ביצוע סולארי לקבלנים ולחברות" (33 תווים) ובה שלוש בעיות. (1) "קבלן... לקבלנים" הוא כפל לשוני שקורא מקצועי מזהה מיד כניסוח לא מדויק, והוא צורך 12 תווים בלי להוסיף מונח. (2) "ולחברות" לא מכוון לשום דבר — הקהל אינו "חברות" אלא קבלן ראשי, חברת EPC או יזם, והמונח שהם מקלידים הוא "קבלן משנה", מונח שלא מופיע בכותרת כלל אף שהוא מופיע פעמיים בגוף העמוד ובשאלת ה-FAQ הראשונה. (3) הבידול היחיד של העמוד — שהחלק החשמלי והחלק המכני נעשים תחת רישיון אחד, וזה בר-אימות מול רישיון 991433 — לא נמצא בכותרת ולא נמצא ב-h1. התיאור הקיים (102 תווים) קצר מדי ומסתיים ב"רישיון חשמלאי ראשי" בלי המספר, שהוא בדיוק החלק הניתן לבדיקה.

**מוצע:**

```
title       קבלן משנה לביצוע מערכות סולאריות בפרויקטים   (42)
description ביצוע סולארי כקבלן משנה בפרויקטים: תשתית, מבנה נשיאה, פאנלים, ממירים והחיבור החשמלי — הכול תחת רישיון חשמלאי ראשי מס׳ 991433 ובלוח הזמנים של האתר.   (146)
h1          ביצוע סולארי כקבלן משנה בפרויקטים
```

**מבנה כותרות:**

- למי זה מתאים — קבלן ראשי, חברת EPC או יזם
- מה אנחנו מבצעים
- החיבור החשמלי הוא הנקודה שנופלת בין קבלנים
- חלוקת אחריות — מה עלינו, מה עליכם, מה על היועץ
- ממשקים ולוח זמנים — מתי אנחנו נכנסים לגאנט
- מסירה ותיעוד — בדיקות, סימון ומה נמסר בסוף
- תיק ספק ותנאי התקשרות
- כושר ביצוע והיקפים
- שאלות נפוצות

**⚠ טענות לא מבוססות (2):**

- `description` — «...הכול תחת רישיון חשמלאי ראשי מס׳ 991433 ובלוח הזמנים של האתר»
  - 'ובלוח הזמנים של האתר' is a schedule commitment to a B2B buyer. `fact.concurrent-projects` ('כמה פרויקטים ניתן לקחת במקביל') and `fact.team.size` are both open; pages.ts lists 'האם יעמוד בקצב' as the live objection for this exact route. Nothing on record supports a schedule guarantee.
  - **במקום:** ביצוע סולארי כקבלן משנה בפרויקטים: תשתית, מבנה נשיאה, פאנלים, ממירים והחיבור החשמלי — הכול תחת רישיון חשמלאי ראשי מס׳ 991433, בתיאום מול הגאנט של האתר.
- `headingOutline` — «כושר ביצוע והיקפים · תיק ספק ותנאי התקשרות»
  - Two sections whose entire content is open gaps. Capacity depends on `fact.team.size` (P0), `fact.project.max-scale` (P0) and `fact.concurrent-projects` (P1); the supplier pack depends on `asset.supplier-pack` (P1), `fact.insurance` (P0) and `fact.contractor-registry` (P0), with five of six SUPPLIER_PACK items at status:"pending". Neither can carry prose.
  - **במקום:** שתי הכותרות נשארות — אבל כבלוקי Pending מפורשים: 'כושר ביצוע והיקפים — טרם פורסם' (fact.team.size) ו-'תיק ספק — מה כבר קיים ומה עדיין לא' (asset.supplier-pack).

**✕ לא תואם לקוד:**

- Count is inflated. The map says "קבלן משנה" "מופיע פעמיים בגוף העמוד ובשאלת ה-FAQ הראשונה" — implying three occurrences. It appears exactly twice on the page: heroPoints "עבודה כקבלן משנה בפרויקט" (src/data/services/solar.ts:305) and the first FAQ question "אתם עובדים כקבלן משנה?" (line 334). The description is a third occurrence but is not body copy. Title 33 chars and description 102 chars both confirmed; the licence-differentiator claim also verifies (h1 is "ביצוע סולארי לקבלנים", no licence reference). internalLinksOut claims /contracting/infrastructure/, /solar/, /about/, /projects/; related[] is /contracting/, /solar/commercial/, /contracting/process/ — the other four are chrome-only.
  - **תיקון:** Say 'twice' (heroPoint + first FAQ). Correct the link list to related[] + /quote/?track=contracting + /contact/.

**קישורים פנימיים מוצעים:** /contracting/ · /contracting/process/ · /contracting/infrastructure/ · /contracting/commercial/ · /solar/ · /solar/commercial/ · /about/ · /projects/ · /quote/?track=contracting

**חוסרים:**

- בפרודקשן זהו העמוד הדל ביותר באתר. sections מכיל שני פריטים, ואחד מהם הוא בלוק kind: "pending" שהתבנית מסננת החוצה כש-SHOW_PENDING כבוי — כלומר מה שמתפרסם בפועל הוא סעיף אחד של חמש נקודות, שתי שאלות FAQ ושלושה קישורים. הסעיף שנעלם הוא "כושר ביצוע והיקפים", שהוא בדיוק מה שקבלן ראשי פותח את העמוד כדי לברר. עמוד B2B בהיקף הזה לא ידורג ולא ימיר.
- track מוגדר "contracting", ולכן רכיב Testimonials לא מרונדר בכלל. בשילוב עם היעדר heroImage והיעדר תיק ספק, לעמוד אין אף אות אמון ויזואלי או חברתי — אפס. זהו העמוד היחיד בקבוצה שבו אין תמונה, אין המלצה ואין הוכחה.
- אין heroImage. beit-knesset-yona-03 — מתקין מרכיב מסגרות אלומיניום לפני הנחת פאנלים — הוא תצלום התהליך היחיד בספרייה והוא בדיוק תמונת עמוד ביצוע. הוא מוקצה כרגע ל-/solar/commercial/, שבו הוא פחות מדויק (מבנה ציבור ולא מבנה מסחרי). כדאי להעביר אותו לכאן.
- רישיון 991433 לא מופיע בעמוד אף שהוא היחיד מבין נכסי האמון שכבר קיים ומאומת. בפנייה B2B מספר רישיון גלוי הוא מה שמעביר את הפנייה משלב "אולי" לשלב רכש.
- אין סעיף חלוקת אחריות. הטיעון המרכזי — "אין ממשק בין שני קבלנים ואין ויכוח על מי אחראי" — נאמר במשפט אחד ב-FAQ, בלי שהעמוד מראה בפועל איך נראית חלוקת האחריות. טבלה של מה עלינו / מה על הקבלן הראשי / מה על יועץ החשמל היא ההמרה החזקה ביותר שאפשר לבנות כאן בלי אף נתון חדש מבעל העסק.
- אין תיק ספק להורדה. מחקר השוק מצא שאף אחד מ-29 המתחרים לא מציע אותו, ו-SUPPLIER_PACK ב-regulatory.ts כבר מגדיר את הרשימה — רישיון זמין, ששת הפריטים האחרים חסומים על fact.insurance ו-fact.contractor-registry. גם גרסה חלקית ("הרישיון זמין להורדה, יתר המסמכים נשלחים בפנייה") עדיפה על היעדר מוחלט.
- אין נתוני כושר ביצוע: גודל צוות התקנה, קצב התקנה, כמה פרויקטים במקביל, הפרויקט הסולארי הגדול שבוצע. חסום על fact.team.size, fact.concurrent-projects ו-fact.project.max-scale — אלה שלוש שאלות הסינון הראשונות של קבלן ראשי, וכל השלוש פתוחות.
- אין ולו הוכחת ביצוע קבלנית אחת. עשרת הפרויקטים הם ביתיים/חקלאיים ישירים ללקוח קצה, לא עבודה כקבלן משנה (case.contracting.first). עד שתיסגר — יש להצהיר על כך במפורש בעמוד, כפי ש-/projects/ כבר עושה. הצהרה גלויה עדיפה על שתיקה שקבלן מפרש כהיעדר ניסיון.
- FAQ בן שתי שאלות ואף אחת מהן אינה שאלת רכש: תנאי תשלום ושוטף, ערבות ביצוע, מי מספק את החומרים, מי אחראי על הצילום התרמי והבדיקות במסירה, מה קורה בעיכוב שנגרם על ידי קבלן אחר.

**מפרט המרה:**

- **CTA ראשי:** שליחת פרטי הפרויקט — /quote/?track=contracting, טופס תשעה שדות. האורך הוא מסנן מכוון, ויש לומר זאת בגלוי בעמוד: קבלן שנשאל רק שם וטלפון מסיק שהגיע לחשמלאי קריאות. יש לחזק בהבטחה שכבר קיימת ב-forms.ts ולהציג אותה בעמוד עצמו, לא רק בטופס — "נחזור עם בדיקת התאמה ראשונית, כולל תשובה שלילית ברורה אם הפרויקט לא מתאים לנו".
- **CTA משני:** שיחה מקצועית — חיוג ישיר, כערוץ למי שרוצה לברר התאמה לפני שהוא ממלא תשעה שדות. יש להוסיף CTA שלישי שכרגע חסר לגמרי ושהוא הזול ביותר להמרה בקהל הזה: "קבלת תיק ספק במייל" — הוא לוכד ליד רכש בשדה אחד, מגיע לקהל שלא ממלא טפסים, ומשתמש בכתובת office@rnrg.co.il שכבר קיימת.
- **מה נדרש כדי לבנות אמון:**
  - מספר רישיון חשמלאי ראשי 991433 בגוף העמוד — הפריט היחיד ברשימה הזו שקיים היום, בר-אימות, ולא מופיע בעמוד
  - טבלת חלוקת אחריות בין קבלן משנה, קבלן ראשי ויועץ חשמל — ניתנת לבנייה מיידית ללא נתון חדש
  - תיק ספק להורדה — ביטוח עבודות קבלניות, צד ג׳ וחבות מעבידים, ניכוי מס במקור, ניהול ספרים, פנקס קבלנים (חסום)
  - גודל צוות ההתקנה וקצב ההתקנה (חסום על fact.team.size)
  - היקף הפרויקט הסולארי הגדול שבוצע (חסום על fact.project.max-scale)
  - תצלום שבו נראה יותר מאדם אחד בעבודה (חסום על photo.solar.install-team)
  - Case Study קבלני אחד — ולו כקבלן משנה בפרויקט אחד (חסום על case.contracting.first)
  - המלצה אחת מקבלן, יזם או מנהל פרויקט (חסום על testimonial.contracting)
- **התנגדויות:**
  - כמה אנשים אתם מביאים ומה קצב ההתקנה שלכם
  - מי אחראי על החיבור החשמלי ועל האסדרה — אתם או אני
  - האם תעמדו בגאנט שלי או שתעכבו לי את המסירה
  - האם עשיתם פרויקט בהיקף כזה כקבלן משנה
  - האם יש לכם ביטוח עבודות קבלניות וצד ג׳
  - האם אתם רשומים בפנקס הקבלנים
  - מי מספק את החומרים — פאנלים, ממירים, מבנה נשיאה
  - מה מקבלים במסירה — בדיקות, תיעוד, סימון
  - תנאי תשלום ושוטף
- **מסלול המרה:** כניסה מחיפוש "קבלן משנה" או מהפניה של קבלן ראשי → "למי זה מתאים" (הסמכה תוך שניות: קבלן ראשי, EPC או יזם) → "מה אנחנו מבצעים" (היקף) → "החיבור החשמלי הוא הנקודה שנופלת בין קבלנים" (הטיעון המבדל, מעוגן ברישיון 991433) → "חלוקת אחריות" + "ממשקים ולוח זמנים" (שתי ההתנגדויות התפעוליות שמכריעות) → "תיק ספק ותנאי התקשרות" (שלב הרכש) → טופס תשעה שדות /quote/?track=contracting → /thank-you/contracting/. שני מסלולים מקבילים חיוניים: הורדת תיק ספק שלוכדת ליד רכש בשדה אחד, ו-/contracting/process/ למי שרוצה לראות את התהליך המלא לפני שהוא מתחייב. כל מסלול בעמוד חייב להסתיים באחד משלושת אלה — כרגע העמוד מסתיים בפס CTA ובשלושה קישורי related בלבד.

---

## /quote/

**מילת מפתח ראשית:** הצעת מחיר חשמלאי  
**כוונת חיפוש:** transactional  
**מילות משנה:** הצעת מחיר לעבודת חשמל · הצעת מחיר חשמלאי אשדוד · הצעת מחיר לפרויקט חשמל קבלני · הצעת מחיר למערכת סולארית · בדיקת התאמה למערכת סולארית · חשמלאי ראשי הצעת מחיר

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת בקוד היא "בקשת הצעת מחיר" ומתרנדרת כ-"בקשת הצעת מחיר | RNRG" (21 תווים). שלוש בעיות: (1) זו תווית ממשק, לא שאילתה — אף אחד לא מחפש "בקשת הצעת מחיר" כביטוי עצמאי, והכותרת אינה מכילה את המילה "חשמלאי" ולו פעם אחת; (2) העמוד מחזיק שלושה טפסים לשלושה קהלים והכותרת לא מזכירה אף אחד מהם, ולכן היא בלתי ניתנת להבחנה מ-/contact/ בעיני מנוע חיפוש ובעיני משתמש בלשונית; (3) 21 מתוך ~60 תווים מנוצלים — 39 תווים של נדל"ן שאפשר לתת בהם את שלושת הענפים או את דרגת הרישיון. התיאור (119 תווים) קצר מהמינימום של 140 ואינו מזכיר רישיון, אזור פעילות או מה קורה אחרי השליחה — שלושת דברי האמון שהעמוד עצמו מגדיר כנדרשים.

**מוצע:**

```
title       הצעת מחיר מחשמלאי ראשי — חשמל, קבלנות וסולארי | RNRG   (52)
description בקשת הצעת מחיר לעבודת חשמל בבית, לפרויקט קבלני או לבדיקת התאמה למערכת סולארית. שלושה טפסים נפרדים, רישיון חשמלאי ראשי 991433, פעילות ממצפה רמון ועד עמק חפר.   (156)
h1          בקשת הצעת מחיר — חשמל, קבלנות ביצוע וסולארי
```

**מבנה כותרות:**

- בחרו את סוג הפנייה
- עבודת חשמל לבית
- פרויקט או עבודה קבלנית
- בדיקת התאמה למערכת סולארית
- מה קורה אחרי שליחת הטופס
- מעדיפים לדבר?
- רישיון, אזור פעילות ומה נעשה עם הפרטים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «מה קורה אחרי שליחת הטופס»
  - Legitimate section, but it is the single most likely place for an invented response time to appear. `fact.response-time` is open; the copy may say what happens, never when. Flagging so the writer receives the constraint with the heading.
  - **במקום:** מה קורה אחרי שליחת הטופס — לתאר שלבים בלבד, בלי 'תוך X שעות' (fact.response-time פתוח)

**✕ לא תואם לקוד:**

- internalLinksOut lists 8 targets; src/pages/quote.astro has no internal body links whatsoever — its only hrefs are links.tel, links.mailto and links.whatsapp(). There is no CtaBand and no related block. All 8 are chrome. The title critique verifies: title "בקשת הצעת מחיר" = 14 chars, 21 rendered; description 119 chars; three LeadForm panels for private/contracting/solar.
  - **תיקון:** Empty the body link list, or add the intended links to quote.astro.

**קישורים פנימיים מוצעים:** /electrical/ · /contracting/ · /solar/ · /contracting/process/ · /faq/ · /areas/ · /projects/ · /contact/

**חוסרים:**

- בגוף העמוד אין ולו קישור פנימי אחד. יש breadcrumbs, tel, whatsapp ו-mailto — וזהו. מי שבחר מסלול שגוי, או שרוצה לוודא לפני שהוא ממלא, נמצא במבוי סתום, והעמוד לא מעביר סמכות לאף עמוד ענף.
- pages.ts מגדיר "מה יקרה אחרי השליחה" כפריט אמון נדרש — והוא לא קיים בעמוד. ההסבר היחיד קיים ב-/thank-you/, כלומר אחרי ההמרה, למי שכבר המיר. צריך בלוק "מה קורה אחרי שליחת הטופס" לפני כפתור השליחה.
- אין זמן תגובה מוצהר (fact.response-time, P1). זה המנוף היחיד החזק ביותר על שיעור השלמת טופס, והוא חסר בדיוק בעמוד שבו הוא נמדד.
- שלושת ה-h2 של הטפסים קיימים כולם ב-DOM ושניים מהם מוסתרים ב-CSS. מבנה הכותרות שהזחלן רואה אינו התוכן שהמשתמש רואה, ושני ה-h2 המוסתרים מתחרים על הרלוונטיות של העמוד.
- integration.lead-endpoint (P0) פתוח: אין נקודת קצה, ולכן מסלול ההמרה שהעמוד מבטיח לא קיים בייצור. בפועל הטופס נופל למסירה בוואטסאפ, שאינה אישור קליטה — והעמוד לא אומר את זה מראש.
- המסלול הקבלני מבקש עשרה שדות ואין לצידו ולו הוכחה אחת: אין Case Study קבלני, אין גודל צוות, אין ביטוח עבודות קבלניות, אין תיק ספק. קבלן מתבקש להשקיע את המאמץ הגדול ביותר בעמוד עם ההוכחה הקטנה ביותר.
- ה-aside מציג רישיון, אזור ואימייל ב-<dl> ללא כותרת — נכסי אמון אמיתיים שאינם נגישים למבנה הכותרות ולא מוצגים כטענה.
- אין Schema מעבר ל-Organization ו-BreadcrumbList. עמוד המרה מרכזי שלא מצהיר על Service או על ContactPoint.
- אין משפט פרטיות מעבר ל-micro-copy של הטופס. "מה קורה עם הפרטים שלי" מופיע ב-pages.ts כהתנגדות ולא נענה.

**מפרט המרה:**

- **CTA ראשי:** שליחת הטופס במסלול הנבחר, עם תווית ייעודית לכל מסלול — "שליחת הפנייה" (פרטי), "שליחת פרטי הפרויקט" (קבלני), "שליחה לבדיקת התאמה" (סולארי)
- **CTA משני:** חיוג ל-054-665-6076, ולידו וואטסאפ — לתקלה משביתה ולמי שבאמצע תמחור, שיחה מהירה מכל טופס
- **מה נדרש כדי לבנות אמון:**
  - רישיון חשמלאי ראשי 991433, גלוי ליד הטופס ולא רק ב-aside
  - אזור הפעילות בניסוח של העסק — ממצפה רמון ועד עמק חפר
  - משפט מפורש מה קורה אחרי השליחה: מי עובר על הפנייה, מי חוזר, ובאיזה ערוץ
  - הצהרת פרטיות קצרה: הפרטים משמשים רק לפנייה הזו
  - מספר פנייה שמוחזר מיד לאחר השליחה, כדי שיהיה למה להתייחס
  - למסלול הקבלני: ביטוח עבודות קבלניות, גודל צוות ופרויקט קבלני מתועד אחד
- **התנגדויות:**
  - למה הטופס הקבלני מבקש עשרה שדות ולפרטי מספיקים שלושה
  - מתי בדיוק יחזרו אליי — אין באתר שום התחייבות לזמן תגובה
  - האם אקבל מחיר בטלפון או שידרשו ביקור בנכס
  - מה נעשה עם הפרטים שלי אחרי השליחה
  - האם אני בכלל בתוך אזור הפעילות
  - האם השליחה מחייבת אותי במשהו
  - אני קבלן — למה שאשקיע עשרה שדות בעסק שלא הראה לי אף פרויקט קבלני
- **מסלול המרה:** CTA מכל עמוד באתר → /quote/?track=… כשהטופס הנכון כבר פתוח בצביעה הראשונה (ה-track נקבע בסקריפט inline לפני שה-body מצייר) → מילוי → כתיבה מקומית ל-localStorage → POST → אישור קליטה מהשרת → /thank-you/<track>/?lead=… כרגע החוליה החסרה היא נקודת הקצה: בלעדיה המסלול נופל ל-whatsappHandoff ואז ל-/thank-you/<track>/?via=whatsapp, וזו מסירה ולא קליטה. עד שנקודת הקצה קיימת, החיוג הוא מסלול ההמרה האמין יותר וצריך משקל ויזואלי בהתאם.

---

## /contact/

**מילת מפתח ראשית:** חשמלאי אשדוד טלפון  
**כוונת חיפוש:** transactional  
**מילות משנה:** צור קשר חשמלאי · חשמלאי אשדוד יצירת קשר · וואטסאפ חשמלאי · רוני חג׳ג׳ הנדסת חשמל טלפון · חשמלאי ראשי אשדוד · RNRG צור קשר

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת בקוד היא "צור קשר" ומתרנדרת כ-"צור קשר | RNRG" — 14 תווים בסך הכול. זו הכותרת הגנרית ביותר האפשרית: היא זהה לאלפי עמודים, אינה מכילה את המילה "חשמלאי" ואינה מכילה את "אשדוד", כלומר את שני הטוקנים היחידים שהופכים עמוד צור-קשר מקומי לנמצא בכלל. היא גם רק שכפול של התווית ב-SECONDARY_NAV — נבחרה כפריט ניווט ולא כמענה לשאילתה, ומבזבזת ~46 תווים פנויים. התיאור (109 תווים) קצר מהמינימום של 140, נפתח ב-"יצירת קשר עם RNRG" כלומר מציב את המותג ראשון מול שאילתה לא-מותגית, ומוציא את רוב אורכו על מניית ערוצים במקום לענות על שתי השאלות שהמבקר באמת שואל: מתי יענו לי, והאם מגיעים אליי.

**מוצע:**

```
title       טלפון חשמלאי באשדוד — חיוג, וואטסאפ ומייל | RNRG   (48)
description חשמלאי ראשי באשדוד ובדרום. טלפון 054-665-6076, וואטסאפ לשליחת תמונת לוח, ומייל office@rnrg.co.il לתוכניות וכתבי כמויות. פעילות ממצפה רמון ועד עמק חפר.   (150)
h1          יצירת קשר — חשמלאי ראשי באשדוד ובדרום
```

**מבנה כותרות:**

- דרכי יצירת קשר
- מתי כדאי להתקשר ומתי עדיף לכתוב
- אזור הפעילות
- השארת פרטים בטופס
- פרויקט קבלני או מערכת סולארית

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «מתי כדאי להתקשר ומתי עדיף לכתוב»
  - Presupposes published working hours. `fact.opening-hours` (P1) is open — business.ts records that the old site's א׳–ה׳ 08:00–19:00 schema hours 'הופיע ב-Schema בלבד, מעולם לא הוצג באתר ולא אומת' — and pages.ts marks this route blockedBy that gap plus `fact.response-time`.
  - **במקום:** איזה ערוץ מתאים לאיזו פנייה — טלפון, וואטסאפ או מייל

**✕ לא תואם לקוד:**

- internalLinksOut lists 7 targets; src/pages/contact.astro emits only /areas/ and /quote/ as internal body links (plus tel/mailto/whatsapp). /electrical/, /contracting/, /solar/, /faq/, /about/ are chrome-only. The title critique verifies exactly: "צור קשר" = 7 chars, 14 rendered, identical to the SECONDARY_NAV label at src/data/nav.ts:117; description 109 chars, opening "יצירת קשר עם RNRG".
  - **תיקון:** Reduce to /areas/ and /quote/.

**קישורים פנימיים מוצעים:** /quote/ · /areas/ · /electrical/ · /contracting/ · /solar/ · /faq/ · /about/

**חוסרים:**

- לעמוד אין ולו h2 אחד. אחרי ה-h1 "נשמח לשמוע מכם" כל התוכן — ארבעה כרטיסי ערוץ, אזור הפעילות, שעות ותגובה — יושב ב-div-ים עם <span> במקום כותרות. ה-h2 היחיד בעמוד הוא כותרת הטופס. אין למנוע חיפוש שום מפה של העמוד.
- שני שדות ריקים הם לב העמוד: fact.opening-hours ו-fact.response-time. הנוסח החלופי ("השאירו הודעה ונחזור אליכם", "לא נתחייב לזמן לפני שנוכל לעמוד בו") ישר ומכובד, אבל הוא ממיר פחות טוב מטווח מוצהר — ושתי ההתנגדויות שב-pages.ts נשארות פתוחות.
- אין כתובת רחוב ואין מפה. business.ts מחזיק locality=אשדוד ו-region=דרום בלבד, ולכן ה-PostalAddress ב-Schema חלקי וה-ContactPage לא מוסיף צומת contactPoint משלו — סיגנל Local SEO דל בדיוק בעמוד שאמור לשאת אותו.
- אין ניתוב B2B. קבלן שנחת כאן מקבל טופס פרטי בן שלושה עד חמישה שדות, ומופנה ל-/quote/ רק בפסקה קטנה בתחתית. עמוד הקשר הוא נקודת נחיתה סבירה לחיפוש "חשמלאי אשדוד" גם מצד עסקי, ואין בו ערוץ רכש, אין מייל ייעודי להצעות ואין אזכור של מסמכי ספק.
- אין רשימת "מה כדאי לכתוב בהודעה" — סוג הנכס, מה קיים היום, תמונה של הלוח. זה מייצר הודעות ראשונות שאי אפשר לענות עליהן ומאריך את מחזור המכירה.
- קישורים פנימיים: רק /areas/ ו-/quote/. שלושת עמודי הענף, ה-FAQ והפרויקטים אינם מקושרים, ולכן העמוד קולט תנועה מקומית ולא מעביר אותה לשום מקום.
- אין הוכחה חברתית ואין פנים. photo.owner.portrait פתוח — עמוד שמבקש להתקשר לאדם ולא מציג אף אדם.

**מפרט המרה:**

- **CTA ראשי:** חיוג ל-054-665-6076 — הכרטיס הראשון והגדול ביותר, ובמובייל גם ה-CTA הדביק
- **CTA משני:** וואטסאפ — הערוץ שמאפשר לשלוח תמונה של הלוח או של התקלה במקום לתאר אותה במילים
- **מה נדרש כדי לבנות אמון:**
  - רישיון חשמלאי ראשי 991433
  - אזור פעילות מפורט ליישובים, ובהבחנה בין קריאת שירות לפרויקט ארוך (חסום על fact.areas.list)
  - שעות פעילות מאומתות (חסום על fact.opening-hours)
  - טווח זמן תגובה שאפשר לעמוד בו (חסום על fact.response-time)
  - מייל בדומיין העסק — office@rnrg.co.il, ולא כתובת Gmail
  - פנים: תצלום בעל העסק (חסום על photo.owner.portrait)
- **התנגדויות:**
  - מתי יענו לי — באתר אין שעות פעילות ואין זמן תגובה
  - האם מגיעים ליישוב שלי, או ש"ממצפה רמון ועד עמק חפר" נכון רק לקריאות שירות
  - האם יענה בעל המקצוע עצמו או מוקד
  - האם שיחת הייעוץ הראשונה עולה כסף
  - אני קבלן / מנהל רכש — האם זה הערוץ הנכון או שיש מסלול נפרד
  - האם ההודעה שלי בכלל מגיעה למישהו
- **מסלול המרה:** נחיתה מחיפוש מקומי או מ-Google Business Profile → הקשה על מספר הטלפון (ההמרה העיקרית במובייל, ורוב התנועה כאן מובייל) → שיחה. מי שלא מתקשר: וואטסאפ עם תמונה, או טופס פרטי קצר באותו עמוד → /thank-you/private/. פונה עסקי מזוהה על ידי הכותרת "פרויקט קבלני או מערכת סולארית" ומנותב ל-/quote/?track=contracting לפני שהוא ממלא את הטופס הלא נכון — היום הניתוב הזה הוא פסקה קטנה מתחת לטופס, כלומר אחרי שכבר החל למלא.

---

## /thank-you/

**מילת מפתח ראשית:** אישור קליטת פנייה RNRG  
**כוונת חיפוש:** navigational  
**מילות משנה:** הפנייה נשלחה · עמוד אישור פנייה

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת "הפנייה התקבלה" זהה תו-בתו לכותרת של /thank-you/private/, שנשאבת מ-THANKS.private.heading. שני מסלולים, כותרת אחת: בדוחות GA4 ו-Search Console אי אפשר להפריד נחיתת fallback מאישור אמיתי במסלול הפרטי, וזו בדיוק ההבחנה שבגללה פוצלו המסלולים לעמודים נפרדים מלכתחילה. בעיה שנייה וחמורה יותר: העמוד מצהיר "הפנייה התקבלה" בעוד שמגיעים אליו דווקא ללא הגשה — מ-bookmark, מקישור משותף או מהפניית /success.html הישנה — כלומר הוא מאשר קליטה שאין לו שום ראיה אליה. התיאור (38 תווים) קצר פי ארבעה מהמינימום.

**מוצע:**

```
title       אישור קליטת פנייה | RNRG   (24)
description עמוד אישור לפנייה שנשלחה ל-RNRG. אם הגעתם לכאן מקישור שמור ולא מתוך שליחת טופס — לא נקלטה פנייה חדשה. אפשר להתקשר 054-665-6076 או לחזור לטופס.   (142)
h1          אישור פנייה
```

**מבנה כותרות:**

- מה קורה עכשיו
- לא הגעתם מתוך שליחת טופס?
- יצירת קשר ישירה

**✕ לא תואם לקוד:**

- Two problems. (1) The page is noindex — Base.astro:118 emits <meta name="robots" content="noindex, follow"> for noindex={true}, set at thank-you/index.astro:13 — so "התיאור (38 תווים) קצר פי ארבעה מהמינימום" is inapplicable: the page can never render a SERP snippet, and Search Console will not report it. The GA4 title-collision argument survives; the Search Console half of it does not. (2) internalLinksOut lists 7 targets; the body has exactly one internal link, href="/" ("לדף הבית"), plus links.tel — and a script at line 48 runs location.replace("/thank-you/private/" + location.search) on load, so no visitor reads this page at all. Title 13 chars / 20 rendered and description 38 chars both confirmed, as is the character-for-character collision with THANKS.private.heading.
  - **תיקון:** Drop the description-length and Search Console arguments for all four thank-you routes. Keep the title-collision finding, scoped to GA4 page_title reporting. Reduce the link list to '/' and note the immediate JS redirect.

**קישורים פנימיים מוצעים:** /quote/ · /contact/ · / · /electrical/ · /contracting/ · /solar/ · /faq/

**חוסרים:**

- העמוד noindex ומוחרג מ-sitemap ב-astro.config.mjs — נכון לחלוטין ואסור לשנות. המשמעות המעשית: אין לו ולעולם לא תהיה לו שאילתה משלו, וכל עבודת ה-SEO כאן היא היגיינה (כותרת ייחודית, תיאור, חוסר קישורים נכנסים מעמודים מאונדקסים) ולא דירוג. הכותרת והתיאור עדיין חשובים — הם התווית בדוחות האנליטיקס ובלשונית.
- הכותרת משוכפלת מול /thank-you/private/ — ראה currentTitleProblem. שני מסלולים שמתמזגים לשורה אחת בכל דוח.
- הסקריפט מריץ location.replace("/thank-you/private/") ללא תנאי. מי ששלח ליד קבלני או סולארי ופתח מחדש קישור שמור מקבל תוכן של המסלול הפרטי, ואירוע lead_confirmed נורה עם track=private — זיהום ישיר של נתוני המקור לפי מסלול. ההפניה צריכה לרוץ רק כשיש ?lead= או ?track= ב-query.
- העמוד טוען "הפנייה התקבלה" בלי מספר פנייה, בלי טיפול במקרה ה-via=whatsapp ובלי שום דרך לדעת שאכן נשלח משהו. זו טענה עובדתית ללא כיסוי, מאותו סוג שבגללו הוסרו ההמלצות והדירוג המומצא.
- אין מסלול חזרה. שני כפתורים — טלפון ודף הבית. אין קישור ל-/quote/ למי שהגיע לכאן בטעות ורוצה לשלוח באמת, ואין קישור לשלושת עמודי הענף.
- ללא JavaScript זהו העמוד הסופי, ואז הוא עמוד תודה בן שתי שורות שאינו מסביר דבר. הוא צריך לעמוד בפני עצמו, לא להסתמך על ההפניה.

**מפרט המרה:**

- **CTA ראשי:** חיוג ל-054-665-6076 — למי שאינו בטוח שהפנייה נקלטה, שיחה סוגרת את הספק מיד
- **CTA משני:** מעבר ל-/quote/ לשליחה אמיתית, למי שהגיע לכאן מקישור שמור ולא שלח דבר
- **מה נדרש כדי לבנות אמון:**
  - הבהרה מפורשת שהעמוד הזה לבדו אינו אישור קליטה, ושאישור אמיתי נושא מספר פנייה
  - טלפון ישיר, גלוי, בלי לחפש
  - נתיב חזרה לטופס הנכון לפי סוג העבודה
- **התנגדויות:**
  - האם הפנייה שלי באמת נקלטה — אין כאן מספר פנייה ואין אישור
  - למה אני רואה עמוד תודה כשלא שלחתי כלום
  - למי אני פונה אם לא חוזרים אליי
  - האם צריך לשלוח שוב
- **מסלול המרה:** מגיעים לכאן רק משלושה מקורות: bookmark, קישור משותף, והפניית /success.html הישנה. אף אחד מהם אינו הגשה. המסלול הנכון: הבהרה קצרה מה העמוד הזה → מי ששלח ויש לו ?lead= מופנה למסלול שלו לפי ?track=, ומי שאין לו נשאר כאן ומקבל חיוג או חזרה ל-/quote/. ההפניה הגורפת הנוכחית ל-/thank-you/private/ צריכה להיות מותנית — אחרת העמוד ממציא מסלול למי שאין לו.

---

## /thank-you/private/

**מילת מפתח ראשית:** אישור פנייה לעבודת חשמל  
**כוונת חיפוש:** navigational  
**מילות משנה:** הפנייה התקבלה חשמלאי · מה קורה אחרי שליחת פנייה

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת נשאבת מ-THANKS.private.heading — "הפנייה התקבלה" — והיא זהה תו-בתו לכותרת של /thank-you/. שני מסלולים עם כותרת אחת אינם ניתנים להפרדה בדוח מבוסס כותרת. בנוסף היא לא מזכירה את המסלול, ולכן משלושת עמודי התודה זהו היחיד שאי אפשר לזהות בלי לקרוא את ה-URL. בעיה שלישית: הכותרת מצהירה "התקבלה" גם במקרה via=whatsapp, שבו שום שרת לא קלט דבר — וה-alert שמתחת ל-h1 סותר את ה-h1 שמעליו באותו מסך. התיאור (37 תווים) קצר פי ארבעה מהמינימום, ו-"נחזור אליכם בטלפון" הוא הבטחה ללא זמן.

**מוצע:**

```
title       הפנייה לעבודת חשמל התקבלה | RNRG   (32)
description קיבלנו את הפרטים לעבודת החשמל ונחזור אליכם טלפונית. כאן מה שכדאי להכין לשיחה, ומתי עדיף להתקשר במקום להמתין — תקלה שמשביתה חשמל בבית לא מחכה.   (141)
h1          קיבלנו את הפנייה לעבודת החשמל
```

**מבנה כותרות:**

- מה קורה עכשיו
- מה כדאי שיהיה מוכן לשיחה
- תקלה שמשביתה חשמל עכשיו?
- בינתיים — שאלות נפוצות ועבודות שבוצעו

**✕ לא תואם לקוד:**

- noindex={true} (thank-you/[track].astro:33), so "התיאור (37 תווים) קצר פי ארבעה מהמינימום" is inapplicable. internalLinksOut lists 6 targets; THANKS.private.links (src/data/thanks.ts:34-38) is exactly three: /electrical/, /electrical/panels/, /faq/. /projects/, /reviews/ and /areas/ are chrome-only. The title collision with /thank-you/ verifies (both "הפנייה התקבלה"), as does the via=whatsapp contradiction — the h1 renders t.heading unconditionally while the alert at line 56 says "הפנייה נפתחה בוואטסאפ. ודאו שההודעה אכן נשלחה".
  - **תיקון:** Drop the description-length argument; keep the title collision and the via=whatsapp contradiction. Cut the link list to the three THANKS entries.

**קישורים פנימיים מוצעים:** /electrical/ · /electrical/panels/ · /faq/ · /projects/ · /reviews/ · /areas/

**חוסרים:**

- זהו עמוד המסלול היחיד מבין השלושה ללא בלוק prepare. לקבלני ולסולארי יש "מה כדאי שיהיה מוכן לשיחה", ולפרטי אין — למרות שהוא הזול ביותר למלא: תמונה של הלוח, מה מחובר למעגל שקופץ, סוג הנכס וגילו. זה מייצר שיחה חוזרת קצרה ומדויקת יותר.
- אין חלון זמן לחזרה (fact.response-time). "נחזור אליכם" בלי טווח משאיר את הליד פתוח לפנות למתחרה, ובדיוק ברגע שבו תשומת הלב הכי גבוהה.
- אין דרך לשמור את המספר. הליד עומד לקבל שיחה ממספר לא מזוהה — קובץ vCard להורדה או כפתור שמירה מעלה את שיעור מענה לשיחה החוזרת, ואינו דורש שום עובדה שאינה קיימת.
- ה-h1 מצהיר קליטה, ומיד תחתיו alert שמסביר שהפנייה רק נפתחה בוואטסאפ ולא בהכרח נשלחה. כשה-via=whatsapp, גם ה-h1, גם ה-lede וגם הכותרת חייבים להשתנות — לא רק להוסיף אזהרה מתחתם.
- אין בקשת המלצה ואין נתיב הפניה. זהו הרגע היחיד בכל האתר שבו הלקוח מרוצה ופנוי, ו-integration.gbp פתוח — אין בכלל קישור לפרופיל Google לכתיבת ביקורת.
- אין פנים ואין שם למי שיחזור (photo.owner.portrait, fact.team.size). "נחזור אליכם" מפי אף אחד.
- קישורים פנימיים חלשים: /electrical/, /electrical/panels/, /faq/ בלבד. חסרים /projects/ ו-/reviews/ שהם בדיוק מה שמחזק החלטה בין השליחה לשיחה, ו-/areas/.

**מפרט המרה:**

- **CTA ראשי:** חיוג ל-054-665-6076 — ממוסגר במפורש כמסלול לתקלה שמשביתה חשמל עכשיו, ולא כ-CTA כללי. מיסגור נכון מונע שיחות מיותרות ומזרז את הדחופות באמת
- **CTA משני:** שמירת המספר באנשי הקשר (קובץ vCard) — כדי שהשיחה החוזרת לא תגיע כמספר לא מזוהה
- **מה נדרש כדי לבנות אמון:**
  - מספר פנייה גלוי בעמוד
  - הבהרה כנה כשהמסירה הייתה בוואטסאפ — כולל בכותרת ובכותרת הראשית, לא רק ב-alert
  - רישיון חשמלאי ראשי 991433
  - הסבר איך תיראה השיחה: נשאל לפני שנשלח הצעה, ולא ניתן מחיר על סמך ניחוש (הנוסח הזה כבר קיים ב-THANKS.private.next והוא טוב)
  - שם ופנים של מי שיחזור (חסום על photo.owner.portrait)
- **התנגדויות:**
  - מתי בדיוק יחזרו אליי — לא נאמר
  - אענה בכלל לשיחה ממספר שאני לא מכיר
  - האם הפנייה באמת נשמרה או שהיא נעלמה
  - כמה זה יעלה
  - מה אם אני צריך את זה היום
- **מסלול המרה:** הליד כבר קיים, ולכן מטרת העמוד אינה המרה אלא מניעת נטישה: להוריד את הסיכון שהלקוח יפנה במקביל למתחרה בזמן ההמתנה. שלושה מהלכים בסדר הזה — (1) להסביר מה תהיה השיחה הבאה ולתת חלון זמן, (2) לבקש הכנה קטנה (תמונת לוח) שמייצרת מחויבות ומקצרת את השיחה, (3) לתת חיוג רק למקרה הדחוף באמת. ערך משני: /projects/ ו-/reviews/ לחיזוק ההחלטה, /faq/ למניעת שיחת בירור, ובקשת ביקורת ב-Google אחרי הביצוע (חסום על integration.gbp).

---

## /thank-you/contracting/

**מילת מפתח ראשית:** אישור פנייה לפרויקט חשמל קבלני  
**כוונת חיפוש:** navigational  
**מילות משנה:** פרטי הפרויקט התקבלו · מה השלב הבא בפרויקט חשמל

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת "פרטי הפרויקט התקבלו" (26 תווים כולל המותג) תקינה בצורתה וייחודית — זו הפחות בעייתית מבין הארבע. שתי בעיות אמיתיות בכל זאת: (1) היא מצהירה קליטה מוחלטת, בעוד integration.lead-endpoint פתוח ובפועל הפנייה נמסרה לוואטסאפ — כלומר שום שרת לא קלט אותה, וזו הצהרה שהעסק לא יכול לגבות; (2) 34 תווים פנויים בעמוד שהוא רגע תשומת הלב הגבוה ביותר של הקהל היקר ביותר, והם לא מנוצלים לרמז אף פעולה. התיאור (95 תווים) קצר מהמינימום 140 — הוא פשוט ה-lede כפי שהוא, לא תיאור שנכתב לתפקידו.

**מוצע:**

```
title       פרטי הפרויקט התקבלו — מה השלב הבא | RNRG   (40)
description פרטי הפרויקט נקלטו. נחזור עם בדיקת התאמה ראשונית, כולל תשובה שלילית ברורה אם אינו מתאים. כאן ארבעת השלבים הבאים ומה כדאי להכין לשיחה המקצועית.   (142)
h1          פרטי הפרויקט התקבלו
```

**מבנה כותרות:**

- מה השלב הבא
- מה כדאי שיהיה מוכן לשיחה
- מסמכי ספק ואישורים
- צריכים תשובה מהירה כי אתם באמצע תמחור?
- בינתיים — איך אנחנו עובדים

**⚠ טענות לא מבוססות (2):**

- `headingOutline` — «מסמכי ספק ואישורים»
  - On a confirmation page this reads as 'here are our certificates'. Only the licence is available; ניכוי מס, ניהול ספרים, ביטוח צד ג׳, ביטוח עבודות קבלניות and פנקס הקבלנים are all pending in SUPPLIER_PACK. The live thanks.ts handles this correctly by asking the client what they will need ('דרישות רכש מצידכם — אישורים וביטוחים שתצטרכו מאיתנו') rather than claiming to hold them.
  - **במקום:** אילו אישורים תצטרכו מאיתנו — כדאי לציין בשיחה
- `headingOutline` — «צריכים תשובה מהירה כי אתם באמצע תמחור?»
  - Implies a fast turnaround. `fact.response-time` (P1) is open. The live thanks.ts goes further ('התקשרו ונאמר לכם מיד אם זה בטווח שלנו') — a call-answered promise with no hours on record. Carrying it into a heading hardens it.
  - **במקום:** באמצע תמחור? התקשרו והפנייה תיבדק בשיחה

**✕ לא תואם לקוד:**

- noindex={true}, so both "התיאור (95 תווים) קצר מהמינימום 140" and "34 תווים פנויים" are SERP arguments that do not apply. internalLinksOut lists 7 targets; THANKS.contracting.links (thanks.ts:60-64) is exactly three: /contracting/process/, /contracting/builders/, /contracting/infrastructure/. /contracting/commercial/, /projects/, /about/, /contact/ are chrome-only. Title 19 chars / 26 rendered and description 95 chars both confirmed; the unsupported-receipt claim is correct — integration.lead-endpoint is status "missing" in gaps.ts.
  - **תיקון:** Drop the SERP-length and unused-title-space arguments; keep the receipt-claim finding. Cut the link list to the three THANKS entries.

**קישורים פנימיים מוצעים:** /contracting/process/ · /contracting/builders/ · /contracting/infrastructure/ · /contracting/commercial/ · /projects/ · /about/ · /contact/

**חוסרים:**

- זהו העמוד היחיד באתר שאליו מגיע אך ורק לקוח B2B שכבר המיר — ואין בו ולו נכס אחד להעביר הלאה. אין תיק ספק להורדה (asset.supplier-pack), אין אישור ביטוח עבודות קבלניות (fact.insurance), אין סיווג בפנקס הקבלנים (fact.contractor-registry) ואין Case Study קבלני (case.contracting.first). קבלן שרוצה להעביר את זה לרכש שלו חייב להמתין לשיחה.
- המסירה לוואטסאפ הרסנית דווקא כאן. קבלן מילא עשרה שדות, ואז נזרק לחלון וואטסאפ עם היצף של שורות "מפתח: ערך" בעברית. הוא נראה כמו טופס שנשבר, לא כמו עסק מסודר — ובדיוק הקהל שהכי רגיש לזה.
- אין מייל אישור. ללא נקודת קצה אין דבר שנכנס לתיבה של הקבלן, כלומר אין לו כלום להעביר, לתייק או לחפש בעוד שבועיים. לקוח פרטי סולח על זה; רכש לא.
- אין התחייבות ללוח זמנים למענה, בעמוד שכל תוכנו הוא לוחות זמנים. "נחזור אליכם" מול קבלן שנמצא באמצע תמחור עם דד-ליין הוא הפער הגדול ביותר בעמוד.
- אין שם ואין תפקיד של מי שיחזור, ואין גודל צוות (fact.team.size). הליד הקבלני שאל בדיוק את השאלה הזו בטופס ולא קיבל עליה מילה בחזרה.
- התוכן הקיים (ארבעת השלבים ורשימת ההכנה ב-THANKS.contracting) הוא מהחזק באתר ואין לגעת בו — הבעיה היא רק שהוא לא מלווה באף מסמך.
- קישורים פנימיים סבירים — /contracting/process/, /contracting/builders/, /contracting/infrastructure/ — אבל חסר /projects/ ו-/about/, ולא במקרה: אין שם עדיין מה להראות לקהל הזה.

**מפרט המרה:**

- **CTA ראשי:** חיוג ל-054-665-6076 — ממוסגר כ"אתם באמצע תמחור? נאמר לכם מיד אם זה בטווח שלנו". זו ההצעה היחידה בעמוד שיש לה ערך מיידי לקבלן
- **CTA משני:** הורדת תיק ספק — רישיון, אישור ניהול ספרים, ניכוי מס במקור, ביטוח צד ג׳ וחבות מעבידים, ביטוח עבודות קבלניות (חסום על asset.supplier-pack; זהו הפער התחרותי החזק ביותר שזוהה — אף אחד מ-29 המתחרים לא מציע אותו)
- **מה נדרש כדי לבנות אמון:**
  - מספר פנייה, ואישור בכתב שנכנס למייל
  - תיק ספק להורדה בלחיצה אחת
  - ביטוח עבודות קבלניות וצד ג׳ — כן/לא והיקף
  - רישום וסיווג בפנקס הקבלנים, או אמירה מפורשת שאין
  - גודל צוות קבוע ולפי פרויקט, ומי מנהל בשטח
  - היקף הפרויקט הגדול ביותר שבוצע, ביחידה כלשהי
  - Case Study קבלני אחד, ולו יחיד
  - רישיון חשמלאי ראשי 991433
- **התנגדויות:**
  - כמה זמן עד שאקבל התייחסות — לא נאמר
  - האם הם בכלל בסדר הגודל של הפרויקט שלי
  - יש להם ביטוח עבודות קבלניות ואישורים שהרכש שלי ידרוש
  - כמה אנשים הם מביאים לאתר, ומה קורה אם הם עסוקים
  - מה בדיוק אשלח לרכש שלי, ומתי
  - לא ראיתי אצלם אף פרויקט קבלני — רק סולארי ביתי
  - האם הם רשומים בפנקס הקבלנים
- **מסלול המרה:** הליד הקבלני קיים — התפקיד של העמוד הוא לקצר את מחזור המכירה, לא לייצר פנייה נוספת. שלושה מהלכים: (1) להגדיר במדויק את ארבעת השלבים הבאים כדי שהקבלן ידע שיש כאן תהליך ולא אלתור, (2) לבקש מראש תוכניות או כתב כמויות ולוח זמנים, כך שהשיחה הראשונה כבר תהיה שיחת ביצוע, (3) לתת נכס להורדה שאפשר להעביר לרכש מיד — זה מה שמדלג על שבועיים של המתנה. במקביל: הרחבת סל דרך עמודי המשנה הקבלניים, וחיוג למי שנמצא בלחץ תמחור.

---

## /thank-you/solar/

**מילת מפתח ראשית:** אישור בקשה למערכת סולארית  
**כוונת חיפוש:** navigational  
**מילות משנה:** בדיקת התאמה למערכת סולארית התקבלה · מה בודקים לפני התקנת מערכת סולארית

**מה לא בסדר בכותרת הנוכחית:**

> הכותרת "בקשת בדיקת ההתאמה התקבלה" (31 תווים כולל המותג) כתובה באוצר המילים הפנימי של האתר, לא של המבקר. הוא חושב שביקש הצעה למערכת סולארית; "בדיקת התאמה" הוא שם התהליך שלנו. חמור מכך — אין בכותרת את המילה "סולארי" ולו פעם אחת, ולכן משלושת עמודי התודה זהו הקשה ביותר לזיהוי בדוח מבוסס כותרת, ובלשונית הוא נראה כמו כל פנייה אחרת. התיאור (74 תווים) הוא ה-lede כפי שהוא, קצת יותר מחצי המינימום של 140.

**מוצע:**

```
title       הבקשה למערכת סולארית התקבלה | RNRG   (34)
description הבקשה לבדיקת התאמה נקלטה. נבדוק שטח פנוי, סוג התקנה, החיבור החשמלי והיתרים. כאן מה שנבדק עכשיו, ומה לשלוח כדי שההערכה תהיה מדויקת ולא ממוצעת.   (141)
h1          הבקשה התקבלה — נבדוק התאמה למערכת סולארית
```

**מבנה כותרות:**

- מה נבדק עכשיו
- מה יעזור לנו לדייק
- שליחת חשבון החשמל ותמונת הגג
- מה לא נבטיח לכם
- יש שאלה שקשה לכתוב בטופס?
- בינתיים — אגירת אנרגיה ופרויקטים שבוצעו

**✕ לא תואם לקוד:**

- noindex={true}, so "התיאור (74 תווים) ... קצת יותר מחצי המינימום של 140" does not apply. internalLinksOut lists 7 targets; THANKS.solar.links (thanks.ts:84-88) is exactly three: /solar/, /solar/storage/, /projects/. /solar/residential/, /faq/, /about/, /electrical/three-phase/ are chrome-only. Title 24 chars / 31 rendered and description 74 chars both confirmed, as is the absence of "סולארי" from the title.
  - **תיקון:** Drop the description-length argument; keep the internal-vocabulary and missing-keyword findings. Cut the link list to the three THANKS entries.

**קישורים פנימיים מוצעים:** /solar/ · /solar/storage/ · /solar/residential/ · /projects/ · /faq/ · /about/ · /electrical/three-phase/

**חוסרים:**

- העמוד מבקש חשבון חשמל אחרון, תמונת גג ותמונת לוח — ולא נותן שום דרך לשלוח אותם. קישור וואטסאפ מוכן מראש, שכבר נושא את מספר הפנייה בהודעה, הופך רשימה פסיבית לפעולה, ומביא את המסמך היחיד שקובע גודל מערכת עוד לפני השיחה. זה השיפור החזק ביותר בעמוד והוא לא דורש אף עובדה חדשה.
- מסלול האסדרה בפועל אינו ידוע (fact.solar-regulatory-track). הטקסט הישן דיבר על "מסלול ירוק", שם שאינו רגולטורי היום — ההסדרה מעוגנת באמות מידה 70104 מ-15.1.2025. העמוד מזכיר היתרים ואסדרה ברשימת "מה נבדק" בלי לנקוב במסלול, וזה נכון עד שהעובדה תיסגר, אבל זה גם החור הבולט ביותר בתוכן.
- אין לוח זמנים לתהליך — לא למענה, לא להערכה, ולא לביצוע. הסולארי הוא הענף עם ציפיות הזמן הבלתי מציאותיות ביותר, ובדיוק כאן אין מילה.
- הפרט הטכני הכי טוב בעמוד — חיבור חד-פאזי מוגבל ל-5 קילוואט ומעבר לכך נדרש תלת-פאזי — קבור בעמוד noindex. הוא צריך להופיע גם ב-/solar/residential/ וב-/electrical/three-phase/, שם הוא יכול לדרג ולחבר בין שני הענפים.
- הקישור ל-/projects/ מפנה לגלריה שממנה הוסרו תשעה מתוך שנים-עשר תצלומים (provenance.project-photos). הפרטים — שם, יישוב, הספק — נשארו וזה תקין, אבל ההוכחה הוויזואלית דקה בהרבה ממה שהעמוד מרמז.
- אין הצהרה מפורשת שלא יינתן מספר חיסכון גורף. מחשבון ה-90% הוסר מסיבה טובה, אבל המתחרים כן נוקבים במספר — ואמירה יזומה "לא נבטיח אחוז חיסכון לפני שראינו את חשבון החשמל שלכם" הופכת חיסרון לבידול.
- אין פנים, אין שם, אין זמן תגובה (photo.owner.portrait, fact.response-time).

**מפרט המרה:**

- **CTA ראשי:** שליחת חשבון החשמל האחרון ותמונת הגג בוואטסאפ, בקישור מוכן מראש שכבר נושא את מספר הפנייה — זו הפעולה שהופכת הערכה ממוצעת להערכה על הנכס הזה
- **CTA משני:** חיוג ל-054-665-6076 — למי שיש שאלה שקשה לכתוב בטופס
- **מה נדרש כדי לבנות אמון:**
  - מספר פנייה
  - רישיון חשמלאי ראשי 991433 — הבידול המרכזי: החשמל וההתקנה תחת רישיון אחד, בעוד מתקינים רבים מוסרים את החלק החשמלי הלאה
  - פעילות סולארית מאז 2018, שהתחילה במערכות מנותקות רשת לקרוואנים
  - פרויקטים סולאריים עם שם, יישוב והספק
  - שם מסלול האסדרה שבו מגישים בפועל (חסום על fact.solar-regulatory-track)
- **התנגדויות:**
  - כמה זה יעלה ומה ההחזר — וכאן במכוון לא יינקב מספר
  - כמה זמן לוקח כל התהליך, כולל האסדרה
  - האם החיבור החד-פאזי שלי מגביל אותי, וכמה יעלה לעבור לתלת-פאזי
  - האם צריך היתר בנייה
  - מה קורה בהפסקת חשמל, ומה בעצם נותנת אגירה
  - מי מבצע בפועל את החלק החשמלי — או שהוא נמסר לקבלן משנה
- **מסלול המרה:** הליד הסולארי קיים, והמחסום הבא אינו שכנוע אלא נתונים: בלי חשבון חשמל אי אפשר לתת גודל מערכת, ובלי גודל מערכת אין מחיר — ואז נופלים לממוצע, שזו בדיוק הפרקטיקה שהאתר סירב לה כשהמחשבון הוסר. לכן ההמרה כאן היא מסמך ולא שיחה: קישור וואטסאפ מוכן מראש עם מספר הפנייה מביא חשבון חשמל ותמונת גג בתוך דקות. מהלך שני: /projects/ לחיזוק ההחלטה, /solar/storage/ להרחבת העסקה, ו-/electrical/three-phase/ למי שהתגלה כמוגבל ב-5 קילוואט — הפניה שגם משרתת ליד נוסף בענף אחר.

---

## /about/

**מילת מפתח ראשית:** דרגות רישיון חשמלאי  
**כוונת חיפוש:** informational  
**מילות משנה:** רוני חג׳ג׳ חשמלאי · מה מותר לחשמלאי ראשי · רישיון חשמלאי 991433 · הנדסאי חשמל · איך בודקים רישיון של חשמלאי

**מה לא בסדר בכותרת הנוכחית:**

> "רוני חג׳ג׳ — הנדסאי חשמל וחשמלאי ראשי 991433" (44 תווים, 51 עם הסיומת ‎| RNRG‎ ש-Base.astro מוסיף). מוביל נכון עם השם, אבל מבזבז את הזנב על מספר רישיון שאף אחד לא מקליד בחיפוש, כופל את המילה "חשמל" פעמיים, ובעיקר — לא מכיל את מילת המפתח היחידה שהעמוד הזה באמת יכול לזכות בה: דרגות הרישיון. טבלת LICENCE_CLASSES היא הנכס שאין לאף מתחרה, והכותרת לא רומזת עליה במילה.

**מוצע:**

```
title       רוני חג׳ג׳ — חשמלאי ראשי ודרגות רישיון החשמל   (44)
description מי עומד מאחורי RNRG: רוני חג׳ג׳, הנדסאי חשמל ובעל רישיון חשמלאי ראשי 991433. מה כל דרגת רישיון מתירה לתכנן ולבצע, ואיך לאמת רישיון של כל בעל מקצוע.   (147)
h1          רוני חג׳ג׳ — חשמלאי ראשי בעל רישיון 991433
```

**מבנה כותרות:**

- איך זה התחיל: מערכות סולאריות לקרוואנים, 2018
- שלושה תחומים תחת רישיון אחד: חשמל לבית, קבלנות ביצוע, סולארי
- מה רישיון חשמלאי ראשי באמת מתיר
- דרגות רישיון חשמל בישראל — הטבלה המלאה
- איך לבדוק רישיון של בעל מקצוע, לא רק שלנו
- עובדות על העסק במספרים
- מה לקוחות אומרים
- לדבר על עבודה או על פרויקט

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «עובדות על העסק במספרים»
  - 'במספרים' is the exact slot the old site filled with 'מעל 8 שנות ניסיון' (business.ts UNVERIFIED). `fact.experience.years` and `fact.team.size` are both open P0 and pages.ts marks this route blockedBy both. The live page names the section plainly 'עובדות' and renders only counted values with a note that unknowns are marked, not estimated — the rename adds pressure to fill it.
  - **במקום:** עובדות — מה נספר ומה עדיין לא ידוע

**✕ לא תואם לקוד:**

- internalLinksOut claims 11 targets; src/pages/about.astro contains zero literal href attributes. Its only outbound links come from Breadcrumbs, Testimonials (/reviews/) and CtaBand track="private" (/quote/?track=private, /contact/). /quote/?track=contracting is therefore not on the page at all, and /electrical/, /contracting/, /contracting/process/, /solar/, /projects/, /faq/, /areas/ are chrome-only. The title critique verifies exactly: 44 chars / 51 rendered, description 114 chars, and LICENCE_CLASSES is imported and rendered on the page.
  - **תיקון:** Reduce to /reviews/, /quote/?track=private, /contact/. Remove /quote/?track=contracting.

**קישורים פנימיים מוצעים:** /electrical/ · /contracting/ · /contracting/process/ · /solar/ · /projects/ · /reviews/ · /faq/ · /areas/ · /quote/?track=contracting · /quote/?track=private · /contact/

**חוסרים:**

- אפס קישורים פנימיים בגוף העמוד. הפסקה "היום העסק פועל בשלושה תחומים" מונה את שלושת הענפים — כולל הקבלני — ולא מקשרת לאף אחד מהם. זה הפער הגדול ביותר בעמוד, והוא תיקון של שלוש מילים.
- ה-CTA היחיד הוא CtaBand track="private". קבלן או יזם שקורא את עמוד האודות — בדיוק הקהל שהעמוד אמור לשכנע — לא מקבל שום מסלול ל-/quote/?track=contracting.
- טבלת דרגות הרישיון היא הנכס הייחודי היחיד כאן, ואין לה id לעיגון, אין קישור אליה מ-/faq/ (שם יושבת שאלה על אותו נושא בדיוק), והכותרת שלה לא מכילה את מילת המפתח בצורה שאפשר לדרג עליה.
- photo.owner.portrait (P0) — עמוד אודות בלי פנים. גם ה-Person schema ריק מ-image, ולכן אין ישות אדם מצולמת לגוגל.
- ל-Person schema אין sameAs. אין חיבור בין הישות באתר לפרופיל Google Business (integration.gbp) או לכל פרופיל אחר — זו ההצהרה הזולה ביותר שמחברת את העמוד ל-Local SEO.
- fact.experience.years (P0) — העמוד מציג רק "העסק פועל מאז 2018". ההתנגדות "כמה ניסיון יש לו" נשארת פתוחה, ושתי שורות ה-dl (ניסיון, גודל צוות) מוסתרות בפרודקשן.
- fact.team.size (P0) + photo.team.onsite (P0) — בלעדיהם העמוד לא יכול לענות על "עסק או איש אחד", שהיא ההתנגדות המרכזית של הקהל הקבלני.
- fact.credentials.extra (P1) — אין רשימת הסמכות מעבר ל-991433, ולעמוד סמכות זה חלל בולט.
- אין datePublished/dateModified ואין תאריך עדכון גלוי. לעמוד E-E-A-T זה סיגנל זול שחסר.
- סיפור הקרוואנים — הבידול האמיתי — הוא שלוש שורות. אין בו ולו פרט טכני אחד (איזה סוג מערכות, איזו אגירה) שיהפוך אותו מאנקדוטה להוכחת ידע, והוא לא מקשר ל-/solar/storage/ שנבנה בדיוק על הניסיון הזה.

**מפרט המרה:**

- **CTA ראשי:** בקשת הצעת מחיר עם בחירת מסלול — /quote/ ‏(פרטי / קבלני / סולארי), ולא CTA פרטי יחיד
- **CTA משני:** חיוג ישיר 054-665-6076
- **מה נדרש כדי לבנות אמון:**
  - מספר רישיון ניתן לאימות עם הסבר איפה בודקים אותו — קיים (991433), צריך להפוך אותו לניתן להעתקה
  - טבלת דרגות רישיון עם מקור סטטוטורי (תקנות החשמל, התשמ״ה-1985) — קיימת, זה הנכס החזק בעמוד
  - תמונת בעל העסק — חסרה, photo.owner.portrait ‏P0
  - שנת תחילת העיסוק בחשמל בנפרד מ-2018 — חסרה, fact.experience.years ‏P0
  - גודל צוות ומי מנהל בשטח — חסר, fact.team.size ‏P0
  - קישור לפרופיל Google Business — חסר, integration.gbp ‏P0
- **התנגדויות:**
  - מי האדם הזה בכלל — אין תמונה, אין פנים, רק שם ומספר
  - "חשמלאי ראשי" כותבים כולם. מה זה מתיר בפועל ואיך אני מאמת שזה נכון?
  - עסק אמיתי או איש אחד עם טנדר — כמה אנשים עומדים מאחורי זה
  - כמה שנים הוא עוסק בחשמל, לא כמה שנים העסק רשום
  - אם כל התיק המתועד שלו סולארי, למה שאתן לו את החלק החשמלי בפרויקט שלם
- **מסלול המרה:** אודות → זיהוי עצמי באחד משלושת התחומים דרך קישור בגוף הטקסט → עמוד הענף → /quote/ עם ה-track הנכון. מסלול הוכחה: אודות → /projects/ → עמוד פרויקט → /quote/?track=solar. מסלול קבלני שחסר לגמרי היום: אודות → /contracting/process/ → /quote/?track=contracting.

---

## /projects/

**מילת מפתח ראשית:** פרויקטים סולאריים שבוצעו  
**כוונת חיפוש:** commercial  
**מילות משנה:** תיק עבודות חשמלאי · מערכת סולארית על גג רפת · מערכת סולארית לבניין משותף · מערכת סולארית 22 קילוואט · מערכת אוף גריד למבנה ציבור · מערכת סולארית על האנגר

**מה לא בסדר בכותרת הנוכחית:**

> "פרויקטים — לוחות, תשתיות ומערכות סולאריות" מבטיח שלושה סוגי עבודה, ושני הראשונים לא קיימים בעמוד: כל עשרת הפרויקטים ב-projects.ts הם סולאריים, והעמוד עצמו מצהיר על כך בסעיף "מה עוד לא מופיע כאן". הכותרת סותרת את התוכן שמתחתיה — זה גם אי-התאמת כוונה (מי שלחץ על "לוחות" נוטש) וגם בדיוק סוג ההצהרה הלא-מגובה שבגללה הוסרו תשע התמונות. בנוסף "פרויקטים" לבדו אינו שאילתה.

**מוצע:**

```
title       פרויקטים שבוצעו — 10 מערכות סולאריות, 86 kWp   (44)
description עשרה פרויקטים סולאריים שבוצעו בעשרה יישובים, 86 kWp מצטבר: בתים פרטיים, בניין משותף, גג רפת, האנגר תעשייתי ומבנה ציבור. לכל פרויקט שם, מיקום, סוג מערכת והספק.   (158)
h1          פרויקטים סולאריים שבוצעו
```

**מבנה כותרות:**

- 10 פרויקטים, 86 kWp, 10 יישובים
- סינון לפי סוג לקוח
- מערכות מחוברות רשת
- מערכות מנותקות רשת ואגירה
- סככות סולאריות והתקנה על סככה קיימת
- מבנים חקלאיים ומסחריים: רפת, האנגר ומבנה ציבור
- מה עוד לא מופיע כאן
- לקבלנים וליזמים: איך להעריך אותנו כשאין עדיין תיק פרויקטים קבלני
- יישובים שבהם בוצעו העבודות

**⚠ טענות לא מבוססות (1):**

- `title, description, headingOutline` — «פרויקטים שבוצעו — 10 מערכות סולאריות, 86 kWp / עשרה פרויקטים סולאריים שבוצעו בעשרה יישובים, 86 kWp מצטבר... לכל פרויקט שם, מיקום, סוג מערכת והספק / 10 פרויקטים, 86 kWp, 10 יישובים»
  - Three problems. (a) The aggregate is 85.5 kWp, not 86 — Math.round hides a rounded-up figure that a headline then presents as exact. (b) It sums nine projects: beit-knesset-yona has no sizeKw, so '10 פרויקטים, 86 kWp' asserts a total for ten that only nine contribute to, and 'לכל פרויקט... והספק' is straightforwardly false for that project. (c) `provenance.project-photos` (P0, open) asks the owner 'אילו מהפרויקטים אכן בוצעו על ידינו' and states 'פרויקט שלא בוצע על ידינו — יורד'. Whether nine of these ten were executed by RNRG is an open question; putting the total in a title as a track record pre-empts the answer.
  - **במקום:** title: "פרויקטים סולאריים מתועדים — עשרה יישובים" · description: "עשרה פרויקטים סולאריים בעשרה יישובים: בתים פרטיים, בניין משותף, גג רפת, האנגר תעשייתי ומבנה ציבור. לתשעה מהם מצוין ההספק, ולכולם שם, מיקום וסוג מערכת."

**קישורים פנימיים מוצעים:** /projects/beit-knesset-yona-ganei-tikva/ · /projects/argaman-revivim/ · /projects/yaakobi-beit-ezra/ · /projects/saban-shtulim/ · /projects/sigalon-yavne/ · /projects/avishai-adi/ · /projects/amar-kfar-yona/ · /projects/sharabani-ben-zakai/ · /projects/gemini-metzer/ · /projects/lifshitz-klil/ · /solar/residential/ · /solar/commercial/ · /solar/storage/ · /areas/ · /contracting/ · /contracting/process/ · /reviews/ · /quote/?track=solar · /quote/?track=contracting

**חוסרים:**

- מלבד ה-lede וסעיף "מה עוד לא מופיע כאן", אין בעמוד ולו פסקת גוף אחת. זו רשת כרטיסים בלי טקסט שאפשר לדרג עליו, וה-H2 האמיתי היחיד הוא visually-hidden ("רשימת הפרויקטים").
- אפס קישורים מ-/projects/ לעמודי השירות. "מערכת על גג רפת" חייבת לקשר ל-/solar/commercial/, "אוף גריד עם אגירה" ל-/solar/storage/, "מערכת מחוברת רשת" ל-/solar/residential/. עמוד הוכחה שלא מזרים סמכות לעמודי הכסף מבזבז את עצמו.
- הסינון הוא JavaScript בלבד ולא משנה את ה-URL. אין כתובת שאפשר לקשר אליה או לאנדקס עבור "פרויקטים חקלאיים" או "בניין משותף", למרות שאלה בדיוק השאילתות שהעמוד יכול לזכות בהן.
- המסנן מבוסס customerType בלבד. גולש סולארי מחפש לפי סוג מערכת (מחוברת רשת / מנותקת / סככה) — הנתון קיים ב-systemType ולא מנוצל לסינון.
- provenance.project-photos (P0) — תשעה מתוך עשרה כרטיסים בלי תמונה. עמוד שכל תפקידו הוכחה ויזואלית מציג רשת כמעט ריקה, וזה משדר בדיוק את ההפך ממה שנועד.
- אין שנת ביצוע לאף פרויקט — השדה לא קיים בכלל ב-Project interface. "מתי זה בוצע" היא שאלה שכל מעריך שואל, ובלי תאריך התיק נראה תלוש.
- case.contracting.first (P0) — אפס פרויקטים קבלניים. ההצהרה הכנה על כך נכונה, אבל היא לא מלווה בשום תחליף הוכחה לקבלן: אין רשימת סוגי עבודה שבוצעו, אין דוגמת כתב כמויות, אין תיאור מסירה.
- CtaBand track="solar" בלבד. קבלן שהגיע מ-/contracting/ כדי לראות עבודות לא מקבל מסלול ל-/quote/?track=contracting באף נקודה בעמוד.
- ה-ItemList schema מפרט 10 פריטים בשם ו-URL בלבד — בלי description ובלי image, ולכן לא נושא שום מידע שגוגל יכול להציג.
- רשימת היישובים ב-/areas/ נבנית מאותו מקור נתונים בדיוק, ואין קישור הדדי בין שני העמודים.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה למערכת סולארית — /quote/?track=solar, מוצמד לכרטיס הפרויקט הדומה ולא רק בתחתית העמוד
- **CTA משני:** מעבר לפרויקט הדומה לשלי — לפי סוג לקוח וסוג מערכת
- **מה נדרש כדי לבנות אמון:**
  - שם לקוח, יישוב, סוג מערכת והספק לכל פרויקט — קיים, וזה הבסיס האמיתי של העמוד
  - תמונה אמיתית לכל פרויקט — חסרה לתשעה מתוך עשרה, provenance.project-photos ‏P0
  - שנת ביצוע לכל פרויקט — לא קיימת בסכימת הנתונים בכלל
  - Case Study קבלני אחד — case.contracting.first ‏P0
  - אישור לקוח לפרסום שמו וסיפור הפרויקט — case.details.solar ‏P0
- **התנגדויות:**
  - אלה באמת הפרויקטים שלהם? ברוב הכרטיסים אין תמונה בכלל
  - עשו פעם משהו בהיקף שלי — 22 קילוואט זה המקסימום שאני רואה
  - הכול כאן סולארי. הם בכלל מבצעים חשמל לפרויקט בנייה?
  - עשרה פרויקטים בסך הכול זה מעט לעסק שפועל מ-2018
  - מתי זה בוצע — אין תאריך לאף פרויקט
- **מסלול המרה:** אינדקס → סינון לפי סוג לקוח או סוג מערכת → עמוד פרויקט → CTA בהקשר ("מערכת דומה לבית שלי") → /quote/?track=solar. מסלול קבלני מקביל שחסר היום: אינדקס → סעיף "מה עוד לא מופיע כאן" → "איך להעריך אותנו בלי תיק קבלני" → /contracting/process/ → /quote/?track=contracting.

---

## /projects/beit-knesset-yona-ganei-tikva/

**מילת מפתח ראשית:** מערכת אוף גריד לבית כנסת  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת סולארית למבנה ציבור · אגירת אנרגיה לבית כנסת · מערכת מנותקת רשת בגני תקווה · מערכת סולארית עם סוללות

**מה לא בסדר בכותרת הנוכחית:**

> התבנית ‎`${title}, ${location} — ${systemType}`‎ מייצרת כאן "בית כנסת יונה, גני תקווה — מערכת אוף גריד עם אגירת אנרגיה" — 57 תווים, 64 אחרי הסיומת ‎| RNRG‎ שנוספת ב-Base.astro. זו החריגה הארוכה מבין העשר וגוגל יקצץ אותה. בנוסף היא פותחת בשם הלקוח, שאף אחד לא מחפש, ודוחפת את מילות המפתח ("אוף גריד", "אגירת אנרגיה") לסוף — בדיוק לאזור שנחתך.

**מוצע:**

```
title       אוף גריד ואגירה — בית כנסת יונה, גני תקווה   (42)
description מערכת סולארית מנותקת רשת עם מערך אגירת אנרגיה במבנה ציבור — בית כנסת יונה בגני תקווה. שלוש תמונות מהאתר עצמו, סוג המערכת והמיקום, בלי סיפור שלא נמסר לנו.   (153)
h1          בית כנסת יונה, גני תקווה
```

**מבנה כותרות:**

- מפרט הפרויקט: סוג מערכת, סוג לקוח
- תיעוד מצולם מהאתר
- הסיפור המלא של הפרויקט
- מערכות אוף גריד עם אגירה — למי זה מתאים
- פרויקטים דומים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «הסיפור המלא של הפרויקט»
  - Contradicted by the page's own description ('בלי סיפור שלא נמסר לנו'). challenge/solution/outcome are undefined for this project as for all others; `case.details.solar` is open P0. This is the only project with real photographs, so the 'תיעוד מצולם' heading is fine here — the story heading is not.
  - **במקום:** מה עוד לא פורסם על הפרויקט הזה

**קישורים פנימיים מוצעים:** /solar/storage/ · /solar/ · /projects/ · /projects/avishai-adi/ · /projects/lifshitz-klil/ · /areas/ · /quote/?track=solar · /contact/

**חוסרים:**

- זה הפרויקט היחיד באתר עם שלושה צילומים אמיתיים ברזולוציה מקורית, כולל תצלום תהליך — והוא לא מנוצל בשום מקום אחר. הוא צריך להיות הנכס הוויזואלי של /solar/storage/ ושל /projects/.
- זה גם הפרויקט היחיד ללא sizeKw. שורת ההספק פשוט לא מוצגת, ומבנה ציבור ששוקל מערכת יחפש בדיוק את המספר הזה.
- case.details.solar (P0) — אין אתגר, פתרון, משך, גודל צוות או תוצאה. במבנה ציבור זה קריטי במיוחד: מה גודל האגירה, לכמה שעות היא מספיקה, ואיך התנהלה העבודה במבנה פעיל.
- העמוד הוא מבוי סתום: אין ממנו קישור לאף פרויקט אחר, לאף עמוד שירות ולא ל-/areas/. רק ה-breadcrumb מוביל החוצה.
- alt של התמונות נבנה מהתבנית ומסתיים ב-"(2)", "(3)" — מספר סידורי במקום תיאור של מה שרואים בפריים. שלוש תמונות אמיתיות ראויות לשלושה תיאורים אמיתיים.
- ה-CreativeWork schema לא כולל image למרות שיש כאן שלוש תמונות תקינות עם רשומה ב-manifest.
- מבנה ציבור הוא סוג לקוח שאין לו עמוד שירות באתר. או שהעמוד הזה מקשר ל-/solar/commercial/ בהסבר, או שנוצר פער בין הוכחה לבין הצעה.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה למערכת אגירה — /quote/?track=solar
- **CTA משני:** מעבר ל-/solar/storage/ — מה מערכת אגירה באמת פותרת
- **מה נדרש כדי לבנות אמון:**
  - שלוש התמונות האמיתיות — קיימות, וזו ההוכחה החזקה ביותר באתר כולו
  - הספק המערכת וקיבולת האגירה — חסרים לחלוטין בפרויקט הזה
  - גודל צוות ומשך ביצוע — case.details.solar ‏P0
  - אישור בית הכנסת לפרסום השם — case.details.solar
- **התנגדויות:**
  - כמה שעות המערכת מחזיקה בלי הרשת
  - מה קורה כשהסוללות נגמרות באמצע אירוע
  - האם אפשר להוסיף אגירה למערכת קיימת
  - מי מטפל בתחזוקה של מבנה ציבור
- **מסלול המרה:** עמוד פרויקט → "מערכות אוף גריד עם אגירה — למי זה מתאים" → /solar/storage/ → /quote/?track=solar. מסלול משני לגולש שמזהה את עצמו כמבנה ציבור או עסק: → /solar/commercial/ → /quote/?track=solar.

---

## /projects/argaman-revivim/

**מילת מפתח ראשית:** מערכת סולארית 22 קילוואט לבית פרטי  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת סולארית מחוברת רשת · מערכת סולארית גדולה לבית · מערכת סולארית בקיבוץ · כמה קילוואט צריך על גג בית

**מה לא בסדר בכותרת הנוכחית:**

> "בית משפחת ארגמן, קיבוץ רביבים — מערכת מחוברת רשת" (48 תווים, 55 אחרי הסיומת). נכנס באורך, אבל פותח בשם משפחה שאיש לא מחפש ומשאיר את הנתון היחיד שיש לו ביקוש — 22 קילוואט, המערכת הגדולה באתר — מחוץ לכותרת לגמרי.

**מוצע:**

```
title       מערכת 22 קילוואט מחוברת רשת — קיבוץ רביבים   (42)
description מערכת סולארית מחוברת רשת בהספק 22 קילוואט על גג בית פרטי בקיבוץ רביבים — הגדולה מבין הפרויקטים המתועדים באתר. סוג המערכת, ההספק והמיקום, כפי שתועדו בפועל.   (154)
h1          בית משפחת ארגמן, קיבוץ רביבים
```

**מבנה כותרות:**

- מפרט הפרויקט: 22 kWp, מחוברת רשת, לקוח פרטי
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- מערכת של 22 קילוואט — מה זה דורש מהגג ומהחיבור
- פרויקטים דומים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - Both sections stand on content that does not exist. This project has no `image` and no `gallery` in projects.ts — its photograph is in quarantine/projects/ as a suspected stock image ('אדמה אדומה לטריטית... אינן של קיבוץ רביבים שבנגב', SRC-SOLAR-001). And challenge/solution/outcome are undefined for every project in the file; `case.details.solar` is open P0.
  - **במקום:** להסיר 'תיעוד מצולם' לגמרי, ולהחליף 'הסיפור המלא של הפרויקט' ב-'מה עוד לא פורסם על הפרויקט הזה' עם בלוק Pending על case.details.solar.

**קישורים פנימיים מוצעים:** /solar/residential/ · /electrical/three-phase/ · /projects/ · /projects/yaakobi-beit-ezra/ · /projects/sigalon-yavne/ · /areas/ · /quote/?track=solar

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה. זה הפרויקט הגדול ביותר באתר, ולכן זה גם הפער הוויזואלי היקר ביותר.
- 22 קילוואט מחייב חיבור תלת-פאזי, וזו נקודת קישור מסחרית מובהקת ל-/electrical/three-phase/ — הקישור לא קיים, למרות שהוא מסביר לגולש למה מערכת גדולה היא לא רק עניין של גג.
- case.details.solar (P0) — אין שטח גג, אין מספר פאנלים, אין סוג ממיר, אין משך ביצוע. אלה בדיוק הפרטים שהופכים "22 קילוואט" ממספר להוכחת יכולת.
- העמוד מוביל רק ל-/projects/ דרך ה-breadcrumb ול-CtaBand הכללי. אין קישור לעמוד שירות ואין קישור לפרויקט אחר.
- אין השוואה או הקשר: 22 קילוואט מול 3 קילוואט זה פער של פי שבעה בין הפרויקטים באתר, ואף עמוד לא מסביר לגולש איפה הוא נמצא על הסקאלה.
- fact.solar-regulatory-track (P1) — מערכת בסדר גודל כזה כרוכה במסלול אסדרה, והעמוד לא נוגע בשאלה מי מטפל בהגשה.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה — כמה קילוואט הגג שלי נושא, /quote/?track=solar
- **CTA משני:** מעבר ל-/solar/residential/ — איך נקבע גודל המערכת
- **מה נדרש כדי לבנות אמון:**
  - הספק ומיקום מתועדים — קיימים
  - תמונת המערכת — חסרה, provenance.project-photos ‏P0
  - שטח גג, מספר פאנלים וסוג ממיר — לא קיימים בדאטה
  - משך ביצוע וגודל צוות — case.details.solar ‏P0
- **התנגדויות:**
  - הגג שלי בכלל נושא מערכת בגודל כזה
  - צריך תלת פאזי בשביל זה? כמה זה מסבך
  - כמה זמן לוקח להתקין מערכת כזאת
  - מי מטפל בהגשה ובאישור מול חברת החשמל
- **מסלול המרה:** עמוד פרויקט → "מה מערכת של 22 קילוואט דורשת מהגג ומהחיבור" → /solar/residential/ או /electrical/three-phase/ → /quote/?track=solar.

---

## /projects/yaakobi-beit-ezra/

**מילת מפתח ראשית:** מערכת סולארית על גג רפת  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת סולארית למבנה חקלאי · סולארי לרפת · מערכת סולארית 20 קילוואט · סולארי במושב

**מה לא בסדר בכותרת הנוכחית:**

> "בית משפחת יעקובי, מושב בית עזרא — מערכת על גג רפת" (49 תווים, 56 אחרי הסיומת). על גבול הקיצוץ, ופותח בשם משפחה במקום ב-"מערכת סולארית על גג רפת" — שאילתה חקלאית אמיתית שאף עמוד אחר באתר לא מכוון אליה. גם ההספק, 20 קילוואט, נשאר מחוץ לכותרת.

**מוצע:**

```
title       מערכת סולארית על גג רפת — 20 kWp, מושב בית עזרא   (47)
description מערכת סולארית בהספק 20 קילוואט על גג רפת פעילה במושב בית עזרא. התקנה על מבנה חקלאי בשימוש — סוג המערכת, ההספק והמיקום כפי שתועדו, בלי הבטחות תשואה.   (147)
h1          בית משפחת יעקובי, מושב בית עזרא
```

**מבנה כותרות:**

- מפרט הפרויקט: 20 kWp, גג רפת, לקוח חקלאי
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- התקנה על גג מבנה חקלאי פעיל — מה שונה כאן
- פרויקטים דומים במבנים חקלאיים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - No photograph exists — SRC-SOLAR-002 is quarantined pending `provenance.project-photos`. No challenge/solution/outcome fields exist. A 'photographic documentation' heading on a page with no photograph is precisely the failure this rebuild exists to fix.
  - **במקום:** להסיר 'תיעוד מצולם'; 'הסיפור המלא של הפרויקט' → 'מה עוד לא פורסם על הפרויקט הזה' (Pending: case.details.solar)

**קישורים פנימיים מוצעים:** /solar/commercial/ · /solar/ · /projects/ · /projects/saban-shtulim/ · /projects/argaman-revivim/ · /areas/ · /quote/?track=solar · /contact/

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה, ובסגמנט החקלאי תמונה של גג רפת עם פאנלים היא כמעט כל ההוכחה.
- זה אחד משני הפרויקטים היחידים שה-FAQ מצטט במפורש ("ביצענו מערכת 20 קילוואט על גג רפת במושב בית עזרא") ואין קישור בין השניים — לא מכאן לשם ולא משם לכאן.
- אין קישור ל-/solar/commercial/, שהוא עמוד השירות היחיד שמכסה מבנים חקלאיים. הפרויקט הזה הוא ההוכחה המרכזית של אותו עמוד והוא לא מחובר אליו.
- case.details.solar (P0) — חסר הכול מהצד שמעניין בעל רפת: איך עובדים על גג של מבנה עם בעלי חיים בפנים, האם הייתה השבתה, איך נפתר עומס הגג ומה נעשה עם הצללה מציוד.
- העמוד לא מזכיר ולו במילה את הצד החשמלי — שהוא הבידול המוצהר של העסק ("החשמל וההתקנה תחת רישיון אחד"). במבנה חקלאי עם לוח ישן זו בדיוק נקודת המכירה.
- העמוד הוא מבוי סתום — אין קישור לפרויקט האנגר במושב שתולים, שהוא הפרויקט הדומה ביותר באתר.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה לגג חקלאי — /quote/?track=solar
- **CTA משני:** מעבר ל-/solar/commercial/ — מבנים חקלאיים ומסחריים
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג מבנה ומיקום — קיימים
  - תמונת ההתקנה על גג הרפת — חסרה, provenance.project-photos ‏P0
  - האם הייתה השבתה ולכמה זמן — case.details.solar ‏P0
  - הצהרה שהחיבור החשמלי בוצע תחת אותו רישיון — קיימת באתר, לא מופיעה בעמוד הזה
- **התנגדויות:**
  - הגג של הרפת עומד בעומס של מערכת
  - נצטרך להשבית את הרפת בזמן העבודה
  - מי מטפל בצד החשמלי ובלוח הישן
  - מה קורה לפאנלים באבק ובאמוניה של מבנה חקלאי
- **מסלול המרה:** עמוד פרויקט → "מה שונה בהתקנה על מבנה חקלאי פעיל" → /solar/commercial/ → /quote/?track=solar. גולש שמגיע מ-FAQ ("אפשר להתקין על גג של מבנה חקלאי?") צריך לנחות כאן ישירות.

---

## /projects/saban-shtulim/

**מילת מפתח ראשית:** מערכת סולארית על גג האנגר  
**כוונת חיפוש:** commercial  
**מילות משנה:** סולארי למבנה תעשייתי · מערכת סולארית 12 קילוואט · סולארי על מחסן · מערכת סולארית לעסק קטן

**מה לא בסדר בכותרת הנוכחית:**

> "בית משפחת סבן, מושב שתולים — מערכת על גג האנגר תעשייתי" — 54 תווים, 61 אחרי הסיומת ‎| RNRG‎. חורג מ-60 וייחתך. גם כאן שם המשפחה תופס את החזית ו-"האנגר תעשייתי", מילת המפתח היחידה עם ביקוש, נופלת בדיוק באזור הקיצוץ.

**מוצע:**

```
title       מערכת סולארית על האנגר — 12 kWp, מושב שתולים   (44)
description מערכת סולארית בהספק 12 קילוואט על גג האנגר תעשייתי במושב שתולים — סביבת עבודה תעשייתית ולא ביתית. סוג המערכת, ההספק והמיקום, כפי שתועדו בפרויקט הזה.   (148)
h1          בית משפחת סבן, מושב שתולים
```

**מבנה כותרות:**

- מפרט הפרויקט: 12 kWp, גג האנגר, לקוח חקלאי
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- גג האנגר או מחסן — מה בודקים לפני התקנה
- פרויקטים דומים במבנים חקלאיים ותעשייתיים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - No photograph. SRC-SOLAR-004 quarantined ('גג תעשייתי כחול רחב־ידיים... מול קו רקיע עירוני צפוף'). No story fields.
  - **במקום:** להסיר 'תיעוד מצולם'; 'הסיפור המלא של הפרויקט' → 'מה עוד לא פורסם על הפרויקט הזה' (Pending: case.details.solar)

**קישורים פנימיים מוצעים:** /solar/commercial/ · /contracting/commercial/ · /projects/ · /projects/yaakobi-beit-ezra/ · /projects/sharabani-ben-zakai/ · /areas/ · /quote/?track=solar

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה.
- סתירה קטנה בנתונים: customerType מסומן "חקלאי" בעוד ש-summary ו-systemType מדברים על האנגר תעשייתי. הכרטיס והמסנן יסווגו אותו לא נכון לגולש שמחפש מבנה תעשייתי.
- הפרויקט הזה מצוטט ב-FAQ ("מערכת 12 קילוואט על גג האנגר תעשייתי במושב שתולים") בלי קישור לכאן.
- case.details.solar (P0) — אין סוג גג (איסכורית? בטון?), אין שיטת עיגון, אין משך. בגג האנגר שיטת העיגון היא השאלה הראשונה של כל בעל מבנה.
- אין קישור ל-/contracting/commercial/ ולא ל-/solar/commercial/, ולכן ההוכחה הזו לא משרתת אף עמוד מסחרי.
- מבוי סתום — אין קישור לפרויקט הרפת בבית עזרא, המקבילה הישירה שלו.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה לגג האנגר או מחסן — /quote/?track=solar
- **CTA משני:** מעבר ל-/solar/commercial/ — מערכות למבנים בשטח 200 מ״ר ומעלה
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג מבנה ומיקום — קיימים
  - תמונת ההתקנה על גג ההאנגר — חסרה, provenance.project-photos ‏P0
  - סוג הגג ושיטת העיגון — לא קיימים בדאטה
  - האם המבנה המשיך לפעול בזמן ההתקנה — case.details.solar ‏P0
- **התנגדויות:**
  - גג איסכורית נושא מערכת? איך מעגנים בלי לנקב
  - נצטרך לעצור את הפעילות במבנה
  - 12 קילוואט מספיק לצריכה של עסק כמו שלי
  - מי מטפל בחיבור ובלוח של המבנה
- **מסלול המרה:** עמוד פרויקט → "מה בודקים בגג האנגר לפני התקנה" → /solar/commercial/ → /quote/?track=solar. בעל מבנה שגם צריך עבודת חשמל: → /contracting/commercial/ → /quote/?track=contracting.

---

## /projects/sigalon-yavne/

**מילת מפתח ראשית:** מערכת סולארית לבניין משותף  
**כוונת חיפוש:** commercial  
**מילות משנה:** סולארי לבניין דירות · מערכת סולארית על גג משותף · סולארי לוועד בית · מערכת סולארית 8 קילוואט

**מה לא בסדר בכותרת הנוכחית:**

> "רחוב סיגלון, יבנה — מערכת לבניין משותף" (38 תווים, 45 אחרי הסיומת). לא חורג, אבל פותח בשם רחוב חסר משמעות לחיפוש ומשאיר 15 תווים פנויים בלי לנצל אותם. "בניין משותף" הוא סגמנט שלם עם ביקוש עצמאי, וההספק לא מופיע בכלל.

**מוצע:**

```
title       מערכת סולארית לבניין משותף — 8 kWp, יבנה   (40)
description מערכת סולארית בהספק 8 קילוואט לבניין משותף ברחוב סיגלון ביבנה — התקנה שמחייבת תיאום בין דיירים ובין מונים. סוג המערכת, ההספק והמיקום, כפי שתועדו.   (145)
h1          רחוב סיגלון, יבנה
```

**מבנה כותרות:**

- מפרט הפרויקט: 8 kWp, בניין משותף
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- מערכת בבניין משותף — תיאום דיירים, גג משותף וחלוקת ייצור
- פרויקטים דומים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - No photograph. SRC-SOLAR-005 quarantined. No story fields.
  - **במקום:** להסיר 'תיעוד מצולם'; 'הסיפור המלא של הפרויקט' → 'מה עוד לא פורסם על הפרויקט הזה' (Pending: case.details.solar)

**קישורים פנימיים מוצעים:** /solar/residential/ · /electrical/panels/ · /projects/ · /projects/argaman-revivim/ · /areas/ · /quote/?track=solar · /contact/

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה.
- זה הפרויקט היחיד בכל האתר בקטגוריית "בניין משותף", ואין לו שום עמוד שירות שמכסה את הסגמנט. /solar/residential/ מדבר על בית ועל סככה, לא על גג משותף ועל חלוקת ייצור בין דיירים.
- summary אומר "התקנה הדורשת תיאום בין דיירים" — משפט שמרמז על הידע החשוב ביותר כאן ולא מפרט אותו. איך נפתרה שאלת הבעלות על הגג? מי משלם? איך מתחלק הייצור? זה בדיוק case.details.solar ‏P0.
- אין קישור ל-/electrical/panels/, למרות שבבניין משותף שאלת הלוח והמונים היא מרכזית והיא הצד שבו העסק מבודל.
- H1 "רחוב סיגלון" הוא הכותרת הכי חלשה מבין העשרה — לא שם לקוח, לא סוג לקוח, רק שם רחוב.
- מבוי סתום — אין קישור החוצה מלבד breadcrumb ו-CtaBand.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה לגג בניין משותף — /quote/?track=solar
- **CTA משני:** חיוג לשיחה על תיאום מול ועד בית — 054-665-6076
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג בניין ומיקום — קיימים
  - תמונת ההתקנה — חסרה, provenance.project-photos ‏P0
  - הסבר איך נפתר התיאום בין הדיירים בפועל — case.details.solar ‏P0
  - הסבר על חלוקת הייצור והמונים — לא קיים באתר בכלל
- **התנגדויות:**
  - הגג משותף — צריך הסכמה של כל הדיירים?
  - איך מתחלק הייצור בין הדירות
  - מי אחראי על התחזוקה אחרי ההתקנה
  - מה קורה אם דייר אחד מתנגד
- **מסלול המרה:** עמוד פרויקט → "מערכת בבניין משותף — תיאום, גג משותף וחלוקת ייצור" → /solar/residential/ → /quote/?track=solar. יזם או ועד בית שצריך גם עבודת לוחות: → /electrical/panels/.

---

## /projects/avishai-adi/

**מילת מפתח ראשית:** מערכת סולארית מנותקת רשת לבית  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת אוף גריד לבית פרטי · עצמאות אנרגטית בבית · מערכת סולארית 7 קילוואט · חשמל בלי חיבור לרשת

**מה לא בסדר בכותרת הנוכחית:**

> "בית משפחת אבישי, יישוב עדי — מערכת מנותקת רשת" (45 תווים, 52 אחרי הסיומת). באורך תקין, אבל שם המשפחה במקום הראשון גוזל את המקום מ-"מערכת מנותקת רשת לבית", שהיא השאילתה, וההספק לא מופיע.

**מוצע:**

```
title       מערכת מנותקת רשת לבית — 7 kWp, יישוב עדי   (40)
description מערכת סולארית מנותקת רשת בהספק 7 קילוואט על בית פרטי ביישוב עדי — ייצור וצריכה בלי הסתמכות על הרשת. סוג המערכת, ההספק והמיקום, כפי שתועדו בפרויקט.   (146)
h1          בית משפחת אבישי, יישוב עדי
```

**מבנה כותרות:**

- מפרט הפרויקט: 7 kWp, מנותקת רשת, לקוח פרטי
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- מערכת מנותקת רשת בבית — מה זה דורש מהאגירה ומהצריכה
- פרויקטים דומים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - No photograph. SRC-SOLAR-006 quarantined ('טחנת רוח ומבני לבנים ברקע'). No story fields.
  - **במקום:** להסיר 'תיעוד מצולם'; 'הסיפור המלא של הפרויקט' → 'מה עוד לא פורסם על הפרויקט הזה' (Pending: case.details.solar)

**קישורים פנימיים מוצעים:** /solar/storage/ · /solar/residential/ · /projects/ · /projects/lifshitz-klil/ · /projects/beit-knesset-yona-ganei-tikva/ · /areas/ · /quote/?track=solar

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה.
- שלושה פרויקטים באתר הם מנותקי רשת (עדי, כליל, בית כנסת יונה) ואף אחד לא מקשר לשניים האחרים. זו קבוצת ההוכחה החזקה ביותר של הבידול המוצהר ("התחלנו מקרוואנים") והיא מפוזרת בלי חוט מקשר.
- אין קישור ל-/solar/storage/, למרות שמערכת מנותקת רשת בלי אגירה לא קיימת — קיבולת הסוללות היא הנתון החסר הבולט ביותר בעמוד.
- case.details.solar (P0) — למה בית ביישוב עדי בכלל בחר מנותק רשת? זו שאלה שהתשובה עליה מוכרת את השירות, והיא לא קיימת.
- יישוב עדי נמצא בגליל, צפונית לתחום המוצהר "ממצפה רמון ועד עמק חפר". הפרויקט נכון, אבל הוא סותר את הצהרת האזור ב-/areas/ ואף עמוד לא מיישב את זה (fact.areas.list, P0).
- מבוי סתום — אין קישור לעמוד שירות ואין קישור לפרויקט אחר.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה למערכת מנותקת רשת — /quote/?track=solar
- **CTA משני:** מעבר ל-/solar/storage/ — כמה אגירה באמת צריך
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג מערכת ומיקום — קיימים
  - קיבולת האגירה בקוט״ש — לא קיימת בדאטה לאף פרויקט אוף-גריד
  - תמונת ההתקנה — חסרה, provenance.project-photos ‏P0
  - הניסיון עם מערכות מנותקות רשת מ-2018 — קיים באודות, לא מקושר לכאן
- **התנגדויות:**
  - 7 קילוואט מספיקים לבית שלם בלי רשת?
  - כמה זמן מחזיקה הסוללה בלילה ובחורף
  - מה קורה בימי חורף רצופים בלי שמש
  - אפשר להתחיל מחובר לרשת ולעבור לעצמאות בהמשך
- **מסלול המרה:** עמוד פרויקט → "מה מערכת מנותקת רשת דורשת מהאגירה" → /solar/storage/ → /quote/?track=solar. מסלול חיזוק אמון: → שני הפרויקטים האוף-גריד האחרים (כליל, בית כנסת יונה) → חזרה ל-CTA.

---

## /projects/amar-kfar-yona/

**מילת מפתח ראשית:** סככה סולארית לבית פרטי  
**כוונת חיפוש:** commercial  
**מילות משנה:** בניית סככה סולארית · סככה סולארית לחניה · מערכת סולארית 6 קילוואט · סככה סולארית במקום גג

**מה לא בסדר בכותרת הנוכחית:**

> "בית משפחת עמר, כפר יונה — סככה סולארית" (38 תווים, 45 אחרי הסיומת). מקום פנוי שלא מנוצל, ו-"סככה סולארית" — שאילתה עצמאית עם כוונה מסחרית ברורה — נדחקת לסוף אחרי שם משפחה והספק שכלל לא מוצג.

**מוצע:**

```
title       סככה סולארית 6 kWp — בית משפחת עמר, כפר יונה   (44)
description סככה סולארית בהספק 6 קילוואט בבית משפחת עמר בכפר יונה — מבנה ייעודי שנושא את הפאנלים ומצל במקביל. סוג המערכת, ההספק והמיקום, כפי שתועדו בפרויקט.   (144)
h1          בית משפחת עמר, כפר יונה
```

**מבנה כותרות:**

- מפרט הפרויקט: 6 kWp, סככה סולארית, לקוח פרטי
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- סככה חדשה מול התקנה על גג קיים — מה ההבדל
- פרויקטים דומים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - No photograph. SRC-SOLAR-007 quarantined ('מיכלי מים על הגגות'). No story fields.
  - **במקום:** להסיר 'תיעוד מצולם'; 'הסיפור המלא של הפרויקט' → 'מה עוד לא פורסם על הפרויקט הזה' (Pending: case.details.solar)

**קישורים פנימיים מוצעים:** /solar/residential/ · /projects/ · /projects/gemini-metzer/ · /projects/sharabani-ben-zakai/ · /areas/ · /quote/?track=solar · /faq/

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה. בסככה סולארית התמונה היא כמעט כל המוצר, כי הלקוח קונה גם מבנה וגם מערכת.
- שלושה פרויקטים באתר עוסקים בסככות (עמר, ג׳מיני, שהרבני) ואין ביניהם שום קישור ואין להם עמוד מאגד. זו קבוצת מוצר שלמה שלא מנוצלת.
- ה-FAQ מסביר שהקמת סככה חדשה שונה מהתקנה על גג קיים לעניין פטור מהיתר — הבחנה שהעמוד הזה ממחיש בדיוק, ואין קישור בין השניים.
- case.details.solar (P0) — אין מידות סככה, אין חומר, אין מידע אם נדרש היתר, ואין משך ביצוע. אלה השאלות שכל לקוח סככה שואל.
- העמוד לא מבחין בשום מקום בין "בניית סככה" ל"התקנה על סככה קיימת", למרות ששני הפרויקטים קיימים באתר וההבדל בעלות ובהיתרים מהותי.
- מבוי סתום — אין קישור לעמוד שירות ואין קישור לפרויקט אחר.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה — סככה סולארית או התקנה על גג, /quote/?track=solar
- **CTA משני:** מעבר ל-/faq/ — האם סככה חדשה דורשת היתר
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג מערכת ומיקום — קיימים
  - תמונת הסככה — חסרה, provenance.project-photos ‏P0
  - מידות הסככה וחומר המבנה — לא קיימים בדאטה
  - האם נדרש היתר בפרויקט הזה — case.details.solar ‏P0
- **התנגדויות:**
  - צריך היתר בנייה לסככה חדשה?
  - כמה מקום זה תופס בחצר
  - הסככה גם מצילה על הרכב או רק נושאת פאנלים
  - עדיף סככה או פשוט להתקין על הגג
- **מסלול המרה:** עמוד פרויקט → "סככה חדשה מול גג קיים" → /solar/residential/ או /faq/ (שאלת ההיתר) → /quote/?track=solar.

---

## /projects/sharabani-ben-zakai/

**מילת מפתח ראשית:** התקנת פאנלים על סככה קיימת  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת סולארית על סככה · מערכת סולארית 4 קילוואט · מערכת סולארית קטנה לבית · סולארי בלי בניית מבנה

**מה לא בסדר בכותרת הנוכחית:**

> "בית משפחת שהרבני, בן זכאי — פאנלים על סככה קיימת" (48 תווים, 55 אחרי הסיומת). נכנס בקושי ומוביל בשם משפחה. מילת המפתח "פאנלים על סככה קיימת" — שהיא הבידול של הפרויקט הזה מול פרויקטי הסככה האחרים — נמצאת בזנב שנוטה להיחתך במובייל.

**מוצע:**

```
title       פאנלים על סככה קיימת — 4 kWp, בן זכאי   (37)
description התקנת פאנלים בהספק 4 קילוואט על סככה קיימת בבן זכאי — ניצול מבנה שכבר עומד, בלי בניית סככה חדשה. סוג המערכת, ההספק והמיקום, כפי שתועדו בפרויקט.   (143)
h1          בית משפחת שהרבני, בן זכאי
```

**מבנה כותרות:**

- מפרט הפרויקט: 4 kWp, פאנלים על סככה קיימת
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- התקנה על מבנה קיים — מה בודקים לפני
- פרויקטים דומים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - No photograph. SRC-SOLAR-008 quarantined. No story fields.
  - **במקום:** להסיר 'תיעוד מצולם'; 'הסיפור המלא של הפרויקט' → 'מה עוד לא פורסם על הפרויקט הזה' (Pending: case.details.solar)

**קישורים פנימיים מוצעים:** /solar/residential/ · /projects/ · /projects/amar-kfar-yona/ · /projects/gemini-metzer/ · /areas/ · /quote/?track=solar · /faq/

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה.
- זה הפרויקט שממחיש את החלופה הזולה (שימוש במבנה קיים) והוא לא מקושר לפרויקטי הסככה החדשה, שהם החלופה היקרה. ההשוואה בין השניים היא תוכן מכירתי מוכן שלא נכתב.
- 4 קילוואט הוא מתחת למגבלת 5 קילוואט בחיבור חד-פאזי שה-FAQ מציין — נקודת קישור טבעית שלא קיימת, והיא מסבירה לגולש למה מערכת קטנה לפעמים היא ההחלטה הנכונה.
- case.details.solar (P0) — האם נבדק עומס הסככה הקיימת? זו השאלה הראשונה בהתקנה על מבנה שלא תוכנן לכך, ואין לה זכר.
- summary אומר "ללא בניית מבנה חדש" — היתרון המסחרי המרכזי — ואין לו שום פיתוח בגוף העמוד.
- מבוי סתום — אין קישור לעמוד שירות ואין קישור לפרויקט אחר.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה למבנה קיים — /quote/?track=solar
- **CTA משני:** השוואה מול סככה חדשה — מעבר ל-/projects/amar-kfar-yona/
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג התקנה ומיקום — קיימים
  - תמונת ההתקנה — חסרה, provenance.project-photos ‏P0
  - בדיקת עומס המבנה הקיים — לא מתועדת
  - הסבר מתי מבנה קיים מתאים ומתי לא — לא קיים באתר
- **התנגדויות:**
  - הסככה שלי נושאת את המשקל?
  - 4 קילוואט זה בכלל שווה את זה
  - זה פוגע בסככה או במבנה
  - צריך היתר להתקנה על מבנה קיים
- **מסלול המרה:** עמוד פרויקט → "מה בודקים לפני התקנה על מבנה קיים" → /solar/residential/ → /quote/?track=solar. מסלול השוואה: → /projects/amar-kfar-yona/ (סככה חדשה) → CTA.

---

## /projects/gemini-metzer/

**מילת מפתח ראשית:** מערכת סולארית 3.5 קילוואט  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת סולארית קטנה · סככה סולארית קומפקטית · מערכת סולארית בחיבור חד פאזי · מערכת סולארית לבית קטן

**מה לא בסדר בכותרת הנוכחית:**

> "משפחת ג׳מיני, קיבוץ מצר — סככה סולארית" (38 תווים, 45 אחרי הסיומת). זהה כמעט מילה במילה לכותרת של /projects/amar-kfar-yona/ ("— סככה סולארית") — שתי כותרות שנבדלות רק בשם משפחה וביישוב, וזה בדיוק המקום שבו התבנית מייצרת קניבליזציה בין שני עמודים משלה. ההספק, שהוא ההבדל האמיתי, לא מופיע.

**מוצע:**

```
title       סככה סולארית 3.5 kWp — משפחת ג׳מיני, קיבוץ מצר   (46)
description סככה סולארית בהספק 3.5 קילוואט אצל משפחת ג׳מיני בקיבוץ מצר — מערכת קטנה על מבנה הצללה ייעודי. סוג המערכת, ההספק והמיקום, כפי שתועדו בפרויקט הזה.   (144)
h1          משפחת ג׳מיני, קיבוץ מצר
```

**מבנה כותרות:**

- מפרט הפרויקט: 3.5 kWp, סככה סולארית
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- מערכת קטנה — מתי זה מספיק ומתי לא
- פרויקטים דומים

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «תיעוד מצולם · הסיפור המלא של הפרויקט»
  - No photograph. SRC-SOLAR-009 quarantined ('מזגן Mitsubishi ומבנה בטון ביציקה עם עמודי ברזל חשופים'). No story fields.
  - **במקום:** להסיר 'תיעוד מצולם'; 'הסיפור המלא של הפרויקט' → 'מה עוד לא פורסם על הפרויקט הזה' (Pending: case.details.solar)

**קישורים פנימיים מוצעים:** /solar/residential/ · /projects/ · /projects/amar-kfar-yona/ · /projects/lifshitz-klil/ · /areas/ · /quote/?track=solar · /faq/

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה.
- הכותרת והתקציר כמעט זהים לאלה של /projects/amar-kfar-yona/ ("סככה סולארית בהספק X קילוואט"). שני עמודים כמעט־כפולים מתחרים זה בזה ומדללים שניהם — צריך לבדל אותם לפי גודל וייעוד, לא רק לפי שם משפחה.
- 3.5 קילוואט היא המערכת הקטנה השנייה באתר, ואין שום תוכן שמסביר למי מערכת בסדר גודל כזה מתאימה. "מתי מערכת קטנה מספיקה" הוא בדיוק תוכן שמייצר לידים איכותיים ומסנן פניות לא מתאימות.
- case.details.solar (P0) — אין שום פרט מעבר להספק ולמיקום. זה העמוד הדל ביותר מבין העשרה.
- קיבוץ מצר נמצא צפונית לתחום המוצהר "ממצפה רמון ועד עמק חפר" — אותה סתירה שמופיעה גם בעדי ובכליל, ואף עמוד לא מיישב אותה (fact.areas.list, P0).
- עמוד בעל תוכן ייחודי כה מועט מסתכן בסיווג כתוכן דל. או שהוא מקבל תוכן ייחודי אמיתי, או שהוא מתמזג לכרטיס בעמוד האינדקס.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה — איזה גודל מערכת מתאים לצריכה שלי, /quote/?track=solar
- **CTA משני:** מעבר ל-/solar/residential/ — איך נקבע גודל המערכת
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג מערכת ומיקום — קיימים
  - תמונת הסככה — חסרה, provenance.project-photos ‏P0
  - הסבר מה הוביל לבחירת גודל כזה — case.details.solar ‏P0
  - הבהרה אם אפשר להרחיב מערכת קיימת — לא קיימת באתר
- **התנגדויות:**
  - 3.5 קילוואט זה בכלל מספיק למשהו
  - למה לא להתקין מערכת גדולה יותר מלכתחילה
  - אפשר להרחיב את המערכת בהמשך
  - זה שווה את ההשקעה בגודל כזה
- **מסלול המרה:** עמוד פרויקט → "מתי מערכת קטנה מספיקה" → /solar/residential/ → /quote/?track=solar. גולש שמתלבט בגודל: → /faq/ (מגבלת 5 קילוואט בחד-פאזי) → CTA.

---

## /projects/lifshitz-klil/

**מילת מפתח ראשית:** מערכת סולארית עצמאית לבית בכליל  
**כוונת חיפוש:** commercial  
**מילות משנה:** מערכת אוף גריד קטנה · חשמל סולארי לבית מבודד · מערכת סולארית 3 קילוואט · בית בלי חיבור לרשת החשמל

**מה לא בסדר בכותרת הנוכחית:**

> "בית משפחת ליפשיץ, כליל — מערכת מנותקת רשת" (41 תווים, 48 אחרי הסיומת). כמעט זהה לכותרת של /projects/avishai-adi/ — אותו "— מערכת מנותקת רשת" בדיוק, ושוב שני עמודים שנבדלים רק בשם משפחה וביישוב. ההספק (3 קילוואט), שהוא ההבדל היחיד בפועל, לא מופיע בכותרת של אף אחד מהם.

**מוצע:**

```
title       מערכת עצמאית מנותקת רשת 3 kWp — כליל   (36)
description מערכת סולארית מנותקת רשת בהספק 3 קילוואט לבית בכליל — אספקת חשמל עצמאית בלי חיבור לרשת כלל. סוג המערכת, ההספק והמיקום, כפי שתועדו בפרויקט הזה.   (142)
h1          בית משפחת ליפשיץ, כליל
```

**מבנה כותרות:**

- מפרט הפרויקט: 3 kWp, מנותקת רשת, לקוח פרטי
- תיעוד מצולם
- הסיפור המלא של הפרויקט
- בית שמתוכנן לחיות בלי הרשת — מה זה דורש
- פרויקטים דומים במערכות מנותקות רשת

**⚠ טענות לא מבוססות (1):**

- `headingOutline, description` — «תיעוד מצולם · הסיפור המלא של הפרויקט · "אספקת חשמל עצמאית בלי חיבור לרשת כלל"»
  - No photograph — SRC-SOLAR-010 quarantined ('גשר רכבת עילית על עמודי בטון'). No story fields. Additionally 'בלי חיבור לרשת כלל' asserts the property has no grid connection at all; projects.ts records only 'מערכת מנותקת רשת', which describes the system, not the property.
  - **במקום:** להסיר 'תיעוד מצולם'; description: "...בהספק 3 קילוואט לבית בכליל — מערכת שמייצרת ואוגרת בלי להסתמך על הרשת. סוג המערכת, ההספק והמיקום, כפי שתועדו בפרויקט הזה."

**קישורים פנימיים מוצעים:** /solar/storage/ · /about/ · /projects/ · /projects/avishai-adi/ · /projects/beit-knesset-yona-ganei-tikva/ · /areas/ · /quote/?track=solar

**חוסרים:**

- provenance.project-photos (P0) — אין תמונה.
- כמעט־כפילות עם /projects/avishai-adi/: אותו systemType, אותו סוג לקוח, תיאור כמעט זהה. שני עמודים דלים שמתחרים על אותה שאילתה במקום עמוד אחד חזק או שני עמודים מבודלים לפי גודל וצורך.
- 3 קילוואט מנותק רשת הוא בדיוק הרצף מסיפור הקרוואנים ב-/about/ — הבידול המוצהר של העסק. אין קישור בין השניים ואין ולו משפט שמחבר את הניסיון להוכחה.
- case.details.solar (P0) — אין קיבולת אגירה, אין גיבוי גנרטור, אין תיאור של איך מתוכננת צריכה בבית שלא מחובר לרשת. בלי זה העמוד הוא שורת מפרט.
- כליל נמצאת בגליל המערבי, הרחק מצפון לתחום המוצהר "ממצפה רמון ועד עמק חפר". זו הסתירה החדה ביותר בין הפרויקטים לבין /areas/ (fact.areas.list, P0).
- מבוי סתום — אין קישור לעמוד שירות, לפרויקט אחר או לאודות.

**מפרט המרה:**

- **CTA ראשי:** בדיקת התאמה לבית מנותק רשת — /quote/?track=solar
- **CTA משני:** מעבר ל-/solar/storage/ — אגירה ומערכות אוף גריד
- **מה נדרש כדי לבנות אמון:**
  - הספק, סוג מערכת ומיקום — קיימים
  - תמונת ההתקנה — חסרה, provenance.project-photos ‏P0
  - קיבולת אגירה ותכנון צריכה — לא קיימים בדאטה
  - הרצף מסיפור הקרוואנים ב-/about/ — קיים כידע, לא מקושר ולא מנוצל
  - הבהרה על שירות ותחזוקה במרחק — לא קיימת (קשור ל-fact.areas.list)
- **התנגדויות:**
  - 3 קילוואט מספיקים לבית שלם?
  - מה קורה כשאין שמש כמה ימים ברצף
  - צריך גנרטור גיבוי בנוסף
  - מי נותן שירות לבית מרוחק כשמשהו מתקלקל
- **מסלול המרה:** עמוד פרויקט → "בית שמתוכנן לחיות בלי הרשת" → /solar/storage/ → /quote/?track=solar. מסלול אמון: → /about/ (סיפור הקרוואנים והמערכות המנותקות) → CTA.

---

## /reviews/

**מילת מפתח ראשית:** המלצות על חשמלאי  
**כוונת חיפוש:** commercial  
**מילות משנה:** חוות דעת רוני חג׳ג׳ · ביקורות RNRG · המלצות מערכת סולארית · חוות דעת על מתקין סולארי

**מה לא בסדר בכותרת הנוכחית:**

> "המלצות מלקוחות" (14 תווים, 21 אחרי הסיומת) — תווית ניווט, לא שאילתה, והיא מבזבזת כ-40 תווים של נדל״ן ב-SERP. חמור מזה: ה-description שלצידה מבטיחה "בשם מלא, יישוב ותמונה", והתמונות הועברו ל-quarantine (consent.testimonial-photos). ה-meta מבטיח באופן מפורש דבר שהעמוד כבר לא מספק — אותו סוג אי-דיוק שהאתר הזה נבנה כדי לחסל.

**מוצע:**

```
title       המלצות על רוני חג׳ג׳ — 5 ביקורות בשם מלא   (40)
description חמש המלצות מלקוחות מזוהים בשם מלא וביישוב, על מערכות סולאריות ועל עבודות חשמל. בלי כוכבים, בלי ממוצע מומצא ובלי דירוג — זה הטקסט שהלקוחות עצמם כתבו.   (148)
h1          המלצות על העבודה של רוני חג׳ג׳
```

**מבנה כותרות:**

- חמש המלצות מלקוחות מזוהים בשם מלא
- המלצות על מערכות סולאריות
- המלצות על עבודות חשמל
- למה אין כאן דירוג ממוצע ואין כוכבים
- מה חסר כאן: אין ולו קול אחד מקבלן או מיזם
- עבדנו יחד? נשמח להמלצה

**✕ לא תואם לקוד:**

- internalLinksOut is almost entirely wrong. src/pages/reviews.astro emits exactly two body links (a WhatsApp deep link and a mailto), plus CtaBand track="private" → /quote/?track=private and /contact/, plus Testimonials with isReviewsPage={true}, which explicitly suppresses the /reviews/ button (Testimonials.astro:45). So /projects/beit-knesset-yona-ganei-tikva/ is not on the page, and /quote/?track=solar is not emitted — the CtaBand is private. The title critique verifies (14 chars / 21 rendered, description 76 chars). The photo claim verifies and understates: no entry in src/data/testimonials.ts sets `photo`, and the default blurb in Testimonials.astro:28 — "המלצות מלקוחות אמיתיים, בשמם המלא ובתמונתם" — still promises photographs on every page that renders the component without an override (homepage, /about/, and all non-contracting service pages). /reviews/ itself passes a custom blurb with no photo promise, so on this route only the meta description makes the false claim.
  - **תיקון:** Correct the link list to /quote/?track=private + /contact/. Extend the photo-promise finding to the Testimonials default blurb, which affects far more routes than /reviews/.

**קישורים פנימיים מוצעים:** /solar/ · /solar/residential/ · /electrical/ · /projects/ · /projects/beit-knesset-yona-ganei-tikva/ · /about/ · /contracting/ · /faq/ · /quote/?track=solar · /quote/?track=private · /contact/

**חוסרים:**

- ה-description בקוד מבטיחה תמונה לכל ממליץ. אין תמונות — הן ב-quarantine עד שיתקבל אישור (consent.testimonial-photos, P1). זו הבטחה שקרית ב-meta ובתצוגה ב-SERP.
- ה-lede בגוף העמוד אומר "כולן מלקוחות מזוהים בשמם המלא ועם תמונתם". זו טענה שגויה שנשארה אחרי הסרת התמונות — תיקון של שתי מילים, אבל בעמוד שכל עניינו אמינות זה חמור.
- גם ברירת המחדל של רכיב Testimonials ("המלצות מלקוחות אמיתיים, בשמם המלא ובתמונתם") מכילה את אותה טענה, והיא מוצגת גם ב-/about/ ובכל עמוד שמשתמש ברכיב בלי blurb.
- ה-H1 ("מה לקוחות אומרים") זהה מילה במילה ל-title שמועבר לרכיב Testimonials באותו עמוד — H1 ו-H2 זהים באותו מסמך.
- אין קיבוץ ואין סינון לפי track. גולש סולארי רואה שתי המלצות חשמל כלליות, וקבלן רואה חמש המלצות שאף אחת מהן לא רלוונטית לו.
- אין קישור מאף המלצה לעמוד השירות או לפרויקט שאליו היא מתייחסת. ניר רווח מגני תקווה — אותו יישוב שבו הפרויקט המתועד היחיד עם תמונות אמיתיות. החיבור הזה קיים בנתונים ולא נעשה.
- integration.gbp (P0) — אין קישור לפרופיל Google Business. זו ההתנגדות היחידה שהעמוד קיים כדי לנטרל ("האם ההמלצות אמיתיות"), והתשובה החזקה ביותר היא לינק למקור.
- testimonial.contracting (P1) — אפס קול מהקהל שהוא העדיפות המסחרית המרכזית. העמוד מודה בכך בכנות, אבל לא מציע לקבלן שום חלופה — למשל הצעה לחבר אותו ללקוח קיים לשיחה, שכבר קיימת ב-empty state של הרכיב ולא מופיעה כאן.
- אין תאריך לאף המלצה, ולא צוין שהן פורסמו במקור ב-Google. שתי עובדות פשוטות שהופכות ציטוט לעדות.
- אין Review schema, וההחלטה מנומקת היטב בקוד — אבל אפשר לסמן כל המלצה כ-Review בלי reviewRating ולזכות בהבנה סמנטית בלי לפברק דירוג.

**מפרט המרה:**

- **CTA ראשי:** בקשת הצעת מחיר במסלול שההמלצה נוגעת בו — /quote/?track=solar או ?track=private
- **CTA משני:** מעבר ל-/projects/ — לראות את העבודה עצמה ולא רק ציטוט
- **מה נדרש כדי לבנות אמון:**
  - שם מלא ויישוב לכל ממליץ — קיים
  - קישור לפרופיל Google Business שבו אפשר לראות את אותן ביקורות במקור — integration.gbp ‏P0, הנכס הקריטי בעמוד
  - המלצה אחת מקבלן, יזם או מנהל פרויקט — testimonial.contracting ‏P1
  - תמונה בהסכמה או אות ראשונה מוצהרת — consent.testimonial-photos ‏P1
  - תאריך או שנה לכל המלצה, ואמירה מפורשת מאיפה היא נלקחה
- **התנגדויות:**
  - ההמלצות האלה אמיתיות או שהעסק כתב אותן בעצמו
  - למה אין כוכבים ואין ממוצע — מה מסתירים כאן
  - אין אף המלצה מקבלן, מיזם או ממנהל פרויקט
  - אין תאריכים — אולי הכול מלפני שנים
  - כולן על סולארי; מה עם עבודות חשמל רגילות
- **מסלול המרה:** המלצות → קיבוץ לפי סוג עבודה → עמוד השירות המתאים או עמוד הפרויקט באותו יישוב → /quote/ עם ה-track. שינוי מבני מול pages.ts: "השארת המלצה" הוא CTA ללקוח קיים והוא מתחרה על תשומת הלב של מבקר חדש — הוא יורד אל מתחת ל-CTA הראשי. לקבלן, שאין לו כאן שום הוכחה: הצעה מפורשת לשוחח עם לקוח קיים → /contracting/process/ → /quote/?track=contracting.

---

## /faq/

**מילת מפתח ראשית:** כמה עולה עבודת חשמל  
**כוונת חיפוש:** informational  
**מילות משנה:** מה ההבדל בין חשמלאי מוסמך לחשמלאי ראשי · הפחת קופץ מה לעשות · מתי צריך להחליף לוח חשמל · צריך היתר בנייה למערכת סולארית · מגבלת 5 קילוואט בחיבור חד פאזי · ביטוח עבודות קבלניות לחשמלאי

**מה לא בסדר בכותרת הנוכחית:**

> "שאלות נפוצות — חשמל, קבלנות וסולארי" מונה שלוש מחלקות באתר במקום שאילתה אחת. "שאלות נפוצות" הוא שם של רכיב ניווט ואף אחד לא מקליד אותו. העמוד מחזיק 20 תשובות שכמה מהן עונות על שאילתות אמיתיות ובעלות ביקוש — מחיר, ההבדל בין דרגות רישיון, פחת שקופץ, מגבלת 5 קילוואט בחד-פאזי — והכותרת לא רומזת על אף אחת מהן, ולכן העמוד לא מכוון לשום דבר.

**מוצע:**

```
title       כמה עולה עבודת חשמל? 20 שאלות ותשובות   (37)
description מה קובע את מחיר עבודת החשמל, מה ההבדל בין חשמלאי מוסמך לראשי, מתי מחליפים לוח, ומה חייב היתר במערכת סולארית — 20 תשובות, כולל מה שאין לנו עליו תשובה.   (149)
h1          שאלות ותשובות: מחירים, רישיונות, קבלנות וסולארי
```

**מבנה כותרות:**

- כללי: רישיונות, אזורי עבודה ומה קובע מחיר
- לקוחות פרטיים: לוח חשמל, פחת ותלת פאזי
- קבלנים ופרויקטים: כתב כמויות, ביטוח וחריגות
- מערכות סולאריות: היתרים, חיבור והספק
- שאלות שעדיין אין לנו עליהן תשובה מפורסמת
- לא מצאתם את השאלה שלכם

**⚠ טענות לא מבוססות (1):**

- `title` — «כמה עולה עבודת חשמל? 20 שאלות ותשובות»
  - Accurate against the current faq.astro (exactly 20 items), but the same map adds a sixth group — 'שאלות שעדיין אין לנו עליהן תשובה מפורסמת' — which changes the count the moment it ships. A hard-coded number in a title that the outline itself invalidates.
  - **במקום:** כמה עולה עבודת חשמל? שאלות ותשובות על חשמל וסולארי

**✕ לא תואם לקוד:**

- internalLinksOut claims 16 targets; src/pages/faq.astro emits only in-page anchors (href={`#${g.id}`}), Breadcrumbs, and CtaBand track="private". /projects/yaakobi-beit-ezra/ and /projects/saban-shtulim/ are not linked, and /quote/?track=contracting is not emitted — the CtaBand is private, so only /quote/?track=private and /contact/ appear. The rest are chrome. The title critique verifies: title 35 chars, description 112 chars, and the page carries exactly 20 questions.
  - **תיקון:** Reduce to /quote/?track=private and /contact/, or add the claimed links to faq.astro if the interlinking is intended.

**קישורים פנימיים מוצעים:** /electrical/panels/ · /electrical/three-phase/ · /electrical/inspection/ · /electrical/homes/ · /about/ · /contracting/process/ · /contracting/builders/ · /solar/residential/ · /solar/storage/ · /solar/commercial/ · /projects/yaakobi-beit-ezra/ · /projects/saban-shtulim/ · /areas/ · /quote/?track=contracting · /quote/?track=private · /contact/

**חוסרים:**

- אפס קישורים פנימיים. עשרים תשובות, וכל אחת מהן עוסקת בנושא שיש לו עמוד שירות ייעודי באתר — ואף אחת לא מקשרת אליו. זה הפער היחיד הגדול ביותר בעמוד, גם לדירוג וגם להמרה.
- התשובה על מבנה חקלאי מזכירה במפורש 20 קילוואט בבית עזרא ו-12 קילוואט בשתולים — שני עמודי פרויקט קיימים — בלי קישור לאף אחד מהם.
- כל 20 התשובות בתוך <details> סגור. הטקסט קיים ב-HTML ולכן ניתן לאינדוקס, אבל אפס תשובות גלויות בטעינה — לפחות הראשונה בכל קבוצה צריכה להיפתח.
- אין anchor id לשאלה בודדת, רק לקבוצה. אין URL שאפשר לשתף לשאלה ספציפית, ואין למה שגוגל יקשר כ-jump link.
- FAQPage schema כבר לא מייצר תוצאות עשירות לאתר מסחרי — גוגל צמצם את התכונה ב-2023 לאתרי ממשל ובריאות. לשמור אותו זה בסדר, אבל אסור לתלות בו את התנועה; הערך חייב לבוא מהתוכן ומהקישורים.
- שלוש תשובות נגמרות ב"טרם פורסם" — אחריות, ביטוח עבודות קבלניות, ופרויקטים במקביל. שלושתן הן בדיוק ההתנגדויות המוצהרות של הקהל הקבלני ב-pages.ts, וה-FAQ הוא המקום שאמור לסגור אותן, לא להצהיר שהן פתוחות (fact.warranty ‏P0, fact.insurance ‏P0, fact.concurrent-projects ‏P1).
- אין שאלה על זמן תגובה לפנייה, למרות ש"מתי יחזרו אליי" היא התנגדות מוצהרת ב-/contact/ וב-/quote/ (fact.response-time, P1).
- אין שאלה על תשלום — מקדמה, שלבי תשלום, חשבונית. בענף הקבלני זו שאלת סף.
- אין שאלה על רישום בפנקס הקבלנים, למרות שמחקר השוק זיהה את זה כתנאי סף מול קבלנים ראשיים (fact.contractor-registry, P0).
- אין שאלה על מה קורה כשמתגלה ליקוי בבדיקת חשמל — מי מתקן, מי משלם — למרות שזו התנגדות מוצהרת של /electrical/inspection/.
- CtaBand track="private" בלבד, למרות שקבוצה שלמה בעמוד פונה לקבלנים. אין מסלול ל-/quote/?track=contracting בשום מקום בעמוד.

**מפרט המרה:**

- **CTA ראשי:** בקשת הצעת מחיר שמפרטת מה כלול ומה לא — /quote/ לפי המסלול, מוצמד לסוף כל קבוצת שאלות
- **CTA משני:** חיוג 054-665-6076 לשאלה שאין עליה תשובה כאן
- **מה נדרש כדי לבנות אמון:**
  - מספר רישיון ניתן לאימות + הסבר איפה בודקים אותו — קיים, וזו התשובה החזקה בעמוד
  - תנאי אחריות במספרים — fact.warranty ‏P0; שלוש תשובות היום נגמרות ב"טרם פורסם"
  - אישור ביטוח עבודות קבלניות וצד ג׳ — fact.insurance ‏P0
  - זמן תגובה לפנייה חדשה — fact.response-time ‏P1
  - קישור מתוך כל תשובה לעמוד השירות שמוכיח את הידע — לא קיים היום באף תשובה
  - תשובה גלויה על תמחור לפי כתב כמויות — קיימת ומצוינת, וצריכה להיות מקושרת ל-/contracting/process/
- **התנגדויות:**
  - כמה זה יעלה לי, ולמה אין באתר שום טווח מחירים
  - מה האחריות בפועל — כמה שנים ועל מה בדיוק
  - יש ביטוח עבודות קבלניות או שאני מגלה את זה בשלב הרכש
  - הוא מוסמך לגודל החיבור שלי, או שאצטרך מישהו אחר
  - מה קורה אם מתגלה חריגה מהתוכנית באמצע העבודה
  - מתי יחזרו אליי אחרי שאשלח את הטופס
- **מסלול המרה:** FAQ → קישור בתוך התשובה לעמוד השירות הרלוונטי → /quote/ עם ה-track הנכון. מסלול קבלני: קבוצת "קבלנים ופרויקטים" → /contracting/process/ → /quote/?track=contracting. מסלול דחוף (פחת קופץ, לוח ישן): התשובה מסתיימת בחיוג ישיר ולא בטופס — כוונה דחופה לא ממתינה לטופס של תשעה שדות.

---

## /areas/

**מילת מפתח ראשית:** חשמלאי אשדוד והסביבה  
**כוונת חיפוש:** commercial  
**מילות משנה:** חשמלאי באזור הדרום · התקנת מערכות סולאריות בדרום · קבלן חשמל לפרויקטים באזור אשדוד · חשמלאי יבנה · חשמלאי ממצפה רמון ועד עמק חפר

**מה לא בסדר בכותרת הנוכחית:**

> "אזורי פעילות" (12 תווים, 19 אחרי הסיומת) — תווית תפריט, לא שאילתה. אף אחד לא מחפש "אזורי פעילות", והכותרת לא מכילה ולו שם יישוב אחד ולא מילת שירות אחת. זה העמוד שכל תפקידו המוצהר ב-pages.ts הוא Local SEO, והכותרת שלו לא נותנת לגוגל שום עוגן גיאוגרפי ולא שום עוגן שירותי. היא גם מבזבזת כ-48 תווים פנויים.

**מוצע:**

```
title       אזורי שירות — חשמלאי מאשדוד, ממצפה רמון לעמק חפר   (48)
description RNRG פועלת מבסיס באשדוד, ממצפה רמון ועד עמק חפר. היישובים שבהם כבר בוצעו פרויקטים מתועדים, ולמה טווח ההגעה לקריאת שירות שונה מזה של פרויקט קבלני.   (145)
h1          חשמלאי מאשדוד — אזורי שירות ופרויקטים שבוצעו
```

**מבנה כותרות:**

- אזור השירות המוצהר: ממצפה רמון ועד עמק חפר
- עשרה יישובים שבהם בוצעו פרויקטים מתועדים
- קריאת שירות ופרויקט קבלני הם לא אותו מרחק
- לקבלנים וליזמים: מחוץ לטווח המיידי? עדיין שווה לשאול
- למה אין כאן עמוד נפרד לכל עיר

**⚠ טענות לא מבוססות (1):**

- `headingOutline` — «לקבלנים וליזמים: מחוץ לטווח המיידי? עדיין שווה לשאול»
  - 'הטווח המיידי' presupposes a defined immediate radius that has never been stated. `fact.areas.list` is open on exactly this distinction.
  - **במקום:** לקבלנים וליזמים: פרויקט רחוק מהבסיס? עדיין שווה לשאול

**✕ לא תואם לקוד:**

- internalLinksOut claims three project-detail links; src/pages/areas.astro renders the town list as plain <li> text (line: {worked.map((town) => <li>{town}</li>)}) with a single link, /projects/. /quote/?track=contracting is not emitted — CtaBand is track="private". The title critique verifies (12 chars / 19 rendered, description 105 chars, no locality and no service word in the title). Worth noting against the Local-SEO framing: the page body does render "אשדוד" via {BUSINESS.locality} in the lede — so the locality gap is title-only here, unlike on the homepage where it is absent from the whole document.
  - **תיקון:** Reduce to /projects/, /quote/?track=private, /contact/. Note that the body already carries the locality token; only the title lacks it.

**קישורים פנימיים מוצעים:** /projects/ · /projects/sigalon-yavne/ · /projects/yaakobi-beit-ezra/ · /projects/saban-shtulim/ · /electrical/ · /contracting/ · /contracting/process/ · /solar/ · /about/ · /contact/ · /quote/?track=private · /quote/?track=contracting

**חוסרים:**

- סתירה עובדתית שהעמוד מציג בעצמו: האזור המוצהר הוא "ממצפה רמון ועד עמק חפר", אבל שלושה מהיישובים ברשימה — כליל, יישוב עדי וקיבוץ מצר — נמצאים צפונית לעמק חפר (וכך גם קיבוץ הרדוף בהמלצות). או שהניסוח המוצהר לא מדויק או שהרשימה כוללת עבודות מחוצה לו. זה חייב הכרעה לפני שנבנה עליו Local SEO כלשהו (fact.areas.list, P0).
- אין בעמוד ולו מילת מפתח שירותית אחת: לא "חשמלאי", לא "לוח חשמל", לא "מערכת סולארית". העמוד מדבר על אזורים בלי לומר מה עושים בהם, ולכן לא יכול לדרג על שום שאילתה מקומית — שהיא כל מטרתו.
- רשימת היישובים היא <li> טקסט בלבד, בלי קישור לפרויקט שממנו כל יישוב נגזר. מקור הנתונים הוא PROJECTS — הקישור הוא שינוי של שורה אחת ונותן גם ניווט וגם הוכחה.
- אין schema גיאוגרפי ברמת העמוד — לא areaServed, לא Place, לא GeoShape. העמוד לא מצהיר למכונות על שום גיאוגרפיה.
- אין קישור לאף עמוד שירות ואין CTA קבלני, למרות שהעמוד עצמו כותב "אם אתם קבלן או יזם מחוץ לאזור המיידי — עדיין שווה לשאול" ומשאיר את המשפט הזה בלי קישור ובלי כפתור. CtaBand track="private" בלבד.
- ההתנגדות "האם המרחק ישפיע על המחיר" מופיעה ב-pages.ts ולא נענית באף מקום בעמוד.
- אין מפה, אין זמני הגעה ואין הבחנה יישובית בין "מגיעים לקריאת שירות" ל"מגיעים לפרויקט" — הטקסט מסביר את ההבחנה אבל לא מיישם אותה על שום יישוב.
- integration.gbp (P0) — אין קישור לפרופיל Google Business. עמוד האזורים הוא המקום הטבעי ביותר לחיבור הזה, והוא הנכס המקומי החזק ביותר שאפשר להשיג.
- ההחלטה לא לבנות עמוד לכל עיר נכונה ומנומקת, אבל היא נשארת החלטה זמנית: בלי fact.areas.list כל אסטרטגיית ה-Local SEO של האתר חסומה על נתון אחד מבעל העסק.

**מפרט המרה:**

- **CTA ראשי:** בדיקה אם מגיעים אליי — /quote/ עם שדה יישוב
- **CTA משני:** חיוג 054-665-6076 לבדיקת הגעה ליישוב מסוים
- **מה נדרש כדי לבנות אמון:**
  - יישובים עם פרויקט מתועד — קיימים, אבל בלי קישור להוכחה שמאחוריהם
  - רשימת יישובים אמיתית + הבחנה בין קריאת שירות לפרויקט ארוך — fact.areas.list ‏P0, חוסם את כל העמוד
  - אמירה מפורשת אם המרחק משפיע על המחיר — היום ההתנגדות רשומה ולא נענית
  - זמן תגובה והגעה — fact.response-time ‏P1
  - פרופיל Google Business עם מיקום ואזור — integration.gbp ‏P0
- **התנגדויות:**
  - מגיעים בכלל ליישוב שלי, או שאני מבזבז זמן
  - המרחק ייקר לי את העבודה
  - יגיעו בשביל עבודה קטנה או רק בשביל פרויקט
  - כמה זמן ייקח להם להגיע כשיש תקלה
  - אני קבלן מחוץ לאזור — יש בכלל טעם לפנות
- **מסלול המרה:** אזורים → "היישוב שלי ברשימה" → עמוד הפרויקט באותו יישוב (הוכחה מקומית) → /quote/?track=solar או עמוד החשמל הרלוונטי. "לא ברשימה" → הסבר קריאת שירות מול פרויקט → חיוג או /quote/. קבלן או יזם: סעיף "מחוץ לטווח המיידי" → /contracting/process/ → /quote/?track=contracting — המסלול הקבלני היחיד שהעמוד הזה יכול לספק, והוא לא קיים היום.

---

## ממצאים חוצי-מסלולים

### ALL ROUTES (coverage)

Route existence checks out: all 36 routes in the map resolve to real pages (src/pages/*.astro, src/pages/[...path].astro via servicePaths() over the 17 entries in src/data/services/, src/pages/projects/[slug].astro over the 10 entries in src/data/projects.ts, src/pages/thank-you/[track].astro over private|contracting|solar). No internalLinksOut target in the entire map points at a non-existent route. Four real, registered routes are MISSING from the map entirely: /accessibility/ and /404/ (both in PAGES in src/data/pages.ts), and /internal/dashboard/ and /internal/gaps/ (both in PAGE_FAMILIES).

**תיקון:** Add /accessibility/ and /404/ to the map. Mark /internal/dashboard/ and /internal/gaps/ as out of scope explicitly (both are noindex={true}) rather than silently absent.

### ALL SERVICE ROUTES (internalLinksOut methodology)

The internalLinksOut lists do not describe what is in the code. src/pages/[...path].astro renders exactly five sources of outbound internal links on a service page: the breadcrumb parent, the hero CTA (`/quote/?track=${page.track}` from PageHero.astro:40), the page's own `related[]` array (3-4 items), `/reviews/` from Testimonials.astro:45 (suppressed on contracting-track pages, which get no Testimonials at all), and `/contact/` + `/quote/?track=<track>` from CtaBand.astro:53,64. Every other entry in the map's lists — /about/, /faq/, /areas/, sibling service pages not in `related[]` — exists only in the global Header/Footer, which is byte-identical on all 36 routes and therefore carries zero per-page signal. Listing chrome links as per-page internalLinksOut makes every page look equally interlinked and hides the real, sparse link graph.

**תיקון:** Rebuild internalLinksOut from `related[]` + track CTA + breadcrumb parent per page, and record chrome links once, site-wide, instead of per route.

### /projects/*/ (all ten detail routes)

Every sibling-project link in the map is fabricated. src/pages/projects/[slug].astro renders only: Breadcrumbs (/ and /projects/), the gallery, the story-or-pending block, and CtaBand track="solar" (/quote/?track=solar, /contact/). There is no related-projects module in the template and no `related` field in src/data/projects.ts. So all of these are absent: /projects/avishai-adi/ and /projects/lifshitz-klil/ from beit-knesset-yona-ganei-tikva; /projects/yaakobi-beit-ezra/ and /projects/sigalon-yavne/ from argaman-revivim; /projects/saban-shtulim/ and /projects/argaman-revivim/ from yaakobi-beit-ezra; and the equivalents on the remaining seven. /solar/*, /areas/ and /contact/ on these pages are chrome-only. The title critiques themselves all verify exactly — computed from the `${title}, ${location} — ${systemType}` template at [slug].astro:50, lengths are 57/48/49/54/38/45/38/48/38/41, matching the map's figures character for character, and 64/61 rendered for beit-knesset-yona and saban-shtulim respectively.

**תיקון:** Strip all cross-project links from the ten detail routes; the only real body links are /projects/, /quote/?track=solar and /contact/. If sibling links are wanted, they must be built in [slug].astro first.

### /electrical/, /contracting/, /solar/ (hubs)

All three title critiques verify against the code — /electrical/ 42 chars + 107-char description; /contracting/ 39 chars + 103-char description; /solar/ 37 chars, character-for-character identical to its h1, + 117-char description. Two supporting claims also verify: the /electrical/ hub genuinely carries no business content (its four sections are מה אנחנו מבצעים, the licence table, איך אנחנו עובדים, and three private-customer FAQs), and the /contracting/ description promises "מה ההבדל בין חשמלאי לקבלן חשמל" and "מי אחראי על מה", neither of which appears anywhere in the page beyond a heroPoint "אחריות על החלק החשמלי בפרויקט". The internalLinksOut lists are wrong on all three. Actual related[]: /electrical/ → /electrical/panels/, /electrical/inspection/, /contracting/; /contracting/ → /contracting/builders/, /contracting/renovation/, /solar/contractors/, /contracting/process/; /solar/ → /solar/residential/, /solar/commercial/, /electrical/. Everything else listed (child pages not in related[], /about/, /faq/, /areas/, /contact/) is chrome. Note /contracting/ is a contracting-track page, so [...path].astro:227 suppresses Testimonials entirely — no /reviews/ link.

**תיקון:** Keep all three title findings as written. Replace the link lists with related[] + the page's own track quote link + /contact/ (+ /reviews/ on /electrical/ and /solar/ only).

### /electrical/homes/, /electrical/panels/, /contracting/builders/, /contracting/renovation/, /contracting/infrastructure/

Title claims all verify: homes 40 chars + 110-char description with no load-check mention; panels 40 chars + 104-char description, and grep confirms "61439" appears in the repository only in the title string (electrical.ts:163) and a code comment in regulatory.ts — never in the panels page body; builders 35 chars / 42 rendered + 106-char description ending "וכתב כמויות"; renovation 40 chars / 47 rendered + 109-char description ending "זמינות ותיאום מול בעלי מקצוע"; infrastructure 40 chars / 47 rendered + 108-char description ending "ותיעוד לתחזוקה". The internalLinksOut lists are inflated on all five. Actual related[]: homes → /electrical/panels/, /electrical/lighting/, /solar/residential/; panels → /electrical/inspection/, /electrical/three-phase/, /contracting/infrastructure/; builders → /contracting/infrastructure/, /contracting/process/, /contracting/renovation/; renovation → /electrical/panels/, /electrical/inspection/, /contracting/builders/; infrastructure → /contracting/infrastructure/'s own is /contracting/builders/, /contracting/commercial/, /electrical/panels/. All other entries are chrome. The three contracting pages are contracting-track, so no Testimonials and no /reviews/ link.

**תיקון:** Keep the title findings unchanged. Replace each link list with that page's related[] plus its own track quote link and /contact/.
