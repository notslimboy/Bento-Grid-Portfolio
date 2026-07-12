import { Home, User, Briefcase, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { navigationItems } from "@/data/site";
import type { AppTab } from "@/types/portfolio";

interface FloatingDockProps {
  className?: string;
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  onTabIntent?: (tab: AppTab) => void;
}

export function FloatingDock({ className, activeTab, setActiveTab, onTabIntent }: FloatingDockProps) {
  const navigationIcons = {
    home: Home,
    about: User,
    projects: Briefcase,
    gallery: Image,
  };

  const handleTabClick = (id: AppTab) => {
    setActiveTab(id);
    // Scroll ke atas secara instan/halus saat berpindah halaman/tab di mobile
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center xl:hidden",
        className
      )}
    >
      {/* Tactical Container Dock - Sharp & Chamfered */}
      <div 
        className="flex items-center gap-1 p-1 bg-[#070913]/85 border border-vibrant-indigo/25 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] relative group [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]"
      >
        {/* Subtle top accent border */}
        <div className="absolute top-0 left-2 right-2 h-[1px] bg-vibrant-indigo/40 pointer-events-none" />
        
        {/* Little tactical corner dots */}
        <div className="absolute top-1 left-3 w-0.5 h-0.5 bg-accent/60" />
        <div className="absolute bottom-1 right-3 w-0.5 h-0.5 bg-accent/60" />

        {navigationItems.map((item) => {
          const Icon = navigationIcons[item.id];
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              onPointerEnter={() => onTabIntent?.(item.id)}
              onFocus={() => onTabIntent?.(item.id)}
              className="relative flex items-center justify-center w-12 h-10 md:w-14 md:h-11 rounded-none transition-all duration-300 cursor-pointer focus:outline-none"
              title={item.label}
              aria-label={item.label}
            >
              {/* Tactical Box Active State */}
              {isActive && (
                <motion.div
                  layoutId="active-tactical-box"
                  className="absolute inset-0 bg-accent/10 border-b-2 border-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}

              {/* Ikon dengan prop override jadi kotak tajam (kaku) */}
              <Icon
                strokeWidth={2}
                strokeLinecap="square"
                strokeLinejoin="miter"
                className={cn(
                  "w-[18px] h-[18px] md:w-5 md:h-5 transition-all duration-300 relative z-10",
                  isActive
                    ? "text-accent scale-110 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    : "text-muted-slate hover:text-frost-white hover:scale-105"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
