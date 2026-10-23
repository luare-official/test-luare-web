import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApprovedServiceDetailLayout from "@/components/ApprovedServiceDetailLayout";
import {servicePages,type ServicePageKey} from "@/lib/serviceCatalog";

const pageId = "finance-ops" satisfies ServicePageKey;
const page = servicePages[pageId];
export const metadata:Metadata={
  title: `${page.title} | Luare Consulting`,
  description: page.intro,
  alternates:{canonical:`https://luare-consulting.com/services/${pageId}`}
};
export default function Page(){
  return <>
    <Navbar/>
    <ApprovedServiceDetailLayout page={pageId}/>
    <Footer/>
  </>;
}
