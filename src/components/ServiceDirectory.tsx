import Link from "next/link";
import { serviceCategories } from "@/lib/serviceCatalog";

// The five directory cards navigate to standalone service detail pages.
const serviceRoutes: Record<string,string> = {
  "01": "/services/internal-control/overview",
  "02": "/services/accounting-management",
  "03": "/services/finance-ops",
  "04": "/services/global-finance",
  "05": "/services/audit-assurance",
};
export default function ServiceDirectory() {
  return (
    <section className="mx-auto max-w-[1140px] px-5 pb-20 pt-10 sm:px-10 sm:pb-24 sm:pt-12" aria-label="提供サービス一覧">
      <div id="index">
        <h2 className="mb-3 text-[22px] font-bold tracking-tight text-[#0B3158]">サービスを探す</h2>
        <p className="mb-6 text-[13px] leading-7 text-[#475569]">ご相談内容に近い分野を選ぶと、サービス詳細ページをご覧いただけます。</p>
        <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="サービスカテゴリー一覧">
          {serviceCategories.map(({number,title,lead}) => (
            <Link key={number} id={`category-${number}`} href={serviceRoutes[number] || "/services"} className="group scroll-mt-28 flex min-h-[126px] flex-col rounded-lg border border-[#CBD5E1] bg-white px-5 py-5 text-[#0B3158] transition-colors hover:border-[#9CBDD4] hover:bg-[#EDF5FC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1766A0]">
              <div className="flex items-center gap-3">
                <span className="text-base font-extrabold text-[#1766A0]">{number}</span>
                <h3 className="text-[17px] font-bold leading-7">{title}</h3>
              </div>
              <p className="mt-3 flex-1 text-xs leading-6 text-[#475569]">{lead}</p>
              <span className="mt-3 text-xs font-bold text-[#1766A0]">詳細を見る ↗</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
