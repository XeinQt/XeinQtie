import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'uiux'>('all');

  const handleOpen = (project: ProjectItem) => {
    if (onOpenCaseStudy) {
      onOpenCaseStudy(project.id);
    }
  };

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.typeCategory === filter;
  });

  const fullstackCount = projectsData.filter(p => p.typeCategory === 'fullstack').length;
  const uiuxCount = projectsData.filter(p => p.typeCategory === 'uiux').length;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight mt-0.5">
            Featured Projects
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-850 border border-zinc-200/70 dark:border-zinc-800 text-xs font-normal">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white dark:bg-zinc-750 text-zinc-950 dark:text-white font-medium shadow-2xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            All ({projectsData.length})
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              filter === 'fullstack'
                ? 'bg-white dark:bg-zinc-750 text-zinc-950 dark:text-white font-medium shadow-2xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Full-Stack ({fullstackCount})
          </button>
          <button
            onClick={() => setFilter('uiux')}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              filter === 'uiux'
                ? 'bg-white dark:bg-zinc-750 text-zinc-950 dark:text-white font-medium shadow-2xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            UI/UX & Figma ({uiuxCount})
          </button>
        </div>
      </div>

      {/* 2-Column Minimalist Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 animate-fade-in">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={handleOpen}
          />
        ))}
      </div>

    </div>
  );
};

export default ProjectsSection;
