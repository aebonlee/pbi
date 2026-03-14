import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { learningContents, getLearningBySlug } from "@/data/learning";
import { LearningDetail } from "@/components/learning/LearningDetail";

export function generateStaticParams() {
  return learningContents.map((content) => ({ slug: content.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = getLearningBySlug(slug);
  if (!content) return {};

  const isKo = locale === "ko";
  return {
    title: content.title[isKo ? "ko" : "en"],
    description: content.description[isKo ? "ko" : "en"],
  };
}

export default async function LearningDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = getLearningBySlug(slug);
  if (!content) notFound();

  return <LearningDetail content={content} />;
}
