import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Standard service detail based on the husband's r5 service-internal page.
// Advertising LP is preserved at /ads/internal-control and in the archive branch.
export const metadata: Metadata = {
  title: "内部統制・J-SOX・内部監査 | Luare Consulting",
  description: "内部統制・J-SOX構築、3点セット作成・更新、整備・運用評価、内部監査、内部統制研修。実務に根付く内部統制を支援。",
  alternates: { canonical: "https://luare-consulting.com/services/internal-control" },
};

const support = [
  {id: "listed", title: "内部統制・J-SOX構築", description: "対象業務のリスク、既存ルール、責任分担を整理し、企業規模と運用実態に応じた内部統制の構築を支援します。"},
  {id: "three-documents", title: "3点セット作成・更新", description: "業務担当者へのヒアリングを通じて、業務記述書・フローチャート・RCMを整備し、業務変更に合わせた更新まで対応します。"},
  {id: "evaluation", title: "整備・運用評価支援", description: "統制目的と実際の運用を照合し、必要な証憑や確認履歴を踏まえた評価・改善を支援します。"},
  {id: "internal-audit", title: "内部監査・統制高度化", description: "リスクに応じた確認範囲の整理から、内部監査実務の支援、改善状況のフォローまで対応します。"},
  {id: "training", title: "内部統制研修", description: "役割別の研修を通じて、統制の目的・必要な作業・証拠の残し方を実務担当者と共有します。"},
];

export default function InternalControlServicePage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-white pt-20 text-[#0B3158]">
        <header className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
          <div className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16">
            <nav aria-label="パンくずリスト" className="mb-7 flex flex-wrap gap-2 text-xs text-[#475569]">
              <Link href="/" className="hover:underline">ホーム</Link><span>／</span>
              <Link href="/services" className="hover:underline">サービス</Link><span>／</span>
              <span aria-current="page">内部統制・J-SOX・内部監査</span>
            </nav>
            <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">SERVICE / 01</p>
            <h1 className="mt-4 text-[clamp(28px,4.6vw,46px)] font-semibold leading-snug">内部統制・J-SOX・内部監査</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#475569]">構築から評価・改善まで、実務に根付く内部統制を支援。</p>
          </div>
        </header>
        <section className="mx-auto max-w-[1140px] px-5 py-16 sm:px-10">
          <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">SCOPE</p>
          <h2 className="mt-3 text-2xl font-semibold">主な支援内容</h2>
          <p className="mt-3 text-sm leading-7 text-[#475569]">各項目を開くと、詳しい説明をご覧いただけます。</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {support.map(item => (
              <details id={item.id} key={item.id} className="group scroll-mt-28 rounded-lg border border-[#CBD5E1] bg-white open:bg-[#EDF5FC]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-5 text-[15px] font-semibold marker:hidden">
                  {item.title}<span aria-hidden="true" className="text-xl font-normal text-[#1766A0] group-open:rotate-45">＋</span>
                </summary>
                <p className="px-5 pb-6 text-sm leading-8 text-[#475569]">{item.description}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="bg-[#EDF5FC] py-14 sm:py-16">
          <div className="mx-auto max-w-[1140px] px-5 sm:px-10">
            <p className="text-xs font-semibold tracking-[.2em] text-[#1766A0]">RELATED INFORMATION</p>
            <h2 className="mt-3 text-2xl font-semibold">関連情報</h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/cases/case-jsox" className="rounded-md border border-[#9CBDD4] bg-white px-5 py-3 text-sm font-semibold hover:bg-[#E5F1FA]">海外事業拠点のJ-SOX支援事例 ↗</Link>
              <Link href="/cases/case-music" className="rounded-md border border-[#9CBDD4] bg-white px-5 py-3 text-sm font-semibold hover:bg-[#E5F1FA]">グローバル内部統制の支援事例 ↗</Link>
              <Link href="/pricing" className="rounded-md border border-[#9CBDD4] bg-white px-5 py-3 text-sm font-semibold hover:bg-[#E5F1FA]">料金の目安 ↗</Link>
            </div>
          </div>
        </section>
        <section className="bg-[#0B3158] px-5 py-16 text-center text-white">
          <h2 className="text-2xl font-semibold">課題に合わせた支援の形を、ご一緒に。</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-white/80">現状の課題、対象範囲、必要な期間を伺い、適切な進め方をご提案します。</p>
          <Link href="/contact" className="mt-7 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B3158]">ご相談はこちら ↗</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
