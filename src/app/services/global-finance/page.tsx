import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// LP-D06: scope and reference estimates follow content_master_r5.json.
export const metadata: Metadata = {
  title: "日本進出・経理体制構築／海外本社報告 | Luare Consulting",
  description: "日本法人の経理・財務体制の立ち上げから海外本社への報告まで。日本語・英語・中国語で必要な業務と関係者の調整を支援します。",
  alternates: { canonical: "https://luare-consulting.com/services/global-finance" },
};
const concerns = [["日本法人の経理をどこから整えればよいか分からない","勘定科目や会計システム、月次決算の担当者が未整備。"],["本社の報告様式と日本の帳簿が合わない","必要なデータを集めて修正する作業が続いている。"],["登記・税務・会計の依頼先がばらばら","海外本社と国内専門家の間で確認や調整が滞る。"]];
const services = [{"id":"market-entry","short":"日本法人設立準備","title":"日本法人設立準備・専門家連携","body":"日本法人の管理業務の準備事項を整理し、登記・税務等の専門家との進捗・役割分担を調整します。","output":"準備事項一覧、専門家との役割分担表"},{"id":"finance-setup","short":"Finance Setup","title":"Finance Setup・経理体制構築","body":"勘定科目、会計システム要件、月次決算・承認フローを整理して経理体制を立ち上げます。","output":"経理体制設計、勘定科目マッピング、運用手順書"},{"id":"hq-reporting","short":"本社報告","title":"海外本社へのHQ Reporting","body":"本社が求める報告項目と日本法人のデータを照合し、月次報告の進め方やパッケージを整備します。","output":"月次報告パッケージ、照合事項一覧"},{"id":"coordination","short":"日英中の連携","title":"日英中でのプロジェクト・業務調整","body":"海外本社・日本法人・国内専門家の依頼事項や決定事項を整理し、言語差による認識違いを減らします。","output":"確認事項リスト、進捗・担当表"}];
const strengths = [["直接契約で、必要な業務から相談","仲介会社を挟まず、実務の作業内容と担当範囲を具体的に調整できます。"],["相談から実務まで担当体制を継続","背景説明の手間を抑え、案件の状況を踏まえて進めます。"],["日本語・英語・中国語の連携","日本法人、海外本社、関係専門家の会計・財務上のやりとりを支援します。"],["現場の実務も理解した支援","報告用資料だけでなく、毎月の手順・確認方法まで整理します。"]];
const steps = [["現状確認","現在の資料、業務、関係者、困りごとを伺います。"],["支援範囲と見積り","必要な作業、役割、期間、費用条件を整理します。"],["作業の実施","関係者と確認を取りながら、資料作成と実務調整を進めます。"],["確認・引継ぎ","作成資料、残課題、継続運用のポイントを共有します。"]];
const faqs = [["設立登記や税務申告も依頼できますか？","Luareは経理体制の設計と専門家との連携を支援します。登記や税務申告などの専門家の独占業務は、適切な有資格者が担当します。"],["設立済みの日本法人でも相談できますか？","はい。設立後に経理体制や本社報告の整備が必要な場合もご相談いただけます。"]];
const estimates = [];
export default function Page(){
  return <>
    <Navbar solid />
    <main className="bg-white text-[#25485a]">
      <nav aria-label="パンくずリスト" className="mx-auto max-w-6xl px-5 pt-28 text-xs text-[#657e89] sm:px-8 sm:pt-32">
        <Link href="/" className="hover:underline">ホーム</Link><span className="mx-2">/</span>
        <Link href="/services" className="hover:underline">サービス</Link><span className="mx-2">/</span><span aria-current="page">日本進出・経理体制構築／海外本社報告</span>
      </nav>
      <section id="top" className="border-b border-[#e1e9ec] bg-[#f7fafb] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-4 text-xs font-bold tracking-[.2em] text-[#33758b]">GLOBAL FINANCE / JAPAN SETUP</p>
          <h1 className="max-w-4xl text-[30px] font-bold leading-[1.45] tracking-wide text-[#23485a] sm:text-[44px]">日本進出・経理体制構築／海外本社報告</h1>
          <p className="mt-5 max-w-3xl text-base leading-[2] text-[#506e7b] sm:text-lg">日本法人の経理・財務体制の立ち上げから海外本社への報告まで。日本語・英語・中国語で必要な業務と関係者の調整を支援します。</p>
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
          <p className="mt-3 text-sm leading-[1.9] text-[#587080]">経理体制立上げの範囲、報告要件、関係者の数と期間を確認し、個別にご提案します。</p>
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
