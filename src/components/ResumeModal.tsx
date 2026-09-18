import React from 'react';
import { 
  X, 
  Printer,
  FileText
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const { header, experience, projects, education, skills } = resumeData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in print:p-0 print:static print:bg-white">
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:w-full print:bg-white">
        
        {/* Modal Header Controls (Hidden during print) */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/90 dark:bg-zinc-900/60 backdrop-blur-sm shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Rico Alentijo · Professional Resume</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 transition shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Paper Body (Scrollable, Clean Document Layout) */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto font-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 print:p-8 print:bg-white print:text-black">
          
          <div className="max-w-3xl mx-auto space-y-6 text-[13px] leading-relaxed">
            
            {/* Header: Name & Contact Info */}
            <div className="text-center space-y-1.5 pb-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white print:text-black">
                {header.name}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 print:text-zinc-800 font-medium">
                <span>{header.phone}</span>
                <span>|</span>
                <a href={`mailto:${header.email}`} className="text-zinc-900 dark:text-zinc-100 hover:underline">
                  {header.email}
                </a>
                <span>|</span>
                <a href={header.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-zinc-100 hover:underline">
                  {header.github}
                </a>
                <span>|</span>
                <a href={header.linkedinUrl} target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-zinc-100 hover:underline">
                  {header.linkedin}
                </a>
              </div>
            </div>

            {/* 1. EXPERIENCE */}
            <section className="space-y-3">
              <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 dark:text-white border-b-2 border-zinc-900 dark:border-zinc-100 pb-0.5 print:text-black print:border-black">
                EXPERIENCE
              </h2>

              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                        {exp.role}{exp.company ? `, ${exp.company}` : ''}
                      </h3>
                      <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 print:text-zinc-700 shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-700 dark:text-zinc-300 print:text-zinc-800 text-[12.5px] leading-snug">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. PROJECTS */}
            <section className="space-y-3">
              <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 dark:text-white border-b-2 border-zinc-900 dark:border-zinc-100 pb-0.5 print:text-black print:border-black">
                PROJECTS
              </h2>

              <div className="space-y-4">
                {projects.map((proj, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-100 print:text-black">
                        {proj.title}
                      </h3>
                      {proj.link && (
                        <a 
                          href={proj.url || `https://${proj.link}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white underline print:text-zinc-800 shrink-0"
                        >
                          {proj.link}
                        </a>
                      )}
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1 text-zinc-700 dark:text-zinc-300 print:text-zinc-800 text-[12.5px] leading-snug">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. EDUCATION */}
            <section className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 dark:text-white border-b-2 border-zinc-900 dark:border-zinc-100 pb-0.5 print:text-black print:border-black">
                EDUCATION
              </h2>

              <div className="space-y-1">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="text-zinc-900 dark:text-zinc-100 print:text-black">
                      <span className="font-bold">{edu.degree}</span> – {edu.institution}
                    </div>
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 print:text-zinc-700 shrink-0">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. SKILLS */}
            <section className="space-y-2.5">
              <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 dark:text-white border-b-2 border-zinc-900 dark:border-zinc-100 pb-0.5 print:text-black print:border-black">
                SKILLS
              </h2>

              <div className="space-y-1.5 text-[12.5px] leading-relaxed">
                {skills.map((s, idx) => (
                  <div key={idx} className="text-zinc-800 dark:text-zinc-200 print:text-black">
                    <span className="font-bold text-zinc-950 dark:text-white print:text-black">{s.category}:</span>{' '}
                    <span className="text-zinc-700 dark:text-zinc-300 print:text-zinc-800">{s.skills}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
