#!/usr/bin/env node
// A班専用の静的出力QA。ネットワーク・外部メール・本番変更は一切行わない。
// Next.jsの out/ を対象にホームの29リンク、8親ページ、ID/アンカーを照合する。
import {readFileSync, existsSync} from "node:fs";
import path from "node:path";

const catalog=readFileSync("src/lib/serviceCatalog.ts","utf8");
const matches=[...catalog.matchAll(/^\s*\["([^"]+)","[^"]+","[^"]+","([^"]+)"\],?\s*$/gm)];
const entries=matches.map(([,id,page])=>({id,page}));
const problems=[];
const assert=(condition,message)=>{if(!condition)problems.push(message);};
const htmlCache=new Map();
const outputFile=page=>page==="bpo"?"out/bpo.html":page==="contact"?"out/contact.html":`out/services/${page}.html`;
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
assert(entries.length===29,`Service catalog expected 29, got ${entries.length}`);
assert(new Set(entries.map(x=>x.id)).size===entries.length,"Duplicate service IDs in catalog");
assert(new Set(entries.map(x=>x.page)).size===8,"Expected 8 independent parent pages (including contact)");

const homeFile="out/index.html";
assert(existsSync(homeFile),`Missing ${homeFile}`);
const home=existsSync(homeFile)?readFileSync(homeFile,"utf8"):"";
let checked=0;
for(const {id,page} of entries){
  // New 05 audit/assurance consultations use the existing contact form or
  // audit LP anchors. Never infer /services/contact or synthetic anchors.
  const targetId=id==="group-audit-consultation"?"group-audit":
    id==="audit-readiness-consultation"?"audit-readiness":id;
  const href=page==="bpo"?`/bpo#${id}`:
    page==="contact"?"/contact":
    page==="internal-control"&&id==="internal"?"/services/internal-control":
    `/services/${page}#${targetId}`;
  const pageHtml=content(page);
  const normalizedHref=href.replace(/&/g,"&amp;");
  assert(home.includes(`href="${normalizedHref}"`)||home.includes(`href='${normalizedHref}'`),`Homepage link missing: ${href}`);
  if(page==="contact"){
    assert(pageHtml.includes('name="email"')&&pageHtml.includes('name="company"'),
      "Contact form fields missing on the destination for audit consultation");
  }else{
    assert(idCount(pageHtml,targetId)===1,`Expected exactly 1 section id="${targetId}" in ${outputFile(page)}, found ${idCount(pageHtml,targetId)}`);
  }
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
// Earlier LPs used a /contact link. The approved A layout embeds a compact
// form, wired to exactly the same Formspree destination as /contact.
const hasContactLink=jsox.includes('href="/contact"');
const hasEmbeddedContactForm=
  jsox.includes('action="https://formspree.io/f/mojppoor"') &&
  jsox.includes('method="POST"') &&
  jsox.includes('name="company"') &&
  jsox.includes('name="email"') &&
  jsox.includes('name="language"') &&
  jsox.includes('name="topic"') &&
  jsox.includes('type="submit"');
assert(hasContactLink||hasEmbeddedContactForm,"J-SOX contact CTA and live contact form are both missing");
console.log(`A班 static QA: checked ${checked} homepage routes, ${htmlCache.size} parent pages and 5 service tabs.`);
if(problems.length){
  for(const message of problems) console.error("FAIL:",message);
  process.exitCode=1;
}else{
  console.log("PASS: 29/29 catalog items map to existing pages, contact routes and actual anchors; no duplicate service IDs.");
}
