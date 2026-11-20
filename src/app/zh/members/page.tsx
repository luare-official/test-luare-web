import type { Metadata } from "next";
import MemberPage from "@/components/members/MemberPage";
export const metadata: Metadata = {
 title: "成员介绍 | Luare Consulting",
 description: "介绍会计、审计、财务及法律领域专业人士的资质、履历和专业领域。",
 robots: { index: false, follow: false },
 alternates: { canonical:"https://luare-consulting.com/zh/members", languages: {ja:"/members",en:"/en/members","zh-CN":"/zh/members"} }
};
export default function MembersPageZh(){return <MemberPage lang="zh" />;}
