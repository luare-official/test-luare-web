export default function Hero() {
  return (
    <section className="luare-hero luare-hero-human">
      <div className="luare-hero-media" aria-hidden="true">
        <img
          className="luare-hero-static-image"
          src="/images/luare-hero-consulting.avif"
          alt=""
        />
        <div className="luare-hero-overlay" />
      </div>

      <div className="luare-container luare-hero-inner">
        <div className="luare-hero-copy">
          <p className="luare-hero-kicker">
            ACCOUNTING &amp; FINANCE / GLOBAL / OPERATIONS
          </p>

          <h1 className="luare-hero-title">
            <span className="luare-title-line">
              <span>経理・財務を、</span>
            </span>
            <span className="luare-title-line">
              <span>設計から実務まで。</span>
            </span>
          </h1>

          <p className="luare-hero-lead">
            外資系日本法人・海外子会社を持つ企業を中心に、会計・財務コンサルティングから
            Finance Operations、BPOまで支援します。
          </p>

          <a href="#services" className="luare-hero-text-link">
            支援領域を見る <span>→</span>
          </a>
        </div>
      </div>

      <div className="luare-scroll-cue" aria-hidden="true">
        <span>scroll</span>
        <i />
      </div>
    </section>
  );
}
