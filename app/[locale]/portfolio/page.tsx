import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, Locale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

const showcaseAssets: Record<string, { desktop: string; mobile: string }> = {
  "Lyra Baits": {
    desktop: "/showcase/lyra-baits-desktop.png",
    mobile: "/showcase/lyra-baits-mobile.png",
  },
  "Plumbi si Momitoare": {
    desktop: "/showcase/plumbi-si-momitoare-desktop.png",
    mobile: "/showcase/plumbi-si-momitoare-mobile.svg",
  },
  Emeye: {
    desktop: "/showcase/emeye-desktop.svg",
    mobile: "/showcase/emeye-mobile.svg",
  },
  "Optim Contab": {
    desktop: "/showcase/optim-contab-desktop.svg",
    mobile: "/showcase/optim-contab-mobile.svg",
  },
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

  return (
    <Section>
      <Reveal>
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl">
          {dictionary.portfolio.heading}
        </h1>
        <p className="mt-5 max-w-3xl text-muted">{dictionary.portfolio.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-8">
        {dictionary.portfolio.cases.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <Card className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative grid gap-3 overflow-hidden rounded-2xl border border-stroke/60 p-2 md:grid-cols-[1fr_180px]">
                <Image
                  src={showcaseAssets[item.name].desktop}
                  alt={`${item.name} desktop showcase preview`}
                  width={1280}
                  height={800}
                  className="h-auto w-full object-cover"
                />
                <Image
                  src={showcaseAssets[item.name].mobile}
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
                  <strong className="text-foreground">Challenge:</strong> {item.challenge}
                </p>
                <p className="mt-3 text-sm text-muted">
                  <strong className="text-foreground">Approach:</strong> {item.solution}
                </p>
                <p className="mt-3 text-sm text-muted">
                  <strong className="text-foreground">Outcome:</strong> {item.impact}
                </p>
                <div className="mt-6">
                  <ButtonLink href={item.url}>{dictionary.common.discover}</ButtonLink>
                </div>
              </article>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
