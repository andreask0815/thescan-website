import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projektmanagement – The Scan",
  description:
    "Wir führen Ihr Remote Projekt zum Erfolg. Remote Scanning & Mentoring professionell eingeführt.",
};

export default function Projektmanagement() {
  return (
    <>
      <section className="py-24 md:py-36">
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
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-16">
            Unser Ziel: Ihren Betrieb qualitativ hochwertig und effizient
            gestalten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold">Beratung & Analyse</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wir analysieren Ihre aktuelle Situation und entwickeln einen
                maßgeschneiderten Plan für die Remote-Integration.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold">Implementierung</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Viele Technologien sind bereits installiert, werden aber nicht
                genutzt. Wir aktivieren Ihr volles Potenzial.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold">Change Management</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Wir begleiten Ihr Team durch den Veränderungsprozess — mit
                Schulung, Kommunikation und Unterstützung.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold">Laufender Betrieb</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Auch nach der Einführung stehen wir Ihnen als Partner zur
                Seite — für einen reibungslosen Betrieb.
              </p>
            </div>
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
