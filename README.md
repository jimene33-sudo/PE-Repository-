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
coming-soon.html                    Shown by any button with no document behind it yet
edit-guide.html                     "How to Edit This Repo" — the walkthrough linked
                                      from Additional Resources
poster-figure.html                  Standalone figure, not linked from the site

  Sub-pages (each embeds one document in a viewer frame)
cell-culture-overview.html
cell-culture-process-intensification.html
chromatography.html
media-prep-hold.html
purification-overview.html
product-a.html … product-e.html     Individual product pages (A–E)

docs/                               Documents served BY the site rather than linked.
  upstream-pfds-312.pdf               See "Open items" — this folder is the one place
  downstream-pfds-312.pdf             the repo holds documents instead of pointing at
  solution-prep-pfds-312.pdf          them, which is worth understanding before adding
                                      anything to it.
fonts/
  lato-700.woff2                    Lato Bold — self-hosted, no Google needed
  roboto-latin.woff2                Roboto (all weights) — self-hosted, no Google needed
GNE_Logo_Strapline_BLK_081525.svg   Genentech logo used in the top nav

  Design and product documentation (not part of the site)
CLAUDE.md                           Working instructions and the six named design rules
DESIGN.md                           Full visual spec — colors, type, components
PRODUCT.md                          Strategic intent
```

### The tabs

Seven sections, in sidebar order. The hex is that panel's colour identity, which
appears on exactly three surfaces: the sidebar active border, the panel header
background, and the left border of its link buttons.

| # | Tab | Panel id | Colour |
|---|-----|----------|--------|
| 1 | Tech Transfers | `panel-2` | `#257494` |
| 2 | Process Design & Specs | `panel-3` | `#1a678e` |
| 3 | Equipment & Automation | `panel-4` | `#125a88` |
| 4 | Process/Cost Models & Cheat Sheets | `panel-5` | `#0e4d81` |
| 5 | Basecamp | `panel-7` | `#0f407a` |
| 6 | eVALRoche | `panel-8` | `#123371` |
| 7 | Additional Resources | `panel-6` | `#152569` |

**The panel ids are not in sidebar order** — `panel-6` and `panel-7` were added
before the order settled, and renumbering them would touch every reference in the
markup and the JavaScript for no functional gain. Go by the label, not the number.

---

## How to update links

Buttons with no document behind them point at `coming-soon.html`, which renders a short page explaining that the button works but nothing has been linked to it yet. The button's own label is passed along in `?doc=` so that page can name it.

**This replaced an older `href="#"` convention.** A bare `#` looked identical to a working button and did nothing when clicked, which read as broken. There are no `href="#"` buttons left in the site; if you add one, you are reintroducing that problem.

**Changing a placeholder to a real link:**
```html
<!-- Before -->
<a href="coming-soon.html?doc=Bioreactors" class="link-btn">Bioreactors</a>

<!-- After -->
<a href="https://your-real-url-here" class="link-btn" target="_blank" rel="noopener">Bioreactors</a>
```

Note the two attributes that get added along with the URL: `target="_blank"` opens the document in a new tab so the reader doesn't lose the repository, and `rel="noopener"` is a standard security precaution that goes with it. Internal links to pages inside this repo don't need either.

**Going the other way** — if a link dies and you want to park the button:
```html
<a href="coming-soon.html?doc=Button%20Label%20Here" class="link-btn">Button Label Here</a>
```
Spaces in the `?doc=` value are written `%20`, and a slash is `%2F`.

> **Watch out for duplicate labels.** Several button labels appear more than once in different sections — `Upstream` and `Downstream` each appear four times, for instance, under both *Process Fit Models* and *Mass & Energy Balances*. A find-and-replace on the label or the URL will hit all of them. Before editing, scroll up from the button to the nearest `building-header bldg-311` / `bldg-312` line to confirm which building you're in, and to the nearest `sub-heading` to confirm the section.

---

## Links that are already connected (Google-based — update if moving to Microsoft)

These buttons have real links pointing to Google Docs/Drive. If Genentech moves to Microsoft 365, replace each `href` value with the equivalent SharePoint/OneDrive URL.

> **Line numbers used to be listed here and have been removed.** They were wrong within a fortnight — everything below line 200 shifted by about 28 lines as sections were added above. Find buttons by searching for their label text (`Cmd+F`), and check which building's accordion you have landed in, because most labels appear in both.

### Top navigation (2 places)

| Location | Current URL |
|---|---|
| Genentech logo (clickable) | `https://sites.google.com/gene.com/oceanside-msat/ocn-msat` |
| "OCN MSAT" nav button | `https://sites.google.com/gene.com/oceanside-msat/ocn-msat` |

Both point to the same OCN MSAT Google Site, and both live in the `<nav class="topnav">` block at the top of `index.html`. Update them together.

---

### Tech Transfers tab — Building 311 folder

| Button label | Current URL |
|---|---|
| Open Building 311 Tech Transfer Folder | Google Drive folder |

---

### Equipment & Automation tab — Building 311

All of these point to tabs within the same Google Sheet (`1QNP9ZL3BJLuwrZ4NPC0ZlD-AIS_EIR_004NcI4lcXrk`). The `#gid=XXXXXXX` at the end selects which tab opens.

**Upstream Equipment Assets**

| Button label | Sheet tab (gid) |
|---|---|
| Media Prep/Hold | 2018799983 |
| Seed Vessels | 2060189543 |
| Bioreactors | 2060189543 |
| Harvest | 508020010 |

**Downstream Equipment P1**

| Button label | Sheet tab (gid) |
|---|---|
| Buffer Prep/Hold | 948042938 |
| Chrom Skids | 1678843139 |
| Chrom Columns | 1787453987 |
| Pool Vessels | 948042938 |
| Viral Filtration | 1106166267 |
| UFDF | 1613798372 |
| Final Form | 1613798372 |
| Fill & Freeze Thaw | 902795370 |

**Downstream Equipment P2**

| Button label | Sheet tab (gid) |
|---|---|
| Buffer Prep/Hold | 948042938 |
| Chrom Skids | 1678843139 |
| Chrom Columns | 1787453987 |
| Pool Vessels | 948042938 |
| Viral Filtration | 1106166267 |
| Final Form | 1613798372 |
| Fill & Freeze Thaw | 902795370 |

**Ancillary Equipment**

| Button label | Sheet tab (gid) |
|---|---|
| Caustic System | 1191589342 |

---

### Equipment & Automation tab — Building 312

Building 312's equipment buttons are all placeholders pointing at `coming-soon.html` — none are connected. Unlike Building 311, there is no equivalent Google Sheet; the labels were written first and the documents were never supplied.

---

## Document submissions

The home page has a quiet line under the building photos:

> Know of a document that belongs here — upstream or downstream? **Suggest a document**

That link points at a single shared folder. Anyone on the team drops a file in; an admin reviews what's in there and adds the ones that belong to `index.html`. A static site can't accept uploads by itself, so the folder does the receiving — the site only links to it. There is no way around that without a server; any drop zone built into the page would still have to hand the file off to Drive or SharePoint.

The whole feature is **one `href` in `index.html`**. Nothing else about the site depends on it, which is what makes the Microsoft migration below a one-line change.

> **Status: connected.** `https://drive.google.com/drive/folders/1prUyXu7Xzy9ahqkmwQwa7Gp_0kbzVy4V`, on the MSAT shared drive.

### One folder, referenced from both PE folders

Process Engineering has two folders on the MSAT shared drive — Upstream and Downstream — and the intake has to be reachable from both. It does **not** follow that there should be two submissions folders.

There is one real folder, with a **Drive shortcut** to it placed inside each of the two PE folders. A shortcut is a pointer, not a copy, so both teams see the intake in their own folder tree while everything still lands in one place. Two folders would mean two queues to watch and a standing chance that something sits unread in whichever one the admin checks less often.

Both PE folders being on the same shared drive is what makes this safe: membership is granted at the drive level, so anyone who can reach one side can open the shortcut from the other. **If the two are ever split onto separate shared drives, the shortcut breaks** — a member of only one drive gets a "Request access" screen — and the intake would have to move to a Google Form, whose permissions are independent of Drive ACLs.

Sorting happens *inside* the folder rather than at the link, via three subfolders:

```
PE Repository — Document Submissions/
├── Upstream/
├── Downstream/
└── Not sure — file it for me/
```

The third one is not padding. Plenty of what belongs here is neither upstream nor downstream — facility drawings, cost models, cheat sheets, Basecamp exports — and without a bucket for them people either guess wrong or don't submit at all.

### Setup (Google Drive — do this once)

Already done for the folder above; these are the steps to repeat if it ever has to be rebuilt.

1. Create the folder inside a **Shared Drive**, not personal My Drive. A My Drive folder is owned by one person and can disappear when that account is deprovisioned — fatal for a site meant to outlast whoever set it up.
2. Add a shortcut to it in each PE folder that needs to reference it: right-click the folder → **Organize** → **Add shortcut** → pick the destination.
3. Share the folder with your team as **Contributor** — the only level that can upload but cannot move or delete, so people can add files without removing each other's. Keep yourself as Manager or Content manager, since moving files *out* is what clears the queue.
4. Copy the folder's URL. Link the **folder** (`drive.google.com/drive/folders/<id>`), not the Shared Drive root, and not the shortcut. Drop the trailing `?usp=drive_link` (share tracking, not needed) and any `/u/0/` segment — the latter refers to the account slot in *your* browser and can send a colleague to the wrong account.
5. Open `index.html`, find `class="home-suggest-link"`, and set the `href` to that URL:

```html
<a href="https://drive.google.com/drive/folders/YOUR-FOLDER-ID" class="home-suggest-link" target="_blank" rel="noopener">Suggest a document</a>
```

6. Optional: add an empty Google Doc named `_SUGGESTIONS` inside the folder. A Drive folder only holds files, so that Doc is where people paste **links** to documents that already live somewhere else (Veeva, another Drive folder).

### Admin workflow

The folder *is* the queue — no tracker to maintain:

1. Open the submissions folder. Anything sitting in it — in any of the three subfolders — is unprocessed.
2. For each file, decide where it belongs, then **move it** out of the submissions folder into its real home. Treat the Upstream/Downstream split as the submitter's guess, not a routing instruction; anything in "Not sure" is yours to place.
3. Add a `link-btn` line to the right section of `index.html` (see "How to update links" above), then commit and push.
4. An empty folder means the queue is clear.

Because step 2 moves the file out, you never need to mark anything as "done" — presence in the folder is the only state.

---

## Switching the submissions folder to SharePoint

When Genentech completes the move to Microsoft 365, the Drive folder becomes a **SharePoint document library**. The site change is one line; the rest is setup on the SharePoint side.

### Why a library and not a Microsoft Form

Microsoft Forms has a file-upload question type, but uploaded files land in **the form owner's OneDrive** — personal storage, same deprovisioning problem as a My Drive folder. A document library on a team-owned SharePoint site avoids that, and a library already does everything the intake needs with no custom code:

| Need | Handled by |
|---|---|
| Drag files in | Native browser drag-and-drop into the library |
| Suggest a link instead of a file | A "Source Link" text column |
| Which building / section | **Choice** columns |
| Triage state | A **Status** Choice column: `New` / `Reviewing` / `Added` / `Rejected` |
| Who submitted it | The built-in **Created By** column, automatically |
| Notification on new upload | Power Automate flow (see below) |

A library is a real step up from the Drive folder: you get per-file metadata and status, so the queue can hold context instead of just filenames.

### Steps

1. Ask whoever administers your SharePoint tenant for a **team site** for PE (or use an existing one), and create a document library named `Repository Submissions`.
2. Add columns via **+ Add column**:
   - `Status` — Choice: `New`, `Reviewing`, `Added`, `Rejected`. Default `New`.
   - `Building` — Choice: `311`, `312`, `Both`.
   - `Section` — Choice, matching the sidebar sections.
   - `Source Link` — single line of text, for link-only suggestions.
   - `Notes` — multiple lines of text.
3. Set the library view to filter on `Status = New` so the default view is the inbox.
4. Optional notification — a Power Automate flow using the **"When a file is created (properties only)"** SharePoint trigger, sending an email or Teams message. This runs on **standard connectors**, so the Microsoft 365 license your account already has covers it; no premium Power Automate license is needed.
5. Update the one line in `index.html` — same edit as step 4 above, with the library URL:

```html
<a href="https://YOURTENANT.sharepoint.com/sites/YOURSITE/Repository%20Submissions"
   class="home-suggest-link" target="_blank" rel="noopener">Suggest a document</a>
```

6. Point the old Drive folder at the new library (a text file with the URL) and stop watching it, so submissions don't split across two places.

### Notes and gotchas

- **Skip SharePoint's "Request files" feature.** It allows uploads without sign-in, but requires org-wide "Anyone" sharing links to be enabled — commonly blocked in pharma tenants. You don't need it: every submitter is a signed-in Genentech employee.
- **Don't route submitted documents through this GitHub repo.** Committed files are permanent and GitHub is outside Genentech's boundary. The repo should only ever hold the *link* to a document, never the document itself.
- **Per-file ceiling** in a SharePoint library is 250 GB — irrelevant in practice, but far above the 1 GB cap a Microsoft Form would impose.
- The site-side CSS (`.home-suggest`, `.home-suggest-link` in `style.css`) is platform-agnostic. Nothing there needs to change.

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
git push origin main
```

The GitHub remote is: `https://github.com/jimene33-sudo/PE-Repository-.git`

---

## Installing Claude Code in VS Code

Claude Code is an AI coding assistant that can help you edit this repo. To install it in VS Code:

1. Open the Extensions view: `Cmd+Shift+X` (Mac) or `Ctrl+Shift+X` (Windows)
2. Search for **Claude Code**
3. Click **Install** (extension ID: `anthropic.claude-code`)

After installing, click the spark icon (✱) in the top-right corner of VS Code to open Claude Code and sign in with your Anthropic account.

> Requires VS Code 1.94.0+ and a paid Claude subscription (Pro, Max, Team, or Enterprise).

---

## Handover

Built during a summer 2026 internship that ended 4 September 2026. `git log` shows
every change and why; commit messages carry the reasoning, not just the what. What
follows is the part that isn't in the code.

### Where the site lives

| | |
|---|---|
| Repo | `github.com/jimene33-sudo/PE-Repository-` |
| Live site | `jimene33-sudo.github.io/PE-Repository-` |
| Hosting | GitHub Pages, published from `main` |

**This is a personal GitHub account, not a Genentech one.** It was created with a
Genentech email address, which does not make it company-managed — the account is
`type: User`, belongs to no GitHub organization, and cannot be administered,
transferred, or deactivated by Genentech IT. The manager at the time was added as a
repository collaborator so that someone at Genentech has access, but collaborator
access is not ownership.

**The repository is public.** Everything in it, including this file and everything
in `docs/`, is readable and downloadable by anyone on the internet with no sign-in.
This was raised with the manager, who assessed it and was not concerned; it is
recorded here as fact rather than as an open action.

Moving the repo into a Genentech GitHub organization is the durable fix: it puts the
repo under company control, and if that org is on GitHub Enterprise Cloud the Pages
site can be published privately so only org members can reach it, with no change to
the HTML. A conversation with IT about this was started and not concluded. GitLab is
**not** a destination — it was being decommissioned, which is why the site was on
GitHub in the first place.

### Open items

| What | Where | Notes |
|---|---|---|
| **35 placeholder buttons** | throughout | Point at `coming-soon.html`. Each needs a document. |
| **10 eVALRoche buttons** | eVALRoche tab | All land on the same login page — see below. |
| **4 `smb://` buttons** | Process Design & Specs → EDS | Chrome and Edge refuse `smb://` silently, so these do nothing when clicked, with no error. All four point at the same folder. Needs either an HTTPS equivalent or conversion to selectable copy-paste text. |
| **3 PDFs in `docs/`** | Process Design & Specs → 312 → PFDs | The only documents the site hosts rather than links. **Not in Veeva** — checked. The 311 equivalents all link to one Veeva document (`559802`); 312 has no counterpart. |
| **4 Biosolve entries** | Process/Cost Models → Models | Continuous, Test, Live and Nimble Model are unlinked. |
| **Utility Capacities & Limits** | Global Plant Utilities, both buildings | Requested from Allison; not yet supplied. |

### Who to ask

- **Allison** — WFI, clean steam, and plant utilities. The AWFI/HWFI/clean steam
  links under Global Plant Utilities came from her. The outstanding request is
  utility capacities and limits.
- **Bahar** — manager at handover time; repository collaborator.
- **IT** — hosting and the GitHub organization question.

### Decisions that look like mistakes and aren't

Read this before "fixing" any of the following.

- **The 311/312 split in the eVALRoche tab is this repository's, not eVALRoche's.**
  eVALRoche has no per-building branch: `Inventory → Oceanside → Custom Systems`
  holds one set of `CU` folders covering both buildings. The two accordions were kept
  so the tab reads like the other four, which does mean the same folder is reachable
  from both. The note at the top of that panel says so, and needs to stay if the
  structure does.
- **All ten eVALRoche buttons point at the same URL on purpose.** The platform is
  ASP.NET WebForms; its navigation runs on `__doPostBack` and never changes the
  address bar, so there is no per-folder URL to link. Navigating four different areas
  produced zero browser history entries. The click path is stated once in the panel
  note instead of repeated under every button. This is a platform limitation — the
  ask goes to whoever administers the ValGenesis instance, not to this repo.
- **`coming-soon.html` is the deliberate placeholder**, not a dead link. See
  "How to update links".
- **The seven tab colours are a checked ramp, not seven arbitrary blues.** Each one
  clears 4.5:1 against white *and* against the two pale tints it sits on as text
  (`#f0f4fa` sidebar-active, `#e8f0fb` link-hover) — that third check is what caps how
  light the lightest one can be. Adding an eighth tab means re-spacing the whole ramp,
  not appending a colour. Values and ratios are tabulated in `DESIGN.md`.
- **Building 312's accordion tick stays teal** while everything else went blue. It
  separates the two facilities *inside* a panel, which is a different axis from the
  tab colours; making it blue would collide with whichever panel it appears in.
- **`solution-prep-pfds-312.pdf` carries the internal title
  "14.02B_Upstream OSUT PFDS…"** — possibly stale metadata from a Save As, possibly
  the wrong file. Never verified. Worth opening before trusting that button.

### A standing rule from this README, worth keeping

> Don't route submitted documents through this GitHub repo. Committed files are
> permanent and GitHub is outside Genentech's boundary. The repo should only ever
> hold the *link* to a document, never the document itself.

The three PDFs in `docs/` are the existing exception to that rule, which is why they
are called out above.
