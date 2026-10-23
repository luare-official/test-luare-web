# A班｜A-03〜A-07 実装・QA引継ぎ（2026-10-23）

## 重要：現行公開版の保護と新しいHTML承認フロー
- 承認済み「写真なし案A・余白のある縦一覧」のトップページ、Hero、Nav、CSSを変更していません。
- **下層の新規デザインを制作したのではなく**、既に公開済みの `ServiceTopicSections` を用いた下層ページに、r5原案に基づく内容例を追加しています。新たな色・画像・アニメーションは追加していません。
- 今後、各ページに別途承認済みHTMLが指定された場合はそれを正本に、見た目・動き・レスポンシブを完全照合してから実装します。
- 本PRは**draft・専門監修前・本番適用禁止**です。mainへの直接変更はありません。

## 変更点
1. **A-03 J-SOX／内部統制**：`/services/internal-control` の既存5節に「主な対応内容」「関連する資料・成果物の例」を追加。3点セット、評価調書、改善課題など、原案・既存内容を元に整理。既存の5つの見出しIDは変更していない。
2. **A-04 Group Audit**：`/services/audit-assurance#group-audit` を、末尾の短い要約ではなくページ中ほどの「Group Audit対応」詳細セクションへ移動。Audit Instruction、提出資料、期限、質疑対応を整理。同一ページ上の同名ID重複を避けている。
3. **A-05 会計・決算・FP&A**：`/services/accounting-management` 内の `#closing` / `#fpa` / `#cashflow` の資料・対応内容を追加。
4. **A-06 業務改善・AI**：`/services/finance-ops` 内の `#close-improvement` / `#process` / `#system-implementation` / `#ai` / `#operating-model` の対応内容例を追加。継続的なBPO契約・送信機能には触れない。
5. **A-07 日本進出・海外拠点**：`/services/global-finance` 内の `#market-entry` / `#finance-setup` / `#hq-reporting` / `#coordination` の工程・関連資料例を追加。登記・税務は専門家との連携に限定した草稿とした。
6. **他班保護**：`/bpo` / insights / about / contact / privacy / HomeSections / Hero / Navbar / グローバルCSS は変更していない。`/services/ma-finance` もr5に詳細資料がないため未改修（A-08の役務確認待ち）。

## ソース・ビルド検証結果
- GitHub `main` に既存5分類24項目。今回の変更で**24項目とIDは増減していない**。
- 親ルート7種類のファイルを確認。リンク先とReactのID生成を照合し、24項目のソース上の対応は全件あり、項目ID重複なし。
- 拡充した説明を持つ項目は17（J-SOX 5・決算3・業務改善5・海外拠点4）。
- 既存CSSに`scroll-margin-top:112px`とモバイル時1列化があることを確認。Group Audit側も`scroll-mt-28`を付与し、アンカーの重複を回避した。
- GitHub Actions `Validate Next.js build`（run **39904335387**）で `npm ci`、`npm run build`、生成HTMLの主要ページ存在検査が**success**。
- **未検証**：変更後ページの実機スクリーンショット、HTML承認版とのピクセル・動作比較、実ブラウザの24クリック、PC・スマホのスクロール先、GitHub Pages公開後のHTTP応答。現行CIはビルドとファイル存在を検査するだけで、視覚QAではない。司令塔＋C班の横断QAで補うこと。

## 専門監修・公開ゲート
- **J-SOX/内部監査**：評価支援の範囲、監査意見の発行主体との区別、成果物の例示が妥当か。
- **Group Audit**：Audit Instruction対応の範囲、監査人・監査法人とLuareの分担、および独立性。
- **月次/連結・CF/FP&A**：実務として提供する範囲、作成支援と保証業務の混同がないか。
- **日本法人設立準備/税務**：登記・税務申告など他士業の独占業務をLuareが直接提供すると誤認させないか。
- **実績/資格**：本PRで新規実績、経歴、資格、提携社名は追加していない。既存HPにある表記も別途ご主人監修が必要。
- 監修未完の現状はmainへマージせず、検証済み専門文言のみ司令塔が公開判断する。料金額・顧客情報・認証情報・送信実行は追加していない。

## 司令塔への引継ぎ
1. Draft PR #3 のレビューをお願いします。A-03〜A-07は機能実装済みですが、専門監修ゲートで「確認待ち」です。
2. C班と共同でPC/モバイル表示・レスポンシブ・リンク/アンカーの実ブラウザテストを実施してください。
3. 専門事項の判断が済んだ範囲だけ公開してください。A班がmainへmergeすることはありません。
4. A-01（24リンク実機テスト）の完了判定も実ブラウザQA結果を見てからお願いします。
5. A-08 M&A/BPO本文は提供可否・権限確認後に進めます。

関連PR: https://github.com/luare-official/test-luare-web/pull/3
