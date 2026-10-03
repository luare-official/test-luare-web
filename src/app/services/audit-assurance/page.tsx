import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "外資系・中国系企業の監査・監査対応支援 | Luare Consulting",
  description:
    "外資系・中国系企業の日本法人向けに、監査準備、Group Audit、IFRS・US-GAAP、海外本社との会計コミュニケーションまで支援。監査が必要な場合は提携監査法人と連携します。",
  alternates: { canonical: "https://luare-consulting.com/services/audit-assurance" },
};

const painPoints = [
  ["海外親会社から、日本法人の監査を求められた", "何を準備すればよいのか、どのような監査が必要なのか分からない。"],
  ["中国本社と日本側のコミュニケーションが進まない", "会計・監査の専門用語が絡み、単なる通訳では対応が難しい。"],
  ["IFRS / US-GAAP対応が必要になった", "日本基準との差異整理やReporting Packageへの対応に社内リソースが足りない。"],
  ["Group Auditへの対応が必要", "海外のGroup AuditorからAudit Instructionが届いたものの、日本側で対応できる担当者がいない。"],
  ["監査法人から大量の資料提出を求められている", "経理担当者だけでは通常業務と監査対応を両立できない。"],
  ["日本法人に十分な経理・財務機能がない", "小規模な日本法人のため、監査に対応できるFinance人材が社内にいない。"],
];

const supports = [
  ["01", "監査体制の設計・コーディネーション", "監査の目的、対象範囲、適用会計基準、海外親会社からの要求事項などを整理。監査が必要な場合には、提携監査法人と連携し、案件に適した監査体制をご案内します。"],
  ["02", "Audit Readiness／監査準備支援", "監査開始前に必要となる資料や会計データを整理し、PBC資料、勘定科目明細、契約書、会計処理根拠など、監査で求められる資料の準備も支援します。"],
  ["03", "IFRS / US-GAAP対応", "日本基準とIFRS・US-GAAPとの差異整理、会計処理の検討、Reporting Package作成など、海外親会社向け財務報告を支援します。"],
  ["04", "Group Audit対応", "海外親会社のGroup AuditorからのAudit Instructionを確認し、日本法人側で必要となる対応を整理します。"],
  ["05", "監査人対応", "監査人からの質問や資料依頼を整理し、日本法人側の経理・財務担当者の負担を軽減します。"],
  ["06", "海外本社とのコミュニケーション", "日本語・英語・中国語に対応。単なる翻訳ではなく、会計・財務の内容を理解した専門家が関係者間のコミュニケーションを支援します。"],
];

const domains = [
  ["IFRS", "IFRSベースの財務報告や海外親会社向けReporting Packageへの対応。"],
  ["US-GAAP", "米国親会社を持つ日本法人などにおけるUS-GAAP関連の財務報告・監査対応。"],
  ["Group Audit", "海外Group AuditorからのInstructionに基づく、日本子会社側の監査対応。"],
  ["海外親会社向け監査", "海外親会社、株主、金融機関等から、日本法人について監査を求められるケース。"],
  ["法定・任意監査", "会社の状況や監査目的を確認したうえで、監査が必要な場合には提携監査法人と連携し、適切な監査体制をご案内します。"],
];

const reasons = [
  ["01", "監査だけでは終わらない", "監査が始まる前の会計整理から、監査対応、海外本社へのReportingまで、企業側で発生する実務を一貫して支援できます。"],
  ["02", "Big4・グローバル企業での実務経験", "大手プロフェッショナルファームだけでなく、事業会社側での経理・財務実務も経験。「監査を受ける企業側」の課題も理解した支援を行います。"],
  ["03", "日本語・英語・中国語に対応", "海外本社とのやり取りを、会計・財務の専門家が直接支援。特に中国系企業の日本法人における、中国本社とのコミュニケーションを強みとしています。"],
  ["04", "IFRS / US-GAAPに対応", "日本国内の会計だけではなく、海外親会社が採用する会計基準やReportingにも対応します。"],
  ["05", "必要な専門家まで含めて体制を組める", "監査法人をはじめとした外部専門家とのネットワークも活用し、案件に必要な体制を組み立てます。"],
];

const steps = [
  ["STEP 01", "ご相談", "まずはLuare Consultingへ現在の状況をお聞かせください。「監査が必要なのか分からない」という段階からでも構いません。"],
  ["STEP 02", "状況整理", "監査の目的、対象会社、会計基準、海外親会社からの要求事項、現在の経理体制などを整理します。"],
  ["STEP 03", "体制設計", "Luare Consultingによる監査対応支援の範囲を整理するとともに、監査が必要な場合には提携監査法人と連携し、適切な監査体制をご案内します。"],
  ["STEP 04", "ご提案", "業務範囲、スケジュール、必要となる専門家を整理し、それぞれの業務についてご提案します。"],
  ["STEP 05", "支援開始", "Luare Consultingが日本法人・海外本社・関係専門家の間に入り、プロジェクトを円滑に進めます。"],
];

const faqs = [
  ["監査が必要なのかどうか分からないのですが、相談できますか？", "はい。まず、海外親会社から何を求められているのか、監査の目的は何かなどを確認し、必要となる対応を整理します。監査が必要な場合には、提携監査法人と連携し、適切な監査体制をご案内します。"],
  ["中国本社とのやり取りもお願いできますか？", "はい。日本語・英語・中国語に対応しており、中国本社との会計・財務に関するコミュニケーションも支援します。単純な翻訳だけではなく、会計・財務の内容を理解した専門家として対応します。"],
  ["IFRSやUS-GAAPにも対応できますか？", "日本基準との差異整理、海外親会社向けReporting、監査対応などをご相談いただけます。"],
  ["海外のGroup AuditorからAudit Instructionが届いています。対応できますか？", "ご相談いただけます。Instructionの内容を確認し、日本法人側に必要となる資料・会計対応・コミュニケーション等を整理します。"],
  ["監査法人との契約はLuare Consultingと行うのでしょうか？", "監査・証明業務が必要となる場合、その部分については実際に監査を実施する公認会計士または監査法人との契約となります。Luare Consultingでは、監査対応、会計・Reporting、海外本社とのコミュニケーションなどを含め、プロジェクト全体が円滑に進むよう支援します。"],
];

export default function AuditAssurancePage() {
  return (
    <>
      <Navbar solid />
      <main className="audit-page">
        <section className="audit-hero">
          <div className="audit-shell audit-hero-grid">
            <div>
              <p className="audit-eyebrow">外資系・中国系企業の監査・監査対応支援</p>
              <h1>海外本社と日本法人の間に入り、<br />グローバルな監査対応をスムーズに。</h1>
              <div className="audit-hero-copy">
                <p>外資系企業・中国系企業の日本法人では、海外親会社からの監査要請、IFRS・US-GAAP、Group Audit、日本の監査人と海外本社のコミュニケーションなど、複数の論点が同時に発生します。</p>
                <p>Luare Consultingでは、グローバル企業の会計・財務実務に精通した専門家が、日本法人と海外本社の間に立ち、監査準備から監査対応、海外本社とのコミュニケーションまで一貫して支援します。</p>
                <p><strong>監査が必要な場合には、提携監査法人と連携し、案件に応じた適切な監査体制をご案内します。</strong></p>
              </div>
              <div className="audit-actions">
                <Link className="audit-button audit-button-primary" href="/contact">監査・監査対応について相談する <span>→</span></Link>
              </div>
              <p className="audit-languages">日本語 ｜ English ｜ 中文</p>
            </div>

            <div className="audit-bridge" aria-label="海外本社、日本法人、監査関係者をLuare Consultingがつなぐイメージ">
              <div className="audit-bridge-node"><span>Overseas HQ</span><strong>Parent / Group Auditor</strong></div>
              <div className="audit-bridge-link">↕</div>
              <div className="audit-bridge-node audit-bridge-main"><span>Luare Consulting</span><strong>Accounting × Audit Readiness × Communication</strong></div>
              <div className="audit-bridge-link">↕</div>
              <div className="audit-bridge-node"><span>Japan Entity</span><strong>Finance / Accounting / Local Auditor</strong></div>
            </div>
          </div>
        </section>

        <section className="audit-section audit-soft">
          <div className="audit-shell">
            <div className="audit-section-head">
              <p className="audit-eyebrow">ISSUES</p>
              <h2>こんなお悩みはありませんか？</h2>
            </div>
            <div className="audit-grid audit-grid-3">
              {painPoints.map(([title, text], i) => (
                <article className="audit-card" key={title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="audit-section">
          <div className="audit-shell">
            <div className="audit-section-head">
              <p className="audit-eyebrow">AUDIT SUPPORT</p>
              <h2>監査を「受ける」だけではなく、<br />監査がスムーズに進む環境をつくります。</h2>
              <p>監査そのものだけでなく、日本法人の会計処理、海外親会社へのReporting、監査資料の準備、監査人からの質問対応、海外本社との調整など、その前後に多くの実務が発生します。Luare Consultingは、これらを横断して支援します。</p>
            </div>
            <div className="audit-support-list">
              {supports.map(([no, title, text]) => (
                <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="audit-section audit-china">
          <div className="audit-shell audit-split">
            <div>
              <p className="audit-eyebrow audit-eyebrow-light">China × Japan × Global Finance</p>
              <h2>中国系企業の日本法人に強い監査対応</h2>
              <p className="audit-kicker">中国語 × 日本語 × 英語 × Finance</p>
            </div>
            <div className="audit-richtext">
              <p>中国企業の日本法人では、中国本社、日本法人、日本の会計・監査専門家、海外Group Auditorなど、複数の関係者が同時に関わるケースがあります。</p>
              <p>そこで重要になるのが、単なる語学力ではなく、<strong>会計・財務の内容を理解した上で3言語を使えること</strong>です。</p>
              <p>Luare Consulting代表の陸 沿青は、日本語・英語・中国語の3言語に対応。KPMG Japanでの会計アドバイザリー、グローバル企業での経理・財務実務、クロスボーダーM&Aなどの経験を有し、USCPAとして国際会計・財務の知見を活かした支援を行っています。</p>
              <p>特に中国企業の日本法人については、中国本社側の意図と日本側の会計・監査実務の双方を理解し、関係者間の橋渡しを行えることがLuare Consultingの強みです。</p>
            </div>
          </div>
        </section>

        <section className="audit-section">
          <div className="audit-shell">
            <div className="audit-section-head"><p className="audit-eyebrow">GLOBAL AUDIT</p><h2>グローバル監査で対応する主な領域</h2></div>
            <div className="audit-grid audit-grid-5">
              {domains.map(([title, text]) => <article className="audit-domain" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="audit-section audit-soft">
          <div className="audit-shell">
            <div className="audit-section-head"><p className="audit-eyebrow">WHY LUARE</p><h2>なぜLuare Consultingなのか</h2></div>
            <div className="audit-reason-list">
              {reasons.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="audit-section">
          <div className="audit-shell">
            <div className="audit-section-head"><p className="audit-eyebrow">PROCESS</p><h2>ご相談から支援開始まで</h2></div>
            <div className="audit-step-list">
              {steps.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="audit-section audit-soft">
          <div className="audit-shell audit-faq-shell">
            <div className="audit-section-head"><p className="audit-eyebrow">FAQ</p><h2>よくあるご質問</h2></div>
            <div className="audit-faq">
              {faqs.map(([q,a]) => <details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}
            </div>
          </div>
        </section>

        <section className="audit-final">
          <div className="audit-shell">
            <p className="audit-eyebrow audit-eyebrow-light">Global Audit Support</p>
            <h2>海外が絡む監査対応を、<br />もっとシンプルに。</h2>
            <p>海外親会社。日本法人。監査人。Group Auditor。それぞれの間に言語・会計基準・商習慣の違いがあると、監査対応は一気に複雑になります。</p>
            <p>Luare Consultingは、会計・Financeと多言語対応の専門性を生かし、その間に立ってプロジェクトを前に進めます。監査が必要な場合には、提携監査法人と連携し、案件に応じた適切な監査体制をご案内します。</p>
            <Link className="audit-button audit-button-light" href="/contact">監査・監査対応について相談する <span>→</span></Link>
            <small>初回オンライン相談 ｜ 日本語・English・中文</small>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
