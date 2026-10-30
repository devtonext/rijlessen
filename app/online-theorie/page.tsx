import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { IcoonCheck } from "@/components/icons";
import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Online theorie" };

export default function TheoriePage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { href: "/onze-diensten/", label: "Onze diensten" }, { label: "Online theorie" }]}
        title="Online theorie"
        intro="Oefen thuis in je eigen tempo voor je theorie-examen. In ieder lespakket zit de online theorieomgeving gratis."
        actions="none"
      />
      <div className="binnen pb-8">
        <div className="mt-7 flex flex-wrap gap-3" data-verberg-actiebalk="true">
          <Link className="knop knop-primair" href="/proefles/">
            Vraag toegang aan
          </Link>
          <Link className="knop knop-secundair" href="/rijlessen-b/">
            Bekijk de pakketten
          </Link>
        </div>
      </div>
      <section className="sectie">
        <div className="binnen grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 lopend">
            <h2>Alles om je theorie te halen</h2>
            <p>
              Theorie en praktijk versterken elkaar. Wie tijdens de rijlessen ook met de theorie bezig is, begrijpt verkeerssituaties sneller en rijdt bewuster. De vragen en onderwerpen sluiten aan op het theorie-examen van het CBR.
            </p>
            <p>Los kost de online theorieomgeving € 50. In ieder lespakket, van Starter tot en met Platinum, zit hij gratis.</p>
          </div>
          <ul className="lg:col-span-5 kernstrook">
            {[
              ["Oefenexamens", "Onbeperkt oefenen met actuele examenvragen, net als bij het echte CBR-examen."],
              ["Uitlegvideo’s", "Heldere video’s en uitleg bij elk theorieonderwerp."],
              ["Op elk apparaat", "Leer op je telefoon, tablet of laptop, waar en wanneer je wilt."],
              ["Volg je voortgang", "Zie waar je staat en welke onderdelen je nog moet oefenen."],
            ].map(([t, d]) => (
              <li key={t}>
                <IcoonCheck />
                <div>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="sectie sectie-mist">
        <div className="binnen lopend">
          <h2>Het theorie-examen bij het CBR</h2>
          <p>Voordat je praktijkexamen mag doen, haal je je theorie-examen bij het CBR. Dat mag vanaf 16 jaar. Je laat zien dat je gevaar herkent, de verkeersregels kent en verkeersinzicht hebt.</p>
          <ul>
            <li>Het examen heeft 50 vragen, plus 2 testvragen die niet meetellen. Je hebt er minimaal 44 goed nodig.</li>
            <li>Je hebt 30 minuten. Met extra tijd, bijvoorbeeld bij dyslexie, krijg je 45 minuten.</li>
            <li>Het gewone theorie-examen kost € 50,50. In het Engels kost het € 57 en met extra tijd € 64.</li>
            <li>Neem een geldig identiteitsbewijs en je reserveringsnummer mee. De uitslag krijg je direct na afloop.</li>
          </ul>
          <p className="bronregel">
            Bron:{" "}
            <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/theorie-examen-auto" target="_blank" rel="noopener noreferrer">
              CBR: Theorie-examen auto
            </a>
            , opgehaald op 10 oktober 2026.
          </p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
