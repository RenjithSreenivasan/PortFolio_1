import React, { useState } from 'react';
import { Cpu, ShieldCheck, Zap, Layers, Sparkles, Activity } from 'lucide-react';

interface StorySectionProps {
  onPlayClick: () => void;
  onPlayHover: () => void;
  activeAccent: string;
}

export const StorySection: React.FC<StorySectionProps> = ({
  onPlayClick,
  onPlayHover,
  activeAccent,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Architectural Rigor Meets Sensory Polish',
      subtitle: 'Beyond Static Web Pages',
      icon: Layers,
      description:
        'Most engineering portfolios choose between dry technical architecture or superficial visual animations. I fuse both: production-ready Python/Node architectures engineered with 60fps WebGL visual choreography that commands respect.',
      metrics: [
        { label: 'Frame Pacing', value: '16.6ms (60 FPS)' },
        { label: 'Bundle Impact', value: 'Zero Bloat' }
      ]
    },
    {
      step: '02',
      title: 'Sub-Millisecond Real-Time Telemetry',
      subtitle: 'WebSocket Engines & Concurrency',
      icon: Zap,
      description:
        'Proven experience handling synchronized auction state machines (VintageVault) and live bus fleet coordinates (TransitTrack). Optimistic UI mutations ensure users never perceive network lag.',
      metrics: [
        { label: 'Socket Ping', value: '< 18ms' },
        { label: 'Sync State', value: '100% Deterministic' }
      ]
    },
    {
      step: '03',
      title: 'Procedural 3D & Hardware Acceleration',
      subtitle: 'WebGL Shaders & Lightweight Geometry',
      icon: Cpu,
      description:
        'Instead of burdening clients with 40MB 3D meshes, I engineer procedural Three.js geometries and mathematically derived shaders. The 3D cyber cylinder you see here renders with lightweight draw calls.',
      metrics: [
        { label: 'Asset Payload', value: '0 MB (Procedural)' },
        { label: 'Memory Footprint', value: '< 24 MB VRAM' }
      ]
    },
    {
      step: '04',
      title: 'Enterprise Security & Clean Code',
      subtitle: 'OWASP Best Practices & Scalability',
      icon: ShieldCheck,
      description:
        'Every line of code is structured for maintainability. Clean service layers, isolated API controllers, strict TypeScript types, and comprehensive database migration strategies.',
      metrics: [
        { label: 'Code Quality', value: 'A+ Linted' },
        { label: 'Security Standard', value: 'OWASP Top 10' }
      ]
    }
  ];

  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section id="story" className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ backgroundColor: activeAccent }}
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: activeAccent }}>
              <Activity className="w-3.5 h-3.5" />
              <span>LAYER 03 // TRANSFORM-ON-SCROLL STORYTELLING</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
              ENGINEERING <br />
              <span className="text-neutral-500">PHILOSOPHY.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-neutral-400 max-w-sm">
            As scroll transforms the 3D artifact, notice how each layer decouples into engineering pillars.
          </div>
        </div>

        {/* Interactive Step Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((s, index) => {
            const isCurrent = index === activeStep;
            return (
              <button
                key={s.step}
                onClick={() => {
                  onPlayClick();
                  setActiveStep(index);
                }}
                onMouseEnter={onPlayHover}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-white/10 border-white/25 shadow-xl'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10'
                }`}
                style={{
                  borderColor: isCurrent ? activeAccent : undefined
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: isCurrent ? activeAccent : '#94a3b8' }}
                  >
                    PHASE {s.step}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: isCurrent ? activeAccent : 'transparent'
                    }}
                  />
                </div>
                <div className="text-xs font-semibold text-white truncate">{s.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Narrative Card Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-[#090d1a]/85 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Step badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" style={{ color: activeAccent }} />
              <span>Choreographed Scene {currentStep.step} of 04</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="p-3 rounded-2xl bg-white/5 border border-white/10"
                style={{ color: activeAccent }}
              >
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {currentStep.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                  {currentStep.title}
                </h3>
              </div>
            </div>

            <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed my-6">
              {currentStep.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {currentStep.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-neutral-400">{m.label}</div>
                  <div className="text-lg font-bold font-mono text-white mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Exploded Blueprint Breakdown */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-3xl bg-[#0a0f21]/70 border border-white/10 backdrop-blur-xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center justify-between">
                <span>Centerpiece Deconstruction</span>
                <span className="text-cyan-400">LIVE RENDER</span>
              </h4>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Outer Metallic Chassis</span>
                  <span className="text-emerald-400">PBR Clearcoat 1.0</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Quantum Core Matrix</span>
                  <span style={{ color: activeAccent }}>Icosahedron Emissive</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Orbital Gyro Rings</span>
                  <span className="text-cyan-400">3-Axis Euler Rotation</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Particulate Vortex</span>
                  <span className="text-purple-400">450 Swirling Points</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono text-neutral-400">
              <span className="text-white font-semibold">Interaction tip:</span> Try moving your cursor across the screen to experience real-time 3D parallax tilt and lighting refraction.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
