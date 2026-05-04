# PRD: One-Page Redesign — William Baker Style

**Date:** 2026-05-04
**Type:** improvement
**Author:** Kevin Middleton + Claude

## What
Redesign kevinmiddleton.360tft.com as a single page modelled on williambaker.co.uk: one paid $500/hr consulting offer at the top, a credential list ordered by impact below, sub-pages deleted.

## Why
Current site has three sub-pages (`/about`, `/products`, `/work-with-me`) and five mixed-currency consulting SKUs that bury the offer. The personal site needs to do one job: convert serious buyers into a paid consulting call. William Baker's site nails this with a single service, single price, single CTA. Matching the model removes friction and signals confidence.

## Who
- **User types:** Public visitors — clubs, federations, football founders, journalists, coaches considering a paid consultation. Internal authentication is not in scope.
- **Modes:** Marketing site (no app modes).
- **Platforms:** Web desktop, web mobile, served via Coolify (Docker).

## Shareability
- **Shareable:** Yes — the site itself is the artifact (linked in email signatures, LinkedIn, X bios, CoachPa.ge profile).
- **Shared artifact:** The full home page; OG image already exists.
- **Best-in-class reference:** williambaker.co.uk — one page, single $500/hr "Consulting" offer with three accordion sub-points (Conversion / Ads / Connection), Cal.com booking link, no free calls.
- **Screenshot test:** Pass — Kevin will share this URL as his personal-brand surface.
- **Mobile app score:** 1/10 (it's a website, not an app).

## Impact Analysis

### Files affected
- `src/app/page.tsx` — full rewrite
- `src/data/products.ts` — add CoachPa.ge; restructure (or replaced by new `credentials.ts`)
- `src/data/timeline.ts` — folded into the unified credential list
- `src/data/credentials.ts` (NEW) — the 16-item ordered list
- `src/data/testimonials.ts` — kept as-is
- `src/lib/constants.ts` — prune NAV_LINKS, keep STATS/SITE
- `src/app/about/page.tsx` — DELETE
- `src/app/products/page.tsx` — DELETE
- `src/app/work-with-me/page.tsx` — DELETE
- `src/app/sitemap.ts` — remove deleted routes
- `src/components/nav.tsx` — convert to in-page anchor links or remove
- `src/components/service-card.tsx` — repurpose for the William-style single card with accordion sub-points
- `src/components/cta-card.tsx` — likely unused, candidate for removal
- `src/components/timeline.tsx` — kept but compressed (date + name only)
- `next.config.ts` — add 301 redirects `/about → /`, `/products → /`, `/work-with-me → /`
- `DESIGN.md` — update to reflect one-page direction
- `docs/prd/2026-05-04-one-page-redesign.md` — this file

### Dependencies
- Standalone Next.js 16 / React 19 / Tailwind 4 app, deployed to Coolify
- No external API consumers
- External inbound links (from CoachPa.ge profile, social posts) currently go to `360tft.com`, `footballgpt.co`, etc. — none of those break
- Old `/work-with-me` URL may exist in past social posts — handled by 301

### Break risks
- **Cal.com URL placeholder** — `cal.com/kevin-middleton` will 404 until Kevin creates the handle. Mitigation: link rendered but with `data-pending="true"` attribute and Kevin notified to set up the booking page before publicising the redesign.
- **SEO re-index** — three URLs become 301s. Google treats 301s as link-equity-passing. Sitemap regenerated to remove dead routes.
- **Visual regression** — current visitors expect the old layout. Acceptable; this is a deliberate redesign.
- **Mobile width** — single hero + single consulting card + dense credential list must hold at 375px. Tested locally before push.

## Scope

### Files to change (exact list)
See "Impact Analysis → Files affected" above. No drive-by fixes.

### Test plan
- `npm run build` — must pass with no TypeScript errors
- `next start` local check — verify hero renders, consulting card expands its three sub-points, credential list is ordered correctly, footer has communities/store/social/email
- Manual click-through — every credential link opens the correct external URL; consulting CTA opens Cal.com placeholder
- Sitemap regeneration — verify `/sitemap.xml` contains only `/`
- Redirect check — `curl -I /about` returns 301 → `/`

### Docker plan
- Push to feature branch → open PR → Kevin reviews → merge to main
- Coolify auto-deploys on push to main (UUID `po4008cs4kgccko40g8ko0ks`)
- Verify deploy: `curl -sI https://kevinmiddleton.360tft.com` returns 200 with new content
- Verify Coolify build timestamp via dashboard

### Rollback
- Git revert the merge commit on main
- Coolify auto-redeploys the previous SHA
- No DB or stateful changes, so rollback is purely cosmetic

### Visual plan
- Screenshot the rendered page locally, dual-write to `/home/kevin/Downloads/from-claude/kevin-middleton-site/` for Mac review per the dual-write rule
- Hero + consulting card + first 5 credential rows + footer captures

## Content lock (from conversation)

### Hero
- Single line who: "Football coach. AI builder. UEFA licensed."
- One CTA: `Book a consultation →` (Cal.com)
- Dark background, Geist Mono accent + Inter body to match William's stack

### Consulting card (William-faithful, single offer)
- **Title:** Consulting
- **Price:** $500/hr
- **Headline:** "Skip a year of trial and error on AI for football."
- **Subhead:** "A focused session for clubs, coaches, and football founders who want the build, distribution, and coaching-fluency lessons without learning them the expensive way."
- **Three accordion sub-points:**
  - **Build** — "I look at what you want to ship and tell you exactly how to build it. Stack, prompts, costs, what to skip. I've shipped 11 AI products in football, so the answers come from real builds, not theory."
  - **Coaching fluency** — "Most AI consultants don't know coaching. I do. I'll tell you why your tool isn't landing with coaches and what to change so it does."
  - **Connection** — "After the call, you can message me for quick second opinions on builds, prompts, or product decisions."
- **CTA:** Book a consultation → cal.com/kevin-middleton (placeholder)

### Credential list (most-successful-first, 16 items)
1. Football Coaching Academy — 10,000+ paying coaches — skool.com/coachingacademy
2. FootballGPT — 4,000+ coaches, AI for coaching — footballgpt.co
3. The Rise of the Dogmatic Football Coach — Published book — amazon.co.uk/dp/B0GF9VSGKG
4. CoachPower Masterclass with Ray Power — 4 × 60-min lessons, AI for coaches — (link TBD by Kevin)
5. CoachPa.ge — SaaS, paying customers — coachpa.ge
6. CruiseGPT — 59,000+ sailings, 14 AI advisors — 360cruising.com
7. RefereeGPT — 5 sports, 9 countries — refereegpt.co
8. CoachReflect — AI coaching journal — coachreflection.com
9. AI Football Skool — 200+ members, free 30-day course — skool.com/aifootball
10. PlayReflect — 100% free for players — playreflect.com
11. Football Coaching Directory — Searchable directory — fcd.football
12. AI Football Marketplace — Public API gateway — aifootball.co
13. The 2 Drill Club — Skool community — skool.com/the-2-drill-club-5017
14. 360TFT Skool — Free coaching community — skool.com/360tft-7374
15. Gumroad store — 30+ coaching resources — kev1wired.gumroad.com
16. UEFA Licensed coach, 15+ years pro level — Birmingham City, Newcastle United, Salford City

### Footer
- **Communities:** FCA, 360TFT Skool, 2 Drill Club, AI Football Skool
- **Store:** Gumroad
- **Book:** Amazon
- **Social:** X (@Coach_Kevin_M), Instagram (@coach_kevin_middleton), LinkedIn (kevinmiddleton82), YouTube (@360TFT)
- **Email:** admin@360tft.com
- **Telegram + WhatsApp:** community channels

## Out of scope (explicit)
- Cal.com booking page setup — Kevin's action after merge
- New OG image for the redesigned hero — keep existing for now
- Newsletter signup / email capture — not in this PRD
- Speaker/press kit page — not in this PRD
- Any backend or auth changes — there are none
