import { useState, useRef } from "react";
import { BentoCard } from "@/components/bento-grid";
import { Gamepad, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { interestGames } from "@/data/site";

interface InterestsCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function InterestsCard({ isScanning, isSkeleton }: InterestsCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const pendingIndex = useRef<number | null>(null);

  const triggerGlitchThen = (nextIndex: number) => {
    if (isGlitching) return;
    pendingIndex.current = nextIndex;
    setIsGlitching(true);
    setTimeout(() => {
      setDisplayIndex(nextIndex);
      setCurrentIndex(nextIndex);
      setIsGlitching(false);
    }, 320);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % interestGames.length;
    triggerGlitchThen(next);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + interestGames.length) % interestGames.length;
    triggerGlitchThen(prev);
  };

  const currentGame = interestGames[displayIndex];

  if (isSkeleton) {
    return (
      <BentoCard className="flex flex-col justify-between min-h-[380px] h-full" isScanning={isScanning}>
        <div className="flex items-center justify-between">
          <div className="w-36 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <Gamepad className="w-4 h-4 text-vibrant-indigo/25" />
        </div>
        <div
          className="relative w-full h-40 md:h-64 xl:h-40 bg-vibrant-indigo/15 my-4 flex items-center justify-center transition-all duration-300 shrink-0"
          style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
        >
          <div
            className="absolute inset-[1px] bg-[#080b15] overflow-hidden"
            style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
          >
            <div className="w-full h-full bg-vibrant-indigo/10 shimmer opacity-25" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <div className="w-8 h-8 bg-vibrant-indigo/10 border border-vibrant-indigo/25 rounded-none shimmer opacity-25 shrink-0" />
            <div className="text-center flex-1 space-y-1.5">
              <div className="w-24 h-4 bg-vibrant-indigo/10 mx-auto rounded-none shimmer opacity-25" />
              <div className="w-16 h-3 bg-vibrant-indigo/10 mx-auto rounded-none shimmer opacity-25" />
            </div>
            <div className="w-8 h-8 bg-vibrant-indigo/10 border border-vibrant-indigo/25 rounded-none shimmer opacity-25 shrink-0" />
          </div>
          <div className="space-y-1.5 px-1 py-1">
            <div className="w-full h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
            <div className="w-5/6 h-3.5 bg-vibrant-indigo/10 mx-auto rounded-none shimmer opacity-25" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[9px] text-muted-slate/50 font-mono tracking-wider mt-4 pt-2.5 border-t border-vibrant-indigo/5">
          <div className="w-20 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <div className="w-10 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard className="flex flex-col justify-between min-h-[380px] h-full" isScanning={isScanning}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-muted-slate font-semibold font-mono">Interests // Games I Love</span>
        <Gamepad className="w-4 h-4 text-vibrant-indigo/50" />
      </div>

      {/* Image Cover with Glitch Effect */}
      <div
        className="relative w-full h-40 md:h-64 xl:h-40 bg-vibrant-indigo/25 my-4 flex items-center justify-center group/cover transition-all duration-300 shrink-0"
        style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
      >
        <div
          className="absolute inset-[1px] bg-[#080b15] overflow-hidden"
          style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
        >
          {/* Main image — glitches on exit */}
          <motion.div
            key={currentGame.name}
            animate={
              isGlitching
                ? {
                    x: [0, -5, 7, -3, 5, -7, 0],
                    filter: [
                      "none",
                      "drop-shadow(4px 0 0 rgba(255,0,0,0.8)) drop-shadow(-4px 0 0 rgba(0,255,255,0.8))",
                      "drop-shadow(-6px 0 0 rgba(255,0,0,1)) drop-shadow(6px 0 0 rgba(0,255,255,1)) brightness(1.6)",
                      "drop-shadow(3px 0 0 rgba(255,0,80,0.7)) drop-shadow(-3px 0 0 rgba(0,200,255,0.7))",
                      "drop-shadow(-8px 0 0 rgba(255,0,0,1)) drop-shadow(8px 0 0 rgba(0,255,255,1)) brightness(2)",
                      "drop-shadow(4px 0 0 rgba(255,0,0,0.4)) drop-shadow(-4px 0 0 rgba(0,255,255,0.4))",
                      "none",
                    ],
                    opacity: [1, 1, 0.85, 1, 0.7, 0.9, 0],
                  }
                : { x: 0, filter: "none", opacity: 1 }
            }
            initial={{ opacity: 0, scale: 1.04, filter: "brightness(1.5) saturate(0)" }}
            transition={
              isGlitching
                ? { duration: 0.32, times: [0, 0.15, 0.3, 0.45, 0.65, 0.82, 1], ease: "linear" }
                : { duration: 0.3, ease: "easeOut" }
            }
            className="h-full w-full"
          >
            <picture>
              {currentGame.coverAvif && <source srcSet={currentGame.coverAvif} type="image/avif" />}
              <img
                src={currentGame.cover}
                alt={currentGame.name}
                className="h-full w-full object-cover md:object-contain xl:object-cover"
                decoding="async"
              />
            </picture>
          </motion.div>

          {/* Scanline noise overlay during glitch */}
          <AnimatePresence>
            {isGlitching && (
              <motion.div
                key="glitch-scanlines"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.7, 0.3, 0.9, 0.2, 0.6, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.32, times: [0, 0.15, 0.3, 0.5, 0.65, 0.8, 1], ease: "linear" }}
                className="absolute inset-0 pointer-events-none mix-blend-screen"
                style={{
                  background: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(6,182,212,0.2) 2px,
                    rgba(6,182,212,0.2) 4px
                  )`
                }}
              />
            )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Navigation & Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            disabled={isGlitching}
            className="w-8 h-8 rounded-lg bg-vibrant-indigo/10 border border-vibrant-indigo/25 flex items-center justify-center text-frost-white hover:bg-vibrant-indigo/20 hover:border-vibrant-indigo/45 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 disabled:opacity-40"
            title="Previous Game"
          >
            <ChevronLeft className="w-4 h-4 text-vibrant-indigo" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentGame.name + "-info"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-center flex-1 min-w-0"
            >
              <h3 className="text-sm font-bold text-frost-white truncate leading-none font-heading">
                {currentGame.name}
              </h3>
              <span className="text-[10px] font-semibold text-vibrant-indigo block mt-1 font-mono uppercase tracking-wide">
                {currentGame.genre}
              </span>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            disabled={isGlitching}
            className="w-8 h-8 rounded-lg bg-vibrant-indigo/10 border border-vibrant-indigo/25 flex items-center justify-center text-frost-white hover:bg-vibrant-indigo/20 hover:border-vibrant-indigo/45 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 disabled:opacity-40"
            title="Next Game"
          >
            <ChevronRight className="w-4 h-4 text-vibrant-indigo" />
          </button>
        </div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentGame.name + "-desc"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.08 }}
            className="text-[11px] text-muted-slate text-center line-clamp-2 min-h-[32px] leading-relaxed px-1"
          >
            {currentGame.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[9px] text-muted-slate/50 font-mono tracking-wider mt-4 pt-2.5 border-t border-vibrant-indigo/5">
        <span>{currentGame.platform}</span>
        <span>{displayIndex + 1} / {interestGames.length}</span>
      </div>
    </BentoCard>
  );
}
