"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { programs } from "@/data/programs";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProgramGrid } from "@/components/programs/ProgramGrid";
import { cn } from "@/lib/utils";

const types = ["all", "camp", "workshop", "field-trip", "competition"] as const;

export default function ProgramsPage() {
  const t = useTranslations("programs");
  const [activeType, setActiveType] = useState<string>("all");

  const filtered = activeType === "all"
    ? programs
    : programs.filter((p) => p.type === activeType);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  activeType === type
                    ? "bg-primary text-white"
                    : "bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover border border-border"
                )}
              >
                {t(`types.${type}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ProgramGrid programs={filtered} />
      </div>
    </div>
  );
}
