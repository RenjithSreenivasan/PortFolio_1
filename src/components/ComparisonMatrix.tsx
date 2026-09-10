import React, { useState } from 'react';
import { Check, X, SlidersHorizontal, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';

interface ComparisonMatrixProps {
  onPlayClick: () => void;
  onPlayHover: () => void;
  activeAccent: string;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  onPlayClick,
  onPlayHover,
  activeAccent,
}) => {
  const [viewMode, setViewMode] = useState<'both' | 'standard' | 'conventional'>('both');

  const comparisonRows = [
    {
      feature: 'Visual & Sensory Experience',
      conventional: 'Static flat templates, stock photos, generic cards',
      standard: 'Hardware-accelerated 3D WebGL, procedural shaders & physics parallax',
      standardAdvantage: 'High user retention & award-winning visual impact'
    },
    {
      feature: 'Real-Time Data & Latency',
      conventional: 'Slow polling REST endpoints with perceptible latency',
      standard: 'Synchronized WebSockets & optimistic UI mutations (<18ms ping)',
      standardAdvantage: 'Real-time multi-user synchronization'
    },
    {
      feature: 'Asset & 3D Optimization',
      conventional: 'Heavy 40MB+ uncompressed 3D models causing mobile crashes',
      standard: 'Zero-asset procedural geometry with <24MB GPU memory footprint',
      standardAdvantage: 'Flawless 60–120 FPS even on mobile devices'
    },
    {
      feature: 'Backend & Data Rigor',
      conventional: 'Basic CRUD scripts with minimal validation or indexes',
      standard: 'Production Python (Django) & Node.js, ACID databases, Celery workers',
      standardAdvantage: 'Enterprise scalability with zero data corruption'
    },
    {
      feature: 'Audio & Micro-Interactions',
      conventional: 'Completely silent or heavy 5MB audio files that block loading',
      standard: 'Mathematical Web Audio API synthesizer (0kb bandwidth footprint)',
      standardAdvantage: 'Instant feedback with zero network overhead'
    }
  ];

  return (
    <section id="comparison" className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20">
      {/* Glow */}
      <div
        className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full blur-[170px] opacity-10 pointer-events-none"
        style={{ backgroundColor: activeAccent }}
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: activeAccent }}>
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>LAYER 04 // BENCHMARK & COMPARISON</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
              THE CREATIVE <br />
              <span className="text-neutral-500">DIFFERENCE.</span>
            </h2>
          </div>

          {/* Filter toggle buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => {
                onPlayClick();
                setViewMode('both');
              }}
              onMouseEnter={onPlayHover}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                viewMode === 'both' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Side by Side
            </button>
            <button
              onClick={() => {
                onPlayClick();
                setViewMode('standard');
              }}
              onMouseEnter={onPlayHover}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                viewMode === 'standard' ? 'bg-cyan-400 text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              My Standard
            </button>
            <button
              onClick={() => {
                onPlayClick();
                setViewMode('conventional');
              }}
              onMouseEnter={onPlayHover}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                viewMode === 'conventional' ? 'bg-rose-500/20 text-rose-300 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Conventional
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-4">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#090d1a]/80 border border-white/10 backdrop-blur-xl shadow-xl hover:border-white/20 transition-all"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center justify-between">
                <span>{row.feature}</span>
                <span
                  className="px-2.5 py-0.5 rounded-md text-[10px] font-mono"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: activeAccent
                  }}
                >
                  {row.standardAdvantage}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Conventional Column */}
                {(viewMode === 'both' || viewMode === 'conventional') && (
                  <div className="p-4 rounded-2xl bg-rose-500/[0.03] border border-rose-500/15 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <AlertCircle className="w-3 h-3" />
                        Conventional Web Dev
                      </div>
                      <p className="text-sm text-neutral-300 font-light leading-relaxed">
                        {row.conventional}
                      </p>
                    </div>
                  </div>
                )}

                {/* Renjith's Standard Column */}
                {(viewMode === 'both' || viewMode === 'standard') && (
                  <div
                    className="p-4 rounded-2xl bg-white/[0.03] border flex items-start gap-3"
                    style={{
                      borderColor: activeAccent + '40',
                      backgroundColor: activeAccent + '08'
                    }}
                  >
                    <div
                      className="p-1.5 rounded-lg shrink-0 mt-0.5"
                      style={{
                        backgroundColor: activeAccent + '20',
                        color: activeAccent
                      }}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div
                        className="text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold"
                        style={{ color: activeAccent }}
                      >
                        <CheckCircle className="w-3 h-3" />
                        Renjith's Creative Standard
                      </div>
                      <p className="text-sm text-white font-normal leading-relaxed">
                        {row.standard}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Continuous Innovation Cycle</h4>
              <p className="text-xs font-mono text-neutral-400">
                Benchmarked across 60 FPS frame rates, TTFB, and Core Web Vitals.
              </p>
            </div>
          </div>

          <a
            href="#skills"
            onClick={onPlayClick}
            onMouseEnter={onPlayHover}
            className="px-5 py-2.5 rounded-full text-xs font-mono font-medium text-black bg-white hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer shrink-0"
          >
            Review Full Tech Stack →
          </a>
        </div>
      </div>
    </section>
  );
};
