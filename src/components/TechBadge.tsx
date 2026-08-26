import React from 'react';

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'pill' | 'dashed' | 'solid';
}

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-4 h-4 shrink-0' }) => {
  const norm = name.toLowerCase().trim();

  // Vite
  if (norm === 'vite' || norm.includes('vite')) {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M29.5 5.5L16.8 28.9c-.3.6-1.2.6-1.5 0L2.5 5.5c-.4-.7.2-1.5.9-1.4l12.8 2.3c.2 0 .4 0 .5-.1L28.6 4.1c.8-.1 1.3.7.9 1.4z" fill="url(#vite-grad1)" />
        <path d="M21.7 2.4L11.3 4.2c-.3 0-.5.3-.4.6l1.2 6.5c.1.3.4.5.7.5h5.3c.4 0 .7.4.5.8l-3.3 8.3c-.3.7.6 1.2 1 .6l10-14.7c.3-.5-.1-1.2-.7-1.1l-3.9.5c-.4.1-.7-.2-.6-.6l.8-2.3c.1-.4-.2-.8-.7-.8z" fill="url(#vite-grad2)" />
        <defs>
          <linearGradient id="vite-grad1" x1="2" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="vite-grad2" x1="11" y1="2" x2="26" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEA83" />
            <stop offset="1" stopColor="#FFDD35" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // React
  if (norm.includes('react')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // HTML5
  if (norm.includes('html') || norm.includes('html5')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#E44D26" />
        <path d="M12 3.8v16.4l5.7-1.4L19.2 3.8H12z" fill="#F16529" />
        <path d="M12 7.7H7.4l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2.2H7.3l.4 4.4H12v-2.2z" fill="#EBEBEB" />
        <path d="M12 7.7h4.6l-.4 4.4H12v-1.1h2.3l.2-2.2H12V7.7zm0 6.6v2.2l-2.4-.6-.2-1.6H7.2l.3 3.3 4.5 1.2V14.3z" fill="white" />
        <path d="M12 14.3h2.1l-.2 2.2-1.9.5v2.2l3.6-1 .5-5.9H12v2z" fill="white" />
      </svg>
    );
  }

  // CSS3
  if (norm.includes('css') || norm.includes('css3')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#1572B6" />
        <path d="M12 3.8v16.4l5.7-1.4L19.2 3.8H12z" fill="#33A9DC" />
        <path d="M12 7.7H7.4l.3 3.3H12v-3.3zm0 4.4H9.7l.2 2.2H12v-2.2zm0 4.4l-2.4-.6-.2-1.6H7.2l.3 3.3 4.5 1.2V16.5z" fill="#EBEBEB" />
        <path d="M12 7.7h4.6l-.4 4.4H12v-1.1h2.3l.2-2.2H12V7.7zm0 4.4h2.1l-.2 2.2-1.9.5V17l3.6-1 .5-5.9H12v2z" fill="white" />
      </svg>
    );
  }

  // JavaScript
  if (norm === 'javascript' || norm === 'js' || norm.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-2v-6.3h-2v6.3c0 .4-.2.6-.6.6-.3 0-.6-.2-.8-.5L7 17.5zm7.3-.2c.6.9 1.5 1.5 2.8 1.5 1.5 0 2.5-.8 2.5-2 0-1.2-.8-1.7-2.1-2.3l-.7-.3c-.9-.4-1.3-.7-1.3-1.4 0-.6.5-1.1 1.4-1.1.7 0 1.3.3 1.7.9l1.4-1c-.7-1-1.7-1.5-3.1-1.5-1.9 0-3 1.1-3 2.6 0 1.2.7 1.8 1.9 2.3l.7.3c1 .4 1.5.8 1.5 1.5 0 .7-.6 1.2-1.6 1.2-.9 0-1.6-.4-2.1-1.2l-1.6 1z" fill="#000000" />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 8H6V9.8H7.7V18H9.8V9.8H11.5V8Z" fill="white" />
        <path d="M17.4 11.2C16.9 10.7 16.1 10.4 15.1 10.4C14.2 10.4 13.5 10.7 13.1 11.1C12.7 11.5 12.5 12.1 12.5 12.8C12.5 13.5 12.7 14 13.1 14.4C13.5 14.8 14.2 15.1 15.2 15.5C15.8 15.7 16.2 15.9 16.5 16.1C16.7 16.3 16.8 16.7 16.8 17.1C16.8 17.5 16.6 17.9 16.3 18.2C16 18.5 15.5 18.6 14.8 18.6C14.1 18.6 13.5 18.4 13 18C12.5 17.6 12.2 17 12 16.2L10.3 17C10.6 18.2 11.2 19.1 12.1 19.7C12.9 20.3 13.9 20.6 15 20.6C16.2 20.6 17.2 20.3 17.9 19.6C18.6 19 18.9 18.1 18.9 17C18.9 16.1 18.6 15.4 18.1 14.9C17.6 14.4 16.8 14 15.7 13.6C15.1 13.4 14.7 13.2 14.5 13C14.3 12.8 14.2 12.5 14.2 12.2C14.2 11.8 14.4 11.5 14.6 11.3C14.9 11.1 15.3 11 15.8 11C16.3 11 16.8 11.2 17.1 11.5C17.4 11.8 17.7 12.2 17.8 12.8L19.5 12C19.3 11.1 18.8 10.4 18.2 9.8C18 9.6 17.7 9.4 17.4 9.2V11.2Z" fill="white" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#06B6D4" />
      </svg>
    );
  }

  // Next.js
  if (norm.includes('next.js') || norm.includes('nextjs')) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <mask height="180" id="mask0_next2" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask0_next2)">
          <circle cx="90" cy="90" fill="currentColor" r="90" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_next2)" />
          <rect fill="url(#paint1_linear_next2)" height="72" width="12" x="115" y="54" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_next2" x1="109" x2="144.5" y1="116.5" y2="160.5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_next2" x1="121" x2="120.799" y1="54" y2="106.875">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Python
  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.87 2c-3.1 0-2.9 1.34-2.9 1.34l.01 1.4h2.95v.42H6.08S4 4.93 4 8.04c0 3.1 1.8 2.98 1.8 2.98h1.07V9.5s-.06-1.8 1.77-1.8h3.04s1.72-.03 1.72-1.68V4.32S13.63 2 11.87 2zm-1.64 1.1a.63.63 0 1 1 0 1.25.63.63 0 0 1 0-1.25z" fill="#3776AB" />
        <path d="M12.13 22c3.1 0 2.9-1.34 2.9-1.34l-.01-1.4H12.07v-.42h5.85s2.08.23 2.08-2.88c0-3.1-1.8-2.98-1.8-2.98h-1.07v1.52s.06 1.8-1.77 1.8h-3.04s-1.72.03-1.72 1.68v1.7s-.23 2.32 1.53 2.32zm1.64-1.1a.63.63 0 1 1 0-1.25.63.63 0 0 1 0 1.25z" fill="#FFD438" />
      </svg>
    );
  }

  // Rust
  if (norm.includes('rust')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#CE412B">
        <path d="M12 2a10 10 0 0 0-3.88.78l-.34.78.84.42a8.5 8.5 0 0 1 6.76 0l.84-.42-.34-.78A10 10 0 0 0 12 2zm-5.7 3.3l-.78.34.42.84a8.5 8.5 0 0 1 2.34 2.34l.84-.42-.34-.78A10 10 0 0 0 6.3 5.3zm11.4 0a10 10 0 0 0-2.48-1.98l-.34.78.84.42a8.5 8.5 0 0 1 2.34 2.34l.84.42.42-.84-.78-.34zM8 8.5v7h1.8v-2.3h1.4l1.8 2.3H15l-2-2.5a2.4 2.4 0 0 0 1.5-2.2c0-1.5-1-2.3-2.7-2.3H8zm1.8 1.5h1.7c.6 0 1 .3 1 .9 0 .5-.4.9-1 .9H9.8V10z" />
      </svg>
    );
  }

  // MySQL
  if (norm.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M18.8 6.5C17.5 4.8 15 4 12.3 4.5c-3.2.6-5.8 2.8-6.6 5.8-.8 3 0 6.2 2.2 8.3 2.1 2 5.2 2.7 8 1.8 2.7-.9 4.8-3.1 5.3-5.9.1-.5-.2-1-.7-1.1-.5-.1-1 .2-1.1.7-.4 2.1-1.9 3.8-4 4.5-2.1.7-4.4.2-6-1.3-1.6-1.5-2.3-3.9-1.6-6.1.6-2.2 2.5-3.9 4.9-4.3 2-.4 3.9.1 5 1.4.3.4.9.4 1.3.1.4-.4.4-1 .1-1.4z" fill="#00758F" />
        <path d="M12.5 8.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" fill="#F29111" />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes('postgresql') || norm.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5h-2v-2h2v2zm1.75-6.5l-.8 1.6c-.35.7-.95 1.4-1.95 1.4s-1.6-.7-1.95-1.4L9.25 12C8.5 10.5 9.6 8.5 12 8.5s3.5 2 2.75 3.5z" fill="#336791" />
      </svg>
    );
  }

  // SQLite
  if (norm.includes('sqlite') || norm.includes('sqflite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M22 6.5C22 8.985 17.523 11 12 11S2 8.985 2 6.5 6.477 2 12 2s10 2.015 10 4.5z" fill="#003B57" />
        <path d="M22 12c0 2.485-4.477 4.5-10 4.5S2 14.485 2 12v-2.5C2 11.985 6.477 14 12 14s10-2.015 10-4.5V12z" fill="#0080FF" />
        <path d="M22 17.5c0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5V15c0 2.485 4.477 4.5 10 4.5s10-2.015 10-4.5v2.5z" fill="#00A2FF" />
      </svg>
    );
  }

  // Supabase
  if (norm.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M13.4 2.1C13.1 1.7 12.5 1.9 12.5 2.5V10.8H21.5C22.1 10.8 22.4 11.5 21.9 11.9L11.8 22C11.4 22.4 10.7 22.1 10.7 21.6V13.3H1.7C1.1 13.3 0.8 12.6 1.3 12.2L13.4 2.1Z" fill="#3ECF8E" />
      </svg>
    );
  }

  // Java
  if (norm.includes('java') && !norm.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M8.8 18.2s-.7.2-1.3.4c-2.3.8-1.5 2.3 1.2 2.3 3.6 0 7.7-1.3 7.7-1.3s-1.8.8-4.8 1.1c-3.6.4-5.9-.6-2.8-2.5zm-.8-3.4s-1.1.3-1.8.6c-2.4.9-1.2 2.1 1.6 2 4.1-.1 8.5-1.5 8.5-1.5s-2.1.8-5.3 1.1c-4.1.4-6.8-.7-3-2.2zm4.3-11.2s-2.9 2.8-1.2 5.9c2 3.6 1 5.3 1 5.3s.7-1.1.2-2.5c-.8-2-1.6-3 0-5.4 1.2-1.8.5-3.3 0-3.3zm-2.2 4.1s-2.2 1.6-1.5 3.6c.9 2.5 2.6 3.8 2.6 3.8s-.3-.9-.9-2.1c-.8-1.5-.7-2.6-.2-5.3z" fill="#E76F00" />
      </svg>
    );
  }

  // Canva
  if (norm.includes('canva')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#00C4CC" />
        <path d="M14.5 9.5c-.8-.8-2-.9-2.8-.2l-2.4 2.1c-.8.7-1 1.8-.4 2.6.6.8 1.8.9 2.6.2l2.4-2.1c.8-.7 1-1.8.6-2.6z" fill="white" />
      </svg>
    );
  }

  // Tauri
  if (norm.includes('tauri')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.5 3.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5a6.48 6.48 0 0 1-4.84-2.16 4.5 4.5 0 0 0 2.84-3.84c0-2.485-2.015-4.5-4.5-4.5-.63 0-1.226.13-1.767.365A6.475 6.475 0 0 1 10.5 5.5z" fill="#24C8D8" />
        <circle cx="8.5" cy="12.5" r="2.5" fill="#FFC131" />
      </svg>
    );
  }

  // OpenAI API
  if (norm.includes('openai')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M22.28 9.37a5.98 5.98 0 0 0-.52-4.99 6.09 6.09 0 0 0-6.52-2.86 6.06 6.06 0 0 0-4.7-2.12c-3.1 0-5.69 2.33-6.04 5.4A6.08 6.08 0 0 0 1.1 9.42a6.04 6.04 0 0 0 .99 6.94 6.09 6.09 0 0 0 .52 4.99 6.09 6.09 0 0 0 6.52 2.86 6.06 6.06 0 0 0 4.7 2.12c3.1 0 5.69-2.33 6.04-5.4a6.08 6.08 0 0 0 3.4-4.62 6.04 6.04 0 0 0-.99-6.94zM13.4 22.14a4.57 4.57 0 0 1-2.92-1.05l.14-.08 4.8-2.77a.8.8 0 0 0 .4-.68v-6.78l2.03 1.17a.08.08 0 0 1 .04.06v5.57a4.6 4.6 0 0 1-4.49 4.56zM3.48 18.06a4.58 4.58 0 0 1-.58-3.05.08.08 0 0 1 .04-.07l4.83-2.79 2.03 1.17v6.78a.8.8 0 0 0 .4.68l-4.8 2.77a4.6 4.6 0 0 1-1.92-5.49zm-1.34-8.8a4.58 4.58 0 0 1 2.34-2l.14.08 4.8 2.77a.8.8 0 0 0 .79 0l5.88-3.39V4.38a.08.08 0 0 1 .04-.07 4.6 4.6 0 0 1-6.42 1.54l-4.8 2.77a4.6 4.6 0 0 1-2.77-.42zm16.5-1.57l-4.83 2.79-2.03-1.17V2.59a.8.8 0 0 0-.4-.68l4.8-2.77a4.6 4.6 0 0 1 6.83 4.96.08.08 0 0 1-.04.07l-4.36 2.52zm3.22 6.94a4.58 4.58 0 0 1-2.34 2l-.14-.08-4.8-2.77a.8.8 0 0 0-.79 0l-5.88 3.39v2.34a.08.08 0 0 1-.04.07 4.6 4.6 0 0 1 6.42-1.54l4.8-2.77a4.6 4.6 0 0 1 2.77.42zM8.52 14.86l2.94-1.7 2.94 1.7v3.39l-2.94 1.7-2.94-1.7v-3.39z" fill="#10A37F" />
      </svg>
    );
  }

  // Groq API
  if (norm.includes('groq')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#F55036" strokeWidth="2" fill="none" />
        <path d="M12 7v5l3.5 2" stroke="#F55036" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#F55036" />
      </svg>
    );
  }

  // Git
  if (norm === 'git' || norm.includes('git ') || norm.includes('git&') || norm.includes('git/')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.6L13.4 2.4c-.6-.6-1.5-.6-2.1 0L9.2 4.5l3 3c.6-.2 1.3 0 1.8.4.5.5.7 1.2.5 1.8l2.9 2.9c.6-.2 1.3 0 1.8.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1l-2.7-2.7v5.1c.2.1.4.3.5.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.2-.2.4-.4.7-.5V9.4c.3-.1.5-.3.7-.5.6-.6.7-1.4.4-2.1l-3-3L2.4 10.6c-.6.6-.6 1.5 0 2.1l8.2 8.2c.6.6 1.5.6 2.1 0l8.9-8.9c.6-.6.6-1.5 0-2.1v.7z" />
      </svg>
    );
  }

  // GitHub
  if (norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  // WordPress
  if (norm.includes('wordpress')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.7-1.5l3.9-11.4 4 11A8.2 8.2 0 0 1 12 20.2zm-6.8-5a8.2 8.2 0 0 1 .4-2.8l3.1 8.5a8.2 8.2 0 0 1-3.5-5.7zm11.3-.8l-3.3-9.5a8.2 8.2 0 0 1 4.7 6.1 8.2 8.2 0 0 1-1.4 3.4z" fill="#21759B" />
      </svg>
    );
  }

  // Laravel
  if (norm.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.5 6.5L13 1.5L4.5 6.5V17.5L13 22.5L21.5 17.5V6.5Z" stroke="#FF2D20" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4.5 6.5L13 11.5L21.5 6.5" stroke="#FF2D20" strokeWidth="1.8" />
        <path d="M13 22.5V11.5" stroke="#FF2D20" strokeWidth="1.8" />
      </svg>
    );
  }

  // Flutter
  if (norm.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M14.314 0L2.3 12.014l3.708 3.708L21.73 0h-7.416z" fill="#42A5F5" />
        <path d="M14.286 10.666L7.336 17.616l3.708 3.708 3.242-3.242 7.444-7.416h-7.444z" fill="#02569B" />
        <path d="M10.578 20.858L13.82 24.1h7.416l-6.95-6.95-3.708 3.708z" fill="#01579B" />
        <path d="M14.286 17.15l-3.708-3.708 3.708-3.708 3.708 3.708-3.708 3.708z" fill="#29B6F6" />
      </svg>
    );
  }

  // Dart
  if (norm.includes('dart')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4.108 4.108A4.015 4.015 0 0 1 6.946 3h8.347l5.707 5.707v8.347a4.015 4.015 0 0 1-1.108 2.838L4.108 4.108z" fill="#00B4AB" />
        <path d="M4.108 4.108A4.015 4.015 0 0 0 3 6.946v8.347l5.707 5.707h8.347a4.015 4.015 0 0 0 2.838-1.108L4.108 4.108z" fill="#01579B" />
        <path d="M4.108 4.108l15.784 15.784-5.546 1.108-9.13-9.13-1.108-7.762z" fill="#0277BD" />
        <path d="M6.946 3h8.347l3.805 3.805-11.044 11.044L3 6.946A4.015 4.015 0 0 1 6.946 3z" fill="#29B6F6" />
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.9 8.2h2.2v2.2H13.9zm-3.3 0h2.2v2.2h-2.2zm-3.3 0h2.2v2.2H7.3zm6.6-3.3h2.2v2.2h-2.2zm-3.3 0h2.2v2.2h-2.2zm-3.3 0h2.2v2.2H7.3zm-3.3 3.3h2.2v2.2H4zm0 3.3h2.2v2.2H4zm17.9 1.1c-.2-.2-1.3-.4-2.4.3-.2-.8-.8-1.4-1.7-1.7-.5-.2-1.4-.2-2.1.2H1.2C.5 13.5 0 14.2 0 15c.6 4.3 4.2 7 9.8 7 6.7 0 10.9-3.7 12-8.9.7 0 1.9-.3 2.2-.9z" />
      </svg>
    );
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
      </svg>
    );
  }

  // Default fallback code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

export const TechBadge: React.FC<TechBadgeProps> = ({ 
  name, 
  className = '', 
  size = 'md',
  variant = 'dashed'
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2',
    lg: 'text-sm sm:text-base px-4 py-2 gap-2.5',
  }[size];

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }[size];

  const variantClass = variant === 'dashed' 
    ? 'border border-dashed border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 shadow-2xs hover:border-zinc-400 dark:hover:border-zinc-500'
    : variant === 'solid'
    ? 'border border-zinc-200 dark:border-zinc-750 bg-zinc-50 dark:bg-zinc-800 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-600'
    : 'border border-zinc-200/60 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-850';

  return (
    <span 
      className={`inline-flex items-center rounded-xl font-mono text-zinc-800 dark:text-zinc-200 transition-all duration-200 hover:scale-[1.02] cursor-default select-none ${variantClass} ${sizeClasses} ${className}`}
    >
      <TechIcon name={name} className={`${iconSizes} shrink-0`} />
      <span className="leading-none">{name}</span>
    </span>
  );
};

export default TechBadge;
