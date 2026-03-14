import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { FAQContent } from "@/components/faq/FAQContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo ? "자주 묻는 질문" : "FAQ",
    description: isKo
      ? "PBI 로봇 교육센터의 교육 과정, 체험 프로그램, 결제에 대한 자주 묻는 질문과 답변입니다."
      : "Frequently asked questions about PBI Robot Education Center courses, programs, and payments.",
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <FAQContent />
    </div>
  );
}
