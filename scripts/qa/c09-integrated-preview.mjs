// Read-only QA of an ephemeral, locally merged A/B/C build (never a production deployment).
// Does not contain prices, customer information or external calls.
import {existsSync,readFileSync,readdirSync} from "node:fs";
import {join} from "node:path";
const errors=[],warnings=[];
const draftSlugs=["close-process-early-improvement","japan-subsidiary-finance-setup","overseas-jsox-three-documents"];
function exported(path) {
 const candidates=[join("out",path+".html"),join("out",path,"index.html")];
 return candidates.find(existsSync);
}
const insights=exported("insights");
if(!insights) errors.push("Missing /insights static output");
else{
 const page=readFileSync(insights,"utf8");
 if(!page.includes("https://luare-consulting.com/insights"))errors.push("Insights canonical URL missing");
 if(!page.includes("会計・経理の読みもの"))errors.push("B-team insights Japanese title missing");
}
for(const slug of draftSlugs){
 const filepath="src/content/insights/"+slug+".md";
 if(!existsSync(filepath)){errors.push("Missing B draft source: "+filepath);continue;}
 const src=readFileSync(filepath,"utf8");
 const front=src.slice(0,src.indexOf("\n---",3));
 if(!/^draft:\s*true\s*$/m.test(front))errors.push("B article is NOT draft:true: "+filepath);
 if(exported("insights/"+slug))errors.push("Unapproved draft article exported: "+slug);
 const list=insights?readFileSync(insights,"utf8"):"";
 if(list.includes('href="/insights/'+slug+'"'))errors.push("Unapproved draft listed publicly: "+slug);
}
if(exported("cases"))warnings.push("/cases route exists: confirm client case approvals before publishing");
if(exported("pricing-request"))errors.push("Pricing request route exists without C-04 UI/content approvals");
if(exported("privacy"))warnings.push("/privacy route exists: human-approved policy needed");
else warnings.push("No /privacy route: C-06 policy still requires approved publication before collecting data");
const manifest=(dir)=>existsSync(dir)?readdirSync(dir,{recursive:true}):[];
const allExported=manifest("out").map(x=>String(x));
if(allExported.some(p=>/content_master_r5\.json|Luare.*(?:pricing|fee).*\.pdf/i.test(p)))errors.push("Confidential source or fee PDF exposed in static output");
const formsCode=readFileSync("docs/c-team/C-04-form-html-review.html","utf8");
if(!formsCode.includes('event.preventDefault()')||/<form[^>]*\saction\s*=/.test(formsCode))
  errors.push("C-04 visual HTML mock must be strictly non-sending");
console.log("C-09 ephemeral integration: 3 B draft articles, unpublished UI, canonical and form safety checked");
warnings.forEach(w=>console.warn("WARN:",w));
errors.forEach(e=>console.error("FAIL:",e));
if(errors.length)process.exitCode=1;
else console.log("PASS: cross-PR integration static safety checks; real browser screenshots and live HTTP not covered.");
