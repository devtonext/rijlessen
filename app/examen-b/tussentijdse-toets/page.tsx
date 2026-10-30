import { CtaBand } from "@/components/cta-band";
import { FeitenLijst } from "@/components/fact-cards";
import { PageHero } from "@/components/page-hero";
import { euro, site } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Tussentijdse toets" };

export default function TttPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { href: "/examen-b/", label: "Examen B" }, { label: "Tussentijdse toets" }]}
        title="Tussentijdse toets"
        intro="Een proefexamen bij het CBR: je went aan de examensituatie en krijgt feedback van een examinator."
      />
      <section className="sectie">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lopend">
            <h2>Wat is een tussentijdse toets?</h2>
            <p>
              Met de tussentijdse toets ervaar je hoe het is om praktijkexamen te doen. De toets duurt even lang als een rijexamen en je doet dezelfde dingen. Na afloop vertelt een CBR-examinator wat al goed gaat en wat je nog kunt verbeteren, zodat je je laatste lessen zo goed mogelijk benut.
            </p>
            <p>
              Volgens het CBR kiest bijna de helft van de kandidaten (46%) voor de toets, en ligt het slagingspercentage dan ruim 10 procentpunten hoger. Doe je de bijzondere verrichtingen goed, vlot en veilig, zoals fileparkeren, omkeren en achteruit rijden, dan hoef je die op je eerstvolgende{" "}
              <Link href="/examen-b/praktijkexamen/" className="tekstlink">
                praktijkexamen
              </Link>{" "}
              niet meer te doen.
            </p>
            <h2>Wanneer doe je de toets?</h2>
            <p>
              Je moet minimaal 16,5 jaar zijn en geslaagd voor je theorie-examen. Een goed moment is tussen tweederde en driekwart van je rijopleiding: je rijdt dan al goed genoeg voor lastigere situaties, en de feedback heeft het meeste effect. Je rijschool reserveert de toets voor je.
            </p>
            <h2>Zo gaat de toets</h2>
            <ol>
              <li>Kennismaking met de examinator, controle van je identiteitsbewijs, je theorie-uitslag en het formulier Zelfreflectie.</li>
              <li>Op het parkeerterrein een ogentest en een paar vragen over de auto.</li>
              <li>Een toetsrit van ongeveer 35 minuten, deels zelfstandig met navigatie.</li>
              <li>Direct daarna het advies: wat goed gaat, wat beter kan en of je vrijstelling krijgt.</li>
            </ol>
            <p className="bronregel">
              Bron:{" "}
              <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/praktijkexamen-auto/tussentijdse-toets-doen" target="_blank" rel="noopener noreferrer">
                CBR: Tussentijdse toets
              </a>
              , opgehaald op 10 oktober 2026.
            </p>
          </div>
          <div className="grid content-start gap-5 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <FeitenLijst
              feiten={[
                { icoon: "klok", titel: "55 minuten", tekst: "Net zo lang als het praktijkexamen." },
                { icoon: "kalender", titel: "Vanaf 16,5 jaar", tekst: "En geslaagd voor je theorie-examen." },
                { icoon: "identiteit", titel: "Niet verplicht", tekst: "Wel een goede generale repetitie voor het echte examen." },
                { icoon: "auto", titel: `${euro(site.tttPrice)} bij AVT`, tekst: `Het CBR-tarief is ${euro(site.examCbr)}.` },
              ]}
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
