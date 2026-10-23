import Link from "next/link";
import { serviceItems, servicePages, type ServicePageKey } from "@/lib/serviceCatalog";

type Props = { page: ServicePageKey; compact?: boolean };

type InternalControlDetail = { work: readonly string[]; documents: readonly string[] };
/**
 * A-03 review draft. Scope and wording require professional review before main merge.
 * No changes to existing service IDs, hrefs, or top-page design.
 */
const internalControlDetails: Record<string, InternalControlDetail> = {
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
          const detail=page==="internal-control" ? internalControlDetails[item.id] : undefined;
          return <article key={item.id} id={item.id} className="luare-guide-detail-topic">
            <h3>{item.name}</h3><p>{item.description}</p>
            {detail && <div className="mt-4 grid gap-4 border-t border-[#dae6ea] pt-4">
              <div>
                <h4 className="mb-2 text-[13px] font-semibold text-[#25485a]">主な対応内容</h4>
                <ul className="list-disc space-y-1 pl-5 text-[13px] leading-[1.8] text-[#586e7a]">
                  {detail.work.map(work=><li key={work}>{work}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-[13px] font-semibold text-[#25485a]">関連する資料・成果物の例</h4>
                <ul className="list-disc space-y-1 pl-5 text-[13px] leading-[1.8] text-[#586e7a]">
                  {detail.documents.map(document=><li key={document}>{document}</li>)}
                </ul>
              </div>
            </div>}
          </article>;
        })}
      </div>
      {page==="internal-control" && <p className="mt-6 text-[13px] leading-[1.8] text-[#586e7a]">※対応範囲・資料の内容は、対象業務とご相談内容に応じて個別に整理します。</p>}
      <Link href="/contact" className="luare-guide-detail-cta">{meta.title}について相談する →</Link>
    </div>
  </section>;
}
