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
        "Brand identity, packaging, and eCommerce for an up-and-coming fishing bait company: premium experience across digital, social, and physical products.",
      eyebrow: "Fishing · brand & eCommerce",
      intro:
        "Lyra Baits is a young fishing bait and accessories brand with a strong quality-to-price offer. The goal was to align the website with their social presence and deliver a premium feel online and on the shelf—without losing the practical mindset of real anglers.",
      sections: [
        {
          title: "Digital & social in sync",
          body: "We shaped an online identity that reads as one system with their social channels, so the brand feels consistent the moment someone moves from a post to the shop.",
        },
        {
          title: "Identity, logo, and physical branding",
          body: "From logo and core branding through packaging and physical touchpoints, the direction stays fisherman-first: legible, rugged, and trustworthy—while still looking modern and high-end.",
        },
        {
          title: "Photography & shop content",
          body: "We produced the product photography and structured web shop content so ranges, materials, and use cases are easy to scan and buy with confidence.",
        },
        {
          title: "Premium where it counts",
          body: "The outcome is a coherent premium experience: the value positioning stays honest, but every digital and physical encounter feels intentional and brand-grade.",
        },
      ],
      deliverables: [
        "Logo and online brand identity",
        "Packaging and physical product branding",
        "Product photography",
        "Web shop content and presentation",
      ],
    },
    ro: {
      metaTitle: "Lyra Baits — Studiu de caz",
      metaDescription:
        "Identitate vizuală, packaging și eCommerce pentru un brand tânăr de nade și accesorii: experiență premium online, pe social și pe produsul fizic.",
      eyebrow: "Pescuit · brand & eCommerce",
      intro:
        "Lyra Baits este un brand în creștere de nade și accesorii pentru pescuit, cu un raport calitate–preț foarte bun. Am fost cooptați pentru un site aliniat cu prezența pe social și pentru o experiență premium atât online, cât și pe produsele fizice—fără să pierdem sensul practic pentru pescari.",
      sections: [
        {
          title: "Digital și social pe aceeași linie",
          body: "Am construit o identitate online care se leagă firesc de canalurile sociale, astfel încât utilizatorul simte același brand când trece de la feed la magazin.",
        },
        {
          title: "Identitate, logo și branding fizic",
          body: "De la logo și axul de branding până la ambalaje și aplicări fizice, direcția rămâne gândită pentru pescar: clară, solidă și de încredere—în același timp modernă și premium.",
        },
        {
          title: "Foto produs și conținut magazin",
          body: "Am realizat fotografia de produs și am structurat conținutul în magazinul online pentru game, materiale și contexte de folosire ușor de parcurs și de cumpărat.",
        },
        {
          title: "Premium acolo unde contează",
          body: "Rezultatul este o experiență unitară și premium: oferta economică rămâne credibilă, iar orice întâlnire digitală sau fizică cu brandul pare îngrijită și coerentă.",
        },
      ],
      deliverables: [
        "Logo și identitate online",
        "Branding fizic și packaging",
        "Fotografie de produs",
        "Conținut și prezentare pentru web shop",
      ],
    },
  },
  "plumbi-si-momitoare": {
    en: {
      metaTitle: "Plumbi și Momitoare — Case Study",
      metaDescription:
        "Building a full visual identity from scratch for an established fishing brand: logo, photography, palette, branding, social guidance—and a measurable uplift in sales.",
      eyebrow: "Fishing retail · rebranding",
      intro:
        "Plumbi și Momitoare is a long-standing name in fishing weights and accessories but arrived with almost no cohesive online identity. We treated it as a clean-sheet branding project: visuals, rhythm, and language that finally match how solid the business already is offline.",
      sections: [
        {
          title: "From invisible to unmistakable",
          body: "We defined a complete visual territory—logo lockups, typography logic, colour system, and application rules—so the brand reads as intentional everywhere it appears.",
        },
        {
          title: "Product photography & shelf presence",
          body: "We planned and executed product imagery that communicates fit, finish, and range clarity, supporting both eCommerce grids and catalogue-style browsing.",
        },
        {
          title: "Brand voice on social",
          body: "Alongside visuals, we gave practical guidance on how to carry the refreshed identity across social platforms so traction online compounds instead of drifting off-brand.",
        },
        {
          title: "Momentum in numbers",
          body: "The refresh landed quickly: stronger recognition and sharper presentation contributed to roughly a fifteen percent uplift in sales in the first month after rollout.",
        },
      ],
      deliverables: [
        "Logo and full visual identity system",
        "Product photography and colour direction",
        "Brand application and social media guidance",
        "Cohesive digital retail presentation",
      ],
    },
    ro: {
      metaTitle: "Plumbi și Momitoare — Studiu de caz",
      metaDescription:
        "Identitate vizuală de la zero pentru un brand consacrat de accesorii pescuit: logo, fotografie, culori, branding și suport social—cu creștere măsurabilă a vânzărilor.",
      eyebrow: "Retail pescuit · rebranding",
      intro:
        "Plumbi și Momitoare este un nume cu vechime pe piața plumbilor și accesorii, dar fără o identitate online coerentă. Am tratat proiectul ca pe un branding de la zero: vizual, ritm și limbaj care reflectă în sfârșit soliditatea businessului din offline.",
      sections: [
        {
          title: "De la neclar la recunoscut",
          body: "Am definit un teritoriu vizual complet—logo, logică tipografică, schemă de culoare și reguli de aplicare—astfel încât brandul să pară intenționat oriunde apare.",
        },
        {
          title: "Fotografie produs și prezență la raft",
          body: "Am planificat și realizat imagini de produs care comunică finisaj, gamă și claritate, atât pentru grid-uri eCommerce, cât și pentru navigare tip catalog.",
        },
        {
          title: "Vocea brandului pe social",
          body: "Pe lângă vizual, am oferit îndrumare practică pentru cum se poartă identitatea reîmprospătată pe rețele, ca prezența online să se acumuleze, nu să se dilueze.",
        },
        {
          title: "Impuls măsurabil",
          body: "Refresh-ul s-a simțit rapid: recunoaștere mai bună și prezentare mai clară au contribuit la o creștere de circa 15% a vânzărilor în prima lună după lansare.",
        },
      ],
      deliverables: [
        "Logo și sistem complet de identitate vizuală",
        "Fotografie produs și direcție cromatică",
        "Aplicare brand și consultanță social media",
        "Prezentare coerentă în retail digital",
      ],
    },
  },
  emeye: {
    en: {
      metaTitle: "Emeye — Case Study",
      metaDescription:
        "An artistic videography portfolio built inside strict brand guidelines—with event booking and a breadth of work from weddings to music videos.",
      eyebrow: "Videography · portfolio & booking",
      intro:
        "Emeye sits in a disciplined brand world: fixed palette, logo rules, and identity guardrails set by the client. Within that frame we pushed a more artistic site experience—a portfolio that feels cinematic while staying unmistakably on-brand—and wired in practical tooling for enquiries and event booking.",
      sections: [
        {
          title: "Creativity within constraints",
          body: "We treated guidelines as creative fuel: typography, spacing, and motion obey the manual, while layout and pacing still feel expressive and editorial.",
        },
        {
          title: "Range without chaos",
          body: "The work spans weddings through music videos and commercial pieces. The structure makes that variety legible: each genre gets room to breathe without blurring into noise.",
        },
        {
          title: "Booking-ready experience",
          body: "Beyond showcase, the build supports event booking flows so interested clients can move from inspiration to a concrete next step without friction.",
        },
        {
          title: "Portfolio as proof",
          body: "The outcome is a site that reads as craft-first and business-capable—a reel-forward presence that respects the client's visual law and scales with their shoot calendar.",
        },
      ],
      deliverables: [
        "Portfolio UX within strict brand guidelines",
        "Layouts for diverse videography genres",
        "Event-booking oriented features",
        "Responsive cinematic presentation patterns",
      ],
    },
    ro: {
      metaTitle: "Emeye — Studiu de caz",
      metaDescription:
        "Portofoliu de videografie cu abordare artistică, ghidată de reguli stricte de brand—și funcții pentru rezervări evenimente, de la nunți la videoclipuri.",
      eyebrow: "Videografie · portofoliu & booking",
      intro:
        "Emeye funcționează într-un cadru de brand foarte disciplinat: paletă, logo și reguli de identitate stabilite de client. În limitele acestea am construit o experiență de site mai artistică—un portofoliu cinematic, dar recunoscut ca fiind pe brand—plus funcționalități practice pentru solicitări și rezervări de evenimente.",
      sections: [
        {
          title: "Creativitate în limite clare",
          body: "Am tratat ghidul de brand ca pe un motor creativ: tipografie, spațiere și mișcare respectă manualul, iar layout-ul și ritmul rămân expresive, aproape editoriale.",
        },
        {
          title: "Varietate fără haos",
          body: "Lucrările merg de la nunți la videoclipuri și proiecte comerciale. Structura face varietatea lizibilă: fiecare tip de conținut are spațiu propriu, fără zgomot vizual.",
        },
        {
          title: "Experiență gândită pentru booking",
          body: "Dincolo de showcase, site-ul susține fluxuri de rezervare pentru evenimente, astfel încât clientul să treacă de la inspirație la un pas concret, fără fricțiune.",
        },
        {
          title: "Portofoliu ca dovadă",
          body: "Rezultatul este un site care comunică meșteșugul și seriozitatea operațională—un portofoliu centrat pe lucrări, respectă legea vizuală a clientului și ține pasul cu calendarul de filmări.",
        },
      ],
      deliverables: [
        "UX portofoliu în limite stricte de brand",
        "Layout-uri pentru genuri diverse de videografie",
        "Funcționalități orientate spre rezervări evenimente",
        "Pattern-uri responsive cu prezentare cinematică",
      ],
    },
  },
  "optim-contab": {
    en: {
      metaTitle: "Optim Contab — Case Study",
      metaDescription:
        "First web presence for a traditional accounting firm: new logo, online identity, and a presentation site that explains value to existing and new clients.",
      eyebrow: "Accounting · first website",
      intro:
        "Optim Contab is an established, traditionally run accounting practice that had not yet claimed a clear space online. We helped them step into the open with their first presentation website—plus a fresh logo and digital identity—so they can be visible, credible, and explicit about what they deliver for clients.",
      sections: [
        {
          title: "From offline-only to findable",
          body: "The priority was a professional first impression on the web: structure, tone, and visuals that feel trustworthy to SMEs without chasing trends for their own sake.",
        },
        {
          title: "Logo and online identity",
          body: "We introduced a mark and visual system that translate the firm's stability into a modern, approachable digital language—consistent from header to contact blocks.",
        },
        {
          title: "Clarity for clients",
          body: "The site is built to answer the questions existing and prospective clients actually ask: what you do, how engagement works, and why the relationship matters—framed in plain, confident copy.",
        },
        {
          title: "Public proof of the practice",
          body: "The outcome is more than a brochure: it is a window for current clients to understand the full value on offer, and for new ones to take the first step with confidence.",
        },
      ],
      deliverables: [
        "Logo design",
        "Online brand identity and UI direction",
        "First presentation website — structure and content support",
        "Client-facing explanation of services and positioning",
      ],
    },
    ro: {
      metaTitle: "Optim Contab — Studiu de caz",
      metaDescription:
        "Prima prezență online pentru o firmă de contabilitate tradițională: logo, identitate digitală și site de prezentare care explică valoarea pentru clienți.",
      eyebrow: "Contabilitate · primul site",
      intro:
        "Optim Contab este o practică de contabilitate consolidată, cu mod de lucru clasic, care nu avea încă o prezență web clar definită. Am ajutat-o să intre „în lumina reflectoarelor” cu primul site de prezentare—împreună cu un logo nou și o identitate online—ca să fie vizibilă, credibilă și explicită despre ce livrează pentru clienți.",
      sections: [
        {
          title: "De la doar offline la găsibil",
          body: "Prioritatea a fost o primă impresie profesionistă pe web: structură, ton și vizual care inspiră încredere pentru IMM-uri, fără trenduri de decor.",
        },
        {
          title: "Logo și identitate online",
          body: "Am introdus un semn vizual și un sistem care traduc stabilitatea firmei într-un limbaj digital modern și accesibil—coerent de la antet la zonele de contact.",
        },
        {
          title: "Claritate pentru client",
          body: "Site-ul răspunde întrebărilor reale ale clienților actuali și potențiali: ce faceți, cum colaborați și de ce contează relația—exprimat direct și cu încredere.",
        },
        {
          title: "Dovadă publică a practicii",
          body: "Rezultatul nu e doar o broșură online: e o fereastră prin care clienții existenți înțeleg spectrul complet de valoare, iar cei noi pot face primul pas fără ezitare.",
        },
      ],
      deliverables: [
        "Design logo",
        "Identitate brand online și direcție UI",
        "Prim site de prezentare — structură și suport conținut",
        "Explicarea serviciilor și poziționării pentru client",
      ],
    },
  },
};

export const getCaseStudy = (slug: PortfolioSlug, locale: Locale): CaseStudyDoc =>
  caseStudies[slug][locale];
