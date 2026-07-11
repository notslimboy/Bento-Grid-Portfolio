import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Play, Gamepad2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";
import { ProjectSlider } from "@/components/project-slider";
import { ProjectMedia } from "@/components/project-media";

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
                "0 0 50px rgba(139, 92, 246, 0.4), inset 0 0 24px rgba(139, 92, 246, 0.25)",
                "0 0 20px rgba(99, 102, 241, 0.25), inset 0 0 12px rgba(99, 102, 241, 0.15)"
              ],
              borderColor: [
                "rgba(99, 102, 241, 0.35)",
                "rgba(139, 92, 246, 0.7)",
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
            className="fixed inset-x-4 top-4 bottom-4 mx-auto w-auto max-w-5xl z-10 flex flex-col items-stretch border-0 rounded-sm bg-[#0e1122]/95 hud-grid-overlay overflow-hidden md:inset-x-6 md:top-6 md:bottom-6 lg:static lg:w-full lg:max-h-[90vh] lg:border"
          >
            {/* HUD background remains fixed to the modal shell while content scrolls above it. */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
              <div className="hologram-scanlines" />
              <div className="hologram-sweep-line" />
            </div>

            {/* Desktop modal-frame chrome */}
            <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block" aria-hidden="true">
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-vibrant-indigo/40" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-vibrant-indigo/40" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-vibrant-indigo/40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-vibrant-indigo/40" />

              <div className="absolute top-4 left-10 text-[8px] font-mono text-muted-slate/40 tracking-widest">
                SYS.LOG // ENCRYPTED_CONNECTION_SECURE
              </div>
              <div className="absolute bottom-4 left-10 text-[8px] font-mono text-muted-slate/40 tracking-widest">
                SCHEMA_MAPPED // LEVEL 3 SYSTEM DIAGNOSTIC
              </div>
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-3 right-2 p-2 text-muted-slate hover:text-vibrant-indigo transition-colors cursor-pointer z-50 active:scale-95 lg:top-4"
              style={{ touchAction: 'manipulation' }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Mobile and tablet: the HUD is part of the modal document, above and below its content. */}
            <div className="relative z-10 w-full min-h-0 flex-1 overflow-y-auto overscroll-contain lg:max-h-[90vh] lg:flex-none">
              <div className="flex min-h-full flex-col">
                <div className="relative h-16 shrink-0 lg:hidden" aria-hidden="true">
                  <div className="absolute top-3 left-4 w-4 h-4 border-t-2 border-l-2 border-vibrant-indigo/40" />
                  <div className="absolute top-3 right-4 w-4 h-4 border-t-2 border-r-2 border-vibrant-indigo/40" />
                  <div className="absolute top-3 left-10 text-[8px] font-mono text-muted-slate/40 tracking-widest">
                    SYS.LOG // ENCRYPTED_CONNECTION_SECURE
                  </div>
                </div>

                {/* Modal Card Panel */}
                <div className="w-full p-5 pt-4 pb-4 md:p-8 md:pt-6 md:pb-6 flex flex-col md:grid md:grid-cols-12 gap-5 md:gap-8 rounded-sm">
              
              {/* Left Side: Info */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="md:col-span-5 flex flex-col justify-start md:justify-between space-y-4 md:space-y-6 pb-4 md:pb-6 order-2 md:order-1 lg:max-h-[calc(90vh-8rem)] lg:overflow-y-auto lg:pr-3 scrollbar-thin scrollbar-thumb-vibrant-indigo/20 scrollbar-track-transparent"
              >
                <div className="space-y-4">
                  {/* Header Tag, Roles, and Timeline */}
                  <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-none bg-accent/15 border border-accent/40 text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-none bg-vibrant-indigo/10 border border-vibrant-indigo/35 text-[10px] font-mono tracking-widest text-vibrant-indigo uppercase">
                      LOG_ID: {selectedProject.id.toUpperCase()}_PRJ
                    </span>
                    {selectedProject.publisher && (
                      <span className="px-2.5 py-1 rounded-none bg-accent/10 border border-accent/35 text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
                        Publisher: {selectedProject.publisher}
                      </span>
                    )}
                    {selectedProject.roles.map((r) => (
                      <span key={r} className="px-2 py-0.5 rounded-none bg-vibrant-indigo/10 border border-vibrant-indigo/25 text-[10px] font-semibold text-frost-white uppercase tracking-wider font-mono">
                        {r}
                      </span>
                    ))}
                    <span className="text-xs text-muted-slate font-medium pl-1 font-mono">
                      • {selectedProject.timeline}
                    </span>
                  </motion.div>
 
                  {/* Title */}
                  <div className="space-y-1">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bebas font-bold text-frost-white uppercase tracking-widest">
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
                            "px-4 py-2 rounded-none text-xs md:text-sm font-bold flex items-center gap-1.5 border font-bebas tracking-wider uppercase btn-tactical",
                            isPlay 
                              ? "bg-accent/15 border-accent/40 text-accent hover:text-[#070913] btn-tactical-cyan" 
                              : "bg-vibrant-indigo/10 border-vibrant-indigo/25 text-frost-white hover:text-[#070913] btn-tactical-indigo"
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
                  <motion.p variants={itemVariants} className="text-sm md:text-base text-frost-white/95 leading-relaxed font-sans border-l-2 border-accent/45 pl-3 whitespace-pre-line">
                    {selectedProject.detailedDescription}
                  </motion.p>

                  {/* Features Checklist */}
                  <motion.div variants={itemVariants} className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-accent font-bebas flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-none rotate-45 animate-pulse" />
                      <span>Mission Objectives:</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-frost-white/90">
                          <span className="w-1.5 h-1.5 rounded-none rotate-45 bg-accent mt-1.5 shrink-0 shadow-[0_0_6px_#06B6D4]" />
                          <span className="leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div variants={itemVariants} className="space-y-2 pt-4 border-t border-vibrant-indigo/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-slate block font-mono">SYSTEM INTERFACES:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 border border-vibrant-indigo/25 bg-vibrant-indigo/5 text-frost-white rounded-none text-xs font-semibold font-mono"
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
                className="md:col-span-7 flex flex-col justify-between pb-6 order-1 md:order-2 lg:max-h-[calc(90vh-8rem)] lg:overflow-y-auto lg:pr-3 scrollbar-thin scrollbar-thumb-vibrant-indigo/20 scrollbar-track-transparent"
              >
                {/* Mobile Slider View (S, M, L screens) */}
                <div className="block md:hidden w-full aspect-video rounded-none overflow-hidden border border-vibrant-indigo/10 bg-slate-indigo/30 relative mb-3 shrink-0">
                  <ProjectSlider slides={selectedProject.slides} className="h-full w-full rounded-none" />
                </div>

                {/* Desktop Stacking View */}
                <div className="hidden md:flex md:flex-col space-y-5">
                  {selectedProject.slides.map((slide, idx) => (
                    <motion.div 
                      key={slide.id} 
                      variants={itemVariants}
                      className="aspect-video w-full relative rounded-none overflow-hidden border border-vibrant-indigo/10 bg-slate-indigo/30 group animate-in fade-in slide-in-from-bottom duration-500"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      <ProjectMedia slide={slide} variant="stack" />

                      {/* Content Overlay on Media Card */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 space-y-0.5 pointer-events-none">
                        <span className="text-[9px] font-semibold text-electric-purple/95 font-heading tracking-wider uppercase bg-midnight/50 px-2 py-0.5 rounded-none border border-vibrant-indigo/10 backdrop-blur-sm w-fit inline-block">
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

                <div className="relative h-14 shrink-0 lg:hidden" aria-hidden="true">
                  <div className="absolute bottom-3 left-4 w-4 h-4 border-b-2 border-l-2 border-vibrant-indigo/40" />
                  <div className="absolute bottom-3 right-4 w-4 h-4 border-b-2 border-r-2 border-vibrant-indigo/40" />
                  <div className="absolute bottom-3 left-10 text-[8px] font-mono text-muted-slate/40 tracking-widest">
                    SCHEMA_MAPPED // LEVEL 3 SYSTEM DIAGNOSTIC
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
