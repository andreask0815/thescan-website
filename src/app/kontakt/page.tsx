import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt – The Scan",
  description:
    "Radiologie. Sicher gedacht. Zukunftsfähig umgesetzt. Kontaktieren Sie uns.",
};

export default function Kontakt() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564725075388-cc8338732289?w=1600&q=80"
            alt="Modernes Krankenhaus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        <div className="relative py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Kontakt
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Radiologie. Sicher gedacht. Zukunftsfähig umgesetzt.
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                High Quality Remote Scanning & Remote Mentoring für Institute
                und Kliniken mit Qualitätsanspruch.
              </p>
              <p className="mt-2 text-muted">
                Ihre Geräte laufen — auch wenn Ihr Team nicht mehr kann.
              </p>

              <div className="mt-12 space-y-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest text-muted mb-1">
                    Telefon
                  </div>
                  <a
                    href="tel:+436605296601"
                    className="text-lg font-medium hover:text-accent transition-colors"
                  >
                    +43 660 5296601
                  </a>
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest text-muted mb-1">
                    E-Mail
                  </div>
                  <a
                    href="mailto:info@thescan.at"
                    className="text-lg font-medium hover:text-accent transition-colors"
                  >
                    info@thescan.at
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-surface p-8 lg:p-10">
              <h2 className="text-xl font-semibold mb-8">
                Nachricht senden
              </h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Ihr Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Ihre E-Mail Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Ihre Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Ihre Nachricht an uns
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>
                <p className="text-xs text-muted">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
                >
                  Absenden
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
