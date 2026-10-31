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
 {path:"/services/audit-assurance",tag:"audit-approved-jp"},

 {path:"/cases",tag:"cases-jp"},
 {path:"/cases/case-jsox",tag:"case-jsox-jp"},
 {path:"/pricing",tag:"pricing-jp"},
 {path:"/about",tag:"profile-jp"},
 {path:"/zh",tag:"home-zh"},
 {path:"/zh/services",tag:"services-zh"},
 {path:"/zh/cases",tag:"cases-zh"},
 {path:"/zh/pricing",tag:"pricing-zh"},
 {path:"/zh/about",tag:"profile-zh"},
 {path:"/en",tag:"home-en"},
 {path:"/en/services",tag:"services-en"},
 {path:"/en/cases",tag:"cases-en"},
 {path:"/en/pricing",tag:"pricing-en"},
 {path:"/en/insights",tag:"insights-en"},
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
  if(p.tag==="home-en"){
   const current=await page.evaluate(()=>({
    hero:!!document.querySelector(".luare-unicell-talk-photo img"),
    sections:["services","why-luare","case-studies","flow","faq"].every(id=>!!document.getElementById(id)),
    oldText:document.body.textContent?.includes("Zero Local Hiring Risk")||false
   }));
   if(!current.hero||!current.sections||current.oldText)record(profile.label+" /en stale homepage structure "+JSON.stringify(current));
  }

  if(["home-jp","home-zh","home-en"].includes(p.tag)){
   const hero=await page.evaluate(()=>{
    const stage=document.querySelector(".luare-unicell-stage");
    const photo=document.querySelector(".luare-unicell-talk-photo");
    if(!stage||!photo)return null;
    const a=stage.getBoundingClientRect(),b=photo.getBoundingClientRect();
    return {blankBelowPhoto:Math.round(a.bottom-b.bottom),
      stageHeight:Math.round(a.height),
      hasOldCaption:!!document.querySelector(".luare-unicell-side-caption"),
      hasOldScroll:!!document.querySelector(".luare-unicell-scroll")};
   });
   const maxGap=profile.label==="desktop"?190:190;
   if(!hero||hero.blankBelowPhoto>maxGap||hero.hasOldCaption||hero.hasOldScroll)
      record(profile.label+" "+p.path+" hero whitespace/removed labels regression "+JSON.stringify(hero));
  }
  // Full-page screenshots do NOT simulate scrolling. Trigger each existing
  // ScrollReveal with real scroll positions before taking the design-review image,
  // otherwise lower sections look blank despite working on a normal visit.
  await page.evaluate(async()=>{
   const nodes=[...document.querySelectorAll(".luare-reveal")];
   for(const node of nodes){
    node.scrollIntoView({block:"center",behavior:"instant"});
    await new Promise(resolve=>setTimeout(resolve,55));
   }
   window.scrollTo({top:0,behavior:"instant"});
  });
  await page.waitForTimeout(180);
  const hiddenReveals=await page.evaluate(()=>
   [...document.querySelectorAll(".luare-reveal:not(.is-visible)")]
     .filter(node=>getComputedStyle(node).display!=="none")
     .length
  );
  if(hiddenReveals)record(profile.label+" "+p.path+" hidden ScrollReveal sections after scroll: "+hiddenReveals);
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
   const home=page.locator('header nav a').filter({hasText:"ホーム"}).first();
   const service=page.locator('header nav a').filter({hasText:"サービス"}).first();
   if(await home.count()&&await service.count()){
    const sizes=await Promise.all([home.evaluate(el=>getComputedStyle(el).fontSize),service.evaluate(el=>getComputedStyle(el).fontSize)]);
    if(sizes[0]!==sizes[1])record("Subpage nav font size mismatch: "+sizes);
   }
  }
 }
 await page.close();
}

// Compact navigation: labels keep their natural width, while the entire
// menu stays centered between the logo and language controls.
for(const width of [1280,1360,1440]){
 const check=await browser.newPage({viewport:{width,height:900}});
 for(const locale of ["/","/en","/zh"]){
  await check.goto(root+locale,{waitUntil:"domcontentloaded"});
  const info=await check.evaluate(()=>{
   const menu=document.querySelector('header nav[aria-label="メインメニュー"],header nav[aria-label="Main navigation"],header nav[aria-label="主导航"]');
   const navLanguage=document.querySelector('header nav[aria-label="Language"]');
   const items=menu?[...menu.querySelectorAll("a")]:[];
   const arr=items.map(el=>{const b=el.getBoundingClientRect();return {left:b.left,right:b.right,scroll:el.scrollWidth,box:el.clientWidth}});
   const b=menu?.getBoundingClientRect();
   const lan=navLanguage?.getBoundingClientRect();
   const groupCenter=arr.length?(arr[0].left+arr[arr.length-1].right)/2:null;
   return {arr,groupCenter,menuCenter:b?(b.left+b.right)/2:null,languageLeft:lan?.left??0,body:document.documentElement.scrollWidth,viewport:window.innerWidth};
  });
  if(info.arr.length!==6)record("Expected six natural-width header links at "+width+" "+locale);
  if(info.body>info.viewport+3)record("Horizontal overflow at "+width+" "+locale);
  if(info.arr.length){
   if(info.arr[info.arr.length-1].right>info.languageLeft+2)record("Menu overlaps language switch at "+width+" "+locale);
   if(info.arr.some(x=>x.scroll>x.box+3))record("Menu text clipped at "+width+" "+locale);
   if(Math.abs(info.groupCenter-info.menuCenter)>4)record("Menu group not centered at "+width+" "+locale);
   for(let i=0;i<info.arr.length-1;i++){
    const gap=info.arr[i+1].left-info.arr[i].right;
    if(gap<18||gap>28)record("Menu item gap not 20-24px at "+width+" "+locale+" gap="+gap.toFixed(1));
   }
  }
 }
 await check.close();
}
await browser.close();
writeFileSync("qa-artifacts/draft-r5/qa-report.json",JSON.stringify({checked:pages.length*profiles.length,failures},null,2));
if(failures.length)process.exitCode=1; else console.log("PASS: "+pages.length*profiles.length+" draft PC/mobile captures without basic overflow or image failures.");
