import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsSectionProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'uiux'>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleOpen = (project: ProjectItem) => {
    if (onOpenCaseStudy) {
      onOpenCaseStudy(project.id);
    }
  };

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.typeCategory === filter;
  });

  const displayedProjects = (filter === 'all' && !showAll) 
    ? filteredProjects.slice(0, 4) 
    : filteredProjects;

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
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-xs font-normal">
          <button
            onClick={() => { setFilter('all'); }}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-medium shadow-xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            All ({projectsData.length})
          </button>
          <button
            onClick={() => { setFilter('fullstack'); }}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              filter === 'fullstack'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-medium shadow-xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Full-Stack ({fullstackCount})
          </button>
          <button
            onClick={() => { setFilter('uiux'); }}
            className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
              filter === 'uiux'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-medium shadow-xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            UI/UX & Figma ({uiuxCount})
          </button>
        </div>
      </div>

      {/* 2-Column Minimalist Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {displayedProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={(index % 2) * 0.08} y={20}>
            <ProjectCard
              project={project}
              onOpenCaseStudy={handleOpen}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* View All / Show Less Button */}
      {filter === 'all' && projectsData.length > 4 && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-xs transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <span>{showAll ? 'Show Less' : `View All Projects (${projectsData.length})`}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </button>
        </div>
      )}

    </div>
  );
};

export default ProjectsSection;
