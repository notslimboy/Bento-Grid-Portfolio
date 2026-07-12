import { navigationItems } from "@/data/site";
import type { AppTab } from "@/types/portfolio";

interface SiteFooterProps {
  onTabChange: (tab: AppTab) => void;
  onTabIntent?: (tab: AppTab) => void;
}

export function SiteFooter({ onTabChange, onTabIntent }: SiteFooterProps) {
  return (
    <footer className="max-w-7xl w-full mx-auto mt-12 pt-6 border-t border-vibrant-indigo/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-slate relative z-10">
      <span>© {new Date().getFullYear()} Raka Arya Pratama. Game Designer & Creative.</span>
      <div className="flex gap-4">
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
            className="hover:text-frost-white transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
