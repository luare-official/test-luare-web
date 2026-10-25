"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CaseGallery.module.css";

/**
 * Approved B班 design C (2026-10-23): card overview -> individual detail.
 * UI ONLY. Do not wire this component into a public route until approval D-04:
 * verify customer consent, confidentiality, professional facts and case outcomes.
 * The North American FP&A model must not be passed as an actual case.
 */
export type ApprovedCaseStudy = {
  id: string;
  number: string;
  category: string;
  categoryGroup: "accounting" | "control";
  title: string;
  summary: string;
  lead: string;
  background: string;
  support: string;
  relatedMaterials: string;
  issues?: readonly string[];
  actions?: readonly string[];
  outputs?: readonly string[];
  tags: string[];
  illustration: "documents" | "controls" | "flow";
};

type Props = {
  cases: readonly ApprovedCaseStudy[];
  introduction?: string;
};

const backgrounds: Record<ApprovedCaseStudy["illustration"], string> = {
  documents: "#f0eee6", controls: "#e5efeb", flow: "#eef0f2",
};

function CaseIllustration({ kind }: { kind: ApprovedCaseStudy["illustration"] }) {
  if (kind === "documents") return (
    <svg viewBox="0 0 300 220" className={styles.icon} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="56" y="33" width="134" height="155" rx="5" />
        <path d="M76 67h92M76 94h92M76 121h92M76 148h54" />
        <path d="M207 77l30 30-30 30M229 107h-45" strokeWidth="2.3" />
      </g>
      <g fill="currentColor" opacity=".20">
        <rect x="80" y="58" width="31" height="6" rx="3" />
        <rect x="80" y="85" width="51" height="6" rx="3" />
      </g>
      <circle cx="182" cy="154" r="30" fill="#d9a774" opacity=".45" />
      <path d="M167 154l11 11 22-25" fill="none" stroke="#365866" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (kind === "controls") return (
    <svg viewBox="0 0 300 220" className={styles.icon} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="32" y="59" width="94" height="92" rx="7" />
        <rect x="180" y="59" width="94" height="92" rx="7" />
        <path d="M126 104h54" strokeDasharray="5 6" />
        <path d="M148 96l8 8-8 8" />
        <path d="M49 86h58M49 104h36M49 122h47M197 86h58M197 104h38M197 122h47" />
      </g>
      <circle cx="153" cy="161" r="24" fill="#97b8ad" opacity=".56" />
      <path d="M140 161l9 10 19-22" fill="none" stroke="#365866" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <svg viewBox="0 0 300 220" className={styles.icon} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
        <rect x="31" y="36" width="77" height="119" rx="3" />
        <rect x="111" y="58" width="77" height="119" rx="3" />
        <rect x="191" y="37" width="77" height="119" rx="3" />
        <path d="M46 60h46M46 81h46M46 101h30M127 86h46M127 104h46M127 124h27M206 61h46M206 83h46M206 105h30" />
      </g>
      <path d="M69 178h162" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 6" />
      <circle cx="150" cy="177" r="15" fill="#c8a6b1" opacity=".75" />
    </svg>
  );
}

export default function CaseGallery({
  cases,
  introduction = "決算業務の改善や内部統制など、分野別に支援内容をご紹介します。",
}: Props) {
  const [filter, setFilter] = useState<"all" | "accounting" | "control">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const startRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const syncHash = () => {
      const found = window.location.hash.match(/^#\/case\/([a-z0-9-]+)$/i);
      const id = found?.[1];
      setSelectedId(id && cases.some((item) => item.id === id) ? id : null);
    };
    window.addEventListener("hashchange", syncHash);
    syncHash();
    return () => window.removeEventListener("hashchange", syncHash);
  }, [cases]);
  const selected = useMemo(
    () => cases.find((item) => item.id === selectedId) ?? null,
    [cases, selectedId]
  );
  const visibleCases = useMemo(
    () => cases.filter((item) => filter === "all" || item.categoryGroup === filter),
    [cases, filter]
  );
  const jumpToTop = () => {
    startRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
  };
  const openCase = (id: string) => {
    setSelectedId(id);
    window.location.hash = "/case/" + id;
    jumpToTop();
  };
  const showList = () => {
    setSelectedId(null);
    window.location.hash = "/list";
    jumpToTop();
  };

  return (
    <section className={styles.root} ref={startRef} aria-label="支援事例">
      {!selected ? (
        <>
          <header className={styles.hero + " " + styles.wrap}>
            <p className={styles.eyebrow}>WORKS / CASE STUDIES</p>
            <h1>支援事例</h1>
            <p>{introduction} 各事例の詳しい内容は、カードからご覧いただけます。</p>
          </header>
          <div className={styles.wrap}>
            <nav className={styles.filter} aria-label="事例を絞り込む">
              <span className={styles.filterLabel}>
                分野から探す　
                <span aria-live="polite">{visibleCases.length}件の事例</span>
              </span>
              {([
                ["all", "すべて"],
                ["accounting", "決算"],
                ["control", "内部統制"],
              ] as const).map(([value, label]) => (
                <button key={value} type="button" aria-pressed={filter === value}
                  onClick={() => setFilter(value)}>{label}</button>
              ))}
            </nav>
            {visibleCases.length ? (
              <div className={styles.cards}>
                {visibleCases.map((item) => (
                  <button key={item.id} type="button" className={styles.card}
                    onClick={() => openCase(item.id)}
                    aria-label={item.category + "：" + item.title + "の詳しい内容を見る"}>
                    <span className={styles.cover} style={{ background: backgrounds[item.illustration] }}>
                      <CaseIllustration kind={item.illustration} />
                    </span>
                    <span className={styles.cardBody}>
                      <span className={styles.caseNumber}>CASE {item.number}</span>
                      <strong className={styles.caseType}>{item.category}</strong>
                      <span className={styles.caseTitle}>{item.title}</span>
                      <span className={styles.caseText}>{item.summary}</span>
                      <span className={styles.cardNext}>
                        <span>詳しく見る</span><span className={styles.arrow} aria-hidden="true">↗</span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className={styles.empty}>
                {cases.length === 0 ? "支援事例は現在準備中です。" : "該当する事例はありません。"}
              </p>
            )}
          </div>
        </>
      ) : (
        <article className={styles.detail + " " + styles.wrap} aria-live="polite">
          <button type="button" className={styles.back} onClick={showList}>← 事例の一覧に戻る</button>
          <header className={styles.detailHero}>
            <div>
              <span className={styles.detailTag}>CASE {selected.number}　/　{selected.category}</span>
              <h1>{selected.category}</h1>
              <p className={styles.detailSubtitle}>{selected.title}</p>
              <p>{selected.lead}</p>
            </div>
            <div className={styles.detailImage} style={{ background: backgrounds[selected.illustration] }}>
              <CaseIllustration kind={selected.illustration} />
            </div>
          </header>
          <div className={styles.detailGrid}>
            <aside className={styles.detailSide}><span>分野：{selected.category}</span></aside>
            <div className={styles.detailCopy}>
              <h2>相談の背景</h2><p>{selected.background}</p>
              {selected.issues && <ul className="my-5 list-disc space-y-2 pl-5 text-sm leading-7 text-[#4f6975]">
                {selected.issues.map((x)=><li key={x}>{x}</li>)}
              </ul>}
              <h2>Luareによる支援内容</h2><p>{selected.support}</p>
              {selected.actions && <ol className="my-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-[#4f6975]">
                {selected.actions.map((x)=><li key={x}>{x}</li>)}
              </ol>}
              <h2>成果物・整理した事項の例</h2><p>{selected.relatedMaterials}</p>
              {selected.outputs && <ul className="my-5 list-disc space-y-2 pl-5 text-sm leading-7 text-[#4f6975]">
                {selected.outputs.map((x)=><li key={x}>{x}</li>)}
              </ul>}
              <p className="mt-4 text-xs leading-6 text-[#647780]">※ 掲載内容を確認中です。実際の成果物や公開範囲は、事実確認・許諾後に確定します。</p>
              <div className={styles.tagList}>
                {selected.tags.map((tag) => <em className={styles.tag} key={tag}>{tag}</em>)}
              </div>
            </div>
          </div>
          <div className={styles.detailFoot}>
            <span className={styles.hint}>事例に関するお問い合わせは、担当者へご連絡ください。</span>
            <button type="button" className={styles.next} onClick={showList}>一覧へ戻る ↗</button>
          </div>
        </article>
      )}
    </section>
  );
}
