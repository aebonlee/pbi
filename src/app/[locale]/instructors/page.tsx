import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { InstructorsContent } from "./InstructorsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "강사진" : "Instructors",
    description: isKo
      ? "PBI 로봇 교육센터의 전문 강사진을 소개합니다."
      : "Meet the expert instructors at PBI Robot Education Center.",
  };
}

export default async function InstructorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <InstructorsContent />;
}
