export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface PortfolioMeta {
  brandInitials: string;
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
  brandInitials: 'RA',
  name: 'Rico Alentijo',
  title: 'AI-Assisted Full-Stack Developer & UI/UX Designer',
  headlineMain: 'AI-Assisted Full-Stack Developer',
  headlineSub: 'UI/UX Designer',
  tagline: 'Designing and building modern web and mobile applications with full-stack engineering and AI-assisted workflows.',
  bio: 'I design and build modern web and mobile applications using full-stack technologies and AI-assisted development tools. I use AI to improve my workflow, solve problems faster, and create functional, user-friendly digital products.',
  location: 'San Juan City, Philippines',
  email: 'ricoalentijo.dev@gmail.com',
  availability: 'Available for full-time roles & AI-driven projects',
  isAvailable: true,
  socials: {
    github: 'https://github.com/XeinQt',
    linkedin: 'https://linkedin.com',
    email: 'mailto:ricoalentijo.dev@gmail.com',
    twitter: 'https://twitter.com'
  },
  featuredBuild: {
    badge: 'FEATURED BUILD',
    title: 'KABAN: Student Council Financial Hub',
    description: 'Fiscal monitoring, public transparency ledger, and real-time student treasury management platform.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase'],
    image: '/kaban-dashboard-dark.jpg',
    link: '#'
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
