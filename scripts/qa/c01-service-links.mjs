/**
 * C-01 non-sending static export service-link audit.
 * Run after `npm run build`: `node scripts/qa/c01-service-links.mjs`
 * Checks page existence and hash target IDs in `out`. It does NOT replace browser QA.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const catalog = readFileSync("src/lib/serviceCatalog.ts", "utf8");
const start = catalog.indexOf("const topics:");
const end = catalog.indexOf("function route(");
if (start < 0 || end <= start) throw new Error("serviceCatalog topics format changed");
const section = catalog.slice(start, end);
const topics = [...section.matchAll(/\["([^"]+)","([^"]+)","([^"]+)","([^"]+)"\]/g)]
  .map((m) => ({ id: m[1], name: m[2], page: m[4] }));
if (topics.length !== 24) throw new Error(`Expected 24 topics, got ${topics.length}`);
const failures = [];
for (const item of topics) {
  const path = item.page === "bpo" ? "bpo" : `services/${item.page}`;
  const candidates = [join("out", `${path}.html`), join("out", path, "index.html")];
  const target = candidates.find((p) => existsSync(p));
  if (!target) {
    failures.push(`${item.id}: missing exported page ${path}`);
    continue;
  }
  const html = readFileSync(target, "utf8");
  // internal intentionally links to parent page without a fragment.
  if (!(item.page === "internal-control" && item.id === "internal") &&
      !html.includes(`id="${item.id}"`)) {
    failures.push(`${item.id}: missing DOM anchor in ${target}`);
  }
}
if (failures.length) {
  console.error(`C-01 link targets FAIL: ${failures.length}/24`);
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("C-01 service targets PASS: 24/24 static export pages/anchors");
  console.log("Browser click, mobile, form, Lighthouse and live HTTP tests remain required.");
}
