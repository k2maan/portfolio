"use client";

import { useEffect } from "react";

// A red circle that follows the pointer inside text marked with data-spot, painted only where the
// letters are (the styles live under "Spotlight" in globals.css). Elements that share a value,
// like data-spot="name" on both lines of the hero name, light up together so the circle can cross
// from one to the other. Mouse and trackpad only. Mounted once, in the layout.

export default function Spotlight() {
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let active: HTMLElement[] = [];
    let last: { clientX: number; clientY: number } | null = null;

    function members(el: HTMLElement) {
      const group = el.dataset.spot;
      return group ? Array.from(document.querySelectorAll<HTMLElement>(`[data-spot="${group}"]`)) : [el];
    }

    function follow(event: { clientX: number; clientY: number }) {
      last = { clientX: event.clientX, clientY: event.clientY };
      active.forEach((el) => {
        const box = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${event.clientX - box.left}px`);
        el.style.setProperty("--spot-y", `${event.clientY - box.top}px`);
      });
    }

    function onOver(event: PointerEvent) {
      const target = (event.target as Element).closest<HTMLElement>("[data-spot]");
      if (!target || active.includes(target)) return;
      active.forEach((el) => el.classList.remove("is-spot"));
      active = members(target);
      follow(event); // place the circle under the pointer before it grows, so it doesn't slide in
      active.forEach((el) => el.classList.add("is-spot"));
    }

    function onOut(event: PointerEvent) {
      const next = (event.relatedTarget as Element | null)?.closest<HTMLElement>("[data-spot]");
      if (next && active.includes(next)) return;
      active.forEach((el) => el.classList.remove("is-spot"));
      active = [];
    }

    function onMove(event: PointerEvent) {
      last = { clientX: event.clientX, clientY: event.clientY };
      if (active.length) follow(event);
    }

    // Scrolling moves text under a still pointer: light up, move or put out the circle to match
    function onScroll() {
      if (!last) return;
      const under = document.elementFromPoint(last.clientX, last.clientY)?.closest<HTMLElement>("[data-spot]");
      if (under && !active.includes(under)) {
        active.forEach((el) => el.classList.remove("is-spot"));
        active = members(under);
        follow(last);
        active.forEach((el) => el.classList.add("is-spot"));
      } else if (!under && active.length) {
        active.forEach((el) => el.classList.remove("is-spot"));
        active = [];
      } else if (under) {
        follow(last);
      }
    }

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointermove", onMove, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
