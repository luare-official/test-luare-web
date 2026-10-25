import type { MetadataRoute } from "next";

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
