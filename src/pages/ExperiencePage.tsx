import React from 'react';
import { 
  ArrowLeft, 
  Download
} from 'lucide-react';
import { ExperienceSimpleList } from '../components/ExperienceSimpleList';
import { EducationSection } from '../components/EducationSection';

interface ExperiencePageProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  onBackToHome,
  onOpenContact,
  onOpenResume
}) => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
      
      {/* Top Nav & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <button 
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-white transition group font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white font-semibold">Experience</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Rico_Alentijo_Resume.pdf"
            download="Rico_Alentijo_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Main Experience Simple List */}
      <ExperienceSimpleList 
        onOpenContact={onOpenContact}
        onOpenResume={onOpenResume}
      />

      {/* Education Section */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
        <EducationSection />
      </section>

    </div>
  );
};

export default ExperiencePage;
