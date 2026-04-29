import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export const Footer = ({ locale, dictionary }: FooterProps) => {
  return (
    <footer className="border-t border-stroke/70 bg-surface/40 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-[var(--font-display)] text-sm tracking-[0.2em] text-foreground">
            RB DESIGN STUDIOS
          </p>
          <p className="mt-2 text-sm text-muted">
            {new Date().getFullYear()} {dictionary.siteName}. {dictionary.footer.rights}
          </p>
        </div>
        <nav className="flex items-center gap-5 text-sm text-muted" aria-label="Footer">
          <Link href={`/${locale}/pricing`} className="transition-colors hover:text-foreground">
            {dictionary.nav.pricing}
          </Link>
          <Link href={`/${locale}/portfolio`} className="transition-colors hover:text-foreground">
            {dictionary.nav.portfolio}
          </Link>
          <Link href={`/${locale}/contact`} className="transition-colors hover:text-foreground">
            {dictionary.footer.support}
          </Link>
          <Link href={`/${locale}/legal`} className="transition-colors hover:text-foreground">
            {dictionary.footer.legal}
          </Link>
        </nav>
      </Container>
    </footer>
  );
};
