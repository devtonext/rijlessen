import Link from "next/link";
import { IcoonTel } from "@/components/icons";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="inhoud">
      <header className="paginakop">
        <div className="binnen">
          <p className="klein gedempt">404</p>
          <h1 className="kop-1 mt-4">Pagina niet gevonden</h1>
          <p className="inleiding mt-4">Deze pagina bestaat niet of is verplaatst. Ga terug naar de homepage of plan meteen een gratis proefles.</p>
          <div className="hero-knoppen">
            <Link className="knop knop-primair" href="/">
              Naar de homepage
            </Link>
            <Link className="knop knop-secundair" href="/proefles/">
              Gratis proefles aanvragen
            </Link>
            <a href={`tel:${site.phoneTel}`} className="knop knop-secundair">
              <IcoonTel />
              Bel {site.phoneDisplay}
            </a>
          </div>
        </div>
      </header>
    </main>
  );
}
