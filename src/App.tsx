import { useState, useEffect } from "react";
import { BentoGrid, BentoColumn } from "@/components/bento-grid";
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

// Impor komponen modal detail proyek
import { ProjectDetailModal } from "@/components/project-detail-modal";

// Impor data statis proyek (mudah diedit manual)
import { projectsData } from "@/data/projects";
import type { Project } from "@/data/projects";

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

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [isScanning] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("about");
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

  return (
    <div className="min-h-screen bg-midnight text-frost-white p-4 md:p-8 lg:p-12 flex flex-col justify-between selection:bg-vibrant-indigo/30 selection:text-frost-white relative overflow-x-hidden">
      
      {/* Boot Loading Screen Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <BootScreen onComplete={() => setIsLoading(false)} />
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
          {/* Header */}
          <header className="max-w-7xl w-full mx-auto mb-10 flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-lg tracking-tight bg-gradient-to-r from-frost-white to-muted-slate bg-clip-text text-transparent">
                Raka Arya Pratama
              </span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 bg-slate-indigo/40 border border-vibrant-indigo/5 px-6 py-2.5 rounded-full backdrop-blur-md text-sm">
              <a href="#about" className="text-muted-slate hover:text-frost-white transition-colors duration-200">About</a>
              <a href="#projects" className="text-muted-slate hover:text-frost-white transition-colors duration-200">Projects</a>
              <a href="#gallery" className="text-muted-slate hover:text-frost-white transition-colors duration-200">Gallery</a>
            </nav>

            {/* Action Button */}
            <a 
              href="mailto:raka.arya34@gmail.com" 
              className="px-5 py-2.5 rounded-full bg-vibrant-indigo/10 border border-vibrant-indigo/20 flex items-center gap-1.5 cursor-pointer hover:bg-vibrant-indigo/20 hover:border-vibrant-indigo/40 transition-all duration-300 group text-sm"
            >
              <span className="font-medium">Hire Me</span>
              <ArrowUpRight className="w-4 h-4 text-muted-slate group-hover:text-frost-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </header>

          {/* Main Bento Grid */}
          <main className="flex-grow flex items-center justify-center relative z-10 w-full">
            {isMobile ? (
              <div className="w-full min-h-[450px]">
                <AnimatePresence mode="wait">
                  {activeTab === "about" && (
                    <motion.div
                      key="about-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-4 w-full"
                    >
                      <ProfileCard isScanning={isScanning} />
                      <ToolkitCard isScanning={isScanning} />
                      <ProfilesCard isScanning={isScanning} />
                    </motion.div>
                  )}

                  {activeTab === "projects" && (
                    <motion.div
                      key="projects-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-4 w-full"
                    >
                      <CareerCard isScanning={isScanning} onOpenDrawer={() => setIsDrawerOpen(true)} />
                    </motion.div>
                  )}

                  {activeTab === "gallery" && (
                    <motion.div
                      key="gallery-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 gap-4 w-full"
                    >
                      {projectsData.map((project) => (
                        <ProjectCard 
                          key={project.id}
                          project={project} 
                          isScanning={isScanning}
                          onClick={(e) => handleOpenProject(project, e)}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <BentoGrid className="w-full">
                {/* ==================== LEFT COLUMN (Bento Cards Info) ==================== */}
                <BentoColumn side="left">
                  {/* Profile Card */}
                  <motion.div variants={gridItemVariants} id="about">
                    <ProfileCard isScanning={isScanning} />
                  </motion.div>

                  {/* Career History Card */}
                  <motion.div variants={gridItemVariants} id="projects">
                    <CareerCard isScanning={isScanning} onOpenDrawer={() => setIsDrawerOpen(true)} />
                  </motion.div>

                  {/* Toolkit Card */}
                  <motion.div variants={gridItemVariants}>
                    <ToolkitCard isScanning={isScanning} />
                  </motion.div>

                  {/* Social Profiles Card */}
                  <motion.div variants={gridItemVariants}>
                    <ProfilesCard isScanning={isScanning} />
                  </motion.div>
                </BentoColumn>

                {/* ==================== RIGHT COLUMN (Modular Projects) ==================== */}
                <BentoColumn side="right" id="gallery">
                  {projectsData.map((project) => (
                    <motion.div key={project.id} variants={gridItemVariants} className="h-full">
                      <ProjectCard 
                        project={project} 
                        isScanning={isScanning}
                        onClick={(e) => handleOpenProject(project, e)}
                      />
                    </motion.div>
                  ))}
                </BentoColumn>
              </BentoGrid>
            )}
          </main>

          {/* Footer */}
          <footer className="max-w-7xl w-full mx-auto mt-12 pt-6 border-t border-vibrant-indigo/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-slate relative z-10">
            <span>© {new Date().getFullYear()} Raka Arya Pratama. Game Designer & Creative.</span>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-frost-white transition-colors duration-200">About</a>
              <a href="#projects" className="hover:text-frost-white transition-colors duration-200">Projects</a>
              <a href="#gallery" className="hover:text-frost-white transition-colors duration-200">Gallery</a>
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
