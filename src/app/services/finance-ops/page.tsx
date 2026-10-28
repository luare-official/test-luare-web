import type {Metadata} from "next";
import R5ServiceDetail from "@/components/services/R5ServiceDetail";
export const metadata:Metadata={
 title:"業務改善・AI・システム支援 | Luare Consulting",
 description:"現場の工程を見極め、仕組みとテクノロジーの両面から改善。",
 alternates:{canonical:"https://luare-consulting.com/services/finance-ops"}
};
export default function Page(){return <R5ServiceDetail kind="transform"/>;}
