import type { CareerEntry } from "@/types/portfolio";

const base = import.meta.env.BASE_URL;

export const careerTimelineData: CareerEntry[] = [
  {
    title: "Nov 2025 – Present",
    company: "Not Boring Company",
    role: "Game Designer",
    missions: [
      "Developing Meowquest, an adventure game with Netmarble as its publisher.",
      "Designing gameplay systems, progression, and player experiences for Meowquest.",
      "Contributing to the ongoing development of Gun, Girls, Glory, a tactical action project.",
    ],
    projects: [
      {
        title: "Meowquest",
        subtitle: "Adventure Game · Netmarble",
        watermark: "MQ",
        imageSrc: `${base}projects/meowquest-pitch.jpg`,
        imageAlt: "Meowquest pitch artwork",
      },
    ],
  },
  {
    title: "Jul 2024 – Mar 2026",
    company: "Imaji DigiStudio",
    role: "Game Designer | Creative",
    missions: [
      "Created Game Design Documents (GDD), balanced gameplay systems, and developed pitch decks for projects including Chocolatos X-Quest, Momogi Roblox: Jelajah Nusantara, Gery Boboiboy, BTS TinyTan, and Imaji Gamespot.",
      "Designed UI/UX for games and apps, focusing on clarity, engagement, and smooth user experience.",
      "Designed system architecture and conducted testing for game features and app functionality to ensure performance and usability.",
      "Developed creative game concepts and interactive ideas aligned with brand campaigns and experiential marketing.",
      "Ideated and produced Faux OOH concepts in collaboration with brands for immersive promotional activations.",
    ],
    projects: [
      {
        title: "Chocolatos X-Quest",
        subtitle: "Featured Attraction · Garudafood",
        watermark: "XQ",
        imageSrc: `${base}projects/XQuest-Logo.png`,
        imageAlt: "Chocolatos X-Quest logo",
      },
      {
        title: "Momogi Roblox",
        subtitle: "Brand Campaign · Jelajah Nusantara",
        watermark: "MR",
        videoSrc: `${base}projects/Momogi-Roblox.mp4`,
      },
      {
        title: "Gery Pasta Boboiboy",
        subtitle: "AR Game Campaign",
        watermark: "GB",
        videoSrc: `${base}projects/Gery-Pasta-Boboiboy.mp4`,
      },
      {
        title: "Chocolatos TinyTan",
        subtitle: "Brand Campaign · Digital Collection",
        watermark: "TT",
        videoSrc: `${base}projects/Chocolatos-TinyTan.mp4`,
      },
      {
        title: "Imaji Game Spot",
        subtitle: "LED Interactive Game · Tarik Tap-tap",
        watermark: "IG",
        videoSrc: `${base}projects/Tap-Tap.mp4`,
      },
    ],
  },
  {
    title: "Aug 2021 – Jul 2024",
    company: "Miraimimpi",
    role: "Game Designer",
    missions: [
      "Designed gameplay loops, mechanics, character abilities, and level layouts for Kocheng: Battle of Boings (BoB), followed by hands-on playtesting and iteration.",
      "Balanced core gameplay systems and authored comprehensive Game Design Documents (GDD) to guide development.",
      "Developed in-game economy projections, including currency flow and in-app purchase (IAP) structures.",
      "Built scalable design systems to support feature expansion and maintain gameplay consistency.",
    ],
    projects: [
      {
        title: "Kocheng: Battle of Boings",
        subtitle: "PVP Arcade Game",
        watermark: "KB",
        videoSrc: `${base}projects/Kocheng.mp4`,
      },
    ],
  },
  {
    title: "Feb 2023 – Dec 2023",
    company: "Monster Group",
    role: "Game Designer",
    missions: [
      "Refined existing game concepts and authored Game Design Documents (GDD) to align with updated vision and mechanics.",
      "Balanced gameplay systems, progression models, and combat calculators for Mahabrats.",
      "Wrote narrative design documents and balanced virtual economy flows.",
    ],
    projects: [
      {
        title: "18 Days of War Mahabarats",
        subtitle: "NFT Game · Mashida Token · Unity",
        watermark: "18",
        imageSrc: `${base}projects/18-days-of-war-mahabarats.jpg`,
        imageAlt: "18 Days of War Mahabarats project",
      },
    ],
  },
  {
    title: "Sep 2021 – Dec 2021",
    company: "Maulidan Games",
    role: "Intern Game Programmer",
    missions: [
      "Programmed gameplay mechanics and systems for Legends of Learning educational game.",
      "Developed simulations and object interactions for the Water Physics project in Unity.",
      "Refactored existing game codebases for improved readability, scalability, and maintainability.",
    ],
    projects: [
      {
        title: "Legends of Learning",
        subtitle: "Educational Game · Science School",
        watermark: "LL",
        imageSrc: `${base}projects/ScienceSchool.jpg`,
        imageAlt: "Legends of Learning science school project",
      },
      {
        title: "Water Physics",
        subtitle: "Unity Simulation · Object Interaction",
        watermark: "WP",
        imageSrc: `${base}projects/Water-Bouyancy.jpg`,
        imageAlt: "Water Physics project",
      },
    ],
  },
];

export const skillsData = {
  gameDesign: [
    "System Design",
    "Core Loop Modeling",
    "Narrative Flow",
    "Gameplay Balancing",
    "Level Design",
  ],
  programming: [
    "Unity (C#)",
    "Luau (Roblox Studio)",
    "Web Programming",
    "Version Control (Git)",
    "Scripting & Logic",
  ],
  productionTools: [
    "Machinations.io",
    "Figma",
    "Agile PM (Trello/Jira)",
    "Spreadsheet Modeling",
  ],
} as const;

export const aboutProfile = {
  name: "RAKA ARYA",
  status: "Available for Hire",
  role: "Game Designer // Creative",
  description: "A Game Designer and Creative Designer based in Indonesia. I craft engaging gameplay systems, design intuitive UI/UX models, and develop interactive concepts for brand campaigns—both in and out of the digital universe.",
  email: "raka.arya34@gmail.com",
  resumePath: `${base}CV-Raka-Arya-Pratama-ATS.pdf`,
  socialLinks: {
    linkedin: "https://linkedin.com/in/raka-arya-pratama/",
    discord: "https://discord.com/users/352425793227456512",
    itch: "https://notslimboy.itch.io/",
  },
} as const;
