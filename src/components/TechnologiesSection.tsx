import React, { useState } from 'react';
import { LayoutGrid, ChevronRight } from 'lucide-react';
import { TechBadge } from './TechBadge';

const row1 = [
  'Claude',
  'Cursor',
  'Gemini',
  'Antigravity',
  'Codex',
  'GPT-4o',
  'React',
  'Next.js 14',
  'TypeScript',
  'Tailwind CSS',
  'UI/UX & Figma'
];

const row2 = [
  'Laravel',
  'WordPress',
  'Python',
  'PostgreSQL',
  'Supabase',
  'MySQL',
  'SQLite',
  'Node.js',
  'Tauri',
  'Rust',
  'Flutter'
];

const row3 = [
  'OpenAI API',
  'Groq API',
  'Docker',
  'Git',
  'GitHub',
  'Vite',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Dart',
  'Canva'
];

const categorizedTech = [
  {
    category: 'AI Assistants & Workflows',
    items: ['Claude', 'Cursor', 'Gemini', 'Antigravity', 'Codex', 'GPT-4o', 'OpenAI API', 'Groq API']
  },
  {
    category: 'UI/UX & Frontend Architecture',
    items: ['UI/UX & Figma', 'React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vite']
  },
  {
    category: 'Full-Stack & Backend Systems',
    items: ['Laravel', 'WordPress', 'Node.js', 'Python', 'Flutter', 'Dart', 'Tauri', 'Rust']
  },
  {
    category: 'Databases & Infrastructure',
    items: ['PostgreSQL', 'Supabase', 'MySQL', 'SQLite', 'Docker', 'Git', 'GitHub']
  }
];

export const TechnologiesSection: React.FC<{ onNavigateToSkills?: () => void }> = ({ onNavigateToSkills }) => {
  const [isCategorized, setIsCategorized] = useState<boolean>(false);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
            Technologies & AI Stack
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Foundation models, AI development tools, and full-stack engineering frameworks.
          </p>
        </div>

        <button
          onClick={() => {
            if (onNavigateToSkills) {
              onNavigateToSkills();
            } else {
              setIsCategorized(!isCategorized);
            }
          }}
          className="text-xs sm:text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 flex items-center gap-1.5 transition font-normal cursor-pointer"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>{isCategorized ? 'View Animated Stream' : 'View Categorized'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 1. Animated Moving Marquee View */}
      {!isCategorized ? (
        <div className="relative w-full overflow-hidden marquee-container py-1 space-y-3 marquee-mask">
          
          {/* Left Blurry Gradient Edge Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent z-20" />
          
          {/* Right Blurry Gradient Edge Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 dark:from-[#09090b] dark:via-[#09090b]/80 to-transparent z-20" />

          {/* Row 1 - Sliding Left */}
          <div className="flex gap-2.5 animate-marquee-left">
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
          <div className="flex gap-2.5 animate-marquee-right">
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
          <div className="flex gap-2.5 animate-marquee-left-fast">
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
        /* 2. Categorized Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 animate-fade-in">
          {categorizedTech.map((group, gIdx) => (
            <div 
              key={gIdx} 
              className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 space-y-2.5 shadow-xs"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
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
