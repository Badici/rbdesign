import { Locale } from "@/lib/i18n";

type Dictionary = {
  siteName: string;
  nav: {
    home: string;
    services: string;
    portfolio: string;
    pricing: string;
    about: string;
    contact: string;
    cta: string;
  };
  common: {
    discover: string;
    bookCall: string;
    startProject: string;
    getProposal: string;
    viewWork: string;
    viewCaseStudy: string;
    visitLiveSite: string;
    menuOpen: string;
    menuClose: string;
    switchLanguage: string;
    switchTheme: string;
    themeLight: string;
    themeDark: string;
  };
  metadata: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    portfolio: { title: string; description: string };
    pricing: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
    legal: { title: string; description: string };
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: Array<{ label: string; value: string }>;
    valueProps: Array<{ title: string; description: string }>;
    process: Array<{ step: string; title: string; description: string }>;
    testimonial: { quote: string; author: string; role: string };
    ctaTitle: string;
    ctaText: string;
  };
  services: {
    heading: string;
    intro: string;
    photosNote: string;
    list: Array<{
      title: string;
      description: string;
      bullets: string[];
    }>;
    workflowTitle: string;
    workflowText: string;
  };
  portfolio: {
    heading: string;
    intro: string;
    backToPortfolio: string;
    deliverablesHeading: string;
    cases: Array<{
      slug: string;
      name: string;
      url: string;
      industry: string;
      positioning: string;
      challenge: string;
      solution: string;
      impact: string;
    }>;
  };
  pricing: {
    heading: string;
    intro: string;
    disclaimer: string;
    plans: Array<{
      service: string;
      from: string;
      description: string;
      includes: string[];
    }>;
  };
  about: {
    heading: string;
    intro: string;
    body: string[];
    principles: Array<{ title: string; text: string }>;
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;
    phoneValue: string;
    locationLabel: string;
    locationValue: string;
    response: string;
  };
  legal: {
    heading: string;
    intro: string;
    items: Array<{ label: string; value: string; isLink?: boolean; href?: string }>;
  };
  footer: {
    rights: string;
    legal: string;
    support: string;
  };
};

const en: Dictionary = {
  siteName: "RB Design Studios",
  nav: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    cta: "Book Strategy Call",
  },
  common: {
    discover: "Discover more",
    bookCall: "Book strategy call",
    startProject: "Start your project",
    getProposal: "Get proposal",
    viewWork: "View case studies",
    viewCaseStudy: "View case study",
    visitLiveSite: "Visit live site",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchLanguage: "Switch language",
    switchTheme: "Switch color theme",
    themeLight: "Light mode",
    themeDark: "Dark mode",
  },
  metadata: {
    home: {
      title: "Premium Web Design & Branding",
      description:
        "RB Design Studios builds conversion-focused websites and brand systems for ambitious businesses.",
    },
    services: {
      title: "Design Services",
      description:
        "Explore our premium web design and branding services tailored for growth-focused companies.",
    },
    portfolio: {
      title: "Portfolio & Case Studies",
      description:
        "Browse selected RB Design Studios projects and discover the strategic outcomes behind each launch.",
    },
    pricing: {
      title: "Pricing",
      description:
        "Transparent starting prices for web design, brand identity, AI automations, and physical product branding.",
    },
    about: {
      title: "About RB Design Studios",
      description:
        "Meet the thinking, process, and standards behind RB Design Studios.",
    },
    contact: {
      title: "Contact",
      description:
        "Tell us about your next web or branding challenge and receive a strategic proposal.",
    },
    legal: {
      title: "Legal",
      description:
        "Legal business details and contact data for RB Design Studios.",
    },
  },
  home: {
    eyebrow: "Design systems that make companies unforgettable",
    title: "Web design and branding crafted to sell your value in seconds.",
    subtitle:
      "We combine strategic messaging, premium visuals, and engineering precision to launch digital experiences that convert serious buyers.",
    stats: [
      { label: "Projects launched", value: "15+" },
      { label: "Industries served", value: "4+" },
      { label: "Time to first concept", value: "7 days" },
    ],
    valueProps: [
      {
        title: "Conversion-first aesthetics",
        description:
          "Every visual decision is mapped to a business goal: trust, clarity, and action.",
      },
      {
        title: "Brand consistency at scale",
        description:
          "From logo rhythm to page pacing, your brand behaves consistently across touchpoints.",
      },
      {
        title: "Fast premium delivery",
        description:
          "A streamlined workflow gets high-end results without endless feedback loops.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Positioning Sprint",
        description:
          "We align business goals, audience, and offer clarity before touching visuals.",
      },
      {
        step: "02",
        title: "Art Direction + UX",
        description:
          "We shape architecture, visual language, and interaction flow to guide action.",
      },
      {
        step: "03",
        title: "Build + Launch",
        description:
          "We deliver a production-ready experience optimized for performance and search.",
      },
    ],
    testimonial: {
      quote:
        "RB Design Studios transformed our site from informative to persuasive. The quality and clarity changed our sales conversations immediately.",
      author: "Operations Lead, Optim Contab",
      role: "Accounting Services",
    },
    ctaTitle: "Ready to elevate how your business is perceived?",
    ctaText:
      "Book a strategy call and receive a clear roadmap for web design, branding, and launch.",
  },
  services: {
    heading: "Services built for growth-stage brands",
    intro:
      "Each engagement combines strategic thinking with polished execution, tailored to your growth stage.",
    photosNote:
      "If you already have product photos ready for web use, we can integrate and art-direct them directly into the final layouts.",
    list: [
      {
        title: "Strategic Website Design",
        description:
          "High-conversion marketing websites built with clear hierarchy and premium UX.",
        bullets: [
          "Information architecture and messaging hierarchy",
          "Responsive UI system and scalable design tokens",
          "Technical SEO foundation and launch optimization",
        ],
      },
      {
        title: "Brand Identity Systems",
        description:
          "Distinctive visual identities that look sharp across web, social, and collateral.",
        bullets: [
          "Logo systems and typographic direction",
          "Color strategy and componentized brand assets",
          "Guidelines for consistent implementation",
        ],
      },
      {
        title: "AI-Powered Automations",
        description:
          "Workflow automations that remove repetitive work and keep your pipeline moving.",
        bullets: [
          "Lead qualification and contact routing automations",
          "Proposal, follow-up, and reporting workflow automation",
          "Tool integration between forms, CRM, and communication channels",
        ],
      },
      {
        title: "Physical Product Branding",
        description:
          "Packaging and label systems designed to look premium both online and on shelf.",
        bullets: [
          "Label and packaging visual direction",
          "Print-ready layouts and production-safe specs",
          "Consistent product family systems for scaling catalogs",
        ],
      },
    ],
    workflowTitle: "A practical process with premium output",
    workflowText:
      "We keep momentum through short cycles, transparent checkpoints, and clear decision frameworks.",
  },
  portfolio: {
    heading: "Selected outcomes from real client launches",
    intro:
      "A curated selection of projects where positioning, UX, and visual direction aligned to business goals.",
    backToPortfolio: "Back to portfolio",
    deliverablesHeading: "What we shipped",
    cases: [
      {
        slug: "lyra-baits",
        name: "Lyra Baits",
        url: "https://lyrabaits.ro",
        industry: "Fishing products / eCommerce",
        positioning: "Premium bait brand with performance-first product storytelling.",
        challenge:
          "Translate technical product advantages into a cleaner and more aspirational shopping journey.",
        solution:
          "Built a modular product presentation framework with stronger hierarchy, contrast, and faster product scanning.",
        impact:
          "Sharper product clarity and stronger confidence signals for new buyers.",
      },
      {
        slug: "plumbi-si-momitoare",
        name: "Plumbi si Momitoare",
        url: "https://plumbisimomitoare.ro",
        industry: "Fishing gear retailer",
        positioning: "High-variety catalog focused on speed and practical buying decisions.",
        challenge:
          "Organize dense inventory into a mobile-friendly journey without overwhelming users.",
        solution:
          "Reframed category pathways, simplified card structure, and emphasized quick-hit product metadata.",
        impact:
          "Improved browse efficiency and lower decision friction on smaller screens.",
      },
      {
        slug: "emeye",
        name: "Emeye",
        url: "https://emeye.ro",
        industry: "Videography / visual storytelling",
        positioning: "Cinematic videography brand focused on premium visual identity.",
        challenge:
          "Showcase creative range while keeping the site clean and conversion-oriented.",
        solution:
          "Built a portfolio-first narrative structure with high-impact sections and clear inquiry flow.",
        impact:
          "Stronger premium positioning and clearer project inquiry path.",
      },
      {
        slug: "optim-contab",
        name: "Optim Contab",
        url: "https://optimcontab.ro",
        industry: "Accounting and business advisory",
        positioning: "Reliable financial partner for scaling SMEs.",
        challenge:
          "Differentiate from generic accounting websites and communicate strategic value quickly.",
        solution:
          "Introduced value-oriented messaging blocks, service bundles, and social proof hierarchy.",
        impact:
          "Clearer offer comprehension and a stronger premium advisory positioning.",
      },
    ],
  },
  pricing: {
    heading: "Clear starting prices for every core service",
    intro:
      "These ranges are built from current Romania and wider EU market benchmarks for boutique studios. Final pricing depends on scope, timelines, and deliverables.",
    disclaimer:
      "All prices are starting points in EUR and include VAT.",
    plans: [
      {
        service: "Strategic Website Design",
        from: "from €800",
        description:
          "For premium presentation websites with messaging, UI system, and technical SEO-ready delivery.",
        includes: [
          "Discovery + content hierarchy",
          "Custom responsive UI design",
          "Development-ready component structure",
        ],
      },
      {
        service: "Brand Identity Systems",
        from: "from €600",
        description:
          "For founders and teams that need a cohesive identity across web and marketing channels.",
        includes: [
          "Logo direction and visual language",
          "Color and typography system",
          "Brand usage guideline deck",
        ],
      },
      {
        service: "AI-Powered Automations",
        from: "from €600",
        description:
          "For small teams replacing manual repetitive tasks with practical automation flows.",
        includes: [
          "Process audit and automation map",
          "1-2 core workflow automations",
          "Handover and optimization recommendations",
        ],
      },
      {
        service: "Physical Product Branding",
        from: "from €400",
        description:
          "For labels, packaging systems, and shelf-ready visual consistency across product lines.",
        includes: [
          "Packaging concept direction",
          "Print-ready label/package layouts",
          "SKU variant structure for scale",
        ],
      },
    ],
  },
  about: {
    heading: "We design digital trust at first glance",
    intro:
      "RB Design Studios is a boutique team combining product-level design thinking with production-grade frontend engineering.",
    body: [
      "Our work sits at the intersection of branding, user psychology, and technical precision. We do not ship decorative pages; we ship business-ready systems.",
      "From strategic direction to final handoff, we keep each phase intentional, transparent, and measurable.",
    ],
    principles: [
      { title: "Clarity before decoration", text: "Message hierarchy drives every layout decision." },
      { title: "Detail as a trust signal", text: "Micro-alignment, spacing rhythm, and motion quality are never accidental." },
      { title: "Performance by default", text: "Premium visuals should feel fast on real-world devices." },
    ],
  },
  contact: {
    heading: "Let us map your next launch",
    intro:
      "Share your goals, timeline, and constraints. We will return with a focused roadmap and project estimate.",
    emailLabel: "Email",
    emailValue: "raresbadici@gmail.com",
    phoneLabel: "Phone",
    phoneValue: "+40728241412",
    locationLabel: "Location",
    locationValue: "Romania, available worldwide",
    response: "Typical response time: within one business day.",
  },
  legal: {
    heading: "Legal business details",
    intro:
      "Official company information for contracts, invoicing, and compliance references.",
    items: [
      { label: "Legal name", value: "Bădici Rareș PFA" },
      { label: "Tax ID (CIF)", value: "RO47260759" },
      { label: "Trade Registry No.", value: "F40/6107/23.11.2022" },
      {
        label: "Registered address",
        value: "Șos. Chitilei 242 E, Corp C5, Ap. 328, Parter, Faza 2",
      },
      { label: "Contact person", value: "Rareș Bădici" },
      {
        label: "Email",
        value: "raresbadici@gmail.com",
        isLink: true,
        href: "mailto:raresbadici@gmail.com",
      },
      {
        label: "Phone",
        value: "0728 241 412",
        isLink: true,
        href: "tel:0728241412",
      },
      { label: "Contact hours", value: "Monday - Friday, 09:00 - 18:00" },
    ],
  },
  footer: {
    rights: "All rights reserved.",
    legal: "Legal",
    support: "Support",
  },
};

const ro: Dictionary = {
  siteName: "RB Design Studios",
  nav: {
    home: "Acasă",
    services: "Servicii",
    portfolio: "Portofoliu",
    pricing: "Prețuri",
    about: "Despre",
    contact: "Contact",
    cta: "Programează un apel",
  },
  common: {
    discover: "Descoperă mai mult",
    bookCall: "Programează apel",
    startProject: "Începe proiectul",
    getProposal: "Cere ofertă",
    viewWork: "Vezi studiile de caz",
    viewCaseStudy: "Vezi studiul de caz",
    visitLiveSite: "Vizitează site-ul live",
    menuOpen: "Deschide meniul",
    menuClose: "Închide meniul",
    switchLanguage: "Schimbă limba",
    switchTheme: "Schimbă tema",
    themeLight: "Mod luminos",
    themeDark: "Mod întunecat",
  },
  metadata: {
    home: {
      title: "Web Design și Branding Premium",
      description:
        "RB Design Studios creează website-uri orientate spre conversii și sisteme de brand pentru companii ambițioase.",
    },
    services: {
      title: "Servicii de Design",
      description:
        "Descoperă serviciile noastre premium de web design și branding pentru business-uri în creștere.",
    },
    portfolio: {
      title: "Portofoliu și Studii de Caz",
      description:
        "Explorează proiectele RB Design Studios și rezultatele strategice din spatele fiecărui launch.",
    },
    pricing: {
      title: "Prețuri",
      description:
        "Prețuri de pornire pentru web design, identitate de brand, automatizări AI și branding de produs fizic.",
    },
    about: {
      title: "Despre RB Design Studios",
      description:
        "Cunoaște abordarea, procesul și standardele RB Design Studios.",
    },
    contact: {
      title: "Contact",
      description:
        "Povestește-ne despre următoarea provocare de web sau branding și primești o propunere strategică.",
    },
    legal: {
      title: "Date Legale",
      description:
        "Datele legale și de contact pentru activitatea RB Design Studios.",
    },
  },
  home: {
    eyebrow: "Sisteme de design care fac brandurile memorabile",
    title: "Web design și branding create să-ți vândă valoarea în câteva secunde.",
    subtitle:
      "Combinăm strategie, vizual premium și execuție tehnică pentru experiențe digitale care convertesc clienți relevanți.",
    stats: [
      { label: "Proiecte lansate", value: "15+" },
      { label: "Industrii deservite", value: "4+" },
      { label: "Timp până la primul concept", value: "7 zile" },
    ],
    valueProps: [
      {
        title: "Estetică orientată spre conversie",
        description:
          "Fiecare decizie vizuală susține un obiectiv de business: încredere, claritate și acțiune.",
      },
      {
        title: "Coerență de brand la scară",
        description:
          "De la logo la ritmul paginii, brandul tău rămâne consecvent în orice punct de contact.",
      },
      {
        title: "Livrare premium rapidă",
        description:
          "Un flux eficient care aduce rezultate high-end fără bucle infinite de feedback.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sprint de Poziționare",
        description:
          "Aliniem obiectivele, publicul și oferta înainte de orice decizie vizuală.",
      },
      {
        step: "02",
        title: "Direcție Vizuală + UX",
        description:
          "Definim arhitectura, limbajul vizual și fluxul de interacțiune care conduce spre acțiune.",
      },
      {
        step: "03",
        title: "Build + Lansare",
        description:
          "Livrăm experiența gata de producție, optimizată pentru performanță și SEO.",
      },
    ],
    testimonial: {
      quote:
        "RB Design Studios ne-a transformat site-ul din informativ în persuasiv. Calitatea execuției a schimbat imediat discuția cu clienții.",
      author: "Operations Lead, Optim Contab",
      role: "Servicii Contabilitate",
    },
    ctaTitle: "Pregătit să ridici percepția brandului tău?",
    ctaText:
      "Programează un apel strategic și primești o direcție clară pentru web design, branding și lansare.",
  },
  services: {
    heading: "Servicii construite pentru branduri în creștere",
    intro:
      "Fiecare colaborare combină strategie cu execuție impecabilă, în funcție de etapa business-ului tău.",
    photosNote:
      "Dacă ai deja fotografii de produs pregătite pentru web, le integrăm direct în layout-ul final cu direcție vizuală coerentă.",
    list: [
      {
        title: "Web Design Strategic",
        description:
          "Website-uri orientate pe conversie, cu ierarhie clară și experiență premium.",
        bullets: [
          "Arhitectura informației și ierarhie de mesaj",
          "Sistem UI responsive și token-uri scalabile",
          "Fundație tehnică SEO și optimizare de lansare",
        ],
      },
      {
        title: "Sisteme de Identitate Vizuală",
        description:
          "Identități distincte care funcționează impecabil pe web, social media și materiale.",
        bullets: [
          "Sisteme de logo și direcție tipografică",
          "Strategie de culoare si asset-uri modulare",
          "Ghid de implementare consecventă",
        ],
      },
      {
        title: "Automatizări cu AI",
        description:
          "Fluxuri automate care elimină task-urile repetitive și susțin creșterea operațională.",
        bullets: [
          "Automatizări pentru calificare lead-uri și routing",
          "Fluxuri automate pentru propuneri, follow-up si raportare",
          "Integrare între formulare, CRM și canale de comunicare",
        ],
      },
      {
        title: "Branding pentru Produse Fizice",
        description:
          "Sisteme vizuale pentru etichete și packaging care arată premium online și offline.",
        bullets: [
          "Direcție creativă pentru etichetă și ambalaj",
          "Layout-uri pregătite pentru producție tipar",
          "Sistem de familie pentru game de produse",
        ],
      },
    ],
    workflowTitle: "Proces practic, output premium",
    workflowText:
      "Menținem ritmul prin cicluri scurte, checkpoint-uri clare și decizii argumentate.",
  },
  portfolio: {
    heading: "Rezultate selectate din proiecte reale",
    intro:
      "Un mix de proiecte unde poziționarea, UX-ul și direcția vizuală au susținut obiective clare de business.",
    backToPortfolio: "Înapoi la portofoliu",
    deliverablesHeading: "Ce am livrat",
    cases: [
      {
        slug: "lyra-baits",
        name: "Lyra Baits",
        url: "https://lyrabaits.ro",
        industry: "Produse pescuit / eCommerce",
        positioning: "Brand premium de nade, cu focus pe performanța produsului.",
        challenge:
          "Transformarea avantajelor tehnice ale produsului într-o experiență de shopping mai aspirațională.",
        solution:
          "Am construit un sistem modular de prezentare, cu ierarhie mai clară și scanare rapidă.",
        impact:
          "Claritate mai mare în ofertă și încredere sporită pentru clienți noi.",
      },
      {
        slug: "plumbi-si-momitoare",
        name: "Plumbi și Momitoare",
        url: "https://plumbisimomitoare.ro",
        industry: "Retail echipamente pescuit",
        positioning: "Catalog extins, focus pe achiziție rapidă și practică.",
        challenge:
          "Organizarea unui volum mare de produse într-un flux mobil ușor de folosit.",
        solution:
          "Am simplificat traseele pe categorii și am scos în evidență metadatele esențiale.",
        impact:
          "Navigare mai eficientă și fricțiune redusă în decizia de cumpărare.",
      },
      {
        slug: "emeye",
        name: "Emeye",
        url: "https://emeye.ro",
        industry: "Videografie / storytelling vizual",
        positioning: "Brand de videografie cinematic, orientat spre percepție premium.",
        challenge:
          "Prezentarea portofoliului creativ într-un format clar, fără să încarce experiența.",
        solution:
          "Am construit o structură portfolio-first, cu secțiuni de impact și traseu clar spre contact.",
        impact:
          "Poziționare premium mai clară și mai multe intenții de contact relevante.",
      },
      {
        slug: "optim-contab",
        name: "Optim Contab",
        url: "https://optimcontab.ro",
        industry: "Contabilitate și consultanță",
        positioning: "Partener financiar de încredere pentru IMM-uri în creștere.",
        challenge:
          "Diferențiere față de site-urile contabile standard și comunicare rapidă a valorii.",
        solution:
          "Am introdus blocuri de valoare, pachete de servicii și ierarhie de social proof.",
        impact:
          "Înțelegere mai rapidă a ofertei și poziționare premium mai clară.",
      },
    ],
  },
  pricing: {
    heading: "Prețuri clare de pornire pentru fiecare serviciu",
    intro:
      "Intervalele sunt aliniate la benchmark-uri actuale din România și din piața europeană pentru studiouri boutique. Prețul final depinde de complexitate, timeline și livrabile.",
    disclaimer:
      "Toate prețurile sunt orientative, exprimate în EUR, cu TVA inclus.",
    plans: [
      {
        service: "Web Design Strategic",
        from: "de la €800",
        description:
          "Pentru website-uri de prezentare premium, cu ierarhie de mesaj, UI sistemic și fundație SEO tehnică.",
        includes: [
          "Discovery + arhitectură conținut",
          "Design custom responsive",
          "Structură de componente pregătită pentru dezvoltare",
        ],
      },
      {
        service: "Sisteme de Identitate Vizuala",
        from: "de la €600",
        description:
          "Pentru business-uri care au nevoie de o identitate coerentă pe web, social media și materiale.",
        includes: [
          "Direcție logo și limbaj vizual",
          "Sistem de culoare și tipografie",
          "Ghid de utilizare brand",
        ],
      },
      {
        service: "Automatizări cu AI",
        from: "de la €600",
        description:
          "Pentru echipe mici care vor să înlocuiască munca manuală repetitivă cu fluxuri automate.",
        includes: [
          "Audit de proces și mapă de automatizare",
          "1-2 fluxuri automate implementate",
          "Handover + recomandări de optimizare",
        ],
      },
      {
        service: "Branding pentru Produse Fizice",
        from: "de la €400",
        description:
          "Pentru etichete, ambalaje și coerență vizuală la raft, pe game de produse.",
        includes: [
          "Concept vizual de packaging",
          "Layout-uri print-ready",
          "Sistem pentru variații de SKU",
        ],
      },
    ],
  },
  about: {
    heading: "Proiectăm încredere digitală din prima secundă",
    intro:
      "RB Design Studios este o echipă boutique care combină gândirea de produs cu implementare frontend de nivel producție.",
    body: [
      "Lucrăm la intersecția dintre branding, psihologia utilizatorului și precizie tehnică. Nu livrăm pagini decorative, ci sisteme pregătite pentru business.",
      "De la strategie la lansare, fiecare etapă rămâne intenționată, transparentă și măsurabilă.",
    ],
    principles: [
      { title: "Claritate înainte de decor", text: "Ierarhia mesajului conduce fiecare decizie de layout." },
      { title: "Detaliul inspiră încredere", text: "Alinierea, ritmul de spațiere și motion quality nu sunt niciodată întâmplătoare." },
      { title: "Performanță implicită", text: "Vizualul premium trebuie să se simtă rapid pe dispozitive reale." },
    ],
  },
  contact: {
    heading: "Hai să schițăm următoarea lansare",
    intro:
      "Spune-ne obiectivele, termenul și contextul proiectului. Revenim cu un roadmap clar și o estimare.",
    emailLabel: "Email",
    emailValue: "raresbadici@gmail.com",
    phoneLabel: "Telefon",
    phoneValue: "+40728241412",
    locationLabel: "Locație",
    locationValue: "România, disponibil internațional",
    response: "Timp mediu de răspuns: în 24h lucrătoare.",
  },
  legal: {
    heading: "Date legale companie",
    intro:
      "Informațiile oficiale ale activității pentru contracte, facturare și conformitate.",
    items: [
      { label: "Denumire legală", value: "Bădici Rareș PFA" },
      { label: "CIF", value: "RO47260759" },
      { label: "Nr. înregistrare Registrul Comerțului", value: "F40/6107/23.11.2022" },
      {
        label: "Sediu profesional",
        value: "Șos. Chitilei 242 E, Corp C5, Ap. 328, Parter, Faza 2",
      },
      { label: "Persoană de contact", value: "Rareș Bădici" },
      {
        label: "Email",
        value: "raresbadici@gmail.com",
        isLink: true,
        href: "mailto:raresbadici@gmail.com",
      },
      {
        label: "Telefon",
        value: "0728 241 412",
        isLink: true,
        href: "tel:0728241412",
      },
      { label: "Program de contact", value: "Luni - Vineri, 09:00 - 18:00" },
    ],
  },
  footer: {
    rights: "Toate drepturile rezervate.",
    legal: "Legal",
    support: "Suport",
  },
};

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ro,
};

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export type { Dictionary };
