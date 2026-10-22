import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceTopicSections from "@/components/ServiceTopicSections";
import {servicePages,type ServicePageKey} from "@/lib/serviceCatalog";

const pageId = "finance-ops" as ServicePageKey;
const page = servicePages[pageId];
export const metadata:Metadata={
  title: `${page.title} | Luare Consulting`,
  description: page.intro,
  alternates:{canonical:`https://luare-consulting.com/services/${pageId}`}
};
export default function Page(){
  return <>
    <Navbar/>
    <main><ServiceTopicSections page={pageId}/></main>
    <Footer/>
  </>;
}
