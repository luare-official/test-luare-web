import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Luare Consulting",
  description: "Luare Consultingにおけるお問い合わせ情報とサイト利用情報の取扱いについて。",
  alternates: { canonical: "https://luare-consulting.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-white px-5 pb-20 pt-32 text-[#0B3158]">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="パンくずリスト" className="mb-8 text-xs text-[#475569]">
            <Link href="/" className="underline">ホーム</Link> / プライバシーポリシー
          </nav>
          <p className="text-xs font-bold tracking-[.18em] text-[#1766A0]">PRIVACY POLICY</p>
          <h1 className="mt-3 text-3xl font-bold">プライバシーポリシー</h1>
          <p className="mt-5 text-sm leading-8 text-[#475569]">株式会社Luare Consulting（以下「当社」）は、ウェブサイトを通じて取得する情報を以下のように取り扱います。</p>
          <div className="mt-10 space-y-9 text-sm leading-8 text-[#475569]">
            <section><h2 className="mb-2 text-lg font-bold text-[#0B3158]">1. 取得する情報</h2><p>お問い合わせフォームに入力された会社名、お名前、メールアドレス、電話番号（任意）、お問い合わせ内容などを取得します。また、サイト利用に伴うアクセス情報が取得される場合があります。</p></section>
            <section><h2 className="mb-2 text-lg font-bold text-[#0B3158]">2. 利用目的</h2><p>お問い合わせへの回答、サービスのご案内、相談に関する連絡と業務上の調整、サイトの利用状況の分析と改善に使用します。</p></section>
            <section><h2 className="mb-2 text-lg font-bold text-[#0B3158]">3. 外部サービスの利用</h2><p>フォーム送信にはFormspreeを使用し、入力された情報は同サービスを通じて処理されます。サイトの利用状況の分析にはGoogle アナリティクスを使用しています。これらのサービスでは、サービス提供に必要な情報やアクセス情報が取り扱われる場合があります。</p></section>
            <section><h2 className="mb-2 text-lg font-bold text-[#0B3158]">4. 安全管理と情報提供</h2><p>取得した情報の適切な管理に努めます。法令に基づく場合、ご本人の同意がある場合、お問い合わせの処理に必要な外部サービスを利用する場合などを除き、目的外の第三者提供を行いません。</p></section>
            <section><h2 className="mb-2 text-lg font-bold text-[#0B3158]">5. お問い合わせ</h2><p>情報の取扱いや開示・訂正・削除等に関するご相談は、<Link href="/contact" className="font-semibold text-[#1766A0] underline">お問い合わせフォーム</Link>からご連絡ください。</p></section>
            <section><h2 className="mb-2 text-lg font-bold text-[#0B3158]">6. 改定</h2><p>サービスの変更や関連法令などに応じて本方針を見直す場合があります。</p></section>
          </div>
          <div className="mt-12 rounded-lg border border-[#CBD5E1] bg-[#EDF5FC] p-6 text-sm leading-8 text-[#475569]">
            <h2 className="font-bold text-[#0B3158]">Privacy Notice (English)</h2>
            <p>Luare Consulting collects inquiry form details (company, name, email, optional telephone number and message) to respond to inquiries. Form submissions are processed using Formspree, and site traffic is analyzed using Google Analytics. For privacy inquiries, please <Link href="/en/contact" className="font-semibold text-[#1766A0] underline">contact us</Link>.</p>
            <h2 className="mt-5 font-bold text-[#0B3158]">隐私说明（中文）</h2>
            <p>Luare Consulting收集通过联系表单提交的公司名称、姓名、邮箱、可选联系电话及咨询内容，用于回复咨询。网站使用Formspree处理表单，使用Google Analytics分析访问情况。如对信息处理有疑问，请<Link href="/zh/contact" className="font-semibold text-[#1766A0] underline">联系我们</Link>。</p>
          </div>
          <p className="mt-9 text-xs text-[#475569]">制定：2026年10月25日</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
