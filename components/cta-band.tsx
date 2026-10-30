import Link from "next/link";
import { IcoonTel, IcoonWhatsApp } from "./icons";
import { site } from "@/lib/site";

export function CtaBand({
  image = "/beeld/daklicht-760.jpg",
  alt = "Het daklicht op de lesauto met het L-bord, avtrijopleidingen.nl en het telefoonnummer 06 38 92 71 14",
  width = 1200,
  height = 1600,
}: {
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
}) {
  return (
    <section className="sectie sectie-lucht" aria-labelledby="slot-kop" data-verberg-actiebalk="true">
      <div className="binnen grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="slot-kop" className="kop-2" data-onthul="true">
            Plan je gratis proefles
          </h2>
          <p className="inleiding mt-4" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
            Maak vrijblijvend kennis met je instructeur en de lesauto, ter waarde van € 65. Meestal hoor je binnen één werkdag van ons.
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-onthul="true" style={{ "--i": 2 } as React.CSSProperties}>
            <Link className="knop knop-primair" href="/proefles/">
              Gratis proefles aanvragen
            </Link>
            <a href={`tel:${site.phoneTel}`} className="knop knop-secundair">
              <IcoonTel />
              Bel {site.phoneDisplay}
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="knop knop-secundair">
              <IcoonWhatsApp />
              WhatsApp
              <span className="sr-only"> (opent in een nieuw tabblad)</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="beeldkader mx-auto aspect-[4/5] max-w-[24rem] lg:mr-0" data-onthul="true" style={{ "--i": 1 } as React.CSSProperties}>
            <img src={image} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
