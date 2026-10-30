export const site = {
  name: "AVT Rijopleidingen",
  tagline: "Rijlessen voor je rijbewijs B in Utrecht, Nieuwegein en omstreken, met één vaste instructeur.",
  phone: "0638927114",
  phoneDisplay: "06 38 92 71 14",
  phoneTel: "+31638927114",
  email: "info@avtrijopleidingen.nl",
  instagram: "https://www.instagram.com/avtrijopleidingen/",
  whatsapp: "https://wa.me/31638927114",
  googleMaps: "https://www.google.com/maps?cid=6318892264404563703",
  kvk: "88776069",
  rating: "5,0",
  reviewCount: 9,
  lessonMinutes: 50,
  trialValue: 65,
  lessonLoose: 65,
  lessonPackage: 60,
  examPrice: 330,
  examCbr: 143.5,
  tttPrice: 325,
  faalangstPrice: 425,
  faalangstCbr: 202,
  bnoPrice: 379,
  bnoCbr: 164,
  theoryPrice: 50,
  healthPrice: 46.9,
  licenseMax: 53.65,
  cbrAvgHours: 42.5,
  area: "Utrecht, Nieuwegein en omstreken",
} as const;

export function euro(n: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: n % 1 === 0 ? 0 : 2,
  }).format(n);
}

export const navLessen = [
  {
    href: "/rijlessen-b/",
    title: "Rijlessen B en pakketten",
    desc: "Vijf pakketten, losse tarieven en de rekenhulp",
  },
  {
    href: "/onze-diensten/",
    title: "Onze diensten",
    desc: "Rijlessen, examen en online theorie op een rij",
  },
  {
    href: "/online-theorie/",
    title: "Online theorie",
    desc: "Oefenen voor je theorie-examen",
  },
  {
    href: "/proefles/",
    title: "Gratis proefles",
    desc: "Kennismaken met je instructeur",
  },
] as const;

export const navExamens = [
  { href: "/examen-b/", title: "Examen B", desc: "Alle examens en toetsen met prijzen" },
  { href: "/examen-b/praktijkexamen/", title: "Praktijkexamen" },
  { href: "/examen-b/tussentijdse-toets/", title: "Tussentijdse toets" },
  { href: "/examen-b/faalangstexamen/", title: "Faalangstexamen" },
  { href: "/examen-b/nader-onderzoek/", title: "Nader onderzoek" },
  { href: "/gezondheidsverklaring/", title: "Gezondheidsverklaring" },
  { href: "/rijschool-machtigen/", title: "Rijschool machtigen" },
] as const;

export const footerLessen = [
  { href: "/rijlessen-b/", title: "Rijlessen B en pakketten" },
  { href: "/onze-diensten/", title: "Onze diensten" },
  { href: "/online-theorie/", title: "Online theorie" },
  { href: "/proefles/", title: "Gratis proefles" },
  { href: "/over-ons/", title: "Over ons" },
  { href: "/veelgestelde-vragen/", title: "Veelgestelde vragen" },
] as const;
