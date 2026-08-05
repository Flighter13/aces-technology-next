# ACES Technology website

This repository contains the Astro-based rebuild of the ACES Technology website. The site was migrated from a static HTML/CSS/JavaScript structure into a more maintainable content-driven architecture using Astro, Markdown content collections, reusable components, and Decap CMS.

## What was created

- A responsive homepage and section pages for research, profiles, publications, presentations, news, and about
- Reusable components for shared navigation and content cards
- Markdown-based content collections for structured editorial content
- Decap CMS configuration for creating and editing content through the admin experience
- GitHub Pages deployment workflow for automated publishing

## Project structure

```text
/
├── public/
│   ├── admin/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── .github/workflows/
├── package.json
└── MIGRATION.md
```

## Local development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Run Astro diagnostics:

```sh
npm run check
```

## Content workflow

Content is stored as Markdown files in the content collections under [src/content](src/content). You can add or edit entries manually there, or use the Decap CMS admin at /admin/ once the site is running locally.

## Deployment

The site is configured for GitHub Pages deployment through [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The Astro base path is set for the repository project URL so assets and links resolve correctly on GitHub Pages.

## Notes

See [MIGRATION.md](MIGRATION.md) for the full migration overview, local workflow details, CMS instructions, and remaining setup steps.
