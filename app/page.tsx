import Link from "next/link";
import { AreaMap } from "@/components/area-map";
import { Calculator } from "@/components/calculator";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { IcoonAuto, IcoonCheck, IcoonKlok, IcoonPersoon, IcoonTaal, IcoonTel, Sterren } from "@/components/icons";
import { Journey } from "@/components/journey";
import { PackageGrid } from "@/components/package-grid";
import { Reviews } from "@/components/reviews";
import { Wizard } from "@/components/wizard";
import { homeFaqs, kernpunten } from "@/lib/content";
import { site } from "@/lib/site";

const kernIconen = [IcoonPersoon, IcoonKlok, IcoonTaal, IcoonAuto];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: site.name,
    telephone: site.phoneTel,
    email: site.email,
    areaServed: ["Utrecht", "Nieuwegein"],
    knowsLanguage: ["nl", "en"],
    sameAs: [site.instagram],
  };

  return (
    <main id="inhoud">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero" aria-labelledby="hero-kop">
        <div className="hero-beeld">
          <picture>
            <source media="(min-aspect-ratio: 5/4)" type="image/webp" srcSet="/beeld/hero-les-1280.webp" />
            <source media="(min-aspect-ratio: 5/4)" srcSet="/beeld/hero-les-1280.jpg" />
            <source type="image/webp" srcSet="/beeld/hero-les-staand-760.webp" />
            <img
              src="/beeld/hero-les-staand-760.jpg"
              width={1080}
              height={1920}
              alt="Vanaf de achterbank: de leerling heeft beide handen aan het stuur van de Volkswagen Golf en de instructeur wijst vooruit door de voorruit"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="hero-sluier" aria-hidden="true" />
        <div className="binnen hero-inhoud">
          <div className="hero-tekst">
            <h1 id="hero-kop" data-intro="true" style={{ "--i": 0 } as React.CSSProperties}>
              Rijles met een <span className="hero-accent">vaste</span> instructeur
            </h1>
            <p className="hero-intro" data-intro="true" style={{ "--i": 1 } as React.CSSProperties}>
              In Utrecht, Nieuwegein en omstreken. Lessen van 50 minuten in het Nederlands of Engels, en een gratis proefles ter waarde van € 65.
            </p>
            <div className="hero-knoppen" data-intro="true" style={{ "--i": 2 } as React.CSSProperties} data-verberg-actiebalk="true">
              <Link className="knop knop-primair" href="/proefles/">
                Gratis proefles aanvragen
              </Link>
              <a href={`tel:${site.phoneTel}`} className="knop knop-op-donker">
                <IcoonTel />
                Bel {site.phoneDisplay}
              </a>
            </div>
            <a href="#reviews" className="hero-score" data-intro="true" style={{ "--i": 3 } as React.CSSProperties}>
              <img src="/merk/google-g.svg" alt="Google" width={20} height={20} />
              <span className="font-semibold">{site.rating}</span>
              <Sterren />
              <span>{site.reviewCount} reviews</span>
            </a>
          </div>
        </div>
      </section>

      <section className="binnen">
        <ul className="kernstrook">
          {kernpunten.map((k, i) => {
            const Icon = kernIconen[i];
            return (
              <li key={k.title} data-onthul="true" style={{ "--i": i } as React.CSSProperties}>
                <Icon />
                <div>
                  <strong>{k.title}</strong>
                  <span>{k.text}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <Wizard />

      <section id="pakketten" className="sectie" aria-labelledby="pakketten-kop">
        <div className="binnen">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
            <div className="max-w-[46rem]">
              <h2 id="pakketten-kop" className="kop-2" data-onthul="true">
                Vijf pakketten, examen inbegrepen
              </h2>
              <p className="inleiding mt-4" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
                In een pakket kost een les € 60 in plaats van € 65, en zitten het praktijkexamen B en de online theorieomgeving er gratis bij.
              </p>
            </div>
            <div data-onthul="true" style={{ "--i": 2 } as React.CSSProperties}>
              <Link className="tekstlink" href="/rijlessen-b/">
                Alle tarieven en examens
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <PackageGrid />
            <div className="mt-8">
              <Calculator />
            </div>
          </div>
        </div>
      </section>

      <Journey />

      <section className="sectie" aria-labelledby="aandacht-kop">
        <div className="binnen grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="beeldkader aspect-[4/3] lg:col-span-6" data-onthul="true">
            <img
              src="/beeld/lesauto-plas-960.jpg"
              alt="De witte Volkswagen Golf van AVT Rijopleidingen met het L-bord op het dak, geparkeerd aan het water"
              width={960}
              height={720}
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 id="aandacht-kop" className="kop-2" data-onthul="true">
              Rustig leren rijden
            </h2>
            <p className="inleiding mt-4" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
              Bij AVT Rijopleidingen staat persoonlijke aandacht voorop. Iedereen leert op zijn of haar eigen manier rijden, daarom stemt je instructeur elke les af op jou: rustig, geduldig en op jouw tempo.
            </p>
            <p className="mt-4 max-w-[42rem]" data-onthul="true" style={{ "--i": 2 } as React.CSSProperties}>
              Loop je ergens tegenaan, zoals examenstress of faalangst? Dan kijk je samen rustig hoe je daar doorheen komt.
            </p>
            <ul className="vinklijst mt-6">
              {[
                "Rijles in het Nederlands of Engels",
                "Alleen handgeschakeld, zodat je meteen leert schakelen",
                "Snel starten, zonder lange wachtrij",
                "Heldere afspraken en transparante tarieven",
              ].map((t) => (
                <li key={t}>
                  <IcoonCheck />
                  {t}
                </li>
              ))}
            </ul>
            <Link className="knop knop-secundair mt-8" href="/over-ons/">
              Meer over AVT Rijopleidingen
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
      <AreaMap />

      <section className="sectie sectie-mist" aria-labelledby="faq-kop">
        <div className="binnen grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="faq-kop" className="kop-2" data-onthul="true">
              Veelgestelde vragen
            </h2>
            <Link className="tekstlink mt-4 inline-block" href="/veelgestelde-vragen/">
              Alle vragen en antwoorden
            </Link>
          </div>
          <div className="lg:col-span-7">
            <FaqList items={homeFaqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
