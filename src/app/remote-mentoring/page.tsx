import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remote Mentoring – The Scan",
  description:
    "Ihre Radiologietechnolog*innen wachsen über sich hinaus. Remote Mentoring für spezielle Scans.",
};

export default function RemoteMentoring() {
  return (
    <>
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Remote Mentoring
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Ihre Radiologietechnolog*innen wachsen über sich hinaus. Jederzeit.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            Der Patient benötigt einen speziellen Scan und das Personal ist noch
            nicht fertig eingeschult? Expert*innen loggen sich remote ein und
            unterstützen Ihr Team vor Ort.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>

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
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold">Live-Unterstützung</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Expert*innen begleiten Ihr Team in Echtzeit bei komplexen
                Untersuchungen — direkt am Gerät.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold">Flexible Expertise</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Zugang zu Spezialist*innen für alle Untersuchungsarten — ohne
                zusätzliche Festanstellungen.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold">Kompetenzaufbau</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Ihr Team lernt im laufenden Betrieb und wird langfristig für
                zukünftige Untersuchungsarten fit.
              </p>
            </div>
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
