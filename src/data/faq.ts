export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you balance high-end 3D graphics with web performance?',
    category: 'Engineering',
    answer:
      'We use progressive enhancement and adaptive rendering. 3D geometry is procedurally generated and optimized for minimal draw calls. Three.js render loops pause automatically when the tab is inactive or scrolled out of view. Shaders are kept lightweight with zero external texture bloat, ensuring steady 60–120 FPS even on mid-range mobile devices.'
  },
  {
    id: 'faq-2',
    question: 'What types of roles or projects are you currently open to?',
    category: 'Availability',
    answer:
      'I am currently open to full-time Senior Frontend / Full-Stack Engineering roles, as well as select high-impact freelance/contract engagements for creative web development, interactive brand experiences, and complex full-stack web applications.'
  },
  {
    id: 'faq-3',
    question: 'How is the 3D scroll experience implemented without lag?',
    category: 'Architecture',
    answer:
      'Rather than attaching unthrottled window scroll listeners, we sample scroll position into a normalized 0-to-1 progress vector through a passive requestAnimationFrame listener. The 3D camera coordinates, model rotation matrices, and DOM element transforms are mathematically interpolated using lerp (linear interpolation), eliminating stutter.'
  },
  {
    id: 'faq-4',
    question: 'Can you work across both frontend and backend domains?',
    category: 'Full-Stack',
    answer:
      'Yes. My work spans the entire spectrum: from crafting pixel-perfect, sensory React interfaces with Three.js to engineering production backend APIs in Python (Django) and Node.js (Express), designing database schemas (PostgreSQL, MongoDB), and deploying secure WebSocket real-time systems.'
  },
  {
    id: 'faq-5',
    question: 'How do the sound effects work without causing slow load times?',
    category: 'Audio',
    answer:
      'The portfolio utilizes the browser native Web Audio API. Instead of loading heavy .mp3 or .wav sound files over the network, every frequency, ambient drone, hover click, and harmonic chord is mathematically synthesized in real time. It weighs 0 kilobytes in network bandwidth and can be muted instantly.'
  }
];
