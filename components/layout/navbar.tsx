"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ButtonLink } from "@/components/ui/button-link";
import { Dictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export const Navbar = ({ locale, dictionary }: NavbarProps) => {
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/services`, label: dictionary.nav.services },
    { href: `/${locale}/portfolio`, label: dictionary.nav.portfolio },
    { href: `/${locale}/pricing`, label: dictionary.nav.pricing },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stroke/70 bg-background/85 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="inline-flex items-center gap-3">
            <Image
              src="/brand/logo-mark.svg"
              alt="RB Design Studios logo mark"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-[var(--font-display)] text-sm font-bold tracking-[0.2em] text-foreground">
              RB DESIGN
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-2 py-1.5 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-surface-soft text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle
              label={dictionary.common.switchTheme}
              lightLabel={dictionary.common.themeLight}
              darkLabel={dictionary.common.themeDark}
            />
            <LanguageSwitcher
              currentLocale={locale}
              label={dictionary.common.switchLanguage}
              currentPath={pathname}
            />
            <ButtonLink href={`/${locale}/contact`} className="hidden sm:inline-flex">
              {dictionary.nav.cta}
            </ButtonLink>
          </div>
        </div>
        <nav aria-label="Mobile primary" className="mt-3 flex gap-5 overflow-x-auto pb-1 text-sm md:hidden">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-2 py-2 transition-colors ${
                isActive(item.href)
                  ? "bg-surface-soft text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
};
