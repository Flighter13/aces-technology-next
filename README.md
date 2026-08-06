# ACES Technology website

This repository contains the Astro-based rebuild of the ACES Technology website. The site was migrated from a static HTML/CSS/JavaScript structure into a more maintainable content-driven architecture using Astro, Markdown content collections, reusable components, and Decap CMS.

## What was created

- A responsive homepage and section pages for research, profiles, publications, presentations, news, and about
- Reusable components for shared navigation and content cards
- Markdown-based content collections for structured editorial content
- Decap CMS configuration for creating and editing content through the admin experience
- Netlify deployment configuration for automated publishing

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

The site is configured for Netlify deployment using [netlify.toml](netlify.toml):

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

Connect the `migration/astro-cms` branch to Netlify and enable automatic deploys on push.

### Decap CMS OAuth

Decap CMS uses the GitHub backend and Netlify auth broker. Set these values in [public/admin/config.yml](public/admin/config.yml):

- `backend.repo`: `Flighter13/aces-technology-next`
- `backend.branch`: `migration/astro-cms`
- `backend.site_domain`: your Netlify site domain
- `site_url`: your Netlify production URL

## Notes

See [MIGRATION.md](MIGRATION.md) for the full migration overview, local workflow details, CMS instructions, and remaining setup steps.
