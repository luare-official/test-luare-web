import type {Metadata} from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveServiceGalleryZh from "@/components/zh/InteractiveServiceGalleryZh";
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
"在日本经营业务的外资企业",
"拥有海外母公司的日本法人",
"计划进入日本市场的海外企业",
"需要对应IFRS / US-GAAP的企业",
"需要用英语或中文与海外母公司或子公司沟通的企业",
"希望获得财务与税务专业支持的企业"
];
const why=[
["01","具备国际会计经验的专业团队","支持IFRS、US-GAAP、跨国财务管理及相关专业业务。"],
["02","拥有事务所、跨国企业和实际经营部门经验","既熟悉专业咨询，也理解企业一线的财务工作。"],
["03","可直接使用日语、英语和中文沟通","协助日本法人及海外总部协调专业财务事项。"],
["04","统筹审计、税务、会计及Finance相关课题","根据需要与相关专业人员合作，减少沟通成本。"],
["05","兼顾专业能力与费用合理性","先厘清实际工作范围，再针对个别项目提出报价。"]
];
const faq=[
["首次咨询是否收费？","首次咨询通常免费，约一小时。我们会了解需求后提出工作范围与报价。"],
["已有合作税务师，还可以委托Luare吗？","可以。可就国际会计、IFRS及US-GAAP等特定领域进行单独咨询。"],
["可以直接用英语与海外总部沟通吗？","可以。我们能够使用日语、英语及中文支持相关财务沟通。"],
["规模较小的日本法人也能委托吗？","可以。可根据公司规模和实际范围提出支持方案。"],
["可以只委托特定项目吗？","可以。内部控制、财务报告、尽职调查及估值等项目可单独洽谈。"],
["可以先获取报价吗？","可以。首次咨询及报价通常不收费。"]
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
   <p>Your Trusted Accounting & Finance Partner.</p>
  </div>
 </div>
</section>

<section className="luare-v6-section luare-services-photo" id="services">
<div className="luare-v6-container">
<ScrollReveal className="luare-v6-section-head">
<p className="luare-v6-eyebrow">SERVICES</p>
<h2>服务领域</h2>
</ScrollReveal>
<InteractiveServiceGalleryZh/>
<ScrollReveal><Link href="/zh/contact" className="luare-v6-primary-cta luare-v6-section-cta">咨询专业服务 <span>→</span></Link></ScrollReveal>
</div></section>

<section className="luare-v6-section luare-v6-why" id="why-luare">
<div className="luare-v6-container">
<ScrollReveal className="luare-v6-section-head">
<p className="luare-v6-eyebrow luare-v6-eyebrow-light">WHY LUARE</p><h2>为什么选择 Luare Consulting？</h2>
</ScrollReveal>
<div className="luare-v6-why-list">
{why.map(([no,title,desc],index)=><ScrollReveal key={no} delay={index*40}>
<article className="luare-v6-why-row"><span>{no}</span><h3>{title}</h3><p>{desc}</p></article>
</ScrollReveal>)}
</div></div></section>

<section className="luare-v6-section luare-v6-soft" id="case-studies">
<div className="luare-v6-container">
<ScrollReveal className="luare-v6-section-head">
<p className="luare-v6-eyebrow">CASE STUDIES</p><h2>支持案例</h2>
</ScrollReveal>
<div className="luare-v6-cases">
{r5Cases.filter(c=>c.id!=="case-fpa").map((srcCase,index)=>{
const item=zhCases[srcCase.id];return <ScrollReveal key={srcCase.id} delay={index*55}>
<article className="luare-v6-case">
<div className="luare-v6-case-label">CASE {srcCase.index}｜{item.type}</div>
<div><h3>{item.title}</h3><p><strong>支持</strong><br/>{item.actions.join("、")}</p>
<Link href={"/zh/cases/"+srcCase.id} className="mt-4 inline-block border-b border-current pb-1 text-sm font-semibold text-[#0B3158] hover:opacity-70">查看案例详情 ↗</Link></div>
<div><p><strong>课题</strong><br/>{item.issues.join("、")}</p><span>{item.type}</span></div>
</article></ScrollReveal>})}
</div>
<div className="mt-8 text-center"><Link href="/zh/cases" className="inline-flex items-center justify-center border border-[#0B3158] px-7 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#0B3158] hover:text-white">查看支持案例 <span className="ml-3">→</span></Link></div>
</div></section>

<section className="luare-v6-section" id="home-articles">
<div className="luare-v6-container">
<ScrollReveal className="luare-v6-section-head">
<p className="luare-v6-eyebrow">INSIGHTS</p><h2>新闻与专业文章</h2><p className="mt-3 text-sm leading-8 text-[#475569]">分享会计、内部控制及日本法人实际运营方面的见解。</p>
</ScrollReveal>
<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
{zhArticles.slice(0,3).map((article,i)=><ScrollReveal key={article.slug} delay={i*50}>
<Link href={"/zh/insights/"+article.slug} className="group block h-full rounded-md border border-[#CBD5E1] bg-white p-6 shadow-[0_8px_25px_rgba(21,61,79,.035)] transition-colors hover:bg-[#EDF5FC]">
<span className="text-xs font-semibold text-[#1766A0]">{article.category}</span>
<h3 className="mt-4 text-lg font-semibold leading-8 text-[#0B3158]">{article.title}</h3>
<p className="mt-3 text-sm leading-7 text-[#475569]">{article.excerpt}</p>
<span className="mt-6 inline-flex text-sm font-semibold text-[#0B3158] group-hover:underline">阅读文章 ↗</span>
</Link></ScrollReveal>)}</div>
<div className="mt-7 text-center"><Link href="/zh/insights" className="inline-flex items-center rounded-full border border-[#CBD5E1] px-6 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#EDF5FC]">查看全部文章 ↗</Link></div>
</div></section>

<section className="luare-v6-section luare-v6-soft" id="flow">
<div className="luare-v6-container">
<ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow">FLOW</p><h2>从咨询到项目启动</h2></ScrollReveal>
<div className="luare-v6-steps">
{[["01","联系我们","通过咨询表单介绍贵公司的需求。"],["02","首次免费咨询","在线或面谈，了解当前状况和主要课题。"],["03","明确服务与报价","确认工作范围、职责分工、费用及计划。"],["04","签约并开始服务","在双方确认条件后，由专业人员开展支持工作。"]].map(([no,title,desc],index)=><ScrollReveal key={no} delay={index*60}>
<article className="luare-v6-step"><span>{no}</span><h3>{title}</h3><p>{desc}</p></article>
</ScrollReveal>)}
</div></div></section>

<section className="luare-v6-section" id="faq">
<div className="luare-v6-container">
<ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow">FAQ</p><h2>常见问题</h2></ScrollReveal>
<ScrollReveal className="luare-v6-faq">
{faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
</ScrollReveal>
</div></section>

<section className="luare-v6-final" id="contact">
<div className="luare-v6-container"><ScrollReveal>
<p className="luare-v6-eyebrow luare-v6-eyebrow-light">CONTACT</p>
<h2>正在寻找熟悉国际业务的<br/>会计与财务合作伙伴？</h2>
<p>即使尚未明确需要委托哪些业务，也欢迎联系。我们将了解实际情况并协助整理可行的支持方式。</p>
<Link href="/zh/contact" className="luare-v6-primary-cta luare-v6-final-cta">首次免费咨询 <span>→</span></Link>
<small>日本語 / English / 中文</small>
</ScrollReveal></div></section>
<Link href="/zh/contact" className="luare-v6-mobile-cta">首次免费咨询</Link>
</main><FooterZh/></>}
