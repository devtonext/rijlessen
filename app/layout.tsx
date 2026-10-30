import type { Metadata } from "next";
import { ActionBar } from "@/components/action-bar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionRoot } from "@/components/reveal";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AVT Rijopleidingen | Rijles in Utrecht en Nieuwegein",
    template: "%s | AVT Rijopleidingen",
  },
  description: site.tagline,
  metadataBase: new URL("https://avtrijopleidingen.nl"),
  robots: { index: false, follow: false },
  openGraph: {
    title: "AVT Rijopleidingen | Rijles in Utrecht en Nieuwegein",
    description: site.tagline,
    locale: "nl_NL",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preload" href="/fonts/bai-jamjuree-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <a className="skiplink" href="#inhoud">
          Naar de inhoud
        </a>
        <aside className="demobalk" aria-label="Conceptdemo">
          <div className="binnen">
            <p>Conceptdemo door Gigawebdesign, niet de officiële website van AVT Rijopleidingen</p>
          </div>
        </aside>
        <Header />
        {children}
        <Footer />
        <ActionBar />
        <MotionRoot />
      </body>
    </html>
  );
}
