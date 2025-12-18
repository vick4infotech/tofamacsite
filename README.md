# Tofamac SEO Website (Next.js + Tailwind + Framer Motion)

High-fidelity, production-ready marketing site for **Tofamac SEO** built with:
- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide icons**
- **Next.js `<Image />`** for all images
- **Vanilla form handling + fetch** (no external form services)

## 1) Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 2) Contact form (real email sending)

The contact form POSTs to `POST /api/contact` and sends enquiries to:

**admin@tofamacseo.com**

### Configure SMTP (required)
Create `.env.local` from `.env.example` and fill in:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- (Optional) `FROM_EMAIL`

Example:

```bash
cp .env.example .env.local
```

> On Vercel, add these environment variables in **Project Settings → Environment Variables**.

## 3) Replace placeholder images

All site placeholders are stored in:

`/public/images/`

Replace these files **in place** (same filenames) to avoid code changes:

- `hero-placeholder.jpg`
- `team-placeholder.jpg`
- `services-placeholder.jpg`
- `analytics-placeholder.jpg`
- `office-placeholder.jpg`

## 4) Replace / update brand assets

Provided logo assets are stored in:

`/public/brand/`

Primary usage:
- `logo-full-color.png` → used on light backgrounds (navbar)
- `logo-wordmark-white.png` → used on dark backgrounds (footer)

You can swap those images without touching code.

## 5) Update site content

Most reusable content lives in:

- `lib/site.ts` (services list, FAQs, nav items, site meta)

Page-specific layout/content is in:

- `app/page.tsx` (Home)
- `app/about/page.tsx` (About Us)
- `app/services/page.tsx` (Services)
- `app/contact/page.tsx` (Contact)

Mission / Vision / Promise text is intentionally kept verbatim in `app/about/page.tsx`.

## 6) Deployment

This project is **Vercel-compatible** out of the box:

```bash
npm run build
npm run start
```

Make sure the SMTP environment variables are set in your hosting provider.
