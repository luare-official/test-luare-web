import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";
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
    id:"accounting-operations",
    number:"01",
    category:"決算・業務改善",
    categoryGroup:"accounting",
    title:"複雑な事業データと決算工程をつなぎ、早期化を支援",
    summary:"事業部門から経理部門へデータが届く工程に踏み込み、決算の精度とスピードの両立を検討。",
    lead:"掲載内容確認中の原稿です。企業名や成果を特定できる情報は公開前に確認します。",
    background:"複数事業を展開する企業グループでは、事業ごとに売上の集計ルールが異なり、限られた経理人員で決算の精度と提出期限を両立することが課題でした。",
    support:"事業部と経理部の両方の工程を把握し、データの収集・照合から決算・キャッシュフロー資料の作成まで、改善すべき作業と引継ぎ事項を整理する支援です。",
    relatedMaterials:"決算・CF資料、締め工程の整理、改善施策と運用ルールの検討。具体的な提供範囲は確認中です。",
    issues:["複数事業・売上区分で異なる集計ルール","限られた人員での決算業務と引継ぎ","事業部と経理部門で締め工程がずれる"],
    actions:["決算・CF資料の作成を支援し、元データの発生源を確認","事業部・経理部門の作業時点と役割分担を整理","データ精度、入手時点、締め日の妥当性を検討"],
    outputs:["決算・CF関連資料","締め工程と課題の整理","改善施策・運用ルールの検討"],
    tags:["決算実務","キャッシュフロー","業務改善"],
    illustration:"documents",
  },
  {
    id:"global-internal-control",
    number:"02",
    category:"グローバル内部統制",
    categoryGroup:"control",
    title:"グローバル方針を、現場で継続できる内部統制の運用へ",
    summary:"本社の統制方針と国内事業の業務実態を照合し、責任分担や証跡の整理を支援。",
    lead:"掲載内容確認中の原稿です。実際の担当範囲や成果物は確認後に確定します。",
    background:"グローバル企業の国内事業拠点では、全社共通の統制方針を日々の業務に落とし込む際に、担当者や関係部門の役割が複雑になりがちです。",
    support:"業務と統制の論点を洗い出し、運用プロセスと責任分担を検討。文書・証跡の残し方と改善の進め方を、現場の実務に沿って整理します。",
    relatedMaterials:"統制上の論点整理、業務と統制の対応、運用改善の検討資料。個別案件の成果物は確認後に確定します。",
    issues:["本社方針と現場の運用に調整が必要","部門ごとに手順や責任が分かれている","監査人へ説明できる運用記録の整理が必要"],
    actions:["業務と統制上の論点を整理","統制を実行する担当者・承認者・役割分担を確認","文書・証跡・改善課題の観点で実務を支援"],
    outputs:["統制論点の整理","業務と統制の接点の明確化","運用改善の検討資料"],
    tags:["内部統制","グループ方針","証跡・運用"],
    illustration:"controls",
  },
  {
    id:"overseas-jsox",
    number:"03",
    category:"海外拠点・J-SOX",
    categoryGroup:"control",
    title:"海外事業拠点のJ-SOX 3点セットをゼロから構築",
    summary:"海外拠点の業務をヒアリングし、現地実務に沿った業務記述書・フローチャート・RCMの整備と評価準備を支援。",
    lead:"掲載内容確認中の原稿です。個別企業を特定しうる国・地域や案件情報の公開は確認後に判断します。",
    background:"日本での上場準備に関わる海外事業拠点では、現地担当者にJ-SOXの目的を説明し、言語や商習慣の違いを越えて実際の業務を把握する必要があります。",
    support:"現地担当者との対話・業務ヒアリングを出発点に、3点セットの文書化、整備・運用評価に向けた資料の準備、監査法人等の関係者との論点整理を支援します。",
    relatedMaterials:"業務記述書、フローチャート、RCM、評価準備資料、外部関係者向けの説明資料。成果物の具体的な範囲は確認中です。",
    issues:["現地担当者にJ-SOXの目的・必要性を共有する","日本と海外の言語・商習慣や業務手順に違いがある","上場・監査要件に合わせて文書化と評価準備を進める"],
    actions:["現地担当者へのヒアリングと業務可視化","業務記述書・フローチャート・RCMの作成支援","監査関係者への説明準備と評価に向けた論点整理"],
    outputs:["J-SOXの3点セット","整備・運用評価の準備資料","関係者への説明・照会の準備"],
    tags:["J-SOX","3点セット","海外拠点"],
    illustration:"flow",
  },
];

export default function CasesPage() {
  return (
    <>
      <Navbar theme="dark" solid />
      <main className="flex-1 pt-20">
        <div style={{
          margin: "0 auto", padding: "14px 24px", maxWidth: "1160px",
          fontSize: "12px", color:"#475569", lineHeight: 1.8,
          borderBottom: "1px solid #dbe3e1",
        }}>
          ご確認用の仮原稿です。現在、実績の事実関係と掲載範囲を確認しています。
        </div>
        <CaseGallery cases={previewCases} introduction="決算・業務改善や内部統制など、支援内容をご紹介します。掲載している文章は確認用の仮原稿です。" />
        <section className="mx-auto max-w-[1160px] px-5 pb-20 sm:px-10" aria-labelledby="fpa-model">
          <div className="border-t border-[#CBD5E1] bg-[#EDF5FC] px-6 py-8 sm:px-10 sm:py-11">
            <span className="text-xs font-semibold tracking-[0.12em] text-[#475569]">SUPPORT MODEL / 参考</span>
            <h2 id="fpa-model" className="mt-3 text-2xl font-semibold tracking-tight text-[#0B3158] sm:text-3xl">
              FP&amp;Aの支援モデル
            </h2>
            <p className="mt-3 max-w-[750px] text-sm leading-8 text-[#475569]">
              海外事業の現場データと本社の管理指標をそろえ、予算・実績の分析やKPI管理を行うための支援イメージです。
              こちらは顧客の実績事例ではなく、提供内容を検討するためのモデルです。
            </p>
            <Link href="/services/accounting-management#fpa" className="mt-6 inline-block border-b border-[#1766A0] pb-1 text-sm font-semibold text-[#0B3158] hover:border-transparent">
              FP&amp;Aのサービス内容を見る →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
