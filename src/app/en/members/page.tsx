import type { Metadata } from "next";
import MemberPage from "@/components/members/MemberPage";
export const metadata: Metadata = {
 title: "Our People | Luare Consulting",
 description: "Meet our accounting, audit, finance and legal professionals.",
 robots: { index: false, follow: false },
 alternates: { canonical:"https://luare-consulting.com/en/members", languages: {ja:"/members",en:"/en/members","zh-CN":"/zh/members"} }
};
export default function MembersPageEn(){return <MemberPage lang="en" />;}
