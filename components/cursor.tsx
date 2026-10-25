"use client";

import { useEffect, useRef } from "react";

// The red circle as a cursor companion: the same shape as the dot in the K. mark and the
// spotlight, at whatever size suits what's under the pointer.
//   over project images   grows to a circle that says "Open" (the native cursor hides there)
//   over links and buttons  a small dot, like a full stop
//   over spotlight text   shrinks away, because the spotlight takes over as the circle
//   anywhere else         hidden
// Mouse and trackpad only. Mounted once, in the layout.

type State = "idle" | "link" | "open" | "spot";

function stateFor(target: Element | null): State {
  if (!target) return "idle";
  if (target.closest("[data-spot]")) return "spot";
  if (target.closest(".plate-image")) return "open";
  if (target.closest("a, button")) return "link";
  return "idle";
}

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");

    let x = -100;
    let y = -100;
    let drawnX = x;
    let drawnY = y;
    let frame = 0;
    let placed = false;

    // Trail the pointer slightly, which reads as weight rather than lag
    function draw() {
      drawnX += (x - drawnX) * 0.35;
      drawnY += (y - drawnY) * 0.35;
      node!.style.transform = `translate3d(${drawnX}px, ${drawnY}px, 0)`;
      frame = Math.abs(x - drawnX) + Math.abs(y - drawnY) > 0.2 ? requestAnimationFrame(draw) : 0;
    }

    function onMove(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      if (!placed) {
        // First move: appear where the pointer is instead of flying in from the corner
        drawnX = x;
        drawnY = y;
        placed = true;
      }
      node!.dataset.state = stateFor(event.target as Element);
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function onLeave() {
      node!.dataset.state = "idle";
    }

    // Scrolling moves the page under a still pointer, so check again what it's over
    function onScroll() {
      if (placed) node!.dataset.state = stateFor(document.elementFromPoint(x, y));
    }

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div className="cursor" ref={ref} data-state="idle" aria-hidden="true">
      <span className="cursor-circle">
        <span className="cursor-label">Open</span>
      </span>
    </div>
  );
}
