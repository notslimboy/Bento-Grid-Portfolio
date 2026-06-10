import { BentoCard } from "@/components/bento-grid";
import { Send, ArrowUpRight } from "lucide-react";

interface ConnectCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function ConnectCard({ isScanning, isSkeleton }: ConnectCardProps) {
  if (isSkeleton) {
    return (
      <BentoCard
        isScanning={isScanning}
        className="min-h-[160px] flex flex-col justify-between"
      >
        <div className="w-24 h-4 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
        <div className="flex-grow w-full mt-4 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
      </BentoCard>
    );
  }

  return (
    <BentoCard
      isScanning={isScanning}
      coordinate="HUD-CTA"
      className="p-5 min-h-[160px] flex flex-col justify-between relative overflow-hidden border border-vibrant-indigo/25 hover:border-accent/40 transition-all duration-300 group/connect bg-gradient-to-br from-midnight via-[#0b0e24] to-midnight"
    >
      {/* Background glowing sphere/nebula */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-vibrant-indigo/10 blur-2xl group-hover/connect:bg-accent/10 transition-all duration-500 pointer-events-none" />

      {/* Row 1: Header Label */}
      <div className="flex items-center gap-2 relative z-10 w-full">
        <Send className="w-3.5 h-3.5 text-accent animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-muted-slate font-bold font-mono">
          COMMUNICATION TERMINAL //
        </span>
      </div>

      {/* Row 2: Headline */}
      <div className="my-3 relative z-10">
        <h3 className="text-xl font-heading font-bold text-frost-white tracking-wide group-hover/connect:text-accent transition-colors duration-300">
          LET'S CONNECT
        </h3>
        <p className="text-[11px] text-muted-slate font-sans leading-relaxed mt-1">
          Ready to collaborate or discuss game systems? Reach out to initiate contact.
        </p>
      </div>

      {/* Row 3: Action Button CTA */}
      <div className="relative z-10 pt-2 border-t border-vibrant-indigo/10 w-full flex justify-between items-center">
        <span className="text-[8px] font-mono text-muted-slate/40 tracking-wider">
          SIGNAL_STATUS: ONLINE
        </span>

        <a
          href="mailto:raka.arya34@gmail.com"
          className="px-8 py-3.5 border border-vibrant-indigo/35 bg-vibrant-indigo/10 hover:text-[#070913] rounded-none flex items-center gap-3 cursor-pointer group/btn text-xl font-bebas tracking-widest text-frost-white uppercase overflow-hidden relative btn-tactical btn-tactical-indigo"
        >
          <span className="w-2 h-5 bg-accent" />
          <span className="-mt-[2px] leading-none">Say Hello</span>
          <ArrowUpRight className="w-5 h-5 text-frost-white group-hover/btn:text-[#070913] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
        </a>
      </div>
    </BentoCard>
  );
}
