#!/usr/bin/env node
// Full exported site link and editorial safety audit. No site mutation/form submissions.
import {existsSync,readdirSync,readFileSync,statSync} from "node:fs";
import {join,relative} from "node:path";
const root="out", failures=[], checked=new Set();
const assert=(ok,msg)=>{if(!ok)failures.push(msg)};
const files=[];
function walk(dir){for(const name of readdirSync(dir)){const p=join(dir,name);if(statSync(p).isDirectory())walk(p);else if(p.endsWith(".html"))files.push(p)}}
walk(root);
const outputs=new Map(files.map(f=>[relative(root,f).replaceAll("\\","/"),readFileSync(f,"utf8")]));
const pageFile=url=>{
 const path=url.replace(/^\/|\/$/g,"");
 return outputs.has(path+".html")?path+".html":outputs.has(path+"/index.html")?path+"/index.html":path===""?"index.html":null;
};
let hrefs=0,internalHrefs=0,anchors=0;
for(const [name,html] of outputs){
 for(const match of html.matchAll(/\bhref=["']([^"']+)["']/g)){
  hrefs++;
  const href=match[1].replaceAll("&amp;","&");
  if(href.startsWith("mailto:")||href.startsWith("tel:")||href.startsWith("javascript:")||href.startsWith("//"))continue;
  let target;try{target=new URL(href,"https://luare-consulting.com/"+name)}catch{failures.push(name+" invalid clickable URL "+href);continue}
  if(target.origin!=="https://luare-consulting.com")continue;
  if(target.pathname.startsWith("/_next/"))continue;
  if(target.pathname.match(/\.[a-zA-Z0-9]+$/)){
   if(!existsSync(root+target.pathname))failures.push(name+" missing local clickable asset "+href);
   continue;
  }
  internalHrefs++;
  const dest=pageFile(decodeURIComponent(target.pathname));
  assert(!!dest,name+" clickable route missing "+href);
  if(!dest||!target.hash||target.hash==="#/list"||target.hash.startsWith("#/case/"))continue;
  const id=decodeURIComponent(target.hash.slice(1)),key=dest+"#"+id;
  if(checked.has(key))continue;
  checked.add(key);anchors++;
  assert(outputs.get(dest)?.includes('id="'+id+'"')||outputs.get(dest)?.includes("id='"+id+"'"),
    name+" clickable anchor missing "+href);
 }
}
const postSlugs=["china-japan-market-entry","close-process-early-improvement",
"governance-overseas-subsidiaries","japan-subsidiary-finance-setup","overseas-jsox-three-documents"];
for(const slug of postSlugs){
 const h=outputs.get("insights/"+slug+".html")||"";
 assert(!!h,"Blog article missing "+slug);
 for(const forbidden of ["代表による専門監修前の確認用原稿","専門監修とリンク検証を進めています",
 "正式掲載前に専門内容","専門監修、担当範囲、リンク先について確認中",
 "本稿は一般的な業務設計の考え方を説明する確認用原稿", "本稿は一般的な実務上の留意点をまとめた確認用原稿",
 "| 比較項目 |","| フェーズ |"])
  assert(!h.includes(forbidden),"Editorial draft note/raw Markdown leaked in "+slug+": "+forbidden);
 assert(h.includes('href="/services"'),"Related service CTA must open the 5-category service directory: "+slug);
 assert(!h.includes('href="/services/internal-control#'),"Blog must not navigate to protected advertising LP: "+slug);
}
const pricing=outputs.get("pricing.html")||"";
assert(pricing.includes('href="/services/internal-control/overview"'),
 "Pricing J-SOX example must link to actual standard service details");
assert(!pricing.includes('href="/services/internal-control#'),
 "Pricing still opens advertising LP with an invalid content anchor");
const home=outputs.get("index.html")||"";
for(const target of ["/services/internal-control/overview#internal","/services/accounting-management#outsourcing",
"/services/accounting-management#accounting-advisory","/services/global-finance#reporting",
"/services/audit-assurance#voluntary-audit","/services/audit-assurance#accounting-advisory"])
 assert(home.includes('href="'+target+'"'),"Wrong homepage service subtopic destination: "+target);
for(const path of ["services/internal-control/overview.html","services/accounting-management.html",
"services/finance-ops.html","services/global-finance.html","services/audit-assurance.html"])
 assert(outputs.get(path)?.includes('href="/services"'),"Service current-location breadcrumb does not return to /services: "+path);
console.log("Clickable link audit: "+outputs.size+" HTML pages, "+hrefs+" href attributes, "+internalHrefs+" internal navigation links, "+anchors+" unique cross-page anchors.");
for(const fail of failures.slice(0,100))console.error("FAIL "+fail);
if(failures.length){console.error("FAILURES "+failures.length);process.exitCode=1;}else console.log("PASS: all linked destinations/anchors, editorial cleanup, service breadcrumb/price/blog links.");
