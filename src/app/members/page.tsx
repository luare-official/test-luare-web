import type { Metadata } from "next";
import MemberPage from "@/components/members/MemberPage";
export const metadata: Metadata = {
 title: "専門家紹介 | Luare Consulting",
 description: "Luare Consultingと協業する公認会計士・税理士・米国公認会計士・弁護士の主な専門領域と経歴をご紹介します。",
 alternates: { canonical:"https://luare-consulting.com/members", languages: {ja:"/members",en:"/en/members","zh-CN":"/zh/members"} }
};
export default function MembersPage(){return <MemberPage lang="ja" />;}
