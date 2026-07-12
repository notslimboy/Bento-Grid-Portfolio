import type { AppTab } from "@/types/portfolio";

export const loadAboutPage = () => import("@/components/about-page");
export const loadGalleryView = () => import("@/components/app/gallery-view");
export const loadProjectsView = () => import("@/components/app/projects-view");

export function preloadAppTab(tab: AppTab) {
  if (tab === "about") void loadAboutPage();
  if (tab === "gallery") void loadGalleryView();
  if (tab === "projects") void loadProjectsView();
}
