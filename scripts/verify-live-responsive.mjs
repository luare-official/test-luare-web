#!/usr/bin/env node
// Read-only Playwright smoke test of deployed pages; NEVER submit forms.
import {chromium} from "playwright";
import {mkdirSync,writeFileSync} from "node:fs";
import {join} from "node:path";
const BASE="https://luare-consulting.com";
const out="qa-artifacts/final-site";
mkdirSync(out,{recursive:true});
const views=[{name:"pc",width:1440,height:900,mobile:false},{name:"sp",width:390,height:844,mobile:true}];
const paths=["/","/services","/services/internal-control","/services/audit-assurance",
"/bpo","/contact","/about","/cases","/insights","/privacy",
"/en","/en/about","/en/contact","/zh","/zh/about","/zh/contact"];
const failures=[],warnings=[],results=[];
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
for(const v of views){
 const context=await browser.newContext({viewport:{width:v.width,height:v.height},isMobile:v.mobile,hasTouch:v.mobile,reducedMotion:"reduce",deviceScaleFactor:1});
 // Defense-in-depth: never allow real contact submissions from this automated QA.
 await context.route(/^https:\/\/formspree\.io\//,route=>route.abort("blockedbyclient"));
 const page=await context.newPage();page.setDefaultTimeout(14000);
 for(const path of paths){
  try{
   const response=await page.goto(BASE+path,{waitUntil:"domcontentloaded",timeout:25000});
   await page.waitForTimeout(650);
   const data=await page.evaluate(()=>{
    const html=document.documentElement;
    const footers=document.querySelectorAll("footer");
    const images=[...document.querySelectorAll("img")].filter(el=>!el.complete||el.naturalWidth===0).map(el=>el.getAttribute("src"));
    const forms=[...document.querySelectorAll("form")].map(form=>({method:form.method.toUpperCase(),action:form.action}));
    return {lang:html.lang,overflow:Math.max(0,html.scrollWidth-html.clientWidth),footers:footers.length,
      images,hasNav:!!document.querySelector("header nav,nav.luare-unicell-hero-mobile-menu,header a[href]"),
      hasPrivacy:!!document.querySelector('a[href="/privacy"]'),
      title:document.title,forms,font:getComputedStyle(document.body).fontFamily,
      hero:document.querySelector(".luare-unicell-talk-photo img")?.getAttribute("src")||null};
   });
   const label=path==="/"?"home":path.slice(1).replaceAll("/","-");
   const status=response?.status()??0;
   const result={route:path,viewport:v.name,status,...data};results.push(result);
   if(status!==200)failures.push(v.name+" "+path+" HTTP "+status);
   if(data.overflow>10)failures.push(v.name+" "+path+" horizontal overflow "+data.overflow+"px");
   if(data.footers!==1)failures.push(v.name+" "+path+" footer count "+data.footers);
   if(!data.hasNav)failures.push(v.name+" "+path+" navigation missing");
   if(!data.hasPrivacy)failures.push(v.name+" "+path+" privacy link absent");
   if(data.images.length)warnings.push(v.name+" "+path+" unloaded image(s): "+data.images.slice(0,4));
   if(path==="/"&&data.hero!=="/images/luare-hero-consulting-male-20261025.webp")
     failures.push(v.name+" homepage original image reference returned");
   if(path.startsWith("/en")&&!data.lang.startsWith("en"))failures.push(v.name+" "+path+" document lang="+data.lang);
   if(path.startsWith("/zh")&&!data.lang.startsWith("zh"))failures.push(v.name+" "+path+" document lang="+data.lang);
   if(path.includes("contact")&&data.forms.some(x=>x.action!=="https://formspree.io/f/mojppoor"))
     failures.push(v.name+" "+path+" form destination changed");
   if(v.mobile&&["/","/services/internal-control","/en/contact","/zh/contact"].includes(path)){
      const button=page.locator('button[aria-label="Toggle navigation menu"],button[aria-label="メニューを開く"]').first();
      if(await button.count()){
        await button.click();
        const expanded=await button.getAttribute("aria-expanded");
        const menu=page.locator('nav[aria-label="モバイルメニュー"]');
        if(expanded!==null&&expanded!=="true")failures.push("mobile menu not expanded "+path);
        if(path==="/"&&await menu.count()&&!(await menu.isVisible()))failures.push("hero mobile menu hidden "+path);
        await button.click();
      }else failures.push("mobile hamburger not found "+path);
   }
   await page.screenshot({path:join(out,label+"-"+v.name+".png"),fullPage:true,animations:"disabled"});
  }catch(e){failures.push(v.name+" "+path+" exception "+String(e).slice(0,160));}
 }
 await context.close();
}
await browser.close();
writeFileSync(join(out,"audit.json"),JSON.stringify({results,failures,warnings},null,2));
console.log("Browser QA: "+results.length+" route/viewport combinations, "+failures.length+" failures, "+warnings.length+" warnings; form submissions 0.");
for(const m of failures)console.error("FAIL "+m);
for(const m of warnings)console.warn("WARN "+m);
if(failures.length)process.exitCode=1;
