import Link from "next/link";
import { footerLessen, navExamens, site } from "@/lib/site";
import { Sterren } from "./icons";

export function Footer() {
  return (
    <footer className="voet">
      <div className="binnen grid gap-12 py-16 lg:grid-cols-12">
        <div className="grid content-start gap-6 lg:col-span-4">
          <Link className="block w-44" href="/">
            <img src="/merk/avt-logo-licht.svg" alt="" width={1494} height={491} loading="lazy" />
            <span className="sr-only">AVT Rijopleidingen, naar de homepage</span>
          </Link>
          <p className="max-w-[34ch]">{site.tagline}</p>
          <div>
            <a href={site.googleMaps} target="_blank" rel="noopener noreferrer" className="voet-badge">
              <img src="/merk/google-g.svg" alt="Google" width={22} height={22} loading="lazy" />
              <span className="grid leading-tight">
                <span className="flex items-center gap-2 font-semibold">
                  {site.rating}
                  <Sterren />
                </span>
                <span className="klein">{site.reviewCount} reviews op Google</span>
              </span>
              <span className="sr-only"> (opent in een nieuw tabblad)</span>
            </a>
          </div>
        </div>

        <nav aria-label="Voetmenu" className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
          <div>
            <h2>Rijlessen</h2>
            <ul className="voet-lijst">
              {footerLessen.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Examens en regels</h2>
            <ul className="voet-lijst">
              {navExamens.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="grid content-start gap-8 lg:col-span-3">
          <div>
            <h2>Contact</h2>
            <ul className="voet-lijst">
              <li>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                  <span className="sr-only"> (opent in een nieuw tabblad)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                  <span className="sr-only"> (opent in een nieuw tabblad)</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Lestijden</h2>
            <p>Flexibel in te plannen, in overleg met je instructeur.</p>
          </div>
          <div>
            <h2>Lesgebied</h2>
            <p>{site.area}</p>
          </div>
        </div>
      </div>
      <div className="binnen border-t border-white/15 py-6 flex flex-wrap justify-between gap-3 klein">
        <p>© 2026 AVT Rijopleidingen, KvK {site.kvk}</p>
        <p>Rijschool in Utrecht, Nieuwegein en omstreken</p>
        <Link href="/privacy/">Privacy en bronnen</Link>
      </div>
    </footer>
  );
}
