import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareerJob {
  id: string;
  company: string;
  role: string;
  period: string;
  waypointLabel: string; // e.g. "Earth Sector", "Orbit Waypoint", "Moon Base"
  waypointType: "earth" | "station" | "moon";
  missions: string[];
}

interface CareerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const careerData: CareerJob[] = [
  {
    id: "maulidan",
    company: "Maulidan Games",
    role: "Game Programmer",
    period: "Feb 2022 – Jun 2022",
    waypointLabel: "Earth Sector",
    waypointType: "earth",
    missions: [
      "Mengembangkan gameplay sistem inti untuk mobile game menggunakan Unity & C#.",
      "Implementasi fitur multiplayer dasar dan sinkronisasi state.",
      "Merancang arsitektur modular untuk kemudahan iterasi rapid prototyping.",
    ],
  },
  {
    id: "monster",
    company: "Monster Group",
    role: "System & Narrative Designer",
    period: "Aug 2022 – Feb 2023",
    waypointLabel: "Orbit Waypoint Alpha",
    waypointType: "station",
    missions: [
      "Mendesain core loop game system dan economia virtual untuk judul-judul indie.",
      "Menulis narrative design document dan dialog interaktif bercabang.",
      "Melakukan balancing mekanik pertarungan PVP menggunakan simulasi Machinations.",
    ],
  },
  {
    id: "miraimimpi",
    company: "Miraimimpi",
    role: "Creative Game Designer",
    period: "Mar 2023 – Sep 2023",
    waypointLabel: "Orbit Waypoint Beta",
    waypointType: "station",
    missions: [
      "Merancang konsep game edukasi interaktif untuk brand activation kampanye.",
      "Mengembangkan game Augmented Reality menggunakan Vuforia SDK.",
      "Mengelola pipeline asset 3D dan animasi dari konsep hingga implementasi di engine.",
    ],
  },
  {
    id: "imaji",
    company: "Imaji DigiStudio",
    role: "Game Designer & Creative",
    period: "Oct 2023 – Present",
    waypointLabel: "Moon Destination",
    waypointType: "moon",
    missions: [
      "Memimpin desain sistem gameplay untuk wahana eduwisata industri Chocolatos X-Quest.",
      "Merancang kampanye game Roblox Momogi: Jelajah Nusantara terintegrasi produk fisik.",
      "Mengembangkan ekonomi game, balancing deck kartu, dan integrasi API redeem code.",
      "Membangun prototipe game PVP fisika-based (Kocheng: Battle of Boings & Colostream).",
    ],
  },
];

// Typing effect hook
function useTypingEffect(text: string, speed: number = 25, trigger: boolean = true) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayedText("");
      setIsComplete(false);
      return;
    }
    setDisplayedText("");
    setIsComplete(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, trigger]);

  return { displayedText, isComplete };
}

// Single mission line with typing effect
function MissionLine({ text, delay, isActive }: { text: string; delay: number; isActive: boolean }) {
  const [shouldType, setShouldType] = useState(false);
  
  useEffect(() => {
    if (!isActive) {
      setShouldType(false);
      return;
    }
    const timer = setTimeout(() => setShouldType(true), delay);
    return () => clearTimeout(timer);
  }, [isActive, delay]);

  const { displayedText, isComplete } = useTypingEffect(text, 3, shouldType);

  if (!shouldType) return null;

  return (
    <motion.li 
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-2.5 text-xs"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
      <span className="text-muted-slate hud-terminal-typing leading-relaxed">
        {displayedText}
        {!isComplete && <span className="typing-cursor" />}
      </span>
    </motion.li>
  );
}

// Waypoint node component
function WaypointNode({ 
  job, 
  isActive, 
  onClick
}: { 
  job: CareerJob; 
  isActive: boolean; 
  onClick: () => void;
}) {
  const getWaypointEmoji = () => {
    switch(job.waypointType) {
      case "earth": return "🌍";
      case "moon": return "🌙";
      default: return "🛰️";
    }
  };

  const getGlowClass = () => {
    switch(job.waypointType) {
      case "earth": return "earth-glow";
      case "moon": return "moon-glow";
      default: return "station-glow";
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 group cursor-pointer transition-all duration-300 z-10 shrink-0",
        isActive ? "scale-110" : "scale-100 hover:scale-105"
      )}
    >
      {/* Period label above */}
      <span className={cn(
        "text-[9px] font-mono tracking-wide whitespace-nowrap transition-colors duration-300 mb-0.5",
        isActive ? "text-frost-white font-semibold" : "text-muted-slate/60"
      )}>
        {job.period}
      </span>

      {/* Waypoint node */}
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative",
        isActive 
          ? cn("border-vibrant-indigo bg-slate-indigo waypoint-active", getGlowClass()) 
          : "border-vibrant-indigo/20 bg-midnight/60 hover:border-vibrant-indigo/40"
      )}>
        <span className="text-base">{getWaypointEmoji()}</span>
        {isActive && (
          <motion.div 
            layoutId="waypoint-ring"
            className="absolute inset-[-4px] rounded-full border border-cyan-400/50"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}
      </div>
      
      {/* Company label below */}
      <span className={cn(
        "text-[8px] font-mono tracking-wider uppercase whitespace-nowrap transition-colors duration-300 mt-0.5",
        isActive ? "text-cyan-400 hud-text-glow-cyan" : "text-muted-slate/40"
      )}>
        {job.company}
      </span>
    </button>
  );
}


export function CareerDrawer({ isOpen, onClose }: CareerDrawerProps) {
  const [activeJobIndex, setActiveJobIndex] = useState(0);
  const [hologramReady, setHologramReady] = useState(false);

  const activeJob = careerData[activeJobIndex];

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setActiveJobIndex(0);
      setHologramReady(false);
      const timer = setTimeout(() => setHologramReady(true), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Trigger hologram boot on index change
  useEffect(() => {
    setHologramReady(false);
    const timer = setTimeout(() => setHologramReady(true), 350);
    return () => clearTimeout(timer);
  }, [activeJobIndex]);

  const goNext = useCallback(() => {
    if (activeJobIndex < careerData.length - 1) {
      setActiveJobIndex(prev => prev + 1);
    }
  }, [activeJobIndex]);

  const goPrev = useCallback(() => {
    if (activeJobIndex > 0) {
      setActiveJobIndex(prev => prev - 1);
    }
  }, [activeJobIndex]);

  // Lock body scroll + Escape key handler
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-midnight/85 backdrop-blur-md"
        >
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Drawer Panel */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 28,
              mass: 1.2
            }}
            className="relative w-full max-w-5xl z-10 bg-slate-indigo/95 border border-vibrant-indigo/15 rounded-t-2xl overflow-hidden hud-grid-overlay"
            style={{ maxHeight: "85vh" }}
          >
            {/* Holographic scanlines overlay */}
            <div className="hologram-scanlines" />
            
            {/* Holographic boot sweep */}
            <div className="hologram-sweep-line" />

            {/* Blueprint corner brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-vibrant-indigo/30 pointer-events-none z-30" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-vibrant-indigo/30 pointer-events-none z-30" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-vibrant-indigo/30 pointer-events-none z-30" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-vibrant-indigo/30 pointer-events-none z-30" />

            {/* Header bar */}
            <div className="relative z-30 flex items-center justify-between px-6 pt-5 pb-3">
              <div className="flex items-center gap-3">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-heading font-bold tracking-wide text-frost-white">
                  Career History
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 text-muted-slate hover:text-cyan-400 transition-colors cursor-pointer active:scale-95 z-50"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content area */}
            <div className="relative z-30 px-6 pb-6 career-drawer-scroll overflow-y-auto" style={{ maxHeight: "calc(85vh - 60px)" }}>
              
              {/* Flight Path Timeline */}
              <div className="relative my-4 px-2">
                {/* Flex row of waypoints with connecting lines */}
                <div className="flex items-center justify-between w-full">
                  {careerData.map((job, idx) => (
                    <div key={job.id} className="flex items-center" style={{ flex: idx < careerData.length - 1 ? 1 : 'none' }}>
                      <WaypointNode 
                        job={job}
                        isActive={idx === activeJobIndex}
                        onClick={() => setActiveJobIndex(idx)}
                      />
                      {/* Connecting line between waypoints */}
                      {idx < careerData.length - 1 && (
                        <div className="flex-1 h-[2px] mx-2 relative">
                          {/* Base dashed line */}
                          <div className="absolute inset-0 border-t-2 border-dashed border-vibrant-indigo/15" />
                          {/* Active glow segment */}
                          {idx < activeJobIndex && (
                            <div className="absolute inset-0 bg-vibrant-indigo/50 shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center justify-center gap-4 mb-5">
                <button 
                  onClick={goPrev}
                  disabled={activeJobIndex === 0}
                  className={cn(
                    "w-8 h-8 rounded-lg border flex items-center justify-center transition-all cursor-pointer",
                    activeJobIndex === 0 
                      ? "border-vibrant-indigo/5 text-muted-slate/20 cursor-not-allowed" 
                      : "border-vibrant-indigo/20 text-muted-slate hover:text-frost-white hover:border-vibrant-indigo/40 hover:bg-vibrant-indigo/10 active:scale-95"
                  )}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[9px] font-mono text-muted-slate tracking-widest uppercase">
                  {activeJobIndex + 1} / {careerData.length}
                </span>
                <button 
                  onClick={goNext}
                  disabled={activeJobIndex === careerData.length - 1}
                  className={cn(
                    "w-8 h-8 rounded-lg border flex items-center justify-center transition-all cursor-pointer",
                    activeJobIndex === careerData.length - 1 
                      ? "border-vibrant-indigo/5 text-muted-slate/20 cursor-not-allowed" 
                      : "border-vibrant-indigo/20 text-muted-slate hover:text-frost-white hover:border-vibrant-indigo/40 hover:bg-vibrant-indigo/10 active:scale-95"
                  )}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Job Detail Card (static window, content swaps) */}
              <div className="relative rounded-xl border border-vibrant-indigo/15 bg-midnight/50 p-5 md:p-6 overflow-hidden">
                {/* Scanlines on card */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                  <div className="hologram-scanlines" />
                </div>

                {/* Card content — only this part animates */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeJob.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="relative z-10 space-y-4"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[9px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                            {activeJob.waypointLabel}
                          </span>
                          <span className="text-[9px] font-mono text-muted-slate">
                            {activeJob.period}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-heading font-bold text-frost-white">
                          {activeJob.company}
                        </h3>
                        <p className="text-xs font-mono text-electric-purple font-medium tracking-wide">
                          {activeJob.role}
                        </p>
                      </div>
                    </div>

                    {/* Missions with typing effect */}
                    <div className="space-y-2.5 pt-2 border-t border-vibrant-indigo/10">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-frost-white font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                        <span>Mission Objectives:</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {activeJob.missions.map((mission, idx) => (
                          <MissionLine 
                            key={`${activeJob.id}-${idx}`}
                            text={mission}
                            delay={idx * 80}
                            isActive={hologramReady}
                          />
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-vibrant-indigo/5">
                <span className="text-[8px] font-mono text-muted-slate/40 tracking-widest">
                  {careerData.length} Experiences
                </span>
                <span className="text-[8px] font-mono text-muted-slate/40 tracking-widest">
                  {careerData[0].period.split('–')[0].trim()} — Present
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
