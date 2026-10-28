#!/usr/bin/env node
// Give /en and /zh exported HTML correct language attributes before hydration.
// The shared Next.js root layout otherwise emits lang="ja" on every route.
import { existsSync, readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const out = join(process.cwd(), "out");
if (!existsSync(out)) throw new Error("Missing static export: out/");
const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const filename = join(dir, entry);
    if (statSync(filename).isDirectory()) walk(filename);
    else if (filename.endsWith(".html")) files.push(filename);
  }
}
walk(out);
const updated = { en: 0, zh: 0 };
for (const filename of files) {
  const path = relative(out, filename).replaceAll("\\", "/");
  const lang = path === "en.html" || path.startsWith("en/") ? "en"
    : path === "zh.html" || path.startsWith("zh/") ? "zh-CN"
    : null;
  if (!lang) continue;
  const html = readFileSync(filename, "utf8");
  const opening = html.match(/<html\b[^>]*>/i)?.[0] ?? "";
  if (!opening.includes('lang="ja"') && !opening.includes('lang="' + lang + '"'))
    throw new Error("Unexpected HTML language for " + path + ": " + opening);
  const fixed = html.replace(/(<html\b[^>]*\blang=)"ja"/i, '$1"' + lang + '"');
  if (!fixed.match(/<html\b/i) || !fixed.includes('lang="' + lang + '"'))
    throw new Error("Failed to set HTML language: " + path);
  if (fixed !== html) writeFileSync(filename, fixed);
  if (lang === "en") updated.en++;
  else updated.zh++;
}
if (updated.en < 2 || updated.zh < 2)
  throw new Error("Missing translated static export: " + JSON.stringify(updated));
console.log("PASS: localized static HTML language attrs: " + JSON.stringify(updated));
