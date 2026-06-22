import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – The Scan",
};

export default function Impressum() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <h1 className="text-3xl font-semibold tracking-tight mb-12">
          Impressum
        </h1>
        <div className="prose prose-sm max-w-none text-muted [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:mb-3">
          <h2>Unternehmensangaben</h2>
          <p>
            The Scan Remote & Service FlexCo
            <br />
            Balsaminengasse 1
            <br />
            1140 Wien
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@thescan.at" className="text-accent hover:underline">
              info@thescan.at
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+436605296601" className="text-accent hover:underline">
              +43 660 5296601
            </a>
          </p>

          <h2>Unternehmensform</h2>
          <p>Flexible Kapitalgesellschaft</p>

          <h2>Registrierung</h2>
          <p>
            Firmenbuchgericht: Handelsgericht Wien
            <br />
            FN: 659529x
            <br />
            UID: ATU82467849
          </p>

          <h2>Geschäftsführung</h2>
          <p>Jasmin Roopra-Pfeffer, MBA</p>

          <h2>Aufsichtsbehörden</h2>
          <p>
            Magistratisches Bezirksamt des 14. Bezirkes
            <br />
            Für Radiologietechnologie: Gesundheit Österreich GmbH
          </p>

          <h2>Kammerzugehörigkeit</h2>
          <p>Wirtschaftskammer</p>

          <h2>Rechtsgrundlagen</h2>
          <p>
            Gewerbeordnung, abrufbar unter:{" "}
            <a
              href="https://www.ris.bka.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              www.ris.bka.gv.at
            </a>
          </p>

          <h2>Geschäftsbereich</h2>
          <p>
            Unternehmensberatung einschließlich der Unternehmensorganisation,
            Radiologietechnologie
            <br />
            Registrierungsnummer: 19-GBR-075932
          </p>
        </div>
      </div>
    </section>
  );
}
