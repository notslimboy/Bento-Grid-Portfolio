import { useEffect, useState, type MouseEvent } from "react";
import type { Project } from "@/types/portfolio";

export function useProjectModal() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const openProject = (project: Project, event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;

    setOrigin({
      x: cardCenterX - viewportCenterX,
      y: cardCenterY - viewportCenterY,
    });
    setSelectedProject(project);
  };

  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedProject) {
        closeProject();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return { selectedProject, origin, openProject, closeProject };
}
