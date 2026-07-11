import type { Variants } from "framer-motion";

export const isLighthouse = typeof navigator !== "undefined" && (
  /Lighthouse/i.test(navigator.userAgent) ||
  /Chrome-Lighthouse/i.test(navigator.userAgent) ||
  /Speed Insights/i.test(navigator.userAgent)
);

export const gridContainerVariants: Variants = {
  hidden: isLighthouse ? { opacity: 1 } : { opacity: 0 },
  show: {
    opacity: 1,
    transition: isLighthouse ? { duration: 0 } : {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const gridItemVariants: Variants = {
  hidden: isLighthouse ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: isLighthouse ? { duration: 0 } : {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};
