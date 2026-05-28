# PRD: Consulting-first landing restructure

**Date:** 2026-05-28
**Type:** improvement
**Author:** Kevin Middleton + Claude

## What
Restructure kevinmiddleton.360tft.com so the primary conversion goal is the $250/hr consulting call, applying the single-offer landing pattern from Daniel Lockyer's retainer page.

## Why
The current site is a multi-audience hub: the hero leads with credentials (not buyer pain), the free cheat sheet is the primary CTA, and the single best consulting line ("Most AI consultants do not know coaching. I do.") is hidden inside a collapsed accordion. Kevin has chosen high-value consulting ($250/hr calls + Coach Direct) as the page's number one job. Leading with the buyer's problem and surfacing the differentiator should lift consulting bookings, the highest revenue-per-conversion item on the page.

## Who
- User types: site visitors — football founders/clubs/federations (consulting buyers, primary); grassroots/academy coaches (product buyers, secondary). No auth/tiers on this static marketing site.
- Modes: N/A
- Platforms: web desktop, web mobile, Docker (Coolify)

## Shareability
- Shareable: no (marketing landing page)
- N/A for shared artifact / mobile score
- Best-in-class reference: Daniel Lockyer indiepage retainer landing page (single offer, pain-led headline, price shown openly, "I ship fixes, not reports" differentiator, proof wall)

## Impact Analysis
- Files affected:
  - src/lib/constants.ts — reshape CONSULTING (drop subhead/points; add differentiator/whatYouGet/howIWork); reword cheat-sheet CTA label (remove em dash)
  - src/app/page.tsx — pain-led hero subhead; swap CTAs (book-a-call becomes amber primary, cheat sheet outline secondary); reorder sections to Hero → Book a Call → Work → Coaching → About; fix em dashes in hero + Work blurb
  - src/components/consulting-card.tsx — rewrite from accordion to two-column "What you get" / "How I work" with differentiator visible on load; drop useState accordion
  - src/components/credentials-list.tsx — show top 6, collapse remaining 10 behind a "+N more" toggle (becomes a client component)
- Dependencies:
  - CONSULTING imported by page.tsx (uses .price — unaffected), consulting-card.tsx (uses headline/subhead/points — rewritten in lockstep), nav.tsx (uses .ctaUrl — unaffected)
  - HERO_PRIMARY_CTA imported by page.tsx only (label change)
  - credentials-list.tsx imports credentials data (unchanged); rendered by page.tsx (server) — client child is valid in Next
- Break risks:
  - TS build error if consulting-card.tsx references removed CONSULTING fields → mitigate by rewriting the card fully in the same change
  - Mobile: two-column consulting card must stack (grid-cols-1 md:grid-cols-2); verify at narrow width
  - "+N more" count must be computed from array length, not hardcoded, to avoid drift if credentials change
  - No empty-state risk (credentials always populated)

## Scope
- Files to change (exact, no others):
  1. src/lib/constants.ts
  2. src/app/page.tsx
  3. src/components/consulting-card.tsx
  4. src/components/credentials-list.tsx
- Test plan: no unit-test harness in this repo (static marketing site). Verification = `npm run build` passes with no TS errors + visual check of rendered hero, consulting card, and collapsed Work list (dev server / screenshot).
- Docker plan: Coolify auto-deploy on push to main; confirm live URL renders new pain-led hero, amber book-a-call CTA, two-column consulting card, and trimmed Work list.
- Rollback: single commit on this branch; `git revert` or drop the branch.
- One feature per commit. Em-dash fixes are in-scope (voice-compliance, flagged to Kevin), not a drive-by. No price changes ($250/$100/$40/$20 untouched).

## Visual Plan
N/A (not a shareable feature). Consulting card mirrors Lockyer's two-column layout: title + price row, headline, visible differentiator line, then "What you get" (left) and "How I work" (right), CTA button below.
