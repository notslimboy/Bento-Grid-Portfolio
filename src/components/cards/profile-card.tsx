import { BentoCard } from "@/components/bento-grid";
import profileImg from "@/assets/profile.png";
import { Download } from "lucide-react";
import { ScrambleText } from "@/components/scramble-text";

const base = import.meta.env.BASE_URL;

interface ProfileCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function ProfileCard({ isScanning, isSkeleton }: ProfileCardProps) {
  if (isSkeleton) {
    return (
      <BentoCard 
        showStars={false}
        isScanning={isScanning}
        coordinate="DECK-P01"
        className="min-h-[320px] md:min-h-[360px] flex flex-col justify-between"
      >
        <div className="flex flex-col gap-4">
          {/* Row 1: Avatar & Status Badge */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-none bg-[#0e1122] border-2 border-vibrant-indigo/15 relative overflow-hidden mt-2 shimmer opacity-25" />
            <div className="w-28 h-6 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
          </div>
          
          {/* Row 2: Role Badge */}
          <div className="flex">
            <div className="w-32 h-6 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
          </div>
        </div>
        
        {/* Bio & Intro */}
        <div className="space-y-3 mt-6">
          <div className="w-48 h-8 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <div className="space-y-2">
            <div className="w-full h-4 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
            <div className="w-5/6 h-4 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          </div>
        </div>

        {/* Action CTA Button */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-vibrant-indigo/10">
          <div className="w-32 h-[34px] bg-accent/10 border border-accent/15 rounded-none shimmer opacity-25" />
          <div className="w-24 h-[34px] bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard 
      showStars 
      isScanning={isScanning}
      coordinate="DECK-P01"
      className="min-h-[320px] md:min-h-[360px] flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Avatar & Status Badge */}
        <div className="flex items-center justify-between">
          <div className="w-24 h-24 rounded-none bg-[#0e1122] border-2 border-vibrant-indigo/35 flex items-center justify-center relative overflow-hidden group/avatar transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.08)] mt-2">
            {/* Halftone stipple overlay for tactical vibe */}
            <div className="halftone-overlay" />
            <img 
              src={profileImg} 
              alt="Raka Arya Pratama" 
              className="w-full h-full object-cover contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-all duration-500 z-10" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/30 via-transparent to-transparent pointer-events-none z-20" />
            
            {/* Tactical corner brackets inside avatar */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-accent z-20" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-accent z-20" />
          </div>
          
          <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-none flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            <span className="text-[9px] font-bold text-accent uppercase tracking-widest font-mono">Available for Hire</span>
          </div>
        </div>
        
        {/* Row 2: Role Badge */}
        <div className="flex">
          <div className="px-3 py-1 bg-vibrant-indigo/10 border border-vibrant-indigo/30 rounded-none flex items-center gap-2">
            <span className="w-1.5 h-3 bg-vibrant-indigo" />
            <span className="text-[10px] font-bold text-frost-white uppercase tracking-widest font-bebas">Game Designer // Creative</span>
          </div>
        </div>
      </div>
      
      {/* Bio & Intro */}
      <div className="space-y-3 mt-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-valorant uppercase leading-none text-vibrant-indigo flex items-center gap-2">
          <ScrambleText text="RAKA — ARYA" delay={150} />
        </h1>
        <p className="text-xs md:text-sm text-frost-white/90 font-sans leading-relaxed tracking-wide">
          A Game Designer and Creative Designer at <span className="text-accent font-medium">Imaji DigiStudio</span>. I craft engaging gameplay systems and develop creative concepts for brand campaigns—both in and out of the game.
        </p>
      </div>

      {/* Action CTA Button */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-vibrant-indigo/10">
        <a 
          href="mailto:raka.arya34@gmail.com" 
          className="px-5 py-2 border border-accent/40 bg-accent/5 text-accent text-xs font-bold tracking-widest font-bebas hover:text-[#070913] rounded-none uppercase flex items-center gap-2 btn-tactical btn-tactical-cyan"
        >
          <span className="chevron-marker" style={{ borderLeftColor: 'currentColor' }} />
          <span>Get in Touch</span>
        </a>
        <a 
          href={`${base}CV-Raka-Arya-Pratama-ATS.pdf`} 
          download="CV Raka Arya Pratama ATS.pdf"
          className="px-5 py-2 border border-vibrant-indigo/40 bg-vibrant-indigo/5 text-vibrant-indigo text-xs font-bold tracking-widest font-bebas hover:text-[#070913] rounded-none uppercase flex items-center gap-2 btn-tactical btn-tactical-indigo"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>
      </div>
    </BentoCard>
  );
}
