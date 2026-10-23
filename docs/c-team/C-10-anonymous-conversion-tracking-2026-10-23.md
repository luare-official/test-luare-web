# C-10｜料金資料請求・問い合わせの匿名計測設計（初稿）
2026-10-23／C班。**承認待ちの計測設計のみ。現行サイトへイベントを追加しない。**

## 確認した既存環境
- 現在の`main/src/app/layout.tsx`に、既存の`gtag.js`読み込みとGA4の`gtag('config', ...)`が存在する。
- **別のGA4/Google Tag Managerの初期化を追加しない**。既存の計測と新規カスタムイベントの重複に注意。
- 既存GA4の自動拡張計測では一部のフォーム開始/送信が自動で計測され得る。実導入前に自動イベントの種類と重複を検証する。
- 計測基盤の利用・クッキー・同意／告知、データ保存期間、配信サービスとの扱いはC-06の文面と合わせて決裁する。設計だけを先に作成。

## 目的
- (1) どのページから料金資料請求へ進むか
- (2) フォームに進んだ利用者のうち、どの程度が申込を受け付けてもらえたか
- (3) 入力エラーや配信システム障害で申込が止まる頻度
- (4) サービス領域別の関心（集計レベルのみ）

## 匿名・非PIIイベント（案）
| カスタムイベント | 起点 | 送信可能な値 | 主な目的 |
| --- | --- | --- | --- |
| `luare_pricing_cta_click` | 資料請求CTAクリック | `page_area`・`service_category`定型値のみ | 流入導線 |
| `luare_pricing_form_view` | フォーム表示 | `page_area=pricing` | 表示数 |
| `luare_pricing_submit_attempt` | 必須入力の検証後、送信操作開始 | `page_area=pricing` | 入力離脱 |
| `luare_pricing_submit_accepted` | サーバーが申込を正常受理した結果をUIが確認 | `page_area=pricing` | 受付CV（主な転換点） |
| `luare_pricing_submit_rejected` | UIへサーバーエラーを受信 | `failure_category`のみ（validation/rate_limited/provider_error/other） | エラー傾向 |
| `luare_contact_cta_click` | 相談CTAクリック | `page_area`定型値 | 相談導線 |

**サーバー側の実際の受理件数を正本**とする。GA4は広告ブロックやCookie制限、同意状態、端末切替で欠損・重複し得るため「請求件数そのもの」の決算的な正本にはしない。CVを**PDF送達成功**と混同しないよう、申込受付と実メール送付は区別する。メール添付1通という現行仕様に準拠し、本人確認イベントは作らない。

## 送ってはいけない値
- 氏名、会社名、メールアドレス、電話番号、自由記述、問い合わせ文、メッセージ本文
- 申込ID・取引ID・認証トークン、ハッシュ化メール、顧客コード、PDF URL/署名付きURL、見積額・工数（料金承認前）
- 個別のURLクエリ、utmに混入した個人情報、完全なリファラ、任意HTML入力値、IP、User-Agent生値
- user_id、メールドメイン、広告クリック以外の識別子など個人と紐づきやすい情報

**許容するパラメータのホワイトリスト**
- `page_area`: home / services / bpo / pricing / contact / other
- `service_category`: general / audit / accounting / finance_ops / global / bpo / other
- `failure_category`: validation / rate_limited / provider_error / other
- それ以外をイベント送信前にrejectする。自由記述、URL、メール、会社IDをイベント引数として受け取らない。

## 運用前の条件
1. **C-06**：資料請求に関する個人情報の利用目的・プライバシーポリシーとGA4の扱いを確認。必要な同意UI／同意モード／法令への適合を決裁するまでは新規イベント送信しない。
2. GA4現行設定で自動収集される`form_start`/`form_submit`と、カスタムイベントの重複有無を確認。
3. `luare_pricing_submit_accepted`はサーバー受理のACK後だけ。単なるボタンクリックや送信開始をコンバージョンと数えない。
4. 申込システムの受理数・メール送信数・GA4集計数の差分を匿名の件数レベルで月次点検。個人情報をGAイベントに送らない。
5. 計測サービス/設定と閲覧権限・保存期間・Cookie/広告計測の規則をユーザーと司令塔が承認。管理者がテストモードで確認した後に有効化。

## 実装に向けたC班の安全な準備
- `scripts/qa/c10-event-contract.mjs` と `scripts/qa/c10-event-contract.test.mjs` は**イベント引数ホワイトリストのローカル検査**。`window.gtag`・ネットワーク・ユーザー入力を扱わず、GA4へ何も送信しない。
- C班のGitHub PRとCIで「PIIらしい値を不正パラメータとして渡すと拒否」を検証する。公開サイトに計測コードを追加するのはC-06承認後。
- C-10の完了判定は「計測方針草案」まで。実イベント測定とGA4管理画面でのテストは後工程。
