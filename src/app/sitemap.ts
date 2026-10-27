import type { MetadataRoute } from "next";

// Required for Next.js static export (GitHub Pages).
export const dynamic = "force-static";

/**
 * Only include currently public, indexable pages.
 *
 * The /cases page and unreviewed /insights/[slug] drafts are intentionally
 * omitted while their review/noindex gates remain in place.
 * Do not add draft URLs or invented lastModified timestamps.
 */
const origin = "https://luare-consulting.com";

const publicPaths = [
  "/",
  "/services",
  "/services/internal-control",
  "/bpo",
  "/services/accounting-management",
  "/services/finance-ops",
  "/services/global-finance",
  "/services/audit-assurance",
  "/services/ma-finance",
  "/for-audit-firms",
  "/about",
  "/contact",
  "/pricing",
  "/insights",
  "/privacy",
  "/en",
  "/en/about",
  "/en/contact",
  "/zh",
  "/zh/about",
  "/zh/contact",
  "/zh/services",
  "/zh/services/internal-control",
  "/zh/services/accounting-management",
  "/zh/services/finance-ops",
  "/zh/services/global-finance",
  "/zh/services/audit-assurance",
  "/zh/services/ma-finance",
  "/zh/pricing",
  "/zh/insights",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: origin + path,
  }));
}
