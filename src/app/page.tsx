"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import FreeConsultationRail from "@/components/FreeConsultationRail";


export default function Home() {
  // A direct /#case-studies or /#representative visit should land on its section
  // after hydration instead of remaining on the full-screen hero.
  useEffect(() => {
    const jumpToSection = () => {
      const target = window.location.hash.slice(1);
      if (target !== "case-studies" && target !== "representative") return;
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ block: "start", behavior: "instant" });
      });
    };
    jumpToSection();
    window.addEventListener("hashchange", jumpToSection);
    return () => window.removeEventListener("hashchange", jumpToSection);
  }, []);

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
