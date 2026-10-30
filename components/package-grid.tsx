import Link from "next/link";
import { IcoonCheck } from "./icons";
import { euro } from "@/lib/site";
import { packageBenefits, packages } from "@/lib/packages";

export function PackageGrid() {
  return (
    <>
      <p className="pakket-samenvatting">
        <IcoonCheck />
        In ieder pakket: praktijkexamen B, een gratis proefles t.w.v. € 65 en de online theorieomgeving.
      </p>
      <ul className="pakketraster">
        {packages.map((p) => (
          <li key={p.id} className="kaart kaart-zweef pakket" data-meest-gekozen={p.featured ? "ja" : undefined}>
            {p.featured && <span className="pakket-label">Meest gekozen</span>}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="pakket-naam">{p.name}</h3>
            </div>
            <p className="pakket-lessen">{p.lessons} rijlessen</p>
            <p className="pakket-prijs">{euro(p.price)}</p>
            <p className="klein gedempt">€ {p.savings} voordeel ten opzichte van alles los</p>
            <ul className="vinklijst">
              {packageBenefits.map((b) => (
                <li key={b}>
                  <IcoonCheck />
                  {b}
                </li>
              ))}
            </ul>
            <Link className={`knop knop-blok mt-auto ${p.featured ? "knop-primair" : "knop-secundair"}`} href={`/proefles/?pakket=${p.id}`}>
              Kies {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
