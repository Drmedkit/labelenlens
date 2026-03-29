import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Clock, Shield, ChevronDown, ChevronUp, BadgeCheck, Building } from "lucide-react";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import heroImage from "@assets/new-amsterdam-canal_1760876000697.png";
import { useState, useEffect } from "react";

const jsonLd = [
  {
    "@context": "https://schema.org",
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
    description:
      "Energielabel voor huurwoningen: verplicht bij verhuur, bepalend voor de maximale huurprijs via het WWS. Label & Lens helpt verhuurders en huurders.",
    priceRange: "€€",
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
          text: "Ja, bij het aangaan van een nieuw huurcontract is de verhuurder wettelijk verplicht om een geldig energielabel te overhandigen aan de huurder. Zonder geldig label riskeert de verhuurder een boete.",
        },
      },
      {
        "@type": "Question",
        name: "Hoeveel punten levert een energielabel op in het WWS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Het aantal punten varieert van 44 punten voor A++++ tot -5 punten voor label G. Elk punt is circa €5-6 per maand waard in de maximale huurprijs.",
        },
      },
      {
        "@type": "Question",
        name: "Wie betaalt het energielabel bij een huurwoning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De verhuurder is verantwoordelijk voor het aanvragen en bekostigen van het energielabel. Dit mag niet doorberekend worden aan de huurder.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik als huurder controleren of mijn woning een energielabel heeft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, op EP-online (energielabel.nl) kun je met het adres van de woning opzoeken of er een geldig energielabel geregistreerd staat.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kan ik doen als mijn huurwoning geen energielabel heeft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vraag je verhuurder om een energielabel aan te vragen. Zonder geldig label mag bij de Huurcommissie worden uitgegaan van het laagste label (G), wat kan leiden tot een lagere maximale huurprijs.",
        },
      },
    ],
  },
];

const faqs = [
  {
    question: "Is een energielabel verplicht voor een huurwoning?",
    answer:
      "Ja, bij het aangaan van een nieuw huurcontract is de verhuurder wettelijk verplicht om een geldig energielabel te overhandigen aan de huurder. Zonder geldig label riskeert de verhuurder een boete van de Inspectie Leefomgeving en Transport (ILT).",
  },
  {
    question: "Hoeveel punten levert een energielabel op in het WWS?",
    answer:
      "Het aantal WWS-punten varieert sterk per label: A++++ levert 44 punten op, A+++ geeft 40 punten, en label G kost zelfs 5 punten. Elk punt is circa €5-6 per maand waard, dus het verschil tussen een goed en slecht label kan honderden euro's per maand zijn.",
  },
  {
    question: "Wie betaalt het energielabel bij een huurwoning?",
    answer:
      "De verhuurder is verantwoordelijk voor het aanvragen en bekostigen van het energielabel. Dit mag niet doorberekend worden aan de huurder. Het is een verplichting die bij de eigenaar van de woning ligt.",
  },
  {
    question: "Kan ik als huurder controleren of mijn woning een energielabel heeft?",
    answer:
      "Ja, op EP-online (energielabel.nl) kun je met het adres van de woning opzoeken of er een geldig energielabel geregistreerd staat. Een energielabel is 10 jaar geldig na registratie.",
  },
  {
    question: "Wat kan ik doen als mijn huurwoning geen energielabel heeft?",
    answer:
      "Vraag je verhuurder om een energielabel aan te vragen. Zonder geldig label mag bij een procedure bij de Huurcommissie worden uitgegaan van het laagste label (G), wat kan leiden tot een fors lagere maximale huurprijs en mogelijk huurverlaging.",
  },
];

const wwsPunten = [
  { label: "A++++", punten: 44 },
  { label: "A+++", punten: 40 },
  { label: "A++", punten: 36 },
  { label: "A+", punten: 32 },
  { label: "A", punten: 22 },
  { label: "B", punten: 18 },
  { label: "C", punten: 14 },
  { label: "D", punten: 10 },
  { label: "E", punten: 4 },
  { label: "F", punten: 0 },
  { label: "G", punten: -5 },
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

export default function EnergielabelHuurwoning() {
  useSEO({
    title: "Energielabel Huurwoning – Verplicht & Invloed op Huurprijs",
    description:
      "Energielabel voor huurwoningen: verplicht bij verhuur, invloed op maximale huurprijs via WWS. Leer hoe het energielabel uw huurprijs beïnvloedt.",
    canonical: "/energielabel-huurwoning",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero
        title="Energielabel Huurwoning"
        subtitle="Verplicht voor verhuurders – bepalend voor de maximale huurprijs"
        imageSrc={heroImage}
        imageAlt="Karakteristieke Amsterdamse grachtenpanden"
      >
        <a href="/#homepage-selector">
          <Button
            data-testid="button-hero-aanvragen"
            size="lg"
            className="bg-primary text-primary-foreground border-2 border-primary-border px-8 text-lg font-semibold rounded-full"
          >
            Energielabel aanvragen
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
              <Zap className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Binnen 5 werkdagen</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Specialist in huurwoningen</strong>
            </span>
          </div>
        </div>

        {/* Energielabel en huurwoningen */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Energielabel en huurwoningen
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Een <strong>energielabel is verplicht bij het verhuren</strong> van een woning. Bij het aangaan van een nieuw huurcontract moet de verhuurder een geldig energielabel aan de huurder overhandigen. Dit is vastgelegd in het Besluit energieprestatie gebouwen (BEG).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De <strong>verhuurder</strong> is verantwoordelijk voor het aanvragen en bekostigen van het energielabel. Dit geldt zowel voor particuliere verhuurders als voor woningcorporaties. Het energielabel is 10 jaar geldig na registratie bij EP-online.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Zonder geldig energielabel riskeert de verhuurder een boete van de Inspectie Leefomgeving en Transport (ILT). Daarnaast kan het ontbreken van een label gevolgen hebben bij een procedure bij de Huurcommissie: er wordt dan uitgegaan van label G, het slechtste label.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Invloed op de huurprijs via het WWS */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Invloed op de huurprijs via het WWS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Het energielabel speelt een grote rol in het <strong>Woningwaarderingsstelsel (WWS)</strong>, ook wel het puntenstelsel genoemd. Het WWS bepaalt de maximale huurprijs van een woning in het gereguleerde segment. Hoe beter het energielabel, hoe meer punten de woning krijgt — en hoe hoger de maximale huurprijs mag zijn.
              </p>
              <Card className="mb-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold mb-4">WWS-punten per energielabel</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {wwsPunten.map(({ label, punten }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between bg-background rounded-lg px-3 py-2 border border-border"
                      >
                        <span className="font-semibold text-foreground">{label}</span>
                        <span className={`text-sm font-medium ${punten > 0 ? "text-primary" : punten === 0 ? "text-muted-foreground" : "text-destructive"}`}>
                          {punten > 0 ? `+${punten}` : punten} punten
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Elk WWS-punt is ongeveer <strong>€5-6 per maand</strong> waard. Het verschil tussen een A++++ label (44 punten) en een G label (-5 punten) is maar liefst 49 punten. Dat komt neer op een verschil van circa <strong>€245-294 per maand</strong> in de maximale huurprijs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Een beter energielabel kan dus direct een hogere huurprijs rechtvaardigen. Benieuwd naar de volledige puntentelling?{" "}
                <Link
                  href="/wws-puntentelling"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  Bekijk de WWS puntentelling
                </Link>
                .
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Voor verhuurders */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Voor verhuurders
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Als verhuurder heeft een goed energielabel direct voordelen. Het is niet alleen een wettelijke verplichting, maar ook een financieel slimme keuze.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Hogere maximale huurprijs</h3>
                    <p className="text-sm text-muted-foreground">
                      Een beter energielabel levert meer WWS-punten op, waardoor de maximale huurprijs stijgt. Het verschil kan oplopen tot honderden euro's per maand.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Wettelijk compliant</h3>
                    <p className="text-sm text-muted-foreground">
                      Voorkom boetes van de ILT en vervelende situaties bij de Huurcommissie. Met een geldig energielabel voldoet u aan alle wettelijke eisen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Building className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Aantrekkelijker voor huurders</h3>
                    <p className="text-sm text-muted-foreground">
                      Huurders letten steeds meer op energiekosten. Een woning met een goed energielabel is aantrekkelijker en verhuurt sneller. Lagere stookkosten zijn een belangrijk argument voor potentiele huurders.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Bescherming bij geschillen</h3>
                    <p className="text-sm text-muted-foreground">
                      Bij een procedure bij de Huurcommissie is het energielabel bepalend voor de puntentelling. Zonder geldig label wordt uitgegaan van label G, wat tot aanzienlijke huurverlaging kan leiden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Voor huurders */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Voor huurders
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ook als huurder is het energielabel belangrijk. Het bepaalt mede hoeveel huur je maximaal mag betalen en geeft inzicht in de energiekosten van de woning.
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    Controleer of je woning een geldig label heeft
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    Op{" "}
                    <a
                      href="https://www.ep-online.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      EP-online
                    </a>{" "}
                    kun je met het adres van je woning opzoeken of er een geldig energielabel geregistreerd staat. Een label is 10 jaar geldig.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Invloed op je maximale huurprijs
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    Het energielabel telt mee in de WWS-puntentelling die de maximale huurprijs bepaalt. Een slecht label betekent minder punten en dus een lagere maximale huur. Betaal je meer dan de maximale huurprijs? Dan kun je naar de Huurcommissie stappen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Wat als het energielabel ontbreekt?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    Heeft je huurwoning geen geldig energielabel? Vraag je verhuurder om er een aan te vragen. Bij een geschil bij de Huurcommissie wordt zonder label uitgegaan van label G (-5 punten). Dit kan in je voordeel werken als je vindt dat je te veel huur betaalt.
                  </p>
                </div>
              </div>
              <Card className="mt-6">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Wil je weten hoeveel punten jouw huurwoning heeft en wat de maximale huur is?{" "}
                    <Link
                      href="/wws-puntentelling"
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      Lees meer over de WWS puntentelling
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Veelgestelde vragen over energielabel huurwoning
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
                Energielabel nodig voor uw huurwoning?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Label &amp; Lens helpt verhuurders snel en persoonlijk aan een officieel energielabel. EPA-gecertificeerd en geregistreerd bij EP-online.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a href="/#homepage-selector">
                  <Button
                    data-testid="button-cta-aanvragen"
                    size="lg"
                    className="bg-primary text-primary-foreground px-8"
                  >
                    Energielabel aanvragen
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
              </div>
              <div className="flex flex-wrap gap-3 justify-center text-sm">
                <Link
                  href="/wws-puntentelling"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  WWS puntentelling bekijken
                </Link>
                <span className="text-muted-foreground">|</span>
                <a
                  href="/#homepage-selector"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  Direct prijs berekenen
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
