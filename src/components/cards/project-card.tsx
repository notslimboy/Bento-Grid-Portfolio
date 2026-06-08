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
}

// Helper untuk merender ikon pojok kanan atas secara dinamis berdasarkan ID proyek
function getProjectIcon(id: string) {
  switch (id) {
    case "meowquest":
    case "colostream":
    case "gerypasta":
      return <Gamepad2 className="w-3.5 h-3.5 text-vibrant-indigo/70" />;
    case "chocolatos":
    case "tariktap":
      return <Terminal className="w-3.5 h-3.5 text-electric-purple/50" />;
    case "momogi":
    case "tinytan":
      return <TrendingUp className="w-3.5 h-3.5 text-vibrant-indigo/70" />;
    case "kocheng":
    case "waterbuoyancy":
      return <Cpu className="w-3.5 h-3.5 text-vibrant-indigo/70" />;
    case "legendlearning":
      return <BookOpen className="w-3.5 h-3.5 text-vibrant-indigo/70" />;
    default:
      return <Gamepad2 className="w-3.5 h-3.5 text-vibrant-indigo/70" />;
  }
}

export function ProjectCard({ project, isScanning, onClick }: ProjectCardProps) {
  // Ambil link tombol pertama jika ada untuk tombol pintasan di kartu
  const primaryLink = project.links[0];

  return (
    <BentoCard 
      isScanning={isScanning}
      className="p-4 cursor-pointer hover:shadow-[0_0_24px_rgba(99,102,241,0.04)] flex flex-col justify-between h-full gap-4"
      onClick={onClick}
    >
      {/* Slideshow Media Box (Mencegah klik menyebar ke aksi buka modal) */}
      <div className="aspect-video w-full shrink-0" onClick={(e) => e.stopPropagation()}>
        <ProjectSlider slides={project.slides} className="h-full w-full rounded-2xl overflow-hidden" />
      </div>

      {/* Info Deskripsi Proyek */}
      <div className="flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-muted-slate font-bold font-mono">
              {project.category}
            </span>
            {getProjectIcon(project.id)}
          </div>
          <h3 className="text-sm md:text-base font-heading font-bold text-frost-white leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-muted-slate leading-relaxed line-clamp-2">
            {project.detailedDescription}
          </p>
        </div>

        {/* Tombol Aksi Cepat di Bawah Kartu */}
        {primaryLink && (
          <div className="flex gap-2 mt-4 pt-3 border-t border-vibrant-indigo/5">
            <a 
              href={primaryLink.url} 
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="px-3 py-1.5 rounded-full bg-vibrant-indigo/20 border border-vibrant-indigo/20 text-[10px] font-semibold text-frost-white hover:bg-vibrant-indigo/35 hover:border-vibrant-indigo/40 transition-all flex items-center gap-1 font-mono"
            >
              {primaryLink.icon === 'game' && <Gamepad2 className="w-3 h-3 text-vibrant-indigo" />}
              {primaryLink.icon === 'play' && <Play className="w-3 h-3 text-vibrant-indigo" />}
              {primaryLink.icon === 'book' && <BookOpen className="w-3 h-3 text-vibrant-indigo" />}
              {primaryLink.icon === 'external' && <ArrowUpRight className="w-3 h-3 text-vibrant-indigo" />}
              <span>{primaryLink.label}</span>
            </a>
          </div>
        )}
      </div>
    </BentoCard>
  );
}
