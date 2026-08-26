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

/**
 * ============================================================================
 * EXPERIENCE DATA (Updated to match exact portfolio history)
 * ============================================================================
 */
export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'WordPress Developer & SEO Specialist',
    company: 'Freelance',
    companyInitials: 'FL',
    companyLogoBg: 'from-zinc-700 to-zinc-950',
    companyUrl: 'https://example.com',
    location: 'Australia (Remote)',
    type: 'Freelance',
    category: 'freelance',
    startDate: 'Apr 2024',
    endDate: 'Present',
    isCurrent: true,
    duration: 'Present',
    summary: 'Developing custom high-performance WordPress themes, speed optimization, and technical SEO architecture for Australian and international clients.',
    highlights: [
      { label: 'Organic Traffic', value: '+120%' },
      { label: 'PageSpeed Score', value: '98/100' }
    ],
    bullets: [
      'Developed bespoke WordPress themes and plugins adhering to clean code standards and Core Web Vitals.',
      'Conducted comprehensive technical SEO audits, structured schema markups, and indexing optimizations.',
      'Configured Google Analytics 4, Tag Manager, and Search Console telemetry pipelines.'
    ],
    skills: [
      { name: 'WordPress', category: 'backend' },
      { name: 'Technical SEO', category: 'tool' },
      { name: 'PHP', category: 'backend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'Core Web Vitals', category: 'tool' }
    ]
  },
  {
    id: 'exp-2',
    role: 'IT Specialist',
    company: 'One Clique Studio',
    companyInitials: 'OC',
    companyLogoBg: 'from-zinc-800 to-black',
    companyUrl: 'https://example.com',
    location: 'San Juan City, Philippines',
    type: 'Full-Time',
    category: 'engineering',
    startDate: 'Sept 2025',
    endDate: 'Jan 2026',
    isCurrent: false,
    duration: '5 mos',
    summary: 'Managed studio IT infrastructure, internal networks, data storage servers, and hardware systems.',
    highlights: [
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Workflows Automated', value: '15+' }
    ],
    bullets: [
      'Maintained enterprise workstations, local area network switching, firewall security, and cloud storage.',
      'Automated digital asset management workflows and daily incremental server backups.',
      'Provided tier-2/3 technical diagnostics and hardware repairs for studio production team.'
    ],
    skills: [
      { name: 'IT Infrastructure', category: 'devops' },
      { name: 'System Administration', category: 'tool' },
      { name: 'Network Security', category: 'devops' },
      { name: 'Hardware Diagnostics', category: 'tool' }
    ]
  },
  {
    id: 'exp-3',
    role: 'Marketing Analyst',
    company: 'JG Superstore',
    companyInitials: 'JG',
    companyLogoBg: 'from-zinc-600 to-zinc-900',
    companyUrl: 'https://example.com',
    location: 'San Juan City, Philippines',
    type: 'Full-Time',
    category: 'consulting',
    startDate: 'Jun 2023',
    endDate: 'Aug 2023',
    isCurrent: false,
    duration: '3 mos',
    summary: 'Analyzed marketplace multi-channel sales performance, advertising spend efficiency, and campaign conversions.',
    highlights: [
      { label: 'Ad ROI Growth', value: '+35%' },
      { label: 'Reports Automated', value: '40+' }
    ],
    bullets: [
      'Evaluated e-commerce checkout funnel data across major marketplace platforms.',
      'Created automated sales performance dashboards for commercial leadership.',
      'Identified top-performing search keywords and customer demographic patterns.'
    ],
    skills: [
      { name: 'Data Analysis', category: 'tool' },
      { name: 'E-Commerce Analytics', category: 'tool' },
      { name: 'Conversion Optimization', category: 'tool' }
    ]
  },
  {
    id: 'exp-4',
    role: 'Content Associate',
    company: 'JG Superstore',
    companyInitials: 'JG',
    companyLogoBg: 'from-zinc-700 to-zinc-950',
    companyUrl: 'https://example.com',
    location: 'San Juan City, Philippines',
    type: 'Full-Time',
    category: 'consulting',
    startDate: 'Apr 2023',
    endDate: 'Jun 2023',
    isCurrent: false,
    duration: '3 mos',
    summary: 'Produced and optimized technical product listings, catalog indexing, and digital merchandising copy.',
    highlights: [
      { label: 'SKUs Cataloged', value: '1,200+' }
    ],
    bullets: [
      'Authored search-optimized product specifications and commercial descriptions for consumer electronics.',
      'Coordinated catalog updates across e-commerce storefronts and verified inventory accuracy.',
      'Managed digital promotional assets and featured product collections.'
    ],
    skills: [
      { name: 'Content Strategy', category: 'tool' },
      { name: 'Catalog Management', category: 'tool' },
      { name: 'Copywriting', category: 'tool' }
    ]
  },
  {
    id: 'exp-5',
    role: 'Technical Support Representative',
    company: 'Startek Philippines',
    companyInitials: 'SP',
    companyLogoBg: 'from-zinc-800 to-black',
    companyUrl: 'https://example.com',
    location: 'Pasig City, Philippines',
    type: 'Full-Time',
    category: 'engineering',
    startDate: 'Aug 2022',
    endDate: 'Jan 2023',
    isCurrent: false,
    duration: '6 mos',
    summary: 'Delivered technical support and troubleshooting for telecommunications, internet routing, and hardware systems.',
    highlights: [
      { label: 'Resolution Rate', value: '94%' },
      { label: 'Avg Handle Time', value: '<12m' }
    ],
    bullets: [
      'Diagnosed client broadband routing, DNS configurations, modems, and VoIP communication systems.',
      'Resolved complex hardware and connection failures with high customer satisfaction scores.',
      'Documented troubleshooting workflows and ticket resolution summaries.'
    ],
    skills: [
      { name: 'Network Troubleshooting', category: 'devops' },
      { name: 'Technical Support', category: 'tool' },
      { name: 'Customer Service', category: 'tool' }
    ]
  }
];

export const careerStats = {
  totalYears: '3+',
  totalProjects: '25+',
  companiesWorked: '4',
  satisfiedClients: '100%',
  currentStatus: 'Open to New Opportunities & Freelance Projects'
};
