export type PackageId = "starter" | "bronze" | "zilver" | "goud" | "platinum";

export type Package = {
  id: PackageId;
  name: string;
  lessons: number;
  price: number;
  savings: number;
  featured?: boolean;
};

export const packages: Package[] = [
  { id: "starter", name: "Starter", lessons: 10, price: 930, savings: 100 },
  { id: "bronze", name: "Bronze", lessons: 20, price: 1530, savings: 150 },
  { id: "zilver", name: "Zilver", lessons: 30, price: 2130, savings: 200, featured: true },
  { id: "goud", name: "Goud", lessons: 40, price: 2730, savings: 250, featured: true },
  { id: "platinum", name: "Platinum", lessons: 50, price: 3300, savings: 300 },
];

export const packageBenefits = [
  "Praktijkexamen B inbegrepen",
  "Gratis proefles t.w.v. € 65",
  "Gratis online theorieomgeving",
];

const LESSON_PACKAGE = 60;
const LESSON_LOOSE = 65;
const EXAM = 330;
const THEORY = 50;

export function bestCombination(lessons: number) {
  const options = packages.map((p) => {
    const extra = Math.max(0, lessons - p.lessons);
    return { package: p, extra, extraCost: extra * LESSON_LOOSE, total: p.price + extra * LESSON_LOOSE };
  });
  options.push({
    package: undefined as unknown as Package,
    extra: lessons,
    extraCost: lessons * LESSON_LOOSE,
    total: lessons * LESSON_LOOSE + EXAM + THEORY,
  });
  options.sort((a, b) => a.total - b.total || (b.package?.lessons ?? 0) - (a.package?.lessons ?? 0));
  const match = options[0];
  const pack = match.package;
  const looseTotal = lessons * LESSON_LOOSE + EXAM + THEORY;
  return {
    package: pack,
    extra: match.extra,
    extraCost: match.extraCost,
    total: match.total,
    looseTotal,
    savings: Math.max(0, looseTotal - match.total),
  };
}

export function packageById(id: string | null | undefined) {
  if (!id) return undefined;
  return packages.find((p) => p.id === id);
}

export { LESSON_PACKAGE, LESSON_LOOSE, EXAM, THEORY };
