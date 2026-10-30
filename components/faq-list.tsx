import Link from "next/link";
import type { FaqItem } from "@/lib/content";
import type { ReactNode } from "react";

function withLinks(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const href = m[2];
    if (href.startsWith("/")) {
      return (
        <Link key={`${href}-${i}`} className="tekstlink" href={href}>
          {m[1]}
        </Link>
      );
    }
    return (
      <a key={`${href}-${i}`} className="tekstlink" href={href} target="_blank" rel="noopener noreferrer">
        {m[1]}
      </a>
    );
  });
}

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <span className="plus" aria-hidden="true" />
          </summary>
          <div className="faq-antwoord">
            {item.a.split("\n\n").map((p) => (
              <p key={p}>{withLinks(p)}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
