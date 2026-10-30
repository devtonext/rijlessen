import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Privacy en bronnen" };

export default function PrivacyPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Privacy en bronnen" }]}
        title="Privacy en bronnen"
        intro="Hoe deze website met je gegevens omgaat, en welke bronnen en licenties gelden voor kaart en lettertypen."
      />
      <section className="sectie">
        <div className="binnen lopend">
          <h2>Privacy</h2>
          <p>
            Als je het aanmeldformulier of het contactformulier verstuurt, slaan we je gegevens op zodat AVT Rijopleidingen contact met je kan opnemen over een proefles of je vraag. We gebruiken de gegevens niet voor marketing en delen ze niet met derden, behalve als dat nodig is om je aanvraag te behandelen.
          </p>
          <p>Je kunt je gegevens laten inzien of verwijderen via info@avtrijopleidingen.nl. Gegevens van afgehandelde aanvragen bewaren we niet langer dan nodig, in de regel maximaal 12 maanden.</p>
          <p>Deze website gebruikt geen cookies, geen trackers en geen analytics. Lettertypen en foto’s staan op deze website zelf. Kies je voor bellen, WhatsApp, e-mail, Instagram, Google of een CBR-pagina, dan ga je naar die dienst; daar gelden de privacyregels van die dienst.</p>
          <h2>Bronnen en licenties</h2>
          <ul>
            <li>
              Kaartgegevens: CBS en Kadaster via PDOK (CC BY 4.0). Licentie:{" "}
              <a href="https://creativecommons.org/licenses/by/4.0/deed.nl" target="_blank" rel="noopener noreferrer">
                Creative Commons Naamsvermelding 4.0
              </a>
              .
            </li>
            <li>Lettertypen: Bai Jamjuree (Cadson Demak) en Audiowide (Astigmatic), beide onder de SIL Open Font License 1.1.</li>
            <li>Foto’s en logo: eigen beeld van AVT Rijopleidingen.</li>
            <li>Reviews: letterlijk overgenomen van het openbare Google-bedrijfsprofiel van AVT Rijopleidingen, opgehaald op 10 oktober 2026.</li>
            <li>Examen- en tariefinformatie van het CBR: opgehaald op 10 oktober 2026; bij iedere pagina staat de bron.</li>
            <li>Google-, Instagram- en WhatsApp-logo: merken van hun eigenaren, alleen gebruikt om naar die diensten te verwijzen.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
