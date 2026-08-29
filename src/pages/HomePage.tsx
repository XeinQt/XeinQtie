import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight
} from 'lucide-react';
import { portfolioMeta } from '../data/portfolioData';
import { FeaturedBuildCard } from '../components/FeaturedBuildCard';
import { ExperienceSimpleList } from '../components/ExperienceSimpleList';
import { ProjectsSection } from '../components/ProjectsSection';
import { TechnologiesSection } from '../components/TechnologiesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { EducationSection } from '../components/EducationSection';
import { OutsideTheIDESection } from '../components/OutsideTheIDESection';
import { GithubActivitySection } from '../components/GithubActivitySection';
import { ContactSection } from '../components/ContactSection';
import { TechBadge } from '../components/TechBadge';

interface HomePageProps {
  onOpenResume: () => void;
  onOpenContact?: () => void;
  onOpenCaseStudy: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenResume,
  onOpenCaseStudy
}) => {
  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
      
      {/* 1. Profile / Hero Section */}
      <section id="home" className="space-y-5 scroll-mt-24">
        
        {/* Avatar + Name + Socials */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Avatar */}
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0 bg-zinc-100 dark:bg-zinc-900">
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
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
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
            <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
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

        {/* Clean, Simple-weight Headline */}
        <h2 className="text-xl sm:text-2xl font-normal text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
          <span>AI-Assisted Full-Stack Developer</span>{' '}
          <span className="text-zinc-400 dark:text-zinc-500 font-light">& UI/UX Designer</span>
        </h2>

        {/* Bio paragraph with exact user requested introduction */}
        <div className="space-y-3.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
          <p>
            {portfolioMeta.bio}
          </p>

          {/* AI Workflow Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <TechBadge name="Claude" size="sm" variant="dashed" />
            <TechBadge name="GPT-4o" size="sm" variant="dashed" />
            <TechBadge name="Gemini" size="sm" variant="dashed" />
            <TechBadge name="Cursor" size="sm" variant="dashed" />
            <TechBadge name="Codex" size="sm" variant="dashed" />
            <TechBadge name="Antigravity" size="sm" variant="dashed" />
          </div>
        </div>

        {/* View Resume Button */}
        <div>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-950 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 shadow-sm transition cursor-pointer"
          >
            <span>View Resume</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

      {/* 2. Featured Build Hero Card (Navigates to dedicated page) */}
      <section>
        <FeaturedBuildCard onOpenCaseStudy={() => onOpenCaseStudy('kaban')} />
      </section>

      {/* 3. Experience Section */}
      <section id="experience" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <ExperienceSimpleList />
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <ProjectsSection onOpenCaseStudy={onOpenCaseStudy} />
      </section>

      {/* 5. Technologies Section (Moving marquee with AI assistants) */}
      <section id="skills" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <TechnologiesSection />
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <TestimonialsSection />
      </section>

      {/* 7. Education Section */}
      <section id="education" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <EducationSection />
      </section>

      {/* 8. Outside the IDE Section */}
      <section id="outside-ide" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <OutsideTheIDESection />
      </section>

      {/* 9. GitHub Activity Section */}
      <section id="github" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <GithubActivitySection />
      </section>

      {/* 10. Get in Touch / Contact Section */}
      <section id="contact" className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-24">
        <ContactSection />
      </section>

    </div>
  );
};

export default HomePage;
