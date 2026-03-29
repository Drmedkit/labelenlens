import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Clock, Shield, ChevronDown, ChevronUp, BadgeCheck, Home, Lightbulb } from "lucide-react";
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
      "Energielabel voor uw woning aanvragen. EPA-gecertificeerd, officieel geregistreerd bij EP-online en gegarandeerd binnen 5 werkdagen.",
    priceRange: "€€",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is een energielabel verplicht voor mijn woning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, bij verkoop of verhuur van een woning is een geldig energielabel wettelijk verplicht. Zonder energielabel riskeert u een boete van €435.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe lang is een energielabel voor een woning geldig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een energielabel is 10 jaar geldig na registratie bij EP-online. Na deze periode moet u een nieuw energielabel laten opmaken.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik het energielabel van mijn woning verbeteren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, door energiebesparende maatregelen te nemen zoals betere isolatie, HR++ glas, een warmtepomp of zonnepanelen kunt u een beter energielabel krijgen. Label & Lens geeft advies op maat over de meest effectieve verbeteringen.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kost een energielabel voor een woning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De kosten hangen af van het aantal vierkante meters van uw woning. Via de prijscalculator op de website berekent u binnen één minuut de prijs voor uw specifieke woning.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe verloopt de opname voor het energielabel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een EPA-gecertificeerde adviseur komt langs om de woning op te nemen. Hierbij worden onder andere de isolatie, verwarmingsinstallatie, ventilatie en eventuele duurzame energiebronnen beoordeeld. De opname duurt gemiddeld 30 tot 60 minuten.",
        },
      },
    ],
  },
];

const faqs = [
  {
    question: "Is een energielabel verplicht voor mijn woning?",
    answer:
      "Ja, bij verkoop of verhuur van een woning is een geldig energielabel wettelijk verplicht. Zonder energielabel riskeert u een boete van €435.",
  },
  {
    question: "Hoe lang is een energielabel voor een woning geldig?",
    answer:
      "Een energielabel is 10 jaar geldig na registratie bij EP-online. Na deze periode moet u een nieuw energielabel laten opmaken.",
  },
  {
    question: "Kan ik het energielabel van mijn woning verbeteren?",
    answer:
      "Ja, door energiebesparende maatregelen te nemen zoals betere isolatie, HR++ glas, een warmtepomp of zonnepanelen kunt u een beter energielabel krijgen. Label & Lens geeft advies op maat over de meest effectieve verbeteringen.",
  },
  {
    question: "Wat kost een energielabel voor een woning?",
    answer:
      "De kosten hangen af van het aantal vierkante meters van uw woning. Via de prijscalculator op de website berekent u binnen één minuut de prijs voor uw specifieke woning.",
  },
  {
    question: "Hoe verloopt de opname voor het energielabel?",
    answer:
      "Een EPA-gecertificeerde adviseur komt langs om de woning op te nemen. Hierbij worden onder andere de isolatie, verwarmingsinstallatie, ventilatie en eventuele duurzame energiebronnen beoordeeld. De opname duurt gemiddeld 30 tot 60 minuten.",
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

export default function EnergielabelWoning() {
  useSEO({
    title: "Energielabel Woning – Alles Wat U Moet Weten",
    description:
      "Energielabel voor uw woning aanvragen? Verplicht bij verkoop en verhuur. Leer wat een energielabel inhoudt, hoe de opname werkt en hoe u uw label kunt verbeteren.",
    canonical: "/energielabel-woning",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero
        title="Energielabel voor uw Woning"
        subtitle="Verplicht bij verkoop en verhuur – geldig voor 10 jaar"
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
              <Check className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Geldig voor verkoop &amp; verhuur</strong>
            </span>
          </div>
        </div>

        {/* Wat is een energielabel? */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Wat is een energielabel?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Een <strong>energielabel voor een woning</strong> geeft aan hoe energiezuinig uw huis is. Het label loopt van <strong>A++++</strong> (zeer zuinig) tot <strong>G</strong> (zeer onzuinig) en is gebaseerd op de energieprestatie van de woning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Het energielabel wordt bepaald aan de hand van verschillende factoren:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex gap-3 items-start">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Isolatie</h3>
                    <p className="text-sm text-muted-foreground">Dak-, gevel-, vloer- en glasisolatie bepalen hoeveel warmte de woning vasthoudt.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Verwarming</h3>
                    <p className="text-sm text-muted-foreground">Het type verwarmingsinstallatie en de leeftijd ervan hebben invloed op het label.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Ventilatie</h3>
                    <p className="text-sm text-muted-foreground">Mechanische ventilatie met warmteterugwinning draagt bij aan een beter label.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Duurzame energie</h3>
                    <p className="text-sm text-muted-foreground">Zonnepanelen, een warmtepomp of zonneboiler verbeteren de energieprestatie aanzienlijk.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Wanneer energielabel nodig? */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Wanneer heeft u een energielabel nodig?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Een <strong>energielabel is wettelijk verplicht</strong> in de volgende situaties:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Bij verkoop</h3>
                    <p className="text-sm text-muted-foreground">Bij de verkoop van uw woning bent u verplicht een geldig energielabel te overhandigen aan de koper. Dit moet uiterlijk bij de overdracht beschikbaar zijn.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Bij verhuur</h3>
                    <p className="text-sm text-muted-foreground">Ook bij het verhuren van een woning is een energielabel verplicht. Het label speelt bovendien een rol bij de maximale huurprijs via het WWS-puntenstelsel.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Bij nieuwbouw oplevering</h3>
                    <p className="text-sm text-muted-foreground">Bij oplevering van nieuwbouw moet een energielabel worden geregistreerd. Dit gebeurt op basis van de EPC-berekening uit het bouwproces.</p>
                  </div>
                </li>
              </ul>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Let op:</strong> Zonder geldig energielabel bij verkoop of verhuur riskeert u een boete van <strong className="text-foreground">€435</strong>. Zorg dat u dit op tijd regelt om vertraging en kosten te voorkomen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* Hoe wordt het energielabel bepaald? */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Hoe wordt het energielabel bepaald?
              </h2>
              <p className="text-muted-foreground mb-6">
                Het energielabel wordt bepaald door een EPA-gecertificeerde adviseur in een aantal stappen:
              </p>
              <ol className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "Opname van de woning",
                    text: "Een gecertificeerde adviseur komt langs voor een uitgebreide opname. Hierbij worden alle relevante kenmerken van de woning geïnspecteerd en vastgelegd.",
                  },
                  {
                    step: "2",
                    title: "Beoordeling isolatie en installaties",
                    text: "De isolatiewaarden van dak, gevel, vloer en glas worden beoordeeld. Daarnaast worden de verwarmingsinstallatie, ventilatie en eventuele duurzame energiebronnen in kaart gebracht.",
                  },
                  {
                    step: "3",
                    title: "Berekening energieprestatie",
                    text: "Op basis van de verzamelde gegevens wordt de energieprestatie berekend met de officiële NTA 8800 methode. Dit bepaalt welk energielabel de woning krijgt.",
                  },
                  {
                    step: "4",
                    title: "Registratie bij EP-online",
                    text: "Het energielabel wordt officieel geregistreerd bij EP-online, de landelijke database. Vanaf dat moment is het label 10 jaar geldig en direct bruikbaar voor verkoop of verhuur.",
                  },
                ].map(({ step, title, text }) => (
                  <li key={step} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {step}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-semibold mb-1">{title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </ScrollReveal>

        {/* Energielabel en woningwaarde */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Energielabel en woningwaarde
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Het energielabel heeft een directe invloed op de waarde van uw woning. Een <strong>beter energielabel</strong> betekent lagere energiekosten voor de bewoner, wat de woning aantrekkelijker maakt voor kopers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Uit onderzoek blijkt dat woningen met een <strong>energielabel A+ of hoger</strong> gemiddeld sneller verkopen en een hogere verkoopprijs opleveren. Kopers zijn bereid meer te betalen voor een energiezuinige woning, omdat ze weten dat de maandelijkse energielasten lager zijn.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Energiezuinige woningen verkopen gemiddeld sneller</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Een beter label verhoogt de verkoopwaarde</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Lagere energielasten maken de woning aantrekkelijker</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Bij verhuur bepaalt het label mede de maximale huurprijs</span>
                </li>
              </ul>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Wilt u weten hoe u het energielabel van uw woning kunt verbeteren? Label &amp; Lens geeft bij elke opname een{" "}
                    <Link
                      href="/energielabels"
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      verbeteradvies
                    </Link>{" "}
                    op maat, zodat u precies weet welke maatregelen het meest effectief zijn.
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
                Veelgestelde vragen over het energielabel voor woningen
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
                Energielabel voor uw woning aanvragen?
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
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
