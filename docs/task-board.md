# Task board

Status vocabulary: **Done · In progress · Blocked · Ready for review · Pending**
A task marked *Blocked* names what it is blocked on and who owns it. Blocked work never
stalls the rest — everything not depending on it was built anyway.

Live gap report (generated from the same data the site uses): `site/src/pages/internal/gaps.astro`
→ renders at `/internal/gaps/`.

---

## P0 — applied to the live site

Shipped on branch `p0-critical-fixes`. These were active risk and did not wait for the rebuild.

| # | Task | Owner | Status | Acceptance |
|---|---|---|---|---|
| 1 | Remove 5 fabricated testimonials, replace with the 5 real attributable ones | Dev | **Done** | Bundle verified: fabricated names absent, real names present |
| 2 | Remove `aggregateRating` 4.9/120, `priceRange`, unverified opening hours | Dev | **Done** | Absent from built bundle |
| 3 | Fix canonical on `/energy/` (pointed at the empty root) | Dev | **Done** | `https://rnrg.co.il/energy/` in shell and bundle |
| 4 | React shell: `lang="he"`, RTL, Hebrew title, description, OG tags | Dev | **Done** | Verified in `build/index.html` |
| 5 | Consolidate lead destinations; fix `_next` off the abandoned domain | Dev | **Done** | Both forms → one inbox, redirect on rnrg.co.il |
| 6 | Withdraw the flat-90% savings calculator | Dev | **Done** | Page is a noindex redirect stub |
| 7 | Fix `main.js` unguarded null crash; rewrite defensively | Dev | **Done** | Lead ids, UTM capture, error states |
| 8 | Add `robots.txt` + `sitemap.xml` (neither existed) | SEO | **Done** | Both live at root |
| 9 | Canonicals, titles, descriptions across static pages | SEO | **Done** | All 12 pages |
| 10 | Add missing `<h1>` on `solar.html` | SEO | **Done** | Hero H1 + styles |
| 11 | Replace duplicated alt text on 9 project photos | SEO | **Done** | Descriptive alt per image |
| 12 | `dir="rtl"` on the 6 pages missing it | Dev | **Done** | All 12 pages |
| 13 | Phone inputs `type="number"` → `type="tel"` | Dev | **Done** | Both forms |
| 14 | Add missing viewport tag on CompatibilityCheck | Dev | **Done** | Present |
| 15 | Strip `ws://127.0.0.1:3001` dev leftover from production CSP | Dev | **Done** | CSP tightened |
| 16 | Asset re-encode: 7.5 MB → 567 KB | Dev | **Done** | Logo 3.1 MB → 58 KB |
| 17 | Fix dead `.hero::before` responsive rules | Dev | **Done** | Retargeted to `.hero` |
| 18 | Retire `m.html`, `new.html`, `solar-calculator.html` | Dev | **Done** | noindex redirect stubs |
| 19 | GTM/GA4 loader + event layer | Analytics | **Blocked** | Code done and inert; needs container id from client |
| 20 | Restrict Maps API key by referrer | Client | **Blocked** | Google Cloud console action, cannot be done from code |

---

## Rebuilt site — `site/`

### Design

| Task | Status | Acceptance |
|---|---|---|
| Design system: tokens, both themes, type scale, spacing | **Done** | `src/styles/tokens.css` — one system replaces three |
| Component library: buttons, cards, forms, alerts, badges, FAQ, breadcrumbs | **Done** | All states: hover, focus-visible, active, disabled, loading, error |
| Header with mega-menu + mobile disclosure | **Done** | Keyboard accessible, Escape closes |
| Footer as a navigation and SEO asset | **Done** | Replaces the single copyright line |
| Sticky mobile CTA, variant per track | **Done** | Appears after 60% viewport scroll |
| Dignified empty states for missing assets | **Done** | `Pending.astro` + `.pending-block` |
| Wireframes | **Superseded** | Built directly as working pages — reviewable in the browser, not as static mockups |
| Responsive across 9 widths | **Done** | 320/360/414/768/1024/1280/1440/1920/2560 audited; the 1024px three-up break and the 768–1023px no-CTA gap fixed |
| Contrast AA, both themes | **Done** | Border and subtle-text tokens solved numerically, not eyeballed |
| RTL audit | **Done** | Select arrow was drawn opposite its own padding — background-position is physical |
| AI-generated imagery | **Blocked** | Awaiting the client's source photographs; rules recorded in the gap report |

### Development

| Task | Status | Acceptance |
|---|---|---|
| Astro static site, RTL, self-hosted fonts | **Done** | 42 pages, 12 KB JS across the whole site |
| Three-track lead system with queue, retry and dedup | **Done** | Lead persisted to localStorage before send; retried on next load |
| Lead endpoint | **Blocked** | Needs a hosting decision — see `docs/migration.md` |
| Tracking layer, 10 events | **Done** (inert) | Fires into dataLayer; needs GTM id |
| Honeypot + validation on every form | **Done** | Israeli phone/email patterns, per-field errors |
| 404, accessibility statement, skip link | **Done** | |
| QA suite gating the build | **Done** | `scripts/qa.mjs`, wired into CI |
| CI workflow | **Done** | `.github/workflows/site-ci.yml` — build + check + QA |
| Lead endpoint code + 13 tests | **Done** | Runs today; only deployment waits on hosting |
| Security headers + CSP | **Done** | `public/_headers`, site-wide |
| Fonts self-hosted, subset, preloaded | **Done** | 196KB → 96KB, Hebrew + Latin only |
| Responsive images | **Done** | srcset everywhere it helps; `npm run images` keeps variants in step |
| CSS deduplicated | **Done** | 37 duplicate rule blocks removed; they had already drifted |
| Production cutover | **Pending** | Deliberately not done; see migration plan |

### Content

| Task | Status | Acceptance |
|---|---|---|
| Homepage | **Done** | Three tracks, verified stats only |
| 5 contracting pages — **the branch that did not exist** | **Done** | Hub, builders, renovation, commercial, infrastructure, process |
| 6 electrical pages | **Done** | Incl. licence-class table |
| 5 solar pages | **Done** | Incl. the "one contractor for electrical + PV" position |
| Projects index + 10 detail pages | **Done** | Filterable; missing story marked per project |
| About, FAQ (20 Q), reviews, areas, contact, quote, thank-you | **Done** | |
| Case study narratives | **Blocked** | Structure built; needs one conversation with the owner |
| Owner questionnaire | **Done** | Generated at `/internal/gaps/` from the gap registry |
| AI Asset Generation Pack | **Done** | `npm run pack` — manifest, prompts, style guide, master prompt, destinations |
| Source asset inventory | **Done** | Every photo opened and catalogued; one quarantined, one cropped |

### SEO / Strategy

| Task | Status | Acceptance |
|---|---|---|
| Competitor research — 29 sites, 4 segments | **Done** | `docs/research/market-research-2026-08.md` |
| Keyword research + map for all 22 routes | **Done** | Titles and descriptions applied |
| Cannibalisation rules | **Done** | "קבלן חשמל" exclusive to `/contracting/` etc. |
| Schema: Electrician, Service, FAQPage, BreadcrumbList, ItemList, Person, CreativeWork | **Done** | Verified fields only |
| Review schema | **Deliberately absent** | Google requires `reviewRating`; no stars were ever collected, and inventing them is the fabrication this rebuild removed. Returns once the Business Profile is connected |
| Internal linking between branches | **Done** | Related-pages block on every service page |
| Redirect map, 13 URLs | **Done** | `site/public/_redirects` |
| Location pages | **Deliberately not built** | Would be thin content until the town list arrives |

---

## Decisions that need the client

1. **Hosting** — Cloudflare Pages (recommended), Netlify, or stay on GitHub Pages and accept
   meta-refresh redirects plus a WhatsApp-only lead path.
2. **GTM + GA4 container ids.**
3. **Google Business Profile URL** and its real review count.
4. **Maps API key referrer restriction** — verify in Google Cloud.
5. **Old GitHub domain** — is it still indexed?

## Current build health

```
42 pages · astro check 0 errors · 3,353 internal links · QA green · 13/13 endpoint tests
homepage first visit on mobile: 152KB  (48 html · 34 css · 13 font · 57 hero)
JavaScript across the entire site: 12KB
```

`npm run verify` in `site/` runs the whole chain: typecheck, image variants, build, QA,
endpoint tests.

## The one thing worth doing this week regardless

Install GA4 on the **current** site. It is already wired and needs only an id. Every week
without it is a week of baseline data that cannot be recovered, and without a baseline there
is no way to demonstrate what the rebuild changed.
