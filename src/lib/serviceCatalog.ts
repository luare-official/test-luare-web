/**
 * Public review copy for Luare Consulting's service directory.
 * Source: approved photo-free A layout and r5 service scope drafts.
 * User direction (2026-10-23): husband reviews professional wording after initial launch.
 * Do not add pricing, customer-identifying case details, or secrets here.
 */
export type ServiceCategory = {
  number: string;
  title: string;
  lead: string;
  itemIds: readonly string[];
};
export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  page: string;
  href: string;
};
export const serviceCategories: readonly ServiceCategory[] = [
  { number:"01", title:"内部統制・J-SOX・内部監査", lead:"構築から評価・改善まで、実務に根付く内部統制を支援。", itemIds:["internal","three-documents","evaluation","internal-audit","training"] },
  { number:"02", title:"会計・決算・経営管理支援", lead:"数字を作る実務から、意思決定に使える経営情報の整備まで。", itemIds:["closing","outsourcing","fpa","cashflow","accounting-advisory"] },
  { number:"03", title:"業務改善・AI・システム支援", lead:"現場の工程を見極め、仕組みとテクノロジーの両面から改善。", itemIds:["close-improvement","process","ai","system-implementation","operating-model"] },
  { number:"04", title:"日本進出・海外拠点支援", lead:"日本と海外、現地実務と本社経営管理の接点を整備。", itemIds:["market-entry","finance-setup","reporting","hq-reporting","coordination"] },
] as const;

const topics: readonly [string,string,string,string][] = [
  ["internal","内部統制・J-SOX構築","対象業務のリスク、既存ルール、責任分担を整理し、企業規模と運用実態に応じた内部統制の構築を支援します。","internal-control"],
  ["three-documents","3点セット作成・更新","業務担当者へのヒアリングを通じて、業務記述書・フローチャート・RCMを整備し、業務変更に合わせた更新まで対応します。","internal-control"],
  ["evaluation","整備・運用評価支援","統制目的と実際の運用を照合し、必要な証憑や確認履歴を踏まえた評価・改善を支援します。","internal-control"],
  ["internal-audit","内部監査・統制高度化","リスクに応じた確認範囲の整理から、内部監査実務の支援、改善状況のフォローまで対応します。","internal-control"],
  ["training","内部統制研修","役割別の研修を通じて、統制の目的・必要な作業・証拠の残し方を実務担当者と共有します。","internal-control"],
  ["accounting-advisory","会計アドバイザリー・監査対応支援","会計上の論点整理、監査法人向け資料準備、照会対応に必要な根拠整理を支援します。","audit-assurance"],
  ["group-audit","Group Audit・海外監査人対応","海外Group Auditorとの照会や提出資料の準備、日本法人と監査人との調整を支援します。","audit-assurance"],
  ["closing","月次・年次・連結決算支援","日々の集計から月次・年次・連結決算まで、計上根拠の確認や関係部門との調整を含めて支援します。","accounting-management"],
  ["fpa","予算管理・FP&A／事業KPI分析","事業活動と会計数値のつながりを把握し、予実差異・KPIの定義と分析フローの整備を支援します。","accounting-management"],
  ["cashflow","キャッシュ・フロー作成支援","BS・PL・補助資料の整合を確認し、営業・投資・財務キャッシュフローの作成プロセスを支援します。","accounting-management"],
  ["close-improvement","決算早期化・業務標準化","取引データの精度と取得時点、部門間リードタイム、締め日の設定を見直し、無理のない決算早期化を支援します。","finance-ops"],
  ["process","業務可視化・プロセス改善","誰が・いつ・何を行うかを可視化し、属人化した作業や二重入力を整理して、運用可能な手順へ再設計します。","finance-ops"],
  ["system-implementation","システム導入・データ移行支援","新システムへの切替に向けて業務要件・データ移行・照合作業・運用上の注意点を整理します。","finance-ops"],
  ["fdd","財務デューデリジェンス","M&Aに際して財務の状況や論点を整理し、判断に必要な情報を提供する支援です。","ma-finance"],
  ["valuation","企業価値・株価算定","企業価値や株価について、前提条件・算定方法・必要資料を整理する支援です。","ma-finance"],
  ["pmi","PMI・統合後の管理体制","統合後の会計・財務管理、報告業務、役割分担などの検討を支援します。","ma-finance"],
  ["market-entry","日本法人設立準備・専門家連携","設立準備に必要な管理業務を整理し、登記・税務等の専門家との役割分担と進捗管理を支援します。","global-finance"],
  ["finance-setup","Finance Setup・経理体制構築","勘定科目、会計システム要件、決算・承認フローを整備し、経理業務の立上げを支援します。","global-finance"],
  ["hq-reporting","海外子会社管理・本社報告","グループ報告の要件と現地データを照合し、月次報告や経営管理に必要な情報を整理します。","global-finance"],
  ["coordination","日英中での業務・プロジェクト調整","言語や商習慣の違いを踏まえ、本社・現地・専門家間の認識をそろえ、実務の実行を支援します。","global-finance"],
  ["outsourcing","経理・財務実務支援／アウトソーシング","経理担当者の不足や業務集中に対応し、運用条件と責任分担を明確にしたうえで実務を支援します。","bpo"],
  ["ai","AIを活用した経理業務効率化","データ機密性や確認手順を考慮し、適切な作業にAI・自動化ツールを組み合わせます。","finance-ops"],
  ["operating-model","業務ルール・運用体制の整備","承認・照合・引継ぎの方法を明確にし、改善後の業務が継続できる管理体制づくりを支援します。","finance-ops"],
  ["reporting","記帳・決算・レポーティング代行","日本法人の月次決算から海外本社向け報告資料の作成まで、日常業務と報告を一体で支援します。","bpo"],
];

function route(page:string,id:string):string {
  if(page==="bpo") return `/bpo#${id}`;
  // Parent page opens at its top; subtopics jump directly to the matching section.
  if(page==="internal-control"&&id==="internal")return "/services/internal-control";
  return `/services/${page}#${id}`;
}
export const serviceItems: readonly ServiceItem[] = topics.map(([id,name,description,page])=>({
  id,name,description,page,href:route(page,id)
}));
export function findServiceItem(id:string):ServiceItem|undefined{
  return serviceItems.find(item=>item.id===id);
}
export const servicePages = {
 "internal-control": {title:"内部統制・J-SOX構築支援", intro:"業務の実態に沿って、内部統制の構築から文書化・運用評価まで支援します。"},
 "audit-assurance": {title:"監査・海外監査人対応支援", intro:"海外親会社・日本法人・監査人の間に立ち、監査対応に必要な実務を支援します。"},
 "accounting-management": {title:"会計・決算・経営管理支援", intro:"決算の実務を整え、経営に必要な数字が届く仕組みづくりを支援します。"},
 "finance-ops": {title:"決算早期化・業務改善支援", intro:"現場の業務フローを見直し、負荷の軽減と確かな業務運営を目指します。"},
 "ma-finance": {title:"M&A・Finance Advisory", intro:"事業の意思決定に必要な財務分析やプロジェクト支援を行います。"},
 "global-finance": {title:"日本進出・海外拠点支援", intro:"日本と海外の経理実務、本社報告、管理体制の整備を支援します。"},
 "bpo": {title:"Luare BPO", intro:"継続的な経理運営を、人に依存しすぎない仕組みで支えます。"}
} as const;
export type ServicePageKey = keyof typeof servicePages;
