export type AppTab = "home" | "about" | "projects" | "gallery";

export interface NavigationItem {
  id: AppTab;
  label: string;
  href: `#${AppTab}`;
}

export interface ProjectSlide {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  imageUrl?: string;
  videoUrl?: string;
}

export type ProjectLinkIcon = "book" | "play" | "external" | "game";

export interface ProjectLink {
  label: string;
  url: string;
  icon: ProjectLinkIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  timeline: string;
  roles: string[];
  isHidden?: boolean;
  publisher?: string;
  detailedDescription: string;
  features: string[];
  techStack: string[];
  slides: ProjectSlide[];
  links: ProjectLink[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl?: string;
  coordinate: string;
}

export interface CareerProject {
  title: string;
  subtitle: string;
  watermark: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  tone?: string;
}

export interface CareerEntry {
  title: string;
  company: string;
  role: string;
  missions: string[];
  projects: CareerProject[];
}

export interface CareerSummary {
  company: string;
  role: string;
  period: string;
}

export interface InterestGame {
  name: string;
  genre: string;
  cover: string;
  platform: string;
  description: string;
}
