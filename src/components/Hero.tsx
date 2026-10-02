"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.pexels.com/photos/31698252/pexels-photo-31698252.jpeg?auto=compress&cs=tinysrgb&w=2400",
    alt: "京都・伏見稲荷大社の朱色の鳥居",
  },
  {
    src: "https://images.pexels.com/photos/31071545/pexels-photo-31071545.jpeg?auto=compress&cs=tinysrgb&w=2400",
    alt: "桜と富士山の日本の春景色",
  },
  {
    src: "/images/tokyo_tower_bg.png",
    alt: "東京の夜景",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="luare-hero">
      <div className="luare-hero-media" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`luare-hero-slide ${index === active ? "is-active" : ""}`}
          >
            <img src={slide.src} alt="" />
          </div>
        ))}
        <div className="luare-hero-overlay" />
      </div>

      <div className="luare-container luare-hero-inner">
        <div className="luare-hero-copy">
          <p className="luare-hero-kicker">
            Accounting &amp; Finance × Global × Operations
          </p>

          <h1 className="luare-hero-title">
            <span className="luare-title-line">
              <span>経理・財務を、</span>
            </span>
            <span className="luare-title-line">
              <span>事業を前に進める</span>
            </span>
            <span className="luare-title-line">
              <span>仕組みに。</span>
            </span>
          </h1>

          <p className="luare-hero-lead">
            Accounting &amp; Financeの専門性とグローバル実務をつなぎ、
            経理・財務を「属人的な作業」から「継続して回る仕組み」へ。
          </p>

          <div className="luare-hero-actions">
            <a href="#services" className="luare-pill-button">
              サービスを見る <span>→</span>
            </a>
            <Link href="/contact" className="luare-ghost-button">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      <div className="luare-scroll-cue" aria-hidden="true">
        <span>scroll</span>
        <i />
      </div>

      <div className="luare-hero-progress" aria-label="Hero image progress">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`${index + 1}枚目の写真を表示`}
            className={index === active ? "is-active" : ""}
          >
            <i key={`${active}-${index}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
