"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-white to-edu-teens/10 border border-primary/20 p-12 lg:p-20 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-edu-kids/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-edu-teens/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-edu-corporate/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text-hero mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                {t("description")}
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  {t("button")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
