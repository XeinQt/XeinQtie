import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { ProjectsSection } from '../components/ProjectsSection';

interface ProjectsPageProps {
  onBackToHome: () => void;
  onOpenResume?: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBackToHome, onOpenResume }) => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
      {/* Top Breadcrumb navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <button 
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-white transition font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-semibold">Projects</span>
        </div>

        {onOpenResume && (
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        )}
      </div>

      {/* Main Projects Section */}
      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;
