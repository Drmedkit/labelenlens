/**
 * Server-side SEO module
 * Injects route-specific meta tags, titles, canonical URLs, and JSON-LD
 * into the HTML template BEFORE serving to the client.
 * This ensures search engine crawlers see the correct SEO data
 * without needing to execute JavaScript.
 */

const SITE_URL = "https://www.labelenlens.nl";
const SITE_NAME = "Label & Lens";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

// Organization schema reused across pages
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Label & Lens",
  url: SITE_URL,
  telephone: "+31643735719",
  email: "Info@labelenlens.nl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amsterdam",
    addressRegion: "Noord-Holland",
    addressCountry: "NL",
  },
  areaServed: [
    { "@type": "City", name: "Amsterdam" },
    { "@type": "Place", name: "Amsterdam Zuid" },
    { "@type": "Place", name: "Amsterdam Noord" },
    { "@type": "Place", name: "Amsterdam West" },
    { "@type": "Place", name: "Amsterdam Oost" },
    { "@type": "Place", name: "De Pijp" },
    { "@type": "Place", name: "Jordaan" },
    { "@type": "Place", name: "Oud-West" },
    { "@type": "Place", name: "Amstelveen" },
    { "@type": "Place", name: "Diemen" },
    { "@type": "Place", name: "Zaandam" },
  ],
  description:
    "EPA-gecertificeerd energielabel aanvragen in Amsterdam. BRL9500 gecertificeerd, binnen 5 werkdagen geleverd.",
  priceRange: "€229-€349",
  image: DEFAULT_OG_IMAGE,
  sameAs: [],
};

const seoRoutes: Record<string, RouteSEO> = {
  "/": {
    title: "Energielabel & Vastgoedfotografie Amsterdam",
    description:
      "Professionele energielabels en vastgoedfotografie in Amsterdam. EPA-gecertificeerd (BRL9500), binnen 5 werkdagen geleverd. Vanaf €229. Ook puntentelling & adviesrapport.",
    canonical: "/",
    jsonLd: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  },

  "/energielabel": {
    title: "Energielabel Aanvragen – Binnen 5 Werkdagen | Vanaf €229",
    description:
      "Energielabel aanvragen? BRL9500 gecertificeerd, officieel geregistreerd bij EP-online. Persoonlijke aanpak, vaak binnen 48 uur. Bereken direct je prijs.",
    canonical: "/energielabel",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Energielabel Aanvragen",
        provider: organizationSchema,
        serviceType: "Energielabel registratie",
        areaServed: { "@type": "Country", name: "Nederland" },
        description:
          "Officieel energielabel aanvragen. BRL9500 gecertificeerd, geregistreerd bij EP-online.",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "229",
          highPrice: "349",
          priceCurrency: "EUR",
        },
      },
    ],
  },

  "/energielabels": {
    title: "Energielabels – Alles Over Energielabels voor Woningen",
    description:
      "Alles wat u moet weten over energielabels. Wat is een energielabel? Wanneer verplicht? Hoe aanvragen? Check gratis uw huidige energielabel. BRL9500 gecertificeerd.",
    canonical: "/energielabels",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Hoe lang is een energielabel geldig?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Een energielabel is 10 jaar geldig na registratie bij EP-online.",
            },
          },
          {
            "@type": "Question",
            name: "Wat kost een energielabel aanvragen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De kosten hangen af van het type woning en het aantal m². Prijzen vanaf €229 voor een appartement tot 75m².",
            },
          },
          {
            "@type": "Question",
            name: "Moet ik aanwezig zijn bij de opname?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja, voor een correcte opname is toegang tot de woning nodig.",
            },
          },
        ],
      },
    ],
  },

  "/energielabel-aanvragen-amsterdam/": {
    title: "Energielabel Aanvragen Amsterdam – EPA Gecertificeerd | Binnen 5 Werkdagen",
    description:
      "Energielabel aanvragen in Amsterdam? EPA-gecertificeerd, officieel geregistreerd bij EP-online. Snelle service in heel Amsterdam. Vanaf €229.",
    canonical: "/energielabel-aanvragen-amsterdam/",
    jsonLd: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wanneer is een energielabel verplicht in Amsterdam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bij verkoop of verhuur van een woning is een geldig energielabel verplicht. Zonder energielabel riskeert u een boete tot €435.",
            },
          },
          {
            "@type": "Question",
            name: "Hoe snel kan ik een energielabel krijgen in Amsterdam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standaard binnen 5 werkdagen. Met spoed service vaak binnen 48 uur.",
            },
          },
        ],
      },
    ],
  },

  "/fotografie": {
    title: "Vastgoedfotografie Amsterdam – Professionele Woningfotografie",
    description:
      "Professionele vastgoedfotografie in Amsterdam. HDR-fotografie, 360° tours en video. Vanaf €249. Snelle levering, professioneel resultaat.",
    canonical: "/fotografie",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Vastgoedfotografie Amsterdam",
        provider: organizationSchema,
        serviceType: "Vastgoedfotografie",
        areaServed: { "@type": "City", name: "Amsterdam" },
        description:
          "Professionele vastgoedfotografie, 360° virtual tours en promotievideo's in Amsterdam.",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "249",
          highPrice: "399",
          priceCurrency: "EUR",
        },
      },
    ],
  },

  "/wws-puntentelling/": {
    title: "WWS Puntentelling Amsterdam – Maximale Huurprijs Berekenen",
    description:
      "WWS puntentelling laten maken in Amsterdam? Bereken de maximale huurprijs van uw woning. Gecertificeerd, snel en betrouwbaar. Vanaf €120.",
    canonical: "/wws-puntentelling/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "WWS Puntentelling",
        provider: organizationSchema,
        serviceType: "Woningwaarderingsstelsel puntentelling",
        areaServed: { "@type": "City", name: "Amsterdam" },
        description:
          "Officiële WWS puntentelling voor huurwoningen in Amsterdam. Bepaal de maximale huurprijs.",
        offers: {
          "@type": "Offer",
          price: "120",
          priceCurrency: "EUR",
        },
      },
    ],
  },

  "/nen-2580-metingen/": {
    title: "NEN 2580 Meting Amsterdam – Officiële Oppervlaktemeting",
    description:
      "NEN 2580 meting laten uitvoeren in Amsterdam? Officiële oppervlaktemeting voor GO, BVO en VVO. Inclusief 2D/3D plattegronden. Binnen 5 werkdagen.",
    canonical: "/nen-2580-metingen/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "NEN 2580 Meting",
        provider: organizationSchema,
        serviceType: "Oppervlaktemeting NEN 2580",
        areaServed: { "@type": "City", name: "Amsterdam" },
        description:
          "Officiële NEN 2580 oppervlaktemeting. GO, BVO en VVO berekeningen inclusief 2D/3D plattegronden.",
      },
    ],
  },

  // ── SEO Landing Pages ──

  "/energielabel-kosten": {
    title: "Energielabel Kosten 2026 – Wat Kost een Energielabel?",
    description:
      "Wat kost een energielabel in 2026? Prijzen vanaf €229. Bekijk de kosten per woningtype en oppervlakte. Transparante prijzen, geen verborgen kosten.",
    canonical: "/energielabel-kosten",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wat kost een energielabel in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Een energielabel kost vanaf €229 voor een appartement tot 75m². Voor grotere woningen of eengezinswoningen variëren de prijzen van €279 tot €349.",
            },
          },
          {
            "@type": "Question",
            name: "Zijn er extra kosten bij een energielabel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nee, bij Label & Lens zijn alle kosten inbegrepen: de opname, registratie bij EP-online, en het officiële certificaat. Optioneel kunt u een adviesrapport (€120) of spoedservice (€80) toevoegen.",
            },
          },
          {
            "@type": "Question",
            name: "Waarom verschilt de prijs van een energielabel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De prijs hangt af van het woningtype (appartement vs. eengezinswoning) en de oppervlakte. Grotere woningen vereisen een uitgebreidere opname.",
            },
          },
        ],
      },
    ],
  },

  "/energielabel-woning": {
    title: "Energielabel Woning – Alles Wat U Moet Weten",
    description:
      "Energielabel voor uw woning aanvragen? Verplicht bij verkoop en verhuur. Leer wat een energielabel inhoudt, hoe de opname werkt en hoe u uw label kunt verbeteren.",
    canonical: "/energielabel-woning",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Energielabel Woning – Alles Wat U Moet Weten",
        author: organizationSchema,
        publisher: organizationSchema,
        datePublished: "2026-01-15",
        dateModified: "2026-03-29",
        description:
          "Uitgebreide gids over energielabels voor woningen. Wanneer verplicht, hoe werkt de opname, en hoe verbetert u uw energielabel.",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wat is een energielabel voor een woning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Een energielabel geeft de energieprestatie van een woning weer op een schaal van A++++ (zeer zuinig) tot G (onzuinig). Het label is gebaseerd op isolatie, verwarmingsinstallatie, ventilatie en andere energetische kenmerken.",
            },
          },
          {
            "@type": "Question",
            name: "Is een energielabel verplicht voor mijn woning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja, bij verkoop of verhuur van een woning is een geldig energielabel wettelijk verplicht. Zonder label riskeert u een boete tot €435.",
            },
          },
          {
            "@type": "Question",
            name: "Hoe kan ik het energielabel van mijn woning verbeteren?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "U kunt uw energielabel verbeteren door isolatie toe te voegen, HR++ glas te plaatsen, een zuinigere verwarmingsketel te installeren, of zonnepanelen te plaatsen. Vraag ons adviesrapport (€120) voor persoonlijk advies.",
            },
          },
        ],
      },
    ],
  },

  "/energielabel-huurwoning": {
    title: "Energielabel Huurwoning – Verplicht & Invloed op Huurprijs",
    description:
      "Energielabel voor huurwoningen: verplicht bij verhuur, invloed op maximale huurprijs via WWS. Leer hoe het energielabel uw huurprijs beïnvloedt.",
    canonical: "/energielabel-huurwoning",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Energielabel Huurwoning – Verplicht & Invloed op Huurprijs",
        author: organizationSchema,
        publisher: organizationSchema,
        datePublished: "2026-01-20",
        dateModified: "2026-03-29",
        description:
          "Alles over energielabels voor huurwoningen. Hoe beïnvloedt het label de huurprijs? Wanneer is het verplicht?",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is een energielabel verplicht voor een huurwoning?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja, bij het aangaan van een nieuw huurcontract is een geldig energielabel verplicht. De verhuurder is verantwoordelijk voor het aanvragen van het label.",
            },
          },
          {
            "@type": "Question",
            name: "Hoeveel punten levert een beter energielabel op bij de WWS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Een energielabel kan tot 44 punten opleveren in het WWS. Een A++++ label levert 44 punten op, terwijl een G label zelfs punten kan aftrekken. Elk punt is circa €5-€6 per maand waard in de huurprijs.",
            },
          },
        ],
      },
    ],
  },

  "/energielabel-verplicht": {
    title: "Energielabel Verplicht – Wanneer & Waarom? | Boete Voorkomen",
    description:
      "Wanneer is een energielabel verplicht? Bij verkoop en verhuur. Boete tot €435 zonder label. Leer wanneer u een energielabel nodig heeft en hoe u het snel regelt.",
    canonical: "/energielabel-verplicht",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wanneer is een energielabel verplicht?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Een energielabel is verplicht bij verkoop of verhuur van een woning. Het label moet beschikbaar zijn op het moment van de overdracht of bij het aangaan van het huurcontract.",
            },
          },
          {
            "@type": "Question",
            name: "Wat is de boete voor het ontbreken van een energielabel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De boete voor het niet hebben van een energielabel bij verkoop of verhuur bedraagt maximaal €435.",
            },
          },
          {
            "@type": "Question",
            name: "Hoe snel kan ik een energielabel regelen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bij Label & Lens ontvangt u uw energielabel standaard binnen 5 werkdagen. Met onze spoedservice is dit vaak al binnen 48 uur mogelijk.",
            },
          },
          {
            "@type": "Question",
            name: "Wie is verantwoordelijk voor het energielabel bij verkoop?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "De verkoper is verantwoordelijk voor het aanleveren van een geldig energielabel aan de koper. Dit moet uiterlijk bij de overdracht beschikbaar zijn.",
            },
          },
        ],
      },
    ],
  },

  "/energielabel-verbeteren": {
    title: "Energielabel Verbeteren – Tips & Advies voor een Beter Label",
    description:
      "Energielabel verbeteren? Ontdek welke maatregelen het meeste effect hebben: isolatie, HR-glas, zonnepanelen. Persoonlijk adviesrapport voor €120.",
    canonical: "/energielabel-verbeteren",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Energielabel verbeteren",
        description:
          "Stapsgewijze gids om het energielabel van uw woning te verbeteren.",
        step: [
          {
            "@type": "HowToStep",
            name: "Huidig label controleren",
            text: "Check uw huidige energielabel via EP-online of laat het opnieuw opnemen door een gecertificeerd adviseur.",
          },
          {
            "@type": "HowToStep",
            name: "Adviesrapport aanvragen",
            text: "Vraag een adviesrapport aan (€120) voor persoonlijk advies over de meest effectieve verbetermaatregelen voor uw woning.",
          },
          {
            "@type": "HowToStep",
            name: "Isolatie verbeteren",
            text: "Verbeter de isolatie van dak, vloer, gevels en kruipruimte. Dit heeft vaak het grootste effect op uw energielabel.",
          },
          {
            "@type": "HowToStep",
            name: "Glas vervangen",
            text: "Vervang enkel of dubbel glas door HR++ of triple glas. Dit verbetert zowel isolatie als comfort.",
          },
          {
            "@type": "HowToStep",
            name: "Duurzame energie opwekken",
            text: "Overweeg zonnepanelen, een warmtepomp, of een zonneboiler om uw energielabel flink te verbeteren.",
          },
          {
            "@type": "HowToStep",
            name: "Nieuw energielabel aanvragen",
            text: "Na de verbeteringen laat u een nieuw energielabel opmaken om uw verbeterde score officieel te registreren.",
          },
        ],
      },
    ],
  },

  "/energielabel-amsterdam-zuid": {
    title: "Energielabel Amsterdam Zuid – Snel & Gecertificeerd",
    description:
      "Energielabel aanvragen in Amsterdam Zuid? EPA-gecertificeerd, binnen 5 werkdagen. Service in De Pijp, Rivierenbuurt, Buitenveldert, Zuidas en omgeving.",
    canonical: "/energielabel-amsterdam-zuid",
    jsonLd: [
      {
        ...organizationSchema,
        areaServed: [
          { "@type": "Place", name: "Amsterdam Zuid" },
          { "@type": "Place", name: "De Pijp" },
          { "@type": "Place", name: "Rivierenbuurt" },
          { "@type": "Place", name: "Buitenveldert" },
          { "@type": "Place", name: "Zuidas" },
          { "@type": "Place", name: "Station Zuid" },
        ],
      },
    ],
  },

  "/energielabel-amsterdam-west": {
    title: "Energielabel Amsterdam West – Snel & Gecertificeerd",
    description:
      "Energielabel aanvragen in Amsterdam West? EPA-gecertificeerd, binnen 5 werkdagen. Service in Oud-West, De Baarsjes, Bos en Lommer en omgeving.",
    canonical: "/energielabel-amsterdam-west",
    jsonLd: [
      {
        ...organizationSchema,
        areaServed: [
          { "@type": "Place", name: "Amsterdam West" },
          { "@type": "Place", name: "Oud-West" },
          { "@type": "Place", name: "De Baarsjes" },
          { "@type": "Place", name: "Bos en Lommer" },
          { "@type": "Place", name: "Westerpark" },
        ],
      },
    ],
  },

  "/energielabel-amsterdam-oost": {
    title: "Energielabel Amsterdam Oost – Snel & Gecertificeerd",
    description:
      "Energielabel aanvragen in Amsterdam Oost? EPA-gecertificeerd, binnen 5 werkdagen. Service in Oost, Watergraafsmeer, IJburg, Indische Buurt en omgeving.",
    canonical: "/energielabel-amsterdam-oost",
    jsonLd: [
      {
        ...organizationSchema,
        areaServed: [
          { "@type": "Place", name: "Amsterdam Oost" },
          { "@type": "Place", name: "Watergraafsmeer" },
          { "@type": "Place", name: "IJburg" },
          { "@type": "Place", name: "Indische Buurt" },
          { "@type": "Place", name: "Zeeburg" },
        ],
      },
    ],
  },

  "/energielabel-amsterdam-noord": {
    title: "Energielabel Amsterdam Noord – Snel & Gecertificeerd",
    description:
      "Energielabel aanvragen in Amsterdam Noord? EPA-gecertificeerd, binnen 5 werkdagen. Service in Noord, Nieuwendam, Buiksloot, NDSM en omgeving.",
    canonical: "/energielabel-amsterdam-noord",
    jsonLd: [
      {
        ...organizationSchema,
        areaServed: [
          { "@type": "Place", name: "Amsterdam Noord" },
          { "@type": "Place", name: "Nieuwendam" },
          { "@type": "Place", name: "Buiksloot" },
          { "@type": "Place", name: "NDSM-werf" },
          { "@type": "Place", name: "Volendam" },
        ],
      },
    ],
  },

  "/energielabel-amsterdam-centrum": {
    title: "Energielabel Amsterdam Centrum – Snel & Gecertificeerd",
    description:
      "Energielabel aanvragen in Amsterdam Centrum? EPA-gecertificeerd, binnen 5 werkdagen. Service in Jordaan, Grachtengordel, De Wallen en omgeving.",
    canonical: "/energielabel-amsterdam-centrum",
    jsonLd: [
      {
        ...organizationSchema,
        areaServed: [
          { "@type": "Place", name: "Amsterdam Centrum" },
          { "@type": "Place", name: "Jordaan" },
          { "@type": "Place", name: "Grachtengordel" },
          { "@type": "Place", name: "De Wallen" },
          { "@type": "Place", name: "Nieuwmarkt" },
        ],
      },
    ],
  },
};

/**
 * Get SEO data for a given URL path.
 * Falls back to homepage defaults for unknown routes.
 */
export function getSEOForRoute(urlPath: string): RouteSEO {
  // Normalize path: remove query strings and hash
  const cleanPath = urlPath.split("?")[0].split("#")[0];

  // Try exact match first
  if (seoRoutes[cleanPath]) {
    return seoRoutes[cleanPath];
  }

  // Try with/without trailing slash
  const withSlash = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
  const withoutSlash = cleanPath.endsWith("/") ? cleanPath.slice(0, -1) : cleanPath;

  if (seoRoutes[withSlash]) return seoRoutes[withSlash];
  if (seoRoutes[withoutSlash]) return seoRoutes[withoutSlash];

  // Fallback to homepage meta
  return seoRoutes["/"];
}

/**
 * Inject SEO meta tags into the HTML template string.
 * Replaces the default meta tags in index.html with route-specific ones.
 */
export function injectSEO(html: string, urlPath: string): string {
  const seo = getSEOForRoute(urlPath);
  const fullTitle = `${seo.title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${seo.canonical}`;
  const ogImage = DEFAULT_OG_IMAGE;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(fullTitle)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(fullTitle)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(canonicalUrl)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(fullTitle)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`
  );

  // Inject JSON-LD before </head>
  if (seo.jsonLd) {
    const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`;
    html = html.replace("</head>", `${jsonLdScript}\n  </head>`);
  }

  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Returns all known SEO routes for sitemap generation.
 */
export function getAllSEORoutes(): Array<{ path: string; priority: string; changefreq: string }> {
  return Object.keys(seoRoutes).map((path) => {
    let priority = "0.7";
    let changefreq = "monthly";

    if (path === "/") {
      priority = "1.0";
      changefreq = "weekly";
    } else if (
      path === "/energielabel" ||
      path === "/energielabel-aanvragen-amsterdam/" ||
      path === "/energielabels"
    ) {
      priority = "0.9";
      changefreq = "weekly";
    } else if (path.startsWith("/energielabel-amsterdam-")) {
      priority = "0.8";
      changefreq = "monthly";
    }

    return { path, priority, changefreq };
  });
}
