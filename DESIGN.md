---
name: PE Repository
description: Internal process engineering repository for Genentech Oceanside MSAT — upstream and downstream.
colors:
  blue-primary: "#1d4e89"
  blue-bldg-311: "#2c5f8a"
  teal-bldg-312: "#3a7a6b"
  panel-1-transfers: "#257494"
  panel-2-design: "#1a678e"
  panel-3-equipment: "#125a88"
  panel-4-models: "#0e4d81"
  panel-5-basecamp: "#0f407a"
  panel-6-evalroche: "#123371"
  panel-7-resources: "#152569"
  amber-search: "#e6a817"
  blue-hover-bg: "#e8f0fb"
  bg-page: "#f1f3f4"
  surface: "#ffffff"
  border: "#dadce0"
  text-dark: "#202124"
  text-medium: "#5f6368"
  gne-navy: "#003366"
  text-ui: "#555"
  icon-muted: "#9aa0a6"
  amber-dark: "#7a5200"
  text-placeholder: "#6b7280"
typography:
  hero:
    fontFamily: "Roboto, Segoe UI, Arial, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 300
    letterSpacing: "0.18em"
  title:
    fontFamily: "Roboto, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.07em"
  body:
    fontFamily: "Roboto, Segoe UI, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.3
  label:
    fontFamily: "Roboto, Segoe UI, Arial, sans-serif"
    fontSize: "0.67rem"
    fontWeight: 700
    letterSpacing: "0.09em"
rounded:
  sm: "5px"
  md: "8px"
  lg: "12px"
  pill: "20px"
spacing:
  xs: "5px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "28px"
components:
  link-btn:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
  link-btn-hover:
    backgroundColor: "{colors.blue-hover-bg}"
    textColor: "{colors.blue-primary}"
  sidebar-btn:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-medium}"
    padding: "16px 18px"
  sidebar-btn-active:
    backgroundColor: "#f0f4fa"
    textColor: "{colors.blue-primary}"
---

# Design System: PE Repository

## 1. Overview

**Creative North Star: "The Facility Operations Brief"**

This is a working tool for people who don't have time to think about it. Every screen answers one question first: *where do I go next?* The visual system is ordered like a well-run facility — each zone has a color identity, each section has a clear label, and nothing competes for attention that hasn't earned it. The feeling is calibrated authority: the kind that a process engineer has learned to trust before they've consciously noticed why.

The palette is facility blues — cool-leaning and functional. Blues and teals inherited from process engineering documentation, not corporate brand standards. Each sidebar panel carries its own tonal anchor so a user can orient by color before reading text. The page background is neutral gray-white; white cards float on it at uniform elevation. Nothing is saturated for its own sake.

This system explicitly rejects the legacy intranet feel: dense link tables, no visual breathing room, Windows XP-era blues, Times New Roman at 9pt. It is equally not a startup dashboard — no dark glassmorphism, no hero-stat grids, no gradient text. It is a utility that feels current because it respects the time of the people using it.

**Key Characteristics:**
- Color encodes structure, not decoration — every panel has an assigned tonal anchor used consistently across its sidebar button, header bar, and left-border indicators
- Hierarchy through weight and letter-spacing, not through size extremes
- Subtle, brief transitions confirm interaction; they never perform
- White cards on a neutral page background — depth through shadow, not color stacking
- Dense but navigable: information is present without overwhelming

## 2. Colors: The Facility Palette

A functional spectrum, not a decorative one. Each color maps to a navigational role; its presence on any element tells the user which section they're in.

### Panel anchors — one blue ramp
Seven panels, one hue family, stepping steadily darker down the sidebar. The
ramp is the wayfinding: position in the list and depth of the blue move
together, so the header tells you how far down the nav you are. Steps are even
at ~4.0 ΔE (OKLab ×100), a deliberate compromise twice over. Seven hues would
separate further, but every panel title sits in its own header, so color is a
second cue here and never the only one. A wider ramp was also possible — and
rejected: pushing the dark end past ~14:1 turns the last two anchors into
near-black, which reads as plain ink wherever the panel color is used as text
rather than as a filled bar.

Each value clears 4.5:1 on all three surfaces it touches: white header text,
and the panel color used *as text* on the sidebar active tint (`#f0f4fa`) and
the link hover tint (`#e8f0fb`). That third check is the binding one — it sets
how light the top of the ramp can go.

| # | Panel | Hex | On white | On `#f0f4fa` | On `#e8f0fb` |
|---|-------|-----|----------|--------------|--------------|
| 1 | Tech Transfers | `#257494` | 5.24:1 | 4.75:1 | 4.57:1 |
| 2 | Process Design & Specs | `#1a678e` | 6.22:1 | 5.64:1 | 5.42:1 |
| 3 | Equipment & Automation | `#125a88` | 7.38:1 | 6.69:1 | 6.43:1 |
| 4 | Process/Cost Models & Cheat Sheets | `#0e4d81` | 8.76:1 | 7.94:1 | 7.63:1 |
| 5 | Basecamp | `#0f407a` | 10.32:1 | 9.35:1 | 8.99:1 |
| 6 | eVALRoche | `#123371` | 12.08:1 | 10.95:1 | 10.52:1 |
| 7 | Additional Resources | `#152569` | 14.00:1 | 12.68:1 | 12.19:1 |

Adding an eighth panel means re-spacing the whole ramp, not appending a color.
The top is already at the contrast floor, so a new step has to come out of the
middle.

### Supporting
- **Authority Navy** (`#1d4e89`): The system default, not a panel anchor. Sidebar active states, search focus rings, and link-button left borders where no panel color overrides.
- **Hero Navy** (`#1a3a5c`): The hero banner. Sits directly above every panel header; the cyan accent rule between them is what keeps steps 4 and 5 of the ramp from merging into it.
- **Station Blue** (`#2c5f8a`): Building 311 accordion header.
- **Bldg 312 Teal** (`#3a7a6b`): Building 312 accordion header. The one warm-side survivor of the all-blue change — it distinguishes the two facilities *within* a panel, a different job from the ramp, and going blue here would collide with whatever panel it sits in.
- **Upstream Green** (`#1a6b3c`) / **Operations Teal** (`#136076`): sub-heading labels for upstream and downstream groupings. No longer panel anchors.
- **Search Amber** (`#e6a817`): Used exclusively as the search-match indicator on sidebar buttons. Never decorative.

### Neutral
- **Page Fog** (`#f1f3f4`): Page background. Light neutral gray that keeps white cards readable without washing out.
- **Surface White** (`#ffffff`): Card and sidebar background. The primary reading surface.
- **Divider** (`#dadce0`): All borders — cards, sidebar, panel separators. One value, used consistently; never doubles as a text color.
- **Ink** (`#202124`): Primary body text and button labels. Near-black; maximum contrast on white.
- **Muted** (`#5f6368`): Secondary text — sidebar inactive labels, breadcrumbs, footer. Passes 4.5:1 on white; do not lighten further.
- **Hover Tint** (`#e8f0fb`): Link button hover background. A barely-there blue wash; not a panel anchor color.
- **Genentech Navy** (`#003366`): Genentech brand color. Used only for the wordmark and OCN MSAT nav link hover. Not an extensible panel color.
- **UI Label** (`#555`): Text color for sub-heading grouping labels and product subtab labels on their gray chip backgrounds. Do not use for body text.
- **Icon Muted** (`#9aa0a6`): Decorative icon color (search magnifier, chevrons). Used only on `aria-hidden` elements; never for informational text.
- **Amber Dark** (`#7a5200`): Deep amber text for search-match sidebar buttons — the dark companion to Search Amber. Used only on `.has-match` state.
- **Placeholder** (`#6b7280`): Input placeholder text. Passes 4.5:1 on white — do not lighten further.

### Named Rules
**The Panel-Color Rule.** Every navigation section has one assigned color. That color appears on exactly three surfaces: the sidebar button's active left border, the panel header background, and the `border-left` of link buttons within that panel. It appears nowhere else. Mixing a panel's color into another panel's content breaks the wayfinding system.

**The Amber Exception.** Amber (`#e6a817`) is reserved for search-match state. It should not appear anywhere that doesn't signal a live search result.

## 3. Typography

**Display Font:** Lato Bold (self-hosted `fonts/lato-700.woff2`) — used exclusively for the Genentech wordmark in the top nav.
**Body Font:** Roboto variable (self-hosted `fonts/roboto-latin.woff2`, weights 100–900) — used for every other text element.
**Roche Strapline:** Georgia (system serif, italic) — used exclusively for the "A Member of the Roche Group" tagline beneath the wordmark. This is Roche brand convention, not an extensible style; no other element should use a serif typeface.

**Character:** Roboto's neutrality is the point. This is a reference tool; the typography gets out of the way so the content can speak. Lato's geometric boldness is reserved for the brand mark, where it provides contrast. No editorial pairings, no display sizes competing with content.

### Hierarchy
- **Hero** (weight 300, 2.2rem, letter-spacing 0.18em, uppercase): The "Process Engineering Repository" banner in the hero bar. One use; do not apply this treatment to in-page headings.
- **Panel Title** (weight 700, 1rem, letter-spacing 0.07em, uppercase): Panel header bars and building accordion headers. ALL CAPS with tracking; the most visually assertive internal label. Limit to navigation headers only.
- **Sidebar Label** (weight 600, 0.84rem): Sidebar navigation buttons. Semi-bold for legibility at small size; not uppercase.
- **Body / Link Button** (weight 400–500, 0.875rem, line-height 1.3): The default content type. Link button labels use weight 500; paragraph/metadata text uses 400.
- **Sub-heading Label** (weight 700, 0.67rem, letter-spacing 0.09em, uppercase): Section dividers inside panels — "UPSTREAM", "DOWNSTREAM", etc. Small-caps treatment at the tightest size in the system; used only for grouping labels, never for navigation items or body content.

### Named Rules
**The Two-Scale Rule.** The system has two legibility tiers: 0.875rem for reading, 0.67rem for labeling. Do not introduce intermediate sizes to "split the difference" — they collapse the hierarchy. If something feels too small at 0.875rem, the problem is weight or color, not size.

**The Uppercase-Only-for-Labels Rule.** ALL CAPS is used exclusively for panel titles and sub-heading labels — navigational structure elements. Never uppercase body text, button labels, or search content. Uppercase applied to reading text signals incorrect hierarchy.

## 4. Elevation

This system uses shadow-based depth, not tonal layering. The page background is gray (`#f1f3f4`); white cards sit on top of it. Depth is a single-step system: cards are at rest at low elevation, and lift to a higher shadow on hover. There is no mid-elevation state.

### Shadow Vocabulary
- **Card Ambient** (`0 1px 3px rgba(60,64,67,0.15), 0 1px 2px rgba(60,64,67,0.10)`): Applied to sub-section cards and building-body sub-sections at rest. Google Material-inspired: two-layer shadow for softness.
- **Card Hover** (`0 3px 10px rgba(60,64,67,0.20), 0 2px 4px rgba(60,64,67,0.12)`): Applied on card hover, alongside `transform: translateY(-2px)`. Signals the surface is interactive.
- **Building Accordion Hover** (`0 8px 28px rgba(60,64,67,0.18)`): Larger diffuse shadow for the accordion container on hover. More dramatic lift; matches the larger card surface.
- **Search Panel** (`0 4px 20px rgba(0,0,0,0.13)`): Dropdown panel that appears above content; needs a sharper pop than ambient card shadows.
- **Top Nav** (`0 1px 4px rgba(0,0,0,0.10)`): Light rail under the nav bar to separate it from the hero.

### Named Rules
**The Flat-at-Rest Rule.** Surfaces are at their minimum shadow at rest. Shadow increases on hover as a response to interaction, not as a permanent decoration. A card at rest should read as flat; its shadow is visible but not dramatic.

**The One-Step Lift Rule.** There is one hover state, not a cascade. Do not add an intermediate elevation between rest and hover, and do not add a pressed/active elevation deeper than rest. The `:active` state reduces shadow slightly (`--shadow-card`), confirming the press.

## 5. Components

### Link Buttons
The primary navigational affordance — every resource link in the system is a link button. Character: direct and unambiguous. The left border is the panel's color; the button is otherwise white and quiet until hovered.

- **Shape:** Gently curved (5px radius, `{rounded.sm}`)
- **Default:** White background (`{colors.surface}`), `border: 1px solid {colors.border}`, `border-left: 4px solid var(--col-color)`, ink text (`{colors.text-dark}`), min-height 46px, padding 10px 14px
- **Hover:** Blue-tinted background (`{colors.blue-hover-bg}`), border-left widens to 5px, text shifts to panel color, slides right `translateX(3px)`, shadow lifts to `--shadow-hover`
- **Active:** Translates back to `translateX(1px)`, shadow returns to `--shadow-card`
- **Transition:** 0.12s on background, box-shadow, color; 0.1s on transform

### Sub-heading Labels (Section Dividers)
Used inside panels to group related link buttons. Character: functional chip, not a heading. The left border tint echoes the panel's color; the gray background signals a non-interactive grouping element.

- **Shape:** 3px radius
- **Default:** Light gray background (`#f0f2f5`), `border-left: 3px solid var(--col-color)`, 0.67rem all-caps Roboto Bold, muted ink (`#555`), padding 5px 8px
- **Upstream variant:** Green tint background (`#edf7f1`), green text (`{colors.green-upstream}`), green border
- **Downstream variant:** Teal tint background (`#e8f4f8`), teal text, Operations Teal border

### Sub-section Cards
Groups of related link buttons are wrapped in a card. Character: a filing drawer — white, organized, with a shadow that lifts on hover to show the whole card is interactive.

- **Shape:** Rounded corners (8px, `{rounded.md}`)
- **Default:** White surface, `box-shadow: {shadow-card}`, `padding-bottom: 8px`, `overflow: hidden`
- **Hover:** `translateY(-2px)`, shadow lifts to `0 4px 16px rgba(60,64,67,0.18)`
- **Transition:** box-shadow and transform, 0.2s ease

### Sidebar Navigation Buttons
The primary tab set. Character: a clean vertical list where the active item announces itself with a color bar on its left edge.

- **Default:** White background, `border-left: 4px solid transparent`, 0.84rem semi-bold (weight 600), muted text (`{colors.text-medium}`), `border-bottom: 1px solid {colors.border}`
- **Hover:** Pale gray background (`#f4f6f9`), left border takes panel color
- **Active:** Light blue tint (`#f0f4fa`), left border solid with panel color, text shifts to panel color, weight 700
- **Search-match state:** Amber background (`#fffbe6`), amber left border, dark amber text — used when a search highlights that panel has matching results

### Building Accordions
`<details>` elements that reveal a grid of sub-section cards. Character: a section of the facility — the header announces the zone, the grid reveals the contents.

- **Header Shape:** Fully rounded (12px top, `{rounded.lg}`) on the outer container
- **Building 311 header:** `#2c5f8a` background (Station Blue), white text, uppercase weight 700, 0.08em tracking
- **Building 312 header:** `#3a7a6b` background (Bldg 312 Teal), same treatment
- **Chevron:** Rotates 180° on open, `0.22s ease`
- **Body:** Grid layout `repeat(auto-fill, minmax(240px, 1fr))`, 14px gap, panel background (`{colors.bg-page}`)
- **Container hover:** Lifts with `0 8px 28px rgba(60,64,67,0.18)` and `translateY(-2px)`

### Search Input
Pill-shaped field in the top nav. Character: quiet and recessed at rest; focuses to a clear blue ring.

- **Shape:** Fully rounded (20px, `{rounded.pill}`)
- **Default:** Pale gray background (`#f4f6f9`), `border: 1px solid {colors.border}`
- **Focus:** White background, `border-color: {colors.blue-primary}`, `box-shadow: 0 0 0 3px rgba(29,78,137,0.12)`
- **Clear button:** Appears on input, `position: absolute` right-aligned, circular hover state

### Product Accordions (Tech Transfers)
Narrower nested accordions inside the Tech Transfers panel. Character: a structured table of contents per product — open one to reveal its document categories.

- **Row:** White background, `border-left: 4px solid {colors.teal-tech}`, 0.9rem weight 600, min-height 48px
- **Hover:** Teal-tinted background (`#e8f4f8`), text shifts to teal
- **Subtab group:** White surface card with card shadow; group label uses the sub-heading label style

## 6. Do's and Don'ts

### Do:
- **Do** use a panel's assigned `--col-color` value for that panel's sidebar button border, panel header background, and link-button left borders — and only those three surfaces.
- **Do** keep all body text at minimum 4.5:1 contrast against its background. Muted text (`{colors.text-medium}`, `#5f6368`) on white is the floor — do not lighten further.
- **Do** use `transform: translateY(-2px)` paired with a shadow increase for interactive card hover. Both must move together; shadow alone feels flat and transform alone feels weightless.
- **Do** animate all state transitions at 0.12–0.22s with ease or ease-out curves. The system has a consistent tempo; don't introduce durations outside this range without cause.
- **Do** keep sub-heading labels to 0.67rem uppercase Roboto Bold. If a grouping label needs to be more prominent, that's a signal to reconsider the information hierarchy, not to increase the label size.
- **Do** provide a `@media (prefers-reduced-motion: reduce)` alternative for all transitions (panel fade, accordion open, link-button slide). Disable transform and reduce opacity change to instant or near-instant.

### Don't:
- **Don't** let the page look like a 2005 company intranet. No dense link tables without visual structure, no Times New Roman, no Windows XP blues (flat, light, unsaturated), no zero whitespace between elements.
- **Don't** introduce dark mode, glassmorphism, gradient text, or hero-stat metric grids. This is a utility tool; SaaS dashboard aesthetics break the register entirely.
- **Don't** use `border-left` greater than 5px as a decorative accent on cards or list items at rest. The 4px left border on link buttons and 3px on sub-headings are structural indicators, not decorative stripes — widening them beyond hover state makes them feel stylistic.
- **Don't** uppercase body text, navigation labels, or search content. ALL CAPS is reserved for panel titles and sub-heading grouping labels.
- **Don't** add a new panel without assigning it a `--col-color` from the existing color spectrum. Panels without a color identity break the wayfinding system.
- **Don't** use amber (`{colors.amber-search}`) outside of search-match state indicators. Its scarcity is what makes it legible as a signal.
- **Don't** apply gradient text (background-clip: text with a gradient fill). Use a single solid color for all text. Emphasis belongs to weight or size, never to decoration.
- **Don't** nest cards inside cards. The sub-section card is already inside the content area; placing another card inside it creates a nesting that the shadow system cannot resolve cleanly.
