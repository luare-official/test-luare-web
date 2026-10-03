import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

type IconName =
  | "building"
  | "arrows"
  | "globe"
  | "standards"
  | "speech"
  | "puzzle"
  | "audit"
  | "tax"
  | "ma"
  | "report"
  | "people";

function LineIcon({ name }: { name: IconName }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 100 80" aria-hidden="true">
      <g {...common}>
        {name === "building" && (
          <>
            <path d="M21 61V28l25-9 25 9v33M31 34h8m9 0h8m9 0h3M31 45h8m9 0h8m9 0h3M28 61h40" />
            <path d="M43 61V49h11v12" />
          </>
        )}
        {name === "arrows" && (
          <>
            <rect x="12" y="25" width="25" height="28" rx="2.5" />
            <rect x="63" y="25" width="25" height="28" rx="2.5" />
            <path d="M41 32h18m-6-6 6 6-6 6M59 46H41m6 6-6-6 6-6" />
          </>
        )}
        {name === "globe" && (
          <>
            <circle cx="50" cy="40" r="25" />
            <path d="M25 40h50M50 15c8 7 12 16 12 25S58 58 50 65M50 15c-8 7-12 16-12 25s4 18 12 25" />
          </>
        )}
        {name === "standards" && (
          <>
            <path d="M22 18h43l13 13v36H22z" />
            <path d="M65 18v14h13M32 40h35M32 50h29M32 60h22" />
          </>
        )}
        {name === "speech" && (
          <>
            <path d="M18 22h56v32H44L31 64l3-10H18z" />
            <circle cx="32" cy="38" r="2" />
            <circle cx="46" cy="38" r="2" />
            <circle cx="60" cy="38" r="2" />
          </>
        )}
        {name === "puzzle" && (
          <path d="M20 28h22c-2-3-1-8 3-10 5-2 9 2 9 6 0 2-1 3-2 4h24v20H61c3 2 4 7 1 10-4 5-12 3-12-3 0-3 1-5 3-7H20z" />
        )}
        {name === "audit" && (
          <>
            <path d="M22 18h42l12 12v38H22z" />
            <path d="M64 18v13h12M33 41l6 6 12-14M33 56h31" />
          </>
        )}
        {name === "tax" && (
          <>
            <rect x="22" y="18" width="48" height="49" rx="2" />
            <path d="M32 31h28M32 43h11M49 43h11M32 55h28" />
          </>
        )}
        {name === "ma" && (
          <>
            <circle cx="33" cy="40" r="15" />
            <circle cx="67" cy="40" r="15" />
            <path d="M44 40h12M49 35l7 5-7 5" />
          </>
        )}
        {name === "report" && (
          <>
            <rect x="19" y="18" width="59" height="49" rx="3" />
            <path d="M30 55V42M42 55V33M54 55V46M66 55V27" />
          </>
        )}
        {name === "people" && (
          <>
            <circle cx="50" cy="28" r="10" />
            <path d="M34 62c1-12 7-19 16-19s15 7 16 19" />
            <circle cx="24" cy="35" r="7" />
            <path d="M13 62c1-9 5-14 11-14 4 0 7 2 9 5" />
            <circle cx="76" cy="35" r="7" />
            <path d="M87 62c-1-9-5-14-11-14-4 0-7 2-9 5" />
          </>
        )}
      </g>
    </svg>
  );
}

const people = [
  ["Professional 01", "CPA / Partner", "監査 / Assurance"],
  ["Professional 02", "Tax Professional", "国際税務"],
  ["Professional 03", "Accounting Advisory", "IFRS / US-GAAP"],
  ["Professional 04", "Finance Advisory", "M&A / Valuation"],
  ["Professional 05", "Global Finance", "HQ Reporting"],
];

const whoWeHelp = [
  ["building", "外資系企業の日本法人", "日本での会社設立から、会計・税務・監査・本社報告までまとめて相談したい。"],
  ["arrows", "海外親会社を持つ日本法人", "海外本社とのコミュニケーションや連結パッケージ対応に課題がある。"],
  ["globe", "海外進出する日本企業", "海外子会社の管理やグローバルな会計・財務体制を整えたい。"],
  ["standards", "IFRS / US-GAAP対応が必要な企業", "日本基準との差異分析や財務諸表作成、監査対応を専門家に任せたい。"],
  ["speech", "英語で本社とのやり取りが必要な企業", "会計・税務の専門的な内容まで英語で直接説明してほしい。"],
  ["puzzle", "経理・税務・監査をまとめて任せたい企業", "複数の専門家や業者への依頼をできるだけ一本化したい。"],
] as const;

const services = [
  {
    icon: "audit" as IconName,
    no: "01",
    title: "監査・Assurance",
    items: ["外資系企業監査", "会社法監査", "連結子会社監査", "IFRS / US-GAAP監査", "その他保証業務"],
  },
  {
    icon: "tax" as IconName,
    no: "02",
    title: "会計・税務",
    items: ["月次・年次決算", "税務顧問・税務申告", "記帳・レポーティング", "会社設立支援", "国際税務", "IFRS / US-GAAPコンバージェンス"],
  },
  {
    icon: "ma" as IconName,
    no: "03",
    title: "M&A・Finance Advisory",
    items: ["財務デューデリジェンス", "税務デューデリジェンス", "企業価値・株価算定", "ストックオプション評価", "PMI", "内部統制・内部監査"],
  },
  {
    icon: "report" as IconName,
    no: "04",
    title: "Global Reporting",
    items: ["海外親会社向けレポーティング", "連結パッケージ作成", "英文財務資料作成", "決算書・開示書類等の翻訳", "海外本社との会計コミュニケーション支援"],
  },
];

const why = [
  ["01", "国際会計に強い専門家チーム", "IFRS・US-GAAP・国際税務・クロスボーダーM&Aなど、一般的な国内会計事務所では対応が難しい領域にも対応します。"],
  ["02", "Big4・海外企業・事業会社での実務経験", "監査法人だけではなく、海外企業・Finance Manager・海外子会社管理・M&Aなど、「企業側」の実務も踏まえ、現場で実行できる解決策まで考えます。"],
  ["03", "海外本社とのコミュニケーションまで対応", "日本語・英語・中国語対応可能。専門的な会計・財務内容について海外本社との直接コミュニケーションが可能です。"],
  ["04", "監査・税務・会計・Financeを横断", "会計だけ、税務だけ、監査だけではなく、企業が実際に直面する課題を横断的にサポートできる体制を整えています。"],
  ["05", "高い専門性と費用のバランス", "国際業務の経験を持つ専門家が効率的に対応し、必要な業務範囲を整理したうえで案件ごとに事前にお見積りをご提示します。"],
];

const cases = [
  {
    label: "CASE 01｜外資系企業 日本法人",
    title: "海外親会社向けUS-GAAPレポーティング",
    issue: "海外親会社からUS-GAAPベースのレポーティングを求められているものの、日本法人内に対応できる人材がいない。",
    support: "日本基準とUS-GAAPの差異整理から、レポーティング・親会社とのコミュニケーションまで支援。",
    tags: "US-GAAP / MONTHLY CLOSING / REPORTING",
  },
  {
    label: "CASE 02｜海外上場企業 日本子会社",
    title: "Group Auditorとの監査コミュニケーション",
    issue: "グループ監査への対応や英語での監査コミュニケーションに大きな負担が発生。",
    support: "日本法人と海外Group Auditorの間に入り、監査・レポーティング対応を支援。",
    tags: "AUDIT / IFRS / ENGLISH COMMUNICATION",
  },
  {
    label: "CASE 03｜クロスボーダーM&A",
    title: "Financial Due Diligence / Valuation",
    issue: "海外企業を含むM&Aで、財務面の調査と企業価値評価を専門家に依頼したい。",
    support: "Financial Due DiligenceからValuation、必要に応じて英語でのレポーティングまで対応。",
    tags: "FDD / VALUATION / CROSS-BORDER M&A",
  },
];

const fees = [
  ["税務顧問", "月額 50,000円〜"],
  ["IFRS / US-GAAPコンバージェンス", "初年度 1,200,000円〜"],
  ["月次レポーティング", "300,000円〜"],
  ["簡易企業価値評価", "300,000円〜"],
  ["簡易財務デューデリジェンス", "300,000円〜"],
];

const faqs = [
  ["初回相談に費用はかかりますか？", "いいえ。初回相談は1時間程度無料です。ご相談内容を確認したうえで、対応可能な業務内容とお見積りをご提示します。"],
  ["すでに顧問税理士がいても相談できますか？", "はい。国際税務やIFRS / US-GAAPなど、必要な領域だけご依頼いただくことも可能です。既存の顧問税理士との契約に影響しない形での支援についてもご相談いただけます。"],
  ["海外本社との英語でのやり取りもお願いできますか？", "はい。会計・税務・監査など専門的な内容を含め、海外親会社とのコミュニケーションにも対応しています。"],
  ["小規模な日本法人でも依頼できますか？", "はい。企業規模や必要な業務範囲に応じて支援内容をご提案します。"],
  ["スポットでの依頼も可能ですか？", "可能です。IFRS / US-GAAP対応、デューデリジェンス、Valuation、内部統制など、特定業務のみのご相談にも対応します。"],
  ["まず見積りだけお願いできますか？", "はい。初回相談およびお見積りは無料です。"],
];

export default function HomeSections() {
  return (
    <>
      <section className="luare-v6-section luare-people-horizontal" id="people">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-people-horizontal-head">
            <p className="luare-v6-eyebrow">PEOPLE</p>
            <h2>Meet our professionals.</h2>
            <p>国際業務の現場を知る専門家が、会計・財務の課題を直接支援します。</p>
          </ScrollReveal>

          <div className="luare-people-horizontal-track">
            {people.map(([name, role, strength], index) => (
              <ScrollReveal key={name} delay={index * 55}>
                <article className={"luare-people-horizontal-card luare-people-horizontal-card-" + (index + 1)}>
                  <div className="luare-people-horizontal-photo">
                    <Image
                      src="/images/luare-hero-consulting.avif"
                      alt="専門家プロフィール写真（仮）"
                      width={900}
                      height={1125}
                      unoptimized
                    />
                  </div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                  <span>{strength}</span>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p className="luare-people-horizontal-note">※現在はレイアウト確認用のダミー写真・プロフィールです。正式公開前に許諾済みの専門家情報へ差し替えます。</p>
        </div>
      </section>

      <section className="luare-v6-section luare-v6-soft luare-who-refined" id="who-we-help">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-who-refined-head">
            <div>
              <p className="luare-v6-eyebrow">WHO WE HELP</p>
              <h2>このような企業を<br />ご支援しています。</h2>
            </div>
            <p>日本と海外をまたぐ会計・財務の課題に。<br />Luare Consultingが専門家として伴走します。</p>
          </ScrollReveal>

          <div className="luare-who-refined-grid">
            {whoWeHelp.map(([, title, text], index) => {
              const displayTitle = title === "英語で本社とのやり取りが必要な企業"
                ? "英語・中国語で本社とのやり取りが必要な企業"
                : title;
              return (
                <ScrollReveal key={title} delay={(index % 3) * 60}>
                  <article className="luare-who-refined-card">
                    <span className="luare-who-refined-no">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{displayTitle}</h3>
                    <p>{text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="luare-v6-section luare-services-photo" id="services">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow">SERVICES</p>
            <h2>グローバル企業の会計・財務を、<br />ワンストップで。</h2>
          </ScrollReveal>

          <div className="luare-services-photo-grid">
            {services.map((service, index) => {
              const href = index === 3 ? "/services/global-finance" : "/services/accounting-finance-consulting";
              const photos = [
                "/images/luare-hero-consulting.avif",
                "/images/Photo.png",
                "/images/ai_finance_concept.png",
                "/images/global_cities_skyline.png",
              ];
              return (
                <ScrollReveal key={service.no} delay={(index % 2) * 75}>
                  <Link href={href} className="luare-services-photo-card" aria-label={service.title + "の詳細を見る"}>
                    <div
                      className="luare-services-photo-image"
                      style={{ backgroundImage: `url("${photos[index]}")` }}
                      aria-hidden="true"
                    />
                    <div className="luare-services-photo-cut" aria-hidden="true" />
                    <div className="luare-services-photo-copy">
                      <span className="luare-services-photo-no">{service.no}</span>
                      <h3>{service.title}</h3>
                      <div className="luare-services-photo-items">
                        {service.items.map((item) => <span key={item}>{item}</span>)}
                      </div>
                    </div>
                    <span className="luare-services-photo-arrow" aria-hidden="true">→</span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <Link href="/contact" className="luare-v6-primary-cta luare-v6-section-cta">
              サービスについて相談する <span>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="luare-v6-section luare-v6-why" id="why-luare">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow luare-v6-eyebrow-light">WHY LUARE</p>
            <h2>なぜ、Luare Consultingなのか。</h2>
          </ScrollReveal>

          <div className="luare-v6-why-list">
            {why.map(([no, title, text], index) => (
              <ScrollReveal key={no} delay={index * 40}>
                <article className="luare-v6-why-row">
                  <span>{no}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luare-v6-section" id="representative">
        <div className="luare-v6-container">
          <ScrollReveal><p className="luare-v6-eyebrow">REPRESENTATIVE</p></ScrollReveal>
          <div className="luare-v6-rep-grid">
            <ScrollReveal>
              <div className="luare-v6-rep-photo">
                <Image src="/images/Photo.png" alt="Luare Consulting 代表 陸 沿青" width={900} height={1125} unoptimized />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="luare-v6-rep-copy">
                <p className="luare-v6-label">Luare Consulting 代表</p>
                <h2 className="luare-v6-rep-name">陸 沿青</h2>
                <p className="luare-v6-qual">米国公認会計士（USCPA, Inactive, グアム州）</p>
                <p className="luare-v6-label">学歴</p>
                <p><strong>南オーストラリア大学（現：アデレード大学）<br />経営学部 卒業</strong></p>
                <p className="luare-v6-label luare-v6-label-spaced">Biography</p>
                <p className="luare-v6-bio">
                  オーストラリアにて経営学士号を取得後、日系上場専門商社および米国系製造大手の日本法人にて
                  グローバル経理実務を経験。その後、KPMGあずさ監査法人にて会計アドバイザリー業務に従事し、
                  数々の多国籍企業の内部統制・財務基盤構築を支援。さらに、三菱UFJモルガン・スタンレー証券の
                  投資銀行部門、米国系ベンチャー会計事務所を経て独立、Luare Consultingを設立。
                </p>
                <div className="luare-v6-philosophy">
                  <p className="luare-v6-eyebrow">PHILOSOPHY</p>
                  <blockquote>「見えない経理リスク」から、<br />経営者を解放するパートナーへ。</blockquote>
                  <p>
                    採用難や退職による体制崩壊リスクなど、経理部門が抱える慢性的な課題。
                    私たちは、グローバル基準のプロの伴走とテクノロジーの力でこれらの不安を根本から取り除き、
                    経営の意思決定を加速させるクリアな財務オペレーションを構築します。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="luare-v6-section luare-v6-soft" id="case-studies">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow">CASE STUDIES</p>
            <h2>支援事例</h2>
          </ScrollReveal>
          <div className="luare-v6-cases">
            {cases.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 55}>
                <article className="luare-v6-case">
                  <div className="luare-v6-case-label">{item.label}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p><strong>支援</strong><br />{item.support}</p>
                  </div>
                  <div>
                    <p><strong>課題</strong><br />{item.issue}</p>
                    <span>{item.tags}</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p className="luare-v6-note">※実案件を確認したうえで、匿名でも具体的な事例を3〜6件掲載する前提の仮配置です。</p>
        </div>
      </section>

      <section className="luare-v6-section" id="fee">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow">FEE</p>
            <h2>料金をできるだけ透明に。</h2>
            <p>専門サービスだからこそ、「相談してみないと金額が全く分からない」という不安を減らしたいと考えています。</p>
          </ScrollReveal>
          <div className="luare-v6-fee-table">
            {fees.map(([label, price], index) => (
              <ScrollReveal key={label} delay={index * 35}>
                <div className="luare-v6-fee-row"><b>{label}</b><span>{price}</span></div>
              </ScrollReveal>
            ))}
          </div>
          <p className="luare-v6-note">案件の規模・複雑性・必要工数によって料金は異なります。初回相談・お見積りは無料です。</p>
        </div>
      </section>

      <section className="luare-v6-section luare-v6-soft" id="flow">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow">FLOW</p>
            <h2>ご相談から開始まで</h2>
          </ScrollReveal>
          <div className="luare-v6-steps">
            {[
              ["01", "お問い合わせ", "フォームからご相談内容をお送りください。"],
              ["02", "初回無料相談", "オンラインまたは対面で、現在の状況と課題をお伺いします。"],
              ["03", "支援内容・お見積り", "必要となる業務範囲を整理し、支援内容と料金をご提示します。"],
              ["04", "ご契約・支援開始", "内容にご納得いただいたうえで契約し、担当専門家が支援を開始します。"],
            ].map(([no, title, text], index) => (
              <ScrollReveal key={no} delay={index * 60}>
                <article className="luare-v6-step">
                  <span>{no}</span><h3>{title}</h3><p>{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="luare-v6-section" id="faq">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow">FAQ</p>
            <h2>よくあるご質問</h2>
          </ScrollReveal>
          <ScrollReveal className="luare-v6-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="luare-v6-final" id="contact">
        <div className="luare-v6-container">
          <ScrollReveal>
            <p className="luare-v6-eyebrow luare-v6-eyebrow-light">CONTACT</p>
            <h2>海外が絡む会計・税務・監査で<br />お困りではありませんか？</h2>
            <p>
              「誰に相談すればいいかわからない」という段階でも構いません。
              現在の状況をお伺いし、Luare Consultingで対応できること、
              対応できないことも含めて整理します。
            </p>
            <Link href="/contact" className="luare-v6-primary-cta luare-v6-final-cta">
              無料相談を申し込む <span>→</span>
            </Link>
            <small>日本語 / English / 中国語</small>
          </ScrollReveal>
        </div>
      </section>

      <Link href="/contact" className="luare-v6-mobile-cta">初回無料相談をする</Link>
    </>
  );
}
