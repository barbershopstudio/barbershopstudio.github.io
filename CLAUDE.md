# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for Studio Barbershop Pro, a barbershop management SaaS. This repo is the static frontend only — it does not contain the management system itself. Content is in Spanish (Costa Rica locale, `es-CR`).

## Commands

Run `nvm use 24` before any command below — this repo requires Node 24 (`.nvmrc` / `package.json#engines`), and CI runs on Node 24 as well.

```bash
nvm use 24           # required before any command in this repo
yarn dev            # Start dev server at http://localhost:3000
yarn build          # Production build (static export to ./out)
yarn start          # Serve the production build
yarn lint           # ESLint with --fix
yarn format         # Prettier write
yarn format:check   # Prettier check (used in CI)
yarn type-check     # tsc --noEmit
```

There is no test suite (no test runner is configured; CI's test/coverage steps are commented out in `.github/workflows/ci-cd.yml`).

## Architecture

- **Static export, not a server app.** `next.config.mjs` sets `output: 'export'` and `images: { unoptimized: true }`, and the build is deployed as static files to GitHub Pages via `.github/workflows/ci-cd.yml`. This rules out any Next.js server-only features (API routes, ISR, `next/image` optimization, middleware) — anything added must work as pure static HTML/CSS/JS.
- **Single-page app.** Nearly the entire site lives in `app/page.tsx` as one large client component (`'use client'`), with each landing-page section (hero, stats, features, benefits, customization, contact, and a currently commented-out testimonials section) inline as JSX blocks rather than split into separate components. When editing a section, find it by its `id='...-heading'` anchor or the section comment (e.g. `{/* Hero Section */}`).
- **SEO/metadata is centralized in `app/layout.tsx`**: full `Metadata` object (OpenGraph, Twitter cards, robots, icons), plus a hardcoded JSON-LD `structuredData` object defined at the top of `app/page.tsx`. Both need to stay in sync with real content (title, description, URLs) if either changes.
- **Contact flows are all client-side, no backend**: `sendDemoRequest`, `openWhatsApp`, `openEmail`, `openCalendly` in `app/page.tsx` build `mailto:`/`wa.me`/Calendly links via `window.open` — there is no form submission or API call anywhere in the app.
- **UI components** (`components/ui/`) follow the shadcn/ui pattern (`components.json`, style `new-york`, base color `neutral`), built on `class-variance-authority` + `tailwind-merge` via the `cn()` helper in `lib/utils.ts`. Path alias `@/*` maps to repo root (`tsconfig.json`).
- **Styling** is Tailwind CSS v4 (via `@tailwindcss/postcss`), with theme tokens/CSS variables defined in `app/globals.css`.
- **Analytics**: self-hosted Plausible, wired up manually in `app/layout.tsx` via `next/script` (no npm package) — do not swap in `next/third-parties` or a different analytics SDK without checking this setup.

## CI/CD

`.github/workflows/ci-cd.yml` runs on push/PR to `main`/`develop`: quality checks (lint, type-check, format:check) → security audit (`yarn audit`) → build → Lighthouse CI (PRs only) → deploy to GitHub Pages (main only, static export from `./out`). `.github/workflows/release.yml` builds and creates a GitHub Release on `v*` tags. Both use `actions/setup-node` — keep the `node-version` there in sync with `.nvmrc`/`package.json#engines` if bumping Node versions.
