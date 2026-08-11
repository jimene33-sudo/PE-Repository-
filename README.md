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

> **Line numbers shift whenever anything is added above them.** They're a rough guide only — find buttons by searching for their label text (`Cmd+F`), not by jumping to the line. Last verified 2026-08-03.

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
| 203 | Open Building 311 Tech Transfer Folder | Google Drive folder |

---

### Equipment & Automation tab — Building 311

All of these point to tabs within the same Google Sheet (`1QNP9ZL3BJLuwrZ4NPC0ZlD-AIS_EIR_004NcI4lcXrk`). The `#gid=XXXXXXX` at the end selects which tab opens.

**Upstream Equipment Assets**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 381 | Media Prep/Hold | 2018799983 |
| 382 | Seed Vessels | 2060189543 |
| 383 | Bioreactors | 2060189543 |
| 384 | Harvest | 508020010 |

**Downstream Equipment P1**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 388 | Buffer Prep/Hold | 948042938 |
| 389 | Chrom Skids | 1678843139 |
| 390 | Chrom Columns | 1787453987 |
| 391 | Pool Vessels | 948042938 |
| 392 | Viral Filtration | 1106166267 |
| 393 | UFDF | 1613798372 |
| 394 | Final Form | 1613798372 |
| 395 | Fill & Freeze Thaw | 902795370 |

**Downstream Equipment P2**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 399 | Buffer Prep/Hold | 948042938 |
| 400 | Chrom Skids | 1678843139 |
| 401 | Chrom Columns | 1787453987 |
| 402 | Pool Vessels | 948042938 |
| 403 | Viral Filtration | 1106166267 |
| 404 | Final Form | 1613798372 |
| 405 | Fill & Freeze Thaw | 902795370 |

**Ancillary Equipment**

| Line | Button label | Sheet tab (gid) |
|---|---|---|
| 409 | Caustic System | 1191589342 |

---

### Equipment & Automation tab — Building 312

Building 312's equipment buttons are all `href="#"` placeholders — none are connected yet. (An earlier version of this README listed Google Sheet links here; those buttons have since been rewritten with different labels, so the links are gone.)

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

## Questions or handoff

This site was built during a summer 2026 internship. For questions about the structure or design, the git history (`git log`) shows every change made and when. Each commit message describes what was changed.
