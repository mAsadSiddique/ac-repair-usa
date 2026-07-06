# Nationwide AC Repair & Installation

A fully static, production-ready marketing and lead-generation website for a
nationwide HVAC / air conditioning service, built with React + Vite +
Tailwind CSS.

There is **no backend** — bookings and reviews are persisted in the browser
(`localStorage`) and the localized "AI" climate advisor is generated on the
client. This makes the site deployable to any static host.

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
   The static output is written to `dist/`. Preview it with `npm run preview`.

## Deploy to Netlify

This repo includes a `netlify.toml` preconfigured for a static SPA:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- SPA redirect rule so client-side routes resolve to `index.html`.

Either connect the repository in the Netlify dashboard (settings are picked up
automatically from `netlify.toml`) or deploy from the CLI:

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

No environment variables are required.
