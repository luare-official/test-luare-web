import type { MetadataRoute } from "next";

// Required for Next.js static export (GitHub Pages).
export const dynamic = "force-static";

/**
 * Only include currently public, indexable pages.
 *
 * Reviewed /cases pages are public; unreviewed /insights/[slug] drafts
 * remain omitted while their review/noindex gates are in place.
 * Do not add draft URLs or invented lastModified timestamps.
 */
const origin = "https://luare-consulting.com";

const publicPaths = [
  "/",
  "/services",
  "/services/internal-control",
  "/services/internal-control/overview",
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
  "/cases",
  "/cases/case-close",
  "/cases/case-music",
  "/cases/case-jsox",
  "/cases/case-fpa",
  "/insights",
  "/privacy",
  "/en",
  "/en/services",
  "/en/services/internal-control",
  "/en/services/accounting-management",
  "/en/services/finance-ops",
  "/en/services/global-finance",
  "/en/services/audit-assurance",
  "/en/services/ma-finance",
  "/en/cases",
  "/en/cases/case-close",
  "/en/cases/case-music",
  "/en/cases/case-jsox",
  "/en/cases/case-fpa",
  "/en/pricing",
  "/en/insights",
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
  "/zh/cases",
  "/zh/cases/case-close",
  "/zh/cases/case-music",
  "/zh/cases/case-jsox",
  "/zh/cases/case-fpa",
  "/zh/insights",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: origin + path,
  }));
}
