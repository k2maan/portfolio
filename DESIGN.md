---
name: Ketuman Vishwakarma
description: A builder portfolio in plum-black ink on white, with flat lavender fields and a plum-black Work band.
colors:
  paper: "#ffffff"
  ink: "#1f1a26"
  muted: "#5e5868"
  line: "#e7e4ee"
  field: "#d6d8fc"
  field-ink: "#1f1a26"
  field-muted: "#45417a"
  panel: "#f0f0fd"
  accent: "#4b45a0"
  band: "#1f1a26"
  band-ink: "#efedf6"
  band-muted: "#aaa4b6"
  band-line: "#3a3344"
  band-accent: "#d6d8fc"
  paper-dark: "#18151d"
  ink-dark: "#f1eff6"
  muted-dark: "#aaa4b6"
  line-dark: "#2d2834"
  field-dark: "#cfd1f9"
  panel-dark: "#23202a"
  accent-dark: "#cfd1f9"
  band-dark: "#221e29"
  theme-color: "#d6d8fc"
  theme-color-dark: "#cfd1f9"
typography:
  display:
    fontFamily: "Funnel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Funnel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  email:
    fontFamily: "Funnel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 0.9rem + 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Funnel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  title:
    fontFamily: "Funnel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title-story:
    fontFamily: "Funnel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  handle:
    fontFamily: "Funnel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Funnel Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body-large:
    fontFamily: "Funnel Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Funnel Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-compact:
    fontFamily: "Funnel Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Funnel Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Funnel Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "Funnel Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  control: "4px"
  shot: "10px"
  panel: "14px"
  round: "999px"
spacing:
  gutter: "20px"
  gutter-wide: "40px"
  wide: "1080px"
  intro-top: "96px"
  projects-top: "80px"
  projects-bottom: "112px"
  band-top: "96px"
  band-bottom: "104px"
  contact-top: "88px"
  entry-row: "18px"
  story-row: "32px"
  index-gap: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "7px 16px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
  nav-link:
    textColor: "{colors.field-ink}"
    typography: "{typography.small}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  theme-toggle:
    textColor: "{colors.field-ink}"
    rounded: "{rounded.control}"
    size: "36px"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.field-ink}"
  band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
  portrait:
    rounded: "{rounded.round}"
    size: "176px"
  portrait-narrow:
    rounded: "{rounded.round}"
    size: "96px"
  shipped-dot:
    backgroundColor: "{colors.field-ink}"
    rounded: "{rounded.round}"
    size: "16px"
  shipped-dot-hover:
    backgroundColor: "{colors.accent}"
  tooltip:
    backgroundColor: "{colors.field-ink}"
    textColor: "{colors.field}"
    typography: "{typography.caption}"
    rounded: "{rounded.control}"
    padding: "2px 9px"
  index-entry:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "18px 0"
  preview-stage:
    backgroundColor: "{colors.field}"
    rounded: "{rounded.panel}"
  entry-shot:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "clamp(10px, 3vw, 20px)"
  story-row:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    padding: "32px 0"
  story-figure:
    textColor: "{colors.band-accent}"
    typography: "{typography.figure}"
  story-aside:
    textColor: "{colors.band-accent}"
    typography: "{typography.small}"
    padding: "0 0 0 14px"
  role-row:
    textColor: "{colors.band-ink}"
    padding: "14px 0"
---

# Design System: Ketuman Vishwakarma

## Overview

**Creative North Star: "Plum ink on lavender"**

A one-page portfolio with no metaphor. Plum-black ink on white paper, framed by two flat lavender fields: one holds the intro at the top, the other the contact band at the bottom. Between them the Projects index sits on paper, beside a sticky lavender preview, and Work sits on a full-bleed plum-black band where lavender becomes the light. deep lavender is the one interaction colour.

The page is light and quiet, but it moves where the work is. One display face carries the name, headings, project names and figures; one text face does all the reading. No drop shadows, no gradients, no photography beyond one portrait. Motion is limited to the shipped-strip dots settling on load and the project index opening entries and fading screenshots into its preview on wide screens.

**Key Characteristics:**
- Lavender fields bookend the page; a plum-black band holds Work between paper sections.
- One display face set big and tight; one text face for all reading.
- Flat throughout. Depth comes from fields, the band and panels, never drop shadows.
- 14px panels for media, 4px corners for every control, circles only for the portrait and dots.
- New projects are a data edit in `lib/data.ts`; the index, the strip and the preview take them without change.

## Colors

A warm-cool palette in two lights: plum-black ink and lavender, with deep lavender for interaction.

### Primary
- **Lavender Field** (`field`): the background of the intro and contact band, the sticky project preview stage, and the text-selection colour on paper. Also the browser theme colour (`theme-color` in light, `theme-color-dark` in dark, set in `app/layout.tsx`). It is the colour people remember the site by.
- **deep lavender Green** (`accent`): hover of the primary button and shipped dots, and the focus outline on paper. Lightens to `accent-dark` in dark mode.

### Secondary
- **Plum Band** (`band`): the full-bleed Work section. The same plum-black as the ink in light mode; a hair lighter (`band-dark`) in dark mode so it still reads as a band against the dark paper.
- **Band Lavender** (`band-accent`): the light inside the band. Story figures, the aside rule and text, and the focus outline in Work.

### Neutral
- **Paper** (`paper`): the page background between fields. Dark mode: `paper-dark`, a plum-black.
- **Plum Ink** (`ink`): all text on paper, the primary button fill, the skip link. Dark mode: `ink-dark`.
- **Muted Plum** (`muted`): section leads, project kind and year, "Source only". Dark mode: `muted-dark`.
- **Hairline** (`line`): rules between project entries. Dark mode: `line-dark`.
- **Pale Panel** (`panel`): the panel behind each project's own screenshot on narrow screens. Dark mode: `panel-dark`.
- **Field Ink / Field Muted** (`field-ink`, `field-muted`): text on the lavender fields, the strip baseline, dots and tooltip; muted for year labels, the contact line, copy status and colophon. Unchanged in dark mode.
- **Band Ink / Band Muted / Band Line** (`band-ink`, `band-muted`, `band-line`): text, secondary text (figure labels) and rules inside the band. Story body text is band ink mixed 88% toward the band.

### Named Rules
**The Bright Field Rule.** The lavender fields never go dark. In dark mode only the paper, the panel, the band and what sits on them change; field ink stays dark on lavender.

**The Two Fields, One Band Rule.** Full-bleed lavender appears only at the top (intro) and bottom (contact). The plum band holds Work and nothing else. Inside the page, lavender shows up only as the preview stage and the band's light.

**The One Lavender Rule.** deep lavender is for interaction only: hover and focus. It never fills a surface or colours static text.

## Typography

**Display Font:** Funnel Display (weights 500, 600, 700; fallback Helvetica Neue, Arial)
**Body Font:** Funnel Sans (fallback Helvetica Neue, Arial)

**Character:** A slightly wide, confident display face set tight and heavy for names and numbers, paired with its own text cut for calm reading at 17px.

### Hierarchy
- **Display** (700, clamp 3rem to 6rem, 0.92, -0.04em): the name in the intro only, one word per line (`width: min-content`).
- **Headline** (700, clamp 2.25rem to 3.5rem, 1.1, -0.035em): section headings: Projects, Work, Say hello.
- **Email** (600, clamp 1.5rem to 3rem, -0.03em): the large copy-email address in Contact, with a 2px underline.
- **Figure** (700, clamp 1.75rem to 2.5rem, 1, -0.03em, tabular numbers): the number in each work story's margin.
- **Title** (700, clamp 1.5rem to 2rem, 1.1, -0.03em): project names in the index.
- **Title story** (700, clamp 1.375rem to 1.75rem, 1.1, -0.025em): work story titles.
- **Handle** (700, 18px, -0.01em): "k2maan" in the header.
- **Lead** (400, clamp 1.125rem to 1.375rem, 1.45): the intro paragraph, max 34em.
- **Body large** (400, 18px): the one line under "Say hello", max 32em.
- **Body** (400, 17px, 1.6): all running text and section leads (section leads max 30em, story bodies max 38em).
- **Body compact** (400, 16px): project summaries in the open index entry on wide screens, max 34em.
- **Small** (400, 15px): header nav links and story asides.
- **Label** (400, 14px): project kind and year, "Source only", figure labels, copy confirmation. Tabular numbers for years.
- **Caption** (500 for tooltips, 400 otherwise; 13px): shipped-strip year labels and tooltips, the colophon.

Headings default to Funnel Display 600, 1.1, -0.02em, balanced wrapping; each role above sets its own weight and size. Paragraphs use `text-wrap: pretty`.

### Named Rules
**The No Eyebrow Rule.** Headings stand alone. No small uppercase labels above them, no kickers.

**The Plain Voice Rule.** Copy is first person, sentence case, specific and plain. No em dashes, no hype.

## Layout

One centred column, max 1080px (`wide`) plus gutters. Gutters are 20px, 40px from 760px. The header is absolutely positioned over the intro field (20px padding).

- **Intro:** 96px top, 36px bottom. Below 860px the portrait (96px) sits above the name; from 860px it sits to the right of the name at 176px, with a fluid gap of clamp(56px, 7vw, 104px). Lead at 28px below, contact links (8px by 20px gaps) at 24px, strip at 48px.
- **Section heads:** heading and lead stacked with 12px gap; from 860px the lead moves right-aligned to the far column.
- **Projects:** 80px top, 112px bottom, the index 40px under the head. From 960px the index is a 5:7 grid with a 56px gap: list on the left, sticky preview on the right (top 32px). Below 960px the preview is hidden and every entry is open, each with its own screenshot.
- **Work band:** 96px top, 104px bottom. Stories begin 48px under the head. Each story is a row (32px vertical padding, hairline band rules above and below); from 860px the text takes the left column and the figure a 260px right margin column, right-aligned, with a 64px gap. An "Experience" heading (Title type, 1.5 to 2rem) sits 80px under the stories, and the roles list 20px under it uses the same row grid: role and organisation (Funnel Display 600, 18 to 22px) with a one-line note in band ink at 88% on the left, and the period in the right margin column in band lavender, Funnel Display 600.
- **Contact:** 88px top, 40px bottom, colophon 96px below the links.
- **Breakpoints:** 520px (tighter nav padding, every other year label hidden), 760px (wide gutter), 860px (two-column intro, section heads and stories), 960px (index beside preview).

## Elevation & Depth

Flat. Depth comes from colour: lavender fields, the plum band, the lavender preview stage and the pale panel. Hairline rules (1px `line` on paper, 1px `band-line` in the band, 1.5px field ink under the strip) separate items.

### Shadow Vocabulary
- **Portrait ring** (`box-shadow: 0 0 0 1.5px var(--paper)`): a thin paper-coloured ring around the portrait on the lavender field. It is an outline, not elevation, and the only box-shadow in the system.

### Named Rules
**The No Drop Shadow Rule.** No drop or ambient shadows, on any surface or state. Use a field, the band, a panel or a rule instead.

## Shapes

Screenshots have no panel: 10px corners and a 1px hairline edge. Every project screenshot is stored at 16:10 (1600x1000, in `public/projects/`, padded by repeating its own edge pixels), so all frames are the same size. Every control (buttons, nav links, theme toggle, skip link, tooltips, focus rings) has 4px corners. Full circles only for the portrait and the shipped dots.

**The Square Control Rule.** Anything you click that is not a dot has 4px corners. No pill buttons.

## Components

### Header
Plain, on the intro field in field ink. The handle on the left; Projects / Work / Contact (15px, 6px 10px padding, 6px 7px under 520px) and the theme toggle on the right. Hover adds a 9% field-ink tint behind the link. No underline on nav links.

### Theme toggle
A 36px square with 4px corners and an 18px half-filled circle icon, the same shape in both themes. Same hover tint as nav links. A saved choice is applied in `<head>` before paint; until one is saved the site follows the system.

### Buttons
- **Shape:** 4px corners.
- **Primary:** ink fill, paper text, weight 500, 7px 16px. The first link of each project.
- **Hover / Focus:** fill turns deep lavender over 0.2s; focus is the shared outline.
- **Secondary:** further links are plain underlined text at weight 500.

### Intro
The lavender field: name and portrait, the lead, a row of contact links (copy-email button, GitHub, LinkedIn, X, each with an 18px icon and 8px gap, weight 500, underline only on hover), then the shipped strip.

### Copy email
A button, not a mail link. Clicking copies the address (with a hidden text field fallback) and confirms "Copied to clipboard" for two seconds through `aria-live`.
- **Text** (intro): mail icon plus the address; the label itself becomes the confirmation.
- **Large** (contact): the address in the Email type role, 2px underline at 30% that goes solid on hover; the confirmation sits beside it in 14px field muted.

### Shipped strip (signature)
A line of years from the first project to the current year, with one 16px field-ink dot per project stacked upward (6px gaps) over a 1.5px field-ink baseline. Year labels sit 8px below in 13px tabular field muted (every other one hidden under 520px). Hover or focus scales a dot to 1.25 and darkens it to field muted, and shows a 4px field-ink tooltip with lavender text, opening left in the last three years. Each dot links to `#slug`, which opens that project in the index. No caption. Behind the dots, each job from `timeline` in lib/data.ts is a faint band over its years (field ink at 5% on the lavender, with a 1px field-ink-22% rule at its start), running from the axis to the top of the plot (at least 112px tall). The company sits inside the band's top corner in 13px 600 field muted, with the title in 13px regular below (hidden under 520px). An ongoing job runs to the end of the line. The dots stay the subject; the bands are context. Years before the first job stay blank.

### Project index (signature)
Every project in one ordered list with hairline rules. Each entry head is a full-width button: the name in the Title role, then kind and year in 14px muted on the right.
- **Wide (960px and up):** only the active entry is open; its body expands with a `grid-template-rows` 0fr to 1fr transition (0.5s), showing the summary (16px), the primary button, other links and "Source only" when relevant. Closed names are ink mixed 45% toward paper and go full ink on hover; the open name does not move. Pointing (after a 90ms delay), clicking, focusing or following a strip link sets the active entry. Beside the list, a sticky 16:10 stage holds every screenshot; the active one fades in (opacity, 0.35s) over the others. Screenshots have no frame: 10px corners and a 1px `line` hairline (as a box-shadow ring) so light screenshots still have an edge on white. On narrow screens (under 960px) there is no preview: the list becomes a horizontal row of cards that bleeds to the screen edges, 84% of the width each (at most 420px), 16px apart, with CSS scroll-snap (`x mandatory`) so a swipe moves one card and the next one peeks in. Each card shows its screenshot on top, then the name on its own line, kind and year, the description and links, always open. Nothing on a phone listens to the page scroll. An earlier version that opened projects as the page scrolled was removed, because its scroll correction fought iOS momentum scrolling and threw the page to the end of the list.
- **Narrow:** every entry is open and shows its own screenshot on a 14px pale panel (padding clamp 10 to 20px), image 16:10 with 8px corners, linked to the project.

### Work stories
Rows on the plum band. Left: the title (Title story role), a one-sentence summary in band ink at 88%, and an optional aside (15px band lavender, 14px left padding behind a 1px band-lavender rule). No tech stack line, to keep the band short on phones. Right margin: the figure in band lavender and a 14px band-muted label below.

### Roles
Under the stories on the band: one row per role with the period in 14px band muted tabular, then role and linked organisation.

### Contact band
The closing lavender field: "Say hello" headline, one 18px field-muted line, the large copy-email button, the same contact links as the intro, and a 13px colophon.

### Links and focus
Body links inherit colour with a 1px underline at 35% opacity, 0.22em offset, going solid on hover. Focus is a 2px deep lavender outline, 3px offset, 4px radius; on the fields it switches to field ink, in the band to band lavender. Selection on paper is lavender with field ink; on the fields it inverts.

### Motion
One easing, `cubic-bezier(0.16, 1, 0.3, 1)`. The only load-time entrance is the dots settling 20px onto their year (0.7s, 60ms stagger after 200ms). The index's open and preview fade are the only state motion beyond hover transitions (0.15 to 0.3s). Under `prefers-reduced-motion` the dot entrance, the index transitions and smooth scrolling are off.

## Icons and link preview

- **Tab icon** (`app/icon.tsx`, and `app/favicon.ico` built from it at 16, 32 and 48px): a lowercase k in Funnel Display 700, field ink on a lavender rounded square.
- **Home-screen icon** (`app/apple-icon.tsx`): the same k, full-bleed lavender, since iOS rounds the corners itself.
- **Link preview** (`app/opengraph-image.tsx`, 1200x630): the intro in miniature on the lavender field. The handle, the name in two lines at 118px, the portrait in a 2px white ring, "Forward Deployed Engineer at Bluecore" in field muted, and the year strip along the bottom. The image renderer can't read WOFF2, so it uses the Fontsource WOFF builds in `lib/fonts/` (OFL).

## Do's and Don'ts

### Do:
- **Do** keep the lavender fields bright in dark mode (`field-dark`) with dark field ink; darken only the paper, panel and band.
- **Do** keep Work on the plum band, with lavender (`band-accent`) as its only light.
- **Do** use deep lavender only for hover and focus.
- **Do** use 4px corners on every control, 14px on media panels, 8px on screenshots, and circles only for the portrait and dots.
- **Do** set the name, headings, project names, story titles and figures in Funnel Display, and everything else in Funnel Sans, at the sizes in the type hierarchy.
- **Do** show each project's real screenshot, with its primary link as an ink button.
- **Do** add projects by editing `lib/data.ts`; the index, preview and strip pick them up.
- **Do** write copy in plain first person, sentence case.
- **Do** respect `prefers-reduced-motion` for any new motion.

### Don't:
- **Don't** add drop or ambient shadows; the portrait's paper ring is the only box-shadow.
- **Don't** put eyebrows or kickers above headings.
- **Don't** use em dashes in copy.
- **Don't** use pill-shaped or fully rounded buttons.
- **Don't** add more full-bleed lavender fields or plum bands; two fields bookend the page and one band holds Work.
- **Don't** add looping or constant animation; the dots settling on load is the one entrance.
- **Don't** use terminal, console or operating-system window looks.
