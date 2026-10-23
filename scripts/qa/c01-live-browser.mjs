/**
 * Read-only Playwright QA against the actual public luare-consulting.com website.
 * NO form submissions, NO private data, NO writes to remote website, NO email.
 * Uses DOM link activation rather than manual pointer clicks for the 24 links.
 * Saves screenshots/reports in the CI runner only, then GitHub Actions artifact.
 */
import { chromium } from "playwright";
import {readFileSync, writeFileSync, mkdirSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {resolve,join} from "node:path";
const BASE=(process.env.QA_BASE_URL || "https://luare-consulting.com").replace(/\/$/,"");
const DIR=resolve("qa-artifacts");
mkdirSync(DIR,{recursive:true});
const errors=[],warnings=[],screenshots=[],routes=[],seo=[];
const stamp=new Date().toISOString();
const catalog=readFileSync("src/lib/serviceCatalog.ts","utf8");
const section=catalog.slice(catalog.indexOf("const topics:"),catalog.indexOf("function route("));
const topics=[...section.matchAll(/\["([^"]+)","([^"]+)","([^"]+)","([^"]+)"\]/g)]
  .map(m=>({id:m[1],title:m[2],page:m[4]}));
if(topics.length!==24)errors.push("service catalog not 24: "+topics.length);
function normalized(uri){const u=new URL(uri,BASE);return u.pathname.replace(/\/$/,"")+(u.hash||"");}
function expected(t){
 const root=t.page==="bpo"?"/bpo":"/services/"+t.page;
 return root+(t.page==="internal-control"&&t.id==="internal"?"":"#"+t.id);
}
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
async function screenshotSuite({width,height,name,isMobile}){
 const ctx=await browser.newContext({viewport:{width,height},isMobile,hasTouch:isMobile,deviceScaleFactor:1,reducedMotion:"reduce",locale:"ja-JP"});
 const page=await ctx.newPage();
 page.setDefaultTimeout(13000);
 const errs=[];page.on("pageerror",e=>errs.push(e.message));
 for(const route of ["/","/services/internal-control","/contact"]){
   const safe=route==="/"?"home":route.split("/").pop();
   try{
    const resp=await page.goto(BASE+route,{waitUntil:"domcontentloaded",timeout:25000});
    await page.waitForTimeout(700);
    const rect=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,width:document.documentElement.clientWidth,lang:document.documentElement.lang,title:document.title}));
    const filename=`public-${safe}-${name}.png`;
    await page.screenshot({path:join(DIR,filename),fullPage:true,animations:"disabled"});
    screenshots.push({route,viewport:name,file:filename,status:resp?.status()??null,...rect});
    if(!resp || resp.status()>=400)errors.push(`${name} ${route}: HTTP ${resp?.status()}`);
    if(rect.scroll>rect.width+2)warnings.push(`${name} ${route}: horizontal overflow (${rect.scroll}>${rect.width})`);
    if(route==="/"&&/仮配置|ダミー写真・プロフィール/.test(await page.locator("body").innerText())){
       warnings.push(`${name} homepage: dummy profile/case placeholders visible to visitors; user approval required`);
    }
    if(route==="/" && isMobile){
      const btn=page.getByRole("button",{name:/監査・監査対応支援/}).first();
      if(await btn.count()){
        try{
          await btn.click({timeout:8000});
          const links=await page.locator('a[href*="/services/internal-control"]').count();
          if(!links)warnings.push(`${name}: mobile service button clicked but no internal-control link found`);
        }catch(e){warnings.push(`${name}: service accordion pointer click failed: ${String(e).slice(0,110)}`);}
      }else warnings.push(`${name}: service accordion button not found by accessible name`);
    }
   }catch(e){errors.push(`${name} ${route}: ${String(e).slice(0,200)}`);}
 }
 if(errs.length)warnings.push(`${name}: ${errs.length} page JS exceptions (sample ${errs[0].slice(0,140)})`);
 await ctx.close();
}
await screenshotSuite({width:1440,height:900,name:"pc1440",isMobile:false});
await screenshotSuite({width:390,height:844,name:"sp390",isMobile:true});
await screenshotSuite({width:360,height:800,name:"sp360",isMobile:true});
// Independent HTTP checks. These are live remote responses, not snapshots or indexed search.
const request=await browser.newBrowserCDPSession?.().catch(()=>null);
const ctx=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:"reduce"});
const page=await ctx.newPage();page.setDefaultTimeout(13000);
for(const route of ["/","/services/internal-control","/contact","/en/contact","/zh/contact","/robots.txt","/sitemap.xml"]){
 try{
  const r=await ctx.request.get(BASE+route,{timeout:18000,maxRedirects:4});
  const type=r.headers()["content-type"]||"";
  seo.push({route,status:r.status(),contentType:type});
  if(route==="/robots.txt" || route==="/sitemap.xml"){
    if(r.status()>=400) warnings.push(`${route}: HTTP ${r.status()} (SEO file missing/unreachable)`);
  }else if(r.status()>=400) errors.push(`${route}: HTTP ${r.status()}`);
 }catch(e){warnings.push(`${route} HTTP probe failed: ${String(e).slice(0,180)}`);}
}
for(const route of ["/","/services/internal-control","/en/contact","/zh/contact"]){
 try{
  const resp=await page.goto(BASE+route,{waitUntil:"domcontentloaded",timeout:22000});
  const details=await page.evaluate(()=>({lang:document.documentElement.lang,canonical:document.querySelector('link[rel="canonical"]')?.getAttribute("href")??"",description:document.querySelector('meta[name="description"]')?.getAttribute("content")??""}));
  if(route.startsWith("/en/")&&!details.lang.startsWith("en"))warnings.push(`${route}: html lang=${details.lang} (expected en)`);
  if(route.startsWith("/zh/")&&!details.lang.startsWith("zh"))warnings.push(`${route}: html lang=${details.lang} (expected zh)`);
  if(route==="/services/internal-control"&&!details.canonical)warnings.push("J-SOX page canonical missing");
  seo.push({route,dom:details,httpStatus:resp?.status()});
 }catch(e){warnings.push(`${route} meta probe failed: ${String(e).slice(0,180)}`);}
}
for (const t of topics){
 const path=expected(t);
 try{
  await page.goto(BASE+"/",{waitUntil:"domcontentloaded",timeout:22000});
  const link=page.locator('a[href="'+path+'"]').first();
  if(await link.count()===0){errors.push("Home link missing: "+path);routes.push({path,result:"link_missing"});continue;}
  const next=page.waitForURL(u=>normalized(u.href)===normalized(path),{timeout:17000,waitUntil:"domcontentloaded"});
  // DOM activation is distinct from an actual pointer/touch click; do not claim visual click QA.
  await link.evaluate(el=>el.click());
  await next;
  let anchor=true;
  if(path.includes("#")) anchor=await page.locator("#"+t.id).count()===1;
  const result={path,landed:normalized(page.url()),anchor};
  routes.push(result);
  if(!anchor)errors.push("Target anchor missing/duplicated: "+path);
 }catch(e){errors.push("Browser anchor activation failed "+path+": "+String(e).slice(0,200));routes.push({path,result:"failed"});}
}
await ctx.close();await browser.close();
const data={checkedAt:stamp,base:BASE,topics:topics.length,visitedRoutes:routes.length,errorCount:errors.length,warningCount:warnings.length,
 routes,seo,screenshots,errors,warnings,limitations:[
 "24 routes use real browser DOM anchor activation, not physical pointer/touch clicks for each",
 "Screenshots are the live implementation, not pixel-diff against approved source HTML",
 "Lighthouse/Core Web Vitals and manual screen-reader review not conducted",
 "Do not submit forms, do not test real email or save user input"
]};
writeFileSync(join(DIR,"browser-qa-report.json"),JSON.stringify(data,null,2));
writeFileSync(join(DIR,"browser-qa-summary.txt"),[
 "C-01/C-09 live browser QA "+stamp,
 "24 service links: "+routes.filter(r=>r.landed).length+"/"+topics.length+" landed (DOM activation)",
 "Errors: "+errors.length+"; warnings: "+warnings.length,
 ...errors.map(x=>"ERROR "+x),
 ...warnings.map(x=>"WARN "+x),
 "Screenshot files: "+screenshots.map(x=>x.file).join(", ")
].join("\n"));
console.log(JSON.stringify({checkedAt:stamp,visited:routes.filter(r=>r.landed).length,topics:topics.length,errors,warnings,screenshots:screenshots.length,seo},null,2));
// Do not fail GitHub Actions on public site's issues; preserve immutable defect evidence.
// The exit result is explicitly diagnostic, not a full visual or accessibility pass.
