import type {Metadata} from "next";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {r5Quotes} from "@/lib/r5Cases";
export const metadata:Metadata={
 title:"费用说明与参考报价 | Luare Consulting",
 description:"基本小时费率12,000日元起（不含税）。J-SOX、财务结算及FP&A的项目示例报价。",
 alternates:{canonical:"https://luare-consulting.com/zh/pricing"}
};
const yen=(num:number)=>num.toLocaleString("ja-JP")+"日元";
const zhQuotes:Record<string,{title:string,subtitle:string,slug:string}>={
 "quote-jsox":{title:"J-SOX三件套建设支持",subtitle:"业务访谈、文件编制、评价准备与相关方协调",slug:"internal-control"},
 "quote-close":{title:"财务结算与流程优化",subtitle:"结算业务、现金流资料、流程梳理和改善",slug:"accounting-management"},
 "quote-fpa":{title:"FP&A及KPI分析支持",subtitle:"预算分析、业务KPI管理与指标优化",slug:"accounting-management"}
};
export default function PricingZh(){
return <ZhPageFrame label="PRICING" title="费用说明与参考报价" lead="费用依据服务内容、专业要求、工作范围和预计工时单独核算。以下金额为便于理解的参考示例。">
<section className="mx-auto max-w-[1080px] px-5 pt-12 sm:px-10 sm:pt-16">
<div className="rounded-xl border border-[#CBD5E1] bg-[#EDF5FC] px-7 py-9 sm:px-11">
<p className="text-xs font-semibold tracking-widest text-[#1766A0]">HOURLY RATE / 基本费率参考</p>
<p className="mt-4 text-[clamp(30px,5vw,50px)] font-semibold leading-tight text-[#0B3158]">12,000日元起 <span className="text-base font-medium">／小时</span></p>
<p className="mt-3 text-sm leading-7 text-[#475569]">不含税。具体费率、工作范围和所需工时以单独报价为准。</p></div>
</section>
<section className="mx-auto max-w-[1080px] px-5 py-14 sm:px-10 sm:py-20">
<h2 className="text-2xl font-semibold">按服务内容划分的费用示例</h2>
<p className="mt-3 text-sm leading-7 text-[#475569]">示例总额仅依据假设工时计算，不代表统一定价、历史成交金额或最终合同价格。</p>
<div className="mt-8 grid gap-5 lg:grid-cols-3">
{r5Quotes.map(q=>{const x=zhQuotes[q.id];const hours="hoursTotal" in q?q.hoursTotal:q.hoursMonth*q.months;return <article key={q.id} className="flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6">
<h3 className="text-lg font-semibold leading-7">{x.title}</h3><p className="mt-3 min-h-[4rem] text-sm leading-7 text-[#475569]">{x.subtitle}</p>
<div className="mt-5 border-t border-[#CBD5E1] pt-5"><p className="text-xs text-[#475569]">参考总额（不含税）</p><strong className="mt-2 block text-3xl">{yen(q.rate*hours)}</strong>
<p className="mt-3 text-sm leading-7 text-[#475569]">{yen(q.rate)}／小时 × {"hoursTotal" in q?q.hoursTotal+"小时（总计）":q.hoursMonth+"小时／月"}</p>
<p className="mt-1 text-xs text-[#475569]">预计期间：{q.months}个月</p></div>
<Link href={"/zh/services/"+x.slug} className="mt-6 border-t border-[#CBD5E1] pt-4 text-sm font-semibold hover:underline">查看服务详情 ↗</Link>
</article>})}</div>
<p className="mt-6 rounded-lg bg-[#EDF5FC] p-5 text-xs leading-7 text-[#475569]">※实际工作范围、工时、期间、税费和合同条件均需单独确认。</p>
</section></ZhPageFrame>;
}