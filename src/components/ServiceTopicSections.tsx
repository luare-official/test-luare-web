import Link from "next/link";
import { serviceItems, servicePages, type ServicePageKey } from "@/lib/serviceCatalog";

type Props = { page: ServicePageKey; compact?: boolean };

type InternalControlDetail = { work: readonly string[]; documents: readonly string[] };
/**
 * User direction: publish the existing approved service scope, then husband reviews on the live site.
 * No changes to existing service IDs, hrefs, or top-page design.
 */
export const serviceTopicDetails: Record<string, InternalControlDetail> = {
  internal: {
    work: ["対象業務の主要リスクを整理", "既存ルールと担当者・承認者の役割を確認"],
    documents: ["統制対象業務・論点の整理", "構築・改善に向けた検討事項"],
  },
  "three-documents": {
    work: ["現場へのヒアリングと業務プロセスの確認", "業務変更に応じた既存文書の更新"],
    documents: ["業務記述書", "フローチャート", "リスク・コントロール・マトリクス（RCM）"],
  },
  evaluation: {
    work: ["整備状況と実際の運用状況の確認", "証憑や確認履歴を踏まえた課題の整理"],
    documents: ["評価調書", "改善課題一覧"],
  },
  "internal-audit": {
    work: ["リスクに応じた確認範囲の整理", "確認結果・改善状況のフォロー"],
    documents: ["確認項目と論点の整理", "改善状況のフォロー事項"],
  },
  training: {
    work: ["統制の目的と業務担当者の役割を共有", "必要な作業と証拠の残し方を確認"],
    documents: ["研修用資料", "実務上の質問・対応事項の整理"],
  },
  // A-05: r5 finance / accounting-management. Examples; confirm scope before publishing.
  closing: {
    work: ["月次・年次・連結決算の対象と締め工程を整理", "計上根拠・勘定残高・関係部門との確認事項を整理"],
    documents: ["決算関連資料", "照合・確認事項の整理"],
  },
  fpa: {
    work: ["予算と実績の差異を整理", "事業活動につながるKPIの定義と分析手順を確認"],
    documents: ["予実分析", "KPIレポート"],
  },
  cashflow: {
    work: ["BS・PLと補助資料の整合を確認", "営業・投資・財務キャッシュフローの整理を支援"],
    documents: ["キャッシュ・フロー関連資料", "整合確認事項の整理"],
  },
  // A-06: business-process improvements are distinguished from recurring BPO.
  "close-improvement": {
    work: ["データの精度・入手タイミングを確認", "部門間リードタイムと締め日の設定を整理"],
    documents: ["決算工程の整理", "課題・改善施策一覧"],
  },
  process: {
    work: ["担当・工程・使用資料を可視化", "属人化した作業や二重入力を洗い出し"],
    documents: ["業務フロー", "改善施策一覧"],
  },
  "system-implementation": {
    work: ["業務要件と移行対象データを整理", "データ移行後の照合と運用手順を確認"],
    documents: ["移行・照合資料", "運用上の確認項目"],
  },
  ai: {
    work: ["自動化の対象作業と確認責任を整理", "機密性と人による検証手順を確認"],
    documents: ["自動化候補の整理", "運用上の確認手順"],
  },
  "operating-model": {
    work: ["承認・照合・引継ぎの役割を整理", "改善後も継続できる業務ルールを確認"],
    documents: ["運用ルール", "業務手順・引継ぎ資料"],
  },
  // A-07: cross-border setup / reporting, not legal incorporation or tax filing.
  "market-entry": {
    work: ["日本法人の管理業務に必要な準備事項を整理", "登記・税務等の専門家との連携事項と進捗を整理"],
    documents: ["設立準備に関する業務整理", "専門家連携・進捗確認事項"],
  },
  "finance-setup": {
    work: ["勘定科目と会計システムに求める条件を整理", "決算・承認・報告フローを設計"],
    documents: ["経理体制設計", "勘定科目マッピング・運用設計書"],
  },
  "hq-reporting": {
    work: ["海外本社の報告要件と日本側のデータを照合", "月次報告とグループ管理に必要な数値を整理"],
    documents: ["月次報告パッケージ", "本社報告・照合項目の整理"],
  },
  coordination: {
    work: ["本社・日本法人・外部専門家間の作業を整理", "日英中を用いた認識合わせと進捗調整"],
    documents: ["調整事項の整理", "関係者間の進捗・確認事項"],
  },
};

export default function ServiceTopicSections({page,compact=false}: Props){
  const meta=servicePages[page];
  const topics=serviceItems.filter(item=>item.page===page);
  return <section className="luare-guide-detail" aria-label={meta.title}>
    <div className="luare-guide-detail-inner">
      {!compact && <nav className="luare-guide-detail-breadcrumb" aria-label="パンくずリスト">
        <Link href="/">ホーム</Link><span aria-hidden="true">/</span><Link href="/#services">サービス</Link>
        <span aria-hidden="true">/</span><span aria-current="page">{meta.title}</span>
      </nav>}
      <p className="luare-guide-detail-kicker">SERVICE DETAILS</p>
      {compact ? <h2>{meta.title}の主な支援内容</h2> : <h1>{meta.title}</h1>}
      <p className="luare-guide-detail-intro">{meta.intro}</p>
      <div className="luare-guide-detail-list">
        {topics.map(item=>{
          const detail=page!=="audit-assurance" && page!=="ma-finance" && page!=="bpo" ? serviceTopicDetails[item.id] : undefined;
          return <article key={item.id} id={page==="audit-assurance" && item.id==="group-audit" ? undefined : item.id} className="luare-guide-detail-topic">
            <h3>{item.name}</h3><p>{item.description}</p>
            {detail && <div className="mt-4 grid gap-4 border-t border-[#CBD5E1] pt-4">
              <div>
                <h4 className="mb-2 text-[13px] font-semibold text-[#0B3158]">主な対応内容</h4>
                <ul className="list-disc space-y-1 pl-5 text-[13px] leading-[1.8] text-[#475569]">
                  {detail.work.map(work=><li key={work}>{work}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-[13px] font-semibold text-[#0B3158]">関連する資料・成果物の例</h4>
                <ul className="list-disc space-y-1 pl-5 text-[13px] leading-[1.8] text-[#475569]">
                  {detail.documents.map(document=><li key={document}>{document}</li>)}
                </ul>
              </div>
            </div>}
          </article>;
        })}
      </div>
      {page!=="audit-assurance" && page!=="ma-finance" && page!=="bpo" && <p className="mt-6 text-[13px] leading-[1.8] text-[#475569]">※対応範囲・資料の内容は、対象業務とご相談内容に応じて個別に整理します。</p>}
      <Link href="/contact" className="luare-guide-detail-cta">{meta.title}について相談する →</Link>
    </div>
  </section>;
}
