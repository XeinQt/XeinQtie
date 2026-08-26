import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import { TechBadge } from './TechBadge';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/70 dark:bg-zinc-950/50">
          <div>
            <span className="text-[10px] font-mono font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              CASE STUDY · {project.year}
            </span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans">
          
          {/* Banner Mockup Display */}
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center max-h-64 shadow-sm">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full object-cover" 
            />
          </div>

          {/* Overview */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Executive Summary</h4>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Metrics Highlight Row */}
          {project.caseStudy.metrics && project.caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {project.caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 text-center">
                  <div className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
              <div className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
                The Engineering Challenge
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
              <div className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
                The Technical Solution
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.caseStudy.architecture && (
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                <span>Architecture & Design Decisions</span>
              </h4>
              <div className="space-y-2">
                {project.caseStudy.architecture.map((arch, i) => (
                  <div key={i} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/70 dark:border-zinc-800">
                    <div className="font-semibold text-xs text-zinc-900 dark:text-white font-mono">
                      {arch.title}
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {arch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Key Capabilities Delivered:
            </h4>
            <ul className="space-y-1.5">
              {project.caseStudy.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges with Official Logos */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Technologies Utilized:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tech, i) => (
                <TechBadge key={i} name={tech} size="sm" />
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-900 dark:text-white hover:underline"
                >
                  <span>Visit Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-black dark:hover:bg-zinc-200 transition shadow-sm"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
