import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {serviceCategories,findServiceItem} from "@/lib/serviceCatalog";
import {r5Cases} from "@/lib/r5Cases";

type Kind="finance"|"transform"|"global";
const indices:Record<Kind,number>={finance:1,transform:2,global:3};
const caseIds:Record<Kind,readonly string[]>={
 finance:["case-close","case-fpa"],
 transform:["case-close","case-fpa"],
 global:["case-jsox","case-fpa"]
};
export default function R5ServiceDetail({kind}:{kind:Kind}){
 const category=serviceCategories[indices[kind]];
 const content=category.itemIds.map(id=>findServiceItem(id)).filter((x):x is NonNullable<typeof x>=>!!x);
 const related=caseIds[kind].map(id=>r5Cases.find(c=>c.id===id)).filter((c):c is NonNullable<typeof c>=>!!c);
 return <>
  <Navbar solid/>
  <main className="flex-1 bg-white pt-20 text-[#0B3158]" lang="ja">
   <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
    <div className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16">
     <nav aria-label="パンくずリスト" className="mb-7 flex flex-wrap gap-2 text-xs text-[#475569]">
      <Link href="/" className="hover:underline">ホーム</Link><span>／</span>
      <Link href="/services" className="hover:underline">サービス</Link><span>／</span>
      <span aria-current="page">{category.title}</span>
     </nav>
     <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">SERVICE / {category.number}</p>
     <h1 className="mt-4 text-[clamp(28px,4.6vw,46px)] font-semibold leading-snug">{category.title}</h1>
     <p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">{category.lead}</p>
    </div>
   </header>
   <section id="service-menu" className="mx-auto max-w-[1140px] scroll-mt-28 px-5 py-12 sm:px-10">
    <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">SCOPE</p>
    <h2 className="mt-3 text-2xl font-semibold">主な支援内容</h2>
    <span id="service-details" className="block scroll-mt-28" aria-hidden="true"/>
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
     {content.map(item=><article key={item.id} id={item.id} className="scroll-mt-28 rounded-lg border border-[#CBD5E1] bg-white p-6">
      <h3 className="text-lg font-semibold leading-8 text-[#0B3158]">{item.name}</h3>
      <p className="mt-3 text-sm leading-8 text-[#475569]">{item.description}</p>
     </article>)}
    </div>
   </section>
   <section id="service-next" className="scroll-mt-28 bg-[#EDF5FC] py-12 sm:py-14">
    <div className="mx-auto max-w-[1140px] px-5 sm:px-10">
     <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">RELATED INFORMATION</p>
     <h2 className="mt-3 text-2xl font-semibold">関連情報</h2>
     <div className="mt-7 flex flex-wrap gap-3">
      {related.map(c=><Link key={c.id} href={"/cases/"+c.id} className="rounded-md border border-[#9CBDD4] bg-white px-5 py-3 text-sm font-semibold hover:bg-[#E5F1FA]">{c.title} ↗</Link>)}
      <Link href="/pricing" className="rounded-md border border-[#9CBDD4] bg-white px-5 py-3 text-sm font-semibold hover:bg-[#E5F1FA]">料金の目安 ↗</Link>
      <Link href="/contact" className="rounded-md border border-[#9CBDD4] bg-white px-5 py-3 text-sm font-semibold hover:bg-[#E5F1FA]">ご相談 ↗</Link>
     </div>
    </div>
   </section>
  </main><Footer/>
 </>;
}
