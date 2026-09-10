import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Server, Database, Code2, CornerDownLeft } from 'lucide-react';
import { SKILL_CATEGORIES, TERMINAL_COMMANDS } from '../data/skills';

interface TechMatrixProps {
  onPlayClick: () => void;
  onPlayHover: () => void;
  onPlayChime: () => void;
  activeAccent: string;
}

export const TechMatrix: React.FC<TechMatrixProps> = ({
  onPlayClick,
  onPlayHover,
  onPlayChime,
  activeAccent,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ text: string; isCommand?: boolean }>>([
    { text: 'SYSTEM SHELL v4.2.0 — RENJITH SREENIVASAN' },
    { text: 'Type "help" or click suggestions below to inspect the architecture.' },
    { text: '------------------------------------------------------------' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    onPlayClick();
    const newHistory = [...terminalHistory, { text: `> ${cmd}`, isCommand: true }];

    if (trimmed === 'clear') {
      setTerminalHistory([
        { text: 'Terminal cleared. Type "help" for commands.' }
      ]);
      setTerminalInput('');
      return;
    }

    if (trimmed === 'easteregg' || trimmed === 'hyperdrive') {
      onPlayChime();
    }

    if (TERMINAL_COMMANDS[trimmed]) {
      const output = TERMINAL_COMMANDS[trimmed];
      if (Array.isArray(output)) {
        output.forEach((line) => newHistory.push({ text: line }));
      } else {
        newHistory.push({ text: output });
      }
    } else if (trimmed === 'whoami') {
      newHistory.push({ text: 'renjith_sreenivasan (uid=1000, gid=1000) [Role: Full-Stack Architect]' });
    } else if (trimmed === 'date') {
      newHistory.push({ text: new Date().toUTCString() });
    } else {
      newHistory.push({
        text: `Command not found: "${cmd}". Type "help" to see valid commands.`
      });
    }

    setTerminalHistory(newHistory);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    setTerminalInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setTerminalInput(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setTerminalInput('');
      } else {
        setHistoryIndex(nextIndex);
        setTerminalInput(commandHistory[nextIndex]);
      }
    }
  };

  const quickCommands = ['help', 'skills', 'projects', 'about', 'contact', 'stack', 'easteregg'];

  return (
    <section id="skills" className="relative min-h-screen w-full py-28 px-6 md:px-12 z-20">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[190px] opacity-10 pointer-events-none"
        style={{ backgroundColor: activeAccent }}
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: activeAccent }}>
              <Code2 className="w-3.5 h-3.5" />
              <span>LAYER 05 // TECH ARSENAL & INTERACTIVE SHELL</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
              TECHNICAL <br />
              <span className="text-neutral-500">SPECIFICATIONS.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isCurrent = idx === activeTab;
              return (
                <button
                  key={cat.title}
                  onClick={() => {
                    onPlayClick();
                    setActiveTab(idx);
                  }}
                  onMouseEnter={onPlayHover}
                  className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white text-black font-semibold shadow-lg'
                      : 'bg-white/5 border border-white/5 hover:border-white/15 text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat.title.split('&')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Grid: Left Skills Cards | Right Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Skill Metrics */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-[#090d1a]/80 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  {activeTab === 0 && <Sparkles className="w-5 h-5 text-cyan-400" />}
                  {activeTab === 1 && <Server className="w-5 h-5 text-purple-400" />}
                  {activeTab === 2 && <Database className="w-5 h-5 text-emerald-400" />}
                  <h3 className="text-lg font-bold font-display text-white">
                    {SKILL_CATEGORIES[activeTab].title}
                  </h3>
                </div>

                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono"
                  style={{
                    backgroundColor: activeAccent + '18',
                    color: activeAccent,
                    border: `1px solid ${activeAccent}40`
                  }}
                >
                  {SKILL_CATEGORIES[activeTab].badge}
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-mono mb-6">
                {SKILL_CATEGORIES[activeTab].description}
              </p>

              <div className="space-y-4">
                {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">
                          // {skill.experience}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Meter */}
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: activeAccent,
                          boxShadow: `0 0 10px ${activeAccent}`
                        }}
                      />
                    </div>

                    <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive CLI Terminal */}
          <div className="lg:col-span-6 rounded-3xl bg-[#070b14] border border-white/15 overflow-hidden shadow-2xl flex flex-col h-[520px]">
            {/* Terminal Header */}
            <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-neutral-400 ml-2">
                  renjith@portfolio: ~ (zsh)
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>INTERACTIVE</span>
              </div>
            </div>

            {/* Terminal Screen Logs */}
            <div
              className="flex-1 p-5 overflow-y-auto font-mono text-xs text-neutral-300 space-y-2 custom-scrollbar bg-black/30 select-text"
              onClick={() => inputRef.current?.focus()}
            >
              {terminalHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item.isCommand
                      ? 'text-cyan-400 font-semibold mt-2'
                      : 'text-neutral-300 leading-relaxed'
                  }`}
                >
                  {item.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Command Suggestions */}
            <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
              <span className="text-[10px] font-mono text-neutral-500 mr-1 shrink-0">Try:</span>
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={onPlayHover}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-cyan-300 transition-colors shrink-0 cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Input Bar */}
            <div className="px-4 py-3 bg-white/[0.04] border-t border-white/10 flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm font-bold">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command ('help', 'projects', 'skills')..."
                className="flex-1 bg-transparent text-white font-mono text-xs outline-none placeholder:text-neutral-600"
              />
              <button
                onClick={() => executeCommand(terminalInput)}
                className="p-1 rounded bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                title="Execute Command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
