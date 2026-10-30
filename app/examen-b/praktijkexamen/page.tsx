import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FeitenLijst } from "@/components/fact-cards";
import { PageHero } from "@/components/page-hero";
import { euro, site } from "@/lib/site";

export const metadata = { title: "Praktijkexamen auto" };

export default function PraktijkexamenPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { href: "/examen-b/", label: "Examen B" }, { label: "Praktijkexamen" }]}
        title="Praktijkexamen auto"
        intro="Wanneer je examen mag doen, hoe de examendag verloopt en wat je meeneemt. Bij AVT zit het in ieder pakket."
      />
      <section className="sectie">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lopend">
            <h2>Wanneer mag je examen doen?</h2>
            <p>
              Vanaf 17 jaar mag je rijexamen doen bij het CBR. Je moet dan geslaagd zijn voor je theorie en gezond genoeg zijn verklaard om veilig te kunnen rijden; dat regel je met de{" "}
              <Link href="/gezondheidsverklaring/" className="tekstlink">
                Gezondheidsverklaring
              </Link>
              . Je rijschool reserveert het examen voor je, nadat je de rijschool via Mijn CBR hebt{" "}
              <Link href="/rijschool-machtigen/" className="tekstlink">
                gemachtigd
              </Link>
              .
            </p>
            <h2>Zo gaat het examen</h2>
            <p>Het praktijkexamen duurt in totaal 55 minuten en bestaat uit drie delen.</p>
            <h3>1. Voor de examenrit</h3>
            <p>
              In het CBR-examencentrum maak je kennis met de examinator. Die controleert je identiteitsbewijs, of je theorie-uitslag geldig is en of je het formulier Zelfreflectie hebt ingevuld. Meestal mag je instructeur meerijden als je dat wilt. Op het parkeerterrein lees je het kenteken van een stilstaande auto op ongeveer 25 meter, en de examinator stelt een paar vragen over de auto.
            </p>
            <h3>2. De examenrit</h3>
            <p>
              De rit duurt ongeveer 35 minuten. Een deel rijd je zelfstandig naar een bestemming met een navigatiesysteem, de rest op aanwijzingen van de examinator. Die let onder meer op de beheersing van de auto, je kijkgedrag en voorrang verlenen. Heb je de bijzondere verrichtingen goed gedaan tijdens een{" "}
              <Link href="/examen-b/tussentijdse-toets/" className="tekstlink">
                tussentijdse toets
              </Link>
              , dan krijg je daarvoor vrijstelling.
            </p>
            <h3>3. De uitslag</h3>
            <p>
              Direct na de rit hoor je of je geslaagd bent. Geslaagd? Dan vraag je ná de examendag je rijbewijs aan bij je gemeente; dat kost in 2026 maximaal {euro(site.licenseMax)}. Gezakt? Je hoort waar je nog aan moet werken en kunt op zijn vroegst na 2 weken opnieuw examen doen. Wordt het examen afgebroken door gevaarlijk rijgedrag, dan duurt dat minstens 15 weken. Na 4 keer zakken binnen 5 jaar volgt een{" "}
              <Link href="/examen-b/nader-onderzoek/" className="tekstlink">
                nader onderzoek rijvaardigheid
              </Link>
              .
            </p>
            <p className="bronregel">
              Bron:{" "}
              <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/praktijkexamen-auto" target="_blank" rel="noopener noreferrer">
                CBR: Praktijkexamen auto
              </a>
              , opgehaald op 10 oktober 2026.
            </p>
          </div>
          <div className="grid content-start gap-5 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <FeitenLijst
              feiten={[
                { icoon: "klok", titel: "55 minuten", tekst: "Waarvan ongeveer 35 minuten rijden." },
                { icoon: "identiteit", titel: "Meenemen", tekst: "Je geldige identiteitsbewijs en het ingevulde formulier Zelfreflectie." },
                { icoon: "kalender", titel: "Vanaf 17 jaar", tekst: "Met je theorie gehaald en je Gezondheidsverklaring in orde." },
                { icoon: "auto", titel: `${euro(site.examPrice)} bij AVT`, tekst: `In ieder pakket inbegrepen. Het CBR-tarief is ${euro(site.examCbr)}.` },
              ]}
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
