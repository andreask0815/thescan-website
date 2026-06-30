import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title:
    "Remote Scanning am MRT — Fortbildung für MTR & RT | The Scan",
  description:
    "High Quality Remote Scanning lernen: 4 Module, 4 Wochen, live online. Grundlagen, Recht, Fachkompetenz & Qualitätsstandards. Ab 99 € Einstiegspreis.",
  openGraph: {
    title: "Remote Scanning am MRT — Die Fortbildung für MTR & RT",
    description:
      "4 Module in 4 Wochen: Vom Grundlagenwissen zur Remote Expert. Live-Webinare, Handouts, Zertifikat. The Scan Group.",
  },
};

const modules = [
  {
    week: "Woche 1",
    tag: "Modul 1",
    title: "Grundlagen, Technik & Berufsbild",
    topics: [
      "Was ist Remote Scanning — und was ist es nicht? Klare Abgrenzung zu Remote Support",
      "Screencast-Beispiele: Wie sieht eine Remote-Konsole aus? (ROCC, Syngo Virtual Cockpit, nCommand Lite)",
      "Fachkräftemangel in Zahlen: Warum Remote Scanning strukturell notwendig ist — und warum das unserer Berufsgruppe nützt",
      "Welchen Benefit zieht die Berufsgruppe MTR/RT? Karrierechancen, Flexibilität, neue Tätigkeitsfelder, Gehaltsrelevanz",
      "Massen Remote Scanning vs. High Quality Remote Scanning: Was ist der Unterschied — und warum ist Qualität der entscheidende Wettbewerbsvorteil?",
    ],
    takeaway:
      "Du verstehst, was Remote Scanning wirklich bedeutet, warum es eine strukturelle Chance für deinen Berufsstand ist — und was dich als qualitätsorientierte Remote-MT von einer reinen Mengenlösung unterscheidet.",
    course: 1,
  },
  {
    week: "Woche 2",
    tag: "Modul 2",
    title: "Rechtliche Grundlagen: angestellt vs. freiberuflich",
    topics: [
      "Welche rechtlichen Rahmenbedingungen gelten für Remote Scanning in DE und AT?",
      "Angestellt remote: Arbeitsvertrag, Weisungsgebundenheit, Haftung, Arbeitsmittel — was muss geregelt sein?",
      "Freiberuflich remote: Werkvertrag vs. Dienstvertrag, Scheinselbständigkeit — wo liegt die Grenze?",
      "Steuerliche und sozialversicherungsrechtliche Unterschiede zwischen AT und DE",
      "Cybersecurity & DSGVO: Patientendaten, Zugriffsrechte, was ist vertraglich zu regeln?",
    ],
    takeaway:
      "Du kannst beurteilen, welches Modell — angestellt oder freiberuflich — für dich rechtlich sicher ist, und weißt, welche Vertragsklauseln du vor Unterzeichnung prüfen musst.",
    course: 1,
  },
  {
    week: "Woche 3",
    tag: "Modul 3",
    title: "Vom MTR/RT zur Remote Expert: fachliche Voraussetzungen",
    topics: [
      "Welche Berufserfahrung und Gerätekenntnis ist Mindestvoraussetzung — und warum ist das keine Einstiegsposition",
      "Selbständiges Arbeiten remote: Entscheidungskompetenz, Protokollsicherheit, Kommunikation ohne physische Präsenz",
      "Sequenzplanung, Fehleranalyse und Qualitätssicherung aus der Distanz — was verändert sich?",
      "Notfallkompetenz: Wie erkenne ich kritische Situationen remote — und wie handle ich richtig?",
      "Grundlagen im Kurs — Tiefenschulungen und individuelle Begleitungen über The Scan Group buchbar",
    ],
    takeaway:
      "Du weißt, wo du heute fachlich stehst und was du konkret entwickeln musst, um als Remote Expert sicher und souverän zu arbeiten. Du kennst den nächsten Schritt auf deinem Weg dorthin.",
    course: 2,
  },
  {
    week: "Woche 4",
    tag: "Modul 4",
    title: "Qualitätsstandards, Arbeitsumgebung & Patientensicherheit",
    topics: [
      "Was brauche ich am Remote-Arbeitsplatz? Ausstattung, Verbindung, Ergonomie, Arbeitszeit",
      "Rollenmodell: Was macht die Person vor Ort (Local Operator) — was macht die Remote-MT?",
      "Was passiert bei Verbindungsabbruch? Technische und organisatorische Fallback-Szenarien",
      "Patientenaufklärung und Haftung: Wer haftet wofür — Remote-MT, Local Operator, Einrichtung?",
      "Gruppenübung in Breakout-Rooms: Fallanalyse und gemeinsame Lösungsentwicklung",
    ],
    takeaway:
      "Du kennst die Mindestanforderungen an einen sicheren Remote-Arbeitsplatz, verstehst die Haftungsverteilung und kannst im Ernstfall richtig handeln.",
    course: 2,
  },
];

const included = [
  "Foliensatz aller 4 Module",
  "Handout Rechtslage DE/AT (angestellt & freiberuflich)",
  "Selbsteinschätzungsbogen Remote Expert Readiness",
  "Teilnahmebestätigung",
  "Zertifikat mit Inhaltsnachweis",
];

export default function RemoteScanningKurs() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1666214280165-20e3d73d70bf?w=1600&q=80"
            alt="Radiologie-Arbeitsplatz mit Monitoren"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>
        <div className="relative py-28 md:py-40">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-5">
              Fortbildung für MTR & RT · 4 Module · 4 Wochen · Live Online
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto">
              Remote Scanning am MRT.
              <br />
              <span className="text-muted">High Quality Level.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Diese Fortbildung gibt MTR und RT das Handwerkszeug, um Remote
              Scanning fachlich zu verstehen, rechtlich sicher einzuordnen und
              den Unterschied zwischen durchschnittlicher und exzellenter
              Remote-Arbeit zu kennen.
            </p>

            {/* Stats Bar */}
            <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 bg-surface rounded-2xl px-8 py-5">
              {[
                { label: "Module", value: "4" },
                { label: "Format", value: "Live-Webinar" },
                { label: "Dauer", value: "4 Wochen" },
                { label: "Einstieg ab", value: "99 €" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl md:text-2xl font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#preise"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
              >
                Kurs buchen
              </a>
              <a
                href="#module"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                Modulübersicht &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoSection
        title="Was dich erwartet"
        subtitle="Ein Einblick in die Fortbildung — von Grundlagen bis zur Remote Expert Qualifikation."
        posterImage="https://images.unsplash.com/photo-1666214275099-0ca566aefe26?w=1600&q=80"
      />

      {/* Warum */}
      <section className="py-24">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
            Warum diese Fortbildung?
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Remote Scanning ist keine Zukunftsmusik — es ist betriebliche
              Realität. Der Fachkräftemangel in der Radiologie macht
              ferngesteuerte MRT-Untersuchungen strukturell notwendig. Für MTR
              und RT eröffnet das völlig neue Karrierewege: Flexibilität,
              ortsunabhängiges Arbeiten, neue Tätigkeitsfelder.
            </p>
            <p>
              Aber: Der Unterschied zwischen Massen Remote Scanning und High
              Quality Remote Scanning ist enorm. Wer als qualitätsorientierte
              Remote-MT arbeiten will, braucht mehr als nur Gerätekenntnis — es
              braucht rechtliches Verständnis, Entscheidungskompetenz,
              Protokollsicherheit und ein klares Bild der eigenen Rolle.
            </p>
            <p>
              Genau das vermittelt dieser Kurs. In 4 Wochen, 4 Live-Modulen —
              aufbauend, strukturiert, praxisnah.
            </p>
          </div>
        </div>
      </section>

      {/* Module */}
      <section id="module" className="py-20 bg-surface scroll-mt-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            4 Module. 4 Wochen. Dein Weg zur Remote Expert.
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16">
            Jede Woche ein Live-Webinar — aufbauend vom Grundwissen bis zur
            Praxiskompetenz.
          </p>

          <div className="space-y-6">
            {modules.map((m) => (
              <div
                key={m.tag}
                className="rounded-2xl bg-white p-8 md:p-10"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    {m.week} · {m.tag}
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      m.course === 1
                        ? "bg-accent/10 text-accent"
                        : "bg-foreground/10 text-foreground"
                    }`}
                  >
                    {m.course === 1
                      ? "Kurs 1 — Einstieg"
                      : "Kurs 2 — Vertiefung"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{m.title}</h3>

                <ul className="mt-6 space-y-3">
                  {m.topics.map((topic) => (
                    <li key={topic} className="flex gap-3">
                      <svg
                        className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted leading-relaxed">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm">
                    <span className="font-medium">Dein Mehrwert: </span>
                    <span className="text-muted">{m.takeaway}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="relative h-[40vh] min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1581595220057-eefa8c4add1b?w=1600&q=80"
          alt="Radiologe bei der Arbeit"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Qualität ist der entscheidende Wettbewerbsvorteil.
            </p>
            <p className="mt-2 text-white/70 max-w-lg">
              Massen Remote Scanning kann jeder. High Quality Remote Scanning
              unterscheidet dich.
            </p>
          </div>
        </div>
      </section>

      {/* Was bleibt */}
      <section className="py-24">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
            Was du nach dem Kurs hast
          </h2>
          <ul className="space-y-4">
            {included.map((item) => (
              <li key={item} className="flex gap-3 items-center">
                <svg
                  className="w-5 h-5 text-green-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-20 bg-surface scroll-mt-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Zwei Kurse. Ein Ziel.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Beide Kurse bauen aufeinander auf und qualifizieren dich für Remote
            Scanning im High Quality Level. Starte mit Kurs 1 — und geh mit
            Kurs 2 in die Tiefe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kurs 1 */}
            <div className="rounded-2xl bg-white p-8 md:p-10 flex flex-col">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent self-start mb-4">
                Einstiegspreis
              </span>
              <h3 className="text-2xl font-semibold">
                Kurs 1 — Grundlagen & Recht
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Modul 1 & 2: Remote Scanning verstehen, Technik kennenlernen,
                rechtliche Rahmenbedingungen in DE und AT sicher einordnen.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li>Woche 1: Grundlagen, Technik & Berufsbild</li>
                <li>Woche 2: Rechtliche Grundlagen</li>
              </ul>
              <div className="mt-auto pt-8">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-semibold">99</span>
                  <span className="text-lg text-muted">&euro;</span>
                </div>
                <Link
                  href="/kontakt"
                  className="w-full inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
                >
                  Kurs 1 buchen
                </Link>
              </div>
            </div>

            {/* Kurs 2 */}
            <div className="rounded-2xl bg-foreground text-white p-8 md:p-10 flex flex-col">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80 self-start mb-4">
                Aufbaukurs
              </span>
              <h3 className="text-2xl font-semibold">
                Kurs 2 — Fachkompetenz & Qualität
              </h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                Modul 3 & 4: Vom MTR/RT zur Remote Expert —
                fachliche Voraussetzungen, Qualitätsstandards,
                Arbeitsumgebung und Patientensicherheit.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                <li>Woche 3: Fachliche Voraussetzungen</li>
                <li>Woche 4: Qualität & Patientensicherheit</li>
              </ul>
              <p className="mt-4 text-xs text-white/40">
                Voraussetzung: Kurs 1 abgeschlossen
              </p>
              <div className="mt-auto pt-8">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-semibold">198</span>
                  <span className="text-lg text-white/60">&euro;</span>
                </div>
                <Link
                  href="/kontakt"
                  className="w-full inline-flex items-center justify-center rounded-full bg-white text-foreground px-8 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Kurs 2 buchen
                </Link>
              </div>
            </div>
          </div>

          {/* Kombi-Hinweis */}
          <div className="mt-6 rounded-2xl bg-white p-6 text-center">
            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">
                Beide Kurse zusammen: 297 €
              </span>{" "}
              — Spare dir den separaten Buchungsaufwand und sichere dir das
              Gesamtpaket.{" "}
              <Link
                href="/kontakt"
                className="text-accent hover:text-accent-hover"
              >
                Gesamtpaket anfragen &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Tiefenschulung */}
      <section className="py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Danach: Tiefenschulung & individuelle Begleitung
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
            Dieser Kurs legt die Grundlagen. Wer tiefer einsteigen möchte —
            geräte- oder einrichtungsspezifische Schulungen, individuelle
            Begleitung auf dem Weg zur Remote Expert — kann das direkt über The
            Scan Group buchen.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Tiefenschulung anfragen
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Fragen? Wir sind persönlich für dich da.
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+436605296601"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              +43 660 5296601
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">info@thescan.at</p>
        </div>
      </section>
    </>
  );
}
