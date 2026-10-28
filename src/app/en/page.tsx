import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FooterEn from "@/components/en/FooterEn";
import InteractiveServiceGalleryEn from "@/components/en/InteractiveServiceGalleryEn";
import { enCases, enInsights } from "@/lib/enSite";
import { r5Cases } from "@/lib/r5Cases";

export const metadata:Metadata={
 title:"Luare Consulting | Cross-Border Accounting & Finance Advisory in Japan",
 description:"Accounting, J-SOX, financial reporting, process improvement, Japan market entry and audit coordination for global companies. Japanese, English and Chinese support.",
 alternates:{canonical:"https://luare-consulting.com/en"}
};
const who=[
"Foreign-owned companies operating in Japan",
"Japanese subsidiaries with overseas parent companies",
"Japanese businesses expanding internationally",
"Organizations adopting IFRS or US GAAP",
"Teams reporting to headquarters in English or Chinese",
"Companies coordinating accounting, tax and audit support"
];
const why=[
["01","Specialists in international accounting","Support for IFRS, US GAAP, internal controls and cross-border finance."],
["02","Big Four, multinational and in-house finance experience","Practical recommendations informed by both advisory and corporate finance operations."],
["03","Direct communication with overseas headquarters","Work in Japanese, English and Chinese on complex accounting and financial matters."],
["04","Coordinated accounting, audit, tax and finance support","Address business issues that span multiple professional disciplines."],
["05","Specialist expertise with transparent scoping","We clarify your needs and provide an individual quotation before engagement."]
];
const faq=[
["Is the initial consultation free?","Yes. An initial consultation of around one hour is normally complimentary. We discuss your needs and provide a proposal."],
["Can we engage Luare if we already have a Japanese tax adviser?","Yes. We can help with a specific international accounting or finance issue while coordinating with your existing adviser."],
["Can you communicate directly with overseas headquarters?","Yes. Our team communicates in Japanese, English and Chinese, including technical accounting and audit matters."],
["Do you support smaller Japan subsidiaries?","Yes. We tailor the scope of support to the size and needs of your company."],
["Can we request a one-off engagement?","Yes. You can inquire about a specific project such as J-SOX, IFRS reporting, due diligence or valuation."],
["Can you provide an estimate before we commit?","Yes. The initial consultation and quotation are generally free."]
];
export default function HomeEn(){
 return <>
 <Navbar heroStyle/>
 <main className="flex-1 luare-home luare-home-v6" lang="en">
 <section className="luare-unicell-hero" aria-label="Luare Consulting English homepage">
  <div className="luare-unicell-stage">
   <div className="luare-unicell-white-shape"/>
   <div className="luare-unicell-talk-photo"><img src="/images/luare-hero-consulting-male-20261025.webp" alt=""/></div>
   <div className="luare-unicell-hero-copy luare-en-hero-copy">
    <h1><span>Making accounting and finance</span><span>simpler for global<br className="luare-unicell-mobile-break"/> businesses in Japan.</span></h1>
    <p>We stand by your finance.</p>
   </div>
  </div>
 </section>
 <section className="luare-v6-section luare-who-band" id="who-we-help">
  <div className="luare-v6-container">
   <ScrollReveal className="luare-who-band-inner">
    <div className="luare-who-band-head"><p className="luare-v6-eyebrow">WHO WE HELP</p><h2>Supporting companies<br/>like yours.</h2></div>
    <ul className="luare-who-band-list">{who.map(x=><li key={x}>{x}</li>)}</ul>
   </ScrollReveal>
  </div>
 </section>
 <section className="luare-v6-section luare-services-photo" id="services">
  <div className="luare-v6-container">
   <ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow">SERVICES</p><h2>Integrated accounting and finance<br/>for global businesses.</h2></ScrollReveal>
   <InteractiveServiceGalleryEn/>
   <ScrollReveal><Link href="/en/contact" className="luare-v6-primary-cta luare-v6-section-cta">Discuss your needs <span>→</span></Link></ScrollReveal>
  </div>
 </section>
 <section className="luare-v6-section luare-v6-why" id="why-luare">
  <div className="luare-v6-container">
   <ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow luare-v6-eyebrow-light">WHY LUARE</p><h2>Why Luare Consulting?</h2></ScrollReveal>
   <div className="luare-v6-why-list">{why.map(([no,title,desc],i)=><ScrollReveal key={no} delay={i*40}>
    <article className="luare-v6-why-row"><span>{no}</span><h3>{title}</h3><p>{desc}</p></article>
   </ScrollReveal>)}</div>
  </div>
 </section>
 <section className="luare-v6-section luare-v6-soft" id="case-studies">
  <div className="luare-v6-container">
   <ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow">CASE STUDIES</p><h2>Selected engagements</h2></ScrollReveal>
   <div className="luare-v6-cases">
    {r5Cases.filter(c=>c.id!=="case-fpa").map((c,i)=>{const x=enCases[c.id];return <ScrollReveal key={c.id} delay={i*55}>
     <article className="luare-v6-case">
      <div className="luare-v6-case-label">CASE {c.index} | {x.type}</div>
      <div><h3>{x.title}</h3><p><strong>Our support</strong><br/>{x.actions.join("; ")}</p>
       <Link href={"/en/cases/"+c.id} className="mt-4 inline-block border-b border-current pb-1 text-sm font-semibold text-[#0B3158] hover:opacity-70">Read case study ↗</Link>
      </div>
      <div><p><strong>The challenge</strong><br/>{x.issues.join("; ")}</p><span>{x.type}</span></div>
     </article>
    </ScrollReveal>})}
   </div>
   <p className="luare-v6-note">FP&amp;A is presented as an illustrative service model, not a completed client engagement.</p>
   <div className="mt-8 text-center"><Link href="/en/cases" className="inline-flex items-center justify-center border border-[#0B3158] px-7 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#0B3158] hover:text-white">Explore case studies <span className="ml-3">→</span></Link></div>
  </div>
 </section>
 <section className="luare-v6-section" id="home-articles">
  <div className="luare-v6-container">
   <ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow">INSIGHTS</p><h2>Insights &amp; articles</h2><p className="mt-3 text-sm leading-8 text-[#475569]">Perspectives on accounting, internal control and finance operations in Japan.</p></ScrollReveal>
   <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
    {enInsights.map((article,i)=><ScrollReveal key={article.slug} delay={i*50}>
     <Link href={"/en/insights/"+article.slug} className="group block h-full rounded-md border border-[#CBD5E1] bg-white p-6 shadow-[0_8px_25px_rgba(21,61,79,.035)] transition-colors hover:bg-[#EDF5FC]">
      <span className="text-xs font-semibold text-[#1766A0]">{article.category}</span><h3 className="mt-4 text-lg font-semibold leading-8 text-[#0B3158]">{article.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#475569]">{article.excerpt}</p><span className="mt-6 inline-flex text-sm font-semibold text-[#0B3158] group-hover:underline">Read article ↗</span>
     </Link>
    </ScrollReveal>)}
   </div>
   <p className="mt-6 text-xs leading-6 text-[#475569]">Some articles are subject to further professional review and may be updated.</p>
   <div className="mt-7 text-center"><Link href="/en/insights" className="inline-flex items-center rounded-full border border-[#CBD5E1] px-6 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#EDF5FC]">All articles ↗</Link></div>
  </div>
 </section>
 <section className="luare-v6-section luare-v6-soft" id="flow">
  <div className="luare-v6-container"><ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow">FLOW</p><h2>From inquiry to engagement</h2></ScrollReveal>
   <div className="luare-v6-steps">{[
    ["01","Get in touch","Tell us about your requirements through our inquiry form."],
    ["02","Initial consultation","Discuss your situation and priorities online or in person."],
    ["03","Scope & proposal","Agree on the work scope, roles, fees and timeline."],
    ["04","Engagement begins","After agreement, our specialists begin supporting your team."]
   ].map(([no,title,desc],i)=><ScrollReveal key={no} delay={i*60}><article className="luare-v6-step"><span>{no}</span><h3>{title}</h3><p>{desc}</p></article></ScrollReveal>)}</div>
  </div>
 </section>
 <section className="luare-v6-section" id="faq">
  <div className="luare-v6-container">
   <ScrollReveal className="luare-v6-section-head"><p className="luare-v6-eyebrow">FAQ</p><h2>Frequently asked questions</h2></ScrollReveal>
   <ScrollReveal className="luare-v6-faq">{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</ScrollReveal>
  </div>
 </section>
 <section className="luare-v6-final" id="contact">
  <div className="luare-v6-container"><ScrollReveal>
   <p className="luare-v6-eyebrow luare-v6-eyebrow-light">CONTACT</p><h2>Looking for a cross-border<br/>accounting and finance partner?</h2>
   <p>Even if you have not yet defined the scope, we can help identify practical next steps.</p>
   <Link href="/en/contact" className="luare-v6-primary-cta luare-v6-final-cta">Request a free consultation <span>→</span></Link>
   <small>Japanese / English / Chinese</small>
  </ScrollReveal></div>
 </section>
 <Link href="/en/contact" className="luare-v6-mobile-cta">Free consultation</Link>
 </main>
 <FooterEn/>
 </>;
}
