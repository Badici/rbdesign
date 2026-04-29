import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return createPageMetadata(locale, "services");
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <Section>
        <Reveal>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">
            {dictionary.services.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-muted">{dictionary.services.intro}</p>
          <p className="mt-3 max-w-2xl text-sm text-muted">{dictionary.services.photosNote}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.services.list.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <Card className="h-full">
                <h2 className="font-[var(--font-display)] text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/90">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60">
        <Reveal>
          <div className="glass-panel rounded-3xl border border-stroke/60 p-8 md:p-12">
            <h2 className="font-[var(--font-display)] text-3xl">
              {dictionary.services.workflowTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-muted">{dictionary.services.workflowText}</p>
            <ButtonLink href={`/${locale}/contact`} className="mt-8">
              {dictionary.common.getProposal}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
