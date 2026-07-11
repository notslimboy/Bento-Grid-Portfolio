import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppBackground, HeaderHudLine } from "@/components/app/app-background";
import { gridContainerVariants, gridItemVariants, isLighthouse } from "@/components/app/app-animations";
import { AppTabContent } from "@/components/app/app-tab-content";
import { SiteFooter } from "@/components/app/site-footer";
import { SiteHeader } from "@/components/app/site-header";
import { BootScreen } from "@/components/boot-screen";
import { FloatingDock } from "@/components/floating-dock";
import { ProjectDetailModal } from "@/components/project-detail-modal";
import { defaultTab } from "@/data/site";
import { useMobile } from "@/hooks/use-mobile";
import { useProjectModal } from "@/hooks/use-project-modal";
import type { AppTab } from "@/types/portfolio";

export default function App() {
  const [isScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(!isLighthouse);
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(!isLighthouse);
  const [activeTab, setActiveTab] = useState<AppTab>(defaultTab);
  const isMobile = useMobile();
  const { selectedProject, origin, openProject, closeProject } = useProjectModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#070913] text-frost-white p-4 md:p-8 lg:p-12 flex flex-col justify-between selection:bg-vibrant-indigo/30 selection:text-frost-white relative overflow-x-hidden font-sans">
      <AppBackground />

      <AnimatePresence mode="wait">
        {isLoading && (
          <BootScreen onComplete={() => {
            setIsLoading(false);
            setTimeout(() => {
              setIsSkeletonLoading(false);
            }, 1200);
          }} />
        )}
      </AnimatePresence>

      {isScanning && <div className="radar-sweep-line" />}

      {!isLoading && (
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="flex-grow flex flex-col justify-between"
        >
          <HeaderHudLine />
          <SiteHeader activeTab={activeTab} onTabChange={setActiveTab} />

          <main className="flex-grow flex items-center justify-center relative z-10 w-full">
            <AppTabContent
              activeTab={activeTab}
              isMobile={isMobile}
              isScanning={isScanning}
              isSkeletonLoading={isSkeletonLoading}
              itemVariants={gridItemVariants}
              onTabChange={setActiveTab}
              onOpenProject={openProject}
            />
          </main>

          <SiteFooter onTabChange={setActiveTab} />
        </motion.div>
      )}

      <ProjectDetailModal selectedProject={selectedProject} origin={origin} onClose={closeProject} />
      <FloatingDock activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
