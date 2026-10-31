import type {Metadata} from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {r5Quotes} from "@/lib/r5Cases";

// Titles, project descriptions, amounts, order and section text are directly
// transcribed from the user's Luare_HP_Public_Preview_r5.html / content_master_r5.json.
export const metadata:Metadata={
 title:"料金のご案内 | Luare Consulting",
 description:"業務の専門性、支援体制、必要工数に応じて個別にお見積りします。支援実績に基づく報酬目安をご案内します。",
 alternates:{canonical:"https://luare-consulting.com/pricing"}
};
const yen=(value:number)=>value.toLocaleString("ja-JP")+"円";
const links:Record<string,string>={
 "quote-fpa":"/services/accounting-management#fpa",
 "quote-close":"/services/accounting-management#closing",
 "quote-jsox":"/services/internal-control/overview"
};
export default function PricingPage(){
return <><Navbar solid/>
<main lang="ja" className="flex-1 bg-white pt-20 text-[#0B3158]">
 <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
  <div className="mx-auto max-w-[1080px] px-5 pb-12 pt-10 sm:px-10 sm:py-14">
   <nav aria-label="パンくずリスト" className="mb-8 flex gap-2 text-xs text-[#475569]"><Link href="/">ホーム</Link><span>／</span><span>料金</span></nav>
   <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">FEES</p>
   <h1 className="mt-3 text-[clamp(30px,4.4vw,46px)] font-semibold">料金のご案内</h1>
   <p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">業務の専門性、支援体制、必要工数に応じて個別にお見積りします。</p>
  </div>
 </header>
 <section id="price-base" className="scroll-mt-28 mx-auto max-w-[1080px] px-5 py-14 sm:px-10 sm:py-16">
  <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">PRICING POLICY</p>
  <h2 className="mt-3 text-2xl font-semibold">基本的な料金体系</h2>
  <div className="mt-8 rounded-xl border border-[#CBD5E1] bg-[#EDF5FC] px-7 py-9 sm:px-10">
   <p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">HOURLY RATE</p>
   <p className="mt-3 text-[clamp(32px,5vw,50px)] font-semibold text-[#0B3158]">12,000円～ <span className="text-base font-medium">/ 時間</span></p>
   <p className="mt-3 text-sm leading-7 text-[#475569]">税別。業務内容や担当範囲に応じてお見積りします。</p>
  </div>
 </section>
 <section id="price-cases" className="scroll-mt-28 bg-[#EDF5FC] py-14 sm:py-20">
  <div className="mx-auto max-w-[1080px] px-5 sm:px-10">
   <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">REFERENCE FEES</p>
   <h2 className="mt-3 text-2xl font-semibold">支援実績からの報酬目安</h2>
   <div className="mt-8 grid gap-5 lg:grid-cols-3">
    {r5Quotes.map(q=>{
     const hours=("hoursTotal" in q)?q.hoursTotal:q.hoursMonth*q.months;
     return <article key={q.id} className="flex h-full flex-col rounded-lg border border-[#CBD5E1] bg-white p-6">
      <span className="text-xs font-semibold tracking-[.16em] text-[#1766A0]">PROJECT EXPERIENCE</span>
      <h3 className="mt-3 min-h-[4rem] text-lg font-semibold leading-7">{q.title}</h3>
      <p className="mt-2 min-h-[3rem] text-sm leading-7 text-[#475569]">{q.industry}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#1766A0]">
       <span className="bg-[#EDF5FC] px-3 py-1.5">{yen(q.rate)}／時間</span>
       <span className="bg-[#EDF5FC] px-3 py-1.5">{("hoursTotal" in q)?hours+"時間・合計":q.hoursMonth+"時間／月"}</span>
       <span className="bg-[#EDF5FC] px-3 py-1.5">{q.months}か月</span>
      </div>
      <p className="mt-6 border-t border-[#CBD5E1] pt-5 text-xs text-[#475569]">{q.months}か月総額（税別）</p>
      <p className="mt-2 text-[29px] font-bold text-[#0B3158]">{yen(hours*q.rate)}</p>
      <p className="mt-4 flex-1 text-sm leading-8 text-[#475569]">{q.scope}</p>
      <Link href={links[q.id]} className="mt-6 border-t border-[#CBD5E1] pt-4 text-sm font-semibold text-[#1766A0] hover:underline">サービス内容を見る ↗</Link>
     </article>;
    })}
   </div>
  </div>
 </section>
 <section id="price-terms" className="scroll-mt-28 mx-auto max-w-[1080px] px-5 py-14 sm:px-10 sm:py-20">
  <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">ENGAGEMENT</p>
  <h2 className="mt-3 text-2xl font-semibold">お見積りについて</h2>
  <p className="mt-5 max-w-3xl text-base leading-9 text-[#475569]">プロジェクトの目的、成果物、対象拠点、必要工数を確認し、支援内容を明確にした上で個別にご提案します。</p>
  <div className="mt-7 flex flex-wrap gap-3">
   <Link href="/contact" className="rounded-md border border-[#9CBDD4] bg-[#EDF5FC] px-5 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#E5F1FA]">ご相談はこちら ↗</Link>
   <Link href="/cases" className="rounded-md border border-[#9CBDD4] bg-[#EDF5FC] px-5 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#E5F1FA]">支援事例を見る ↗</Link>
  </div>
 </section>
</main><Footer/></>;
}
