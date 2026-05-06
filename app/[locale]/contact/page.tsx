import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

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
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <MessageCircle className="h-4 w-4" aria-hidden />
          {dictionary.nav.contact}
        </p>
        <h1 className="mt-3 font-[var(--font-display)] text-4xl md:text-5xl">{dictionary.contact.heading}</h1>
        <p className="mt-5 max-w-2xl text-muted">{dictionary.contact.intro}</p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card>
            <dl className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stroke/80 bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">{dictionary.contact.emailLabel}</dt>
                <dd className="mt-1 text-lg font-medium text-foreground">
                  <a href={`mailto:${dictionary.contact.emailValue}`} className="hover:text-accent">
                    {dictionary.contact.emailValue}
                  </a>
                </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stroke/80 bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" aria-hidden />
                </div>
                <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">{dictionary.contact.phoneLabel}</dt>
                <dd className="mt-1 text-lg font-medium text-foreground">
                  <a href={`tel:${dictionary.contact.phoneValue}`} className="hover:text-accent">
                    {dictionary.contact.phoneValue}
                  </a>
                </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stroke/80 bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">{dictionary.contact.locationLabel}</dt>
                <dd className="mt-1 text-lg font-medium text-foreground">{dictionary.contact.locationValue}</dd>
                </div>
              </div>
            </dl>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="flex h-full flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-stroke/80 bg-accent/10 text-accent">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </div>
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
