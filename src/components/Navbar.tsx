import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onPlayClick: () => void;
  onPlayHover: () => void;
  activeAccent: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMuted,
  onToggleMute,
  onPlayClick,
  onPlayHover,
  activeAccent,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 // Works', href: '#projects' },
    { label: '02 // Story', href: '#story' },
    { label: '03 // Benchmark', href: '#comparison' },
    { label: '04 // Arsenal', href: '#skills' },
    { label: '05 // FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#05070f]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <a
          href="#"
          onClick={() => {
            onPlayClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={onPlayHover}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
            <span
              className="text-xs font-mono font-bold transition-colors"
              style={{ color: activeAccent }}
            >
              RS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider uppercase font-mono text-neutral-200 group-hover:text-white transition-colors">
              Renjith Sreenivasan
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
              Creative Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onPlayClick}
              onMouseEnter={onPlayHover}
              className="px-3.5 py-1 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Audio Synth & Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Status badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for roles</span>
          </div>

          {/* Audio Visualizer / Synthesizer Toggle */}
          <button
            onClick={() => {
              onToggleMute();
              onPlayClick();
            }}
            onMouseEnter={onPlayHover}
            title={isMuted ? 'Unmute Sound Effects & Ambient Synthesizer' : 'Mute Sound Effects'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 hover:border-cyan-400/40 text-neutral-200 hover:text-white transition-all cursor-pointer group"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-neutral-400 group-hover:text-rose-400 transition-colors" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyan-400" />
            )}
            
            {/* Equalizer Waveform bars */}
            <div className="flex items-end gap-[3px] h-3.5 w-4">
              <span
                className={`w-[2px] bg-cyan-400 rounded-full transition-all ${
                  isMuted ? 'h-1 opacity-40' : 'h-3 animate-pulse'
                }`}
              />
              <span
                className={`w-[2px] bg-cyan-400 rounded-full transition-all ${
                  isMuted ? 'h-1 opacity-40' : 'h-2 animate-bounce'
                }`}
              />
              <span
                className={`w-[2px] bg-cyan-400 rounded-full transition-all ${
                  isMuted ? 'h-1 opacity-40' : 'h-3.5 animate-pulse'
                }`}
              />
            </div>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={onPlayClick}
            onMouseEnter={onPlayHover}
            className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-medium text-black bg-white hover:bg-neutral-200 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300"
            aria-label="Toggle menu"
          >
            <Terminal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-6 py-4 bg-[#090d1a]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                onPlayClick();
              }}
              className="text-sm font-mono text-neutral-300 hover:text-cyan-400 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
