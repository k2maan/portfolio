# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed 2026-11-15):

- **People who find the work**: developers, indie makers and players who land from X, GitHub or a link to one of the games. They want to see what Ketuman makes and try it.
- **People who might hire or work with him**: founders and hiring managers, mostly at product and AI startups. They want proof that he ships complete things on his own, and that he can be trusted inside real production systems.

Most visits are short. Both groups decide in about a minute whether to click into a project.

## Product Purpose

Ketuman Vishwakarma's personal site. It shows what he builds, how often, and that he finishes things. Success means a visitor opens a project (plays a game, installs an extension) or gets in touch.

The previous version read like a styled resume aimed at the Forward Deployed Engineer role. This version puts the things he builds first, and keeps the day job as supporting evidence.

## Positioning

He is a working Forward Deployed Engineer at Bluecore, handling production systems for large retailers, who also ships his own small products quickly, many of them built with coding agents. Other builder portfolios rarely have both: proof of reliability under real client load, plus a steady flow of playful finished work, some of it rooted in Indian culture (Diya Duty).

## Operating Context

- Projects are linked out to their own live sites (Vercel, Cloudflare Pages, Chrome Web Store, VS Code Marketplace). Heavy demos stay on those sites, and the portfolio only links to them.
- New projects arrive often, including more serious ones in the coming months, so the site has to take new entries without being redesigned.
- People share links to the site on X and LinkedIn, so the social preview card matters.

## Capabilities and Constraints

- Existing Next.js 16 / React 19 app on Vercel, Node 24. No other runtime dependencies. Keep it that way unless there's a clear reason.
- **Must stay light**: no 3D and no heavy or constant animation. Fast first load on mobile.
- No playable game embedded on the homepage (the user decided against it).
- **Sections**: the user left these to recommendation:
  - Projects lead the page, grouped or labeled by type (game, extension, theme, app).
  - Day job: a compact section after projects. One or two sentences on the role, two highlighted stories (EventProof and Chrono DevTool, both tools he built), a short line on prior experience, and a resume link. No period/role/note timeline.
  - "Now building": dropped by the user (2026-11-15).
  - Photography: **not** a section. He doesn't shoot often and doesn't want it emphasized (confirmed 2026-11-15). At most one portrait, in the intro or about area.
  - Build notes / writing: deliberately **not** shipped until real posts exist. The structure can leave room for it.

## Brand Commitments

- Name: Ketuman Vishwakarma. Handle k2maan across GitHub, LinkedIn and X (`k2maandotdev`).
- Copy voice: plain, specific, first person, sentence case. No em dashes in copy. No hype.
- The site must not read as AI-generated.
- The site should feel rooted in software work (building, shipping, integrating systems), not in photography, retail or general Indian ephemera.
- Avoid: terminal, console or "matrix" looks, and copies of operating-system UIs (Windows, macOS desktops and windows). Clean, polished design with no strong metaphor is an acceptable outcome (user, 2026-11-15).
- Chosen path (2026-11-15): sleek, no metaphor. Craft bar: rauno.me and emilkowal.ski, with more personality and colour than either.
- Nothing else is binding. The current "K." mark, Archivo, the black and white palette and the red signal dot are **not** commitments. They are part of the look being replaced.

## Evidence on Hand

- Project data, copy and screenshots: `lib/data.ts`, `public/` (git-ing-over-it.png, perk.png, diya-duty.png, indigo.jpg, easyResume.jpg, moviehut.jpg, mlAlgoVisualiser.jpg).
- Real figures for the work stories are in `lib/data.ts` (EventProof cut each live-site check from 30 minutes to 12; Chrono DevTool was adopted by 90% of the FDE team; Indigo has 2,500+ installs).
- Portraits: `public/profile.jpg`, `public/profile-2.jpg`, `public/profile-2-color.jpg`, `public/aboutImg.jpg`. Use one at most.
- `Resume.pdf` in the repo root.
- No testimonials, press or user counts beyond the ones above. Don't fabricate any.

## Product Principles

1. **Show the thing.** Each project gets its real screenshot and a direct "play / install / try" link before any description.
2. **Builder first, engineer underneath.** The day job backs up the builder story and never leads.
3. **Built to grow.** Adding a project is a data edit, not a layout change.
4. **Light by default.** Every effect has to justify its cost on a mid-range phone.
5. **Sound like a person.** Specific, plain copy with no AI tells, in words and in visuals.

## Accessibility & Inclusion

WCAG 2.2 AA contrast, keyboard focus visible, `prefers-reduced-motion` respected, light and dark themes both supported.
