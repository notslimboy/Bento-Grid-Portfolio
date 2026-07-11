import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const activeTestimonial = testimonialsData[activeTestimonialIdx];

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((previous) => (previous + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((previous) => (previous - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="relative rounded-none border border-vibrant-indigo/15 bg-slate-indigo/10 p-6 md:p-8 overflow-hidden">
      <div className="mb-6 flex items-center justify-between border-b border-vibrant-indigo/10 pb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-valorant text-vibrant-indigo tracking-widest uppercase">
            Endorsements //
          </h2>
          <p className="text-[10px] font-mono text-muted-slate uppercase tracking-widest mt-1">
            Client & team feedback
          </p>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3.5 h-3.5 text-accent fill-accent animate-pulse" />
          ))}
        </div>
      </div>

      <div className="relative bg-midnight/60 border border-vibrant-indigo/10 p-6 md:p-8 min-h-[160px] flex flex-col justify-between rounded-none">
        <div className="absolute top-2 right-3 text-[10px] font-mono text-muted-slate/30">
          RECORD_IDX: {activeTestimonialIdx + 1}/{testimonialsData.length}
        </div>

        <p className="text-xs md:text-sm text-frost-white/95 italic font-sans leading-relaxed tracking-wide">
          "{activeTestimonial.text}"
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 mt-6 border-t border-vibrant-indigo/10">
          <div>
            <span className="text-sm font-semibold text-frost-white block font-sans">
              {activeTestimonial.name}
            </span>
            <span className="text-[10px] font-mono text-accent uppercase tracking-wider mt-0.5 block">
              {activeTestimonial.role} @ {activeTestimonial.company}
            </span>
            <span className="text-[9px] font-mono text-muted-slate/60 mt-0.5 block">
              Project Relation: {activeTestimonial.projectRelation}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevTestimonial}
              className="w-8 h-8 rounded-none border border-vibrant-indigo/30 bg-vibrant-indigo/5 text-muted-slate hover:text-frost-white hover:border-accent hover:bg-[#12162a] flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-150"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="w-8 h-8 rounded-none border border-vibrant-indigo/30 bg-vibrant-indigo/5 text-muted-slate hover:text-frost-white hover:border-accent hover:bg-[#12162a] flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-150"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
