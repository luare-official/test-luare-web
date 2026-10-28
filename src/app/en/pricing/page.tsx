import type {Metadata} from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import {r5Quotes} from "@/lib/r5Cases";
export const metadata:Metadata={
 title:"Fees | Luare Consulting",
 description:"Individual quotations based on specialist requirements, support team and work hours. Reference fees by project.",
 alternates:{canonical:"https://luare-consulting.com/en/pricing"}
};
const yen=(n:number)=>"¥"+n.toLocaleString("en-US");
const translated:Record<string,{title:string,industry:string,scope:string,href:string}>={
 "quote-fpa":{title:"North American FP&A and KPI Improvement Support",industry:"Entertainment-related / North American business",scope:"Where support covers budget-variance analysis, operational KPI analysis and data quality improvement in cooperation with North American business leaders and headquarters stakeholders.",href:"/en/services/accounting-management#scope-3"},
 "quote-close":{title:"Financial Close Operations and Improvement for a Corporate Group",industry:"Domestic corporate group",scope:"Where support covers financial closing, cash-flow materials, close-process mapping, and examination and execution of process improvements.",href:"/en/services/accounting-management#scope-1"},
 "quote-jsox":{title:"J-SOX Three Core Documents for an Overseas Business",industry:"Fintech-related group with overseas operating subsidiaries",scope:"Where support includes business interviews, three core documents prepared from scratch, evaluation preparation and stakeholder coordination.",href:"/en/services/internal-control#scope-2"}
};
export default function PricingEn(){return <><Navbar solid/><main className="flex-1 bg-white pt-20 text-[#0B3158]" lang="en">
<header className="border-b border-[#CBD5E1] bg-[#EDF5FC]"><div className="mx-auto max-w-[1080px] px-5 pb-12 pt-10 sm:px-10 sm:py-14">
<nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-xs text-[#475569]"><Link href="/en">Home</Link><span>/</span><span>Fees</span></nav>
<p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">FEES</p><h1 className="mt-3 text-[clamp(30px,4.4vw,46px)] font-semibold">Fee Information</h1><p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">We prepare individual quotations based on the specialist requirements, support team and work hours.</p>
</div></header>
<section id="price-base" className="mx-auto max-w-[1080px] scroll-mt-28 px-5 py-14 sm:px-10 sm:py-16"><p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">PRICING POLICY</p><h2 className="mt-3 text-2xl font-semibold">Basic Fee Structure</h2><div className="mt-8 rounded-xl border border-[#CBD5E1] bg-[#EDF5FC] px-7 py-9 sm:px-10"><p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">HOURLY RATE</p><p className="mt-3 text-[clamp(32px,5vw,50px)] font-semibold">¥12,000+ <span className="text-base font-medium">/ hour</span></p><p className="mt-3 text-sm leading-7 text-[#475569]">Before tax. Quoted according to the work and scope of responsibility.</p></div></section>
<section id="price-cases" className="scroll-mt-28 bg-[#EDF5FC] py-14 sm:py-20"><div className="mx-auto max-w-[1080px] px-5 sm:px-10"><p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">REFERENCE FEES</p><h2 className="mt-3 text-2xl font-semibold">Reference Fees by Project</h2><div className="mt-8 grid gap-5 lg:grid-cols-3">
{r5Quotes.map(q=>{const hours="hoursTotal" in q?q.hoursTotal:q.hoursMonth*q.months;const t=translated[q.id];return <article key={q.id} className="flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6">
<span className="text-xs font-semibold tracking-[.16em] text-[#1766A0]">PROJECT EXAMPLE</span><h3 className="mt-3 min-h-[3.8rem] text-lg font-semibold leading-7">{t.title}</h3><p className="mt-2 text-sm leading-7 text-[#475569]">{t.industry}</p><div className="mt-5 flex flex-wrap gap-2 text-xs text-[#1766A0]"><span className="bg-[#EDF5FC] px-3 py-1.5">{yen(q.rate)}/hour</span><span className="bg-[#EDF5FC] px-3 py-1.5">{"hoursTotal" in q?hours+" hours total":q.hoursMonth+" hours/month"}</span><span className="bg-[#EDF5FC] px-3 py-1.5">{q.months} months</span></div><p className="mt-6 border-t border-[#CBD5E1] pt-5 text-xs text-[#475569]">Total for {q.months} months (before tax)</p><p className="mt-2 text-[29px] font-bold">{yen(hours*q.rate)}</p><p className="mt-4 flex-1 text-sm leading-8 text-[#475569]">{t.scope}</p><Link href={t.href} className="mt-6 border-t border-[#CBD5E1] pt-4 text-sm font-semibold text-[#1766A0] hover:underline">Related service ↗</Link></article>})}
</div></div></section>
<section id="price-terms" className="mx-auto max-w-[1080px] scroll-mt-28 px-5 py-14 sm:px-10 sm:py-20"><p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">ENGAGEMENT</p><h2 className="mt-3 text-2xl font-semibold">About Quotations</h2><p className="mt-5 max-w-3xl text-base leading-9 text-[#475569]">We review the purpose, deliverables, target locations and necessary work hours, clarify the support scope, and then prepare an individual proposal.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/en/contact" className="rounded-md border border-[#9CBDD4] bg-[#EDF5FC] px-5 py-3 text-sm font-semibold">Contact us ↗</Link><Link href="/en/cases" className="rounded-md border border-[#9CBDD4] bg-[#EDF5FC] px-5 py-3 text-sm font-semibold">Case studies ↗</Link></div></section>
</main><FooterEn/></>}
