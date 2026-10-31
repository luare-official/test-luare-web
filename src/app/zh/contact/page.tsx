import Navbar from "@/components/Navbar";
import FooterZh from "@/components/zh/FooterZh";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | Luare Consulting",
  description: "联系Luare Consulting，咨询会计、审计协调与财务支持。",
  alternates: { canonical: "https://luare-consulting.com/zh/contact" },
};

const inputClass = "mt-2 w-full rounded-md border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0B3158] outline-none focus:border-[#1766A0] focus:ring-2 focus:ring-[#1766A0]/15";
export default function ContactPageZh() {
  return (
    <>
      <Navbar solid />
      <main className="flex-1 bg-[#EDF5FC] px-5 pb-20 pt-32" lang="zh-CN">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-[.15em] text-[#1766A0]">CONTACT</p>
          <h1 className="mt-3 text-3xl font-bold text-[#0B3158]">联系我们</h1>
          <p className="mt-4 mb-8 text-sm leading-7 text-[#475569]">首次咨询免费。欢迎企业及合作专业机构垂询。</p>
          <form action="https://formspree.io/f/mojppoor" method="POST" className="rounded-lg border border-[#CBD5E1] bg-white p-6 shadow-sm sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div><label htmlFor="zh-company" className="text-sm font-semibold text-[#0B3158]">公司名称 <span className="text-xs text-[#475569]">（必填）</span></label><input id="zh-company" className={inputClass} type="text" autoComplete="organization" name="company" required /></div>
              <div><label htmlFor="zh-name" className="text-sm font-semibold text-[#0B3158]">姓名 <span className="text-xs text-[#475569]">（必填）</span></label><input id="zh-name" className={inputClass} type="text" autoComplete="name" name="name" required /></div>
              <div><label htmlFor="zh-email" className="text-sm font-semibold text-[#0B3158]">邮箱地址 <span className="text-xs text-[#475569]">（必填）</span></label><input id="zh-email" className={inputClass} type="email" autoComplete="email" name="email" required /></div>
              <div><label htmlFor="zh-service" className="text-sm font-semibold text-[#0B3158]">咨询服务 <span className="text-xs text-[#475569]">（必填）</span></label>
              <select id="zh-service" className={inputClass} name="service" defaultValue="" required>
                <option value="" disabled>请选择服务领域</option><option>内部控制・J-SOX</option>
                <option>会计结算与经营管理</option><option>业务优化、AI与系统</option>
                <option>日本市场进入与海外财务</option><option>审计与鉴证协调</option><option>其他</option>
              </select></div>
            </div>
            <div className="mt-7"><label htmlFor="zh-message" className="text-sm font-semibold text-[#0B3158]">咨询内容 <span className="text-xs text-[#475569]">（必填）</span></label><textarea id="zh-message" className={inputClass + " min-h-[176px] resize-y"} name="message" required /></div>
            <div className="mt-8 border-t border-[#CBD5E1] pt-7">
              <p className="mb-5 text-xs leading-6 text-[#475569]">提交前请阅读 <Link href="/privacy" className="font-semibold text-[#1766A0] underline">隐私政策（日文 / 英文 / 中文）</Link>。</p>
              <button type="submit" className="min-h-12 rounded-md bg-[#1766A0] px-9 py-3 text-sm font-semibold text-white hover:bg-[#0B3158] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1766A0]">提交咨询 →</button>
            </div>
          </form>
        </div>
      </main>
      <FooterZh />
    </>
  );
}
