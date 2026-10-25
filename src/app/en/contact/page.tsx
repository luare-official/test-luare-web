import Navbar from "@/components/Navbar";
import FooterEn from "@/components/en/FooterEn";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Luare Consulting",
  description: "Contact Luare Consulting for accounting, audit and finance inquiries.",
  alternates: { canonical: "https://luare-consulting.com/en/contact" },
};

const inputClass = "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0B3158] outline-none focus:border-[#1766A0] focus:ring-2 focus:ring-[#1766A0]/15";
export default function ContactPageEn() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-[#EDF5FC] px-5 pb-20 pt-32" lang="en">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-[.15em] text-[#1766A0]">CONTACT</p>
          <h1 className="mt-3 text-3xl font-bold text-[#0B3158]">Contact Us</h1>
          <p className="mt-4 mb-8 text-sm leading-7 text-[#475569]">The initial consultation is free. We welcome inquiries from companies and partner professionals.</p>
          <form action="https://formspree.io/f/mojppoor" method="POST" className="rounded-lg border border-[#CBD5E1] bg-white p-6 shadow-sm sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div><label htmlFor="en-company" className="text-sm font-semibold text-[#0B3158]">Company Name <span className="text-xs text-[#475569]">(Required)</span></label><input id="en-company" className={inputClass} type="text" autoComplete="organization" name="company" required /></div>
              <div><label htmlFor="en-name" className="text-sm font-semibold text-[#0B3158]">Your Name <span className="text-xs text-[#475569]">(Required)</span></label><input id="en-name" className={inputClass} type="text" autoComplete="name" name="name" required /></div>
              <div><label htmlFor="en-email" className="text-sm font-semibold text-[#0B3158]">Email Address <span className="text-xs text-[#475569]">(Required)</span></label><input id="en-email" className={inputClass} type="email" autoComplete="email" name="email" required /></div>
              <div><label htmlFor="en-phone" className="text-sm font-semibold text-[#0B3158]">Phone Number <span className="text-xs text-[#475569]">(Optional)</span></label><input id="en-phone" className={inputClass} type="tel" autoComplete="tel" name="phone" /></div>
            </div>
            <div className="mt-7"><label htmlFor="en-message" className="text-sm font-semibold text-[#0B3158]">Message <span className="text-xs text-[#475569]">(Required)</span></label><textarea id="en-message" className={inputClass + " min-h-[176px] resize-y"} name="message" required /></div>
            <div className="mt-8 border-t border-[#CBD5E1] pt-7">
              <p className="mb-5 text-xs leading-6 text-[#475569]">Before submitting, please review our <Link href="/privacy" className="font-semibold text-[#1766A0] underline">Privacy Policy (日本語 / English / 中文)</Link>.</p>
              <button type="submit" className="min-h-12 rounded-md bg-[#1766A0] px-9 py-3 text-sm font-semibold text-white hover:bg-[#0B3158] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1766A0]">Send Inquiry →</button>
            </div>
          </form>
        </div>
      </main>
      <FooterEn />
    </>
  );
}
