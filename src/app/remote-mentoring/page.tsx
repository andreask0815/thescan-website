import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Remote Mentoring – The Scan",
  description:
    "Ihre Radiologietechnolog*innen wachsen über sich hinaus. Remote Mentoring für spezielle Scans.",
};

export default function RemoteMentoring() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1600&q=80"
            alt="Radiologie-Bildschirm mit Scans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative py-28 md:py-40">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Remote Mentoring
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
              Ihre Radiologietechnolog*innen wachsen über sich hinaus. Jederzeit.
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Der Patient benötigt einen speziellen Scan und das Personal ist
              noch nicht fertig eingeschult? Expert*innen loggen sich remote ein
              und unterstützen Ihr Team vor Ort.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <VideoSection
        title="Remote Mentoring in Aktion"
        subtitle="So unterstützen unsere Expert*innen Ihr Team bei speziellen Untersuchungen."
        posterImage="https://images.unsplash.com/photo-1664303506610-f80b16db0c3d?w=1600&q=80"
      />

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-4">
            Für Ihre Radiologietechnolog*innen
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Unterstützung bei speziellen Scans — der Live-Betrieb bleibt
            ungestört.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Live-Unterstützung",
                text: "Expert*innen begleiten Ihr Team in Echtzeit bei komplexen Untersuchungen — direkt am Gerät.",
                image:
                  "https://images.unsplash.com/photo-1666214277767-b8c2a7b4c064?w=800&q=80",
              },
              {
                title: "Flexible Expertise",
                text: "Zugang zu Spezialist*innen für alle Untersuchungsarten — ohne zusätzliche Festanstellungen.",
                image:
                  "https://images.unsplash.com/photo-1581595220921-eec2071e5159?w=800&q=80",
              },
              {
                title: "Kompetenzaufbau",
                text: "Ihr Team lernt im laufenden Betrieb und wird langfristig für zukünftige Untersuchungsarten fit.",
                image:
                  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white overflow-hidden"
              >
                <div className="relative h-44">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {card.text}
                  </p>
                </div>
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
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Vereinbaren Sie Ihr Gespräch. Kostenfrei und risikofrei.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Terminvereinbarung
          </Link>
        </div>
      </section>
    </>
  );
}
