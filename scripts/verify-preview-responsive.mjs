// Visual QA for a draft PR only. Runs against local static export; never posts a form or deploys.
// npm install --no-save --package-lock=false playwright@1.58.2
import { chromium } from "playwright";
import {mkdirSync,writeFileSync} from "node:fs";
const root="http://127.0.0.1:4173";
const pages=[
 {path:"/",tag:"home-jp"},
 {path:"/services",tag:"services-jp"},
 {path:"/services/internal-control",tag:"advertising-lp-original"},
 {path:"/services/internal-control/overview",tag:"internal-control-jp"},
 {path:"/cases",tag:"cases-jp"},
 {path:"/cases/case-jsox",tag:"case-jsox-jp"},
 {path:"/pricing",tag:"pricing-jp"},
 {path:"/about",tag:"profile-jp"},
 {path:"/zh",tag:"home-zh"},
 {path:"/zh/services",tag:"services-zh"},
 {path:"/zh/cases",tag:"cases-zh"},
 {path:"/zh/pricing",tag:"pricing-zh"},
 {path:"/zh/about",tag:"profile-zh"},
 {path:"/en/about",tag:"profile-en"},
 {path:"/ads/internal-control",tag:"advertising-lp"}
];
const profiles=[{label:"desktop",width:1440,height:900},{label:"mobile",width:390,height:844}];
mkdirSync("qa-artifacts/draft-r5",{recursive:true});
const failures=[];
const record=(msg)=>{console.error("FAIL:",msg);failures.push(msg);};
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
for(const profile of profiles){
 const page=await browser.newPage({viewport:{width:profile.width,height:profile.height},deviceScaleFactor:1});
 for(const p of pages){
  const res=await page.goto(root+p.path,{waitUntil:"networkidle",timeout:45000});
  await page.evaluate(()=>document.fonts.ready);
  if(!res||res.status()>=400)record(profile.label+" "+p.path+" HTTP "+(res?.status()??"unknown"));
  const metrics=await page.evaluate(()=>({
   body:document.body.scrollWidth,doc:document.documentElement.scrollWidth,
   view:window.innerWidth,images:[...document.images].filter(x=>!x.complete||x.naturalWidth===0).map(x=>x.src)
  }));
  if(metrics.doc>metrics.view+3||metrics.body>metrics.view+3)record(profile.label+" "+p.path+" horizontal overflow "+JSON.stringify(metrics));
  if(metrics.images.length)record(profile.label+" "+p.path+" broken images "+metrics.images.join(" "));
  const filename="qa-artifacts/draft-r5/"+p.tag+"-"+profile.label+".png";
  await page.screenshot({path:filename,fullPage:true,animations:"disabled"});
  console.log("CAPTURE",filename,"docWidth",metrics.doc,"viewport",metrics.view);
  if(["profile-jp","profile-zh","profile-en"].includes(p.tag)){
   const positioning=await page.evaluate(()=>{
    const picture=document.querySelector(".luare-v6-rep-photo");
    const text=document.querySelector(".luare-v6-rep-copy");
    if(!picture||!text)return null;
    const photo=picture.getBoundingClientRect(),copy=text.getBoundingClientRect();
    return {photo:{left:photo.left,top:photo.top,right:photo.right,bottom:photo.bottom},copy:{left:copy.left,top:copy.top,right:copy.right,bottom:copy.bottom}};
   });
   if(!positioning)record(profile.label+" "+p.path+" missing original portrait-and-biography grid");
   else if(profile.label==="desktop" && positioning.copy.left<=positioning.photo.left+40)
    record(profile.label+" "+p.path+" biography no longer to right of portrait: "+JSON.stringify(positioning));
   else if(profile.label==="mobile" && positioning.copy.top<positioning.photo.top+100)
    record(profile.label+" "+p.path+" mobile portrait/biography stacking invalid: "+JSON.stringify(positioning));
  }
  if(profile.label==="desktop" && p.tag==="services-jp"){
   const home=page.locator('header a.luare-nav-link').filter({hasText:"ホーム"}).first();
   const service=page.locator('header button.luare-nav-link').filter({hasText:"サービス"}).first();
   if(await home.count()&&await service.count()){
    const sizes=await Promise.all([home.evaluate(el=>getComputedStyle(el).fontSize),service.evaluate(el=>getComputedStyle(el).fontSize)]);
    if(sizes[0]!==sizes[1])record("Subpage nav font size mismatch: "+sizes);
   }
  }
 }
 await page.close();
}
await browser.close();
writeFileSync("qa-artifacts/draft-r5/qa-report.json",JSON.stringify({checked:pages.length*profiles.length,failures},null,2));
if(failures.length)process.exitCode=1; else console.log("PASS: "+pages.length*profiles.length+" draft PC/mobile captures without basic overflow or image failures.");
