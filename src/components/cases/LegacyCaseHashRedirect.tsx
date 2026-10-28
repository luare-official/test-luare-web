"use client";
import { useEffect } from "react";

/** Keep old shared C-gallery links working after the r5 HTML layout is restored. */
export default function LegacyCaseHashRedirect() {
  useEffect(() => {
    const route = () => {
      const m = window.location.hash.match(/^#\/case\/([a-z0-9-]+)$/i);
      if (!m) return;
      const aliases: Record<string, string> = {
        "accounting-operations": "case-close",
        "global-internal-control": "case-music",
        "overseas-jsox": "case-jsox",
      };
      const id = aliases[m[1]] || m[1];
      if (["case-close", "case-music", "case-jsox", "case-fpa"].includes(id)) {
        window.location.replace("/cases/" + id);
      }
    };
    route();
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, []);
  return null;
}
