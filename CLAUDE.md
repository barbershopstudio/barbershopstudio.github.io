# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for Studio Barbershop Pro, a barbershop management SaaS. This repo is the static frontend only — it does not contain the management system itself. Content is in Spanish by default (Costa Rica locale, `es-CR`), with a client-side English toggle.

Plain HTML, CSS, and JavaScript — no framework, no build step. The entire site was migrated off Next.js/React (see git history) once it became clear the static export it produced was already just `index.html` plus a two-value locale toggle.

## Commands

Run `nvm use 24` before any command below — this repo requires Node 24 (`.nvmrc` / `package.json#engines`), and CI runs on Node 24 as well.

```bash
nvm use 24            # required before any command in this repo
yarn dev              # Serve the site at http://localhost:3000 (js/serve.js, no build)
yarn test             # Unit tests (node:test) + Playwright e2e tests
yarn test:unit        # Just the node:test suite (tests/unit/)
yarn test:e2e         # Just the Playwright suite (tests/e2e/) — needs `npx playwright install chromium` once
yarn lint             # ESLint with --fix
yarn format           # Prettier write
yarn format:check     # Prettier check (used in CI)
```

There is no build step and no TypeScript — `index.html` at the repo root is the deployed page as-is.

## Architecture

- **Static site, no framework.** The deployable artifact is the repo root itself: `index.html`, `css/`, `js/`, `images/`, and the loose static files (`favicon.ico`, `manifest.json`, `robots.txt`, `sitemap.xml`, `browserconfig.xml`). CI copies exactly that set into a `dist/` folder for GitHub Pages — nothing is compiled.
- **Single HTML file.** The whole page lives in `index.html`: hero, stats, features, benefits, customization, contact, and footer, in document order. Find a section by its `id="…-heading"` anchor or the surrounding HTML comment (e.g. `<!-- Hero Section -->`), same convention as before.
- **i18n via `data-i18n` attributes, not components.** Every translatable string in `index.html` is baked in as real Spanish text (the default locale) and carries a `data-i18n="dotted.path"` attribute; `js/i18n.js` walks `[data-i18n]` and `[data-i18n-attr]` elements and swaps `textContent`/attributes from `js/translations.js` (a plain `{ es: {...}, en: {...} }` object, both locales keyed identically — enforced by `tests/unit/translations.test.js`). Locale detection (stored preference → `navigator.language` → `'es'`) and persistence (`localStorage`) live in the same file. **Never use `innerHTML` here** — every swap goes through `textContent`/`setAttribute`, including the JSON-LD `<script>` tag (set via `textContent`, not `innerHTML`, even though it's fixed content).
- **Contact links are plain anchors, not click handlers.** The WhatsApp/email/Calendly cards and the hero CTA are `<a href>` tags (`#contact-whatsapp`, `#contact-email`, `#cta-demo` in `index.html`). Their `href`s depend on the current locale's message text, so `js/i18n.js` rewrites them via `buildMailto`/`buildWhatsAppUrl` (`js/links.js`) every time the locale changes — there is no `window.open()` anywhere.
- **SEO/metadata lives directly in `index.html`'s `<head>`**, plus a static JSON-LD `<script id="structured-data" type="application/ld+json">` whose `description`/`inLanguage` fields are rewritten in place when the locale toggle fires. If you change hero/meta copy, keep the `<head>` tags and `js/translations.js` in sync.
- **Styling** is plain CSS, no preprocessor: `css/tokens.css` (the same `oklch` custom-property tokens the old Tailwind theme used, light/dark via `prefers-color-scheme`), `css/base.css` (reset, typography, buttons, cards, the locale switcher), `css/sections.css` (one block per page section, native `min-width` media queries at Tailwind's old breakpoints: 640/768/1024px). SCSS was deliberately skipped — native CSS nesting and custom properties already cover what it would have added; see the migration diagnosis for the reasoning.
- **No dependencies at runtime.** `js/translations.js`, `js/links.js`, and `js/i18n.js` are hand-written ES modules loaded via `<script type="module">` — no bundler, no npm packages shipped to the browser. `js/serve.js` is a ~40-line `node:http` static file server used only for local dev (`yarn dev`) and Playwright's `webServer`; it is not part of the deployed site.
- **Analytics**: self-hosted Plausible, wired up as two inline `<script>` tags in `index.html`'s `<head>` — same setup as before, just no longer routed through `next/script`.

## Testing

TDD-style: `tests/unit/*.test.js` (Node's built-in test runner, zero dependencies) cover pure logic — that `es`/`en` in `translations.js` have identical key shapes, and that `links.js`'s URL builders reproduce the exact `mailto:`/`wa.me` URLs the app has always used. `tests/e2e/*.spec.js` (Playwright, the one devDependency) drive a real browser against `index.html` served by `js/serve.js` — structure/landmarks, the locale toggle (text swap, `aria-pressed`, `localStorage` persistence, JSON-LD update), and that every contact link resolves to the right URL in both locales. `playwright.config.js` pins the test browser's locale to `es-CR` so the default-locale assertions are deterministic.

## CI/CD

`.github/workflows/ci-cd.yml` runs on push/PR to `main`/`develop`: quality checks (lint, format:check) → tests (`yarn test:unit` + `yarn test:e2e`) → security audit (`yarn audit`) → Lighthouse CI (PRs only, run directly against the static files) → deploy to GitHub Pages (main only — stages `index.html`, `css/`, `js/`, `images/`, and the loose static files into `dist/`, no build). `.github/workflows/release.yml` stages the same file set into a tarball and creates a GitHub Release on `v*` tags. Both use `actions/setup-node` — keep the `node-version` there in sync with `.nvmrc`/`package.json#engines` if bumping Node versions.
