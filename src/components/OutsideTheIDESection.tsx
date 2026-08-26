import React from 'react';

export const OutsideTheIDESection: React.FC = () => {
  const hobbies = ['Travel', 'Gym', 'Muay Thai', 'Dance'];

  return (
    <div className="w-full max-w-4xl mx-auto py-6 space-y-8">
      <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
        Outside the IDE
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">
        {/* Left text and pills */}
        <div className="flex-1 space-y-6">
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            When I step away from the tech world, I recharge through physical activity and travel, returning to my projects with fresh energy and perspective.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {hobbies.map((hobby, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full text-xs font-mono bg-zinc-50 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-2xs hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Right stacked photo mockup */}
        <div className="relative shrink-0 flex items-center justify-center p-4">
          {/* Background tilted shadow card */}
          <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-zinc-300 dark:bg-zinc-800 rotate-6 shadow-md -z-10 transition-transform group-hover:rotate-8" />
          
          {/* Foreground photo */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-2 border-white dark:border-zinc-750 bg-zinc-950 -rotate-2 hover:rotate-0 transition-transform duration-300">
            <img 
              src="/outside-travel-clean.png" 
              alt="Outside the IDE - Travel in Singapore" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/outside-travel.png';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutsideTheIDESection;
