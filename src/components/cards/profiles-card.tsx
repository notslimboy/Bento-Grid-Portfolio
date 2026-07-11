import { BentoCard } from "@/components/bento-grid";

interface ProfilesCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

export function ProfilesCard({ isScanning, isSkeleton }: ProfilesCardProps) {
  if (isSkeleton) {
    return (
      <BentoCard 
        className="flex flex-col justify-between min-h-[140px] h-full" 
        isScanning={isScanning}
        coordinate="HUD-S04"
      >
        <div className="flex items-center justify-between">
          <div className="w-24 h-3.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25" />
          <div className="w-1.5 h-1.5 bg-vibrant-indigo/25" />
        </div>
        
        <div className="grid grid-cols-5 gap-2 my-auto justify-items-center items-center">
          {[1, 2, 3, 4, 5].map((item) => (
            <div 
              key={item}
              className="w-10 h-10 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25 shrink-0" 
            />
          ))}
        </div>
        
        <div className="w-48 h-2.5 bg-vibrant-indigo/10 rounded-none shimmer opacity-25 mt-auto pt-2" />
      </BentoCard>
    );
  }

  return (
    <BentoCard 
      className="flex flex-col justify-between" 
      isScanning={isScanning}
      coordinate="HUD-S04"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-widest text-vibrant-indigo font-bebas">Profiles // Comms</span>
        <div className="w-1.5 h-1.5 bg-accent shadow-[0_0_6px_#06B6D4]" />
      </div>
      
      <div className="grid grid-cols-5 gap-2 mt-4 justify-items-center items-center">
        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/raka-arya-pratama/" 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group shrink-0" 
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        {/* Itch.io */}
        <a 
          href="https://notslimboy.itch.io/" 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group shrink-0" 
          title="Itch.io"
        >
          <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
            <path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"></path>
          </svg>
        </a>

        {/* Discord */}
        <a 
          href="https://discord.com/users/352425793227456512"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group shrink-0" 
          title="Discord"
        >
          <svg viewBox="0 0 127.14 96.36" width="16" height="16" fill="currentColor" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.87-.64,1.72-1.32,2.53-2a75.46,75.46,0,0,0,73,0c.81.68,1.66,1.36,2.53,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.59-18.83C129.24,50.25,123.29,27.35,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
          </svg>
        </a>

        {/* Steam */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); }} 
          className="w-10 h-10 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group shrink-0" 
          title="Steam"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-2.973-1.218-3.23-2.776l-6.843-2.827C.585 18.06 5.679 24 11.979 24c6.627 0 12-5.373 12-12S18.606 0 11.979 0zM17.06 7.428a1.524 1.524 0 1 1 0 3.048 1.524 1.524 0 0 1 0-3.048z"/>
          </svg>
        </a>

        {/* Email */}
        <a 
          href="mailto:raka.arya34@gmail.com" 
          className="w-10 h-10 rounded-none bg-vibrant-indigo/5 border border-vibrant-indigo/25 flex items-center justify-center cursor-pointer hover:border-accent hover:bg-[#12162a] transition-all duration-150 group shrink-0" 
          title="Email"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-muted-slate/60 group-hover:text-accent transition-colors duration-150">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
          </svg>
        </a>
      </div>
      
      <div className="text-[8px] text-muted-slate/50 font-mono tracking-widest uppercase mt-4">
        CONNECTED SYSTEMS: LINKEDIN, ITCH, DISCORD & STEAM
      </div>
    </BentoCard>
  );
}
