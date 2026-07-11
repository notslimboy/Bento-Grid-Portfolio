export function AppBackground() {
  return (
    <>
      <div className="grain-overlay" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 select-none">
        <svg className="absolute -right-32 -bottom-32 w-[600px] h-[600px] text-vibrant-indigo/15 animate-[spin_180s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2,2" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <ellipse cx="50" cy="50" rx="15" ry="45" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <path d="M 50,5 L 50,95 M 5,50 L 95,50" stroke="currentColor" strokeWidth="0.1" />
        </svg>

        <svg className="absolute -left-20 -top-20 w-[450px] h-[450px] text-vibrant-indigo/15 animate-[spin_120s_linear_infinite_reverse]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="3,3" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <path d="M 50,5 L 50,95 M 5,50 L 95,50" stroke="currentColor" strokeWidth="0.1" />
          <path d="M 18,18 L 82,82 M 18,82 L 82,18" stroke="currentColor" strokeWidth="0.08" strokeDasharray="1,1" />
        </svg>
      </div>

      <div className="absolute top-24 right-16 opacity-10 hidden xl:block pointer-events-none select-none z-0">
        <span className="font-valorant text-[12rem] text-vibrant-indigo text-outline-indigo-strong tracking-tighter">
          2026
        </span>
      </div>
    </>
  );
}

export function HeaderHudLine() {
  return (
    <>
      <div className="absolute top-[80px] left-4 right-4 h-[1px] bg-vibrant-indigo/15 pointer-events-none hidden xl:block z-0" />
      <div className="absolute top-[80px] left-1/3 -translate-y-1/2 w-3 h-3 bg-[#070913] border border-vibrant-indigo/40 flex items-center justify-center hidden xl:flex z-10">
        <span className="w-1.5 h-1.5 bg-accent rounded-[1px] animate-pulse" />
      </div>
    </>
  );
}
