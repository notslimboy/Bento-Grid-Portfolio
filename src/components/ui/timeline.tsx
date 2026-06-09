import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const rect = scrollRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [scrollRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full font-sans md:px-10 py-4 bg-midnight/30 border-t border-b border-vibrant-indigo/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl font-valorant text-vibrant-indigo tracking-widest uppercase mb-4">
          Career Odyssey //
        </h2>
        <p className="text-muted-slate text-xs md:text-sm max-w-xl font-mono uppercase tracking-wider">
          A chronologue of my missions, projects developed, and systems balanced in the galaxy of game development.
        </p>
      </div>

      <div ref={scrollRef} className="relative max-w-7xl mx-auto pb-20">
        {/* Timeline main line */}
        <div className="absolute md:left-1/2 left-8 top-0 bottom-0 w-[2px] bg-vibrant-indigo/10 transform md:-translate-x-1/2" />

        {/* Animated glowing progress line */}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute md:left-1/2 left-8 top-0 w-[2px] bg-gradient-to-b from-accent via-vibrant-indigo to-transparent transform md:-translate-x-1/2 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
        />

        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-stretch justify-between pt-10 md:pt-16 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot & indicator */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="h-6 w-6 rounded-none bg-midnight border border-vibrant-indigo/40 flex items-center justify-center relative rotate-45 group">
                  <div className="h-2.5 w-2.5 bg-accent rounded-none transition-transform duration-300 group-hover:scale-110" />
                  {/* Outer bracket decoration */}
                  <div className="absolute inset-[-4px] border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Title Section (Year/Period) */}
              <div className={`w-full md:w-[45%] pl-20 md:pl-0 flex ${
                isEven ? "md:justify-start" : "md:justify-end"
              } items-start`}>
                <div className={`md:max-w-xs space-y-1.5 ${
                  isEven ? "md:text-left" : "md:text-right text-left"
                }`}>
                  <h3 className="text-xl md:text-2xl font-bebas text-accent tracking-widest uppercase md:block hidden">
                    {item.title}
                  </h3>
                  <h3 className="text-lg md:text-xl font-bebas text-accent tracking-widest uppercase md:hidden block mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Spacing spacer for desktop */}
              <div className="w-[10%] md:block hidden" />

              {/* Content Card Section */}
              <div className="w-full md:w-[45%] pl-20 md:pl-0 mt-4 md:mt-0 flex">
                <div className="w-full bg-[#0a0d1e]/80 border border-vibrant-indigo/15 hover:border-vibrant-indigo/35 transition-all duration-300 p-5 md:p-6 relative rounded-none shadow-[0_0_20px_rgba(7,9,19,0.5)] group/card">
                  {/* Glowing corner brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vibrant-indigo/30" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-vibrant-indigo/30" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-vibrant-indigo/30" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vibrant-indigo/30" />

                  {/* Halftone tactical background on hover */}
                  <div className="absolute inset-0 halftone-overlay opacity-0 group-hover/card:opacity-10 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
