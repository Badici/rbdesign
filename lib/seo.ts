import type { Metadata } from "next";

import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";

const siteUrl = "https://rbdesignstudios.com";

type PageKey = "home" | "services" | "portfolio" | "about" | "contact";

export const createPageMetadata = (locale: Locale, page: PageKey): Metadata => {
  const dictionary = getDictionary(locale);
  const current = dictionary.metadata[page];
  const canonicalPath =
    page === "home" ? `/${locale}` : `/${locale}/${page === "portfolio" ? "portfolio" : page}`;

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
      languages: {
        en: canonicalPath.replace(`/${locale}`, "/en"),
        ro: canonicalPath.replace(`/${locale}`, "/ro"),
      },
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${siteUrl}${canonicalPath}`,
      siteName: dictionary.siteName,
      locale: locale === "en" ? "en_US" : "ro_RO",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og/${locale}?page=${page}`,
          width: 1200,
          height: 630,
          alt: `${dictionary.siteName} ${current.title}`,
        },
      ],
    },
  };
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RB Design Studios",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo-mark.svg`,
  sameAs: [
    "https://lyrabaits.ro",
    "https://plumbisimomitoare.ro",
    "https://emeye.ro",
    "https://optimcontab.ro",
  ],
};
