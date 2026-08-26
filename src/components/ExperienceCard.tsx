import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  CheckCircle2, 
  TrendingUp, 
  FolderGit2 
} from 'lucide-react';
import { ExperienceItem } from '../data/experienceData';

interface ExperienceCardProps {
  item: ExperienceItem;
  defaultExpanded?: boolean;
  viewMode?: 'timeline' | 'grid';
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  item, 
  defaultExpanded = false,
  viewMode = 'timeline'
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'leadership':
        return 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700';
      case 'engineering':
        return 'bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700';
      case 'freelance':
        return 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700';
      case 'consulting':
        return 'bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700';
    }
  };

  const isTimeline = viewMode === 'timeline';

  return (
    <div 
      className={`group relative rounded-2xl transition-all duration-300 ${
        isTimeline
          ? 'bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 shadow-sm hover:shadow-lg'
          : 'bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 shadow-sm hover:shadow-lg flex flex-col justify-between'
      } p-5 sm:p-6`}
    >
      {/* Top Banner subtle hover line */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-zinc-400/0 to-transparent group-hover:via-zinc-400/40 dark:group-hover:via-zinc-500/40 transition-all duration-500"></div>

      <div>
        {/* Header: Company Avatar + Role + Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            {/* Company Monogram Badge */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.companyLogoBg} p-0.5 shadow-md shrink-0 flex items-center justify-center text-white font-bold font-mono text-base tracking-wider border border-zinc-700/40`}>
              {item.companyInitials}
            </div>

            <div>
              {/* Role Title */}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {item.role}
                </h3>
                {item.isCurrent && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-pulse"></span>
                    Current Role
                  </span>
                )}
              </div>

              {/* Company Name & Link */}
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  {item.company}
                </span>
                {item.companyUrl && (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
                    aria-label={`Visit ${item.company}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Location & Type pills */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {item.location}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className={`px-2 py-0.5 rounded-md border text-[11px] font-medium ${getCategoryBadgeClass(item.category)}`}>
                  {item.type}
                </span>
              </div>
            </div>
          </div>

          {/* Date & Duration Info */}
          <div className="sm:text-right shrink-0 bg-zinc-50 dark:bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
              <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                {item.startDate} — {item.endDate}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Summary Description */}
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {item.summary}
        </p>

        {/* Key Metrics / Highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {item.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className="bg-zinc-50 dark:bg-zinc-950/60 rounded-lg p-2 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2"
              >
                <TrendingUp className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold font-mono text-zinc-900 dark:text-white truncate">
                    {highlight.value}
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                    {highlight.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Project Callout (if available) */}
        {item.featuredProject && (
          <div className="mt-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2.5">
            <FolderGit2 className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
            <div className="text-xs">
              <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
                <span>{item.featuredProject.name}</span>
                <span className="px-1.5 py-0.2 text-[10px] rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono">
                  {item.featuredProject.tag}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mt-0.5">
                {item.featuredProject.description}
              </p>
            </div>
          </div>
        )}

        {/* Expandable Bullet Points */}
        {item.bullets && item.bullets.length > 0 && (
          <div className="mt-4">
            {isExpanded && (
              <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800 animate-fade-in">
                <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                  Key Responsibilities & Impact:
                </div>
                <ul className="space-y-2">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
            >
              <span>{isExpanded ? 'Hide Details' : `Show Detailed Achievements (${item.bullets.length})`}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>

      {/* Tech Stack Skills Badges */}
      <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex flex-wrap items-center gap-1.5">
          {item.skills.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition"
            >
              {skill.color && (
                <span 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: skill.color }}
                />
              )}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
