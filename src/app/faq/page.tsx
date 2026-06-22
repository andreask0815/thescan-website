import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQ – The Scan",
  description: "Ihre Fragen, unsere Antworten rund um Remote Scanning.",
};

const faqs = [
  {
    question: "Ist das rechtlich erlaubt?",
    answer:
      "Ja. Radiologietechnologen sind berechtigt, MRT und alle anderen radiologischen Untersuchungen durchzuführen — gemäß MTD-Gesetz. Wir arbeiten ausschließlich mit zertifizierten Fachkräften mit mindestens 3 Jahren Berufserfahrung.",
  },
  {
    question: "Was passiert im Notfall?",
    answer:
      "Mit jedem Kunden werden individuelle Notfall-SOPs erarbeitet. Schulungen werden intern durchgeführt oder durch unseren Referentinnen-Pool bereitgestellt.",
  },
  {
    question: "Ich brauche trotzdem jemanden vor Ort?",
    answer:
      "Ja, für Administration und Geräteassistenz. Mit angepassten Protokollen können bis zu zwei Geräte parallel betrieben werden.",
  },
  {
    question: "Ich möchte das Personal kennen. Ist das möglich?",
    answer:
      "Selbstverständlich. Nach Kontaktaufnahme und vertraglicher Klärung werden Ihnen die Remote Scanner persönlich vorgestellt. Wir prüfen alle Zertifikate und fördern kontinuierliche Weiterbildung.",
  },
  {
    question: "Mein Personal ist gegen Remote Scanning. Dann hat das keinen Sinn, oder?",
    answer:
      "Wir bieten ein kostenloses Erstgespräch an. Remote Scanning ist als Absicherung und Entlastung positioniert — nicht als Jobersatz. Unser Changemanagement umfasst vollständige Personalschulung und Begleitung.",
  },
  {
    question: "Welche Vorteile bringt Remote Scanning?",
    answer:
      "Ausfallsicherheit durch unseren Mitarbeiterpool, verbesserte Scan-Qualität, Unterstützung für lokales Personal, Parallelbetrieb von bis zu zwei Geräten und Zugang zu Personal ohne Pendelzeiten.",
  },
  {
    question: "Liefern Sie auch die Technik?",
    answer:
      "Nein, aber wir koordinieren die Implementierung, pflegen Kontakte zu Anbietern und übernehmen technische Überwachung und Kommunikation bei Problemen.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Ihre Fragen, unsere Antworten.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[800px] px-6">
          <Accordion items={faqs} />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Noch Fragen? Wir sind für Sie da.
          </h2>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
