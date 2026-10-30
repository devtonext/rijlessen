import { CtaBand } from "@/components/cta-band";
import { IcoonAuto, IcoonKlok, IcoonPersoon, IcoonTaal } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";

export const metadata = { title: "Over ons" };

const waarom = [
  { Icon: IcoonPersoon, title: "Altijd een vaste instructeur", text: "Persoonlijke begeleiding van iemand die jou en je rijstijl kent." },
  { Icon: IcoonTaal, title: "Tweetalig", text: "Rijles is mogelijk in het Nederlands en in het Engels." },
  { Icon: IcoonAuto, title: "Alleen schakel", text: "Je leert rijden in een handgeschakelde auto." },
  { Icon: IcoonKlok, title: "Geen lange wachtrijen", text: "Snel starten met je rijopleiding en doorpakken." },
];

export default function OverOnsPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Over ons" }]}
        title="Over AVT"
        intro="Een rijschool voor de hele regio Utrecht, waar persoonlijke aandacht voorop staat. Van je proefles tot je examen."
        image="/beeld/lesauto-plas-960.jpg"
        imageAlt="De witte Volkswagen Golf van AVT Rijopleidingen met het L-bord op het dak, geparkeerd aan het water"
        imageWidth={2048}
        imageHeight={1365}
      />
      <section className="sectie">
        <div className="binnen grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="beeldkader aspect-[4/3] lg:col-span-6">
            <img src="/beeld/lesauto-plas-960.jpg" alt="De witte Volkswagen Golf van AVT Rijopleidingen met het L-bord op het dak, geparkeerd aan het water" width={960} height={720} />
          </div>
          <div className="lg:col-span-6 lopend">
            <h2>Iedereen leert anders rijden</h2>
            <p>
              Bij AVT Rijopleidingen staat persoonlijke aandacht voorop. Daarom stemmen we elke les af op jou. Of je nu je eerste meters maakt of al wat ervaring hebt: je gediplomeerde instructeur begeleidt je rustig, geduldig en op jouw tempo naar je rijbewijs.
            </p>
            <p>
              Je rijdt in een goed onderhouden lesauto met dubbele bediening, zodat je je vanaf de eerste les veilig en op je gemak voelt. Naast de praktijklessen oefen je thuis in de online theorieomgeving, zo werk je aan beide onderdelen tegelijk.
            </p>
            <p>
              We houden het graag duidelijk en eerlijk: heldere afspraken, transparante tarieven en korte lijntjes. Loop je ergens tegenaan, bijvoorbeeld examenstress of faalangst? Dan kijken we samen rustig hoe we je daar doorheen helpen.
            </p>
            <p>Van je allereerste proefles tot het moment dat je geslaagd naar buiten loopt: we staan naast je. Niet alleen om je rijbewijs te halen, maar om een vaardige, zelfverzekerde bestuurder te worden.</p>
          </div>
        </div>
      </section>
      <section className="sectie sectie-mist">
        <div className="binnen">
          <h2 className="kop-2">Waarom leerlingen voor AVT kiezen</h2>
          <ul className="kernstrook">
            {waarom.map(({ Icon, title, text }) => (
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
      </section>
      <section className="sectie">
        <div className="binnen grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lopend">
            <h2>De lesauto</h2>
            <p>Je leert rijden in een witte Volkswagen Golf met handgeschakelde versnellingsbak en dubbele bediening. Je herkent hem aan het daklicht met het L-bord, de naam en het telefoonnummer.</p>
            <p>
              AVT geeft les in Utrecht, Nieuwegein en omstreken, ook in de binnenstad van Utrecht.{" "}
              <Link href="/proefles/" className="tekstlink">
                Plan je gratis proefles
              </Link>{" "}
              en maak kennis.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="beeldkader aspect-[4/3]">
              <img src="/beeld/lesauto-straat-960.jpg" alt="De witte lesauto van AVT Rijopleidingen van voren, in een straat met nieuwbouwwoningen" width={960} height={720} loading="lazy" />
            </div>
            <div className="beeldkader aspect-[4/3]">
              <img src="/beeld/daklicht-760.jpg" alt="Het daklicht op de lesauto met het L-bord, avtrijopleidingen.nl en het telefoonnummer 06 38 92 71 14" width={760} height={570} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        image="/beeld/hero-les-staand-760.jpg"
        alt="Vanaf de achterbank: de leerling stuurt de Volkswagen Golf door een woonstraat met jonge bomen"
        width={1080}
        height={1920}
      />
    </main>
  );
}
