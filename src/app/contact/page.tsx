import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Luare Consulting",
  description: "Luare Consultingへのお問い合わせ・初回無料相談はこちらから。",
  alternates: {
    canonical: "https://luare-consulting.com/contact",
    languages: {
      "x-default": "https://luare-consulting.com/contact",
      ja: "https://luare-consulting.com/contact",
      en: "https://luare-consulting.com/en/contact",
      "zh-CN": "https://luare-consulting.com/zh/contact",
    },
  },
};

const inputStyle =
  "mt-2 block min-h-12 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-[15px] text-[#0B3158] placeholder:text-[#475569] outline-none transition-colors focus:border-[#1766A0] focus:ring-2 focus:ring-[#1766A0]/15";
const labelStyle = "block text-[14px] font-semibold text-[#0B3158]";

function Required() {
  return <span className="ml-2 text-[11px] font-medium text-[#475569]">必須</span>;
}

export default function ContactPage() {
  return (
    <>
      <Navbar theme="dark" solid={true} />
      <main className="flex-1 bg-[#EDF5FC] px-5 pb-20 pt-28 text-[#0B3158] [font-family:var(--font-noto-sans),Meiryo,sans-serif] sm:px-8 sm:pb-24 sm:pt-36">
        <div className="mx-auto max-w-[820px]">
          <header className="mb-10 text-center sm:mb-12">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#1766A0]">CONTACT</p>
            <h1 className="mt-4 text-[30px] font-semibold tracking-[-0.03em] text-[#0B3158] sm:text-[40px]">
              お問い合わせ
            </h1>
            <p className="mt-4 text-[14px] leading-[1.9] text-[#475569]">
              初回相談は無料です。
            </p>
          </header>

          <div className="rounded-lg border border-[#CBD5E1] bg-white px-5 py-8 shadow-[0_14px_44px_rgba(24,57,77,0.05)] sm:px-10 sm:py-12">
            <form action="https://formspree.io/f/mojppoor" method="POST">
              <div className="grid gap-x-7 gap-y-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-company" className={labelStyle}>
                    会社名<Required />
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className={inputStyle}
                    placeholder="会社名をご入力ください"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-name" className={labelStyle}>
                    お名前<Required />
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    className={inputStyle}
                    placeholder="お名前をご入力ください"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelStyle}>
                    メールアドレス<Required />
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className={inputStyle}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className={labelStyle}>
                    電話番号
                    <span className="ml-2 text-[11px] font-medium text-[#475569]">任意</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className={inputStyle}
                    placeholder="03-1234-5678"
                  />
                </div>
              </div>

              <div className="mt-8 sm:mt-9">
                <label htmlFor="contact-message" className={labelStyle}>
                  ご相談・お問い合わせ内容<Required />
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={inputStyle + " min-h-[176px] resize-y"}
                  placeholder="ご相談内容を自由にご記入ください"
                  required
                />
              </div>

              <div className="mt-10 border-t border-[#CBD5E1] pt-8 text-center">
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#1766A0] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#0B3158] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3158] sm:w-auto sm:min-w-[260px]"
                >
                  送信する <span aria-hidden="true">→</span>
                </button>
                <p className="mt-4 text-[11px] leading-[1.8] text-[#475569]">
                  送信前に入力内容をご確認ください。
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
