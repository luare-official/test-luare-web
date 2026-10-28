import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * APPROVED 2026-10-28: main-content text and order follow the user's HTML preview:
 * Luare_監査ページ_統一デザイン_プレビュー.html.
 * Production Navbar/Footer replace the prototype's stand-in navigation only.
 * Do not restore the removed benefits section.
 */
export const metadata: Metadata = {
  title: "監査・保証業務 | Luare Consulting",
  description:
    "法定監査・任意監査などのご相談に、提携監査法人と連携して対応。監査資料の準備や海外本社との調整など、企業側の実務も支援します。",
  alternates: { canonical: "https://luare-consulting.com/services/audit-assurance" },
};

const auditItems = [
  {
    id: "statutory-audit",
    title: "会社法監査（法定監査）",
    description: "会社法に基づく会計監査人監査が必要な企業のご相談に対応します。監査対象と期日、会計処理の状況を確認して監査法人へおつなぎします。",
  },
  {
    id: "group-audit",
    title: "連結子会社監査・海外親会社対応",
    description: "海外親会社のグループ監査方針に基づく日本法人の監査、監査指示書や報告パッケージに関するご相談を承ります。",
  },
  {
    id: "accounting-advisory",
    title: "IFRS・US-GAAP対応監査",
    description: "国際財務報告基準（IFRS）や米国会計基準（US-GAAP）を用いるグループに必要な監査について、対象範囲と進め方を整理します。",
  },
  {
    id: "fund-spc",
    title: "ファンド・SPC監査",
    description: "ファンドや特別目的会社（SPC）の財務諸表監査について、スキームや必要な監査範囲を伺い、担当監査法人との連携を図ります。",
  },
  {
    id: "voluntary-audit",
    title: "任意監査",
    description: "株主・投資家・海外本社などへの説明や、取引上の要請に応じた財務諸表監査をご相談いただけます。",
  },
] as const;

export default function AuditAssurancePage() {
  return (
    <>
      <Navbar solid />
      <main id="top" className="flex-1 bg-white pt-20 text-[#0B3158]">
        <section className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
          <div className="mx-auto max-w-[1140px] px-5 pb-[62px] pt-12 sm:px-10">
            <nav aria-label="パンくずリスト" className="mb-7 flex flex-wrap items-center gap-2 text-xs leading-6 text-[#475569]">
              <Link href="/" className="hover:underline">ホーム</Link>
              <span>／</span>
              <Link href="/services" className="hover:underline">サービス</Link>
              <span>／</span>
              <span aria-current="page">監査・保証業務</span>
            </nav>
            <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">SERVICE / 05</p>
            <h1 className="mt-4 text-[clamp(28px,4.6vw,46px)] font-semibold leading-[1.4] tracking-[-.015em]">
              監査・保証業務
            </h1>
            <p id="audit-readiness" className="mt-5 max-w-[775px] scroll-mt-28 text-base leading-[2] text-[#475569]">
              法定監査・任意監査などのご相談に、提携監査法人と連携して対応。監査資料の準備や海外本社との調整など、企業側の実務も支援します。
            </p>
          </div>
        </section>

        <section id="scope" className="mx-auto max-w-[1140px] px-5 py-16 sm:px-10">
          <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">SCOPE</p>
          <h2 className="mt-3 text-[25px] font-semibold leading-normal">主な支援内容</h2>
          <p className="mt-3 text-sm leading-[1.95] text-[#475569]">
            各項目を開くと、詳しい説明をご覧いただけます。
          </p>
          <div className="mt-8 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            {auditItems.map(({id, title, description}) => (
              <details name="audit-scope" id={id} key={id}
                className="group scroll-mt-28 rounded-lg border border-[#CBD5E1] bg-white open:bg-[#EDF5FC]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-[21px] text-[15px] font-semibold leading-[1.7] marker:hidden">
                  {title}
                  <span aria-hidden="true" className="shrink-0 text-[23px] font-normal leading-none text-[#1766A0] transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="px-5 pb-[25px] text-sm leading-[2] text-[#475569]">{description}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="related" className="bg-[#EDF5FC] py-[60px] sm:pb-16">
          <div className="mx-auto max-w-[1140px] px-5 sm:px-10">
            <p className="text-xs font-bold tracking-[.2em] text-[#1766A0]">RELATED INFORMATION</p>
            <h2 className="mt-3 text-[25px] font-semibold leading-normal">関連情報</h2>
            <p id="pricing" className="mt-[21px] max-w-[920px] scroll-mt-28 text-sm leading-[2] text-[#475569]">
              <strong className="font-bold text-[#0B3158]">監査費用は個別お見積りです。</strong>
              対象企業の規模、監査範囲、リスク、必要工数などを確認し、提携監査法人と連携して適切な監査体制をご案内します。
            </p>
            <div className="mt-[22px] flex flex-wrap gap-3">
              <Link href="/cases/case-jsox" className="rounded-md border border-[#9CBDD4] bg-white px-[18px] py-3 text-sm font-semibold leading-6 hover:bg-[#E5F1FA]">
                海外拠点のJ-SOX支援事例 ↗
              </Link>
              <Link href="/pricing" className="rounded-md border border-[#9CBDD4] bg-white px-[18px] py-3 text-sm font-semibold leading-6 hover:bg-[#E5F1FA]">
                料金・参考費用を見る ↗
              </Link>
              <Link href="/contact" className="rounded-md border border-[#9CBDD4] bg-white px-[18px] py-3 text-sm font-semibold leading-6 hover:bg-[#E5F1FA]">
                監査費用・対応範囲を相談する ↗
              </Link>
            </div>
            <p className="mt-4 text-[11px] leading-[1.8] text-[#475569]">
              ※上記のJ-SOX支援事例は内部統制に関するもので、監査証明業務の事例ではありません。料金ページの参考試算も監査報酬を示すものではありません。
            </p>
          </div>
        </section>

        <section className="bg-[#0B3158] px-5 py-[66px] text-center text-white sm:pb-[70px]">
          <h2 className="text-[25px] font-semibold leading-[1.6]">
            課題に合わせた支援の形を、ご一緒に。
          </h2>
          <p className="mx-auto mb-[26px] mt-[15px] max-w-[690px] text-sm leading-[2] text-white/80">
            現在の状況、監査の目的や対象範囲を伺い、適切な監査体制と支援の進め方をご案内します。
          </p>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-[33px] py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#EDF5FC]">
            ご相談はこちら ↗
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
