import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BadgeEuro, Bot, LayoutTemplate, Package, Palette } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type PricingPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PricingPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  return createPageMetadata(locale, "pricing");
}

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const planIcons = [LayoutTemplate, Palette, Bot, Package] as const;

  return (
    <Section>
      <Reveal>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">
          {dictionary.pricing.heading}
        </h1>
        <p className="mt-5 max-w-3xl text-muted">{dictionary.pricing.intro}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {dictionary.pricing.plans.map((plan, index) => {
          const Icon = planIcons[index] ?? BadgeEuro;
          return (
          <Reveal key={plan.service} delay={index * 0.08}>
            <Card className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stroke/80 bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-xs uppercase tracking-[0.14em] text-accent">{plan.from}</p>
              </div>
              <h2 className="mt-1 font-[var(--font-display)] text-2xl">{plan.service}</h2>
              <p className="mt-3 text-sm text-muted">{plan.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/90">
                {plan.includes.map((entry) => (
                  <li key={entry} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          );
        })}
      </div>
      <Reveal>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-stroke/70 bg-surface/50 p-6">
          <div className="flex items-start gap-3">
            <BadgeEuro className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm text-muted">{dictionary.pricing.disclaimer}</p>
          </div>
          <ButtonLink href={`/${locale}/contact`}>{dictionary.common.getProposal}</ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
