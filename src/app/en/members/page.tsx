import type { Metadata } from "next";
import MemberPage from "@/components/members/MemberPage";
export const metadata: Metadata = {
 title: "Our Experts | Luare Consulting",
 description: "Meet professionals collaborating with Luare Consulting in accounting, audit, finance and law.",
 alternates: { canonical:"https://luare-consulting.com/en/members", languages: {ja:"/members",en:"/en/members","zh-CN":"/zh/members"} }
};
export default function MembersPageEn(){return <MemberPage lang="en" />;}
