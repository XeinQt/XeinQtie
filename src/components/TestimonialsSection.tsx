import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectTag: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Torres',
    role: 'Lead Architect',
    company: 'FinTech Systems Co.',
    avatar: 'MT',
    rating: 5,
    quote: 'Renielyn is an exceptional full-stack developer. Her mastery in Laravel, PostgreSQL, and secure systems allowed us to ship the treasury platform with remarkable reliability and clean architecture.',
    projectTag: 'Laravel & PostgreSQL'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Product Director',
    company: 'CloudZone Retail',
    avatar: 'SJ',
    rating: 5,
    quote: 'The engineering quality and speed Renielyn brought to our multi-device POS platform exceeded all expectations. She tackled complex offline-first state synchronization and multi-tenant queries seamlessly.',
    projectTag: 'React 19 & Supabase'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Founder & CEO',
    company: 'Nexa Media Agency',
    avatar: 'DC',
    rating: 5,
    quote: 'Beyond clean code and dependable delivery, Renielyn brings a deep understanding of technical SEO and user experience. Our organic performance and client conversion rates surged after her web rebuilds.',
    projectTag: 'WordPress & Technical SEO'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <div id="testimonials" className="w-full max-w-4xl mx-auto py-8 space-y-8 scroll-mt-24">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            ENDORSEMENTS & FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans mt-0.5">
            Testimonials
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xs sm:text-right">
          Feedback from engineering leads, founders, and collaborators I've built products with.
        </p>
      </div>

      {/* Testimonials 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
          >
            {/* Top row: Star Rating + Quote Icon */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-4 h-4 text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors" />
              </div>

              {/* Quote Body */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                "{item.quote}"
              </p>
            </div>

            {/* Bottom Row: Author details + Tech Tag */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-3">
                {/* Avatar Initials */}
                <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold text-xs font-mono flex items-center justify-center shrink-0">
                  {item.avatar}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white tracking-tight truncate">
                      {item.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                    {item.role} · <span className="text-zinc-400 dark:text-zinc-500">{item.company}</span>
                  </div>
                </div>
              </div>

              {/* Tag pill */}
              <div className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60">
                {item.projectTag}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TestimonialsSection;
