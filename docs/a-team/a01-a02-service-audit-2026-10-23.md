# Luare Consulting HP｜A班 A-01・A-02 サービス棚卸・r5照合
**調査日：2026-10-23**  
**ブランチ：`feature/hp-a-services`**  
**状態：ソース・公開トップの導線検査完了／遷移先ページのHTTP・実機表示検査は未完（本番の変更は一切なし）**

## 0. 制約
- 承認済みのトップページ「写真なしA案」の構造、余白、配色、挙動、コピーを変更しない。
- 監査・税務・資格、提携先、実績、提供範囲はご主人のレビュー前に公開しない。
- このPRは**調査成果物のみ**であり、サービス本文も表示も変更していない。mainマージ・本番公開は司令塔とユーザー決裁が必要。
- r5原本にある料金や非公開の事例詳細をGitHubに転載しない。

## A-01｜5分類・24項目の照合

| 現行5分類 | 項目数 |
|---|---:|
| 監査・監査対応支援 | 7 |
| 会計・税務 | 6 |
| M&A・Finance Advisory | 3 |
| Global Reporting | 4 |
| Luare BPO | 4 |
| **合計** | **24** |

**検査方法と限界**
1. GitHub `main` の `src/lib/serviceCatalog.ts` の定義と `InteractiveServiceGallery.tsx` のリンク生成を確認した。
2. 接続済みブラウザの公開トップ `https://luare-consulting.com/#services` から、24/24 件の実リンクhrefを確認した（ページ上のDOMテキスト）。
3. 各リンクの親ルートに対応する Next.js ページファイルが 24/24 件、存在することを確認した。親ページ計7種類。
4. `ServiceTopicSections.tsx` が `item.page` で絞り、`article id={item.id}` を生成する仕様であること、監査ページ・BPOページも同コンポーネントを呼ぶことを確認した。IDの重複0件。
5. **未確認：24個のクリック遷移・対象ページHTTP 200・JS動作・アンカー位置・PC/スマホ視認性。** 接続ブラウザには公開トップのみが開かれており、別URLの実機巡回はこの調査では行っていない。ソース上の正しさを「リンク切れなし」と認定しない。

| # | 5分類 | 表示名 | 現行リンク | 検査 |
|---:|---|---|---|---|
| 01 | 監査・監査対応支援 | 内部統制・J-SOX構築 | [/services/internal-control](https://luare-consulting.com/services/internal-control) | ソース確認 / トップ掲載 |
| 02 | 監査・監査対応支援 | 3点セット作成・更新 | [/services/internal-control#three-documents](https://luare-consulting.com/services/internal-control#three-documents) | ソース確認 / トップ掲載 |
| 03 | 監査・監査対応支援 | 整備・運用評価支援 | [/services/internal-control#evaluation](https://luare-consulting.com/services/internal-control#evaluation) | ソース確認 / トップ掲載 |
| 04 | 監査・監査対応支援 | 内部監査・統制高度化 | [/services/internal-control#internal-audit](https://luare-consulting.com/services/internal-control#internal-audit) | ソース確認 / トップ掲載 |
| 05 | 監査・監査対応支援 | 内部統制研修 | [/services/internal-control#training](https://luare-consulting.com/services/internal-control#training) | ソース確認 / トップ掲載 |
| 06 | 監査・監査対応支援 | 会計アドバイザリー・監査対応支援 | [/services/audit-assurance#accounting-advisory](https://luare-consulting.com/services/audit-assurance#accounting-advisory) | ソース確認 / トップ掲載 |
| 07 | 監査・監査対応支援 | Group Audit・海外監査人対応 | [/services/audit-assurance#group-audit](https://luare-consulting.com/services/audit-assurance#group-audit) | ソース確認 / トップ掲載 |
| 08 | 会計・税務 | 月次・年次・連結決算支援 | [/services/accounting-management#closing](https://luare-consulting.com/services/accounting-management#closing) | ソース確認 / トップ掲載 |
| 09 | 会計・税務 | 予算管理・FP&A／事業KPI分析 | [/services/accounting-management#fpa](https://luare-consulting.com/services/accounting-management#fpa) | ソース確認 / トップ掲載 |
| 10 | 会計・税務 | キャッシュ・フロー作成支援 | [/services/accounting-management#cashflow](https://luare-consulting.com/services/accounting-management#cashflow) | ソース確認 / トップ掲載 |
| 11 | 会計・税務 | 決算早期化・業務標準化 | [/services/finance-ops#close-improvement](https://luare-consulting.com/services/finance-ops#close-improvement) | ソース確認 / トップ掲載 |
| 12 | 会計・税務 | 業務可視化・プロセス改善 | [/services/finance-ops#process](https://luare-consulting.com/services/finance-ops#process) | ソース確認 / トップ掲載 |
| 13 | 会計・税務 | システム導入・データ移行支援 | [/services/finance-ops#system-implementation](https://luare-consulting.com/services/finance-ops#system-implementation) | ソース確認 / トップ掲載 |
| 14 | M&A・Finance Advisory | 財務デューデリジェンス | [/services/ma-finance#fdd](https://luare-consulting.com/services/ma-finance#fdd) | ソース確認 / トップ掲載 |
| 15 | M&A・Finance Advisory | 企業価値・株価算定 | [/services/ma-finance#valuation](https://luare-consulting.com/services/ma-finance#valuation) | ソース確認 / トップ掲載 |
| 16 | M&A・Finance Advisory | PMI・統合後の管理体制 | [/services/ma-finance#pmi](https://luare-consulting.com/services/ma-finance#pmi) | ソース確認 / トップ掲載 |
| 17 | Global Reporting | 日本法人設立準備・専門家連携 | [/services/global-finance#market-entry](https://luare-consulting.com/services/global-finance#market-entry) | ソース確認 / トップ掲載 |
| 18 | Global Reporting | Finance Setup・経理体制構築 | [/services/global-finance#finance-setup](https://luare-consulting.com/services/global-finance#finance-setup) | ソース確認 / トップ掲載 |
| 19 | Global Reporting | 海外子会社管理・本社報告 | [/services/global-finance#hq-reporting](https://luare-consulting.com/services/global-finance#hq-reporting) | ソース確認 / トップ掲載 |
| 20 | Global Reporting | 日英中での業務・プロジェクト調整 | [/services/global-finance#coordination](https://luare-consulting.com/services/global-finance#coordination) | ソース確認 / トップ掲載 |
| 21 | Luare BPO | 経理・財務実務支援／アウトソーシング | [/bpo#outsourcing](https://luare-consulting.com/bpo#outsourcing) | ソース確認 / トップ掲載 |
| 22 | Luare BPO | AIを活用した経理業務効率化 | [/services/finance-ops#ai](https://luare-consulting.com/services/finance-ops#ai) | ソース確認 / トップ掲載 |
| 23 | Luare BPO | 業務ルール・運用体制の整備 | [/services/finance-ops#operating-model](https://luare-consulting.com/services/finance-ops#operating-model) | ソース確認 / トップ掲載 |
| 24 | Luare BPO | 記帳・決算・レポーティング代行 | [/bpo#reporting](https://luare-consulting.com/bpo#reporting) | ソース確認 / トップ掲載 |

## A-02｜r5原案20項目との一対一照合

出典：`content_master_r5.json` 内の `services` / `item_explanations`、正本の `08_r5→現行対応`。 
**原案20項目のうち現行名称と一致した項目 20/20。未対応 0。**
r5の「4領域20項目」を、現行の5分類に再配置している。原案20項目の詳細説明は現行 `serviceCatalog.ts` に短文として反映されているが、**独立したサービス説明ページとしての深掘りは未実施**。

| # | r5項目 | 現行の対応 | 直接リンク先 |
|---:|---|---|---|
| 01 | 内部統制・J-SOX構築 | 一致 | [/services/internal-control](https://luare-consulting.com/services/internal-control) |
| 02 | 3点セット作成・更新 | 一致 | [/services/internal-control#three-documents](https://luare-consulting.com/services/internal-control#three-documents) |
| 03 | 整備・運用評価支援 | 一致 | [/services/internal-control#evaluation](https://luare-consulting.com/services/internal-control#evaluation) |
| 04 | 内部監査・統制高度化 | 一致 | [/services/internal-control#internal-audit](https://luare-consulting.com/services/internal-control#internal-audit) |
| 05 | 内部統制研修 | 一致 | [/services/internal-control#training](https://luare-consulting.com/services/internal-control#training) |
| 06 | 月次・年次・連結決算支援 | 一致 | [/services/accounting-management#closing](https://luare-consulting.com/services/accounting-management#closing) |
| 07 | 経理・財務実務支援／アウトソーシング | 一致 | [/bpo#outsourcing](https://luare-consulting.com/bpo#outsourcing) |
| 08 | 予算管理・FP&A／事業KPI分析 | 一致 | [/services/accounting-management#fpa](https://luare-consulting.com/services/accounting-management#fpa) |
| 09 | キャッシュ・フロー作成支援 | 一致 | [/services/accounting-management#cashflow](https://luare-consulting.com/services/accounting-management#cashflow) |
| 10 | 会計アドバイザリー・監査対応支援 | 一致 | [/services/audit-assurance#accounting-advisory](https://luare-consulting.com/services/audit-assurance#accounting-advisory) |
| 11 | 決算早期化・業務標準化 | 一致 | [/services/finance-ops#close-improvement](https://luare-consulting.com/services/finance-ops#close-improvement) |
| 12 | 業務可視化・プロセス改善 | 一致 | [/services/finance-ops#process](https://luare-consulting.com/services/finance-ops#process) |
| 13 | AIを活用した経理業務効率化 | 一致 | [/services/finance-ops#ai](https://luare-consulting.com/services/finance-ops#ai) |
| 14 | システム導入・データ移行支援 | 一致 | [/services/finance-ops#system-implementation](https://luare-consulting.com/services/finance-ops#system-implementation) |
| 15 | 業務ルール・運用体制の整備 | 一致 | [/services/finance-ops#operating-model](https://luare-consulting.com/services/finance-ops#operating-model) |
| 16 | 日本法人設立準備・専門家連携 | 一致 | [/services/global-finance#market-entry](https://luare-consulting.com/services/global-finance#market-entry) |
| 17 | Finance Setup・経理体制構築 | 一致 | [/services/global-finance#finance-setup](https://luare-consulting.com/services/global-finance#finance-setup) |
| 18 | 記帳・決算・レポーティング代行 | 一致 | [/bpo#reporting](https://luare-consulting.com/bpo#reporting) |
| 19 | 海外子会社管理・本社報告 | 一致 | [/services/global-finance#hq-reporting](https://luare-consulting.com/services/global-finance#hq-reporting) |
| 20 | 日英中での業務・プロジェクト調整 | 一致 | [/services/global-finance#coordination](https://luare-consulting.com/services/global-finance#coordination) |

**現行24項目のうちr5にはない4項目**：Group Audit・海外監査人対応／財務デューデリジェンス／企業価値・株価算定／PMI・統合後の管理体制。このうちM&Aの3項目はr5原文の深い業務説明がないため、内容の創作を避け、ご主人の業務範囲確認後に拡充する。

## 発見した重複・説明不足

| 論点 | 現状 | 提案 |
|---|---|---|
| 内部統制・J-SOX | 5テーマが1ページ内の各1段落の概説。r5の成果物（業務記述書・フローチャート・RCM・評価調書等）が説明からほぼ抜けている | 独立ページは現行 `/services/internal-control` だけ。3点セット・整備/運用評価・内部監査・研修は既存アンカーを維持し、同ページ内で「対象者／具体的業務／成果物／進め方／対象外」を追加 |
| Group Audit | `/services/audit-assurance` に概要・FAQ等が存在する一方、トップの `#group-audit` がページ最下部近くの短文に飛ぶ | 既存の詳しいGroup Audit説明を、アンカーから到達しやすい詳細セクションへ統合。Audit Readiness、PBC、Instruction、HQの役割を整理し繰返しを減らす |
| Finance Setup | `/services/global-finance#finance-setup` には説明が1段落だけ | 設立準備→CoA/会計システム→承認・証憑→月次決算→本社報告の工程と成果物を追加し、税務・登記は連携表現を精査 |
| 月次・年次・連結決算 | `/services/accounting-management#closing` の1段落だけ | 月次締め、勘定照合、連結パッケージ、CF、FP&Aを「運用支援」と「改善支援」に分けて具体化 |
| AI・業務改善 | トップでは`Luare BPO`のAI・運用体制から`/services/finance-ops`へ飛ぶ。BPO詳細との役割が見えにくい | finance-opsを「業務設計・改善」、BPOを「継続運用」と役割分離。BPOページは他班が触る場合も内容改変前に担当確認 |
| M&A | `FDD`、`Valuation`、`PMI`の各1段落。r5詳細原案は存在しない | ひとつの`/services/ma-finance`内にまとめたまま、必要な役務境界・成果物・提供可否を先にご主人確認 |
| 分類名「会計・税務」 | この6件には独立した税務対応項目がない | 新規「税務サービス」を創作しない。現状分類名の適切さを司令塔・ご主人に確認。トップの表示名変更はユーザー承認まで禁止 |
| ページ深度 | 7親ページのうち、監査・BPOの2ページは多段構成、内部統制・決算・改善・M&A・Globalの5ページは共通の短文テンプレート中心 | まず重要5ページの「何を／何が届くか」の不足を埋める。1項目1ページへの分割はしない |

## 次の実装修正の優先順位（A班提案、本文未着手）

| 順 | 既存ページ | タスク | 具体的な次の修正（文言案は未承認） | レビュー |
|---:|---|---|---|---|
| 1 | `/services/internal-control` | A-03 | J-SOX対象・設計/運用評価・3点セットの使い分け、成果物例、5既存アンカー保持 | ご主人（監査の役務境界） |
| 2 | `/services/audit-assurance` | A-04 | Group Audit/Readiness/IFRS・US GAAP各機能の重複整理、`#group-audit` 直後の説明深化 | ご主人（監査法人との分担） |
| 3 | `/services/global-finance` | A-07 | Finance SetupとHQ Reportingに工程・成果物・対象企業像、越境業務フロー | ご主人（登記・税務協業） |
| 4 | `/services/accounting-management` | A-05 | 月次・年次・連結決算、CF、FP&Aのサブセクション具体化と成果物の区分 | ご主人 |
| 5 | `/services/finance-ops` | A-06 | 決算早期化→業務可視化→AI/システム導入→運用定着を一本の流れで説明 | 司令塔/BPOの分界 |
| 6 | `/services/ma-finance` | A-08 | FDD/Valuation/PMIの実際の提供可否・体制・成果物を先に確認し、承認後に書く | ご主人（必須） |
| 7 | `/bpo` | A-08 | 経理代行・本社報告はBPOで受け、業務改善との重複を相互リンクで解消。大規模改修はしない | 司令塔・B班/C班と調整 |

**提案するページ粒度**：親ページ7本を基本とし、3点セット・研修・評価・FP&A・CF・AIなどは既存ページ内のアンカーセクション。独立ページを先に増やさない。

## 公開前に必須の確認
- 監査報告書・監査意見の主体：実際に監査を行う公認会計士/監査法人とLuareの支援部分の分界。
- USCPA資格の正確な状態と表現、実績・Big4関連表現、協業法人名の使用条件はご主人確認が必要。
- 税務申告・登記等をLuareが直接行うと読める文言を避ける。新しい税務業務の約束はしない。
- 事例・料金の非公開情報を公開ソースに入れない。
- 改修PRのレビュー後、司令塔のmain統合と公開判断までは本番を変更しない。

## テスト結果と未解決
- 公開トップの24リンクhref照合：**24/24**。
- 24リンクに対応するルートのソースファイル：**24/24**。
- 原案項目名称の重複・紐付け：**20/20一致、項目ID重複0件**。
- 未解決：各遷移先のHTTP・モバイル・アンカー視認性、認証済みブラウザでの24クリック試験、変更前後のビルド（このPRは文書追加のみ）。
- 本番変更：**0件**。既存のトップデザイン・サービス本文：**変更なし**。

## 関連ファイル
- `src/lib/serviceCatalog.ts`
- `src/components/InteractiveServiceGallery.tsx`
- `src/components/ServiceTopicSections.tsx`
- `src/app/services/*/page.tsx`
- `src/app/bpo/page.tsx`
