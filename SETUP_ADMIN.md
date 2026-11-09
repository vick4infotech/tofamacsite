# Tofamac SEO — Working admin setup

## What works
- `/admin` server-checked login with 8-hour signed HttpOnly session.
- Real support inbox: messages from `/contact` saved to Supabase, ordered newest first.
- Search/filter enquiries; mark New / In Progress / Resolved; add internal notes; reply via email application.
- Edit company name, description, email, tagline, mission, vision, promise, services and bullet points. These changes persist and are reflected in the website.
- Overview totals are based on actual database messages, not fabricated analytics.
- `/blog` reverse-proxy rules remain in `vercel.json`; this admin does not administer WordPress.

## Setup (required before the inbox or edits can persist)
1. Create a Supabase project at https://supabase.com/.
2. Open **SQL Editor** in Supabase, paste `SETUP_ADMIN.sql`, and run it.
3. Open Supabase **Project Settings > API** (or API Keys) and copy the Project URL and the *service_role / secret* key. **Never use the anon/publishable key for the server role.**
4. In Vercel **Project > Settings > Environment Variables**, add:

   ADMIN_PASSWORD = choose-a-strong-unique-password
   ADMIN_SESSION_SECRET = generate-a-random-secret-at-least-32-characters
   SUPABASE_URL = https://YOUR_PROJECT.supabase.co
   SUPABASE_SERVICE_ROLE_KEY = your-server-side-service-role-key

5. Redeploy the project (Production). Visit `https://tofamacseo.com/admin` and sign in with user `admin` and your ADMIN_PASSWORD.
6. Send a test message at `/contact`. Refresh `/admin`, open Support inbox, change its status and save.
7. Edit the site description under Site settings and save; reload the public site.

Optional SMTP notification settings: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM. The contact form **stores** messages regardless of SMTP configuration. If sending an optional email fails, the saved enquiry remains in the inbox.

## Security and limitations
- Store secrets in Vercel only; never put them in source code or `NEXT_PUBLIC_*` values.
- The admin is a single-user MVP, not WordPress administration or a full CMS.
- The interface's **Reply using email** opens a mail client; it doesn't send an email from inside the admin.
- Messages are capped to 300 most recent in the dashboard; older messages remain in the database.
- A public contact endpoint should eventually add CAPTCHA / server-side rate limiting for spam control.
- Rotate any credentials that were previously shared or published.
- Deploy only after verifying SSL and DNS. Vercel filesystem is not persistent; this project uses a hosted database intentionally.

## Troubleshooting
- Database not configured: check Supabase env vars and redeploy.
- Database tables not available: run `SETUP_ADMIN.sql` and check SQL errors.
- Login fails: confirm ADMIN_PASSWORD and ADMIN_SESSION_SECRET are configured.
- `/blog` remains broken: independent Whogohost WordPress origin issue, not repaired by this admin upgrade.
