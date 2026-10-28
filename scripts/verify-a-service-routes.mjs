#!/usr/bin/env node
// A班専用の静的出力QA。ネットワーク・外部メール・本番変更は一切行わない。
// Next.jsの out/ を対象にホームの29リンク、既存BPOを含む8親ページ、ID/アンカーを照合する。
import {readFileSync, existsSync} from "node:fs";
import path from "node:path";

const catalog=readFileSync("src/lib/serviceCatalog.ts","utf8");
const matches=[...catalog.matchAll(/^\s*\["([^"]+)","[^"]+","[^"]+","([^"]+)"\],?\s*$/gm)];
const entries=matches.map(([,id,page])=>({id,page}));
const problems=[];
const assert=(condition,message)=>{if(!condition)problems.push(message);};
const htmlCache=new Map();
const outputFile=page=>page==="bpo"?"out/bpo.html":page==="contact"?"out/contact.html":page==="internal-control"?"out/services/internal-control/overview.html":`out/services/${page}.html`;
const content=page=>{
  if(!htmlCache.has(page)){
    const filename=outputFile(page);
    if(!existsSync(filename)){problems.push(`Missing HTML: ${filename}`);htmlCache.set(page,"");}
    else htmlCache.set(page,readFileSync(filename,"utf8"));
  }
  return htmlCache.get(page);
};
const escapeRegExp=x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
const idCount=(html,id)=>{
  const escaped=escapeRegExp(id);
  return [...html.matchAll(new RegExp(`\\bid=(?:"${escaped}"|'${escaped}')(?=[\\s>])`,"g"))].length;
};
assert(entries.length===30,`Expected 30 catalog topic definitions, got ${entries.length}`);
assert(new Set(entries.map(x=>x.id)).size===entries.length,"Duplicate service IDs in catalog");
assert(new Set(entries.map(x=>x.page)).size===8,"Expected 8 existing service destination types including BPO/audit/contact");
const categories=[
 {n:"01",page:"internal-control",ids:["internal","three-documents","evaluation","internal-audit","training"]},
 {n:"02",page:"accounting-management",ids:["closing","outsourcing","fpa","cashflow","accounting-advisory"]},
 {n:"03",page:"finance-ops",ids:["close-improvement","process","ai","system-implementation","operating-model"]},
 {n:"04",page:"global-finance",ids:["market-entry","finance-setup","reporting","hq-reporting","coordination"]},
 {n:"05",page:"audit-assurance",ids:["statutory-audit","group-audit-consultation","ifrs-audit","fund-spc","voluntary-audit"]}
];
const homeFile="out/index.html";
assert(existsSync(homeFile),"Missing homepage static HTML");
const home=existsSync(homeFile)?readFileSync(homeFile,"utf8"):"";
const hrefFor=(c,id)=>{
 const base=c.page==="internal-control"?"/services/internal-control/overview":`/services/${c.page}`;
 const anchor=id==="group-audit-consultation"?"group-audit":id==="ifrs-audit"?"accounting-advisory":id;
 return base+"#"+anchor;
};
let checked=0;
for(const category of categories){
 const pageHtml=content(category.page);
 const source=catalog.match(new RegExp('number:"'+category.n+'",[^\\n]*itemIds:\\[([^\\]]+)\\]'))?.[1]||"";
 const actual=[...source.matchAll(/"([^"]+)"/g)].map(m=>m[1]);
 assert(JSON.stringify(actual)===JSON.stringify(category.ids),"Service "+category.n+" title/menu scope diverged from approved details: "+JSON.stringify(actual));
 for(const id of category.ids){
  const href=hrefFor(category,id);
  const target=href.split("#")[1];
  assert(home.includes('href="'+href+'"'),"Homepage selected topic does not link to its own service line: "+href);
  assert(idCount(pageHtml,target)===1,"Missing or duplicate clicked topic anchor "+href+" count "+idCount(pageHtml,target));
  checked++;
 }
 assert(pageHtml.includes('href="/services"'),"Service breadcrumb must return to service directory /services: "+category.n);
 assert(pageHtml.includes('aria-current="page"'),"Current service breadcrumb missing: "+category.n);
}
assert(checked===25,"Expected to verify 25 clickable homepage topic links");
const jsox=content("internal-control");
for(const element of ["internal","three-documents","evaluation","internal-audit","training"]){
  assert(idCount(jsox,element)===1,`Missing J-SOX target ${element}`);
}
// Protect the original ad landing URL and the separate service overview.
assert(jsox.includes('href="/contact"'),"Standard J-SOX service page lost its contact CTA");
const adPath="out/services/internal-control.html";
assert(existsSync(adPath),"Preserved advertising LP route is missing");
if(existsSync(adPath)){
  const adHtml=readFileSync(adPath,"utf8");
  assert(adHtml.includes("Jsox") || adHtml.includes("内部統制"),"Original advertising landing page is empty");
  for(const id of ["internal","faq","consult-form"]){
    assert(idCount(adHtml,id)===1,"Preserved advertising LP missing "+id);
  }
  assert(adHtml.includes('action="https://formspree.io/f/mojppoor"') &&
    adHtml.includes('method="POST"') &&
    adHtml.includes('name="company"') && adHtml.includes('name="email"') &&
    adHtml.includes('name="language"') && adHtml.includes('name="topic"'),
    "Preserved advertising LP form contract changed");
}

// Protect the approved, low-profile /for-audit-firms route from stale PRs.
// Check source for both PC and mobile navigation because closed mobile menus
// are not represented in server-rendered HTML before client interaction.
const heroNavbar=readFileSync("src/components/Navbar.tsx","utf8");
const sharedFooter=readFileSync("src/components/Footer.tsx","utf8");
const auditCollaborationSource=readFileSync("src/app/for-audit-firms/page.tsx","utf8");
const auditCollaborationFile="out/for-audit-firms.html";
assert(!heroNavbar.includes("/for-audit-firms"),
  "Regression: audit-firm collaboration link must NOT appear in PC or mobile Navbar");
assert(sharedFooter.includes('<Link href="/for-audit-firms">監査法人・専門家の皆様へ</Link>'),
  "Regression: approved audit-firm link missing from the shared Footer");
assert(home.includes('href="/for-audit-firms"'),
  "Regression: approved audit-firm footer link absent from exported homepage");
assert(existsSync(auditCollaborationFile), "Audit-firm page missing from static site output");
if(existsSync(auditCollaborationFile)){
  const auditHtml=readFileSync(auditCollaborationFile,"utf8");
  assert(auditHtml.includes('href="/contact"') && auditHtml.includes("案件について相談する"),
    "Audit-firm consultation CTA must continue to use the approved /contact page");
  assert(auditHtml.includes("application/ld+json"),
    "Audit-firm page's approved Service structured data is missing");
}
assert(auditCollaborationSource.includes('canonical: "https://luare-consulting.com/for-audit-firms"'),
  "Audit-firm canonical must remain unchanged");
assert(auditCollaborationSource.includes("openGraph:") &&
       auditCollaborationSource.includes('"@type": "Service"'),
  "Audit-firm SEO metadata or structured data has been removed");
assert(!/noindex/i.test(auditCollaborationSource),
  "Audit-firm page must remain indexable and must not include noindex");

console.log(`A班 static QA: verified ${checked} visible category links, ${entries.length} topic definitions, 5 current-location breadcrumbs.`);
if(problems.length){
  for(const message of problems) console.error("FAIL:",message);
  process.exitCode=1;
}else{
  console.log("PASS: all 25 homepage submenu clicks stay in their selected service lines, actual anchors exist and breadcrumbs return to /services.");
}
