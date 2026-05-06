import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { PortfolioSlug } from "@/lib/case-studies";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { showcaseAssets } from "@/lib/portfolio-assets";
import { createPageMetadata } from "@/lib/seo";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return createPageMetadata(locale, "portfolio");
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const labels =
    locale === "ro"
      ? {
          placeholder:
            "Sunt folosite placeholdere optimizate pentru performanta. Putem inlocui direct cu screenshot-urile finale cand le trimiti.",
          challenge: "Provocare:",
          approach: "Abordare:",
          outcome: "Rezultat:",
        }
      : {
          placeholder:
            "Performance-optimized placeholders are currently used. We can swap these with final screenshots as soon as you provide them.",
          challenge: "Challenge:",
          approach: "Approach:",
          outcome: "Outcome:",
        };

  return (
    <Section>
      <Reveal>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">
          {dictionary.portfolio.heading}
        </h1>
        <p className="mt-5 max-w-3xl text-muted">{dictionary.portfolio.intro}</p>
        <p className="mt-3 text-sm text-muted">{labels.placeholder}</p>
      </Reveal>

      <div className="mt-12 grid gap-8">
        {dictionary.portfolio.cases.map((item, index) => {
          const assets = showcaseAssets[item.slug as PortfolioSlug];

          return (
            <Reveal key={item.name} delay={index * 0.08}>
              <Card className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative grid gap-3 overflow-hidden rounded-2xl border border-stroke/60 p-2 md:grid-cols-[1fr_180px]">
                  <Image
                    src={assets.desktop}
                    alt={`${item.name} desktop showcase preview`}
                    width={1280}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                  <Image
                    src={assets.mobile}
                    alt={`${item.name} mobile showcase preview`}
                    width={430}
                    height={932}
                    className="h-full max-h-[260px] w-full rounded-xl border border-stroke/60 object-cover md:max-h-full"
                  />
                </div>
                <article>
                  <p className="text-sm uppercase tracking-[0.15em] text-accent">{item.industry}</p>
                  <h2 className="mt-2 font-[var(--font-display)] text-3xl">{item.name}</h2>
                  <p className="mt-4 text-sm text-muted">{item.positioning}</p>
                  <p className="mt-4 text-sm text-muted">
                    <strong className="text-foreground">{labels.challenge}</strong> {item.challenge}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    <strong className="text-foreground">{labels.approach}</strong> {item.solution}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    <strong className="text-foreground">{labels.outcome}</strong> {item.impact}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ButtonLink href={`/${locale}/portfolio/${item.slug}`}>
                      {dictionary.common.viewCaseStudy}
                    </ButtonLink>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-stroke px-5 py-3 text-sm font-semibold text-foreground transition-all duration-500 ease-out hover:border-accent hover:bg-surface-soft hover:scale-[1.03]"
                    >
                      {dictionary.common.visitLiveSite}
                    </a>
                  </div>
                </article>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
