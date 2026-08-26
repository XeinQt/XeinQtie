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
  brandInitials: 'RBL',
  name: 'Renielyn Lenon',
  title: 'Full-Stack Web Developer — Laravel & WordPress',
  headlineMain: 'Full-Stack Web Developer',
  headlineSub: 'Laravel & WordPress',
  tagline: 'Building websites, robust backend systems, and AI-driven platforms.',
  bio: "I'm a full-stack web developer building websites and backend systems with Laravel, WordPress, and PostgreSQL with SEO experience from client work. I'm currently leading architecture on a pet identification system using Siamese neural networks and EfficientNetV2B0, and an SMS-based order platform with LLM integration (OpenAI, Laravel, Flutter).",
  location: 'San Juan City, Philippines',
  email: 'hello@example.com',
  availability: 'Available for full-time roles & projects',
  isAvailable: true,
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:hello@example.com',
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
    'Laravel',
    'WordPress',
    'PostgreSQL',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Technical SEO',
    'Flutter',
    'Python & AI/ML'
  ]
};
