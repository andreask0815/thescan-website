import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – The Scan",
};

export default function AGB() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h1 className="text-3xl font-semibold tracking-tight mb-12">
          Allgemeine Geschäftsbedingungen
        </h1>
        <div className="prose prose-sm max-w-none text-muted [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:mb-3">
          <p>
            Gültig ab 19. März 2026 (konsolidierte Fassung) für The Scan Group
            FlexCo, The Scan Remote & Service FlexCo und weitere
            Tochterunternehmen.
          </p>
          <p>
            Sitz: Balsaminengasse 1, 1140 Wien
            <br />
            FN: 662072k | UID: ATU82655235
          </p>

          <h2>1. Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle B2B-Geschäftsbeziehungen mit
            Ordinationen, Krankenanstalten und Instituten.
          </p>

          <h2>2. Leistungen</h2>
          <p>
            Beratung, Remote-Scanning (ohne ärztliche Befundung), Remote
            Mentoring und Projektmanagement.
          </p>

          <h2>3. Medizinische Verantwortung</h2>
          <p>
            The Scan erbringt keine ärztliche Leistung, Diagnostik, Befundung
            oder Therapieempfehlung.
          </p>

          <h2>4. Vergütung</h2>
          <p>
            Alle Preise netto zzgl. USt. Zahlungsfrist: 7 Tage. Monatliche
            Retainer sind im Voraus zu entrichten.
          </p>

          <h2>5. Datenschutz</h2>
          <p>
            DSGVO-konforme Verarbeitung. Ein
            Auftragsverarbeitungsvertrag (AVV/DPA) ist erforderlich.
          </p>

          <h2>6. Haftung</h2>
          <p>
            Die Haftung ist begrenzt auf EUR 250.000, ausgenommen
            Personenschäden.
          </p>

          <h2>7. Kündigung</h2>
          <p>
            90 Tage Kündigungsfrist für Retainer. Fristlose Kündigung bei
            wichtigem Grund möglich.
          </p>

          <h2>8. Anwendbares Recht</h2>
          <p>
            Österreichisches Recht. Gerichtsstand: Wien.
          </p>
        </div>
      </div>
    </section>
  );
}
