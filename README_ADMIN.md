# Tofamac SEO — WordPress-style admin demo

## What you get

- `/admin` login and illustrative dashboard.
- No WordPress connection, database, editing, or real analytics. Dashboard controls outside the logout button are display-only.
- Server-side password verification and signed, HTTP-only 8-hour login cookie.
- Existing homepage, about, services, contact and external `/blog` proxy retained.

## Vercel settings

1. Upload **all the files** in this project root to GitHub and import as a **Next.js** project on Vercel.
2. In Vercel project Settings > Environment Variables, set `ADMIN_PASSWORD` to your own strong unique password, and `ADMIN_SESSION_SECRET` to a unique randomly generated value at least 32 characters long. These must be set for Production (and Preview if you want to log in on previews). Redeploy after saving.
3. Sign in at `https://tofamacseo.com/admin` using username `admin` and the `ADMIN_PASSWORD` you configured. The `.env.example` shows a SAMPLE password only and is not loaded automatically by Vercel.
4. `npm ci` and `npm run build` are the installation and build commands. Leave Output Directory at Next.js default.
5. Blog rewrite remains in `vercel.json` for `https://wp-origin.tofamacseo.com/blog/:path*`; its successful operation depends on WordPress-origin DNS, SSL, and hosting configuration.

## Important security details

- This is **not** a production content management system and not the WordPress dashboard.
- The password and session secret are *server-side environment variables*. Never prefix them with `NEXT_PUBLIC_` or commit a real `.env` file.
- This simple authentication does not include persistent rate limiting or MFA. For a public production admin, add Vercel WAF/rate limiting or identity-provider login.
- Changing the session secret invalidates existing sessions.
- The admin dashboard is marked `noindex` but should not be treated as secret.
- Files in `public_html/blog` remain on Whogohost; this app does not modify WordPress.
