import { motion, type Variants } from "framer-motion";
import { ConnectCard } from "@/components/cards/connect-card";
import { ProjectList } from "@/components/app/project-list";
import type { Project } from "@/types/portfolio";

interface ProjectsViewProps {
  isMobile: boolean;
  isScanning: boolean;
  isSkeletonLoading: boolean;
  itemVariants: Variants;
  onOpenProject: (project: Project, event: React.MouseEvent<HTMLDivElement>) => void;
}

export function ProjectsView({
  isMobile,
  isScanning,
  isSkeletonLoading,
  itemVariants,
  onOpenProject,
}: ProjectsViewProps) {
  const headingClassName = isMobile ? "text-2xl" : "text-3xl md:text-4xl";

  const pageContents = (
    <>
      <div className={isMobile ? "flex flex-col space-y-2 mb-2" : "flex flex-col space-y-2"}>
        <h2 className={`${headingClassName} font-bebas tracking-widest text-accent uppercase leading-none`}>
          Projects //
        </h2>
        <div className="h-[1px] bg-vibrant-indigo/15 w-full" />
      </div>

      <div className={isMobile ? "grid grid-cols-1 gap-4 w-full" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 w-full"}>
        <ProjectList
          isScanning={isScanning}
          isSkeletonLoading={isSkeletonLoading}
          onOpenProject={onOpenProject}
          itemVariants={isMobile ? undefined : itemVariants}
        />
      </div>

      {isMobile ? (
        <div className="mt-6 w-full">
          <ConnectCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
        </div>
      ) : (
        <motion.div variants={itemVariants} className="mt-8">
          <ConnectCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
        </motion.div>
      )}
    </>
  );

  if (isMobile) {
    return pageContents;
  }

  return (
    <div id="projects" className="w-full max-w-7xl mx-auto flex flex-col space-y-6 animate-in fade-in duration-300">
      {pageContents}
    </div>
  );
}
