import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import {enInsights} from "@/lib/enSite";
type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return enInsights.map(x=>({slug:x.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const slug=(await params).slug;const x=enInsights.find(a=>a.slug===slug);return x?{title:x.title+" | Luare Consulting",description:x.excerpt,robots:{index:false,follow:true},alternates:{canonical:"https://luare-consulting.com/en/insights/"+slug}}:{title:"Article not found"};}
export default async function ArticleEn({params}:Props){const slug=(await params).slug;const x=enInsights.find(a=>a.slug===slug);if(!x)notFound();return <><Navbar solid/><main lang="en" className="flex-1 bg-white pt-20">
<article className="mx-auto max-w-[860px] px-5 py-14 sm:px-10 sm:py-20">
<nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap gap-2 text-xs text-[#475569]"><Link href="/en">Home</Link><span>/</span><Link href="/en/insights">Insights</Link><span>/</span><span>{x.category}</span></nav>
<p className="text-xs font-semibold tracking-widest text-[#1766A0]">{x.category.toUpperCase()}</p><h1 className="mt-4 text-[clamp(28px,4.3vw,43px)] font-semibold leading-tight text-[#0B3158]">{x.title}</h1><div className="mt-9 border-t border-[#CBD5E1] pt-8"><h2 className="text-xl font-semibold text-[#0B3158]">Overview</h2><p className="mt-4 text-base leading-9 text-[#475569]">{x.excerpt}</p><p className="mt-7 text-sm leading-8 text-[#475569]">This English summary introduces the topic covered in our Japanese-language article. The complete text is currently available in Japanese.</p><Link href={"/insights/"+x.slug} className="mt-7 inline-flex rounded-full border border-[#1766A0] px-6 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#EDF5FC]">Read the full article (Japanese) ↗</Link></div>
<div className="mt-12 border-t border-[#CBD5E1] pt-8"><Link href="/en/insights" className="text-sm font-semibold text-[#1766A0] hover:underline">← All insights</Link></div>
</article></main><FooterEn/></>}