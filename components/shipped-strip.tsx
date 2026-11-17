"use client";

import { useEffect, useState } from "react";
import type { Product, Stretch } from "@/lib/data";

type Props = { products: Product[]; timeline: Stretch[] };

// A line of years with one dot per project from that year, stacked upward. A dot only names its
// project: hover or focus shows the name, and on touch screens a tap shows it until the next tap. Behind the dots, each job is a faint band over its years, so the jobs
// read as context and the dots stay the subject. The years before work stay blank.
export default function ShippedStrip({ products, timeline }: Props) {
  const years = products.map((p) => p.year);
  const first = Math.min(...years, ...timeline.map((t) => t.from));
  const last = Math.max(new Date().getFullYear(), ...years);
  const span = Array.from({ length: last - first + 1 }, (_, i) => first + i);
  const columns = { "--years": span.length } as React.CSSProperties;

  // The dot whose name is showing after a tap; hover and keyboard focus are handled in CSS
  const [shown, setShown] = useState<string | null>(null);

  // A tap anywhere else hides the name again
  useEffect(() => {
    if (!shown) return;
    function away(e: PointerEvent) {
      if (!(e.target as Element).closest?.(".shipped-dot")) setShown(null);
    }
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [shown]);

  let order = 0;

  return (
    <figure className="shipped" style={columns}>
      <div className="shipped-plot">
      <ol className="stretches" aria-label="Jobs">
        {timeline.map((t) => {
          // Each band runs from the start of its first year to the start of its last; an ongoing one
          // runs to the end of the line
          const start = t.from - first + 1;
          const end = t.to ? t.to - first + 1 : span.length + 1;
          return (
            <li key={t.label} className="stretch" style={{ gridColumn: `${start} / ${end}` }}>
              <span className="stretch-label">{t.label}</span>
              {t.title && <span className="stretch-title">{t.title}</span>}
              <span className="sr-only">
                {t.from} to {t.to ?? "now"}
              </span>
            </li>
          );
        })}
      </ol>
      <ol className="shipped-years">
        {span.map((year) => {
          const shipped = products.filter((p) => p.year === year);
          return (
            <li key={year} className="shipped-year">
              <span className="shipped-dots">
                {shipped.map((p) => (
                  <button
                    key={p.slug}
                    type="button"
                    className="shipped-dot"
                    data-shown={shown === p.slug || undefined}
                    style={{ "--i": order++ } as React.CSSProperties}
                    aria-label={`${p.name}, ${p.kind.toLowerCase()}, ${year}`}
                    onClick={() => setShown((now) => (now === p.slug ? null : p.slug))}
                  >
                    <span className="shipped-tip" aria-hidden="true">
                      {p.name}
                    </span>
                  </button>
                ))}
              </span>
              <span className="shipped-label">{year}</span>
            </li>
          );
        })}
      </ol>
      </div>
    </figure>
  );
}
