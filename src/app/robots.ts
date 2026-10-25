import type { MetadataRoute } from "next";

// Required for Next.js static export (GitHub Pages).
export const dynamic = "force-static";

/**
 * Leave index control to each page's robots metadata; do not block review
 * pages here, or crawlers cannot read their noindex directives.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://luare-consulting.com/sitemap.xml",
  };
}
