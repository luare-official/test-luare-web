import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {r5Cases,findR5Case,findR5Quote} from "@/lib/r5Cases";

type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return r5Cases.map(c=>({slug:c.id}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const c=findR5Case((await params).slug);
 return c?{title:c.title+" | 支援事例 | Luare Consulting",description:c.impact,robots:{index:false,follow:false},alternates:{canonical:"https://luare-consulting.com/cases/"+c.id}}:{title:"支援事例が見つかりません"};
}
type Illustration={status:string,challenge:string,left:string,leftDesc:string,right:string,rightDesc:string,support:string[],result:string};
const illustrations:Record<string,Illustration>={
 "case-close":{status:"AS IS",challenge:"複雑な売上データ × 人員制約 × 部門間のタイムラグ",left:"事業部門",leftDesc:"取引・売上データ／締め準備",right:"経理・財務部門",rightDesc:"集計・照合／決算・CF",support:["実務引継ぎ・遂行","データ精度と取得時点","リードタイムと締め日の再検討"],result:"業務負荷を考慮した、正確で早い決算プロセス"},
 "case-music":{status:"CHALLENGE",challenge:"グローバル統制方針と現場運用の整合",left:"グローバル方針",leftDesc:"統制要求・説明責任",right:"国内の業務運用",rightDesc:"手順・責任・証跡",support:["統制上の論点整理","役割と運用手順の整備","証跡・改善の支援"],result:"継続運用できる内部統制プロセス"},
 "case-jsox":{status:"CHALLENGE",challenge:"日本上場要件 × 台湾の現地実務",left:"日本側",leftDesc:"上場・監査要件／J-SOX",right:"台湾現地",rightDesc:"現場業務／言語・商習慣",support:["J-SOXの目的を共有","現地業務を可視化","3点セット構築・評価支援"],result:"現地実務に即した内部統制文書と評価体制"},
 "case-fpa":{status:"CHALLENGE",challenge:"北米現場の実態とHQ経営管理の距離",left:"北米の現場業務",leftDesc:"オペレーション・収益ドライバー",right:"HQ FP&A",rightDesc:"予実分析・経営判断",support:["現地・HQを横断して調整","FP&Aフロー構築","PDCAと現地機能定着"],result:"HQの負荷軽減と北米事業の自律的な経営管理"}
};
function Diagram({id}:{id:string}){
 const d=illustrations[id];if(!d)return null;
 const fpa=id==="case-fpa";
 return <div className="rounded-lg border border-[#CBD5E1] bg-white p-4 sm:p-7">
   <div className="bg-[#0B3158] px-5 py-4 text-white"><p className="text-[11px] font-bold tracking-widest text-white/70">{d.status}</p><p className="mt-1 text-base font-semibold leading-7">{d.challenge}</p></div>
   {fpa ? (
    <div className="my-5 grid items-center gap-2 text-center md:grid-cols-[1fr_35px_1fr_35px_1fr]">
     <div className="border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-6"><strong>{d.left}</strong><p className="mt-2 text-xs leading-6 text-[#475569]">{d.leftDesc}</p></div>
     <span className="text-2xl font-semibold text-[#1766A0]">→</span>
     <div className="border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-6"><strong>データ・KPI</strong><p className="mt-2 text-xs leading-6 text-[#475569]">定義統一・精度向上</p></div>
     <span className="text-2xl font-semibold text-[#1766A0]">→</span>
     <div className="border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-6"><strong>{d.right}</strong><p className="mt-2 text-xs leading-6 text-[#475569]">{d.rightDesc}</p></div>
    </div>
   ) : (
    <div className="my-5 grid items-center gap-3 text-center md:grid-cols-[1fr_70px_1fr]">
     <div className="border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-6"><strong>{d.left}</strong><p className="mt-2 text-xs leading-6 text-[#475569]">{d.leftDesc}</p></div>
     <div className="text-center text-lg font-bold text-[#1766A0]">⇄<p className="text-[10px]">LUARE</p></div>
     <div className="border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-6"><strong>{d.right}</strong><p className="mt-2 text-xs leading-6 text-[#475569]">{d.rightDesc}</p></div>
    </div>
   )}
   <div className="flex flex-wrap items-center gap-2 bg-[#EDF5FC] px-4 py-4"><strong className="mr-3 text-xs">LUARE の支援</strong>{d.support.map(x=><span key={x} className="border border-[#CBD5E1] bg-white px-3 py-2 text-xs leading-5">{x}</span>)}</div>
   <div className="mt-4 bg-[#DFEFF9] px-5 py-4"><span className="text-xs font-bold text-[#1766A0]">TO BE</span><p className="mt-1 font-semibold leading-7">{d.result}</p></div>
 </div>;
}
const yen=(n:number)=>n.toLocaleString("ja-JP")+"円";
export default async function CaseDetail({params}:Props){
 const c=findR5Case((await params).slug); if(!c)notFound();
 const q=findR5Quote(c.price);
 const model=("model" in c&&c.model);
 const hours=q?("hoursTotal" in q?q.hoursTotal:q.hoursMonth*q.months):0;
 return <>
 <Navbar solid/>
 <main className="flex-1 bg-white pt-20 text-[#0B3158]">
  <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]"><div className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16">
   <nav aria-label="パンくずリスト" className="mb-8 flex flex-wrap gap-2 text-xs text-[#475569]"><Link href="/">ホーム</Link><span>/</span><Link href="/cases">支援事例</Link><span>/</span><span aria-current="page">{c.title}</span></nav>
   <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">{model?"SUPPORT MODEL":"CASE STUDIES / "+c.index}</p>
   <h1 className="mt-4 max-w-[900px] text-[clamp(27px,4vw,42px)] font-semibold leading-snug">{c.title}</h1>
   <p className="mt-5 text-[15px] leading-8 text-[#475569]">{c.impact}</p>
   {model&&<p className="mt-4 text-xs font-semibold text-[#1766A0]">顧客の実績ではなく、支援内容を説明するモデルです。</p>}
  </div></header>
  <section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
   <p className="text-xs font-bold tracking-widest text-[#1766A0]">OVERVIEW</p><h2 className="mt-3 text-2xl font-semibold">プロジェクト概要</h2>
   <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_280px]">
    <div><span className="bg-[#EDF5FC] px-3 py-1 text-xs text-[#1766A0]">{c.type}</span><h3 className="mt-4 text-lg font-semibold leading-8">{c.industry}</h3><p className="mt-4 text-sm leading-8 text-[#475569]">{c.intro}</p></div>
    <aside className="border border-[#CBD5E1] bg-[#EDF5FC] p-6"><p className="text-xs text-[#475569]">支援の視点</p><strong className="mt-2 block text-lg">{c.type}</strong><p className="mt-4 text-sm leading-7 text-[#475569]">{c.objective}</p></aside>
   </div>
  </section>
  <section className="bg-[#F5F9FC] py-14 sm:py-20"><div className="mx-auto max-w-[1140px] px-5 sm:px-10">
   <p className="text-xs font-bold tracking-widest text-[#1766A0]">PROJECT APPROACH</p><h2 className="mt-3 mb-7 text-2xl font-semibold">課題から解決まで</h2>
   <Diagram id={c.id}/>
   <h3 className="mt-9 text-base font-semibold">お客様側の課題</h3><ul className="mt-4 grid gap-3 sm:grid-cols-3">{c.clientIssues.map(x=><li key={x} className="border-l-[3px] border-[#9CBDD4] bg-white p-4 text-sm leading-7">{x}</li>)}</ul>
  </div></section>
  <section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
   <p className="text-xs font-bold tracking-widest text-[#1766A0]">OUR SUPPORT</p><h2 className="mt-3 text-2xl font-semibold">Luareの支援</h2>
   <p className="mt-4 max-w-4xl text-sm leading-8 text-[#475569]">{c.intro}</p>
   <ul className="mt-7 grid gap-3 md:grid-cols-2">{c.luareActions.map(x=><li key={x} className="border-l-[3px] border-[#1766A0] bg-[#EDF5FC] p-5 text-sm leading-7">{x}</li>)}</ul>
   {c.outcomes.length>0&&<><h3 className="mt-9 text-base font-semibold">整理した事項・成果物</h3><div className="mt-4 flex flex-wrap gap-3">{c.outcomes.map(x=><span key={x} className="border border-[#CBD5E1] bg-white px-4 py-3 text-sm">{x}</span>)}</div></>}
  </section>
  {q&&<section className="bg-[#EDF5FC] py-14 sm:py-20"><div className="mx-auto max-w-[1140px] px-5 sm:px-10">
   <p className="text-xs font-bold tracking-widest text-[#1766A0]">REFERENCE FEE</p><h2 className="mt-3 mb-7 text-2xl font-semibold">同種業務の費用目安</h2>
   <div className="rounded-lg border border-[#CBD5E1] bg-white p-6 sm:p-9">
    <h3 className="text-lg font-semibold">{q.title}</h3><p className="mt-3 text-sm leading-7 text-[#475569]">{q.scope}</p>
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
     <div className="bg-[#EDF5FC] p-4"><span className="block text-xs text-[#475569]">時間単価（税別）</span><strong className="mt-2 block text-lg">{yen(q.rate)}</strong></div>
     <div className="bg-[#EDF5FC] p-4"><span className="block text-xs text-[#475569]">想定工数</span><strong className="mt-2 block text-lg">{"hoursTotal" in q?q.hoursTotal+"時間／合計":q.hoursMonth+"時間／月"}</strong></div>
     <div className="bg-[#EDF5FC] p-4"><span className="block text-xs text-[#475569]">支援期間</span><strong className="mt-2 block text-lg">{q.months}か月</strong></div>
    </div>
    <p className="mt-7 text-xs text-[#475569]">費用目安（税別）</p><p className="mt-1 text-3xl font-semibold">{yen(q.rate*hours)}<span className="ml-2 text-sm text-[#475569]">／{q.months}か月</span></p>
    <p className="mt-3 text-xs leading-6 text-[#475569]">対象範囲、実施体制、必要工数に応じて個別にお見積りします。</p>
   </div>
  </div></section>}
  <section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10"><p className="text-xs font-bold tracking-widest text-[#1766A0]">RELATED SERVICES</p><h2 className="mt-3 text-2xl font-semibold">関連するサービス</h2>
   <div className="mt-6 flex flex-wrap gap-3">{[["/services","サービス一覧"],["/pricing","料金の目安"],["/contact","お問い合わせ"],["/cases","支援事例一覧に戻る"]].map(([href,title])=><Link key={href} href={href} className="rounded border border-[#CBD5E1] px-5 py-3 text-sm hover:bg-[#EDF5FC]">{title} ↗</Link>)}</div>
  </section>
 </main><Footer/>
 </>;
}