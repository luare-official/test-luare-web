import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会計・経理・内部統制の実務記事 | Luare Consulting",
  description:
    "日本法人の経理体制、海外子会社管理、内部統制など、会計・財務の実務に関する記事をご紹介します。",
  alternates: { canonical: "https://luare-consulting.com/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar theme="light" solid={true} />

      <main className="flex-1 pt-20">
        <section className="border-b border-[#CBD5E1] bg-[#EDF5FC]">
          <div className="mx-auto max-w-[1140px] px-5 py-12 sm:px-10 sm:py-16">
            <nav aria-label="パンくずリスト" className="mb-8 flex gap-2 text-xs text-[#475569]">
              <Link href="/">ホーム</Link><span>／</span><span>関連記事</span>
            </nav>
            <p className="text-xs font-semibold tracking-widest text-[#1766A0]">INSIGHTS</p>
            <h1 className="mt-3 text-[clamp(30px,4vw,44px)] font-semibold text-[#0B3158]">関連記事</h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-[#475569]">
              会計・決算・内部統制、海外子会社管理など、実務に役立つ記事をご紹介します。
            </p>
          </div>
        </section>

        {/* ══════════ ARTICLE GRID ══════════ */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[1140px] px-5 sm:px-10">
            {posts.length === 0 ? (
              <p className="text-center text-brand-slate/60 text-sm tracking-wide">
                記事は現在準備中です。
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/insights/${post.slug}`}
                    className="group flex flex-col rounded-lg border border-[#CBD5E1] bg-white shadow-sm transition-colors hover:bg-[#EDF5FC] overflow-hidden"
                  >
                    {/* Card top accent */}
                    <div
                      className="h-[2px] w-full"
                      style={{ backgroundColor:"#1766A0" }}
                    />

                    <div className="flex flex-col flex-1 px-7 py-8">
                      {/* Category tag + Date */}
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.3em] px-2.5 py-1 border rounded-sm"
                          style={{
                            color:"#1766A0",
                            borderColor: "rgba(23,102,160,0.35)",
                            backgroundColor: "rgba(23,102,160,0.06)",
                          }}
                        >
                          {post.category}
                        </span>
                        <span className="text-[10px] text-brand-slate/40 tracking-wider">
                          {post.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-base sm:text-lg font-bold text-brand-charcoal leading-snug tracking-wide mb-4 group-hover:text-brand-navy transition-colors duration-200">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs text-brand-slate/60 leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read more */}
                      <div className="mt-6 flex items-center gap-2">
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300"
                          style={{ color:"#1766A0" }}
                        >
                          記事を読む
                        </span>
                        <span
                          className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color:"#1766A0" }}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
