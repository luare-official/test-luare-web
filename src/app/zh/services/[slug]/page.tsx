import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {zhServices} from "@/lib/zhSite";
type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return zhServices.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const slug=(await params).slug;const s=zhServices.find(x=>x.slug===slug);return s?{title:s.title+" | Luare Consulting",description:s.lead,alternates:{canonical:"https://luare-consulting.com/zh/services/"+slug}}:{title:"未找到服务"};}
export default async function ZhServiceDetail({params}:Props){
const slug=(await params).slug;const s=zhServices.find(x=>x.slug===slug);if(!s)notFound();
return <ZhPageFrame label="SERVICES" title={s.title} lead={s.lead} parent={{title:"专业服务",href:"/zh/services"}}>
<section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
<p className="text-xs font-bold tracking-[.15em] text-[#1766A0]">SCOPE</p><h2 className="mt-3 text-2xl font-semibold">主要支持内容</h2>
<div className="mt-8 grid gap-4 md:grid-cols-2">{s.items.map((x,i)=><article id={"scope-"+(i+1)} key={x.title} className="scroll-mt-28 rounded-lg border border-[#CBD5E1] bg-white p-6">
<span className="text-xs font-semibold text-[#1766A0]">{String(i+1).padStart(2,"0")}</span><h3 className="mt-3 text-base font-semibold leading-7">{x.title}</h3>
<p className="mt-3 text-sm leading-8 text-[#475569]">{x.description}</p></article>)}</div>
</section>
<section className="bg-[#EDF5FC] px-5 py-14"><div className="mx-auto max-w-[1140px] sm:px-5">
<h2 className="text-xl font-semibold">相关信息</h2><div className="mt-5 flex flex-wrap gap-3">
<Link href="/zh/cases" className="rounded border border-[#CBD5E1] bg-white px-5 py-3 text-sm">支持案例 ↗</Link>
<Link href="/zh/pricing" className="rounded border border-[#CBD5E1] bg-white px-5 py-3 text-sm">费用说明 ↗</Link>
<Link href="/zh/contact" className="rounded border border-[#CBD5E1] bg-white px-5 py-3 text-sm">联系我们 ↗</Link>
</div></div></section></ZhPageFrame>;
}