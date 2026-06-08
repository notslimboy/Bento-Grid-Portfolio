import React from "react";
import { BentoCard } from "@/components/bento-grid";
import { VideoOff } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import { ScrambleText } from "@/components/scramble-text";

interface GalleryCardProps {
  item?: GalleryItem;
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function GalleryCard({ item, isScanning, isSkeleton }: GalleryCardProps) {
  const hasVideo = !!item?.videoUrl;

  if (isSkeleton) {
    return (
      <BentoCard
        coordinate="LOG-GXX"
        isScanning={isScanning}
        className="p-4 aspect-[9/16] w-full flex flex-col justify-between relative overflow-hidden border border-vibrant-indigo/15 bg-vibrant-indigo/10"
      >
        <div className="absolute inset-0 z-0 bg-[#0e1122]/50 shimmer opacity-25" />
        <div className="relative z-10 flex flex-col justify-between h-full w-full pointer-events-none">
          <div className="flex items-center justify-between">
            <div className="w-10 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
            <div className="w-14 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          </div>
          <div className="space-y-2 mt-auto">
            <div className="w-16 h-3 bg-accent/10 rounded-none shimmer opacity-25" />
            <div className="w-28 h-5.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
            <div className="w-20 h-3 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          </div>
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard
      coordinate={item.coordinate}
      isScanning={isScanning}
      className="p-4 aspect-[9/16] w-full flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-vibrant-indigo/20 hover:border-accent/40"
    >
      {/* Video / Placeholder Area */}
      <div className="absolute inset-0 z-0">
        {hasVideo ? (
          <div className="w-full h-full relative">
            <video
              src={item.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-95 group-hover:scale-102 transition-all duration-700"
            />
            {/* Halftone Overlay for print/stipple effect */}
            <div className="halftone-overlay opacity-25 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/90 via-[#070913]/40 to-transparent opacity-90 z-20" />
          </div>
        ) : (
          <div className="w-full h-full bg-[#080b15] flex flex-col items-center justify-center relative p-6 border border-dashed border-vibrant-indigo/15">
            {/* Subtle animated background grid */}
            <div className="absolute inset-0 hud-grid-overlay-dense opacity-20" />
            
            {/* Placeholder symbol */}
            <div className="w-12 h-12 border border-vibrant-indigo/25 bg-vibrant-indigo/5 flex items-center justify-center relative group-hover:border-accent/50 group-hover:bg-[#12162a] transition-all duration-300 z-10">
              <VideoOff className="w-5 h-5 text-vibrant-indigo/55 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
              <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent" />
              <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-accent" />
            </div>
            
            <span className="text-[8px] font-mono text-vibrant-indigo/45 tracking-widest uppercase mt-4 text-center z-10 animate-pulse">
              [ STANDBY // LINK_MP4_READY ]
            </span>
          </div>
        )}
      </div>

      {/* Card Info Overlay (Top & Bottom metadata) */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full pointer-events-none">
        {/* Top Header details */}
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 border border-vibrant-indigo/25 bg-[#070913]/60 text-[8px] font-mono text-vibrant-indigo/60 uppercase tracking-widest">
            {hasVideo ? "LIVE" : "STBY"}
          </span>
          <span className="text-[7px] font-mono text-muted-slate/30">
            SEC_SYS_V.{item.id.toUpperCase()}
          </span>
        </div>

        {/* Bottom Title details */}
        <div className="space-y-1 mt-auto">
          <span className="text-[9px] font-mono font-bold tracking-widest text-accent uppercase block leading-none">
            {item.subtitle}
          </span>
          <h4 className="text-sm font-bebas font-bold text-frost-white uppercase tracking-wider leading-none">
            {item && <ScrambleText text={item.title} triggerOn="scroll" delay={150} />}
          </h4>
          
          {/* Quick Play Indicator if video exists */}
          {hasVideo && (
            <div className="flex items-center gap-1.5 pt-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </span>
              <span className="text-[8px] font-mono text-accent uppercase tracking-widest">STREAMING</span>
            </div>
          )}
        </div>
      </div>
    </BentoCard>
  );
}
