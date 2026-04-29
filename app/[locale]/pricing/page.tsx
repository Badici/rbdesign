import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

  return (
    <Section>
      <Reveal>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">
          {dictionary.pricing.heading}
        </h1>
        <p className="mt-5 max-w-3xl text-muted">{dictionary.pricing.intro}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {dictionary.pricing.plans.map((plan, index) => (
          <Reveal key={plan.service} delay={index * 0.08}>
            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.14em] text-accent">{plan.from}</p>
              <h2 className="mt-2 font-[var(--font-display)] text-2xl">{plan.service}</h2>
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
        ))}
      </div>
      <Reveal>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-stroke/70 bg-surface/50 p-6">
          <p className="text-sm text-muted">{dictionary.pricing.disclaimer}</p>
          <ButtonLink href={`/${locale}/contact`}>{dictionary.common.getProposal}</ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
