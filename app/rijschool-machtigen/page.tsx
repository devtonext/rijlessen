import { CtaBand } from "@/components/cta-band";
import { IcoonCheck } from "@/components/icons";
import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Rijschool machtigen" };

export default function MachtigenPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { href: "/examen-b/", label: "Examen B" }, { label: "Rijschool machtigen" }]}
        title="Rijschool machtigen"
        intro="Wil je examen doen? Dan machtig je AVT Rijopleidingen, zodat de rijschool je examen bij het CBR reserveert."
      />
      <section className="sectie">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lopend">
            <h2>Zo machtig je de rijschool</h2>
            <ol>
              <li>
                Log in op{" "}
                <a href="https://www.cbr.nl/nl/mijncbr" target="_blank" rel="noopener noreferrer">
                  Mijn CBR
                </a>{" "}
                met je eigen DigiD. Gebruik nooit de DigiD van een ander.
              </li>
              <li>Kies de machtiging voor je praktijkexamen en vul het CBR-rijschoolnummer van AVT in; dat krijg je van je instructeur.</li>
              <li>Jij en de rijschool krijgen een e-mail met de bevestiging. Daarna kan AVT je examen reserveren.</li>
            </ol>
            <h2>Geen DigiD?</h2>
            <p>Vraag je DigiD aan op digid.nl. Kun je geen DigiD aanvragen, dan machtig je de rijschool met het formulier machtigen opleider van het CBR.</p>
            <h2>Overstappen van een andere rijschool?</h2>
            <p>Had je al een andere rijschool gemachtigd? Dan trek je die machtiging eerst in via Mijn CBR, en machtig je daarna AVT. Een gratis proefles is een goed moment om kennis te maken.</p>
            <p className="bronregel">
              Bron:{" "}
              <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/praktijkexamen-auto/je-rijschool-machtigen" target="_blank" rel="noopener noreferrer">
                CBR: Rijschool machtigen
              </a>
              , opgehaald op 10 oktober 2026.
            </p>
          </div>
          <ul className="lg:col-span-5 kernstrook">
            {[
              ["Via Mijn CBR", "Inloggen met je eigen DigiD."],
              ["Rijschoolnummer nodig", "Het CBR-rijschoolnummer van AVT krijg je van je instructeur."],
              ["Bevestiging per mail", "Voor jou en voor de rijschool."],
              ["Overstappen", "Eerst de oude machtiging intrekken."],
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
      <CtaBand />
    </main>
  );
}
