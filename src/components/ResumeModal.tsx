import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Code2
} from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';
import { experiences } from '../data/experienceData';
import { TechBadge } from './TechBadge';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950/50">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              Curriculum Vitae / Resume Preview
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 transition shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-sans">
          
          {/* Header Summary */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">{portfolioMeta.name}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 font-semibold mt-0.5">{portfolioMeta.title}</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-2">{portfolioMeta.location} · {portfolioMeta.email}</p>
            <p className="text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed text-xs sm:text-sm">{portfolioMeta.bio}</p>
          </div>

          {/* Key Skills */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              Core Competencies & Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {portfolioMeta.skillsSummary.map((skill, i) => (
                <TechBadge key={i} name={skill} size="sm" />
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              Professional Experience
            </h4>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-3.5 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-zinc-900 dark:text-white">{exp.role}</span>
                    <span className="text-[11px] font-mono text-zinc-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    {exp.company} — <span className="text-zinc-500">{exp.location}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">{exp.summary}</p>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-500 dark:text-zinc-400 space-y-0.5 mt-1">
                    {exp.bullets.slice(0, 2).map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Placeholder */}
          <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              Education & Certifications
            </h4>
            <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-3.5">
              <div className="font-bold text-zinc-900 dark:text-white">Bachelor of Science in Computer Science / Information Technology</div>
              <div className="text-xs text-zinc-500">Polytechnic University of the Philippines · Graduated with Honors</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
