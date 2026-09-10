import React from 'react';
import { ArrowDown, Sparkles, Terminal, Code2, Layers, Cpu } from 'lucide-react';

interface HeroProps {
  onPlayClick: () => void;
  onPlayHover: () => void;
  activeAccent: string;
}

export const Hero: React.FC<HeroProps> = ({
  onPlayClick,
  onPlayHover,
  activeAccent,
}) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 z-20 pointer-events-auto">
      {/* Subtle Background Glow Accent */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: activeAccent }}
      />

      {/* Top Meta Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase">
            System Status: 100% Operational // Scroll to engage
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs font-mono text-neutral-400">
          <span>LAT: 10.8505° N</span>
          <span className="text-neutral-700">|</span>
          <span>FPS: 60 (WebGL Optimized)</span>
        </div>
      </div>

      {/* Centerpiece Kinetic Typography & Statement */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono text-neutral-300">
              Creative Engineering & Full-Stack Architecture
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight leading-[0.92] uppercase text-white mb-6">
            BUILDING <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 transition-colors duration-700"
            >
              DIGITAL
            </span>{' '}
            <span
              className="text-transparent bg-clip-text transition-all duration-700 underline decoration-cyan-500/40 decoration-wavy underline-offset-8"
              style={{
                backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${activeAccent} 100%)`
              }}
            >
              REALMS.
            </span>
          </h1>

          {/* Subtext description */}
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed mb-8">
            I synthesize <span className="text-white font-medium">high-concurrency backend architecture</span> with{' '}
            <span className="text-white font-medium">immersive 3D WebGL interactions</span>. Designing web experiences that don’t just function—they resonate.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={onPlayClick}
              onMouseEnter={onPlayHover}
              className="px-6 py-3.5 rounded-full text-sm font-mono font-semibold text-black transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer"
              style={{
                backgroundColor: activeAccent,
                boxShadow: `0 0 25px -5px ${activeAccent}`
              }}
            >
              <span>Explore Flagship Works</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href="#skills"
              onClick={onPlayClick}
              onMouseEnter={onPlayHover}
              className="px-6 py-3.5 rounded-full text-sm font-mono text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Interactive CLI</span>
            </a>
          </div>
        </div>

        {/* Right column - Quick Spec Pillows / Highlights */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Full-Stack Rigor</h2>
              <p className="text-xs text-neutral-400 font-mono">React · Django · Node · WebSockets</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">3D & Sensory Polish</h2>
              <p className="text-xs text-neutral-400 font-mono">Three.js · Web Audio API · Shaders</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Production Deployed</h2>
              <p className="text-xs text-neutral-400 font-mono">Real-time auctions & transit telemetry</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom KPI Bar & Scroll Prompt */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Metric counters */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 w-full md:w-auto">
          <div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white">05+</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Flagship Engines
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white">&lt;18ms</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Telemetry Latency
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold font-display text-white">100%</div>
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              Client Retention
            </div>
          </div>
        </div>

        {/* Animated Scroll Prompt */}
        <a
          href="#projects"
          onClick={onPlayClick}
          onMouseEnter={onPlayHover}
          className="flex items-center gap-3 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>SCROLL TO DIVE INTO FLAVORS</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors">
            <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
