# ACES Technology Astro Migration

## Overview

This migration moves the ACES Technology website to an Astro-based architecture with Markdown content collections, reusable components, and Decap CMS support. The site keeps the existing voice and structure while making updates more maintainable and easier to publish.

## New directory structure

- src/content/ — Markdown content for research, profiles, publications, presentations, news, and team pages
- src/pages/ — route-driven pages for the main sections and each content collection detail page
- src/components/ — shared UI pieces such as the site header and content cards
- src/layouts/ — the shared page shell with SEO metadata and site-wide styles
- src/styles/ — global responsive styling and layout utilities
- public/admin/ — Decap CMS entry points and configuration
- .github/workflows/ — GitHub Pages deployment workflow

## Run locally

1. Install dependencies: npm install
2. Start the development server: npm run dev
3. Open http://localhost:4321
4. Optional diagnostics: npm run check

## Add content manually

Create Markdown files in the relevant folders under src/content/.

Examples:
- src/content/research/
- src/content/profiles/
- src/content/publications/
- src/content/presentations/
- src/content/news/
- src/content/team/

Each entry should include frontmatter fields such as title, description, date, tags, draft, and featured. The body is rendered as Markdown content.

## Use Decap CMS

1. Start the site locally.
2. Open /admin/ in the browser.
3. Sign in using GitHub authentication and the repository configured in public/admin/config.yml.
4. Create or edit entries in the configured collections.
5. Save drafts to use the editorial workflow, then publish when ready.

## Deployment

The site is configured for GitHub Pages under the repository project path /aces-technology-next/. The Astro config uses the repository base path so links and assets resolve correctly on GitHub Pages.

The deployment workflow in .github/workflows/deploy.yml builds the site and publishes the dist/ output to GitHub Pages whenever changes are pushed to the main branch.

## Remaining setup

- Confirm that the GitHub repository name and branch in public/admin/config.yml match the live repository.
- Enable GitHub Pages in the repository settings if it is not already active.
- Replace placeholder publication and presentation URLs with real links.
- Add a final favicon and hero imagery in public/images/ if a stronger brand treatment is needed.
