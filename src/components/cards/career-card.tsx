import { BentoCard } from "@/components/bento-grid";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  isScanning?: boolean;
  onOpenDrawer: () => void;
  isSkeleton?: boolean;
}

export function CareerCard({ isScanning, onOpenDrawer, isSkeleton }: CareerCardProps) {
  const experiences = [
    { company: "Maulidan Games", role: "Intern Game Programmer", period: "Sep – Dec 2021" },
    { company: "Monster Group", role: "Game Designer", period: "Feb – Dec 2023" },
    { company: "Miraimimpi", role: "Game Designer", period: "Aug 2021 – Jul 2024" },
    { company: "Imaji DigiStudio", role: "Game Designer | Creative", period: "Jul 2024 – Present" },
  ];

  if (isSkeleton) {
    return (
      <BentoCard 
        className="p-5 flex flex-col justify-between h-full min-h-[360px]" 
        isScanning={isScanning}
        coordinate="HUD-C02"
      >
        <div className="flex items-center justify-between">
          <div className="w-36 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <Rocket className="w-3.5 h-3.5 text-vibrant-indigo/25" />
        </div>
        
        <div className="flex flex-col space-y-4 my-5">
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex flex-col items-center shrink-0 mt-1">
                <div className="w-1.5 h-1.5 rotate-45 shrink-0 bg-vibrant-indigo/20 border border-vibrant-indigo/15 shimmer opacity-25" />
                {idx < 3 && <div className="w-[1px] h-6 bg-vibrant-indigo/10 border-dashed border-l" />}
              </div>
              <div className="flex-grow space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="w-24 h-4 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
                  <div className="w-16 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
                </div>
                <div className="w-20 h-3 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 mt-auto">
          <div className="w-full h-10 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
          <div className="w-32 h-2.5 bg-vibrant-indigo/10 mx-auto rounded-none shimmer opacity-25" />
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard 
      className="p-5 flex flex-col justify-between h-full min-h-[360px]" 
      isScanning={isScanning}
      coordinate="HUD-C02"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-widest text-vibrant-indigo font-bebas">Mission Logs // Career</span>
        <Rocket className="w-3.5 h-3.5 text-accent" />
      </div>
      
      <div className="flex flex-col space-y-4 my-5">
        {experiences.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 group/item">
            <div className="flex flex-col items-center shrink-0 mt-1">
              <div className={cn(
                "w-1.5 h-1.5 rotate-45 shrink-0 border transition-all duration-300",
                idx === 3 
                  ? "bg-accent border-accent shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
                  : "bg-transparent border-vibrant-indigo/40 group-hover/item:border-accent"
              )} />
              {idx < 3 && <div className="w-[1px] h-6 bg-vibrant-indigo/15 border-dashed border-l" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className={cn(
                  "text-sm font-semibold tracking-wide font-sans",
                  idx === 3 ? "text-frost-white font-bold" : "text-frost-white/70"
                )}>
                  {item.company}
                </span>
                <span className="text-[9px] font-mono text-muted-slate/60 shrink-0 font-medium">
                  {item.period}
                </span>
              </div>
              <span className={cn(
                "text-[10px] font-mono block mt-0.5 uppercase tracking-widest",
                idx === 3 ? "text-accent" : "text-vibrant-indigo/50"
              )}>
                [{item.role}]
              </span>
            </div>
          </div>
        ))}
      </div>
 
      <div className="space-y-2 mt-auto">
        <button 
          onClick={onOpenDrawer}
          className="w-full h-10 border border-vibrant-indigo/35 bg-vibrant-indigo/5 text-frost-white hover:text-[#070913] flex items-center justify-between px-5 cursor-pointer rounded-none group/btn uppercase font-bebas tracking-widest active:scale-[0.99] btn-tactical btn-tactical-indigo"
        >
          <span className="text-xs font-bold font-bebas">Launch Career History</span>
          <span className="chevron-marker group-hover/btn:translate-x-1 transition-transform" style={{ borderLeftColor: 'currentColor' }} />
        </button>
        <div className="text-[8px] text-muted-slate/40 font-mono tracking-widest text-center">
          LOGS ACTIVE: 4 INDEXED // SEP 2021 – PRESENT
        </div>
      </div>
    </BentoCard>
  );
}
