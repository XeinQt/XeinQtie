import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Database,
  Globe,
  Layers
} from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';
import { FeaturedBuildCard } from '../components/FeaturedBuildCard';
import { ExperienceSimpleList } from '../components/ExperienceSimpleList';
import { ProjectsSection } from '../components/ProjectsSection';
import { TechnologiesSection } from '../components/TechnologiesSection';
import { EducationSection } from '../components/EducationSection';
import { OutsideTheIDESection } from '../components/OutsideTheIDESection';
import { GithubActivitySection } from '../components/GithubActivitySection';
import { ContactSection } from '../components/ContactSection';
import { CaseStudyModal } from '../components/CaseStudyModal';

interface HomePageProps {
  onOpenResume: () => void;
  onOpenContact?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenResume
}) => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-16">
      
      {/* 1. Profile / Hero Section */}
      <section id="home" className="space-y-6 scroll-mt-28">
        
        {/* Avatar + Name + Socials */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0 bg-zinc-100 dark:bg-zinc-900">
            <img 
              src="/avatar.png" 
              alt={portfolioMeta.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Name & Socials */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {portfolioMeta.name}
              </h1>
              {/* Verified Badge Icon */}
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#38bdf8] text-white shrink-0 shadow-xs">
                <svg className="w-2.5 h-2.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
              <a 
                href={portfolioMeta.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-zinc-950 dark:hover:text-white transition" 
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={portfolioMeta.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-zinc-950 dark:hover:text-white transition" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={portfolioMeta.socials.email} 
                className="hover:text-zinc-950 dark:hover:text-white transition" 
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Full-Stack Web Developer — <span className="text-zinc-400 dark:text-zinc-500 font-light">Laravel & WordPress</span>
        </h2>

        {/* Bio paragraph with inline badges */}
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I'm a full-stack web developer building websites and backend systems with{' '}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-dashed border-red-300 dark:border-red-900/60 bg-red-50/60 dark:bg-red-950/30 text-red-700 dark:text-red-400 text-xs font-mono font-medium align-middle">
            <Layers className="w-3 h-3 text-red-500" />
            Laravel
          </span>{' '}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium align-middle">
            <Globe className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
            WordPress
          </span>{' '}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium align-middle">
            <Database className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
            PostgreSQL
          </span>{' '}
          with SEO experience from client work. I'm currently leading architecture on a pet identification system using Siamese neural networks and EfficientNetV2B0, and an SMS-based order platform with LLM integration (OpenAI, Laravel, Flutter).
        </p>

        {/* View Resume Button */}
        <div>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-950 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 shadow-sm transition cursor-pointer"
          >
            <span>View Resume</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

      {/* 2. Featured Build Hero Card */}
      <section>
        <FeaturedBuildCard onOpenCaseStudy={() => setIsCaseStudyOpen(true)} />
      </section>

      {/* 3. Experience Section */}
      <section id="experience" className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 scroll-mt-24">
        <ExperienceSimpleList />
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 scroll-mt-24">
        <ProjectsSection />
      </section>

      {/* 5. Technologies Section (Smooth moving marquee) */}
      <section id="skills" className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 scroll-mt-24">
        <TechnologiesSection />
      </section>

      {/* 6. Education Section */}
      <section id="education" className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 scroll-mt-24">
        <EducationSection />
      </section>

      {/* 7. Outside the IDE Section */}
      <section id="outside-ide" className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 scroll-mt-24">
        <OutsideTheIDESection />
      </section>

      {/* 8. GitHub Activity Section */}
      <section id="github" className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 scroll-mt-24">
        <GithubActivitySection />
      </section>

      {/* 9. Get in Touch / Contact Section */}
      <section id="contact" className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 scroll-mt-24">
        <ContactSection />
      </section>

      {/* KeepR Case Study Modal */}
      <CaseStudyModal 
        isOpen={isCaseStudyOpen} 
        onClose={() => setIsCaseStudyOpen(false)} 
      />

    </div>
  );
};

export default HomePage;
