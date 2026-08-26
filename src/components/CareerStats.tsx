import React from 'react';
import { 
  Briefcase, 
  Award, 
  Code2, 
  CheckCircle, 
  Send, 
  Download
} from 'lucide-react';
import { careerStats } from '../data/experienceData';

interface CareerStatsProps {
  onOpenContact?: () => void;
  onOpenResume?: () => void;
}

export const CareerStats: React.FC<CareerStatsProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <div className="space-y-6">
      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-white dark:bg-zinc-900/80 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group hover:border-zinc-400 dark:hover:border-zinc-600 transition">
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
            {careerStats.totalYears}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
            Years of Experience
          </div>
          <div className="absolute right-3 bottom-3 text-zinc-400/15 group-hover:text-zinc-400/30 transition-colors">
            <Briefcase className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900/80 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group hover:border-zinc-400 dark:hover:border-zinc-600 transition">
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
            {careerStats.totalProjects}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
            Projects Delivered
          </div>
          <div className="absolute right-3 bottom-3 text-zinc-400/15 group-hover:text-zinc-400/30 transition-colors">
            <Code2 className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900/80 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group hover:border-zinc-400 dark:hover:border-zinc-600 transition">
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
            {careerStats.companiesWorked}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
            Organizations & Teams
          </div>
          <div className="absolute right-3 bottom-3 text-zinc-400/15 group-hover:text-zinc-400/30 transition-colors">
            <Award className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900/80 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group hover:border-zinc-400 dark:hover:border-zinc-600 transition">
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
            {careerStats.satisfiedClients}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
            Client Satisfaction
          </div>
          <div className="absolute right-3 bottom-3 text-zinc-400/15 group-hover:text-zinc-400/30 transition-colors">
            <CheckCircle className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div className="relative rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7 overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-semibold border border-zinc-300 dark:border-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-pulse"></span>
              {careerStats.currentStatus}
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
              Interested in collaborating or hiring?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feel free to download my complete resume or reach out directly for full-time opportunities or projects.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-col gap-2.5 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenContact}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 shadow-sm transition-all hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </button>
            <button
              onClick={onOpenResume}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 transition"
            >
              <Download className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
