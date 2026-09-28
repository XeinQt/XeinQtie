import { useEffect, useState } from 'react';
import { doc, getDoc, increment, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebaseClient';

const SESSION_FLAG = 'portfolio_visit_counted';

// Guards against React StrictMode invoking the effect twice in development,
// which would otherwise race the sessionStorage check and double-count a visit.
let inFlight: Promise<number | null> | null = null;

const loadCount = async (): Promise<number | null> => {
  if (!db) return null;

  const ref = doc(db, 'stats', 'pageViews');
  const alreadyCounted = sessionStorage.getItem(SESSION_FLAG);

  if (!alreadyCounted) {
    await setDoc(ref, { count: increment(1) }, { merge: true });
    sessionStorage.setItem(SESSION_FLAG, '1');
  }

  const value = (await getDoc(ref)).data()?.count;
  return typeof value === 'number' ? value : null;
};

export const useVisitCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    inFlight = inFlight ?? loadCount();

    inFlight
      .then((value) => {
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
