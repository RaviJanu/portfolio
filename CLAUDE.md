# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a **vanilla HTML/CSS/JavaScript static portfolio site** with zero dependencies or build tools. It deploys automatically to GitHub Pages on push to `main`.

## Development

No build step required. Open `index.html` directly in a browser, or run a local HTTP server for accurate behavior:

```bash
python -m http.server 8000
# or
npx serve .
```

There is no `package.json`, no framework, and no compilation step.

## Deployment

GitHub Actions (`.github/workflows/static.yml`) deploys the repository root to GitHub Pages on every push to `main`. The live site is at `https://ravijanu.github.io/portfolio/`.

## Architecture

Three files make up the entire site:

- **`index.html`** — Single-page portfolio with all content. Sections: Hero → Skills → Experience → Education → Contact → Footer.
- **`style.css`** — All styling. Uses CSS custom properties (variables) defined in `:root` for the entire design system (colors, typography, spacing, radii).
- **`main.js`** — Vanilla JS for: IntersectionObserver fade-in animations, nav active-link tracking, email modal open/close/submit (constructs a `mailto:` URL), and experience project expand/collapse toggles.

## Design System

All design tokens live as CSS variables in `style.css`:

- **Accent color:** `--accent: #C46849` (warm orange-red)
- **Backgrounds:** `--bg-950` through `--bg-700` (dark scale)
- **Typography:** `--sans: 'Inter'`, `--mono: 'JetBrains Mono'`
- **Radius:** `--radius` (12px), `--radius-lg` (20px), `--radius-xl` (28px)

Responsive sizing uses `clamp()` throughout — avoid hardcoded pixel sizes for typography or spacing.

## Key Patterns

- Animations are triggered by adding `.visible` class via IntersectionObserver; elements start with `opacity: 0; transform: translateY(20px)` and transition on `.visible`.
- The contact form does not use a backend — it builds a `mailto:` link from form fields and opens the user's email client.
- Experience entries use `aria-expanded` / `aria-hidden` for accessible project detail toggling.
