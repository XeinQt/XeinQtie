import React from 'react';
import { useVisitCounter } from '../hooks/useVisitCounter';

const AVATARS = [
  '/img/avatars/avatar-1.svg',
  '/img/avatars/avatar-2.svg',
  '/img/avatars/avatar-3.svg',
  '/img/avatars/avatar-4.svg',
];

export const VisitorBadge: React.FC = () => {
  const count = useVisitCounter();

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {AVATARS.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-6 h-6 rounded-full object-cover bg-zinc-200 dark:bg-zinc-800 ring-2 ring-zinc-50 dark:ring-zinc-950"
          />
        ))}
      </div>
      <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-600 dark:text-zinc-300">
        Visited by <span className="font-semibold text-zinc-900 dark:text-white">{count.toLocaleString()}</span> people
      </span>
    </div>
  );
};

export default VisitorBadge;
