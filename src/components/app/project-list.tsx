import { motion, type Variants } from "framer-motion";
import { ProjectCard } from "@/components/cards/project-card";
import { visibleProjectsData } from "@/data/projects";
import type { Project } from "@/types/portfolio";

interface ProjectListProps {
  isScanning: boolean;
  isSkeletonLoading: boolean;
  onOpenProject: (project: Project, event: React.MouseEvent<HTMLDivElement>) => void;
  itemVariants?: Variants;
  itemClassName?: string;
}

export function ProjectList({
  isScanning,
  isSkeletonLoading,
  onOpenProject,
  itemVariants,
  itemClassName,
}: ProjectListProps) {
  const withMotion = <T extends string | number>(key: T, content: React.ReactNode) => (
    itemVariants ? <motion.div key={key} variants={itemVariants} className={itemClassName}>{content}</motion.div> : content
  );

  if (isSkeletonLoading) {
    return (
      <>
        {visibleProjectsData.map((_, index) => withMotion(
          index,
          <ProjectCard key={index} isScanning={isScanning} onClick={() => {}} isSkeleton={true} />,
        ))}
      </>
    );
  }

  return (
    <>
      {visibleProjectsData.map((project) => withMotion(
        project.id,
        <ProjectCard
          key={project.id}
          project={project}
          isScanning={isScanning}
          onClick={(event) => onOpenProject(project, event)}
        />,
      ))}
    </>
  );
}
