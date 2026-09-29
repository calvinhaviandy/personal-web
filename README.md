# Calvin Haviandy — Portfolio

A monochrome, space-inspired portfolio with a link-first home page and project detail pages. Built with Next.js App Router, React, TypeScript, and CSS.

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
- Visual system and stars: `app/globals.css`
- Project archive and details: `app/layouts/project/`

Project images live in `public/image/project/`. The project pages show a monochrome typographic cover when a project has no image.
