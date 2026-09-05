export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface PortfolioMeta {
  name: string;
  title: string;
  headlineMain: string;
  headlineSub: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availability: string;
  isAvailable: boolean;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
    facebook: string;
    instagram: string;
  };
  featuredBuild: {
    badge: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
  };
  skillsSummary: string[];
}

export const portfolioMeta: PortfolioMeta = {
  name: 'Rico Alentijo',
  title: 'AI-Assisted Full-Stack Developer & UI/UX Designer',
  headlineMain: 'AI-Assisted Full-Stack Developer',
  headlineSub: 'UI/UX Designer',
  tagline: 'Designing and building modern web and mobile applications with full-stack engineering and AI-assisted workflows.',
  bio: 'I design and build modern web and mobile applications using full-stack technologies and AI-assisted development tools. I use AI to improve my workflow, solve problems faster, and create functional, user-friendly digital products.',
  location: 'Davao Oriental, Philippines',
  email: 'ricoalentijo4@gmail.com',
  availability: 'Available for full-time roles & AI-driven projects',
  isAvailable: true,
  socials: {
    github: 'https://github.com/XeinQt',
    linkedin: 'https://www.linkedin.com/in/rico-s-alentijo-0823b22b4/',
    email: 'mailto:ricoalentijo4@gmail.com',
    facebook: 'https://www.facebook.com/share/185jDx11r6/',
    instagram: 'https://www.instagram.com/xeinqtiee',
    twitter: 'https://twitter.com'
  },
  featuredBuild: {
    badge: 'FEATURED BUILD',
    title: 'KABAN: Student Council Financial Hub',
    description: 'Fiscal monitoring, public transparency ledger, and real-time student treasury management platform actively serving 1,000+ students.',
    tags: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'Cloudflare Turnstile',
      '3FA & Web Crypto',
      'SheetJS & PapaParse',
      'Vercel'
    ],
    image: '/kaban-cover.jpg',
    link: 'https://treasurer-system.vercel.app/'
  },
  skillsSummary: [
    'AI-Assisted Workflows',
    'Cursor & Codex',
    'Claude & GPT-4o',
    'Gemini & Antigravity',
    'UI/UX Design & Figma',
    'Laravel',
    'React & TypeScript',
    'PostgreSQL',
    'Tailwind CSS'
  ]
};
