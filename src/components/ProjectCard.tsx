import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 shadow-2xs hover:shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between p-5 sm:p-6 space-y-4">
      
      {/* Top Media Preview Container */}
      <div 
        onClick={() => onOpenCaseStudy(project)}
        className="w-full h-44 sm:h-48 bg-zinc-950 rounded-xl overflow-hidden relative border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center cursor-pointer"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* Card Content Area */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        
        <div className="space-y-2">
          {/* Category & Year Header Row */}
          <div className="flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500 font-normal">
            <span>{project.category}</span>
            <span className="font-mono">{project.year}</span>
          </div>

          {/* Project Title (Clean, simple weight) */}
          <h3 
            onClick={() => onOpenCaseStudy(project)}
            className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white tracking-tight cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors line-clamp-1"
          >
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Tags with Official Logos */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <TechBadge key={idx} name={tag} size="sm" />
            ))}
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
          {/* Read Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="font-medium text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition flex items-center gap-1 cursor-pointer"
          >
            <span>Read case study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* External Links */}
          <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-0.5 font-normal"
              >
                <span>Live</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-0.5 font-normal"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectCard;
