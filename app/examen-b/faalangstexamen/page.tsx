import { CtaBand } from "@/components/cta-band";
import { FeitenLijst } from "@/components/fact-cards";
import { PageHero } from "@/components/page-hero";
import { euro, site } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Faalangstexamen" };

const rows = [
  ["Totale examentijd", "55 minuten", "1 uur 20 minuten"],
  ["Examenrit", "ongeveer 35 minuten", "35 minuten"],
  ["Extra tijd voor rust en uitleg", "nee", "ja"],
  ["Time-out tijdens de rit", "nee", "ja"],
  ["Examinator", "reguliere examinator", "speciaal getraind in faalangstbegeleiding"],
  ["CBR-tarief 2026", euro(site.examCbr), euro(site.faalangstCbr)],
];

export default function FaalangstPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { href: "/examen-b/", label: "Examen B" }, { label: "Faalangstexamen" }]}
        title="Faalangstexamen"
        intro="Te zenuwachtig om te laten zien wat je kunt? Bij een faalangstexamen krijg je meer tijd en een time-out."
      />
      <section className="sectie">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lopend">
            <h2>Meer rust op de examendag</h2>
            <p>
              Heb je last van faalangst bij examens? Dan kun je een faalangstexamen doen. Je krijgt een examinator die is getraind om mensen met faalangst te begeleiden en meer tijd heeft om je op je gemak te stellen. Tijdens de rit kun je om een time-out vragen.
            </p>
            <p>
              Je moet hetzelfde kunnen als bij het gewone{" "}
              <Link href="/examen-b/praktijkexamen/" className="tekstlink">
                praktijkexamen
              </Link>
              , en het examen verloopt in dezelfde volgorde. Je rijschool vraagt het faalangstexamen voor je aan; je moet wel eerst geslaagd zijn voor je theorie-examen.
            </p>
            <p>Bij AVT krijg je speciale begeleiding als examenstress of faalangst meespeelt: je kijkt samen met je instructeur rustig hoe je daar doorheen komt.</p>
            <h2>Gewoon examen of faalangstexamen</h2>
            <div className="overflow-auto">
              <table className="vergelijk">
                <thead>
                  <tr>
                    <th></th>
                    <th>Gewoon</th>
                    <th>Faalangstexamen</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r[0]}>
                      <th>{r[0]}</th>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="bronregel">
              Bron:{" "}
              <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/praktijkexamen-auto/extreem-zenuwachtig-of-faalangst-voor-je-rijexamen" target="_blank" rel="noopener noreferrer">
                CBR: Faalangst rijexamen
              </a>
              , opgehaald op 10 oktober 2026.
            </p>
          </div>
          <div className="grid content-start gap-5 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <FeitenLijst
              feiten={[
                { icoon: "klok", titel: "1 uur 20 minuten", tekst: "Waarvan 35 minuten rijden; de rest is voor rust en uitleg." },
                { icoon: "persoon", titel: "Getrainde examinator", tekst: "Speciaal getraind in het begeleiden van faalangst." },
                { icoon: "identiteit", titel: "Time-out mogelijk", tekst: "Tijdens de rit mag je om een pauze vragen." },
                { icoon: "auto", titel: `${euro(site.faalangstPrice)} bij AVT`, tekst: `Het CBR-tarief is ${euro(site.faalangstCbr)}.` },
              ]}
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
