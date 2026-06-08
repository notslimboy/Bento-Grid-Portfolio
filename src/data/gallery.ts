export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl?: string; // Tautan video asli (.mp4) bisa kamu masukkan di sini nanti
  coordinate: string;
}

const base = import.meta.env.BASE_URL;

export const galleryData: GalleryItem[] = [
  { id: "v1", title: "Iger Weather", subtitle: "Interactive Weather Campaign", coordinate: "REC-V01", videoUrl: `${base}gallery/Iger-Weather.mp4` },
  { id: "v2", title: "Ariel GetRill", subtitle: "GetRill Activation Campaign", coordinate: "REC-V02", videoUrl: `${base}gallery/Ariel-GetRill.mp4` },
  { id: "v3", title: "BRI Hari Menabung", subtitle: "National Saving Day Campaign", coordinate: "REC-V03", videoUrl: `${base}gallery/hari-menabung.mp4` },
  { id: "v4", title: "BRI Hari Pahlawan", subtitle: "National Hero Day Campaign", coordinate: "REC-V04", videoUrl: `${base}gallery/Hari-Pahlawan.mp4` },
  { id: "v5", title: "BRI LocalFest", subtitle: "LocalFest Event Activation", coordinate: "REC-V05", videoUrl: `${base}gallery/BRI-LocalFest.mp4` },
  { id: "v6", title: "HUT BRI", subtitle: "Anniversary Campaign", coordinate: "REC-V06", videoUrl: `${base}gallery/HUT-BRI.mp4` },
  { id: "v7", title: "BRI Tahun Baru", subtitle: "New Year Celebration Campaign", coordinate: "REC-V07", videoUrl: `${base}gallery/TahunBaru.mp4` },
  { id: "v8", title: "Mutant HI", subtitle: "HI Roundabout Activation", coordinate: "REC-V08", videoUrl: `${base}gallery/Mutant-HI.mp4` },
  { id: "v9", title: "Mutant Mandarin", subtitle: "Mandarin Campaign Activation", coordinate: "REC-V09", videoUrl: `${base}gallery/Mutant-Mandarin.mp4` },
  { id: "v10", title: "Mutant BLOK M", subtitle: "Blok M Event Campaign", coordinate: "REC-V10", videoUrl: `${base}gallery/Mutant-BlokM.mp4` },
  { id: "v11", title: "Lemoo", subtitle: "Lemoo HI Brand Campaign", coordinate: "REC-V11", videoUrl: `${base}gallery/Lemoo-HI.mp4` },
  { id: "v12", title: "SO Good", subtitle: "So Good Nugget Commercial", coordinate: "REC-V12", videoUrl: `${base}gallery/So-Good-Nugget.mp4` }
];
