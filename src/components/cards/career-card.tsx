import { BentoCard } from "@/components/bento-grid";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  isScanning?: boolean;
  onOpenDrawer: () => void;
}

export function CareerCard({ isScanning, onOpenDrawer }: CareerCardProps) {
  const experiences = [
    { company: "Maulidan Games", role: "Game Programmer", period: "Feb – Jun 2022" },
    { company: "Monster Group", role: "System & Narrative Designer", period: "Aug 2022 – Feb 2023" },
    { company: "Miraimimpi", role: "Creative Game Designer", period: "Mar – Sep 2023" },
    { company: "Imaji DigiStudio", role: "Game Designer & Creative", period: "Oct 2023 – Present" },
  ];

  return (
    <BentoCard className="p-5 flex flex-col justify-between h-full min-h-[360px]" isScanning={isScanning}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold font-mono hud-text-glow-cyan">Career History</span>
        <Rocket className="w-4 h-4 text-cyan-400/60" />
      </div>
      
      <div className="flex flex-col space-y-3.5 my-4">
        {experiences.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="flex flex-col items-center shrink-0">
              <div className={cn(
                "w-2 h-2 rounded-full shrink-0",
                idx === 3 ? "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" : "bg-vibrant-indigo/40"
              )} />
              {idx < 3 && <div className="w-[1px] h-4 bg-vibrant-indigo/15" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className={cn(
                  "text-xs font-semibold",
                  idx === 3 ? "text-frost-white" : "text-muted-slate"
                )}>
                  {item.company}
                </span>
                <span className="text-[9px] font-mono text-muted-slate/60 shrink-0">
                  {item.period}
                </span>
              </div>
              <span className="text-[9px] text-vibrant-indigo/60 font-mono block mt-0.5">{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 mt-auto">
        <button 
          onClick={onOpenDrawer}
          className="w-full h-11 rounded-xl bg-gradient-to-r from-vibrant-indigo/15 to-electric-purple/15 border border-vibrant-indigo/25 hover:border-vibrant-indigo/50 hover:from-vibrant-indigo/30 hover:to-electric-purple/30 transition-all duration-300 flex items-center justify-between px-5 cursor-pointer group/btn active:scale-[0.98]"
        >
          <span className="text-xs font-semibold text-frost-white font-mono">Open Career History</span>
          <Rocket className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        </button>
        <div className="text-[9px] text-muted-slate/50 font-mono tracking-wider text-center">
          4 Experiences // Feb 2022 – Present
        </div>
      </div>
    </BentoCard>
  );
}
