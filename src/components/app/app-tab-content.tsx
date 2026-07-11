import { AnimatePresence, motion, type Variants } from "framer-motion";
import { AboutPage } from "@/components/about-page";
import { GalleryView } from "@/components/app/gallery-view";
import { HomeView } from "@/components/app/home-view";
import { ProjectsView } from "@/components/app/projects-view";
import type { AppTab, Project } from "@/types/portfolio";

interface AppTabContentProps {
  activeTab: AppTab;
  isMobile: boolean;
  isScanning: boolean;
  isSkeletonLoading: boolean;
  itemVariants: Variants;
  onTabChange: (tab: AppTab) => void;
  onOpenProject: (project: Project, event: React.MouseEvent<HTMLDivElement>) => void;
}

const mobileTabTransition = { duration: 0.2 };
const mobileTabMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: mobileTabTransition,
};

export function AppTabContent({
  activeTab,
  isMobile,
  isScanning,
  isSkeletonLoading,
  itemVariants,
  onTabChange,
  onOpenProject,
}: AppTabContentProps) {
  if (isMobile) {
    return (
      <div className="w-full min-h-[450px]">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div key="home-tab" id="home" {...mobileTabMotion} className="flex flex-col gap-4 w-full">
              <HomeView
                isMobile={true}
                isScanning={isScanning}
                isSkeletonLoading={isSkeletonLoading}
                itemVariants={itemVariants}
                onTabChange={onTabChange}
                onOpenProject={onOpenProject}
              />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div key="about-tab" id="about" {...mobileTabMotion} className="w-full">
              <AboutPage />
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div key="projects-tab" id="projects" {...mobileTabMotion} className="flex flex-col space-y-4 w-full">
              <ProjectsView
                isMobile={true}
                isScanning={isScanning}
                isSkeletonLoading={isSkeletonLoading}
                itemVariants={itemVariants}
                onOpenProject={onOpenProject}
              />
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div key="gallery-tab" id="gallery" {...mobileTabMotion} className="flex flex-col space-y-4 w-full">
              <GalleryView
                isMobile={true}
                isScanning={isScanning}
                isSkeletonLoading={isSkeletonLoading}
                itemVariants={itemVariants}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (activeTab === "about") {
    return (
      <div id="about" className="w-full max-w-7xl mx-auto flex flex-col space-y-6 animate-in fade-in duration-300">
        <AboutPage />
      </div>
    );
  }

  if (activeTab === "gallery") {
    return (
      <GalleryView
        isMobile={false}
        isScanning={isScanning}
        isSkeletonLoading={isSkeletonLoading}
        itemVariants={itemVariants}
      />
    );
  }

  if (activeTab === "projects") {
    return (
      <ProjectsView
        isMobile={false}
        isScanning={isScanning}
        isSkeletonLoading={isSkeletonLoading}
        itemVariants={itemVariants}
        onOpenProject={onOpenProject}
      />
    );
  }

  return (
    <HomeView
      isMobile={false}
      isScanning={isScanning}
      isSkeletonLoading={isSkeletonLoading}
      itemVariants={itemVariants}
      onTabChange={onTabChange}
      onOpenProject={onOpenProject}
    />
  );
}
