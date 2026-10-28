#!/usr/bin/env node
// Correct HTML language attributes in Next.js static export for each localized route.
// RootLayout is shared; in static export, it otherwise emits lang="ja" for /en and /zh
// until the client-side Navbar hydrates. No visible content or layout is modified.
import { existsSync, readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const out = join(process.cwd(), "out");
if (!existsSync(out)) throw new Error("Static export directory missing: out/");
const files = [];
function visit(dir) {
  for (const entry of readdirSync(dir)) {
    const filename = join(dir, entry);
    if (statSync(filename).isDirectory()) visit(filename);
    else if (filename.endsWith(".html")) files.push(filename);
  }
}
visit(out);
let en = 0, zh = 0;
for (const file of files) {
  const rel = relative(out, file).replaceAll("\\", "/");
  const lang = rel === "en.html" || rel.startsWith("en/") ? "en"
    : rel === "zh.html" || rel.startsWith("zh/") ? "zh-CN"
    : null;
  if (!lang) continue;
  const html = readFileSync(file, "utf8");
  const opening = html.match(/<html\b[^>]*>/i)?.[0];
  if (!opening) throw new Error("No HTML opening tag in " + rel);
  if (!/\blang=["\x27]ja["\x27]/i.test(opening) && !opening.includes(\x27lang="\x27 + lang + \x27"\x27)) {
    throw new Error("Unexpected lang attribute in " + rel + ": " + opening);
  }
  const fixed = html.replace(/(<html\b[^>]*\blang=)["']ja["']/i, '$1"' + lang + '"');
  if (!fixed.includes(\x27lang="\x27 + lang + \x27"\x27)) {
    throw new Error("Language export check failed: " + rel);
  }
  if (fixed !== html) writeFileSync(file, fixed);
  if (lang === "en") en++;
  else zh++;
}
if (en < 2 || zh < 2) throw new Error("Expected localized page exports, got en=" + en + " zh=" + zh);
console.log("PASS: static HTML language corrected for " + en + " English pages and " + zh + " Chinese pages.");
