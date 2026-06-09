import React from "react";
import { BentoCard } from "@/components/bento-grid";
import { ProjectSlider } from "@/components/project-slider";
import { 
  Gamepad2, 
  Terminal, 
  TrendingUp, 
  Cpu, 
  BookOpen, 
  Play, 
  ArrowUpRight 
} from "lucide-react";
import type { Project } from "@/data/projects";
import { ScrambleText } from "@/components/scramble-text";

/**
 * =========================================================================
 * PANDUAN EDIT MANUAL (FOR USER)
 * =========================================================================
 * 
 * Komponen ini digunakan untuk menampilkan kartu proyek individu di sisi kanan.
 * Jika kamu ingin mengubah tata letak detail di dalam kartu ini (seperti ukuran teks,
 * ikon, border, dll), kamu bisa langsung mengedit bagian JSX di bawah.
 * 
 * -------------------------------------------------------------------------
 * TIPS EDIT CEPAT:
 * -------------------------------------------------------------------------
 * - Ikon Pojok Kanan Atas: Di-render otomatis berdasarkan ID proyek melalui
 *   fungsi `getProjectIcon(project.id)`. Jika ingin mengganti ikon untuk proyek tertentu,
 *   ubah saja case-nya di fungsi `getProjectIcon` di bawah ini.
 * - Pembatasan Baris Deskripsi: Menggunakan class Tailwind `line-clamp-2` untuk
 *   membatasi agar deskripsi hanya tampil 2 baris. Ganti angka `2` jika ingin lebih panjang.
 */

interface ProjectCardProps {
  project: Project;
  isScanning?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  isSkeleton?: boolean;
}

// Helper untuk merender ikon pojok kanan atas secara dinamis berdasarkan ID proyek
function getProjectIcon(id: string) {
  switch (id) {
    case "meowquest":
    case "colostream":
    case "gerypasta":
    case "gungirlsglory":
      return <Gamepad2 className="w-3.5 h-3.5 text-vibrant-indigo/70 group-hover:text-vibrant-indigo transition-colors duration-200" />;
    case "chocolatos":
    case "tariktap":
    case "shanticatering":
      return <Terminal className="w-3.5 h-3.5 text-electric-purple/50 group-hover:text-electric-purple transition-colors duration-200" />;
    case "momogi":
    case "tinytan":
      return <TrendingUp className="w-3.5 h-3.5 text-vibrant-indigo/70 group-hover:text-vibrant-indigo transition-colors duration-200" />;
    case "kocheng":
    case "waterbuoyancy":
      return <Cpu className="w-3.5 h-3.5 text-vibrant-indigo/70 group-hover:text-vibrant-indigo transition-colors duration-200" />;
    case "legendlearning":
      return <BookOpen className="w-3.5 h-3.5 text-vibrant-indigo/70 group-hover:text-vibrant-indigo transition-colors duration-200" />;
    default:
      return <Gamepad2 className="w-3.5 h-3.5 text-vibrant-indigo/70 group-hover:text-vibrant-indigo transition-colors duration-200" />;
  }
}

export function ProjectCard({ project, isScanning, onClick, isSkeleton }: ProjectCardProps) {
  // Ambil link tombol pertama jika ada untuk tombol pintasan di kartu
  const primaryLink = project?.links?.[0];
  const dynamicCoord = project ? `LOG-P${project.id.slice(0, 2).toUpperCase()}` : "LOG-PXX";

  if (isSkeleton) {
    return (
      <BentoCard 
        isScanning={isScanning}
        coordinate="LOG-PXX"
        className="p-4 flex flex-col justify-between h-full gap-4 border border-vibrant-indigo/25"
      >
        {/* Slideshow Media Box */}
        <div className="aspect-video w-full shrink-0 relative rounded-none overflow-hidden bg-vibrant-indigo/10 border border-vibrant-indigo/15 shimmer opacity-25" />

        {/* Info Deskripsi Proyek */}
        <div className="flex flex-col justify-between flex-grow space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-20 h-3 bg-accent/10 rounded-none shimmer opacity-25" />
              <div className="w-3.5 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
            </div>
            <div className="w-48 h-5.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
            <div className="space-y-1.5 pt-1">
              <div className="w-full h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
              <div className="w-5/6 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
            </div>
          </div>

          {/* Tactical scale */}
          <div className="my-2 space-y-1.5 select-none pointer-events-none">
            <div className="flex justify-between text-[7px] font-mono text-vibrant-indigo/20 tracking-widest leading-none">
              <span>00</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="h-[2px] bg-vibrant-indigo/10" />
          </div>

          <div className="flex gap-2 pt-2 border-t border-vibrant-indigo/10">
            <div className="w-24 h-[30px] bg-accent/10 border border-accent/15 rounded-none shimmer opacity-25" />
          </div>
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard 
      isScanning={isScanning}
      coordinate={dynamicCoord}
      className="p-4 cursor-pointer hover:shadow-[0_0_24px_rgba(6,182,212,0.02)] flex flex-col justify-between h-full gap-4 border border-vibrant-indigo/25"
      onClick={onClick}
    >
      {/* Slideshow Media Box (Mencegah klik menyebar ke aksi buka modal) */}
      <div className="aspect-video w-full shrink-0 relative rounded-none overflow-hidden border border-vibrant-indigo/15" onClick={(e) => e.stopPropagation()}>
        {/* Halftone stipple overlay for tactical vibe */}
        <div className="halftone-overlay opacity-30 z-10" />
        <ProjectSlider slides={project.slides} className="h-full w-full rounded-none overflow-hidden" />
      </div>

      {/* Info Deskripsi Proyek */}
      <div className="flex flex-col justify-between flex-grow">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-accent font-bold font-mono">
              [{project.category}]
            </span>
            {getProjectIcon(project.id)}
          </div>
          <h3 className="text-lg md:text-xl font-bebas font-bold text-frost-white leading-tight uppercase tracking-widest">
            <ScrambleText text={project.title} triggerOn="scroll" delay={150} />
          </h3>
          <p className="text-xs md:text-sm text-frost-white/90 leading-relaxed tracking-wide font-sans line-clamp-2">
            {project.detailedDescription}
          </p>
        </div>

        {/* Tactical Measurement Scale / Ruler ticks (Lunar Poster Reference) */}
        <div className="my-3 space-y-1.5 select-none pointer-events-none">
          <div className="flex justify-between text-[7px] font-mono text-vibrant-indigo/45 tracking-widest leading-none">
            <span>00</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
          <div className="h-[2px] bg-vibrant-indigo/15 relative">
            <div className="absolute top-0 left-0 w-[1px] h-1.5 bg-vibrant-indigo/35" />
            <div className="absolute top-0 left-1/4 w-[1px] h-1 bg-vibrant-indigo/35" />
            <div className="absolute top-0 left-1/2 w-[1px] h-1.5 bg-vibrant-indigo/35" />
            <div className="absolute top-0 left-3/4 w-[1px] h-1 bg-vibrant-indigo/35" />
            <div className="absolute top-0 right-0 w-[1px] h-1.5 bg-vibrant-indigo/35" />
          </div>
        </div>

        {/* Tombol Aksi Cepat di Bawah Kartu */}
        {primaryLink && (
          <div className="flex gap-2 pt-3 border-t border-vibrant-indigo/10">
            <a 
              href={primaryLink.url} 
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="px-4 py-1.5 border border-accent/40 bg-accent/5 text-xs font-bold text-accent hover:text-[#070913] rounded-none uppercase flex items-center gap-1.5 font-bebas tracking-widest group/btn btn-tactical btn-tactical-cyan"
            >
              {primaryLink.icon === 'game' && <Gamepad2 className="w-3 h-3 text-accent group-hover/btn:text-[#070913] transition-colors" />}
              {primaryLink.icon === 'play' && <Play className="w-3 h-3 text-accent group-hover/btn:text-[#070913] transition-colors" />}
              {primaryLink.icon === 'book' && <BookOpen className="w-3 h-3 text-accent group-hover/btn:text-[#070913] transition-colors" />}
              {primaryLink.icon === 'external' && <ArrowUpRight className="w-3 h-3 text-accent group-hover/btn:text-[#070913] transition-colors" />}
              <span>{primaryLink.label}</span>
            </a>
          </div>
        )}
      </div>
    </BentoCard>
  );
}
