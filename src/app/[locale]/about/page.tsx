import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { VisionSection } from "@/components/about/VisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CertificationBadges } from "@/components/about/CertificationBadges";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "소개" : "About",
    description: isKo
      ? "PBI 로봇 교육센터 - 교육 비전, 핵심 가치, 인증 정보를 확인하세요."
      : "PBI Robot Education Center - Discover our vision, values, and certifications.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <VisionSection />
      <ValuesSection />
      <CertificationBadges />
    </div>
  );
}
