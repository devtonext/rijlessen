import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { IcoonInstagram, IcoonMail, IcoonTel, IcoonWhatsApp, Sterren } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        title="Contact"
        intro="Bel, app of mail voor een gratis proefles of een vraag over rijles. Meestal hoor je binnen één werkdag van ons."
        image="/beeld/daklicht-760.jpg"
        imageAlt="Het daklicht van de lesauto met het L-bord en het telefoonnummer 06 38 92 71 14"
        imageWidth={1200}
        imageHeight={1600}
      />
      <section className="sectie" aria-labelledby="kanalen-kop">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="kanalen-kop" className="kop-2" data-onthul="true">
              Zo bereik je ons
            </h2>
            <ul className="mt-8 grid gap-4">
              <li data-onthul="true" style={{ "--i": 0 } as React.CSSProperties}>
                <a href={`tel:${site.phoneTel}`} className="kaart kaart-zweef flex items-center gap-4 no-underline">
                  <IcoonTel />
                  <span className="min-w-0">
                    <span className="block font-semibold text-inkt">Bellen</span>
                    <span className="block break-words [overflow-wrap:anywhere] text-knopblauw">{site.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="kaart kaart-zweef flex items-center gap-4 no-underline">
                  <IcoonWhatsApp />
                  <span className="min-w-0">
                    <span className="block font-semibold text-inkt">WhatsApp</span>
                    <span className="block break-words [overflow-wrap:anywhere] text-knopblauw">Stuur een bericht</span>
                  </span>
                  <span className="sr-only"> (opent in een nieuw tabblad)</span>
                </a>
              </li>
              <li data-onthul="true" style={{ "--i": 2 } as React.CSSProperties}>
                <a href={`mailto:${site.email}`} className="kaart kaart-zweef flex items-center gap-4 no-underline">
                  <IcoonMail />
                  <span className="min-w-0">
                    <span className="block font-semibold text-inkt">E-mail</span>
                    <span className="block break-words [overflow-wrap:anywhere] text-knopblauw">{site.email}</span>
                  </span>
                </a>
              </li>
              <li data-onthul="true" style={{ "--i": 3 } as React.CSSProperties}>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="kaart kaart-zweef flex items-center gap-4 no-underline">
                  <IcoonInstagram />
                  <span className="min-w-0">
                    <span className="block font-semibold text-inkt">Instagram</span>
                    <span className="block break-words [overflow-wrap:anywhere] text-knopblauw">@avtrijopleidingen</span>
                  </span>
                  <span className="sr-only"> (opent in een nieuw tabblad)</span>
                </a>
              </li>
            </ul>
            <dl className="mt-10 grid gap-6" data-onthul="true">
              <div>
                <dt className="font-semibold">Lestijden</dt>
                <dd className="m-0 mt-1 text-grijs">Flexibel in te plannen, in overleg met je instructeur.</dd>
              </div>
              <div>
                <dt className="font-semibold">Lesgebied</dt>
                <dd className="m-0 mt-1 text-grijs">Utrecht, Nieuwegein en omstreken, ook de binnenstad van Utrecht.</dd>
              </div>
              <div>
                <dt className="font-semibold">Bedrijfsgegevens</dt>
                <dd className="m-0 mt-1 text-grijs">AVT Rijopleidingen, Nieuwegein, KvK {site.kvk}</dd>
              </div>
            </dl>
            <div className="mt-10" data-onthul="true">
              <a href={site.googleMaps} target="_blank" rel="noopener noreferrer" className="google-badge">
                <span className="flex items-center gap-2.5">
                  <img src="/merk/google-g.svg" alt="Google" width={26} height={26} loading="lazy" />
                  <span className="font-semibold">Google-reviews</span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-5xl font-bold leading-none">{site.rating}</span>
                  <span className="grid gap-1">
                    <Sterren />
                    <span className="klein gedempt">{site.reviewCount} reviews, schaal 1 tot 5</span>
                  </span>
                </span>
                <span className="klein tekstlink">
                  Bekijk het profiel op Google
                  <span className="sr-only"> (opent in een nieuw tabblad)</span>
                </span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="kaart" data-onthul="true">
              <ContactForm />
            </div>
            <p className="mt-6 text-grijs" data-onthul="true">
              Wil je je meteen aanmelden voor lessen of een pakket? Gebruik dan het{" "}
              <Link className="tekstlink" href="/proefles/">
                aanmeldformulier
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="sectie sectie-lucht" aria-labelledby="slot-kop" data-verberg-actiebalk="true">
        <div className="binnen grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="slot-kop" className="kop-2" data-onthul="true">
              Plan je gratis proefles
            </h2>
            <p className="inleiding mt-4" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
              Maak vrijblijvend kennis met je instructeur en de lesauto, ter waarde van € 65. Meestal hoor je binnen één werkdag van ons.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-onthul="true" style={{ "--i": 2 } as React.CSSProperties}>
              <a className="knop knop-primair" href="/proefles/">
                Gratis proefles aanvragen
              </a>
              <a href={`tel:${site.phoneTel}`} className="knop knop-secundair">
                <IcoonTel />
                Bel {site.phoneDisplay}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="knop knop-secundair">
                <IcoonWhatsApp />
                WhatsApp
                <span className="sr-only"> (opent in een nieuw tabblad)</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="beeldkader mx-auto aspect-[4/5] max-w-[24rem] lg:mr-0" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
              <img
                src="/beeld/lesauto-straat-960.jpg"
                width={2048}
                height={1365}
                alt="De witte lesauto van AVT Rijopleidingen van voren, in een straat met nieuwbouwwoningen"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
