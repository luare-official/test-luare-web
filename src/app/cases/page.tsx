import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseGallery, { type ApprovedCaseStudy } from "@/components/cases/CaseGallery";

export const metadata: Metadata = {
  title: "支援事例（掲載内容確認中） | Luare Consulting",
  description: "決算・業務改善、グローバル内部統制、海外拠点のJ-SOXに関する支援内容のご紹介。掲載文面は確認中です。",
  robots: { index: false, follow: false },
};

/**
 * 本番プレビュー用・匿名化した確認原稿。
 * 顧客名、所在地、業界の組合せ、成果数値、確定的な効果を含めない。
 * ご主人の事実確認と掲載許諾後に、公開可能な事例に差し替える。
 */
const previewCases: readonly ApprovedCaseStudy[] = [
  {
    id: "accounting-operations",
    number: "01",
    category: "決算・業務改善",
    categoryGroup: "accounting",
    title: "決算資料の作成と業務フローの整理",
    summary: "部門をまたぐ情報の取りまとめや決算工程を整理する、支援内容のご紹介です。",
    lead: "掲載内容は確認中です。個別企業や達成した成果については、確認が完了するまで記載していません。",
    background: "複数の部門が関わる決算では、集計方法やデータの提出時期によって、経理業務の負担が大きくなることがあります。",
    support: "決算・キャッシュフローに関する資料の作成支援と、情報の入手から照合、締め作業に至る工程の整理を中心に、支援内容を確認しています。",
    relatedMaterials: "決算関連資料、工程整理、改善案など。個別案件で実際に作成した資料は、確認後に記載します。",
    tags: ["月次・年次決算", "業務改善", "キャッシュフロー"],
    illustration: "documents",
  },
  {
    id: "global-internal-control",
    number: "02",
    category: "グローバル内部統制",
    categoryGroup: "control",
    title: "内部統制の運用と資料整理",
    summary: "グループ方針と現場の業務を踏まえ、統制の運用を整理する支援内容のご紹介です。",
    lead: "掲載内容は確認中です。顧客情報や成果の記載は、必要な確認が済むまで控えています。",
    background: "グループ共通の統制方針を日常業務に適用する際には、各部門の役割と既存の手順を確認する必要があります。",
    support: "業務と統制の関係を把握し、担当者の役割、運用手順、証跡の残し方などを整理する支援内容を確認しています。",
    relatedMaterials: "統制上の論点整理、手順・責任分担の検討資料など。実際の成果物は確認後に記載します。",
    tags: ["内部統制", "運用支援", "証跡管理"],
    illustration: "controls",
  },
  {
    id: "overseas-jsox",
    number: "03",
    category: "海外拠点のJ-SOX",
    categoryGroup: "control",
    title: "海外拠点のJ-SOX文書化支援",
    summary: "現地業務の把握と、J-SOXの3点セットの整備に関する支援内容のご紹介です。",
    lead: "掲載内容は確認中です。国・地域、顧客業種、監査対応の実績や成果物については、確認後に反映します。",
    background: "海外拠点の業務を文書化する際には、現地での実務や業務手順を理解し、関係者との認識をそろえることが重要です。",
    support: "担当者へのヒアリング、業務フローの整理、業務記述書・フローチャート・RCMの作成・更新に関する支援内容を確認しています。",
    relatedMaterials: "業務記述書、フローチャート、RCMなど。完成範囲や評価への関与は確認後に記載します。",
    tags: ["J-SOX", "3点セット", "業務可視化"],
    illustration: "flow",
  },
];

export default function CasesPage() {
  return (
    <>
      <Navbar theme="dark" solid />
      <main className="flex-1 pt-20">
        <div style={{
          margin: "0 auto", padding: "14px 24px", maxWidth: "1160px",
          fontSize: "12px", color: "#5a6e75", lineHeight: 1.8,
          borderBottom: "1px solid #dbe3e1",
        }}>
          ご確認用の仮原稿です。現在、実績の事実関係と掲載範囲を確認しています。
        </div>
        <CaseGallery cases={previewCases} introduction="決算・業務改善や内部統制など、支援内容をご紹介します。掲載している文章は確認用の仮原稿です。" />
      </main>
      <Footer />
    </>
  );
}
