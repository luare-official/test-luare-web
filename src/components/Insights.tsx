import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ScrollReveal from "./ScrollReveal";

export default function Insights() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section id="latest-insights" className="luare-insights">
      <div className="luare-container">
        <div className="luare-insights-heading">
          <ScrollReveal>
            <p className="luare-eyebrow">insights</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="luare-h2">
              Financeの現場から、
              <br />
              実務に使える知見を。
            </h2>
            <p className="luare-intro">
              クロスボーダー会計・Finance Operations・経理体制づくりに関する知見を発信しています。
            </p>
          </ScrollReveal>
        </div>

        {latestPosts.length === 0 ? (
          <p className="text-sm text-slate-500">記事は現在準備中です。</p>
        ) : (
          <div className="luare-insight-list">
            {latestPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 55}>
                <Link href={`/insights/${post.slug}`} className="luare-insight-row">
                  <span className="luare-insight-meta">{post.date}</span>
                  <span className="luare-insight-title">{post.title}</span>
                  <span className="luare-insight-category">{post.category}</span>
                  <span className="luare-insight-arrow">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        <div className="luare-insights-all">
          <Link href="/insights" className="luare-text-link">
            すべての記事を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
