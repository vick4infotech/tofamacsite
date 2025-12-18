/**
 * Asset helper.
 *
 * Why this exists:
 * - When you replace a file in /public with the same filename (e.g. hero-placeholder.jpg),
 *   browsers and the Next.js image optimizer can keep serving a cached version.
 * - Adding a simple version query string makes cache invalidation explicit.
 *
 * Optional:
 * - Set NEXT_PUBLIC_ASSET_VERSION in .env.local (e.g. "2") whenever you swap images.
 */
export function asset(path: string) {
  const v = process.env.NEXT_PUBLIC_ASSET_VERSION;
  return v ? `${path}?v=${encodeURIComponent(v)}` : path;
}
