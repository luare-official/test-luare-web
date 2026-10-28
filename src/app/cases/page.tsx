import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { r5Cases } from "@/lib/r5Cases";
import styles from "@/components/cases/R5CaseLayout.module.css";
import LegacyCaseHashRedirect from "@/components/cases/LegacyCaseHashRedirect";

export const metadata: Metadata = {
  title: "支援事例 | Luare Consulting",
  description: "企業の課題、Luareの支援、得られる成果物。プロジェクトの要点を図と短い文章でご紹介します。",
  alternates: { canonical: "https://luare-consulting.com/cases" },
};

// The husband's Luare_HP_Public_Preview_r5.html is the source of the
// page copy, layout order, r5 cards and the FP&A model section.
// The common production Navbar/Footer remain outside the original r5 page body.
function CaseCard({ c }: { c: (typeof r5Cases)[number] }) {
  return (
    <Link href={"/cases/" + c.id} className={styles.card}>
      <span className={styles.index}>CASE {c.index}</span>
      <p className={styles.industry}>{c.industry}</p>
      <h3>{c.title}</h3>
      <p className={styles.impact}>{c.impact}</p>
      <span className={styles.arrowlink}>支援内容を見る　→</span>
    </Link>
  );
}

export default function CasesPage() {
  return (
    <>
      <Navbar theme="dark" solid />
      <LegacyCaseHashRedirect />
      <main className={styles.page + " flex-1 pt-20"}>
        <div className={styles.hero}>
          <div className={styles.shell}>
            <nav className={styles.breadcrumb} aria-label="パンくずリスト">
              <Link href="/">ホーム</Link><span>／</span><span>支援事例</span>
            </nav>
            <div className={styles.eyebrow}>CASE STUDIES</div>
            <h1>支援事例</h1>
            <p>企業の課題、Luareの支援、得られる成果物。プロジェクトの要点を図と短い文章でご紹介します。</p>
          </div>
        </div>
        <section className={styles.section} id="case-list">
          <div className={styles.shell}>
            <header className={styles.sectionTop}>
              <div><div className={styles.eyebrow}>PROJECTS</div><h2>プロジェクト紹介</h2></div>
            </header>
            <div className={styles.grid3}>
              {r5Cases.filter(c => !("model" in c && c.model)).map(c => <CaseCard key={c.id} c={c} />)}
            </div>
          </div>
        </section>
        <section className={styles.section + " " + styles.alt} id="case-model">
          <div className={styles.shell} id="fpa-model">
            <header className={styles.sectionTop}>
              <div><div className={styles.eyebrow}>SERVICE MODEL</div><h2>支援モデル</h2></div>
            </header>
            <div className={styles.grid2}>
              {r5Cases.filter(c => "model" in c && c.model).map(c => <CaseCard key={c.id} c={c} />)}
            </div>
          </div>
        </section>
        <section className={styles.closing}>
          <h2>課題に合わせた支援の形を、ご一緒に。</h2>
          <p>現状の課題、対象範囲、必要な期間を伺い、適切な進め方をご提案します。</p>
          <Link className={styles.closingLink} href="/contact">ご相談はこちら</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
