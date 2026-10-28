import type {Metadata} from "next";
import R5ServiceDetail from "@/components/services/R5ServiceDetail";
export const metadata:Metadata={
 title:"会計・決算・経営管理支援 | Luare Consulting",
 description:"数字を作る実務から、意思決定に使える経営情報の整備まで。",
 alternates:{canonical:"https://luare-consulting.com/services/accounting-management"}
};
export default function Page(){return <R5ServiceDetail kind="finance"/>;}
