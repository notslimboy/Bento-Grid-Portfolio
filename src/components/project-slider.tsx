import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";

export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  color: string; // Tailwind color class or hex for gradient fallback
  imageUrl?: string; // Optional image URL
  videoUrl?: string; // Optional direct video URL (.mp4, etc.)
}

interface ProjectSliderProps {
  slides: SlideItem[];
  className?: string;
}

export function ProjectSlider({ slides, className }: ProjectSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    // Prevent cycling slide when clicking directly on dot indicators
    if ((e.target as HTMLElement).closest(".slide-dot")) {
      return;
    }
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      onClick={handleNext}
      className={cn(
        "relative w-full h-full overflow-hidden rounded-2xl border border-vibrant-indigo/5 bg-slate-indigo/20 group cursor-pointer select-none",
        className
      )}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
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
              {slide.videoUrl ? (
                <div className="absolute inset-0 overflow-hidden">
                  <video
                    src={slide.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/45 to-transparent opacity-85 z-0" />
                </div>
              ) : slide.imageUrl ? (
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                  {/* Overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent opacity-80" />
                </div>
              ) : (
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-all duration-500",
                    slide.color
                  )}
                >
                  {/* Grid Dots Pattern on Placeholders */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  {/* Glowing Orbit Rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-vibrant-indigo/10 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-electric-purple/10 animate-[spin_10s_linear_infinite_reverse]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-vibrant-indigo/25 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-vibrant-indigo animate-ping" />
                  </div>
                  
                  {/* Sci-Fi Corner Crosshairs */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-vibrant-indigo/30" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-vibrant-indigo/30" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-vibrant-indigo/30" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-vibrant-indigo/30" />
                  
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-midnight/60" />
                </div>
              )}

              {/* Slide Content Header (Z-indexed) */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase bg-[#070913]/70 px-2 py-0.5 rounded-none border border-accent/20 backdrop-blur-sm">
                  Slide {index + 1} of {slides.length}
                </span>
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
      <div className="absolute inset-0 flex items-center justify-center bg-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 backdrop-blur-[1px]">
        <div className="px-3.5 py-1.5 rounded-full bg-midnight/80 border border-vibrant-indigo/30 text-[10px] font-semibold tracking-wide flex items-center gap-1 text-frost-white shadow-lg">
          <span>Tap to Cycle</span>
          <ArrowRight className="w-3 h-3 text-vibrant-indigo" />
        </div>
      </div>

      {/* Pagination Dot Indicators */}
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
              className={cn(
                "slide-dot h-1.5 rounded-full transition-all duration-300",
                isActive 
                  ? "w-4 bg-vibrant-indigo" 
                  : "w-1.5 bg-muted-slate/40 hover:bg-muted-slate/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
