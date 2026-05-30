import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Insights() {
  // Fetch latest 3 posts dynamically
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section id="latest-insights" className="py-24 sm:py-32 bg-brand-white border-b border-brand-silver/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* ── Title Section ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-slate/60 mb-4">
            Publications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-charcoal">
            Latest Insights
          </h2>
          <p className="mt-4 text-sm text-brand-slate/70 tracking-wider">
            クロスボーダー会計・ガバナンスに関する最新の知見
          </p>
          <div
            className="mx-auto mt-6 w-12 h-[1.5px]"
            style={{ backgroundColor: "#C5A059" }}
          />
        </div>

        {/* ── Article Cards Grid ── */}
        {latestPosts.length === 0 ? (
          <p className="text-center text-brand-slate/60 text-sm tracking-wide">
            記事は現在準備中です。
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {latestPosts.map((post) => (
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
                  <h3 className="font-serif text-base sm:text-lg font-bold text-brand-charcoal leading-snug tracking-wide mb-4 group-hover:text-brand-navy transition-colors duration-200">
                    {post.title}
                  </h3>

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

        {/* ── View All Button ── */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center border px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 border-brand-navy bg-brand-navy text-white hover:bg-brand-navy/90 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            すべての記事を見る (View All Insights)
          </Link>
        </div>

      </div>
    </section>
  );
}
