"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IcoonTel, IcoonWhatsApp } from "./icons";
import { site } from "@/lib/site";

export function ActionBar() {
  const [zichtbaar, setZichtbaar] = useState(false);
  const balk = useRef<HTMLElement>(null);

  useEffect(() => {
    let binnenBeeld = false;
    const verberg = new Set<Element>();
    const pasToe = () => setZichtbaar(binnenBeeld && verberg.size === 0);
    const meetScroll = () => {
      binnenBeeld = window.scrollY > 0.5 * window.innerHeight;
      pasToe();
    };
    const waarnemer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) verberg.add(entry.target);
        else verberg.delete(entry.target);
      }
      pasToe();
    });
    document.querySelectorAll("[data-verberg-actiebalk]").forEach((el) => waarnemer.observe(el));
    meetScroll();
    window.addEventListener("scroll", meetScroll, { passive: true });
    return () => {
      waarnemer.disconnect();
      window.removeEventListener("scroll", meetScroll);
    };
  }, []);

  useEffect(() => {
    const balkEl = balk.current;
    if (!balkEl) return;
    const corrigeer = () => {
      const actief = document.activeElement;
      if (!actief || actief === document.body || balkEl.contains(actief)) return;
      if (balkEl.getClientRects().length === 0 || getComputedStyle(balkEl).visibility === "hidden") return;
      const grens = window.innerHeight - balkEl.offsetHeight;
      const doos = actief.getBoundingClientRect();
      if (doos.bottom <= grens - 12 || doos.top >= window.innerHeight) return;
      const kopOnder = document.querySelector(".kopbalk")?.getBoundingClientRect().bottom ?? 0;
      const verschuif = Math.min(doos.bottom - (grens - 12), Math.max(0, doos.top - (kopOnder + 12)));
      if (verschuif > 0) window.scrollBy({ top: verschuif, behavior: "instant" as ScrollBehavior });
    };
    const onFocusin = () => {
      requestAnimationFrame(corrigeer);
      window.setTimeout(corrigeer, 450);
    };
    document.addEventListener("focusin", onFocusin);
    window.addEventListener("scrollend", corrigeer);
    return () => {
      document.removeEventListener("focusin", onFocusin);
      window.removeEventListener("scrollend", corrigeer);
    };
  }, []);

  return (
    <aside ref={balk} className="actiebalk" aria-label="Snel contact" data-zichtbaar={zichtbaar ? "ja" : undefined}>
      <Link className="knop knop-primair flex-1" href="/proefles/">
        Gratis proefles
      </Link>
      <a href={`tel:${site.phoneTel}`} className="knop knop-secundair actiebalk-icoon" aria-label={`Bel ${site.phoneDisplay}`}>
        <IcoonTel />
      </a>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="knop knop-secundair actiebalk-icoon" aria-label="WhatsApp">
        <IcoonWhatsApp />
      </a>
    </aside>
  );
}
