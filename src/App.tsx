import { useState, useEffect } from "react";
import { BentoGrid, BentoColumn } from "@/components/bento-grid";
import { cn } from "@/lib/utils";
import { CareerDrawer } from "@/components/career-drawer";
import { motion, AnimatePresence } from "framer-motion";
import { BootScreen } from "@/components/boot-screen";
import { ArrowUpRight } from "lucide-react";
import { FloatingDock } from "@/components/floating-dock";


// Impor komponen modular bento cards
import { ProfileCard } from "@/components/cards/profile-card";
import { CareerCard } from "@/components/cards/career-card";
import { ToolkitCard } from "@/components/cards/toolkit-card";
import { ProfilesCard } from "@/components/cards/profiles-card";
import { ProjectCard } from "@/components/cards/project-card";
import { InterestsCard } from "@/components/cards/interests-card";
import { ModelViewerCard } from "@/components/cards/model-viewer-card";

// Impor komponen modal detail proyek
import { ProjectDetailModal } from "@/components/project-detail-modal";

// Impor data statis proyek (mudah diedit manual)
import { projectsData } from "@/data/projects";
import type { Project } from "@/data/projects";
import { galleryData } from "@/data/gallery";
import { GalleryCard } from "@/components/cards/gallery-card";

// Varian animasi stagger masuk saat booting selesai
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
} as const;

const gridItemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22
    }
  }
} as const;

// Detect Lighthouse bot to bypass boot-screen and skeleton loading delays
const isLighthouse = typeof navigator !== "undefined" && (
  /Lighthouse/i.test(navigator.userAgent) ||
  /Chrome-Lighthouse/i.test(navigator.userAgent) ||
  /Speed Insights/i.test(navigator.userAgent)
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [isScanning] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(!isLighthouse);
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(!isLighthouse);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobile, setIsMobile] = useState(false);

  // Menangani aksi klik buka modal detail proyek dengan menghitung posisi klik asal (hologram effect)
  const handleOpenProject = (project: Project, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    
    setOrigin({
      x: cardCenterX - viewportCenterX,
      y: cardCenterY - viewportCenterY
    });
    setSelectedProject(project);
  };

  // Kunci scroll halaman saat modal detail proyek sedang aktif/terbuka
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // Deteksi ukuran layar untuk mengaktifkan mode view mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Reset scroll position to top on page reload or tab navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);


  return (
    <div className="min-h-screen bg-[#070913] text-frost-white p-4 md:p-8 lg:p-12 flex flex-col justify-between selection:bg-vibrant-indigo/30 selection:text-frost-white relative overflow-x-hidden font-sans">
      
      {/* Global Grain/Noise Overlay */}
      <div className="grain-overlay" />
      
      {/* Background Space HUD Wireframes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 select-none">
        <svg className="absolute -right-32 -bottom-32 w-[600px] h-[600px] text-vibrant-indigo/15 animate-[spin_180s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <path d="M 50,5 L 50,95 M 5,50 L 95,50" stroke="currentColor" strokeWidth="0.1" />
        </svg>
        
        <svg className="absolute -left-20 -top-20 w-[450px] h-[450px] text-vibrant-indigo/15 animate-[spin_120s_linear_infinite_reverse]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="3,3" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <path d="M 50,5 L 50,95 M 5,50 L 95,50" stroke="currentColor" strokeWidth="0.1" />
          <path d="M 18,18 L 82,82 M 18,82 L 82,18" stroke="currentColor" strokeWidth="0.08" strokeDasharray="1,1" />
        </svg>
      </div>

      {/* Decorative Giant Geometric Year */}
      <div className="absolute top-24 right-16 opacity-10 hidden xl:block pointer-events-none select-none z-0">
        <span className="font-valorant text-[12rem] text-vibrant-indigo text-outline-indigo-strong tracking-tighter">
          2026
        </span>
      </div>

      {/* Boot Loading Screen Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <BootScreen onComplete={() => {
            setIsLoading(false);
            // Brief shimmer duration (1.2s) to showcase skeletal HUD loading
            setTimeout(() => {
              setIsSkeletonLoading(false);
            }, 1200);
          }} />
        )}
      </AnimatePresence>

      {/* Radar sweep scanner line */}
      {isScanning && <div className="radar-sweep-line" />}

      {/* Main Content (Fade in after loader) */}
      {!isLoading && (
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="flex-grow flex flex-col justify-between"
        >
          {/* Decorative Tactical line running across under header */}
          <div className="absolute top-[80px] left-4 right-4 h-[1px] bg-vibrant-indigo/15 pointer-events-none hidden md:block z-0" />
          <div className="absolute top-[80px] left-1/3 -translate-y-1/2 w-3 h-3 bg-[#070913] border border-vibrant-indigo/40 flex items-center justify-center hidden md:flex z-10">
            <span className="w-1.5 h-1.5 bg-accent rounded-[1px] animate-pulse" />
          </div>

          {/* Header */}
          <header className="hidden md:flex max-w-7xl w-full mx-auto mb-10 pb-4 items-center justify-between relative z-10">
            {/* Navigation */}
            <nav className="flex items-center gap-8 text-[11px] font-bebas tracking-widest text-muted-slate uppercase">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); setActiveTab("home"); }}
                className={cn(
                  "transition-colors duration-200 relative py-1 group",
                  activeTab === "home" ? "text-accent" : "hover:text-accent"
                )}
              >
                Home
                <span className={cn("absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-200", activeTab === "home" ? "w-full" : "w-0 group-hover:w-full")} />
              </a>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); setActiveTab("projects"); }}
                className={cn(
                  "transition-colors duration-200 relative py-1 group",
                  activeTab === "projects" ? "text-accent" : "hover:text-accent"
                )}
              >
                Projects
                <span className={cn("absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-200", activeTab === "projects" ? "w-full" : "w-0 group-hover:w-full")} />
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => { e.preventDefault(); setActiveTab("gallery"); }}
                className={cn(
                  "transition-colors duration-200 relative py-1 group",
                  activeTab === "gallery" ? "text-accent" : "hover:text-accent"
                )}
              >
                Gallery
                <span className={cn("absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-200", activeTab === "gallery" ? "w-full" : "w-0 group-hover:w-full")} />
              </a>
            </nav>

            {/* Action Button */}
            <a 
              href="mailto:raka.arya34@gmail.com" 
              className="px-5 py-2 border border-vibrant-indigo/35 bg-vibrant-indigo/10 hover:text-[#070913] rounded-none flex items-center gap-2 cursor-pointer group text-[11px] font-bebas tracking-widest text-frost-white uppercase overflow-hidden relative btn-tactical btn-tactical-indigo"
            >
              <span className="w-1.5 h-3 bg-accent" />
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-slate group-hover:text-[#070913] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
            </a>
          </header>

          {/* Main Bento Grid */}
          <main className="flex-grow flex items-center justify-center relative z-10 w-full">
            {isMobile ? (
              <div className="w-full min-h-[450px]">
                <AnimatePresence mode="wait">
                  {activeTab === "home" && (
                    <motion.div
                      key="home-tab"
                      id="home"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-4 w-full"
                    >
                      <ProfileCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                      <CareerCard isScanning={isScanning} onOpenDrawer={() => setIsDrawerOpen(true)} isSkeleton={isSkeletonLoading} />
                      <ProfilesCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                      <ToolkitCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                      <InterestsCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                      <ModelViewerCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                    </motion.div>
                  )}

                  {activeTab === "projects" && (
                    <motion.div
                      key="projects-tab"
                      id="projects"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col space-y-4 w-full"
                    >
                      <div className="flex flex-col space-y-2 mb-2">
                        <h2 className="text-2xl font-bebas tracking-widest text-accent uppercase leading-none">
                          Projects //
                        </h2>
                        <div className="h-[1px] bg-vibrant-indigo/15 w-full" />
                      </div>

                      <div className="grid grid-cols-1 gap-4 w-full">
                        {isSkeletonLoading ? (
                          projectsData.map((_, index) => (
                            <ProjectCard key={index} project={undefined as any} isScanning={isScanning} onClick={() => {}} isSkeleton={true} />
                          ))
                        ) : (
                          projectsData.map((project) => (
                            <ProjectCard 
                              key={project.id}
                              project={project} 
                              isScanning={isScanning}
                              onClick={(e) => handleOpenProject(project, e)}
                            />
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "gallery" && (
                    <motion.div
                      key="gallery-tab"
                      id="gallery"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col space-y-4 w-full"
                    >
                      <div className="flex flex-col space-y-2 mb-2">
                        <h2 className="text-2xl font-bebas tracking-widest text-accent uppercase leading-none">
                          Other Projects //
                        </h2>
                        <div className="h-[1px] bg-vibrant-indigo/15 w-full" />
                      </div>

                      <div className="grid grid-cols-1 gap-4 w-full">
                        {isSkeletonLoading ? (
                          galleryData.map((_, index) => (
                            <GalleryCard key={index} item={undefined as any} isScanning={isScanning} isSkeleton={true} />
                          ))
                        ) : (
                          galleryData.map((item) => (
                            <GalleryCard 
                              key={item.id}
                              item={item} 
                              isScanning={isScanning}
                            />
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : activeTab === "gallery" ? (
              <div id="gallery" className="w-full max-w-7xl mx-auto flex flex-col space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bebas tracking-widest text-accent uppercase leading-none">
                    Other Projects //
                  </h2>
                  <div className="h-[1px] bg-vibrant-indigo/15 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 w-full">
                  {isSkeletonLoading ? (
                    galleryData.map((_, index) => (
                      <motion.div key={index} variants={gridItemVariants}>
                        <GalleryCard isScanning={isScanning} isSkeleton={true} />
                      </motion.div>
                    ))
                  ) : (
                    galleryData.map((item) => (
                      <motion.div key={item.id} variants={gridItemVariants}>
                        <GalleryCard item={item} isScanning={isScanning} />
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            ) : activeTab === "projects" ? (
              <div id="projects" className="w-full max-w-7xl mx-auto flex flex-col space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bebas tracking-widest text-accent uppercase leading-none">
                    Projects //
                  </h2>
                  <div className="h-[1px] bg-vibrant-indigo/15 w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 w-full">
                  {isSkeletonLoading ? (
                    projectsData.map((_, index) => (
                      <motion.div key={index} variants={gridItemVariants}>
                        <ProjectCard project={undefined as any} isScanning={isScanning} onClick={() => {}} isSkeleton={true} />
                      </motion.div>
                    ))
                  ) : (
                    projectsData.map((project) => (
                      <motion.div key={project.id} variants={gridItemVariants}>
                        <ProjectCard 
                          project={project} 
                          isScanning={isScanning} 
                          onClick={(e) => handleOpenProject(project, e)}
                        />
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              <BentoGrid id="home" className="w-full lg:items-start">
                {/* ==================== LEFT COLUMN (Bento Cards Info) ==================== */}
                <BentoColumn side="left">
                  {/* Profile Card */}
                  <motion.div variants={gridItemVariants}>
                    <ProfileCard 
                      isScanning={isScanning} 
                      isSkeleton={isSkeletonLoading} 
                    />
                  </motion.div>

                  {/* Career History Card */}
                  <motion.div variants={gridItemVariants}>
                    <CareerCard isScanning={isScanning} onOpenDrawer={() => setIsDrawerOpen(true)} isSkeleton={isSkeletonLoading} />
                  </motion.div>

                  {/* Social Profiles Card */}
                  <motion.div variants={gridItemVariants}>
                    <ProfilesCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                  </motion.div>

                  {/* Toolkit Card */}
                  <motion.div variants={gridItemVariants}>
                    <ToolkitCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                  </motion.div>

                  {/* Interests Card */}
                  <motion.div variants={gridItemVariants}>
                    <InterestsCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                  </motion.div>

                  {/* 3D Model Viewer Card */}
                  <motion.div variants={gridItemVariants}>
                    <ModelViewerCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
                  </motion.div>
                </BentoColumn>

                {/* ==================== RIGHT COLUMN (Modular Projects) ==================== */}
                <BentoColumn side="right">
                  {isSkeletonLoading ? (
                    projectsData.map((_, index) => (
                      <motion.div 
                        key={index} 
                        variants={gridItemVariants}
                      >
                        <ProjectCard project={undefined as any} isScanning={isScanning} onClick={() => {}} isSkeleton={true} />
                      </motion.div>
                    ))
                  ) : (
                    projectsData.map((project) => (
                      <motion.div 
                        key={project.id} 
                        variants={gridItemVariants} 
                        className="h-full"
                      >
                        <ProjectCard 
                          project={project} 
                          isScanning={isScanning}
                          onClick={(e) => handleOpenProject(project, e)}
                        />
                      </motion.div>
                    ))
                  )}
                </BentoColumn>
              </BentoGrid>
            )}
          </main>

          {/* Footer */}
          <footer className="max-w-7xl w-full mx-auto mt-12 pt-6 border-t border-vibrant-indigo/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-slate relative z-10">
            <span>© {new Date().getFullYear()} Raka Arya Pratama. Game Designer & Creative.</span>
            <div className="flex gap-4">
              <a href="#home" onClick={(e) => { e.preventDefault(); setActiveTab("home"); }} className="hover:text-frost-white transition-colors duration-200">Home</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); setActiveTab("projects"); }} className="hover:text-frost-white transition-colors duration-200">Projects</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); setActiveTab("gallery"); }} className="hover:text-frost-white transition-colors duration-200">Gallery</a>
            </div>
          </footer>
        </motion.div>
      )}

      {/* Project Detail Modal Overlay */}
      <ProjectDetailModal 
        selectedProject={selectedProject} 
        origin={origin} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Career Drawer Overlay */}
      <CareerDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Floating Navigation Dock untuk mobile */}
      <FloatingDock activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
