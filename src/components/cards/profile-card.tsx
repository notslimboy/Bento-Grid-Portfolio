import { BentoCard } from "@/components/bento-grid";
import profileImg from "@/assets/profile.png";

interface ProfileCardProps {
  isScanning?: boolean;
}

export function ProfileCard({ isScanning }: ProfileCardProps) {
  return (
    <BentoCard 
      showStars 
      isScanning={isScanning}
      className="min-h-[320px] md:min-h-[360px] flex flex-col justify-between"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Avatar & Status Badge */}
        <div className="flex items-center justify-between">
          <div className="w-24 h-24 rounded-2xl bg-slate-indigo border border-vibrant-indigo/15 flex items-center justify-center relative overflow-hidden group-hover:border-vibrant-indigo/35 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.08)] mt-2">
            <img 
              src={profileImg} 
              alt="Raka Arya Pratama" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="px-3 py-1.5 rounded-full bg-vibrant-indigo/10 border border-vibrant-indigo/20 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vibrant-indigo opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vibrant-indigo"></span>
            </span>
            <span className="text-[10px] font-bold text-frost-white uppercase tracking-wider font-mono">Available for Hire</span>
          </div>
        </div>
        
        {/* Row 2: Role Badge */}
        <div className="flex">
          <div className="px-3.5 py-1.5 rounded-full bg-vibrant-indigo/10 border border-vibrant-indigo/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vibrant-indigo shadow-[0_0_8px_#6366F1]" />
            <span className="text-xs font-semibold text-frost-white uppercase tracking-wider">Game Designer & Creative</span>
          </div>
        </div>
      </div>
      
      {/* Bio & Intro */}
      <div className="space-y-4 mt-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-heading leading-tight bg-gradient-to-r from-frost-white to-vibrant-indigo bg-clip-text text-transparent">
          Hi, I'm Raka Arya Pratama
        </h1>
        <p className="text-sm md:text-base text-muted-slate font-sans leading-relaxed">
          A Game Designer and Creative Designer at <span className="text-vibrant-indigo font-medium">Imaji DigiStudio</span>. I craft engaging gameplay systems and develop creative concepts for brand campaigns—both in and out of the game.
        </p>
      </div>

      {/* Action CTA Button */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-vibrant-indigo/5">
        <a 
          href="mailto:raka.arya34@gmail.com" 
          className="px-4 py-2 rounded-full bg-vibrant-indigo text-frost-white text-xs font-semibold hover:bg-vibrant-indigo/90 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </BentoCard>
  );
}
