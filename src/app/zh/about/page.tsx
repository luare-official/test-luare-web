import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterZh from "@/components/zh/FooterZh";

export const metadata: Metadata = {
  title: "公司简介 | Luare Consulting",
  description:
    "Luare Consulting 代表董事 陆沿青（US.CPA）的简历。曾任职于毕马威（KPMG）、三菱UFJ摩根士丹利证券等，通过AI代理与专家团队提供次世代AI财务BPO服务。",
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

      <main className="flex-1" lang="zh-CN">
        {/* ══════════════════════════════════════════════════════════════
            HERO SECTION
           ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 overflow-hidden">
          {/* Background: navy + subtle skyline */}
          <div className="absolute inset-0 bg-brand-navy">
            <Image
              src="/images/global_cities_skyline.png"
              alt=""
              fill
              className="object-cover object-center opacity-[0.08]"
              priority
            />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 py-28 sm:py-36 text-center">
            {/* Gold accent label */}
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
              style={{ color: "#1766A0" }}
            >
              公司简介与代表简历
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-wider text-brand-platinum leading-tight">
              关于我们
            </h1>

            {/* Thin gold divider */}
            <div
              className="mx-auto mt-8 w-16 h-[1.5px]"
              style={{ backgroundColor: "#1766A0" }}
            />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            MAIN 2-COLUMN SECTION
           ══════════════════════════════════════════════════════════════ */}
        <section className="bg-brand-white py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
              {/* ─── LEFT COLUMN: Portrait ─── */}
              <div className="w-full lg:w-[38%] shrink-0">
                <div className="relative">
                  {/* Gold accent frame behind the photo */}
                  <div
                    className="absolute -top-3 -left-3 w-full h-full rounded-sm border"
                    style={{ borderColor: "rgba(23,102,160, 0.35)" }}
                  />

                  {/* Photo container */}
                  <div className="relative overflow-hidden rounded-sm shadow-2xl">
                    <Image
                      src="/images/Photo.png"
                      alt="陆沿青 — 代表董事"
                      width={560}
                      height={700}
                      className="w-full h-auto object-cover"
                      priority
                      unoptimized={true}
                    />

                    {/* Bottom gradient overlay with name */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent px-6 pt-20 pb-6">
                      <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-platinum tracking-wider">
                        陆 沿青
                      </h2>
                      <span className="text-xs font-medium tracking-[0.15em] text-brand-silver/80 mt-1 block">
                        Yanqing Lu
                      </span>
                    </div>
                  </div>

                  {/* Role badge below photo */}
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="w-8 h-[1.5px] shrink-0"
                      style={{ backgroundColor: "#1766A0" }}
                    />
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.25em]"
                      style={{ color: "#1766A0" }}
                    >
                      代表董事
                    </span>
                  </div>
                </div>
              </div>

              {/* ─── RIGHT COLUMN: Biography ─── */}
              <div className="w-full lg:w-[62%]">
                {/* ── Credentials Block ── */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Qualification */}
                    <div className="border-l-2 pl-5" style={{ borderColor: "#1766A0" }}>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 block mb-2">
                        持有资格
                      </span>
                      <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                        美国注册会计师
                        <br />
                        (USCPA, Inactive, 关岛)
                      </p>
                    </div>

                    {/* Education */}
                    <div className="border-l-2 pl-5" style={{ borderColor: "#1766A0" }}>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 block mb-2">
                        教育背景
                      </span>
                      <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                        南澳大利亚大学（现：阿德莱德大学）
                        <br />
                        商学学士
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-100 mb-12" />

                {/* ── Biography ── */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-6 h-[1.5px] shrink-0"
                      style={{ backgroundColor: "#1766A0" }}
                    />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                      个人经历
                    </h3>
                  </div>
                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide">
                    在澳大利亚取得商学学士学位后，曾就职于日本上市专业商社及美国大型制造企业日本分公司，积累了丰富的全球财务会计实务经验。随后，在毕马威（KPMG）Azsa审计法人从事会计咨询业务，协助多家跨国企业构建内部控制及财务基础架构。
                  </p>
                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide mt-4">
                    此后，历经三菱UFJ摩根士丹利证券投资银行部、美资创投会计师事务所，最终独立创办Luare Consulting。
                  </p>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-slate-100 mb-12" />

                {/* ── Philosophy ── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-6 h-[1.5px] shrink-0"
                      style={{ backgroundColor: "#1766A0" }}
                    />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                      经营理念
                    </h3>
                  </div>

                  <blockquote
                    className="border-l-[3px] pl-6 mb-5"
                    style={{ borderColor: "#1766A0" }}
                  >
                    <p className="font-serif text-lg sm:text-xl font-medium text-brand-charcoal leading-relaxed tracking-wide">
                      成为将经营者从“隐形财务风险”中
                      <br />
                      解放出来的合作伙伴。
                    </p>
                  </blockquote>

                  <p className="text-sm sm:text-[15px] text-brand-slate leading-[1.9] tracking-wide">
                    招聘困难、人员流失导致的体系崩溃风险等，是企业财务部门长期面临的顽疾。我们通过全球标准的专业陪跑与科技力量，从根本上消除这些隐患，构建加速经营决策的清晰财务运营体系。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CAREER TIMELINE
           ══════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 border-t border-slate-100 py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex items-center gap-3 mb-14">
              <div
                className="w-8 h-[1.5px] shrink-0"
                style={{ backgroundColor: "#1766A0" }}
              />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-slate/60">
                职业历程
              </h3>
            </div>

            <div className="relative">
              {/* Vertical gold line */}
              <div
                className="absolute left-[11px] top-2 bottom-2 w-[1.5px]"
                style={{ backgroundColor: "rgba(23,102,160, 0.25)" }}
              />

              <div className="space-y-10">
                {[
                  {
                    label: "Education",
                    title: "南澳大利亚大学",
                    desc: "在澳大利亚取得商学学士学位",
                  },
                  {
                    label: "Global Accounting",
                    title: "日本上市专业商社 / 美国大型制造企业",
                    desc: "积累了丰富的全球财务会计实务经验",
                  },
                  {
                    label: "Big 4 Advisory / US CPA",
                    title: "毕马威（KPMG）Azsa审计法人",
                    desc: "取得USCPA资格，从事会计咨询业务，协助多家跨国企业构建内部控制及财务基础架构",
                  },
                  {
                    label: "Investment Banking",
                    title: "三菱UFJ摩根士丹利证券",
                    desc: "在投资银行部从事并购（M&A）咨询业务",
                  },
                  {
                    label: "Venture",
                    title: "美资创投会计师事务所",
                    desc: "从事全面财务咨询服务（审计、内部控制构建支持、财务外包、并购等）",
                  },
                  {
                    label: "Founder",
                    title: "成立Luare Consulting株式会社",
                    desc: "创立财务会计咨询与AI代理服务机构",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    {/* Dot */}
                    <div className="relative shrink-0 mt-1">
                      <div
                        className="w-[23px] h-[23px] rounded-full border-[2px] flex items-center justify-center bg-white transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor: "#1766A0" }}
                      >
                        <div
                          className="w-[7px] h-[7px] rounded-full"
                          style={{ backgroundColor: "#1766A0" }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.3em] block mb-1"
                        style={{ color: "#1766A0" }}
                      >
                        {item.label}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-brand-charcoal tracking-wide mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-slate/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                  <dd className="mt-1 text-sm font-medium text-brand-charcoal sm:col-span-2 sm:mt-0">陆 沿青 (US.CPA, Inactive)</dd>
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
