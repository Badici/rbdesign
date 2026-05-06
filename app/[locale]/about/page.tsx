import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpen, Sparkles, Target, Users, Zap } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return createPageMetadata(locale, "about");
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const principleIcons = [Target, Zap, Users] as const;

  return (
    <Section>
      <Reveal>
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <Sparkles className="h-4 w-4" aria-hidden />
          {dictionary.siteName}
        </p>
        <h1 className="mt-3 font-[var(--font-display)] text-4xl md:text-5xl">{dictionary.about.heading}</h1>
        <p className="mt-5 max-w-3xl text-muted">{dictionary.about.intro}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card>
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-stroke/80 bg-accent/10 text-accent">
              <BookOpen className="h-5 w-5" aria-hidden />
            </div>
            {dictionary.about.body.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-sm leading-relaxed text-muted last:mb-0">
                {paragraph}
              </p>
            ))}
          </Card>
        </Reveal>
        <div className="grid gap-6">
          {dictionary.about.principles.map((item, index) => {
            const Icon = principleIcons[index] ?? Sparkles;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-stroke/80 bg-surface-soft text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h2 className="font-[var(--font-display)] text-2xl">{item.title}</h2>
                  <p className="mt-3 text-sm text-muted">{item.text}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
