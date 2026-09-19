import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import type { LocalizedText } from "@/data/types";

import { ui, type UiDict } from "./ui";

export type Lang = "pt" | "en";

const STORAGE_KEY = "cubix:lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: UiDict;
  /** Resolve um texto que pode estar em um ou dois idiomas. */
  tx: (value: LocalizedText | undefined) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang precisa estar dentro de LanguageProvider");
  return ctx;
}

function detectLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") return stored;
  } catch {
    // localStorage indisponível: segue para detecção pelo navegador
  }
  const browser = typeof navigator !== "undefined" ? navigator.language : "pt";
  return browser && browser.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Começa em pt (igual ao SSR) e troca depois da hidratação, evitando mismatch.
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const detected = detectLang();
    setLangState(detected);
    document.documentElement.lang = detected === "pt" ? "pt-BR" : "en";
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // sem localStorage: a escolha vale só para esta sessão
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: ui[lang],
      tx: (v) => (v == null ? "" : typeof v === "string" ? v : v[lang]),
    }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
