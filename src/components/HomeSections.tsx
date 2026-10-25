import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import InteractiveServiceGallery from "./InteractiveServiceGallery";

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



const why = [
  ["01", "国際会計に強い専門家チーム", "IFRS・US-GAAP・国際税務・クロスボーダーM&Aなど、一般的な国内会計事務所では対応が難しい領域にも対応します。"],
  ["02", "Big4・海外企業・事業会社での実務経験", "監査法人だけではなく、海外企業・Finance Manager・海外子会社管理・M&Aなど、「企業側」の実務も踏まえ、現場で実行できる解決策まで考えます。"],
  ["03", "海外本社とのコミュニケーションまで対応", "日本語・英語・中国語対応可能。専門的な会計・財務内容について海外本社との直接コミュニケーションが可能です。"],
  ["04", "監査・税務・会計・Financeを横断", "会計だけ、税務だけ、監査だけではなく、企業が実際に直面する課題を横断的にサポートできる体制を整えています。"],
  ["05", "高い専門性と費用のバランス", "国際業務の経験を持つ専門家が効率的に対応し、必要な業務範囲を整理したうえで案件ごとに事前にお見積りをご提示します。"],
];

const cases = [
  {
    id:"accounting-operations",
    label:"CASE 01｜決算・業務改善",
    title:"複雑な事業データと決算工程をつなぎ、早期化を支援",
    issue:"事業ごとに異なる売上集計、限られた人員、部門間の締め工程のずれ。",
    support:"決算・CF資料の作成と、事業部門から経理部門へデータが届く工程の整理を支援。",
    tags:"CLOSING / FINANCE OPERATIONS",
  },
  {
    id:"global-internal-control",
    label:"CASE 02｜グローバル内部統制",
    title:"グローバル方針を現場で継続できる内部統制の運用へ",
    issue:"本社方針と国内現場の運用、各部門の役割や証跡の管理に課題。",
    support:"統制上の論点、運用プロセス、責任分担、改善事項を実務に沿って整理。",
    tags:"INTERNAL CONTROL / OPERATIONS",
  },
  {
    id:"overseas-jsox",
    label:"CASE 03｜海外拠点のJ-SOX",
    title:"海外事業拠点のJ-SOX 3点セットをゼロから構築",
    issue:"言語・商習慣の異なる海外拠点で、実際の業務を把握して文書化・評価準備を進める。",
    support:"現地へのヒアリング、業務記述書・フローチャート・RCMの整備、監査関係者との論点整理を支援。",
    tags:"J-SOX / PROCESS DOCUMENTATION",
  },
];

const articles = [
  { slug:"close-process-early-improvement", category:"決算・業務改善", title:"決算早期化は、経理だけを急がせても進まない", excerpt:"経理部門へ届く前のデータや承認工程を見直し、精度と締め日の両立を考えます。" },
  { slug:"overseas-jsox-three-documents", category:"内部統制・J-SOX", title:"海外拠点のJ-SOXは、3点セットの前に業務の確認から", excerpt:"業務記述書・フローチャート・RCMを作る前に、現地の業務と証跡を確認します。" },
  { slug:"japan-subsidiary-finance-setup", category:"日本進出・Finance Setup", title:"海外本社がある日本法人のFinance Setupで最初に決める5つのこと", excerpt:"会計ソフトだけでなく、承認・月次決算・海外本社報告を一つの運用として設計します。" },
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

      <section className="luare-v6-section luare-who-band" id="who-we-help" aria-labelledby="who-we-help-title">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-who-band-inner">
            <div className="luare-who-band-head">
              <p className="luare-v6-eyebrow">WHO WE HELP</p>
              <h2 id="who-we-help-title">このような企業を<br />ご支援しています。</h2>
            </div>
            <ul className="luare-who-band-list">
              {whoWeHelp.map(([, title]) => (
                <li key={title}>
                  {title === "英語で本社とのやり取りが必要な企業"
                    ? "英語・中国語で本社とのやり取りが必要な企業"
                    : title}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="luare-v6-section luare-services-photo" id="services">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow">SERVICES</p>
            <h2>グローバル企業の会計・財務を、<br />ワンストップで。</h2>
          </ScrollReveal>

          <InteractiveServiceGallery />

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
                    <Link href={`/cases#/case/${item.id}`} className="mt-4 inline-block border-b border-current pb-1 text-sm font-semibold text-[#0B3158] hover:opacity-70">事例の詳細を見る ↗</Link>
                  </div>
                  <div>
                    <p><strong>課題</strong><br />{item.issue}</p>
                    <span>{item.tags}</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p className="luare-v6-note">※掲載内容は確認用の仮原稿です。個別企業の実績や成果は、事実関係と掲載許諾の確認後に更新します。</p>
          <div className="mt-8 text-center">
            <Link href="/#services" className="inline-flex items-center justify-center border border-[#0B3158] px-7 py-3 text-sm font-semibold text-[#0B3158] transition-colors hover:bg-[#0B3158] hover:text-white">
              支援内容を詳しく見る <span className="ml-3" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="luare-v6-section" id="home-articles" aria-labelledby="home-articles-title">
        <div className="luare-v6-container">
          <ScrollReveal className="luare-v6-section-head">
            <p className="luare-v6-eyebrow">INSIGHTS</p>
            <h2 id="home-articles-title">ニュース・ブログ</h2>
            <p className="mt-3 text-sm leading-8 text-[#475569]">会計・内部統制・日本法人の実務に役立つテーマをご紹介します。</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {articles.map((article, i)=>(
              <ScrollReveal key={article.slug} delay={i*50}>
                <Link href={`/insights/${article.slug}`} className="group block h-full rounded-md border border-[#CBD5E1] bg-white p-6 shadow-[0_8px_25px_rgba(21,61,79,.035)] transition-colors hover:border-[#CBD5E1] hover:bg-[#EDF5FC]">
                  <span className="text-xs font-semibold text-[#1766A0]">{article.category}</span>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-[#0B3158]">{article.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">{article.excerpt}</p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-[#0B3158] group-hover:underline">記事を読む <span aria-hidden="true" className="ml-2">↗</span></span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-[#475569]">※ 専門監修前の確認用記事を含みます。記載内容は今後更新される場合があります。</p>
          <div className="mt-7 text-center"><Link href="/insights" className="inline-flex items-center rounded-full border border-[#CBD5E1] px-6 py-3 text-sm font-semibold text-[#0B3158] hover:bg-[#EDF5FC]">記事一覧を見る ↗</Link></div>
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
