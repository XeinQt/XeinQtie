import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Image as ImageIcon, 
  ShieldCheck, 
  Layers, 
  Lock, 
  Github,
  Globe,
  Figma,
  UserCheck
} from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projectsData';
import { TechBadge } from '../components/TechBadge';

interface CaseStudyPageProps {
  projectId: string;
  onBack: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ projectId, onBack }) => {
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'techStack'>('overview');

  const project: ProjectItem = projectsData.find(p => p.id === projectId) || projectsData[0];
  const screenshots = project.screenshots || [];
  const currentImage = screenshots.length > 0 ? screenshots[selectedScreenshotIdx]?.url : project.image;
  const currentCaption = screenshots.length > 0 ? screenshots[selectedScreenshotIdx]?.caption : project.description;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedScreenshotIdx(0);
    setActiveTab('overview');
  }, [projectId]);

  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-10 animate-fade-in">
      
      {/* Back button & Action Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 dark:bg-zinc-850 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex flex-wrap items-center gap-2.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 shadow-sm transition"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Visit Live App</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#0284c7]/10 text-[#0284c7] dark:bg-[#38bdf8]/10 dark:text-[#38bdf8] border border-[#38bdf8]/30 hover:bg-[#38bdf8]/20 transition"
            >
              <Figma className="w-3.5 h-3.5" />
              <span>Open in Figma</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Title & Metadata */}
      <div className="space-y-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <span className="uppercase tracking-wider">{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
          {project.client && (
            <>
              <span>·</span>
              <span className="text-zinc-600 dark:text-zinc-300 flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-zinc-400" />
                Client: {project.client}
              </span>
            </>
          )}
          {project.role && (
            <>
              <span>·</span>
              <span>Role: {project.role}</span>
            </>
          )}
          {project.id === 'kaban' && (
            <>
              <span>·</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30">
                <ShieldCheck className="w-3 h-3" />
                3FA Secured
              </span>
            </>
          )}
          {project.id === 'checkpoint' && (
            <>
              <span>·</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3" />
                AI Biometric Guard
              </span>
            </>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
          {project.title}
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag, idx) => (
            <TechBadge key={idx} name={tag} size="sm" />
          ))}
        </div>
      </div>

      {/* Interactive Multi-Screenshot Gallery */}
      <div className="space-y-3.5">
        <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-md relative group">
          <img 
            src={currentImage} 
            alt={project.title} 
            className="w-full h-auto object-contain max-h-[500px] transition-all duration-300" 
          />
        </div>

        {/* Caption (Only for KABAN) */}
        {project.id === 'kaban' && currentCaption && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 italic text-center px-4">
            {currentCaption}
          </p>
        )}

        {/* Thumbnail Selector - ONLY for KABAN */}
        {project.id === 'kaban' && screenshots.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {screenshots.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedScreenshotIdx(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedScreenshotIdx === idx
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tabs navigation for deep dive */}
      {(project.modules || project.techStackTable) && (
        <div className="border-b border-zinc-100 dark:border-zinc-800 flex gap-6 text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2.5 border-b-2 transition cursor-pointer ${
              activeTab === 'overview'
                ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Overview & Architecture
          </button>
          {project.modules && (
            <button
              onClick={() => setActiveTab('modules')}
              className={`py-2.5 border-b-2 transition cursor-pointer ${
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
              className={`py-2.5 border-b-2 transition cursor-pointer ${
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

      {/* TAB 1: EXECUTIVE SUMMARY & ARCHITECTURE */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Key Metrics */}
          {project.caseStudy.metrics && (
            <div className={`grid gap-3.5 ${
              project.caseStudy.metrics.length === 4 
                ? 'grid-cols-2 sm:grid-cols-4' 
                : 'grid-cols-1 sm:grid-cols-3'
            }`}>
              {project.caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-center">
                  <div className="text-lg sm:text-xl font-bold font-mono text-zinc-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              Project Overview
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
              <div className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
                The Problem & Challenge
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
              <div className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider">
                The Architectural Solution
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Responsibilities */}
          {project.caseStudy.responsibilities && project.caseStudy.responsibilities.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                Key Responsibilities & Deliverables
              </h3>
              <ul className="space-y-1.5">
                {project.caseStudy.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Security Architecture (for KABAN) */}
          {project.caseStudy.securityHighlights && (
            <div className="p-5 rounded-2xl bg-[#0284c7]/5 dark:bg-[#38bdf8]/5 border border-[#38bdf8]/20 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-xs sm:text-sm">
                <Lock className="w-4 h-4 text-[#38bdf8]" />
                <span>{project.id === 'checkpoint' ? 'Biometric Privacy & Anti-Spoof Security' : '3-Factor Authentication (3FA) & Institutional Security'}</span>
              </div>
              <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                {project.caseStudy.securityHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
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
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>Architecture & Engineering Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.caseStudy.architecture.map((arch, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/70 dark:border-zinc-800 space-y-1">
                    <div className="font-semibold text-xs text-zinc-900 dark:text-white font-mono">
                      {arch.title}
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                      {arch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Capabilities */}
          {project.caseStudy.keyFeatures && (
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                Key Features Delivered
              </h3>
              <ul className="space-y-1.5">
                {project.caseStudy.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: CORE FUNCTIONAL MODULES */}
      {activeTab === 'modules' && project.modules && (
        <div className="space-y-4 animate-fade-in">
          {project.modules.map((mod, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  <span>{mod.title}</span>
                </h4>
                {mod.route && (
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {mod.route}
                  </span>
                )}
              </div>
              <ul className="space-y-1.5">
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
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] uppercase border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th className="p-3.5">Layer / Domain</th>
                  <th className="p-3.5">Technologies & Libraries</th>
                  <th className="p-3.5">Purpose & Implementation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-sans">
                {project.techStackTable.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-850/50 transition-colors">
                    <td className="p-3.5 font-semibold text-zinc-900 dark:text-white whitespace-nowrap">
                      {row.layer}
                    </td>
                    <td className="p-3.5 font-mono text-zinc-700 dark:text-zinc-300 text-xs">
                      {row.tech}
                    </td>
                    <td className="p-3.5 text-zinc-500 dark:text-zinc-400 text-xs">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Credits Card */}
      {project.authors && (
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong>Authors & Engineering Credits:</strong> Developed by {project.authors}.
          </div>
          <div className="text-[11px] font-mono text-zinc-400">
            Institutional Production System
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-black dark:hover:bg-zinc-200 transition shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </button>

        <div className="flex items-center gap-3">
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#0284c7] dark:text-[#38bdf8] hover:underline"
            >
              <span>View Figma File</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
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
      </div>

    </div>
  );
};

export default CaseStudyPage;
