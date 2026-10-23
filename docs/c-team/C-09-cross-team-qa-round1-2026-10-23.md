# C-09｜A/B/C横断PR・公開前QA（第1回ソース確認）
2026-10-23／C班。**司令塔向けの読み取り専用横断レビュー。実ブラウザのPC・スマホ画面検証は未実施。**
監査対象は本番`main`の現在のソース、および各班の2026-10-23時点の独立したDraft PR。各PRの同時マージ・組合せビルドは実施していない。**本書は公開承認ではない。**

## PR/CI証跡
| PR/班 | SHA | コード変更範囲 | GitHub Actions（確認した範囲） | 状態 |
| --- | --- | --- | --- | --- |
| [#3 A班](https://github.com/luare-official/test-luare-web/pull/3) | `ddcc00005af1` | サービス詳細ページ、J-SOX LP、関連CSS・QA | Build [39916386478](https://github.com/luare-official/test-luare-web/actions/runs/39916386478) success。Aリンク/アンカー [39916386673](https://github.com/luare-official/test-luare-web/actions/runs/39916386673) も**最終success**（24項目・親ページ・アンカーの静的出力検査） | Draft・監修待ち |
| [#5 B班](https://github.com/luare-official/test-luare-web/pull/5) | `f9a2ab11ee45` | 未承認記事3件・`src/lib/posts.ts`ガード | Build [39904362158](https://github.com/luare-official/test-luare-web/actions/runs/39904362158) success | Draft・公開保留 |
| [#6 B班](https://github.com/luare-official/test-luare-web/pull/6) | `94c6382e961b` | `src/components/cases/CaseGallery.*` の独立UIのみ | Build [39915858946](https://github.com/luare-official/test-luare-web/actions/runs/39915858946) success | Draft・事例許諾待ち |
| [#4 C班](https://github.com/luare-official/test-luare-web/pull/4) | `faf9b75d8d50` 作業中に更新あり | C班のみの仕様・モック・QA | Build [39911298713](https://github.com/luare-official/test-luare-web/actions/runs/39911298713) success、C静的QA [39911298705](https://github.com/luare-official/test-luare-web/actions/runs/39911298705) success（13件モック＋24リンク） | Draft・料金/配信未承認 |

## 検出事項とゲート
**P0／公開前**
1. **C-06 プライバシー公開ルート未確定**：現行`main`のGitツリーには`src/app/privacy/page.tsx`が見つからず、料金資料請求用ポリシーの実URLは未承認。資料請求フォームで個人情報を集め始める前に、利用目的・保管期間・委託先等の文面と掲載場所を承認する必要がある。C班の草案は公開しない。
2. **料金送信APIは未実装**：PDF正式内容（ご主人確認中）、メール文面/差出人、配信サービス契約、テスト宛先の承認前は実送信しない。C班の`C-04` HTMLはデザイン初稿・無送信モックであり、未承認。
3. **専門文面の監修**：A班の監査主体／監査・税務の役務境界、B班の事例・資格・実績の真実性と顧客許諾は、各班・司令塔の決裁ゲートを維持する。
4. **PR組合せ検証未実施**：各PRの独立ビルド成功は、A/B/Cを組み合わせたときの競合・静的出力・UIの正常動作を保証しない。司令塔が統合ブランチで再ビルド・実画面テストする必要あり。

**P1／改善・要確認**
5. **GA4二重計測・個人情報リスク**：`main/src/app/layout.tsx`に既に`gtag.js`とGA4初期化（測定IDは既存）がある。C-10で別のGA初期化を重ねない。問い合わせデータやメールアドレス、フォーム内容をGAへ送らない。資料請求の自動計測/手動イベントの重複、Consentの扱い、表示済みポリシーとの整合を別途確認する。現在の`layout.tsx`には明示的な同意ゲート制御を確認できなかったが、外部Cookie管理全体の不存在までは断定しない。
6. **実機未実施**：A班承認HTMLと実装のデザイン比較、PC 1440×900/スマホ390×844・360×800、タブ切替・タップ・モーション・リデュースドモーション・キーボード/フォーカス・固定ヘッダー/24リンク到達はまだ確認していない。自動静的チェック成功と分けて記録する。
7. **ライブHTTP検証未完了**：GitHubソースとGitHub Actionsは取得できたが、`https://luare-consulting.com/services/internal-control/`等の現時点の実ページHTTP応答・スクリーンショットはこの監査で検証できなかった。公開版がGitHub `main`と完全に一致するとの断定はしない。

**確認できた安全ガード**
- B班の新規3記事にはすべてFrontmatter `draft: true`。B班`src/lib/posts.ts`でslug一覧とslug直アクセスの両方について`draft === true`を公開除外する処理がある。ただし運用として正式承認前に`draft: false`へ変えるのは禁止。
- B班事例UIは`src/components/cases/CaseGallery.tsx`等の部品のみのPRで、現時点では公開ページへの組込変更なし。コードコメントにも許諾・未承認・FP&Aモデルを実績として扱わない条件あり。
- C班の実メール送信0件、正式料金PDFの公開ソースへの混入なし（PRファイル一覧ベース）。初稿PDFはチャット内のみで保存されている。

## 結論・司令塔への引継ぎ
- **P0は未解消。各PRをまとめて本番mergeしない。** 承認済みHTMLとの差分と、専門・顧客情報・料金・個人情報の公開ゲートを通す。
- C班はソース上の進捗・不具合・検証未実施を管理表へ追記する。A/B班のファイルを直接編集しない。
- 価格PDFはご主人確認待ち。利用規約・送信機能・個人情報の未承認事項は完成扱いにしない。
