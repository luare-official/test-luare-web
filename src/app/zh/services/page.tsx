import type {Metadata} from "next";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {zhServices} from "@/lib/zhSite";
export const metadata:Metadata={title:"专业服务 | Luare Consulting",description:"日本法人、内部控制、财务结算、AI业务改进及审计相关服务。",alternates:{canonical:"https://luare-consulting.com/zh/services"}};
export default function ZhServices(){
return <ZhPageFrame label="OUR SERVICES" title="专业服务" lead="结合企业所处阶段与管理课题，从财务、内部控制、经营管理及业务改进等方面提供支持。">
<section className="mx-auto max-w-[1140px] px-5 pb-20 pt-10 sm:px-10 sm:pb-24 sm:pt-12" aria-label="专业服务列表">
<div className="scroll-mt-28" id="index">
<div className="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
<h2 className="text-[22px] font-bold tracking-tight text-[#0B3158]">选择服务领域</h2>
<p className="text-xs leading-6 text-[#475569]">选择相应领域，可查看详细支持内容。</p>
</div>
<nav className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label="服务领域导航">
{zhServices.map((svc,index)=>(
<Link key={svc.slug} href={"/zh/services/"+svc.slug}
className="group flex min-h-[58px] items-center gap-3 rounded-lg border border-[#CBD5E1] bg-white px-4 py-3.5 text-[#0B3158] transition-colors hover:border-[#9CBDD4] hover:bg-[#EDF5FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1766A0]">
<span className="shrink-0 text-[13px] font-extrabold tracking-wider text-[#1766A0]">{String(index+1).padStart(2,"0")}</span>
<span className="min-w-0 flex-1 text-[13px] font-bold leading-6">{svc.title}</span>
<span aria-hidden="true" className="shrink-0 text-[#1766A0]">↗</span>
</Link>
))}
</nav>
<p className="mt-4 text-xs text-[#475569]">请从5个专业服务领域中选择。</p>
</div>
</section></ZhPageFrame>;
}
