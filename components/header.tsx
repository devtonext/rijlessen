"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IcoonTel } from "./icons";
import { navExamens, navLessen, site } from "@/lib/site";

type PaneelId = "lessen" | "examens";

const panelen = [
  { id: "lessen" as const, label: "Rijlessen", links: navLessen },
  { id: "examens" as const, label: "Examens", links: navExamens },
];

export function Header() {
  const pathname = usePathname();
  const kopbalk = useRef<HTMLElement>(null);
  const [gescrold, setGescrold] = useState(false);
  const [mobielOpen, setMobielOpen] = useState(false);
  const [openPaneel, setOpenPaneel] = useState<PaneelId | null>(null);

  useEffect(() => {
    const check = () => setGescrold(window.scrollY > 8);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  useEffect(() => {
    setOpenPaneel(null);
    setMobielOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobielOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobielOpen]);

  useEffect(() => {
    if (!openPaneel && !mobielOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (openPaneel) {
        const knop = document.getElementById(`menuknop-${openPaneel}`);
        setOpenPaneel(null);
        knop?.focus();
      } else {
        setMobielOpen(false);
        document.getElementById("menuknop-mobiel")?.focus();
      }
    };
    const onMousedown = (e: MouseEvent) => {
      if (kopbalk.current && !kopbalk.current.contains(e.target as Node)) {
        setOpenPaneel(null);
        setMobielOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onMousedown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onMousedown);
    };
  }, [openPaneel, mobielOpen]);

  return (
    <header ref={kopbalk} className="kopbalk" data-gescrold={gescrold ? "ja" : undefined}>
      <div className="binnen kopbalk-rij">
        <Link className="kopbalk-logo" href="/">
          <img src="/merk/avt-logo.svg" alt="" width={1494} height={491} />
          <span className="sr-only">AVT Rijopleidingen, naar de homepage</span>
        </Link>

        <nav aria-label="Hoofdmenu" className="hoofdmenu">
          <ul className="flex items-center gap-1">
            {panelen.map((paneel) => (
              <li
                key={paneel.id}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setOpenPaneel((cur) => (cur === paneel.id ? null : cur));
                  }
                }}
              >
                <button
                  type="button"
                  id={`menuknop-${paneel.id}`}
                  className="menu-item"
                  aria-expanded={openPaneel === paneel.id}
                  aria-controls={`menupaneel-${paneel.id}`}
                  data-actief={paneel.links.some((l) => pathname === l.href) ? "ja" : undefined}
                  onClick={() => setOpenPaneel((cur) => (cur === paneel.id ? null : paneel.id))}
                >
                  {paneel.label}
                </button>
                <div id={`menupaneel-${paneel.id}`} className="menupaneel" hidden={openPaneel !== paneel.id}>
                  <ul className="binnen menupaneel-lijst">
                    {paneel.links.map((item) => (
                      <li key={item.href}>
                        <Link className="menupaneel-link" href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                          <strong>{item.title}</strong>
                          {"desc" in item && item.desc ? <span>{item.desc}</span> : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li>
              <Link className="menu-item" href="/over-ons/" aria-current={pathname === "/over-ons/" ? "page" : undefined}>
                Over ons
              </Link>
            </li>
            <li>
              <Link className="menu-item" href="/veelgestelde-vragen/" aria-current={pathname === "/veelgestelde-vragen/" ? "page" : undefined}>
                Vragen
              </Link>
            </li>
            <li>
              <Link className="menu-item" href="/contact/" aria-current={pathname === "/contact/" ? "page" : undefined}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="kopbalk-rechts">
          <a href={`tel:${site.phoneTel}`} className="kopbalk-tel">
            <IcoonTel />
            {site.phoneDisplay}
          </a>
          <Link className="knop knop-primair kopbalk-cta" href="/proefles/">
            Gratis proefles
          </Link>
          <button
            type="button"
            id="menuknop-mobiel"
            className="menuknop-mobiel"
            aria-expanded={mobielOpen}
            aria-controls="mobielmenu"
            onClick={() => setMobielOpen((v) => !v)}
          >
            <span className="streepjes" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            Menu
          </button>
        </div>
      </div>

      <div id="mobielmenu" className="mobielmenu" hidden={!mobielOpen}>
        <nav aria-label="Mobiel menu" className="binnen py-6">
          <div className="mobielmenu-groep">
            <h2>Rijlessen</h2>
            <ul>
              {navLessen.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobielmenu-groep">
            <h2>Examens</h2>
            <ul>
              {navExamens.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobielmenu-groep">
            <h2>Over AVT</h2>
            <ul>
              <li>
                <Link href="/over-ons/">Over ons</Link>
              </li>
              <li>
                <Link href="/veelgestelde-vragen/">Veelgestelde vragen</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 grid gap-3">
            <Link className="knop knop-primair knop-blok" href="/proefles/">
              Gratis proefles aanvragen
            </Link>
            <a href={`tel:${site.phoneTel}`} className="knop knop-secundair knop-blok">
              <IcoonTel />
              Bel {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
