import type { Metadata } from "next";
import MemberPage from "@/components/members/MemberPage";
export const metadata: Metadata = {
 title: "メンバー紹介 | Luare Consulting",
 description: "公認会計士、税理士、米国公認会計士、弁護士のプロフィール、経歴、専門分野。",
 robots: { index: false, follow: false },
 alternates: { canonical:"https://luare-consulting.com/members", languages: {ja:"/members",en:"/en/members","zh-CN":"/zh/members"} }
};
export default function MembersPage(){return <MemberPage lang="ja" />;}
