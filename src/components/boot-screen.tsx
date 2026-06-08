import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface BootScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  "SYS: STANDBY",
  "SYS: BOOTING_PORTFOLIO_OS_v4.2",
  "DECK: CONNECTING TO SPACE_NET...",
  "DECK: ESTABLISHING SECURE_LINK...",
  "DECK: DECRYPTING SECTOR_4_TELEMETRY...",
  "DECK: DOWNLOADING ORBITAL_COORDINATES...",
  "DECK: SYNCHRONIZING CORE_DRIVES...",
  "DECK: SYSTEMS ONLINE. DECK STABLE.",
  "SYS: ACTIVE"
];

export function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Progress bar speed
    const duration = 1200; // ~1.2s loading
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 300); // Wait 300ms before fading out completely
      return () => clearTimeout(finishTimer);
    }

    // Update terminal logs based on progress percentage
    const targetLogIndex = Math.min(
      Math.floor((progress / 100) * bootLogs.length),
      bootLogs.length - 1
    );
    if (targetLogIndex !== logIndex) {
      setLogIndex(targetLogIndex);
    }
  }, [progress, logIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.98,
        filter: "blur(8px)",
        transition: { duration: 0.4, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] bg-midnight flex flex-col items-center justify-center p-6 select-none"
    >
      {/* Space grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="hologram-scanlines" />
      </div>

      <div className="w-full max-w-sm flex flex-col items-stretch relative z-10 space-y-6">
        {/* Radar Icon & System Title */}
        <div className="flex items-center gap-3 justify-center">
          <div className="w-9 h-9 rounded-lg bg-slate-indigo border border-vibrant-indigo/20 flex items-center justify-center animate-pulse">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="font-heading font-bold text-sm tracking-wider text-frost-white uppercase">
            Raka Arya Pratama // Deck OS
          </span>
        </div>

        {/* Telemetry Output Log Window */}
        <div className="h-16 rounded-xl border border-vibrant-indigo/10 bg-slate-indigo/30 backdrop-blur-sm p-4 flex flex-col justify-center items-start overflow-hidden font-mono text-[10px] text-muted-slate select-none">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{bootLogs[logIndex]}</span>
          </div>
          <span className="text-muted-slate/50 mt-1 uppercase tracking-widest text-[8px]">
            Sector: 0b976a19 // Telemetry active
          </span>
        </div>

        {/* Glowing Loading Bar Container */}
        <div className="space-y-2">
          <div className="w-full h-1.5 rounded-full bg-slate-indigo/40 border border-vibrant-indigo/10 overflow-hidden relative p-[1px]">
            {/* Glowing progress element */}
            <div 
              className="h-full rounded-full bg-gradient-to-r from-vibrant-indigo to-cyan-400 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-muted-slate/70 px-1">
            <span>SYS_READY_CHECK</span>
            <span className="text-cyan-400 font-semibold">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
