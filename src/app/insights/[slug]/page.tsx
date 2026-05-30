import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

// Next.js App Router dynamic params generation
export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata dynamically based on the post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found | Luare Consulting" };
  }

  return {
    title: `${post.title} | Insights | Luare Consulting`,
    description: post.excerpt,
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

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
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center border border-brand-platinum text-brand-platinum hover:bg-brand-platinum hover:text-brand-navy px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-brand-white pt-20">
        <article className="mx-auto max-w-3xl px-6 sm:px-10 py-20 sm:py-28">
          
          {/* ══════════ ARTICLE HEADER ══════════ */}
          <header className="mb-14 text-center">
            {/* Category tag & Date */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 border rounded-sm"
                style={{
                  color: "#C5A059",
                  borderColor: "rgba(197, 160, 89, 0.35)",
                  backgroundColor: "rgba(197, 160, 89, 0.06)",
                }}
              >
                {post.category}
              </span>
              <span className="text-xs text-brand-slate/50 font-medium tracking-wider">
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-brand-navy leading-snug tracking-wide">
              {post.title}
            </h1>
          </header>

          {/* ══════════ ARTICLE CONTENT (Markdown) ══════════ */}
          <div
            className="insight-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* ══════════ E-E-A-T AUTHOR BLOCK ══════════ */}
          <div className="mt-20 p-8 sm:p-10 bg-slate-50 border border-slate-100 rounded-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              {/* Photo Placeholder / Portrait */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative rounded-full overflow-hidden border-2 shadow-sm" style={{ borderColor: 'rgba(197, 160, 89, 0.5)' }}>
                <Image
                  src="/images/Photo.png"
                  alt="陸 沿青"
                  fill
                  className="object-cover grayscale contrast-125"
                />
              </div>
              
              {/* Author Info */}
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-slate/50 block mb-2">
                  Article Supervisor
                </span>
                <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                  監修：陸 沿青 (USCPA) / Luare Consulting 代表取締役 Managing Partner。Big4監査法人や投資銀行を経て独立。グローバル企業の内部統制・財務基盤構築を多数支援。
                </p>
                <div className="mt-4">
                  <Link href="/about" className="text-xs font-bold tracking-widest uppercase transition-colors" style={{ color: '#C5A059' }}>
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════ CTA BLOCK ══════════ */}
          <div className="mt-16 text-center border-t border-slate-100 pt-16">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-navy tracking-wide mb-8">
              海外子会社の管理・内部統制でお悩みですか？
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#services"
                className="w-full sm:w-auto inline-flex items-center justify-center border px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 bg-transparent hover:bg-slate-50"
                style={{
                  borderColor: "#C5A059",
                  color: "#C5A059",
                }}
              >
                関連サービスを見る
              </Link>
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center border px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 border-brand-navy bg-brand-navy text-white hover:bg-brand-navy/90"
              >
                無料相談を予約する
              </Link>
            </div>
          </div>

        </article>
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
