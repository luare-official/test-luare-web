#!/usr/bin/env node
// Read-only SEO/AIO discovery QA of the statically exported site.
// Does not visit the production website, submit forms, or call third parties.
import { readFileSync, existsSync } from "node:fs";

const requiredPaths = [
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
];
const origin = "https://luare-consulting.com";
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const filenameSitemap = "out/sitemap.xml";
const filenameRobots = "out/robots.txt";
check(existsSync(filenameSitemap), "sitemap.xml is missing from static export");
check(existsSync(filenameRobots), "robots.txt is missing from static export");

if(existsSync(filenameSitemap)){
  const sitemap = readFileSync(filenameSitemap, "utf8");
  const xmlUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  for(const path of requiredPaths){
    check(xmlUrls.includes(origin + path), "Missing indexable page from sitemap: " + path);
  }
  check(xmlUrls.length === new Set(xmlUrls).size, "Duplicate URLs in sitemap");
  check(!xmlUrls.includes(origin + "/cases"), "Review-only /cases must remain out of sitemap");
  check(!xmlUrls.some(u=>u.startsWith(origin + "/insights/")),
    "Review-only article detail URLs must remain out of sitemap");
  check(xmlUrls.every(u=>u.startsWith(origin + "/")),
    "Sitemap contains a URL outside the verified canonical origin");
}

if(existsSync(filenameRobots)){
  const robots = readFileSync(filenameRobots, "utf8");
  check(robots.includes("Sitemap: " + origin + "/sitemap.xml"),
    "robots.txt must advertise the canonical sitemap");
  check(!robots.includes("Disallow: /cases") && !robots.includes("Disallow: /insights"),
    "Review-only URLs need to remain crawlable so their noindex can be read");
}

for (const path of ["/services/internal-control", "/bpo"]){
  const filename = "out" + path + ".html";
  check(existsSync(filename), "Missing priority LP: " + path);
  if(existsSync(filename)){
    const html = readFileSync(filename, "utf8");
    check(html.includes('rel="canonical"') && html.includes(origin + path),
      "Missing correct canonical for priority LP: " + path);
    check(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),
      "Priority LP accidentally marked noindex: " + path);
  }
}

if(errors.length){
  for(const error of errors) console.error("FAIL: " + error);
  process.exitCode = 1;
} else {
  console.log("PASS: public sitemap, crawlable noindex policy, and J-SOX/BPO canonical checks.");
  console.log("NOTE: ad conversion success and live form delivery are NOT tested by this script.");
}
