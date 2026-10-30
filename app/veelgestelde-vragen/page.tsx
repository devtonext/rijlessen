import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { IcoonTel } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { allFaqs } from "@/lib/content";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Veelgestelde vragen" };

export default function FaqPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Veelgestelde vragen" }]}
        title="Veelgestelde vragen"
        intro="Antwoorden op wat leerlingen en ouders het vaakst vragen over rijles, examens, kosten en overstappen naar AVT."
      />
      <section className="sectie">
        <div className="binnen grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="kop-2">Alle vragen</h2>
            <p className="inleiding mt-4">Staat je vraag er niet bij? Bel, app of mail ons gerust.</p>
            <div className="mt-6 grid gap-3 max-w-xs">
              <Link className="knop knop-primair knop-blok" href="/proefles/">
                Gratis proefles aanvragen
              </Link>
              <a href={`tel:${site.phoneTel}`} className="knop knop-secundair knop-blok">
                <IcoonTel />
                Bel {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={allFaqs} />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
