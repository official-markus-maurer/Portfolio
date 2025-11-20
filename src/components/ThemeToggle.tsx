"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<string | null>(null);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = saved ?? "light";
    setMode(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    document.documentElement.setAttribute("data-theme", initial);
  }, []);
  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center rounded-full border border-border bg-surface p-2 text-sm shadow-sm transition hover:bg-black/5"
    >
      {mode === "dark" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zm10.48 0l1.79-1.79 1.79 1.79-1.79 1.79-1.79-1.79zM12 2h0v2h0V2zm0 18h0v2h0v-2zM4.84 17.24l-1.79 1.79 1.79 1.79 1.79-1.79-1.79-1.79zm14.32 0l1.79 1.79-1.79 1.79-1.79-1.79 1.79-1.79zM2 12h2v0H2zm18 0h2v0h-2zM12 6a6 6 0 100 12 6 6 0 000-12z"/>
        </svg>
      )}
    </button>
  );
}
