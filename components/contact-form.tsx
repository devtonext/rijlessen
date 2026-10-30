"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site";

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

function Veld({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="veld">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const id = useId();
  const [verstuurd, setVerstuurd] = useState(false);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setVerstuurd(true);
      }}
      className="grid gap-5"
      aria-labelledby={`${id}-kop`}
      data-verberg-actiebalk="true"
    >
      <h2 id={`${id}-kop`} className="kop-3">
        Stel je vraag
      </h2>
      <Veld label="Naam" id={`${id}-naam`}>
        <input id={`${id}-naam`} name="naam" className="formveld" autoComplete="name" required />
      </Veld>
      <Veld label="E-mailadres of telefoonnummer" id={`${id}-contact`}>
        <input id={`${id}-contact`} name="contact" className="formveld" autoComplete="email" required />
      </Veld>
      <Veld label="Je vraag" id={`${id}-vraag`}>
        <textarea id={`${id}-vraag`} name="vraag" className="formveld" rows={5} required />
      </Veld>
      <div>
        <button type="submit" className="knop knop-primair">
          Verstuur je vraag
        </button>
        <Melding zichtbaar={verstuurd} wat="je vraag" />
      </div>
    </form>
  );
}
