import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Scan Club – The Scan",
  description:
    "Netzwerk für Radiologietechnolog*innen aus dem EU-Raum. Community, Weiterbildung und Karriere.",
};

const tiers = [
  {
    name: "Student & Beginner",
    price: "Kostenlos",
    features: ["Networking", "Wöchentliche Inhalte", "Community-Zugang"],
  },
  {
    name: "The Scan Basis",
    price: "€5/Monat",
    features: [
      "Community-Zugang",
      "Wöchentliche WhatsApp-Updates",
      "Basis-Networking",
    ],
  },
  {
    name: "The Scan Premium",
    price: "€20–30/Monat",
    features: [
      "Monatliche Online-Sessions",
      "Event-Informationen",
      "Jährliches Wien-Meetup",
    ],
    highlighted: true,
  },
  {
    name: "The Scan Mastermind",
    price: "€80–220/Monat",
    features: [
      "Expert Coaching",
      "Sparring Sessions",
      "Karriereberatung",
    ],
  },
  {
    name: "Management Club",
    price: "€100/Monat",
    features: [
      "Für Führungspositionen",
      "Karriere-Support",
      "Leadership-Netzwerk",
    ],
  },
  {
    name: "Unternehmer Club",
    price: "€100/Monat",
    features: [
      "Für Unternehmer*innen",
      "Business Scaling Support",
      "Strategische Beratung",
    ],
  },
];

export default function Club() {
  return (
    <>
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            The Scan Club
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
            Netzwerk für Radiologietechnolog*innen aus dem EU-Raum.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Motivation, Wertschätzung und neue Möglichkeiten — durch Networking
            und professionelle Weiterbildung.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-8 ${
                  t.highlighted
                    ? "bg-foreground text-white"
                    : "bg-surface"
                }`}
              >
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <div className="mt-2 text-2xl font-semibold">{t.price}</div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm ${
                        t.highlighted ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Werde Club Member
          </h2>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Mitglied werden
          </Link>
        </div>
      </section>
    </>
  );
}
