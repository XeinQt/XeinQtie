import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  Instagram, 
  ArrowUp
} from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/60 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white font-bold text-sm font-mono shadow-sm">
                {portfolioMeta.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-bold text-zinc-900 dark:text-white tracking-tight">
                {portfolioMeta.name}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              {portfolioMeta.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-800 dark:text-zinc-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 animate-pulse"></span>
              {portfolioMeta.availability}
            </div>
          </div>


          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={portfolioMeta.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={portfolioMeta.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioMeta.socials.email}
                aria-label="Gmail"
                className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioMeta.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-2 font-mono">
              {portfolioMeta.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {portfolioMeta.name}. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
