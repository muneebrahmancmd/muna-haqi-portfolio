"use client";

import { createContext, useContext, useEffect, useMemo } from "react";

// Dark theme only: the site always opens in dark mode (no light/system switching).
export type ThemeMode = "dark";
export type ResolvedTheme = "dark";

type ThemeCtx = {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  letter: "D";
  setMode: (m: ThemeMode) => void;
  cycle: () => void;
};

const Ctx = createContext<ThemeCtx | null>(null);
const noop = () => {};

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  }, []);
  const value = useMemo<ThemeCtx>(() => ({ mode: "dark", resolved: "dark", letter: "D", setMode: noop, cycle: noop }), []);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useThemeMode() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useThemeMode must be used within ThemeModeProvider");
  return ctx;
}
