# A班｜2026-10-23 サービス詳細デザイン承認と段階的実装

## ユーザーの決定
- 前回提示したHTMLの**海外監査 / 決算・FP&A / 業務改善 / Finance Setup**の4サービスのデザインを暫定承認。
- **内部統制・J-SOXのみ広告向けLPへ再設計**し、A班チャットでHTMLのデザイン確認を受ける。内部統制のNext.js改修とmain公開は承認待ち。
- 他の4サービスは先にA班ブランチへNext.jsで実装してよい。広告特化の改修は後工程。公開サイト全体の体制整備を優先。
- ただし、専門性・監査/税務/資格等の記載は別途ご主人の公開前監修が必要。

## HTMLプレビュー
- A班チャットにHTML `Luare_内部統制_J-SOX_LP_デザイン案_v2.html` を提出。ユーザー承認待ち・本番送信なし。
- 独自のCSS/SVGで、内部統制の文書化→評価→改善フロー、よくある課題6件、Luareの支援姿勢3件、3点セット図解、5支援領域、4ステップ、FAQ5問とお問い合わせCTAを表示。
- ダウンロードした単一HTMLの静的デザイン。価格金額・顧客名・実績件数・未確認資格は記載せず、閲覧用noindexとモックCTA。
- ローカルChromium：Desktop1440 / Mobile390で横方向はみ出しなし、JavaScriptエラー0、アンカー切れ0、重複ID0、FAQと送信なしモーダル操作確認済み。

## 4サービスのNext.js実装
- 新設 `src/components/ApprovedServiceDetailLayout.tsx`：4ルートが共通で使う、承認HTMLに基づく閲覧ページ。
- 新設 `src/components/ApprovedServiceDetailLayout.module.css`：当該詳細ページ内だけに有効なレスポンシブCSS。グローバルCSSやHero/Top/Navは変更していない。
- `/services/audit-assurance`, `/services/accounting-management`, `/services/finance-ops`, `/services/global-finance` の4ページに適用。
- 5つのサービスナビタブは**JavaScriptパネル切替ではなく個別URLへのリンク**。内部統制のタブは既存URL `/services/internal-control` へ移動（未承認LPはまだ実装しない）。
- 3つの通常ページは、既存 `serviceCatalog` と `ServiceTopicSections` にあった既存説明・対応内容・資料例を再利用。
- 監査は既存の詳細な説明にあったAudit Readiness、Group Audit、IFRS/US-GAAP、監査人対応等の概要を承認済み簡潔レイアウトに再配置し、既存 `#group-audit` / `#accounting-advisory` 直リンクを保持。元の長文構成はgit履歴から復元可能。
- 既存24サービスURL/アンカーのroute定義は変更なし。homeのデザインとグローバルCSSの変更なし。

## 検証・公開ゲート
- すべてA班専用featureブランチのみ。main反映、本番公開なし。
- GitHub ActionsのNext.js build/静的生成検証をPRで実施。結果はPRに追記。
- 内部統制LPはユーザーの**HTMLデザイン承認**後にNext.jsを実装し、PC/モバイル描画/アンカーを比較する。
- **4サービスはデザイン承認済みだが専門原稿承認は未完**。ご主人の監修が完了するまではmainへ統合しない。
- 実サイトの実機PC/スマホスクリーンショット比較、24リンクの実際のブラウザクリック/HTTPは司令塔・C班と引き続き検証。ソース上の対応確認を実機合格とはしない。
