# Applyboard

A browser-local application tracker. Create and edit opportunities, change their status, search notes and companies, filter by status, delete and undo the most recent deletion.

## What it really does

- Uses controlled React forms with required fields and safe URL checks.
- Stores entries only in the current browser using localStorage, with corrupted-data handling.
- Starts empty. Optional example entries are explicitly fictional, not actual applications.
- Derives counts from current statuses. It does not measure historical activity.
- Presents table rows as cards on small screens, without horizontal scrolling.
- Uses a native modal dialog and supports Escape and keyboard focus.

No job applications are sent. There is no account, backend, cloud sync, email integration or collaboration. Clearing browser data removes saved entries. Do not store credentials or sensitive interview notes. This version has no export/backup feature. Saved state supports up to 500 entries on reload; large-scale use needs a database and pagination.

## Source map

- App.jsx: form state, CRUD operations, undo, stats and UI
- model.js: validation, URL allowlist, sample data and safe restoration
- model.test.js: validation, filters and corrupt-data checks
- app.spec.js: create/edit/status/persistence/delete/undo, invalid URLs and mobile layouts
- EXPLAIN-AR.md: Arabic explanation and practice

## Run and test

Use Node.js 22.12+ or a supported newer release.

```sh
npm ci
npm run dev
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

To use an installed Chrome for browser tests, set CHROME_PATH to its executable path. The app is a static React/Vite frontend. The relative Vite base supports hosting under a project subdirectory. No server, secrets or environment variables are needed.


## Repository layout

Readable source is at the repository root. Open `/app.html` on the Vite dev server for source development. `index.html` is the self-contained prebuilt GitHub Pages entry. `npm run build` builds `app.html` and its assets into `dist/`; to deploy that output, rename `dist/app.html` to `dist/index.html` and publish the complete `dist/` folder. The committed prebuilt entry is separate, so editing source alone does not update the deployed page.
