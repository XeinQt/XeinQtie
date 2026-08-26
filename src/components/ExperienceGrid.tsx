import React from 'react';
import { ExperienceItem } from '../data/experienceData';
import { ExperienceCard } from './ExperienceCard';
import { Briefcase } from 'lucide-react';

interface ExperienceGridProps {
  items: ExperienceItem[];
}

export const ExperienceGrid: React.FC<ExperienceGridProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white dark:bg-zinc-900/40 rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <Briefcase className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">No experiences match your criteria</h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto">
          Try clearing your search query or selecting a different role category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <ExperienceCard 
          key={item.id} 
          item={item} 
          defaultExpanded={false} 
          viewMode="grid"
        />
      ))}
    </div>
  );
};
