"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceCategories, serviceItems } from "@/lib/serviceCatalog";

type Audience = "all" | "japanese" | "international";
type Variant = { title: string; lead: string };
const variants: Record<Exclude<Audience,"all">, Record<string,Variant>> = {
  japanese: {
    "01": {title:"内部統制・J-SOX・内部監査",lead:"国内外の拠点を対象とした内部統制の構築・評価・改善を支援。"},
    "02": {title:"決算・FP&A・経営管理支援",lead:"決算高度化から予実・事業KPI分析まで、国内外の経営管理を支援。"},
    "03": {title:"決算早期化・業務改善・AI活用",lead:"現場業務に踏み込み、工程と管理プロセスを見直す。"},
    "04": {title:"海外拠点・グループ経営管理",lead:"海外子会社の経理・報告・内部統制と本社連携を支援。"},
  },
  international: {
    "04": {title:"日本進出・Finance Setup",lead:"設立準備から会計基盤の構築・日本法人の運営体制まで。"},
    "02": {title:"日本法人の経理・決算運営",lead:"記帳・月次決算・海外本社向けレポーティングを支援。"},
    "01": {title:"日本法人の内部統制・本社基準対応",lead:"日本の業務実態とグループの統制方針をつなぐ。"},
  },
};

const selectors: readonly {id:Audience; label:string}[] = [
  {id:"all",label:"すべて"},
  {id:"japanese",label:"日系企業・海外子会社"},
  {id:"international",label:"外資系企業・日本法人"},
];

export default function ServiceDirectory() {
  const [audience, setAudience] = useState<Audience>("all");
  const order = audience==="international" ? ["04","02","01"] : ["01","02","03","04"];
  const groups=order.flatMap(number=>{
    const group=serviceCategories.find(x=>x.number===number);
    if(!group)return [];
    const variant=audience==="all" ? undefined : variants[audience][number];
    return variant||audience==="all" ? [{...group,title:variant?.title??group.title,lead:variant?.lead??group.lead}] : [];
  });

  return (
    <section className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16" aria-label="サービスを探す">
      <div className="flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="企業区分でサービスを絞り込む">
        {selectors.map(option=>(
          <button
            key={option.id}
            type="button"
            aria-pressed={audience===option.id}
            onClick={()=>setAudience(option.id)}
            className={"rounded-md border px-4 py-3 text-[13px] font-semibold transition-colors sm:px-6 sm:text-sm "+(audience===option.id?"border-[#1d637d] bg-[#1d637d] text-white":"border-[#c6d9e1] bg-white text-[#1a5069] hover:bg-[#eef6f8]")}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p className="mb-8 mt-5 text-sm leading-7 text-[#627c8b]">
        {audience==="all"?"サービス領域を一覧でご覧いただけます。":audience==="japanese"?"日系企業と海外子会社の課題に合うサービスをご案内します。":"外資系企業・日本法人の課題に合うサービスをご案内します。"}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map(group=>(
          <a href={`#category-${group.number}`} key={group.number}
            className="group block rounded-lg border border-[#dae6ea] bg-white px-6 py-7 shadow-[0_6px_22px_rgba(23,63,81,.035)] transition-colors hover:border-[#87b3bf] hover:bg-[#f7fafb] sm:px-7 sm:py-8">
            <span className="text-sm font-semibold tracking-[.1em] text-[#21809c]">{group.number}</span>
            <h2 className="mt-3 text-xl font-semibold leading-8 text-[#163b51] sm:text-2xl">{group.title}</h2>
            <p className="mt-3 min-h-[2.8rem] text-sm leading-7 text-[#657e8a]">{group.lead}</p>
            <span className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#176783]">
              支援内容を見る <span aria-hidden="true">→</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-16 space-y-14 sm:mt-20 sm:space-y-16">
        {groups.map(group=>(
          <section key={group.number} id={`category-${group.number}`} className="scroll-mt-28 border-t border-[#d1dfe4] pt-7 sm:pt-9" aria-labelledby={`category-title-${group.number}`}>
            <div className="grid gap-3 sm:grid-cols-[76px_1fr] sm:gap-7">
              <span className="pt-1 text-sm font-semibold tracking-widest text-[#6a929f]">{group.number}</span>
              <div>
                <h2 id={`category-title-${group.number}`} className="text-[clamp(22px,3vw,31px)] font-semibold leading-snug text-[#23485c]">{group.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#637b87]">{group.lead}</p>
                <div className="mt-7">
                  {group.itemIds.map(id=>{
                    const item=serviceItems.find(x=>x.id===id);
                    if(!item)return null;
                    return <Link key={item.id} href={item.href} className="group flex items-start justify-between gap-5 border-b border-[#e2e9eb] py-5 hover:bg-[#f7fafb]">
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#23485c] sm:text-[17px]">{item.name}</h3>
                        <p className="mt-2 text-[13px] leading-7 text-[#66808e]">{item.description}</p>
                      </div>
                      <span aria-hidden="true" className="pt-1 text-xl text-[#608998] transition-transform group-hover:translate-x-1">↗</span>
                    </Link>;
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <div id="category-05" className="scroll-mt-28 mt-16 rounded-xl border border-[#dce7e9] bg-[#f5f9fa] p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-[#23485c]">関連する専門サービス</h2>
        <p className="mt-2 text-sm leading-7 text-[#667e8b]">上記4つの基本分類とは別に、個別のご相談を承るサービスです。</p>
        <div className="mt-5 flex flex-wrap gap-3 text-[13px] font-semibold text-[#22687e]">
          <Link className="rounded-full border border-[#c9dfe5] bg-white px-4 py-2.5 hover:bg-[#e9f5f7]" href="/services/audit-assurance#statutory-audit">会計監査（法定・任意）・監査法人連携 ↗</Link>
          <Link className="rounded-full border border-[#c9dfe5] bg-white px-4 py-2.5 hover:bg-[#e9f5f7]" href="/services/audit-assurance#group-audit">Group Audit・海外監査人対応 ↗</Link>
          <Link className="rounded-full border border-[#c9dfe5] bg-white px-4 py-2.5 hover:bg-[#e9f5f7]" href="/bpo">Luare BPO ↗</Link>
          <Link className="rounded-full border border-[#c9dfe5] bg-white px-4 py-2.5 hover:bg-[#e9f5f7]" href="/services/ma-finance#fdd">財務デューデリジェンス ↗</Link>
          <Link className="rounded-full border border-[#c9dfe5] bg-white px-4 py-2.5 hover:bg-[#e9f5f7]" href="/services/ma-finance#valuation">企業価値・株価算定 ↗</Link>
          <Link className="rounded-full border border-[#c9dfe5] bg-white px-4 py-2.5 hover:bg-[#e9f5f7]" href="/services/ma-finance#pmi">PMI・統合後の管理体制 ↗</Link>
        </div>
      </div>
    </section>
  );
}
