import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";

  const siteUrl = "https://pbi.dreamitbiz.com";
  const title = isKo
    ? "PBI 로봇 교육센터 - 로봇 교육의 미래"
    : "PBI Robot Education Center - The Future of Robot Education";
  const description = isKo
    ? "키즈부터 성인, 기업까지 — 체계적인 커리큘럼과 실습 중심의 로봇 교육. PBI 로봇 교육센터"
    : "From kids to adults and corporations — systematic curriculum and hands-on robot education. PBI Robot Education Center";
  const ogImage = `${siteUrl}/images/og/default.png`;

  return {
    title: {
      default: title,
      template: isKo ? "%s | PBI 로봇 교육센터" : "%s | PBI Robot Education",
    },
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: "website",
      url: siteUrl,
      title,
      description,
      siteName: isKo ? "PBI 로봇 교육센터" : "PBI Robot Education Center",
      locale: isKo ? "ko_KR" : "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isKo ? "PBI 로봇 교육센터" : "PBI Robot Education Center",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-page text-text-secondary font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
