import type { PortfolioSlug } from "@/lib/case-studies";

export const showcaseAssets: Record<PortfolioSlug, { desktop: string; mobile: string }> = {
  "lyra-baits": {
    desktop: "/showcase/placeholder-lyra-desktop.svg",
    mobile: "/showcase/placeholder-lyra-mobile.svg",
  },
  "plumbi-si-momitoare": {
    desktop: "/showcase/placeholder-plumbi-desktop.svg",
    mobile: "/showcase/placeholder-plumbi-mobile.svg",
  },
  emeye: {
    desktop: "/showcase/placeholder-emeye-desktop.svg",
    mobile: "/showcase/placeholder-emeye-mobile.svg",
  },
  "optim-contab": {
    desktop: "/showcase/placeholder-optim-desktop.svg",
    mobile: "/showcase/placeholder-optim-mobile.svg",
  },
};
