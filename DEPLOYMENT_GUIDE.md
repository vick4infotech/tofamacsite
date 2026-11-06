# Tofamac deployment and WordPress routing

## Vercel

1. Import the Git repository with the project files at repository root. If repository contains the `tofamacsite-main` folder, set Root Directory to `tofamacsite-main`.
2. Framework Preset: **Next.js**; Build Command: `npm run build`; Output Directory: leave empty / framework default; Install Command: `npm ci`.
3. Use Node.js 22.x where supported, or a supported Vercel version compatible with Next.js 16.
4. Configure SMTP variables privately in Project Settings > Environment Variables. Do not commit your actual passwords.
5. Add `tofamacseo.com` and optionally `www.tofamacseo.com` as project domains; set domain DNS to values indicated by Vercel. Keep `wp-origin` DNS targeting the Whogohost server, not Vercel.
6. Deploy the project. Rewrites in `vercel.json` proxy `/blog` and `/blog/...` to the separate WordPress host without changing the visitor URL.

## Important WordPress-side settings

- Test `https://wp-origin.tofamacseo.com/blog/` **directly**. Its SSL certificate must be valid and its server must serve the WordPress installation at `/blog` for the `wp-origin` host.
- WordPress public URLs should use `https://tofamacseo.com/blog` as both WordPress Address and Site Address, but this requires correct reverse-proxy support and SSL detection at the WordPress server. If settings are changed before the proxy works, you may lose WP admin access.
- Configure WordPress/PHP server reverse-proxy handling (HTTPS forwarded headers) and ensure generated links, canonical redirects, images, REST endpoints and login cookies remain under the public `/blog` path.
- If the origin only serves WordPress at the **origin domain root**, change the rewrite destinations to `https://wp-origin.tofamacseo.com` and `https://wp-origin.tofamacseo.com/:path*` respectively, and configure its WordPress URL/subdirectory assets accordingly. Do not do this unless origin layout is verified.
- Verify `/blog/`, `/blog/wp-admin/`, `/blog/wp-login.php`, `/blog/wp-json/`, CSS/images and permalink pages after deployment.
- A DNS A record for `wp-origin` is necessary but not sufficient: the hosting panel must recognize `wp-origin.tofamacseo.com` as a host, route it to the proper document root and provide HTTPS certificate.

## Security

An earlier copy of `.env.example` contained live-looking SMTP credentials. The included example has been sanitized. Rotate the mailbox password and enter the new value ONLY in Vercel's secret environment variables. If source was pushed publicly, rotate immediately.

## Troubleshooting

- Build failure: inspect Vercel's first actual error under Deployments > Build Logs; routing changes alone do not guarantee a successful build.
- 404 at non-blog pages: confirm Vercel Root Directory and Next.js framework detection; no SPA fallback rewrite should be used.
- 502/403 on blog: inspect `wp-origin` hosting, certificate, host routing, WAF, or WordPress redirects.
- WordPress login redirecting to origin: WordPress public home/siteurl and forwarded host/HTTPS configuration need correction.
