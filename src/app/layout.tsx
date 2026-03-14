import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PBI 로봇 교육센터 - 로봇 교육의 미래",
  description:
    "키즈부터 성인, 기업까지 — 체계적인 커리큘럼과 실습 중심의 로봇 교육. PBI 로봇 교육센터",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
