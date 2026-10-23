# C-08｜料金PDF 1通方式：モック連携試験記録
2026-10-23／C班。対象PR #4／コミット `13694e91067360222cdb545013bf8e5ac86a189f`。
**料金PDFの内容はユーザーから後日指示を受けるため保留。本人確認なし・PDF添付1通方針のみ決定済み。**

## 実行結果
- [C-team static export QA：run 39911298705](https://github.com/luare-official/test-luare-web/actions/runs/39911298705)：**success**。内訳：`npm ci`、`node --test scripts/qa/c08-mock-delivery.test.mjs`、Next.js build、24リンク静的出力検査はいずれもsuccess。
- [Validate Next.js build：run 39911298713](https://github.com/luare-official/test-luare-web/actions/runs/39911298713)：**success**。本番用Next.js build（デプロイなし）。
- **13テストケース（Node標準のtest harness）、失敗0**。GitHub Actionsのmock-deliveryテストstep成功を確認。
- **実メール送信 0件、実PDF 0件、実顧客の情報 0件、外部送信API呼び出し 0件、本番変更 0件。** 宛先は `.invalid` の架空ドメインに限定。

## モックの試験項目
| No | ケース | 期待結果 |
|---|---|---|
| 1 | 申込1件 | 模擬PDF添付メール記録を1件のみ作る |
| 2 | 同じ申込ID＋同じ内容の再送 | 重複送信0件 |
| 3 | 同じ申込ID＋別宛先 | 競合エラー・追加送信0件 |
| 4 | 現実のメールアドレスを誤投入 | `.invalid` 以外拒否 |
| 5 | PDF未承認 | fail closed、送信0件 |
| 6 | メール事業者障害を模擬 | fail closed、送信0件 |
| 7 | 申込頻度制限 | 上限超過を停止 |
| 8 | メール形式不正 | 送信0件 |
| 9 | 個人情報の必須同意なし | 送信0件 |
| 10 | 氏名なし | 送信0件 |
| 11 | 申込ID不正 | 送信0件 |
| 12 | 会社名の文字数超過 | 送信0件 |
| 13 | 宛先メール大文字・小文字の差 | 同一宛先として制限 |

## 検証対象
- `scripts/qa/c08-mock-delivery.mjs`：Node上のメモリ内シミュレーター。ネットワーク送信/Resendクライアント/外部PDFへのアクセス無し。
- `scripts/qa/c08-mock-delivery.test.mjs`：13件のテスト。
- `.github/workflows/c-team-qa.yml`：PRにて上記テストを自動実行するCI。従来のビルド・24リンク検査も維持。

## 限界と今後の受入条件
**これは完全にローカルなモック試験であり、本番Cloudflare Workers/Resend/R2/Turnstile/D1の結合テストではない。** メールヘッダー、添付実体の破損、送達率、DNS、セキュリティスキャナ・端末の操作、クラウドの同時申込での分散排他などは今回検証していない。

今後の実装・確認の順序：
1. 料金PDF正式内容、版・失効日（D-06）の決裁（ユーザーが後日連絡予定）。
2. 個人情報/利用目的・削除・メール本文・差出人・利用サービス費用と契約（D-07）の承認。
3. 安全なテスト専用メールボックス（D-08）の指定と、最初は`SEND_ENABLED=false`の維持。
4. Cloudflare Workers等の実装を行い、テスト環境でテスト宛先allowlistのみを有効化。二重送信・429・タイムアウト・送信失敗・サイズ超過などを**実サービスで**検証。
5. 承認済みHTMLとのPC/SP比較、フォームの実画面QA、司令塔が本番へ統合する前の最終確認。内容・個人情報・送信機能は承認前公開しない。

未承認の資料・メール・デザインの本番公開はしない。
