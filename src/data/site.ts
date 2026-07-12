import type {
  AppTab,
  CareerSummary,
  InterestGame,
  NavigationItem,
} from "@/types/portfolio";

const base = import.meta.env.BASE_URL;

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
];

export const defaultTab: AppTab = "home";

export const bootLogs = [
  "HUD: STANDBY // INIT DATA_STREAM",
  "SYS: BOOTING TACTICAL_INTERFACE v9.04",
  "RADAR: CONNECTING TO DEEP_SPACE_TRANSCEIVER...",
  "TELEMETRY: DECRYPTING STAR_MAP_SECTOR_7...",
  "ORBIT: RESOLVING FLIGHT_PATHWAY_VECTORS...",
  "HUD: ESTABLISHING SECURE_LINK TO TARGET_DECK...",
  "COGNITIVE: SYNCHRONIZING PILOT_CORE_LOGS...",
  "HUD: TACTICAL HUD ONLINE. SYSTEM READY.",
  "SYS: ACTIVE // SYSTEM STABLE",
] as const;

export const careerSummaries: CareerSummary[] = [
  { company: "Maulidan Games", role: "Intern Game Programmer", period: "Sep – Dec 2021" },
  { company: "Monster Group", role: "Game Designer", period: "Feb – Dec 2023" },
  { company: "Miraimimpi", role: "Game Designer", period: "Aug 2021 – Jul 2024" },
  { company: "Imaji DigiStudio", role: "Game Designer | Creative", period: "Jul 2024 – Mar 2026" },
  { company: "Not Boring Company", role: "Game Designer", period: "Nov 2025 – Present" },
];

export const interestGames: InterestGame[] = [
  {
    name: "League of Legends",
    genre: "MOBA // Riot Games",
    cover: `${base}games/lol.jpg`,
    coverAvif: `${base}games/lol.avif`,
    platform: "PC // Active Player",
    description: "Competed in high-elo ranked matches. Essential reference for competitive game loops, balancing, and progression systems.",
  },
  {
    name: "Valorant",
    genre: "Tactical FPS // Riot Games",
    cover: `${base}games/valorant.jpeg`,
    platform: "PC // Tactician",
    description: "First-person tactical shooter with unique character abilities. Studied for map design, weapon feedback, and character balance.",
  },
  {
    name: "NFS Series",
    genre: "Racing // EA Games",
    cover: `${base}games/-nfs-mw-3.jpg`,
    platform: "PC & Console // Driver",
    description: "Grew up grinding NFS: Most Wanted & Carbon. Studied for open-world design, progression systems, and high-adrenaline pacing.",
  },
  {
    name: "Cult of the Lamb",
    genre: "Roguelike Action // Devolver Digital",
    cover: `${base}games/cult-of-the-lamb.jpg`,
    platform: "PC & Console // Reference",
    description: "A dark yet cute mashup of action roguelike and colony simulator. Highly inspiring for combining disparate genres and game loops.",
  },
  {
    name: "Uncharted Series",
    genre: "Action-Adventure // Naughty Dog",
    cover: `${base}games/uncharted.jpeg`,
    platform: "PlayStation // Narrative",
    description: "Cinematic narrative adventure. A masterclass in pacing, set-piece level design, camera work, and environmental storytelling.",
  },
];
