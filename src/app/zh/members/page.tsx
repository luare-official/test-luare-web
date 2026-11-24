import type { Metadata } from "next";
import MemberPage from "@/components/members/MemberPage";
export const metadata: Metadata = {
 title: "专家介绍 | Luare Consulting",
 description: "介绍与Luare Consulting协作的会计、审计、财务及法律专业人士的资历与主要专业领域。",
 alternates: { canonical:"https://luare-consulting.com/zh/members", languages: {ja:"/members",en:"/en/members","zh-CN":"/zh/members"} }
};
export default function MembersPageZh(){return <MemberPage lang="zh" />;}
