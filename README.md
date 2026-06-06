# Karina & Jonathan · Wedding Website

Live at **[jkgreer.com](https://jkgreer.com)**  
Wedding date: **September 5, 2026 · The Fly Farm · Lewisburg, TN**

---

## Editing content

All guest-facing copy — names, date, venue, schedule, FAQ, registry links — lives in one file:

```
src/content.js
```

Open it, change whatever you need, save. No other files need to touch.

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173  (hot-reload)
```

---

## Building & deploying

```bash
npm run build      # outputs to dist/
```

### Recommended: Netlify / Vercel / Cloudflare Pages (free)

1. Push this repo to GitHub.
2. Connect it to [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [Cloudflare Pages](https://pages.cloudflare.com).
3. Set build command → `npm run build`, output directory → `dist`.
4. Done — CDN, HTTPS, and automatic deploys on every push.

### Render (current hosting)

If staying on Render, the `start` script now uses `serve -s dist` instead of `vite preview`.  
Make sure to run `npm run build` as part of your Render build command.

---

## Adding the OG share image

Place a **1200 × 630 px** image at `public/og-image.jpg` and it will automatically be used when someone shares the link on iMessage, WhatsApp, Twitter, etc. The meta tags in `index.html` already point to it.

---

## Project structure

```
public/
  couple-hero.jpg      # full-bleed hero background
  couple-story.jpg     # photo in the Our Story section
  favicon.svg          # J&K monogram tab icon
  og-image.jpg         # 1200×630 social share card (add this)
src/
  content.js           # ← edit dates, venue, copy here
  components/          # one file per section
  styles/global.css    # design tokens (colors, fonts, spacing)
```

---

## Node version

Tested on Node 20+. Add an `.nvmrc` with `20` if you want to pin it for CI/deploy.
