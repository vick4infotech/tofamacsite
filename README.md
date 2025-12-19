# Tofamac SEO Website

Production ready marketing website for Tofamac SEO built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer (server side email)

## Run locally

1. Install dependencies

```bash
npm install
```

2. Add environment variables

Create a `.env.local` in the project root (Tofamac SEO mailbox SMTP):

```bash
SMTP_HOST=mail.tofamacseo.com
SMTP_PORT=465
SMTP_USER=admin@tofamacseo.com
SMTP_PASS=...your email account password...

# Recommended sender address (usually matches SMTP_USER)
SMTP_FROM=admin@tofamacseo.com
```

3. Start dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Contact form

The contact form posts to `/api/contact` and sends enquiries to:

- `admin@tofamacseo.com`

The API route requires SMTP variables above.

## Replace images

Replace these placeholder images in:

`/public/images/`

- hero-placeholder.jpg
- team-placeholder.jpg
- services-placeholder.jpg
- analytics-placeholder.jpg
- office-placeholder.jpg

They are normal files. Replace them with the same filenames and the site updates automatically.

### If an image does not appear to change
If you replace an image file but still see the old version, it is usually browser or optimizer caching.

Option A (fast): hard refresh your browser.

Option B (reliable): bump this env var in `.env.local`:

```bash
NEXT_PUBLIC_ASSET_VERSION=2
```

Then restart the dev server (or redeploy on Vercel). The code appends `?v=...` to image URLs to bust caches.

## Replace brand assets

Logos live in:

`/public/brand/`

- logo-primary.png (navbar, footer)
- logo-mark.png (icon source)

## Dark mode

A theme toggle is available in the navbar.
Preference is stored in localStorage under `tofamac_theme`.

## Deploy

This project is Vercel compatible. Add the SMTP environment variables in Vercel settings.
