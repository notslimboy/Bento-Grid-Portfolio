import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";
import { ProjectMedia } from "@/components/project-media";
import type { ProjectSlide } from "@/types/portfolio";

export type { ProjectSlide as SlideItem } from "@/types/portfolio";

interface ProjectSliderProps {
  slides: ProjectSlide[];
  className?: string;
}

export function ProjectSlider({ slides, className }: ProjectSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isVideoEnabled, setIsVideoEnabled] = useState(() => (
    typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches
  ));

  useEffect(() => {
    if (previousIndex === null) return;

    const timer = window.setTimeout(() => setPreviousIndex(null), 500);
    return () => window.clearTimeout(timer);
  }, [previousIndex]);

  const setSlide = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    // Prevent cycling slide when clicking directly on dot indicators
    if ((e.target as HTMLElement).closest(".slide-dot")) {
      return;
    }
    setIsVideoEnabled(true);
    setSlide((activeIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsVideoEnabled(true);
    setSlide(index);
  };

  return (
    <div
      onClick={slides.length > 1 ? handleNext : undefined}
      onPointerEnter={() => setIsVideoEnabled(true)}
      className={cn(
        "relative w-full h-full overflow-hidden rounded-none border border-vibrant-indigo/5 bg-slate-indigo/20 group select-none",
        slides.length > 1 ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          if (index !== activeIndex && index !== previousIndex) return null;

          const isActive = index === activeIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-500 ease-in-out flex flex-col justify-between p-4",
                isActive 
                  ? "opacity-100 scale-100 z-10" 
                  : "opacity-0 scale-95 z-0 pointer-events-none"
              )}
            >
              {/* Background Layer */}
              <ProjectMedia
                slide={slide}
                variant="slider"
                isActive={isVideoEnabled && (isActive || index === previousIndex)}
              />

              {/* Slide Content Header (Z-indexed) */}
              <div className={cn("relative z-10 flex items-center", slides.length > 1 ? "justify-between" : "justify-end")}>
                {slides.length > 1 && (
                  <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase bg-[#070913]/70 px-2 py-0.5 rounded-none border border-accent/20 backdrop-blur-sm">
                    Slide {index + 1} of {slides.length}
                  </span>
                )}
                <Sparkles className="w-3.5 h-3.5 text-accent opacity-45 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Slide Content Footer (Z-indexed) */}
              <div className="relative z-10 space-y-1">
                <span className="text-xs md:text-sm font-semibold text-accent font-bebas block tracking-widest uppercase">
                  {slide.subtitle}
                </span>
                <h4 className="text-base md:text-lg font-bebas font-bold text-frost-white tracking-wide uppercase filter drop-shadow-[0_2px_4px_rgba(7,9,19,0.95)]">
                  {slide.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tap Hint Overlay (Fade on Hover) */}
      {slides.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-center bg-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 backdrop-blur-[1px]">
          <div className="px-3.5 py-1.5 rounded-full bg-midnight/80 border border-vibrant-indigo/30 text-[10px] font-semibold tracking-wide flex items-center gap-1 text-frost-white shadow-lg">
            <span>Tap to Cycle</span>
            <ArrowRight className="w-3 h-3 text-vibrant-indigo" />
          </div>
        </div>
      )}

      {/* Pagination Dot Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
          {slides.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className="slide-dot flex h-6 w-6 items-center justify-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    isActive
                      ? "w-4 bg-vibrant-indigo"
                      : "w-1.5 bg-muted-slate/40 hover:bg-muted-slate/60",
                  )}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
