import Link from "next/link";

import { localeLabels, locales } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: (typeof locales)[number];
  label: string;
};

export const LanguageSwitcher = ({
  currentLocale,
  label,
}: LanguageSwitcherProps) => {
  return (
    <div className="inline-flex items-center gap-2" role="group" aria-label={label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all duration-500 ease-out ${
            locale === currentLocale
              ? "bg-accent text-white"
              : "bg-surface text-muted hover:bg-surface-soft hover:text-foreground"
          }`}
          aria-current={locale === currentLocale ? "page" : undefined}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
};
