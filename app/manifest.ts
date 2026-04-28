import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RB Design Studios",
    short_name: "RB Design",
    description:
      "Premium web design and branding showcase platform built by RB Design Studios.",
    start_url: "/en",
    display: "standalone",
    background_color: "#09070f",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
