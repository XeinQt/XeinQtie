export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface ResumeProject {
  title: string;
  link?: string;
  url?: string;
  bullets: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  year: string;
}

export interface ResumeSkillCategory {
  category: string;
  skills: string;
}

export const resumeData = {
  header: {
    name: 'Rico Alentijo',
    phone: '+63 985 601 1442',
    email: 'ricoalentijo4@gmail.com',
    github: 'github.com/XeinQt',
    githubUrl: 'https://github.com/XeinQt',
    linkedin: 'linkedin.com/in/rico-s-alentijo-0823b22b4',
    linkedinUrl: 'https://www.linkedin.com/in/rico-s-alentijo-0823b22b4/'
  },
  experience: [
    {
      role: 'Full-Stack Developer & UI/UX Designer',
      company: 'Kaban, Checkpoint, and Liem Barbershop – Freelance',
      period: 'July 2026 – Present',
      bullets: [
        'Designed and developed end-to-end web applications, ensuring seamless integration between front-end interfaces and scalable back-end databases',
        'Created intuitive, user-centered wireframes and interactive prototypes with a strong focus on premium visual aesthetics',
        'Implemented responsive design systems to ensure visual and functional consistency across all mobile, tablet, and desktop viewports'
      ]
    },
    {
      role: 'Virtual Assistant & Lead Generation Specialist',
      company: 'Freelance',
      period: 'Apr 2026 – May 2026',
      bullets: [
        'Conducted targeted B2B lead generation campaigns and market research to construct high-quality, verified prospect databases',
        'Managed email outreach initiatives, qualified client leads, and optimized administrative task flows',
        'Provided scheduling coordination and communications support to improve outreach efficiency'
      ]
    },
    {
      role: 'UI/UX Designer',
      company: 'KamAI, BizCard, and Champion – Freelance',
      period: 'Feb 2025 – Nov 2025',
      bullets: [
        'Designed high-fidelity web and mobile prototypes in Figma for diverse platforms, including KamAI (healthcare EMR), Champion (referral app), and BizCard',
        'Developed and maintained reusable UI component libraries to establish standard design systems and accelerate frontend implementation',
        'Mapped interactive user flows and wireframes based on design specification and stakeholder feedback'
      ]
    },
    {
      role: 'Freelance UI/UX Designer',
      company: 'Solar E-Bike Store, Footprint, Vero – Independent / Freelance',
      period: 'Aug 2024 – Dec 2024',
      bullets: [
        'Designed responsive UI/UX mockups, wireframes, and prototypes in Figma tailored to custom client requirements',
        'Developed structured user flows to outline clean, friction-free user journeys',
        'Iterated quickly on client feedback to deliver modern and accessible UI assets'
      ]
    }
  ],
  projects: [
    {
      title: 'Checkpoint — AI Face Recognition Attendance System',
      link: 'attendance-system-nine.vercel.app',
      url: 'https://attendance-system-nine.vercel.app',
      bullets: [
        'Integrated ArcFace and FAISS vector search with MiniFASNet anti-spoofing for sub-130ms 512-D face matching that blocks photo/screen spoofs',
        'Built a React dashboard with automated face-quality gating (blur, lighting, scale) and live camera check-ins',
        'Built a Flask backend with local vector caching to cut database reads, plus an Expo React Native scanning app'
      ]
    },
    {
      title: 'KABAN — Digital Treasury & Fee Collection System',
      link: 'treasurer-system.vercel.app',
      url: 'https://treasurer-system.vercel.app',
      bullets: [
        'Handles fee collection and dues clearance for 1,000+ students, replacing cashier queues and manual accounting',
        'Gives students self-service balance lookup and verifiable digital receipts for transparent, trustworthy records',
        'Automated roster imports and real-time ledger sync, with role-based access for 3 user roles and audit trails'
      ]
    },
    {
      title: 'JajaPOS — Offline-First Point of Sale & Inventory System',
      bullets: [
        'Built a 100% offline-first POS on local SQLite with zero cloud costs, using Clean Architecture and Riverpod',
        'Built a Bill of Materials engine that auto-deducts packaging (cups, lids, straws) from inventory on every checkout',
        'Built SHA-256 role-based authentication and immutable stock audit logs, with an adaptive dual-pane layout for desktop, tablet, and mobile registers'
      ]
    },
    {
      title: 'UI/UX Design Portfolio — Web & Mobile App Designs',
      link: 'figma.com/design/Pre-Designs',
      url: 'https://www.figma.com/design/Pre-Designs',
      bullets: [
        'Designed in Figma from 2024 to 2026 across healthcare, campus systems, e-government, payments, retail, and environmental apps',
        'Includes wireframes, high-fidelity prototypes, user flows, and reusable design systems for mobile, tablet, and desktop'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Davao Oriental State University – Banaybanay Campus',
      year: 'Expected 2028'
    }
  ],
  skills: [
    {
      category: 'UI/UX Design',
      skills: 'Figma, Wireframing, Prototyping, Design Systems'
    },
    {
      category: 'Languages & Frameworks',
      skills: 'JavaScript, TypeScript, Python, PHP, Dart, HTML/CSS, React, Next.js, React Native, Node.js, Laravel, Flutter, Tailwind'
    },
    {
      category: 'Database & Cloud',
      skills: 'Supabase, PostgreSQL, Firebase, MySQL, SQLite, Vercel'
    },
    {
      category: 'Developer Tools & AI',
      skills: 'Git, GitHub, Docker, Vite, WordPress, Cursor, Antigravity, Claude, ChatGPT, OpenAI API'
    }
  ]
};
