# PE Repository — Claude Context

## Design Context

**Full spec:** See `PRODUCT.md` (strategic) and `DESIGN.md` (visual).

**Register:** product — design serves the function. Users are process engineers finding documents fast; new hires orienting to the PE landscape.

**Platform:** web (plain static HTML/CSS/JS, no framework, no build step)

**Creative North Star:** "The Facility Operations Brief" — a working tool ordered like a well-run facility. Each zone has a color identity. Nothing competes for attention that hasn't earned it.

**Six Named Rules (from DESIGN.md):**
- **The Panel-Color Rule** — each panel's `--col-color` appears on exactly three surfaces: sidebar active border, panel header bg, and link-button border-left. Nowhere else.
- **The Amber Exception** — `#e6a817` is reserved for search-match state only.
- **The Two-Scale Rule** — 0.875rem for reading, 0.67rem for labeling. No in-between sizes.
- **The Uppercase-Only-for-Labels Rule** — ALL CAPS only on panel titles and sub-heading grouping labels.
- **The Flat-at-Rest Rule** — surfaces are at minimum shadow at rest; shadow increases on hover only.
- **The One-Step Lift Rule** — one hover elevation state. No cascade, no intermediate shadow level.

**Anti-references:** Legacy intranet (2005-era tables, Times New Roman, Windows XP blues). Startup SaaS dashboard (dark glassmorphism, gradient text, hero-stat grids).

**Accessibility:** WCAG 2.1 AA. Body text ≥ 4.5:1. `#5f6368` on white is the contrast floor — do not lighten muted text further.
