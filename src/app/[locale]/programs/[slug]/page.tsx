import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { programs, getProgramBySlug } from "@/data/programs";
import { ProgramDetail } from "@/components/programs/ProgramDetail";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};

  const isKo = locale === "ko";
  return {
    title: program.name[isKo ? "ko" : "en"],
    description: program.description[isKo ? "ko" : "en"],
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return <ProgramDetail program={program} />;
}
