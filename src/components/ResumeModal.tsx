import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Code2,
  User,
  Users,
  Sparkles,
  Phone,
  Mail,
  MapPin
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

  const { personalInfo, education, workExperience, skills, softSkills, characterReferences } = resumeData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in print:p-0 print:static print:bg-white">
      <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:w-full">
        
        {/* Modal Header Controls (Hidden during print) */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/90 dark:bg-zinc-950/60 backdrop-blur-sm shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Rico Alentijo · Updated 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 transition shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
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

        {/* Resume Document Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-sans print:p-0">
          
          {/* 1. Header with Photo, Name & Contact */}
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-5 border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <div className="space-y-2 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight uppercase font-sans">
                {personalInfo.name}
              </h1>
              
              <div className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{personalInfo.address}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span className="font-mono">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="text-zinc-900 dark:text-zinc-100 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Photo Avatar */}
            <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-sm bg-zinc-100 dark:bg-zinc-800 shrink-0">
              <img 
                src="/rico-alentijo-profile.jpg" 
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* 2. Personal Information */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
              <User className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Personal Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Date of Birth:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.dateOfBirth}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Age:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.age}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Sex:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.sex}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Civil Status:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.civilStatus}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Citizenship:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.citizenship}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Religion:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.religion}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Height:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.height}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Weight:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">{personalInfo.weight}</span>
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row justify-between border-b border-zinc-100 dark:border-zinc-800/60 py-1 gap-1">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium shrink-0">Place of Birth:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold sm:text-right">{personalInfo.placeOfBirth}</span>
              </div>
            </div>
          </section>

          {/* 3. Educational Background */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
              <GraduationCap className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Educational Background</span>
            </h2>

            <div className="space-y-2">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-xs sm:text-sm">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {edu.institution}, {edu.campus}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] font-semibold shrink-0">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Work Experience */}
          <section className="space-y-4">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
              <Briefcase className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-5">
              {workExperience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-xs sm:text-sm">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                    {exp.company}
                    {exp.projects && (
                      <span className="text-zinc-500 dark:text-zinc-500"> ({exp.projects})</span>
                    )}
                  </div>

                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-600 dark:text-zinc-300 space-y-1 leading-relaxed pt-0.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Skills */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
              <Code2 className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Skills & Competencies</span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300">
              {skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 mt-1.5 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Soft Skills */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
              <Sparkles className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Soft Skills</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {softSkills.map((softSkill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80"
                >
                  {softSkill}
                </span>
              ))}
            </div>
          </section>

          {/* 7. Character References */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-zinc-900 dark:text-white uppercase flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
              <Users className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Character References</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {characterReferences.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 space-y-1 text-xs"
                >
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    {ref.name}
                  </h3>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
                    {ref.title}
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-500">
                    {ref.institution}
                  </p>
                  <div className="pt-1.5 flex items-center gap-1 font-mono text-[11px] text-zinc-700 dark:text-zinc-300 font-semibold">
                    <Phone className="w-3 h-3 text-zinc-400" />
                    <span>{ref.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
