import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/site";
import type { AppTab } from "@/types/portfolio";

interface SiteHeaderProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  onTabIntent?: (tab: AppTab) => void;
}

export function SiteHeader({ activeTab, onTabChange, onTabIntent }: SiteHeaderProps) {
  return (
    <header className="hidden xl:flex max-w-7xl w-full mx-auto mb-10 pb-4 items-center justify-between relative z-10">
      <nav className="flex items-center gap-8 text-[12px] lg:text-[13px] font-bebas tracking-widest text-muted-slate uppercase">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(event) => {
              event.preventDefault();
              onTabChange(item.id);
            }}
            onMouseEnter={() => onTabIntent?.(item.id)}
            onFocus={() => onTabIntent?.(item.id)}
            className={cn(
              "transition-colors duration-200 relative py-1 group",
              activeTab === item.id ? "text-accent" : "hover:text-accent",
            )}
          >
            {item.label}
            <span className={cn("absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-200", activeTab === item.id ? "w-full" : "w-0 group-hover:w-full")} />
          </a>
        ))}
      </nav>

      <a
        href="mailto:raka.arya34@gmail.com"
        className="px-5 py-2 border border-vibrant-indigo/35 bg-vibrant-indigo/10 hover:text-[#070913] rounded-none flex items-center gap-2 cursor-pointer group/btn text-[12px] lg:text-[13px] font-bebas tracking-widest text-frost-white uppercase overflow-hidden relative btn-tactical btn-tactical-indigo"
      >
        <span className="w-1.5 h-3 bg-accent" />
        <span>Let's Connect</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-frost-white group-hover/btn:text-[#070913] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-150" />
      </a>
    </header>
  );
}
