#!/usr/bin/env node
// Read-only static brand and non-regression validation.
import { readFileSync } from "node:fs";
const read = p => readFileSync(p,"utf8");
const assert=(yes,message)=>{if(!yes){console.error("FAIL: "+message);process.exitCode=1;}};
const css=read("src/app/globals.css");
const layout=read("src/app/layout.tsx");
const jsox=read("src/components/JsoxLandingPage.css");
const audit=read("src/app/services/audit-assurance/audit-assurance.css");
const nav=read("src/components/Navbar.tsx");
const footer=read("src/components/Footer.tsx");
const jsoxLP=read("src/components/JsoxLandingPage.tsx");
const contact=read("src/app/contact/page.tsx");
const auditLP=read("src/app/services/audit-assurance/audit-approved.html");
const colors={navy:"#0B3158",blue:"#1766A0",pale:"#EDF5FC",white:"#FFFFFF",gray:"#475569"};
const names={navy:"luare-main",blue:"luare-accent",pale:"luare-pale",white:"luare-white",gray:"luare-text"};
for(const [name,hex] of Object.entries(colors)){
 assert(css.includes("--"+names[name]+":"+hex),"Brand token changed: "+name);
}
assert(css.includes("--color-brand-navy:#0B3158"),"Tailwind navy diverges");
assert(css.includes("--color-brand-gold:#1766A0"),"Legacy Tailwind accent diverges");
assert(layout.includes("fonts.googleapis.com/css2?family=Noto+Sans+JP")&&!layout.includes("next/font/google")&&css.includes('--font-noto-sans:"Noto Sans JP"'),"Runtime Noto Sans JP and Meiryo fallback missing or build-time remote font dependency returned");
assert(!/Noto_Serif_JP|Zen.Kaku.Gothic|const inter\s*=/.test(layout),"Legacy font unexpectedly imported");
assert(css.includes("--luare-font:var(--font-noto-sans), Meiryo, sans-serif"),"Meiryo fallback missing");
assert(jsox.includes("--navy:#0B3158")&&jsox.includes("--blue:#1766A0"),"J-SOX palette mismatch");
assert(audit.includes("--deep:#0B3158")&&audit.includes("--blue:#1766A0"),"Audit palette mismatch");
// The homepage hero must remain neutral white; only the hidden professionals
// section is reserved for the pale blue brand background on its future release.
assert(/\.luare-unicell-hero\s*\{[^}]*background:\s*#FFFFFF\s*;/i.test(css),
  "Homepage outer hero background must stay white");
assert(/\.luare-unicell-stage\s*\{[^}]*background:\s*#FAFAFA\s*;/i.test(css),
  "Homepage hero stage must stay neutral gray, not pale blue");
assert(/\.luare-people-horizontal\s*\{[^}]*background:\s*#EDF5FC\s*;/i.test(css),
  "The future professionals section must retain its approved pale blue");
assert(!nav.includes("/for-audit-firms"),"Protected collaboration navbar link restored");
assert(footer.includes('href="/for-audit-firms"'),"Protected collaboration footer missing");
assert(jsoxLP.includes("https://formspree.io/f/mojppoor"),"J-SOX form destination changed");
assert(contact.includes("https://formspree.io/f/mojppoor"),"Contact form destination changed");
assert(auditLP.includes("J-Bridge国際監査法人")&&auditLP.includes("任意監査"),"Audit LP overwritten");
for(const [name,s] of [["site",css],["J-SOX",jsox],["audit",audit]]){
 assert((s.match(/@media/g)||[]).length>=(name==="site"?5:2),name+" responsive CSS rules missing");
}
const L=s=>{const c=[1,3,5].map(i=>parseInt(s.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2];};
const ratio=(a,b)=>(Math.max(L(a),L(b))+.05)/(Math.min(L(a),L(b))+.05);
for(const [a,b] of [[colors.navy,colors.white],[colors.blue,colors.white],
 [colors.gray,colors.white],[colors.navy,colors.pale],[colors.blue,colors.pale],
 [colors.white,colors.navy],[colors.white,colors.blue]]){
 assert(ratio(a,b)>=4.5,"WCAG AA contrast fails: "+a+" on "+b);
}
if(!process.exitCode)console.log("PASS: Clear Blue palette, font, contrast, responsive CSS and protected routes; no real form submission");
