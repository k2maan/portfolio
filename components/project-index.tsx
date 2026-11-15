"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/data";

// Wide screens: every project in one list beside a large preview. Only the active project is open,
// and pointing at a project (or focusing it) opens it and fades its screenshot into the preview.
// Narrow screens: the same list becomes a row of cards you swipe sideways, each with its own
// screenshot. That row is plain CSS scroll-snap: nothing on a phone listens to the page scroll.
export default function ProjectIndex({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const hoverTimer = useRef<number | undefined>(undefined);
  // Phones show every card open, so each one reports itself as expanded there
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const query = matchMedia("(min-width: 960px)");
    const update = () => setWide(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // The shipped strip in the intro links to #slug; open that project when it is followed
  useEffect(() => {
    function fromHash() {
      const i = products.findIndex((p) => `#${p.slug}` === window.location.hash);
      if (i >= 0) setActive(i);
    }
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [products]);

  // A short delay, so sweeping the pointer down the list doesn't flicker through every project
  function hoverTo(i: number) {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setActive(i), 90);
  }

  return (
    <div className="index">
      <ol className="index-list" onPointerLeave={() => window.clearTimeout(hoverTimer.current)}>
        {products.map((product, i) => {
          const open = !wide || i === active;
          const [primary, ...others] = product.links;
          return (
            <li
              key={product.slug}
              id={product.slug}
              className="entry"
              data-open={i === active || undefined}
              onPointerEnter={(e) => e.pointerType === "mouse" && hoverTo(i)}
            >
              <h3>
                <button
                  type="button"
                  className="entry-head"
                  aria-expanded={open}
                  aria-controls={`${product.slug}-body`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="entry-name">{product.name}</span>
                  <span className="entry-kind">{product.kind}</span>
                  <span className="entry-year">{product.year}</span>
                </button>
              </h3>
              <a
                className="entry-shot"
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image src={product.image} alt="" sizes="(min-width: 960px) 1px, 84vw" placeholder="blur" />
              </a>
              <div className="entry-body" id={`${product.slug}-body`}>
                <div className="entry-inner">
                  <p className="entry-summary">{product.summary}</p>
                  <p className="entry-links">
                    <a className="button" href={primary.href} target="_blank" rel="noopener noreferrer">
                      {primary.label}
                    </a>
                    {others.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ))}
                    {!product.live && <span className="entry-note">Source only</span>}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="preview" aria-hidden="true">
        <div className="preview-stage">
          {products.map((product, i) => (
            <Image
              key={product.slug}
              src={product.image}
              alt=""
              className="preview-shot"
              data-active={i === active || undefined}
              sizes="(min-width: 1200px) 620px, 52vw"
              placeholder="blur"
              priority={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
