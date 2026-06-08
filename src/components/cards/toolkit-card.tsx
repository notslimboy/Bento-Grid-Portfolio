import { BentoCard } from "@/components/bento-grid";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTechBadgeStyles } from "@/lib/badge-styles";

interface ToolkitCardProps {
  isScanning?: boolean;
}

export function ToolkitCard({ isScanning }: ToolkitCardProps) {
  const tools = [
    { name: "Unity (C#)", search: "Unity" },
    { name: "Roblox Studio", search: "Roblox Studio" },
    { name: "Vuforia (AR)", search: "Vuforia" },
    { name: "Machinations", search: "Machinations" }
  ];

  return (
    <BentoCard isScanning={isScanning}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-muted-slate font-semibold font-heading">Toolkit</span>
        <Layers className="w-4 h-4 text-vibrant-indigo/50" />
      </div>
      
      <div className="grid grid-cols-2 gap-2 my-auto text-[10px] font-semibold">
        {tools.map((item) => (
          <div 
            key={item.name}
            className={cn(
              "h-7 rounded-lg border flex items-center justify-center transition-all duration-300",
              getTechBadgeStyles(item.search)
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
      
      <div className="text-[10px] text-muted-slate mt-auto">
        AR/VR, Web3, & System Design
      </div>
    </BentoCard>
  );
}
