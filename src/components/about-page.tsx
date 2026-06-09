import { useState } from "react";
import { Download, ChevronLeft, ChevronRight, Star, Terminal } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { Timeline } from "@/components/ui/timeline";
import { ScrambleText } from "@/components/scramble-text";
import { ConnectCard } from "@/components/cards/connect-card";
import { testimonialsData } from "@/data/testimonials";

const base = import.meta.env.BASE_URL;

const careerTimelineData = [
  {
    title: "Jul 2024 – Present",
    company: "Imaji DigiStudio",
    role: "Game Designer | Creative",
    waypointLabel: "Moon Destination",
    missions: [
      "Created Game Design Documents (GDD), balanced gameplay systems, and developed pitch decks for projects including Chocolatos X-Quest, Momogi Roblox: Jelajah Nusantara, Gery Boboiboy, BTS TinyTan, and Imaji Gamespot.",
      "Designed UI/UX for games and apps, focusing on clarity, engagement, and smooth user experience.",
      "Designed system architecture and conducted testing for game features and app functionality to ensure performance and usability.",
      "Developed creative game concepts and interactive ideas aligned with brand campaigns and experiential marketing.",
      "Ideated and produced Faux OOH concepts in collaboration with brands for immersive promotional activations."
    ],
    media: (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pt-4 border-t border-vibrant-indigo/10">
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden aspect-video group/media">
          <div className="absolute top-1.5 left-1.5 bg-black/75 px-1.5 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">X-Quest</div>
          <img src={`${base}projects/XQuest-Logo.png`} alt="Chocolatos X-Quest" className="w-full h-full object-cover group-hover/media:scale-105 transition-all duration-300" />
        </div>
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden aspect-video group/media">
          <div className="absolute top-1.5 left-1.5 bg-black/75 px-1.5 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">Momogi RBLX</div>
          <video src={`${base}projects/Momogi-Roblox.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-300" />
        </div>
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden aspect-video group/media">
          <div className="absolute top-1.5 left-1.5 bg-black/75 px-1.5 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">Gery Boboiboy</div>
          <video src={`${base}projects/Gery-Pasta-Boboiboy.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-300" />
        </div>
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden aspect-video group/media">
          <div className="absolute top-1.5 left-1.5 bg-black/75 px-1.5 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">BTS TinyTan</div>
          <video src={`${base}projects/Chocolatos-TinyTan.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-300" />
        </div>
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden aspect-video group/media">
          <div className="absolute top-1.5 left-1.5 bg-black/75 px-1.5 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">Gamespot</div>
          <video src={`${base}projects/Tap-Tap.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    )
  },
  {
    title: "Aug 2021 – Jul 2024",
    company: "Miraimimpi",
    role: "Game Designer",
    waypointLabel: "Orbit Waypoint Beta",
    missions: [
      "Designed gameplay loops, mechanics, character abilities, and level layouts for Kocheng: Battle of Boings (BoB), followed by hands-on playtesting and iteration.",
      "Balanced core gameplay systems and authored comprehensive Game Design Documents (GDD) to guide development.",
      "Developed in-game economy projections, including currency flow and in-app purchase (IAP) structures.",
      "Built scalable design systems to support feature expansion and maintain gameplay consistency."
    ],
    media: (
      <div className="grid grid-cols-1 mt-4 pt-4 border-t border-vibrant-indigo/10">
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden max-w-sm aspect-video group/media">
          <div className="absolute top-1 left-1 bg-black/70 px-1 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">Kocheng: BoB</div>
          <video src={`${base}projects/Kocheng.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    )
  },
  {
    title: "Feb 2023 – Dec 2023",
    company: "Monster Group",
    role: "Game Designer",
    waypointLabel: "Orbit Waypoint Alpha",
    missions: [
      "Refined existing game concepts and authored Game Design Documents (GDD) to align with updated vision and mechanics.",
      "Balanced gameplay systems, progression models, and combat calculators for Mahabrats.",
      "Wrote narrative design documents and balanced virtual economy flows."
    ]
  },
  {
    title: "Sep 2021 – Dec 2021",
    company: "Maulidan Games",
    role: "Intern Game Programmer",
    waypointLabel: "Earth Sector",
    missions: [
      "Programmed gameplay mechanics and systems for Legends of Learning educational game.",
      "Developed simulations and object interactions for the Water Physics project in Unity.",
      "Refactored existing game codebases for improved readability, scalability, and maintainability."
    ],
    media: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-vibrant-indigo/10">
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden aspect-video group/media">
          <div className="absolute top-1 left-1 bg-black/70 px-1 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">Science School</div>
          <img src={`${base}projects/ScienceSchool.jpg`} alt="Legends of Learning" className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-300" />
        </div>
        <div className="relative border border-vibrant-indigo/20 rounded-none overflow-hidden aspect-video group/media">
          <div className="absolute top-1 left-1 bg-black/70 px-1 py-0.5 text-[8px] font-mono text-accent uppercase tracking-wider z-20">Water Physics</div>
          <img src={`${base}projects/Water-Bouyancy.jpg`} alt="Water Physics" className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    )
  }
];

const skillsData = {
  gameDesign: [
    "System Design",
    "Core Loop Modeling",
    "Narrative Flow",
    "Gameplay Balancing",
    "Level Design"
  ],
  programming: [
    "Unity (C#)",
    "Luau (Roblox Studio)",
    "Version Control (Git)",
    "Scripting & Logic"
  ],
  productionTools: [
    "Machinations.io",
    "Figma",
    "Agile PM (Trello/Jira)",
    "Spreadsheet Modeling"
  ]
};

export function AboutPage() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[activeTestimonialIdx];

  // Map timeline data format for Aceternity Timeline
  const formattedTimeline = careerTimelineData.map((job) => ({
    title: job.title,
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-bold text-frost-white font-sans tracking-wide">
            {job.company}
          </h4>
          <p className="text-xs font-mono text-electric-purple uppercase tracking-wider mt-0.5">
            [{job.role}]
          </p>
        </div>
        <span className="inline-block px-2.5 py-0.5 rounded-none bg-vibrant-indigo/10 border border-vibrant-indigo/30 text-[9px] font-mono font-bold tracking-widest text-accent uppercase">
          {job.waypointLabel}
        </span>
        <ul className="space-y-2.5 mt-4 pt-3 border-t border-vibrant-indigo/10">
          {job.missions.map((mission, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-slate font-sans leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-vibrant-indigo mt-1.5 shrink-0 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
              <span>{mission}</span>
            </li>
          ))}
        </ul>
        {job.media && job.media}
      </div>
    )
  }));

  return (
    <div className="min-h-screen bg-[#070913] text-frost-white pb-24 md:pb-12 pt-6 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* SECTION 1: PROFILEKU (Hero Layout) */}
      <section className="relative rounded-none border border-vibrant-indigo/15 bg-slate-indigo/50 p-6 md:p-10 overflow-hidden hud-grid-overlay">
        {/* Holographic sweep & scanlines */}
        <div className="hologram-scanlines pointer-events-none opacity-30" />
        <div className="hologram-sweep-line pointer-events-none" />

        {/* Blueprint corner brackets */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-vibrant-indigo/30 pointer-events-none" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-vibrant-indigo/30 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-vibrant-indigo/30 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-vibrant-indigo/30 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left Container: Avatar */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-none bg-[#0e1122] border-2 border-vibrant-indigo/35 flex items-center justify-center relative overflow-hidden group/avatar transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] shrink-0">
            <div className="halftone-overlay" />
            <img
              src={profileImg}
              alt="Raka Arya Pratama"
              className="w-full h-full object-cover contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-all duration-500 z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/30 via-transparent to-transparent pointer-events-none z-20" />
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent z-20" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent z-20" />
          </div>

          {/* Right Container: Details */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl font-bold tracking-widest font-valorant uppercase text-vibrant-indigo">
                <ScrambleText text="RAKA ARYA" delay={150} />
              </h1>
              
              {/* Rectangular FUI Chips (Status badges) */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1">
                {/* Available for Hire */}
                <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-none flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                  </span>
                  <span className="text-[9px] font-bold text-accent uppercase tracking-widest font-mono">Available for Hire</span>
                </div>

                {/* Game Designer // Creative */}
                <div className="px-3 py-1 bg-vibrant-indigo/10 border border-vibrant-indigo/30 rounded-none flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-vibrant-indigo" />
                  <span className="text-[10px] font-bold text-frost-white uppercase tracking-widest font-bebas">Game Designer // Creative</span>
                </div>
              </div>
            </div>

            <p className="text-xs md:text-sm text-frost-white/90 font-sans leading-relaxed tracking-wide max-w-2xl">
              A Game Designer and Creative Designer based in Indonesia. I craft engaging gameplay systems, design intuitive UI/UX models, and develop interactive concepts for brand campaigns—both in and out of the digital universe.
            </p>

            {/* Comm links & Resume Download */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 border-t border-vibrant-indigo/10">
              {/* Social links */}
              <div className="flex gap-2">
                <a
                  href="https://linkedin.com/in/raka-arya-pratama/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); }}
                  className="w-9 h-9 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group"
                  title="Discord"
                >
                  <svg viewBox="0 0 127.14 96.36" width="16" height="16" fill="currentColor" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.87-.64,1.72-1.32,2.53-2a75.46,75.46,0,0,0,73,0c.81.68,1.66,1.36,2.53,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.59-18.83C129.24,50.25,123.29,27.35,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
                  </svg>
                </a>
                <a
                  href="https://notslimboy.itch.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group"
                  title="Itch.io"
                >
                  <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
                    <path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"></path>
                  </svg>
                </a>
                <a
                  href="mailto:raka.arya34@gmail.com"
                  className="w-9 h-9 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group"
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
                  </svg>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="mailto:raka.arya34@gmail.com"
                  className="px-5 py-2 border border-accent/40 bg-accent/5 text-accent text-xs font-bold tracking-widest font-bebas hover:text-[#070913] rounded-none uppercase flex items-center gap-2 btn-tactical btn-tactical-cyan"
                >
                  <span className="chevron-marker" style={{ borderLeftColor: 'currentColor' }} />
                  <span>Get in Touch</span>
                </a>
                <a
                  href="/CV-Raka-Arya-Pratama-ATS.pdf"
                  download="CV Raka Arya Pratama ATS.pdf"
                  className="px-5 py-2 border border-vibrant-indigo/40 bg-vibrant-indigo/5 text-vibrant-indigo text-xs font-bold tracking-widest font-bebas hover:text-[#070913] rounded-none uppercase flex items-center gap-2 btn-tactical btn-tactical-indigo"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAREER HISTORY (Timeline) */}
      <section className="w-full">
        <Timeline data={formattedTimeline} />
      </section>

      {/* SECTION 3: LOADOUT / SKILLS */}
      <section className="relative rounded-none border border-vibrant-indigo/15 bg-slate-indigo/20 p-6 md:p-8 overflow-hidden">
        <div className="mb-8 flex items-center justify-between border-b border-vibrant-indigo/10 pb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-valorant text-vibrant-indigo tracking-widest uppercase">
              Skills Loadout //
            </h2>
            <p className="text-[10px] font-mono text-muted-slate uppercase tracking-widest mt-1">
              Classified toolkit & operational skill set
            </p>
          </div>
          <Terminal className="w-5 h-5 text-accent" />
        </div>

        {/* 3 Columns Grid for Desktop & Tablet, Stacked for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Game Design Column */}
          <div className="border border-vibrant-indigo/15 bg-midnight/40 p-5 hover:border-vibrant-indigo/35 transition-all duration-300 relative group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-vibrant-indigo/40" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-vibrant-indigo/40" />
            
            <h3 className="text-sm font-bebas text-accent tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-accent" />
              <span>GAME DESIGN //</span>
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-muted-slate">
              {skillsData.gameDesign.map((skill, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-vibrant-indigo/5 pb-1.5 group-hover:text-frost-white transition-colors duration-150">
                  <span>{skill}</span>
                  <span className="w-1 h-1 bg-accent/60" />
                </li>
              ))}
            </ul>
          </div>

          {/* Programming Column */}
          <div className="border border-vibrant-indigo/15 bg-midnight/40 p-5 hover:border-vibrant-indigo/35 transition-all duration-300 relative group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-vibrant-indigo/40" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-vibrant-indigo/40" />

            <h3 className="text-sm font-bebas text-vibrant-indigo tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-vibrant-indigo" />
              <span>PROGRAMMING //</span>
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-muted-slate">
              {skillsData.programming.map((skill, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-vibrant-indigo/5 pb-1.5 group-hover:text-frost-white transition-colors duration-150">
                  <span>{skill}</span>
                  <span className="w-1 h-1 bg-vibrant-indigo/60" />
                </li>
              ))}
            </ul>
          </div>

          {/* Production & Tools Column */}
          <div className="border border-vibrant-indigo/15 bg-midnight/40 p-5 hover:border-vibrant-indigo/35 transition-all duration-300 relative group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-vibrant-indigo/40" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-vibrant-indigo/40" />

            <h3 className="text-sm font-bebas text-frost-white/90 tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-frost-white/55" />
              <span>PRODUCTION & TOOLS //</span>
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-muted-slate">
              {skillsData.productionTools.map((skill, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-vibrant-indigo/5 pb-1.5 group-hover:text-frost-white transition-colors duration-150">
                  <span>{skill}</span>
                  <span className="w-1 h-1 bg-frost-white/30" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="relative rounded-none border border-vibrant-indigo/15 bg-slate-indigo/10 p-6 md:p-8 overflow-hidden">
        <div className="mb-6 flex items-center justify-between border-b border-vibrant-indigo/10 pb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-valorant text-vibrant-indigo tracking-widest uppercase">
              Endorsements //
            </h2>
            <p className="text-[10px] font-mono text-muted-slate uppercase tracking-widest mt-1">
              Client & team feedback
            </p>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 text-accent fill-accent animate-pulse" />
            ))}
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative bg-midnight/60 border border-vibrant-indigo/10 p-6 md:p-8 min-h-[160px] flex flex-col justify-between rounded-none">
          <div className="absolute top-2 right-3 text-[10px] font-mono text-muted-slate/30">
            RECORD_IDX: {activeTestimonialIdx + 1}/{testimonialsData.length}
          </div>

          <p className="text-xs md:text-sm text-frost-white/95 italic font-sans leading-relaxed tracking-wide">
            "{activeTestimonial.text}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 mt-6 border-t border-vibrant-indigo/10">
            <div>
              <span className="text-sm font-semibold text-frost-white block font-sans">
                {activeTestimonial.name}
              </span>
              <span className="text-[10px] font-mono text-accent uppercase tracking-wider mt-0.5 block">
                {activeTestimonial.role} @ {activeTestimonial.company}
              </span>
              <span className="text-[9px] font-mono text-muted-slate/60 mt-0.5 block">
                Project Relation: {activeTestimonial.projectRelation}
              </span>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevTestimonial}
                className="w-8 h-8 rounded-none border border-vibrant-indigo/30 bg-vibrant-indigo/5 text-muted-slate hover:text-frost-white hover:border-accent hover:bg-[#12162a] flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-150"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-8 h-8 rounded-none border border-vibrant-indigo/30 bg-vibrant-indigo/5 text-muted-slate hover:text-frost-white hover:border-accent hover:bg-[#12162a] flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-150"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA (Full Width) */}
      <section className="w-full pt-4">
        <ConnectCard />
      </section>
    </div>
  );
}
