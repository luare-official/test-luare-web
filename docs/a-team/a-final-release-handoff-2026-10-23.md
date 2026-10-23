# A班｜公開統合向け最終引継ぎ（2026-10-23）

## 最新の意思決定（これが旧メモの専門監修条件に優先）
- ユーザーは内部統制・J-SOX LPのHTML v2デザインを承認。
- 監査対応／決算・FP&A／業務改善／Finance SetupのHTMLデザインも承認済み。
- **2026-10-23 16時台の最新指示：「専門監修は不要です。本番ページに実装した後に夫が確認するので十分です。」**
- 従前の各報告書にある「公開前にご主人の監修必須」という記述は、ユーザーの最新方針により**更新・失効**。ご主人による確認は**本番公開後の改善フロー**とする。
- A班の権限はfeatureブランチ・PRまで。mainへのマージと公開は司令塔担当。

## 公開対象と内容
| ページ | 承認HTML実装 | コメント |
|---|---|---|
| /services/internal-control | 完了 | 承認HTML v2を移植。13 SVG、6課題、5サービス項目、5FAQ、CTAは既存/contact |
| /services/audit-assurance | 完了 | Audit Readiness・Group Audit、独立URLで表示 |
| /services/accounting-management | 完了 | 決算・FP&A・CF |
| /services/finance-ops | 完了 | 決算早期化・業務改善・AI |
| /services/global-finance | 完了 | 日本進出・Finance Setup・海外本社報告 |

M&AとBPOは既存ページを保全。A-08の提供範囲点検は別途 `a08-ma-bpo-scope-audit-2026-10-23.md` 参照。

## 技術QA — 結果
- 新たに追加したA班専用CI：`.github/workflows/a-service-links.yml`
- GitHub Actions **run 39916386673**（A班 Service Links and Anchors QA）**success**：npm ci／npm run build／ `scripts/verify-a-service-routes.mjs` がすべて成功。
- 後続の **run 39916681659** でも同検査ステップ成功。
- この検査はNext.jsの `out/index.html` にある24個のリンク、7つの実HTMLファイル、各該当IDの唯一性、5サービス相互ナビの存在、J-SOX FAQ/CTAの存在を確認する。**単なるソースファイル存在検査ではない**。
- 承認J-SOX HTMLと移植相当HTML（GitHubのscoped CSSと同一blob SHA `0080fabfefc4e4737ed6d8678389786b3b497ede`）をローカルChromiumで比較。PC1440/スマホ390において横方向のはみ出しなし・JSエラーなし、スマホメニュー開閉・FAQ開閉成功。HTMLの確認用帯を削除したため、ヒーロー開始Y座標はPCで37.8px、スマホで54px短縮されるのが意図的差分。
- 従来の `Validate Next.js build` も既存複数コミットで成功。

## 未検証の区別
- 今回の視覚テストは**approved HTMLと同じマークアップ・同一CSSを使用したローカルシミュレーション**。Next.jsそのものを起動してスクリーンショットを照合したわけではない。C班/司令塔は公開後の実サイトでPC/スマホ画面を確認し、差分があれば修正。
- 外部ネットワークから現行公開サイトの7ページへアクセスできなかったため、**本番24クリック/公開HTTP 200/公開後アンカーの画面位置**は司令塔/C班が公開後に確認。
- Lighthouse/Core Web Vitalsの計測も未実施。手戻りを減らすため上記QAの自動化は完了。

## 安全性・他班保護
- 本番・main変更0件。GitHub Pagesデプロイ未実施。
- Hero/トップの写真なしA案/共通ナビ/既存global.css/他班記事・事例・フォーム・送信機能は変更なし。
- 新規金額/顧客識別情報/資格/実績件数の追加なし。メール実送信処理の変更なし。
- 5サービスは独立URL。プレビューでの同一HTML内タブ切替は実装していない。

## 司令塔に依頼すること
1. PR #3のコード差分と新設CIを確認し、司令塔判断でmain統合・GitHub Pages公開（A班はマージしない）。
2. 公開後に実ブラウザでPC/スマホの外観、メニュー、24リンク・アンカーを検証。
3. 公開後にご主人へ実サイトの確認を依頼。指摘事項を別タスクで回収。
4. サイト全体のB班/C班のPRとは競合しないよう統合順序を調整。
