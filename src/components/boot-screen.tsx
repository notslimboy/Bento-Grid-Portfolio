import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface BootScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  "HUD: STANDBY // INIT DATA_STREAM",
  "SYS: BOOTING TACTICAL_INTERFACE v9.04",
  "RADAR: CONNECTING TO DEEP_SPACE_TRANSCEIVER...",
  "TELEMETRY: DECRYPTING STAR_MAP_SECTOR_7...",
  "ORBIT: RESOLVING FLIGHT_PATHWAY_VECTORS...",
  "HUD: ESTABLISHING SECURE_LINK TO TARGET_DECK...",
  "COGNITIVE: SYNCHRONIZING PILOT_CORE_LOGS...",
  "HUD: TACTICAL HUD ONLINE. SYSTEM READY.",
  "SYS: ACTIVE // SYSTEM STABLE"
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
      className="fixed inset-0 z-[100] bg-[#070913] flex flex-col items-center justify-center p-6 select-none"
    >
      {/* Global Grain/Noise Overlay */}
      <div className="grain-overlay" />
      
      {/* Space grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="hologram-scanlines" />
      </div>

      <div className="w-full max-w-sm flex flex-col items-stretch relative z-10 space-y-6">
        {/* Terminal Icon & System Title */}
        <div className="flex items-center gap-3 justify-center">
          <div className="w-9 h-9 rounded-sm bg-[#0e1122] border border-vibrant-indigo/30 flex items-center justify-center animate-pulse">
            <Terminal className="w-4 h-4 text-accent" />
          </div>
          <span className="font-valorant font-bold text-sm tracking-widest text-vibrant-indigo uppercase">
            RAKA // ARYA // OS
          </span>
        </div>

        {/* Telemetry Output Log Window */}
        <div className="h-16 rounded-sm border border-vibrant-indigo/20 bg-[#0e1122]/70 backdrop-blur-sm p-4 flex flex-col justify-center items-start overflow-hidden font-mono text-[10px] text-muted-slate select-none">
          <div className="flex items-center gap-1.5 text-accent font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span>{bootLogs[logIndex]}</span>
          </div>
          <span className="text-muted-slate/50 mt-1 uppercase tracking-widest text-[8px]">
            Sector: SPACE_HUD_SYS // Telemetry active
          </span>
        </div>

        {/* Glowing Loading Bar Container */}
        <div className="space-y-2">
          <div className="w-full h-1.5 rounded-none bg-[#0e1122] border border-vibrant-indigo/20 overflow-hidden relative p-[1px]">
            {/* Glowing progress element */}
            <div 
              className="h-full rounded-none bg-gradient-to-r from-vibrant-indigo to-accent transition-all duration-75 ease-out shadow-[0_0_8px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-muted-slate/70 px-1">
            <span>HUD_TELEMETRY_READY</span>
            <span className="text-accent font-semibold">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
