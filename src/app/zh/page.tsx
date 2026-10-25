import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroZh from "@/components/zh/HeroZh";
import PainPointsZh from "@/components/zh/PainPointsZh";
import SolutionEcosystemZh from "@/components/zh/SolutionEcosystemZh";
import ServicesZh from "@/components/zh/ServicesZh";
import PricingZh from "@/components/zh/PricingZh";
import InsightsZh from "@/components/zh/InsightsZh";
import FooterZh from "@/components/zh/FooterZh";

export const metadata: Metadata = {
  title: "Luare Consulting | 完全透明な経理・財務インフラ（外資系HQ向け）",
  description: "海外本社のための完全透明な経理・財務インフラを提供。Luare Consultingが貴社の駐日経営管家として日本進出・運営を支援します。",
  alternates: { canonical: "https://luare-consulting.com/zh" },
};

export default function ZhHome() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroZh />
        <PainPointsZh />
        <SolutionEcosystemZh />
        <ServicesZh />
        <PricingZh />
        <InsightsZh />
      </main>
      <FooterZh />
    </>
  );
}
