import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

const services = [
  {
    title: "Sicherheit bei Personalausfall",
    description:
      "Mit Remote Scanning bleibt der Betrieb am Laufen — auch wenn Ihr Team ausfällt.",
    href: "/remote-scanning",
    image:
      "https://images.unsplash.com/photo-1666214280352-db292c05fd80?w=800&q=80",
  },
  {
    title: "High Quality Scanning & Mentoring",
    description:
      "Expert*innen unterstützen Ihr Team remote bei speziellen Scans und Weiterbildung.",
    href: "/remote-mentoring",
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
  },
  {
    title: "Projektmanagement für Radiologien",
    description:
      "Wir führen Ihr Remote Projekt zum Erfolg — sorgenfrei und professionell.",
    href: "/projektmanagement",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
  {
    title: "Weiterbildung und Community",
    description:
      "Kurse, Netzwerk und Karrieremöglichkeiten für Radiologietechnolog*innen.",
    href: "/club",
    image:
      "https://images.unsplash.com/photo-1587557983735-f05198060b52?w=800&q=80",
  },
];

const problems = [
  {
    problem: "Personalausfall",
    detail: "Wenn ein/e Radiologietechnolog*in ausfällt, steht der Betrieb.",
    solution: "Mit Remote Scanning bleibt der Betrieb am Laufen.",
  },
  {
    problem: "Begrenzte Öffnungszeiten",
    detail: "Randzeiten bleiben ungenutzt — Kapazität geht verloren.",
    solution: "Remote Personal ermöglicht unkomplizierte Erweiterungen.",
  },
  {
    problem: "Wirtschaftlichkeitsdruck",
    detail: "Wirtschaftlichkeit unklar — lohnt sich die Investition?",
    solution: "Unser kostenloser Wirtschaftlichkeitsrechner gibt Klarheit.",
  },
];

const steps = [
  { nr: "01", title: "Kostenloses Erstgespräch" },
  { nr: "02", title: "Wirtschaftlichkeit prüfen" },
  { nr: "03", title: "Rechtliche Absicherung" },
  { nr: "04", title: "Projektphase" },
  { nr: "05", title: "Change Management" },
  { nr: "06", title: "Betrieb" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1663047674926-3e35e511c80e?w=1600&q=80"
            alt="MRT-Gerät in moderner Radiologie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative py-28 md:py-40">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Mehr Scans. Weniger Risiko.
              <br />
              <span className="text-muted">Alles abgesichert.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Ihr remote Betrieb mit geprüften Radiologietechnologen. Sicher,
              wirtschaftlich, sofort einsatzbereit.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
              >
                Terminvereinbarung
              </Link>
              <Link
                href="/remote-scanning"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Mehr erfahren &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl bg-white overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative h-52">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-block text-sm text-accent">
                    Mehr erfahren &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
            Was Radiologen täglich beschäftigt
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto">
            Remote Scanning funktioniert. Wir beweisen es.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {problems.map((p) => (
              <div key={p.problem}>
                <div className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
                  {p.problem}
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {p.detail}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm font-medium leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1666214280165-20e3d73d70bf?w=1600&q=80"
          alt="Radiologie-Arbeitsplatz mit Monitoren"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Persönlich. Keine anonyme Plattform.
            </p>
            <p className="mt-2 text-white/70 max-w-lg">
              Erfahrung und Expertise aus Jahrzehnten. Unsere Lösung ist
              rechtlich geprüft.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
            Ihr Weg zum Remote Scanning
          </h2>
          <p className="mt-4 text-muted text-center">
            In sechs Schritten zur sorgenfreien Radiologie.
          </p>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((s) => (
              <div key={s.nr} className="text-center">
                <div className="text-3xl font-light text-accent">{s.nr}</div>
                <p className="mt-3 text-sm font-medium">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-20 bg-foreground text-white">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Sind Sie bereit für Remote Scanning?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Finden Sie es in 3 Minuten heraus — kostenlos und unverbindlich.
          </p>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white text-foreground px-8 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Jetzt exklusiv herausfinden
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Jetzt Kontakt aufnehmen und sorgenfrei starten
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Vereinbaren Sie Ihr Gespräch. Kostenfrei und risikofrei.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Terminvereinbarung
            </Link>
            <a
              href="tel:+436605296601"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              +43 660 5296601
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
