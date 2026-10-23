# C-09｜A/B/C一時統合QA実施報告（第2回・2026-10-23）

**合格範囲：ソース統合と静的ビルド・リンク・未承認コンテンツ公開防止。未実施：実際のPC/スマホ画面と本番HTTP。**

## 最新ブランチ構成
- GitHub `main`は既にA班のサービス改修を取り込んだ状態。以前のA班PR #3はOpen一覧に存在せず、メインのSHAは調査時`bd8cd9da66d07d6e85164a2b56d56e9c1a33435f`だった。
- C班Draft PR #4：`feature/hp-c-conversion`。PDF資料送付1通の仕様・無送信HTMLモック・匿名計測案・自動QA。
- B班Draft PR #5：`feature/hp-b-content` / `f9a2ab11ee45b5ce6616990549043dabcc8d9fd8`。3つの未承認記事と非公開フラグ。
- B班Draft PR #6：`feature/hp-b-cases-approved-ui` / `94c6382e961ba310daa4f821f41d5aa1da85db9a`。支援事例の未接続UI。
- B班Draft PR #7：`feature/hp-b-insights-seo` / `1c18bf7d8871d4501ffc179fbc5d1b2f7f225e66`。Insightsの日本語・関連記事導線・canonical整備。

**技術的な統合検証だけを目的とし、GitHub Actions runner内の`qa-ephemeral-only`に3つのB班変更をローカルmergeする。外部ブランチ・`main`にはpushしない。権限は`contents: read`、`SEND_ENABLED=false`。** ソースSHAを固定し、更新時に想定外の変更が入ればテストを停止する。

## GitHub Actions実行結果
対象C班head：`faa89735d28941d8ea0e932a152261056324d623`。
- [一時統合CI run 39918159692](https://github.com/luare-official/test-luare-web/actions/runs/39918159692) **SUCCESS**：3件のB班PRのSHA照合→ローカルmerge→`npm ci`→Next.js build→C班の24リンク静的検査→A班サービスアンカー検査→B班未承認公開防止検査、すべてsuccess。
- [C班通常CI run 39918159606](https://github.com/luare-official/test-luare-web/actions/runs/39918159606) **SUCCESS**：C-08メール模擬試験、C-10匿名イベント漏えい防止試験、Next.js build、24リンク検査。
- [通常Next.js build run 39918159531](https://github.com/luare-official/test-luare-web/actions/runs/39918159531) **SUCCESS**。
- コンフリクト0件（本スナップショット）。B班の3つの未承認記事は`draft:true`で`/insights`一覧・静的記事ページへの出力なし。B班事例UIを公開するルートは未接続であり、今回のテストで実在事例の公開を許可するものではない。
- C班のPDF資料請求用HTMLはデザイン未承認の静的モックのまま。実メール送信0件、料金PDFのGitHub/静的サイトへの追加なし。

## 残る公開前ゲート（未合格）
1. **実画面デザイン比較**：A班で承認されたHTMLと実装版をPC(1440×900)、モバイル(390×844/360×800)で並べたスクリーンショットや、実タップ・hover・キーボードの操作証跡は未取得。CIによるHTML検査だけではレイアウト一致は証明できない。
2. **本番サイトHTTP・検索用ファイル**：検索ツールに表示されたサイト情報は古いキャッシュの可能性がある。現行の`/robots.txt`、`/sitemap.xml`、各サービスURLのHTTPステータス・canonical・OGPは実アクセス/デプロイ状態に即して別途要検証。
3. **C班の個人情報/メール**：フォーム初回HTMLデザイン・正式プライバシーポリシー・メール本文・差出人・本番送信プロバイダ/DNS・テスト宛先は未承認。
4. **正式料金PDF**：ご主人確認待ち。金額入り初稿はチャット内に限定し、公開GitHubへは含めていない。
5. **B班の実績・記事**：事例の許諾、本文・経歴の専門監修、記事公開日は司令塔の別ゲート。UIが静的にビルドできることは掲載内容の承認ではない。

## 引継ぎ
- [C班PR #4](https://github.com/luare-official/test-luare-web/pull/4)は**Draftのまま**。司令塔の統合PR前に本報告を確認。3件B班PRとC班を合わせた同時ビルドは成功だが、これをもって「公開可能」とは判定しない。
- 追試時はB班3PRの最新headを再確認し、CI内SHAを更新してから再実行する。実メール・本番反映は一切行わない。
