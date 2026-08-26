import React from 'react';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

export const EventsPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <span className="text-xs text-zinc-400 font-mono">Events</span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Events & Activities</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Tech summits, hackathons, and developer community engagements.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
          <Calendar className="w-3.5 h-3.5" />
          <span>2024 - 2026</span>
          <span>•</span>
          <MapPin className="w-3.5 h-3.5" />
          <span>Manila, Philippines</span>
        </div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Web Development & AI Engineering Meetups</h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          Participated in open-source workshops, AI integration symposiums, and Laravel ecosystem community gatherings.
        </p>
      </div>
    </div>
  );
};
