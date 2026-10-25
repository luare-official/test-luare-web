import RelatedCaseLinks from "@/components/RelatedCaseLinks";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditLandingPage from "./AuditLandingPage";

export const metadata: Metadata = {
  title: "会計監査対応・Group Audit支援 | Luare Consulting",
  description:
    "外資系・中国系企業の日本法人向け監査対応。PBC資料、Audit Readiness、Group Audit、会計論点整理、日英中での海外本社・監査関係者との調整を支援します。",
  alternates: { canonical: "https://luare-consulting.com/services/audit-assurance" },
};

export default function AuditAssurancePage() {
  return (
    <>
      <Navbar solid />
      <AuditLandingPage />
      <RelatedCaseLinks topic="audit" />
    <Footer />
    </>
  );
}
