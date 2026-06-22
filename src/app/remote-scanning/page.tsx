import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remote Scanning – The Scan",
  description:
    "Ihre Geräte laufen — auch wenn Ihr Team nicht kann. Remote Scanning für Radiologien.",
};

const pillars = [
  {
    title: "Qualität ist kein Zufall",
    text: "Wir arbeiten mit standardisierten SOPs — jeder Scan folgt definierten Qualitätsstandards.",
  },
  {
    title: "Notfallmanagement",
    text: "Ein Grundpfeiler unserer Arbeit. Individuelle Notfall-SOPs werden mit Ihnen gemeinsam erarbeitet.",
  },
  {
    title: "Keine anonyme Plattform",
    text: "Sie kennen Ihre Remote Scanner persönlich. Wir stellen jeden einzelnen vor.",
  },
  {
    title: "Rechtliche Absicherung",
    text: "Externe juristische Unterstützung stellt sicher, dass alles gesetzeskonform abläuft.",
  },
  {
    title: "Technik-Implementierung",
    text: "Die Implementierung der benötigten Technik übernehmen wir für Sie.",
  },
];

export default function RemoteScanning() {
  return (
    <>
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Remote Scanning
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Ihre Geräte laufen — auch wenn Ihr Team nicht kann.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            Qualifizierte Radiologietechnologen bedienen Ihre Geräte wie MRT
            ferngesteuert — ohne vor Ort zu sein. Ausfallsicherheit auf High
            Level.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Kennenlerntermin vereinbaren
          </Link>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-16">
            Unsere fünf Säulen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-8">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ausfallsicherheit für Ihre Radiologie auf High Level
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed">
            Mit unserem Pool an geprüften Radiologietechnolog*innen mit
            mindestens 3 Jahren Erfahrung sichern Sie Ihren Betrieb ab — auch an
            Randzeiten und bei kurzfristigen Ausfällen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Terminvereinbarung
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Häufige Fragen &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
