import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/components/cases/R5CaseLayout.module.css";
import {r5Cases,findR5Case,findR5Quote} from "@/lib/r5Cases";

type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return r5Cases.map(c=>({slug:c.id}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const c=findR5Case((await params).slug);
 return c?{title:c.title+" | 支援事例 | Luare Consulting",description:c.impact,
 alternates:{canonical:"https://luare-consulting.com/cases/"+c.id}}:{title:"支援事例が見つかりません"};
}

// Layout order, caption copy, diagram values and quote positions from
// Luare_HP_Public_Preview_r5.html: casePage(), caseDiagram(), quoteComponent().
const diagrams={
 "case-close":{
  label:"AS IS",challenge:"複雑な売上データ × 人員制約 × 部門間のタイムラグ",
  left:"事業部門",leftDetail:"取引・売上データ／締め準備",between:"業務調整・改善",
  right:"経理・財務部門",rightDetail:"集計・照合／決算・CF",
  actions:["実務引継ぎ・遂行","データ精度と取得時点","リードタイムと締め日の再検討"],
  toBe:"業務負荷を考慮した、正確で早い決算プロセス",
 },
 "case-music":{
  label:"CHALLENGE",challenge:"グローバル統制方針と現場運用の整合",
  left:"グローバル方針",leftDetail:"統制要求・説明責任",between:"実務支援",
  right:"国内の業務運用",rightDetail:"手順・責任・証跡",
  actions:["統制上の論点整理","役割と運用手順の整備","証跡・改善の支援"],
  toBe:"継続運用できる内部統制プロセス",
 },
 "case-jsox":{
  label:"CHALLENGE",challenge:"日本上場要件 × 台湾の現地実務",
  left:"日本側",leftDetail:"上場・監査要件／J-SOX",between:"通訳ではなく業務設計",
  right:"台湾現地",rightDetail:"現場業務／言語・商習慣",
  actions:["J-SOXの目的を共有","現地業務を可視化","3点セット構築・評価支援"],
  toBe:"現地実務に即した内部統制文書と評価体制",
 },
 "case-fpa":{
  label:"CHALLENGE",challenge:"北米現場の実態とHQ経営管理の距離",
  left:"北米の現場業務",leftDetail:"オペレーション・収益ドライバー",between:"",
  right:"HQ FP&A",rightDetail:"予実分析・経営判断",
  actions:["現地・HQを横断して調整","FP&Aフロー構築","PDCAと現地機能定着"],
  toBe:"HQの負荷軽減と北米事業の自律的な経営管理",
 },
} as const;

function Diagram({id}:{id:keyof typeof diagrams}) {
 const d=diagrams[id],fpa=id==="case-fpa";
 return <div className={styles.visual}>
  <div className={styles.visualTop}>{d.label}<span>{d.challenge}</span></div>
  {fpa?<div className={styles.visualCycle}>
   <div>{d.left}<small>{d.leftDetail}</small></div><span>→</span>
   <div>データ・KPI<small>定義統一・精度向上</small></div><span>→</span>
   <div>{d.right}<small>{d.rightDetail}</small></div>
  </div>:<div className={styles.visualRow}>
   <div className={styles.visualNode}><b>{d.left}</b><small>{d.leftDetail}</small></div>
   <div className={styles.visualArrow}>⇄<small>LUARE<br/>{d.between}</small></div>
   <div className={styles.visualNode}><b>{d.right}</b><small>{d.rightDetail}</small></div>
  </div>}
  <div className={styles.visualAction}><b>LUARE の支援</b>
   {d.actions.map(x=><span key={x}>{x}</span>)}
  </div>
  <div className={styles.visualBottom}>TO BE <span>{d.toBe}</span></div>
 </div>;
}
const yen=(n:number)=>n.toLocaleString("ja-JP")+"円";
function SectionHead({caption,title}:{caption:string,title:string}){
 return <header className={styles.sectionTop}><div><div className={styles.eyebrow}>{caption}</div><h2>{title}</h2></div></header>;
}
export default async function CaseDetail({params}:Props){
 const c=findR5Case((await params).slug);if(!c)notFound();
 const q=findR5Quote(c.price);
 
 const hours=q?("hoursTotal" in q?q.hoursTotal:q.hoursMonth*q.months):0;
 return <>
  <Navbar theme="dark" solid />
  <main className={styles.page+" flex-1 pt-20"}>
   <div className={styles.hero}><div className={styles.shell}>
    <nav className={styles.breadcrumb} aria-label="パンくずリスト">
     <Link href="/">ホーム</Link><span>／</span><Link href="/cases">支援事例</Link><span>／</span><span>{c.title}</span>
    </nav>
    <p className={styles.eyebrow}>CASE STUDIES</p>
    <h1>{c.title}</h1><p>{c.impact}</p>
    
   </div></div>
   <section className={styles.section} id="case-overview"><div className={styles.shell}>
    <SectionHead caption="OVERVIEW" title="プロジェクト概要"/>
    <div className={styles.caseSummary}>
     <div><span className={styles.badgebg}>{c.type}</span><h2>{c.industry}</h2><p>{c.intro}</p></div>
     <aside className={styles.statPanel}><small>支援の視点</small><strong>{c.index} / {c.type}</strong><p>{c.objective}</p></aside>
    </div>
   </div></section>
   <section className={styles.section+" "+styles.alt} id="case-approach"><div className={styles.shell}>
    <SectionHead caption="PROJECT APPROACH" title="課題から解決まで"/>
    <Diagram id={c.id}/>
   </div></section>
   <section className={styles.section} id="case-scope"><div className={styles.shell}>
    <SectionHead caption="OUR SUPPORT" title="Luareの支援"/>
    <p className={styles.leadText}>{c.intro}</p>
    <ul className={styles.detailList}>{c.luareActions.map(x=><li key={x}>{x}</li>)}</ul>
   </div></section>
   {q&&<section className={styles.section+" "+styles.alt} id="case-fee"><div className={styles.shell}>
    <SectionHead caption="REFERENCE FEE" title="当該事例の支援報酬目安"/>
    <div className={styles.priceCard}>
     <div className={styles.eyebrow}>ENGAGEMENT FEE</div>
     <h3>{q.title}</h3><p>{q.scope}</p>
     <div className={styles.priceFacts}>
      <span>時間単価（税別）　{yen(q.rate)}</span>
      <span>想定工数　{("hoursTotal" in q)?hours+"時間／合計":q.hoursMonth+"時間／月"}</span>
      <span>支援期間　{q.months}か月</span>
     </div>
     <div className={styles.quoteTotal}>{yen(hours*q.rate)} <small>／{q.months}か月</small></div>
     <p>対象範囲、実施体制、必要工数に応じて個別にお見積りします。</p>
    </div>
   </div></section>}
   <section className={styles.section+(q?"":" "+styles.alt)} id="case-related"><div className={styles.shell}>
    <SectionHead caption="RELATED SERVICES" title="関連するサービス"/>
    <div className={styles.related}>
     <Link href="/services">サービス一覧</Link>
     <Link href="/pricing">料金の目安</Link>
     <Link href="/contact">お問い合わせ</Link>
    </div>
   </div></section>
   <section className={styles.closing}>
    <h2>課題に合わせた支援の形を、ご一緒に。</h2>
    <p>現状の課題、対象範囲、必要な期間を伺い、適切な進め方をご提案します。</p>
    <Link href="/contact" className={styles.closingLink}>ご相談はこちら</Link>
   </section>
  </main>
  <Footer />
 </>;
}
