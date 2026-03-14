import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { courses, getCourseBySlug } from "@/data/courses";
import { CourseDetail } from "@/components/courses/CourseDetail";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const isKo = locale === "ko";
  return {
    title: course.name[isKo ? "ko" : "en"],
    description: course.description[isKo ? "ko" : "en"],
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return <CourseDetail course={course} />;
}
