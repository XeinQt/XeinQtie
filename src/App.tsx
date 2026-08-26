import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Sync hash routing (e.g. #case-study/kaban)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('case-study/')) {
        const id = hash.replace('case-study/', '');
        setActiveCaseStudy(id);
      } else {
        setActiveCaseStudy(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenCaseStudy = (projectId: string) => {
    setActiveCaseStudy(projectId);
    window.location.hash = `case-study/${projectId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setActiveCaseStudy(null);
    window.location.hash = 'projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (activeCaseStudy) {
      setActiveCaseStudy(null);
      window.location.hash = sectionId;
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative bg-mesh">
      
      {/* Sticky Smooth Navigation Bar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content: Dedicated Case Study Page or Home Stream */}
      <main className="flex-1">
        {activeCaseStudy ? (
          <CaseStudyPage 
            projectId={activeCaseStudy}
            onBack={handleBackToPortfolio}
          />
        ) : (
          <HomePage 
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigateSection} />

      {/* Global Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

    </div>
  );
};

export default App;
