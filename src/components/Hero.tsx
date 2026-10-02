import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="luare-v6-hero">
      <div className="luare-v6-hero-media" aria-hidden="true">
        <img src="/images/luare-hero-consulting.avif" alt="" className="luare-v6-hero-image" />
        <div className="luare-v6-hero-overlay" />
      </div>
      <div className="luare-v6-container luare-v6-hero-inner">
        <ScrollReveal className="luare-v6-hero-copy">
          <p className="luare-v6-eyebrow">GLOBAL ACCOUNTING &amp; FINANCE</p>
          <h1>
            外資系・グローバル企業の
            <br />
            会計・税務・監査を、もっとスムーズに。
          </h1>
          <p className="luare-v6-hero-lead">
            IFRS / US-GAAP、海外親会社へのレポーティング、監査、税務、M&amp;A・Valuationまで。
            国際業務の経験豊富な公認会計士・税理士・USCPAが、日本法人と海外本社の間に立ち、
            複雑な会計・財務課題を支援します。
          </p>
          <a href="/contact" className="luare-v6-primary-cta">
            初回無料相談をする <span>→</span>
          </a>
          <p className="luare-v6-trustline">
            初回相談無料 <i /> 英語対応 <i /> IFRS / US-GAAP対応
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
