# Studio Barbershop Pro - Landing Page

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Marketing landing page for **Studio Barbershop Pro**, a barbershop management SaaS. This repo is the static frontend only — it does not contain the management system itself. Content is in Spanish by default (Costa Rica locale, `es-CR`), with a client-side English toggle.

## Tech Stack

- **Framework**: none — plain static HTML, CSS, and JavaScript, no build step
- **Styling**: hand-authored CSS (`css/`), same design tokens as before
- **i18n**: a small `data-i18n` attribute convention + a plain-object dictionary (`js/translations.js`)
- **Testing**: [Node's built-in test runner](https://nodejs.org/api/test.html) for unit tests, [Playwright](https://playwright.dev/) for browser tests
- **Analytics**: Plausible (self-hosted, two inline `<script>` tags)
- **Deployment**: the source tree itself, served from GitHub Pages

## Prerequisites

- Node.js 24+ (`.nvmrc` pins the exact version — run `nvm use 24`)
- Yarn (repo uses `yarn.lock`; `npm` also works but isn't the primary path)

## Getting Started

```bash
nvm use 24
yarn install
yarn dev            # http://localhost:3000 — a zero-dependency static server (js/serve.js)
```

### Scripts

```bash
yarn test           # Unit tests (node:test) + Playwright e2e tests
yarn test:unit       # Just tests/unit/ (node:test, no dependencies)
yarn test:e2e        # Just tests/e2e/ (Playwright — run `npx playwright install chromium` first)
yarn lint            # ESLint with --fix
yarn format          # Prettier write
yarn format:check    # Prettier check (used in CI)
```

## Build & Deployment

There is no build step. `index.html`, `css/`, `js/`, `images/`, and the loose static files (`favicon.ico`, `manifest.json`, `robots.txt`, `sitemap.xml`, `browserconfig.xml`) at the repo root _are_ the deployed site.

`.github/workflows/ci-cd.yml` runs on every push/PR to `main`/`develop`: lint → format:check → unit + Playwright tests → security audit (`yarn audit`) → Lighthouse CI (PRs only) → stage the files above into `dist/` and deploy to GitHub Pages (`main` only). `.github/workflows/release.yml` tars the same file set and creates a GitHub Release on `v*` tags.

## Project Structure

```
index.html         # The entire site — hero, stats, features, benefits, customization, contact, footer
css/
  tokens.css        # Design tokens (oklch custom properties, light/dark via prefers-color-scheme)
  base.css          # Reset, typography, buttons, cards, the locale switcher
  sections.css       # One block per page section
js/
  translations.js    # { es: {...}, en: {...} } — both locales, same shape
  links.js            # mailto:/wa.me URL builders
  i18n.js              # Locale detection, [data-i18n] swapping, persistence
  serve.js              # ~40-line node:http static server, dev-only (not deployed)
images/               # Product screenshots, logo
tests/
  unit/                 # node:test — pure logic (translations shape, link builders)
  e2e/                    # Playwright — structure, i18n toggle, contact links
```

See `CLAUDE.md` for a deeper architecture walkthrough.

## License

Private and proprietary. All rights reserved.

## Contact

**Studio Barbershop Pro**

- Email: [contact.barbershop.studio@gmail.com](mailto:contact.barbershop.studio@gmail.com)
- WhatsApp: [+506 8852-7576](https://wa.me/50688527576)
- Developer: [Geovanny Cordero](https://geovannycordero.com)
