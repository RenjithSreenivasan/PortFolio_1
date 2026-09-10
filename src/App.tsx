import { useState } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useSoundEffects } from './hooks/useSoundEffects';
import { PROJECTS } from './data/projects';
import { ThreeArtifact } from './components/ThreeArtifact';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { StorySection } from './components/StorySection';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { TechMatrix } from './components/TechMatrix';
import { FAQSection } from './components/FAQSection';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const { progress, activeScene } = useScrollProgress();
  const { isMuted, toggleMute, playClick, playHover, playChime } = useSoundEffects();

  const currentProject = PROJECTS[activeProjectIndex] || PROJECTS[0];
  const activeAccent = currentProject.theme.accent;
  const themeLightColor = currentProject.theme.lightColor;

  return (
    <div className="relative min-h-screen bg-[#05070f] text-neutral-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black font-sans">
      {/* Subtle Ambient Background Cyber Grid */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-40 z-0" />
      
      {/* Radial Vignette */}
      <div className="fixed inset-0 radial-vignette pointer-events-none z-0" />

      {/* Persistent 3D Interactive Centerpiece Canvas (React Three / Three.js) */}
      <ThreeArtifact
        scrollProgress={progress}
        activeScene={activeScene}
        themeColor={themeLightColor}
        isMuted={isMuted}
      />

      {/* Navigation Header */}
      <Navbar
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onPlayClick={playClick}
        onPlayHover={playHover}
        activeAccent={activeAccent}
      />

      {/* Main Content Sections (Scroll Scenes) */}
      <main className="relative z-20">
        {/* SCENE 01: Hero Introduction */}
        <Hero
          onPlayClick={playClick}
          onPlayHover={playHover}
          activeAccent={activeAccent}
        />

        {/* SCENE 02: Flagship Works / "Flavors" Showcase */}
        <ProjectShowcase
          activeProjectIndex={activeProjectIndex}
          onSelectProject={setActiveProjectIndex}
          onPlayClick={playClick}
          onPlayHover={playHover}
        />

        {/* SCENE 03: Pinned Architecture Storytelling */}
        <StorySection
          onPlayClick={playClick}
          onPlayHover={playHover}
          activeAccent={activeAccent}
        />

        {/* SCENE 04: Benchmarks & Comparison Matrix */}
        <ComparisonMatrix
          onPlayClick={playClick}
          onPlayHover={playHover}
          activeAccent={activeAccent}
        />

        {/* SCENE 05: Technical Specifications & Interactive Shell */}
        <TechMatrix
          onPlayClick={playClick}
          onPlayHover={playHover}
          onPlayChime={playChime}
          activeAccent={activeAccent}
        />

        {/* SCENE 06: Expandable FAQ Accordion */}
        <FAQSection
          onPlayClick={playClick}
          onPlayHover={playHover}
          activeAccent={activeAccent}
        />
      </main>

      {/* SCENE 07: High-Conversion Contact & Loop Exit */}
      <ContactFooter
        onPlayClick={playClick}
        onPlayHover={playHover}
        onPlayChime={playChime}
        activeAccent={activeAccent}
      />
    </div>
  );
}

export default App;
