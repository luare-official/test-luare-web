import RelatedCaseLinks from "@/components/RelatedCaseLinks";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditLandingPage from "./AuditLandingPage";

export const metadata: Metadata = {
  title: "会計監査（法定・任意）・監査対応 | Luare Consulting",
  description:
    "会社法監査などの法定監査、任意監査、連結子会社監査、IFRS・US-GAAP対応監査のご相談。J-Bridge 国際監査法人と連携し、監査対応・海外本社との調整も支援します。",
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
