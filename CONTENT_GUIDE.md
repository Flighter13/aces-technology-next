# ACES Technology content guide

This site does not use a CMS. Pages and project entries are edited as files, reviewed locally, and published through GitHub.

## Before editing

From the project folder:

```powershell
git pull
npm install
npm run dev
```

Astro prints a local address. Keep the development server running while you edit so changes appear immediately.

## Add a project

1. Copy `src/content/projects/purik-sensor-system.md`.
2. Rename the copy with lowercase words separated by hyphens, such as `autonomous-ground-testbed.md`.
3. Replace the frontmatter and Markdown body.
4. Run `npm run check` and `npm run build`.
5. Commit and push the change.

Every project automatically receives:

- A card on the Projects page
- A page at `/projects/file-name/`
- A homepage card when `featured: true`

### Project frontmatter

```yaml
---
title: Project title
summary: One clear sentence explaining the project and its value.
status: In development
year: 2026
featured: false
disciplines:
  - Embedded systems
  - Sensor integration
order: 2
---
```

Allowed status values are `Completed`, `In development`, and `Research`. Use `order` to control display order; lower numbers appear first.

### Recommended project sections

```markdown
## Project brief

## Problem

## Requirements

## Architecture

## Implementation

## Testing and results

## Current status

## Next steps
```

Only publish claims that can be supported by project records, measurements, photographs, code, or other evidence. Do not include credentials, private network details, API keys, controlled information, or private contact information.

## Edit standard pages

- Homepage: `src/pages/index.astro`
- Research: `src/pages/research.astro`
- About: `src/pages/about.astro`
- Contact: `src/pages/contact.astro`
- Navigation: `src/components/Header.astro`
- Footer: `src/components/Footer.astro`

## Add images and downloads

Place images that Astro should optimize under `src/assets/`. Use descriptive filenames and meaningful alternative text.

Place unchanged downloadable files, such as public PDF reports, under `public/documents/`. They will be available at paths such as `/documents/report-name.pdf`.

Before adding any image or document, remove location data, credentials, serial numbers, private correspondence, and other sensitive information.

## Publishing checklist

```powershell
npm run check
npm run build
git status
git add .
git commit -m "Add project content"
git push
```

Confirm the Netlify deployment succeeds and review the live page on both desktop and mobile.
