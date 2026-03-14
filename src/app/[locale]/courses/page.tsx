"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { courses } from "@/data/courses";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CourseFilter } from "@/components/courses/CourseFilter";
import { CourseGrid } from "@/components/courses/CourseGrid";

export default function CoursesPage() {
  const t = useTranslations("courses");
  const [ageGroup, setAgeGroup] = useState("all");
  const [level, setLevel] = useState("all");

  const filtered = courses.filter((course) => {
    if (ageGroup !== "all" && course.ageGroup !== ageGroup) return false;
    if (level !== "all" && course.level !== level) return false;
    return true;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <ScrollReveal>
          <CourseFilter
            activeAgeGroup={ageGroup}
            activeLevel={level}
            onAgeGroupChange={setAgeGroup}
            onLevelChange={setLevel}
          />
        </ScrollReveal>

        <CourseGrid courses={filtered} />
      </div>
    </div>
  );
}
