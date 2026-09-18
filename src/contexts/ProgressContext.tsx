import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "cubix:progress";

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

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress precisa estar dentro de ProgressProvider");
  return ctx;
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [learnedState, setLearnedState] = useState<LearnedMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLearnedState(JSON.parse(raw) as LearnedMap);
    } catch (err) {
      console.log(err)
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: LearnedMap) => {
    setLearnedState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.log(err)
    }
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      learned: learnedState,
      hydrated,
      isLearned: (key) => Boolean(learnedState[key]),
      toggle: (key) => {
        const next = { ...learnedState };
        if (next[key]) delete next[key];
        else next[key] = true;
        persist(next);
      },
      setLearned: (key, value) => {
        const next = { ...learnedState };
        if (value) next[key] = true;
        else delete next[key];
        persist(next);
      },
      resetAll: () => persist({}),
      countLearned: (keys) => keys.reduce((acc, k) => acc + (learnedState[k] ? 1 : 0), 0)
    }),
    [learnedState, hydrated, persist]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
