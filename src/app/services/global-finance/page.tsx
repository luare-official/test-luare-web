import type {Metadata} from "next";
import R5ServiceDetail from "@/components/services/R5ServiceDetail";
export const metadata:Metadata={
 title:"日本進出・海外拠点支援 | Luare Consulting",
 description:"日本と海外、現地実務と本社経営管理の接点を整備。",
 alternates:{canonical:"https://luare-consulting.com/services/global-finance"}
};
export default function Page(){return <R5ServiceDetail kind="global"/>;}
