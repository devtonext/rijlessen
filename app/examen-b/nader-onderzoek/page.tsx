import { CtaBand } from "@/components/cta-band";
import { FeitenLijst } from "@/components/fact-cards";
import { PageHero } from "@/components/page-hero";
import { euro, site } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Nader onderzoek rijvaardigheid" };

export default function NaderOnderzoekPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { href: "/examen-b/", label: "Examen B" }, { label: "Nader onderzoek" }]}
        title="Nader onderzoek"
        intro="Vier keer gezakt binnen vijf jaar? Dan doe je een speciaal examen, waarbij de examinator meer tijd heeft."
      />
      <section className="sectie">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lopend">
            <h2>Wanneer krijg je een nader onderzoek?</h2>
            <p>Zak je 4 keer binnen 5 jaar voor je rijexamen auto, dan doe je daarna een nader onderzoek rijvaardigheid. Je rijschool vraagt dit examen voor je aan. Bij AVT staat het in de tarieven als BN-O examen.</p>
            <h2>Zo gaat het</h2>
            <p>
              Het nader onderzoek duurt 1 uur en 10 minuten, 15 minuten langer dan het gewone{" "}
              <Link href="/examen-b/praktijkexamen/" className="tekstlink">
                praktijkexamen
              </Link>
              . Het ontvangstgesprek is langer en je bespreekt vooraf met de examinator waarom het eerder niet lukte. Het examen gaat in dezelfde volgorde en je moet hetzelfde kunnen. Je rijdt minstens 35 minuten; de examinator kan je bepaalde dingen vaker laten doen, en je kunt om een time-out vragen.
            </p>
            <p>
              In het eindgesprek hoor je de uitslag. Slaag je niet, dan krijg je een persoonlijk advies over hoe je het beste verder kunt gaan. Je kunt het nader onderzoek doen tot je geslaagd bent; er is geen wettelijke limiet. Na de tweede keer zakken kan het CBR wel een rijbewijskeuring vragen, met een{" "}
              <Link href="/gezondheidsverklaring/" className="tekstlink">
                Gezondheidsverklaring
              </Link>
              .
            </p>
            <p className="bronregel">
              Bron:{" "}
              <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/praktijkexamen-auto/4-keer-gezakt-voor-je-praktijkexamen-auto" target="_blank" rel="noopener noreferrer">
                CBR: 4 keer of vaker gezakt
              </a>
              , opgehaald op 10 oktober 2026.
            </p>
          </div>
          <div className="grid content-start gap-5 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <FeitenLijst
              feiten={[
                { icoon: "klok", titel: "1 uur 10 minuten", tekst: "Met een langer ontvangstgesprek vooraf." },
                { icoon: "persoon", titel: "Meer tijd en begeleiding", tekst: "De examinator neemt de tijd en geeft persoonlijk advies." },
                { icoon: "identiteit", titel: "Zelfde eisen", tekst: "Dezelfde volgorde en hetzelfde niveau als het gewone examen." },
                { icoon: "auto", titel: `${euro(site.bnoPrice)} bij AVT`, tekst: `Het CBR-tarief is ${euro(site.bnoCbr)}.` },
              ]}
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
