import { useEffect, useState } from 'react';
import { isConfigured, loadVisitCount } from '../lib/visitCounter';

const CACHE_KEY = 'portfolio_visit_count';
const SESSION_FLAG = 'portfolio_visit_counted';

// Storage throws in some privacy modes, so every access stays best-effort.
const safeGet = (store: Storage, key: string) => {
  try {
    return store.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (store: Storage, key: string, value: string) => {
  try {
    store.setItem(key, value);
  } catch {
    /* ignore */
  }
};

const cachedCount = () => {
  const raw = safeGet(localStorage, CACHE_KEY);
  const parsed = Number(raw);
  return raw !== null && Number.isFinite(parsed) ? parsed : null;
};

// Shared across the StrictMode double-invoke so one page load counts once.
let inFlight: Promise<number | null> | null = null;

export const useVisitCounter = () => {
  // Seeded from cache so returning visitors see the number on first paint.
  const [count, setCount] = useState<number | null>(cachedCount);

  useEffect(() => {
    if (!isConfigured) return;

    let active = true;

    if (!inFlight) {
      const shouldIncrement = safeGet(sessionStorage, SESSION_FLAG) === null;
      if (shouldIncrement) safeSet(sessionStorage, SESSION_FLAG, '1');
      inFlight = loadVisitCount(shouldIncrement);
    }

    inFlight
      .then((value) => {
        if (value === null) return;
        safeSet(localStorage, CACHE_KEY, String(value));
        if (active) setCount(value);
      })
      .catch((error) => {
        inFlight = null;
        if (import.meta.env.DEV) console.warn('[visit counter]', error);
      });

    return () => {
      active = false;
    };
  }, []);

  return count;
};
