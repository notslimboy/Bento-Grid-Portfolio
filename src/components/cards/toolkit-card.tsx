import { BentoCard } from "@/components/bento-grid";
import { Layers } from "lucide-react";

interface ToolkitCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function ToolkitCard({ isScanning, isSkeleton }: ToolkitCardProps) {
  const tools = [
    { name: "Unity (C#)", search: "Unity" },
    { name: "Roblox Studio", search: "Roblox Studio" },
    { name: "Machinations", search: "Machinations" },
    { name: "Figma", search: "Figma" },
    { name: "Spreadsheet", search: "Spreadsheet" },
    { name: "AI Engineering", search: "AI Engineering" },
  ];

  if (isSkeleton) {
    return (
      <BentoCard 
        isScanning={isScanning}
        coordinate="HUD-T03"
        className="min-h-[140px] h-full"
      >
        <div className="flex items-center justify-between">
          <div className="w-36 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <Layers className="w-3.5 h-3.5 text-vibrant-indigo/25" />
        </div>
        
        <div className="grid grid-cols-2 gap-2 my-auto">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="h-7 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25"
            />
          ))}
        </div>
        
        <div className="w-48 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25 mt-auto pt-2" />
      </BentoCard>
    );
  }

  return (
    <BentoCard 
      isScanning={isScanning}
      coordinate="HUD-T03"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-widest text-vibrant-indigo font-bebas">Equipment // Loadout</span>
        <Layers className="w-3.5 h-3.5 text-accent" />
      </div>
      
      <div className="grid grid-cols-2 gap-2 my-5 text-[10px] font-mono">
        {tools.map((item) => (
          <div 
            key={item.name}
            className="h-8 border border-vibrant-indigo/25 bg-vibrant-indigo/5 text-frost-white rounded-none flex items-center justify-between px-2.5 hover:border-accent hover:bg-[#12162a] transition-all duration-150 cursor-default group/cell"
          >
            <span className="group-hover/cell:text-accent transition-colors duration-150">{item.name}</span>
            <span className="w-1 h-1 bg-accent/80 group-hover/cell:bg-accent group-hover/cell:shadow-[0_0_4px_rgba(6,182,212,0.8)] transition-all" />
          </div>
        ))}
      </div>
      
      <div className="text-[8px] text-muted-slate/50 mt-auto font-mono tracking-widest uppercase">
        SPEC: GAME DESIGN, GAME BALANCING, AI ENGINEERING
      </div>
    </BentoCard>
  );
}
