#!/usr/bin/env node
// Read-only live HTTP check AFTER GitHub Pages deployment; never POST.
import {readdirSync,readFileSync} from "node:fs";
const origin="https://luare-consulting.com";
const paths=[
  "/","/about","/services","/services/internal-control","/services/audit-assurance",
  "/services/accounting-management","/services/finance-ops","/services/global-finance",
  "/services/ma-finance","/bpo","/cases","/insights","/pricing","/privacy","/contact",
  "/for-audit-firms","/en","/en/about","/en/contact","/en/services","/en/services/internal-control","/en/services/accounting-management","/en/services/finance-ops","/en/services/global-finance","/en/services/audit-assurance","/en/services/ma-finance","/en/cases","/en/cases/case-close","/en/cases/case-music","/en/cases/case-jsox","/en/cases/case-fpa","/en/pricing","/en/insights","/zh","/zh/about","/zh/contact",
  ...readdirSync("src/content/insights").filter(f=>f.endsWith(".md")).filter(f=>{
    const text=readFileSync("src/content/insights/"+f,"utf8");
    return !/^draft:\s*true\b/m.test(text);
  }).map(f=>"/insights/"+f.slice(0,-3))
];
const checks={};
async function once(path) {
  try{
    const response=await fetch(origin+path,{redirect:"follow",headers:{"cache-control":"no-cache","user-agent":"Luare-Consulting-ReadOnly-QA/1.0"},signal:AbortSignal.timeout(15000)});
    if(response.status!==200)return {ok:false,status:response.status,reason:"HTTP "+response.status};
    const html=await response.text();
    if(path==="/"&&!html.includes("luare-hero-consulting-male-20261025.webp"))
      return {ok:false,status:200,reason:"old homepage revision (hero photo mismatch)"};
    if(path==="/privacy"&&!html.includes("Formspree"))
      return {ok:false,status:200,reason:"privacy page body mismatch"};
    if((path==="/en/contact"||path==="/zh/contact"||path==="/contact")&&!html.includes('href="/privacy"'))
      return {ok:false,status:200,reason:"privacy form link missing"};
    return {ok:true,status:200};
  }catch(error){return {ok:false,status:null,reason:error.message||String(error)}}
}
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
for(let attempt=1;attempt<=4;attempt++){
 const pending=paths.filter(p=>!checks[p]?.ok);
 if(!pending.length)break;
 const results=await Promise.all(pending.map(async path=>[path,await once(path)]));
 for(const [path,r] of results)checks[path]=r;
 if(attempt<4&&results.some(([,r])=>!r.ok))await sleep(6000);
}
const failed=Object.entries(checks).filter(([,v])=>!v.ok);
for(const [p,v] of Object.entries(checks))console.log((v.ok?"PASS ":"FAIL ")+p+" "+(v.status??"network_error")+(v.reason?" "+v.reason:""));
console.log("Checked "+paths.length+" public GET endpoints; submitted 0 forms.");
if(failed.length)process.exitCode=1;
