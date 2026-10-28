import type {Metadata} from "next";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {r5Quotes} from "@/lib/r5Cases";

export const metadata:Metadata={
 title:"费用说明 | Luare Consulting",
 description:"根据专业要求、服务团队及工时单独报价。提供按项目划分的费用参考。",
 alternates:{canonical:"https://luare-consulting.com/zh/pricing"}
};
const yen=(num:number)=>num.toLocaleString("ja-JP")+"日元";
const translated:Record<string,{title:string,industry:string,scope:string,href:string}>={
 "quote-fpa":{title:"北美业务FP&A及KPI提升支持",industry:"娱乐产业相关｜北美业务",scope:"与北美业务负责人及总部相关人员合作，支持预算与实际差异分析、业务KPI分析及指标准确度提升时",href:"/zh/services/accounting-management#scope-3"},
 "quote-close":{title:"企业集团结算实务及流程改善支持",industry:"日本国内企业集团",scope:"支持结算相关实务、现金流资料、结算流程可视化及改善措施研究与执行时",href:"/zh/services/accounting-management#scope-1"},
 "quote-jsox":{title:"海外业务据点J-SOX三件套建设",industry:"拥有海外业务法人的金融科技相关集团",scope:"支持业务访谈、从零编制三件套、评价准备及相关方协调时",href:"/zh/services/internal-control#scope-2"}
};
export default function PricingZh(){return <ZhPageFrame label="FEES" title="费用说明" lead="根据业务专业性、服务团队与所需工时分别报价。">
<section id="price-base" className="mx-auto max-w-[1080px] scroll-mt-28 px-5 py-14 sm:px-10 sm:py-16">
<p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">PRICING POLICY</p><h2 className="mt-3 text-2xl font-semibold">基本收费方式</h2>
<div className="mt-8 rounded-xl border border-[#CBD5E1] bg-[#EDF5FC] px-7 py-9 sm:px-10"><p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">HOURLY RATE</p><p className="mt-3 text-[clamp(30px,5vw,50px)] font-semibold">12,000日元起 <span className="text-base font-medium">／小时</span></p><p className="mt-3 text-sm leading-7 text-[#475569]">不含税。根据服务内容及负责范围进行报价。</p></div>
</section>
<section id="price-cases" className="scroll-mt-28 bg-[#EDF5FC] py-14 sm:py-20"><div className="mx-auto max-w-[1080px] px-5 sm:px-10">
<p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">REFERENCE FEES</p><h2 className="mt-3 text-2xl font-semibold">按项目划分的费用参考</h2>
<div className="mt-8 grid gap-5 lg:grid-cols-3">{r5Quotes.map(q=>{const h="hoursTotal" in q?q.hoursTotal:q.hoursMonth*q.months;const t=translated[q.id];return <article key={q.id} className="flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6">
<p className="text-xs font-semibold tracking-[.16em] text-[#1766A0]">PROJECT EXAMPLE</p><h3 className="mt-3 min-h-[3.8rem] text-lg font-semibold leading-7">{t.title}</h3><p className="mt-2 text-sm leading-7 text-[#475569]">{t.industry}</p>
<div className="mt-5 flex flex-wrap gap-2 text-xs text-[#1766A0]"><span className="bg-[#EDF5FC] px-3 py-1.5">{yen(q.rate)}／小时</span><span className="bg-[#EDF5FC] px-3 py-1.5">{"hoursTotal" in q?h+"小时（合计）":q.hoursMonth+"小时／月"}</span><span className="bg-[#EDF5FC] px-3 py-1.5">{q.months}个月</span></div>
<p className="mt-6 border-t border-[#CBD5E1] pt-5 text-xs text-[#475569]">{q.months}个月总额（不含税）</p><p className="mt-2 text-[29px] font-bold">{yen(q.rate*h)}</p><p className="mt-4 flex-1 text-sm leading-8 text-[#475569]">{t.scope}</p><Link href={t.href} className="mt-6 border-t border-[#CBD5E1] pt-4 text-sm font-semibold text-[#1766A0] hover:underline">查看服务内容 ↗</Link>
</article>})}</div></div></section>
<section id="price-terms" className="mx-auto max-w-[1080px] scroll-mt-28 px-5 py-14 sm:px-10 sm:py-20"><p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">ENGAGEMENT</p><h2 className="mt-3 text-2xl font-semibold">关于报价</h2><p className="mt-5 max-w-3xl text-base leading-9 text-[#475569]">我们会确认项目目标、交付成果、涉及据点及所需工时，在明确服务内容后提供单独方案。</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/zh/contact" className="rounded-md border border-[#9CBDD4] bg-[#EDF5FC] px-5 py-3 text-sm font-semibold">联系我们 ↗</Link><Link href="/zh/cases" className="rounded-md border border-[#9CBDD4] bg-[#EDF5FC] px-5 py-3 text-sm font-semibold">查看支持案例 ↗</Link></div></section>
</ZhPageFrame>}
