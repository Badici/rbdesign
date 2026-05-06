import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getCaseStudy, isPortfolioSlug, portfolioSlugs } from "@/lib/case-studies";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { showcaseAssets } from "@/lib/portfolio-assets";
import { createCaseStudyMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return portfolioSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isPortfolioSlug(slug)) {
    return {};
  }
  const doc = getCaseStudy(slug, locale as Locale);
  return createCaseStudyMetadata(locale as Locale, slug, doc.metaTitle, doc.metaDescription);
}

export default async function PortfolioCaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isPortfolioSlug(slug)) {
    notFound();
  }

  const loc = locale as Locale;
  const dictionary = getDictionary(loc);
  const teaser = dictionary.portfolio.cases.find((c) => c.slug === slug);
  if (!teaser) {
    notFound();
  }

  const study = getCaseStudy(slug, loc);
  const assets = showcaseAssets[slug];

  return (
    <Section className="pb-20">
      <Reveal>
        <Link
          href={`/${locale}/portfolio`}
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
          {dictionary.portfolio.backToPortfolio}
        </Link>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-stroke/70 bg-surface/40 p-3 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" aria-hidden />
            <div className="relative grid gap-3 md:grid-cols-[1fr_160px]">
              <Image
                src={assets.desktop}
                alt={`${teaser.name} desktop preview`}
                width={1280}
                height={800}
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <Image
                src={assets.mobile}
                alt={`${teaser.name} mobile preview`}
                width={430}
                height={932}
                className="mx-auto h-full max-h-[280px] w-auto rounded-2xl border border-stroke/60 object-cover md:max-h-[420px]"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              {study.eyebrow}
            </p>
            <h1 className="mt-3 font-[var(--font-display)] text-4xl leading-tight md:text-5xl">
              {teaser.name}
            </h1>
            <p className="mt-5 text-lg text-muted">{study.intro}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/${locale}/contact`}>{dictionary.common.getProposal}</ButtonLink>
              <a
                href={teaser.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stroke bg-transparent px-5 py-3 text-sm font-semibold text-foreground transition-all duration-500 ease-out hover:border-accent hover:bg-surface-soft hover:scale-[1.03]"
              >
                {dictionary.common.visitLiveSite}
                <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <Reveal>
          <Card className="h-full border-stroke/80 bg-surface/50">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
              {locale === "ro" ? "Provocare" : "Challenge"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{teaser.challenge}</p>
          </Card>
        </Reveal>
        <Reveal delay={0.05}>
          <Card className="h-full border-stroke/80 bg-surface/50">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
              {locale === "ro" ? "Abordare" : "Approach"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{teaser.solution}</p>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="h-full border-stroke/80 bg-surface/50">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
              {locale === "ro" ? "Rezultat" : "Outcome"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{teaser.impact}</p>
          </Card>
        </Reveal>
      </div>

      <div className="mt-16 space-y-6">
        {study.sections.map((block, i) => (
          <Reveal key={block.title} delay={i * 0.06}>
            <Card className="border-stroke/70 lg:flex lg:gap-10 lg:p-10">
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stroke/80 bg-accent/10 text-accent lg:mb-0">
                <Layers className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">{block.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{block.body}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <Card className="mt-16 border-accent/25 bg-gradient-to-br from-accent/10 via-surface/80 to-transparent p-8 md:p-10">
          <h2 className="font-[var(--font-display)] text-2xl md:text-3xl">
            {dictionary.portfolio.deliverablesHeading}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {study.deliverables.map((line) => (
              <li key={line} className="flex gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  );
}
