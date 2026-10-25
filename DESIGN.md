# Design

## Who it's for

Hiring managers, FDE leads and founders who give a portfolio about a minute. In that minute
they should learn two things: Ketuman gets a product working inside a client's real systems,
and he ships complete products of his own.

## Where the look comes from

Ketuman's clients are fashion and apparel retailers (Gap, Coach, Nordstrom, Huckberry, Jockey),
and outside work he shoots fashion videos and self-portraits. The site is set like a retail
lookbook: black and white photography, big condensed type, plain white space, and work shown
as plates with short captions, the way a lookbook shows garments.

It should not borrow from his products (no outlines, hard shadows, stickers or loud fills),
and it should avoid the usual generated-site defaults: Inter, purple gradients, blurred blobs,
rounded card grids, uppercase labels above headings, dot-separated meta strings, monospace
data labels, arrows trailing every link, and em dashes in copy.

## Color

| Token        | Light     | Dark      | Use                                          |
|--------------|-----------|-----------|----------------------------------------------|
| `--paper`    | `#ffffff` | `#000000` | Page                                         |
| `--ink`      | `#0b0b0b` | `#f2f2f2` | Text, rules                                  |
| `--muted`    | `#6e6e6e` | `#9a9a9a` | Captions, secondary text                     |
| `--hairline` | `#dedede` | `#2a2a2a` | Image frames, row dividers                   |
| `--plate`    | `#f1f1f1` | `#111111` | Behind images while they load                |
| `--signal`   | `#d3241c` | `#ff4a3d` | The dot in the K mark, the full stop after the name and each section heading, the spotlight and the circle cursor, live and status dots, the strike through old figures, the role dot in the hero strip, the thread tip, focus ring, text selection, link underline on hover. All of these are the same circle, at different sizes. |

Every image shows in black and white and turns to its original color when you hover it, or tap
it on a touch screen: the portrait in Contact (`public/profile-2.jpg`, color, cropped 4:5) and the project
plates (hovering anywhere on the card counts). The page reads as one
monochrome spread until you look at a piece closely. `public/profile-2-bw.jpg` is the grayscale
copy used for the social preview card.

## Mark

"K." : the K in Archivo 800 at 62 width with a `--signal` dot sitting on the baseline like a
full stop. No box around it. The dot is 0.26em across with a 0.03em gap after the K. It takes
the theme's ink: black on the light page, white on the dark one. It uses the first name only.

In the header it's the home link (40px, set in the site font). `app/icon.svg` draws the same
letter, traced from Archivo, with the same proportions, and switches between black and white
with the browser's color scheme. `app/favicon.ico` is the black version for browsers that skip
the SVG, and `app/apple-icon.png` sets it on white for home screens. The social card
(`app/opengraph-image.tsx`) uses it in white on black, with `lib/fonts/archivo-800-62.ttf`.

## Type

One family, Archivo (variable, with a width axis), in three roles:

- **Display**: Archivo at 62 to 75 width, weight 600 to 800, tight leading (0.86), tight
  tracking. Used for the name, section titles and project titles. Uppercase only for the name.
- **Body**: Archivo at 100 width, weight 400, 17px/1.6, line length under 68ch.
- **Caption**: Archivo 13 to 14px, weight 500, in `--muted`. Sentence case, never tracked out.

Figures use `font-variant-numeric: tabular-nums` where they line up in columns.

## Layout

12-column grid, 16px gutters on phones, 32px on desktop, max width 1320px.

```
┌──────────────────────────────────────────────────────────────┐
│ K.                              Work  Projects  Contact    │ │
│                                              ┌──────────┐  │ │  ← thread, red tip
│ I embed with customers' … (small kicker)     │ dot      │  │ │
│ KETUMAN                                      │ portrait │  │ │
│ VISHWAKARMA.                                 └──────────┘    │
│ ─────────────────────────────────────────────────────────── │
│ • Role at Bluecore   Outside work, …    Copy email GitHub In │
├──────────────────────────────────────────────────────────────┤
│ WORK.                                  intro, flush right    │
│ ─────────────────────────────────────────────────────────── │
│ ~~30~~ 12 MIN                     title / 2 sentences / stack│
│ ─────────────────────────────────────────────────────────── │
│ Experience                                                   │
│ period │ role, company link     │ note                       │
├──────────────────────────────────────────────────────────────┤
│ PROJECTS.   (feature plates, then the even grid)             │
├──────────────────────────────────────────────────────────────┤
│ CONTACT.                                                     │
│ hello.ketuman@gmail.com (set huge, copies)       ┌────────┐  │
│ [GitHub]  [LinkedIn]  [X]                        │portrait│  │
└──────────────────────────────────────────────────────────────┘
```

The hero is set like a cover: a small kicker line (the "I embed…" sentence, 16–18px), the name
at poster size ending on a red full stop, and a credit strip along one `--ink` rule with the
role, the outside-work line and the links (the email address, which copies when clicked, then GitHub, LinkedIn and X, as plain text links).
The dot portrait (`components/dot-portrait.tsx`) is a halftone of `public/profile-2.jpg` drawn
in the theme's ink, sitting right of KETUMAN just above VISHWAKARMA; dots near the mouse swell a
little. On phones the portrait comes first, then the name, the kicker and the strip.

`--poster` is one size for the hero name and every section heading. Section headings are
uppercase, end on a red full stop, and keep the red spotlight circle inside their letters
(`components/spotlight.tsx`), as does the name. The intro sits beside the heading on its
baseline when there's room, otherwise underneath, flush right on desktop.

Work stories are number rows with no boxes or chips: the figure (counting into view) on the
left, the title, two sentences and the stack as a caption on the right, ink rules between rows.
Experience is plain lines: period, role with the company linked, note.

A thread (`components/thread.tsx`) runs the length of the page behind everything: down one edge,
across in the space above each heading, down the other. It draws itself as you scroll, with a red
dot at the tip 65% of the way down the screen.

The header ends with a light/dark switch (`components/theme-toggle.tsx`): a circle, half ink. It
sets `data-theme` on `<html>`, which the tokens follow, and remembers the choice; until someone
picks, the site follows the system. The dot portrait redraws when it changes.

The link preview (`app/opengraph-image.tsx`) is set like the hero in dark mode: the K. mark, the
kicker, the name at poster size with its full stop, the role along a rule, and the dot portrait
from `lib/og/dot-portrait.png`, a still render of the canvas version. Rerender that PNG if the
portrait photo or crop changes.

Links to anything outside the site open in a new tab. Company names link to the company. Both
emails (the hero link and the big address in Contact) copy the address when clicked.

Plates are square-cornered with a 1px hairline frame and no shadow. The two current projects get
wide plates with the caption beside them; the four older projects sit in an even grid (two
across, one on phones) with images cropped to 16:10 so the rows line up. Every
project gets its image, a caption, a description and links. There are no project pages: the
image and title open the project's first link (live site, store listing or source) in a new tab.

## Motion

One deliberate moment: on first load, the name rises out of a mask line by line and the
portrait fades in. After that, motion only responds to the visitor:

- **Spotlight.** Over the hero name, the hero lead and the section headings, a solid red circle
  (`--signal`, 72px radius) follows the pointer, painted only inside the letters: the text's own
  background is clipped to the glyphs, ink everywhere except a red disc at the pointer, which grows
  from nothing on hover and shrinks back on leave. Mark an element with `data-spot`; elements with
  the same value (the two lines of the name use `data-spot="name"`) light up together so the circle
  crosses between them. `components/spotlight.tsx` tracks the pointer. Mouse and trackpad only.
  Headings shrink to their words, so the circle only starts over text.
- **Circle cursor.** The same red circle follows the pointer (`components/cursor.tsx`), scaled to
  what's under it: an 88px circle reading "Open" over project images (the native cursor hides
  there), a small full stop over links and buttons, nothing over spotlight text (the spotlight takes
  over) and nothing elsewhere. Mouse and trackpad only.
- **Counting figures.** Each work story's figure counts once when it scrolls into view
  (`components/count-figure.tsx`): from zero up for 500M and 90%, down from the old value for
  12 min and 5% while the red strike sweeps across the old value. The real value is in the HTML,
  and screen readers always get it; figures already on screen when the page loads don't count.
- **Full stops.** Every section heading ends on a red dot, the same circle as in the K. mark.
- A slight zoom on plate images, underlines on links, the outlined contact links filling with ink.

The spotlight and cursor both re-check what's under a still pointer when the page scrolls.
Everything is turned off under `prefers-reduced-motion`.

## Copy

First person, plain and specific. Real numbers from real work. No em dashes, no "passionate",
no headline slogans.
