import type { Variants } from "framer-motion";
import { GalleryList } from "@/components/app/gallery-list";

interface GalleryViewProps {
  isMobile: boolean;
  isScanning: boolean;
  isSkeletonLoading: boolean;
  itemVariants: Variants;
}

export function GalleryView({ isMobile, isScanning, isSkeletonLoading, itemVariants }: GalleryViewProps) {
  const headingClassName = isMobile ? "text-2xl" : "text-3xl md:text-4xl";

  const pageContents = (
    <>
      <div className={isMobile ? "flex flex-col space-y-2 mb-2" : "flex flex-col space-y-2"}>
        <h2 className={`${headingClassName} font-bebas tracking-widest text-accent uppercase leading-none`}>
          Other Projects //
        </h2>
        <div className="h-[1px] bg-vibrant-indigo/15 w-full" />
      </div>

      <div className={isMobile ? "grid grid-cols-1 gap-4 w-full" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 w-full"}>
        <GalleryList
          isScanning={isScanning}
          isSkeletonLoading={isSkeletonLoading}
          itemVariants={isMobile ? undefined : itemVariants}
        />
      </div>
    </>
  );

  if (isMobile) {
    return pageContents;
  }

  return (
    <div id="gallery" className="w-full max-w-7xl mx-auto flex flex-col space-y-6 animate-in fade-in duration-300">
      {pageContents}
    </div>
  );
}
