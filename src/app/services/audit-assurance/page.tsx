import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApprovedServiceDetailLayout from "@/components/ApprovedServiceDetailLayout";

export const metadata: Metadata = {
  title: "外資系・中国系企業の監査・監査対応支援 | Luare Consulting",
  description:
    "外資系・中国系企業の日本法人向けに、監査準備、Group Audit、IFRS・US-GAAP、海外本社との会計コミュニケーションまで支援。監査が必要な場合は提携監査法人と連携します。",
  alternates: { canonical: "https://luare-consulting.com/services/audit-assurance" },
};

export default function AuditAssurancePage(){
  return <><Navbar solid /><ApprovedServiceDetailLayout page="audit-assurance" /><Footer /></>;
}
