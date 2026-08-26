import React from 'react';
import { ExperienceItem } from '../data/experienceData';
import { MapPin, TrendingUp, ExternalLink } from 'lucide-react';

interface ExperienceTableViewProps {
  items: ExperienceItem[];
  onSelectItem?: (item: ExperienceItem) => void;
}

export const ExperienceTableView: React.FC<ExperienceTableViewProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
            <th className="py-3.5 px-4 sm:px-6">Role & Company</th>
            <th className="py-3.5 px-4">Period</th>
            <th className="py-3.5 px-4">Type & Location</th>
            <th className="py-3.5 px-4">Key Tech Stack</th>
            <th className="py-3.5 px-4 sm:px-6">Highlights</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
          {items.map((item) => (
            <tr 
              key={item.id}
              className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors"
            >
              {/* Role & Company */}
              <td className="py-4 px-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.companyLogoBg} p-0.5 shrink-0 flex items-center justify-center text-white font-bold font-mono text-xs shadow-sm border border-zinc-700/40`}>
                    {item.companyInitials}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-white flex items-center gap-1.5">
                      <span>{item.role}</span>
                      {item.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-pulse"></span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                      <span>{item.company}</span>
                      {item.companyUrl && (
                        <a href={item.companyUrl} target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </td>

              {/* Period */}
              <td className="py-4 px-4 font-mono text-xs text-zinc-800 dark:text-zinc-200">
                <div className="font-medium whitespace-nowrap">
                  {item.startDate} — {item.endDate}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {item.duration}
                </div>
              </td>

              {/* Type & Location */}
              <td className="py-4 px-4">
                <div className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                  {item.type}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  <span className="truncate max-w-[140px]">{item.location}</span>
                </div>
              </td>

              {/* Skills */}
              <td className="py-4 px-4">
                <div className="flex flex-wrap gap-1 max-w-[220px]">
                  {item.skills.slice(0, 4).map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {item.skills.length > 4 && (
                    <span className="text-[10px] text-zinc-400 font-mono self-center">
                      +{item.skills.length - 4}
                    </span>
                  )}
                </div>
              </td>

              {/* Highlights */}
              <td className="py-4 px-4 sm:px-6">
                {item.highlights && item.highlights[0] ? (
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-mono font-semibold border border-zinc-200 dark:border-zinc-700 whitespace-nowrap">
                    <TrendingUp className="w-3 h-3 text-zinc-700 dark:text-zinc-300" />
                    <span>{item.highlights[0].value} {item.highlights[0].label}</span>
                  </div>
                ) : (
                  <span className="text-zinc-400 text-xs">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
