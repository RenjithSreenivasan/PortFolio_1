import React, { useState } from 'react';
import { Mail, Copy, Check, Send, FileText, ArrowUp, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactFooterProps {
  onPlayClick: () => void;
  onPlayHover: () => void;
  onPlayChime: () => void;
  activeAccent: string;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onPlayClick,
  onPlayHover,
  onPlayChime,
  activeAccent,
}) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'renjithsreenivasan.dev@gmail.com';

  const copyEmail = () => {
    onPlayClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    onPlayChime();
    setFormSubmitted(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const loopToTop = () => {
    onPlayChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full pt-28 pb-12 px-6 md:px-12 z-20 overflow-hidden">
      {/* Dynamic ambient radial lighting */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[200px] opacity-15 pointer-events-none"
        style={{ backgroundColor: activeAccent }}
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Main CTA Banner */}
        <div className="p-8 md:p-16 rounded-3xl bg-[#090d1a]/90 border border-white/10 backdrop-blur-2xl shadow-2xl mb-16 relative overflow-hidden">
          {/* Top glowing edge */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${activeAccent}, transparent)`
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 mb-6">
                <Sparkles className="w-3.5 h-3.5" style={{ color: activeAccent }} />
                <span>Available for Select Engineering Roles & Collaborations</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight text-white mb-6 leading-[0.95]">
                LET’S ARCHITECT <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${activeAccent} 100%)`
                  }}
                >
                  THE FUTURE.
                </span>
              </h2>

              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-xl">
                Whether you need a high-concurrency real-time platform, a 60fps WebGL product launch, or a dedicated creative engineering lead—let's build it together.
              </p>

              {/* Quick Copy Email Pill */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-200">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{email}</span>
                  <button
                    onClick={copyEmail}
                    onMouseEnter={onPlayHover}
                    className="ml-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {copied && (
                  <span className="text-xs font-mono text-emerald-400 animate-fadeIn">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10">
              <h3 className="text-sm font-semibold text-white mb-4 font-mono uppercase tracking-wider flex items-center justify-between">
                <span>Send Direct Transmission</span>
                <span className="text-xs text-neutral-500">ENCRYPTED</span>
              </h3>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">Transmission Received</h4>
                  <p className="text-xs text-neutral-300 font-mono">
                    Thank you! I will respond to your inquiry within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@studio.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                      Project Brief or Role Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your timeline and tech requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={onPlayHover}
                    className="w-full py-3 rounded-xl text-xs font-mono font-semibold text-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-110"
                    style={{ backgroundColor: activeAccent }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation, Socials, and Infinite Loop Easter Egg */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Info */}
          <div className="text-xs font-mono text-neutral-400 text-center md:text-left">
            <span>© {new Date().getFullYear()} Renjith Sreenivasan.</span>
            <span className="mx-2 text-neutral-700">|</span>
            <span>Inspired by the Ciao Energy 3D Scroll Choreography Blueprint</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/renjithsreenivasan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onPlayClick}
              onMouseEnter={onPlayHover}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/renjith-sreenivasan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onPlayClick}
              onMouseEnter={onPlayHover}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href="#contact"
              onClick={() => {
                onPlayClick();
                alert('Resume link configured for download: renjith_sreenivasan_cv.pdf');
              }}
              onMouseEnter={onPlayHover}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>

            {/* Loop Back to Top (Ciao Energy Infinite Loop Easter Egg) */}
            <button
              onClick={loopToTop}
              onMouseEnter={onPlayHover}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-mono transition-all cursor-pointer ml-2"
              title="Loop to top of scroll scene"
            >
              <span>Loop to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
