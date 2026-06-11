# 🍌 Nano Banana Prompt Studio

A curated gallery of 140+ image generation prompts for **Nano Banana Pro**, organized into categories with search, filtering, and favorites.

![screenshot](https://img.shields.io/badge/status-active-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

| | |
|---|---|
| 🔍 **Search** | Filter prompts by title, tags, or description with instant results |
| 🏷️ **Filters** | Narrow down by category, tag, or source via sidebar |
| ⭐ **Favorites** | Save prompts locally (persisted in your browser) |
| 📋 **One-click copy** | Copy any prompt to your clipboard instantly |
| 📱 **Responsive** | Works great on desktop, tablet, and mobile |
| 🌙 **Dark theme** | OLED-friendly dark UI with green accent |

## 🚀 Quick Start

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## 🗂️ Prompt Categories

| Category | Description |
|---|---|
| **Nano Banana Pro Examples** | Curated image generation examples (1–31) |
| **Nano Banana Examples** | Community use cases (32–140) |
| **1. Portraits & Identity** | Name portraits, archetypes, mixed media |
| **2. Style & Transformation** | Bloom effects, ice freeze, cartoon add-ons |
| **3. Fashion & Product Imaging** | Collectible boxes, flat lays, splash ads |

## 🛠️ Tech Stack

- **Vanilla JS** — No frameworks, no build step, zero npm deps
- **CSS Custom Properties** — Dark theme with `--bg-primary`, `--accent`, etc.
- **Google Fonts** — Inter (sans-serif)
- **localStorage** — Favorites persistence

## 📁 Project Structure

```
├── index.html    # Shell with skeleton DOM
├── style.css     # Full stylesheet (dark theme, responsive grid, modal)
├── app.js        # All app logic + 140+ prompts (single IIFE)
├── AGENTS.md     # AI assistant instructions
└── .opencode/    # OpenCode plugin config (not app deps)
```

## 🌐 Deployment

The app is a static SPA — deploy anywhere:

- **GitHub Pages**: push to `main`, enable Pages from root
- **Vercel / Netlify**: drag the folder or connect your repo
- **Any static server**: `python3 -m http.server 8080`

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `/` | Focus search input |
| `Escape` | Close modal |
| `Tab` | Navigate interactive elements (with visible focus ring) |

## 📄 License

MIT — Use freely, modify, share.
