export interface ProjectScreenshot {
  title: string;
  url: string;
  caption: string;
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
  screenshots?: ProjectScreenshot[];
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    keyFeatures: string[];
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
    title: 'KABAN - Student Council Financial Hub',
    category: 'Fiscal Analytics & Public Transparency',
    year: '2026',
    description: 'A full-stack financial monitoring platform and public transparency ledger built for university student councils with real-time analytics and self-service student verification.',
    image: '/kaban-dashboard-dark.jpg',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://kaban-preview.vercel.app',
    githubUrl: 'https://github.com/XeinQt/XeinQtie',
    screenshots: [
      {
        title: 'Dark Mode Dashboard',
        url: '/kaban-dashboard-dark.jpg',
        caption: 'Fiscal monitoring & analytics hub featuring live cash flow graphs, inflow/outflow telemetry, and payables turnout.'
      },
      {
        title: 'Light Mode Dashboard',
        url: '/kaban-dashboard-light.jpg',
        caption: 'Clean, high-contrast light mode tailored for day audits and university administrative staff.'
      },
      {
        title: 'Transparency Ledger',
        url: '/kaban-transparency-ledger.jpg',
        caption: 'Public-facing financial ledger displaying itemized council disbursements, reserve funds, and project allocations.'
      },
      {
        title: 'Student ID Lookup',
        url: '/kaban-student-lookup.jpg',
        caption: 'Self-service 8-digit student ID search enabling instant payment verification and verifiable digital receipts.'
      },
      {
        title: 'User Manual & Guide',
        url: '/kaban-user-guide.jpg',
        caption: 'Step-by-step visual onboarding guide instructing students how to verify council dues in 4 simple steps.'
      }
    ],
    caseStudy: {
      overview: 'KABAN is a comprehensive financial intelligence and budget transparency hub built for university student councils. It bridges administrative fiscal tracking with an open public ledger, enabling students and officers to track collections, monitor expenses, and inspect budget allocations with 100% transparency.',
      challenge: 'Student councils routinely face difficulties with manual paper ledgers, fragmented payment records, delayed expense auditing, and lack of trust from the student body regarding fee utilization.',
      solution: 'Designed and engineered an automated full-stack platform featuring role-based treasury analytics, automated cash flow forecasting, a public transparency ledger, and a student ID self-service balance lookup engine.',
      keyFeatures: [
        'Real-time Treasury Dashboard with live Inflow, Outflow, and Net Period Flow analytics',
        'Interactive financial trend charting (Fee Collections vs Disbursed Expenses)',
        'Public Transparency Summary displaying itemized purchases, project budget plans, and council reserves',
        '8-Digit Student ID Lookup with fee breakdown and verifiable digital receipts',
        'Dual-theme accessibility (high-contrast Dark & Light mode)',
        'Step-by-step interactive User Guide and visual onboarding manual'
      ],
      architecture: [
        {
          title: 'Next.js 14 & Server Components',
          description: 'Optimized data fetching with server-side rendering for instant dashboard loads and public ledger caching.'
        },
        {
          title: 'PostgreSQL & Supabase Real-Time',
          description: 'Relational schema tracking academic terms, fee categories, officer audits, and student fee reconciliation.'
        },
        {
          title: 'Tailwind CSS Modern UI/UX',
          description: 'Engineered a bespoke design system with dark/light themes, fluid charts, and accessible data tables.'
        }
      ],
      metrics: [
        { label: 'Fiscal Transparency', value: '100% Public' },
        { label: 'Auditing Speedup', value: '12x Faster' },
        { label: 'Student Self-Service', value: 'Instant' }
      ]
    }
  },
  {
    id: 'cloudzone',
    title: 'CloudZone POS - Multi-Device System',
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
    title: 'KeepR - Private Vault & Desktop Suite',
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
