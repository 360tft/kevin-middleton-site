# Refero reference lock — /projects

Resolved 2026-08-29 via the Refero MCP (`refero_search_styles` then
`refero_get_style`). Every ID below was fetched in full, not skimmed from a
search result. Levels.io was used only as an information-architecture
benchmark: no chronology, no revenue graphs, no success/failure scoring.

## The lock

| Design problem | Reference | Style ID | What it decides here |
|---|---|---|---|
| Dark ground + a single restrained warm accent | **Inngest** (inngest.com) | `46bfdc1b-2a29-454e-ad35-e01a41c59dcf` | Charcoal ground, amber used *only* for the primary link, the active filter and one count. Depth from borders and tonal shifts, never from shadow. Mono for technical micro-labels. Maps almost one to one onto KevinSite's `#080a0d` / `#E5A11C`. |
| Dense but legible filterable directory | **jp.works** | `0bad6a8b-e35e-40e1-91b6-af8e41ba7967` | A horizontal pill filter strip sitting directly above a uniform card grid, with a restrained monochrome shell holding visually varied contents. Compact density, 100px radius on every interactive pill, 12px on cards. Taken as structure only: the palette is inverted to dark. |
| Mixed card families, some entries with a mark and some without | **OpenSea** (opensea.io) | `2465f692-3a79-4576-970c-ee56c1e72375` | 1px inset border rather than elevation, 8px card radius, 12-16px card padding, monospaced numerals for counts, ghost buttons for secondary actions, single accent on the active tab. This is what lets a card with a logo and a card with no logo read as the same object. |
| Honest active / paused / archived, without shouting | **Linear changelog** (linear.app/changelog) | `11d3e58a-87d7-4a9a-bbf5-720f4fd3ffc6` | Status is a neutral pill on a slightly raised surface, *not* a colour-coded severity signal. Capsule search input with a hairline border. Transparent cards that only gain a border on hover. A system with no accent colour at all, which is why it is safe to borrow status treatment from it without importing a second accent. |

## Rejected directions

Both were genuinely attractive. Both were rejected for conflict with
KevinSite's `DESIGN.md` contract (editorial, Bloomberg-adjacent, single gold
accent, dense enough to browse a large catalogue).

- **Dennis Snellenberg** `434f44a8-e391-4491-b036-7ed12f1ea5fc` — a beautiful
  dark portfolio: asymmetric hero portrait, 216px display type, circular brand
  cards, comfortable density. Rejected because its own don'ts say "do not
  clutter layouts with dense information", and this page has to hold 51
  entries. Its violet accent would also displace the gold, which is Kevin's
  personal-brand signature and not negotiable.
- **Julia Krantz** `dfa3ad81-0d1e-447f-b171-2b871cbb27ab` — an edge-to-edge
  image-mosaic contact sheet. Rejected on the mixed-card-family problem
  specifically: the mosaic only works when every entry carries strong imagery.
  A third of this catalogue is a PDF with no artwork at all, so the grid would
  collapse into holes.

## Documented deviation from DESIGN.md

`DESIGN.md` specifies `border-primary` for featured cards. Applied literally,
six featured entries sitting together at the top of the default view produced
six full-strength gold borders, which contradicts the Inngest rule the rest of
the page follows (amber reserved for the single most important action). The
approved Paper states use a dimmed gold `#4a3a14` for the featured border and
keep full `#E5A11C` for the action link and the active filter chip. This still
reads as "subtle gold ring" per DESIGN.md; it is recorded here so the
implementation is not mistaken for drift.
