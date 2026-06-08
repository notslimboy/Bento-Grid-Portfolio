export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl?: string; // Tautan video asli (.mp4) bisa kamu masukkan di sini nanti
  coordinate: string;
}

export const galleryData: GalleryItem[] = [
  { id: "v1", title: "Video Campaign 01", subtitle: "Indomilk SterilPlain Campaign", coordinate: "REC-V01", videoUrl: "" },
  { id: "v2", title: "Video Campaign 02", subtitle: "BRImo Cardless Cash Campaign", coordinate: "REC-V02", videoUrl: "" },
  { id: "v3", title: "Video Campaign 03", subtitle: "Factory Edutourism Interactive", coordinate: "REC-V03", videoUrl: "" },
  { id: "v4", title: "Video Campaign 04", subtitle: "AR Fighting Game Combat", coordinate: "REC-V04", videoUrl: "" },
  { id: "v5", title: "Video Campaign 05", subtitle: "Tower Defense Balancing Demo", coordinate: "REC-V05", videoUrl: "" },
  { id: "v6", title: "Video Campaign 06", subtitle: "Local Multiplayer Arena Test", coordinate: "REC-V06", videoUrl: "" },
  { id: "v7", title: "Video Campaign 07", subtitle: "Tug-of-War Giant LED Gameplay", coordinate: "REC-V07", videoUrl: "" },
  { id: "v8", title: "Video Campaign 08", subtitle: "Physics Buoyancy Fluid Test", coordinate: "REC-V08", videoUrl: "" },
  { id: "v9", title: "Video Campaign 09", subtitle: "Hologram sweep UI prototype", coordinate: "REC-V09", videoUrl: "" },
  { id: "v10", title: "Video Campaign 10", subtitle: "AI Behavior companion test", coordinate: "REC-V10", videoUrl: "" },
  { id: "v11", title: "Video Campaign 11", subtitle: "Quest progression loop", coordinate: "REC-V11", videoUrl: "" },
  { id: "v12", title: "Video Campaign 12", subtitle: "Final launch animation OS", coordinate: "REC-V12", videoUrl: "" }
];
