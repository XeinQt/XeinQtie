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
    title: 'KABAN — Treasury System',
    category: 'Fintech & Public Transparency',
    year: '2026',
    description: 'A production-ready financial management platform and public transparency portal built for a university student council with custom 3FA security and offline sync.',
    image: '/kaban-banner.png',
    tags: ['Next.js 14 (App Router)', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS'],
    liveUrl: 'https://kaban-preview.vercel.app',
    githubUrl: 'https://github.com',
    caseStudy: {
      overview: 'KABAN is an enterprise-grade treasury management and public budget transparency platform engineered specifically for university councils to eliminate financial discrepancies, automate auditing, and provide open real-time dashboards to over 20,000+ students.',
      challenge: 'University councils previously suffered from siloed spreadsheets, prone to data tampering, delayed expense reporting, and lack of public trust.',
      solution: 'Engineered a tamper-proof system with triple-factor authentication (3FA), role-based ledger access, automated receipt OCR extraction, and cryptographic audit hashing on PostgreSQL.',
      keyFeatures: [
        'Real-time public transparency dashboard with dynamic fund breakdown graphs',
        '3FA Multi-Signature approval system for council treasurers and presidents',
        'Cryptographic audit trail with immutable change history',
        'Offline receipt queue with background sync capabilities'
      ],
      architecture: [
        {
          title: 'Next.js 14 App Router + Server Components',
          description: 'Leverages React Server Components for near-instant cold loads and edge-cached financial summaries.'
        },
        {
          title: 'PostgreSQL Row-Level Security (RLS)',
          description: 'Enforces strict organizational boundary isolation ensuring zero cross-organization ledger leakage.'
        },
        {
          title: 'Automated Financial Telemetry',
          description: 'Generates automated monthly budget variance reports and downloadable PDF audits.'
        }
      ],
      metrics: [
        { label: 'Auditing Speedup', value: '10x Faster' },
        { label: 'Discrepancy Rate', value: '0.0%' },
        { label: 'Student Reach', value: '20,000+' }
      ]
    }
  },
  {
    id: 'cloudzone',
    title: 'CloudZone POS — Multi-Device System',
    category: 'Mobile Fintech & Distributed Systems',
    year: '2026',
    description: 'A production-ready mobile POS system engineered for multi-cashier retail with bidirectional Firestore sync and instant offline SQLite performance.',
    image: '/cloudzone-banner.png',
    tags: ['Flutter 3', 'Dart', 'Firebase Firestore', 'SQLite (sqflite)'],
    liveUrl: 'https://cloudzone-pos.demo.app',
    githubUrl: 'https://github.com',
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
    githubUrl: 'https://github.com',
    caseStudy: {
      overview: 'KeepR is an offline-first desktop vault built to store sensitive developer credentials, API tokens, and workflow secrets locally without reliance on third-party cloud infrastructure.',
      challenge: 'Commercial cloud password managers are frequent targets for high-profile cyberattacks and require subscription fees while keeping sensitive master keys on remote infrastructure.',
      solution: 'Created an ultra-lightweight native desktop app powered by Tauri and Rust with AES-256-GCM encryption, Argon2id key derivation, and local SQLite cipher storage.',
      keyFeatures: [
        'Zero-knowledge local architecture — secrets never leave your device',
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
