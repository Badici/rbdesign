import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return createPageMetadata(locale, "legal");
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <Section>
      <Reveal>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">
          {dictionary.legal.heading}
        </h1>
        <p className="mt-5 max-w-3xl text-muted">{dictionary.legal.intro}</p>
      </Reveal>
      <Reveal>
        <Card className="mt-10">
          <dl className="grid gap-6 md:grid-cols-2">
            {dictionary.legal.items.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="mt-1 text-base font-medium text-foreground">
                  {item.isLink && item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-accent">
                      {item.value}
                    </Link>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </Reveal>
    </Section>
  );
}
