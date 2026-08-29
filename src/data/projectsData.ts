export interface ProjectScreenshot {
  title: string;
  url: string;
  caption: string;
}

export interface TechStackItem {
  layer: string;
  tech: string;
  purpose: string;
}

export interface FunctionalModule {
  icon?: string;
  title: string;
  route?: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  typeCategory?: 'fullstack' | 'uiux';
  year: string;
  role?: string;
  client?: string;
  authors?: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  screenshots?: ProjectScreenshot[];
  techStackTable?: TechStackItem[];
  modules?: FunctionalModule[];
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    keyFeatures: string[];
    securityHighlights?: string[];
    responsibilities?: string[];
    architecture?: {
      title: string;
      description: string;
    }[];
    metrics?: {
      label: string;
      value: string;
    }[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: 'kaban',
    title: 'KABAN — Student Council Treasury & Financial Transparency System',
    subtitle: 'Fiscal Monitoring & Dues Collection Platform',
    category: 'Institutional Fintech & Fiscal Transparency',
    typeCategory: 'fullstack',
    year: '2026',
    role: 'Lead Full-Stack Developer & UI/UX Designer',
    authors: 'Archie Boiser and Rico Alentijo',
    description: 'An enterprise-grade institutional financial management, dues collection, and student fiscal transparency platform designed for Supreme Student Councils, academic treasurers, and university finance committees.',
    image: '/kaban-dashboard-dark.jpg',
    tags: [
      'Next.js 14',
      'TypeScript 5',
      'Tailwind CSS 3',
      'Supabase (PostgreSQL 15)',
      'PL/pgSQL Triggers',
      'Web Crypto API (3FA)',
      'SheetJS & PapaParse'
    ],
    liveUrl: 'https://treasurer-system.vercel.app/',
    githubUrl: 'https://github.com/XeinQt/XeinQtie',
    screenshots: [
      {
        title: 'Dark Mode Dashboard',
        url: '/kaban-dashboard-dark.jpg',
        caption: 'Fiscal monitoring & analytics hub featuring live cash flow graphs, inflow/outflow telemetry (₱3,060 vs ₱40,200), and payables turnout.'
      },
      {
        title: 'Light Mode Dashboard',
        url: '/kaban-dashboard-light.jpg',
        caption: 'Clean, high-contrast Warm Paper daylight UI tailored for campus administrative staff and daytime audits.'
      },
      {
        title: 'Public Transparency Ledger',
        url: '/kaban-transparency-ledger.jpg',
        caption: 'Open public financial summary displaying itemized disbursements, reserve funds (₱8,250), and project allocations with audit attachments.'
      },
      {
        title: 'Student ID Lookup',
        url: '/kaban-student-lookup.jpg',
        caption: 'Self-service 8-digit student ID search (YYYY-XXXX) with fee assessments, balances, and verifiable digital receipts.'
      },
      {
        title: 'Visual User Guide',
        url: '/kaban-user-guide.jpg',
        caption: 'Step-by-step onboarding walkthrough instructing students how to inspect dues and verify transactions in 4 simple steps.'
      }
    ],
    modules: [
      {
        title: 'Public Transparency & Dues Lookup Portal',
        route: '/transparency',
        features: [
          'Segmented Student ID Lookup: Auto-advancing input formatting (YYYY-XXXX) for instant balance inquiries.',
          'Assigned Dues & Assessment Breakdown: Itemized listing of dues, assessed contributions, and live clearance badges (Fully Paid, Partial, Unpaid).',
          'Official Transaction References: Verified receipt codes (TRX-YYYYMMDD-XXXX) with collector attribution and timestamp logs.',
          'Council Fiscal Infographics: Real-time KPI summaries (Total Collections, Total Disbursed, Net Reserve Fund, Pending Receivables).',
          'Public Disbursement & Expense Ledger: Transparent itemized disbursement logs with purpose descriptions and receipt attachments.',
          'Anti-Scraping Protection: Sliding-window request throttling to protect student roster privacy.'
        ]
      },
      {
        title: 'Interactive Visual User Guide',
        route: '/guide',
        features: [
          'Step-by-Step Walkthrough covering ID Search, Account Profiles, Dues Status, and Receipt Verification.',
          'Help Desk & Treasury Policies FAQ detailing payment rules, refund policies, and graduation clearance procedures.'
        ]
      },
      {
        title: 'Council Officer Treasury Operations',
        route: '/admin/*',
        features: [
          '3-Factor Authentication (3FA): Encrypted Credentials + Time-limited Gmail OTP + 6-Digit Encrypted Security PIN with lockout defense.',
          'Executive Financial Dashboard: Live cash flow distribution, collection meters, and real-time multi-cashier feed.',
          'Batch Spreadsheet Ingestion: Drag-and-drop CSV / Excel (.xlsx, .xls) import engine via PapaParse & SheetJS with duplicate detection.',
          'Payables & Dues Engine: Configurable target scopes (All Students, Specific Year Level, Specific Section) with automated balance generation.',
          'Cashier Collection Desk: Instant student search, multi-device debounce protection, and printable electronic collection receipts.',
          'Purchases & Disbursements Ledger: Categorized expense tracking, budget allocation vs disbursed status, and receipt photo uploads.',
          'Role-Based Access Control: Multi-tier administration (super_admin vs sub_admin) with immutable administrative audit logs.'
        ]
      }
    ],
    techStackTable: [
      { layer: 'Frontend Framework', tech: 'Next.js 14 (App Router)', purpose: 'Server-side rendering, static optimization, and Edge routing.' },
      { layer: 'UI Library & React', tech: 'React 18 & TypeScript 5', purpose: 'Declarative component lifecycle and strict static typing across all models.' },
      { layer: 'Styling & Design System', tech: 'Tailwind CSS 3', purpose: 'Dual theme support (Warm Paper & Obsidian Dark Mode) with custom palettes.' },
      { layer: 'Spreadsheet Processing', tech: 'SheetJS (XLSX) & PapaParse', purpose: 'Bi-directional parsing of Excel workbooks and batch CSV student rosters.' },
      { layer: 'Cloud Database', tech: 'Supabase (PostgreSQL 15+)', purpose: 'Enterprise relational database with compound indexing and foreign key constraints.' },
      { layer: 'Database Logic', tech: 'PL/pgSQL Triggers', purpose: 'Race-condition-free balance calculation triggers across multi-cashier desks.' },
      { layer: 'Live Synchronization', tech: 'Supabase Realtime', purpose: 'Sub-50ms WebSocket event streaming on payment channels across active cashiers.' },
      { layer: 'Cryptography & 3FA', tech: 'Web Crypto API (SubtleCrypto)', purpose: 'Salted SHA-256 password/PIN hashing and HMAC-SHA256 session token verification.' },
      { layer: 'Edge Middleware', tech: 'Next.js Edge Runtime', purpose: 'Zero-latency serverless route protection on /admin/* via cryptographically signed cookies.' }
    ],
    caseStudy: {
      overview: 'KABAN is an enterprise-grade institutional financial management, dues collection, and student fiscal transparency platform designed for Supreme Student Councils, academic treasurers, and university finance committees. It bridges administrative cashier workflows with a 100% open public ledger to foster complete student trust.',
      challenge: 'University student councils routinely face difficulties with manual paper ledgers, fragmented spreadsheet records, delayed expense auditing, unauthorized data tampering, and lack of trust from the student body regarding fee utilization.',
      solution: 'Engineered an automated full-stack platform featuring 3-Factor Authentication (3FA) for officers, PL/pgSQL database triggers for race-condition-free multi-cashier collections, automated receipt generation, and an open public transparency portal for real-time accountability.',
      keyFeatures: [
        '3-Factor Authentication (3FA) entry defense (Password + Gmail OTP + 6-Digit PIN)',
        'Real-time Treasury Dashboard with live Inflow, Outflow, and Net Period Flow analytics',
        'Interactive financial trend charting (Fee Collections vs Disbursed Expenses)',
        'Public Transparency Summary displaying itemized purchases, project budget plans, and council reserves',
        '8-Digit Student ID Lookup (YYYY-XXXX) with fee breakdown and verifiable digital receipts',
        'Drag-and-drop CSV / Excel spreadsheet batch student ingestion engine',
        'Dual-theme accessibility (Obsidian Dark Mode & Warm Paper Light Mode)',
        'Step-by-step interactive User Guide and visual onboarding manual'
      ],
      securityHighlights: [
        '3-Factor Authentication (3FA) with Gmail OTP and encrypted 6-digit officer PIN',
        'Salted SHA-256 & HMAC-SHA256 Web Crypto verification',
        'Next.js Edge Middleware route guards with cryptographically signed cookies',
        'Sliding-window rate limiter protecting search and login endpoints from automated scraping'
      ],
      architecture: [
        {
          title: 'Next.js 14 App Router + Server Components',
          description: 'Leverages React Server Components for near-instant cold loads, static optimization, and edge-cached financial summaries.'
        },
        {
          title: 'PL/pgSQL Triggers & PostgreSQL Stored Procedures',
          description: 'Database-engine balance calculation triggers ensuring race-condition-free multi-cashier collections across active terminals.'
        },
        {
          title: 'Supabase Realtime WebSockets (<50ms)',
          description: 'Sub-50ms multi-device event streaming broadcasting payment and disbursement updates instantly to all connected officer desks.'
        },
        {
          title: 'Dual Theme Engine (Warm Paper & Obsidian Dark)',
          description: 'Custom Tailwind CSS 3 design system with accessible contrast ratios, print-sheet styling, and fluid responsive charts.'
        }
      ],
      metrics: [
        { label: 'Fiscal Transparency', value: '100% Public' },
        { label: 'Auditing Speedup', value: '12x Faster' },
        { label: 'Security Standard', value: '3FA Protected' }
      ]
    }
  },
  {
    id: 'monitor-store',
    title: 'MonitorStore — Monitor & Laptop E-Commerce Platform',
    subtitle: 'Full-Stack E-Commerce & Admin Control Center',
    category: 'Full-Stack Web & E-Commerce',
    typeCategory: 'fullstack',
    year: '2025',
    role: 'Full-Stack Developer',
    client: 'Brezneb Cona',
    description: 'A full-stack Laravel e-commerce platform for buying premium monitors and laptops — featuring product catalogs, cart, orders, wishlist, admin dashboard, and Google OAuth authentication.',
    image: '/img/LaptopEcommerce/desktop-0.png',
    tags: ['Laravel 12', 'PHP', 'Tailwind CSS', 'Vite', 'MySQL', 'Google OAuth'],
    githubUrl: 'https://github.com/XeinQt/eCommerce-for-Laptops',
    screenshots: [
      { title: 'Storefront Hero', url: '/img/LaptopEcommerce/desktop-0.png', caption: 'Dark-themed storefront featuring featured hardware, promotions, and category navigation.' },
      { title: 'Product Catalog', url: '/img/LaptopEcommerce/desktop-1.png', caption: 'Hardware catalog with multi-facet filtering by brand, refresh rate, and resolution.' },
      { title: 'Product Detail', url: '/img/LaptopEcommerce/desktop-2.png', caption: 'High-res gallery, specification sheet, customer reviews, and add-to-cart controls.' },
      { title: 'Shopping Cart', url: '/img/LaptopEcommerce/desktop-3.png', caption: 'Dynamic shopping cart with real-time tax calculation and coupon validation.' },
      { title: 'Checkout & Orders', url: '/img/LaptopEcommerce/desktop-4.png', caption: 'Seamless checkout flow with order status tracking and invoice downloads.' },
      { title: 'Admin Analytics', url: '/img/LaptopEcommerce/desktop-5.png', caption: 'Control center dashboard with sales analytics, inventory graphs, and revenue trends.' },
      { title: 'Inventory CRUD', url: '/img/LaptopEcommerce/desktop-6.png', caption: 'Full product CRUD management with image uploads and stock threshold alerts.' },
      { title: 'User Management', url: '/img/LaptopEcommerce/desktop-7.png', caption: 'Administrative customer directory, order history audit, and role assignments.' }
    ],
    caseStudy: {
      overview: 'MonitorStore is a complete full-stack e-commerce web application built with Laravel 12 and Tailwind CSS. The platform allows customers to browse and purchase premium monitors and laptops, manage their cart and wishlist, track orders, and authenticate via Google OAuth. An admin control center provides full product management, order tracking, user management, and sales analytics with chart-driven reports — all wrapped in a sleek dark-themed UI.',
      challenge: 'E-commerce storefronts require complex inventory synchronization, secure payment processing, responsive product filtering, and an intuitive administrative backend that can manage orders and analytics without latency.',
      solution: 'Developed a robust Laravel 12 backend with Eloquent ORM, integrated Laravel Breeze and Socialite for Google OAuth, styled a responsive dark slate design system with Tailwind CSS, and built an interactive Admin Control Center with Chart.js analytics.',
      keyFeatures: [
        'Full product catalog with live search, brand filtering, and category sorting',
        'Interactive shopping cart with real-time quantity adjustments and checkout flow',
        'Google OAuth 2.0 and email/password authentication via Laravel Socialite',
        'Personal customer wishlist and order tracking history',
        'Admin Control Center with sales performance charts and revenue analytics',
        'Complete Product & Inventory CRUD with stock alert thresholds'
      ],
      responsibilities: [
        'Built the full product catalog with filtering, searching, and detailed product pages',
        'Developed the shopping cart system with real-time quantity management and order checkout flow',
        'Implemented user authentication using Laravel Breeze and Google OAuth via Laravel Socialite',
        'Built the wishlist feature for saving products for later purchase',
        'Designed and developed the Admin Control Center with dashboard analytics, product CRUD, and order management',
        'Managed database schema, migrations, and relationships using Laravel Eloquent ORM'
      ],
      architecture: [
        { title: 'Laravel 12 MVC Architecture', description: 'Clean controller-service-repository patterns separating business logic from view presentation.' },
        { title: 'Tailwind CSS Custom Design System', description: 'Dark slate and teal accents optimized for premium consumer tech hardware.' },
        { title: 'Google OAuth via Socialite', description: 'Secure social authentication integrated with standard user password credentials.' }
      ],
      metrics: [
        { label: 'Page Load Speed', value: '<650ms' },
        { label: 'Architecture', value: 'Laravel MVC' },
        { label: 'Authentication', value: 'OAuth 2.0' }
      ]
    }
  },
  {
    id: 'kamai',
    title: 'KamAI — Healthcare EMR Web Platform',
    subtitle: 'Electronic Medical Records & Clinical Portal',
    category: 'Healthcare UI/UX & Clinical Workflows',
    typeCategory: 'uiux',
    year: '2025',
    role: 'Assistant UI/UX Designer',
    client: 'Dr. Magdalena Tollea',
    description: 'A comprehensive Figma-designed EMR (Electronic Medical Records) platform for healthcare providers — streamlining patient management, clinical workflows, lab tracking, and data-driven insights.',
    image: '/img/KamAi/desktop0.png',
    tags: ['Figma', 'UI/UX Design', 'Design Systems', 'Healthcare EMR', 'Prototyping'],
    figmaUrl: 'https://www.figma.com/design/eo6TnccTbwsf6lyh8rmYdp/My-Works?node-id=2030-134463&t=TTMGGU8YUNyzrnlM-1',
    screenshots: [
      { title: 'Marketing Landing Page', url: '/img/KamAi/desktop0.png', caption: 'Public landing page presenting clinical benefits, provider testimonials, and platform security.' },
      { title: 'Clinical Dashboard', url: '/img/KamAi/desktop-1.png', caption: 'Doctor dashboard with pending visits, lab alerts, patient charts, and real-time activity feed.' },
      { title: 'Patient Registry', url: '/img/KamAi/desktop-2.png', caption: 'Comprehensive patient list with medical record numbers (MRN), triage status, and care team.' },
      { title: 'Patient Health Chart', url: '/img/KamAi/desktop-3.png', caption: 'Detailed electronic chart covering diagnosis history, prescriptions, vitals, and progress notes.' },
      { title: 'Lab & Diagnostics Portal', url: '/img/KamAi/desktop-4.png', caption: 'Diagnostic order tracking, specimen status, and lab report review workflow.' },
      { title: 'Billing & Claims', url: '/img/KamAi/desktop-5.png', caption: 'Insurance claim status, patient invoices, and financial ledger integration.' },
      { title: 'Staff Scheduling', url: '/img/KamAi/desktop-6.png', caption: 'Interactive clinical calendar, doctor on-call schedules, and room assignment.' }
    ],
    caseStudy: {
      overview: 'KamAI is a comprehensive Figma UI/UX design for an Electronic Medical Records (EMR) web platform aimed at modern healthcare providers. The platform enables clinicians to manage patients, track lab results, handle billing, manage care plans, and access real-time analytics — all from a clean, professional dashboard interface. The design balances the complexity of clinical workflows with an accessible, intuitive user experience built for both administrators and healthcare staff.',
      challenge: 'Healthcare software is notorious for high cognitive load, cluttered interfaces, and dense forms that cause clinician burnout and data entry errors during high-stress medical environments.',
      solution: 'Created an accessible, trust-inspiring blue-and-white design system with clear visual hierarchy, progressive disclosure for complex medical forms, collapsible contextual sidebars, and rapid keyboard-friendly triage flows.',
      keyFeatures: [
        'Intuitive clinical dashboard with patient volume charts and urgent lab alerts',
        'Comprehensive Electronic Health Record (EHR) profile with vitals history and medication timelines',
        'Diagnostic laboratory order management and status tracking',
        'Billing, insurance claims processing, and revenue reporting module',
        'Complete interactive appointment scheduling calendar for medical staff'
      ],
      responsibilities: [
        'Designed the marketing landing page with hero section, benefits, features, and capabilities',
        'Built the login and authentication screens including password reset flow',
        'Designed the main dashboard with pending visits, lab counts, patient overview charts, and recent activity feed',
        'Created the patient management module covering patient lists, profiles, and clinical data',
        'Designed clinical staff, care management, reports, lab & orders, and calendar views',
        'Built reusable Figma components: sidebar navigation, data cards, tables, charts, and form inputs'
      ],
      architecture: [
        { title: 'Figma Atomic Design System', description: 'Modular tokenized library covering 120+ clinical components, typography styles, and accessible colors.' },
        { title: 'Healthcare Color Palette', description: 'Calming medical blue and clean white with high-contrast alert states for critical lab values.' }
      ],
      metrics: [
        { label: 'Figma Screens', value: '15+ Views' },
        { label: 'Design System', value: 'Atomic UI' },
        { label: 'Domain', value: 'Healthcare EMR' }
      ]
    }
  },
  {
    id: 'enrollment-system',
    title: 'Enrollment System — Banayabanay Campus',
    subtitle: 'Student Management & Admissions Web App',
    category: 'Full-Stack Web & Education Systems',
    typeCategory: 'fullstack',
    year: '2024',
    role: 'Full-Stack Developer',
    client: 'John Mark Lumen',
    description: 'A fully functional student enrollment and management system for Banayabanay Campus — built with vanilla HTML, CSS, and JavaScript and deployed live on Vercel.',
    image: '/img/enrollmentSystem/desktop-0.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Vercel', 'Student Management'],
    liveUrl: 'https://enrollment-system-mauve.vercel.app/',
    screenshots: [
      { title: 'Login & Staff Portal', url: '/img/enrollmentSystem/desktop-0.png', caption: 'Staff and student admission login interface with campus branding.' },
      { title: 'Student Enrollment Form', url: '/img/enrollmentSystem/desktop-1.png', caption: 'Multi-step admission intake form with personal details and course selection.' },
      { title: 'Enrolled Student Directory', url: '/img/enrollmentSystem/desktop-2.png', caption: 'Searchable directory of enrolled students with course and section filters.' },
      { title: 'Student Profile Editor', url: '/img/enrollmentSystem/desktop-3.png', caption: 'Full student profile editing modal with academic status and contact details.' },
      { title: 'Academic Year Management', url: '/img/enrollmentSystem/desktop-4.png', caption: 'Semester and school year enrollment period configuration.' },
      { title: 'Reports & Export', url: '/img/enrollmentSystem/desktop-5.png', caption: 'Printable student roster lists and enrollment summary reports.' }
    ],
    caseStudy: {
      overview: 'A client-commissioned enrollment management system built for Banayabanay Campus. The platform handles student login and authentication, enrollment processing, and student record management. Built using vanilla HTML, CSS, and JavaScript with no frameworks, the system was developed and deployed on Vercel for live access. This was a paid freelance project — the client, a school campus, needed a lightweight, easy-to-use digital enrollment solution.',
      challenge: 'The campus required a fast, zero-dependency, lightweight digital enrollment portal that could run reliably on standard web browsers without expensive server hosting or complex database maintenance.',
      solution: 'Engineered a clean vanilla JavaScript architecture with structured client-side storage, real-time input validation, responsive CSS grid layouts, and instant deployment on Vercel CDN.',
      keyFeatures: [
        'Multi-step student intake registration form with real-time validation',
        'Staff management portal for student admissions and status approval',
        'Fast search and filtering across enrolled students by year and course',
        'Print-ready student enrollment summary sheets and registration cards'
      ],
      responsibilities: [
        'Designed and developed the full login and authentication system for staff and admin users',
        'Built the student enrollment flow — intake forms, validation, and record submission',
        'Developed the student management dashboard for viewing, editing, and managing enrolled students',
        'Implemented client-side form validation and session-based authentication using JavaScript',
        'Deployed the system on Vercel for live access with cache-control headers'
      ],
      metrics: [
        { label: 'Framework Overhead', value: '0 KB (Vanilla)' },
        { label: 'Deployment', value: 'Vercel Edge' },
        { label: 'Uptime', value: '100% Live' }
      ]
    }
  },
  {
    id: 'bizcard',
    title: 'BizCard — Digital Identity & Contact Sharing',
    subtitle: 'Smart Digital Business Card & Networking Suite',
    category: 'Mobile & Tablet UI/UX Design',
    typeCategory: 'uiux',
    year: '2025',
    role: 'Assistant UI/UX Designer',
    client: 'Howard Green',
    description: 'A sleek Figma-designed platform to create, customize, and share digital business cards instantly, simplifying modern professional networking.',
    image: '/img/bizcard/mobile-0.png',
    tags: ['Figma', 'Mobile UI/UX', 'Tablet Responsive', 'Design Systems', 'Prototyping'],
    figmaUrl: 'https://www.figma.com/design/eo6TnccTbwsf6lyh8rmYdp/My-Works?node-id=2030-134463&t=TTMGGU8YUNyzrnlM-1',
    screenshots: [
      { title: 'Mobile Onboarding & Hero', url: '/img/bizcard/mobile-0.png', caption: 'Brand intro, value proposition, and quick sign-up onboarding flow.' },
      { title: 'Digital Card Customizer', url: '/img/bizcard/mobile-1.png', caption: 'Interactive card builder with custom brand colors, logos, and typography.' },
      { title: 'QR Code Sharing Screen', url: '/img/bizcard/mobile-2.png', caption: 'Instant contactless QR code sharing with wallet pass integration.' },
      { title: 'Networking Dashboard', url: '/img/bizcard/mobile-3.png', caption: 'Contact connections feed, card views counter, and engagement metrics.' },
      { title: 'Tablet Responsive Layout', url: '/img/bizcard/tablet-1.png', caption: 'Expanded dual-pane tablet view with split preview and customization controls.' },
      { title: 'Contacts Directory', url: '/img/bizcard/mobile-4.png', caption: 'Saved digital business cards with one-tap email, phone, and LinkedIn outreach.' }
    ],
    caseStudy: {
      overview: 'BizCard is a comprehensive Figma UI/UX design for a digital business card and contact management platform. The application allows users to build a personalized digital identity card, customize design layouts, colors and details, and share it instantly via QR code, link, or direct contact. The project designs both mobile and tablet interfaces, offering a seamless and modern transition of key dashboard stats, style customizations, and contact connections across screens.',
      challenge: 'Physical paper business cards are frequently lost and costly to reprint. Digital alternatives often lack personality or suffer from clunky sharing flows that hinder real-time networking.',
      solution: 'Crafted a vibrant, friction-free mobile and tablet design with a real-time card visual customizer, one-tap QR generation, contact exchange telemetry, and clean vCard export workflows.',
      keyFeatures: [
        'Real-time digital business card layout & theme customization engine',
        'Instant QR code generation and direct contactless NFC sharing workflows',
        'Interactive analytics tracking card views, link clicks, and new contacts saved',
        'Seamless dual breakpoint design optimized for both iOS/Android and iPad/tablets'
      ],
      responsibilities: [
        'Designed the complete user registration, login, and verification flows',
        'Created the digital business card creation wizard and color customization interface',
        'Designed dashboard screens to track card views, links clicked, and connections made',
        'Built tablet layout adaptations for all mobile views ensuring visual symmetry on wider screens',
        'Developed high-fidelity prototypes in Figma to simulate sharing and card previews'
      ],
      metrics: [
        { label: 'Platform Support', value: 'Mobile & Tablet' },
        { label: 'Figma Screens', value: '34+ Screens' },
        { label: 'Design Tokens', value: 'Color & Type' }
      ]
    }
  },
  {
    id: 'champion',
    title: 'Champion — Refer & Earn Mobile App',
    subtitle: 'Referral Marketing & Gamified Rewards App',
    category: 'Mobile & Tablet UI/UX Design',
    typeCategory: 'uiux',
    year: '2025',
    role: 'Assistant UI/UX Designer',
    client: 'Howard Green',
    description: 'A Figma-designed mobile app for Champion — a refer-and-earn platform where users invite friends, track referrals, and earn real money rewards.',
    image: '/img/champion/mobile-0.png',
    tags: ['Figma', 'Mobile UI/UX', 'Gamification', 'Design Systems', 'Tablet UI'],
    figmaUrl: 'https://www.figma.com/design/eo6TnccTbwsf6lyh8rmYdp/My-Works?node-id=2030-134463&t=TTMGGU8YUNyzrnlM-1',
    screenshots: [
      { title: 'Onboarding & Splash', url: '/img/champion/mobile-0.png', caption: 'Bold orange visual onboarding introducing earning tiers and referral mechanics.' },
      { title: 'Earnings Dashboard', url: '/img/champion/mobile-1.png', caption: 'Total revenue dashboard with real-time referral count and payout status.' },
      { title: 'Referral Link Generator', url: '/img/champion/mobile-2.png', caption: 'One-tap link copying, QR code sharing, and social invite shortcuts.' },
      { title: 'Leaderboards & Contests', url: '/img/champion/mobile-3.png', caption: 'Gamified contest rankings with prize pool countdowns and champion badges.' },
      { title: 'Tablet Responsive View', url: '/img/champion/tablet-1.png', caption: 'Tablet landscape view with multi-column analytics and referee breakdown.' },
      { title: 'Wallet & Payouts', url: '/img/champion/mobile-4.png', caption: 'Instant bank transfer and e-wallet cashout interface.' }
    ],
    caseStudy: {
      overview: 'Champion is a Figma UI/UX design for a referral-based earnings app. Users sign up, refer friends via a unique link, and earn money for every successful referral. The design covers the full user journey — from onboarding and sign-in through the dashboard, referral tracking, contest participation, and payout management. Both mobile and tablet breakpoints were designed, giving the app a consistent, bold experience across devices.',
      challenge: 'Referral apps often suffer from low user retention and confusing reward calculations that leave users unsure of their earnings.',
      solution: 'Introduced an engaging gamified interface featuring bold orange brand aesthetics, transparent earnings calculations, leaderboard rankings, and an effortless 3-tap cashout flow.',
      keyFeatures: [
        'Real-time earnings meter displaying validated and pending referral bonuses',
        'Gamified monthly contests with tiered reward leaderboards',
        'One-touch social sharing for WhatsApp, Messenger, and SMS invitations',
        'Adaptive tablet layout ensuring visual harmony across larger displays'
      ],
      responsibilities: [
        'Designed the full onboarding, sign-up, and sign-in flow for the mobile app',
        'Built the user dashboard showing total earnings, referral stats, and transaction history',
        'Designed the referral flow: unique link sharing, champions list, and referral status tracking',
        'Created contest and rewards screens to encourage ongoing engagement',
        'Designed a tablet layout adapting all key screens to larger screen sizes'
      ],
      metrics: [
        { label: 'Device Support', value: 'Mobile & Tablet' },
        { label: 'Figma Screens', value: '20+ Mockups' },
        { label: 'Brand Identity', value: 'Vibrant Orange' }
      ]
    }
  },
  {
    id: 'barangay-document-system',
    title: 'Barangay Document Request System',
    subtitle: 'E-Government & Civic Services Platform',
    category: 'E-Government & Civic UI/UX',
    typeCategory: 'uiux',
    year: '2025',
    role: 'UI/UX Designer',
    client: 'Cherry Mae Medija Mandalano',
    description: 'A Figma-designed online document request system for a barangay office, enabling residents to request official documents digitally — fast, secure, and hassle-free.',
    image: '/img/baranngay/baranggay-0.png',
    tags: ['Figma', 'UI/UX Design', 'E-Government', 'Civic Tech', 'Design Systems'],
    figmaUrl: 'https://www.figma.com/design/RpRTps7Wz9yCFKR0ep59uy/Library-Management-System?node-id=0-1&t=lRgLq1p43tjDp5Tq-1',
    screenshots: [
      { title: 'Resident Portal Home', url: '/img/baranngay/baranggay-0.png', caption: 'Citizen portal showcasing available clearances, office hours, and announcements.' },
      { title: 'Document Request Flow', url: '/img/baranngay/baranggay-1.png', caption: 'Step-by-step document selection: Barangay Clearance, Indigency, and Residency Certificates.' },
      { title: 'Requirement Upload', url: '/img/baranngay/baranggay-2.png', caption: 'Valid ID submission and required supporting documentation checklist.' },
      { title: 'Payment & Pickup Slot', url: '/img/baranngay/baranggay-3.png', caption: 'Digital payment option selection and scheduled barangay hall pickup appointment.' },
      { title: 'Request Status Tracker', url: '/img/baranngay/baranggay-4.png', caption: 'Real-time timeline tracking document processing from review to printing and release.' },
      { title: 'Admin Officer Portal', url: '/img/baranngay/baranggay-5.png', caption: 'Barangay staff dashboard for validating applicant credentials and approving clearances.' }
    ],
    caseStudy: {
      overview: 'A complete UI/UX design for a Barangay Online Document Request System, created in Figma. The system serves both residents and barangay administrators — residents can log in, request official documents (barangay clearance, certificates, etc.), track request status, and manage their accounts, while admins can process and approve requests. The design prioritizes clarity, accessibility, and ease of use for a government civic services context.',
      challenge: 'Manual in-person queues at barangay halls result in long wait times, lost paper applications, and heavy administrative burdens on local government staff.',
      solution: 'Designed an intuitive online self-service civic portal with accessible high-contrast typography, clear step-by-step application flows, real-time SMS status updates, and a streamlined administrative verification dashboard.',
      keyFeatures: [
        'Step-by-step document application flow for Barangay Clearance, Indigency, and Residency',
        'Digital payment and scheduled pickup time slot selector to eliminate physical queues',
        'Transparent application tracking with status indicators (Pending, Approved, Ready for Pickup)',
        'Barangay Administrator Control Center for applicant validation and document approval'
      ],
      responsibilities: [
        'Designed the full resident and admin portal UI flows from login to document completion',
        'Created an accessible design system with a civic orange-and-white color palette',
        'Designed the resident dashboard with document request cards and announcement boards',
        'Designed the admin panel for reviewing, processing, and approving document requests',
        'Built reusable Figma components: form fields, status badges, and navigation icons'
      ],
      metrics: [
        { label: 'Citizen Accessibility', value: '100% Mobile Ready' },
        { label: 'Figma Screens', value: '11+ Views' },
        { label: 'Domain', value: 'E-Government' }
      ]
    }
  },
  {
    id: 'barber-shop',
    title: 'Barber Shop — Haircut & Grooming Booking Platform',
    subtitle: 'Barber Booking & Appointment Scheduling App',
    category: 'Mobile & Web UI/UX Design',
    typeCategory: 'uiux',
    year: '2025',
    role: 'UI/UX Designer',
    client: 'Louweben Maquizo',
    description: 'A sleek Figma design for a barber booking platform, covering onboarding, service browsing, barber selection, and appointment scheduling.',
    image: '/img/barber/barbershop-0.png',
    tags: ['Figma', 'UI/UX Design', 'Booking Platform', 'Mobile App', 'Prototyping'],
    figmaUrl: 'https://www.figma.com/design/eo6TnccTbwsf6lyh8rmYdp/Untitled?node-id=2015-179&t=xOKo05UFVQROldyt-1',
    screenshots: [
      { title: 'Onboarding & Splash', url: '/img/barber/barbershop-0.png', caption: 'Editorial style splash screen introducing modern grooming services.' },
      { title: 'Services Catalog', url: '/img/barber/barbershop-1.png', caption: 'Visual service menu covering classic fades, beard sculpting, and hair treatments.' },
      { title: 'Barber Profile & Portfolio', url: '/img/barber/barbershop-2.png', caption: 'Barber showcase with past haircut photos, customer ratings, and specialty cuts.' },
      { title: 'Interactive Calendar', url: '/img/barber/barbershop-3.png', caption: 'Time slot selection and real-time chair availability.' },
      { title: 'Booking Confirmation', url: '/img/barber/barbershop-4.png', caption: 'Appointment receipt with calendar sync and directions.' },
      { title: 'Customer Profile', url: '/img/barber/barbershop-5.png', caption: 'Haircut preferences, booking history, and loyalty rewards.' }
    ],
    caseStudy: {
      overview: 'A complete UI/UX design for a haircut and grooming booking app, designed entirely in Figma. The project covers the full customer journey — from sign up and login, through browsing services and barbers, to booking and managing appointments — with a consistent visual system built around reusable components and a light, editorial style.',
      challenge: 'Walk-in barbershop models lead to unpredictable customer wait times and lost bookings during peak salon hours.',
      solution: 'Created an editorial, premium booking experience in Figma where clients choose their preferred barber, view hair portfolios, select grooming packages, and reserve exact time slots in seconds.',
      keyFeatures: [
        'Interactive barber profile showcase with photo portfolios and ratings',
        'Service package selection with pricing and estimated service duration',
        'Real-time date and time slot calendar picker with live chair availability',
        'Clean appointment management with reminder notifications and Google Calendar sync'
      ],
      responsibilities: [
        'Designed the end-to-end user flow, from onboarding and login to booking confirmation',
        'Built a reusable Figma component library (buttons, inputs, cards, nav) for consistent styling',
        'Created high-fidelity mockups for both mobile and desktop breakpoints',
        'Designed the service catalog, barber profiles, and appointment scheduling screens',
        'Established a visual style guide covering typography, color palette, and spacing tokens'
      ],
      metrics: [
        { label: 'Design System', value: 'Editorial UI' },
        { label: 'Figma Screens', value: '11+ Mockups' },
        { label: 'Platform', value: 'Mobile First' }
      ]
    }
  },
  {
    id: 'camillians-landing-page',
    title: 'Camillians HHS — Home Health Services Landing Page',
    subtitle: 'Healthcare Services Marketing Website',
    category: 'Web Development & Healthcare',
    typeCategory: 'fullstack',
    year: '2025',
    role: 'Web Developer',
    client: 'Dr. Magdalena Tollea',
    description: 'A professional landing page for Camillians Home Health Services, LLC — showcasing their in-home care services, skilled nursing, physical therapy, and client intake channels.',
    image: '/img/CamilliansLandingPage/desktop-0.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'Healthcare'],
    githubUrl: 'https://github.com/XeinQt/camilliansssh',
    screenshots: [
      { title: 'Hero & Mission', url: '/img/CamilliansLandingPage/desktop-0.png', caption: 'Full-width hero section highlighting compassionate home healthcare with prominent CTA.' },
      { title: 'Core Services Grid', url: '/img/CamilliansLandingPage/desktop-1.png', caption: 'In-home skilled nursing, physical therapy, and personalized caregiver plans.' },
      { title: 'Why Choose Camillians', url: '/img/CamilliansLandingPage/desktop-2.png', caption: 'Accreditation badges, certified staff qualifications, and patient testimonials.' },
      { title: 'About & Care Philosophy', url: '/img/CamilliansLandingPage/desktop-3.png', caption: 'Company history, leadership team, and patient-first values.' },
      { title: 'Careers & Recruitment', url: '/img/CamilliansLandingPage/desktop-4.png', caption: 'Nurse and caregiver application portal with career benefits.' },
      { title: 'Contact & Location', url: '/img/CamilliansLandingPage/desktop-5.png', caption: 'Inquiry forms, direct phone/fax lines, and service area map.' }
    ],
    caseStudy: {
      overview: 'Camillians Home Health Services is a full-featured marketing landing page built for a US-based home healthcare company. The site presents their core services — including skilled nursing, physical therapy, and compassionate in-home care — in a clean, professional layout designed to convert visitors into clients. Key sections include a hero with a call-to-action, services overview, why choose Camillians, about, careers, and a contact page.',
      challenge: 'Families seeking in-home healthcare require instant clarity, reassurance, easy navigation, and clear points of contact during difficult medical transitions.',
      solution: 'Developed a high-trust responsive website featuring accessible typography, clear care service cards, one-click calling, and structured patient inquiry forms.',
      keyFeatures: [
        'High-converting hero section with emergency and care consultation hotline buttons',
        'Structured healthcare services catalog with clinical descriptions and eligibility guides',
        'Staff recruitment section for registered nurses and physical therapists',
        'Fully responsive layout ensuring seamless viewing across smartphones and desktops'
      ],
      responsibilities: [
        'Designed and developed the full landing page layout across all sections: hero, services, about, and contact',
        'Built a multi-page site structure with a consistent nav including phone, fax, and social media links',
        'Implemented a hero section with a full-width background image and prominent CTA',
        'Styled a responsive contact page with business contact details and inquiry forms'
      ],
      metrics: [
        { label: 'Responsive Design', value: '100% Mobile & PC' },
        { label: 'Architecture', value: 'Semantic HTML5' },
        { label: 'SEO & Performance', value: 'Fast Static Load' }
      ]
    }
  }
];
