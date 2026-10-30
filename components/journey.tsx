import Link from "next/link";
import { journeySteps, wegbandBreed, wegbandMobiel } from "@/lib/content";

export function Journey() {
  return (
    <section className="sectie sectie-mist" aria-labelledby="route-kop">
      <div className="binnen">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="max-w-[46rem]">
            <h2 id="route-kop" className="kop-2" data-onthul="true">
              Van proefles tot rijbewijs
            </h2>
            <p className="inleiding mt-4" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
              Vijf stappen van proefles tot examen, met steeds dezelfde instructeur. Want een goede bestuurder kijkt verder vooruit.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="wegband" data-onthul="true">
            <svg className="wegband-svg wegband-breed" viewBox="0 0 1000 72" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 1000,22 1000,50 0,72" fill="#3e80c3" />
              {wegbandBreed.map(([x, y, w, h], i) => (
                <rect key={i} className="wegband-streep" style={{ "--s": i } as React.CSSProperties} x={x} y={y} width={w} height={h} fill="#ffffff" />
              ))}
            </svg>
            <svg className="wegband-svg wegband-mobiel" viewBox="0 0 44 1000" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="0,0 44,0 34,1000 10,1000" fill="#3e80c3" />
              {wegbandMobiel.map(([x, y, w, h], i) => (
                <rect key={i} className="wegband-streep" style={{ "--s": i } as React.CSSProperties} x={x} y={y} width={w} height={h} fill="#ffffff" />
              ))}
            </svg>
            <ol className="stappen">
              {journeySteps.map((s) => (
                <li key={s.n} className="stap">
                  <span className="stap-nummer" aria-hidden="true">
                    {s.n}
                  </span>
                  <h3 className="kop-3">
                    <span className="sr-only">Stap {s.n}: </span>
                    {s.title.replace(/^Stap \d+: /, "")}
                  </h3>
                  <p>{s.text}</p>
                  <Link className="tekstlink mt-2 inline-block" href={s.href}>
                    {s.link}
                  </Link>
                </li>
              ))}
            </ol>
            <p className="wegband-doel">Geslaagd? Na de examendag vraag je je rijbewijs aan bij je gemeente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
