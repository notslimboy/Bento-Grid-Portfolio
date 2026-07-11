import { ConnectCard } from "@/components/cards/connect-card";
import { CareerTimelineSection } from "@/components/about/career-timeline-section";
import { ProfileSection } from "@/components/about/profile-section";
import { SkillsSection } from "@/components/about/skills-section";
import { TestimonialsSection } from "@/components/about/testimonials-section";

export function AboutPage() {
  return (
    <div className="w-full space-y-12 md:space-y-16">
      <ProfileSection />
      <CareerTimelineSection />
      <SkillsSection />
      <TestimonialsSection />

      <section className="w-full pt-4">
        <ConnectCard />
      </section>

      <footer className="max-w-7xl w-full mx-auto mt-12 pt-6 border-t border-vibrant-indigo/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-slate md:hidden" />
    </div>
  );
}
