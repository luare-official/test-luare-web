/**
 * C班・2026-10-24 公開済みサイトQA専用（読み取りのみ）。
 * 旧料金PDF・フォーム/送付案とは無関係。顧客・実在アドレス入力、フォーム送信、外部POSTは禁止。
 */
import {chromium} from "playwright";
import {mkdirSync,writeFileSync} from "node:fs";
import {join} from "node:path";
const BASE="https://luare-consulting.com";
const OUT="qa-artifacts/c-20261024";
mkdirSync(OUT,{recursive:true});
const warnings=[],errors=[],pages=[],forms=[],seo=[];
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const cases=["/","/contact","/en/contact","/zh/contact","/services/internal-control","/cases","/insights"];
const views=[{name:"pc",width:1440,height:900,mobile:false},{name:"mobile",width:390,height:844,mobile:true}];
const norm=(href)=>new URL(href,BASE).pathname.replace(/\/$/,"") || "/";
for(const view of views){
 const context=await browser.newContext({viewport:{width:view.width,height:view.height},isMobile:view.mobile,hasTouch:view.mobile,deviceScaleFactor:1,reducedMotion:"reduce",locale:"ja-JP"});
 // A safety guard in addition to never invoking form submission.
 await context.route(/^https:\/\/formspree\.io\//,r=>r.abort("blockedbyclient"));
 const page=await context.newPage();page.setDefaultTimeout(16000);
 page.on("pageerror",e=>warnings.push(`JS ${view.name}: ${e.message.slice(0,140)}`));
 for(const path of cases){
  try{
    const res=await page.goto(BASE+path,{waitUntil:"domcontentloaded",timeout:25000});
    await page.waitForTimeout(350);
    const v=await page.evaluate(()=>{
      const root=document.documentElement;
      const canonical=document.querySelector('link[rel="canonical"]')?.getAttribute("href")??null;
      const robots=document.querySelector('meta[name="robots"]')?.getAttribute("content")??"";
      const forms=[...document.querySelectorAll("form")].map(form=>{
       const controls=[...form.querySelectorAll("input, select, textarea")].filter(e=>e.type!=="hidden");
       const invalidLabel=controls.filter(el=>{
        const id=el.id;
        const explicit=id&&document.querySelector(`label[for="${CSS.escape(id)}"]`);
        const nested=el.closest("label");
        return !explicit&&!nested&&!(el.getAttribute("aria-label")||el.getAttribute("aria-labelledby"));
       }).map(el=>el.name||el.type||el.tagName);
       const privacyLinks=[...form.querySelectorAll("a")].filter(a=>/privacy|個人情報|プライバシ|隐私|privacy policy/i.test(a.textContent+" "+a.href)).map(a=>a.href);
       return {
        action:form.action.startsWith("https://formspree.io/")?"formspree.io (exact endpoint intentionally omitted)":new URL(form.action).hostname,
        method:form.method.toUpperCase(),
        controls:controls.length,
        required:controls.filter(e=>e.required).map(el=>el.name),
        unlabeled:invalidLabel,
        privacyLinks,
        consentCheckbox:[...form.querySelectorAll('input[type="checkbox"]')].some(el=>el.required),
        privacyText:/プライバシーポリシー|privacy policy|隐私政策|隐私权政策/i.test(form.textContent)
       };
      });
      return {
       pageTitle:document.title,lang:root.lang,canonical,robots,
       overflowPx:Math.max(0,root.scrollWidth-root.clientWidth),
       headings:[...document.querySelectorAll("h1")].map(e=>e.textContent?.trim()?.slice(0,120)),
       forms
      };
    });
    pages.push({route:path,viewport:view.name,http:res?.status()??null,...v});
    if(!res||res.status()>=400)errors.push(`HTTP ${view.name} ${path} -> ${res?.status()}`);
    if(v.overflowPx>2)warnings.push(`Horizontal overflow ${view.name} ${path}: ${v.overflowPx}px`);
    if(path.startsWith("/en/")&&!v.lang.startsWith("en"))warnings.push(`English html lang wrong: ${v.lang}`);
    if(path.startsWith("/zh/")&&!v.lang.startsWith("zh"))warnings.push(`Chinese html lang wrong: ${v.lang}`);
    if(path==="/"&&!v.canonical)warnings.push("Home canonical link missing");
    if(path==="/cases"&&!/noindex/i.test(v.robots))warnings.push("Review cases page is not noindex");
    if(path.includes("contact")){
     for(const f of v.forms){
      forms.push({route:path,viewport:view.name,...f});
      if(f.unlabeled.length)warnings.push(`Contact form ${path} ${view.name}: ${f.unlabeled.length} controls lack programmatic labels: ${f.unlabeled.join(",")}`);
      if(!f.privacyLinks.length)warnings.push(`Contact form ${path} ${view.name}: no linked privacy policy in form`);
      if(f.method!=="POST")errors.push(`Unexpected method on ${path}: ${f.method}`);
     }
    }
    const name=path==="/"?"home":path.replaceAll("/","-").slice(1);
    const filename=`${name}-${view.name}.png`;
    await page.screenshot({path:join(OUT,filename),fullPage:true,animations:"disabled"});
  }catch(e){errors.push(`${path} ${view.name}: ${String(e).slice(0,150)}`);}
 }
 await context.close();
}
// Live SEO URL probes do not POST or modify anything.
const context=await browser.newContext();
for(const path of ["/robots.txt","/sitemap.xml"]){
 try{
 const r=await context.request.get(BASE+path,{timeout:16000});
 seo.push({route:path,status:r.status(),type:r.headers()["content-type"]??""});
 if(r.status()!==200)warnings.push(`Live SEO route ${path} HTTP ${r.status()}`);
 }catch(e){warnings.push(`Live SEO route ${path} error: ${String(e).slice(0,140)}`);}
}
await context.close();
await browser.close();
const report={date:new Date().toISOString(),scope:"LIVE read-only; no form submit",views,checked:pages.length,forms,seo,pages,errors,warnings,limits:[
 "Screenshots are from actual production, not compared against the original approved HTML source.",
 "No form submission, delivery, Formspree reception, external email, or live customer data test.",
 "No manual screen-reader or Lighthouse analysis. A label association check does not replace a complete accessibility audit.",
 "GitHub Actions success means the QA ran, not that warnings were resolved."
]};
writeFileSync(join(OUT,"report.json"),JSON.stringify(report,null,2));
writeFileSync(join(OUT,"summary.txt"),[
 "Luare C-team QA 2026-10-24",`Visited: ${pages.length} pages; inspected ${forms.length} rendered forms (2 widths)`,
 `Warnings: ${warnings.length}; Errors: ${errors.length}`,
 ...[...new Set(warnings)].map(s=>"WARN "+s),
 ...errors.map(s=>"ERROR "+s),
 "Read only; no form submission; no pricing PDF."
].join("\n"));
console.log(JSON.stringify({visited:pages.length,forms:forms.length,seo,issues:[...new Set(warnings)],errors},null,2));
// Diagnostic job; unresolved live issues are recorded in JSON and decision register.
