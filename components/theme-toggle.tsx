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
      {/* Both icons render; CSS shows the one for the theme a click switches to, so the right one is
          there on first paint, before React knows the theme. A moon in light mode, a sun in dark. */}
      <svg className="theme-icon theme-icon-moon" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
        <path
          d="M13.6 9.9A5.75 5.75 0 0 1 6.1 2.4a5.75 5.75 0 1 0 7.5 7.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <svg className="theme-icon theme-icon-sun" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
        <circle cx="8" cy="8" r="2.9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3.05 3.05l1.13 1.13M11.82 11.82l1.13 1.13M3.05 12.95l1.13-1.13M11.82 4.18l1.13-1.13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
