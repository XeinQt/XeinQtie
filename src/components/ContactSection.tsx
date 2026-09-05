import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Copy, 
  Check, 
  ArrowUpRight,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Send
} from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(portfolioMeta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="contact-section" className="w-full max-w-4xl mx-auto space-y-8 scroll-mt-24">
      
      {/* Header Section */}
      <div className="space-y-3">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Available for Hire · Full-Time & Freelance Projects</span>
        </div>

        {/* Persuasive Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-sans">
          Let’s build your next product together.
        </h2>

        {/* Client-Focused Pitch */}
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
          Need an end-to-end web app, an intuitive UI/UX redesign, or an AI-accelerated MVP? 
          I help founders, businesses, and teams ship high-performance digital solutions with clean code and modern aesthetics.
        </p>
      </div>

      {/* 4 Professional Channel Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* 1. Gmail (Primary Inquiry) */}
        <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-md hover:border-red-400/40 dark:hover:border-red-500/40 transition-all duration-300 hover:-translate-y-0.5">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="p-2.5 rounded-xl border bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200/60 dark:border-red-800/60">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                Direct Inquiry
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                Email / Gmail
              </h3>
              <p className="text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mt-1 truncate">
                {portfolioMeta.email}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Best for sending project scopes, RFPs, wireframes, and formal contract proposals.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
            <a
              href={`mailto:${portfolioMeta.email}`}
              className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
            <button
              onClick={handleCopyEmail}
              type="button"
              aria-label="Copy email address"
              className="py-2 px-3 rounded-xl text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-700 dark:text-zinc-300 flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2. LinkedIn (Professional Profile) */}
        <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-md hover:border-blue-400/40 dark:hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="p-2.5 rounded-xl border bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/60">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Professional
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                LinkedIn
              </h3>
              <p className="text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mt-1 truncate">
                linkedin.com/in/rico-s-alentijo-0823b22b4
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Connect for full-time career roles, verified credentials, and professional recommendations.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <a
              href={portfolioMeta.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white flex items-center justify-center gap-1.5 transition duration-200 cursor-pointer group-hover:border-blue-300"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 3. Facebook (Direct Messaging) */}
        <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-md hover:border-indigo-400/40 dark:hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="p-2.5 rounded-xl border bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/60">
                <Facebook className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                Quick Chat
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                Facebook
              </h3>
              <p className="text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mt-1 truncate">
                Rico Alentijo (Messenger)
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Great for rapid discovery discussions, informal project questions, and instant collaboration.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <a
              href={portfolioMeta.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white flex items-center justify-center gap-1.5 transition duration-200 cursor-pointer group-hover:border-indigo-300"
            >
              <span>Message on Facebook</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 4. Instagram (Creative Work & DMs) */}
        <div className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-md hover:border-pink-400/40 dark:hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-0.5">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="p-2.5 rounded-xl border bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-200/60 dark:border-pink-800/60">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                Design & DMs
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                Instagram
              </h3>
              <p className="text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mt-1 truncate">
                @xeinqtiee
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                Explore UI/UX mockups, design iterations, interactive motion concepts, and drop a DM.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <a
              href={portfolioMeta.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white flex items-center justify-center gap-1.5 transition duration-200 cursor-pointer group-hover:border-pink-300"
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Client Guarantees / Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/40 dark:border-emerald-800/40">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Fast Response Guarantee</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Replies within 12-24 hours</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/40 dark:border-blue-800/40">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Full-Cycle Execution</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">From Figma to production code</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-200/40 dark:border-purple-800/40">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Clear Communication</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Transparent updates & milestones</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactSection;
