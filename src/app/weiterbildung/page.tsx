import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Weiterbildung & Kurse – The Scan",
  description:
    "Fit für die Zukunft — praxisnah und anwendungsorientiert. Fortbildungen für Radiologietechnolog*innen.",
};

const courses = [
  {
    title: "Werde Remote Scanner",
    description:
      "Schulung zu Technologien und Kommunikation im Remote Scanning. Lernen Sie die Tools und Workflows, die Sie für den Remote-Betrieb brauchen.",
    image:
      "https://images.unsplash.com/photo-1666214275172-ccc3b98e5519?w=800&q=80",
  },
  {
    title: "Patientensicherheit im MRT",
    description:
      "Vermittlung von Wissen über Gefahren und Schutzmaßnahmen. Für alle, die ihre MRT-Sicherheitskompetenz vertiefen möchten.",
    image:
      "https://images.unsplash.com/photo-1681843039768-0e22b7a031d5?w=800&q=80",
  },
  {
    title: "Stark in der Führung",
    description:
      "3-Monats-Einzelcoaching für Führungskräfte im 1:1-Format. Für alle, die ihre Führungsrolle aktiv gestalten möchten.",
    image:
      "https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?w=800&q=80",
  },
];

export default function Weiterbildung() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1673953509975-576678fa6710?w=1600&q=80"
            alt="Radiologie-Fortbildung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative py-28 md:py-40">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Weiterbildungen & Kurse
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
              Fit für die Zukunft — praxisnah und anwendungsorientiert.
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Für Ihren Erfolg im Medizinbereich. Medizinische
              Gesundheitsberufe dürfen und sollen sich regelmäßig fortbilden. Wir
              bieten mit Kooperationspartnern ein breites Portfolio.
            </p>
          </div>
        </div>
      </section>

      <VideoSection
        title="Weiterbildung, die wirkt"
        subtitle="Praxisnahe Kurse für Radiologietechnolog*innen — von Expert*innen geleitet."
        posterImage="https://images.unsplash.com/photo-1658506655357-8713cf0c6b69?w=1600&q=80"
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-surface overflow-hidden"
              >
                <div className="relative h-44">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Du hast was passendes gefunden?
          </h2>
          <p className="mt-2 text-muted">Dann tritt mit uns in Kontakt.</p>
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
