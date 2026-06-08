import { Home, Briefcase, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FloatingDockProps {
  className?: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function FloatingDock({ className, activeTab, setActiveTab }: FloatingDockProps) {
  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
    },
    {
      id: "projects",
      label: "Projects",
      icon: Briefcase,
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: Image,
    },
  ];

  const handleTabClick = (id: string) => {
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
        "fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center md:hidden",
        className
      )}
    >
      {/* Container Dock dengan tema Space OS Glassmorphism melengkung penuh - Ramping & Tipis */}
      <div className="flex items-center gap-1.5 p-1.5 bg-black/60 border border-white/10 rounded-full backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative">
        
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className="relative flex items-center justify-center w-11 h-9 rounded-full transition-all duration-300 cursor-pointer focus:outline-none"
              title={item.label}
              aria-label={item.label}
            >
              {/* Latar Belakang Sorotan (Highlight Pill) di belakang ikon aktif */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Ikon dengan efek warna sesuai state aktif */}
              <Icon
                strokeWidth={2}
                className={cn(
                  "w-[18px] h-[18px] transition-all duration-300 relative z-10",
                  isActive
                    ? "text-white scale-105"
                    : "text-white/40 hover:text-white/80"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
