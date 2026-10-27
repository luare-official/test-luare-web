/** Source of truth: user-supplied content_master_r5.json (husband's r5). 
 * Draft professional claims and pricing require approval before any publication.
 */
export const r5Cases = [
  {
    "id": "case-close",
    "index": "01",
    "type": "経理・決算 × 業務改善",
    "industry": "エネルギー関連｜複数事業を展開する企業グループ",
    "title": "複雑な事業データと決算工程をつなぎ、早期化を支援",
    "impact": "締め作業だけでなく、データが届くまでの工程へ。",
    "intro": "エネルギー関連事業に固有の売上計上・データ集約ルールを踏まえ、限られた人員体制のもとで決算実務を支援。事業部と経理部門の双方の負荷を捉え、精度を維持しながら早期化につながる改善策を検討します。",
    "objective": "事業特性と内部ルールを守りながら、決算精度とスピードの両立を目指す。",
    "client": "企業グループ",
    "clientIssues": [
      "複数事業・売上区分ごとに異なる集計ルール",
      "限られた人員での決算業務の引継ぎ",
      "事業部と経理部門の締め工程のずれ"
    ],
    "luareActions": [
      "決算・CF業務を支援し、データ発生源まで把握",
      "事業部と経理部門の調整を通じて工程を再設計",
      "データ精度・入手時点・締め日の妥当性を検証"
    ],
    "outcomes": [
      "決算・CF関連資料",
      "締め工程と課題の整理",
      "改善施策と運用ルールの検討"
    ],
    "price": "quote-close"
  },
  {
    "id": "case-music",
    "index": "02",
    "type": "内部統制 × グローバル",
    "industry": "音楽・エンターテインメント｜グローバル企業グループ",
    "title": "グローバル企業の内部統制運用を支える",
    "impact": "グローバル方針と国内実務をつなぎ、統制の定着を後押し。",
    "intro": "音楽・エンターテインメント領域のグローバル企業に関する内部統制支援。事業特性を踏まえ、統制の考え方を日常業務に落とし込むことを重視する。",
    "objective": "統制方針を、現場で継続して運用できる形へ。",
    "client": "国内事業拠点",
    "clientIssues": [
      "グローバル方針と現場の運用に調整が必要",
      "関係部門間で手順・責任が分かれやすい",
      "統制の運用と説明可能性が重要となる"
    ],
    "luareActions": [
      "業務と統制上の論点を整理",
      "運用プロセスと役割分担を検討",
      "文書・証跡・改善の観点から実務を支援"
    ],
    "outcomes": [
      "統制論点の整理",
      "業務と統制の接点の明確化",
      "運用改善の検討材料"
    ],
    "price": null
  },
  {
    "id": "case-jsox",
    "index": "03",
    "type": "IPO準備 × J-SOX",
    "industry": "フィンテック｜日本持株会社・海外事業法人",
    "title": "海外事業拠点のJ-SOX 3点セットをゼロから構築",
    "impact": "日台の業務実態をつなぎ、IPO準備に必要な文書化と評価を支援。",
    "intro": "台湾を主要事業拠点とするFintech企業の日本上場準備において、現地の業務担当者にJ-SOXの目的と必要性を共有することから着手。言語・文化・業務慣行の違いを踏まえて業務を可視化し、上場審査・監査対応に必要な3点セットの構築と評価を支援しました。",
    "objective": "現地実務を反映したJ-SOX文書化と評価体制を整え、日本上場準備を支援。",
    "client": "日台事業拠点",
    "clientIssues": [
      "現地担当者へのJ-SOXの目的・必要性の説明",
      "日本と台湾の言語・文化・商習慣の相違",
      "上場・監査要件を満たす文書化と評価"
    ],
    "luareActions": [
      "現地担当者との対話・業務ヒアリング",
      "業務記述書・フローチャート・RCMの作成",
      "監査法人・証券会社との論点整理と評価支援"
    ],
    "outcomes": [
      "J-SOX 3点セット",
      "整備・運用評価に向けた資料",
      "外部関係者への説明準備"
    ],
    "price": "quote-jsox"
  },
  {
    "id": "case-fpa",
    "index": "04",
    "type": "FP&A支援モデル",
    "industry": "北米事業｜FP&A支援モデル",
    "title": "北米事業の現場データを経営判断につなぐFP&A体制",
    "impact": "現場の活動からKPI・予算分析まで、持続的な管理サイクルを設計。",
    "intro": "北米現地の事業責任者と日本本社の経営管理部門が、時差・言語・業務慣行を越えて同じ指標を共有するための支援モデル。現場業務が会計数値に反映されるまでを可視化し、予実管理とPDCAを組み合わせます。",
    "objective": "現場で使えるKPIを整え、HQの分析負荷を軽減しながら北米事業の意思決定を支える。",
    "clientIssues": [
      "現地とHQの時差・言語・意思決定の差",
      "現場活動と会計数値のつながりが見えにくい",
      "HQに集中する分析・報告負荷"
    ],
    "luareActions": [
      "現場業務と会計データの生成過程を把握",
      "事業KPIの定義・精度と予実分析フローを設計",
      "現地担当者とのPDCAを通じて運用定着を支援"
    ],
    "outcomes": [],
    "price": "quote-fpa",
    "model": true
  }
] as const;
export const r5Quotes = [
  {
    "id": "quote-fpa",
    "title": "北米事業のFP&A・KPI高度化支援",
    "industry": "エンターテインメント関連｜北米事業",
    "rate": 18000,
    "hoursMonth": 60,
    "months": 6,
    "scope": "北米事業責任者と本社側関係者と連携し、予実分析、事業KPI分析、指標の精度改善を支援する場合"
  },
  {
    "id": "quote-close",
    "title": "企業グループの決算実務・改善支援",
    "industry": "国内の企業グループ",
    "rate": 12000,
    "hoursMonth": 80,
    "months": 6,
    "scope": "決算関連実務、CF資料、締め工程の可視化と改善施策の検討・実行を支援する場合"
  },
  {
    "id": "quote-jsox",
    "title": "海外事業拠点のJ-SOX 3点セット構築",
    "industry": "海外事業法人を有するフィンテック関連グループ",
    "rate": 16000,
    "hoursTotal": 180,
    "months": 6,
    "scope": "業務ヒアリング、3点セットのゼロベース作成、評価準備・関係者対応を支援する場合"
  }
] as const;
export type R5Case = (typeof r5Cases)[number];
export type R5Quote = (typeof r5Quotes)[number];
export function findR5Case(id:string) { return r5Cases.find(c=>c.id===id); }
export function findR5Quote(id:string|null) {return r5Quotes.find(q=>q.id===id);}
