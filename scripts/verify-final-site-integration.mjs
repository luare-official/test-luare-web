#!/usr/bin/env node
// Read-only test against Next.js static export; no network or form submission.
import {readFileSync, existsSync, readdirSync, statSync} from "node:fs";
import {join, relative} from "node:path";
const errors=[];
const assert=(v,m)=>{if(!v)errors.push(m)};
const walk=(dir)=>readdirSync(dir).flatMap(name=>{const f=join(dir,name);return statSync(f).isDirectory()?walk(f):[f]});
const paths=existsSync("out")?walk("out").filter(p=>p.endsWith(".html")):[];
const pages=new Map(paths.map(p=>[relative("out",p).replaceAll("\\","/"),readFileSync(p,"utf8")]));
const findPage=path=>{
 const stem=path.replace(/^\/|\/$/g,"");
 const file=stem?stem+".html":"index.html";
 if(pages.has(file))return file;
 return pages.has(stem+"/index.html")?stem+"/index.html":null;
};
const required=["/","/services","/services/internal-control","/services/internal-control/overview","/services/audit-assurance","/bpo","/about","/cases","/insights","/contact","/privacy","/en","/zh","/en/about","/zh/about","/en/contact","/zh/contact","/pricing","/for-audit-firms"];
for(const path of required)assert(!!findPage(path),"Missing exported route "+path);
const checked=new Set();
for(const [page,html] of pages){
 for(const m of html.matchAll(/\bhref="(\/[^"]*)"/g)){
  const href=m[1].replaceAll("&amp;","&");
  if(href.startsWith("//")||href.startsWith("/_next/"))continue;
  let parsed;
  try{parsed=new URL(href,"https://luare-consulting.com")}catch{errors.push(page+" invalid href "+href);continue}
  const dest=decodeURIComponent(parsed.pathname);
  if(/\.[a-z0-9]+$/i.test(dest)){
    assert(existsSync("out"+dest),page+" missing linked asset "+dest);
    continue;
  }
  const target=findPage(dest);
  assert(!!target,page+" missing link destination "+href);
  if(!target||!parsed.hash)continue;
  // The approved CaseGallery C design uses client-side '#/case/<id>'
  // routing, not HTML id anchors. Preserve that behavior and verify IDs.
  if(dest==="/cases" && parsed.hash.startsWith("#/case/")){
    const id=parsed.hash.slice("#/case/".length);
    const cases=readFileSync("src/app/cases/page.tsx","utf8");
    assert(cases.includes('id:"'+id+'"'),page+" refers to unknown CaseGallery ID "+id);
    continue;
  }
  if(dest==="/cases" && parsed.hash==="#/list")continue;
  let hash=parsed.hash.slice(1);
  try{hash=decodeURIComponent(hash)}catch{}
  const key=target+"#"+hash;
  if(hash&&!checked.has(key)){
    const htmlTarget=pages.get(target);
    assert(htmlTarget.includes('id="'+hash+'"')||htmlTarget.includes("id='"+hash+"'"),
      page+" missing anchor "+href);
    checked.add(key);
  }
 }
 for(const m of html.matchAll(/\bsrc="(\/images\/[^"]+)"/g))
  assert(existsSync("out"+m[1].split("?")[0]),page+" missing image "+m[1]);
}
const home=pages.get("index.html")||"";
assert(!home.includes("Professional 01"),"Unapproved expert mockup published");
assert(home.includes("luare-hero-consulting-male-20261025.webp"),"Approved male photo disappeared");
for(const [locale,page] of [["ja","index.html"],["zh","zh.html"],["en","en.html"]]){
 const html=pages.get(page)||"";
 assert(!html.includes('class="luare-unicell-side-caption"')&&!html.includes('class="luare-unicell-scroll"'),locale+" homepage retained decorative caption or scroll label");
}
const heroCss=readFileSync("src/app/globals.css","utf8");
assert(heroCss.includes("min-height:clamp(620px,70svh,740px)")&&heroCss.includes("min-height:clamp(600px,75svh,740px)"),"Compact desktop/mobile hero stage sizing was lost");
// Guard representative layout and the explicitly approved expanded service-card design.
const jpAboutSource=readFileSync("src/app/about/page.tsx","utf8");
const zhAboutSource=readFileSync("src/app/zh/about/page.tsx","utf8");
const enAboutSource=readFileSync("src/app/en/about/page.tsx","utf8");
for(const [locale,profile] of [["ja",jpAboutSource],["zh",zhAboutSource],["en",enAboutSource]]){
 assert(profile.includes("luare-v6-rep-grid")&&profile.includes("luare-v6-rep-photo"),locale+" representative must reuse original homepage photo-and-text layout");
 assert(profile.includes("luare-v6-rep-name")&&profile.includes("luare-v6-qual"),locale+" representative credentials/name must sit beside portrait");
 assert(profile.includes("luare-v6-bio"),locale+" original biography paragraph was removed");
 assert(!profile.includes("CAREER TIMELINE")&&!profile.includes("space-y-10"),locale+" unsolicited career timeline returned");
 assert(!profile.includes("bg-gradient-to-t")&&!profile.includes("Bottom gradient overlay"),locale+" photo name-overlay returned");
 assert(!profile.includes("Role badge below photo"),locale+" role badge below portrait returned");
 assert(!profile.includes("luare-v6-philosophy"),locale+" explicitly removed philosophy returned");
}
const directorySource=readFileSync("src/components/ServiceDirectory.tsx","utf8");
assert(directorySource.includes("min-h-[126px]")&&directorySource.includes("serviceRoutes[number]"),"User-approved large five-card service directory was altered");
assert(directorySource.includes("serviceRoutes[number]"),"Service cards no longer open requested detail pages");
assert(directorySource.includes("id={`category-${number}`}"),"Historical /services#category-xx deep links were removed");
const nav=readFileSync("src/components/Navbar.tsx","utf8");
assert(!nav.includes("/for-audit-firms"),"Protected audit-partner nav became visible");
assert(!nav.includes("--font-inter"),"Legacy font variable still in navbar");
const special=["about.html","en/about.html","zh/about.html","insights.html",...Array.from(pages.keys()).filter(f=>f.startsWith("insights/"))];
for(const page of special){
 if(!pages.has(page))continue;
 const html=pages.get(page);
 assert(html.includes('href="/privacy"'),"No privacy link on "+page);
 assert((html.match(/<footer\b/g)||[]).length===1,"Duplicate/missing footer on "+page);
}
for(const lang of ["","en/","zh/"]){
 const page=lang+"contact.html",html=pages.get(page)||"";
 assert(!!html,"Missing "+page);
 for(const field of ["company","name","email","service","message"])
  assert(html.includes('name="'+field+'"'),page+" lacks "+field);
 for(const field of ["company","name","email","service","message"]){
  const tag=html.match(new RegExp("<(?:input|textarea|select)[^>]*name=[\"']"+field+"[\"'][^>]*>","i"))?.[0]||"";
  assert(tag.includes("required"),page+" missing required flag on "+field);
 }
 assert(!html.includes('name="phone"'),page+" contains removed phone field");
 assert(html.includes('href="/privacy"'),page+" missing privacy link");
 assert(html.includes('action="https://formspree.io/f/mojppoor"'),page+" Formspree action changed");
}
const jsox=pages.get("services/internal-control/overview.html")||"";
assert(jsox.includes('href="/privacy"'),"J-SOX r5 overview missing privacy link");
assert(jsox.includes('href="/contact"'),"J-SOX r5 overview consultation link changed");
const approvedAudit=pages.get("services/audit-assurance.html")||"";
const approvedAuditSource=readFileSync("src/app/services/audit-assurance/page.tsx","utf8");
assert(!!approvedAudit,"Approved audit service page missing");
for(const name of ["監査・保証業務","会社法監査（法定監査）","連結子会社監査・海外親会社対応","IFRS・US-GAAP対応監査","ファンド・SPC監査","任意監査","監査費用は個別お見積りです。"]){
 assert(approvedAudit.includes(name),"Approved audit HTML copy missing: "+name);
}
assert(!approvedAudit.includes("監査サービスの特長"),"Removed audit benefits section returned");
assert(!approvedAudit.includes("OUR STRENGTHS"),"Legacy audit-specific sections returned");
assert(!approvedAuditSource.includes("<details")&&approvedAuditSource.includes("<article"),"Audit support descriptions must remain visible as cards");
const controlSource=readFileSync("src/app/services/internal-control/overview/page.tsx","utf8");
assert(!controlSource.includes("<details")&&controlSource.includes("<article"),"Standard internal-control scope must remain expanded");
for(const anchor of ["scope","related","audit-readiness","statutory-audit","group-audit","accounting-advisory"]){
 assert(approvedAudit.includes('id="'+anchor+'"'),"Previously linked audit anchor missing: "+anchor);
}
assert(approvedAudit.includes('href="/privacy"'),"Audit page lacks shared privacy link");
assert((approvedAudit.match(/<footer\b/g)||[]).length===1,"Audit page has duplicate/missing footer");
const originalJsox=pages.get("services/internal-control.html")||"";
assert(originalJsox.includes('action="https://formspree.io/f/mojppoor"'),"Original advertised J-SOX landing form no longer exists");
assert(originalJsox.includes('href="/privacy"'),"Original advertised J-SOX landing privacy link missing");
assert(nav.includes('["サービス","/services"]')&&nav.includes('["Services","/en/services"]')&&nav.includes('["服务","/zh/services"]'),"Direct service navigation missing");
assert(!nav.includes("luare-service-dropdown"),"Removed services dropdown returned");
const adJsox=pages.get("ads/internal-control.html")||"";
assert(!!adJsox,"Archived advertising LP is missing");
assert(adJsox.includes('href="/privacy"'),"Advertising LP missing privacy link");
assert(adJsox.includes('action="https://formspree.io/f/mojppoor"'),"Advertising LP form destination changed");
assert(existsSync("out/robots.txt")&&existsSync("out/sitemap.xml"),"SEO crawler files missing");
const zhHomeCaseSource=readFileSync("src/app/zh/page.tsx","utf8");
const zhHomeDesign=["luare-services-photo","InteractiveServiceGalleryZh","luare-v6-why-row","luare-v6-cases","luare-v6-steps","luare-v6-faq"];
for(const cls of zhHomeDesign)assert(zhHomeCaseSource.includes(cls),"Chinese homepage diverged from approved Japanese design: "+cls);
const jpHomeSource=readFileSync("src/components/HomeSections.tsx","utf8");
const enHomeSource=readFileSync("src/app/en/page.tsx","utf8");
assert(!jpHomeSource.includes('label:"CASE 0'),"Numbered Japanese homepage case labels returned");
assert(!enHomeSource.includes("CASE {c.index}"),"Numbered English homepage case labels returned");
assert(!zhHomeCaseSource.includes("CASE {srcCase.index}"),"Numbered Chinese homepage case labels returned");
const railSource=readFileSync("src/components/FreeConsultationRail.tsx","utf8");
assert(railSource.includes('Quick Advice')&&railSource.includes('luare-consult-popover'),"Short consultation label or hover help was lost");
const jpBlogSource=readFileSync("src/app/insights/page.tsx","utf8");
assert(jpBlogSource.includes("bg-[#EDF5FC]")&&jpBlogSource.includes("会計・経理・内部統制の実務記事"),"Japanese insight design or descriptive SEO title reverted");
const zhFeeSource=readFileSync("src/app/zh/pricing/page.tsx","utf8");
const enFeeSource=readFileSync("src/app/en/pricing/page.tsx","utf8");
const jpFeeSource=readFileSync("src/app/pricing/page.tsx","utf8");
for(const [locale,source] of [["ja",jpFeeSource],["en",enFeeSource],["zh",zhFeeSource]]) {
 for(const cls of ["luare-fee-card","luare-fee-title","luare-fee-industry","luare-fee-facts"])
  assert(source.includes(cls),locale+" fee card alignment missing "+cls);
}
const gallerySource=readFileSync("src/app/cases/page.tsx","utf8");
const r5Style=readFileSync("src/components/cases/R5CaseLayout.module.css","utf8");
const legacy=readFileSync("src/components/cases/LegacyCaseHashRedirect.tsx","utf8");
assert(gallerySource.includes("r5Cases.map")&&gallerySource.includes("styles.grid2"),"Unified four-case list missing");
assert(gallerySource.includes("CASE STUDIES")&&!gallerySource.includes("<h2>支援モデル</h2>"),"Unified project list changed");
assert(r5Style.includes(".card .industry")&&r5Style.includes(".card .impact"),"Original r5 card styling missing");
assert(legacy.includes("accounting-operations")&&legacy.includes("global-internal-control")&&legacy.includes("overseas-jsox"),"Legacy case deep-link aliases missing");
for(const path of ["about.html","en/about.html","zh/about.html"]){
 const html=pages.get(path)||"";
 assert(!html.includes("US.CPA"),"Deprecated dotted USCPA is still displayed on "+path);
 assert(html.includes("USCPA"),"Correct USCPA designation missing on "+path);
}
const mobileHeroCss=readFileSync("src/app/globals.css","utf8");
assert(mobileHeroCss.includes("object-position:89% 48%"),"Mobile hero crop lost the right-side interlocutor");
assert(!home.includes("掲載内容は確認用の仮原稿です"),"Case homepage notice incorrectly claims approval pending");
const cases=pages.get("cases.html")||"";
assert(!cases.includes("noindex"),"Approved published cases should not remain noindex");
if(errors.length){console.error("FAILED static QA: "+errors.length);for(const e of errors.slice(0,100))console.error(" - "+e);process.exitCode=1;}
else{console.log("PASS: "+pages.size+" static pages, links/anchors/images, multilingual forms, privacy and noindex gates");
 console.log("NOTE: Remote HTTP status, responsive screenshots and real Formspree delivery need separate checks.");}
