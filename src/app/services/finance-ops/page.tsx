import RelatedCaseLinks from "@/components/RelatedCaseLinks";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// LP-D05: scope and reference estimates follow content_master_r5.json.
export const metadata: Metadata = {
  title: "決算早期化・業務改善・AI活用支援 | Luare Consulting",
  description: "属人化した経理業務や二重入力、決算の遅れを見直します。業務フローの整理からシステム・AIの活用、運用定着まで支援します。",
  alternates: { canonical: "https://luare-consulting.com/services/finance-ops" },
};
const concerns = [["担当者しか手順が分からない","業務を引き継げず、休暇や退職の際に困る。"],["同じデータを何度も入力している","会計システムや表計算ソフト間で転記が発生している。"],["決算の締め作業が長い","部門間の資料収集や承認に時間がかかる。"]];
const services = [{"id":"close-improvement","short":"決算早期化","title":"決算早期化・業務標準化","body":"資料入手時点、各部門の対応、締め工程を確認し、改善ポイントを整理します。","output":"決算工程表、改善施策一覧"},{"id":"process","short":"業務フロー改善","title":"業務可視化・プロセス改善","body":"誰がいつ何を行うかを明確にし、重複作業や属人化を減らす業務フローを検討します。","output":"業務フロー、業務分担表"},{"id":"system-implementation","short":"システム・データ移行","title":"システム導入・データ移行支援","body":"会計システムに必要な業務要件、移行対象データ、照合と切替手順を整理します。","output":"要件整理、移行・照合資料"},{"id":"ai","short":"AI活用","title":"AIを活用した経理業務の効率化","body":"自動化しやすい定型作業を見極め、機密性と人による確認を考慮してAI活用を検討します。","output":"自動化候補一覧、検証・確認手順"},{"id":"operating-model","short":"運用・引継ぎ","title":"業務ルール・運用体制の整備","body":"承認、照合、例外対応、引継ぎのルールをまとめ、改善後も回る方法を作ります。","output":"業務手順書、運用ルール・引継ぎ資料"}];
const strengths = [["仲介会社を挟まず、実務の担当者と直接相談","間に入る会社を増やさず、必要な支援範囲や作業内容を具体的に調整します。"],["相談から実行まで窓口をできるだけ一貫","背景説明の繰り返しや認識違いを減らし、案件の状況を踏まえて継続的に対応します。"],["日本語・英語・中国語でやり取り","海外本社、日本法人、外部専門家の間で、会計・財務の内容を理解した担当者が調整します。"],["現場で続けられる形を重視","書類だけを整えるのではなく、担当者が実際に使う資料・確認手順まで整理します。"]];
const steps = [["現状の確認","対象業務、資料、関係者、期限を伺います。"],["範囲と役割の整理","実施する作業、必要工数、成果物、見積条件をすり合わせます。"],["実務支援","関係者と確認しながら、資料作成・調整・改善を進めます。"],["引継ぎ・定着","成果物と残課題を整理し、運用を引き継ぎます。"]];
const faqs = [["AI導入だけ相談できますか？","はい。自動化したい業務、使用データ、セキュリティ上の条件を確認し、対象範囲から検討します。"],["今の会計システムを変えずに改善できますか？","可能な場合があります。既存の運用や資料収集方法を確認してから改善策をご提案します。"]];
const estimates = [];
export default function Page(){
  return <>
    <Navbar solid />
    <main className="bg-white text-[#25485a]">
      <nav aria-label="専門サービス" className="border-b border-[#dce6ea] bg-white px-5 pt-24 sm:px-8 sm:pt-28">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto">
          <Link href="/services/internal-control" className="border-b-2 border-transparent text-[#536e7c] hover:text-[#17617b] shrink-0 px-3 py-3 text-xs font-semibold sm:px-4">内部統制・J-SOX</Link>
          <Link href="/services/audit-assurance" className="border-b-2 border-transparent text-[#536e7c] hover:text-[#17617b] shrink-0 px-3 py-3 text-xs font-semibold sm:px-4">会計監査対応</Link>
          <Link href="/services/accounting-management" className="border-b-2 border-transparent text-[#536e7c] hover:text-[#17617b] shrink-0 px-3 py-3 text-xs font-semibold sm:px-4">決算・FP&A</Link>
          <Link href="/services/finance-ops" aria-current="page" className="border-b-2 border-[#17617b] bg-[#f5f9fa] text-[#17617b] shrink-0 px-3 py-3 text-xs font-semibold sm:px-4">業務改善・AI</Link>
          <Link href="/services/global-finance" className="border-b-2 border-transparent text-[#536e7c] hover:text-[#17617b] shrink-0 px-3 py-3 text-xs font-semibold sm:px-4">日本進出・Finance Setup</Link>
        </div>
      </nav>
      <nav aria-label="パンくずリスト" className="mx-auto max-w-6xl px-5 pt-5 text-xs text-[#657e89] sm:px-8 sm:pt-6">
        <Link href="/" className="hover:underline">ホーム</Link><span className="mx-2">/</span>
        <Link href="/services" className="hover:underline">サービス</Link><span className="mx-2">/</span><span aria-current="page">決算早期化・業務改善・AI活用支援</span>
      </nav>
      <section id="top" className="border-b border-[#e1e9ec] bg-[#f7fafb] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-4 text-xs font-bold tracking-[.2em] text-[#33758b]">FINANCE OPERATIONS</p>
          <h1 className="max-w-4xl text-[30px] font-bold leading-[1.45] tracking-wide text-[#23485a] sm:text-[44px]">決算早期化・業務改善・AI活用支援</h1>
          <p className="mt-5 max-w-3xl text-base leading-[2] text-[#506e7b] sm:text-lg">属人化した経理業務や二重入力、決算の遅れを見直します。業務フローの整理からシステム・AIの活用、運用定着まで支援します。</p>
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
        <div className="mt-6 max-w-3xl border border-[#dce6ea] bg-[#f7fafb] p-6 sm:p-8">
          <p className="text-2xl font-bold text-[#1d647e]">個別お見積り</p>
          <p className="mt-3 text-sm leading-[1.9] text-[#587080]">改善対象の業務範囲、システムの状況、必要な検証工数に応じてお見積りします。AI導入に固有の定額料金は設定していません。</p>
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
    <RelatedCaseLinks topic="transform" />
    <Footer />
  </>;
}
