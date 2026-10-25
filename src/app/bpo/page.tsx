import RelatedCaseLinks from "@/components/RelatedCaseLinks";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// LP-D08: scope and reference estimates follow content_master_r5.json.
export const metadata: Metadata = {
  title: "外資系日本法人の経理BPO・海外本社報告 | Luare Consulting",
  description: "海外企業の日本法人向けに、日常経理・月次決算・海外本社への報告を継続支援。採用や退職で業務が止まりにくい体制づくりを支えます。",
  alternates: { canonical: "https://luare-consulting.com/bpo" },
};
const concerns = [["経理担当者の採用に苦戦している","日本の経理と海外本社への対応を両立できる人材が見つかりにくい。"],["担当者の退職・休暇が不安","手順や締めスケジュールが属人化している。"],["海外本社への報告が毎月負担","日本法人の帳簿からHQ向け資料をまとめ直している。"]];
const services = [{"id":"outsourcing","short":"日常経理・月次決算","title":"経理・財務業務の継続サポート","body":"記帳・仕訳、売掛・買掛、銀行・主要勘定の照合、月次締めに必要な作業を相談範囲に応じて支援します。","output":"月次決算関連資料、残高照合表、未解決事項一覧"},{"id":"reporting","short":"海外本社報告","title":"HQ Reporting・Intercompany","body":"本社指定の報告様式、親子会社間取引・残高、月次報告に必要な情報を整理します。","output":"HQ Reporting Package、Intercompany照合資料"},{"id":"bpo-operations","short":"業務管理・引継ぎ","title":"締め日管理・SOP・引継ぎ","body":"Closing Calendar、作業チェックリスト、例外事項と役割を整理し、担当者が変わっても引き継げる体制を目指します。","output":"月次Closing Calendar、業務手順書、引継ぎ資料"},{"id":"bpo-coordination","short":"日英中の連携","title":"本社・日本法人・専門家との調整","body":"海外本社、日本法人の管理者、税理士等との連絡を会計業務の流れに沿って支援します。","output":"連絡・確認事項一覧、報告スケジュール"}];
const strengths = [["直接契約で、必要な業務から相談","仲介会社を挟まず、実務の作業内容と担当範囲を具体的に調整できます。"],["相談から実務まで担当体制を継続","背景説明の手間を抑え、案件の状況を踏まえて進めます。"],["日本語・英語・中国語の連携","日本法人、海外本社、関係専門家の会計・財務上のやりとりを支援します。"],["現場の実務も理解した支援","報告用資料だけでなく、毎月の手順・確認方法まで整理します。"]];
const steps = [["現状確認","現在の資料、業務、関係者、困りごとを伺います。"],["支援範囲と見積り","必要な作業、役割、期間、費用条件を整理します。"],["作業の実施","関係者と確認を取りながら、資料作成と実務調整を進めます。"],["確認・引継ぎ","作成資料、残課題、継続運用のポイントを共有します。"]];
const faqs = [["今の経理担当者がいても利用できますか？","はい。すべてを外部化する必要はありません。担当者との役割を整理し、必要な部分だけご相談いただけます。"],["支払承認も代行してもらえますか？","支払予定の整理等は業務範囲に応じて検討します。最終的な銀行承認・送金権限は原則としてお客さま側に残します。"],["中国本社との連絡にも対応できますか？","日本語・英語・中国語での会計・財務関連の調整は、具体的な内容を確認したうえで対応範囲を定めます。"]];
const estimates = [];
export default function Page(){
  return <>
    <Navbar solid />
    <main className="bg-white text-[#0B3158]">
      <nav aria-label="パンくずリスト" className="mx-auto max-w-6xl px-5 pt-28 text-xs text-[#475569] sm:px-8 sm:pt-32">
        <Link href="/" className="hover:underline">ホーム</Link><span className="mx-2">/</span>
        <Link href="/services" className="hover:underline">サービス</Link><span className="mx-2">/</span><span aria-current="page">外資系日本法人の経理BPO・海外本社報告</span>
      </nav>
      <section id="top" className="border-b border-[#CBD5E1] bg-[#EDF5FC] py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-4 text-xs font-bold tracking-[.2em] text-[#1766A0]">LUARE BPO / MANAGED FINANCE</p>
          <h1 className="max-w-4xl text-[30px] font-bold leading-[1.45] tracking-wide text-[#0B3158] sm:text-[44px]">外資系日本法人の経理BPO・海外本社報告</h1>
          <p className="mt-5 max-w-3xl text-base leading-[2] text-[#475569] sm:text-lg">海外企業の日本法人向けに、日常経理・月次決算・海外本社への報告を継続支援。採用や退職で業務が止まりにくい体制づくりを支えます。</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#0B3158] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0B3158]">このサービスについて相談する <span className="ml-3" aria-hidden="true">↗</span></Link>
            <a href="#service-details" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#CBD5E1] px-6 py-3 text-sm text-[#0B3158] hover:bg-white">依頼できる業務を見る ↓</a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="concerns-heading">
        <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">COMMON CHALLENGES</p>
        <h2 id="concerns-heading" className="mt-3 text-2xl font-bold leading-relaxed sm:text-3xl">こんなお悩みはありませんか</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {concerns.map(([name, detail])=><article key={name} className="rounded-sm border border-[#CBD5E1] bg-white p-6">
            <h3 className="text-lg font-bold leading-[1.65]">{name}</h3><p className="mt-3 text-sm leading-[1.9] text-[#475569]">{detail}</p>
          </article>)}
        </div>
      </section>
      <section id="service-details" className="bg-[#EDF5FC] py-16 sm:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">WHAT WE DO</p>
          <h2 id="services-heading" className="mt-3 text-2xl font-bold sm:text-3xl">依頼できる業務・成果物</h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.9] text-[#475569]">必要な業務だけからご相談いただけます。具体的な担当範囲・資料は初回の確認後に決定します。</p>
          <span id="services" className="block scroll-mt-24" />
          <nav aria-label="ページ内の支援内容" className="mt-6 flex flex-wrap gap-2">
            {services.map(item=><a key={item.id} href={`#${item.id}`} className="rounded-sm border border-[#CBD5E1] bg-white px-3 py-2 text-xs text-[#0B3158] hover:underline">{item.short}</a>)}
          </nav>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((item,index)=><article id={item.id} key={item.id} className="scroll-mt-24 rounded-sm border border-[#CBD5E1] bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold text-[#1766A0]">{String(index+1).padStart(2,"0")}</p>
              <h3 className="mt-2 text-lg font-bold leading-[1.6]">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.9] text-[#475569]">{item.body}</p>
              <p className="mt-4 border-t border-[#CBD5E1] pt-3 text-xs leading-[1.8] text-[#475569]"><strong className="text-[#0B3158]">関連資料・成果物の例：</strong>{item.output}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="strength-heading">
        <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">WHY LUARE</p>
        <h2 id="strength-heading" className="mt-3 text-2xl font-bold sm:text-3xl">Luare Consultingの支援の特長</h2>
        <div className="mt-7 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {strengths.map(([name,detail])=><div key={name} className="border-l-2 border-[#CBD5E1] pl-5">
            <h3 className="text-base font-bold">{name}</h3><p className="mt-2 text-sm leading-[1.9] text-[#475569]">{detail}</p>
          </div>)}
        </div>
      </section>
      <section className="bg-[#EDF5FC] py-16 sm:py-20" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">PROCESS</p>
          <h2 id="steps-heading" className="mt-3 text-2xl font-bold sm:text-3xl">ご相談から支援開始まで</h2>
          <ol className="mt-7 grid gap-4 md:grid-cols-4">
            {steps.map(([name,detail],i)=><li key={name} className="border-t-2 border-[#CBD5E1] bg-white p-5">
              <span className="text-sm font-semibold text-[#1766A0]">{String(i+1).padStart(2,"0")}</span><h3 className="mt-2 font-bold">{name}</h3><p className="mt-2 text-sm leading-[1.85] text-[#475569]">{detail}</p>
            </li>)}
          </ol>
        </div>
      </section>
      <section id="pricing" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="pricing-heading">
        <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">FEES</p>
        <h2 id="pricing-heading" className="mt-3 text-2xl font-bold sm:text-3xl">参考料金・お見積り</h2>
        <div className="mt-6 max-w-3xl border border-[#CBD5E1] bg-[#EDF5FC] p-6 sm:p-8">
          <p className="text-2xl font-bold text-[#0B3158]">個別お見積り</p>
          <p className="mt-3 text-sm leading-[1.9] text-[#475569]">仕訳量、締め日、海外本社の報告要件、Intercompany取引、使用システムと委託範囲に応じてお見積りします。</p>
        </div>
        <p className="mt-5 text-xs leading-[1.85] text-[#475569]">※ 実際の料金は業務範囲・工数・期間等に応じて個別に算定します。税区分、諸経費、契約条件等はお見積り時に確認します。</p>
        <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center rounded-sm bg-[#0B3158] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0B3158]">見積り・支援範囲を相談する ↗</Link>
      </section>
      <section id="faq" className="bg-[#EDF5FC] py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">FAQ</p>
          <h2 id="faq-heading" className="mt-3 text-2xl font-bold sm:text-3xl">よくあるご質問</h2>
          <div className="mt-6 max-w-4xl space-y-3">
            {faqs.map(([q,a])=><details key={q} className="group rounded-sm border border-[#CBD5E1] bg-white p-5">
              <summary className="cursor-pointer text-sm font-semibold leading-[1.7]">{q}</summary><p className="mt-3 text-sm leading-[1.9] text-[#475569]">{a}</p>
            </details>)}
          </div>
        </div>
      </section>
      <section  className="border-t border-[#CBD5E1] bg-[#EDF5FC] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">まずは、現在の状況をお聞かせください。</h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.9] text-[#475569]">ご相談内容を伺い、必要な業務や進め方をご案内します。すべてをまとめて依頼する必要はありません。</p>
          <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center rounded-sm bg-[#0B3158] px-7 py-3 text-sm font-semibold text-white hover:bg-[#0B3158]">お問い合わせへ進む ↗</Link>
        </div>
      </section>
    </main>
    <RelatedCaseLinks topic="bpo" />
    <Footer />
  </>;
}
