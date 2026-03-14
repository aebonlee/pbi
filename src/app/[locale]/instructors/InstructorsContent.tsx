"use client";

import { useTranslations } from "next-intl";
import { instructors } from "@/data/instructors";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { InstructorGrid } from "@/components/instructors/InstructorGrid";

export function InstructorsContent() {
  const t = useTranslations("instructors");

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <InstructorGrid instructors={instructors} />
      </div>
    </div>
  );
}
