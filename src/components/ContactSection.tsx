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

  const channelBadgeClass = "text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700";
  const iconContainerClass = "p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors duration-200";
  const cardClass = "group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-sm hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-0.5 focus-within:border-zinc-900 dark:focus-within:border-zinc-100 focus-within:ring-2 focus-within:ring-zinc-900/10 dark:focus-within:ring-white/10";
  const primaryButtonClass = "py-2.5 px-3.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white";
  const secondaryButtonClass = "py-2.5 px-3.5 rounded-xl text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center gap-1.5 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white";

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

      {/* 4 Consistent Professional Channel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* 1. Gmail (Primary Inquiry) */}
        <div className={cardClass}>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className={iconContainerClass}>
                <Mail className="w-5 h-5" />
              </div>
              <span className={channelBadgeClass}>
                Direct Inquiry
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                Email / Gmail
              </h3>
              <p className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mt-1 truncate">
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
              className={`flex-1 ${primaryButtonClass}`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
            <button
              onClick={handleCopyEmail}
              type="button"
              aria-label="Copy email address"
              className={secondaryButtonClass}
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
        <div className={cardClass}>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className={iconContainerClass}>
                <Linkedin className="w-5 h-5" />
              </div>
              <span className={channelBadgeClass}>
                Professional
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                LinkedIn
              </h3>
              <p className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mt-1 truncate">
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
              className={`w-full ${primaryButtonClass}`}
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 3. Facebook (Direct Messaging) */}
        <div className={cardClass}>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className={iconContainerClass}>
                <Facebook className="w-5 h-5" />
              </div>
              <span className={channelBadgeClass}>
                Quick Chat
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                Facebook
              </h3>
              <p className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mt-1 truncate">
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
              className={`w-full ${primaryButtonClass}`}
            >
              <span>Message on Facebook</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 4. Instagram (Creative Work & DMs) */}
        <div className={cardClass}>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className={iconContainerClass}>
                <Instagram className="w-5 h-5" />
              </div>
              <span className={channelBadgeClass}>
                Design & DMs
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                Instagram
              </h3>
              <p className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mt-1 truncate">
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
              className={`w-full ${primaryButtonClass}`}
            >
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Consistent Trust Badges Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Fast Response Guarantee</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Replies within 12-24 hours</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
          </div>
          <div>
            <div className="text-xs font-bold text-zinc-900 dark:text-white">Full-Cycle Execution</div>
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400">From Figma to production code</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
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
