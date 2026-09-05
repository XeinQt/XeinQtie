import React, { useState } from 'react';
import { ChevronRight, X, Calendar, MapPin } from 'lucide-react';
import { experiences, ExperienceItem } from '../data/experienceData';
import { TechBadge } from './TechBadge';
import { ScrollReveal } from './ScrollReveal';

interface ExperienceSimpleListProps {
  onOpenContact?: () => void;
  onOpenResume?: () => void;
}

export const ExperienceSimpleList: React.FC<ExperienceSimpleListProps> = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [activeModalItem, setActiveModalItem] = useState<ExperienceItem | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* Header matching exact layout */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
          Experience
        </h2>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs sm:text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 flex items-center gap-0.5 transition font-normal cursor-pointer"
        >
          <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${showDetails ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Simple List */}
      <div className="space-y-5 sm:space-y-6">
        {experiences.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 0.07} y={16}>
            <div 
              className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-8 group"
            >
              {/* Left Column: Date Range */}
              <div className="w-full sm:w-48 shrink-0 text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 font-normal">
                {item.startDate} - {item.endDate}
              </div>

              {/* Right Column: Role, Company, Location */}
              <div className="flex-1 min-w-0">
                <h3 
                  onClick={() => setActiveModalItem(item)}
                  className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white tracking-tight cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors inline-block"
                >
                  {item.role}
                </h3>
                
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 font-normal">
                  {item.company}
                </div>

                <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 font-normal">
                  {item.location}
                </div>

                {/* Inline Expandable Details */}
                {showDetails && (
                  <div className="mt-3.5 space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 animate-fade-in text-xs sm:text-sm">
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {item.summary}
                    </p>
                    
                    <ul className="space-y-1.5 list-disc list-inside text-zinc-500 dark:text-zinc-400 font-normal">
                      {item.bullets.map((bullet, bi) => (
                        <li key={bi} className="leading-relaxed">
                          <span className="text-zinc-700 dark:text-zinc-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Associated Skills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.skills.map((skill, si) => (
                        <TechBadge key={si} name={skill.name} size="sm" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Item Detail Modal (when role title is clicked for deep-dive) */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {activeModalItem.role}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {activeModalItem.company} · <span className="text-zinc-400">{activeModalItem.location}</span>
                </p>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-4 border-y border-zinc-100 dark:border-zinc-800 py-2">
              <span className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {activeModalItem.startDate} - {activeModalItem.endDate}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {activeModalItem.type}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {activeModalItem.summary}
            </p>

            {activeModalItem.bullets && activeModalItem.bullets.length > 0 && (
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                  Key Achievements & Responsibilities:
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {activeModalItem.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-1">
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider mb-1.5">
                Technologies & Tools:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeModalItem.skills.map((s, i) => (
                  <TechBadge key={i} name={s.name} size="sm" />
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-black dark:hover:bg-zinc-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ExperienceSimpleList;
