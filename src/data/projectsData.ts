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
  route: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  authors?: string;
  screenshots?: ProjectScreenshot[];
  techStackTable?: TechStackItem[];
  modules?: FunctionalModule[];
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    keyFeatures: string[];
    securityHighlights?: string[];
    architecture: {
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
    category: 'Institutional Fintech & Fiscal Transparency',
    year: '2026',
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
    liveUrl: 'https://kaban-preview.vercel.app',
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
    id: 'cloudzone',
    title: 'CloudZone POS — Multi-Device Retail System',
    category: 'Mobile Fintech & Distributed Systems',
    year: '2026',
    description: 'A production-ready mobile POS system engineered for multi-cashier retail with bidirectional Firestore sync and instant offline SQLite performance.',
    image: '/cloudzone-banner.png',
    tags: ['Flutter 3', 'Dart', 'Firebase Firestore', 'SQLite', 'Tailwind CSS'],
    liveUrl: 'https://cloudzone-pos.demo.app',
    githubUrl: 'https://github.com/XeinQt/XeinQtie',
    caseStudy: {
      overview: 'CloudZone POS is a high-availability distributed mobile point-of-sale platform built to handle high-velocity multi-cashier retail environments with seamless offline fallback.',
      challenge: 'Retail environments with unreliable internet connections frequently experience stalled checkouts, lost transactions, and inventory desynchronization across cash registers.',
      solution: 'Developed a local-first SQLite offline engine paired with a background sync queue and conflict-resolution algorithm that reconciles orders to Cloud Firestore in real time once reconnected.',
      keyFeatures: [
        'Sub-100ms barcode scanning and cart checkout latency',
        'Bidirectional inventory syncing across multiple simultaneous register tablets',
        'Automated offline transaction journaling with transactional integrity',
        'Integrated thermal receipt printer protocols (Bluetooth & ESC/POS LAN)'
      ],
      architecture: [
        {
          title: 'Hybrid Local-First Sync Engine',
          description: 'Executes all critical checkout transactions against local SQLite before queueing idempotent upstream mutations.'
        },
        {
          title: 'Firestore Real-Time Stream Replication',
          description: 'Broadcasts instant inventory updates to all active cashier terminals simultaneously.'
        },
        {
          title: 'Hardware Peripheral Bridge',
          description: 'Native Dart channels for thermal printers, barcode laser scanners, and digital cash drawers.'
        }
      ],
      metrics: [
        { label: 'Offline Uptime', value: '100%' },
        { label: 'Transaction Latency', value: '<80ms' },
        { label: 'Sync Success', value: '99.99%' }
      ]
    }
  },
  {
    id: 'keepr',
    title: 'KeepR — Private Vault & Desktop Suite',
    category: 'Local-First Desktop App & Cryptography',
    year: '2026',
    description: 'Local-first password vault and personal workflow desktop app featuring zero-knowledge AES-256 encryption and biometric authentication.',
    image: '/keepr-mockup.png',
    tags: ['Tauri', 'Rust', 'React', 'SQLite', 'Tailwind CSS'],
    liveUrl: 'https://keepr.desktop.app',
    githubUrl: 'https://github.com/XeinQt/XeinQtie',
    caseStudy: {
      overview: 'KeepR is an offline-first desktop vault built to store sensitive developer credentials, API tokens, and workflow secrets locally without reliance on third-party cloud infrastructure.',
      challenge: 'Commercial cloud password managers are frequent targets for high-profile cyberattacks and require subscription fees while keeping sensitive master keys on remote infrastructure.',
      solution: 'Created an ultra-lightweight native desktop app powered by Tauri and Rust with AES-256-GCM encryption, Argon2id key derivation, and local SQLite cipher storage.',
      keyFeatures: [
        'Zero-knowledge local architecture - secrets never leave your device',
        'Argon2id master key derivation with memory-hardened encryption passes',
        'Biometric authentication support (Touch ID, Windows Hello)',
        'Built-in developer clipboard wiper and automated secret rotation timers'
      ],
      architecture: [
        {
          title: 'Rust Core Security Backend',
          description: 'Handles all memory-safe cryptographic primitives in Rust without exposing decrypted memory to the UI webview.'
        },
        {
          title: 'Sub-15MB Tauri Lightweight Bundle',
          description: 'Consumes less than 40MB of RAM compared to standard 400MB+ Electron containers.'
        },
        {
          title: 'SQLCipher Encrypted Local Storage',
          description: 'Full-database page-level encryption preventing unauthorized forensic disk inspection.'
        }
      ],
      metrics: [
        { label: 'RAM Footprint', value: '<40MB' },
        { label: 'Binary Size', value: '12.4 MB' },
        { label: 'Security Grade', value: 'Zero-Cloud' }
      ]
    }
  }
];
