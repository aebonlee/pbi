"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { learningContents } from "@/data/learning";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { LearningGrid } from "@/components/learning/LearningGrid";
import { cn } from "@/lib/utils";

const categories = ["all", "video", "document", "interactive"] as const;

export default function LearningPage() {
  const t = useTranslations("learning");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? learningContents
    : learningContents.filter((c) => c.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover border border-border"
                )}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <LearningGrid contents={filtered} />
      </div>
    </div>
  );
}
