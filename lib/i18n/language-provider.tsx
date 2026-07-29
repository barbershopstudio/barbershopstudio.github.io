'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { type Locale } from './translations';

const STORAGE_KEY = 'locale';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Starts as 'es' to match the static HTML's `lang='es-CR'` and avoid a
  // hydration mismatch, then updates once the browser's actual language is
  // known. There's no ongoing external subscription to hook into here (just
  // a one-time read of navigator/localStorage on mount), so this is the
  // narrow, standard exception to "don't setState in an effect".
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const detected =
      stored === 'en' || stored === 'es'
        ? stored
        : navigator.language.toLowerCase().startsWith('en')
          ? 'en'
          : 'es';
    if (detected !== 'es') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(detected);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'es-CR';
  }, [locale]);

  const setLocale = (next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
