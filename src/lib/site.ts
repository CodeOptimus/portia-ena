/**
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://yourname.vercel.app`)
 * so canonical URLs and Open Graph metadata resolve to your real domain.
 */
export function getSiteUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return undefined;
  return raw.replace(/\/$/, "");
}
