import { Locale } from "@/lib/i18n";

type Dictionary = {
  siteName: string;
  nav: {
    home: string;
    services: string;
    portfolio: string;
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
    switchLanguage: string;
  };
  metadata: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    portfolio: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
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
    cases: Array<{
      name: string;
      url: string;
      industry: string;
      positioning: string;
      challenge: string;
      solution: string;
      impact: string;
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
    switchLanguage: "Switch language",
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
  },
  home: {
    eyebrow: "Design systems that make companies unforgettable",
    title: "Web design and branding crafted to sell your value in seconds.",
    subtitle:
      "We combine strategic messaging, premium visuals, and engineering precision to launch digital experiences that convert serious buyers.",
    stats: [
      { label: "Projects launched", value: "40+" },
      { label: "Average engagement lift", value: "2.8x" },
      { label: "Time to first concept", value: "5 days" },
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
        title: "Landing Page CRO",
        description:
          "Purpose-built pages for campaigns and offers where conversion speed matters.",
        bullets: [
          "Offer framing and CTA architecture",
          "Trust and proof blocks with friction reduction",
          "A/B-ready sections and tracking alignment",
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
    cases: [
      {
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
        name: "Emeye",
        url: "https://emeye.ro",
        industry: "Eye care / medical services",
        positioning: "Trust-led healthcare brand centered on clarity and reassurance.",
        challenge:
          "Balance clinical credibility with an approachable, modern digital presence.",
        solution:
          "Designed calm visual pacing with service explainers, doctor trust markers, and clean booking cues.",
        impact:
          "Greater trust perception and improved first-contact confidence.",
      },
      {
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
    emailValue: "hello@rbdesignstudios.com",
    phoneLabel: "Phone",
    phoneValue: "+40 742 000 000",
    locationLabel: "Location",
    locationValue: "Romania, available worldwide",
    response: "Typical response time: within one business day.",
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
    home: "Acasa",
    services: "Servicii",
    portfolio: "Portofoliu",
    about: "Despre",
    contact: "Contact",
    cta: "Programeaza un apel",
  },
  common: {
    discover: "Descopera mai mult",
    bookCall: "Programeaza apel",
    startProject: "Incepe proiectul",
    getProposal: "Cere oferta",
    viewWork: "Vezi studiile de caz",
    switchLanguage: "Schimba limba",
  },
  metadata: {
    home: {
      title: "Web Design si Branding Premium",
      description:
        "RB Design Studios creeaza website-uri orientate spre conversii si sisteme de brand pentru companii ambitioase.",
    },
    services: {
      title: "Servicii de Design",
      description:
        "Descopera serviciile noastre premium de web design si branding pentru business-uri in crestere.",
    },
    portfolio: {
      title: "Portofoliu si Studii de Caz",
      description:
        "Exploreaza proiectele RB Design Studios si rezultatele strategice din spatele fiecarui launch.",
    },
    about: {
      title: "Despre RB Design Studios",
      description:
        "Cunoaste abordarea, procesul si standardele RB Design Studios.",
    },
    contact: {
      title: "Contact",
      description:
        "Povesteste-ne despre urmatoarea provocare de web sau branding si primesti o propunere strategica.",
    },
  },
  home: {
    eyebrow: "Sisteme de design care fac brandurile memorabile",
    title: "Web design si branding create sa-ti vanda valoarea in cateva secunde.",
    subtitle:
      "Combinam strategie, vizual premium si executie tehnica pentru experiente digitale care convertesc clienti relevanti.",
    stats: [
      { label: "Proiecte lansate", value: "40+" },
      { label: "Crestere medie engagement", value: "2.8x" },
      { label: "Timp pana la primul concept", value: "5 zile" },
    ],
    valueProps: [
      {
        title: "Estetica orientata spre conversie",
        description:
          "Fiecare decizie vizuala sustine un obiectiv de business: incredere, claritate si actiune.",
      },
      {
        title: "Coerenta de brand la scara",
        description:
          "De la logo la ritmul paginii, brandul tau ramane consecvent in orice punct de contact.",
      },
      {
        title: "Livrare premium rapida",
        description:
          "Un flux eficient care aduce rezultate high-end fara bucle infinite de feedback.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Sprint de Pozitionare",
        description:
          "Aliniem obiectivele, publicul si oferta inainte de orice decizie vizuala.",
      },
      {
        step: "02",
        title: "Directie Vizuala + UX",
        description:
          "Definim arhitectura, limbajul vizual si fluxul de interactiune care conduce spre actiune.",
      },
      {
        step: "03",
        title: "Build + Lansare",
        description:
          "Livram experienta gata de productie, optimizata pentru performanta si SEO.",
      },
    ],
    testimonial: {
      quote:
        "RB Design Studios ne-a transformat site-ul din informativ in persuasiv. Calitatea executiei a schimbat imediat discutia cu clientii.",
      author: "Operations Lead, Optim Contab",
      role: "Servicii Contabilitate",
    },
    ctaTitle: "Pregatit sa ridici perceptia brandului tau?",
    ctaText:
      "Programeaza un apel strategic si primesti o directie clara pentru web design, branding si lansare.",
  },
  services: {
    heading: "Servicii construite pentru branduri in crestere",
    intro:
      "Fiecare colaborare combina strategie cu executie impecabila, in functie de etapa business-ului tau.",
    list: [
      {
        title: "Web Design Strategic",
        description:
          "Website-uri orientate pe conversie, cu ierarhie clara si experienta premium.",
        bullets: [
          "Arhitectura informatiei si ierarhie de mesaj",
          "Sistem UI responsive si token-uri scalabile",
          "Fundatie tehnica SEO si optimizare de lansare",
        ],
      },
      {
        title: "Sisteme de Identitate Vizuala",
        description:
          "Identitati distincte care functioneaza impecabil pe web, social media si materiale.",
        bullets: [
          "Sisteme de logo si directie tipografica",
          "Strategie de culoare si asset-uri modulare",
          "Ghid de implementare consecventa",
        ],
      },
      {
        title: "Landing Page CRO",
        description:
          "Pagini construite pentru campanii unde viteza conversiei conteaza direct.",
        bullets: [
          "Structura de oferta si arhitectura CTA",
          "Blocuri de incredere si reducere a frictiunii",
          "Sectiuni gata pentru A/B testing si tracking",
        ],
      },
    ],
    workflowTitle: "Proces practic, output premium",
    workflowText:
      "Mentinem ritmul prin cicluri scurte, checkpoint-uri clare si decizii argumentate.",
  },
  portfolio: {
    heading: "Rezultate selectate din proiecte reale",
    intro:
      "Un mix de proiecte unde pozitionarea, UX-ul si directia vizuala au sustinut obiective clare de business.",
    cases: [
      {
        name: "Lyra Baits",
        url: "https://lyrabaits.ro",
        industry: "Produse pescuit / eCommerce",
        positioning: "Brand premium de nade, cu focus pe performanta produsului.",
        challenge:
          "Transformarea avantajelor tehnice ale produsului intr-o experienta de shopping mai aspirationala.",
        solution:
          "Am construit un sistem modular de prezentare, cu ierarhie mai clara si scanare rapida.",
        impact:
          "Claritate mai mare in oferta si incredere sporita pentru clienti noi.",
      },
      {
        name: "Plumbi si Momitoare",
        url: "https://plumbisimomitoare.ro",
        industry: "Retail echipamente pescuit",
        positioning: "Catalog extins, focus pe achizitie rapida si practica.",
        challenge:
          "Organizarea unui volum mare de produse intr-un flux mobil usor de folosit.",
        solution:
          "Am simplificat traseele pe categorii si am scos in evidenta metadatele esentiale.",
        impact:
          "Navigare mai eficienta si frictiune redusa in decizia de cumparare.",
      },
      {
        name: "Emeye",
        url: "https://emeye.ro",
        industry: "Servicii medicale oftalmologie",
        positioning: "Brand medical bazat pe incredere si claritate.",
        challenge:
          "Echilibrarea credibilitatii clinice cu o prezenta digitala moderna si accesibila.",
        solution:
          "Am definit un ritm vizual calm, explicatii de servicii si indicii clare pentru programare.",
        impact:
          "Perceptie de incredere crescuta si mai multa siguranta la primul contact.",
      },
      {
        name: "Optim Contab",
        url: "https://optimcontab.ro",
        industry: "Contabilitate si consultanta",
        positioning: "Partener financiar de incredere pentru IMM-uri in crestere.",
        challenge:
          "Diferentiere fata de site-urile contabile standard si comunicare rapida a valorii.",
        solution:
          "Am introdus blocuri de valoare, pachete de servicii si ierarhie de social proof.",
        impact:
          "Intelegere mai rapida a ofertei si pozitionare premium mai clara.",
      },
    ],
  },
  about: {
    heading: "Proiectam incredere digitala din prima secunda",
    intro:
      "RB Design Studios este o echipa boutique care combina gandirea de produs cu implementare frontend de nivel productie.",
    body: [
      "Lucram la intersectia dintre branding, psihologia utilizatorului si precizie tehnica. Nu livram pagini decorative, ci sisteme pregatite pentru business.",
      "De la strategie la lansare, fiecare etapa ramane intentionata, transparenta si masurabila.",
    ],
    principles: [
      { title: "Claritate inainte de decor", text: "Ierarhia mesajului conduce fiecare decizie de layout." },
      { title: "Detaliul inspira incredere", text: "Alinierea, ritmul de spatiere si motion quality nu sunt niciodata intamplatoare." },
      { title: "Performanta implicit", text: "Vizualul premium trebuie sa se simta rapid pe dispozitive reale." },
    ],
  },
  contact: {
    heading: "Hai sa schitam urmatoarea lansare",
    intro:
      "Spune-ne obiectivele, termenul si contextul proiectului. Revenim cu un roadmap clar si o estimare.",
    emailLabel: "Email",
    emailValue: "hello@rbdesignstudios.com",
    phoneLabel: "Telefon",
    phoneValue: "+40 742 000 000",
    locationLabel: "Locatie",
    locationValue: "Romania, disponibil international",
    response: "Timp mediu de raspuns: in 24h lucratoare.",
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
