# C-01／C-09｜本番公開サイト Chromium ブラウザQA（2026-10-23）

## 結論（証跡あり）
**公開サイトで24/24サービス項目のリンク遷移を確認。PC1440、スマホ390/360の3画面幅×3ページ＝計9枚の実スクリーンショットを採取。主な公開ページと2言語のお問い合わせのHTTP 200を検証した。実画面の承認HTMLとのピクセル比較は未実施。**

- 検査：GitHub Actions Chromium（Playwright）／2026-10-23 07:54～07:55 UTC／日本時間16:54～16:55。対象URL `https://luare-consulting.com`。公開ページへの**読み取り・DOMリンク操作のみ**。
- [Actions実行 run 39920811102](https://github.com/luare-official/test-luare-web/actions/runs/39920811102)：workflow **success**（注意：ジョブのsuccessはスクリプト内の警告0を意味しない）。
- [証跡ZIP（artifact ID 12487436321）](https://github.com/luare-official/test-luare-web/actions/runs/39920811102/artifacts/12487436321)：実ページスクリーンショット9枚、browser-qa-report.json、要約テキスト。保持期間は**7日**。料金PDFや顧客情報は含めない。
- テストソース `scripts/qa/c01-live-browser.mjs` / `.github/workflows/c-team-live-browser-qa.yml`。`SEND_ENABLED=false`。料金PDFの送信・フォームのsubmit/POST・外部メール0件。

## 実測
| 項目 | 結果 | 正確な範囲 |
|---|---|---|
| トップのサービス24項目 | **24/24 OK** | 公開トップにある24個のリンク要素をChromiumで**DOM起動**し、正しいURL/fragmentへ遷移した。24回全てを指タップ/マウスポインタで押したという意味ではない |
| HTTPステータス | **200** | `/`、`/services/internal-control`、`/contact`、`/en/contact`、`/zh/contact` |
| PC・スマホ表示 | **3幅×3ページ=9画像取得** | 1440×900、390×844、360×800。トップ／内部統制／お問い合わせ。ブラウザでスクリーンショットを撮り、DOMのscrollWidthとclientWidthを比較。**横方向overflow警告0件** |
| モバイルメニュー | **基本操作OK** | 390/360で「監査・監査対応支援」項目のボタンをクリックし、内部統制リンクの存在を確認。タップ時の詳細なデザイン比較までは未実施 |
| J-SOX canonical | **存在** | `/services/internal-control`は `https://luare-consulting.com/services/internal-control` |
| 英中ページのcanonical | **存在** | それぞれ言語別のcanonicalが生成されている |
| 公式robots.txt | **404** | 公開URL `/robots.txt`のHTTP実測。robots.txt未設置でもサイト全体の検索除外を直接意味しないが、クロール制御の明示はできない |
| 公式sitemap.xml | **404** | 公開URL `/sitemap.xml`のHTTP実測。インデックス登録が不可能という意味ではないが、サイトマップでのURL案内がない |
| HTML lang | **不一致2件** | `/en/contact`も`/zh/contact`も`<html lang="ja">`。正しくは英語`en`、中国語`zh-CN`等を検討する |
| 仮情報の露出 | **要確認** | 公開トップにダミー専門家プロフィール（5件）と仮の支援事例（3件）の注記・本文が残存。既公開の紹介なので、広告出稿前にB班とご主人に「実績と誤認されない表示」「公開可否」を確認 |
| トップcanonical | **未設定** | DOM確認時にトップの`rel=canonical`が空。個別ルートの正規化、検索流入では改善余地がある |

## 優先度と引継ぎ
**P0：公開表示の事実性**
- 仮プロフィール5件/仮事例3件が公開トップに存在する。既にページ内でダミー/仮配置と書かれているが、その説明を見落とされる可能性あり。司令塔/B班に、公開での扱いと本人確認・許諾の整理を依頼。**C班では他班や共通ページを変更しない**。

**P1：SEO／アクセシビリティ改善**
- ルートの多言語`html lang`を適切に分ける。Next.js app routerのroot layoutが`ja`固定。グローバルな共通コードの修正が必要なので司令塔/A班と調整。
- `/robots.txt`・`/sitemap.xml`を承認済みURLのみで作成。未承認の`/pricing-request`、`/cases`やdraft記事をsitemapに含めない。
- トップcanonical URLの追加を検討。環境差によるスラッシュ・www正規化と合わせて調整する。

**P1：未完了のブラウザQA**
- 承認済みHTML原本とNext.jsのスクリーンショットによる目視・画素差の比較（HTML原本はA班で保持。C班側のローカル資料参照だけでは照合していない）。
- 端末固有のタップ・全24件のマウスポインタ操作、keyboardでのTab移動、スクリーンリーダー、Lighthouseの実測。
- Contact Formspreeフォームは**一切送信していない**。資料請求フォームは未実装・未承認。私的情報・メールを送信せずにテストする。

## 使用証跡と条件
- GitHub Actions: `c-team-live-browser-evidence` ZIP (artifact ID `12487436321`, 2026-10-23、7日保持)
- 画像：`public-home-pc1440.png`、`public-home-sp390.png`、`public-home-sp360.png`、`public-internal-control-*.png`、`public-contact-*.png`
- 元データ：`browser-qa-report.json`にHTTP状態・URL・エラー0・警告7・画像記録。
- お客様宛の実メール・実フォーム投稿0件、APIキー・個人情報・料金PDF/価格の公開0件。本番ファイル変更なし。
