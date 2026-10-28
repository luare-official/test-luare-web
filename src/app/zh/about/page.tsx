import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import FooterZh from "@/components/zh/FooterZh";

export const metadata: Metadata = {
  title: "公司简介 | Luare Consulting",
  description:
    "Luare Consulting代表董事陆沿青的履历及专业背景。曾任职于毕马威（KPMG）、三菱UFJ摩根士丹利证券等机构，熟悉国际财务、内部控制与跨国业务。",
  alternates: {
    canonical: "https://luare-consulting.com/zh/about",
    languages: {
      "x-default": "https://luare-consulting.com/about",
      ja: "https://luare-consulting.com/about",
      en: "https://luare-consulting.com/en/about",
      "zh-CN": "https://luare-consulting.com/zh/about",
    },
  },
};

export default function AboutPageZh() {
  return (
    <>
      <Navbar theme="light" solid={true} />

      <main className="flex-1 pt-20" lang="zh-CN">
      <section className="luare-v6-section" id="representative">
        <div className="luare-v6-container">
          <ScrollReveal><p className="luare-v6-eyebrow">代表简介</p></ScrollReveal>
          <div className="luare-v6-rep-grid">
            <ScrollReveal>
              <div className="luare-v6-rep-photo">
                <Image src="/images/Photo.png" alt="Luare Consulting 代表 陆沿青" width={900} height={1125} unoptimized />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="luare-v6-rep-copy">
                <p className="luare-v6-label">Luare Consulting 代表董事</p>
                <h2 className="luare-v6-rep-name">陆 沿青</h2>
                <p className="luare-v6-qual">美国注册会计师（USCPA, Inactive, 关岛）</p>
                <p className="luare-v6-label">教育背景</p>
                <p><strong>南澳大利亚大学（现：阿德莱德大学）<br />商学学士</strong></p>
                <p className="luare-v6-label luare-v6-label-spaced">个人经历</p>
                <p className="luare-v6-bio">
                  在澳大利亚取得商学学士学位后，曾就职于日本上市专业商社及美国大型制造企业日本分公司，积累全球财务会计实务经验。随后在毕马威（KPMG）Azsa审计法人从事会计咨询业务，协助多家跨国企业构建内部控制及财务基础架构。此后历经三菱UFJ摩根士丹利证券投资银行部、美资创投会计师事务所，最终独立创办Luare Consulting。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

        {/* ══════════════════════════════════════════════════════════════
            COMPANY INFORMATION
           ══════════════════════════════════════════════════════════════ */}
        <section className="bg-brand-white py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex items-center gap-3 mb-12">
              <div
                className="w-8 h-[1.5px] shrink-0"
                style={{ backgroundColor: "#1766A0" }}
              />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                公司信息
              </h3>
            </div>

            <div className="border-t border-slate-200">
              <dl className="divide-y divide-slate-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">公司名称</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">Luare Consulting株式会社</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">业务内容</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">会计与财务BPO / 会计咨询服务</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">服务语言</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">日语 / 英语 / 中文</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-slate/70">公司代表</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">陆 沿青 (USCPA, Inactive)</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA BOTTOM BAR
           ══════════════════════════════════════════════════════════════ */}
        <section
          className="border-t h-auto md:h-auto py-16 md:pt-24 md:pb-20"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.97)",
            borderColor: "rgba(23,102,160, 0.15)",
          }}
        >
          <div className="mx-auto max-w-4xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-platinum tracking-wider mb-2">
                咨询与联系
              </h3>
              <p className="text-xs text-brand-silver/70 tracking-wider">
                欢迎随时就全球财务相关事宜进行咨询。
              </p>
            </div>
            <Link
              href="/zh/contact"
              className="inline-flex items-center justify-center border px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300"
              style={{
                borderColor: "#1766A0",
                color: "#1766A0",
              }}
            >
              联系我们 →
            </Link>
          </div>
        </section>
      </main>

      <FooterZh />
    </>
  );
}
