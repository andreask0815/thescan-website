import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – The Scan",
};

export default function Datenschutz() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h1 className="text-3xl font-semibold tracking-tight mb-12">
          Datenschutzerklärung
        </h1>
        <div className="prose prose-sm max-w-none text-muted [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:mb-3">
          <h2>Verantwortliche Stelle</h2>
          <p>
            The Scan Remote & Service FlexCo
            <br />
            Balsaminengasse 1
            <br />
            1140 Wien
          </p>

          <h2>Datenschutzbeauftragte</h2>
          <p>
            Jasmin Roopra-Pfeffer, MBA
            <br />
            <a
              href="mailto:jasmin.roopra-pfeffer@thescan.at"
              className="text-accent hover:underline"
            >
              jasmin.roopra-pfeffer@thescan.at
            </a>
          </p>

          <h2>Datenverarbeitung</h2>
          <p>
            Wir erheben automatisch Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt. Diese werden für sieben Tage
            gespeichert und dienen der Sicherheit und Angriffserkennung.
          </p>
          <p>
            Bei Kontaktformularen werden personenbezogene Daten zur Bearbeitung
            Ihrer Anfrage verwendet und nach zwei Jahren gelöscht, sofern kein
            Vertrag entsteht.
          </p>
          <p>
            Für Terminbuchungen werden Name und E-Mail erfasst; diese Daten
            werden nach sechs Monaten gelöscht.
          </p>

          <h2>Rechtliche Grundlagen</h2>
          <p>
            Die Verarbeitung erfolgt unter der DSGVO, dem österreichischen
            Datenschutzgesetz (DSG) und dem Telekommunikationsgesetz (TKG 2021).
          </p>

          <h2>Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung und Widerspruch. Beschwerden können bei der
            österreichischen Datenschutzbehörde eingereicht werden.
          </p>
        </div>
      </div>
    </section>
  );
}
