import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Projektmanagement – The Scan",
  description:
    "Wir führen Ihr Remote Projekt zum Erfolg. Remote Scanning & Mentoring professionell eingeführt.",
};

export default function Projektmanagement() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80"
            alt="Medizinisches Team bei der Besprechung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative py-28 md:py-40">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Projektmanagement Remote Technologie
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
              Wir führen Ihr Remote Projekt zum Erfolg.
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
              Remote Scanning & Mentoring professionell eingeführt. Sie
              entscheiden: nur den Input — oder eine Done-for-you Lösung.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Gespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <VideoSection
        title="Projektmanagement für Ihre Radiologie"
        subtitle="Vom Erstgespräch bis zum laufenden Betrieb — wir begleiten Sie."
        posterImage="https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?w=1600&q=80"
      />

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-16">
            Ihren Betrieb qualitativ hochwertig und effizient gestalten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Beratung & Analyse",
                text: "Wir analysieren Ihre aktuelle Situation und entwickeln einen maßgeschneiderten Plan für die Remote-Integration.",
              },
              {
                title: "Implementierung",
                text: "Viele Technologien sind bereits installiert, werden aber nicht genutzt. Wir aktivieren Ihr volles Potenzial.",
              },
              {
                title: "Change Management",
                text: "Wir begleiten Ihr Team durch den Veränderungsprozess — mit Schulung, Kommunikation und Unterstützung.",
              },
              {
                title: "Laufender Betrieb",
                text: "Auch nach der Einführung stehen wir Ihnen als Partner zur Seite — für einen reibungslosen Betrieb.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Wir helfen sofort. Unkompliziert, ehrlich und direkt.
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
