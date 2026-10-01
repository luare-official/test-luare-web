import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const serviceRows = [
  {
    no: "01",
    title: "Accounting & Finance Consulting",
    text: "会計・財務の専門知識を、実際の業務改善と意思決定につなげます。",
  },
  {
    no: "02",
    title: "Global Finance Support",
    text: "海外HQ Reporting、Intercompany、海外子会社管理を、実務レベルで支援します。",
  },
  {
    no: "03",
    title: "Finance Operations",
    text: "月次Close、Closing Calendar、SOP、責任分界を整え、継続して回る仕組みへ。",
  },
  {
    no: "04",
    title: "Luare BPO",
    text: "外資系日本法人を中心に、Finance Operationsそのものを継続運営します。",
  },
];

export default function HomeSections() {
  return (
    <>
      <section className="luare-section bg-white" id="about">
        <div className="luare-container">
          <div className="luare-two-col-heading">
            <ScrollReveal>
              <p className="luare-eyebrow">about us</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="luare-h2">
                実務と専門性を、
                <br />
                ひとつの流れに。
              </h2>
              <p className="luare-intro">
                会計知識だけでも、日々の実務だけでも、Financeは安定しません。
                Luareは「理解する・つなぐ・仕組みにする」を、一つの運営として設計します。
              </p>
            </ScrollReveal>
          </div>

          <div className="luare-points">
            <ScrollReveal>
              <article className="luare-point">
                <span>01 / UNDERSTAND</span>
                <h3>現場を理解する</h3>
                <p>
                  日常の経理実務、月次決算、既存システム、社内承認まで、実際の業務フローから整理します。
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={90}>
              <article className="luare-point">
                <span>02 / CONNECT</span>
                <h3>国境をつなぐ</h3>
                <p>
                  日本法人と海外HQのReporting、Intercompany、言語・会計慣行のギャップをつなぎます。
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <article className="luare-point">
                <span>03 / OPERATE</span>
                <h3>仕組みにする</h3>
                <p>
                  SOP、Closing Calendar、責任分界を整え、担当者が変わっても止まりにくいFinance運営へ。
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="luare-photo-story">
        <div className="luare-photo-story-grid">
          <div className="luare-photo-story-media">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Finance team meeting"
              loading="lazy"
            />
          </div>
          <div className="luare-photo-story-copy">
            <ScrollReveal>
              <p className="luare-eyebrow">finance operations</p>
              <h2 className="luare-h2">
                正しいだけではなく、
                <br />
                ちゃんと回る。
              </h2>
              <p className="luare-intro">
                Financeの課題は、会計論点だけではありません。締め日、データ、承認、海外HQ、担当者への依存。
                Luareは、それらを一つの運営として整えます。
              </p>
              <a className="luare-text-link" href="#services">
                支援領域を見る
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="luare-section bg-white" id="finance-operations">
        <div className="luare-container">
          <div className="luare-map-heading">
            <ScrollReveal>
              <p className="luare-eyebrow">finance operations map</p>
              <h2 className="luare-h2">
                バラバラだった業務を、
                <br />
                ひとつのFinance運営へ。
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p>
                コンサルティング、グローバル支援、日常運用、BPOを別々の箱として並べるのではなく、
                必要な領域を一つの運営モデルとして接続します。
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="luare-ops-map">
            <div className="luare-map-line luare-map-line-v" />
            <div className="luare-map-line luare-map-line-h" />
            <div className="luare-map-center">
              <strong>
                Luare
                <br />
                Finance
                <br />
                Operations
              </strong>
            </div>
            <div className="luare-map-item luare-map-item-1">
              <b>Accounting &amp; Finance</b>
              <span>会計・財務コンサルティング</span>
            </div>
            <div className="luare-map-item luare-map-item-2">
              <b>Global Finance</b>
              <span>海外HQ・海外子会社支援</span>
            </div>
            <div className="luare-map-item luare-map-item-3">
              <b>Managed BPO</b>
              <span>継続運営・SOP・改善</span>
            </div>
            <div className="luare-map-item luare-map-item-4">
              <b>Finance Operations</b>
              <span>月次Close・Intercompany</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="luare-global-section" id="global">
        <div className="luare-container luare-global-grid">
          <ScrollReveal>
            <p className="luare-eyebrow luare-eyebrow-light">global capability</p>
            <h2 className="luare-h2 text-white">
              日本法人と海外HQの間を、
              <br />
              Financeでつなぐ。
            </h2>
            <p className="luare-global-copy">
              海外親会社・海外子会社とのReporting、Intercompany、英語コミュニケーションを含むFinance実務を、
              日々の運営と一体で支援します。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="luare-route">
              <div className="luare-route-node">
                <b>Japan Entity</b>
                <span>Local operation</span>
              </div>
              <div className="luare-route-arrow"><i /></div>
              <div className="luare-route-node">
                <b>Luare</b>
                <span>Finance operations</span>
              </div>
              <div className="luare-route-arrow"><i /></div>
              <div className="luare-route-node">
                <b>Global HQ</b>
                <span>Reporting &amp; review</span>
              </div>
            </div>
            <p className="luare-language-note">日本語 / English / 中文</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="luare-section bg-white" id="services">
        <div className="luare-container">
          <div className="luare-two-col-heading">
            <ScrollReveal>
              <p className="luare-eyebrow">our services</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="luare-h2">
                必要な専門性を、
                <br />
                必要なかたちで。
              </h2>
              <p className="luare-intro">
                単発の助言から継続的なFinance Operationsまで、課題に応じて支援領域を組み合わせます。
              </p>
            </ScrollReveal>
          </div>

          <div className="luare-service-list">
            {serviceRows.map((item, index) => (
              <ScrollReveal key={item.no} delay={index * 55}>
                <div className="luare-service-row">
                  <span className="luare-service-no">{item.no}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="luare-service-arrow">↗</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="luare-marquee" aria-hidden="true">
        <div className="luare-marquee-track">
          ACCOUNTING &amp; FINANCE　—　GLOBAL　—　OPERATIONS　—　MANAGED FINANCE　—　ACCOUNTING &amp; FINANCE　—　GLOBAL　—　OPERATIONS　—　MANAGED FINANCE　—　
        </div>
      </div>

      <section className="luare-section luare-representative" id="representative">
        <div className="luare-container luare-representative-grid">
          <ScrollReveal>
            <div className="luare-representative-photo">
              <Image
                src="/images/Photo.png"
                alt="Luare Consulting 代表取締役 陸 沿青"
                width={900}
                height={1125}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="luare-representative-copy">
              <p className="luare-eyebrow">representative</p>
              <h2 className="luare-h2">
                実務を知る人が、
                <br />
                仕組みまで設計する。
              </h2>
              <p className="luare-representative-name">陸 沿青</p>
              <p className="luare-representative-meta">
                Managing Partner / USCPA, Guam, Inactive
              </p>
              <p>
                事業会社の経理実務、会計アドバイザリー、投資銀行、クロスボーダー会計支援などの経験をもとに、
                日本法人・海外HQ双方のFinance課題を支援します。
              </p>
              <Link href="/about" className="luare-text-link">
                代表者について
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
