import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// LP-D03: scope and reference estimates follow content_master_r5.json.
export const metadata: Metadata = {
  title: "月次・年次・連結決算／FP&A・KPI分析 | Luare Consulting",
  description: "決算資料の作成からキャッシュ・フロー、予算実績・KPI分析まで。日々の経理実務と海外本社への説明に必要な数値を整理します。",
  alternates: { canonical: "https://luare-consulting.com/services/accounting-management" },
};
const concerns = [["月次決算がなかなか締まらない","残高照合や社内からの資料回収に時間がかかる。"],["連結・CF資料の作成が重い","必要な補助資料が分散し、担当者の負担が大きい。"],["予算と実績を十分に分析できない","数値の集計に追われ、経営判断に必要な説明が準備できない。"]];
const services = [{"id":"closing","short":"月次・年次・連結決算","title":"月次・年次・連結決算の支援","body":"勘定残高の確認、計上根拠の整理、関係部門との調整や決算資料作成を支援します。","output":"決算関連資料、勘定照合・確認事項一覧"},{"id":"cashflow","short":"キャッシュ・フロー","title":"キャッシュ・フロー作成支援","body":"BS・PLと補助資料の整合を確認し、営業・投資・財務キャッシュ・フローの整理を支援します。","output":"CF資料、明細と整合確認事項"},{"id":"fpa","short":"FP&A・KPI","title":"予算管理・FP&A／事業KPI分析","body":"予算と実績の差異、事業KPIの定義・集計方法を整理し、海外本社や経営陣への報告に使える形にまとめます。","output":"予実分析表、事業KPIレポート"}];
const strengths = [["仲介会社を挟まず、実務の担当者と直接相談","間に入る会社を増やさず、必要な支援範囲や作業内容を具体的に調整します。"],["相談から実行まで窓口をできるだけ一貫","背景説明の繰り返しや認識違いを減らし、案件の状況を踏まえて継続的に対応します。"],["日本語・英語・中国語でやり取り","海外本社、日本法人、外部専門家の間で、会計・財務の内容を理解した担当者が調整します。"],["現場で続けられる形を重視","書類だけを整えるのではなく、担当者が実際に使う資料・確認手順まで整理します。"]];
const steps = [["現状の確認","対象業務、資料、関係者、期限を伺います。"],["範囲と役割の整理","実施する作業、必要工数、成果物、見積条件をすり合わせます。"],["実務支援","関係者と確認しながら、資料作成・調整・改善を進めます。"],["引継ぎ・定着","成果物と残課題を整理し、運用を引き継ぎます。"]];
const faqs = [["決算業務の一部だけ依頼できますか？","はい。残高照合、資料作成、キャッシュ・フローなど、負担の大きい業務からご相談いただけます。"],["海外本社向けの資料にも対応できますか？","報告様式や会計基準、必要な英語での説明範囲を確認したうえでご提案します。"]];
const estimates = [{"title":"決算実務・改善支援","equation":"12,000円／時間 × 月80時間 × 6か月","total":"576万円","scope":"決算関連実務、CF資料、締め工程の整理・改善を支援する想定条件"},{"title":"FP&A・KPI支援","equation":"18,000円／時間 × 月60時間 × 6か月","total":"648万円","scope":"予実分析、事業KPI分析、指標の精度改善を支援する想定条件"}];
export default function Page(){
  return <>
    <Navbar solid />
    <main className="bg-white text-[#25485a]">
      <nav aria-label="パンくずリスト" className="mx-auto max-w-6xl px-5 pt-28 text-xs text-[#657e89] sm:px-8 sm:pt-32">
        <Link href="/" className="hover:underline">ホーム</Link><span className="mx-2">/</span>
        <Link href="/services" className="hover:underline">サービス</Link><span className="mx-2">/</span><span aria-current="page">月次・年次・連結決算／FP&A・KPI分析</span>
      </nav>
      <section id="top" className="border-b border-[#e1e9ec] bg-[#f7fafb] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-4 text-xs font-bold tracking-[.2em] text-[#33758b]">ACCOUNTING & FP&A</p>
          <h1 className="max-w-4xl text-[30px] font-bold leading-[1.45] tracking-wide text-[#23485a] sm:text-[44px]">月次・年次・連結決算／FP&A・KPI分析</h1>
          <p className="mt-5 max-w-3xl text-base leading-[2] text-[#506e7b] sm:text-lg">決算資料の作成からキャッシュ・フロー、予算実績・KPI分析まで。日々の経理実務と海外本社への説明に必要な数値を整理します。</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#17617b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#10465c]">このサービスについて相談する <span className="ml-3" aria-hidden="true">↗</span></Link>
            <a href="#service-details" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#c2d4db] px-6 py-3 text-sm text-[#17617b] hover:bg-white">依頼できる業務を見る ↓</a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="concerns-heading">
        <p className="text-xs font-bold tracking-[.2em] text-[#33758b]">COMMON CHALLENGES</p>
        <h2 id="concerns-heading" className="mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">こんなお悩みはありませんか</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {concerns.map(([name, detail])=><article key={name} className="rounded-sm border border-[#dce6ea] bg-white p-6">
            <h3 className="text-lg font-bold leading-[1.65]">{name}</h3><p className="mt-3 text-sm leading-[1.9] text-[#5b7784]">{detail}</p>
          </article>)}
        </div>
      </section>
      <section id="service-details" className="bg-[#f6f9fa] py-16 sm:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-bold tracking-[.2em] text-[#33758b]">WHAT WE DO</p>
          <h2 id="services-heading" className="mt-3 text-2xl font-bold sm:text-3xl">依頼できる業務・成果物</h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.9] text-[#5b7784]">必要な業務だけからご相談いただけます。具体的な担当範囲・資料は初回の確認後に決定します。</p>
          <nav aria-label="ページ内の支援内容" className="mt-6 flex flex-wrap gap-2">
            {services.map(item=><a key={item.id} href={`#${item.id}`} className="rounded-sm border border-[#bfd2da] bg-white px-3 py-2 text-xs text-[#17617b] hover:underline">{item.short}</a>)}
          </nav>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((item,index)=><article id={item.id} key={item.id} className="scroll-mt-24 rounded-sm border border-[#dce6ea] bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold text-[#47829a]">{String(index+1).padStart(2,"0")}</p>
              <h3 className="mt-2 text-lg font-bold leading-[1.6]">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.9] text-[#5b7784]">{item.body}</p>
              <p className="mt-4 border-t border-[#e2eaee] pt-3 text-xs leading-[1.8] text-[#587080]"><strong className="text-[#34596b]">関連資料・成果物の例：</strong>{item.output}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="strength-heading">
        <p className="text-xs font-bold tracking-[.2em] text-[#33758b]">WHY LUARE</p>
        <h2 id="strength-heading" className="mt-3 text-2xl font-bold sm:text-3xl">Luare Consultingの支援の特長</h2>
        <div className="mt-7 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {strengths.map(([name,detail])=><div key={name} className="border-l-2 border-[#95b8c5] pl-5">
            <h3 className="text-base font-bold">{name}</h3><p className="mt-2 text-sm leading-[1.9] text-[#5b7784]">{detail}</p>
          </div>)}
        </div>
      </section>
      <section className="bg-[#f6f9fa] py-16 sm:py-20" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-bold tracking-[.2em] text-[#33758b]">PROCESS</p>
          <h2 id="steps-heading" className="mt-3 text-2xl font-bold sm:text-3xl">ご相談から支援開始まで</h2>
          <ol className="mt-7 grid gap-4 md:grid-cols-4">
            {steps.map(([name,detail],i)=><li key={name} className="border-t-2 border-[#96b8c5] bg-white p-5">
              <span className="text-sm font-semibold text-[#47829a]">{String(i+1).padStart(2,"0")}</span><h3 className="mt-2 font-bold">{name}</h3><p className="mt-2 text-sm leading-[1.85] text-[#5b7784]">{detail}</p>
            </li>)}
          </ol>
        </div>
      </section>
      <section id="pricing" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="pricing-heading">
        <p className="text-xs font-bold tracking-[.2em] text-[#33758b]">FEES</p>
        <h2 id="pricing-heading" className="mt-3 text-2xl font-bold sm:text-3xl">参考料金・お見積り</h2>
        <p className="mt-4 text-sm leading-[1.9] text-[#587080]">下記はご相談時の参考試算であり、確定価格や過去の契約金額ではありません。</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {estimates.map((item)=><div key={item.title} className="border border-[#dce6ea] bg-[#f7fafb] p-6">
            <h3 className="font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-[1.9] text-[#587080]">{item.equation}</p>
            <p className="mt-3 text-2xl font-bold text-[#1d647e]">{item.total} <span className="text-xs font-medium">（参考試算）</span></p>
            <p className="mt-2 text-xs leading-[1.8] text-[#6d8490]">{item.scope}</p>
          </div>)}
        </div>
        <p className="mt-5 text-xs leading-[1.85] text-[#6d8490]">※ 実際の料金は業務範囲・工数・期間等に応じて個別に算定します。税区分、諸経費、契約条件等はお見積り時に確認します。</p>
        <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center rounded-sm bg-[#17617b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#10465c]">見積り・支援範囲を相談する ↗</Link>
      </section>
      <section id="faq" className="bg-[#f6f9fa] py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-bold tracking-[.2em] text-[#33758b]">FAQ</p>
          <h2 id="faq-heading" className="mt-3 text-2xl font-bold sm:text-3xl">よくあるご質問</h2>
          <div className="mt-6 max-w-4xl space-y-3">
            {faqs.map(([q,a])=><details key={q} className="group rounded-sm border border-[#dce6ea] bg-white p-5">
              <summary className="cursor-pointer text-sm font-semibold leading-[1.7]">{q}</summary><p className="mt-3 text-sm leading-[1.9] text-[#5b7784]">{a}</p>
            </details>)}
          </div>
        </div>
      </section>
      <section  className="border-t border-[#dce6ea] bg-[#eaf3f6] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">まずは、現在の状況をお聞かせください。</h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.9] text-[#536e7c]">ご相談内容を伺い、必要な業務や進め方をご案内します。すべてをまとめて依頼する必要はありません。</p>
          <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center rounded-sm bg-[#17617b] px-7 py-3 text-sm font-semibold text-white hover:bg-[#10465c]">お問い合わせへ進む ↗</Link>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
