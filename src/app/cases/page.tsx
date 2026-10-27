import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { r5Cases } from "@/lib/r5Cases";

export const metadata: Metadata = {
  title: "支援事例 | Luare Consulting",
  description: "決算・業務改善、グローバル内部統制、海外拠点のJ-SOX支援事例とFP&A支援モデルをご紹介。",
  robots: { index: false, follow: false }, // Fact check and publication permission still pending.
  alternates: { canonical: "https://luare-consulting.com/cases" },
};

function CaseCard({ item }: { item: (typeof r5Cases)[number] }) {
  return (
    <Link href={`/cases/${item.id}`} className="group flex h-full flex-col rounded-lg border border-[#CBD5E1] bg-white px-6 py-7 shadow-[0_8px_24px_rgba(11,49,88,.035)] transition-colors hover:border-[#1766A0] hover:bg-[#F6FAFD]">
      <span className="text-xs font-bold tracking-[.16em] text-[#1766A0]">{"model" in item && item.model ? "SUPPORT MODEL" : `CASE ${item.index}`}</span>
      <span className="mt-3 text-xs leading-6 text-[#64748B]">{item.industry}</span>
      <h3 className="mt-3 text-[19px] font-semibold leading-8 text-[#0B3158]">{item.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#475569]">{item.impact}</p>
      <span className="mt-6 inline-flex text-sm font-semibold text-[#1766A0] group-hover:underline">支援内容を見る ↗</span>
    </Link>
  );
}

export default function CasesPage() {
  const cases = r5Cases.filter(c => !("model" in c && c.model));
  const models = r5Cases.filter(c => "model" in c && c.model);
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-white pt-20">
        <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
          <div className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16">
            <nav aria-label="パンくずリスト" className="mb-7 flex gap-3 text-xs text-[#475569]">
              <Link href="/" className="hover:underline">ホーム</Link><span>/</span><span aria-current="page">支援事例</span>
            </nav>
            <p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">CASE STUDIES</p>
            <h1 className="mt-4 text-[clamp(31px,4vw,46px)] font-semibold text-[#0B3158]">支援事例</h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[#475569]">企業の課題、Luareの支援、得られる成果物。プロジェクトの要点を図と短い文章でご紹介します。</p>
          </div>
        </header>
        <section className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-20">
          <p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">PROJECTS</p>
          <h2 className="mt-3 mb-7 text-2xl font-semibold text-[#0B3158]">プロジェクト紹介</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{cases.map(c=><CaseCard key={c.id} item={c} />)}</div>
        </section>
        <section className="border-t border-[#CBD5E1] bg-[#EDF5FC] py-14 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 sm:px-10">
            <p className="text-xs font-semibold tracking-[.18em] text-[#1766A0]">SERVICE MODEL</p>
            <h2 className="mt-3 mb-3 text-2xl font-semibold text-[#0B3158]">支援モデル</h2>
            <p className="mb-7 text-sm leading-7 text-[#475569]">実際の顧客の実績ではなく、提供可能な支援のイメージです。</p>
            <div className="grid max-w-[740px] gap-5 md:grid-cols-2">{models.map(c=><CaseCard key={c.id} item={c}/>)}</div>
          </div>
        </section>
        <section className="bg-[#0B3158] px-5 py-14 text-center text-white">
          <h2 className="text-2xl font-semibold">課題に合わせた支援の形を、ご一緒に。</h2>
          <p className="mt-4 text-sm leading-7 text-white/80">現状の課題、対象範囲、必要な期間を伺い、適切な進め方をご提案します。</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B3158]">ご相談はこちら ↗</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}