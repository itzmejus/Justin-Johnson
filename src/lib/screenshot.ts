/** Free, no-key screenshot service used as a homepage preview for sites without a curated image asset. */
export function getSiteScreenshot(url: string, width = 800): string {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}
