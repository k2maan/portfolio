"use client";

import { useEffect, useRef } from "react";

// One thread: a hairline that runs the length of the page and draws itself as you scroll. It runs
// down the right edge through the hero and the first section, swings across in the empty space
// above each next heading, and runs down the other edge. The red dot rides its tip, which stays
// 65% of the way down the screen. Mounted once, in the layout.

export default function Thread() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current!;
    const path = svg.querySelector("path")!;
    const dot = svg.querySelector("circle")!;
    let samples: { x: number; y: number; len: number }[] = [];

    function build() {
      // Collapse the drawing first: it's part of the page, so measuring with it in place would keep
      // the page as tall as it was the last time (blank space under the footer after a resize)
      svg.setAttribute("width", "0");
      svg.setAttribute("height", "0");
      const W = document.documentElement.clientWidth;
      const H = document.documentElement.scrollHeight;
      svg.setAttribute("width", String(W));
      svg.setAttribute("height", String(H));
      const gutter = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--gutter")) || 16;
      const left = gutter / 2, right = W - gutter / 2;
      // The crossings: the empty space between the end of one section and the next heading
      const crossings = Array.from(document.querySelectorAll("main > section + section")).map((section) => {
        const top = section.getBoundingClientRect().top + scrollY;
        const head = (section.querySelector("h2") ?? section).getBoundingClientRect().top + scrollY;
        return { y1: top - 40, y2: head - 24 };
      });
      const hero = document.querySelector(".hero");
      const start = (hero ? hero.getBoundingClientRect().top + scrollY : 0) + 40;
      const smooth = (a: number, b: number, v: number) => {
        const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
        return t * t * (3 - 2 * t);
      };
      samples = [];
      let d = "", len = 0;
      let prev: { x: number; y: number } | null = null;
      for (let y = start; y <= H - 40; y += 12) {
        // Start on the right; each crossing swaps sides
        let side = 1;
        for (const c of crossings) side *= 1 - 2 * smooth(c.y1, c.y2, y);
        const t = (side + 1) / 2;
        const wobble = 4 * Math.sin(y / 150) + 2 * Math.sin(y / 61);
        const x = left + (right - left) * t + wobble;
        if (prev) len += Math.hypot(x - prev.x, y - prev.y);
        samples.push({ x, y, len });
        d += (prev ? " L " : "M ") + x.toFixed(1) + " " + y.toFixed(1);
        prev = { x, y };
      }
      path.setAttribute("d", d);
      path.style.strokeDasharray = String(len);
      update();
    }

    function update() {
      if (!samples.length) return;
      const total = samples[samples.length - 1].len;
      const edge = scrollY + innerHeight * 0.65;
      let i = samples.findIndex((s) => s.y > edge);
      if (i === -1) i = samples.length - 1;
      const tip = samples[Math.max(0, i)];
      path.style.strokeDashoffset = String(total - tip.len);
      dot.setAttribute("cx", String(tip.x));
      dot.setAttribute("cy", String(tip.y));
    }

    // The page grows as images load, so rebuild whenever the body changes size
    const observer = new ResizeObserver(build);
    observer.observe(document.body);
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", build);
    document.fonts?.ready.then(build);
    build();
    return () => {
      observer.disconnect();
      removeEventListener("scroll", update);
      removeEventListener("resize", build);
    };
  }, []);

  return (
    <svg className="thread" ref={svgRef} aria-hidden="true">
      <path />
      <circle r="5" />
    </svg>
  );
}
