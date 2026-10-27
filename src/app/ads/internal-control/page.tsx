import type { Metadata } from "next";
import JsoxLandingPage from "@/components/JsoxLandingPage";
import RelatedCaseLinks from "@/components/RelatedCaseLinks";

// Preserved 2026-10-27 advertising LP. The standard service page is separate.
// Do not change or remove without an explicit advertising-LP decision.
// Snapshot: archive/internal-control-ad-lp-20261027
export const metadata: Metadata = {
  title: "J-SOX・内部統制のご相談 | Luare Consulting（広告用）",
  description: "内部統制・J-SOXに関するお問い合わせとご相談",
  robots: { index: false, follow: false }
};

export default function InternalControlAdLandingPage() {
  return <><JsoxLandingPage /><RelatedCaseLinks topic="internal" /></>;
}
