"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Bot, Users, Sparkles } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary/5 via-white to-section">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-edu-kids/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-edu-teens/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-edu-corporate/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
              {t("subtitle")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 gradient-text-hero"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/courses">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="gap-2">
                {t("ctaSecondary")}
              </Button>
            </Link>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Bot className="w-8 h-8" />, label: "로봇 코딩", labelEn: "Robot Coding", color: "text-edu-kids bg-edu-kids/10" },
              { icon: <GraduationCap className="w-8 h-8" />, label: "전문 교육", labelEn: "Expert Education", color: "text-edu-teens bg-edu-teens/10" },
              { icon: <Users className="w-8 h-8" />, label: "전 연령 대상", labelEn: "All Ages", color: "text-edu-adults bg-edu-adults/10" },
              { icon: <Sparkles className="w-8 h-8" />, label: "실습 중심", labelEn: "Hands-on", color: "text-edu-corporate bg-edu-corporate/10" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/80 backdrop-blur border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className={`p-3 rounded-xl ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-text-primary">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
