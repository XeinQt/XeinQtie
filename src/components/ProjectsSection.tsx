import React from 'react';
import { projectsData, ProjectItem } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  onOpenCaseStudy?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const handleOpen = (project: ProjectItem) => {
    if (onOpenCaseStudy) {
      onOpenCaseStudy(project.id);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* Minimalist Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5">
        <div>
          <span className="text-[10px] font-mono font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight mt-0.5">
            Featured Projects
          </h2>
        </div>
        <div className="text-xs text-zinc-400 dark:text-zinc-500 pb-0.5 font-normal">
          3 Production Case Studies
        </div>
      </div>

      {/* 2-Column Minimalist Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {projectsData.map((project) => (
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
