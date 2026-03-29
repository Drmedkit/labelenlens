import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Clock, ChevronDown, ChevronUp, BadgeCheck, TrendingUp, Leaf, Sun } from "lucide-react";
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
        name: "Hoeveel labelstappen kan ik verbeteren?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dat hangt af van de huidige staat van de woning en de maatregelen die je neemt. Met een combinatie van isolatie, HR-glas en zonnepanelen is een verbetering van 2 tot 4 labelstappen realistisch.",
        },
      },
      {
        "@type": "Question",
        name: "Welke maatregel heeft het meeste effect op mijn energielabel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dakisolatie en gevelisolatie hebben doorgaans het grootste effect. De exacte impact hangt af van de huidige isolatiewaarden van jouw woning.",
        },
      },
      {
        "@type": "Question",
        name: "Moet ik een nieuw energielabel aanvragen na verbeteringen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, na het doorvoeren van verbeteringen moet een EPA-adviseur opnieuw langskomen om de woning op te nemen. Pas daarna wordt het nieuwe label geregistreerd bij EP-online.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kost het adviesrapport van Label & Lens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Het adviesrapport kost €120 en bevat een persoonlijk overzicht van de meest effectieve maatregelen voor jouw woning, inclusief geschatte kosten en terugverdientijd.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik subsidie krijgen voor energiebesparende maatregelen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, er zijn diverse subsidies beschikbaar zoals de ISDE-subsidie voor warmtepompen en isolatie. In het adviesrapport worden de mogelijkheden voor jouw situatie besproken.",
        },
      },
    ],
  },
];

const faqs = [
  {
    question: "Hoeveel labelstappen kan ik verbeteren?",
    answer:
      "Dat hangt af van de huidige staat van de woning en de maatregelen die je neemt. Met een combinatie van isolatie, HR-glas en zonnepanelen is een verbetering van 2 tot 4 labelstappen realistisch.",
  },
  {
    question: "Welke maatregel heeft het meeste effect op mijn energielabel?",
    answer:
      "Dakisolatie en gevelisolatie hebben doorgaans het grootste effect. De exacte impact hangt af van de huidige isolatiewaarden van jouw woning.",
  },
  {
    question: "Moet ik een nieuw energielabel aanvragen na verbeteringen?",
    answer:
      "Ja, na het doorvoeren van verbeteringen moet een EPA-adviseur opnieuw langskomen om de woning op te nemen. Pas daarna wordt het nieuwe label geregistreerd bij EP-online.",
  },
  {
    question: "Wat kost het adviesrapport van Label & Lens?",
    answer:
      "Het adviesrapport kost €120 en bevat een persoonlijk overzicht van de meest effectieve maatregelen voor jouw woning, inclusief geschatte kosten en terugverdientijd.",
  },
  {
    question: "Kan ik subsidie krijgen voor energiebesparende maatregelen?",
    answer:
      "Ja, er zijn diverse subsidies beschikbaar zoals de ISDE-subsidie voor warmtepompen en isolatie. In het adviesrapport worden de mogelijkheden voor jouw situatie besproken.",
  },
];

const benefits = [
  {
    icon: <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Hogere woningwaarde",
    text: "Een beter energielabel verhoogt de marktwaarde van je woning aanzienlijk.",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Lagere energiekosten",
    text: "Betere isolatie en efficiëntere installaties zorgen voor een lagere energierekening.",
  },
  {
    icon: <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Beter voor het milieu",
    text: "Minder energieverbruik betekent een lagere CO₂-uitstoot en een kleinere ecologische voetafdruk.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Hogere maximale huurprijs",
    text: "Voor verhuurders: een beter energielabel levert meer WWS-punten op en dus een hogere toegestane huurprijs.",
  },
  {
    icon: <Sun className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
    title: "Comfortabeler wonen",
    text: "Betere isolatie zorgt voor minder tocht, een gelijkmatige temperatuur en minder geluidsoverlast.",
  },
];

const maatregelen = [
  {
    title: "Dakisolatie",
    description: "Groot effect — het dak is verantwoordelijk voor een groot deel van het warmteverlies.",
    detail: "Streefwaarde: Rc ≥ 6.3 m²K/W",
  },
  {
    title: "Vloerisolatie",
    description: "Voorkomt warmteverlies via de begane grondvloer.",
    detail: "Streefwaarde: Rc ≥ 3.5 m²K/W",
  },
  {
    title: "Gevelisolatie / spouwmuurisolatie",
    description: "Vermindert warmteverlies via de buitenmuren aanzienlijk.",
    detail: "Spouwmuurisolatie is vaak relatief eenvoudig en betaalbaar uit te voeren.",
  },
  {
    title: "HR++ of triple glas",
    description: "Vervanging van enkel of dubbel glas door hoogrendementsglas maakt een groot verschil.",
    detail: "Triple glas biedt de beste isolatiewaarde, HR++ is de gangbare standaard.",
  },
  {
    title: "Warmtepomp of hybride warmtepomp",
    description: "Een warmtepomp verwarmt efficiënter dan een traditionele cv-ketel.",
    detail: "Een hybride warmtepomp combineert een warmtepomp met een bestaande HR-ketel.",
  },
  {
    title: "Zonnepanelen",
    description: "Opwekking van eigen energie telt mee voor het energielabel.",
    detail: "Hoe meer panelen, hoe groter het effect op het label.",
  },
  {
    title: "Mechanische ventilatie met warmteterugwinning (WTW)",
    description: "Ventileert de woning zonder warmteverlies.",
    detail: "Vooral effectief in combinatie met goede isolatie.",
  },
  {
    title: "Zonneboiler",
    description: "Verwarmt water met zonne-energie en verlaagt het gasverbruik.",
    detail: "Vooral effectief in combinatie met zonnepanelen.",
  },
];

const labelTrajecten = [
  {
    van: "G",
    naar: "D",
    maatregelen: "Isolatie + HR-ketel",
    investering: "±€5.000 – €10.000",
    colorVan: "bg-red-600",
    colorNaar: "bg-orange-500",
  },
  {
    van: "D",
    naar: "B",
    maatregelen: "HR++ glas + vloerisolatie",
    investering: "±€5.000 – €15.000",
    colorVan: "bg-orange-500",
    colorNaar: "bg-lime-500",
  },
  {
    van: "B",
    naar: "A",
    maatregelen: "Zonnepanelen + warmtepomp",
    investering: "±€10.000 – €20.000",
    colorVan: "bg-lime-500",
    colorNaar: "bg-green-600",
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

export default function EnergielabelVerbeteren() {
  useSEO({
    title: "Energielabel Verbeteren – Tips & Advies voor een Beter Label",
    description:
      "Energielabel verbeteren? Ontdek welke maatregelen het meeste effect hebben: isolatie, HR-glas, zonnepanelen. Persoonlijk adviesrapport voor €120.",
    canonical: "/energielabel-verbeteren",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Hero
        title="Energielabel Verbeteren"
        subtitle="Van label G naar A? Ontdek welke maatregelen het meeste effect hebben."
        imageSrc={heroImage}
        imageAlt="Amsterdamse grachtenpanden met energielabel verbetering"
      >
        <a href="/#homepage-selector">
          <Button
            data-testid="button-hero-advies"
            size="lg"
            className="bg-primary text-primary-foreground border-2 border-primary-border px-8 text-lg font-semibold rounded-full"
          >
            Adviesrapport aanvragen
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
              <TrendingUp className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Persoonlijk advies</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-primary" />
              <strong className="text-foreground">Adviesrapport voor €120</strong>
            </span>
          </div>
        </div>

        {/* Waarom verbeteren */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Waarom uw energielabel verbeteren?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Een beter <strong>energielabel</strong> levert meer op dan je denkt. Niet alleen bespaar je op energiekosten, maar je verhoogt ook de waarde van je woning en draagt bij aan een duurzamere toekomst.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map(({ icon, title, text }) => (
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

        {/* Meest effectieve maatregelen */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Meest effectieve maatregelen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hieronder staan de maatregelen die het meeste effect hebben op je energielabel, gerangschikt op impact.
              </p>
              <ol className="space-y-5">
                {maatregelen.map(({ title, description, detail }, index) => (
                  <li key={title} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                      <p className="text-muted-foreground text-xs mt-1 italic">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </ScrollReveal>

        {/* Van welk label naar welk label */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Van welk label naar welk label?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Elke woning is anders, maar hieronder staan veelvoorkomende verbetertrajecten met een indicatie van de investering.
              </p>
              <div className="space-y-4">
                {labelTrajecten.map(({ van, naar, maatregelen: maat, investering, colorVan, colorNaar }) => (
                  <Card key={`${van}-${naar}`}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`${colorVan} text-white font-bold text-lg w-10 h-10 rounded-lg flex items-center justify-center`}>
                          {van}
                        </span>
                        <span className="text-muted-foreground font-medium">→</span>
                        <span className={`${colorNaar} text-white font-bold text-lg w-10 h-10 rounded-lg flex items-center justify-center`}>
                          {naar}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Maatregelen:</strong> {maat}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong className="text-foreground">Indicatie investering:</strong> {investering}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                De exacte kosten en het resultaat hangen af van de staat en het type woning. Een adviesrapport geeft een persoonlijk overzicht.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Adviesrapport aanvragen */}
        <ScrollReveal>
          <section className="py-12 md:py-16 bg-card border-y border-card-border">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Adviesrapport aanvragen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wil je weten welke maatregelen voor jouw woning het meeste effect hebben? Label &amp; Lens biedt een <strong>persoonlijk adviesrapport</strong> aan voor <strong>€120</strong>. Hierin staat precies beschreven:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Welke maatregelen het meeste effect hebben op jouw label</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Een indicatie van de kosten per maatregel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">De verwachte labelverbetering na uitvoering</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Advies over beschikbare subsidies</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Na de opname ontvang je een helder rapport waarmee je direct aan de slag kunt. Het adviesrapport kan ook gecombineerd worden met het aanvragen van een{" "}
                <Link
                  href="/energielabel"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  energielabel
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/#homepage-selector">
                  <Button
                    data-testid="button-adviesrapport-aanvragen"
                    size="lg"
                    className="bg-primary text-primary-foreground"
                  >
                    Adviesrapport aanvragen
                  </Button>
                </a>
                <a href="https://wa.me/31643735719" target="_blank" rel="noopener noreferrer">
                  <Button
                    data-testid="button-adviesrapport-whatsapp"
                    size="lg"
                    variant="outline"
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2" />
                    Vraag stellen via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <section className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Veelgestelde vragen over energielabel verbeteren
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
                  data-testid="link-faq-meer-vragen"
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
                Energielabel verbeteren? Begin met een adviesrapport.
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Vraag een persoonlijk adviesrapport aan voor €120 en ontdek welke maatregelen het meeste opleveren voor jouw woning.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/#homepage-selector">
                  <Button
                    data-testid="button-cta-aanvragen"
                    size="lg"
                    className="bg-primary text-primary-foreground px-8"
                  >
                    Adviesrapport aanvragen
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
