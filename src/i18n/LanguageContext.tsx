import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import type { LocalizedText } from "@/data/types";

import { DEFAULT_LANG, htmlLangOf, isLang, languages, type Lang } from "./languages";
import { ui, type UiDict } from "./ui";

export type { Lang };

const STORAGE_KEY = "cubix:lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  languages: typeof languages;
  t: UiDict;
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
    if (isLang(stored)) return stored;
  } catch {
    // localStorage indisponível: segue para detecção pelo navegador
  }
  const browser = typeof navigator !== "undefined" ? navigator.language?.toLowerCase() : "";
  const match = languages.find((l) => browser?.startsWith(l.code));
  return match?.code ?? DEFAULT_LANG;
}

function dictFor(lang: Lang): UiDict {
  return ui[lang] ?? ui[DEFAULT_LANG];
}

function resolve(value: LocalizedText | undefined, lang: Lang): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value[DEFAULT_LANG] ?? Object.values(value)[0] ?? "";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const detected = detectLang();
    setLangState(detected);
    document.documentElement.lang = htmlLangOf(detected);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = htmlLangOf(next);
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
      languages,
      t: dictFor(lang),
      tx: (v) => resolve(v, lang),
    }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
