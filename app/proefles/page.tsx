import { Suspense } from "react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { TrialForm } from "@/components/trial-form";
import { IcoonCheck } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata = { title: "Gratis proefles aanvragen" };

export default function ProeflesPage() {
  return (
    <main id="inhoud">
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Proefles" }]}
        title="Plan je gratis proefles"
        intro="Maak vrijblijvend kennis met je instructeur en de lesauto. De proefles is gratis en heeft een waarde van € 65."
        actions="proefles"
      />
      <section className="sectie" aria-label="Aanmeldformulier">
        <div className="binnen grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="kaart" data-onthul="true">
              <Suspense fallback={<p className="gedempt">Formulier laden…</p>}>
                <TrialForm />
              </Suspense>
            </div>
          </div>
          <div className="grid content-start gap-5 lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <div data-onthul="true">
              <h2 className="kop-3">Wat kun je verwachten?</h2>
              <ul className="vinklijst mt-4">
                {[
                  "Je maakt kennis met je instructeur en de Volkswagen Golf.",
                  "Je instructeur blijft daarna je vaste instructeur.",
                  "Na de proefles kies je zelf: een pakket of losse lessen.",
                  "Meestal hoor je binnen één werkdag van ons.",
                ].map((t) => (
                  <li key={t}>
                    <IcoonCheck />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div data-onthul="true">
              <a href={site.googleMaps} target="_blank" rel="noopener noreferrer" className="google-badge">
                <span className="flex items-center gap-2.5">
                  <img src="/merk/google-g.svg" alt="Google" width={26} height={26} loading="lazy" />
                  <span className="font-semibold">Google-reviews</span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-5xl font-bold leading-none">{site.rating}</span>
                  <span className="grid gap-1">
                    <span className="sterren">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                          <path fill="currentColor" d="M12 2.8l2.83 5.73 6.32.92-4.57 4.46 1.08 6.3L12 17.24l-5.66 2.97 1.08-6.3-4.57-4.46 6.32-.92L12 2.8z" />
                        </svg>
                      ))}
                    </span>
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
        </div>
      </section>
      <CtaBand
        image="/beeld/lesauto-straat-960.jpg"
        alt="De witte lesauto van AVT Rijopleidingen van voren, in een straat met nieuwbouwwoningen"
        width={2048}
        height={1365}
      />
    </main>
  );
}
