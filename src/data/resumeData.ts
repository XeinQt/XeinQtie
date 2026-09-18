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
    phone: '09856011442',
    email: 'ricoalentijo4@gmail.com',
    github: 'GitHub',
    githubUrl: 'https://github.com/XeinQt',
    linkedin: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/in/rico-s-alentijo-0823b22b4/'
  },
  experience: [
    {
      role: 'Full-Stack Developer & UI/UX Designer',
      company: 'Kaban, Tala, & Liem Barbershop – Freelance / Independent',
      period: 'July 2026 – Present',
      bullets: [
        'Designed and developed end-to-end web applications, ensuring seamless integration between front-end interfaces and scalable back-end databases.',
        'Created intuitive, user-centered wireframes and interactive prototypes with a strong focus on premium visual aesthetics.',
        'Implemented responsive design systems to ensure visual and functional consistency across all mobile, tablet, and desktop viewports.'
      ]
    },
    {
      role: 'Virtual Assistant & Lead Generation Specialist',
      company: 'Freelance',
      period: 'Apr 2026 – May 2026',
      bullets: [
        'Conducted targeted B2B lead generation campaigns and market research to construct high-quality, verified prospect databases.',
        'Managed email outreach initiatives, qualified client leads, and optimized administrative task flows.',
        'Provided scheduling coordination and communications support to improve outreach efficiency.'
      ]
    },
    {
      role: 'UI/UX Codesigner',
      company: 'KamAI, BizCard, and Champion – Freelance',
      period: 'Feb 2025 – Nov 2025',
      bullets: [
        'Designed high-fidelity web and mobile prototypes in Figma for diverse platforms, including KamAI (healthcare EMR), Champion (referral app), and BizCard.',
        'Developed and maintained reusable UI component libraries to establish standard design systems and accelerate frontend implementation.',
        'Mapped interactive user flows and wireframes based on design specifications and stakeholder feedback.'
      ]
    },
    {
      role: 'Freelance UI/UX Designer',
      company: 'Independent / Freelance',
      period: 'Aug 2024 – Dec 2024',
      bullets: [
        'Designed responsive UI/UX mockups, wireframes, and prototypes in Figma tailored to custom client requirements.',
        'Developed structured user flows to outline clean, friction-free user journeys.',
        'Iterated quickly on client feedback to deliver modern and accessible UI assets.'
      ]
    }
  ],
  projects: [
    {
      title: 'Checkpoint — AI Face Recognition Attendance System',
      link: 'attendance-system-nine.vercel.app',
      url: 'https://attendance-system-nine.vercel.app',
      bullets: [
        'Integrated ArcFace and FAISS vector search with MiniFASNet anti-spoofing to achieve sub-130ms 512-D face matching and block photo/screen spoof attacks.',
        'Developed a React web dashboard featuring automated facial quality gating (blur, lighting, scale) and live camera scanning for event check-ins.',
        'Built a Python Flask backend with local vector disk caching to eliminate database read costs, alongside an Expo React Native mobile app for portable scanning.'
      ]
    },
    {
      title: 'KABAN — Digital Treasury & Fee Collection System',
      link: 'treasurer-system.vercel.app',
      url: 'https://treasurer-system.vercel.app',
      bullets: [
        'Streamlined fee collections and dues clearance for 1,000+ students, significantly reducing cashier queue times and manual accounting discrepancies.',
        'Enhanced fiscal transparency and student trust by providing self-service balance lookup and verifiable digital receipt referencing.',
        'Automated batch student roster processing and real-time ledger synchronization, safeguarding institutional funds with 3-Factor Authentication and immutable audit trails.'
      ]
    },
    {
      title: 'JajaPOS — Offline-First Point of Sale & Inventory System',
      bullets: [
        'Engineered a 100% offline-first POS platform on local SQLite with zero recurring cloud costs, using Clean Architecture and Riverpod for reactive state management.',
        'Implemented a Bill of Materials (BOM) engine that automatically deducts raw packaging (cups, lids, straws) from inventory on every checkout transaction.',
        'Built SHA-256 role-based authentication and immutable stock audit logs, alongside an adaptive dual-pane layout for desktop, tablet, and mobile registers.'
      ]
    },
    {
      title: 'Figma Design Portfolio — KamAI, BizCard, Champion, Liem Barber Shop',
      link: 'figma.com/design/Pre-Designs',
      url: 'https://www.figma.com/design/Pre-Designs',
      bullets: [
        'User-friendly design and easy-to-understand layouts across all mobile and desktop wireframes.',
        'Clean, modern branding and reusable design tokens across all four platforms.',
        'Consistent, accessible user experience ensuring seamless navigation and cross-device consistency.'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Davao Oriental State University - Banaybanay Campus',
      year: '2025'
    }
  ],
  skills: [
    {
      category: 'UI/UX Design',
      skills: 'Figma, Wireframing, Prototyping, Design Systems'
    },
    {
      category: 'Languages',
      skills: 'JavaScript, TypeScript, Python, PHP, Dart, HTML5, CSS3'
    },
    {
      category: 'Database & Cloud',
      skills: 'Supabase, PostgreSQL, Firebase, MySQL, SQLite'
    },
    {
      category: 'Developer Tools & AI',
      skills: 'Git, GitHub, Docker, Vite, Cursor, AntiGravity, Claude, ChatGPT, Gemini, REST APIs'
    }
  ]
};
