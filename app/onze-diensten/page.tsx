import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Journey } from "@/components/journey";
import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Onze diensten" };

const diensten = [
  {
    title: "Rijlessen B",
    text: "Lessen van 50 minuten met een vaste instructeur, in vijf pakketten of los voor € 65 per les.",
    href: "/rijlessen-b/",
    link: "Pakketten en tarieven",
  },
  {
    title: "Examen B",
    text: "Praktijkexamen, tussentijdse toets, faalangstexamen en nader onderzoek, met voorbereiding rond het examencentrum.",
    href: "/examen-b/",
    link: "Alle examens",
  },
  {
    title: "Online theorie",
    text: "Oefenen voor je theorie-examen in je eigen tempo, op je telefoon, tablet of laptop. Gratis in ieder pakket.",
    href: "/online-theorie/",
    link: "Over de online theorie",
  },
  {
    title: "Gratis proefles",
    text: "Maak vrijblijvend kennis met je instructeur en de lesauto. De proefles heeft een waarde van € 65.",
    href: "/proefles/",
    link: "Proefles aanvragen",
  },
];

export default function DienstenPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Onze diensten" }]}
        title="Alles voor je rijbewijs B"
        intro="Rijlessen, examens en online theorie: bij AVT regel je je rijopleiding op één plek, met dezelfde instructeur."
      />
      <section className="sectie">
        <div className="binnen">
          <h2 className="kop-2">Wat je bij AVT kunt regelen</h2>
          <ul className="pakketraster mt-10">
            {diensten.map((d) => (
              <li key={d.title} className="kaart kaart-zweef pakket">
                <h3 className="kop-3">{d.title}</h3>
                <p className="gedempt">{d.text}</p>
                <Link className="tekstlink mt-auto" href={d.href}>
                  {d.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Journey />
      <CtaBand />
    </main>
  );
}
