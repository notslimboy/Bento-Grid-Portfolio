import { lazy, Suspense } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { HomeView } from "@/components/app/home-view";
import { loadAboutPage, loadGalleryView, loadProjectsView } from "@/components/app/app-tab-preload";
import type { AppTab, Project } from "@/types/portfolio";

const AboutPage = lazy(() => loadAboutPage().then((module) => ({ default: module.AboutPage })));
const GalleryView = lazy(() => loadGalleryView().then((module) => ({ default: module.GalleryView })));
const ProjectsView = lazy(() => loadProjectsView().then((module) => ({ default: module.ProjectsView })));

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

function DeferredTab({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-[450px] w-full" aria-busy="true" />}>
      {children}
    </Suspense>
  );
}

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
              <DeferredTab><AboutPage /></DeferredTab>
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div key="projects-tab" id="projects" {...mobileTabMotion} className="flex flex-col space-y-4 w-full">
              <DeferredTab>
                <ProjectsView
                  isMobile={true}
                  isScanning={isScanning}
                  isSkeletonLoading={isSkeletonLoading}
                  itemVariants={itemVariants}
                  onOpenProject={onOpenProject}
                />
              </DeferredTab>
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div key="gallery-tab" id="gallery" {...mobileTabMotion} className="flex flex-col space-y-4 w-full">
              <DeferredTab>
                <GalleryView
                  isMobile={true}
                  isScanning={isScanning}
                  isSkeletonLoading={isSkeletonLoading}
                  itemVariants={itemVariants}
                />
              </DeferredTab>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (activeTab === "about") {
    return (
      <div id="about" className="w-full max-w-7xl mx-auto flex flex-col space-y-6 animate-in fade-in duration-300">
        <DeferredTab><AboutPage /></DeferredTab>
      </div>
    );
  }

  if (activeTab === "gallery") {
    return (
      <DeferredTab>
        <GalleryView
          isMobile={false}
          isScanning={isScanning}
          isSkeletonLoading={isSkeletonLoading}
          itemVariants={itemVariants}
        />
      </DeferredTab>
    );
  }

  if (activeTab === "projects") {
    return (
      <DeferredTab>
        <ProjectsView
          isMobile={false}
          isScanning={isScanning}
          isSkeletonLoading={isSkeletonLoading}
          itemVariants={itemVariants}
          onOpenProject={onOpenProject}
        />
      </DeferredTab>
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
