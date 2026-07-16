# PE Upstream + Downstream Repository

Internal dashboard for Genentech Oceanside MSAT Process Engineering. A single-page web app that organizes documents, spreadsheets, equipment assets, and resources for Buildings 311 and 312.

---

## How to open the site locally

No installation needed. Just open `index.html` in any web browser:

- **Mac:** Right-click `index.html` → Open With → your browser
- **VS Code:** Install the "Live Preview" extension, then right-click `index.html` → Show Preview

---

## File structure

```
index.html                          Main dashboard (all tabs, sidebar, search)
style.css                           All styles for the site
GNE_Logo_Strapline_BLK_081525.svg   Genentech logo used in the top nav
fonts/
  lato-700.woff2                    Lato Bold — self-hosted, no Google needed
  roboto-latin.woff2                Roboto (all weights) — self-hosted, no Google needed
cell-culture-overview.html          Sub-page: Cell Culture Overview
cell-culture-process-intensification.html
chromatography.html
media-prep-hold.html
product-a.html                      Sub-pages: individual product pages (A–E)
product-b.html
product-c.html
product-d.html
product-e.html
purification-overview.html
```

---

## How to update links

Most buttons in `index.html` currently use `href="#"` as a placeholder — meaning they don't go anywhere yet. When a real document or SharePoint link is ready, open `index.html` in any text editor, find the button by its label, and replace `href="#"` with the real URL.

**Example — changing a placeholder to a real link:**
```html
<!-- Before -->
<a href="#" class="link-btn">Bioreactors</a>

<!-- After -->
<a href="https://your-sharepoint-link-here" class="link-btn" target="_blank" rel="noopener">Bioreactors</a>
```

---

## Links that are already connected (Google-based — update if moving to Microsoft)

These buttons have real links pointing to Google Docs/Drive. If Genentech moves to Microsoft 365, replace each `href` value with the equivalent SharePoint/OneDrive URL.

### Top navigation (2 places)

| Location | Line in index.html | Current URL |
|---|---|---|
| Genentech logo (clickable) | 14 | `https://sites.google.com/gene.com/oceanside-msat/ocn-msat` |
| "OCN MSAT" nav button | 31 | `https://sites.google.com/gene.com/oceanside-msat/ocn-msat` |

Both point to the same OCN MSAT Google Site. Update both lines together.

---

### Tech Transfers tab — Building 311 folder

| Line | Button label | Current URL |
|---|---|---|
| 161 | Open Building 311 Tech Transfer Folder | Google Drive folder |

---

### Equipment & Automation tab — Building 311

All of these point to tabs within the same Google Sheet (`1QNP9ZL3BJLuwrZ4NPC0ZlD-AIS_EIR_004NcI4lcXrk`). The `#gid=XXXXXXX` at the end selects which tab opens.

**Upstream Equipment Assets**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 309 | Media Prep/Hold | 2018799983 |
| 310 | Seed Vessels | 2060189543 |
| 311 | Bioreactors | 2060189543 |
| 312 | Harvest | 508020010 |

**Downstream Equipment P1**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 316 | Buffer Prep/Hold | 948042938 |
| 317 | Chrom Skids | 1678843139 |
| 318 | Chrom Columns | 1787453987 |
| 319 | Pool Vessels | 948042938 |
| 320 | Viral Filtration | 1106166267 |
| 321 | UFDF | 1613798372 |
| 322 | Final Form | 1613798372 |
| 323 | Fill & Freeze Thaw | 902795370 |

**Downstream Equipment P2**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 327 | Buffer Prep/Hold | 948042938 |
| 328 | Chrom Skids | 1678843139 |
| 329 | Chrom Columns | 1787453987 |
| 330 | Pool Vessels | 948042938 |
| 331 | Viral Filtration | 1106166267 |
| 332 | Final Form | 1613798372 |
| 333 | Fill & Freeze Thaw | 902795370 |

**Ancillary Equipment**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 337 | Caustic System | 1191589342 |

---

### Equipment & Automation tab — Building 312 (partial)

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 357 | Chrom Skids | 1678843139 |
| 359 | Pool Vessels | 948042938 |
| 361 | UFDF | 1613798372 |
| 363 | Fill & Freeze Thaw | 902795370 |

---

## Fonts

Fonts are **self-hosted** inside the `fonts/` folder — no internet connection required to load them. The two files are:

- `fonts/lato-700.woff2` — Lato Bold (used in headings)
- `fonts/roboto-latin.woff2` — Roboto variable font (covers weights 300, 400, 500, 700)

The `@font-face` rules are at the top of `style.css`. Do not delete the `fonts/` folder.

---

## Saving and pushing changes to GitHub

After editing any file, save it and run these commands in the terminal from the project folder:

```bash
git add index.html style.css         # add whichever files you changed
git commit -m "describe what you changed"
git push github main
```

The GitHub remote is: `https://github.com/jimene33-sudo/PE-Repository-.git`

---

## Questions or handoff

This site was built during a summer 2026 internship. For questions about the structure or design, the git history (`git log`) shows every change made and when. Each commit message describes what was changed.
