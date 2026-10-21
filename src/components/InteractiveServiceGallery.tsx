"use client";

import { useState } from "react";

type Service = { no: string; title: string; items: string[] };
type Detail = { kicker: string; lead: string; points: string[]; photo: string; position: string };

// Approved Pattern A: text is a review draft; photographs are the same ones referenced by the current homepage.
const details: Record<string, Detail> = {
  "01": {
    kicker: "AUDIT SUPPORT",
    lead: "日本法人と海外本社、監査人のあいだに立ち、必要な準備とやりとりを丁寧に進めます。",
    points: ["監査準備・Audit Readiness", "Group Audit・海外監査人対応", "内部統制・J-SOX構築支援"],
    photo: "https://unsplash.com/photos/0oZpRxG5Hkk/download?force=true", position: "58% 45%",
  },
  "02": {
    kicker: "ACCOUNTING",
    lead: "毎月の経理から決算・経営管理まで。日々の実務を整え、意思決定につながる数字を届けます。",
    points: ["月次・年次・連結決算", "業務可視化・決算早期化", "会計・税務の専門家連携"],
    photo: "https://unsplash.com/photos/gMsnXqILjp4/download?force=true", position: "50% 28%",
  },
  "03": {
    kicker: "FINANCE ADVISORY",
    lead: "事業のこれからを考える場面で、数字の裏側まで読み解く財務アドバイザリーを提供します。",
    points: ["財務デューデリジェンス", "企業価値評価・Valuation", "PMI・統合後の管理体制整備"],
    photo: "https://unsplash.com/photos/KdeqA3aTnBY/download?force=true", position: "center",
  },
  "04": {
    kicker: "GLOBAL REPORTING",
    lead: "日本の現場と海外本社。異なる会計ルールや報告要件を整理し、伝わる財務情報に整えます。",
    points: ["海外本社向けレポーティング", "連結パッケージ・英文資料", "海外拠点のFinance Setup"],
    photo: "https://unsplash.com/photos/YI_9SivVt_s/download?force=true", position: "center",
  },
  "05": {
    kicker: "FINANCE OPERATIONS",
    lead: "担当者ひとりに依存しない体制へ。継続的な経理運営を、現場に合った仕組みで支えます。",
    points: ["日常経理・月次決算運営", "海外HQ Reporting・Intercompany", "業務標準化・AI活用"],
    photo: "/images/luare-hero-consulting.avif", position: "center 44%",
  },
};

export default function InteractiveServiceGallery({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="luare-dialogue-gallery" role="group" aria-label="専門サービスを選ぶ">
        {services.map((service, index) => {
          const item = details[service.no];
          const selected = active === index;
          if (!item) return null;
          return (
            <button
              type="button"
              key={service.no}
              className={"luare-dialogue-card" + (selected ? " is-active" : "")}
              aria-pressed={selected}
              aria-label={service.title + "の支援内容を表示"}
              onPointerEnter={(event) => { if (event.pointerType === "mouse") setActive(index); }}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 :
                  event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
                if (!delta) return;
                event.preventDefault();
                const next = (index + delta + services.length) % services.length;
                const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(".luare-dialogue-card");
                buttons?.[next]?.focus();
              }}
              style={{backgroundImage: `url("${item.photo}")`, backgroundPosition: item.position}}
            >
              <span className="luare-dialogue-photo-fade" aria-hidden="true" />
              <span className="luare-dialogue-closed" aria-hidden="true">
                <span className="luare-dialogue-collapsed-number">{service.no}</span>
                <span className="luare-dialogue-vertical-title">{service.title}</span>
                <span className="luare-dialogue-expand-mark">＋</span>
              </span>
              <span className="luare-dialogue-open" aria-hidden={!selected}>
                <span className="luare-dialogue-open-inner">
                  <span className="luare-dialogue-kicker"><b>{service.no}</b><small>{item.kicker}</small></span>
                  <span className="luare-dialogue-title">{service.title}</span>
                  <span className="luare-dialogue-lead">{item.lead}</span>
                  <span className="luare-dialogue-label">主な支援内容</span>
                  <span className="luare-dialogue-points">
                    {item.points.map((point) => <span key={point}>{point}</span>)}
                  </span>
                </span>
              </span>
              <span className="luare-dialogue-corner-icon" aria-hidden="true">{selected ? "—" : "＋"}</span>
            </button>
          );
        })}
      </div>
      <p className="luare-dialogue-hint">
        PC：サービスにカーソルを合わせると、その場で詳細に切り替わります。スマートフォン：タップしてご覧ください。
      </p>
    </>
  );
}
