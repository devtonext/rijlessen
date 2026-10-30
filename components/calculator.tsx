"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { bestCombination, LESSON_LOOSE } from "@/lib/packages";
import { euro } from "@/lib/site";

export function Calculator() {
  const id = useId();
  const [lessons, setLessons] = useState(30);
  const result = useMemo(() => bestCombination(lessons), [lessons]);
  const pack = result.package;
  const label = pack
    ? `${pack.name} (${pack.lessons} lessen)${result.extra > 0 ? ` plus ${result.extra} losse ${result.extra === 1 ? "les" : "lessen"}` : ""}`
    : `${lessons} losse lessen`;
  const pakketId = pack?.id ?? "los";

  return (
    <div className="kaart grid gap-8 lg:grid-cols-2 lg:gap-12" data-onthul="true">
      <div>
        <h3 className="kop-3">Rekenhulp: wat kost jouw rijbewijs?</h3>
        <label htmlFor={`${id}-lessen`} className="mt-5 block font-semibold">
          Hoeveel lessen verwacht je nodig te hebben?
        </label>
        <div className="mt-3 flex items-center gap-4">
          <input
            id={`${id}-lessen`}
            type="range"
            min={10}
            max={60}
            step={1}
            className="schuif"
            aria-valuetext={`${lessons} lessen`}
            value={lessons}
            onChange={(e) => setLessons(Number(e.target.value))}
          />
          <output htmlFor={`${id}-lessen`} className="min-w-[6.5rem] text-right text-lg font-semibold">
            {lessons} lessen
          </output>
        </div>
        <p className="klein gedempt mt-4 max-w-[36rem]">
          Het CBR noemt gemiddeld 42,5 lesuren tot het rijbewijs (onderzoek juli tot en met augustus 2026). Een les bij AVT duurt 50 minuten. Vraag je instructeur na de proefles om een inschatting.
        </p>
      </div>
      <div className="grid content-start gap-2" aria-live="polite">
        <p className="klein gedempt">Voordeligste combinatie</p>
        <p className="text-lg font-semibold">{label}</p>
        <p className="rekenuitkomst mt-1">{euro(result.total)}</p>
        <p className="klein gedempt">Inclusief praktijkexamen B en online theorie. Extra lessen als losse les à {euro(LESSON_LOOSE)}.</p>
        <div className="mt-4">
          <Link className="knop knop-primair" href={`/proefles/?pakket=${pakketId}`}>
            Plan je gratis proefles
          </Link>
        </div>
      </div>
    </div>
  );
}
