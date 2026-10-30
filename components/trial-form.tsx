"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { packages } from "@/lib/packages";
import { euro, site } from "@/lib/site";

const diensten = [
  "Rijlessen B met gratis proefles",
  "Examen B",
  "Online theorie",
  "Compleet lespakket",
];

const pakketOpties = [
  ...packages.map((p) => ({ value: p.id, label: `${p.name}: ${p.lessons} lessen (${euro(p.price)})` })),
  { value: "los", label: `Losse lessen (${euro(65)} per les)` },
  { value: "onbekend", label: "Weet ik nog niet" },
];

function Melding({ zichtbaar, wat }: { zichtbaar: boolean; wat: string }) {
  return (
    <div role="status" aria-live="polite" className="mt-6">
      {zichtbaar ? (
        <div className="melding">
          <p className="font-semibold">Dit is een voorbeeld: er is niets verstuurd.</p>
          <p className="mt-1">
            In de echte website komt {wat} direct bij AVT Rijopleidingen binnen. Wil je nu al een proefles plannen? Bel of app{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a> of mail naar <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function Veld({ label, id, children, hint }: { label: string; id: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="veld">
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? (
        <p id={`${id}-hint`} className="klein gedempt">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function Keuzegroep({ legenda, naam, opties, standaard }: { legenda: string; naam: string; opties: string[]; standaard?: string }) {
  return (
    <fieldset className="keuzegroep">
      <legend className="veld-label">{legenda}</legend>
      <div className="keuzes">
        {opties.map((optie) => (
          <label className="keuze" key={optie}>
            <input type="radio" name={naam} value={optie} defaultChecked={optie === standaard} />
            <span className="vinkje" aria-hidden="true" />
            {optie}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function TrialForm() {
  const id = useId();
  const [verstuurd, setVerstuurd] = useState(false);
  const [pakket, setPakket] = useState("onbekend");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("pakket");
    if (p && pakketOpties.some((o) => o.value === p)) setPakket(p);
  }, []);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setVerstuurd(true);
      }}
      className="grid gap-6"
      aria-labelledby={`${id}-kop`}
      data-verberg-actiebalk="true"
    >
      <h2 id={`${id}-kop`} className="kop-3">
        Aanmelden of een proefles aanvragen
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <Veld label="Voornaam" id={`${id}-voornaam`}>
          <input id={`${id}-voornaam`} name="voornaam" className="formveld" autoComplete="given-name" required />
        </Veld>
        <Veld label="Achternaam" id={`${id}-achternaam`}>
          <input id={`${id}-achternaam`} name="achternaam" className="formveld" autoComplete="family-name" required />
        </Veld>
        <Veld label="E-mailadres" id={`${id}-email`}>
          <input id={`${id}-email`} name="email" type="email" className="formveld" autoComplete="email" required />
        </Veld>
        <Veld label="Telefoonnummer" id={`${id}-telefoon`}>
          <input id={`${id}-telefoon`} name="telefoon" type="tel" className="formveld" autoComplete="tel" required />
        </Veld>
      </div>
      <Keuzegroep legenda="Ik meld me aan voor" naam="dienst" opties={diensten} standaard="Rijlessen B met gratis proefles" />
      <Veld label="Welk pakket heeft je interesse?" id={`${id}-pakket`}>
        <select id={`${id}-pakket`} name="pakket" className="formveld" value={pakket} onChange={(e) => setPakket(e.target.value)}>
          {pakketOpties.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Veld>
      <Keuzegroep legenda="Heb je je theoriecertificaat al?" naam="theorie" opties={["Ja", "Nee", "Bijna"]} />
      <Keuzegroep legenda="Hoe bereiken we je het best?" naam="contactvorm" opties={["Telefoon", "E-mail", "WhatsApp"]} />
      <Veld label="Opmerkingen of vragen" id={`${id}-opmerking`}>
        <textarea id={`${id}-opmerking`} name="opmerking" className="formveld" rows={4} />
      </Veld>
      <label className="flex items-start gap-3">
        <input type="checkbox" name="akkoord" className="mt-1 h-5 w-5 flex-none accent-knopblauw" required />
        <span>
          Ik ga akkoord met de verwerking van mijn gegevens om contact met mij op te nemen (zie de{" "}
          <Link href="/privacy/">privacyverklaring</Link>).
        </span>
      </label>
      <div>
        <button type="submit" className="knop knop-primair">
          Verstuur aanmelding
        </button>
        <Melding zichtbaar={verstuurd} wat="je aanmelding" />
      </div>
    </form>
  );
}
