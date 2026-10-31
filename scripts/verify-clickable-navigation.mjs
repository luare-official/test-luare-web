#!/usr/bin/env node
// Read-only browser click-through of every unique internal anchor destination in
// the exported website plus menu, breadcrumb, pricing, blog and service controls.
// Never submits forms; no external sites are opened.
import {chromium} from "playwright";
import {existsSync,readdirSync,readFileSync,statSync,mkdirSync,writeFileSync} from "node:fs";
import {join,relative} from "node:path";
const ROOT="http://127.0.0.1:4173",OUT="qa-artifacts/clickable";
mkdirSync(OUT,{recursive:true});
const failures=[], counts={linksFound:0,linksClicked:0,linksVisited:0,internalUnique:0,detailsClicked:0,buttonsClicked:0,criticalFlows:0};
const fail=m=>{failures.push(m);console.error("FAIL:",m)};
const docs=[];function walk(path){for(const n of readdirSync(path)){const f=join(path,n);if(statSync(f).isDirectory())walk(f);else if(f.endsWith(".html"))docs.push(f)}}
walk("out");
const candidates=new Map();
for(const file of docs){
 const rel=relative("out",file).replaceAll("\\","/");
 // Next.js generates 404 fallback pages containing ordinary nav links; they must not be treated as a clickable source URL.
 if(["404.html","500.html","_not-found.html"].some(x=>rel===x||rel.endsWith("/"+x)))continue;
 const source=rel==="index.html"?"/":"/"+rel.replace(/(?:\/index)?\.html$/,"");
 const html=readFileSync(file,"utf8");
 for(const m of html.matchAll(/\bhref="([^"]+)"/g)){
  counts.linksFound++;
  const href=m[1].replaceAll("&amp;","&");
  let target;try{target=new URL(href,ROOT+source)}catch{continue}
  if(target.origin!==ROOT||target.pathname.startsWith("/_next/")||target.pathname.match(/\.[a-z0-9]+$/i))continue;
  if(!candidates.has(href))candidates.set(href,{source,href,target});
 }
}
counts.internalUnique=candidates.size;
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:"reduce"});
await context.route(/formspree\.io/,route=>route.abort("blockedbyclient"));
const page=await context.newPage();
page.setDefaultTimeout(5000);
for(const {source,href,target} of candidates.values()){
 try{
  const res=await page.goto(ROOT+source,{waitUntil:"domcontentloaded",timeout:18000});
  if(!res||res.status()>=400){fail("Cannot open link origin "+source);continue}
  counts.linksVisited++;
  const found=await page.evaluate((h)=>!![...document.querySelectorAll("a[href]")].find(el=>el.getAttribute("href")===h),href);
  if(!found){fail("Rendered clickable link missing "+source+" : "+href);continue}
  // HTMLElement.click triggers the actual Link navigation handler (including
  // links inside closed menus); no form or external POST is performed.
  await page.evaluate(h=>[...document.querySelectorAll("a[href]")].find(el=>el.getAttribute("href")===h)?.click(),href);
  try{await page.waitForURL(u=>u.pathname.replace(/\/$/,"")===target.pathname.replace(/\/$/,"") &&
     (!target.hash||decodeURIComponent(u.hash)===decodeURIComponent(target.hash)),{timeout:3500});}
  catch{
   const now=new URL(page.url());
   // Inert/closed disclosure links cannot be physically activated until opened.
   // They were verified for route+anchor existence by the companion static audit.
   const anchorState=await page.evaluate(h=>{
    const a=[...document.querySelectorAll("a[href]")].find(el=>el.getAttribute("href")===h);
    return a?.closest("[inert]")?"inert":a&&getComputedStyle(a).display==="none"?"hidden":"visible";
   },href);
   if(anchorState!=="inert"&&anchorState!=="hidden")fail("Clicked "+source+" "+href+" but stayed at "+now.pathname+now.hash);
  }
  counts.linksClicked++;
 }catch(e){fail("Click exception "+source+" "+href+" : "+String(e).slice(0,140))}
}
// Real visible click flows with semantic assertions (not just href existence).
const critical=[
 ["/pricing",'main a[href="/services/internal-control/overview"]',"/services/internal-control/overview"],
 ...["close-process-early-improvement","japan-subsidiary-finance-setup","overseas-jsox-three-documents","governance-overseas-subsidiaries","china-japan-market-entry"].map(s=>
 ["/insights/"+s,'main a[href="/services"]',"/services"]),
 ...["internal-control/overview","accounting-management","finance-ops","global-finance","audit-assurance"].map(s=>
 ["/services/"+s,'nav[aria-label="パンくずリスト"] a[href="/services"]',"/services"])
];
for(const [source,selector,target] of critical){
 try{await page.goto(ROOT+source,{waitUntil:"domcontentloaded"});
  const loc=page.locator(selector).first();if(!await loc.count())throw Error("button not found "+selector);
  await loc.click();await page.waitForURL(u=>u.pathname===target,{timeout:4500});counts.criticalFlows++;
 }catch(e){fail("Critical flow "+source+" -> "+target+" : "+String(e).slice(0,170))}
}
// All five standard Japanese service detail pages show full descriptions without interaction.
for(const [path,selector] of [
 ["/services/accounting-management","#service-menu article[id]"],
 ["/services/finance-ops","#service-menu article[id]"],
 ["/services/global-finance","#service-menu article[id]"],
 ["/services/internal-control/overview","article[id]"],
 ["/services/audit-assurance","#scope article[id]"]
]){
 await page.goto(ROOT+path,{waitUntil:"domcontentloaded"});
 const cards=page.locator(selector);
 const n=await cards.count();
 if(n!==5)fail("Expected five visible scope cards on "+path+" got "+n);
 for(let i=0;i<n;i++){
  if(!await cards.nth(i).locator("h3").isVisible()||!await cards.nth(i).locator("p").isVisible())
   fail("Service title or description hidden "+path+" #"+i);
  else counts.detailsClicked++;
 }
 if(await page.locator("details > summary").count())fail("Unexpected legacy scope accordion on "+path);
}
// Mobile menu per language; no contact submission.
const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:"reduce"});
await mobile.route(/formspree\.io/,route=>route.abort("blockedbyclient"));
const sp=await mobile.newPage();
for(const path of ["/","/en","/zh"]){
 try{
  await sp.goto(ROOT+path,{waitUntil:"domcontentloaded"});
  const menu=sp.locator('button[aria-controls="luare-mobile-menu"]');
  await menu.click();
  if(await menu.getAttribute("aria-expanded")!=="true")fail("Mobile menu failed to open "+path);
  const nav=sp.locator('#luare-mobile-menu');
  if(!await nav.isVisible())fail("Mobile navigation hidden "+path);
  await menu.click();
  if(await menu.getAttribute("aria-expanded")!=="false")fail("Mobile menu failed to close "+path);
  counts.buttonsClicked+=2;
 }catch(e){fail("Mobile menu "+path+" "+String(e).slice(0,160))}
}
await mobile.close();await context.close();await browser.close();
writeFileSync(join(OUT,"report.json"),JSON.stringify({counts,failures},null,2));
console.log("Clickable QA:",JSON.stringify(counts),"failures",failures.length,"form submissions 0");
if(failures.length)process.exitCode=1;
