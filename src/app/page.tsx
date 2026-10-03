"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

function FreeConsultationRail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > Math.max(420, window.innerHeight * 0.72));
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return (
    <>
      <a className={"luare-consult-rail " + (visible ? "is-visible" : "")} href="#contact" aria-label="無料オンライン相談">
        <span className="luare-consult-video" aria-hidden="true"><i /></span>
        <strong>無料オンライン相談</strong>
        <span className="luare-consult-rule" />
        <span className="luare-consult-languages" aria-label="日本語、英語、中国語に対応">
          <span className="luare-consult-language">
            <i className="luare-line-flag luare-line-flag-jp" aria-hidden="true" />
            <b>JP</b>
          </span>
          <span className="luare-consult-language">
            <i className="luare-line-flag luare-line-flag-en" aria-hidden="true"><em /></i>
            <b>EN</b>
          </span>
          <span className="luare-consult-language">
            <i className="luare-line-flag luare-line-flag-cn" aria-hidden="true" />
            <b>中</b>
          </span>
        </span>
      </a>
      <div className={"luare-consult-popover " + (visible ? "is-rail-visible" : "")} aria-hidden="true">
        <button type="button" tabIndex={-1} aria-hidden="true">×</button>
        <span className="luare-consult-people" aria-hidden="true"><i /><i /><i /></span>
        <strong>オンラインで<br />気軽に相談</strong>
        <p>会計・財務の専門家が、<br />日本語・英語・中国語の<br />3言語で対応します。</p>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Navbar heroStyle />
      <main className="flex-1 luare-home luare-home-v6">
        <Hero />
        <HomeSections />
      </main>
      <FreeConsultationRail />
      <Footer />
    </>
  );
}
