import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseGallery, { type ApprovedCaseStudy } from "@/components/cases/CaseGallery";
import { r5Cases } from "@/lib/r5Cases";

export const metadata: Metadata = {
  title: "支援事例 | Luare Consulting",
  description: "決算・業務改善、グローバル内部統制、海外拠点のJ-SOX支援事例とFP&A支援モデルをご紹介。",
  alternates: { canonical: "https://luare-consulting.com/cases" },
};

// The previously approved CaseGallery C presentation remains intact.
// The text and client industries come from the husband's approved r5 master.
const approvedCases: readonly ApprovedCaseStudy[] = r5Cases
  .filter((c) => c.id !== "case-fpa")
  .map((c) => ({
    id: c.id,
    detailHref: "/cases/" + c.id,
    number: c.index,
    category: c.type,
    categoryGroup: c.id === "case-close" ? "accounting" : "control",
    title: c.title,
    summary: c.impact,
    lead: c.impact,
    background: c.intro,
    support: c.objective,
    relatedMaterials: c.outcomes.join("、"),
    issues: c.clientIssues,
    actions: c.luareActions,
    outputs: c.outcomes,
    tags: [c.type, c.industry],
    illustration: c.id === "case-close" ? "documents" : c.id === "case-music" ? "controls" : "flow",
  }));

export default function CasesPage() {
  return (
    <>
      <Navbar theme="dark" solid />
      <main className="flex-1 pt-20">
        <CaseGallery cases={approvedCases} introduction="決算業務の改善や内部統制など、分野別に支援内容をご紹介します。" />
        <section className="mx-auto max-w-[1160px] px-5 pb-20 sm:px-10" aria-labelledby="fpa-model">
          <div className="border-t border-[#CBD5E1] bg-[#EDF5FC] px-6 py-8 sm:px-10 sm:py-11">
            <span className="text-xs font-semibold tracking-[0.12em] text-[#475569]">SUPPORT MODEL / 参考</span>
            <h2 id="fpa-model" className="mt-3 text-2xl font-semibold tracking-tight text-[#0B3158] sm:text-3xl">
              FP&amp;Aの支援モデル
            </h2>
            <p className="mt-3 max-w-[750px] text-sm leading-8 text-[#475569]">
              北米事業の現場データと本社の管理指標をつなぐFP&amp;A支援モデルです。
              こちらは顧客の実績事例ではなく、提供内容を説明するモデルです。
            </p>
            <Link href="/cases/case-fpa" className="mt-6 inline-block border-b border-[#1766A0] pb-1 text-sm font-semibold text-[#0B3158] hover:border-transparent">
              支援モデルの詳細を見る →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
