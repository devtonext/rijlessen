import { CtaBand } from "@/components/cta-band";
import { IcoonCheck } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { euro, site } from "@/lib/site";

export const metadata = { title: "Gezondheidsverklaring" };

export default function GezondheidPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { href: "/examen-b/", label: "Examen B" }, { label: "Gezondheidsverklaring" }]}
        title="Gezondheidsverklaring"
        intro="Het CBR wil zeker weten dat je gezond genoeg bent om veilig te rijden. Die verklaring vul je al in het begin in."
      />
      <section className="sectie">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lopend">
            <h2>Hoe werkt het?</h2>
            <p>
              Je vult de Gezondheidsverklaring zelf in via Mijn CBR, want het gaat om vertrouwelijke gegevens. Je logt in met je DigiD en beantwoordt de vragen. Nadat je hebt ingevuld en betaald, krijg je per mail meer informatie. Zodra het CBR bevestigt dat je geschikt bent om te rijden, kan je rijschool je rijexamen reserveren.
            </p>
            <p>
              Let op: het CBR waarschuwt voor misleidende websites. Vul de verklaring alleen in via{" "}
              <a href="https://www.cbr.nl/nl/mijncbr" target="_blank" rel="noopener noreferrer">
                Mijn CBR
              </a>
              , en doe het op tijd.
            </p>
            <h2>Wanneer hoor je iets?</h2>
            <p>Binnen 4 weken krijg je reactie. Zijn er geen bijzonderheden, dan hoor je meestal meteen dat je rijgeschikt bent. Soms heeft het CBR meer informatie nodig, bijvoorbeeld van een arts, of word je doorverwezen naar een medisch specialist of uitgenodigd voor een rijtest. Ook dat hoor je binnen 4 weken.</p>
            <h2>Wat kan het CBR besluiten?</h2>
            <ul>
              <li>Je bent rijgeschikt: je gaat door met je opleiding en je examen.</li>
              <li>Je bent rijgeschikt voor een bepaalde tijd: je rijbewijs geldt dan bijvoorbeeld 1, 3, 5 of soms 10 jaar.</li>
              <li>Je bent rijgeschikt onder voorwaarden, zoals een bril dragen of een aangepaste auto.</li>
              <li>Je bent niet rijgeschikt: je kunt dan geen rijbewijs halen.</li>
            </ul>
            <p>Ben je het niet eens met een besluit, dan kun je een nieuw onderzoek laten doen of bezwaar maken.</p>
            <p className="bronregel">
              Bron:{" "}
              <a href="https://www.cbr.nl/nl/rijbewijs-halen/auto/gezondheidsverklaring-autorijbewijs/gezondheidsverklaring-invullen-voor-autorijbewijs" target="_blank" rel="noopener noreferrer">
                CBR: Jouw Gezondheidsverklaring
              </a>
              , opgehaald op 10 oktober 2026.
            </p>
          </div>
          <ul className="lg:col-span-5 kernstrook">
            {[
              ["In het begin", "Vul hem in aan het begin van je rijopleiding."],
              ["Via Mijn CBR", "Inloggen met je DigiD en zelf invullen."],
              ["Binnen 4 weken", "Zo snel krijg je reactie van het CBR."],
              [euro(site.healthPrice), "Het CBR-tarief in 2026."],
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
