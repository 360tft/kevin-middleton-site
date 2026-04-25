# Kevin Middleton Site Design Contract

Loaded by AI coding agents alongside `CLAUDE.md`. Source of truth for visual design tokens, component patterns, and rules. Ground-truth tokens live in `src/app/globals.css` and `src/app/layout.tsx`.

---

## Brand Positioning

**What it is:** Kevin's personal site — speaker page, books, content, portfolio of products. Brand surface for *Kevin the person*, not a product.
**Voice:** Confident, direct, peer. Football coach educator first, builder second.
**Audience:** Coaches, podcast guests, partnership leads, journalists. Often arriving from social.
**Aesthetic in three words:** Editorial. Authoritative. Bloomberg-adjacent.
**Reference points:** Bloomberg Terminal (single accent grammar — Kevin's north star), Stripe (dense typography), Linear (motion restraint), well-designed author/editor sites (e.g. Pieter Levels, but less playful).
**Anti-references:** Generic SaaS, AI-startup gradients, course-creator landing pages, photographer-portfolio glass.

---

## Colour Tokens

Direct hex in `globals.css` `:root`, wired through `@theme inline`. Never hardcode in components.

### Palette
- `--background: #080a0d` — deep blue-black.
- `--foreground: #f0f0f0`.
- `--card: #111418`.
- `--card-foreground: #f0f0f0`.
- `--primary: #E5A11C` — **360TFT Gold** (Kevin's signature accent).
- `--primary-foreground: #080a0d`.
- `--secondary: #111418` / `--secondary-foreground: #f0f0f0`.
- `--muted: #1e2229` / `--muted-foreground: #888888`.
- `--accent: #1e2229` / `--accent-foreground: #f0f0f0`.
- `--border: #1e2229`.
- `--ring: #E5A11C`.
- `--destructive: #ef4444`.
- `--color-text: #f0f0f0` / `--color-text-secondary: #888888` (extra tokens for body copy).

### Tailwind class mapping
- Use `bg-background`, `text-foreground`, `bg-card`, `bg-muted`, `text-muted-foreground`, `border-border`, `bg-primary`, `ring-ring`.
- Note: `--color-accent-blue: #E5A11C` is named "blue" in `@theme inline` but is gold — historical naming, leave alone, just don't trust the name.
- Never `bg-yellow-500`, `text-amber-600`, `bg-blue-500`. Use the tokens.

### Radius
- `--radius: 0.625rem` (10px). Use `rounded-md`, `rounded-lg`. No arbitrary values.

---

## Typography

Source: `src/app/layout.tsx`. Inter wired as `--font-inter` → `--font-sans`.

- Hero `h1` (Kevin's name, headline): `text-5xl md:text-7xl font-bold tracking-tight`.
- Section `h2`: `text-3xl md:text-4xl tracking-tight`.
- Body: `text-base md:text-lg leading-relaxed`.
- Captions / metadata: `text-sm text-[var(--color-text-secondary)]`.
- Numeric stats (followers, books sold, talks): `text-3xl md:text-5xl font-bold tabular-nums`.
- Never `text-[10px]`. `text-xs` floor.

---

## Spacing & Layout

This is an editorial site — air around content matters.

- Container: `container mx-auto px-4 sm:px-6`.
- Section gap: `mt-24 md:mt-32`.
- Card padding: `p-6` to `p-8`.
- Max-widths: `max-w-3xl` for prose/bio, `max-w-5xl` for product portfolio grid.

---

## Component Patterns

### Cards (book, product, talk)
- Default: `bg-card border border-border rounded-lg p-6`.
- Hover: `hover:border-primary/40 transition-colors`.
- Featured/pinned: `border-primary` with subtle gold ring.

### Buttons
- **Primary (book a talk, buy book):** `px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 active:scale-[0.98] transition-all`.
- **Secondary:** `px-6 py-2.5 border border-primary text-primary text-sm font-semibold rounded-md hover:bg-primary/10 transition-colors`.
- **Ghost:** `px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors`.

### Inputs (newsletter signup, contact)
- `bg-card border border-input rounded-md px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`.

### Hero
- Single column, `max-w-3xl`, name as headline, sub-line stating role, then primary CTA.
- Avoid hero illustrations or video backgrounds. Editorial sites rely on typography + a strong photograph if any.

---

## Motion

Restraint. The page should feel printed, then enhanced.
- `transition-colors` default.
- `active:scale-[0.98]` on buttons.
- Optional: a single fade-up entrance on the hero. Nothing else animated by default.
- `html { scroll-behavior: smooth }` is set globally — fine, don't override.
- Respect `prefers-reduced-motion`.

---

## Voice & Copy

- British English. Practise (verb), practice (noun). Colour, behaviour, organise, defence.
- No em dashes.
- Editorial first-person where natural ("I've coached for 15 years..."), peer voice throughout.
- No marketing-page CTAs ("Discover the secret", "Unlock your potential", "Level up your coaching"). Direct asks only.
- Buttons: verb-first. "Read the book", "Book a talk", "See the products".

---

## Anti-Patterns (Do Not)

1. Don't introduce gradient backgrounds beyond a single subtle hero treatment if absolutely needed.
2. Don't hardcode hex outside `globals.css`. Use the tokens.
3. Don't pick a fresh accent. Gold (#E5A11C) is the personal-brand signature.
4. Don't use `text-[10px]`. `text-xs` floor.
5. Don't fall into course-creator landing patterns (countdown timers, fake scarcity, "limited spots" badges).
6. Don't apply emojis in UI.
7. Don't add light-mode without a strong reason — the dark editorial feel is core to the brand.

---

*Source of truth: `src/app/globals.css`, `src/app/layout.tsx`. Last sync: 2026-04-25.*
