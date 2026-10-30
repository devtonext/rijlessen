import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { IcoonCheck } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { euro, site } from "@/lib/site";

export const metadata = { title: "Examen B" };

const examens = [
  {
    title: "Praktijkexamen B",
    price: site.examPrice,
    cbr: site.examCbr,
    text: "Het officiële CBR-examen voor je rijbewijs B. Zit in ieder lespakket.",
    href: "/examen-b/praktijkexamen/",
  },
  {
    title: "Tussentijdse toets",
    price: site.tttPrice,
    cbr: site.examCbr,
    text: "Een proefexamen bij het CBR, met feedback van een examinator.",
    href: "/examen-b/tussentijdse-toets/",
  },
  {
    title: "Faalangstexamen",
    price: site.faalangstPrice,
    cbr: site.faalangstCbr,
    text: "Meer tijd, een speciaal getrainde examinator en een time-out als je die nodig hebt.",
    href: "/examen-b/faalangstexamen/",
  },
  {
    title: "Nader onderzoek (BN-O)",
    price: site.bnoPrice,
    cbr: site.bnoCbr,
    text: "Het speciale examen na vier keer zakken binnen vijf jaar.",
    href: "/examen-b/nader-onderzoek/",
  },
];

export default function ExamenPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Examen B" }]}
        title="Goed voorbereid naar je examen"
        intro="We oefenen de examenonderdelen, rijden rond het examencentrum en bespreken wat je op de dag verwacht."
        image="/beeld/hero-les-1280.jpg"
        imageAlt="De leerling stuurt de lesauto door een woonwijk terwijl de instructeur vooruit wijst"
        imageWidth={2048}
        imageHeight={1365}
      />
      <section className="sectie">
        <div className="binnen grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="beeldkader aspect-[16/10] lg:col-span-6">
            <img src="/beeld/hero-les-1280.jpg" alt="De leerling stuurt de lesauto door een woonwijk terwijl de instructeur vooruit wijst" width={1280} height={800} />
          </div>
          <div className="lg:col-span-6">
            <h2 className="kop-2">Met vertrouwen het examen in</h2>
            <p className="inleiding mt-4">
              Een goede voorbereiding maakt het verschil. Je traint niet alleen je rijvaardigheid, maar ook je houding op de examendag. Zenuwen horen erbij; je instructeur helpt je er rustig mee om te gaan.
            </p>
            <ul className="vinklijst mt-6">
              {[
                ["Examenroute oefenen", "Je rijdt rond het examencentrum, zodat de omgeving vertrouwd aanvoelt."],
                ["Realistische examentraining", "Inclusief zelfstandig rijden met navigatie en bijzondere verrichtingen."],
                ["Rust bij faalangst", "Speciale begeleiding, en een faalangstexamen voor wie daar baat bij heeft."],
                ["Examen inbegrepen", "Bij elk lespakket zit een praktijkexamen B."],
              ].map(([t, d]) => (
                <li key={t}>
                  <IcoonCheck />
                  <span>
                    <strong>{t}</strong>
                    <span className="block gedempt">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="sectie sectie-mist">
        <div className="binnen">
          <h2 className="kop-2">De examens en toetsen</h2>
          <p className="inleiding mt-4">Per examen zie je de prijs bij AVT en welk deel daarvan naar het CBR gaat. Klik door om te lezen hoe het examen precies gaat.</p>
          <ul className="pakketraster mt-10">
            {examens.map((e) => (
              <li key={e.title} className="kaart kaart-zweef pakket">
                <h3 className="kop-3">{e.title}</h3>
                <p className="pakket-prijs">{euro(e.price)}</p>
                <p className="klein gedempt">waarvan {euro(e.cbr)} CBR-tarief 2026</p>
                <p>{e.text}</p>
                <Link className="tekstlink mt-auto" href={e.href}>
                  Zo gaat het: {e.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[54rem]">
            Het CBR-tarief maakt de rijschool voor je over aan het CBR. Daarnaast rekent een rijschool volgens het CBR voor de administratie, de lesauto, de instructeur en eventueel een les vlak voor het examen.
          </p>
          <p className="bronregel mt-4">
            Bron:{" "}
            <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/wat-kost-het-halen-van-een-autorijbewijs" target="_blank" rel="noopener noreferrer">
              CBR: Kosten autorijbewijs halen
            </a>
            , opgehaald op 10 oktober 2026.
          </p>
        </div>
      </section>
      <section className="sectie">
        <div className="binnen grid gap-4 sm:grid-cols-2">
          <Link className="kaart kaart-zweef" href="/gezondheidsverklaring/">
            <strong className="block">Gezondheidsverklaring</strong>
            <span className="gedempt">Vul je in het begin van je opleiding in via Mijn CBR.</span>
          </Link>
          <Link className="kaart kaart-zweef" href="/rijschool-machtigen/">
            <strong className="block">Rijschool machtigen</strong>
            <span className="gedempt">Zodat AVT je examen bij het CBR kan reserveren.</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
