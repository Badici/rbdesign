import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return createPageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <Section>
      <Reveal>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">{dictionary.contact.heading}</h1>
        <p className="mt-5 max-w-2xl text-muted">{dictionary.contact.intro}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">{dictionary.contact.emailLabel}</dt>
                <dd className="mt-1 text-lg font-medium text-foreground">
                  <a href={`mailto:${dictionary.contact.emailValue}`} className="hover:text-accent">
                    {dictionary.contact.emailValue}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">{dictionary.contact.phoneLabel}</dt>
                <dd className="mt-1 text-lg font-medium text-foreground">
                  <a href={`tel:${dictionary.contact.phoneValue}`} className="hover:text-accent">
                    {dictionary.contact.phoneValue}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">{dictionary.contact.locationLabel}</dt>
                <dd className="mt-1 text-lg font-medium text-foreground">{dictionary.contact.locationValue}</dd>
              </div>
            </dl>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="flex h-full flex-col justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-3xl">{dictionary.common.getProposal}</h2>
              <p className="mt-4 text-sm text-muted">{dictionary.contact.response}</p>
            </div>
            <ButtonLink href={`mailto:${dictionary.contact.emailValue}`} className="mt-8 w-fit">
              {dictionary.common.startProject}
            </ButtonLink>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
