/**
 * C班 cross-page static-export regression. Non-sending and read-only.
 * Requires npm run build; run: node scripts/qa/c09-static-export.mjs
 * Source + exported HTML presence checks; NOT a substitute for mobile/browser visual QA.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";
import process from "node:process";
const errors = [];
const warnings = [];
const source = readFileSync("src/lib/serviceCatalog.ts", "utf8");
const section = source.slice(source.indexOf("const topics:"), source.indexOf("function route("));
const topics = [...section.matchAll(/\["([^"]+)","([^"]+)","([^"]+)","([^"]+)"\]/g)]
  .map((m) => ({ id: m[1], name: m[2], page: m[4] }));
if (topics.length !== 24) errors.push("24 service topic definitions expected, found " + topics.length);
const homeFile = join("out", "index.html");
if (!existsSync(homeFile)) errors.push("static export missing " + homeFile);
const home = existsSync(homeFile) ? readFileSync(homeFile, "utf8") : "";
function exported(route) {
  const candidates = [join("out", route + ".html"), join("out", route, "index.html")];
  return candidates.find((f) => existsSync(f));
}
for (const t of topics) {
  const route = t.page === "bpo" ? "bpo" : "services/" + t.page;
  const hasFragment = !(t.page === "internal-control" && t.id === "internal");
  const url = "/" + route + (hasFragment ? "#" + t.id : "");
  const target = exported(route);
  if (!home.includes('href="' + url + '"')) errors.push("Homepage link missing: " + url);
  if (!target) { errors.push("Target page missing: " + route); continue; }
  if (hasFragment && !readFileSync(target, "utf8").includes('id="' + t.id + '"'))
    errors.push("Target anchor missing: " + url);
}
for (const route of ["contact", "bpo", "en/contact", "zh/contact", "services/audit-assurance",
 "services/internal-control", "services/accounting-management", "services/finance-ops",
 "services/global-finance", "services/ma-finance"]) {
  if (!exported(route)) errors.push("Expected exported route missing: /" + route);
}
if (home && !/<title>[^<]+<\/title>/i.test(home)) errors.push("Homepage title missing");
if (home && !/name="description"/.test(home)) warnings.push("Homepage description metadata missing");
for (const locale of ["en/contact", "zh/contact"]) {
  const file = exported(locale);
  if (!file) continue;
  const html = readFileSync(file, "utf8");
  const expected = locale.startsWith("en") ? "en" : "zh-CN";
  if (!html.includes('<html lang="' + expected + '"'))
    warnings.push("/" + locale + ": html lang tag not " + expected + " (a11y review)");
}
function walk(path) {
  if (!existsSync(path)) return;
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const p = join(path, entry.name);
    if (entry.isDirectory()) walk(p);
    else if ([".html", ".js"].includes(extname(p))) {
      const s = readFileSync(p, "utf8");
      if (/-----BEGIN (?:RSA |EC )?PRIVATE KEY-----|(?:RESEND_API_KEY|TURNSTILE_SECRET_KEY|R2_SECRET_ACCESS_KEY)\s*[:=]\s*["']\w{8,}/.test(s))
        errors.push("Potential secret in build artifact: " + p);
    }
  }
}
walk("out");
console.log("Service links inspected: " + topics.length);
console.log("Warnings: " + warnings.length);
for (const w of warnings) console.warn("WARN:", w);
console.log("Failures: " + errors.length);
for (const e of errors) console.error("FAIL:", e);
if (errors.length) process.exitCode = 1;
else console.log("PASS static export checks. Visual, actual HTTP, real-device and form QA remain separately required.");
