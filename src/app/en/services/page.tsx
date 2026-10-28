import type {Metadata} from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import {enServices} from "@/lib/enSite";
export const metadata:Metadata={title:"Professional Services | Luare Consulting",description:"Five service areas: internal control, accounting and closing, process improvement, Japan market entry, and audit coordination.",alternates:{canonical:"https://luare-consulting.com/en/services"}};
export default function ServicesEn(){return <>
<Navbar solid/>
<main className="flex-1 bg-white pt-20" lang="en">
<section className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
<div className="mx-auto max-w-[1140px] px-5 pb-11 pt-9 sm:px-10 sm:pb-14 sm:pt-12">
<nav aria-label="Breadcrumb" className="mb-9 flex gap-3 text-xs text-[#475569]"><Link href="/en">Home</Link><span>/</span><span>Services</span></nav>
<p className="mb-3 text-[11px] font-semibold tracking-[.22em] text-[#1766A0]">OUR SERVICES</p>
<h1 className="text-[clamp(32px,4.5vw,48px)] font-semibold leading-tight text-[#0B3158]">Professional Services</h1>
<p className="mt-5 max-w-3xl text-[14px] leading-8 text-[#475569] sm:text-base">Internal control, accounting, financial management, process improvement, Japan market entry and audit coordination. Choose the services that match your needs.</p>
</div></section>
<section className="mx-auto max-w-[1140px] px-5 pb-20 pt-10 sm:px-10 sm:pb-24 sm:pt-12">
<div className="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-2"><h2 className="text-[22px] font-bold tracking-tight text-[#0B3158]">Explore service areas</h2><p className="text-xs leading-6 text-[#475569]">Select a category to view the support scope.</p></div>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
{enServices.map((svc,i)=><Link key={svc.slug} href={"/en/services/"+svc.slug} className="group flex min-h-[126px] flex-col justify-between gap-4 rounded-xl border border-[#CBD5E1] bg-white p-6 transition-colors hover:border-[#1766A0] hover:bg-[#EDF5FC]">
<div><p className="text-xs font-extrabold tracking-widest text-[#1766A0]">{String(i+1).padStart(2,"0")}</p><h3 className="mt-2 text-xl font-semibold leading-8 text-[#0B3158]">{svc.title}</h3><p className="mt-3 text-sm leading-7 text-[#475569]">{svc.lead}</p></div><span className="text-sm font-semibold text-[#1766A0]">View details ↗</span></Link>)}
</div>
<div className="mt-9 border-t border-[#CBD5E1] pt-6"><p className="mb-3 text-xs font-semibold tracking-wide text-[#475569]">Additional advisory</p><Link href="/en/services/ma-finance" className="text-sm font-semibold text-[#0B3158] hover:underline">M&amp;A and financial advisory ↗</Link></div>
</section>
<section className="border-t border-[#CBD5E1] bg-[#EDF5FC]"><div className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10"><p className="text-xs font-semibold text-[#1766A0]">CONTACT</p><h2 className="mt-3 text-2xl font-semibold text-[#0B3158]">Tell us about your priorities.</h2><p className="mt-4 text-sm leading-8 text-[#475569]">We will propose an appropriate scope after learning about your current finance operations.</p><Link href="/en/contact" className="mt-7 inline-flex rounded-full bg-[#1766A0] px-8 py-4 text-sm font-semibold text-white hover:bg-[#0B3158]">Contact us ↗</Link></div></section>
</main><FooterEn/></>}