import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, ExternalLink, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';

interface ProjectShowcaseProps {
  activeProjectIndex: number;
  onSelectProject: (index: number) => void;
  onPlayClick: () => void;
  onPlayHover: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  activeProjectIndex,
  onSelectProject,
  onPlayClick,
  onPlayHover,
}) => {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const currentProject = PROJECTS[activeProjectIndex] || PROJECTS[0];

  const handleNext = () => {
    onPlayClick();
    onSelectProject((activeProjectIndex + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    onPlayClick();
    onSelectProject((activeProjectIndex - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section id="projects" className="relative min-h-screen w-full py-24 px-6 md:px-12 z-20">
      {/* Dynamic ambient radial lighting matching active flavor */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: currentProject.theme.accent }}
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: currentProject.theme.accent }}>
              <Layers className="w-3.5 h-3.5" />
              <span>LAYER 02 // FLAVOR & PROJECT MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
              FLAGSHIP <br />
              <span className="text-neutral-500">SYSTEMS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400">
              {String(activeProjectIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                onMouseEnter={onPlayHover}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={onPlayHover}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Flavor Selector Pills / Quick Nav */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 custom-scrollbar">
          {PROJECTS.map((project, idx) => {
            const isActive = idx === activeProjectIndex;
            return (
              <button
                key={project.id}
                onClick={() => {
                  onPlayClick();
                  onSelectProject(idx);
                }}
                onMouseEnter={onPlayHover}
                className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'text-white border shadow-lg'
                    : 'text-neutral-400 hover:text-white bg-white/5 border border-white/5 hover:border-white/10'
                }`}
                style={{
                  backgroundColor: isActive ? project.theme.badgeBg : undefined,
                  borderColor: isActive ? project.theme.badgeBorder : undefined,
                  boxShadow: isActive ? `0 0 15px -3px ${project.theme.accentGlow}` : undefined,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: project.theme.accent,
                    transform: isActive ? 'scale(1.3)' : 'scale(1)'
                  }}
                />
                <span className="font-medium">{project.title}</span>
                <span className="opacity-50 text-[10px] uppercase">({project.theme.name})</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Presentation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Details Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0a0f21]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-700"
              style={{
                background: `linear-gradient(90deg, ${currentProject.theme.accent}, transparent)`
              }}
            />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                  style={{
                    backgroundColor: currentProject.theme.badgeBg,
                    color: currentProject.theme.accent,
                    border: `1px solid ${currentProject.theme.badgeBorder}`
                  }}
                >
                  {currentProject.category}
                </span>

                <span className="text-xs font-mono text-neutral-400">
                  {currentProject.stats}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
                {currentProject.title}
              </h3>

              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-6">
                {currentProject.description}
              </p>

              {/* Metrics Showcase */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {currentProject.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col"
                  >
                    <span className="text-[11px] font-mono text-neutral-400">{m.label}</span>
                    <span className="text-lg md:text-xl font-bold font-mono text-white mt-1">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions & Blueprint Trigger */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  onPlayClick();
                  setModalProject(currentProject);
                }}
                onMouseEnter={onPlayHover}
                className="px-5 py-3 rounded-full text-xs font-mono font-semibold text-black transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:brightness-110"
                style={{
                  backgroundColor: currentProject.theme.accent,
                  boxShadow: `0 0 20px -3px ${currentProject.theme.accentGlow}`
                }}
              >
                <Cpu className="w-4 h-4" />
                <span>Inspect System Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onPlayClick}
                  onMouseEnter={onPlayHover}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                  title="View GitHub Repository"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>

                {currentProject.liveUrl && currentProject.liveUrl !== '#' && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onPlayClick}
                    onMouseEnter={onPlayHover}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                    title="View Live Application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Preview / Flavor Switcher Deck */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-3xl bg-[#090d1a]/60 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Flavor Selection Deck
                </span>
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: currentProject.theme.accent }}
                >
                  {currentProject.theme.name}
                </span>
              </div>

              <div className="space-y-2.5">
                {PROJECTS.map((p, idx) => {
                  const isSelected = idx === activeProjectIndex;
                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        onPlayClick();
                        onSelectProject(idx);
                      }}
                      onMouseEnter={onPlayHover}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-white/10 border-white/20'
                          : 'bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10'
                      }`}
                      style={{
                        borderColor: isSelected ? p.theme.accent : undefined
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold"
                          style={{
                            backgroundColor: p.theme.badgeBg,
                            color: p.theme.accent
                          }}
                        >
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{p.title}</div>
                          <div className="text-[11px] font-mono text-neutral-400">{p.category}</div>
                        </div>
                      </div>

                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: p.theme.accent,
                          boxShadow: isSelected ? `0 0 10px ${p.theme.accent}` : 'none'
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick architectural tip box */}
            <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: currentProject.theme.badgeBg }}
              >
                <Layers className="w-5 h-5" style={{ color: currentProject.theme.accent }} />
              </div>
              <div className="text-xs text-neutral-300 font-mono">
                <span className="text-white font-medium">Ciao Energy Principle:</span> Switch themes dynamically across 3D lighting, shaders, and UI with zero page reload.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        onPlayClick={onPlayClick}
      />
    </section>
  );
};
