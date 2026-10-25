"use client";

import { useEffect, useRef } from "react";
import { currentTheme } from "@/components/theme-toggle";

// The hero portrait as a halftone: the photo's head and shoulders sampled on a hexagonal grid and
// drawn as dots in the theme's ink. Light mode sizes dots by darkness, dark mode by lightness, so
// it reads as a positive either way. The wall behind is cut away, and the blazer dissolves into
// smaller dots at the bottom.

// Head and shoulders in photo pixels (public/profile-2.jpg, 848 x 1060)
const CROP = { x: 170, y: 0, w: 540, h: 640 };
const COLS = 62;

type Dot = { x: number; y: number; L: number };

// Brightness of the crop on a cols x rows grid. -1 marks the wall: the pale, colorless area
// connected to the crop's edges, flooded from the border so nothing inside the silhouette is cut.
function sample(img: HTMLImageElement, cols: number, rows: number) {
  const c = document.createElement("canvas");
  c.width = cols;
  c.height = rows;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.drawImage(img, CROP.x, CROP.y, CROP.w, CROP.h, 0, 0, cols, rows);
  const data = g.getImageData(0, 0, cols, rows).data;
  const out = new Float32Array(cols * rows);
  const wallish = new Uint8Array(cols * rows);
  for (let i = 0; i < cols * rows; i++) {
    const R = data[i * 4], G = data[i * 4 + 1], B = data[i * 4 + 2];
    const L = (0.2126 * R + 0.7152 * G + 0.0722 * B) / 255;
    const sat = (Math.max(R, G, B) - Math.min(R, G, B)) / 255;
    out[i] = L;
    wallish[i] = L > 0.55 && sat < 0.08 ? 1 : 0;
  }
  const queue: number[] = [];
  for (let col = 0; col < cols; col++) queue.push(col, (rows - 1) * cols + col);
  for (let row = 0; row < rows; row++) queue.push(row * cols, row * cols + cols - 1);
  const seen = new Uint8Array(cols * rows);
  while (queue.length) {
    const i = queue.pop()!;
    if (seen[i] || !wallish[i]) continue;
    seen[i] = 1;
    out[i] = -1;
    const row = (i / cols) | 0, col = i % cols;
    if (col > 0) queue.push(i - 1);
    if (col < cols - 1) queue.push(i + 1);
    if (row > 0) queue.push(i - cols);
    if (row < rows - 1) queue.push(i + cols);
  }
  return out;
}

function buildDots(img: HTMLImageElement) {
  const s = CROP.w / COLS, rowH = s * 0.866, rows = Math.floor(CROP.h / rowH);
  const lum = sample(img, COLS, rows);
  let dots: Dot[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < COLS; c++) {
      const L = lum[r * COLS + c];
      if (L >= 0) dots.push({ x: c * s + (r % 2 ? s / 2 : 0) + s / 2, y: r * rowH + rowH / 2, L });
    }
  }
  // Drop stray specks in the upper half (wall noise around the hair), keep anything in a cluster
  const near = (a: Dot) => dots.some((b) => b !== a && Math.abs(b.x - a.x) < s * 1.6 && Math.abs(b.y - a.y) < s * 1.6);
  dots = dots.filter(
    (d) => d.y > CROP.h * 0.5 || (near(d) && dots.filter((b) => Math.hypot(b.x - d.x, b.y - d.y) < s * 3).length > 6),
  );
  return { dots, s };
}

export default function DotPortrait({ src }: { src: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const box = boxRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const hero = box.closest<HTMLElement>(".hero");
    const darkQuery = matchMedia("(prefers-color-scheme: dark)");
    let grid: { dots: Dot[]; s: number } | null = null;
    let frame = 0;

    // Keep the art above the name however tall the credit strip under it is, and tell the CSS how
    // much room there is between the header and the art's bottom edge, so the whole head fits
    function placeStrip() {
      const strip = hero?.querySelector(".hero-meta");
      if (!hero || !strip) return;
      hero.style.setProperty("--strip-h", strip.getBoundingClientRect().height + 22 + "px");
      const header = document.querySelector<HTMLElement>(".site-header");
      const bottom = box.getBoundingClientRect().bottom + scrollY;
      hero.style.setProperty("--art-room", Math.max(0, bottom - (header?.offsetHeight ?? 0) - 16) + "px");
    }

    function draw() {
      frame = 0;
      if (!grid) return;
      const W = canvas.clientWidth, H = canvas.clientHeight, dpr = Math.min(devicePixelRatio, 2);
      if (!W || !H) return;
      if (canvas.width !== Math.round(W * dpr)) {
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
      }
      const k = Math.min(W / CROP.w, H / CROP.h);
      const ox = (W - CROP.w * k) / 2, oy = (H - CROP.h * k) / 2;
      ctx.setTransform(dpr * k, 0, 0, dpr * k, dpr * ox, dpr * oy);
      ctx.clearRect(-1e4, -1e4, 2e4, 2e4);
      const dark = currentTheme() === "dark";
      const max = grid.s * 0.6;
      ctx.fillStyle = getComputedStyle(box).color;
      for (const d of grid.dots) {
        let t = dark ? (d.L - 0.08) / 0.72 : (0.9 - d.L) / 0.78;
        t = Math.max(0, Math.min(1, t)) ** 1.15;
        // The blazer dissolves into smaller dots over the bottom quarter, instead of a hard edge
        const fade = Math.min(1, Math.max(0, (CROP.h - d.y) / (CROP.h * 0.26)));
        const r = t * max * (0.25 + 0.75 * fade);
        if (r < 0.35) continue;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const redraw = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const img = new Image();
    img.onload = () => {
      grid = buildDots(img);
      redraw();
    };
    img.src = src;

    function onResize() {
      placeStrip();
      redraw();
    }

    placeStrip();
    document.fonts?.ready.then(placeStrip);
    addEventListener("resize", onResize);
    darkQuery.addEventListener("change", redraw);
    // Redraw when the header switch changes the theme
    const themeObserver = new MutationObserver(redraw);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => {
      themeObserver.disconnect();
      cancelAnimationFrame(frame);
      removeEventListener("resize", onResize);
      darkQuery.removeEventListener("change", redraw);
    };
  }, [src]);

  return (
    <div className="hero-art" ref={boxRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
