import { cn } from "@/lib/utils";
import type { ProjectSlide } from "@/types/portfolio";
import { LazyVideo } from "@/components/lazy-video";

type ProjectMediaVariant = "slider" | "stack";

interface ProjectMediaProps {
  slide: ProjectSlide;
  variant: ProjectMediaVariant;
  isActive?: boolean;
}

function ProjectMediaPlaceholder({
  color,
  variant,
}: Pick<ProjectSlide, "color"> & { variant: ProjectMediaVariant }) {
  const isSlider = variant === "slider";

  return (
    <div
      className={cn(
        isSlider
          ? "absolute inset-0 bg-gradient-to-br transition-all duration-500"
          : "w-full h-full bg-gradient-to-br transition-all duration-500",
        color,
      )}
    >
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#6366f108_1px,transparent_1px),linear-gradient(to_bottom,#6366f108_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-vibrant-indigo/10 animate-[spin_20s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-electric-purple/10 animate-[spin_10s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-vibrant-indigo/25 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-vibrant-indigo animate-ping" />
      </div>
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-vibrant-indigo/30" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-vibrant-indigo/30" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-vibrant-indigo/30" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-vibrant-indigo/30" />
      <div className={cn("absolute inset-0 bg-radial-gradient from-transparent", isSlider ? "to-midnight/60" : "to-midnight/50")} />
    </div>
  );
}

/**
 * Renders a project slide's image, video, or gradient fallback.
 * The presentation variants deliberately retain the original card and modal DOM.
 */
export function ProjectMedia({ slide, variant, isActive = true }: ProjectMediaProps) {
  const isSlider = variant === "slider";

  if (slide.videoUrl) {
    return isSlider ? (
      <div className="absolute inset-0 overflow-hidden">
        <LazyVideo
          src={slide.videoUrl}
          isActive={isActive}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/45 to-transparent opacity-85 z-0" />
      </div>
    ) : (
      <div className="w-full h-full relative">
        <LazyVideo
          src={slide.videoUrl}
          isActive={isActive}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-80 z-10" />
      </div>
    );
  }

  if (slide.imageUrl) {
    return isSlider ? (
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent opacity-80" />
      </div>
    ) : (
      <div className="w-full h-full relative">
        <img
          src={slide.imageUrl}
          alt={slide.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-80 z-10" />
      </div>
    );
  }

  return <ProjectMediaPlaceholder color={slide.color} variant={variant} />;
}
