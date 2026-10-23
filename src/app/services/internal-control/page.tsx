import type {Metadata} from "next";
import JsoxLandingPage from "@/components/JsoxLandingPage";

// The HTML visual design was approved on 2026-10-23.
// Public release remains gated on professional-content review and cross-team QA.
export const metadata:Metadata={
  title:"内部統制・J-SOX構築・3点セット整備支援 | Luare Consulting",
  description:"内部統制・J-SOXの3点セット整備、整備・運用評価、内部監査を実務に沿って支援。日本法人・海外拠点の管理体制に関するご相談も承ります。",
  alternates:{canonical:"https://luare-consulting.com/services/internal-control"},
  openGraph:{
    title:"内部統制・J-SOX構築支援 | Luare Consulting",
    description:"業務記述書・フローチャート・RCMから運用評価まで。内部統制を現場で続けられる仕組みに。",
    url:"https://luare-consulting.com/services/internal-control",
    type:"website"
  }
};
export default function Page(){return <JsoxLandingPage/>;}
