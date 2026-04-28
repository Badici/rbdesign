import { ImageResponse } from "next/og";

import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

export const runtime = "edge";

export async function GET(
  request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale } = await context.params;
  const parsedLocale = isLocale(locale) ? locale : "en";
  const dictionary = getDictionary(parsedLocale);
  const page = new URL(request.url).searchParams.get("page") ?? "home";
  const title = dictionary.metadata[page as keyof typeof dictionary.metadata]?.title ?? dictionary.siteName;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 20% 20%, #8b5cf655 0%, #09070f 46%), linear-gradient(135deg, #09070f 0%, #121022 100%)",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: "0.22em", color: "#B48CFB" }}>RB DESIGN STUDIOS</div>
        <div style={{ maxWidth: "900px", fontSize: 64, lineHeight: 1.12, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 28, color: "#CDC3F3" }}>{dictionary.metadata.home.description}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
