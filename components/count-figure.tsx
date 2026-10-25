"use client";

import { useEffect, useRef, useState } from "react";

// A work story's figure, which counts to its value once when it scrolls into view. A figure with
// no "from" counts up from zero (500M, 90%). One with a "from" counts down from the old value
// while a red strike draws through it (30 to 12 min, 30% to 5%). The server renders the final
// value, and screen readers always get it; the count only plays for figures that start off-screen,
// and never under reduced motion.

const DURATION = 900;

type Props = { figure: string; from?: string };

// "12 min" -> 12 and " min"; "30%" -> 30 and "%"
function split(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { number: Number(match[1]), suffix: match[2] } : { number: NaN, suffix: value };
}

export default function CountFigure({ figure, from }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const target = split(figure);
  const start = from ? split(from).number : 0;
  const [shown, setShown] = useState(target.number);
  const [struck, setStruck] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || Number.isNaN(target.number) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Leave figures that are already on screen alone, so nothing jumps under the reader's eyes
    const box = node.getBoundingClientRect();
    if (box.top < innerHeight && box.bottom > 0) return;

    setShown(start);
    setStruck(false);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setStruck(true);
        const began = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - began) / DURATION);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(start + (target.number - start) * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [start, target.number]);

  return (
    <span className="figure" ref={ref}>
      <span className="visually-hidden">{from ? `from ${from} to ${figure}` : figure}</span>
      <span aria-hidden="true">
        {from && <span className={`figure-from${struck ? " is-struck" : ""}`}>{from}</span>}
        {shown}
        {target.suffix}
      </span>
    </span>
  );
}
