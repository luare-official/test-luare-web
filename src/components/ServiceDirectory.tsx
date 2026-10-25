import Link from "next/link";
import { serviceCategories, serviceItems } from "@/lib/serviceCatalog";

const indexTitles: Record<string, string> = {
  "01": "内部統制・J-SOX",
  "02": "会計・決算・経営管理",
  "03": "業務改善・AI",
  "04": "日本進出・海外拠点",
  "05": "監査・保証業務",
};

export default function ServiceDirectory() {
  return (
    <section
      className="mx-auto max-w-[1140px] px-5 pb-20 pt-10 sm:px-10 sm:pb-24 sm:pt-12"
      aria-label="提供サービス一覧"
    >
      <div id="index" className="scroll-mt-28">
        <div className="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <h2 className="text-[22px] font-bold tracking-tight text-[#0B3158]">
            サービスを探す
          </h2>
          <p className="text-xs leading-6 text-[#475569]">
            ご相談に近い分野を選ぶと、該当する支援内容へ移動します。
          </p>
        </div>

        <nav
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="サービスカテゴリー目次"
        >
          {serviceCategories.map(({ number }) => (
            <a
              key={number}
              href={`#category-${number}`}
              className="group flex min-h-[58px] items-center gap-3 rounded-lg border border-[#CBD5E1] bg-white px-4 py-3.5 text-[#0B3158] transition-colors hover:border-[#9CBDD4] hover:bg-[#EDF5FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1766A0]"
            >
              <span className="shrink-0 text-[13px] font-extrabold tracking-wider text-[#1766A0]">
                {number}
              </span>
              <span className="min-w-0 flex-1 text-[13px] font-bold leading-6">
                {indexTitles[number]}
              </span>
              <span aria-hidden="true" className="shrink-0 text-[#1766A0]">
                ↗
              </span>
            </a>
          ))}
        </nav>
        <p className="mt-4 text-xs text-[#475569]">
          5つのサービス領域 ／ 全25項目からお探しいただけます。
        </p>
      </div>

      <div className="mt-9 space-y-9 sm:mt-14 sm:space-y-12">
        {serviceCategories.map((group) => (
          <section
            key={group.number}
            id={`category-${group.number}`}
            aria-labelledby={`category-title-${group.number}`}
            className="scroll-mt-28 border-t border-[#CBD5E1] pt-6 sm:pt-8"
          >
            <div className="mb-5 flex flex-wrap items-start gap-x-5 gap-y-3 sm:mb-6">
              <span
                aria-hidden="true"
                className="min-w-10 text-[28px] font-semibold leading-tight tracking-tight text-[#1766A0] sm:min-w-12 sm:text-[33px]"
              >
                {group.number}
              </span>
              <div className="min-w-0 flex-1">
                <h2
                  id={`category-title-${group.number}`}
                  className="text-xl font-bold leading-snug tracking-tight text-[#0B3158] sm:text-2xl"
                >
                  {group.title}
                </h2>
                <p className="mt-2 text-xs leading-7 text-[#475569] sm:text-[13px]">
                  {group.lead}
                </p>
              </div>
              <a
                href="#index"
                className="ml-10 text-[11px] font-bold whitespace-nowrap text-[#1766A0] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1766A0] sm:ml-0 sm:pt-2"
                aria-label={`${group.title}からサービス目次へ戻る`}
              >
                目次へ ↑
              </a>
            </div>

            <div className="border-t border-[#E2E8F0]">
              {group.itemIds.map((id, itemIndex) => {
                const item = serviceItems.find((entry) => entry.id === id);
                if (!item) return null;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name}の詳細ページを新しいタブで開く`}
                    className="group grid grid-cols-[18px_minmax(0,1fr)_17px] items-center gap-3 border-b border-[#E2E8F0] px-1 py-4 text-[#0B3158] transition-colors hover:bg-[#EDF5FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1766A0] sm:grid-cols-[30px_minmax(0,1fr)_23px] sm:gap-5 sm:px-2 sm:py-[18px]"
                  >
                    <span className="self-start pt-1 text-[10px] font-bold text-[#8096A7] sm:text-[11px]">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="flex min-w-0 flex-col gap-1.5">
                      <strong className="text-[13px] font-bold leading-6 sm:text-[15px]">
                        {item.name}
                      </strong>
                      <span className="text-[11px] leading-5 text-[#475569] sm:text-xs sm:leading-6">
                        {item.description}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-base text-[#1766A0] sm:text-xl">
                      ↗
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
