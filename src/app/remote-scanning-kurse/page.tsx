import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title:
    "Remote Scanning am MRT — Fortbildung für MTR & RT | The Scan",
  description:
    "Qualifizieren Sie sich für High Quality Remote Scanning: 2 aufeinander aufbauende Kurse für MTR und RT. Grundlagen, Recht, Fachkompetenz und Qualitätsstandards.",
  openGraph: {
    title: "Remote Scanning am MRT — Fortbildung für MTR & RT",
    description:
      "2 Kurse, 4 Module, 2 Tage: Vom Einstieg zum Remote Expert. Für Medizinische Technolog*innen und Radiologietechnolog*innen.",
  },
};

const kurs1Module = [
  {
    tag: "Tag 1 · Modul 1",
    title: "Grundlagen, Technik & Berufsbild",
    items: [
      "Was ist Remote Scanning — und was ist es nicht? Klare Abgrenzung zu Remote Support",
      "Screencast-Beispiele: Wie sieht eine Remote-Konsole aus? (ROCC, Syngo Virtual Cockpit, nCommand Lite)",
      "Fachkräftemangel in Zahlen: Warum Remote Scanning strukturell notwendig ist — und warum das unserer Berufsgruppe nützt",
      "Welchen Benefit zieht die Berufsgruppe MTR/RT? Karrierechancen, Flexibilität, neue Tätigkeitsfelder, Gehaltsrelevanz",
      "Massen Remote Scanning vs. High Quality Remote Scanning: Was ist der Unterschied — und warum ist Qualität der entscheidende Wettbewerbsvorteil?",
    ],
    benefit:
      "Du verstehst, was Remote Scanning wirklich bedeutet, warum es eine strukturelle Chance für deinen Berufsstand ist — und was dich als qualitätsorientierte Remote-MT von einer reinen Mengenlösung unterscheidet.",
  },
  {
    tag: "Tag 1 · Modul 2",
    title: "Rechtliche Grundlagen: angestellt vs. freiberuflich",
    items: [
      "Welche rechtlichen Rahmenbedingungen gelten für Remote Scanning in DE und AT?",
      "Angestellt remote: Arbeitsvertrag, Weisungsgebundenheit, Haftung, Arbeitsmittel — was muss geregelt sein?",
      "Freiberuflich remote: Werkvertrag vs. Dienstvertrag, Scheinselbständigkeit — wo liegt die Grenze?",
      "Steuerliche und sozialversicherungsrechtliche Unterschiede zwischen AT und DE",
      "Cybersecurity & DSGVO: Patientendaten, Zugriffsrechte, was ist vertraglich zu regeln?",
    ],
    benefit:
      "Du kannst beurteilen, welches Modell — angestellt oder freiberuflich — für dich rechtlich sicher ist, und weißt, welche Vertragsklauseln du vor Unterzeichnung prüfen musst.",
  },
];

const kurs2Module = [
  {
    tag: "Tag 2 · Modul 3",
    title: "Vom MTR/RT zur Remote Expert: fachliche Voraussetzungen",
    items: [
      "Welche Berufserfahrung und Gerätekenntnis ist Mindestvoraussetzung — und warum ist das keine Einstiegsposition",
      "Selbständiges Arbeiten remote: Entscheidungskompetenz, Protokollsicherheit, Kommunikation ohne physische Präsenz",
      "Sequenzplanung, Fehleranalyse und Qualitätssicherung aus der Distanz — was verändert sich?",
      "Notfallkompetenz: Wie erkenne ich kritische Situationen remote — und wie handle ich richtig?",
      "Grundlagen im Kurs — Tiefenschulungen und individuelle Begleitungen über The Scan Group buchbar",
    ],
    benefit:
      "Du weißt, wo du heute fachlich stehst und was du konkret entwickeln musst, um als Remote Expert sicher und souverän zu arbeiten. Du kennst den nächsten Schritt auf deinem Weg dorthin.",
  },
  {
    tag: "Tag 2 · Modul 4",
    title: "Qualitätsstandards, Arbeitsumgebung & Patientensicherheit",
    items: [
      "Was brauche ich am Remote-Arbeitsplatz? Ausstattung, Verbindung, Ergonomie, Arbeitszeit",
      "Rollenmodell: Was macht die Person vor Ort (Local Operator) — was macht die Remote-MT?",
      "Was passiert bei Verbindungsabbruch? Technische und organisatorische Fallback-Szenarien",
      "Patientenaufklärung und Haftung: Wer haftet wofür — Remote-MT, Local Operator, Einrichtung?",
      "Gruppenübung in Breakout-Rooms: Fallanalyse und gemeinsame Lösungsentwicklung",
    ],
    benefit:
      "Du kennst die Mindestanforderungen an einen sicheren Remote-Arbeitsplatz, verstehst die Haftungsverteilung und kannst im Ernstfall richtig handeln.",
  },
];

const included = [
  "Foliensatz aller 4 Module",
  "Handout Rechtslage DE/AT (angestellt & freiberuflich)",
  "Selbsteinschätzungsbogen Remote Expert Readiness",
  "Teilnahmebestätigung",
  "Zertifikat mit Inhaltsnachweis (Premium)",
];

function ModuleCard({
  mod,
}: {
  mod: (typeof kurs1Module)[number];
}) {
  return (
    <div className="rounded-2xl bg-white p-8">
      <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
        {mod.tag}
      </p>
      <h3 className="text-xl font-semibold">{mod.title}</h3>
      <ul className="mt-5 space-y-3">
        {mod.items.map((item) => (
          <li key={item} className="flex gap-3">
            <svg
              className="w-4 h-4 text-accent shrink-0 mt-0.5"
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
            <span className="text-sm text-muted leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">
          Ihr Mehrwert
        </p>
        <p className="text-sm leading-relaxed">{mod.benefit}</p>
      </div>
    </div>
  );
}

export default function RemoteScanningKurse() {
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
              Fortbildung für MTR & RT · The Scan Group
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto">
              Remote Scanning am MRT.
              <br />
              <span className="text-muted">
                Vom Einstieg zum Remote Expert.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Diese Fortbildung gibt MTR und RT das Handwerkszeug, um Remote
              Scanning fachlich zu verstehen, rechtlich sicher einzuordnen und
              den Unterschied zwischen durchschnittlicher und exzellenter
              Remote-Arbeit zu kennen.
            </p>
            <p className="mt-4 text-sm text-muted">
              2 Kurse · 4 Module · 2 Tage · Aufeinander aufbauend
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoSection
        title="High Quality Remote Scanning verstehen"
        subtitle="Was unterscheidet exzellente Remote-Arbeit von einer reinen Mengenlösung?"
        posterImage="https://images.unsplash.com/photo-1666214275099-0ca566aefe26?w=1600&q=80"
      />

      {/* Kurs-Vergleich */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Zwei Kurse. Ein Ziel.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Beide Kurse bauen aufeinander auf und qualifizieren MTR und RT für
            das Remote Scanning im High Quality Level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kurs 1 */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-surface p-8 text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-accent mb-2">
                  Kurs 1 · Tag 1
                </p>
                <h3 className="text-2xl font-semibold">
                  Grundlagen & Recht
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Modul 1 + 2 · Remote Scanning verstehen und rechtlich
                  einordnen
                </p>
                <div className="mt-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">
                    Einstiegspreis
                  </span>
                  <div className="text-4xl font-semibold mt-1">
                    99&nbsp;€
                  </div>
                </div>
                <Link
                  href="/kontakt"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
                >
                  Kurs 1 buchen
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Was ist Remote Scanning — klare Abgrenzung
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Remote-Konsolen live erleben (ROCC, Syngo, nCommand)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Karrierechancen & Gehaltsrelevanz für MTR/RT
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Massen vs. High Quality Remote Scanning
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Rechtliche Rahmenbedingungen DE & AT
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Angestellt vs. freiberuflich — was passt zu dir?
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Cybersecurity & DSGVO im Remote-Setting
                  </li>
                </ul>
              </div>
            </div>

            {/* Kurs 2 */}
            <div className="rounded-2xl border-2 border-accent overflow-hidden relative">
              <div className="absolute top-4 right-4 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                Aufbaukurs
              </div>
              <div className="bg-foreground text-white p-8 text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-2">
                  Kurs 2 · Tag 2
                </p>
                <h3 className="text-2xl font-semibold">
                  Fachkompetenz & Qualität
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Modul 3 + 4 · Vom MTR/RT zur Remote Expert
                </p>
                <div className="mt-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/60">
                    Aufbaupreis
                  </span>
                  <div className="text-4xl font-semibold mt-1">
                    198&nbsp;€
                  </div>
                </div>
                <Link
                  href="/kontakt"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-white text-foreground px-8 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Kurs 2 buchen
                </Link>
                <p className="mt-3 text-xs text-white/40">
                  Voraussetzung: Kurs 1
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Mindestvoraussetzungen für Remote Expert
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Entscheidungskompetenz & Protokollsicherheit remote
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Sequenzplanung & Qualitätssicherung aus der Distanz
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Notfallkompetenz im Remote-Setting
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Remote-Arbeitsplatz: Ausstattung & Ergonomie
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Haftungsverteilung: Remote-MT, Local Operator, Einrichtung
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Fallanalyse & Breakout-Room-Übungen
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bundle */}
          <div className="mt-8 rounded-2xl bg-surface p-8 text-center">
            <p className="text-sm text-muted mb-2">
              Beide Kurse zusammen buchen
            </p>
            <div className="text-3xl font-semibold">
              297&nbsp;€{" "}
              <span className="text-lg text-muted font-normal">
                statt 297 € einzeln
              </span>
            </div>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-10 py-3.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Gesamtpaket buchen — 297 €
            </Link>
          </div>
        </div>
      </section>

      {/* Kurs 1 Detail */}
      <section className="py-20 bg-surface" id="kurs-1">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-2">
              Kurs 1 · Einstiegspreis 99 €
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Grundlagen & Recht
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">
              Tag 1 gibt dir das Fundament: Was ist Remote Scanning, warum ist
              es relevant — und wie bist du rechtlich abgesichert?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kurs1Module.map((mod) => (
              <ModuleCard key={mod.tag} mod={mod} />
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <section className="relative h-[40vh] min-h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1581595220057-eefa8c4add1b?w=1600&q=80"
          alt="Radiologe bei der Arbeit am Bildschirm"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Der Unterschied zwischen durchschnittlich und exzellent.
            </p>
            <p className="mt-2 text-white/70 max-w-lg">
              High Quality Remote Scanning ist kein Zufall — es ist eine
              bewusste Entscheidung für Qualität.
            </p>
          </div>
        </div>
      </section>

      {/* Kurs 2 Detail */}
      <section className="py-20" id="kurs-2">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-2">
              Kurs 2 · Aufbaupreis 198 €
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Fachkompetenz & Qualität
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">
              Tag 2 macht dich zum Remote Expert: fachliche Tiefe,
              Qualitätsstandards und Patientensicherheit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kurs2Module.map((mod) => (
              <ModuleCard key={mod.tag} mod={mod} />
            ))}
          </div>
        </div>
      </section>

      {/* Was bleibt */}
      <section className="py-20 bg-foreground text-white">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Was bleibt nach 2 Tagen?
          </h2>
          <ul className="mt-10 space-y-4">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-3"
              >
                <svg
                  className="w-4 h-4 text-green-400 shrink-0"
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
                <span className="text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nächster Schritt */}
      <section className="py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Tiefenschulung & Begleitung
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-2xl mx-auto">
            Diese Kurse legen die Grundlagen. Wer tiefer einsteigen möchte —
            geräte- oder einrichtungsspezifische Schulungen, individuelle
            Begleitung auf dem Weg zur Remote Expert — kann das direkt über The
            Scan Group buchen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="rounded-2xl bg-white p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Jetzt qualifizieren
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Zwei Kurse, die aufeinander aufbauen. Starte mit dem
              Einstiegspreis und werde Remote Expert auf High Quality Level.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
              >
                Kurs 1 buchen — 99 €
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-accent px-8 py-3.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
              >
                Gesamtpaket — 297 €
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-muted">
              <span>Persönlicher Support: info@thescan.at</span>
              <span>Telefon: +43 660 5296601</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
