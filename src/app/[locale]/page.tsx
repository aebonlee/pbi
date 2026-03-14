import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { CourseShowcase } from "@/components/home/CourseShowcase";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CTASection } from "@/components/home/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <CourseShowcase />
      <WhyUsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
