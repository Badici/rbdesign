import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

  return (
    <Section>
      <Reveal>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">{dictionary.about.heading}</h1>
        <p className="mt-5 max-w-3xl text-muted">{dictionary.about.intro}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card>
            {dictionary.about.body.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-sm leading-relaxed text-muted last:mb-0">
                {paragraph}
              </p>
            ))}
          </Card>
        </Reveal>
        <div className="grid gap-6">
          {dictionary.about.principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card>
                <h2 className="font-[var(--font-display)] text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm text-muted">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
