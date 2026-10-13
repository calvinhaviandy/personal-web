# Calvin Haviandy — Portfolio

A monochrome, space-inspired portfolio with full-color project imagery, a link-first home page, and project detail pages. Built with Next.js App Router, React, TypeScript, CSS, and GSAP.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Before starting a production build, stop the development server so both commands do not write to `.next` at the same time.

```bash
npm run lint
npm run format:check
npm run build
```

## Edit content

- Profile, links, and page copy: `app/page.tsx`
- Projects and live/source URLs: `public/api/project.json` (shared through `app/data/projects.ts`)
- Experience: `public/api/experience.json`
- Static visual system: `app/globals.css`
- Star drift and shooting stars: `app/components/SpaceBackdrop.tsx`
- Orbit, card interactions, accordion indicators, and anchor scrolling: `app/components/MotionController.tsx`
- Project archive: `app/project/page.tsx`
- Project details and metadata: `app/project/[slug]/page.tsx`

Project images live in `public/image/project/`. The project pages show a monochrome typographic cover when a project has no image.

Portfolio typography uses locally hosted IBM Plex Sans in regular and medium weights. Project-cover lettering keeps its original fonts. Font sources and the IBM license are in `public/fonts/ibm-plex/`.

## Repository maintenance

Use npm and the committed `package-lock.json`; there is no separate Bun lockfile. Run `npm run format` to apply the pinned development-only formatter, or `npm run format:check` to check formatting without editing files.

Only the eight projects in `project.json` are part of the current portfolio. Starter assets and placeholder data have been removed. Personal photos, certificates, education records, and original artwork are retained even when they are not displayed. Unreferenced project folders with uncertain ownership are retained until confirmed as template content. Removing unused assets does not erase their earlier copies from Git history.

The Docker configuration is retained as an optional deployment workflow. `AGENTS.md` and `CLAUDE.md` are current editor instructions, not legacy portfolio content. Keep font licenses and asset source records when changing visuals.

## Motion

GSAP owns animated transforms and color changes; CSS keeps layout, decoration, and no-JavaScript interaction fallbacks. Pages remain server-rendered and visible before hydration. Motion respects `prefers-reduced-motion`, pauses continuous loops in hidden tabs, and pauses the avatar orbit when offscreen. Route and media-query changes clean up animation contexts and event listeners.
