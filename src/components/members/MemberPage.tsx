import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterEn from "@/components/en/FooterEn";
import FooterZh from "@/components/zh/FooterZh";
import ExpertCollection, { type Lang } from "./ExpertCollection";

const copy = {
 ja:{home:"ホーム", title:"専門家紹介"},
 en:{home:"Home",title:"Our Experts"},
 zh:{home:"首页",title:"专家介绍"}
};

export default function MemberPage({lang}:{lang:Lang}) {
 const c=copy[lang];
 const prefix=lang==="ja"?"":lang==="en"?"/en":"/zh";
 return <>
  <Navbar solid/>
  <main lang={lang==="zh"?"zh-CN":lang} className="min-h-screen flex-1 bg-white pt-[78px]">
   <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
    <div className="mx-auto max-w-[1140px] px-5 pb-10 pt-9 sm:px-10 sm:pb-14 sm:pt-12">
     <nav aria-label={lang==="ja"?"パンくずリスト":"Breadcrumb"} className="mb-8 flex gap-3 text-xs text-[#475569]">
      <Link href={prefix||"/"} className="hover:text-[#0B3158] hover:underline">{c.home}</Link>
      <span aria-hidden="true">/</span><span aria-current="page">{c.title}</span>
     </nav>
     <p className="mb-3 text-[11px] font-semibold tracking-[.2em] text-[#1766A0]">EXPERTS</p>
     <h1 className="text-[clamp(32px,4.5vw,48px)] font-semibold leading-tight text-[#0B3158]">{c.title}</h1>
    </div>
   </header>
   <ExpertCollection lang={lang}/>
  </main>
  {lang==="en"?<FooterEn/>:lang==="zh"?<FooterZh/>:<Footer/>}
 </>;
}
