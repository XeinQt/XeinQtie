export type EmploymentType = 'Full-Time' | 'Contract' | 'Freelance' | 'Part-Time' | 'Internship';
export type ExperienceCategory = 'all' | 'engineering' | 'freelance' | 'leadership' | 'consulting';

export interface TechSkill {
  name: string;
  category?: 'frontend' | 'backend' | 'devops' | 'database' | 'tool';
  color?: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyInitials: string;
  companyLogoBg: string;
  companyUrl?: string;
  location: string;
  type: EmploymentType;
  category: 'engineering' | 'freelance' | 'leadership' | 'consulting';
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  duration: string;
  summary: string;
  highlights: MetricHighlight[];
  bullets: string[];
  skills: TechSkill[];
  featuredProject?: {
    name: string;
    description: string;
    tag: string;
  };
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Developer & UI/UX Designer',
    company: 'Freelance / Independent',
    companyInitials: 'FL',
    companyLogoBg: 'from-zinc-700 to-zinc-950',
    companyUrl: 'https://example.com',
    location: 'Remote / Independent',
    type: 'Freelance',
    category: 'engineering',
    startDate: 'July 2026',
    endDate: 'Present',
    isCurrent: true,
    duration: 'Present',
    summary: 'Designed and developed end-to-end web applications, ensuring a seamless integration between front-end interfaces and scalable back-end databases.',
    highlights: [
      { label: 'Integration', value: 'End-to-End' },
      { label: 'Architecture', value: 'Full-Stack' }
    ],
    bullets: [
      'Designed and developed end-to-end web applications, ensuring a seamless integration between front-end interfaces and scalable back-end databases.',
      'Created intuitive, user-centered wireframes and interactive prototypes with a strong focus on premium visual aesthetics.',
      'Implemented responsive design systems to guarantee visual and functional consistency across all mobile, tablet, and desktop viewports.'
    ],
    skills: [
      { name: 'Next.js 14', category: 'frontend' },
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Figma', category: 'tool' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Supabase', category: 'backend' }
    ]
  },
  {
    id: 'exp-2',
    role: 'Virtual Assistant & Lead Generation Specialist',
    company: 'Freelance / Independent',
    companyInitials: 'VA',
    companyLogoBg: 'from-zinc-800 to-black',
    companyUrl: 'https://example.com',
    location: 'Remote / Independent',
    type: 'Contract',
    category: 'consulting',
    startDate: 'April 2026',
    endDate: 'May 2026',
    isCurrent: false,
    duration: '2 mos',
    summary: 'Conducted targeted B2B lead generation campaigns, market research, and automated outreach operations.',
    highlights: [
      { label: 'Prospect Data', value: '100% Verified' },
      { label: 'Outreach', value: 'Targeted B2B' }
    ],
    bullets: [
      'Conducted targeted B2B lead generation campaigns and market research to construct high-quality, verified prospect databases.',
      'Managed email outreach initiatives, qualified client leads, and optimized administrative task flows.',
      'Provided scheduling coordination and communications support to improve outreach efficiency.'
    ],
    skills: [
      { name: 'B2B Lead Generation', category: 'tool' },
      { name: 'Market Research', category: 'tool' },
      { name: 'Email Outreach', category: 'tool' },
      { name: 'Data Verification', category: 'tool' },
      { name: 'Workflow Optimization', category: 'tool' }
    ]
  },
  {
    id: 'exp-3',
    role: 'UI/UX Codesigner',
    company: 'KamAI, BizCard, and Champion',
    companyInitials: 'UI',
    companyLogoBg: 'from-zinc-600 to-zinc-900',
    companyUrl: 'https://example.com',
    location: 'Remote / Project-Based',
    type: 'Contract',
    category: 'freelance',
    startDate: 'February 2025',
    endDate: 'November 2025',
    isCurrent: false,
    duration: '10 mos',
    summary: 'Designed high-fidelity web and mobile prototypes in Figma for healthcare EMR (KamAI), referral platform (Champion), and BizCard.',
    highlights: [
      { label: 'Design Systems', value: 'Multi-Product' },
      { label: 'Prototypes', value: 'Web & Mobile' }
    ],
    bullets: [
      'Designed high-fidelity web and mobile prototypes in Figma for diverse platforms including KamAI (healthcare EMR), Champion (referral app), and BizCard.',
      'Developed and maintained reusable UI component libraries to establish standard design systems and accelerate frontend implementation.',
      'Mapped interactive user flows and wireframes based on design specs and stakeholder feedback.'
    ],
    skills: [
      { name: 'Figma', category: 'tool' },
      { name: 'UI/UX Design', category: 'tool' },
      { name: 'Design Systems', category: 'tool' },
      { name: 'Wireframing', category: 'tool' },
      { name: 'Mobile & Web Prototyping', category: 'tool' }
    ]
  },
  {
    id: 'exp-4',
    role: 'Freelance UI/UX Designer',
    company: 'Independent / Freelance',
    companyInitials: 'FL',
    companyLogoBg: 'from-zinc-700 to-zinc-950',
    companyUrl: 'https://example.com',
    location: 'Remote / Freelance',
    type: 'Freelance',
    category: 'freelance',
    startDate: 'August 2024',
    endDate: 'December 2024',
    isCurrent: false,
    duration: '5 mos',
    summary: 'Designed custom responsive UI/UX mockups, wireframes, and friction-free user journeys in Figma tailored to custom client requirements.',
    highlights: [
      { label: 'Deliverables', value: 'Custom UI Assets' },
      { label: 'User Journeys', value: 'Friction-Free' }
    ],
    bullets: [
      'Designed responsive UI/UX mockups, wireframes, and prototypes in Figma tailored to custom client requirements.',
      'Developed structured user flows to outline clean, friction-free user journeys.',
      'Iterated quickly on client feedback to deliver modern and accessible UI assets.'
    ],
    skills: [
      { name: 'Figma', category: 'tool' },
      { name: 'UI/UX Mockups', category: 'tool' },
      { name: 'User Flow Mapping', category: 'tool' },
      { name: 'Prototyping', category: 'tool' },
      { name: 'Responsive Design', category: 'tool' }
    ]
  }
];

export const careerStats = {
  totalYears: '2+',
  totalProjects: '20+',
  companiesWorked: '4',
  satisfiedClients: '100%',
  currentStatus: 'Open to New Opportunities & Freelance Projects'
};
