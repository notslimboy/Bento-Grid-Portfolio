import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";
import { getVideoPosterUrl } from "@/lib/media";

const supportsIntersectionObserver =
  typeof window !== "undefined" && "IntersectionObserver" in window;

interface LazyVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> {
  src: string;
  isActive?: boolean;
}

/**
 * Defers video downloads until the element is near the viewport, then pauses
 * playback once it leaves. `isActive` keeps inactive project-slider slides
 * from requesting their media before the visitor opens that slide.
 */
export function LazyVideo({ src, isActive = true, poster, autoPlay, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(!supportsIntersectionObserver);
  const [isInViewport, setIsInViewport] = useState(!supportsIntersectionObserver);
  const shouldLoad = isActive && hasEnteredViewport;

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isActive || !supportsIntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
        }
      },
      { rootMargin: "0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) {
      return;
    }

    if (isInViewport && autoPlay) {
      void video.play().catch(() => undefined);
      return;
    }

    if (!isInViewport) {
      video.pause();
    }
  }, [autoPlay, isInViewport, shouldLoad]);

  return (
    <video
      ref={videoRef}
      {...props}
      autoPlay={Boolean(autoPlay && shouldLoad)}
      poster={poster ?? getVideoPosterUrl(src)}
      preload="none"
      src={shouldLoad ? src : undefined}
    />
  );
}
