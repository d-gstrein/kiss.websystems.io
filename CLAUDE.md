# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

**Node.js Requirement:** Astro 5 requires Node.js >= 18.20.8. Use `nvm use 20` or higher before running commands.

## Architecture

Static landing page for KISS.Shop built with Astro 5 and Tailwind CSS v4.

### Tech Stack
- **Astro 5** - Static site generator with zero JS by default
- **Tailwind CSS v4** - Styling via `@tailwindcss/vite` plugin (CSS-first config in `global.css`)
- **TypeScript** - Strict mode, path alias `@/*` → `src/*`

### Project Structure
- `src/layouts/Layout.astro` - Main wrapper with header, footer, meta tags, JSON-LD schemas
- `src/components/` - Reusable Astro components (Hero, CTA, FAQ, ComparisonTable)
- `src/pages/` - Route pages (index, impressum, datenschutz, vergleich/*)
- `src/styles/global.css` - Tailwind config with custom theme (brand colors, fonts)

### Theming
Custom colors defined in `global.css` using Tailwind v4's `@theme inline`:
- `brand` (#d45500) - Primary accent color
- `brand-light` / `brand-dark` - Light/dark variants

Fonts: IBM Plex Sans (body) and IBM Plex Mono (headings) via Google Fonts.

### SEO
- JSON-LD structured data: Organization, SoftwareApplication, FAQPage, BreadcrumbList
- Automatic sitemap via `@astrojs/sitemap`
- Legal pages (impressum, datenschutz) have `noindex={true}`

### Deployment
Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.
Site URL: https://kiss.websystems.io
