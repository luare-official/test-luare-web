import Link from "next/link";
import { serviceCategories } from "@/lib/serviceCatalog";

const indexTitles: Record<string, string> = {
  "01": "内部統制・J-SOX",
  "02": "会計・決算・経営管理",
  "03": "業務改善・AI",
  "04": "日本進出・海外拠点",
  "05": "監査・保証業務",
};

const serviceRoutes: Record<string,string> = {
  "01": "/services/internal-control",
  "02": "/services/accounting-management",
  "03": "/services/finance-ops",
  "04": "/services/global-finance",
  "05": "/services/audit-assurance",
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
            <Link
              key={number}
              href={serviceRoutes[number] || "/services"}
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
            </Link>
          ))}
        </nav>
        <p className="mt-4 text-xs text-[#475569]">
          5つのサービス領域からお選びいただけます。
        </p>
      </div>

    </section>
  );
}
