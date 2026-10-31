#!/usr/bin/env node
// Verify the English website reflects the current JP/ZH corporate HP, not the legacy AI BPO microsite.
import {existsSync,readFileSync} from "node:fs";
const load=(path)=>readFileSync(path,"utf8");
const homeSource=load("src/app/en/page.tsx");
const navSource=load("src/components/Navbar.tsx");
const enServiceSource=load("src/lib/enSite.ts");
const allPaths=[
"/en","/en/services","/en/services/internal-control","/en/services/accounting-management",
"/en/services/finance-ops","/en/services/global-finance","/en/services/audit-assurance",
"/en/services/ma-finance","/en/cases","/en/cases/case-close","/en/cases/case-music",
"/en/cases/case-jsox","/en/cases/case-fpa","/en/pricing","/en/insights",
"/en/insights/close-process-early-improvement","/en/insights/overseas-jsox-three-documents",
"/en/insights/japan-subsidiary-finance-setup","/en/about","/en/contact"
];
const failures=[];
const check=(v,msg)=>{if(!v)failures.push(msg);};
const html=(p)=>{const s=p.replace(/^\//,"");const candidates=["out/"+(s?s+".html":"index.html"),"out/"+s+"/index.html"];const file=candidates.find(x=>existsSync(x));return file?load(file):"";};
for(const path of allPaths)check(!!html(path),"Missing English page "+path);
for(const section of ["luare-unicell-hero","luare-services-photo","luare-v6-why","luare-v6-cases","luare-v6-steps","luare-v6-faq","luare-v6-final"])
check(homeSource.includes(section),"English home lacks current Japanese design section "+section);
for(const old of ["Zero Local Hiring Risk","Absolute Financial Compliance in Japan","abstract_tokyo_wireframe_bg","GlobalDataPipelineEn","ComparisonMatrixEn","Insights (JP)"])
check(!homeSource.includes(old)&&!navSource.includes(old),"Obsolete English marketing or link remains: "+old);
check(homeSource.includes("InteractiveServiceGalleryEn"),"English home service accordion missing");
check(enServiceSource.includes("Internal Control, J-SOX")&&enServiceSource.includes("Audit & Assurance"),"Five translated service areas incomplete");
const en=html("/en");check(en.includes("Your Trusted Accounting"),"Trusted partner tagline missing");
check(en.includes("Making accounting and finance"),"New English hero content is not visible in exported page");check(!en.includes("Zero Local Hiring Risk"),"Old English landing copy is still exported");
check(en.includes("luare-unicell-talk-photo"),"Approved photograph not used on English home");
for(const path of allPaths)check(!html(path).includes("US.CPA"),"Deprecated dotted USCPA on "+path);
const sitemap=load("src/app/sitemap.ts");
for(const p of ["/en/services","/en/cases","/en/pricing","/en/insights"])check(sitemap.includes('"'+p+'"'),"Sitemap missing "+p);
if(failures.length){for(const v of failures)console.error("FAIL "+v);process.exitCode=1;}else console.log("PASS English parity: "+allPaths.length+" exported routes, current-home design, translated navigation, no obsolete hero copy");
