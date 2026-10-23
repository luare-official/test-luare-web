# A班｜内部統制・J-SOX LP HTML承認後のNext.js実装・QA（2026-10-23）

## 承認履歴・公開ゲート
- 2026-10-23、ユーザーが「内部統制のLP、承認します。」と回答。**広告向けLPのHTML v2デザインを承認**。
- 承認対象ソース：A班チャットの `Luare_内部統制_J-SOX_LP_デザイン案_v2.html`。
- 専門的内容の提供範囲や監査・税務・資格等の表記は**別途ご主人監修待ち**であり、デザイン承認を公開承認として扱わない。
- main push・PR merge・本番デプロイなし。**Draft PR #3のまま司令塔へ引継ぎ**。

## 実装
- `src/components/JsoxLandingPage.tsx`：承認済みHTMLの静的本文・SVG図・FAQ・パンくず・独自ヘッダー/フッターを同一構造で移植。
- `src/components/JsoxLandingPage.css`：承認HTMLから抽出したCSSを `.jsox-lp` にスコープ化して移植。既存のグローバルCSSや他班のページには触れない。
- `src/app/services/internal-control/page.tsx`：既存の公開用URLへコンポーネントを割り当て、タイトル・説明・canonical / OGを設定。
- 承認プレビュー専用のリボン、メール送信のないモーダル、DESIGN REVIEW ONLY文言を撤去。問い合わせCTAは既存の `/contact` へリンク。新しいフォーム送信処理は作らず、C班担当と競合しない。
- モバイルのハンバーガーメニューだけ、プレビューリボン撤去に合わせてメニュー開始位置を66pxに調整。

## 対応表・検証
| 対象 | 確認結果 |
|---|---|
| SVG図 | 元HTML13 / Next内静的HTML13 |
| FAQ（details/summary） | 5 / 5 |
| セクション | 8 / 8 |
| 課題カード | 6 / 6 |
| 5支援項目 | 5 / 5 |
| ID重複 | 0 |
| ページ内リンクとIDの対応 | 不一致0 |
| トップからの既存internal-controlの5アンカー | 全て維持（internal, three-documents, evaluation, internal-audit, training） |
| 問い合わせ | 既存 `/contact` にリンク、実送信テスト0 |
| サービス全体のURL | 5つの独立URLナビを維持／サービス定義の24項目は無変更 |
| CSS保護 | `.jsox-lp` 接頭辞でスコープ化。共有 `globals.css` 未変更 |
| ビルド | GitHub Actions Validate Next.js build run **39914625619**：成功、静的出力確認 |

## 検証の限界／司令塔＋C班の残タスク
- 旧承認HTMLはローカルChromiumでPC 1440px・スマホ390pxの閲覧とリンク/FAQを検証済み。**今回のNext.js実装後の実ブラウザ画像・ピクセル差分・モバイルメニューの操作は未検証**。
- CIはNext.jsのビルド/静的生成であり、PC/モバイル見た目、全24本番URLのHTTP 200やアンカースクロール動作を保証しない。
- 司令塔＋C班がPR実装画面と承認HTMLを比較、全24リンクのクリック/アンカー実機QA、Core Web Vitals・基本SEO・アクセシビリティを横断確認する。
- 監査/税務・提供範囲・内部監査等の専門表現はご主人が確認した後でなければmainへ統合しない。
