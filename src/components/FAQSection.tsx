import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

interface FAQSectionProps {
  onPlayClick: () => void;
  onPlayHover: () => void;
  activeAccent: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onPlayClick,
  onPlayHover,
  activeAccent,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    onPlayClick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ backgroundColor: activeAccent }}
      />

      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono mb-2" style={{ color: activeAccent }}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>LAYER 06 // KNOWLEDGE & CLARIFICATIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            FREQUENTLY ASKED <br />
            <span className="text-neutral-500">INQUIRIES.</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-400 font-mono">
            Everything you need to know about my engineering workflow and technical delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0a0f21]/90 border-white/20 shadow-2xl'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                }`}
                style={{
                  borderColor: isExpanded ? activeAccent + '50' : undefined
                }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  onMouseEnter={onPlayHover}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: isExpanded ? activeAccent : '#64748b' }}
                    >
                      0{idx + 1}
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isExpanded
                        ? 'rotate-180 bg-white/10 text-white'
                        : 'rotate-0 bg-white/5 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 animate-fadeIn">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-mono"
                        style={{
                          backgroundColor: activeAccent + '15',
                          color: activeAccent
                        }}
                      >
                        Category: {item.category}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
