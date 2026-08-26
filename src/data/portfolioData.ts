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
  tagline: 'Building AI-accelerated web applications, intuitive design systems, and robust full-stack architectures.',
  bio: "I'm an AI-assisted full-stack developer and UI/UX designer crafting high-performance web applications and intuitive interfaces. I leverage modern AI tools and foundation models—including Claude, GPT-4o, Gemini, Cursor, Codex, and Antigravity—to accelerate software engineering, refine UI/UX design systems, and build scalable production platforms with Laravel, React, TypeScript, and PostgreSQL.",
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
    title: 'KeepR: a private vault I built.',
    description: 'Local-first password vault and personal workflow desktop app.',
    tags: ['Tauri', 'Rust', 'React', 'SQLite'],
    image: '/keepr-mockup.png',
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
