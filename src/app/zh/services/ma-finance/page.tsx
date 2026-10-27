import type {Metadata} from "next";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
export const metadata:Metadata={
 title:"并购财务调查、估值及投后整合支持 | Luare Consulting",
 description:"针对财务尽调、企业价值估算和并购后管理体系整合，按项目实际范围提供支持。",
 alternates:{canonical:"https://luare-consulting.com/zh/services/ma-finance"}
};
const topics=[
 ["财务尽职调查（FDD）支持","分析目标公司的财务资料及主要会计议题，整理交易评估所需信息。"],
 ["企业价值与股权估值支持","梳理商业计划、财务数据、关键假设和估值所需资料。"],
 ["并购后整合（PMI）","支持并购后会计、财务、集团报告及职责分工等管理体系的整合。"]
];
export default function MaFinanceZh(){
return <ZhPageFrame label="M&A / FINANCE ADVISORY" title="并购财务调查、估值及投后整合支持" lead="从交易前的财务问题梳理，到交易后的管理流程整合，根据项目阶段讨论合适的支持方式。" parent={{title:"专业服务",href:"/zh/services"}}>
<section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
 <p className="text-xs font-bold tracking-widest text-[#1766A0]">SCOPE</p><h2 className="mt-3 text-2xl font-semibold">主要支持内容</h2>
 <div className="mt-8 grid gap-4 sm:grid-cols-3">
 {topics.map(([title,desc],i)=><article key={title} className="rounded-lg border border-[#CBD5E1] bg-white p-6"><span className="text-sm font-bold text-[#1766A0]">0{i+1}</span><h3 className="mt-3 text-lg font-semibold leading-8">{title}</h3><p className="mt-3 text-sm leading-8 text-[#475569]">{desc}</p></article>)}
 </div>
 <p className="mt-8 text-sm text-[#475569]">本页面用于保持现有日文M&A专业服务页面与中文导航的对应关系。</p>
 <div className="mt-7 flex gap-4"><Link href="/zh/services" className="text-sm font-semibold text-[#1766A0]">全部专业服务 ↗</Link><Link href="/zh/contact" className="text-sm font-semibold text-[#1766A0]">联系我们 ↗</Link></div>
</section></ZhPageFrame>;
}