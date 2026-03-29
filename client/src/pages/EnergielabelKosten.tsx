import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Clock, Shield, ChevronDown, ChevronUp, BadgeCheck, Euro } from "lucide-react";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import heroImage from "@assets/new-amsterdam-canal_1760876000697.png";
import { useState, useEffect } from "react";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Energielabel aanvragen",
    provider: {
      "@type": "LocalBusiness",
      name: "Label & Lens",
      url: "https://www.labelenlens.nl",
      telephone: "+31643735719",
      email: "Info@labelenlens.nl",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
    },
    description:
      "Wat kost een energielabel in 2026? Prijzen vanaf €229. Transparante prijzen per woningtype en oppervlakte.",
    offers: [
      {
        "@type": "Offer",
        name: "Energielabel appartement t/m 75m²",
        price: "229",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Energielabel appartement 75-150m²",
        price: "279",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Energielabel appartement 150m²+",
        price: "349",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Energielabel eengezinswoning t/m 150m²",
        price: "299",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Energielabel eengezinswoning 150-250m²",
        price: "349",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Energielabel eengezinswoning 250m²+",
        price: "349",
        priceCurrency: "EUR",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat kost een energielabel in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De kosten van een energielabel beginnen vanaf €229 voor een appartement t/m 75m². De prijs hangt af van het woningtype en de oppervlakte.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn er verborgen kosten bij een energielabel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee, bij Label & Lens zijn er geen verborgen kosten. De prijs is inclusief opname ter plaatse, registratie bij EP-online en het officiële certificaat.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom verschilt de prijs per woning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De prijs hangt af van het woningtype (appartement of eengezinswoning) en de oppervlakte. Grotere woningen vragen meer tijd voor de opname en beoordeling.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik korting krijgen bij meerdere woningen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, bij meerdere woningen of een VvE wordt er een passend aanbod gemaakt. Neem contact op voor de mogelijkheden.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kost een spoedopdracht?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een spoedopdracht kost €80 bovenop de reguliere prijs. Hiermee wordt het energielabel met voorrang behandeld.",
        },
      },
    ],
  },
];

const faqs = [
  {
    question: "Wat kost een energielabel in 2026?",
    answer:
      "De kosten van een energielabel beginnen vanaf €229 voor een appartement t/m 75m². De prijs hangt af van het woningtype en de oppervlakte. Bekijk het volledige prijsoverzicht op deze pagina.",
  },
  {
    question: "Zijn er verborgen kosten bij een energielabel?",
    answer:
      "Nee, bij Label & Lens zijn er geen verborgen kosten. De prijs is inclusief opname ter plaatse, registratie bij EP-online en het officiële certificaat.",
  },
  {
    question: "Waarom verschilt de prijs per woning?",
    answer:
      "De prijs hangt af van het woningtype (appartement of eengezinswoning) en de oppervlakte. Grotere woningen vragen meer tijd voor de opname en beoordeling.",
  },
  {
    question: "Kan ik korting krijgen bij meerdere woningen?",
    answer:
      "Ja, bij meerdere woningen of een VvE wordt er een passend aanbod gemaakt. Neem contact op voor de mogelijkheden.",
  },
  {
    question: "Wat kost een spoedopdracht?",
    answer:
      "Een spoedopdracht kost €80 bovenop de reguliere prijs. Hiermee wordt het energielabel met voorrang behandeld.",
  },
  {
    question: "Is een energielabel verplicht?",
    answer:
      "Ja, bij verkoop of verhuur van een woning is een geldig energielabel verplicht. Zonder energielabel kun je een boete krijgen.",
  },
];

const prices = [
  { type: "Appartement", size: "t/m 75m²", price: "€229" },
  { type: "Appartement", size: "75–150m²", price: "€279" },
  { type: "Appartement", size: "150m²+", price: "€349" },
  { type: "Eengezinswoning", size: "t/m 150m²", price: "€299" },
  { type: "Eengezinswoning", size: "150–250m²", price: "€349" },
  { type: "Eengezinswoning", size: "250m²+", price: "€349" },
];

const includedItems = [
  {
    icon: <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Opname ter plaatse",
    text: "Een EPA-gecertificeerde adviseur komt langs voor een uitgebreide opname van de woning.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Registratie bij EP-online",
    text: "Het energielabel wordt officieel geregistreerd en is direct geldig voor verkoop en verhuur.",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Officieel certificaat",
    text: "Je ontvangt een officieel energielabel dat 10 jaar geldig is.",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Persoonlijk contact",
    text: "Duidelijke communicatie en persoonlijk contact gedurende het hele proces.",
  },
];

const extras = [
  { name: "Adviesrapport", price: "€120", description: "Uitgebreid advies over hoe je de energieprestatie van je woning kunt verbeteren." },
  { name: "Puntentelling", price: "€120", description: "WWS puntentelling voor het bepalen van de maximale huurprijs." },
  { name: "Spoed service", price: "€80", description: "Voorrang op de planning voor een snellere afhandeling." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`}
        className="w-full flex items-center justify-between gap-4 py-4 text-left font-medium hover-elevate active-elevate-2 rounded-md px-1"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <p className="pb-4 px-1 text-muted-foreground text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function EnergielabelKosten() {
  useSEO({
    title: "Energielabel Kosten 2026 – Wat Kost een Energielabel?",
    description:
      "Wat kost een energielabel in 2026? Prijzen vanaf €229. Bekijk de kosten per woningtype en oppervlakte. Transparante prijzen, geen verborgen kosten.",
    canonical: "/energielabel-kosten",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero
        title="Wat Kost een Energielabel?"
        subtitle="Transparante prijzen · vanaf €229 · geen verborgen kosten"
        imageSrc={heroImage}
        imageAlt="Karakteristieke Amsterdamse grachtenpanden"
      >
        <a href="/#homepage-selector">
          <Button
            data-testid="button-hero-aanvragen"
            size="lg"
            className="bg-primary text-primary-foreground border-2 border-primary-border px-8 text-lg font-semibold rounded-full"
          >
            Direct aanvragen
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </Hero>

      <main>
        {/* Vertrouwensbalk */}
        <div className="bg-card border-b border-card-border">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <strong className="text-foreground">EPA-gecertificeerd</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Euro className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Vanaf &euro;229</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Geen verborgen kosten</strong>
            </span>
          </div>
        </div>

        {/* Intro */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Energielabel kosten in 2026
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Wat kost een <strong>energielabel</strong>? De prijs hangt af van het woningtype en de oppervlakte. Bij Label &amp; Lens hanteren we transparante, vaste prijzen — zonder verborgen kosten. Hieronder vind je een overzicht van de kosten per woningtype.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Alle prijzen zijn inclusief opname ter plaatse, registratie bij EP-online en het officiële certificaat. Meer weten over wat een{" "}
                <Link
                  href="/energielabel"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  energielabel
                </Link>{" "}
                precies inhoudt? Lees er alles over op onze informatiepagina.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Prijsoverzicht */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Prijsoverzicht energielabel
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Bekijk hieronder de <strong>kosten van een energielabel</strong> per woningtype en oppervlakte.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prices.map(({ type, size, price }) => (
                  <Card key={`${type}-${size}`}>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{type}</h3>
                          <p className="text-sm text-muted-foreground">{size}</p>
                        </div>
                        <span className="text-2xl font-bold text-primary">{price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Meerdere woningen of een VvE? Neem{" "}
                <a
                  href="https://wa.me/31643735719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  contact
                </a>{" "}
                op voor een passend aanbod.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Wat zit er inbegrepen */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Wat zit er inbegrepen?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Bij elk energielabel van Label &amp; Lens is het volgende standaard inbegrepen:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {includedItems.map(({ icon, title, text }) => (
                  <div key={title} className="flex gap-3 items-start">
                    {icon}
                    <div>
                      <h3 className="font-semibold mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Optionele extra's */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Optionele extra&apos;s
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Naast het energielabel biedt Label &amp; Lens aanvullende diensten die je direct kunt meenemen:
              </p>
              <div className="space-y-4">
                {extras.map(({ name, price, description }) => (
                  <Card key={name}>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{name}</h3>
                        <span className="text-lg font-bold text-primary">{price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Veelgestelde vragen over energielabel kosten
              </h2>
              <div>
                {faqs.map((faq) => (
                  <FAQItem key={faq.question} {...faq} />
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Andere vragen?{" "}
                <a
                  href="/#faq"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  Bekijk alle veelgestelde vragen
                </a>
                .
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <section className="py-12 md:py-20 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Energielabel aanvragen?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Zet direct je opdracht uit via het opdrachtvenster of neem persoonlijk contact op. Prijzen vanaf &euro;229.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/#homepage-selector">
                  <Button
                    data-testid="button-cta-aanvragen"
                    size="lg"
                    className="bg-primary text-primary-foreground px-8"
                  >
                    Opdracht uitzetten
                  </Button>
                </a>
                <a href="https://wa.me/31643735719" target="_blank" rel="noopener noreferrer">
                  <Button
                    data-testid="button-cta-whatsapp"
                    size="lg"
                    variant="outline"
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
                <Link href="/energielabel">
                  <Button
                    data-testid="button-cta-meer-info"
                    size="lg"
                    variant="outline"
                  >
                    Meer over energielabels
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
