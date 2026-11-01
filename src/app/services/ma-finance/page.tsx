import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "M&A財務調査・企業価値評価・PMI支援 | Luare Consulting",
  description: "M&Aの検討に必要な財務情報の整理から、企業価値の検討、買収後の経理・管理体制づくりまで。案件の段階に応じて支援内容を検討します。",
  alternates: { canonical: "https://luare-consulting.com/services/ma-finance" },
};

const services = [
  { id: "fdd", title: "財務デューデリジェンス（FDD）関連支援", description: "対象会社の決算資料、主要な財務論点、確認事項を整理し、取引検討に必要な情報の把握を支援します。" },
  { id: "valuation", title: "企業価値・株価算定関連支援", description: "事業計画、財務情報、算定前提や必要資料を整理し、評価に向けた検討を支援します。" },
  { id: "pmi", title: "PMI・統合後の経理財務管理", description: "買収後の会計・財務管理、グループ報告、承認や業務の役割分担について検討を支援します。" },
] as const;

export default function MaFinancePage() {
  return (
    <>
      <Navbar solid />
      <main lang="ja" className="flex-1 bg-white pt-20 text-[#0B3158]">
        <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]" id="top">
          <div className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16">
            <nav aria-label="パンくずリスト" className="mb-9 flex flex-wrap items-center gap-2 text-xs text-[#475569]">
              <Link href="/" className="hover:underline">ホーム</Link><span>／</span>
              <Link href="/services" className="hover:underline">サービス</Link><span>／</span>
              <span aria-current="page">M&A財務調査・企業価値評価・PMI支援</span>
            </nav>
            <p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">FINANCIAL ADVISORY</p>
            <h1 className="mt-4 max-w-4xl text-[clamp(28px,4vw,43px)] font-semibold leading-tight">M&A財務調査・企業価値評価・PMI支援</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">M&Aの検討に必要な財務情報の整理から、企業価値の検討、買収後の経理・管理体制づくりまで。案件の段階に応じて支援内容を検討します。</p>
          </div>
        </header>
        <section id="service-details" className="mx-auto max-w-[1140px] scroll-mt-28 px-5 py-12 sm:px-10 sm:py-16">
          <h2 className="mb-8 text-2xl font-semibold">主な支援内容</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((item, i) => (
              <article key={item.id} id={item.id} className="scroll-mt-28 rounded-lg border border-[#CBD5E1] bg-white p-7">
                <span className="text-xs font-bold tracking-widest text-[#1766A0]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold leading-8">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-[#475569]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#EDF5FC] px-5 py-16 text-center">
          <h2 className="text-2xl font-semibold">M&Aに関するご相談をお聞かせください。</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#475569]">ご相談内容と対象範囲を確認したうえで、支援の進め方をご提案します。</p>
          <Link href="/contact" className="mt-7 inline-flex rounded-full bg-[#1766A0] px-8 py-4 text-sm font-semibold text-white hover:bg-[#0B3158]">お問い合わせ ↗</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
