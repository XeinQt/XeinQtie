import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { TechnologiesSection } from '../components/TechnologiesSection';

interface SkillsPageProps {
  onNavigate: (tab: 'home' | 'experience' | 'projects' | 'skills' | 'contact') => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
      
      {/* Top Breadcrumbs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <button 
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-white transition group font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-semibold">Skills & Technologies</span>
        </div>
      </div>

      {/* Technologies Section Matching Exact User Reference */}
      <TechnologiesSection />

      {/* CTA to Experience & Projects */}
      <div className="p-6 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-zinc-900 dark:text-white text-sm">See these skills applied in real projects</h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">Explore the production case studies and client projects built with these tools.</p>
        </div>
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition shrink-0 shadow-sm"
        >
          <span>View Production Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

export default SkillsPage;
