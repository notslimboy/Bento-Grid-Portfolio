import type { Project } from "@/types/portfolio";

export type { Project } from "@/types/portfolio";

const base = import.meta.env.BASE_URL;

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
    publisher: "Netmarble",
    detailedDescription: "Published by Netmarble, Meowquest is a cute roguelite where every choice shapes the kind of cat you become. Shape your cat's abilities as you go, making meaningful choices at every step. Capybara Go! meets Slay the Spire—a cute, relaxing adventure where every run evolves in surprising ways, and your choices shape what your cat becomes.",
    features: [
      "Designed core gameplay loops and exploration mechanics.",
      "Implemented a comprehensive quest system for structured player progression.",
      "Developed interactive companion AI behaviors to assist players.",
      "Crafted level designs that blend challenges with immersive world storytelling."
    ],
    techStack: ["Unity", "C#", "Game Design"],
    slides: [
      { id: 1, title: "Meowquest", subtitle: "Main Pitch", color: "", imageUrl: `${base}projects/meowquest-pitch.jpg` },
      { id: 2, title: "Gladiator Road", subtitle: "Roman Adventure World", color: "", imageUrl: `${base}projects/meowquest-gladiator-road.jpg` },
      { id: 3, title: "East Land Road", subtitle: "Eastern Adventure World", color: "", imageUrl: `${base}projects/meowquest-east-land-road.jpg` },
      { id: 4, title: "Snowy Land Road", subtitle: "Winter Adventure World", color: "", imageUrl: `${base}projects/meowquest-snowy-land-road.jpg` }
    ],
    links: [
      { label: "Watch Video", url: "https://youtu.be/dEdBgP-mgeg", icon: "play" }
    ]
  },

  // ==========================================
  // [2] GUN, GIRLS, GLORY
  // ==========================================
  {
    id: "gungirlsglory",
    title: "Gun, Girls, Glory",
    isHidden: true,
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
    timeline: "2 Years",
    roles: ["Game Designer", "Creative"],
    detailedDescription: "Chocolatos X-Quest is a futuristic, educational tourism attraction featuring 5D immersive LED technology, integrated directly into the Garudafood factory in Sumedang. It offers a lively, real-world learning experience designed to stimulate curiosity among the younger generation.",
    features: [
      "Designed core gameplay loops for the 5D LED interactive projection game.",
      "Synchronized infrared motion sensor systems with game visuals on a giant LED screen.",
      "Developed real-time calibration systems for the spaceship simulator.",
      "Wrote technical documentation and ride operational guides."
    ],
    techStack: ["Unreal", "5D LED Systems", "Interactive Sensors"],
    slides: [
      { id: 1, title: "Chocolatos X-Quest Sumedang", subtitle: "Interactive Factory Visit", color: "", imageUrl: `${base}projects/XQuest-Logo.png` },
      { id: 2, title: "5D LED Immersive Experience", subtitle: "Chocolatos X-Quest Sumedang", color: "", imageUrl: `${base}projects/Chocolatos-XQUEST1.jpg` },
      { id: 3, title: "Chocolatos Immersive Gondola", subtitle: "Chocolatos X-Quest Sumedang", color: "", imageUrl: `${base}projects/Chocolatos-XQUEST2.jpg` },
      { id: 4, title: "Interactive Factory Tour Game", subtitle: "Chocolatos X-Quest Sumedang", color: "", imageUrl: `${base}projects/Chocolatos-XQUEST3.jpg` }
    ],
    links: [
      { label: "Video", url: "https://www.youtube.com/watch?v=OzxL23wIUYA", icon: "play" },
      { label: "Shorts", url: "https://youtube.com/shorts/ob0qwhyYo_o?si=KMIP2SK7dWlgM34_", icon: "play" },
      { label: "Article", url: "https://garudafood.com/gubernur-jabar-dedi-mulyadi-resmikan-chocolatos-x-quest-inovasi-eduwisata-industri-22", icon: "book" },

    ]
  },

  // ==========================================
  // [3] MOMOGI ROBLOX: JELAJAH NUSANTARA
  // ==========================================
  {
    id: "momogi",
    title: "Momogi Roblox: Jelajah Nusantara",
    category: "Brand Campaigns",
    timeline: "5 Months",
    roles: ["Game Systems Designer", "Economy Designer"],
    detailedDescription: "Momogi Roblox is an engaging tower defense game on the Roblox platform, created as part of a promotional campaign. Players purchase Momogi 'Jelajah Nusantara' products to discover unique redeemable codes. Entering these codes in-game unlocks exclusive characters and resources. Play, collect all the unique codes to complete your collection deck, and win exciting prizes!",
    features: [
      "Designed Tower Defense balancing systems for Indonesian hero characters.",
      "Integrated unique verification code APIs from physical product packaging into the Roblox database.",
      "Designed code redemption gameplay flows (Redeem Code Loop) for player retention.",
      "Simulated game economy models to balance coin rewards with card deck prices."
    ],
    techStack: ["Roblox Studio", "Luau", "Game Balancing"],
    slides: [
      { id: 1, title: "Nusantara Defense Arena", subtitle: "Momogi Roblox Campaign", color: "", videoUrl: `${base}projects/Momogi-Roblox.mp4` }
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
    category: "Game Jam",
    timeline: "1 Week",
    roles: ["Game Designer", "Game Programmer"],
    detailedDescription: "Every week, the citizens of Rome gather to watch their idols clash as gladiators in the greatest entertainment spectacle in the universe: ColosStream.\n\nBut behind the scenes, the show is nothing more than a scripted performance — orchestrated by the top gladiator himself in a quest for ultimate fame and popularity.",
    features: [
      "Control: Use mouse to interact with objects and buttons, press ESC to open pause menu",
      "Each turn random objects will appear on the arena",
      "Attack and defeat the appearing enemies",
      "Equip weapons to increase attack power",
      "Use items and tools with all kinds of effects to help you",
      "Unlock new objects by winning the game",
      "Build your own challenge with increasing difficulty level to unlock better rewards"
    ],
    techStack: ["Unity", "C#"],
    slides: [
      { id: 1, title: "Gladiator PVP Spectacle", subtitle: "Colostream Arena", color: "", imageUrl: `${base}projects/Colostream.gif` },
      { id: 2, title: "Fame & Popularity Mechanics", subtitle: "Economy Scripted Systems", color: "", imageUrl: `${base}projects/Colostream-1.jpg` },
      { id: 3, title: "Audience Clashing Interface", subtitle: "User Interface Design", color: "", imageUrl: `${base}projects/Colostream-2.jpg` }
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
    timeline: "2 Years",
    roles: ["Game Designer", "Level Designer", "Character Designer"],
    detailedDescription: "Kocheng: Battle of Boings is a local/online multiplayer action game set inside a transforming giant claw machine. Players control cat characters (\"Kocheng\") to shoot, slap, and bounce enemies (\"Boings\") into spike walls or environmental hazards in chaotic and exciting arena battles.",
    features: [
      "Designed responsive and satisfying physics-based bouncing and slapping mechanics.",
      "Designed dynamic levels inside the claw machine with shifting obstacles.",
      "Integrated multiplayer networking using Photon for physics synchronization.",
      "Implemented arena hazard systems (claw drop, laser barrier, wall spikes)."
    ],
    techStack: ["Unity", "C#", "Photon Unity Networking", "Physics 2D"],
    slides: [
      { id: 1, title: "Claw Machine Characters Arena Showdown", subtitle: "Kocheng: Battle of Boings", color: "", videoUrl: `${base}projects/Kocheng.mp4` }
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
    techStack: ["Unity", "C#", "Database Systems"],
    slides: [
      { id: 1, title: "BTS TinyTAN Card Collection", subtitle: "Chocolatos TinyTan", color: "", videoUrl: `${base}projects/Chocolatos-TinyTan.mp4` }
    ],
    links: [
      { label: "Campaign", url: "https://www.youtube.com/watch?v=Y1qFVVFVn6M&t=2s", icon: "external" }
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
      { id: 1, title: "AR Fighting Game", subtitle: "Gery Pasta Boboiboy", color: "", videoUrl: `${base}projects/Gery-Pasta-Boboiboy.mp4` }
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
      { id: 1, title: "LED Interactive Tug of War", subtitle: "Imaji Game Spot", color: "", videoUrl: `${base}projects/Tap-Tap.mp4` }
    ],
    links: [
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
      { id: 1, title: "Water Simulation", subtitle: "Unity Physics Project", color: "", imageUrl: `${base}projects/Water-Bouyancy.jpg` }
    ],
    links: [
      { label: "View Project", url: "#", icon: "external" }
    ]
  },

  // ==========================================
  // [10] 18 DAYS OF WAR MAHABARATS
  // ==========================================
  {
    id: "18-days-of-war-mahabarats",
    title: "18 Days of War Mahabarats",
    category: "NFT Game",
    timeline: "2023",
    roles: ["Game Designer"],
    detailedDescription: "An NFT strategy game where players destroy the opponent's tower or base by deploying and removing units with Silver. Players balance defense and attack strategies while evaluating the effectiveness of every unit to defeat the enemy.",
    features: [
      "Designed strategic unit deployment and removal systems using Silver.",
      "Balanced offense and defense choices across the core gameplay loop.",
      "Created game design documentation for unit strategy and combat systems."
    ],
    techStack: ["NFT Game", "Mashida Token", "Unity"],
    slides: [
      { id: 1, title: "18 Days of War", subtitle: "Mahabarats NFT Game", color: "", imageUrl: `${base}projects/18-days-of-war-mahabarats.jpg` }
    ],
    links: [
      { label: "See Project", url: "https://18daysofwar.mashida.io/", icon: "external" }
    ]
  },

  // ==========================================
  // [11] LEGEND OF LEARNING: SCIENCE SCHOOL
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
      { id: 1, title: "Science School Adventure", subtitle: "Legend of Learning", color: "", videoUrl: `${base}projects/Science-School.mp4` },
      { id: 2, title: "Physics Concepts", subtitle: "Force, Sound & Gravity", color: "", imageUrl: `${base}projects/ScienceSchool.jpg` },
    ],
    links: [
      { label: "Play Game", url: "https://teachers.legendsoflearning.com/assignments/399f968b/science-school-assignment", icon: "game" }
    ]
  },

  // ==========================================
  // [12] SHANTI CATERING CASHIER APPS
  // ==========================================
  {
    id: "shanticatering",
    title: "Shanti Catering Cashier Apps",
    category: "Cashier PWA",
    timeline: "PWA Development",
    roles: ["Fullstack Developer", "UI/UX Designer"],
    detailedDescription: "A cashier PWA for Shanti Catering's daily catering operation. Admins turn incoming WhatsApp orders into structured transactions, then print receipts for fulfillment. Supabase stores menu, order, customer, payment, and receivables data in one place.",
    features: [
      "Converted WhatsApp orders into print-ready cashier transactions for daily fulfillment.",
      "Built a sales dashboard and reconciliation tools for unpaid balances and deposits.",
      "Created a searchable customer database with address tags, delivery fees, and deposit details.",
      "Used Supabase as the backend for menus, orders, customers, payments, and receivables."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
    slides: [
      { id: 1, title: "Cashier Menu & Order Entry", subtitle: "Daily Catering Cashier", color: "", imageUrl: `${base}projects/shanti-cashier-menu.jpg` },
      { id: 2, title: "Sales Dashboard", subtitle: "Transactions & Revenue", color: "", imageUrl: `${base}projects/shanti-cashier-dashboard.jpg` },
      { id: 3, title: "Customer Database", subtitle: "Delivery & Address Tags", color: "", imageUrl: `${base}projects/shanti-cashier-customers.jpg` },
      { id: 4, title: "Receivables Reconciliation", subtitle: "Debt & Deposit Tracking", color: "", imageUrl: `${base}projects/shanti-cashier-receivables.jpg` }
    ],
    links: []
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

export const visibleProjectsData = projectsData.filter((project) => !project.isHidden);
