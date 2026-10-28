import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import {enServices} from "@/lib/enSite";
type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return enServices.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const slug=(await params).slug;const svc=enServices.find(s=>s.slug===slug);return svc?{title:svc.title+" | Luare Consulting",description:svc.lead,alternates:{canonical:"https://luare-consulting.com/en/services/"+slug}}:{title:"Service not found"};}
export default async function ServiceDetailEn({params}:Props){const slug=(await params).slug;const svc=enServices.find(s=>s.slug===slug);if(!svc)notFound();
return <><Navbar solid/><main className="flex-1 bg-white pt-20" lang="en">
<section className="border-b border-[#CBD5E1] bg-[#EDF5FC]"><div className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16">
<nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-xs text-[#475569]"><Link href="/en">Home</Link><span>/</span><Link href="/en/services">Services</Link><span>/</span><span>{svc.title}</span></nav>
<p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">SERVICES</p><h1 className="mt-4 max-w-4xl text-[clamp(28px,4vw,43px)] font-semibold leading-tight text-[#0B3158]">{svc.title}</h1><p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">{svc.lead}</p>
</div></section>
<section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
<h2 className="mb-8 text-2xl font-semibold text-[#0B3158]">How we can help</h2>
<div className="grid gap-5 md:grid-cols-2">{svc.items.map(([title,description],i)=><article key={title} id={"scope-"+(i+1)} className="scroll-mt-28 rounded-lg border border-[#CBD5E1] bg-white p-7"><span className="text-xs font-bold tracking-widest text-[#1766A0]">{String(i+1).padStart(2,"0")}</span><h3 className="mt-3 text-lg font-semibold leading-8 text-[#0B3158]">{title}</h3><p className="mt-3 text-sm leading-8 text-[#475569]">{description}</p></article>)}</div>
</section>
<section className="bg-[#EDF5FC] px-5 py-16 text-center"><h2 className="text-2xl font-semibold text-[#0B3158]">Let's discuss your requirements.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#475569]">Our support is tailored to your business, project scope and timeline.</p><Link href="/en/contact" className="mt-7 inline-flex rounded-full bg-[#1766A0] px-8 py-4 text-sm font-semibold text-white hover:bg-[#0B3158]">Request a free consultation ↗</Link></section>
</main><FooterEn/></>}