import React from 'react';
import { ExperienceItem } from '../data/experienceData';
import { ExperienceCard } from './ExperienceCard';
import { Briefcase } from 'lucide-react';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => {
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
    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-zinc-900 dark:before:from-zinc-100 before:via-zinc-300 dark:before:via-zinc-700 before:to-transparent">
      {items.map((item, index) => {
        const isFirst = index === 0;

        return (
          <div key={item.id} className="relative group/timeline">
            {/* Connector Node Marker */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-6 flex items-center justify-center">
              {isFirst && item.isCurrent ? (
                <div className="relative flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-zinc-400/25 dark:bg-zinc-500/25 animate-ping absolute"></div>
                  <div className="w-4 h-4 rounded-full bg-zinc-900 dark:bg-zinc-100 border-2 border-white dark:border-[#09090b] shadow-md z-10"></div>
                </div>
              ) : (
                <div className="w-3.5 h-3.5 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-[#09090b] group-hover/timeline:bg-zinc-900 dark:group-hover/timeline:bg-zinc-100 group-hover/timeline:scale-125 transition-all duration-200 z-10 shadow-sm"></div>
              )}
            </div>

            {/* Experience Card */}
            <ExperienceCard 
              item={item} 
              defaultExpanded={isFirst} 
              viewMode="timeline"
            />
          </div>
        );
      })}
    </div>
  );
};
