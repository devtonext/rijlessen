import Link from "next/link";
import { IcoonTel, IcoonWhatsApp } from "./icons";
import { site } from "@/lib/site";

export type Crumb = { href?: string; label: string };

export function PageHero({
  crumbs,
  title,
  intro,
  actions = "default",
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  crumbs: Crumb[];
  title: string;
  intro: string;
  actions?: "default" | "proefles" | "none";
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  const tekstKolom = image ? "lg:col-span-7" : actions === "proefles" ? "lg:col-span-9" : "lg:col-span-9";
  return (
    <section className="paginakop" aria-labelledby="paginakop-titel">
      <div className="binnen grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className={tekstKolom}>
          <nav aria-label="Kruimelpad" className="kruimelpad" data-intro="true" style={{ "--i": 0 } as React.CSSProperties}>
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.label}>
                  {c.href ? (
                    <Link href={c.href}>{c.label}</Link>
                  ) : i === crumbs.length - 1 ? (
                    <span aria-current="page">{c.label}</span>
                  ) : (
                    c.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 id="paginakop-titel" className="kop-1 mt-4" data-intro="true" style={{ "--i": 1 } as React.CSSProperties}>
            {title}
          </h1>
          <p className="inleiding mt-4" data-intro="true" style={{ "--i": 2 } as React.CSSProperties}>
            {intro}
          </p>
          {actions !== "none" && (
            <div className="mt-7 flex flex-wrap gap-3" data-intro="true" style={{ "--i": 3 } as React.CSSProperties} data-verberg-actiebalk="true">
              {actions === "proefles" ? (
                <>
                  <a href={`tel:${site.phoneTel}`} className="knop knop-secundair">
                    <IcoonTel />
                    Bel {site.phoneDisplay}
                  </a>
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="knop knop-secundair">
                    <IcoonWhatsApp />
                    WhatsApp
                    <span className="sr-only"> (opent in een nieuw tabblad)</span>
                  </a>
                </>
              ) : (
                <>
                  <Link className="knop knop-primair" href="/proefles/">
                    Gratis proefles aanvragen
                  </Link>
                  <a href={`tel:${site.phoneTel}`} className="knop knop-secundair">
                    <IcoonTel />
                    Bel {site.phoneDisplay}
                  </a>
                </>
              )}
            </div>
          )}
        </div>
        {image ? (
          <div className="lg:col-span-5">
            <div className="beeldkader aspect-[4/3]" data-intro="true" style={{ "--i": 2 } as React.CSSProperties}>
              <img src={image} width={imageWidth} height={imageHeight} alt={imageAlt ?? ""} loading="eager" decoding="async" />
            </div>
          </div>
        ) : null}
      </div>
      <div className="binnen" data-intro="true" style={{ "--i": 4 } as React.CSSProperties}>
        <svg className="paginakop-weg" viewBox="0 0 1000 72" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,0 1000,22 1000,50 0,72" fill="#3e80c3" />
          {wegStrepen.map((r) => (
            <rect key={r[0]} x={r[0]} y={r[1]} width={r[2]} height={r[3]} fill="#ffffff" />
          ))}
        </svg>
      </div>
    </section>
  );
}

const wegStrepen: [number, number, number, number][] = [
  [14, 33.3, 52, 5.4],
  [105, 33.5, 44.7, 5.1],
  [183.3, 33.6, 38.5, 4.8],
  [250.6, 33.7, 33.1, 4.6],
  [308.4, 33.8, 28.4, 4.4],
  [358.2, 33.9, 24.5, 4.2],
  [401, 34, 21, 4.1],
  [437.8, 34, 18.1, 4],
  [469.5, 34.1, 15.6, 3.9],
  [496.7, 34.1, 13.4, 3.8],
  [520.2, 34.2, 11.5, 3.7],
  [540.3, 34.2, 9.9, 3.6],
  [557.6, 34.2, 8.5, 3.6],
  [572.5, 34.2, 7.3, 3.5],
  [585.3, 34.3, 6.3, 3.5],
  [596.3, 34.3, 6, 3.4],
  [606.8, 34.3, 6, 3.4],
  [617.3, 34.3, 6, 3.4],
  [627.8, 34.3, 6, 3.3],
  [638.3, 34.4, 6, 3.3],
  [648.8, 34.4, 6, 3.3],
  [659.3, 34.4, 6, 3.2],
  [669.8, 34.4, 6, 3.2],
  [680.3, 34.4, 6, 3.2],
  [690.8, 34.4, 6, 3.1],
  [701.3, 34.5, 6, 3.1],
  [711.8, 34.5, 6, 3.1],
  [722.3, 34.5, 6, 3],
  [732.8, 34.5, 6, 3],
  [743.3, 34.5, 6, 2.9],
  [753.8, 34.5, 6, 2.9],
  [764.3, 34.6, 6, 2.9],
  [774.8, 34.6, 6, 2.8],
  [785.3, 34.6, 6, 2.8],
  [795.8, 34.6, 6, 2.8],
  [806.3, 34.6, 6, 2.7],
  [816.8, 34.6, 6, 2.7],
  [827.3, 34.7, 6, 2.7],
  [837.8, 34.7, 6, 2.6],
  [848.3, 34.7, 6, 2.6],
  [858.8, 34.7, 6, 2.6],
  [869.3, 34.7, 6, 2.5],
  [879.8, 34.8, 6, 2.5],
  [890.3, 34.8, 6, 2.5],
  [900.8, 34.8, 6, 2.4],
  [911.3, 34.8, 6, 2.4],
  [921.8, 34.8, 6, 2.4],
  [932.3, 34.8, 6, 2.3],
  [942.8, 34.9, 6, 2.3],
  [953.3, 34.9, 6, 2.2],
  [963.8, 34.9, 6, 2.2],
  [974.3, 34.9, 6, 2.2],
  [984.8, 34.9, 6, 2.2],
];
