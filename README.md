# ACES Technology

Astro-based research portfolio for ACES Technology. Content is stored directly in Markdown—there is no CMS, admin route, or external database.

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Open the local URL Astro prints in the terminal. Before publishing, run:

```bash
npm run build
```

## Add a project

1. Duplicate `src/content/projects/purik-sensor-system.md`.
2. Rename the copy using a short URL-friendly name.
3. Update its frontmatter and Markdown content.
4. Commit and push. Astro automatically creates the listing card and project page.

Required frontmatter fields are validated in `src/content.config.ts`.

## Edit site copy

- Home: `src/pages/index.astro`
- Research: `src/pages/research.astro`
- About: `src/pages/about.astro`
- Contact: `src/pages/contact.astro`
- Navigation: `src/components/Header.astro`
- Styling: `src/styles/global.css`

## Deploy to Netlify

Import this repository in Netlify. The included `netlify.toml` sets the build command and output directory. Update the `site` value in `astro.config.mjs` when the production domain is known.

## Security

Never commit Wi-Fi credentials, API keys, private contact information, or hardware secret files. `.env` files are ignored by Git.
