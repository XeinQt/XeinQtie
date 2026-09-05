export interface PersonalInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  placeOfBirth: string;
  age: number;
  sex: string;
  civilStatus: string;
  citizenship: string;
  religion: string;
  height: string;
  weight: string;
}

export interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  campus: string;
}

export interface ResumeExperience {
  role: string;
  projects?: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface CharacterReference {
  name: string;
  title: string;
  institution: string;
  phone: string;
}

export const resumeData = {
  personalInfo: {
    name: 'RICO ALENTIJO',
    address: 'Purok 2A Magnaga, Pantukan, Davao de Oro, Philippines',
    phone: '09856011442',
    email: 'ricoalentijo4@gmail.com',
    dateOfBirth: 'May 03, 2003',
    placeOfBirth: 'Prk -8 Bagongon, Compostela, Compostela Valley Province, Philippines',
    age: 23,
    sex: 'Male',
    civilStatus: 'Single',
    citizenship: 'Filipino',
    religion: 'Roman Catholic',
    height: '5 feet 11 inches',
    weight: '68 kg'
  },
  education: [
    {
      degree: 'Bachelor of Science in Information Technology',
      year: '2025',
      institution: 'Davao Oriental State University',
      campus: 'Banaybanay Campus'
    }
  ],
  workExperience: [
    {
      role: 'FULL-STACK DEVELOPER & UI/UX DESIGNER',
      projects: 'Kaban, Tala, and Liem Barbershop(Mobile app)',
      company: 'Freelance / Independent',
      period: 'July 2026 — Present',
      bullets: [
        'Designed and developed end-to-end web applications, ensuring seamless integration between front-end interfaces and scalable back-end databases.',
        'Created intuitive, user-centered wireframes and interactive prototypes with a strong focus on premium visual aesthetics.',
        'Implemented responsive design systems to ensure visual and functional consistency across all mobile, tablet, and desktop viewports.'
      ]
    },
    {
      role: 'VIRTUAL ASSISTANT & LEAD GENERATION SPECIALIST',
      company: 'Freelance',
      period: 'April 2026 — May 2026',
      bullets: [
        'Conducted targeted B2B lead generation campaigns and market research to construct high-quality, verified prospect databases.',
        'Managed email outreach initiatives, qualified client leads, and optimized administrative task flows.',
        'Provided scheduling coordination and communications support to improve outreach efficiency.'
      ]
    },
    {
      role: 'ASSISTANT UI/UX DESIGNER',
      projects: 'KamAI, BizCard, and Champion',
      company: 'Freelance / Project-Based',
      period: 'February 2025 — November 2025',
      bullets: [
        'Designed high-fidelity web and mobile prototypes in Figma for diverse platforms, including KamAI (healthcare EMR), Champion (referral app), and BizCard.',
        'Developed and maintained reusable UI component libraries to establish standard design systems and accelerate frontend implementation.',
        'Mapped interactive user flows and wireframes based on design specification and stakeholder feedback.'
      ]
    },
    {
      role: 'FREELANCE UI/UX DESIGNER',
      company: 'Independent / Freelance',
      period: 'August 2024 — December 2024',
      bullets: [
        'Designed responsive UI/UX mockups, wireframes, and prototypes in Figma tailored to custom client requirements.',
        'Developed structured user flows to outline clean, friction-free user journeys.',
        'Iterated quickly on client feedback to deliver modern and accessible UI assets.'
      ]
    }
  ],
  skills: [
    'UI/UX Design (Figma, Wireframing, Prototyping, Design Systems)',
    'User Research, Information Architecture, and Usability Testing',
    'Responsive Web and Mobile Interface Design',
    'Graphic Design and Social Media Content Creation',
    'Strong Collaboration with Cross-functional Teams and Clients',
    'Problem-solving, Analytical Thinking, and Attention to Detail',
    'Proficient in Microsoft Office (Excel, Word, PowerPoint) and Google Workspace',
    'Excellent Communication, Time Management, and Project Organization'
  ],
  softSkills: [
    'Time Management',
    'Detail-oriented',
    'Flexible',
    'Confidential Information Management',
    'Ability to Collaborate',
    'Ability to Multitask',
    'Creative',
    'Organized',
    'Hands-on Learner'
  ],
  characterReferences: [
    {
      name: 'Neil A. Mutia, MIT',
      title: 'Instructor II, BSIT-Program Head',
      institution: 'Davao Oriental State University - Banaybanay Campus',
      phone: '09302219414'
    },
    {
      name: 'John Ray D. Paulin, MIT',
      title: 'Instructor I',
      institution: 'Davao Oriental State University - Banaybanay Campus',
      phone: '09663523468'
    },
    {
      name: 'Rogene A. Abijay',
      title: 'Instructor I',
      institution: 'Davao Oriental State University - Banaybanay Campus',
      phone: '09097589324'
    }
  ]
};
