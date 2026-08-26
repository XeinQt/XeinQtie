import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC<{ onBackToHome?: () => void }> = ({ onBackToHome }) => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
      
      {/* Top Nav & Breadcrumbs */}
      {onBackToHome && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <button 
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-white transition group font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-zinc-900 dark:text-white font-semibold">Contact</span>
          </div>
        </div>
      )}

      {/* Main Unified Contact Section */}
      <ContactSection />

    </div>
  );
};

export default ContactPage;
