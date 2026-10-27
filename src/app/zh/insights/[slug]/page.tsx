import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import ZhPageFrame from "@/components/zh/ZhPageFrame";
import {zhArticles} from "@/lib/zhSite";
type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return zhArticles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const a=zhArticles.find(x=>x.slug===slug);return a?{title:a.title+" | Luare Consulting",description:a.excerpt,robots:a.review?{index:false,follow:false}:undefined,alternates:{canonical:"https://luare-consulting.com/zh/insights/"+a.slug}}:{title:"未找到文章"};}
export default async function ArticleZh({params}:Props){
const {slug}=await params;const a=zhArticles.find(x=>x.slug===slug);if(!a)notFound();
return <ZhPageFrame label={"INSIGHTS / "+a.category} title={a.title} lead={a.excerpt} parent={{title:"文章列表",href:"/zh/insights"}}>
<article className="mx-auto max-w-[850px] px-5 py-14 sm:px-10 sm:py-20">
{a.review&&<div className="mb-8 border border-[#CBD5E1] bg-[#EDF5FC] p-5 text-sm leading-7 text-[#475569]">本文为专业审核中的参考稿，正式发布前可能进行调整。</div>}
{a.sections.map(s=><section key={s.heading} className="mb-11"><h2 className="text-xl font-semibold leading-8">{s.heading}</h2><p className="mt-5 text-[15px] leading-9 text-[#475569]">{s.body}</p></section>)}
<p className="border-t border-[#CBD5E1] pt-7 text-xs leading-7 text-[#475569]">以上内容仅用于说明一般业务管理方式，具体事务需结合适用法规、相关专业人员和企业自身情况判断。</p>
<div className="mt-8 flex flex-wrap gap-3">
<Link href="/zh/insights" className="border border-[#CBD5E1] px-5 py-3 text-sm hover:bg-[#EDF5FC]">返回文章列表 ↗</Link>
<Link href="/zh/services" className="border border-[#CBD5E1] px-5 py-3 text-sm hover:bg-[#EDF5FC]">专业服务 ↗</Link>
</div></article></ZhPageFrame>;
}
