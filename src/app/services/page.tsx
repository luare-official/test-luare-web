import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDirectory from "@/components/ServiceDirectory";

export const metadata: Metadata = {
  title: "専門サービス | Luare Consulting",
  description: "内部統制・J-SOX、会計・決算・経営管理、業務改善・AI、日本進出・海外拠点、監査・保証業務の5領域をご紹介。法定監査・任意監査は提携監査法人と連携してご案内します。",
  alternates: { canonical: "https://luare-consulting.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-white pt-20">
        <section className="border-b border-[#dce7eb] bg-[#f5f9fa]">
          <div className="mx-auto max-w-[1140px] px-5 pb-11 pt-9 sm:px-10 sm:pb-14 sm:pt-12">
            <nav aria-label="パンくずリスト" className="mb-9 flex gap-3 text-xs text-[#657780]">
              <Link className="hover:text-[#215d76] hover:underline" href="/">ホーム</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">サービス</span>
            </nav>
            <p className="mb-3 text-[11px] font-semibold tracking-[.22em] text-[#41829a]">OUR SERVICES</p>
            <h1 className="text-[clamp(32px,4.5vw,48px)] font-semibold leading-tight text-[#203e52]">専門サービス</h1>
            <p className="mt-5 max-w-3xl text-[14px] leading-8 text-[#5a7786] sm:text-base">
              内部統制、決算・経営管理、業務改善、日本進出、監査・保証業務。
              会社の状況に合わせて、必要な業務からご相談いただけます。
            </p>
          </div>
        </section>

        <ServiceDirectory />

        <section className="border-t border-[#dbe6e9] bg-[#f6f9fa]">
          <div className="mx-auto max-w-[1140px] px-5 py-14 sm:px-10 sm:py-16">
            <p className="text-[11px] font-semibold tracking-[.19em] text-[#5d8492]">CONTACT</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#28495a] sm:text-3xl">まずは、現在の課題をお聞かせください。</h2>
            <p className="mt-4 max-w-[720px] text-sm leading-8 text-[#5b7079]">
              支援内容や進め方は、業務の状況とご希望を伺ったうえで個別にご提案します。
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#24647f] px-7 py-4 text-sm font-semibold text-white hover:bg-[#184f67]">
              お問い合わせ <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
