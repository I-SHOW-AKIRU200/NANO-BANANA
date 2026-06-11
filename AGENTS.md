# AGENTS.md — Nano Banana Prompt Studio

Vanilla JS SPA (no build, no frameworks, zero npm deps for the app).

## Serve & develop

```bash
# Any static file server works. Examples:
npx serve .
python3 -m http.server 8080
open index.html
```

No build, lint, typecheck, or test commands exist.

## Architecture

| File | Purpose |
|---|---|
| `app.js` | All app logic + all prompt data (~5k LOC, single IIFE) |
| `index.html` | Shell with skeleton DOM + Inter font |
| `style.css` | Full stylesheet (dark theme, responsive grid, modal) |

- **Data**: `PROMPTS` array (id, title, desc, tags, category, source, prompt) + `PROMPT_IMAGES` map → all inline in `app.js`.
- **Sources**: `PicoTrex/banana-images`, `aimikoda/prompts`, GitHub user attachments, Twitter.
- **State**: `localStorage` key `nb_favorites` (favorite prompt IDs). Filter/sort state is in-memory only.
- **Keyboard shortcuts**: `/` focuses search, `Escape` closes modal.

## Conventions

- IIFE wrapping, `'use strict'`, manual DOM queries with `$`/`$$` aliases.
- CSS custom properties for theming (`--bg-primary`, `--accent`, etc.).
- No external UI libraries. No tests. No CI.

## `.opencode/` directory

Internal opencode plugin config. `.gitignore` inside it ignores its own `package.json`/`package-lock.json`. Not part of the app's dependency tree.
