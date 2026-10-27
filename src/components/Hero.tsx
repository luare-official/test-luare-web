import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="luare-unicell-hero">
      <div className="luare-unicell-stage">
        <div className="luare-unicell-white-shape" />

        <div className="luare-unicell-talk-photo" aria-hidden="true">
          <img
            src="/images/luare-hero-consulting-male-20261025.webp"
            alt=""
          />
        </div>

        <ScrollReveal className="luare-unicell-hero-copy">
          <h1>
            <span>外資系・グローバル企業の</span>
            <span>
              会計・財務を、<br className="luare-unicell-mobile-break" />
              もっとスムーズに。
            </span>
          </h1>
          <p>We stand by your finance.</p>
        </ScrollReveal>

        <div className="luare-unicell-side-caption" aria-hidden="true">
          GLOBAL ACCOUNTING &amp; FINANCE
        </div>
        <div className="luare-unicell-scroll" aria-hidden="true">
          SCROLL
        </div>
      </div>
    </section>
  );
}
