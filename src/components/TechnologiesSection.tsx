import React, { useState } from 'react';
import { LayoutGrid, ChevronRight } from 'lucide-react';
import { TechBadge } from './TechBadge';

const row1 = [
  'Vite',
  'React',
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Next.js 14',
  'Flutter',
  'Dart'
];

const row2 = [
  'Python',
  'Rust',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  'Supabase',
  'Java',
  'Laravel',
  'WordPress',
  'Docker'
];

const row3 = [
  'Canva',
  'Tauri',
  'OpenAI API',
  'Groq API',
  'Git',
  'GitHub',
  'Node.js',
  'FastAPI',
  'PyTorch',
  'Redis Cache'
];

const categorizedTech = [
  {
    category: 'Frontend & UI',
    items: ['React', 'Next.js 14', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite']
  },
  {
    category: 'Backend & Core Systems',
    items: ['Laravel', 'WordPress', 'Node.js', 'Python', 'Java', 'Dart', 'Flutter', 'Tauri', 'Rust']
  },
  {
    category: 'Databases & Cloud',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'SQLite', 'Redis Cache']
  },
  {
    category: 'AI & Developer Tooling',
    items: ['OpenAI API', 'Groq API', 'Git', 'GitHub', 'Docker', 'Canva', 'FastAPI', 'PyTorch']
  }
];

export const TechnologiesSection: React.FC<{ onNavigateToSkills?: () => void }> = ({ onNavigateToSkills }) => {
  const [isCategorized, setIsCategorized] = useState<boolean>(false);

  return (
    <div className="w-full max-w-4xl mx-auto py-6 space-y-8">
      
      {/* Header matching exact layout in reference image */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
          Technologies
        </h2>

        <button
          onClick={() => {
            if (onNavigateToSkills) {
              onNavigateToSkills();
            } else {
              setIsCategorized(!isCategorized);
            }
          }}
          className="text-xs sm:text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 flex items-center gap-1.5 transition font-normal"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>{isCategorized ? 'View Animated Marquee' : 'View All'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 1. Animated Moving Marquee View (With Left & Right Blurry Gradient Effect) */}
      {!isCategorized ? (
        <div className="relative w-full overflow-hidden marquee-container py-3 space-y-3.5 marquee-mask">
          
          {/* Left Blurry Gradient Edge Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent z-20" />
          
          {/* Right Blurry Gradient Edge Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent z-20" />

          {/* Row 1 - Sliding Left */}
          <div className="flex gap-3 animate-marquee-left">
            {[...row1, ...row1, ...row1].map((tech, idx) => (
              <TechBadge
                key={`r1-${idx}`}
                name={tech}
                size="md"
                variant="dashed"
                className="shrink-0"
              />
            ))}
          </div>

          {/* Row 2 - Sliding Right */}
          <div className="flex gap-3 animate-marquee-right">
            {[...row2, ...row2, ...row2].map((tech, idx) => (
              <TechBadge
                key={`r2-${idx}`}
                name={tech}
                size="md"
                variant="dashed"
                className="shrink-0"
              />
            ))}
          </div>

          {/* Row 3 - Sliding Left */}
          <div className="flex gap-3 animate-marquee-left-fast">
            {[...row3, ...row3, ...row3].map((tech, idx) => (
              <TechBadge
                key={`r3-${idx}`}
                name={tech}
                size="md"
                variant="dashed"
                className="shrink-0"
              />
            ))}
          </div>

        </div>
      ) : (
        /* 2. Categorized Grid View (When toggled via View All) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 animate-fade-in">
          {categorizedTech.map((group, gIdx) => (
            <div 
              key={gIdx} 
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 space-y-3 shadow-xs"
            >
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech, tIdx) => (
                  <TechBadge
                    key={tIdx}
                    name={tech}
                    size="sm"
                    variant="dashed"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default TechnologiesSection;
