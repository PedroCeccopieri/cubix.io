import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "cubelab:progress:v1";

type LearnedMap = Record<string, true>;

interface ProgressContextValue {
  learned: LearnedMap;
  hydrated: boolean;
  isLearned: (key: string) => boolean;
  toggle: (key: string) => void;
  setLearned: (key: string, value: boolean) => void;
  resetAll: () => void;
  countLearned: (keys: string[]) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function caseKey(puzzleId: string, methodId: string, caseId: string) {
  return `${puzzleId}/${methodId}/${caseId}`;
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [learned, setLearnedState] = useState<LearnedMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLearnedState(JSON.parse(raw) as LearnedMap);
    } catch {
      /* ignora storage indisponível */
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: LearnedMap) => {
    setLearnedState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignora */
    }
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      learned,
      hydrated,
      isLearned: (key) => Boolean(learned[key]),
      toggle: (key) => {
        const next = { ...learned };
        if (next[key]) delete next[key];
        else next[key] = true;
        persist(next);
      },
      setLearned: (key, value) => {
        const next = { ...learned };
        if (value) next[key] = true;
        else delete next[key];
        persist(next);
      },
      resetAll: () => persist({}),
      countLearned: (keys) => keys.reduce((acc, k) => acc + (learned[k] ? 1 : 0), 0),
    }),
    [learned, hydrated, persist],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress precisa estar dentro de ProgressProvider");
  return ctx;
}
