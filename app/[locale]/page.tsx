import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="hero-backdrop absolute inset-0 -z-10 opacity-85" />
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
            <Reveal key={item.label} delay={0.08 * index} className="h-full">
              <Card className="h-full p-5">
                <p className="font-[var(--font-display)] text-3xl text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl">
              {locale === "ro"
                ? "Ce face experiența să pară premium"
                : "What makes the experience feel premium"}
            </h2>
            <div className="mt-8 space-y-5">
              {dictionary.home.valueProps.map((item, index) => (
                <div key={item.title} className="border-b border-stroke/70 pb-5 last:border-b-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-[var(--font-display)] text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src="/illustrations/home-orb-insight.svg"
              alt="Abstract orbital visual illustrating design system precision"
              width={720}
              height={620}
              className="h-auto w-full rounded-3xl border border-stroke/70"
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl">
              {locale === "ro" ? "Proces clar, fără blocaje" : "A clear process without bottlenecks"}
            </h2>
            <div className="mt-8 space-y-6">
              {dictionary.home.process.map((item) => (
                <article key={item.step} className="border-l-2 border-accent/65 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {item.step}
                  </p>
                  <h3 className="mt-1 font-[var(--font-display)] text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src="/illustrations/home-orb-process.svg"
              alt="Stylized 3D-inspired process flow visual"
              width={720}
              height={620}
              className="h-auto w-full rounded-3xl border border-stroke/70"
            />
          </Reveal>
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
