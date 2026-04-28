import { MetadataRoute } from "next";

const base = "https://rbdesignstudios.com";
const routes = ["", "/services", "/portfolio", "/about", "/contact"];
const locales = ["en", "ro"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
