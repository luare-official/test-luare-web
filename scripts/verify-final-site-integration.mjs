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
const required=["/","/services","/services/internal-control","/services/audit-assurance","/bpo","/about","/cases","/insights","/contact","/privacy","/en","/zh","/en/about","/zh/about","/en/contact","/zh/contact","/pricing","/for-audit-firms"];
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
const nav=readFileSync("src/components/Navbar.tsx","utf8");
assert(!nav.includes("/for-audit-firms"),"Protected audit-partner nav became visible");
assert(!nav.includes("--font-inter"),"Legacy font variable still in navbar");
const special=["about.html","en/about.html","zh/about.html","insights.html",...pages.keys().filter(f=>f.startsWith("insights/"))];
for(const page of special){
 if(!pages.has(page))continue;
 const html=pages.get(page);
 assert(html.includes('href="/privacy"'),"No privacy link on "+page);
 assert((html.match(/<footer\b/g)||[]).length===1,"Duplicate/missing footer on "+page);
}
for(const lang of ["","en/","zh/"]){
 const page=lang+"contact.html",html=pages.get(page)||"";
 assert(!!html,"Missing "+page);
 for(const field of ["company","name","email","phone","message"])
  assert(html.includes('name="'+field+'"'),page+" lacks "+field);
 for(const field of ["company","name","email","message"]){
  const tag=html.match(new RegExp("<(?:input|textarea)[^>]*name=[\"']"+field+"[\"'][^>]*>","i"))?.[0]||"";
  assert(tag.includes("required"),page+" missing required flag on "+field);
 }
 assert(html.includes('href="/privacy"'),page+" missing privacy link");
 assert(html.includes('action="https://formspree.io/f/mojppoor"'),page+" Formspree action changed");
}
const jsox=pages.get("services/internal-control.html")||"";
assert(jsox.includes('href="/privacy"'),"J-SOX LP missing privacy link");
assert(jsox.includes('action="https://formspree.io/f/mojppoor"'),"J-SOX form destination changed");
assert(existsSync("out/robots.txt")&&existsSync("out/sitemap.xml"),"SEO crawler files missing");
const cases=pages.get("cases.html")||"";
assert(cases.includes("noindex"),"Unreviewed cases are no longer noindex");
if(errors.length){console.error("FAILED static QA: "+errors.length);for(const e of errors.slice(0,100))console.error(" - "+e);process.exitCode=1;}
else{console.log("PASS: "+pages.size+" static pages, links/anchors/images, multilingual forms, privacy and noindex gates");
 console.log("NOTE: Remote HTTP status, responsive screenshots and real Formspree delivery need separate checks.");}
