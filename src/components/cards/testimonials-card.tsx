import { useState, useEffect, useRef } from "react";
import { BentoCard } from "@/components/bento-grid";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";

interface TestimonialsCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function TestimonialsCard({ isScanning, isSkeleton }: TestimonialsCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Autoplay effect with pause on hover
  useEffect(() => {
    if (isSkeleton) return;

    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 8000); // Rotate every 8 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, isSkeleton, currentIndex]);

  const currentTestimonial = testimonialsData[currentIndex];
  const dynamicCoord = `HUD-T0${currentIndex + 1}`;

  if (isSkeleton) {
    return (
      <BentoCard 
        isScanning={isScanning}
        coordinate="HUD-T00"
        className="min-h-[220px] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <div className="w-24 h-4 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
        </div>
        <div className="flex-grow w-full mt-4 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
      </BentoCard>
    );
  }

  return (
    <BentoCard
      isScanning={isScanning}
      coordinate={dynamicCoord}
      className="p-5 min-h-[240px] flex flex-col justify-between relative overflow-hidden group/testimonials border border-vibrant-indigo/25 hover:border-accent/40 transition-all duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background quote icon for FUI vibe */}
      <div className="absolute right-4 bottom-12 opacity-5 text-vibrant-indigo pointer-events-none select-none">
        <Quote className="w-32 h-32 rotate-180" />
      </div>

      {/* Row 1: Header (Label & Relation Tag) */}
      <div className="flex items-center justify-between relative z-10 w-full">
        <div className="flex items-center gap-2">
          <Quote className="w-3.5 h-3.5 text-vibrant-indigo/65" />
          <span className="text-[10px] uppercase tracking-widest text-muted-slate font-bold font-mono">
            CLIENT ENDORSEMENTS //
          </span>
        </div>
        
        {/* Project reference tag */}
        <div className="px-2 py-0.5 border border-vibrant-indigo/35 bg-[#070913]/60 text-[8px] font-bold text-accent uppercase tracking-widest font-mono">
          {currentTestimonial.projectRelation}
        </div>
      </div>

      {/* Row 2: Testimonial Text with Fade transition */}
      <div className="my-4 flex-grow relative z-10 flex items-center min-h-[80px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            <p className="text-xs md:text-sm italic font-sans text-frost-white/95 leading-relaxed tracking-wide">
              "{currentTestimonial.text}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Row 3: Footer (Client profile, rating stars, and navigators) */}
      <div className="flex items-end justify-between relative z-10 pt-3 border-t border-vibrant-indigo/10 w-full">
        {/* Profile Info */}
        <div className="space-y-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h4 className="text-sm font-bebas font-bold text-accent tracking-wider uppercase leading-none">
                {currentTestimonial.name}
              </h4>
              <span className="text-[9px] font-mono text-muted-slate/80 block mt-0.5 uppercase tracking-wide">
                {currentTestimonial.role} // {currentTestimonial.company}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Rating Ticks / Stars */}
          <div className="flex gap-0.5 pt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-2.5 h-2.5 ${i < currentTestimonial.rating ? "fill-accent text-accent" : "text-vibrant-indigo/35"}`} 
              />
            ))}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2">
          {/* Navigation index indicator */}
          <span className="text-[8px] font-mono text-muted-slate/50 mr-1 select-none">
            {currentIndex + 1} / {testimonialsData.length}
          </span>
          
          <button
            onClick={handlePrev}
            className="w-7 h-7 bg-vibrant-indigo/10 border border-vibrant-indigo/25 flex items-center justify-center hover:bg-vibrant-indigo/20 hover:border-accent/40 active:scale-95 transition-all duration-200 cursor-pointer text-frost-white"
            title="Previous Endorsement"
          >
            <ChevronLeft className="w-4 h-4 text-vibrant-indigo group-hover/testimonials:text-accent" />
          </button>
          
          <button
            onClick={handleNext}
            className="w-7 h-7 bg-vibrant-indigo/10 border border-vibrant-indigo/25 flex items-center justify-center hover:bg-vibrant-indigo/20 hover:border-accent/40 active:scale-95 transition-all duration-200 cursor-pointer text-frost-white"
            title="Next Endorsement"
          >
            <ChevronRight className="w-4 h-4 text-vibrant-indigo group-hover/testimonials:text-accent" />
          </button>
        </div>
      </div>
    </BentoCard>
  );
}
