"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname,useRouter} from "next/navigation";
import {enInsights} from "@/lib/enSite";

interface NavbarProps {
  theme?: "light" | "dark";
  solid?: boolean;
  overlay?: boolean;
  heroStyle?: boolean;
}

type Language = "JP" | "EN" | "ZH";

export default function Navbar(_props:NavbarProps) {
  const pathname=usePathname() || "/";
  const router=useRouter();
  const lang:Language=pathname.startsWith("/en") ? "EN" : pathname.startsWith("/zh") ? "ZH" : "JP";
  const prefix=lang==="JP" ? "" : lang==="EN" ? "/en" : "/zh";
  const [mobileOpen,setMobileOpen]=useState(false);

  useEffect(()=>{
    document.documentElement.lang=lang==="EN"?"en":lang==="ZH"?"zh-CN":"ja";
  },[lang]);
  useEffect(()=>setMobileOpen(false),[pathname]);

  const translate=(target:Language)=>{
    let route=pathname.replace(/^\/(en|zh)(?=\/|$)/,"") || "/";
    if(target==="JP") return route==="/services/internal-control" ? "/services/internal-control/overview" : route;
    if(target==="EN" && route.startsWith("/insights/")){
      const slug=route.slice("/insights/".length);
      return enInsights.some(x=>x.slug===slug) ? "/en"+route : "/en/insights";
    }
    if(route==="/services/internal-control/overview") route="/services/internal-control";
    const available=route==="/" || ["/services","/cases","/pricing","/about","/contact","/insights"].some(x=>route===x||route.startsWith(x+"/"));
    return available ? "/"+target.toLowerCase()+(route==="/"?"":route) : "/"+target.toLowerCase();
  };

  const labels=lang==="JP"
    ? [["ホーム","/"],["サービス","/services"],["支援事例","/cases"],["ブログ","/insights"],["料金","/pricing"],["代表プロフィール","/about"]]
    :lang==="EN"
    ? [["Home","/en"],["Services","/en/services"],["Case studies","/en/cases"],["Insights","/en/insights"],["Pricing","/en/pricing"],["About","/en/about"]]
    : [["首页","/zh"],["服务","/zh/services"],["支持案例","/zh/cases"],["文章","/zh/insights"],["费用","/zh/pricing"],["代表简介","/zh/about"]];
  const contact=prefix+"/contact";
  const cta=lang==="EN"?"Free consultation":lang==="ZH"?"免费在线咨询":"無料オンライン相談";
  const selected=(href:string)=>pathname===href;

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#DCE7EF] bg-white/95 shadow-[0_8px_24px_rgba(11,49,88,0.055)] backdrop-blur-md">
    <div className="luare-mobile-nav-inner mx-auto flex h-[78px] max-w-[1440px] items-center gap-3 px-4 sm:px-6 xl:gap-4 2xl:px-8">
      <Link href={prefix||"/"} className="luare-mobile-brand mr-auto w-[182px] shrink-0 text-[#0B3158] xl:mr-0 2xl:w-[196px]" aria-label="Luare Consulting">
        <span className="luare-mobile-brand-name block whitespace-nowrap text-[15px] font-semibold tracking-[.02em] sm:text-[17px]">Luare Consulting</span>
        <span className="luare-mobile-brand-caption mt-1 block text-[8px] font-medium tracking-[.17em] text-[#516982]">ACCOUNTING &amp; FINANCE</span>
      </Link>
      <nav className="ml-auto hidden min-w-0 items-center justify-end gap-5 xl:flex 2xl:gap-6" aria-label={lang==="JP"?"メインメニュー":lang==="EN"?"Main navigation":"主导航"}>
        {labels.map(([label,href])=><Link key={href} href={href} aria-current={selected(href)?"page":undefined}
          className="flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap py-3 text-[12px] font-semibold text-[#0B3158] hover:text-[#1766A0] focus-visible:underline 2xl:text-[13px]">{label}</Link>)}
      </nav>
      <nav className="hidden w-[138px] shrink-0 items-center justify-center gap-1 border-l border-[#E0E8EF] pl-2 lg:flex" aria-label="Language">
        {(["JP","EN","ZH"] as Language[]).map(x=><Link key={x} href={translate(x)} lang={x==="JP"?"ja":x==="EN"?"en":"zh-CN"}
          aria-current={lang===x?"page":undefined}
          className={"rounded px-2 py-2 text-xs font-semibold transition-colors hover:bg-[#EDF5FC] "+(lang===x?"bg-[#EDF5FC] text-[#1766A0]":"text-[#52677D]")}>{x}</Link>)}
      </nav>
      <Link href={contact} className="hidden min-h-11 w-[164px] shrink-0 items-center justify-center rounded-full bg-[#1766A0] px-2 py-3 text-center text-[11px] font-semibold text-white transition-colors hover:bg-[#0B3158] xl:inline-flex">{cta}</Link>
      {/* Smartphone-only language selector; the globe belongs to the closed control, not to its options. */}
      <div className="luare-mobile-language-picker">
        <svg className="luare-mobile-lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 2.5 4.5 5.5 4.5 9S15 18.5 12 21M12 3c-3 2.5-4.5 5.5-4.5 9S9 18.5 12 21" />
        </svg>
        <select aria-label={lang==="JP"?"表示言語を選択":lang==="EN"?"Select language":"选择语言"}
          value={lang} onChange={e=>router.push(translate(e.target.value as Language))}>
          <option value="JP">JP</option>
          <option value="EN">EN</option>
          <option value="ZH">中文</option>
        </select>
        <svg className="luare-mobile-lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <button type="button" className="luare-mobile-menu-trigger ml-auto rounded-lg border border-[#CBD5E1] px-4 py-2 text-xs font-semibold text-[#0B3158] xl:hidden"
        onClick={()=>setMobileOpen(x=>!x)} aria-expanded={mobileOpen} aria-controls="luare-mobile-menu" aria-label={lang==="JP"?"メニューを開く":lang==="EN"?"Open menu":"打开菜单"}>
        {mobileOpen?"✕":"☰"} <span>{lang==="JP"?"メニュー":lang==="EN"?"Menu":"菜单"}</span>
      </button>
    </div>
    {mobileOpen&&<nav id="luare-mobile-menu" className="border-t border-[#DCE7EF] bg-white px-5 pb-5 shadow-lg xl:hidden" aria-label="Mobile navigation">
      <div className="grid grid-cols-2 gap-x-4">
        {labels.map(([label,href])=><Link key={href} href={href} onClick={()=>setMobileOpen(false)} className="border-b border-[#E9EFF4] py-3 text-sm font-semibold text-[#0B3158]">{label}</Link>)}
      </div>
      <div className="luare-mobile-menu-extra mt-4 flex items-center justify-between gap-3">
        <div className="flex gap-2">{(["JP","EN","ZH"] as Language[]).map(x=><Link key={x} href={translate(x)} className={"rounded-md border px-3 py-2 text-xs "+(x===lang?"border-[#1766A0] bg-[#EDF5FC] font-bold":"border-[#CBD5E1]")}>{x}</Link>)}</div>
        <Link href={contact} onClick={()=>setMobileOpen(false)} className="rounded-full bg-[#1766A0] px-4 py-2 text-xs font-semibold text-white">{cta}</Link>
      </div>
    </nav>}
  </header>;
}
