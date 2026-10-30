import { ReactNode } from "react";
import { IcoonAutoSmal, IcoonIdentiteit, IcoonKalender, IcoonKlokSmal, IcoonPersoonSmal } from "./icons";

export type Feit = {
  icoon: "klok" | "identiteit" | "kalender" | "auto" | "persoon";
  titel: string;
  tekst: string;
};

const iconen: Record<Feit["icoon"], ReactNode> = {
  klok: <IcoonKlokSmal />,
  identiteit: <IcoonIdentiteit />,
  kalender: <IcoonKalender />,
  auto: <IcoonAutoSmal />,
  persoon: <IcoonPersoonSmal />,
};

export function FeitenLijst({ feiten }: { feiten: Feit[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {feiten.map((f, i) => (
        <li key={f.titel} className="kaart flex items-start gap-4" data-onthul="true" style={{ "--i": i } as React.CSSProperties}>
          {iconen[f.icoon]}
          <span>
            <strong className="block font-semibold">{f.titel}</strong>
            <span className="mt-1 block text-grijs">{f.tekst}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
