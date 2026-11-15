"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/data";

// Every project in one list, with one large preview that shows the active project's screenshot.
// Only the active project is open. Wide screens: the list sits beside the preview, and pointing at
// a project (or focusing it) opens it. Narrow screens: the preview sticks to the top while the list
// scrolls under it, and the project that scrolls into focus opens by itself, with no tap needed.
export default function ProjectIndex({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const hoverTimer = useRef<number | undefined>(undefined);
  const stageRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [wide, setWide] = useState(false);
  // When the scroll opens a different project, where its name sat before the swap, so the page can
  // be held still while the one above collapses
  const anchor = useRef<{ index: number; top: number } | null>(null);

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

  // Narrow screens: follow the scroll. The focus line sits just under the sticky preview; the active
  // project is the last one whose name has reached it, so each one opens as it arrives up top.
  useEffect(() => {
    if (wide) return;
    // Seven rectangle reads per scroll event is cheap, and nothing renders unless the active
    // project changes
    function follow() {
      const stage = stageRef.current;
      if (!stage) return;
      const line = stage.getBoundingClientRect().bottom + 56;
      let next = 0;
      entryRefs.current.forEach((entry, i) => {
        if (entry && entry.getBoundingClientRect().top <= line) next = i;
      });
      setActive((current) => {
        if (next !== current) {
          const entry = entryRefs.current[next];
          anchor.current = entry ? { index: next, top: entry.getBoundingClientRect().top } : null;
        }
        return next;
      });
    }
    follow();
    window.addEventListener("scroll", follow, { passive: true });
    return () => window.removeEventListener("scroll", follow);
  }, [wide]);

  // Opening one project closes another; if the closed one was above, everything below it moves up.
  // Scroll by the same amount so the newly opened project stays where the reader is looking.
  useLayoutEffect(() => {
    const held = anchor.current;
    anchor.current = null;
    if (wide || !held || held.index !== active) return;
    const entry = entryRefs.current[held.index];
    if (!entry) return;
    const shift = entry.getBoundingClientRect().top - held.top;
    if (shift !== 0) window.scrollBy(0, shift);
  }, [active, wide]);

  // On narrow screens a tap on a name scrolls that project up under the preview
  function choose(i: number) {
    setActive(i);
    if (!wide) entryRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // A short delay, so sweeping the pointer down the list doesn't flicker through every project
  function hoverTo(i: number) {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setActive(i), 90);
  }

  return (
    <div className="index">
      <ol className="index-list" onPointerLeave={() => window.clearTimeout(hoverTimer.current)}>
        {products.map((product, i) => {
          const open = i === active;
          const [primary, ...others] = product.links;
          return (
            <li
              key={product.slug}
              id={product.slug}
              className="entry"
              ref={(el) => {
                entryRefs.current[i] = el;
              }}
              data-open={i === active || undefined}
              onPointerEnter={(e) => e.pointerType === "mouse" && hoverTo(i)}
            >
              <h3>
                <button
                  type="button"
                  className="entry-head"
                  aria-expanded={open}
                  aria-controls={`${product.slug}-body`}
                  onClick={() => choose(i)}
                  onFocus={() => wide && setActive(i)}
                >
                  <span className="entry-name">{product.name}</span>
                  <span className="entry-kind">{product.kind}</span>
                  <span className="entry-year">{product.year}</span>
                </button>
              </h3>
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
        <div className="preview-stage" ref={stageRef}>
          {products.map((product, i) => (
            <Image
              key={product.slug}
              src={product.image}
              alt=""
              className="preview-shot"
              data-active={i === active || undefined}
              sizes="(min-width: 1200px) 620px, (min-width: 960px) 52vw, 100vw"
              placeholder="blur"
              priority={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
