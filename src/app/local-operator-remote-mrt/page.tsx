import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Local Operator (Remote-MRT) — Qualifizierung 2026 | The Scan",
  description:
    "Werden Sie Local Operator (Remote-MRT): 64 UE Qualifizierung für Patient*innenbetreuung am MRT. Online + Praxis. Start 25.05.2026. Jetzt buchen.",
  openGraph: {
    title:
      "Local Operator (Remote-MRT) — Die neue Schlüsselrolle in der Radiologie",
    description:
      "64 UE Qualifizierung für Pflegefachpersonen, MFA und Gesundheitsberufe. In Kooperation mit Gesu STARcademy & The Scan Group FlexCo. Start 25.05.2026.",
  },
  twitter: {
    title: "Werden Sie Local Operator (Remote-MRT)",
    description:
      "Die neue Rolle am MRT: Patient*innen sicher, empathisch und qualifiziert begleiten — während die MTR remote scannt. 64 UE, Start 25.05.2026.",
  },
};

const modules = [
  {
    tag: "Modul I · Theorie · 12 UE",
    title: "MRT-Sicherheit und technische Grundlagen",
    description:
      "Gefahrenquellen, Zonen- und Zutrittsprinzip, Screening & Freigabe, Implantatkennzeichnung, Notfallreaktionen, Patientenvorbereitung, Lagerung, Kontrastmittel-Workflow.",
    meta: "6 UE Selbststudium · Webinar 02.06.2026, 14–19 Uhr",
  },
  {
    tag: "Modul II · Theorie · 12 UE",
    title: "Patient*innenbetreuung & interprofessionelle Zusammenarbeit",
    description:
      "Kommunikationsprinzipien, Team- und Patientenkommunikation, Umgang mit Angst, Aggression, Demenz, Sprachbarrieren, Kommunikation im Remote-Setting, Konfliktmanagement.",
    meta: "6 UE Selbststudium · Webinar 11.06.2026, 14–19 Uhr",
  },
  {
    tag: "Modul III · Prüfung",
    title: "Online-Lernerfolgskontrolle",
    description:
      "Strukturiertes Online-Quiz auf der Lernplattform. Zugang ab dem letzten Webinar, Bearbeitungsfenster bis zum Folgetag. Bestanden bedeutet: bereit für die Praxis.",
    meta: "11.06. – 18.06.2026",
  },
  {
    tag: "Modul IV · Praxisphase · 40 Stunden",
    title: "Betriebliche Praxis am MRT",
    description:
      "40 Stunden Mitarbeit in einer MRT-Abteilung — eigene Einrichtung oder externer Standort — unter Supervision einer/eines Medizinischen Technolog*in für Radiologie. Strukturiertes Praxis-Portfolio leitet durch die Handlungsschritte.",
    meta: "19.06. – 17.07.2026",
  },
];

const learningGoals = [
  "Patient*innen verständlich, datenschutzkonform und empathisch über die MRT-Untersuchung aufklären.",
  "Sicherheits-Screening eigenständig durchführen — Implantate, Vor-OPs, Begleitpersonen, Kennzeichnungen lesen und korrekt einordnen.",
  "Patient*innen für standardisierte MRT-Untersuchungen korrekt lagern und positionieren.",
  "MRT-Spulen anlegen und bildqualitätssichernde Vorbereitung durchführen.",
  "Den Kontrastmittel-Workflow vorbereiten, begleiten und dokumentieren.",
  "In Notfallsituationen ruhig, regelbasiert und strukturiert reagieren.",
  "Mit der remote arbeitenden MTR klar kommunizieren — Rollen, Regeln, Übergaben.",
  "Schwierige Gesprächssituationen (Angst, Aggression, Demenz, Sprachbarriere) souverän bewältigen.",
  "Datenschutz-, Aufklärungs- und Einwilligungsprozesse korrekt durchführen.",
  "Die eigene Rolle als Local Operator im Gesamtprozess der MRT-Untersuchung verstehen und ausfüllen.",
];

const targetGroups = [
  {
    title: "Medizinische Fachangestellte (MFA)",
    description:
      "Mit Erweiterungsperspektive in der Radiologie. Sie kennen den Praxisalltag, wollen sich gezielt für die Arbeit am MRT qualifizieren und in einem zukunftsfähigen Bereich Fuß fassen.",
  },
  {
    title: "Pflegefachpersonen",
    description:
      "Diplomiertes Pflegepersonal aus Klinik, Ordination oder Institut, das die Patientenbetreuung am MRT übernehmen will und die radiologisch-technische Komponente sicher beherrschen möchte.",
  },
  {
    title: "Andere Gesundheitsfachberufe",
    description:
      "Mit Bezug zum diagnostischen oder therapeutischen Umfeld — etwa Sanitäter*innen mit MRT-Affinität, Patientenmanager*innen oder Pflegeassistent*innen mit entsprechendem Hintergrund.",
  },
];

const faqs = [
  {
    question: "Welche Vorqualifikation brauche ich?",
    answer:
      "Sie sollten in einem medizinischen Fachberuf (MFA, Pflegefachperson oder vergleichbar) tätig sein. Eine vorherige radiologische Ausbildung ist nicht erforderlich — der Lehrgang bringt Sie genau auf das Niveau, das Sie als Local Operator brauchen.",
  },
  {
    question: "Muss ich die Praxisphase im eigenen Haus absolvieren?",
    answer:
      "Nein. Sie können die 40 Praxisstunden entweder in Ihrer eigenen MRT-Abteilung oder extern absolvieren — Voraussetzung ist die Supervision durch eine/einen Medizinische*n Technolog*in für Radiologie (MTR). Wir unterstützen Sie bei der Suche nach einem passenden Praxispartner, falls nötig.",
  },
  {
    question: "Was passiert, wenn ich an einem Webinar nicht teilnehmen kann?",
    answer:
      "Die regelmäßige Teilnahme an den Live-Webinaren ist Voraussetzung für das Zertifikat. Sollte ein Termin im Ausnahmefall nicht möglich sein, kontaktieren Sie uns frühzeitig — wir suchen gemeinsam nach einer individuellen Lösung.",
  },
  {
    question:
      "Ist das Zertifikat in Deutschland und Österreich anerkannt?",
    answer:
      'Das Zertifikat „Local Operator (Remote-MRT)" wird von Gesu STARcademy GmbH in Kooperation mit The Scan Group FlexCo ausgestellt und ist als strukturierte Fortbildung anerkannt. Es etabliert eine neue Rolle im MRT-Umfeld, die im Zuge des wachsenden Remote-Scanning-Trends in Deutschland und Österreich zunehmend gefragt ist.',
  },
  {
    question: "Wie funktioniert die Online-Lernplattform?",
    answer:
      "Sie erhalten nach der Anmeldung Zugangsdaten zu unserer Lernplattform. Dort finden Sie die Arbeitshefte, die Webinarräume, das Online-Quiz und den Upload-Bereich für das Praxis-Portfolio. Die Plattform ist bewusst einfach gehalten und auf allen modernen Endgeräten nutzbar.",
  },
  {
    question:
      "Was, wenn ich das Praxis-Portfolio nicht rechtzeitig fertig habe?",
    answer:
      "Sprechen Sie uns rechtzeitig an. Wir versuchen, individuelle Lösungen zu finden — der Anspruch auf Qualität und vollständige Bearbeitung steht jedoch über dem Zeitdruck.",
  },
  {
    question: "Wer steht hinter dem Lehrgang?",
    answer:
      "Die Durchführung erfolgt über die Gesu STARcademy GmbH, didaktische und akademische Trägerin des Programms. Inhaltlicher Kooperationspartner ist die The Scan Group FlexCo — Spezialistin für Remote-Scanning in der Radiologie. Beide Häuser bringen tiefe Praxis und langjährige Erfahrung in das Curriculum ein.",
  },
  {
    question: "Wie kann ich bezahlen?",
    answer:
      "Die Buchung erfolgt über die sichere Bezahlplattform Ablefy. Zahlungsmethoden: Kreditkarte, SEPA-Lastschrift, Sofortüberweisung, ggf. PayPal. Eine Rechnung erhalten Sie automatisch per E-Mail.",
  },
  {
    question: "Bekomme ich eine Rechnung für meinen Arbeitgeber?",
    answer:
      "Ja. Bei der Bestellung können Sie die Rechnungsadresse Ihres Arbeitgebers angeben. Die Rechnung wird automatisch erstellt und per E-Mail zugestellt — geeignet für Erstattung oder Abrechnung als Fortbildung.",
  },
  {
    question: "Was, wenn der Kurs für mich doch nicht passt?",
    answer:
      "Sie haben ein gesetzliches Widerrufsrecht von 14 Tagen ab Vertragsabschluss. Wichtig: Wenn Sie vor Ablauf der 14 Tage bereits aktiv mit der Lernplattform arbeiten, erlischt dieses Recht — wir weisen Sie im Checkout darauf hin.",
  },
];

export default function LocalOperator() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1666214280352-db292c05fd80?w=1600&q=80"
            alt="MRT-Gerät in moderner Radiologie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>
        <div className="relative py-28 md:py-40">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-5">
              Neue Qualifizierung 2026 · In Kooperation mit Gesu STARcademy &
              The Scan Group FlexCo
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto">
              Werden Sie Local Operator (Remote-MRT) — die neue Schlüsselrolle
              am Patienten.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Wenn die MTR remote scannt, braucht es vor Ort eine qualifizierte
              Person, die Patient*innen sicher, empathisch und
              verantwortungsvoll begleitet. Genau dafür qualifiziert dieser
              Lehrgang.
            </p>

            {/* Stats Bar */}
            <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 bg-surface rounded-2xl px-8 py-5">
              {[
                { label: "Umfang", value: "64 UE" },
                { label: "Format", value: "Online + Praxis" },
                { label: "Zeitraum", value: "25.05.–17.07.2026" },
                { label: "Investition", value: "500,00 €" },
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

            <div className="mt-10">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
              >
                Jetzt verbindlich buchen — 500,00 €
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-4 text-center">
          <p className="text-sm text-muted">
            In Kooperation: Gesu STARcademy GmbH × The Scan Group FlexCo ·
            Verschlüsselte Zahlung · Sofortiger Plattformzugang · Persönlicher
            Support
          </p>
        </div>
      </div>

      {/* Video */}
      <VideoSection
        title="Die neue Rolle in der Radiologie"
        subtitle="Erfahren Sie, warum der Local Operator die Brücke zwischen Patient*in und Remote-MTR ist."
        posterImage="https://images.unsplash.com/photo-1666214275099-0ca566aefe26?w=1600&q=80"
      />

      {/* Ausgangslage */}
      <section className="py-24">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
            Warum diese Qualifizierung jetzt entsteht
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Remote-Scanning verändert die Radiologie. Was bis vor wenigen
              Jahren als technische Spielerei galt, ist heute betriebliche
              Realität: Medizinische Technolog*innen für Radiologie übernehmen
              MRT-Untersuchungen aus einem zentralen Remote-Workspace heraus, an
              einem oder mehreren Standorten gleichzeitig. Das schafft
              Ausfallsicherheit, erweitert Öffnungszeiten und löst den
              chronischen Personalengpass in vielen Häusern.
            </p>
            <p>
              Aber es entsteht eine neue, kritische Frage: Wer kümmert sich vor
              Ort um den Patienten? Wer informiert, wer lagert, wer legt die
              Spulen an, wer reagiert in einem Notfall, wer trägt die
              Sicherheitsverantwortung am Magneten? Diese Rolle muss qualifiziert
              besetzt sein — sonst entstehen Lücken in einer Kette, die keine
              Lücken verträgt.
            </p>
            <p>
              Der Lehrgang &bdquo;Local Operator (Remote-MRT)&ldquo; schließt
              genau diese Lücke. In zwei strukturierten Theoriemodulen, einer
              Online-Lernerfolgskontrolle und einer 40-stündigen betrieblichen
              Praxisphase qualifiziert er Pflegefachpersonen, Medizinische
              Fachangestellte und andere Gesundheitsberufe für eine
              eigenständige, klar definierte Rolle im MRT-Betrieb der Zukunft.
            </p>
          </div>
        </div>
      </section>

      {/* Module */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Programmaufbau
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16">
            Vier Module — von den Grundlagen über die Prüfung bis zur
            betrieblichen Praxis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m) => (
              <div key={m.title} className="rounded-2xl bg-white p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
                  {m.tag}
                </p>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {m.description}
                </p>
                <p className="mt-4 text-xs text-muted border-t border-border pt-4">
                  {m.meta}
                </p>
              </div>
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
      </section>

      {/* Lernziele */}
      <section className="py-24">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Was Sie nach dem Lehrgang können
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-12">
            Klare, kompetenzorientierte Lernziele — direkt anwendbar im
            MRT-Betrieb.
          </p>
          <ul className="space-y-4">
            {learningGoals.map((goal) => (
              <li key={goal} className="flex gap-3">
                <svg
                  className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
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
                <span className="text-sm leading-relaxed">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Zielgruppe */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Für wen ist dieser Lehrgang?
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Der Lehrgang richtet sich an Gesundheitsfachkräfte, die im
            MRT-Umfeld eine neue, verantwortungsvolle Rolle übernehmen wollen —
            als Brücke zwischen Patient*in und remote arbeitender MTR.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetGroups.map((g) => (
              <div key={g.title} className="rounded-2xl bg-white p-8">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dozentinnen */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Ihre Dozentinnen
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-16">
            Beide begleiten Sie durch alle Module — mit Fall- und
            Übungsbeispielen aus dem realen Klinikalltag.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-surface p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-accent">JR</span>
              </div>
              <h3 className="text-lg font-semibold">Jasmin Reiter, MSc</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Erfahrene Expertin im radiologisch-technischen Umfeld mit
                didaktischer Spezialisierung auf Patientenmanagement und
                Sicherheitskonzepte am MRT. Bringt eine Verbindung aus
                akademischer Tiefe und operativer Praxis in den Lehrgang ein.
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <span className="text-xl font-semibold text-accent">MB</span>
              </div>
              <h3 className="text-lg font-semibold">Mandy Brandt</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Praxisorientierte Trainerin mit Schwerpunkt auf
                interprofessioneller Zusammenarbeit, Kommunikation und
                Notfallmanagement im MRT-Alltag. Steht für eine geerdete,
                fall-basierte Lehrweise — direkt aus dem Klinikbetrieb.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifikation & Zertifikat */}
      <section className="py-20 bg-foreground text-white">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Das Zertifikat
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Nach erfolgreichem Abschluss aller Programmphasen erhalten Sie das
            Zertifikat &bdquo;Local Operator (Remote-MRT)&ldquo;. Damit
            dokumentieren Sie eine Qualifikation, die in der Radiologie der
            nächsten Jahre stark gefragt sein wird — eine Rolle, die es als
            formales Berufsbild bisher noch nicht gab und die jetzt entsteht.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Die Durchführung erfolgt über die Gesu STARcademy GmbH, die
            didaktische und organisatorische Trägerin des Programms. Inhaltlicher
            Kooperationspartner ist die The Scan Group FlexCo — Spezialistin für
            Remote-Scanning in der Radiologie.
          </p>
        </div>
      </section>

      {/* Format-Details */}
      <section className="py-24">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
            So läuft der Lehrgang ab
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Der Lehrgang umfasst 64 Unterrichtseinheiten in einem hybriden
              Format. Beide Theoriemodule bestehen jeweils zur Hälfte aus
              individueller Selbsterarbeitung mit einem strukturierten
              Arbeitsheft auf der Lernplattform und zur Hälfte aus einem
              fünfstündigen Live-Webinar mit den beiden Dozentinnen Jasmin
              Reiter, MSc und Mandy Brandt.
            </p>
            <p>
              Im Anschluss folgt eine Online-Lernerfolgskontrolle und
              schließlich die betriebliche Praxisphase: 40 Stunden Mitarbeit am
              MRT — entweder in Ihrer eigenen Abteilung oder bei einem
              Praxispartner — unter Supervision einer/eines Medizinischen
              Technolog*in für Radiologie. Ein detailliertes Praxis-Portfolio
              führt Sie durch konkrete Beobachtungs- und Handlungsschritte.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Häufige Fragen
          </h2>
          <p className="text-muted text-center mb-12">
            Alles, was Sie vor der Buchung wissen sollten.
          </p>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Checkout CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="rounded-2xl bg-surface p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Sichern Sie sich Ihren Platz
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed">
              Sie sind nur noch wenige Schritte von Ihrer neuen Qualifikation
              entfernt. Buchen Sie verbindlich, erhalten Sie sofort Zugang zur
              Lernplattform und starten Sie ab 25.05.2026 mit dem Programm.
            </p>

            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
              {[
                "Sofortiger Plattformzugang",
                "Alle Materialien inkludiert",
                "Verschlüsselte Bezahlung",
                "Rechnung per E-Mail",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500 shrink-0"
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
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-base font-medium text-white hover:bg-accent-hover transition-colors"
              >
                Jetzt verbindlich buchen — 500,00&nbsp;&euro;
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted">
              Zahlungsmethoden: Kreditkarte, SEPA-Lastschrift,
              Sofortüberweisung, PayPal
            </p>
          </div>
        </div>
      </section>

      {/* Programmgarantie */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h3 className="text-lg font-semibold mb-3">Unsere Zusage</h3>
          <p className="text-sm text-muted leading-relaxed">
            Wir führen den Lehrgang im genannten Zeitraum durch. Sollten
            unerwartete Umstände eine Verschiebung erforderlich machen,
            informieren wir Sie umgehend und bieten Ihnen einen alternativen
            Termin oder die volle Rückerstattung an.
          </p>
        </div>
      </section>

      {/* Kontakt-CTA */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Noch Fragen? Wir sind persönlich für Sie da.
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
