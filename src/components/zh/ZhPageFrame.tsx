import type {ReactNode} from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterZh from "@/components/zh/FooterZh";
export default function ZhPageFrame({label,title,lead,parent,children}:{label:string;title:string;lead:string;parent?:{title:string;href:string};children:ReactNode}){
 return <><Navbar solid/><main lang="zh-CN" className="flex-1 bg-white pt-20 text-[#0B3158]">
   <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]"><div className="mx-auto max-w-[1140px] px-5 py-11 sm:px-10 sm:py-16">
    <nav aria-label="面包屑导航" className="mb-7 flex flex-wrap gap-2 text-xs text-[#475569]">
     <Link href="/zh" className="hover:underline">首页</Link><span>/</span>{parent&&<><Link className="hover:underline" href={parent.href}>{parent.title}</Link><span>/</span></>}<span aria-current="page">{title}</span>
    </nav>
    <p className="text-xs font-semibold tracking-[.15em] text-[#1766A0]">{label}</p>
    <h1 className="mt-4 max-w-4xl text-[clamp(30px,4.3vw,46px)] font-semibold leading-snug">{title}</h1>
    <p className="mt-5 max-w-3xl text-sm leading-8 text-[#475569]">{lead}</p>
   </div></header>
   {children}
   <section className="bg-[#0B3158] px-5 py-14 text-center text-white"><h2 className="text-2xl font-semibold">欢迎就贵公司的财务问题与我们交流</h2>
    <p className="mt-4 text-sm leading-7 text-white/80">了解背景、业务范围与时间要求后，我们将提出适合的支持方案。</p>
    <Link href="/zh/contact" className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B3158]">联系我们 ↗</Link>
   </section>
  </main><FooterZh/></>;
}