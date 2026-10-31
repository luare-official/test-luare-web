import type {Metadata} from "next";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {r5Cases} from "@/lib/r5Cases";
import {zhCases} from "@/lib/zhSite";
export const metadata:Metadata={title:"支持案例 | Luare Consulting",description:"了解财务结算、跨国集团内部控制、海外J-SOX等支持案例及FP&A实务支持。",alternates:{canonical:"https://luare-consulting.com/zh/cases"}};
function Card({id,num}:{id:string;num:string}){const c=zhCases[id];return <Link href={"/zh/cases/"+id} className="group flex h-full flex-col rounded-lg border border-[#CBD5E1] bg-white p-7 hover:border-[#1766A0] hover:bg-[#F8FAFC]">
<span className="text-xs font-bold tracking-widest text-[#1766A0]">{c.type}</span>
<p className="mt-3 text-xs leading-6 text-[#475569]">{c.industry}</p><h3 className="mt-3 text-lg font-semibold leading-8">{c.title}</h3>
<p className="mt-4 flex-1 text-sm leading-7 text-[#475569]">{c.impact}</p><span className="mt-5 text-sm font-semibold text-[#1766A0]">查看详细内容 ↗</span>
</Link>}
export default function CasesZh(){return <ZhPageFrame label="CASE STUDIES" title="支持案例" lead="通过项目概要、实际课题、支持方法及交付资料，介绍我们的工作方式。">
<section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20"><h2 className="mb-7 text-2xl font-semibold">项目介绍</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
{r5Cases.map(c=><Card key={c.id} id={c.id} num={c.index}/>)}
</div></section></ZhPageFrame>}
