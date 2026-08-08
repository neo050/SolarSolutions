# Migration & cutover plan

The rebuilt site lives in `site/` and is **not deployed**. The live site is still served by
`.github/workflows/deploy.yml` from the repository root plus the React app at `/energy/`.
Cutover is a deliberate, separate decision. This document is what that decision needs.

---

## Current state

| | Live today | Rebuilt (`site/`) |
|---|---|---|
| Homepage | Splash page, no business content, no H1 | Full homepage, three tracks |
| Contracting | Does not exist | 5 pages |
| Pages | 12 static + 1 React SPA | 39 |
| JavaScript | 89 KB gzipped (React) | 2.2 KB total |
| CSS | 6 stylesheets, 3 unloaded | 48 KB, one system |
| Canonical | Points `/energy/` at the empty root | Self-referential everywhere |
| Structured data | Fabricated 4.9 / 120 reviews | Verified fields only |
| Lead capture | 3 destinations, no record kept | One payload, queued and retried |
| Tracking | None | 10 events, inert until GTM id supplied |

The P0 fixes are already applied **to the live site** and merged on `p0-critical-fixes`.
Those were urgent risk items and did not wait for this rebuild.

---

## Blockers before cutover

These are not build problems. They are decisions and credentials only the client can supply.

| # | Blocker | Gap id | Why it blocks |
|---|---|---|---|
| 1 | **Hosting decision** | `integration.lead-endpoint` | GitHub Pages is static-only and cannot run the lead endpoint or issue real 301s. See below. |
| 2 | **GTM + GA4 ids** | `integration.gtm` | Without them the new site launches with no measurement and no before/after baseline. |
| 3 | **Google Business Profile link** | `integration.gbp` | Needed for local SEO and to replace the removed fabricated rating with real numbers. |
| 4 | **Maps API key restriction** | `integration.maps-key` | The key is public in source, as all client-side keys are. Referrer restriction is the only protection. |
| 5 | **Old domain status** | `integration.old-domain` | If `neo050.github.io` is still indexed it competes with rnrg.co.il for the same content. |

Content gaps (owner photograph, crew size, warranty terms, contracting case study) do **not**
block cutover. Every page renders correctly without them and marks the hole — that was a
design requirement. They do limit how persuasive the contracting branch is on day one.

---

## The hosting question

GitHub Pages cannot do two things this site needs:

1. **Run server code.** The lead endpoint (`/api/lead`) needs somewhere to execute. Without
   it, `LeadForm` falls back to a WhatsApp handoff with a fully formed message — functional,
   but there is no server-side record and no retry.
2. **Issue real 301 redirects.** `public/_redirects` is written in Netlify/Cloudflare format.
   On GitHub Pages it is inert, and the 13 old URLs would need meta-refresh stubs instead —
   which pass some but not all link equity.

**Recommendation: Cloudflare Pages.** It serves the static build identically, supports
`_redirects` natively, and Pages Functions cover the lead endpoint. The DNS for rnrg.co.il
moves; the repository and build stay as they are. Netlify is equivalent if preferred.

Staying on GitHub Pages is viable but means accepting meta-refresh redirects and a
WhatsApp-only lead path.

---

## Cutover sequence

Run in order. Steps 1–4 are reversible at any point.

1. **Baseline.** Record current Search Console impressions, clicks and indexed page count.
   Without this there is no way to tell afterwards whether the rebuild helped.
2. **Full backup.** Tag the current production commit: `git tag pre-rebuild-live`.
3. **Deploy to a staging subdomain** (`staging.rnrg.co.il`) with `noindex` on every page.
4. **Verify on staging** — the checklist below.
5. **Point production at the new build.** Keep the previous deployment reachable for rollback.
6. **Submit the new sitemap** in Search Console and request indexing for the three branch hubs.
7. **Watch for 7 days.** 404s in Search Console, form submissions arriving, GA4 events firing.

**Rollback:** revert the deploy workflow to the tagged commit. Because nothing about the
old site is deleted in this repository, rollback is a single revert.

---

## Pre-launch checklist

Automated — run `npm run build && node scripts/qa.mjs` in `site/`. Currently passing:

- [x] 39 pages build clean, `astro check` reports 0 errors
- [x] 2,990 internal links resolve, no 404s
- [x] Exactly one `<h1>` per page
- [x] Canonical, meta description, `lang="he" dir="rtl"` on every page
- [x] Every `<img>` has alt text and resolves
- [x] No withdrawn claim reappears in output (regression guard in `scripts/qa.mjs`)
- [x] `robots.txt`, `sitemap-index.xml`, `404.html` emitted

Manual — cannot be automated, must be done on staging:

- [ ] Submit each of the three lead forms and confirm arrival at a real inbox
- [ ] Confirm GA4 DebugView receives all 10 events
- [ ] Walk every redirect in `public/_redirects` and confirm the destination
- [ ] Test on a real phone: sticky CTA, mobile nav, form keyboards, tap targets
- [ ] Run Lighthouse mobile — target 90+, LCP under 2.5s, CLS under 0.1
- [ ] Keyboard-only pass: skip link, nav, forms, FAQ accordions
- [ ] Screen reader spot-check on the homepage and the contracting form
- [ ] Validate structured data in Google's Rich Results Test
- [ ] Confirm `/internal/gaps/` is noindex and not in the sitemap

---

## What happens to `/energy/`

The React app is superseded by `/electrical/`. On cutover:

- `/energy/*` → `/electrical/` (301)
- `app-react/` can be removed from the build, but **keep the directory in git history** —
  it is the only record of the original electrical copy.
- Remove the React build step from `deploy.yml`.

Do not delete `app-react/` until the new site has been live and stable for a month.
