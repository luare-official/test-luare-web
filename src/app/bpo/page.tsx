import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BpoDiagnosisForm from "@/components/BpoDiagnosisForm";

export const metadata: Metadata = {
  title: "外資系日本法人の経理BPO・Finance運営 | Luare BPO",
  description:
    "日本に子会社を持つ海外企業向けの経理BPO。月次決算、海外本社reporting、Intercompany、日常経理を継続運営し、Finance担当者への属人化や採用・退職リスクを減らす体制づくりを支援します。",
  alternates: { canonical: "https://luare-consulting.com/bpo" },
  openGraph: {
    title: "Luare BPO | 外資系日本法人のFinanceを、人ではなく仕組みで。",
    description:
      "日本に子会社を持つ海外企業向け。月次決算・海外本社reporting・Intercompanyまで、日本法人のFinance Operationsを継続運営します。",
    url: "https://luare-consulting.com/bpo",
    type: "website",
    images: [{ url: "https://luare-consulting.com/images/bpo-og.svg", width: 1200, height: 630 }],
  },
};

const painPoints = [
  ["01", "英語と経理の両方ができる人を採用できない", "募集しても、海外本社とのコミュニケーションまで任せられる人がなかなか見つからない。"],
  ["02", "経理担当者が辞めたら止まる", "業務手順や本社とのやり取りが一人の頭の中にあり、引継ぎが難しい。"],
  ["03", "海外本社への報告が毎月重い", "日本側の数字を、本社が必要とする形へ直す作業に時間がかかる。"],
  ["04", "月次決算を誰も管理していない", "会計事務所、社内担当者、海外HQの間にタスクが分散し、締め全体を見る人がいない。"],
  ["05", "社長・GMが経理を追いかけている", "本来は事業に集中したいのに、資料回収や月次進捗まで経営者が確認している。"],
  ["06", "採用し直すたびにコストと時間がかかる", "Finance担当が辞めるたびに、採用・教育・引継ぎを最初からやり直している。"],
];

const benefits = [
  ["採用への不安を減らす", "Finance運営を一人の採用成功に依存させない。"],
  ["退職への不安を減らす", "SOP・Checklist・Closing Calendarを残し、担当者変更に強くする。"],
  ["海外本社への報告を安定させる", "毎月必要な資料とreporting flowを定型化する。"],
  ["経営者を日常経理から離す", "未解決事項と責任者を整理し、社長やGMが毎回追いかけなくてよい状態へ。"],
  ["固定人員だけに頼らないFinance体制", "常勤Finance人材を一人増やす以外の方法で、必要なFinance機能を持つ。"],
];

const managedFinance = [
  ["01", "毎月の経理・月次決算", ["記帳・仕訳", "AP / AR管理", "銀行・主要勘定照合", "未払・前払等の月次調整", "月次Close進捗", "未解決事項管理"]],
  ["02", "海外本社へのReporting", ["HQ reporting package", "勘定科目mapping", "本社指定template", "月次・四半期reporting", "定例的な英語Finance communication"]],
  ["03", "Intercompany・資金状況", ["Intercompany残高照合", "Management fee", "親子会社間債権債務", "APのOpen Item把握", "銀行残高", "Cash visibility"]],
  ["04", "業務を仕組みにする", ["Closing Calendar", "SOP", "Checklist", "責任分界", "引継ぎ資料", "例外事項管理", "継続改善"]],
] as const;

const fitItems = [
  "海外企業が日本に設立した子会社",
  "日本法人のFinance担当者が0〜少人数",
  "英語での本社reportingが必要",
  "Intercompany取引がある",
  "経理担当者への依存を減らしたい",
  "Finance採用に苦戦している",
  "今いる経理担当者と外部チームを組み合わせたい",
  "月次決算を毎月安定させたい",
  "Finance Managerを一人追加採用する以外の方法を探している",
  "日本法人代表が経理を追いかける状態を終わらせたい",
];

const onboarding = [
  ["01", "Current State", "現在の経理体制、締め日、海外本社reporting、system、役割を確認。"],
  ["02", "Scope", "社内に残す業務とLuare BPOへ任せる業務を整理。"],
  ["03", "Design", "Closing Calendar、成果物、責任者、連絡方法、例外時のルールを設計。"],
  ["04", "Transition", "既存担当者・既存ベンダーから引継ぎ、必要に応じて初回Closeを並走。"],
  ["05", "Managed Operation", "毎月のFinance Operationsへ移行。"],
];

const coreScopes = [
  ["Core 01", "Recurring Finance Operations", ["証憑・取引データ収集ルール", "記帳・仕訳", "AP / AR", "銀行照合", "主要Balance Sheet照合", "未払・前払等", "Monthly Close", "Open Items", "管理用P/L・B/S"]],
  ["Core 02", "HQ Reporting & Intercompany", ["HQ reporting package", "Mapping", "HQ template", "Intercompany reconciliation", "Management fee", "親子会社債権債務", "定例的な英語Finance communication"]],
  ["Core 03", "AP Status & Cash Visibility", ["AP未払残高", "支払期日", "Open Item", "AP aging", "overdue / exception status", "銀行残高", "短期資金ポジション", "Funding情報", "Cash visibility"]],
  ["Core 04", "SOP & Closing Management", ["Closing Calendar", "SOP", "Checklist", "Responsibility Matrix", "Handover", "Exception management", "Continuous improvement"]],
] as const;

const addons = [
  ["Payment Operations", "支払予定一覧、証憑・承認状態確認、Payment File / 振込データ準備、支払実績記録・照合。最終銀行承認・送金権限は必ずクライアント側に残します。"],
  ["Controller Review", "月次レビュー、Management reporting、重要論点整理、HQ review support。"],
  ["Budget / Forecast / Cash Planning", "必要に応じて追加します。"],
  ["Transition / Backlog Cleanup", "退職・ベンダー切替・未整理期間対応。"],
  ["Audit Coordination", "監査人への資料準備や進行管理。監査そのものは含みません。"],
  ["ERP / Process Project", "定常運営を超える改善・移行案件。"],
];

const faqs = [
  ["今の経理担当者がいても利用できますか？", "はい。すべてを外部化する必要はありません。現在の担当者、Luare BPO、海外本社、税理士等の役割を整理し、必要な部分だけを外部化できます。"],
  ["経理担当者が退職する予定でも相談できますか？", "はい。既存業務、system、資料、締めスケジュール等を確認し、引継ぎ可能な範囲を整理します。状況によってはTransition / Backlog対応から開始します。"],
  ["日本法人の人数に条件はありますか？", "人数だけでは判断しません。Finance担当人数、海外本社reporting、Intercompany、取引量、利用system等の複雑性で適合性を確認します。"],
  ["税理士の記帳代行とは何が違いますか？", "Luare BPOは記帳だけではなく、月次Close、海外本社reporting、Intercompany、Open Items、SOP等を含めたFinance Operations全体を毎月回すことを中心としています。"],
  ["海外本社との英語対応もお願いできますか？", "定例的なFinance communicationやHQ reportingは対応範囲に含められます。実際の頻度・内容を確認してscopeを決定します。"],
  ["中国本社とのやり取りにも対応できますか？", "案件内容に応じて、日本語・英語・中国語でのFinance communicationを検討できます。"],
  ["US GAAP / IFRSに対応できますか？", "HQ reportingやGroup policyに沿ったreporting支援は、実際の要件を確認して対応範囲を定義します。包括的なtechnical accountingや複雑なconversionは個別確認となります。"],
  ["支払業務もお願いできますか？", "AP状況把握やCash visibilityはCoreへ含められます。支払予定一覧、証憑・承認確認、Payment File準備等はPayment Operationsとして追加できます。最終銀行承認・送金権限はクライアント側に残します。"],
  ["ControllerやCFO業務も含まれますか？", "標準Managed Financeとは分け、必要に応じてController Review等の追加支援として設計します。"],
  ["料金はいくらですか？", "取引量、締め日、海外本社reporting、Intercompany、system、必要な対応範囲等によって異なります。最初の30分診断で現在の体制を確認し、その後必要に応じてscopeをご提案します。"],
  ["最初から長期契約を決める必要がありますか？", "まず無料診断で適合性を確認します。その後、具体的な支援範囲、Onboarding、月額運営の内容を説明した上で検討いただきます。"],
  ["無料診断を受けたら契約しないといけませんか？", "いいえ。Luare BPOが適さない場合も含め、現在のFinance体制を整理することを目的としています。"],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luare BPO",
  serviceType: "Finance Operations / Accounting BPO",
  provider: { "@type": "Organization", name: "Luare Consulting", url: "https://luare-consulting.com" },
  areaServed: "Japan",
  audience: { "@type": "BusinessAudience", audienceType: "Foreign-owned companies with Japan subsidiaries" },
  url: "https://luare-consulting.com/bpo",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function BpoPage() {
  return (
    <>
      <Navbar solid />
      <main className="bpo-page">
        <section className="bpo-hero">
          <div className="bpo-shell bpo-hero-grid">
            <div className="bpo-hero-copy">
              <p className="bpo-eyebrow">外資系日本法人向け 経理・Finance BPO</p>
              <h1>英語と経理、両方できる人を採用できない。<br />そのたびに、日本法人のFinanceを止めないために。</h1>
              <p className="bpo-lead">
                Luare BPOは、日本に子会社を持つ海外企業向けに、日常経理から月次決算、海外本社へのレポーティングまで、毎月のFinance運営を継続して支えるサービスです。
              </p>
              <p className="bpo-lead bpo-lead-strong">
                一人の優秀な担当者を採用し続けるのではなく、担当者が変わっても回るFinance体制をつくります。
              </p>
              <p className="bpo-trust">日本語・英語・中国語対応 ｜ 海外本社Reporting ｜ Intercompany ｜ USCPAの知見を活かした品質設計</p>
              <div className="bpo-hero-actions">
                <a className="bpo-button bpo-button-primary" href="#diagnosis">
                  自社がLuare BPOに向いているか確認する <span>→</span>
                </a>
                <a className="bpo-button bpo-button-secondary" href="#services">サービス内容を見る</a>
              </div>
              <p className="bpo-cta-note">無料・オンライン30分</p>
              <p className="bpo-hero-footnote">既存の経理担当者がいる会社でも利用できます。すべてを外注する必要はありません。</p>
            </div>

            <div className="bpo-hero-diagram" aria-label="Japan SubsidiaryからLuare BPOを経てOverseas HQへつながるFinance flow">
              <div className="bpo-flow-node">
                <span>01</span>
                <strong>Japan Subsidiary</strong>
                <small>Transactions / Bank / Payroll / Contracts</small>
              </div>
              <div className="bpo-flow-arrow" aria-hidden="true">→</div>
              <div className="bpo-flow-node bpo-flow-node-main">
                <span>02</span>
                <strong>Luare BPO</strong>
                <small>Close / Reconcile / Reporting / SOP</small>
              </div>
              <div className="bpo-flow-arrow" aria-hidden="true">→</div>
              <div className="bpo-flow-node">
                <span>03</span>
                <strong>Overseas HQ</strong>
                <small>Group Reporting / Review / Finance Questions</small>
              </div>
            </div>
          </div>
        </section>

        <section className="bpo-section bpo-soft">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow">こんな状態になっていませんか？</p>
              <h2>日本法人のFinanceを、一人の担当者に背負わせていませんか。</h2>
              <p>外資系日本法人では、日本の経理実務と海外本社への対応を同時にこなせる人材が必要になります。その結果、「採用できるか」「辞めないか」がFinance運営そのもののリスクになりがちです。</p>
            </div>
            <div className="bpo-card-grid bpo-card-grid-3">
              {painPoints.map(([no, title, text]) => (
                <article className="bpo-card" key={no}>
                  <span className="bpo-card-no">{no}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bpo-section">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow">Luare BPOが目指す状態</p>
              <h2>「誰を採用できるか」ではなく、<br />「誰が変わっても回るか」へ。</h2>
              <p>Luare BPOが提供するのは、人材そのものではありません。毎月の締め日、成果物、役割、確認方法を決め、日本法人のFinanceが継続して回る状態をつくります。</p>
            </div>
            <div className="bpo-benefit-list">
              {benefits.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bpo-section bpo-dark">
          <div className="bpo-shell bpo-split">
            <div>
              <p className="bpo-eyebrow bpo-eyebrow-light">The Limitation of Hiring</p>
              <h2>良い経理担当者を採用することより、<br />その人がいなくても回る仕組みを。</h2>
            </div>
            <div className="bpo-richtext">
              <p>優秀なFinance人材はもちろん重要です。しかし、一人の担当者が日常経理、月次決算、海外本社対応、Intercompany、支払関連、会計事務所との連携、業務手順まで抱えている状態では、その人が辞めるたびにFinance体制が振り出しに戻ります。</p>
              <p><strong>Luare BPOは「人を置き換える」のではなく、「人だけに依存しない運営へ変える」ことを目指します。</strong></p>
              <p>既存のFinance担当者がいる会社では、その担当者と役割を分けながら利用できます。</p>
            </div>
          </div>
        </section>

        <section className="bpo-section" id="services">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow">Managed Finance for Japan Subsidiaries</p>
              <h2>日本法人の月次Finance運営を、ひとつの流れで。</h2>
              <p>日常経理だけを部分的に処理するのではなく、日本法人で発生した取引が月次決算を経て、海外本社へのreportingにつながるところまでを一つのFinance Operationsとして設計します。</p>
            </div>
            <div className="bpo-card-grid bpo-card-grid-2">
              {managedFinance.map(([no, title, items]) => (
                <article className="bpo-card bpo-service-card" key={no}>
                  <span className="bpo-card-no">{no}</span>
                  <h3>{title}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bpo-section bpo-soft">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow">Finance Operations Flow</p>
              <h2>日本法人と海外本社の間に、Finance運営のレイヤーを。</h2>
            </div>
            <div className="bpo-operations-flow">
              <div><span>Japan Subsidiary</span><strong>Input</strong><p>請求書 / 経費 / 銀行 / 給与結果 / 契約 / 日常取引</p></div>
              <i aria-hidden="true">→</i>
              <div className="is-main"><span>Luare BPO</span><strong>Operate</strong><p>Process / Reconcile / Monthly Close / Intercompany / Reporting / AP Status / Cash Visibility / SOP / Issue Management</p></div>
              <i aria-hidden="true">→</i>
              <div><span>Overseas HQ</span><strong>Use</strong><p>Group Reporting / Consolidation / Management Review / Funding / Finance Questions</p></div>
            </div>
            <p className="bpo-flow-caption">日本側の数字を記録するだけで終わらせず、海外本社が使える情報になるところまでFinanceの流れをつなぎます。</p>
          </div>
        </section>

        <section className="bpo-section">
          <div className="bpo-shell bpo-founder">
            <div className="bpo-founder-photo">
              <Image src="/images/Photo.png" alt="Luare Consulting 代表 陸 沿青" width={900} height={1125} unoptimized />
            </div>
            <div>
              <p className="bpo-eyebrow">Message from the Founder</p>
              <h2>日本法人のFinanceを、<br />「優秀な一人」に依存させない。</h2>
              <div className="bpo-richtext">
                <p>海外企業の日本法人では、日本の経理実務を理解しながら、海外本社ともFinanceの会話ができる人材が求められます。しかし、そのような人を採用し続けられる会社ばかりではありません。</p>
                <p>採用できたとしても、その一人に業務や判断が集中すれば、退職するたびにFinance体制を作り直すことになります。</p>
                <p>私は、優秀なFinance人材を採用し続けられるかどうかに、日本法人の運営を賭けるより、担当者が変わっても回る仕組みをつくる方が強いと考えています。</p>
                <p><strong>Luare BPOが目指すのは、人を置き換えることではありません。日本法人と海外HQの間に、毎月Financeが継続して回る仕組みをつくることです。</strong></p>
              </div>
              <div className="bpo-founder-meta">
                <strong>陸 沿青 / Yanqing Lu</strong>
                <span>Managing Partner</span>
                <span>米国公認会計士（USCPA, Inactive, グアム州）</span>
                <small>事業会社での経理実務 / Big 4系監査法人での会計アドバイザリー / 投資銀行部門 / Cross-border Finance & Accounting / 日本語・英語・中国語</small>
              </div>
              <Link className="bpo-text-link" href="/#representative">代表者プロフィールを見る →</Link>
            </div>
          </div>
        </section>

        <section className="bpo-mid-cta">
          <div className="bpo-shell">
            <p className="bpo-eyebrow">Free Finance Assessment</p>
            <h2>自社がLuare BPOに向いているか、<br />30分で整理しませんか。</h2>
            <p>現在のFinance体制をお聞きし、どこが属人化しているか、何を社内に残すべきか、どこを外部化できるかを整理します。</p>
            <p>診断後は、1ページ程度のFinance体制診断サマリーをお送りします。Luare BPOが適さない場合は、その旨も率直にお伝えします。</p>
            <a className="bpo-button bpo-button-primary" href="#diagnosis">自社がLuare BPOに向いているか確認する <span>→</span></a>
            <small>無料・オンライン30分</small>
          </div>
        </section>

        <section className="bpo-section">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow">Who We Are Built For</p>
              <h2>こんな日本法人に向いています。</h2>
            </div>
            <div className="bpo-check-grid">
              {fitItems.map((item) => <div key={item}><span>✓</span><p>{item}</p></div>)}
            </div>
            <p className="bpo-section-note">会社の従業員数だけでは判断しません。15〜60名程度は典型例になり得ますが、絶対条件ではありません。</p>
          </div>
        </section>

        <section className="bpo-section bpo-soft">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <h2>一方、個別設計が必要になるケースもあります。</h2>
              <p>業務の複雑性によっては、標準Managed Financeとしてそのまま開始せず、最初に対応方法を確認します。</p>
            </div>
            <div className="bpo-inline-tags">
              {["複雑な製造原価計算", "大規模・複雑な在庫", "多数店舗", "大量現金取引", "高頻度の日次Treasury", "複数日本法人の全面統合運営", "規制業種固有の複雑な処理"].map((item) => <span key={item}>{item}</span>)}
            </div>
            <p className="bpo-section-note">これらは一律の「対応不可」ではなく、個別確認となります。</p>
          </div>
        </section>

        <section className="bpo-section">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow">How We Start</p>
              <h2>いきなり業務を引き継ぎません。<br />最初に「どう回すか」を設計します。</h2>
            </div>
            <div className="bpo-step-list">
              {onboarding.map(([no, title, text]) => (
                <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <p className="bpo-section-note">Managed Finance開始前のOnboarding / Transitionは有料です。</p>
          </div>
        </section>

        <section className="bpo-section bpo-dark">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow bpo-eyebrow-light">Pricing</p>
              <h2>料金は「人数」ではなく、<br />Finance業務の複雑性で設計します。</h2>
              <p>月額料金は、取引量、締め日、海外本社へのreporting、Intercompany、利用system、必要な対応範囲等を確認した上で決定します。</p>
            </div>
            <div className="bpo-pricing-structure">
              <div><span>Initial Setup</span><strong>Paid Onboarding / Transition</strong></div>
              <div><span>Monthly</span><strong>Managed Finance月額</strong></div>
              <div><span>Optional</span><strong>必要な追加支援</strong></div>
            </div>
            <a className="bpo-button bpo-button-light" href="#diagnosis">まずは30分診断で対応範囲を確認する →</a>
          </div>
        </section>

        <section className="bpo-section">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <p className="bpo-eyebrow">Detailed Scope</p>
              <h2>毎月回すCoreと、必要に応じて追加する支援を分けています。</h2>
            </div>
            <div className="bpo-card-grid bpo-card-grid-2">
              {coreScopes.map(([label, title, items]) => (
                <article className="bpo-card bpo-scope-card" key={label}>
                  <span className="bpo-scope-label">{label}</span>
                  <h3>{title}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="bpo-section-note">US GAAP / IFRSは実際のGroup reporting要件を確認してscopeを定義します。包括的technical accountingや複雑なconversionは個別確認となります。</p>
          </div>
        </section>

        <section className="bpo-section bpo-soft">
          <div className="bpo-shell">
            <div className="bpo-section-head">
              <h2>必要な業務だけ追加できます。</h2>
            </div>
            <div className="bpo-addon-list">
              {addons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bpo-boundary">
          <div className="bpo-shell">
            <h2>必要な専門家とは、役割を分けて連携します。</h2>
            <p>Luare BPOは、日本法人の日常Finance運営、月次決算、海外本社reporting、Intercompany、SOP等を中心に支援します。税務代理、税務書類作成、具体的税務相談はLuare BPO自身の提供範囲に含めず、必要に応じてクライアントの税理士等と連携します。監査証明、法務、その他資格者業務も同様に役割を分けます。</p>
          </div>
        </section>

        <section className="bpo-section">
          <div className="bpo-shell bpo-split">
            <div>
              <p className="bpo-eyebrow">Technology Behind the Operations</p>
              <h2>AIを売るのではなく、<br />Finance運営を改善するために使う。</h2>
            </div>
            <div className="bpo-richtext">
              <p>AIやAutomationは、証憑整理、照合補助、mapping、差異説明draft、定型資料作成、SOP維持など、Luare側の運営品質と生産性向上に活用します。</p>
              <p><strong>速く、止まりにくく、レビューできるFinance Operationsへ。</strong></p>
              <div className="bpo-inline-tags"><span>Human Review</span><span>Access Control</span><span>Audit Trail</span></div>
            </div>
          </div>
        </section>

        <section className="bpo-section bpo-soft">
          <div className="bpo-shell bpo-faq-shell">
            <div className="bpo-section-head"><p className="bpo-eyebrow">FAQ</p><h2>よくあるご質問</h2></div>
            <div className="bpo-faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}<span aria-hidden="true">＋</span></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bpo-final-cta">
          <div className="bpo-shell">
            <h2>採用する前に、<br />まず今のFinance体制を整理しませんか。</h2>
            <p>「新しくFinance担当を採用するべきか」「今いる担当者と外部チームを組み合わせるべきか」「Luare BPOがそもそも自社に合うのか」——30分で一度整理します。</p>
            <a className="bpo-button bpo-button-light" href="#diagnosis">自社がLuare BPOに向いているか確認する →</a>
            <small>無料・オンライン30分</small>
          </div>
        </section>

        <section className="bpo-section" id="diagnosis">
          <div className="bpo-shell bpo-diagnosis-grid">
            <div>
              <p className="bpo-eyebrow">Free 30-minute Finance Assessment</p>
              <h2>無料30分 Finance体制診断</h2>
              <p className="bpo-lead">今の日本法人のFinance体制をお聞きし、どこが属人化しているか、どこを社内に残すべきか、どこを外部化できるか、Luare BPOに向いている会社か、今の体制を維持した方がよい会社かを整理します。</p>
              <div className="bpo-diagnosis-summary">
                <strong>診断後にお送りするもの</strong>
                <p>1ページ程度の「Finance体制診断サマリー」をメールでお送りします。</p>
              </div>
            </div>
            <BpoDiagnosisForm />
          </div>
        </section>
      </main>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
