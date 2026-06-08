import { useState } from "react";
import { BentoCard } from "@/components/bento-grid";
import { Gamepad, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const games = [
  {
    name: "League of Legends",
    genre: "MOBA // Riot Games",
    cover: "/games/lol.jpg",
    platform: "PC // Active Player",
    description: "Competed in high-elo ranked matches. Essential reference for competitive game loops, balancing, and progression systems."
  },
  {
    name: "Valorant",
    genre: "Tactical FPS // Riot Games",
    cover: "/games/valorant.jpeg",
    platform: "PC // Tactician",
    description: "First-person tactical shooter with unique character abilities. Studied for map design, weapon feedback, and character balance."
  },
  {
    name: "Cult of the Lamb",
    genre: "Roguelike Action // Devolver Digital",
    cover: "/games/cult-of-the-lamb.jpg",
    platform: "PC & Console // Reference",
    description: "A dark yet cute mashup of action roguelike and colony simulator. Highly inspiring for combining disparate genres and game loops."
  },
  {
    name: "Uncharted Series",
    genre: "Action-Adventure // Naughty Dog",
    cover: "/games/uncharted.jpeg",
    platform: "PlayStation // Narrative",
    description: "Cinematic narrative adventure. A masterclass in pacing, set-piece level design, camera work, and environmental storytelling."
  }
];

interface InterestsCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function InterestsCard({ isScanning, isSkeleton }: InterestsCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % games.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  const currentGame = games[currentIndex];

  if (isSkeleton) {
    return (
      <BentoCard className="flex flex-col justify-between min-h-[380px] h-full" isScanning={isScanning}>
        {/* Row 1: Header */}
        <div className="flex items-center justify-between">
          <div className="w-36 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <Gamepad className="w-4 h-4 text-vibrant-indigo/25" />
        </div>

        {/* Row 2: Slanted placeholder box */}
        <div 
          className="relative w-full h-40 bg-vibrant-indigo/15 my-4 flex items-center justify-center transition-all duration-300 shrink-0"
          style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
        >
          <div 
            className="absolute inset-[1px] bg-[#080b15] overflow-hidden"
            style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
          >
            <div className="w-full h-full bg-vibrant-indigo/10 shimmer opacity-25" />
          </div>
        </div>

        {/* Row 3: Navigation & Info */}
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

        {/* Row 4: Footer */}
        <div className="flex items-center justify-between text-[9px] text-muted-slate/50 font-mono tracking-wider mt-4 pt-2.5 border-t border-vibrant-indigo/5">
          <div className="w-20 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <div className="w-10 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard className="flex flex-col justify-between min-h-[380px] h-full" isScanning={isScanning}>
      {/* Row 1: Header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-muted-slate font-semibold font-mono">Interests // Games I Love</span>
        <Gamepad className="w-4 h-4 text-vibrant-indigo/50" />
      </div>

      {/* Row 2: Image Cover Preview - Trapezoidal / Slanted FUI Shape */}
      <div 
        className="relative w-full h-40 bg-vibrant-indigo/25 group-hover/cover:bg-accent/40 my-4 flex items-center justify-center group/cover transition-all duration-300 shrink-0"
        style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
      >
        <div 
          className="absolute inset-[1px] bg-[#080b15] overflow-hidden"
          style={{ clipPath: "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentGame.name}
              src={currentGame.cover}
              alt={currentGame.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/cover:scale-105"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Row 3: Navigation & Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <button 
            onClick={handlePrev}
            className="w-8 h-8 rounded-lg bg-vibrant-indigo/10 border border-vibrant-indigo/25 flex items-center justify-center text-frost-white hover:bg-vibrant-indigo/20 hover:border-vibrant-indigo/45 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
            title="Previous Game"
          >
            <ChevronLeft className="w-4 h-4 text-vibrant-indigo" />
          </button>
          
          <div className="text-center flex-1 min-w-0">
            <h3 className="text-sm font-bold text-frost-white truncate leading-none font-heading">
              {currentGame.name}
            </h3>
            <span className="text-[10px] font-semibold text-vibrant-indigo block mt-1 font-mono uppercase tracking-wide">
              {currentGame.genre}
            </span>
          </div>

          <button 
            onClick={handleNext}
            className="w-8 h-8 rounded-lg bg-vibrant-indigo/10 border border-vibrant-indigo/25 flex items-center justify-center text-frost-white hover:bg-vibrant-indigo/20 hover:border-vibrant-indigo/45 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
            title="Next Game"
          >
            <ChevronRight className="w-4 h-4 text-vibrant-indigo" />
          </button>
        </div>

        {/* Short description */}
        <p className="text-[11px] text-muted-slate text-center line-clamp-2 min-h-[32px] leading-relaxed px-1">
          {currentGame.description}
        </p>
      </div>

      {/* Row 4: Footer pagination */}
      <div className="flex items-center justify-between text-[9px] text-muted-slate/50 font-mono tracking-wider mt-4 pt-2.5 border-t border-vibrant-indigo/5">
        <span>{currentGame.platform}</span>
        <span>{currentIndex + 1} / {games.length}</span>
      </div>
    </BentoCard>
  );
}
