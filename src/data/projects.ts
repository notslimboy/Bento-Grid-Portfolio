import type { SlideItem } from "@/components/project-slider";

/**
 * =========================================================================
 * MANUAL EDIT GUIDE FOR PROJECT DATA
 * =========================================================================
 * 
 * This file contains all the project data displayed on the right side of the Bento Grid.
 * You can edit, add, or delete projects manually here without needing to touch
 * the UI program code.
 * 
 * -------------------------------------------------------------------------
 * HOW TO EDIT EXISTING PROJECT DATA:
 * -------------------------------------------------------------------------
 * Look for the project you want to change inside the `projectsData` array below.
 * Each project is wrapped in an object `{ ... }` with the following fields:
 * 
 * 1. `id`: Unique project ID (e.g., "meowquest"). Do not change unless necessary.
 * 2. `title`: The title of the project displayed on the card and detail modal.
 * 3. `category`: Category label (e.g., "Adventure Game", "Brand Campaign").
 * 4. `timeline`: Work duration (e.g., "4 Months (2024)").
 * 5. `roles`: Your roles in the project (array of strings, e.g., ["Game Designer", "Programmer"]).
 * 6. `detailedDescription`: Full detailed description of the project shown when the modal is opened.
 * 7. `features`: Mission Objectives or features (array of checklist text strings).
 * 8. `techStack`: Technology used (array of strings, e.g., ["Unity", "C#"]).
 *    -> Note: Tech-stack badge color styles adjust automatically based on the text name!
 * 9. `slides`: List of slides (color gradients, images, or videos) for the slideshow.
 *    -> Slide format:
 *       - Using color GRADIENT only:
 *         `{ id: 1, title: "Slide Title", subtitle: "Sub", color: "from-slate-indigo to-midnight/80" }`
 *       - Using local/web IMAGE:
 *         `{ id: 1, title: "Slide Title", subtitle: "Sub", imageUrl: "https://link-to-image.com/photo.jpg" }`
 *       - Using local/web VIDEO (will auto-play & loop):
 *         `{ id: 1, title: "Slide Title", subtitle: "Sub", videoUrl: "https://link-to-video.com/clip.mp4" }`
 * 10. `links`: Call to action buttons / external links at the bottom of the detail modal.
 *     -> Link format:
 *        `{ label: "Button Text", url: "https://address.com", icon: "game" | "play" | "book" | "external" }`
 *        -> `icon` options:
 *           - "game": game controller icon (e.g., for Play Game / Itch.io)
 *           - "play": play icon (e.g., to watch a YouTube video)
 *           - "book": book icon (e.g., to read an article/design doc)
 *           - "external": top-right arrow icon (e.g., to visit a website)
 * 
 * -------------------------------------------------------------------------
 * HOW TO ADD A NEW PROJECT:
 * -------------------------------------------------------------------------
 * 1. Copy one of the project blocks below (for example, the Meowquest block).
 * 2. Paste it inside the `projectsData` array (separate blocks with a comma `,`).
 * 3. Change the data fields to match your new project.
 * 4. The new project will automatically appear on the right side of the Bento Grid!
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  timeline: string;
  roles: string[];
  detailedDescription: string;
  features: string[];
  techStack: string[];
  slides: SlideItem[];
  links: {
    label: string;
    url: string;
    icon: 'book' | 'play' | 'external' | 'game';
  }[];
}

export const projectsData: Project[] = [
  // ==========================================
  // [1] MEOWQUEST
  // ==========================================
  {
    id: "meowquest",
    title: "Meowquest",
    category: "Adventure Game",
    timeline: "4 Months (2024)",
    roles: ["Game Designer", "Systems Designer"],
    detailedDescription: "Meowquest is an engaging adventure game designed with rich platforming elements and interactive mechanics. Players navigate a beautifully stylized world, solving dynamic environmental puzzles and engaging with unique gameplay loops centered around cat companions.",
    features: [
      "Designed core gameplay loops and exploration mechanics.",
      "Implemented a comprehensive quest system for structured player progression.",
      "Developed interactive companion AI behaviors to assist players.",
      "Crafted level designs that blend challenges with immersive world storytelling."
    ],
    techStack: ["Unity", "C#", "AI Behavior Tree", "Physics Engine"],
    slides: [
      { id: 1, title: "Cat Adventure World", subtitle: "Meowquest Main Campaign", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Quest System Design", subtitle: "Progression Mechanics", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Character Collection", subtitle: "Unlockable Companions", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "Play Game", url: "#", icon: "game" }
    ]
  },

  // ==========================================
  // [2] GUN, GIRLS, GLORY
  // ==========================================
  {
    id: "gungirlsglory",
    title: "Gun, Girls, Glory",
    category: "Tactical Action",
    timeline: "3 Months (2025)",
    roles: ["Game Designer", "Lead Programmer"],
    detailedDescription: "Gun, Girls, Glory is a high-octane tactical shooter mockup featuring sharp retro-futuristic visuals, customizable weapon platforms, and strategic character progression loops. Players coordinate squad tactics in dense urban environments.",
    features: [
      "Designed fast-paced weapon handling and custom recoil mechanics.",
      "Developed high-fidelity camera feedback systems (shake, hit impact, lean).",
      "Created modular weapon inventory and customization blueprints.",
      "Optimized performance rendering pipelines for combat stages."
    ],
    techStack: ["Unity", "C#", "FMOD Sound Design", "Post-Processing"],
    slides: [
      { id: 1, title: "Tactical Gunplay Simulation", subtitle: "Gun, Girls, Glory Standby", color: "from-[#2b0f15] to-[#070913]" },
      { id: 2, title: "Weapon Customization HUD", subtitle: "Weapon Upgrades Interface", color: "from-accent/10 to-[#070913]" },
      { id: 3, title: "Urban Stage Skirmish", subtitle: "Combat Level Layout", color: "from-[#1d1f35] to-[#070913]" }
    ],
    links: [
      { label: "Prototype Link", url: "#", icon: "game" }
    ]
  },

  // ==========================================
  // [3] CHOCOLATOS X-QUEST SUMEDANG
  // ==========================================
  {
    id: "chocolatos",
    title: "Chocolatos X-Quest Sumedang",
    category: "Featured Attraction",
    timeline: "3 Months (2023)",
    roles: ["Lead Systems Designer", "Tech Specialist"],
    detailedDescription: "Chocolatos X-Quest Sumedang is a futuristic industrial edutourism ride that integrates immersive 5D LED technology directly inside the Garudafood factory in Sumedang. The project is designed to stimulate interactive learning for children and families, combining elements of a chocolate-themed space adventure narrative with physical motion sensor systems.",
    features: [
      "Designed core gameplay loops for the 5D LED interactive projection game.",
      "Synchronized infrared motion sensor systems with game visuals on a giant LED screen.",
      "Developed real-time calibration systems for the spaceship simulator.",
      "Wrote technical documentation and ride operational guides."
    ],
    techStack: ["Unity", "C#", "5D LED Systems", "Interactive Sensors"],
    slides: [
      { id: 1, title: "5D LED Immersive Experience", subtitle: "Chocolatos X-Quest Sumedang", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Cacao Spaceships Blueprint", subtitle: "Calibration Systems Model", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Interactive Factory Tour Game", subtitle: "Gameplay Mechanics", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "Article", url: "https://garudafood.com/gubernur-jabar-dedi-mulyadi-resmikan-chocolatos-x-quest-inovasi-eduwisata-industri-22", icon: "book" },
      { label: "Video", url: "https://www.youtube.com/watch?v=OzxL23wIUYA", icon: "play" }
    ]
  },

  // ==========================================
  // [3] MOMOGI ROBLOX: JELAJAH NUSANTARA
  // ==========================================
  {
    id: "momogi",
    title: "Momogi Roblox: Jelajah Nusantara",
    category: "Active Campaigns",
    timeline: "4 Months (2024)",
    roles: ["Game Systems Designer", "Economy Designer"],
    detailedDescription: "Momogi Roblox: Jelajah Nusantara is a tower defense game campaign on the Roblox platform integrated directly with Momogi physical products. Players can purchase Momogi physical products to receive unique codes, which can then be redeemed in-game through a special verification API to claim Indonesian hero characters, collect card decks, and participate in game economy simulations.",
    features: [
      "Designed Tower Defense balancing systems for Indonesian hero characters.",
      "Integrated unique verification code APIs from physical product packaging into the Roblox database.",
      "Designed code redemption gameplay flows (Redeem Code Loop) for player retention.",
      "Simulated game economy models to balance coin rewards with card deck prices."
    ],
    techStack: ["Roblox Studio", "Luau", "Web3 API", "Database Systems"],
    slides: [
      { id: 1, title: "Nusantara Defense Arena", subtitle: "Momogi Roblox Campaign", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Indonesian Heroes Deck", subtitle: "Balancing & Stats Simulation", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Redeem Code API Integration", subtitle: "Economy Simulation Loop", color: "from-slate-indigo/30 to-electric-purple/20" }
    ],
    links: [
      { label: "Verify Code", url: "https://www.momogijelajahnusantara.com/verify", icon: "external" }
    ]
  },

  // ==========================================
  // [4] COLOSTREAM
  // ==========================================
  {
    id: "colostream",
    title: "Colostream",
    category: "Game Project",
    timeline: "2 Months (2023)",
    roles: ["Solo Systems Designer", "Solo Programmer"],
    detailedDescription: "Colostream is a physics-based PVP gladiator action game where players battle in a grand arena. Behind the scenes, the combat is actually a scripted theatrical performance orchestrated by the peak gladiator to capture popularity and fame from an audience hungry for clashing action.",
    features: [
      "Designed gladiator combat mechanics based on impact physics (Bouncing & Slapping).",
      "Developed dynamic audience AI that reacts in real-time to fighting performance.",
      "Designed scripted performance systems that demand precise combat choreography.",
      "Implemented popularity economy systems to unlock new equipment."
    ],
    techStack: ["Unity", "C#", "AI Behavior Tree", "Physics Engine"],
    slides: [
      { id: 1, title: "Gladiator PVP Spectacle", subtitle: "Colostream Arena", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Fame & Popularity Mechanics", subtitle: "Economy Scripted Systems", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Audience Clashing Interface", subtitle: "User Interface Design", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "Play on Itch.io", url: "https://sippit.itch.io/colosstream", icon: "game" }
    ]
  },

  // ==========================================
  // [5] KOCHENG: BATTLE OF BOINGS
  // ==========================================
  {
    id: "kocheng",
    title: "Kocheng: Battle of Boings",
    category: "PVP Arcade Game",
    timeline: "3 Months (2023)",
    roles: ["Lead Systems Designer", "Level Designer"],
    detailedDescription: "Kocheng: Battle of Boings is a local/online multiplayer action game set inside a transforming giant claw machine. Players control cat characters (\"Kocheng\") to shoot, slap, and bounce enemies (\"Boings\") into spike walls or environmental hazards in chaotic and exciting arena battles.",
    features: [
      "Designed responsive and satisfying physics-based bouncing and slapping mechanics.",
      "Designed dynamic levels inside the claw machine with shifting obstacles.",
      "Integrated multiplayer networking using Photon for physics synchronization.",
      "Implemented arena hazard systems (claw drop, laser barrier, wall spikes)."
    ],
    techStack: ["Unity", "C#", "Photon Unity Networking", "Physics 2D"],
    slides: [
      { id: 1, title: "Claw Machine Arena Showdown", subtitle: "Kocheng: Battle of Boings", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Slap & Bouncing Mechanics", subtitle: "Physics Simulation Design", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Interactive Arena Hazards", subtitle: "Systems Engineering", color: "from-slate-indigo/30 to-electric-purple/20" }
    ],
    links: [
      { label: "Watch Video", url: "https://www.youtube.com/watch?v=PuMKBskZpQQ&ab_channel=Kocheng%3ABattleofBoings", icon: "play" }
    ]
  },

  // ==========================================
  // [6] CHOCOLATOS TINYTAN
  // ==========================================
  {
    id: "tinytan",
    title: "Chocolatos TinyTan",
    category: "Brand Campaign",
    timeline: "3 Months (2024)",
    roles: ["Game Designer", "Systems Designer"],
    detailedDescription: "Chocolatos TinyTan is an exclusive BTS TinyTAN digital card collection campaign integrated with Chocolatos products. Consumers buy Chocolatos products to get unique codes, then redeem them to collect BTS member cards and stand a chance to win a trip to South Korea.",
    features: [
      "Designed digital card collection systems with unique code-based gacha mechanics.",
      "Designed redeem code flows from product packaging to digital platforms.",
      "Developed tiered reward systems to drive repeat purchases.",
      "Integrated unique code verification databases with marketing campaigns."
    ],
    techStack: ["Unity", "C#", "Web3 API", "Database Systems"],
    slides: [
      { id: 1, title: "BTS TinyTAN Card Collection", subtitle: "Chocolatos TinyTan", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Redeem Code System", subtitle: "Collection Mechanics", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Prize Campaign Flow", subtitle: "Reward Distribution", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "Campaign", url: "#", icon: "external" }
    ]
  },

  // ==========================================
  // [7] GERY PASTA BOBOIBOY
  // ==========================================
  {
    id: "gerypasta",
    title: "Gery Pasta Boboiboy",
    category: "AR Game Campaign",
    timeline: "3 Months (2024)",
    roles: ["Game Designer", "AR Specialist"],
    detailedDescription: "Gery Pasta Boboiboy is an exclusive Augmented Reality fighting game integrated with special edition Gery Pasta packaging licensed by Boboiboy. Players purchase products to unlock characters and gather AR markers on packaging to enhance fighting gameplay.",
    features: [
      "Designed marker-based AR combat mechanics on product packaging.",
      "Developed Boboiboy character collection systems unlockable through purchases.",
      "Implemented AR tracking using Vuforia SDK.",
      "Designed campaign flows from product purchase to gameplay engagement."
    ],
    techStack: ["Unity", "C#", "Vuforia AR", "Interactive Sensors"],
    slides: [
      { id: 1, title: "AR Fighting Game", subtitle: "Gery Pasta Boboiboy", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Marker-Based AR System", subtitle: "Augmented Reality", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Character Collection", subtitle: "Boboiboy Universe", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "View Campaign", url: "#", icon: "external" }
    ]
  },

  // ==========================================
  // [8] IMAJI GAME SPOT: TARIK TAP-TAP
  // ==========================================
  {
    id: "tariktap",
    title: "Imaji Game Spot: Tarik Tap-tap",
    category: "LED Interactive Game",
    timeline: "2 Months (2024)",
    roles: ["Game Designer", "Tech Specialist"],
    detailedDescription: "Tarik Tap-tap is a large-scale interactive LED game where players compete in a digital tug-of-war. Players collect as many points as possible before time runs out and compete on leaderboards to win prizes.",
    features: [
      "Designed interactive tug-of-war mechanics for a giant LED screen.",
      "Developed real-time leaderboard systems with tiered prizes.",
      "Implemented synchronization of player inputs with LED visuals.",
      "Designed public event experiences for large-scale brand activations."
    ],
    techStack: ["Unity", "C#", "5D LED Systems", "Interactive Sensors"],
    slides: [
      { id: 1, title: "LED Interactive Tug of War", subtitle: "Imaji Game Spot", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Leaderboard System", subtitle: "Score & Prizes", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Public Event Activation", subtitle: "Large-Scale LED", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "View Event", url: "#", icon: "external" }
    ]
  },

  // ==========================================
  // [9] UNITY PHYSICS: WATER BUOYANCY
  // ==========================================
  {
    id: "waterbuoyancy",
    title: "Unity Physics: Water Buoyancy",
    category: "Physics Simulation",
    timeline: "1 Month (2023)",
    roles: ["Solo Programmer", "Physics Engineer"],
    detailedDescription: "A water simulation project that models and visualizes buoyancy behavior based on real-world physics. Developed in Unity using custom physics mechanics to realistically simulate object interactions with water surfaces.",
    features: [
      "Implemented buoyancy algorithms based on volume displacement.",
      "Simulated fluid dynamics and water surface waves.",
      "Developed real-time object interaction systems with water physics.",
      "Visualized pressure and buoyancy forces on 3D objects."
    ],
    techStack: ["Unity", "C#", "Physics Engine", "Hardware Integration"],
    slides: [
      { id: 1, title: "Water Simulation", subtitle: "Unity Physics Project", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Buoyancy Mechanics", subtitle: "Real-World Physics", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Fluid Dynamics", subtitle: "Physics Visualization", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "View Project", url: "#", icon: "external" }
    ]
  },

  // ==========================================
  // [10] LEGEND OF LEARNING: SCIENCE SCHOOL
  // ==========================================
  {
    id: "legendlearning",
    title: "Legend of Learning: Science School",
    category: "Educational Game",
    timeline: "3 Months (2023)",
    roles: ["Game Designer", "Level Designer"],
    detailedDescription: "Legend of Learning: Science School is an educational game for children in the United States that teaches fundamental physics concepts using everyday objects. The game covers topics such as force, sound, and gravity through fun, interactive gameplay.",
    features: [
      "Designed interactive levels teaching push & pull concepts.",
      "Designed science learning mechanics through intuitive gameplay.",
      "Developed progression systems based on the US science curriculum.",
      "Implemented visual feedback to assist in understanding physics concepts."
    ],
    techStack: ["Unity", "C#", "AI Behavior Tree", "Physics Engine"],
    slides: [
      { id: 1, title: "Science School Adventure", subtitle: "Legend of Learning", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Physics Concepts", subtitle: "Force, Sound & Gravity", color: "from-vibrant-indigo/10 to-electric-purple/10" },
      { id: 3, title: "Interactive Lessons", subtitle: "Educational Gameplay", color: "from-slate-indigo/30 to-vibrant-indigo/20" }
    ],
    links: [
      { label: "Play Game", url: "#", icon: "game" }
    ]
  },

  // ==========================================
  // [12] SHANTI CATERING CASHIER APPS
  // ==========================================
  {
    id: "shanticatering",
    title: "Shanti Catering Cashier Apps",
    category: "Web Application",
    timeline: "2 Months (2025)",
    roles: ["Fullstack Developer", "UI/UX Designer"],
    detailedDescription: "Shanti Catering Cashier Apps is a specialized point-of-sale and transaction management system designed for food catering services. The platform features dynamic cart management, automated invoice generation, live stock inventory updates, and analytical dashboard widgets.",
    features: [
      "Developed responsive cart mechanics and instant checkout pipelines.",
      "Integrated automated PDF invoice generators and email notifications.",
      "Designed real-time stock alert thresholds for ingredient management.",
      "Created analytical sales summaries and dashboard visualization modules."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    slides: [
      { id: 1, title: "Cashier Transaction Portal", subtitle: "Point-of-Sale System", color: "from-vibrant-indigo/20 to-[#070913]" },
      { id: 2, title: "Inventory Alerts Dashboard", subtitle: "Stock Management Panel", color: "from-accent/10 to-[#070913]" },
      { id: 3, title: "Analytical Sales Visuals", subtitle: "Transactions Dashboard", color: "from-[#1a1c38] to-[#070913]" }
    ],
    links: [
      { label: "Visit App", url: "#", icon: "external" }
    ]
  }

  /*
  // ==========================================
  // EMPTY TEMPLATE FOR NEW PROJECTS
  // ==========================================
  // Copy-paste the commented block below and remove comment slashes (//) to add a new project:
  
  ,
  {
    id: "unique-project-id",
    title: "Your Project Name",
    category: "Project Category (e.g., RPG Game, Web App)",
    timeline: "Duration (e.g., 3 Months (2025))",
    roles: ["Your Role 1", "Your Role 2"],
    detailedDescription: "Long detailed description of the project that will be shown when the card is clicked/modal details opened.",
    features: [
      "Important feature or mission objective 1 of the project.",
      "Important feature or mission objective 2 of the project.",
      "Important feature or mission objective 3 of the project."
    ],
    techStack: ["Technology 1", "Technology 2"], // e.g., "Unity", "React", "Node.js"
    slides: [
      // You can choose to use color gradients, images, or videos for slides:
      { id: 1, title: "First Slide Title", subtitle: "First subtitle", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Second Slide Title", subtitle: "Second subtitle", color: "from-vibrant-indigo/10 to-electric-purple/10" }
      // To use an image: { id: 3, title: "Title", subtitle: "Sub", imageUrl: "https://web.com/image.png" }
      // To use a video: { id: 4, title: "Title", subtitle: "Sub", videoUrl: "https://web.com/video.mp4" }
    ],
    links: [
      { label: "Visit Web", url: "https://your-link.com", icon: "external" } // icon: "game" | "play" | "book" | "external"
    ]
  }
  */
];
