"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Sterren } from "./icons";
import { reviews } from "@/lib/content";
import { site } from "@/lib/site";

const ellipsis = "…";

export function Reviews() {
  const spoor = useRef<HTMLDivElement>(null);
  const doelpunt = useRef<number | null>(null);
  const sleep = useRef<{
    x: number;
    start: number;
    id: number;
    bezig: boolean;
  } | null>(null);
  const genegeerd = useRef(false);
  const [index, setIndex] = useState(0);
  const [klaar, setKlaar] = useState(false);
  const totaal = reviews.length;

  const offset = useCallback((i: number) => {
    const el = spoor.current;
    if (!el) return 0;
    const dia = el.children[i] as HTMLElement | undefined;
    const eerste = el.children[0] as HTMLElement | undefined;
    return dia && eerste ? dia.offsetLeft - eerste.offsetLeft : 0;
  }, []);

  const huidige = useCallback(() => {
    const el = spoor.current;
    if (!el) return 0;
    if (el.scrollWidth - el.clientWidth - el.scrollLeft < 8) return totaal - 1;
    let beste = 0;
    let kleinste = Infinity;
    for (let i = 0; i < totaal; i += 1) {
      const afstand = Math.abs(offset(i) - el.scrollLeft);
      if (afstand < kleinste) {
        kleinste = afstand;
        beste = i;
      }
    }
    return beste;
  }, [totaal, offset]);

  const ga = useCallback(
    (i: number) => {
      const el = spoor.current;
      if (!el) return;
      const doel = Math.max(0, Math.min(totaal - 1, i));
      doelpunt.current = doel;
      setIndex(doel);
      el.scrollTo({ left: offset(doel), behavior: "smooth" });
      window.clearTimeout(ga.timer);
      ga.timer = window.setTimeout(() => {
        if (
          doelpunt.current === doel &&
          Math.abs(el.scrollLeft - offset(doel)) > 4
        ) {
          el.scrollTo({ left: offset(doel), behavior: "auto" });
        }
        doelpunt.current = null;
      }, 900);
    },
    [totaal, offset],
  ) as unknown as ((i: number) => void) & { timer?: number };

  useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    setKlaar(true);
    const bijScroll = () => {
      if (doelpunt.current === null) setIndex(huidige());
    };
    const bijKlaar = () => {
      const doel = doelpunt.current;
      if (doel !== null && Math.abs(el.scrollLeft - offset(doel)) <= 4)
        doelpunt.current = null;
      if (doelpunt.current === null) setIndex(huidige());
    };
    el.addEventListener("scroll", bijScroll, { passive: true });
    el.addEventListener("scrollend", bijKlaar);
    return () => {
      el.removeEventListener("scroll", bijScroll);
      el.removeEventListener("scrollend", bijKlaar);
    };
  }, [huidige, offset]);

  useEffect(() => {
    const el = spoor.current;
    if (!el) return;
    const zetHoogte = () => {
      const dia = el.children[index] as HTMLElement | undefined;
      if (dia) el.style.height = `${dia.offsetHeight}px`;
    };
    zetHoogte();
    let breedte = el.clientWidth;
    const waarnemer = new ResizeObserver(() => {
      zetHoogte();
      if (el.clientWidth !== breedte) {
        breedte = el.clientWidth;
        el.scrollTo({ left: offset(index), behavior: "auto" });
      }
    });
    waarnemer.observe(el);
    return () => waarnemer.disconnect();
  }, [index, offset]);

  const stopSlepen = (e: React.PointerEvent) => {
    const staat = sleep.current;
    const el = spoor.current;
    sleep.current = null;
    if (!staat || !el || !staat.bezig) return;
    const verschuiving = el.scrollLeft - staat.start;
    const basis = Math.round(staat.start / Math.max(1, el.clientWidth));
    const doel =
      Math.abs(verschuiving) > 40 ? basis + Math.sign(verschuiving) : basis;
    if (el.hasPointerCapture(e.pointerId))
      el.releasePointerCapture(e.pointerId);
    delete el.dataset.slepen;
    genegeerd.current = true;
    ga(doel);
  };

  return (
    <section
      id="reviews"
      className="sectie sectie-mist"
      aria-labelledby="reviews-kop"
    >
      <div className="binnen grid gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:gap-14">
        <div>
          <h2 id="reviews-kop" className="kop-2" data-onthul="true">
            Wat leerlingen op Google schrijven
          </h2>
          <p
            className="inleiding inleiding-smal mt-4"
            data-onthul="true"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Alle {site.reviewCount} reviews op Google geven vijf sterren. Zes
            ervan lees je hier in hun eigen woorden.
          </p>
          <div
            className="mt-8"
            data-onthul="true"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <a
              href={site.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="google-badge"
            >
              <span className="flex items-center gap-2.5">
                <img
                  src="/merk/google-g.svg"
                  alt="Google"
                  width={26}
                  height={26}
                  loading="lazy"
                />
                <span className="font-semibold">Google-reviews</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="text-5xl font-bold leading-none">
                  {site.rating}
                </span>
                <span className="grid gap-1">
                  <Sterren />
                  <span className="klein gedempt">
                    {site.reviewCount} reviews, schaal 1 tot 5
                  </span>
                </span>
              </span>
              <span className="klein tekstlink">
                Bekijk het profiel op Google
                <span className="sr-only"> (opent in een nieuw tabblad)</span>
              </span>
            </a>
          </div>
        </div>
        <div
          className="carousel"
          data-onthul="true"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              ga((doelpunt.current ?? huidige()) + 1);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              ga((doelpunt.current ?? huidige()) - 1);
            } else if (e.key === "Home") {
              e.preventDefault();
              ga(0);
            } else if (e.key === "End") {
              e.preventDefault();
              ga(totaal - 1);
            }
          }}
        >
          <div className="carousel-bediening">
            <ul className="carousel-stippen">
              {reviews.map((r, i) => (
                <li key={r.name}>
                  <button
                    type="button"
                    className="carousel-stip"
                    aria-label={`Toon review ${i + 1} van ${totaal}`}
                    aria-current={index === i ? "true" : undefined}
                    onClick={() => ga(i)}
                  />
                </li>
              ))}
            </ul>
            <div className="carousel-pijlen">
              <button
                type="button"
                className="carousel-knop"
                aria-label="Vorige review"
                onClick={() => ga((doelpunt.current ?? huidige()) - 1)}
              >
                Vorige
              </button>
              <button
                type="button"
                className="carousel-knop"
                aria-label="Volgende review"
                onClick={() => ga((doelpunt.current ?? huidige()) + 1)}
              >
                Volgende
              </button>
            </div>
          </div>
          <div
            ref={spoor}
            className="carousel-spoor"
            role="region"
            aria-roledescription="carousel"
            aria-label="Reviews van leerlingen"
            tabIndex={0}
            onPointerDown={(e) => {
              if (e.pointerType !== "mouse" || e.button !== 0) return;
              const el = spoor.current;
              if (el)
                sleep.current = {
                  x: e.clientX,
                  start: el.scrollLeft,
                  id: e.pointerId,
                  bezig: false,
                };
            }}
            onPointerMove={(e) => {
              const staat = sleep.current;
              const el = spoor.current;
              if (!staat || !el) return;
              if (!staat.bezig) {
                if (Math.abs(e.clientX - staat.x) < 6) return;
                staat.bezig = true;
                el.setPointerCapture(staat.id);
                el.dataset.slepen = "ja";
              }
              el.scrollLeft = staat.start - (e.clientX - staat.x);
            }}
            onPointerUp={stopSlepen}
            onPointerCancel={stopSlepen}
            onClickCapture={(e) => {
              if (genegeerd.current) {
                genegeerd.current = false;
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="carousel-dia"
                role="group"
                aria-roledescription="slide"
                aria-label={`Review ${i + 1} van ${totaal}`}
                inert={klaar && index !== i ? true : undefined}
              >
                <figure className="review-kaart">
                  <p className="flex items-center gap-2">
                    <Sterren />
                    <span className="sr-only">5 van 5 sterren</span>
                  </p>
                  <blockquote className="review-tekst">
                    <p>{r.quote}</p>
                  </blockquote>
                  <figcaption className="review-voet">
                    <span>
                      <strong className="font-semibold">{r.name}</strong>
                      <span className="gedempt">, {r.date}</span>
                    </span>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold"
                    >
                      <img
                        src="/merk/google-g.svg"
                        alt=""
                        width={18}
                        height={18}
                        loading="eager"
                      />
                      {r.name === "Sofie"
                        ? "Lees de hele review op Google"
                        : "Bekijk op Google"}
                      <span className="sr-only">
                        {" "}
                        (review van {r.name}, opent in een nieuw tabblad)
                      </span>
                    </a>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
