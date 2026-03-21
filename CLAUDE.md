# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Nikita Bedi (applied ML researcher), deployed to GitHub Pages. There is no build system, package manager, or framework — just a single `index.html` with embedded CSS.

## Development

No build step required. To preview locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Deployment is automatic: pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/static.yml`), which deploys to GitHub Pages.

## Architecture

The entire site is `index.html` — a single-page portfolio with all CSS embedded in a `<style>` block. There are no external JavaScript dependencies or frameworks.

**Key design decisions:**
- CSS custom properties define the color palette (cream background `#faf8f4`, rust accent `#8b4513`)
- Typography: Crimson Pro (serif body), JetBrains Mono (technical/code elements), loaded from Google Fonts
- Responsive breakpoint at 768px
- Animations use `@keyframes fadeIn` and `slideUp` with staggered `animation-delay` on child elements

**Page sections** (in order): Header → About → Research Interests → Publications → Projects → Technical Skills → Footer
