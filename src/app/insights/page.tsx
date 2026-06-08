import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights & Knowledge | Luare Consulting",
  description:
    "クロスボーダービジネスとガバナンスに関する専門的な知見。IFRS、内部統制、日本進出など、グローバル財務の最前線から。",
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ──────────────── NAVBAR ──────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-navy/95 backdrop-blur-md border-b border-brand-silver/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          <Link
            href="/"
            className="font-serif text-lg sm:text-xl font-medium tracking-wider text-brand-platinum hover:text-white transition-colors"
          >
            株式会社 Luare Consulting
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-xs font-medium uppercase tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xs font-medium uppercase tracking-[0.2em] text-brand-silver hover:text-brand-platinum transition-colors"
            >
              Leadership
            </Link>
            <Link
              href="/insights"
              className="text-xs font-medium uppercase tracking-[0.2em] text-brand-platinum transition-colors"
              style={{ borderBottom: "1px solid #C5A059" }}
            >
              Insights
            </Link>
          </nav>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center border border-brand-platinum text-brand-platinum hover:bg-brand-platinum hover:text-brand-navy px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* ══════════ HERO ══════════ */}
        <section className="relative pt-20 overflow-hidden">
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
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
              style={{ color: "#C5A059" }}
            >
              専門知見
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-wider text-brand-platinum leading-tight">
              Insights &amp; Knowledge
            </h1>

            <p className="mt-6 text-sm sm:text-base text-brand-silver/70 tracking-wider max-w-xl mx-auto leading-relaxed">
              クロスボーダービジネスとガバナンスに関する専門的な知見
            </p>

            <div
              className="mx-auto mt-8 w-16 h-[1.5px]"
              style={{ backgroundColor: "#C5A059" }}
            />
          </div>
        </section>

        {/* ══════════ ARTICLE GRID ══════════ */}
        <section className="bg-brand-white py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            {posts.length === 0 ? (
              <p className="text-center text-brand-slate/60 text-sm tracking-wide">
                記事は現在準備中です。
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/insights/${post.slug}`}
                    className="group flex flex-col bg-white rounded-sm border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Card top accent */}
                    <div
                      className="h-[2px] w-full"
                      style={{ backgroundColor: "#C5A059" }}
                    />

                    <div className="flex flex-col flex-1 px-7 py-8">
                      {/* Category tag + Date */}
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.3em] px-2.5 py-1 border rounded-sm"
                          style={{
                            color: "#C5A059",
                            borderColor: "rgba(197, 160, 89, 0.35)",
                            backgroundColor: "rgba(197, 160, 89, 0.06)",
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
                          style={{ color: "#C5A059" }}
                        >
                          Read More
                        </span>
                        <span
                          className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: "#C5A059" }}
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

      {/* ──────────────── FOOTER ──────────────── */}
      <footer className="bg-brand-charcoal text-brand-silver border-t border-brand-darknavy/40 pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-serif text-sm tracking-[0.2em] text-brand-platinum">
              LUARE
            </span>
            <span className="text-[10px] tracking-widest text-brand-silver/40 font-mono">
              Luare Consulting Group © 2026
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
