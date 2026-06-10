import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroEn from "@/components/en/HeroEn";
import GlobalDataPipelineEn from "@/components/en/GlobalDataPipelineEn";
import ServicesEn from "@/components/en/ServicesEn";
import ComparisonMatrixEn from "@/components/en/ComparisonMatrixEn";
import StrengthsEn from "@/components/en/StrengthsEn";
import GlobalCTAEn from "@/components/en/GlobalCTAEn";
import FooterEn from "@/components/en/FooterEn";

export const metadata: Metadata = {
  title: "Luare Consulting | Zero Local Hiring Risk. Financial Compliance in Japan.",
  description: "Fully hand off your Japanese bookkeeping, payment operations, and localized financial reporting to Luare Consulting. Secure local AI & USCPA oversight.",
};

export default function EnglishHome() {
  return (
    <>
      <Navbar theme="dark" solid={false} />
      <main className="flex-1">
        <HeroEn />
        <GlobalDataPipelineEn />
        <ServicesEn />
        <ComparisonMatrixEn />
        <StrengthsEn />
        <GlobalCTAEn />
      </main>
      <FooterEn />
    </>
  );
}
