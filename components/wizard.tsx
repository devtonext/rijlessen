"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { euro } from "@/lib/site";

type Answers = {
  ervaring?: "nieuw" | "overstap";
  theorie?: "gehaald" | "nog-niet";
  gevoel?: "rustig" | "zenuwen";
};

type Step = {
  title: string;
  text: string;
  href?: string;
  link?: string;
};

function routeFor(a: Answers): Step[] {
  const steps: Step[] = [
    {
      title: "Plan je gratis proefles",
      text:
        a.ervaring === "overstap"
          ? `Je hebt al gereden: in de proefles maak je kennis en laat je zien wat je al kunt. Hij is gratis, ter waarde van ${euro(65)}.`
          : `Je maakt vrijblijvend kennis met je instructeur en de lesauto. De proefles is gratis, ter waarde van ${euro(65)}.`,
      href: "/proefles/",
      link: "Proefles aanvragen",
    },
  ];
  if (a.theorie === "gehaald") {
    steps.push({
      title: "Theorie is binnen",
      text: "Mooi. Let op dat je theorie-uitslag nog geldig is op de dag van je praktijkexamen.",
    });
  } else {
    steps.push({
      title: "Oefen voor je theorie",
      text: "De online theorieomgeving zit gratis in ieder pakket. Theorie-examen doen kan vanaf 16 jaar.",
      href: "/online-theorie/",
      link: "Over de online theorie",
    });
  }
  if (a.ervaring === "overstap") {
    steps.push({
      title: "Rij verder waar je was",
      text: `Met losse lessen (${euro(65)}) of het Starterpakket (10 lessen, examen inbegrepen). Voor je examen machtig je AVT via Mijn CBR.`,
      href: "/rijschool-machtigen/",
      link: "Zo machtig je de rijschool",
    });
  } else {
    steps.push({
      title: "Kies een pakket",
      text: "Zilver (30 lessen) en Goud (40 lessen) zijn bij AVT de meest gekozen pakketten. Met de rekenhulp zie je wat bij jou past.",
      href: "#pakketten",
      link: "Naar de pakketten",
    });
  }
  if (a.gevoel === "zenuwen") {
    steps.push({
      title: "Rust bij examenzenuwen",
      text: "Bij faalangst kun je een faalangstexamen doen: meer tijd, een speciaal getrainde examinator en een time-out als je die nodig hebt.",
      href: "/examen-b/faalangstexamen/",
      link: "Over het faalangstexamen",
    });
  } else {
    steps.push({
      title: "Doe een tussentijdse toets",
      text: "Een proefexamen bij het CBR met feedback van een examinator. Niet verplicht, wel een goede generale repetitie.",
      href: "/examen-b/tussentijdse-toets/",
      link: "Over de tussentijdse toets",
    });
  }
  steps.push({
    title: "Praktijkexamen",
    text: "Het praktijkexamen B zit in ieder pakket. Je oefent vooraf rond het examencentrum.",
    href: "/examen-b/praktijkexamen/",
    link: "Zo gaat het examen",
  });
  return steps;
}

export function Wizard() {
  const [answers, setAnswers] = useState<Answers>({});
  const count = [answers.ervaring, answers.theorie, answers.gevoel].filter(Boolean).length;
  const steps = useMemo(() => routeFor(answers), [answers]);

  return (
    <section className="sectie sectie-mist" aria-labelledby="wijzer-kop">
      <div className="binnen">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="max-w-[46rem]">
            <h2 id="wijzer-kop" className="kop-2" data-onthul="true">
              Welke route past bij jou?
            </h2>
            <p className="inleiding mt-4" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
              Beantwoord drie korte vragen over je rijervaring, je theorie en examenzenuwen. Je ziet direct welke stap nu bij jou past.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <form className="lg:sticky lg:top-28 lg:col-span-6 lg:self-start" aria-label="Behoeftewijzer" onSubmit={(e) => e.preventDefault()}>
              <div className="wijzer-voortgang" aria-hidden="true">
                <span data-aan={count >= 1 ? "ja" : undefined} />
                <span data-aan={count >= 2 ? "ja" : undefined} />
                <span data-aan={count >= 3 ? "ja" : undefined} />
              </div>
              <p className="klein gedempt mt-3">{count} van 3 vragen beantwoord</p>
              <div className="mt-6">
                <fieldset className="wijzer-vraag">
                  <legend>Heb je al eens rijles gehad?</legend>
                  <div className="keuzes">
                    <label className="keuze">
                      <input type="radio" name="ervaring" value="nieuw" checked={answers.ervaring === "nieuw"} onChange={() => setAnswers((s) => ({ ...s, ervaring: "nieuw" }))} />
                      <span className="vinkje" aria-hidden="true" />
                      Nee, ik begin bij nul
                    </label>
                    <label className="keuze">
                      <input type="radio" name="ervaring" value="overstap" checked={answers.ervaring === "overstap"} onChange={() => setAnswers((s) => ({ ...s, ervaring: "overstap" }))} />
                      <span className="vinkje" aria-hidden="true" />
                      Ja, bij een andere rijschool
                    </label>
                  </div>
                </fieldset>
                <fieldset className="wijzer-vraag">
                  <legend>Heb je je theorie al gehaald?</legend>
                  <div className="keuzes">
                    <label className="keuze">
                      <input type="radio" name="theorie" value="gehaald" checked={answers.theorie === "gehaald"} onChange={() => setAnswers((s) => ({ ...s, theorie: "gehaald" }))} />
                      <span className="vinkje" aria-hidden="true" />
                      Ja, theorie gehaald
                    </label>
                    <label className="keuze">
                      <input type="radio" name="theorie" value="nog-niet" checked={answers.theorie === "nog-niet"} onChange={() => setAnswers((s) => ({ ...s, theorie: "nog-niet" }))} />
                      <span className="vinkje" aria-hidden="true" />
                      Nog niet
                    </label>
                  </div>
                </fieldset>
                <fieldset className="wijzer-vraag">
                  <legend>Hoe voel jij je bij een examen?</legend>
                  <div className="keuzes">
                    <label className="keuze">
                      <input type="radio" name="gevoel" value="rustig" checked={answers.gevoel === "rustig"} onChange={() => setAnswers((s) => ({ ...s, gevoel: "rustig" }))} />
                      <span className="vinkje" aria-hidden="true" />
                      Ik blijf wel rustig
                    </label>
                    <label className="keuze">
                      <input type="radio" name="gevoel" value="zenuwen" checked={answers.gevoel === "zenuwen"} onChange={() => setAnswers((s) => ({ ...s, gevoel: "zenuwen" }))} />
                      <span className="vinkje" aria-hidden="true" />
                      Ik word snel zenuwachtig
                    </label>
                  </div>
                </fieldset>
              </div>
            </form>
            <div className="lg:col-span-6">
              <div className="kaart" aria-live="polite">
                <h3 className="kop-3">{count === 3 ? "Jouw route" : "Zo ziet je route eruit"}</h3>
                <ol className="route-lijst mt-5">
                  {steps.map((s) => (
                    <li key={s.title}>
                      <strong className="block font-semibold">{s.title}</strong>
                      <span className="mt-1 block text-grijs">{s.text}</span>
                      {s.href && s.link ? (
                        s.href.startsWith("#") ? (
                          <a className="tekstlink mt-1.5 inline-block" href={s.href}>
                            {s.link}
                          </a>
                        ) : (
                          <Link className="tekstlink mt-1.5 inline-block" href={s.href}>
                            {s.link}
                          </Link>
                        )
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
