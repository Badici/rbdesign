import type { PortfolioSlug } from "@/lib/case-studies";

export const showcaseAssets: Record<PortfolioSlug, { desktop: string; mobile: string }> = {
  "lyra-baits": {
    desktop: "/showcase/mockups-desktop/lyra-desktop.png",
    mobile: "/showcase/mockups-mobile/lyra-mobile.png",
  },
  "plumbi-si-momitoare": {
    desktop: "/showcase/mockups-desktop/plumbi-si-momitoare-desktop.png",
    mobile: "/showcase/mockups-mobile/plumbi-si-momitoare-mobile.png",
  },
  emeye: {
    desktop: "/showcase/mockups-desktop/emeye-desktop.png",
    mobile: "/showcase/mockups-mobile/emeye-mobile.png",
  },
  "optim-contab": {
    desktop: "/showcase/mockups-desktop/optim-contab-desktop.png",
    mobile: "/showcase/mockups-mobile/optim-contab-mobile.png",
  },
};
