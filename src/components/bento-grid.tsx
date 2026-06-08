import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({ id, className, children }: BentoGridProps) {
  return (
    <div id={id} className={cn(
          "flex flex-col lg:flex-row gap-4 md:gap-6 max-w-7xl mx-auto",
          className
        )}>

      {children}
    </div>
  );
}

interface BentoColumnProps {
  className?: string;
  children: React.ReactNode;
  side: "left" | "right";
  id?: string;
}

export function BentoColumn({ className, children, side, id }: BentoColumnProps) {
  return (
    <div
      id={id}
      className={cn(
        side === "left" 
          ? "flex flex-col gap-4 md:gap-6 lg:w-[340px] xl:w-[380px] shrink-0" 
          : "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 min-w-0",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  showStars?: boolean;
  isScanning?: boolean;
  coordinate?: string;
}

function StarryBackground() {
  const stars = [
    { top: "12%", left: "15%", size: "1.5px", delay: "0s", duration: "4s" },
    { top: "28%", left: "78%", size: "2px", delay: "1.5s", duration: "5s" },
    { top: "42%", left: "32%", size: "1px", delay: "0.8s", duration: "3s" },
    { top: "18%", left: "62%", size: "2px", delay: "2.2s", duration: "6s" },
    { top: "65%", left: "12%", size: "1px", delay: "1.2s", duration: "4s" },
    { top: "78%", left: "88%", size: "1.5px", delay: "0.3s", duration: "3s" },
    { top: "82%", left: "44%", size: "2px", delay: "2.8s", duration: "5s" },
    { top: "52%", left: "74%", size: "1.5px", delay: "1.7s", duration: "4s" },
    { top: "72%", left: "50%", size: "1px", delay: "0.5s", duration: "3s" },
    { top: "34%", left: "46%", size: "2.5px", delay: "3.1s", duration: "6s" },
    { top: "88%", left: "20%", size: "1.5px", delay: "1.9s", duration: "5s" },
    { top: "58%", left: "92%", size: "1px", delay: "0.2s", duration: "4s" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-sm">
      {/* Nebula Backdrop Layer */}
      <div className="absolute inset-0 nebula-glow opacity-60" />
      {/* HUD dense grid overlay */}
      <div className="absolute inset-0 hud-grid-overlay-dense opacity-80" />
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-frost-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            "--twinkle-duration": star.duration,
            boxShadow: "0 0 5px rgba(248, 250, 252, 0.4)"
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export function BentoCard({ className, children, onClick, showStars, isScanning, coordinate, ...props }: BentoCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bento-card rounded-sm p-6 flex flex-col justify-between relative group select-none border border-vibrant-indigo/25",
        isScanning && "bento-card-scan-active",
        className
      )}
      {...props}
    >
      {/* Dynamic Starry Background */}
      {showStars && <StarryBackground />}

      {/* Grid overlay for non-star cards */}
      {!showStars && <div className="absolute inset-0 hud-grid-overlay-dense opacity-30 pointer-events-none z-0" />}

      {/* Subtle background glow element */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibrant-indigo/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
      
      {/* Corner crosshair markers */}
      <span className="absolute top-1 left-2 text-[7px] font-mono text-vibrant-indigo/40 pointer-events-none select-none z-20">+</span>
      <span className="absolute top-1 right-2 text-[7px] font-mono text-vibrant-indigo/40 pointer-events-none select-none z-20">+</span>
      <span className="absolute bottom-1 left-2 text-[7px] font-mono text-vibrant-indigo/40 pointer-events-none select-none z-20">+</span>
      <span className="absolute bottom-1 right-2 text-[7px] font-mono text-vibrant-indigo/40 pointer-events-none select-none z-20">+</span>
      
      {/* Card coordinate stamp */}
      {coordinate && (
        <span className="absolute bottom-1 right-6 text-[7px] font-mono text-vibrant-indigo/35 tracking-widest pointer-events-none select-none z-20">
          [{coordinate}]
        </span>
      )}
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
