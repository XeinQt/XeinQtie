import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
          Education
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-14 pt-2">
        {/* Left Column: Date Range */}
        <div className="w-full sm:w-48 shrink-0 text-sm text-zinc-400 dark:text-zinc-500 font-normal">
          2022 - 2027
        </div>

        {/* Right Column: Degree & University */}
        <div className="flex-1 min-w-0 space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
            Bachelor of Science in Information Technology
          </h3>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 font-normal">
            Polytechnic University of the Philippines
          </div>
          <div className="text-sm text-zinc-400 dark:text-zinc-500 font-normal">
            San Juan Campus
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
