# Studio Barbershop Pro - Landing Page

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Marketing landing page for **Studio Barbershop Pro**, a barbershop management SaaS. This repo is the static frontend only — it does not contain the management system itself. Content is in Spanish (Costa Rica locale, `es-CR`).

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, static export via `output: 'export'`)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-based config, no `tailwind.config.js`), shadcn/ui component pattern
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans](https://vercel.com/font)
- **Analytics**: Plausible (self-hosted, wired manually via `next/script`)
- **Deployment**: Static export served from GitHub Pages

## Prerequisites

- Node.js 24+ (`.nvmrc` pins the exact version — run `nvm use 24`)
- Yarn (repo uses `yarn.lock`; `npm` also works but isn't the primary path)

## Getting Started

```bash
nvm use 24
yarn install
yarn dev            # http://localhost:3000
```

### Scripts

```bash
yarn build          # Production build (static export to ./out)
yarn start          # Serve the production build
yarn lint           # ESLint with --fix
yarn format         # Prettier write
yarn format:check   # Prettier check (used in CI)
yarn type-check     # tsc --noEmit
```

There is no test suite configured.

## Build & Deployment

`next.config.mjs` sets `output: 'export'`, so `yarn build` produces a fully static site in `./out` — no Next.js server, API routes, or image optimization at runtime.

`.github/workflows/ci-cd.yml` runs on every push/PR to `main`/`develop`: lint → type-check → format:check → security audit (`yarn audit`) → build → Lighthouse CI (PRs only) → deploy `./out` to GitHub Pages (`main` only). `.github/workflows/release.yml` builds and creates a GitHub Release on `v*` tags.

## Project Structure

```
app/
  layout.tsx      # Root layout: fonts, metadata, Plausible script
  page.tsx        # Entire site — single client component, all sections inline
  globals.css      # Tailwind v4 theme tokens + base layer
components/ui/     # shadcn/ui primitives (Button, Card) — only what's actually used
lib/utils.ts       # cn() class-merging helper (clsx + tailwind-merge)
public/            # Static assets, manifest, sitemap, robots.txt
```

See `CLAUDE.md` for a deeper architecture walkthrough.

## License

Private and proprietary. All rights reserved.

## Contact

**Studio Barbershop Pro**

- Email: [contact.barbershop.studio@gmail.com](mailto:contact.barbershop.studio@gmail.com)
- WhatsApp: [+506 8852-7576](https://wa.me/50688527576)
- Developer: [Geovanny Cordero](https://geovannycordero.com)
