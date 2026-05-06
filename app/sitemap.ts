import { MetadataRoute } from "next";

import { portfolioSlugs } from "@/lib/case-studies";

const base = "https://rbdesignstudios.com";
const routes = ["", "/services", "/portfolio", "/pricing", "/about", "/contact", "/legal"];
const locales = ["en", "ro"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const portfolioCaseEntries = locales.flatMap((locale) =>
    portfolioSlugs.map((slug) => ({
      url: `${base}/${locale}/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  );

  return [...staticEntries, ...portfolioCaseEntries];
}
