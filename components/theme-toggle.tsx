"use client";

import { useEffect, useState } from "react";

// Switches between light and dark by setting data-theme on <html>, which the color tokens in
// globals.css follow. The choice is remembered; until someone picks, the site follows the system.
// The script in the layout's <head> applies a saved choice before the first paint.

type Theme = "light" | "dark";

export function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(currentTheme());
    // Follow the system while no choice is saved
    const query = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(currentTheme());
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private windows can block storage; the switch still works for this visit
    }
    setTheme(next);
  }

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      {/* A circle, half ink: the same shape in both themes, filled on the side of the current one */}
      <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
        <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
      </svg>
    </button>
  );
}
