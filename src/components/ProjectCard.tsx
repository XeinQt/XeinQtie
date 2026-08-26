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
    <div className="group rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between">
      
      {/* Top Banner Image Container */}
      <div className="w-full h-48 sm:h-52 bg-zinc-950 overflow-hidden relative border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* Card Content Area */}
      <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
        
        <div className="space-y-3">
          {/* Category & Year Header Row */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Tags with Official Logos */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag, idx) => (
              <TechBadge key={idx} name={tag} size="sm" />
            ))}
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
          {/* Read Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="font-bold text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition flex items-center gap-1 font-mono"
          >
            <span>Read case study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* External Links */}
          <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 font-mono">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-0.5"
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
                className="hover:text-zinc-900 dark:hover:text-white transition flex items-center gap-0.5"
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
