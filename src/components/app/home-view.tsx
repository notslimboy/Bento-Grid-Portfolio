import { lazy, Suspense, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { BentoColumn, BentoGrid } from "@/components/bento-grid";
import { CareerCard } from "@/components/cards/career-card";
import { ConnectCard } from "@/components/cards/connect-card";
import { InterestsCard } from "@/components/cards/interests-card";
import { ProfileCard } from "@/components/cards/profile-card";
import { ProfilesCard } from "@/components/cards/profiles-card";
import { TestimonialsCard } from "@/components/cards/testimonials-card";
import { ToolkitCard } from "@/components/cards/toolkit-card";
import type { AppTab, Project } from "@/types/portfolio";

const ModelViewerCard = lazy(() => import("@/components/cards/model-viewer-card").then((module) => ({
  default: module.ModelViewerCard,
})));
const ProjectList = lazy(() => import("@/components/app/project-list").then((module) => ({
  default: module.ProjectList,
})));

interface HomeViewProps {
  isMobile: boolean;
  isScanning: boolean;
  isSkeletonLoading: boolean;
  itemVariants: Variants;
  onTabChange: (tab: AppTab) => void;
  onOpenProject: (project: Project, event: React.MouseEvent<HTMLDivElement>) => void;
}

interface HomeInfoCardsProps {
  isScanning: boolean;
  isSkeletonLoading: boolean;
  onSeeProfile: () => void;
  showEntertainmentCards?: boolean;
  renderItem?: (content: ReactNode) => ReactNode;
}

function HomeInfoCards({
  isScanning,
  isSkeletonLoading,
  onSeeProfile,
  showEntertainmentCards = true,
  renderItem = (content) => content,
}: HomeInfoCardsProps) {
  return (
    <>
      {renderItem(<ProfileCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />)}
      {renderItem(<CareerCard isScanning={isScanning} onSeeProfile={onSeeProfile} isSkeleton={isSkeletonLoading} />)}
      {renderItem(<ProfilesCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />)}
      {renderItem(<ToolkitCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />)}
      {showEntertainmentCards && renderItem(<InterestsCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />)}
      {showEntertainmentCards && renderItem(
        <Suspense fallback={<div className="min-h-[520px]" />}>
          <ModelViewerCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />
        </Suspense>,
      )}
      {renderItem(<TestimonialsCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />)}
      {renderItem(<ConnectCard isScanning={isScanning} isSkeleton={isSkeletonLoading} />)}
    </>
  );
}

export function HomeView({
  isMobile,
  isScanning,
  isSkeletonLoading,
  itemVariants,
  onTabChange,
  onOpenProject,
}: HomeViewProps) {
  if (isMobile) {
    return (
      <HomeInfoCards
        isScanning={isScanning}
        isSkeletonLoading={isSkeletonLoading}
        onSeeProfile={() => onTabChange("about")}
        showEntertainmentCards={false}
      />
    );
  }

  const withMotion = (content: ReactNode) => <motion.div variants={itemVariants}>{content}</motion.div>;

  return (
    <BentoGrid id="home" className="w-full xl:items-start">
      <BentoColumn side="left">
        <HomeInfoCards
          isScanning={isScanning}
          isSkeletonLoading={isSkeletonLoading}
          onSeeProfile={() => onTabChange("about")}
          renderItem={withMotion}
        />
      </BentoColumn>

      <BentoColumn side="right">
        <Suspense fallback={<div className="min-h-[260px]" />}>
          <ProjectList
            isScanning={isScanning}
            isSkeletonLoading={isSkeletonLoading}
            onOpenProject={onOpenProject}
            itemVariants={itemVariants}
            itemClassName="h-full"
          />
        </Suspense>
      </BentoColumn>
    </BentoGrid>
  );
}
