import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { AppBackground, HeaderHudLine } from "@/components/app/app-background";
import { gridContainerVariants, gridItemVariants } from "@/components/app/app-animations";
import { AppTabContent } from "@/components/app/app-tab-content";
import { preloadAppTab } from "@/components/app/app-tab-preload";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { FloatingDock } from "@/components/floating-dock";
import { defaultTab } from "@/data/site";
import { useMobile } from "@/hooks/use-mobile";
import { useProjectModal } from "@/hooks/use-project-modal";
import type { AppTab } from "@/types/portfolio";

const ProjectDetailModal = lazy(() => import("@/components/project-detail-modal").then((module) => ({
  default: module.ProjectDetailModal,
})));

export default function App() {
  const [isScanning] = useState(false);
  const [activeTab, setActiveTab] = useState<AppTab>(defaultTab);
  const isMobile = useMobile();
  const { selectedProject, origin, openProject, closeProject } = useProjectModal();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.05,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleTabChange = (tab: AppTab) => {
    preloadAppTab(tab);
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#070913] text-frost-white p-4 md:p-8 lg:p-12 flex flex-col justify-between selection:bg-vibrant-indigo/30 selection:text-frost-white relative overflow-x-hidden font-sans">
      <AppBackground />

      {isScanning && <div className="radar-sweep-line" />}

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="flex-grow flex flex-col justify-between"
      >
        <HeaderHudLine />
        <SiteHeader activeTab={activeTab} onTabChange={handleTabChange} onTabIntent={preloadAppTab} />

        <main className="flex-grow flex items-center justify-center relative z-10 w-full">
          <AppTabContent
            activeTab={activeTab}
            isMobile={isMobile}
            isScanning={isScanning}
            isSkeletonLoading={false}
            itemVariants={gridItemVariants}
            onTabChange={handleTabChange}
            onOpenProject={openProject}
          />
        </main>

        <SiteFooter onTabChange={handleTabChange} onTabIntent={preloadAppTab} />
      </motion.div>

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectDetailModal selectedProject={selectedProject} origin={origin} onClose={closeProject} />
        </Suspense>
      )}
      <FloatingDock activeTab={activeTab} setActiveTab={handleTabChange} onTabIntent={preloadAppTab} />
    </div>
  );
}
