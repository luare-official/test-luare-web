import type {Metadata} from "next";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {zhServices} from "@/lib/zhSite";
export const metadata:Metadata={title:"专业服务 | Luare Consulting",description:"日本法人、内部控制、财务结算、AI业务改进及审计相关服务。",alternates:{canonical:"https://luare-consulting.com/zh/services"}};
export default function ZhServices(){
return <ZhPageFrame label="OUR SERVICES" title="专业服务" lead="结合企业所处阶段与管理课题，从财务、内部控制、经营管理及业务改进等方面提供支持。">
<section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
<h2 className="mb-3 text-2xl font-semibold">选择服务领域</h2><p className="mb-7 text-sm text-[#475569]">点击卡片可直接进入各领域的详细介绍。</p>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{zhServices.map((s,i)=><Link key={s.slug} href={"/zh/services/"+s.slug} className="group flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6 hover:border-[#1766A0] hover:bg-[#EDF5FC]">
<span className="text-sm font-bold text-[#1766A0]">{String(i+1).padStart(2,"0")}</span>
<h3 className="mt-3 text-lg font-semibold leading-8">{s.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-[#475569]">{s.lead}</p>
<span className="mt-5 text-sm font-semibold text-[#1766A0]">查看服务详情 ↗</span></Link>)}</div>
</section></ZhPageFrame>;
}
