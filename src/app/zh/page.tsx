import type {Metadata} from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterZh from "@/components/zh/FooterZh";
import {zhServices,zhCases,zhArticles} from "@/lib/zhSite";
import {r5Cases} from "@/lib/r5Cases";

export const metadata:Metadata={
 title:"Luare Consulting | 为跨国企业提供会计与财务支持",
 description:"面向外资企业及跨国集团，提供日本财务结算、J-SOX内部控制、经营管理、业务优化及审计协调支持。日语、英语和中文服务。",
 alternates:{canonical:"https://luare-consulting.com/zh"}
};
const who=[
["在日本设立子公司的外资企业","希望统筹日本公司的财务结算、审计协调及总部报告。"],
["拥有海外总部的日本法人","需要与海外总部沟通财务信息、合并报表及内部控制事项。"],
["在海外经营的日本企业","希望加强子公司治理、结算流程和集团管理报告。"],
["使用IFRS及US GAAP的企业","需要针对会计准则差异、内部管理与审计准备获得支持。"]
];
const why=[
["丰富的国际业务经验","拥有事务所、全球企业及实际经营管理部门的工作经验。"],
["覆盖财务与内部控制的多个领域","从实际财务运营、结算、内部控制到集团管理报告，以具体需求为起点。"],
["日英中三语沟通","在日本法人、海外总部和相关专业人员之间协调专业议题。"],
["兼顾专业深度与执行能力","不仅整理问题，也重视流程、资料和职责在日常业务中真正落地。"]
];
const faq=[
["可以只委托一个具体项目吗？","可以。我们会根据贵公司所需的工作范围、预计工时及期间单独提出方案。"],
["可以与海外总部使用中文或英语沟通吗？","我们可使用日语、英语、中文协调会计和财务相关事务。"],
["首次咨询是否收费？","首次咨询免费。实际服务费用在确认工作范围之后另行报价。"]
];
export default function HomeZh(){return <>
<Navbar heroStyle/>
<main lang="zh-CN" className="flex-1 luare-home luare-home-v6">
<section className="luare-unicell-hero" aria-label="Luare Consulting 首页">
 <div className="luare-unicell-stage">
  <div className="luare-unicell-white-shape"/>
  <div className="luare-unicell-talk-photo"><img src="/images/luare-hero-consulting-male-20261025.webp" alt=""/></div>
  <div className="luare-unicell-hero-copy luare-zh-hero-copy">
   <h1><span>让外资企业与跨国集团的</span><span>会计和财务管理，<br className="luare-unicell-mobile-break"/>更顺畅。</span></h1>
   <p>We stand by your finance.</p>
  </div>
  <div className="luare-unicell-side-caption" aria-hidden="true">GLOBAL ACCOUNTING &amp; FINANCE</div>
  <div className="luare-unicell-scroll" aria-hidden="true">SCROLL</div>
 </div>
</section>
<section className="luare-v6-section luare-v6-soft" id="who-we-help"><div className="luare-v6-container">
 <div className="luare-v6-section-head"><p className="luare-v6-eyebrow">WHO WE HELP</p><h2>我们支持这样的企业</h2></div>
 <div className="grid gap-4 sm:grid-cols-2">{who.map(([title,desc])=><article key={title} className="rounded-lg border border-[#CBD5E1] bg-white p-6"><h3 className="text-lg font-semibold text-[#0B3158]">{title}</h3><p className="mt-3 text-sm leading-8 text-[#475569]">{desc}</p></article>)}</div>
</div></section>
<section className="luare-v6-section" id="services"><div className="luare-v6-container">
 <div className="luare-v6-section-head"><p className="luare-v6-eyebrow">SERVICES</p><h2>我们的专业服务</h2><p className="mt-4 text-sm leading-8 text-[#475569]">结合企业现阶段的课题，支持财务业务、内部控制和经营管理体系的建设及日常运营。</p></div>
 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{zhServices.map((s,i)=><Link key={s.slug} href={"/zh/services/"+s.slug} className="flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6 hover:border-[#1766A0] hover:bg-[#EDF5FC]">
  <span className="text-sm font-bold text-[#1766A0]">{String(i+1).padStart(2,"0")}</span>
  <h3 className="mt-3 text-lg font-semibold leading-7 text-[#0B3158]">{s.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-[#475569]">{s.lead}</p><span className="mt-4 text-sm font-semibold text-[#1766A0]">查看服务内容 ↗</span>
 </Link>)}</div>
 <div className="mt-7 text-center"><Link href="/zh/services" className="inline-flex border border-[#0B3158] px-7 py-3 text-sm font-semibold text-[#0B3158]">查看全部服务 ↗</Link></div>
</div></section>
<section className="luare-v6-section luare-v6-soft" id="why-luare"><div className="luare-v6-container">
 <div className="luare-v6-section-head"><p className="luare-v6-eyebrow">WHY LUARE</p><h2>选择 Luare Consulting 的理由</h2></div>
 <div className="grid gap-4 sm:grid-cols-2">{why.map(([title,desc],i)=><article key={title} className="rounded-lg border border-[#CBD5E1] bg-white p-6"><span className="text-xs font-bold text-[#1766A0]">{String(i+1).padStart(2,"0")}</span><h3 className="mt-3 text-lg font-semibold text-[#0B3158]">{title}</h3><p className="mt-3 text-sm leading-8 text-[#475569]">{desc}</p></article>)}</div>
</div></section>
<section className="luare-v6-section" id="case-studies"><div className="luare-v6-container">
 <div className="luare-v6-section-head"><p className="luare-v6-eyebrow">CASE STUDIES</p><h2>支持案例与服务模式</h2></div>
 <div className="grid gap-4 sm:grid-cols-2">{r5Cases.map(s=>{const c=zhCases[s.id];return <Link key={s.id} href={"/zh/cases/"+s.id} className="flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6 hover:bg-[#EDF5FC]">
  <span className="text-xs font-bold text-[#1766A0]">{c.model?"SUPPORT MODEL":"CASE "+s.index}</span><h3 className="mt-3 text-lg font-semibold leading-8 text-[#0B3158]">{c.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-[#475569]">{c.impact}</p><span className="mt-4 text-sm font-semibold text-[#1766A0]">查看详情 ↗</span>
 </Link>})}</div><p className="mt-5 text-xs leading-6 text-[#475569]">※部分内容仍在审核中。FP&A为服务模式，并非客户实绩。</p>
 <div className="mt-7 text-center"><Link href="/zh/cases" className="inline-flex border border-[#0B3158] px-7 py-3 text-sm font-semibold text-[#0B3158]">支持案例一览 ↗</Link></div>
</div></section>
<section className="luare-v6-section luare-v6-soft" id="insights"><div className="luare-v6-container">
 <div className="luare-v6-section-head"><p className="luare-v6-eyebrow">INSIGHTS</p><h2>财务与内部控制文章</h2></div>
 <div className="grid gap-4 md:grid-cols-3">{zhArticles.slice(0,3).map(a=><Link key={a.slug} href={"/zh/insights/"+a.slug} className="flex flex-col rounded-lg border border-[#CBD5E1] bg-white p-6 hover:bg-[#F5F9FC]">
  <span className="text-xs text-[#1766A0]">{a.category}</span><h3 className="mt-3 text-lg font-semibold leading-8 text-[#0B3158]">{a.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-[#475569]">{a.excerpt}</p><span className="mt-4 text-sm font-semibold text-[#1766A0]">阅读全文 ↗</span>
 </Link>)}</div>
 <div className="mt-7 text-center"><Link href="/zh/insights" className="inline-flex border border-[#0B3158] px-7 py-3 text-sm font-semibold text-[#0B3158]">阅读全部文章 ↗</Link></div>
</div></section>
<section className="luare-v6-section" id="flow"><div className="luare-v6-container"><div className="luare-v6-section-head"><p className="luare-v6-eyebrow">HOW WE WORK</p><h2>合作流程</h2></div>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["01","联系我们","介绍贵公司的现状及需求。"],["02","首次免费咨询","沟通问题、背景及项目目标。"],["03","工作范围与报价","明确工作内容、分工、费用及计划。"],["04","签约并开始支持","依据协商结果开展具体工作。"]].map(([no,title,desc])=><article key={no} className="border-t-2 border-[#1766A0] p-5"><span className="text-xl font-bold text-[#1766A0]">{no}</span><h3 className="mt-3 font-semibold text-[#0B3158]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#475569]">{desc}</p></article>)}</div>
</div></section>
<section className="luare-v6-section luare-v6-soft" id="faq"><div className="luare-v6-container"><div className="luare-v6-section-head"><p className="luare-v6-eyebrow">FAQ</p><h2>常见问题</h2></div>
<div className="space-y-3">{faq.map(([q,a])=><details key={q} className="rounded-lg border border-[#CBD5E1] bg-white p-5"><summary className="cursor-pointer font-semibold text-[#0B3158]">{q}</summary><p className="mt-4 text-sm leading-8 text-[#475569]">{a}</p></details>)}</div>
</div></section>
<section className="luare-v6-final" id="contact"><div className="luare-v6-container"><p className="luare-v6-eyebrow luare-v6-eyebrow-light">CONTACT</p><h2>正在寻找熟悉国际业务的<br/>财务与会计合作伙伴？</h2><p>我们可以使用日语、英语和中文，协助梳理实际问题并讨论适合的服务方案。</p><Link href="/zh/contact" className="luare-v6-primary-cta luare-v6-final-cta">首次免费咨询 →</Link><small>日本語 / English / 中文</small></div></section>
</main><FooterZh/></>}
