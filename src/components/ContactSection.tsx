import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Send, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioMeta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 900);
  };

  return (
    <div id="contact-section" className="w-full max-w-4xl mx-auto space-y-6 scroll-mt-24">
      
      {/* Header Section */}
      <div className="space-y-2">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-2xs">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Let's Build Something Great</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-sans">
          Get in Touch
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          Whether you have a question, a full-time role, a freelance inquiry, or just want to connect, my inbox is open.
        </p>
      </div>

      {/* 2-Column Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-1 items-start">
        
        {/* Left Stack (Cards: Contact Info + Social Profiles) */}
        <div className="md:col-span-5 space-y-4">
          
          {/* Card 1: Contact Info */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-5 sm:p-6 space-y-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
              Contact Info
            </h3>

            <div className="space-y-3.5">
              {/* Email Item */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-sans">
                    Email Address
                  </div>
                  <a 
                    href={`mailto:${portfolioMeta.email}`}
                    className="text-xs sm:text-sm font-mono text-zinc-900 dark:text-zinc-100 hover:underline font-medium break-all"
                  >
                    {portfolioMeta.email}
                  </a>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-sans">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 font-medium">
                    {portfolioMeta.location}
                  </div>
                </div>
              </div>

              {/* Response Time Item */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-sans">
                    Response Time
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 font-medium">
                    Within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white flex items-center justify-center gap-2 transition duration-200 shadow-2xs cursor-pointer active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>Copy email address</span>
                </>
              )}
            </button>
          </div>

          {/* Card 2: Social Profiles */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-5 space-y-3 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              SOCIAL PROFILES
            </h4>
            
            <div className="flex items-center gap-2.5">
              <a
                href={portfolioMeta.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center transition border border-zinc-200/70 dark:border-zinc-700 shadow-2xs hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={portfolioMeta.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center transition border border-zinc-200/70 dark:border-zinc-700 shadow-2xs hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {portfolioMeta.socials.twitter && (
                <a
                  href={portfolioMeta.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center transition border border-zinc-200/70 dark:border-zinc-700 shadow-2xs hover:scale-105"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Right Column (Send a Message Form Card) */}
        <div className="md:col-span-7">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 sm:p-7 space-y-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-2 animate-fade-in">
                <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* 2 Inputs Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50/80 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50/80 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition duration-200"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Your Message / Project Scope
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50/80 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-zinc-950 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>SUBMIT MESSAGE</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};

export default ContactSection;
