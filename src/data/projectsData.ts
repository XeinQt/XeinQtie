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
    description: 'An enterprise-grade institutional financial management, dues collection, and student fiscal transparency platform designed for Supreme Student Councils, academic treasurers, and university finance committees, actively used by 1,000+ students.',
    image: '/kaban-cover.jpg',
    tags: [
      'Next.js 14',
      'React 18',
      'TypeScript 5',
      'Tailwind CSS 3',
      'Supabase & PostgreSQL',
      'Cloudflare Turnstile',
      '3-Factor Auth (3FA)',
      'SheetJS & PapaParse',
      'Vercel'
    ],
    liveUrl: 'https://treasurer-system.vercel.app/',
    githubUrl: 'https://github.com/XeinQt/XeinQtie',
    screenshots: [
      {
        title: 'Cover Showcase',
        url: '/kaban-cover.jpg',
        caption: 'KABAN Student Council Financial Hub official cover showcase highlighting cash flow telemetry, ₱184,520 collection turnout, and 3FA security.'
      },
      {
        title: 'System Overview',
        url: '/kaban-system-overview.png',
        caption: 'A complete visual overview of KABAN\'s secure officer access, student payment lookup, treasury records, and transparency-focused features.'
      },
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
      // 1. Core Framework & Language
      { layer: '1. Core Framework', tech: 'Next.js (v14.2.15)', purpose: 'Full-stack React framework utilizing modern App Router (/app), Edge API routes, and Edge Middleware.' },
      { layer: '1. UI Library', tech: 'React (v18.3.1)', purpose: 'Declarative UI component library utilizing modern hooks (useState, useEffect, useMemo, useRef).' },
      { layer: '1. Language', tech: 'TypeScript (v5.6.3)', purpose: 'Strict static type checking across data entities, API responses, and UI props.' },

      // 2. Styling & Design System
      { layer: '2. Styling & Design', tech: 'Tailwind CSS (v3.4.14)', purpose: 'Utility-first CSS framework configured with custom tokens in tailwind.config.js.' },
      { layer: '2. CSS Processing', tech: 'PostCSS & Autoprefixer', purpose: 'CSS processing and automated vendor prefixing.' },
      { layer: '2. Icons & Glyphs', tech: 'Lucide React (v0.454.0)', purpose: 'Clean vector icon library used across dashboards and modal dialogs.' },
      { layer: '2. Class Merging', tech: 'clsx & tailwind-merge', purpose: 'Conditional styling and conflict-free class merging.' },
      { layer: '2. Theme Engine', tech: 'Custom Dual Theme', purpose: 'Support for Light ("Warm Paper") and Dark ("Obsidian Night") palettes with amber/gold accents.' },

      // 3. Backend, Database & Real-Time Sync
      { layer: '3. Cloud Database', tech: 'Supabase & PostgreSQL 15+', purpose: 'Cloud database-as-a-service providing relational data models, foreign keys, and ACID transactions.' },
      { layer: '3. Client Driver', tech: '@supabase/supabase-js (v2.112.3)', purpose: 'JavaScript client for PostgREST API operations and WebSocket subscriptions.' },
      { layer: '3. Real-Time Streaming', tech: 'Supabase Realtime', purpose: 'WebSocket channels (postgres_changes) enabling instant synchronization of payments, audit logs, and student balances across multiple cashier screens.' },
      { layer: '3. Dual-Engine Cache', tech: 'Hybrid Dual-Engine Architecture', purpose: 'Custom Stale-While-Revalidate (SWR) in-memory cache and localStorage fallback layer (src/lib/db.ts, src/lib/storage.ts) providing offline tolerance and zero-latency first paint.' },

      // 4. Security, Authentication & Anti-Bot
      { layer: '4. Anti-Bot Shield', tech: 'Cloudflare Turnstile', purpose: 'Cryptographic anti-bot shield protecting admin logins via the /api/verify-turnstile route.' },
      { layer: '4. Multi-Factor Auth', tech: '3-Factor Authentication (3FA)', purpose: 'Salted SHA-256 Web Crypto password + time-limited numeric OTP code + 6-digit secondary PIN with account lockout protection.' },
      { layer: '4. Session Cryptography', tech: 'Stateless HMAC-SHA256 Tokens', purpose: 'Cryptographic session tokens managed in src/lib/security.ts.' },
      { layer: '4. Edge Protection', tech: 'Edge Middleware', purpose: 'src/middleware.ts protects administrative routes at the edge before rendering.' },
      { layer: '4. Concurrency Defense', tech: 'Rate Limiting & Concurrency Guards', purpose: 'In-memory rate limiting (src/lib/rateLimiter.ts) and balance lock checks to prevent double-charging.' },

      // 5. Data Processing & File Handling
      { layer: '5. Excel Processing', tech: 'SheetJS (xlsx) (v0.18.5)', purpose: 'Parses Excel spreadsheets (.xlsx, .xls) on student rosters for bulk importing.' },
      { layer: '5. CSV & Reporting', tech: 'PapaParse (v5.4.1)', purpose: 'High-speed browser CSV parsing and report export generation.' },
      { layer: '5. Image & QR Engine', tech: 'HTML5 Canvas API', purpose: 'In-browser image compression and optimization for receipt attachments, as well as QR code generation/scanning.' },
      { layer: '5. Print Engine', tech: 'Print Styling Engine (@media print)', purpose: 'Custom CSS formatting for printable physical receipts and PDF summaries.' },

      // 6. Hosting & Monitoring
      { layer: '6. Hosting & Edge', tech: 'Vercel', purpose: 'Global Edge Network hosting the Next.js production build and serverless functions.' },
      { layer: '6. Telemetry', tech: '@vercel/analytics (v2.0.1)', purpose: 'Privacy-friendly real-time traffic and performance monitoring.' }
    ],
    caseStudy: {
      overview: 'KABAN is an enterprise-grade institutional financial management, dues collection, and student fiscal transparency platform designed for Supreme Student Councils, academic treasurers, and university finance committees, actively serving 1,000+ students. It bridges administrative cashier workflows with a 100% open public ledger to foster complete student trust.',
      challenge: 'University student councils routinely face difficulties with manual paper ledgers, fragmented spreadsheet records, delayed expense auditing, unauthorized data tampering, and lack of trust from the student body regarding fee utilization.',
      solution: 'Engineered an automated full-stack platform featuring 3-Factor Authentication (3FA) for officers, PL/pgSQL database triggers for race-condition-free multi-cashier collections, automated receipt generation, and an open public transparency portal for real-time accountability.',
      keyFeatures: [
        'Active campus adoption serving 1,000+ students with instant ID dues lookup',
        'Cloudflare Turnstile cryptographic bot protection & 3FA entry defense',
        'Real-time Treasury Dashboard with live Inflow, Outflow, and Net Period Flow analytics',
        'Interactive financial trend charting (Fee Collections vs Disbursed Expenses)',
        'Public Transparency Summary displaying itemized purchases, project budget plans, and council reserves',
        '8-Digit Student ID Lookup (YYYY-XXXX) with fee breakdown and verifiable digital receipts',
        'Drag-and-drop CSV / Excel spreadsheet batch student ingestion engine (SheetJS & PapaParse)',
        'Dual-theme accessibility (Obsidian Dark Mode & Warm Paper Light Mode)',
        'Step-by-step interactive User Guide and visual onboarding manual'
      ],
      securityHighlights: [
        'Cloudflare Turnstile bot protection defending login endpoints via /api/verify-turnstile',
        '3-Factor Authentication (3FA) with Gmail OTP and encrypted 6-digit officer PIN',
        'Salted SHA-256 Web Crypto API password hashing and HMAC-SHA256 session token verification',
        'Next.js Edge Middleware route guards protecting /admin/* before server rendering',
        'In-memory rate limiting and balance lock checks preventing double-charging across cashier desks'
      ],
      architecture: [
        {
          title: 'Next.js 14.2 App Router & Edge Runtime',
          description: 'Leverages React Server Components for near-instant cold loads, Edge API routes, and edge-cached financial summaries.'
        },
        {
          title: 'Supabase Realtime & PostgreSQL 15+',
          description: 'Enterprise relational database with PL/pgSQL balance calculation triggers and sub-50ms WebSocket change feeds.'
        },
        {
          title: 'Hybrid Dual-Engine Architecture',
          description: 'Custom Stale-While-Revalidate (SWR) in-memory cache with localStorage fallback for instant first paint and offline resilience.'
        },
        {
          title: 'Cloudflare Turnstile & 3-Factor Authentication',
          description: 'Layered security with Turnstile bot shield, Web Crypto SHA-256 password hashing, timed Gmail OTP, and 6-digit PIN.'
        },
        {
          title: 'Client-Side Spreadsheet & Canvas Processing',
          description: 'SheetJS and PapaParse for batch Excel/CSV imports alongside HTML5 Canvas for receipt compression and QR scanning.'
        },
        {
          title: 'Dual Theme & Vercel Edge Hosting',
          description: 'Custom Tailwind CSS 3 design system (Warm Paper & Obsidian Night) hosted on Vercel with real-time analytics.'
        }
      ],
      metrics: [
        { label: 'Active User Base', value: '1,000+ Students' },
        { label: 'Fiscal Transparency', value: '100% Public' },
        { label: 'Auditing Speedup', value: '12x Faster' },
        { label: 'Security Standard', value: '3FA Protected' }
      ]
    }
  },
  {
    id: 'checkpoint',
    title: 'Checkpoint — Biometric Campus Attendance & Event Access System',
    subtitle: 'Dual-Platform Biometric Attendance Ecosystem',
    category: 'Computer Vision & Biometric Campus Tech',
    typeCategory: 'fullstack',
    year: '2026',
    role: 'Lead Full-Stack Developer & Systems Architect',
    authors: 'Archie Boiser and Rico Alentijo',
    description: 'A dual-platform biometric attendance ecosystem combining a React 19 Enterprise Web Admin Portal, an Expo React Native mobile terminal with magnetic spring face tracking, and a GPU-accelerated ArcFace + FAISS facial recognition microservice.',
    image: '/img/chikpoint/checkpoint-cover.jpg',
    tags: [
      'React 19',
      'React Native & Expo',
      'Python & Flask',
      'ArcFace & FAISS',
      'OpenCV & RetinaFace',
      'Firebase Firestore',
      'Tailwind CSS',
      'TypeScript',
      'jsPDF & SheetJS'
    ],
    screenshots: [
      {
        title: 'Cover Showcase',
        url: '/img/chikpoint/checkpoint-cover.jpg',
        caption: 'Checkpoint Campus Biometric Attendance System official cover showcase highlighting face scanner terminal telemetry, 98.4% accuracy, ~25ms LAN latency, and 512-D vector size.'
      },
      {
        title: 'Executive Analytics Dashboard',
        url: '/img/chikpoint/web2.png',
        caption: 'Real-time KPI metrics tracking Total Courses, Students, Enrolled Face Templates, Active Sub-Admins, Live Events, and System Accuracy (98.4%).'
      },
      {
        title: 'Mobile Scanner with Spring Tracking',
        url: '/img/chikpoint/expo4.jpg',
        caption: 'Sub-Admin mobile terminal running CameraX 60FPS biometric scans with critically damped spring face-tracking bounding boxes and Time-In/Time-Out modes.'
      },
      {
        title: '5-Angle Biometric Face Enrollment',
        url: '/img/chikpoint/web5.png',
        caption: 'Multi-angle 3D biometric sequence (Frontal, Left, Right, Up, Down) extracting 512-D ArcFace vectors indexed into FAISS for maximum reliability.'
      },
      {
        title: 'Desktop Kiosk Face Scanner',
        url: '/img/chikpoint/web8.png',
        caption: 'High-volume entrance kiosk scanner utilizing MediaPipe facial landmark tracking and sub-millisecond ArcFace LAN vector matching.'
      },
      {
        title: 'Event Management & Window Rules',
        url: '/img/chikpoint/web7.png',
        caption: 'Campus event scheduler with strict attendance windows (Time-In Only, Dual Mode, Time-Out Only) and automated closure rules.'
      },
      {
        title: 'Master Attendance Ledger',
        url: '/img/chikpoint/web9.png',
        caption: 'Live centralized attendance feed detailing attendee identities, timestamps, verification methods, and gate steward signatures.'
      },
      {
        title: 'Multi-Format Attendance Reports',
        url: '/img/chikpoint/web10.png',
        caption: 'Filtered reporting engine exporting official rosters into presentation-ready PDF Documents (.pdf), Excel (.xlsx), and CSV files.'
      },
      {
        title: 'Student Directory & Biometric Profiles',
        url: '/img/chikpoint/web4.png',
        caption: 'Searchable student directory managing academic cohorts, enrollment status badges (Face Enrolled vs Pending), and student profiles.'
      },
      {
        title: 'Mobile Assigned Events Hub',
        url: '/img/chikpoint/expo3.jpg',
        caption: 'Sub-admin event dashboard displaying assigned venue schedules, active status indicators, and automatic attendance window lockouts.'
      },
      {
        title: 'Mobile Live Recent Scans Feed',
        url: '/img/chikpoint/expo5.jpg',
        caption: 'Real-time mobile audit ledger displaying attendee details, degree programs, timestamps, and operator signatures.'
      },
      {
        title: 'Sub-Admin RBAC Provisioning',
        url: '/img/chikpoint/web6.png',
        caption: 'Role-based delegation assigning event coordinators and gate stewards to specific event venues with credential management.'
      },
      {
        title: 'Security Audit Logs',
        url: '/img/chikpoint/web11.png',
        caption: 'Immutable tamper-proof audit trail logging every admin action, login, biometric re-enrollment, and scan override with timestamps and IP.'
      },
      {
        title: 'Zero-Config LAN Discovery',
        url: '/img/chikpoint/expo6.jpg',
        caption: 'Direct LAN setup pairing phone terminal to the host inference microservice with automated health-check latency verification.'
      },
      {
        title: 'Unified Authentication Portal',
        url: '/img/chikpoint/web1.png',
        caption: 'Secure role-based authentication gateway for administrators and event gate stewards with public student lookup.'
      }
    ],
    modules: [
      {
        title: 'Desktop Web Administration Portal',
        route: '/admin/*',
        features: [
          'Executive Analytics Dashboard: Real-time telemetry monitoring student enrollment, active sub-admins, live attendance, and 98.4% model accuracy.',
          'Multi-Angle Biometric Enrollment: 5-angle capture (Frontal, Left, Right, Up, Down) extracting 512-D ArcFace vectors indexed into FAISS.',
          'Academic Program & Student Directory: Cohort tracking across BSIT, BSBA, BSA with enrollment badges and biometric status flags.',
          'Sub-Admin Role Delegation: Granular RBAC provisioning assigning specific campus venues and events to gate stewards.',
          'Event Scheduler & Automated Cutoffs: Configurable attendance rules (Time-In Only, Dual Mode, Time-Out) with strict window lockouts.',
          'Desktop Kiosk Scanner Booth: MediaPipe landmark detection + ArcFace vector matching for high-throughput station scanning.',
          'Multi-Format Export Engine: 1-click generation of PDF rosters, Excel spreadsheets (.xlsx), and CSV reports via jsPDF & SheetJS.',
          'Immutable Security Audit Ledger: Tamper-proof audit logging of logins, overrides, re-enrollments, and administrative adjustments.'
        ]
      },
      {
        title: 'Sub-Admin Mobile Terminal',
        route: 'mobile://terminal',
        features: [
          'Sub-Admin Gate Authentication: Secure credential login restricting scanning access strictly to authorized event coordinators.',
          'Zero-Config Direct LAN Discovery: Wi-Fi host pairing with sub-25ms frame transfer latency and automated health checks.',
          'Assigned Events Hub: Filters venue access based on administrator assignments with automated time window enforcement.',
          'CameraX 60FPS Continuous Scanning Loop: High-throughput frame streaming with 0.55-quality upright JPEG encoding and 35ms breather cycle.',
          'Critically Damped Spring Face Tracking: Spring physics (tension: 170, friction: 18) and low-pass deadband filter eliminating jitter.',
          'Segmented Mode & Live Stats: One-tap toggling between [ Time In ] and [ Time Out ] with instant PRESENT and TOTAL counters.',
          'Live Recent Scans Feed: Real-time ledger of verified attendees with student IDs, timestamps, and operator audit stamps.',
          'Anti-Spoofing & Liveness Guard: Silent-Face disparity and texture analysis rejecting printed photos and video replay attacks.'
        ]
      },
      {
        title: 'Biometric Inference Microservice',
        route: 'lan://localhost:5001',
        features: [
          'RetinaFace Detection: High-precision face bounding box extraction, landmark alignment, and multi-face parsing.',
          'ArcFace Buffalo_L Embeddings: 512-dimensional L2-normalized deep biometric vector extraction with high inter-class variance.',
          'FAISS Cosine Similarity Search: Sub-millisecond vector indexing across thousands of enrolled student embeddings.',
          'Anti-Spoofing & Liveness Classifier: Silent-Face CNN model evaluating texture artifacts to defeat digital replay attacks.',
          'In-Memory Student Cache: Direct zero-delay memory cache of student profiles eliminating redundant database roundtrips.'
        ]
      }
    ],
    techStackTable: [
      { layer: '1. Web Frontend Portal', tech: 'React 19 & Vite (v6.0)', purpose: 'Modern declarative desktop administration dashboard with instant HMR and high-performance bundle optimization.' },
      { layer: '1. Mobile Scanning App', tech: 'React Native (v0.86) & Expo 57', purpose: 'Cross-platform native mobile scanning terminal utilizing Expo Camera (CameraX) and Reanimated.' },
      { layer: '1. Programming Languages', tech: 'TypeScript & Python 3.10', purpose: 'Strict static type safety across web/mobile clients paired with Python for biometric and computer vision microservices.' },
      { layer: '2. Styling & Design System', tech: 'Tailwind CSS & Lucide React', purpose: 'Utility-first CSS styling with monochrome/zinc aesthetic, high-contrast dark mode, and accessible controls.' },
      { layer: '3. Biometric Deep Learning', tech: 'InsightFace (ArcFace Buffalo_L)', purpose: 'Deep convolutional network generating 512-dimensional facial recognition vector embeddings with angular margin loss.' },
      { layer: '3. Face Detection & Alignment', tech: 'RetinaFace', purpose: 'Single-stage multi-task face detection identifying bounding boxes and 5-point facial landmarks.' },
      { layer: '3. Vector Similarity Search', tech: 'FAISS Vector Indexing', purpose: 'Sub-millisecond cosine vector similarity indexing and nearest-neighbor search across student biometric templates.' },
      { layer: '3. Anti-Spoofing & Liveness', tech: 'Silent-Face Anti-Spoofing CNN', purpose: 'Fourier spectrum and texture artifact analysis classifying authentic live humans vs printed photos or screen replays.' },
      { layer: '3. Computer Vision & Frames', tech: 'OpenCV (cv2)', purpose: 'Image frame decoding, aspect ratio transforms, BGR-to-RGB conversion, and normalization.' },
      { layer: '4. Microservice Backend', tech: 'Python Flask & Gunicorn', purpose: 'Lightweight REST microservice serving high-speed /scan-group and enrollment endpoints over local LAN Wi-Fi.' },
      { layer: '4. Cloud Database', tech: 'Firebase Cloud Firestore', purpose: 'Real-time NoSQL document synchronization between desktop admin and mobile gate terminals with live push listeners.' },
      { layer: '4. Mobile Authentication', tech: 'Firebase Auth & AsyncStorage', purpose: 'Role-based access control segmenting Super Admins and event Sub-Admins with persisted session state.' },
      { layer: '5. Animation & Physics', tech: 'React Native Animated Springs', purpose: 'Critically damped spring physics (tension: 170, friction: 18) for magnetic bounding box face tracking.' },
      { layer: '5. Reporting & Document Export', tech: 'jsPDF & SheetJS (xlsx)', purpose: 'Client-side export generating official attendance rosters in presentation-ready PDF, Excel (.xlsx), and CSV.' },
      { layer: '6. Local Networking', tech: 'Direct LAN Wi-Fi (HTTP REST)', purpose: 'Sub-35ms frame delivery between phone cameras and the host inference service with AbortController timeout guards.' }
    ],
    caseStudy: {
      overview: 'Checkpoint is a biometric attendance and event access ecosystem engineered to eliminate proxy check-ins, barcode counterfeiting, and gate congestion across campus venues. It seamlessly pairs an enterprise desktop web administration portal (React 19 + Vite + Tailwind CSS) with a dedicated sub-admin mobile scanning terminal (React Native + Expo) and a GPU-accelerated facial recognition microservice (Python + ArcFace + FAISS).',
      challenge: 'Campus events and university auditoriums typically rely on manual paper rosters, barcode scanners, or student ID tap cards. These traditional methods cause massive gate bottlenecks, proxy check-ins, counterfeit barcodes, and fragmented post-event reporting that requires days of manual auditing.',
      solution: 'Architected an end-to-end distributed system separating administrative governance from high-speed entrance scanning. Administrators manage academic programs, enroll 5-angle biometric templates, schedule events with strict attendance windows, and export compliance reports on the desktop web portal. Sub-admins use a lightweight Expo mobile terminal that streams camera frames over direct LAN Wi-Fi to a local ArcFace + FAISS microservice, identifying attendees in sub-130ms cycles with magnetic bounding box tracking and anti-spoofing protection.',
      keyFeatures: [
        'Dual-platform ecosystem: Desktop Web Admin (React 19) + Sub-Admin Mobile Gate Terminal (Expo / React Native)',
        'Biometric Inference pipeline: RetinaFace face detection + ArcFace 512-D vector embeddings + FAISS similarity search',
        '5-Angle Biometric Enrollment sequence (Frontal, Left, Right, Up, Down) for rock-solid recognition in varying campus lighting',
        'High-FPS continuous camera scanning loop (~7 FPS, sub-130ms loop cycle latency) with CameraX viewport mapping',
        'Critically damped spring bounding box tracking (tension: 170, friction: 18) with deadband low-pass jitter filtering',
        'Anti-spoofing & liveness verification via Silent-Face CNN to prevent printed photo and phone replay bypasses',
        'Assigned Events Hub with automated attendance window rules (Time-In Only, Dual Mode, Time-Out) and automatic cutoff lockouts',
        'Real-time multi-device synchronization via Firebase Firestore for instant dashboard attendance updates',
        '1-click report generation exporting official rosters into presentation-ready PDF, Excel (.xlsx), and CSV files',
        'Tamper-proof security audit log tracking administrative logins, student registrations, and attendance overrides'
      ],
      securityHighlights: [
        'Biometric Vector Privacy: Raw facial photos are immediately converted to 512-D numerical embeddings and never stored permanently on disk',
        'Anti-Spoofing & Liveness Guard: Silent-Face deep learning model detects pixel disparity and screen reflections to block photo spoofing',
        'Strict Window Enforcement: Automatic scanner locking when scheduled event cutoffs pass to prevent unauthorized retroactive logs',
        'Role-Based Access Control (RBAC): Strict segregation of Super Admin configuration privileges and Sub-Admin event scanning rights',
        'Zero-Data Exposure LAN Pipeline: Face inference runs over direct local Wi-Fi, keeping high-frequency video frames off public cloud networks'
      ],
      architecture: [
        {
          title: 'Distributed Dual-Platform Governance',
          description: 'Separation of concerns between desktop administration (React 19) for course/event management and mobile gate terminals (Expo) for rapid entry scanning.'
        },
        {
          title: 'Python ArcFace + FAISS Biometric Microservice',
          description: 'Sub-millisecond cosine vector similarity matching across 512-dimensional embeddings extracted by ArcFace Buffalo_L model.'
        },
        {
          title: 'Chained High-FPS Mobile Scanning Loop',
          description: 'Self-triggering camera loop running at ~7 FPS with 0.55-quality upright JPEG encoding and 35ms breathers, delivering ~130ms end-to-end frame latency.'
        },
        {
          title: 'Critically Damped Spring Face Tracking',
          description: 'Magnetic bounding box animation powered by spring physics (tension: 170, friction: 18) and deadband filtering for fluid, wobble-free face following.'
        },
        {
          title: 'Real-Time Cloud Synchronization',
          description: 'Firebase Cloud Firestore listeners instantly propagate gate check-ins to the administrator dashboard and master audit ledger.'
        },
        {
          title: 'Multi-Format Academic Export Engine',
          description: 'jsPDF and SheetJS generate print-ready student clearance documents, Excel summaries, and raw CSV archives with one click.'
        }
      ],
      metrics: [
        { label: 'Recognition Accuracy', value: '98.4%' },
        { label: 'Inference Latency', value: '< 130ms' },
        { label: 'Face Vectors / Student', value: '5-Angle 512-D' },
        { label: 'Platform Support', value: 'Web + Mobile' }
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
  }
];
