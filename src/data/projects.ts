import type { SlideItem } from "@/components/project-slider";

/**
 * =========================================================================
 * PANDUAN EDIT MANUAL DATA PROYEK (FOR USER)
 * =========================================================================
 * 
 * File ini berisi semua data proyek yang ditampilkan di Bento Grid sebelah kanan.
 * Kamu bisa mengedit, menambah, atau menghapus proyek secara manual di sini tanpa
 * perlu menyentuh kode program UI.
 * 
 * -------------------------------------------------------------------------
 * CARA MENGEDIT DATA PROYEK YANG SUDAH ADA:
 * -------------------------------------------------------------------------
 * Cari proyek yang ingin kamu ubah di dalam array `projectsData` di bawah.
 * Setiap proyek dibungkus dalam objek `{ ... }` dengan field berikut:
 * 
 * 1. `id`: ID unik proyek (misal: "meowquest"). Jangan diubah kecuali perlu.
 * 2. `title`: Judul proyek yang tampil di kartu dan detail modal.
 * 3. `category`: Label kategori (misal: "Adventure Game", "Brand Campaign").
 * 4. `timeline`: Durasi pengerjaan (misal: "4 Months (2024)").
 * 5. `roles`: Peran kamu di proyek (array, misal: ["Game Designer", "Programmer"]).
 * 6. `detailedDescription`: Deskripsi lengkap proyek saat modal dibuka.
 * 7. `features`: Mission Objectives atau fitur-fitur (array teks checklist).
 * 8. `techStack`: Teknologi yang dipakai (array, misal: ["Unity", "C#"]).
 *    -> Note: Gaya warna badge tech-stack akan menyesuaikan otomatis berdasarkan nama teksnya!
 * 9. `slides`: Daftar slide gambar/video/warna untuk slideshow di kartu & modal detail.
 *    -> Format slide:
 *       - Memakai GRADIENT warna saja:
 *         `{ id: 1, title: "Judul Slide", subtitle: "Sub", color: "from-slate-indigo to-midnight/80" }`
 *       - Memakai GAMBAR lokal/web:
 *         `{ id: 1, title: "Judul Slide", subtitle: "Sub", imageUrl: "https://link-gambar.com/foto.jpg" }`
 *       - Memakai VIDEO lokal/web (akan auto-play & loop):
 *         `{ id: 1, title: "Judul Slide", subtitle: "Sub", videoUrl: "https://link-video.com/klip.mp4" }`
 * 10. `links`: Tombol aksi/tautan eksternal di bagian bawah detail modal.
 *     -> Format link:
 *        `{ label: "Teks Tombol", url: "https://alamat.com", icon: "game" | "play" | "book" | "external" }`
 *        -> Pilihan `icon`:
 *           - "game": ikon controller game (misal untuk Play Game / Itch.io)
 *           - "play": ikon play (misal untuk nonton video YouTube)
 *           - "book": ikon buku (misal untuk baca artikel)
 *           - "external": ikon panah atas-kanan (misal untuk kunjungi web)
 * 
 * -------------------------------------------------------------------------
 * CARA MENAMBAH PROYEK BARU:
 * -------------------------------------------------------------------------
 * 1. Copy salah satu blok proyek di bawah (misalnya blok Meowquest).
 * 2. Paste di dalam array `projectsData` (pisahkan antar blok dengan tanda koma `,`).
 * 3. Ubah isi data sesuai proyek barumu.
 * 4. Proyek baru akan langsung muncul otomatis di kolom kanan Bento Grid!
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
    detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      "Duis aute irure dolor in reprehenderit in voluptate velit."
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
  // [2] CHOCOLATOS X-QUEST SUMEDANG
  // ==========================================
  {
    id: "chocolatos",
    title: "Chocolatos X-Quest Sumedang",
    category: "Featured Attraction",
    timeline: "3 Months (2023)",
    roles: ["Lead Systems Designer", "Tech Specialist"],
    detailedDescription: "Chocolatos X-Quest Sumedang merupakan wahana eduwisata industri futuristik yang mengintegrasikan teknologi LED 5D imersif secara langsung di dalam pabrik Garudafood Sumedang. Proyek ini dirancang untuk menstimulasi pembelajaran interaktif bagi pengunjung anak-anak dan keluarga, menggabungkan elemen narasi petualangan antariksa bertema cokelat dengan sistem sensor gerak fisik.",
    features: [
      "Merancang core gameplay loops untuk 5D LED interactive projection game.",
      "Sinkronisasi sistem sensor gerak inframerah dengan visual game di layar LED raksasa.",
      "Mengembangkan sistem kalibrasi spaceship simulator secara real-time.",
      "Menulis dokumentasi teknis dan panduan operasional wahana."
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
    detailedDescription: "Momogi Roblox: Jelajah Nusantara adalah kampanye game tower defense di platform Roblox yang diintegrasikan langsung dengan produk fisik Momogi. Pemain dapat membeli produk fisik Momogi untuk mendapatkan kode unik, yang kemudian dapat di-redeem di dalam game melalui API verifikasi khusus untuk mengklaim karakter pahlawan nusantara, mengoleksi deck kartu, dan berpartisipasi dalam simulasi ekonomi game.",
    features: [
      "Merancang sistem Tower Defense balancing untuk karakter pahlawan Nusantara.",
      "Integrasi API kode verifikasi unik dari kemasan produk fisik ke dalam database Roblox.",
      "Mendesain flow gameplay penukaran kode (Redeem Code Loop) untuk retensi pemain.",
      "Simulasi model ekonomi game untuk menyeimbangkan reward koin dengan harga deck."
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
    detailedDescription: "Colostream adalah sebuah game aksi gladiator PVP di mana pemain bertarung di arena yang megah. Di balik layar, pertarungan tersebut sebenarnya merupakan pertunjukan teatrikal yang telah diskrip dan diorkestrasi oleh sang gladiator puncak demi merebut popularitas dan ketenaran dari audiens yang haus akan clashing aksi.",
    features: [
      "Merancang mekanik pertarungan gladiator berbasis fisika benturan (Bouncing & Slapping).",
      "Mengembangkan AI audiens dinamis yang memberikan reaksi real-time terhadap performa bertarung.",
      "Mendesain sistem scripted performance yang menuntut ketepatan koreografi laga.",
      "Implementasi sistem ekonomi popularitas untuk membuka perlengkapan baru."
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
    detailedDescription: "Kocheng: Battle of Boings adalah game aksi multipemain lokal/online yang bertempat di dalam mesin capit raksasa yang terus bertransformasi. Pemain mengontrol karakter kucing (\"Kocheng\") untuk menembak, menampar, dan memantulkan musuh (\"Boings\") ke dinding duri atau bahaya lingkungan dalam pertempuran arena yang seru dan kacau.",
    features: [
      "Mendesain mekanik physics-based bouncing dan slap yang responsif dan memuaskan.",
      "Merancang level dinamis di dalam mesin capit yang berubah rintangan secara berkala.",
      "Integrasi multiplayer networking menggunakan Photon untuk sinkronisasi fisika.",
      "Implementasi sistem hazard arena (claw drop, laser barrier, wall spikes)."
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
    detailedDescription: "Chocolatos TinyTan adalah kampanye koleksi kartu digital eksklusif BTS TinyTAN yang terintegrasi dengan produk Chocolatos. Konsumen membeli produk Chocolatos untuk mendapatkan kode unik, lalu menukarkannya untuk mengoleksi kartu anggota BTS dan berkesempatan memenangkan hadiah trip ke Korea Selatan.",
    features: [
      "Merancang sistem koleksi kartu digital dengan mekanik gacha berbasis kode unik.",
      "Mendesain flow redeem code dari kemasan produk ke platform digital.",
      "Mengembangkan sistem reward tier untuk mendorong pembelian berulang.",
      "Integrasi database verifikasi kode unik dengan kampanye marketing."
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
    detailedDescription: "Gery Pasta Boboiboy adalah game fighting Augmented Reality eksklusif yang terintegrasi dengan kemasan edisi spesial Gery Pasta berlisensi Boboiboy. Pemain membeli produk untuk membuka karakter dan mengumpulkan marker AR pada kemasan untuk meningkatkan gameplay pertarungan.",
    features: [
      "Merancang mekanik pertarungan AR berbasis marker pada kemasan produk.",
      "Mengembangkan sistem koleksi karakter Boboiboy yang bisa di-unlock melalui pembelian.",
      "Implementasi tracking AR menggunakan Vuforia SDK.",
      "Mendesain flow kampanye dari pembelian produk hingga gameplay engagement."
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
    detailedDescription: "Tarik Tap-tap adalah game interaktif LED skala besar di mana pemain berkompetisi satu sama lain dalam permainan tarik tambang digital. Pemain mengumpulkan poin sebanyak-banyaknya sebelum waktu habis dan bersaing di leaderboard untuk memenangkan hadiah.",
    features: [
      "Merancang mekanik tug-of-war interaktif untuk layar LED raksasa.",
      "Mengembangkan sistem leaderboard real-time dengan hadiah berjenjang.",
      "Implementasi sinkronisasi input pemain dengan visual LED.",
      "Mendesain pengalaman event publik untuk aktivasi brand skala besar."
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
    detailedDescription: "Proyek simulasi air yang memodelkan dan memvisualisasikan perilaku daya apung (buoyancy) berdasarkan fisika dunia nyata. Dibuat di Unity menggunakan mekanik fisika kustom untuk mensimulasikan interaksi objek dengan permukaan air secara realistis.",
    features: [
      "Mengimplementasikan algoritma buoyancy berbasis volume displacement.",
      "Mensimulasikan dinamika fluida dan gelombang permukaan air.",
      "Mengembangkan sistem interaksi objek dengan fisika air real-time.",
      "Visualisasi tekanan dan gaya apung pada objek 3D."
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
    detailedDescription: "Legend of Learning: Science School adalah game edukasi untuk anak-anak di Amerika Serikat yang mengajarkan konsep fisika dasar menggunakan objek sehari-hari. Game ini mencakup topik-topik seperti gaya (force), suara (sound), dan gravitasi melalui gameplay interaktif yang menyenangkan.",
    features: [
      "Mendesain level-level interaktif yang mengajarkan konsep push & pull.",
      "Merancang mekanik pembelajaran sains melalui gameplay yang intuitif.",
      "Mengembangkan sistem progression berbasis kurikulum sains AS.",
      "Implementasi visual feedback yang membantu pemahaman konsep fisika."
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
  }

  /*
  // ==========================================
  // TEMPLATE KOSONG UNTUK PROYEK BARU
  // ==========================================
  // Copy-paste blok komentar di bawah ini lalu hapus tanda komentar (//) untuk menambahkan proyek baru:
  
  ,
  {
    id: "id-proyek-unik",
    title: "Nama Proyek Kamu",
    category: "Kategori Proyek (misal: RPG Game, Web App)",
    timeline: "Durasi (misal: 3 Months (2025))",
    roles: ["Peran Kamu 1", "Peran Kamu 2"],
    detailedDescription: "Deskripsi panjang lengkap mengenai proyek yang akan tampil saat card diklik/dibuka detailnya.",
    features: [
      "Fitur atau misi penting ke-1 dari proyek ini.",
      "Fitur atau misi penting ke-2 dari proyek ini.",
      "Fitur atau misi penting ke-3 dari proyek ini."
    ],
    techStack: ["Teknologi 1", "Teknologi 2"], // misal: "Unity", "React", "Node.js"
    slides: [
      // Kamu bisa pilih slide-nya memakai gradasi warna, gambar, atau video:
      { id: 1, title: "Judul Slide Pertama", subtitle: "Sub-judul pertama", color: "from-slate-indigo to-midnight/80" },
      { id: 2, title: "Judul Slide Kedua", subtitle: "Sub-judul kedua", color: "from-vibrant-indigo/10 to-electric-purple/10" }
      // Kalau mau pake gambar: { id: 3, title: "Judul", subtitle: "Sub", imageUrl: "https://web.com/gambar.png" }
      // Kalau mau pake video: { id: 4, title: "Judul", subtitle: "Sub", videoUrl: "https://web.com/video.mp4" }
    ],
    links: [
      { label: "Kunjungi Web", url: "https://link-kamu.com", icon: "external" } // icon: "game" | "play" | "book" | "external"
    ]
  }
  */
];
