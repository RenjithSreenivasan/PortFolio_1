import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Server, Cpu, Database } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPlayClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPlayClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d1a] border border-white/15 p-6 md:p-8 shadow-2xl z-10 custom-scrollbar"
        style={{
          boxShadow: `0 20px 60px -15px ${project.theme.accentGlow}`
        }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.theme.accent }}
            />
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Deep-Dive System Blueprint // {project.theme.name}
            </span>
          </div>

          <button
            onClick={() => {
              onPlayClick();
              onClose();
            }}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="mt-6">
          <div className="text-xs font-mono font-medium mb-1" style={{ color: project.theme.accent }}>
            {project.category}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold font-display text-white">
            {project.title}
          </h2>
          <p className="mt-2 text-neutral-300 font-light text-base md:text-lg">
            {project.tagline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col"
            >
              <span className="text-xs font-mono text-neutral-400">{m.label}</span>
              <span className="text-lg md:text-xl font-bold font-mono text-white mt-1">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Full Description */}
        <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Overview & Problem Statement
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Technical Highlights */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            Engineering Innovations & Deliverables
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-neutral-200"
              >
                <CheckCircle2
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: project.theme.accent }}
                />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Pillars */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <Server className="w-4 h-4 text-purple-400" />
            System Architecture Components
          </h3>
          <div className="space-y-2">
            {project.systemArchitecture.map((arch, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-neutral-300 flex items-start gap-2.5"
              >
                <Database className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onPlayClick}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>Source Repository</span>
            </a>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onPlayClick}
                className="px-4 py-2.5 rounded-xl text-black text-xs font-mono font-semibold flex items-center gap-2 transition-colors shadow-lg"
                style={{ backgroundColor: project.theme.accent }}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onPlayClick();
              onClose();
            }}
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Blueprint [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
