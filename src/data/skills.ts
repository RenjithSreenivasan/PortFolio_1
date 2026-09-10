export interface SkillCategory {
  title: string;
  badge: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experience: string;
    description: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & 3D WebGL',
    badge: 'Visual & Interaction',
    iconName: 'Sparkles',
    description: 'Sculpting high-performance user interfaces, 60fps physics, and immersive WebGL shaders.',
    skills: [
      { name: 'React & TypeScript', level: 96, experience: 'Production Lead', description: 'Concurrent mode, custom hooks, modular micro-frontends' },
      { name: 'Three.js & WebGL', level: 88, experience: '3D Experiences', description: 'Procedural meshes, custom shaders, camera choreography' },
      { name: 'Tailwind CSS & CSS Systems', level: 95, experience: 'Design Systems', description: 'Glassmorphism, fluid responsive layouts, neon palettes' },
      { name: 'Motion & Scroll Choreography', level: 92, experience: 'Creative Dev', description: 'Scene-driven scroll, scrub timelines, physics springs' }
    ]
  },
  {
    title: 'Backend & Systems Engineering',
    badge: 'Logic & Throughput',
    iconName: 'Server',
    description: 'Architecting resilient APIs, distributed event streams, and fault-tolerant business logic.',
    skills: [
      { name: 'Python & Django', level: 90, experience: 'Enterprise Apps', description: 'ORM optimization, Celery queues, modular service architecture' },
      { name: 'Node.js & Express', level: 93, experience: 'Real-time APIs', description: 'Event loops, streaming buffers, microservices, auth' },
      { name: 'WebSockets & Live Telemetry', level: 89, experience: 'Low-latency', description: 'Real-time pub/sub, binary protocol buffering, heartbeat keep-alive' },
      { name: 'REST & GraphQL Architecture', level: 92, experience: 'System Design', description: 'API versioning, OpenAPI specs, idempotent mutations' }
    ]
  },
  {
    title: 'Databases & Infrastructure',
    badge: 'Persistence & Scale',
    iconName: 'Database',
    description: 'Ensuring zero data loss, sub-millisecond query execution, and seamless automated deployment.',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 90, experience: 'Relational Core', description: 'ACID compliance, indexed queries, complex schema migrations' },
      { name: 'MongoDB & Redis', level: 88, experience: 'Caching & NoSQL', description: 'Aggregation pipelines, memory-cached key-value stores' },
      { name: 'Docker & Containerization', level: 85, experience: 'DevOps', description: 'Multi-stage builds, isolated container networks' },
      { name: 'Git & CI/CD Pipelines', level: 94, experience: 'Workflow', description: 'Automated test pipelines, semantic release workflows' }
    ]
  }
];

export const TERMINAL_COMMANDS: Record<string, string | string[]> = {
  help: [
    'Available commands:',
    '  about        - View background & engineering philosophy',
    '  skills       - Print comprehensive technology stack',
    '  projects     - List flagship software & creative web systems',
    '  contact      - Get direct communication links',
    '  stack        - Display the tech stack used to build this portfolio',
    '  clear        - Clear the terminal screen',
    '  easteregg    - Trigger the hidden spatial warp sequence'
  ],
  about: [
    'Renjith Sreenivasan — Creative Software Engineer & Full-Stack Architect.',
    'Obsessed with merging architectural rigor with sensory web experiences.',
    'Specializes in React, Three.js, Python/Django, and high-concurrency real-time engines.'
  ],
  skills: [
    'FRONTEND: React, TypeScript, Three.js, WebGL, TailwindCSS, Framer Motion',
    'BACKEND : Python/Django, Node.js, Express, WebSockets, Celery, REST',
    'DATA    : PostgreSQL, MongoDB, MySQL, Redis, SQLite',
    'TOOLS   : Git, Docker, Vite, Web Audio API, Linux, Postman'
  ],
  projects: [
    '1. VintageVault    - Luxury collectible & antique auction engine (WebSockets/Node)',
    '2. WorkFinder AI   - Intelligent talent graph & job matching platform (Django/React)',
    '3. TransitTrack    - Sub-second GPS bus telemetry & routing radar (React/Leaflet)',
    '4. EduPortal OS    - Full-stack multi-campus university management suite (MERN)',
    '5. FitPulse Kinetic- Biomechanical calisthenics skill-tree progression engine'
  ],
  contact: [
    'Email   : renjithsreenivasan.dev@gmail.com',
    'GitHub  : https://github.com/renjithsreenivasan',
    'LinkedIn: https://linkedin.com/in/renjith-sreenivasan',
    'Location: Available globally for remote & select on-site roles'
  ],
  stack: [
    'Portfolio Architecture (Ciao Energy scroll model):',
    '• Framework : React 19 + TypeScript + Vite 8',
    '• 3D Engine : Three.js Hardware Accelerated WebGL Canvas',
    '• Styling   : Tailwind CSS with Glassmorphism & Custom Keyframes',
    '• Audio     : Procedural Web Audio API Synthesizer (0kb audio downloads)',
    '• Animation : Scroll-driven scene interpolation & kinetic physics'
  ],
  easteregg: [
    '🚀 Hyperdrive sequence engaged! Centerpiece spatial core overclocked to 300%!'
  ]
};
