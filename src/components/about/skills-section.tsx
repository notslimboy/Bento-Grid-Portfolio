import { Terminal } from "lucide-react";
import { skillsData } from "@/data/about";

type SkillGroup = keyof typeof skillsData;

const skillColumns: {
  group: SkillGroup;
  heading: string;
  headingClassName: string;
  markerClassName: string;
  dotClassName: string;
}[] = [
  {
    group: "gameDesign",
    heading: "GAME DESIGN //",
    headingClassName: "text-accent",
    markerClassName: "bg-accent",
    dotClassName: "bg-accent/60",
  },
  {
    group: "programming",
    heading: "PROGRAMMING //",
    headingClassName: "text-vibrant-indigo",
    markerClassName: "bg-vibrant-indigo",
    dotClassName: "bg-vibrant-indigo/60",
  },
  {
    group: "productionTools",
    heading: "PRODUCTION & TOOLS //",
    headingClassName: "text-frost-white/90",
    markerClassName: "bg-frost-white/55",
    dotClassName: "bg-frost-white/30",
  },
];

export function SkillsSection() {
  return (
    <section className="relative rounded-none border border-vibrant-indigo/15 bg-slate-indigo/20 p-6 md:p-8 overflow-hidden">
      <div className="mb-8 flex items-center justify-between border-b border-vibrant-indigo/10 pb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-valorant text-vibrant-indigo tracking-widest uppercase">
            Skills Loadout //
          </h2>
          <p className="text-[10px] font-mono text-muted-slate uppercase tracking-widest mt-1">
            Classified toolkit & operational skill set
          </p>
        </div>
        <Terminal className="w-5 h-5 text-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillColumns.map(({ group, heading, headingClassName, markerClassName, dotClassName }) => (
          <div key={group} className="border border-vibrant-indigo/15 bg-midnight/40 p-5 hover:border-vibrant-indigo/35 transition-all duration-300 relative group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-vibrant-indigo/40" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-vibrant-indigo/40" />

            <h3 className={`text-sm font-bebas ${headingClassName} tracking-widest uppercase mb-4 flex items-center gap-2`}>
              <span className={`w-1.5 h-3 ${markerClassName}`} />
              <span>{heading}</span>
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-muted-slate">
              {skillsData[group].map((skill, index) => (
                <li key={index} className="flex items-center justify-between border-b border-vibrant-indigo/5 pb-1.5 group-hover:text-frost-white transition-colors duration-150">
                  <span>{skill}</span>
                  <span className={`w-1 h-1 ${dotClassName}`} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
