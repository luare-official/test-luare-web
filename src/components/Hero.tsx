import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="luare-unicell-hero">
      <div className="luare-unicell-stage">
        <div className="luare-unicell-white-shape" />

        <div className="luare-unicell-small-copy" aria-hidden="true">
          We connect Japan
          <br />
          and global finance.
        </div>

        <div className="luare-unicell-talk-photo" aria-hidden="true">
          <img
            src="/images/luare-hero-consulting.avif"
            alt=""
          />
        </div>

        <div className="luare-unicell-vertical" aria-hidden="true">
          <div className="luare-unicell-vstrip">会計・税務・監査を横断して支援</div>
          <div className="luare-unicell-vstrip">海外本社との橋渡し</div>
          <div className="luare-unicell-vstrip">国際業務に強い専門家チーム</div>
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
