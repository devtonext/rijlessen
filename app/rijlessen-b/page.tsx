import { Calculator } from "@/components/calculator";
import { CtaBand } from "@/components/cta-band";
import { IcoonAuto, IcoonKlok, IcoonPersoon, IcoonTaal } from "@/components/icons";
import { PackageGrid } from "@/components/package-grid";
import { PageHero } from "@/components/page-hero";
import { euro, site } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Rijlessen B en pakketten" };

const kenmerken = [
  { Icon: IcoonKlok, title: "50 minuten per les", text: "Genoeg tijd om rustig te oefenen, zonder gehaast gevoel." },
  { Icon: IcoonPersoon, title: "Altijd dezelfde instructeur", text: "Iemand die jou en je rijstijl kent." },
  { Icon: IcoonTaal, title: "Nederlands of Engels", text: "Rijles is mogelijk in beide talen." },
  { Icon: IcoonAuto, title: "Handgeschakelde Golf", text: "Een Volkswagen Golf met dubbele bediening." },
];

const tarieven = [
  ["Proefles", "gratis (t.w.v. € 65)"],
  ["Losse rijles (50 minuten)", euro(site.lessonLoose)],
  ["Rijles in een pakket", `${euro(site.lessonPackage)} per les`],
  ["Online theorieomgeving", euro(site.theoryPrice)],
  ["Praktijkexamen B", euro(site.examPrice)],
  ["Tussentijdse toets", euro(site.tttPrice)],
  ["Faalangstexamen", euro(site.faalangstPrice)],
  ["Nader onderzoek (BN-O)", euro(site.bnoPrice)],
];

export default function RijlessenPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Rijlessen B" }]}
        title="Rijlessen B en pakketten"
        intro="Elke rijles duurt 50 minuten en past bij jouw niveau en tempo. Kies een van de vijf pakketten of losse lessen."
        image="/beeld/lesauto-straat-960.jpg"
        imageAlt="De witte lesauto van AVT Rijopleidingen van voren, in een straat met nieuwbouwwoningen"
        imageWidth={2048}
        imageHeight={1365}
      />
      <section className="sectie">
        <div className="binnen grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="kop-2">Zo ziet een rijles eruit</h2>
            <p className="inleiding mt-4">
              Bij AVT Rijopleidingen leer je autorijden op een manier die bij jou past. Je krijgt rustige, duidelijke uitleg van een gediplomeerde instructeur en bouwt zo les voor les aan je rijvaardigheid en je zelfvertrouwen.
            </p>
            <p className="mt-4 max-w-[42rem]">De eerste les is een gratis proefles ter waarde van € 65: vrijblijvend kennismaken.</p>
            <ul className="kernstrook">
              {kenmerken.map(({ Icon, title, text }) => (
                <li key={title}>
                  <Icon />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="beeldkader aspect-[4/3] lg:col-span-6">
            <img src="/beeld/lesauto-straat-960.jpg" alt="De witte lesauto van AVT Rijopleidingen van voren, in een straat met nieuwbouwwoningen" width={960} height={720} />
          </div>
        </div>
      </section>
      <section className="sectie sectie-mist" id="pakketten">
        <div className="binnen">
          <h2 className="kop-2">Kies het pakket dat bij jou past</h2>
          <p className="inleiding mt-4">Iedere les in een pakket kost € 60 in plaats van € 65. Het praktijkexamen B en de online theorie zitten erbij.</p>
          <div className="mt-10">
            <PackageGrid />
            <div className="mt-8">
              <Calculator />
            </div>
          </div>
        </div>
      </section>
      <section className="sectie">
        <div className="binnen">
          <h2 className="kop-2">Losse tarieven en examens</h2>
          <p className="inleiding mt-4">Liever per les betalen, of een examen of toets apart nodig? Dit zijn alle losse tarieven. Een losse rijles duurt ook 50 minuten.</p>
          <dl className="tarieflijst mt-8">
            {tarieven.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-[50rem]">
            Bij elk lespakket is een praktijkexamen B inbegrepen. Meer over de examens en toetsen lees je bij{" "}
            <Link href="/examen-b/" className="tekstlink">
              Examen B
            </Link>
            .
          </p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
