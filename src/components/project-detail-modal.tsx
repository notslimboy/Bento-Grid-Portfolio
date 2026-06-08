import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Play, Gamepad2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTechBadgeStyles } from "@/lib/badge-styles";
import type { Project } from "@/data/projects";
import { ProjectSlider } from "@/components/project-slider";

interface ProjectDetailModalProps {
  selectedProject: Project | null;
  origin: { x: number; y: number };
  onClose: () => void;
}

// Framer motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    }
  },
} as const;

export function ProjectDetailModal({ selectedProject, origin, onClose }: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-midnight/90 backdrop-blur-md"
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-default" onClick={onClose} />
          
          {/* Modal Container Wrapper (for absolute close button positioning) */}
          <motion.div 
            initial={{ 
              x: origin.x, 
              y: origin.y, 
              scaleY: 0.002, 
              scaleX: 0.1, 
              opacity: 0, 
              filter: "brightness(3) contrast(1.5) blur(4px)" 
            }}
            animate={{ 
              x: 0,
              y: 0,
              scaleY: 1, 
              scaleX: 1, 
              opacity: [0, 1, 0.45, 0.9, 0.7, 1], // Hologram flicker
              filter: "brightness(1) contrast(1) blur(0px)",
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.25), inset 0 0 12px rgba(99, 102, 241, 0.15)",
                "0 0 50px rgba(6, 182, 212, 0.4), inset 0 0 24px rgba(6, 182, 212, 0.25)",
                "0 0 20px rgba(99, 102, 241, 0.25), inset 0 0 12px rgba(99, 102, 241, 0.15)"
              ],
              borderColor: [
                "rgba(99, 102, 241, 0.35)",
                "rgba(6, 182, 212, 0.7)",
                "rgba(99, 102, 241, 0.35)"
              ]
            }}
            exit={{ 
              x: origin.x, 
              y: origin.y, 
              scaleY: 0.002, 
              scaleX: 0.1, 
              opacity: 0, 
              filter: "brightness(3) contrast(1.5) blur(2px)" 
            }}
            transition={{
              scaleY: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              scaleX: { duration: 0.25, ease: "easeOut" },
              x: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.4 },
              boxShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              borderColor: { repeat: Infinity, duration: 3, ease: "easeInOut" }
            }}
            className="relative max-w-5xl w-full max-h-[90vh] z-10 flex flex-col items-stretch border rounded-2xl bg-slate-indigo/95 hud-grid-overlay overflow-hidden"
          >
            {/* Holographic Projection Scanlines */}
            <div className="hologram-scanlines" />

            {/* Holographic sweeping laser scanline */}
            <div className="hologram-sweep-line" />

            {/* Tech Blueprint Corner Brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-vibrant-indigo/40 pointer-events-none z-30" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-vibrant-indigo/40 pointer-events-none z-30" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-vibrant-indigo/40 pointer-events-none z-30" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-vibrant-indigo/40 pointer-events-none z-30" />
            
            {/* Telemetry Labels */}
            <div className="absolute top-4 left-10 text-[8px] font-mono text-muted-slate/40 tracking-widest pointer-events-none z-30">
              SYS.LOG // ENCRYPTED_CONNECTION_SECURE
            </div>
            <div className="absolute bottom-4 left-10 text-[8px] font-mono text-muted-slate/40 tracking-widest pointer-events-none z-30">
              SCHEMA_MAPPED // LEVEL 3 SYSTEM DIAGNOSTIC
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 p-2 text-muted-slate hover:text-cyan-400 transition-colors cursor-pointer z-50 active:scale-95"
              style={{ touchAction: 'manipulation' }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Card Panel */}
            <div className="w-full max-h-[90vh] overflow-y-auto md:overflow-hidden p-5 pt-16 pb-8 md:p-8 md:pt-14 md:pb-14 flex flex-col md:grid md:grid-cols-12 gap-5 md:gap-8 rounded-2xl">
              
              {/* Left Side: Info */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="md:col-span-5 flex flex-col justify-start md:justify-between space-y-4 md:space-y-6 pb-4 md:pb-6 order-2 md:order-1 md:max-h-[calc(90vh-8rem)] md:overflow-y-auto md:pr-3 scrollbar-thin scrollbar-thumb-vibrant-indigo/20 scrollbar-track-transparent"
              >
                <div className="space-y-4">
                  {/* Header Tag, Roles, and Timeline */}
                  <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-[9px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-vibrant-indigo/10 border border-vibrant-indigo/20 text-[9px] font-mono tracking-widest text-vibrant-indigo uppercase">
                      LOG_ID: {selectedProject.id.toUpperCase()}_PRJ
                    </span>
                    {selectedProject.roles.map((r) => (
                      <span key={r} className="px-2 py-0.5 rounded-md bg-electric-purple/15 border border-electric-purple/20 text-[9px] font-semibold text-electric-purple uppercase tracking-wider font-mono">
                        {r}
                      </span>
                    ))}
                    <span className="text-[10px] text-muted-slate font-medium pl-1 font-mono">
                      • {selectedProject.timeline}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <div className="space-y-1">
                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-heading font-bold text-frost-white bg-gradient-to-r from-frost-white to-muted-slate bg-clip-text text-transparent animate-in fade-in slide-in-from-left duration-500">
                      {selectedProject.title}
                    </motion.h2>
                  </div>

                  {/* Project Links */}
                  <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 pt-1 pb-2">
                    {selectedProject.links.map((link) => {
                      const isPlay = link.icon === 'game' || link.icon === 'play';
                      return (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(
                            "px-3.5 py-1.5 rounded-xl text-[11px] font-semibold flex items-center gap-1.5 transition-all border font-mono",
                            isPlay 
                              ? "bg-vibrant-indigo/20 border-vibrant-indigo/30 text-frost-white hover:bg-vibrant-indigo/35 hover:border-vibrant-indigo/50 hover:scale-[1.02]" 
                              : "bg-slate-indigo border-vibrant-indigo/10 text-muted-slate hover:text-frost-white hover:border-vibrant-indigo/25 hover:scale-[1.02]"
                          )}
                        >
                          {link.icon === 'book' && <BookOpen className="w-3.5 h-3.5" />}
                          {link.icon === 'play' && <Play className="w-3.5 h-3.5" />}
                          {link.icon === 'game' && <Gamepad2 className="w-3.5 h-3.5" />}
                          {link.icon === 'external' && <ArrowUpRight className="w-3.5 h-3.5" />}
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                  </motion.div>

                  {/* Long Description */}
                  <motion.p variants={itemVariants} className="text-xs md:text-sm text-muted-slate leading-relaxed font-sans border-l border-vibrant-indigo/20 pl-3">
                    {selectedProject.detailedDescription}
                  </motion.p>

                  {/* Features Checklist */}
                  <motion.div variants={itemVariants} className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-frost-white font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                      <span>Mission Objectives:</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-slate">
                          <span className="w-1.5 h-1.5 rounded-full bg-vibrant-indigo mt-1.5 shrink-0 shadow-[0_0_6px_#6366F1]" />
                          <span className="leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div variants={itemVariants} className="space-y-2 pt-4 border-t border-vibrant-indigo/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-slate block font-mono">SYSTEM INTERFACES:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className={cn(
                          "px-2.5 py-1 rounded-lg border text-[10px] font-semibold transition-all duration-300 font-mono",
                          getTechBadgeStyles(tech)
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side: Media Stack */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="md:col-span-7 flex flex-col justify-between pb-6 order-1 md:order-2 md:max-h-[calc(90vh-8rem)] md:overflow-y-auto md:pr-3 scrollbar-thin scrollbar-thumb-vibrant-indigo/20 scrollbar-track-transparent"
              >
                {/* Mobile Slider View (S, M, L screens) */}
                <div className="block md:hidden w-full aspect-video rounded-2xl overflow-hidden border border-vibrant-indigo/10 bg-slate-indigo/30 relative mb-3 shrink-0">
                  <ProjectSlider slides={selectedProject.slides} className="h-full w-full" />
                </div>

                {/* Desktop Stacking View */}
                <div className="hidden md:flex md:flex-col space-y-5">
                  {selectedProject.slides.map((slide, idx) => (
                    <motion.div 
                      key={slide.id} 
                      variants={itemVariants}
                      className="aspect-video w-full relative rounded-[20px] overflow-hidden border border-vibrant-indigo/10 bg-slate-indigo/30 group animate-in fade-in slide-in-from-bottom duration-500"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      {slide.videoUrl ? (
                        <div className="w-full h-full relative">
                          <video
                            src={slide.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-80 z-10" />
                        </div>
                      ) : slide.imageUrl ? (
                        <div className="w-full h-full relative">
                          <img
                            src={slide.imageUrl}
                            alt={slide.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-80 z-10" />
                        </div>
                      ) : (
                        <div className={cn("w-full h-full bg-gradient-to-br transition-all duration-500", slide.color)}>
                          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:16px_16px]" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-vibrant-indigo/10 animate-[spin_20s_linear_infinite]" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-electric-purple/10 animate-[spin_10s_linear_infinite_reverse]" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-vibrant-indigo/25 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-vibrant-indigo animate-ping" />
                          </div>
                          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-vibrant-indigo/30" />
                          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-vibrant-indigo/30" />
                          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-vibrant-indigo/30" />
                          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-vibrant-indigo/30" />
                          <div className="absolute inset-0 bg-radial-gradient from-transparent to-midnight/50" />
                        </div>
                      )}

                      {/* Content Overlay on Media Card */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 space-y-0.5 pointer-events-none">
                        <span className="text-[9px] font-semibold text-electric-purple/95 font-heading tracking-wider uppercase bg-midnight/50 px-2 py-0.5 rounded border border-vibrant-indigo/10 backdrop-blur-sm w-fit inline-block">
                          {slide.subtitle}
                        </span>
                        <h4 className="text-xs md:text-sm font-heading font-bold text-frost-white filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {slide.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
