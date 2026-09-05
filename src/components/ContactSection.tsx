import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(portfolioMeta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact-section" className="w-full max-w-4xl mx-auto space-y-6 scroll-mt-24">
      
      {/* Clean, Simple Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
          Get in Touch
        </h2>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Available for hire</span>
        </div>
      </div>

      {/* 4 Direct Channel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        
        {/* 1. Email */}
        <div className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all">
          <a
            href={`mailto:${portfolioMeta.email}`}
            className="flex items-center gap-3.5 min-w-0 flex-1"
          >
            <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                Email
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate">
                {portfolioMeta.email}
              </div>
            </div>
          </a>

          <div className="flex items-center gap-1 shrink-0 pl-2">
            <button
              onClick={handleCopyEmail}
              type="button"
              title="Copy email address"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
            >
              {copied ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  Copied
                </span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            <a
              href={`mailto:${portfolioMeta.email}`}
              className="p-2 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition"
              title="Send email"
            >
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 2. LinkedIn */}
        <a
          href={portfolioMeta.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shrink-0">
              <Linkedin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                LinkedIn
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate">
                Rico S. Alentijo
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </a>

        {/* 3. Facebook */}
        <a
          href={portfolioMeta.socials.facebook}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shrink-0">
              <Facebook className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                Facebook
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate">
                Rico Alentijo
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </a>

        {/* 4. Instagram */}
        <a
          href={portfolioMeta.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shrink-0">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                Instagram
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate">
                @xeinqtiee
              </div>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </a>

      </div>

    </div>
  );
};

export default ContactSection;
