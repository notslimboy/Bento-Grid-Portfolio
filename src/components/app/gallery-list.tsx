import { motion, type Variants } from "framer-motion";
import { GalleryCard } from "@/components/cards/gallery-card";
import { galleryData } from "@/data/gallery";

interface GalleryListProps {
  isScanning: boolean;
  isSkeletonLoading: boolean;
  itemVariants?: Variants;
}

export function GalleryList({ isScanning, isSkeletonLoading, itemVariants }: GalleryListProps) {
  const withMotion = <T extends string | number>(key: T, content: React.ReactNode) => (
    itemVariants ? <motion.div key={key} variants={itemVariants}>{content}</motion.div> : content
  );

  if (isSkeletonLoading) {
    return <>{galleryData.map((_, index) => withMotion(index, <GalleryCard key={index} isScanning={isScanning} isSkeleton={true} />))}</>;
  }

  return <>{galleryData.map((item) => withMotion(item.id, <GalleryCard key={item.id} item={item} isScanning={isScanning} />))}</>;
}
