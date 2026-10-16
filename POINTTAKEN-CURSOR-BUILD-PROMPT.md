# Cursor Build Prompt — PointTaken / $PT

Paste this prompt into Cursor **after extracting `pointtaken-story-website.zip` into the project workspace**. The ZIP contains the approved visual previews, original artwork, a static HTML prototype, and the canonical full story. This prompt and that archive are the complete project brief; do not rely on chat history.

---

## Your role and goal

Act as a senior product designer and front-end engineer. Build a polished, responsive, production-ready PointTaken website from the supplied art and approved section previews. The result should feel like a dramatic basketball editorial crossed with a funny courtside comic—not a standard crypto landing-page template.

Do not stop at a plan or a static screenshot. Inspect the repository, implement the site, run the available checks/build, and fix issues you find.

## Project identity

- **Name:** PointTaken
- **Ticker:** $PT
- **Narrative:** A sharp-eyed basketball hero makes one unmistakable call; Bouncy, a very opinionated basketball, turns it into an absurd investigation involving a runaway replay printer, an unauthorized coaching career, the Bureau of Calls, and a nacho appeal.
- **Primary characters:** The Pointer (the confident player who makes the call), Bouncy (the expressive basketball sidekick), and The Ref (the patient official with a whistle that sounds like a duck).
- **Visitor experience:** Understand the joke and characters immediately, read the six-chapter story, see the project’s stated settings in the basketball-coded Box Score, and follow the buying guide as a four-quarter Playbook.
- **Voice:** Funny, confident, observant, lightly absurd, readable internationally. Keep jokes short in navigation and labels; let the chapters carry the longer humor.
- **Independence:** PointTaken and its characters are fictional and independent. Do not imply endorsement, affiliation, or licensing by an athlete, team, league, or sports organization.

## Design direction

Treat the included `section-previews/*.png` as the approved composition and visual direction. Match their scale, hierarchy, alternating cream/dark sections, energetic court photography, oversized condensed headlines, score-card layouts, generous whitespace, and vivid story art. The supplied `pointtaken-story-site/index.html` is an additional working prototype and content reference. Inspect both it and the individual preview images before implementation.

Keep the established palette:

- Night-court navy: `#091323`
- Warm paper: `#F1EADB`
- Off-white: `#FFF9EC`
- Scoreboard orange: `#FF654F`
- Buzzer gold: `#EBC35B`
- Court teal: `#53D5C9`

Typography direction: **Barlow Condensed** (or a close condensed athletic display face) for giant headlines and character names; **DM Mono** for score labels, chapter markers, and microcopy; **DM Sans** for interface text; a readable serif for chapter prose. Add sensible local fallbacks. Keep PointTaken and `$PT` spelled exactly this way everywhere.

Avoid generic gradients, boxed-card grids everywhere, coin icons, charts implying price performance, sports-team logos, NBA/WNBA branding, and made-up contract/social links. Use court markings, arena lights, editorial stamps, scoreboard numerals, paper textures, crowd energy, and comic timing to make the site recognizable as basketball culture.

## Inspect before editing

1. Read `AGENTS.md`, Cursor rules, README, package manifests, existing routes/components, CSS conventions, scripts, and tests.
2. Preserve the repository’s current framework, useful code, and deployment setup. Do not replace a working stack merely to match the sample prototype.
3. If this is a genuinely empty project, use Vite + React + TypeScript for a static single-page experience. Do not add a backend, wallet connection, database, or dependency-heavy 3D stack.
4. Keep project details and editable links in one typed central configuration module. Keep the six story chapters in a separate content module, sourced verbatim from `pointtaken-story-site/pointtaken-hero-story.md`.
5. Put supplied production art under the project’s public/static asset directory, preserving the filenames in the manifest below. Keep the preview PNGs as visual references; do not use full-page screenshots as the live site background.

## Site structure and exact copy

Build one continuous, responsive page with sticky same-page anchor navigation. Do not create separate routes for these sections. Use these nav labels; avoid the generic labels “Tokenomics” and “How to Buy.”

### 1. Header

- Left: supplied PointTaken logo, `POINTTAKEN`, and small descriptor `COURTSIDE CHRONICLES · $PT`.
- Anchor links: `THE CAST`, `THE LEGEND`, `SCOREBOARD`, `THE PLAYBOOK`, `FAN BOARD`.
- CTA: `NEXT CALL ↗` linking to the finale or to a configured official social destination only when one exists.
- Keep it compact and legible. On narrow screens use a clear menu or horizontally scrollable nav; never let links collide.

### 2. Hero / tip-off

Use `hero.png` as the large arena scene and `logo.png` for brand identification. Preserve the player’s proportions and focal point; do not cover her face or pointing hand with text.

Exact copy:

- Eyebrow: `THE VERY UNOFFICIAL COURTSIDE CHRONICLES`
- Main wordmark: `POINT` / `TAKEN` / `$PT`
- Intro: `One suspicious bounce. One fearless finger. One basketball with way too much to say. Read the completely unnecessary, wildly over-reviewed origin story.`
- Primary button: `READ THE LEGEND ↓` → first chapter
- Secondary link: `MEET THE COURT →` → cast
- Round stamp: `01 / CASE FILE OPEN`
- Score strip: `1 FINGER / THE CALL`; `47 REPLAYS / THE EVIDENCE`; `0 CHIPS / SAFE FROM BOUNCY`

Make the first viewport dramatic: full-bleed arena, dark readable text field, powerful type, court-line detail, a restrained light sweep, and a clear route into the story.

### 3. Case ticker

Use a warm-paper scoreboard strip below the hero:

- `TONIGHT’S CASE` — `THE BALL VS. THE TABLE`
- `WITNESSES` — `4, PLUS A CEILING FAN`
- `STATUS` — `UNDER SNACK REVIEW`
- `RULING` — `STILL BEING ARGUED`

### 4. Character roster — “Meet the Court”

Use three distinct editorial character panels, not generic identical cards. Match `02-hero-cast.png`.

- Section label: `THE ROSTER · NO. 01`
- Heading: `MEET THE COURT.`
- Intro: `A hero with a point to make. A ball with a point to prove. A referee who desperately needs a different whistle.`
- **THE POINTER** — `One sharp finger. A memory like instant replay. No patience for a bad call.` Tag: `CALM UNDER QUESTIONABLE CIRCUMSTANCES`.
- **BOUNCY** — `A basketball with a whistle, a napkin armband, and the confidence to coach popcorn.` Tag: `SPECIALTY: STATIONARY SCREENS`.
- **THE REF** — `Trying to keep order while fans, snacks and evidence file appeals.` Tag: `WHISTLE SOUNDS LIKE A DUCK`.

Use the approved story art crops that best match each character. Preserve the face/gesture. Prefer `object-fit: contain` for character cutouts; use `cover` only for full scene artwork with intentional focal positioning.

### 5. Six-chapter legend

Match `03-chapter-01.png` through `08-chapter-06.png`. Add a clear six-item chapter jump bar. Desktop: alternate the large illustration left/right with the chapter copy and let the art sit sticky only while its chapter is in view. Mobile: stack art above copy and disable sticky positioning. Use actual chapter prose from `pointtaken-story-site/pointtaken-hero-story.md`; preserve all six chapters and their joke timing. Do not summarize or replace the canonical story.

Use these exact chapter titles and dek lines:

1. **THE BALL HAS NO ATTORNEY** — `One bounce. Three witnesses. Absolutely no useful testimony.`
2. **BOUNCY JOINS THE STAFF** — `A rogue basketball discovers the whistle and abuses its new authority.`
3. **THE REPLAY THAT ATE TUESDAY** — `A camera loop prints the same point until the gym becomes a paper blizzard.`
4. **THE BUREAU OF CALLS** — `The fans form a committee to review every tiny event, including a sneeze.`
5. **THE GREAT NACHO APPEAL** — `Bouncy mistakes a snack for a basketball and puts cheese on the record.`
6. **THE BUZZER IS NOT THE END** — `The crew learns the best call is sometimes a laugh and another chapter.`

Chapter art supplied for the sequences: `bouncy.png` (the scorer-table incident), `replay.png` (Bouncy’s popcorn/assistant-coach caper), `origin.png` (replay-printer chaos), `crowd.png` (Bureau/fan section), plus `hero.png` for the finale. Reuse them thoughtfully; do not stretch them or invent new characters.

### 6. Basketball project card — “The Box Score”

Match `09-box-score.png`. Use a warm-paper lineup/scoreboard composition with four prominent quarter-like stat columns. Do **not** call this section “Tokenomics”; the audience should recognize that the basketball-styled player card communicates the token settings.

- Eyebrow: `STARTING LINEUP · THE PROJECT AT A GLANCE`
- Heading: `THE BOX SCORE.`
- Intro: `Four numbers on the board. Read them like a player card: the roster size, the fouls, the net, and who holds the whistle.`
- `1B` — `FULL-COURT ROSTER` — small clarifier: `TOTAL SUPPLY · 1,000,000,000 $PT`
- `0%` — `NO PERSONAL FOULS` — `BUY / SELL TAX · 0%`
- `BURNED` — `EMPTY THE NET` — `LIQUIDITY POOL · BURNED`
- `RENOUNCED` — `COACH LEFT THE WHISTLE` — `OWNERSHIP · RENOUNCED`
- Note: `These are the project’s stated settings. Confirm the official contract and on-chain status before making a decision; the scoreboard is not a substitute for verification.`

The settings above are the project’s specified defaults. Keep them in central config so they can be corrected easily. Never imply that code or on-chain status was checked if it was not. Do not add supply allocation, wallet concentration, price, performance, or launch claims.

### 7. Basketball purchase guide — “Run the Play”

Match `10-the-playbook.png`. Do **not** use “How to Buy” as the display heading or nav label. A visitor should understand that this is the purchase walkthrough from the step copy and sequence.

- Eyebrow: `FOUR QUARTERS · ONE CAREFUL PLAY`
- Heading: `RUN THE PLAY.`
- Intro: `New to the court? Follow the sequence, check the ball twice, and never hand anyone your locker-room key.`
- `01 / TIP-OFF` — `LACE UP` / `CHOOSE YOUR WALLET` — `Use an Ethereum-compatible wallet you control. Keep your recovery phrase private and offline.`
- `02 / WARM-UP` — `GET COURT-READY` / `FUND WITH ETH` — `Have ETH available for the swap and network gas. Leave a little extra for the transaction fee.`
- `03 / JERSEY CHECK` — `VERIFY THE PLAYER` / `CHECK THE OFFICIAL CONTRACT` — `Get the contract address from PointTaken’s official channels. Match the Ethereum network and token before proceeding.`
- `04 / TAKE YOUR SHOT` — `MAKE THE PLAY` / `REVIEW, THEN SWAP` — `Use a reputable Ethereum DEX. Check the token, quote, slippage and total cost before confirming in your wallet.`
- Safety note: `KEEP YOUR HEAD IN THE GAME. Never share your seed phrase or trust a direct message with a “support” link. No contract address is published in this preview; wait for the official one and verify it yourself.`

This is an informational walkthrough only. Do not connect a wallet, trigger a transaction, promise safety, or insert a contract address, DEX link, or launch status that has not been supplied in configuration.

### 8. Bouncy timeout intermission

Create the bold orange full-width comic pause seen in the prototype, with oversized quote typography and a quiet halftone question mark:

- Eyebrow: `OFFICIAL TIMEOUT · BOUNCY HAS THE FLOOR`
- Quote: `“I OBJECT TO THE TABLE’S JURISDICTION.”`
- Copy: `Asked to clarify, Bouncy clarified that the popcorn bucket was its legal counsel. The bucket has declined comment and is currently covered in butter.`

### 9. Case File

Match `11-case-file.png`. Make this a separate scoreboard/evidence panel (not token data):

- Eyebrow: `THE BUREAU OF CALLS · OFFICIAL-ISH RECORD`
- Heading: `THE CASE FILE`
- `47 / IDENTICAL REPLAYS`
- `4 / WITNESSES`
- `1 / NACHO APPEAL`
- `0 / USEFUL ANGLES`
- Status: `STATUS: UNDER SNACK REVIEW`
- Caption: `The replay machine has been placed in a quiet room with tea.`

These are story jokes, not analytics. Visually distinguish this panel from the actual project settings in the Box Score.

### 10. Fan board

Match `12-fan-board.png` and use `crowd.png` as atmosphere:

- Eyebrow: `THE PEOPLE VS. THE ORIGINAL CALL`
- Heading: `THE CROWD DECIDES.`
- Copy: `Every witness has a version. The ceiling fan has declined to comment, which the Bureau considers suspicious.`
- Stat-style jokes: `47 / REPLAY PRINTS`; `1 / CONFUSED NACHO`; `∞ / STORIES FROM FANS`.

Keep participation as an honest invitation. If no real form/community service is configured, do not show a fake submit form or working social buttons. Use editable empty link values and hide/disable unavailable destinations accessibly.

### 11. Finale and footer

Match `13-finale.png`:

- Eyebrow: `FINAL BUZZER · CASE REMAINS OPEN`
- Heading: `WHO SAW WHAT HAPPENED?`
- Copy: `Every story from the stands earns a replay. Bouncy reserves the right to object to snacks.`
- Button: `BACK TO TIP-OFF ↑` → top of page.
- Footer name: `POINTTAKEN / $PT`
- Descriptor: `COURTSIDE CULTURE · STORIES FROM THE STANDS`
- Disclaimer: `Independent fictional basketball-comedy project. Not affiliated with a professional athlete, team, or league. Story characters are original.`

## Asset manifest

All paths below are relative to the extracted ZIP root. Preserve filenames exactly when copying them into the app.

| Supplied file | Use |
|---|---|
| `pointtaken-story-site/assets/logo.png` | Header/footer brand mark |
| `pointtaken-story-site/assets/hero.png` | Hero and finale arena artwork; protect face and pointing hand |
| `pointtaken-story-site/assets/court.png` | Court/playbook and scoreboard atmosphere |
| `pointtaken-story-site/assets/crowd.png` | Fan Board and community background |
| `pointtaken-story-site/assets/bouncy.png` | The scorer-table incident / The Ref scene |
| `pointtaken-story-site/assets/replay.png` | Bouncy with popcorn / assistant coach scene |
| `pointtaken-story-site/assets/origin.png` | Replay-printer chaos scene |
| `pointtaken-story-site/pointtaken-hero-story.md` | Canonical full cast description and all six complete chapters |
| `pointtaken-story-site/index.html` | Existing full-page content/layout prototype; use as reference, not a reason to discard the project’s stack |
| `section-previews/00-story-section-overview.png` | Contact sheet of all approved visual sections |
| `section-previews/01-home-story-hero.png` | Hero composition |
| `section-previews/02-hero-cast.png` | Cast roster |
| `section-previews/03-chapter-01.png` … `08-chapter-06.png` | Six individual chapter panels |
| `section-previews/09-box-score.png` | Basketball-metaphor project settings |
| `section-previews/10-the-playbook.png` | Basketball-metaphor purchase walkthrough |
| `section-previews/11-case-file.png` | Fictional investigation stats |
| `section-previews/12-fan-board.png` | Audience/community section |
| `section-previews/13-finale.png` | Final call and footer direction |
| `section-previews/preview-notes.txt` | Visual direction summary |

The full-page section previews are visual targets, not production image backgrounds. Recreate their layout in HTML/CSS with the actual individual art files.

## Motion and interaction

Make the page feel like a live basketball editorial without sacrificing legibility or speed:

- Short hero entrance: arena light sweep, subtle scoreboard/stamp reveal, then settle. Keep the hero art readable.
- Smooth same-page anchor navigation and a thin reading-progress line.
- One-time chapter text/art reveal via `IntersectionObserver`; retain a visible fallback when JavaScript is disabled.
- Subtle court-line drawing or play-diagram reveal as the Playbook enters view.
- Small hover/focus feedback on chapter jumps and buttons; no fake live scores, spinning token coins, or flashing elements.
- Optional very restrained Bouncy bounce in empty decorative space, never over body text or the hero face.
- Respect `prefers-reduced-motion: reduce`; all content and navigation must remain usable without animation.
- Use CSS transforms/opacity and the supplied images. Avoid heavy 3D/WebGL or adding libraries solely for decorative motion.

## Responsive behavior and accessibility

- Design and verify at desktop (1440 px), tablet (~768 px), and mobile (~390 px).
- Keep headlines within the viewport; let long headings wrap naturally without clipping.
- Stack cast panels and story art/copy on mobile. Disable sticky chapter art on small screens.
- Keep the score values and four play steps readable at phone widths; use two-column metrics or a clear vertical stack, never tiny desktop columns.
- Use semantic landmarks/headings, descriptive alt text, keyboard-visible focus, adequate contrast, and real button/link elements.
- Do not rely on color alone to distinguish story status from token settings.

## Truthfulness and configuration

Create a central typed config for:

- `name: "PointTaken"`, `ticker: "PT"`, `chain: "Ethereum"`
- stated defaults: `totalSupply: "1,000,000,000"`, `tax: "0%"`, `liquidity: "Burned"`, `ownership: "Renounced"`
- `contractAddress: ""`
- editable `website`, `x`, `telegram`, `dex`, and chart destinations, defaulting to empty strings

Display `$PT` in visitor-facing text and `PT` where a ticker value without `$` is appropriate. Do not fabricate links or addresses. If a destination is empty, hide its button or render a clearly disabled control with an accessible explanation. Keep the on-chain verification note visible until actual deployment details are supplied.

## Finish and verify

1. Implement all sections and every chapter using the supplied source story.
2. Compare the rendered page against each section preview; fix layout drift, crop mistakes, small text, and header collisions.
3. Check desktop, tablet, and mobile widths. Check keyboard navigation and reduced-motion behavior.
4. Run the project’s existing lint/test/build commands. If you introduce a new command, document it. Resolve build errors and console errors.
5. Confirm all local images load, all header/chapter links land on the correct section, and no empty/fake contract or social destinations are active.
6. Leave the finished website implementation in the repository and summarize files changed, checks run, and any external values still needed (official contract address/social links). Do not deploy or publish unless the user explicitly requests deployment.
