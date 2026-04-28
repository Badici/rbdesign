import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rbdesignstudios.com/sitemap.xml",
    host: "https://rbdesignstudios.com",
  };
}
