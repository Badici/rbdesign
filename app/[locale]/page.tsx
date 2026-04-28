import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { HeroVisual } from "@/components/three/hero-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { createPageMetadata, organizationSchema } from "@/lib/seo";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  return createPageMetadata(locale, "home");
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <Section className="relative overflow-hidden pb-10 pt-12 md:pt-20">
        <div
          className="absolute inset-0 -z-10 opacity-80"
          style={{
            backgroundImage:
              "url('/illustrations/hero-grid.svg'), radial-gradient(circle at 20% 20%, rgba(139,92,246,0.22), transparent 45%), radial-gradient(circle at 82% 10%, rgba(127,86,217,0.2), transparent 42%)",
            backgroundSize: "cover, auto, auto",
          }}
        />
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
              {dictionary.home.eyebrow}
            </p>
            <h1 className="font-[var(--font-display)] text-4xl leading-tight md:text-5xl lg:text-6xl">
              {dictionary.home.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {dictionary.home.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/${locale}/contact`}>{dictionary.common.startProject}</ButtonLink>
              <ButtonLink href={`/${locale}/portfolio`} variant="ghost">
                {dictionary.common.viewWork}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <HeroVisual />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {dictionary.home.stats.map((item, index) => (
            <Reveal key={item.label} delay={0.08 * index}>
              <Card className="p-5">
                <p className="font-[var(--font-display)] text-3xl text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60">
        <div className="grid gap-6 md:grid-cols-3">
          {dictionary.home.valueProps.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <Card>
                <h2 className="font-[var(--font-display)] text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {dictionary.home.process.map((item, index) => (
            <Reveal key={item.step} delay={0.08 * index}>
              <Card>
                <p className="text-sm font-semibold text-accent">{item.step}</p>
                <h2 className="mt-3 font-[var(--font-display)] text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60">
        <Reveal>
          <Card className="mx-auto max-w-4xl p-8 md:p-10">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              &ldquo;{dictionary.home.testimonial.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold text-accent">{dictionary.home.testimonial.author}</p>
            <p className="text-sm text-muted">{dictionary.home.testimonial.role}</p>
          </Card>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="glass-panel rounded-3xl border border-stroke/70 p-8 md:p-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl">{dictionary.home.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-muted">{dictionary.home.ctaText}</p>
            <ButtonLink href={`/${locale}/contact`} className="mt-8">
              {dictionary.common.bookCall}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                ...organizationSchema,
                inLanguage: locale,
              },
              {
                "@type": "WebSite",
                name: dictionary.siteName,
                url: `https://rbdesignstudios.com/${locale}`,
                inLanguage: locale,
              },
            ],
          }),
        }}
      />
    </>
  );
}
