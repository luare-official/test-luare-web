#!/usr/bin/env node
// A班専用の静的出力QA。ネットワーク・外部メール・本番変更は一切行わない。
// Next.jsの out/ を対象にホームの24リンク、7親ページ、ID/アンカーを照合する。
import {readFileSync, existsSync} from "node:fs";
import path from "node:path";

const catalog=readFileSync("src/lib/serviceCatalog.ts","utf8");
const matches=[...catalog.matchAll(/^\s*\["([^"]+)","[^"]+","[^"]+","([^"]+)"\],?\s*$/gm)];
const entries=matches.map(([,id,page])=>({id,page}));
const problems=[];
const assert=(condition,message)=>{if(!condition)problems.push(message);};
const htmlCache=new Map();
const outputFile=page=>page==="bpo"?"out/bpo.html":`out/services/${page}.html`;
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
assert(entries.length===24,`Service catalog expected 24, got ${entries.length}`);
assert(new Set(entries.map(x=>x.id)).size===24,"Duplicate service IDs in catalog");
assert(new Set(entries.map(x=>x.page)).size===7,"Expected 7 independent parent pages");

const homeFile="out/index.html";
assert(existsSync(homeFile),`Missing ${homeFile}`);
const home=existsSync(homeFile)?readFileSync(homeFile,"utf8"):"";
let checked=0;
for(const {id,page} of entries){
  const href=page==="bpo"?`/bpo#${id}`:page==="internal-control"&&id==="internal"?"/services/internal-control":`/services/${page}#${id}`;
  const pageHtml=content(page);
  const normalizedHref=href.replace(/&/g,"&amp;");
  assert(home.includes(`href="${normalizedHref}"`)||home.includes(`href='${normalizedHref}'`),`Homepage link missing: ${href}`);
  // The top-level internal-control link intentionally has no hash, but its section still needs an ID.
  assert(idCount(pageHtml,id)===1,`Expected exactly 1 section id="${id}" in ${outputFile(page)}, found ${idCount(pageHtml,id)}`);
  checked++;
}
// Common checks for all approved service pages and the J-SOX LP.
for(const p of ["audit-assurance","accounting-management","finance-ops","global-finance"]){
  const html=content(p);
  for(const tab of ["internal-control","audit-assurance","accounting-management","finance-ops","global-finance"]){
    assert(html.includes(`href="/services/${tab}"`),`Missing five-service navigation /services/${tab} on ${p}`);
  }
}
const jsox=content("internal-control");
for(const element of ["three-documents","evaluation","internal-audit","training","faq"]){
  assert(idCount(jsox,element)===1,`Missing J-SOX target ${element}`);
}
assert(jsox.includes('href="/contact"'),"J-SOX contact CTA is not linked");
console.log(`A班 static QA: checked ${checked} homepage routes, ${htmlCache.size} parent pages and 5 service tabs.`);
if(problems.length){
  for(const message of problems) console.error("FAIL:",message);
  process.exitCode=1;
}else{
  console.log("PASS: 24/24 catalog items and hashes map to generated HTML; no duplicate target IDs.");
}
