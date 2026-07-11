import type { CareerProject } from "@/types/portfolio";
import { LazyVideo } from "@/components/lazy-video";

interface CareerProjectCardProps {
  index: number;
  project: CareerProject;
  className?: string;
}

export function CareerProjectCard({ index, project, className }: CareerProjectCardProps) {
  const {
    title,
    subtitle,
    watermark,
    imageSrc,
    imageAlt,
    videoSrc,
    tone = "from-vibrant-indigo/20 via-[#16152b] to-midnight",
  } = project;

  return (
    <article className={`group/media relative min-h-[10.75rem] overflow-hidden border border-vibrant-indigo/25 bg-midnight p-3 transition-all duration-300 hover:border-accent/65 hover:shadow-[0_0_18px_rgba(6,182,212,0.14)] md:max-lg:min-h-[9.25rem] md:max-lg:p-2.5 ${className ?? ""}`}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/media:scale-105"
        />
      )}
      {videoSrc && (
        <LazyVideo
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          aria-label={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/media:scale-105"
        />
      )}
      {!imageSrc && !videoSrc && <div className={`absolute inset-0 bg-gradient-to-br ${tone}`} />}

      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/15" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:14px_14px] opacity-0 transition-opacity duration-300 group-hover/media:opacity-40" />
      <div className="pointer-events-none absolute -bottom-10 -right-2 font-bebas text-7xl tracking-tighter text-frost-white/10 select-none md:max-lg:-bottom-7 md:max-lg:text-6xl">
        {watermark}
      </div>

      <div className="relative z-10 flex min-h-[7.75rem] flex-col justify-between md:max-lg:min-h-[6.75rem]">
        <span className="w-fit border border-accent/20 bg-midnight/75 px-2 py-1 text-[8px] font-mono uppercase tracking-wider text-accent backdrop-blur-sm md:max-lg:px-1.5 md:max-lg:py-0.5 md:max-lg:text-[7px]">
          Project // {String(index).padStart(2, "0")}
        </span>
        <div className="pt-4 md:max-lg:pt-2.5">
          <h5 className="font-bebas text-xl leading-none tracking-widest text-frost-white uppercase transition-colors duration-300 group-hover/media:text-accent md:max-lg:line-clamp-2 md:max-lg:text-base md:max-lg:leading-[0.95] md:max-lg:tracking-[0.11em]">
            {title}
          </h5>
          <p className="mt-1 text-[9px] font-mono uppercase tracking-wider text-muted-slate md:max-lg:line-clamp-2 md:max-lg:text-[8px] md:max-lg:leading-3 md:max-lg:tracking-[0.08em]">
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
