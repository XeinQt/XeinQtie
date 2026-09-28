const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const ROOT = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const DOC = `${ROOT}/stats/pageViews`;

export const isConfigured = Boolean(PROJECT_ID && API_KEY);

const toNumber = (value: unknown) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

// One commit call bumps the counter and returns the new total, so a first-time
// visit costs a single request instead of a write followed by a read.
const incrementAndRead = async () => {
  const response = await fetch(`${ROOT}:commit?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      writes: [
        {
          transform: {
            document: DOC,
            fieldTransforms: [{ fieldPath: 'count', increment: { integerValue: '1' } }],
          },
        },
      ],
    }),
  });
  const json = await response.json();
  return toNumber(json?.writeResults?.[0]?.transformResults?.[0]?.integerValue);
};

const read = async () => {
  const response = await fetch(`${DOC}?key=${API_KEY}`);
  const json = await response.json();
  return toNumber(json?.fields?.count?.integerValue);
};

export const loadVisitCount = (shouldIncrement: boolean) =>
  shouldIncrement ? incrementAndRead() : read();
