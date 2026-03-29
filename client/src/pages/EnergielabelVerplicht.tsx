import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Clock, Shield, ChevronDown, ChevronUp, BadgeCheck, AlertTriangle, Scale } from "lucide-react";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import heroImage from "@assets/new-amsterdam-canal_1760876000697.png";
import { useState, useEffect } from "react";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wanneer is een energielabel verplicht?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een energielabel is verplicht bij de verkoop of verhuur van een woning, oplevering van nieuwbouw, en bij bedrijfspanden en kantoren. Zonder geldig energielabel riskeert u een boete.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe hoog is de boete zonder energielabel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Particulieren riskeren een boete tot €435 bij het ontbreken van een energielabel. Voor bedrijven liggen de boetes aanzienlijk hoger. De ILT (Inspectie Leefomgeving en Transport) handhaaft hierop.",
        },
      },
      {
        "@type": "Question",
        name: "Zijn monumenten vrijgesteld van een energielabel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monumenten zijn tot 29 mei 2026 vrijgesteld van de energielabelplicht. Vanaf die datum wordt een energielabel ook verplicht voor monumentale panden.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe snel kan ik een energielabel krijgen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Label & Lens garandeert levering binnen 5 werkdagen. Bij spoed is het vaak mogelijk om het energielabel binnen 48 uur te regelen.",
        },
      },
      {
        "@type": "Question",
        name: "Welk energielabel is verplicht voor kantoren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kantoren zijn verplicht om minimaal energielabel C te hebben. Dit geldt voor kantoorgebouwen groter dan 100 m² die in gebruik zijn.",
        },
      },
    ],
  },
];

const faqs = [
  {
    question: "Wanneer is een energielabel verplicht?",
    answer:
      "Een energielabel is verplicht bij de verkoop of verhuur van een woning, oplevering van nieuwbouw, en bij bedrijfspanden en kantoren. Zonder geldig energielabel riskeert u een boete.",
  },
  {
    question: "Hoe hoog is de boete zonder energielabel?",
    answer:
      "Particulieren riskeren een boete tot €435 bij het ontbreken van een energielabel. Voor bedrijven liggen de boetes aanzienlijk hoger. De ILT (Inspectie Leefomgeving en Transport) handhaaft hierop.",
  },
  {
    question: "Zijn monumenten vrijgesteld van een energielabel?",
    answer:
      "Monumenten zijn tot 29 mei 2026 vrijgesteld van de energielabelplicht. Vanaf die datum wordt een energielabel ook verplicht voor monumentale panden.",
  },
  {
    question: "Hoe snel kan ik een energielabel krijgen?",
    answer:
      "Label & Lens garandeert levering binnen 5 werkdagen. Bij spoed is het vaak mogelijk om het energielabel binnen 48 uur te regelen.",
  },
  {
    question: "Welk energielabel is verplicht voor kantoren?",
    answer:
      "Kantoren zijn verplicht om minimaal energielabel C te hebben. Dit geldt voor kantoorgebouwen groter dan 100 m² die in gebruik zijn.",
  },
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

export default function EnergielabelVerplicht() {
  useSEO({
    title: "Energielabel Verplicht – Wanneer & Waarom? | Boete Voorkomen",
    description:
      "Wanneer is een energielabel verplicht? Bij verkoop en verhuur. Boete tot €435 zonder label. Leer wanneer u een energielabel nodig heeft en hoe u het snel regelt.",
    canonical: "/energielabel-verplicht",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero
        title="Energielabel Verplicht"
        subtitle="Wanneer heeft u een energielabel nodig? Voorkom boetes."
        imageSrc={heroImage}
        imageAlt="Amsterdamse grachtenpanden met energielabel"
      >
        <a href="/#homepage-selector">
          <Button
            data-testid="button-hero-aanvragen"
            size="lg"
            className="bg-primary text-primary-foreground border-2 border-primary-border px-8 text-lg font-semibold rounded-full"
          >
            Direct energielabel aanvragen
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
              <Shield className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Voorkom boetes</strong>
            </span>
          </div>
        </div>

        {/* Wanneer is een energielabel verplicht? */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Wanneer is een energielabel verplicht?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                In Nederland is een <strong>energielabel verplicht</strong> in verschillende situaties. Hieronder vindt u een compleet overzicht van alle gevallen waarin u een geldig energielabel nodig heeft.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Verkoop van een woning</strong>
                    <p className="text-sm text-muted-foreground">Bij de verkoop moet het energielabel uiterlijk bij de overdracht geregistreerd zijn bij EP-online.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Verhuur van een woning</strong>
                    <p className="text-sm text-muted-foreground">Bij nieuwe huurovereenkomsten is een geldig energielabel verplicht. Het label speelt ook een rol bij de WWS puntentelling.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Oplevering van nieuwbouw</strong>
                    <p className="text-sm text-muted-foreground">Bij oplevering van nieuwbouwwoningen wordt een energielabel verstrekt door de aannemer of projectontwikkelaar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Bedrijfspanden</strong>
                    <p className="text-sm text-muted-foreground">Ook bij de verkoop of verhuur van bedrijfspanden is een energielabel verplicht.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Kantoren (minimaal label C)</strong>
                    <p className="text-sm text-muted-foreground">Kantoorgebouwen groter dan 100 m² moeten minimaal energielabel C hebben. Zonder dit label mag het gebouw niet als kantoor worden gebruikt.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Monumentale panden (vanaf 29 mei 2026)</strong>
                    <p className="text-sm text-muted-foreground">Monumenten waren lang vrijgesteld, maar vanaf 29 mei 2026 wordt een energielabel ook voor monumentale panden verplicht.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Sociale huurwoningen (vanaf 2029 minimaal label D)</strong>
                    <p className="text-sm text-muted-foreground">Sociale huurwoningen moeten vanaf 2029 minimaal energielabel D hebben. Woningcorporaties bereiden zich hier nu al op voor.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </ScrollReveal>

        {/* Boetes bij ontbreken */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Boetes bij ontbreken van een energielabel
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Het ontbreken van een <strong>verplicht energielabel</strong> kan forse boetes opleveren. De handhaving is in handen van de ILT (Inspectie Leefomgeving en Transport).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Particulieren</h3>
                        <p className="text-sm text-muted-foreground">
                          Boete tot <strong className="text-foreground">€435</strong> bij het ontbreken van een energielabel bij verkoop of verhuur van een woning.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Bedrijven</h3>
                        <p className="text-sm text-muted-foreground">
                          Hogere boetes voor bedrijven en verhuurders die structureel geen energielabels laten registreren.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                <Scale className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Handhaving door ILT:</strong> De Inspectie Leefomgeving en Transport controleert actief of er een geldig energielabel aanwezig is bij verkoop- en huurtransacties. Bij overtredingen kan direct een boete worden opgelegd.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Uitzonderingen */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Uitzonderingen op de energielabelplicht
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Er zijn een aantal situaties waarin een energielabel <strong>niet verplicht</strong> is. Let op: deze uitzonderingen kunnen in de toekomst veranderen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Monumenten (tot 29 mei 2026)</strong>
                    <p className="text-sm text-muted-foreground">Rijksmonumenten en gemeentelijke monumenten zijn nog vrijgesteld tot 29 mei 2026. Daarna wordt een energielabel ook voor deze panden verplicht.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Beschermde stads- en dorpsgezichten (soms)</strong>
                    <p className="text-sm text-muted-foreground">In sommige gevallen kan een uitzondering gelden voor panden in beschermde stads- of dorpsgezichten. Dit is afhankelijk van de specifieke situatie.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Sloopbestemming</strong>
                    <p className="text-sm text-muted-foreground">Gebouwen met een officiële sloopbestemming zijn vrijgesteld van de energielabelplicht.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Niet-permanent gebruik</strong>
                    <p className="text-sm text-muted-foreground">Gebouwen die niet permanent worden gebruikt, zoals vakantiewoningen die minder dan 4 maanden per jaar worden bewoond, kunnen zijn vrijgesteld.</p>
                  </div>
                </li>
              </ul>
              <Card className="mt-6">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Twijfelt u of uw situatie onder een uitzondering valt? Neem{" "}
                    <a
                      href="https://wa.me/31643735719"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      contact op
                    </a>{" "}
                    en we helpen u graag verder.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* Hoe snel kunt u het regelen? */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Hoe snel kunt u het regelen?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bij Label &amp; Lens kunt u snel en zonder gedoe een <strong>energielabel laten opmaken</strong>. Wij begrijpen dat tijd vaak een belangrijke factor is, zeker bij verkoop of verhuur.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Bij spoed vaak binnen <strong className="text-foreground">48 uur</strong> geregeld</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Gegarandeerd binnen <strong className="text-foreground">5 werkdagen</strong> geregistreerd bij EP-online</span>
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">EPA-gecertificeerd en officieel geregistreerd</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Direct geldig voor verkoop, verhuur en andere doeleinden</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href="/#homepage-selector">
                  <Button
                    data-testid="button-snel-aanvragen"
                    size="lg"
                    className="bg-primary text-primary-foreground"
                  >
                    Direct aanvragen
                  </Button>
                </a>
                <a href="https://wa.me/31643735719" target="_blank" rel="noopener noreferrer">
                  <Button
                    data-testid="button-snel-whatsapp"
                    size="lg"
                    variant="outline"
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2" />
                    Spoed? WhatsApp ons
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Timeline card */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold mb-3">
                        Verkoop gepland? Regel het op tijd
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Wacht niet tot het laatste moment. Een energielabel is verplicht bij de overdracht en het is verstandig om dit ruim van tevoren te regelen. Zo voorkomt u stress en mogelijke vertragingen in het verkoopproces.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">2–4 weken voor de overdracht:</strong> Ideaal moment om het energielabel aan te vragen
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">1 week voor de overdracht:</strong> Nog steeds mogelijk, maar plan direct in
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Laatste moment:</strong> Neem contact op voor spoedopties
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tip: ook bij verhuur is het verstandig om het energielabel op tijd te regelen. Het label speelt een rol bij de{" "}
                        <Link
                          href="/wws-puntentelling"
                          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                        >
                          WWS puntentelling
                        </Link>{" "}
                        en bepaalt mede de maximale huurprijs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Veelgestelde vragen over het verplichte energielabel
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
          <section className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Voorkom boetes — regel uw energielabel vandaag
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Zet direct uw opdracht uit via het opdrachtvenster of neem persoonlijk contact op.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
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
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
