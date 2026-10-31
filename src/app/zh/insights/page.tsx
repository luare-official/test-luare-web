import type {Metadata} from "next";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {zhArticles} from "@/lib/zhSite";
export const metadata:Metadata={title:"财务管理与内部控制文章 | Luare Consulting",description:"面向在日外资企业、海外总部和财务管理人员的会计、内部控制及日本市场进入实务文章。",alternates:{canonical:"https://luare-consulting.com/zh/insights"}};
export default function InsightsZh(){return <ZhPageFrame label="INSIGHTS" title="财务管理与内部控制文章" lead="围绕财务结算、内部控制、日本法人财务体系搭建及海外子公司治理，提供实务参考。">
<section className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
{zhArticles.map(a=><Link key={a.slug} href={"/zh/insights/"+a.slug} className="group flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6 transition-colors hover:border-[#1766A0] hover:bg-[#EDF5FC]">
<span className="text-xs font-semibold text-[#1766A0]">{a.category}</span>
<h2 className="mt-4 text-lg font-semibold leading-8">{a.title}</h2>
<p className="mt-3 flex-1 text-sm leading-7 text-[#475569]">{a.excerpt}</p>

<span className="mt-5 text-sm font-semibold text-[#1766A0]">阅读全文 ↗</span></Link>)}
</div></section></ZhPageFrame>}
