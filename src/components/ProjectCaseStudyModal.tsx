import React, { useState } from 'react';
import { 
  X, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Image as ImageIcon, 
  ShieldCheck, 
  Layers, 
  Lock 
} from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import { TechBadge } from './TechBadge';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'techStack'>('overview');

  if (!project) return null;

  const screenshots = project.screenshots || [];
  const currentImage = screenshots.length > 0 ? screenshots[selectedScreenshotIdx]?.url : project.image;
  const currentCaption = screenshots.length > 0 ? screenshots[selectedScreenshotIdx]?.caption : project.description;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/70 dark:bg-zinc-950/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                CASE STUDY · {project.year}
              </span>
              {project.id === 'kaban' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30">
                  <ShieldCheck className="w-3 h-3" />
                  3FA Secured
                </span>
              )}
              {project.id === 'checkpoint' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  Biometric Guard
                </span>
              )}
              {project.id === 'jajapos' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  100% Offline-First
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs (if project has modules or techStackTable) */}
        {(project.modules || project.techStackTable) && (
          <div className="px-6 border-b border-zinc-100 dark:border-zinc-800 flex gap-4 text-xs font-medium bg-zinc-50/30 dark:bg-zinc-950/20">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 border-b-2 transition cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              Overview & Screenshots
            </button>
            {project.modules && (
              <button
                onClick={() => setActiveTab('modules')}
                className={`py-3 border-b-2 transition cursor-pointer ${
                  activeTab === 'modules'
                    ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                Core Functional Modules
              </button>
            )}
            {project.techStackTable && (
              <button
                onClick={() => setActiveTab('techStack')}
                className={`py-3 border-b-2 transition cursor-pointer ${
                  activeTab === 'techStack'
                    ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                Full Technology Stack
              </button>
            )}
          </div>
        )}

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans">
          
          {/* TAB 1: OVERVIEW & SCREENSHOTS */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Interactive Multi-Screenshot Gallery */}
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center max-h-80 shadow-sm relative group">
                  <img 
                    src={currentImage} 
                    alt={project.title} 
                    className="w-full h-auto object-contain max-h-80 transition-all duration-300" 
                  />
                </div>

                {/* Screenshot Caption */}
                {currentCaption && (
                  <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 italic text-center px-2">
                    {currentCaption}
                  </p>
                )}

                {/* Screenshot Thumbnail Switcher */}
                {screenshots.length > 1 && (
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                    {screenshots.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedScreenshotIdx(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                          selectedScreenshotIdx === idx
                            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold shadow-xs'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                        }`}
                      >
                        <ImageIcon className="w-3 h-3" />
                        <span>{s.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Metrics Row */}
              {project.caseStudy.metrics && (
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

              {/* Executive Summary */}
              <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Executive Summary</h4>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {project.caseStudy.overview}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
                  <div className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
                    The Problem & Challenge
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
                  <div className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
                    The Architectural Solution
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Security Highlights */}
              {project.caseStudy.securityHighlights && (
                <div className="p-4 rounded-2xl bg-[#0284c7]/5 dark:bg-[#38bdf8]/5 border border-[#38bdf8]/20 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-xs">
                    <Lock className="w-4 h-4 text-[#38bdf8]" />
                    <span>
                      {project.id === 'checkpoint' 
                        ? 'Biometric Privacy & Anti-Spoof Security' 
                        : project.id === 'jajapos'
                        ? 'Local Data Security, Cryptography & Role Enforcement'
                        : '3-Factor Authentication (3FA) & Institutional Security'}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                    {project.caseStudy.securityHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Highlights */}
              {project.caseStudy.architecture && (
                <div className="space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                    <span>Architecture & Technical Highlights</span>
                  </h4>
                  <div className="space-y-2">
                    {project.caseStudy.architecture.map((arch, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/70 dark:border-zinc-800">
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

              {/* Technologies Badges */}
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
            </div>
          )}

          {/* TAB 2: CORE FUNCTIONAL MODULES */}
          {activeTab === 'modules' && project.modules && (
            <div className="space-y-5 animate-fade-in">
              {project.modules.map((mod, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                      <span>{mod.title}</span>
                    </h4>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {mod.route}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {mod.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: COMPLETE TECHNOLOGY STACK TABLE */}
          {activeTab === 'techStack' && project.techStackTable && (
            <div className="space-y-4 animate-fade-in">
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] uppercase border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                      <th className="p-3 sm:p-3.5">Layer / Domain</th>
                      <th className="p-3 sm:p-3.5">Technologies & Libraries</th>
                      <th className="p-3 sm:p-3.5">Purpose & Implementation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-sans">
                    {project.techStackTable.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-850/50 transition-colors">
                        <td className="p-3 sm:p-3.5 font-semibold text-zinc-900 dark:text-white whitespace-nowrap">
                          {row.layer}
                        </td>
                        <td className="p-3 sm:p-3.5 font-mono text-zinc-700 dark:text-zinc-300 text-[11px]">
                          {row.tech}
                        </td>
                        <td className="p-3 sm:p-3.5 text-zinc-500 dark:text-zinc-400 text-xs">
                          {row.purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Credits & Authors */}
          {project.authors && (
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/70 dark:border-zinc-800 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
              <div>
                <strong>Authors & Engineering Credits:</strong> Developed by {project.authors}.
              </div>
              <div className="text-[10px] font-mono text-zinc-400">
                Institutional Release {project.year}
              </div>
            </div>
          )}

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
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-black dark:hover:bg-zinc-200 transition shadow-sm cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCaseStudyModal;
