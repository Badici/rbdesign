import { Locale } from "@/lib/i18n";

export const portfolioSlugs = [
  "lyra-baits",
  "plumbi-si-momitoare",
  "emeye",
  "optim-contab",
] as const;

export type PortfolioSlug = (typeof portfolioSlugs)[number];

export const isPortfolioSlug = (value: string): value is PortfolioSlug =>
  portfolioSlugs.includes(value as PortfolioSlug);

type CaseStudyDoc = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; body: string }[];
  deliverables: string[];
};

const caseStudies: Record<PortfolioSlug, Record<Locale, CaseStudyDoc>> = {
  "lyra-baits": {
    en: {
      metaTitle: "Lyra Baits — Case Study",
      metaDescription:
        "How RB Design Studios shaped product storytelling, hierarchy, and a premium eCommerce experience for Lyra Baits.",
      eyebrow: "Fishing · eCommerce",
      intro:
        "Lyra Baits needed a digital experience that matched the precision of its products: fast scanning, confident storytelling, and a premium feel that converts first-time buyers.",
      sections: [
        {
          title: "Positioning & narrative",
          body: "We reframed technical product strengths into clear benefit-led messaging, so shoppers understand why the product wins before they reach the cart.",
        },
        {
          title: "UX & catalog structure",
          body: "We simplified category paths and tightened product card density, prioritizing scan speed on mobile while keeping depth for power users on desktop.",
        },
        {
          title: "Visual system",
          body: "We built a cohesive UI language with stronger contrast, disciplined typography rhythm, and modular components that scale across seasonal launches.",
        },
        {
          title: "Outcome focus",
          body: "The experience is designed to reduce hesitation: clearer proof, cleaner hierarchy, and a calmer purchase journey end-to-end.",
        },
      ],
      deliverables: [
        "Information architecture refresh",
        "Responsive UI system + component patterns",
        "Product storytelling templates",
        "Performance-minded layout structure",
      ],
    },
    ro: {
      metaTitle: "Lyra Baits — Studiu de caz",
      metaDescription:
        "Cum RB Design Studios a structurat storytelling-ul produsului, ierarhia vizuală și experiența premium de eCommerce pentru Lyra Baits.",
      eyebrow: "Pescuit · eCommerce",
      intro:
        "Lyra Baits avea nevoie de o experiență digitală la nivelul produselor: scanare rapidă, mesaj clar și un feel premium care convertește și cumpărătorii noi.",
      sections: [
        {
          title: "Poziționare și narațiune",
          body: "Am transpus avantajele tehnice în beneficii clare, astfel încât utilizatorul înțelege de ce produsul câștigă înainte să ajungă la coș.",
        },
        {
          title: "UX și structură catalog",
          body: "Am simplificat traseele pe categorii și am redus densitatea vizuală pe carduri, cu focus pe viteza de scanare pe mobil.",
        },
        {
          title: "Sistem vizual",
          body: "Am definit un limbaj UI coerent: contrast mai bun, ritm tipografic disciplinat și componente modulare pentru lansări sezoniere.",
        },
        {
          title: "Focus pe rezultat",
          body: "Experiența este gândită să reducă ezitarea: dovezi mai clare, ierarhie curată și un parcurs de achiziție mai calm.",
        },
      ],
      deliverables: [
        "Refresh arhitectură informație",
        "Sistem UI responsive + pattern-uri",
        "Template-uri storytelling produs",
        "Structură layout orientată spre performanță",
      ],
    },
  },
  "plumbi-si-momitoare": {
    en: {
      metaTitle: "Plumbi și Momitoare — Case Study",
      metaDescription:
        "RB Design Studios case study: catalog UX, mobile-first browsing, and practical buying flows for a high-variety fishing retailer.",
      eyebrow: "Retail · high SKU count",
      intro:
        "With a large inventory, the challenge was clarity at speed: users needed to compare variants quickly without feeling overwhelmed.",
      sections: [
        {
          title: "Catalog mental model",
          body: "We reorganized entry points so shoppers land on the right category faster, with consistent naming and predictable filters.",
        },
        {
          title: "Mobile-first density",
          body: "We tuned spacing, metadata visibility, and tap targets so the same catalog feels lighter on small screens without losing information.",
        },
        {
          title: "Decision support",
          body: "We emphasized the attributes that matter at purchase time, reducing back-and-forth between product list and detail views.",
        },
        {
          title: "Scalable UI patterns",
          body: "We delivered repeatable card and list patterns that keep the store coherent as inventory grows.",
        },
      ],
      deliverables: [
        "Category pathway improvements",
        "Product card + list UI patterns",
        "Mobile-first interaction tuning",
        "Variant readability improvements",
      ],
    },
    ro: {
      metaTitle: "Plumbi și Momitoare — Studiu de caz",
      metaDescription:
        "Studiu de caz RB Design Studios: UX catalog, browsing mobile-first și fluxuri practice pentru un retailer cu multe SKU-uri.",
      eyebrow: "Retail · catalog extins",
      intro:
        "Cu un inventar mare, provocarea a fost claritatea la viteză: utilizatorii trebuie să compare variante rapid, fără senzația de aglomerare.",
      sections: [
        {
          title: "Model mental catalog",
          body: "Am reorganizat punctele de intrare astfel încât utilizatorii ajung mai repede în categoria potrivită, cu denumiri consistente și filtre previzibile.",
        },
        {
          title: "Densitate mobile-first",
          body: "Am ajustat spațierea, vizibilitatea metadatelor și țintele de atingere ca același catalog să pară mai ușor pe ecrane mici.",
        },
        {
          title: "Suport decizie",
          body: "Am pus în față atributele relevante la momentul cumpărării, reducând navigarea inutilă între listă și detaliu.",
        },
        {
          title: "Pattern-uri scalabile",
          body: "Am livrat pattern-uri repetabile pentru carduri și liste, astfel încât magazinul rămâne coerent pe măsură ce crește inventarul.",
        },
      ],
      deliverables: [
        "Îmbunătățiri trasee categorii",
        "Pattern-uri UI listă + card produs",
        "Tuning interacțiuni mobile-first",
        "Lizibilitate îmbunătățită pentru variante",
      ],
    },
  },
  emeye: {
    en: {
      metaTitle: "Emeye — Case Study",
      metaDescription:
        "A cinematic videography portfolio case study: premium positioning, portfolio-first UX, and a confident inquiry path.",
      eyebrow: "Videography · portfolio",
      intro:
        "Emeye needed a site that feels as intentional as the work it showcases: bold visuals, restrained layout, and a frictionless route to inquiries.",
      sections: [
        {
          title: "Portfolio-first storytelling",
          body: "We structured the narrative around proof: work samples lead, while supporting copy reinforces craft and reliability.",
        },
        {
          title: "Premium visual pacing",
          body: "We used rhythm, contrast, and whitespace to create a cinematic feel without noisy effects that distract from the reel.",
        },
        {
          title: "Conversion clarity",
          body: "We designed a clear inquiry path with strong CTAs and trust cues that match a high-end creative service.",
        },
        {
          title: "Brand consistency",
          body: "Typography, spacing, and accent usage align across sections so the brand reads cohesive on every scroll depth.",
        },
      ],
      deliverables: [
        "Portfolio layout system",
        "CTA + inquiry flow refinement",
        "Typography + spacing rhythm",
        "Responsive showcase patterns",
      ],
    },
    ro: {
      metaTitle: "Emeye — Studiu de caz",
      metaDescription:
        "Studiu de caz pentru un portofoliu de videografie cinematic: poziționare premium, UX portfolio-first și traseu clar spre contact.",
      eyebrow: "Videografie · portofoliu",
      intro:
        "Emeye avea nevoie de un site la fel de intenționat ca lucrările pe care le prezintă: vizual îndrăzneț, layout disciplinat și un drum fără fricțiune spre solicitări.",
      sections: [
        {
          title: "Storytelling portfolio-first",
          body: "Am structurat narațiunea în jurul dovezii: mostrele de lucru conduc, iar copy-ul susține meșteșugul și seriozitatea.",
        },
        {
          title: "Ritm vizual premium",
          body: "Am folosit ritm, contrast și spațiu negativ pentru un feel cinematic, fără efecte zgomotoase care distrag de la reel.",
        },
        {
          title: "Claritate conversie",
          body: "Am definit un traseu clar spre solicitare, cu CTA-uri puternice și semnale de încredere potrivite unui serviciu creativ high-end.",
        },
        {
          title: "Coerență de brand",
          body: "Tipografia, spațierea și accentele se aliniază pe secțiuni, astfel încât brandul rămâne coerent la orice adâncime de scroll.",
        },
      ],
      deliverables: [
        "Sistem layout portofoliu",
        "Rafinare flux CTA + contact",
        "Ritm tipografie + spațiere",
        "Pattern-uri responsive showcase",
      ],
    },
  },
  "optim-contab": {
    en: {
      metaTitle: "Optim Contab — Case Study",
      metaDescription:
        "How RB Design Studios clarified advisory positioning, service packaging, and trust hierarchy for an accounting firm website.",
      eyebrow: "Accounting · advisory",
      intro:
        "Optim Contab needed to escape the generic accounting-site look and communicate strategic value quickly to SME decision makers.",
      sections: [
        {
          title: "Value-led messaging",
          body: "We reframed services around outcomes and responsibilities, not feature lists, so prospects understand the partnership model.",
        },
        {
          title: "Service packaging clarity",
          body: "We introduced structured bundles and scannable sections that reduce ambiguity about what is included and what happens next.",
        },
        {
          title: "Trust hierarchy",
          body: "We sequenced proof, credentials, and process cues to build confidence before asking for contact.",
        },
        {
          title: "Premium perception",
          body: "Visual discipline and spacing signal an advisory-grade firm rather than a commodity provider.",
        },
      ],
      deliverables: [
        "Messaging hierarchy refresh",
        "Service bundle presentation patterns",
        "Trust + proof sequencing",
        "Responsive section system",
      ],
    },
    ro: {
      metaTitle: "Optim Contab — Studiu de caz",
      metaDescription:
        "Cum RB Design Studios a clarificat poziționarea consultativă, pachetele de servicii și ierarhia de încredere pentru site-ul unei firme de contabilitate.",
      eyebrow: "Contabilitate · consultanță",
      intro:
        "Optim Contab trebuia să iasă din estetica generică a site-urilor de contabilitate și să comunice rapid valoarea strategică pentru decidenți IMM.",
      sections: [
        {
          title: "Mesaj orientat pe valoare",
          body: "Am reîncadrat serviciile în jurul rezultatelor și responsabilităților, nu al listelor de features, pentru a clarifica modelul de parteneriat.",
        },
        {
          title: "Claritate pachete servicii",
          body: "Am introdus structuri de pachete și secțiuni scanabile care reduc ambiguitatea despre ce este inclus și ce urmează.",
        },
        {
          title: "Ierarhie încredere",
          body: "Am secvențiat dovezi, credențiale și indicii de proces ca să construim încredere înainte de solicitarea contactului.",
        },
        {
          title: "Percepție premium",
          body: "Disciplina vizuală și spațierea semnalează o firmă de tip consultativ, nu un furnizor comodificat.",
        },
      ],
      deliverables: [
        "Refresh ierarhie mesaj",
        "Pattern-uri prezentare pachete",
        "Secvențiere dovezi + încredere",
        "Sistem secțiuni responsive",
      ],
    },
  },
};

export const getCaseStudy = (slug: PortfolioSlug, locale: Locale): CaseStudyDoc =>
  caseStudies[slug][locale];
