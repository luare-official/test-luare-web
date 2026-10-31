import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {r5Cases,findR5Quote} from "@/lib/r5Cases";
import {zhCases} from "@/lib/zhSite";
type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return r5Cases.map(c=>({slug:c.id}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const slug=(await params).slug;return zhCases[slug]?{title:zhCases[slug].title+" | Luare Consulting",description:zhCases[slug].impact,alternates:{canonical:"https://luare-consulting.com/zh/cases/"+slug}}:{title:"未找到案例"};}
const quoteZh:Record<string,{name:string;scope:string}>={
"quote-close":{name:"集团财务结算与流程优化支持",scope:"假设支持结算实务、现金流资料编制、结账流程梳理及改善措施讨论"},
"quote-jsox":{name:"海外据点J-SOX三件套建设",scope:"假设提供访谈、三件套编制、评价准备及相关方协调"},
"quote-fpa":{name:"北美业务FP&A及KPI分析支持",scope:"假设与北美业务负责人及总部合作，进行预算分析、业务KPI分析及指标优化"}
};
const yen=(n:number)=>n.toLocaleString("ja-JP")+"日元";
export default async function CaseDetailZh({params}:Props){
const slug=(await params).slug;const c=zhCases[slug];const original=r5Cases.find(x=>x.id===slug);if(!c||!original)notFound();
const q=findR5Quote(original.price);
return <ZhPageFrame label={"CASE STUDIES"} title={c.title} lead={c.impact} parent={{title:"支持案例",href:"/zh/cases"}}>

<section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10"><p className="text-xs font-bold text-[#1766A0]">OVERVIEW</p><h2 className="mt-3 text-2xl font-semibold">项目概要</h2>
<div className="mt-7 grid gap-6 md:grid-cols-[1fr_270px]"><div><span className="bg-[#EDF5FC] px-3 py-2 text-xs text-[#1766A0]">{c.type}</span><h3 className="mt-5 text-lg font-semibold">{c.industry}</h3><p className="mt-4 text-sm leading-8 text-[#475569]">{c.intro}</p></div>
<aside className="border border-[#CBD5E1] bg-[#EDF5FC] p-6"><p className="text-xs text-[#475569]">支持目标</p><p className="mt-3 text-sm leading-8">{c.objective}</p></aside></div></section>
<section className="bg-[#F5F9FC] py-14"><div className="mx-auto max-w-[1140px] px-5 sm:px-10"><p className="text-xs font-bold text-[#1766A0]">PROJECT APPROACH</p><h2 className="mt-3 mb-6 text-2xl font-semibold">从问题到改善</h2>
<div className="rounded-lg border border-[#CBD5E1] bg-white p-5 sm:p-8"><div className="bg-[#0B3158] p-5 text-white"><strong>当前课题</strong><p className="mt-2 text-sm">{c.impact}</p></div>
<div className="my-5 grid gap-3 md:grid-cols-3">{c.issues.map((x,i)=><div key={x} className="border border-[#CBD5E1] bg-[#EDF5FC] p-4 text-sm leading-7"><span className="mr-2 text-xs font-bold text-[#1766A0]">{i+1}.</span>{x}</div>)}</div>
<div className="my-4 text-center text-xl text-[#1766A0]">↓　LUARE　↓</div>
<div className="flex flex-wrap gap-2">{c.actions.map(x=><span key={x} className="border border-[#CBD5E1] px-4 py-3 text-sm">{x}</span>)}</div>
<div className="mt-5 bg-[#DFEFF9] p-5"><strong className="text-xs text-[#1766A0]">目标状态 / TO BE</strong><p className="mt-2 text-sm leading-7">{c.objective}</p></div></div></div></section>
<section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10"><p className="text-xs font-bold text-[#1766A0]">OUR SUPPORT</p><h2 className="mt-3 text-2xl font-semibold">Luare的支持内容</h2>
<p className="mt-4 text-sm leading-8 text-[#475569]">{c.intro}</p><ul className="mt-6 grid gap-3 md:grid-cols-2">{c.actions.map(x=><li key={x} className="border-l-[3px] border-[#1766A0] bg-[#EDF5FC] p-5 text-sm leading-7">{x}</li>)}</ul>
{c.outcomes.length>0&&<><h3 className="mt-9 font-semibold">整理内容与交付资料</h3><div className="mt-4 flex flex-wrap gap-3">{c.outcomes.map(x=><span key={x} className="border border-[#CBD5E1] px-4 py-3 text-sm">{x}</span>)}</div></>}</section>
{q&&<section className="bg-[#EDF5FC] py-14"><div className="mx-auto max-w-[1140px] px-5 sm:px-10"><p className="text-xs font-bold text-[#1766A0]">REFERENCE FEE</p><h2 className="mt-3 mb-7 text-2xl font-semibold">该案例的服务报酬参考</h2>
<div className="rounded-lg border border-[#CBD5E1] bg-white p-6 sm:p-9"><h3 className="text-lg font-semibold">{quoteZh[q.id].name}</h3><p className="mt-3 text-sm leading-7 text-[#475569]">{quoteZh[q.id].scope}</p>
<div className="mt-6 grid gap-4 sm:grid-cols-3"><div className="bg-[#EDF5FC] p-4"><small>小时费率（不含税）</small><p className="mt-2 text-lg font-bold">{yen(q.rate)}</p></div>
<div className="bg-[#EDF5FC] p-4"><small>预计工时</small><p className="mt-2 text-lg font-bold">{"hoursTotal" in q?q.hoursTotal+"小时／总计":q.hoursMonth+"小时／月"}</p></div>
<div className="bg-[#EDF5FC] p-4"><small>支持期间</small><p className="mt-2 text-lg font-bold">{q.months}个月</p></div></div>
<p className="mt-6 text-xs text-[#475569]">预计总额（不含税）</p><p className="mt-2 text-3xl font-semibold">{yen(q.rate*("hoursTotal" in q?q.hoursTotal:q.hoursMonth*q.months))}</p><p className="mt-3 text-xs leading-6 text-[#475569]">具体范围、人员配置与所需工时按项目单独报价。</p></div></div></section>}
<section className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10"><h2 className="text-xl font-semibold">相关页面</h2><div className="mt-5 flex flex-wrap gap-3">
<Link href="/zh/cases" className="border border-[#CBD5E1] px-4 py-3 text-sm">返回案例列表 ↗</Link><Link href="/zh/services" className="border border-[#CBD5E1] px-4 py-3 text-sm">专业服务 ↗</Link><Link href="/zh/pricing" className="border border-[#CBD5E1] px-4 py-3 text-sm">费用说明 ↗</Link></div></section>
</ZhPageFrame>;
}