import Link from "next/link";
import {serviceItems, servicePages, type ServicePageKey} from "@/lib/serviceCatalog";
import {serviceTopicDetails} from "@/components/ServiceTopicSections";
import styles from "./ApprovedServiceDetailLayout.module.css";

type ApprovedPage = "audit-assurance" | "accounting-management" | "finance-ops" | "global-finance";
type LayoutProps = { page: ApprovedPage };

const tabs: readonly {page:ApprovedPage;label:string;number:string}[] = [
  {page:"audit-assurance",label:"海外監査・Group Audit",number:"01"},
  {page:"accounting-management",label:"決算・FP&A",number:"02"},
  {page:"finance-ops",label:"業務改善・AI",number:"03"},
  {page:"global-finance",label:"Finance Setup",number:"04"}
];

const pageCopy: Record<ApprovedPage,{eyebrow:string;lead:string;title?:string}> = {
  "audit-assurance":{eyebrow:"AUDIT & ASSURANCE SUPPORT",lead:"グローバルな監査対応を、よりスムーズに。",title:"海外監査・Group Audit対応支援"},
  "accounting-management":{eyebrow:"ACCOUNTING & MANAGEMENT",lead:"数字を作る実務から、経営判断へ。"},
  "finance-ops":{eyebrow:"FINANCE OPERATIONS",lead:"属人化した業務を、運用できる仕組みに。"},
  "global-finance":{eyebrow:"GLOBAL FINANCE",lead:"日本法人のFinance機能を、立上げから本社報告まで。"}
};

// This approved design uses separate static routes; the tabs are navigation links,
// never JS-only panels. The labels and supporting copy are based on reviewed HTML.
// The professional scope in audit / tax topics still requires partner sign-off.
const auditHighlights = [
  {id:"audit-coordination",name:"監査体制の設計・コーディネーション",description:"監査の目的、対象範囲、適用会計基準、海外親会社からの要求事項などを整理します。監査が必要な場合には、提携監査法人と連携し、案件に適した監査体制をご案内します。"},
  {id:"audit-readiness",name:"Audit Readiness／監査準備支援",description:"監査開始前に必要な資料や会計データを整理し、PBC資料、勘定科目明細、契約書、会計処理根拠などの準備を支援します。"},
  {id:"accounting-advisory",name:"会計アドバイザリー・監査対応支援",description:"会計上の論点整理、監査法人向け資料準備、照会対応に必要な根拠整理を支援します。"},
  {id:"ifrs-gaap",name:"IFRS / US-GAAP対応",description:"日本基準との差異整理、会計処理の検討、Reporting Package作成など、海外親会社向け財務報告を支援します。"},
  {id:"group-audit",name:"Group Audit対応",description:"海外親会社のGroup Auditorから届くAudit Instructionの内容と提出期限を整理し、日本法人側で必要となる資料の準備、担当者間の連携、照会対応を支援します。"},
  {id:"auditor-questions",name:"監査人対応",description:"監査人からの質問や資料依頼を整理し、日本法人側の経理・財務担当者の負担を軽減します。"},
  {id:"hq-communication",name:"海外本社とのコミュニケーション",description:"日本語・英語・中国語に対応。会計・財務の内容を理解した専門家が関係者間のコミュニケーションを支援します。"}
] as const;

export default function ApprovedServiceDetailLayout({page}:LayoutProps){
  const meta=servicePages[page];
  const copy=pageCopy[page];
  const topics=page==="audit-assurance" ? auditHighlights : serviceItems.filter(item=>item.page===page);
  const title=copy.title??meta.title;
  return <main className={styles.scope}>
    <nav className={styles.tabs} aria-label="専門サービス">
      <div className={styles.tabsInner}>
        {tabs.map(tab=><Link key={tab.page} href={`/services/${tab.page}`} aria-current={tab.page===page?"page":undefined} className={tab.page===page?styles.current:""}>
          <span>{tab.number}</span>{tab.label}
        </Link>)}
      </div>
    </nav>
    <div className={styles.breadcrumb}>
      <Link href="/">ホーム</Link><span aria-hidden="true">/</span>
      <Link href="/#services">サービス</Link><span aria-hidden="true">/</span>
      <span aria-current="page">{title}</span>
    </div>
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.lead}>{copy.lead}</p>
        <p className={styles.intro}>{page==="audit-assurance"?"海外本社・日本法人・監査人の間に立ち、監査準備から照会対応まで必要な実務を整理します。":meta.intro}</p>
        <a href="#service-details" className={styles.jump}>支援内容を見る <span aria-hidden="true">↓</span></a>
      </div>
    </section>
    <section className={styles.content} id="service-details" aria-label={title+"の支援内容"}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <div><p className={styles.eyebrow}>WHAT WE DO</p>
          <h2>主な支援内容</h2>
          <p>対象業務の実態に合わせて、課題の整理から実務への落とし込みまで。</p></div>
          <div className={styles.count}>{String(topics.length).padStart(2,"0")} <small>AREAS</small></div>
        </header>
        <nav className={styles.topicNav} aria-label="このページ内の支援内容">
          {topics.map(item=><a href={`#${item.id}`} key={item.id}>{item.name}</a>)}
        </nav>
        <div className={styles.cards}>
          {topics.map((item,index)=>{
            const detail=page==="audit-assurance"?undefined:serviceTopicDetails[item.id];
            return <article key={item.id} id={item.id} className={styles.card}>
              <div className={styles.cardTitle}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.name}</h3></div>
              <p>{item.description}</p>
              {detail && <div className={styles.detail}>
                <div><h4>主な対応内容</h4><ul>{detail.work.map(work=><li key={work}>{work}</li>)}</ul></div>
                <div><h4>関連する資料・成果物の例</h4><ul>{detail.documents.map(doc=><li key={doc}>{doc}</li>)}</ul></div>
              </div>}
            </article>;
          })}
        </div>
        <p className={styles.note}>※ 対応範囲・資料の内容は、対象業務とご相談内容に応じて個別に整理します。</p>
      </div>
    </section>
    <section className={styles.cta}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>LET'S TALK</p>
        <h2>課題に合わせた支援を、<br/>一緒に考えます。</h2>
        <p>具体的な業務範囲や進め方は、現在の状況を伺ってご提案します。</p>
        <Link className={styles.ctaButton} href="/contact">このサービスについて相談する <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </main>;
}
