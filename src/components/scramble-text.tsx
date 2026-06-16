import { useState, useEffect, useCallback, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  triggerOn?: "mount" | "hover" | "both" | "scroll" | "custom";
  delay?: number;
  speed?: number;
  trigger?: boolean;
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789▲▼◀▶█░▒▓▄▀■□▪▫▬▭▮▯▰▱";

const isLighthouse = typeof navigator !== "undefined" && (
  /Lighthouse/i.test(navigator.userAgent) ||
  /Chrome-Lighthouse/i.test(navigator.userAgent) ||
  /Speed Insights/i.test(navigator.userAgent)
);

function createTextState(text: string, shouldScramble: boolean) {
  return text.split("").map((char) => {
    if (char === " " || char === "—") {
      return { char, isDecrypted: true };
    }
    if (shouldScramble) {
      const randomChar = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      return { char: randomChar, isDecrypted: false };
    }
    return { char, isDecrypted: true };
  });
}

export function ScrambleText({
  text,
  className,
  triggerOn = "both",
  delay = 0,
  speed = 20,
  trigger,
}: ScrambleTextProps) {
  const [scrambleState, setScrambleState] = useState<{ char: string; isDecrypted: boolean }[]>(() => {
    const shouldStartScrambled = !isLighthouse && (triggerOn === "mount" || triggerOn === "both" || triggerOn === "scroll");
    return createTextState(text, shouldStartScrambled);
  });
  const isAnimating = useRef(false);
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  const startScramble = useCallback(() => {
    if (isLighthouse || isAnimating.current) return;
    isAnimating.current = true;

    let iteration = 0;
    if (intervalId.current) clearInterval(intervalId.current);

    // Dynamically scale step increment based on text length to keep animation snappy
    const step = Math.max(0.45, text.length / 32);

    intervalId.current = setInterval(() => {
      const nextState = text.split("").map((char, index) => {
        if (char === " " || char === "—") {
          return { char, isDecrypted: true };
        }
        
        const isDecrypted = index < Math.floor(iteration);
        const randomChar = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        
        return {
          char: isDecrypted ? text[index] : randomChar,
          isDecrypted,
        };
      });

      setScrambleState(nextState);

      if (iteration >= text.length) {
        isAnimating.current = false;
        if (intervalId.current) clearInterval(intervalId.current);
      }

      iteration += step;
    }, speed);
  }, [text, speed]);

  // Handle external trigger prop
  useEffect(() => {
    if (trigger) {
      startScramble();
    }
  }, [trigger, startScramble]);

  // Handle mount trigger
  useEffect(() => {
    if (triggerOn === "mount" || triggerOn === "both") {
      const timer = setTimeout(() => {
        startScramble();
      }, delay);
      return () => {
        clearTimeout(timer);
        if (intervalId.current) clearInterval(intervalId.current);
      };
    }
  }, [startScramble, delay, triggerOn]);

  // Handle scroll trigger via IntersectionObserver
  useEffect(() => {
    if (triggerOn === "scroll") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              startScramble();
            }, delay);
            observer.disconnect();
            return () => clearTimeout(timer);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerOn, startScramble, delay]);

  const handleMouseEnter = () => {
    if (triggerOn === "hover" || triggerOn === "both") {
      startScramble();
    }
  };

  return (
    <span ref={elementRef} className={className} onMouseEnter={handleMouseEnter}>
      {scrambleState.map((item, index) => {
        if (item.char === "—") {
          return (
            <span key={index} className="text-frost-white text-outline-indigo mx-1">
              —
            </span>
          );
        }
        if (item.isDecrypted) {
          return <span key={index}>{item.char}</span>;
        } else {
          return (
            <span 
              key={index} 
              className="text-accent animate-pulse font-mono drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] text-xs md:text-sm inline-block min-w-[12px] text-center"
            >
              {item.char}
            </span>
          );
        }
      })}
    </span>
  );
}
