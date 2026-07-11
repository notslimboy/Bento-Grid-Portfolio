import { Timeline } from "@/components/ui/timeline";
import { careerTimelineData } from "@/data/about";
import { CareerProjectCard } from "@/components/about/career-project-card";

export function CareerTimelineSection() {
  const formattedTimeline = careerTimelineData.map((job) => ({
    title: job.title,
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-bold text-frost-white font-sans tracking-wide">
            {job.company}
          </h4>
          <p className="text-xs font-mono text-electric-purple uppercase tracking-wider mt-0.5">
            [{job.role}]
          </p>
        </div>
        <ul className="space-y-2.5 mt-4 pt-3 border-t border-vibrant-indigo/10">
          {job.missions.map((mission, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs text-muted-slate font-sans leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-vibrant-indigo mt-1.5 shrink-0 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
              <span>{mission}</span>
            </li>
          ))}
        </ul>
        <div className={`grid grid-cols-1${job.projects.length > 1 ? " md:grid-cols-2 gap-3" : " gap-3"} mt-4 pt-4 border-t border-vibrant-indigo/10`}>
          {job.projects.map((project, index) => (
            <CareerProjectCard
              key={project.title}
              index={index + 1}
              project={project}
              className={job.projects.length % 2 === 1 && index === job.projects.length - 1 ? "md:col-span-2" : undefined}
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section className="w-full">
      <Timeline data={formattedTimeline} />
    </section>
  );
}
