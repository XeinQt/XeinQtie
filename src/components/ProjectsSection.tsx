import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 space-y-8">
      
      {/* Header matching exact layout in screenshot */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div className="space-y-1">
          <div className="text-xs font-mono font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            SELECTED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Featured Full-Stack & AI Products
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 pb-1">
          3 Production Case Studies
        </div>
      </div>

      {/* 2-Column Responsive Grid matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
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
