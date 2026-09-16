export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  theme: {
    name: string;
    accent: string;
    accentGlow: string;
    badgeBg: string;
    badgeBorder: string;
    gradient: string;
    lightColor: number; // For Three.js scene tinting
  };
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  stats: string;
  systemArchitecture: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'vintage-vault',
    title: 'VintageVault',
    category: 'Full-Stack Heritage Auction & Marketplace',
    tagline: 'High-frequency collectible bidding engine with anti-sniping protection and real-time provenance tracking.',
    description:
      'A luxury antique and historical collectible auction marketplace. Features sub-second synchronized WebSocket live bidding, fraud mitigation algorithms, automated lot closing, escrow tracking, and high-resolution asset zoom galleries.',
    highlights: [
      'Sub-millisecond WebSocket real-time bid reconciliation engine',
      'Automated dynamic anti-sniping soft-close bidding extensions',
      'Secure ledger-backed provenance validation & authentication vault',
      'Interactive 360-degree item inspection and high-res image pipeline'
    ],
    metrics: [
      { label: 'Latency', value: '< 18ms' },
      { label: 'Concurrency', value: '10k+ Live' },
      { label: 'Uptime', value: '99.98%' }
    ],
    tags: ['React', 'Node.js / Express', 'WebSockets', 'MySQL / MongoDB', 'TailwindCSS', 'Redis'],
    theme: {
      name: 'Obsidian Gold',
      accent: '#f59e0b',
      accentGlow: 'rgba(245, 158, 11, 0.4)',
      badgeBg: 'rgba(245, 158, 11, 0.12)',
      badgeBorder: 'rgba(245, 158, 11, 0.3)',
      gradient: 'from-amber-500/20 via-yellow-600/10 to-transparent',
      lightColor: 0xffaa00
    },
    featured: true,
    githubUrl: 'https://github.com/RenjithSreenivasan/vintage-vault',
    liveUrl: '#',
    stats: '150+ Heritage Lots Managed',
    systemArchitecture: [
      'Bid Engine: High-concurrency worker threads with optimistic UI rendering',
      'Data Layer: Relational auction catalog with caching layers',
      'Storage: Distributed media CDN with multi-res WebP compression'
    ]
  },
  {
    id: 'workfinder-ai',
    title: 'WorkFinder AI',
    category: 'Intelligent Talent & Job Match Engine',
    tagline: 'Semantic skill graph matching candidates to opportunities with zero noise.',
    description:
      'Enterprise-grade recruitment and freelance opportunity discovery platform powered by Django and modern React. Employs vectorized skill matching, candidate scoring matrices, real-time application pipelines, and automated recruiter workflows.',
    highlights: [
      'Vectorized skill graph matcher reducing recruiter screening by 74%',
      'Interactive Kanban application pipeline with live state synchronizers',
      'Role seeding and automated qualification assessment benchmarks',
      'Custom role-based permissions with audit logs and analytics reporting'
    ],
    metrics: [
      { label: 'Match Accuracy', value: '94.2%' },
      { label: 'Pipeline Speed', value: '4x Faster' },
      { label: 'Response Rate', value: '88%' }
    ],
    tags: ['Python / Django', 'React', 'PostgreSQL', 'REST API', 'TailwindCSS', 'Celery'],
    theme: {
      name: 'Electric Cyan',
      accent: '#06b6d4',
      accentGlow: 'rgba(6, 182, 212, 0.4)',
      badgeBg: 'rgba(6, 182, 212, 0.12)',
      badgeBorder: 'rgba(6, 182, 212, 0.3)',
      gradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
      lightColor: 0x06b6d4
    },
    featured: true,
    githubUrl: 'https://github.com/RenjithSreenivasan/workfinder-ai',
    liveUrl: '#',
    stats: '5,000+ Profiles Indexed',
    systemArchitecture: [
      'Django Core: Modular services, clean ORM abstraction, transactional integrity',
      'Worker Fleet: Celery + Redis for asynchronous notification delivery and indexing',
      'Frontend: React SPA with instant client-side filtering and optimistic mutations'
    ]
  },
  {
    id: 'transittrack',
    title: 'TransitTrack / BusFinder',
    category: 'Real-Time Fleet & Route Navigation',
    tagline: 'Sub-second GPS telemetry ingestion and multi-modal transit routing engine.',
    description:
      'Next-generation public transportation radar and route prediction system. Ingests high-frequency GPS coordinate streams from transit vehicles, calculates arrival estimates with traffic compensation, and renders interactive vector maps for commuters.',
    highlights: [
      'Real-time vehicle position interpolation with smooth 60fps map animations',
      'Dynamic ETA calculation adapting to road congestion and stop dwell times',
      'Offline-first route caching for low-connectivity commuter scenarios',
      'Geofenced proximity notifications for passenger boarding alerts'
    ],
    metrics: [
      { label: 'Telemetry Ping', value: '500ms' },
      { label: 'ETA Variance', value: '± 45 sec' },
      { label: 'Data Efficiency', value: '85% Gzip' }
    ],
    tags: ['React', 'Node.js', 'Leaflet / Mapbox GL', 'WebSockets', 'GeoJSON', 'PWA'],
    theme: {
      name: 'Emerald Matrix',
      accent: '#10b981',
      accentGlow: 'rgba(16, 185, 129, 0.4)',
      badgeBg: 'rgba(16, 185, 129, 0.12)',
      badgeBorder: 'rgba(16, 185, 129, 0.3)',
      gradient: 'from-emerald-500/20 via-teal-600/10 to-transparent',
      lightColor: 0x10b981
    },
    featured: true,
    githubUrl: 'https://github.com/RenjithSreenivasan/busfinder-transit',
    liveUrl: '#',
    stats: '12 Transit Corridors Covered',
    systemArchitecture: [
      'Geo-Engine: Spatial index for bounding-box search and route polyline slicing',
      'Stream Layer: Lightweight binary payload transmission over persistent socket',
      'Map Engine: Hardware-accelerated canvas rendering of hundreds of moving markers'
    ]
  },
  {
    id: 'eduportal-core',
    title: 'EduPortal Academic OS',
    category: 'MERN Education & Student Intelligence',
    tagline: 'Unified campus operations platform uniting students, faculty, and administration.',
    description:
      'A full-stack enterprise campus management suite. Features granular role-based access control (RBAC), real-time attendance analytics, automated gradebook computation with GPA projections, exam schedulers, and student-parent notification pipelines.',
    highlights: [
      'Multi-tenant role permissions (Dean, Faculty, Student, Bursar)',
      'Automated continuous gradebook calculation with predictive early warnings',
      'Exportable academic transcripts and timetable optimization algorithms',
      'Integrated assignment submission engine with deadline alerts'
    ],
    metrics: [
      { label: 'Institutes', value: '3 Campuses' },
      { label: 'Queries/sec', value: '1,200+' },
      { label: 'Security Score', value: 'A+ (OWASP)' }
    ],
    tags: ['React', 'Express.js', 'MongoDB', 'JWT Auth', 'Chart.js', 'Bootstrap/Tailwind'],
    theme: {
      name: 'Cyber Violet',
      accent: '#8b5cf6',
      accentGlow: 'rgba(139, 92, 246, 0.4)',
      badgeBg: 'rgba(139, 92, 246, 0.12)',
      badgeBorder: 'rgba(139, 92, 246, 0.3)',
      gradient: 'from-purple-500/20 via-indigo-600/10 to-transparent',
      lightColor: 0x8b5cf6
    },
    featured: true,
    githubUrl: 'https://github.com/RenjithSreenivasan/student-portal',
    liveUrl: '#',
    stats: '2,400+ Active Students',
    systemArchitecture: [
      'Auth Core: Dual-token JWT with silent refresh and IP anomaly detection',
      'Aggregation Pipeline: Mongo aggregation queries for instantaneous GPA distributions',
      'Audit Engine: Immutable event log recording grade revisions and attendance marks'
    ]
  },
  {
    id: 'fitpulse-calisthenics',
    title: 'FitPulse Kinematics',
    category: 'Calisthenics & Movement Progression Suite',
    tagline: 'Scientific gymnastics and bodyweight strength programming with kinetic progression trees.',
    description:
      'An advanced athletic training system designed for calisthenics practitioners. Integrates biomechanical skill progression trees (Planche, Muscle-Up, Front Lever, Handstand), volume/intensity load tracking, and movement mastery analytics.',
    highlights: [
      'Interactive skill tree unlocking system with prerequisite strength tests',
      'Progressive overload volume calculator adapted to bodyweight leverage',
      'Session timer with customized rest interval acoustic feedback',
      'Visual tendon conditioning recovery recommendations'
    ],
    metrics: [
      { label: 'Skill Trees', value: '18 Paths' },
      { label: 'Progression Rate', value: '+35%' },
      { label: 'User Rating', value: '4.9 / 5' }
    ],
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Web Audio API', 'Local-First PWA'],
    theme: {
      name: 'Solar Crimson',
      accent: '#f43f5e',
      accentGlow: 'rgba(244, 63, 94, 0.4)',
      badgeBg: 'rgba(244, 63, 94, 0.12)',
      badgeBorder: 'rgba(244, 63, 94, 0.3)',
      gradient: 'from-rose-500/20 via-pink-600/10 to-transparent',
      lightColor: 0xf43f5e
    },
    featured: false,
    githubUrl: 'https://github.com/RenjithSreenivasan/calisthenics-fitpulse',
    liveUrl: '#',
    stats: '300+ Exercise Progressions',
    systemArchitecture: [
      'State: Local-first offline sync with IndexedDB and background replication',
      'Kinematics Model: Leverage-based torque algorithms calculating exertion load',
      'Audio: Low-latency Web Audio API count-down ticks and completion chords'
    ]
  }
];
