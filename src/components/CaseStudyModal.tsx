import React from 'react';
import { X, ShieldCheck, Lock, Cpu, Database } from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';
import { TechBadge } from './TechBadge';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { featuredBuild } = portfolioMeta;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/70 dark:bg-zinc-950/50">
          <div>
            <span className="text-[10px] font-mono font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              CASE STUDY
            </span>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              {featuredBuild.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans">
          
          {/* Mockup Display */}
          <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center max-h-60">
            <img 
              src={featuredBuild.image} 
              alt={featuredBuild.title} 
              className="w-full object-cover" 
            />
          </div>

          <div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Overview</h4>
            <p className="mt-1 leading-relaxed">
              KeepR is an offline-first desktop vault built to store sensitive credentials, API keys, and workflow secrets locally on your hardware without reliance on centralized third-party servers.
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/70 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-xs">
                <Lock className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>Zero-Knowledge Security</span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                AES-256-GCM encryption with Argon2id master passphrase derivation.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/70 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-xs">
                <Cpu className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>Lightweight Tauri & Rust Core</span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Sub-15MB binary size and low RAM footprint compared to standard Electron apps.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/70 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-xs">
                <Database className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>Local SQLite Storage</span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Fast indexing and full-text search capability directly from local encrypted database.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/70 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-xs">
                <ShieldCheck className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>Biometric & Auto-Lock</span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                OS-level biometric authentication and configurable auto-locking timers.
              </p>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Technologies Utilized:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {featuredBuild.tags.concat(['Tailwind CSS', 'TypeScript']).map((tech, i) => (
                <TechBadge key={i} name={tech} size="sm" />
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
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
