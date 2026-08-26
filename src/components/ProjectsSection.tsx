import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 space-y-8">
      
      {/* Minimalist Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-[10px] font-mono font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight mt-0.5">
            Featured Projects
          </h2>
        </div>
        <div className="text-xs text-zinc-400 dark:text-zinc-500 pb-1 font-normal">
          3 Production Case Studies
        </div>
      </div>

      {/* 2-Column Minimalist Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};

export default ProjectsSection;
