import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';
import { TechBadge } from './TechBadge';

interface FeaturedBuildCardProps {
  onOpenCaseStudy?: () => void;
}

export const FeaturedBuildCard: React.FC<FeaturedBuildCardProps> = ({ onOpenCaseStudy }) => {
  const { featuredBuild } = portfolioMeta;

  return (
    <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-850 p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6 bg-white/40 dark:bg-zinc-900/30">
      
      {/* Mockup Preview on Left */}
      <div 
        onClick={onOpenCaseStudy}
        className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-950 flex items-center justify-center cursor-pointer group"
      >
        <img 
          src={featuredBuild.image} 
          alt={featuredBuild.title}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* Content on Right */}
      <div className="flex-1 min-w-0 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            {featuredBuild.badge}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            1,000+ Students
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {featuredBuild.title}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
          {featuredBuild.description}
        </p>

        {/* Tech Stack Tags with Official Logos */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {featuredBuild.tags.map((tag, idx) => (
            <TechBadge key={idx} name={tag} size="sm" />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenCaseStudy}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 shadow-sm transition cursor-pointer"
          >
            <span>Read case study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {featuredBuild.link && (
            <a
              href={featuredBuild.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition"
            >
              <span>Live App</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default FeaturedBuildCard;
