import { useEffect, useState } from 'react';
import { doc, getDoc, increment, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebaseClient';

const SESSION_FLAG = 'portfolio_visit_counted';

export const useVisitCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!db) return;

    const ref = doc(db, 'stats', 'pageViews');
    const alreadyCounted = sessionStorage.getItem(SESSION_FLAG);

    (async () => {
      try {
        if (!alreadyCounted) {
          await setDoc(ref, { count: increment(1) }, { merge: true });
          sessionStorage.setItem(SESSION_FLAG, '1');
        }
        const snap = await getDoc(ref);
        const value = snap.data()?.count;
        if (typeof value === 'number') setCount(value);
      } catch {
        // Fails silently (e.g. missing config or rules) — counter just stays hidden
      }
    })();
  }, []);

  return count;
};
