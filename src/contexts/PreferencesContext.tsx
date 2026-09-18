import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "cubix:preferences";

type PreferencesMap = Record<string, number>;

interface PreferencesContextValue {
  preferences: PreferencesMap;
  hydrated: boolean;
  updatePreference: (key: string, value: number) => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePreferences needs to be used within a PreferencesProvider");
  return ctx;
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<PreferencesMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setPreferences(JSON.parse(raw) as PreferencesMap);
    } catch (err) {
      console.log(err)
    }
    setHydrated(true);
  }, []);

  const updatePreference = useCallback((key: string, value: number) => {

    console.log(key, value)

    let next: PreferencesMap = {};

    if (value == 0) {
      next = { ...preferences };
      delete next[key];
      setPreferences(next);
    } else {
      next = { ...preferences, [key]: value };
      setPreferences(next);
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.log(err)
    }
  }, [preferences]);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      preferences,
      hydrated,
      updatePreference
    }),
    [preferences, hydrated, updatePreference]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
