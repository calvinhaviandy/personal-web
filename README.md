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
npm run build
```

## Edit content

- Profile, links, and page copy: `app/page.tsx`
- Projects and live/source URLs: `public/api/project.json`
- Experience: `public/api/experience.json`
- Static visual system: `app/globals.css`
- Star drift and shooting stars: `app/components/SpaceBackdrop.tsx`
- Orbit, card interactions, accordion indicators, and anchor scrolling: `app/components/MotionController.tsx`
- Project archive and details: `app/layouts/project/`

Project images live in `public/image/project/`. The project pages show a monochrome typographic cover when a project has no image.

## Motion

GSAP owns animated transforms and color changes; CSS keeps layout, decoration, and no-JavaScript interaction fallbacks. Pages remain server-rendered and visible before hydration. Motion respects `prefers-reduced-motion`, pauses continuous loops in hidden tabs, and pauses the avatar orbit when offscreen. Route and media-query changes clean up animation contexts and event listeners.
