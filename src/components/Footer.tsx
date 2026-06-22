import Link from "next/link";

const services = [
  { label: "Remote Scanning", href: "/remote-scanning" },
  { label: "Remote Mentoring", href: "/remote-mentoring" },
  { label: "Projektmanagement", href: "/projektmanagement" },
  { label: "Weiterbildung & Kurse", href: "/weiterbildung" },
  { label: "The Scan Club", href: "/club" },
];

const links = [
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Weitere Links</h3>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-xs text-muted">
              <li>
                <a href="tel:+436605296601" className="hover:text-foreground transition-colors">
                  +43 660 5296601
                </a>
              </li>
              <li>
                <a href="mailto:info@thescan.at" className="hover:text-foreground transition-colors">
                  info@thescan.at
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com/company/the-scan-remote-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border text-xs text-muted">
          <p>Copyright &copy; {new Date().getFullYear()} The Scan Remote & Service FlexCo. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
