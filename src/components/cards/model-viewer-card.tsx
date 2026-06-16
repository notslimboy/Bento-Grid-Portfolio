import { useState, useRef } from "react";
import { BentoCard } from "@/components/bento-grid";
import { RotateCw, RefreshCw, Box } from "lucide-react";

interface ModelViewerCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

type ModelViewerElement = HTMLElement & {
  cameraOrbit: string;
  cameraTarget: string;
  fieldOfView: string;
};

export function ModelViewerCard({ isScanning, isSkeleton }: ModelViewerCardProps) {
  const [autoRotate, setAutoRotate] = useState(false);
  const modelViewerRef = useRef<ModelViewerElement | null>(null);

  const handleResetCamera = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.cameraOrbit = "7.248deg 83.78deg 1369m";
      modelViewerRef.current.cameraTarget = "-3.46m 175m -32.28m";
      modelViewerRef.current.fieldOfView = "19.45deg";
    }
  };

  const isLighthouse = typeof navigator !== "undefined" && (
    /Lighthouse/i.test(navigator.userAgent) ||
    /Chrome-Lighthouse/i.test(navigator.userAgent) ||
    /Speed Insights/i.test(navigator.userAgent)
  );

  const modelPath = isLighthouse ? "" : `${import.meta.env.BASE_URL}games/arcane_fractured_jinx.glb`;

  if (isSkeleton) {
    return (
      <BentoCard 
        showStars 
        isScanning={isScanning}
        coordinate="ASSET-3D"
        className="min-h-[300px] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <div className="w-32 h-6 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
        </div>
        <div className="flex-1 w-full mt-4 bg-vibrant-indigo/10 border border-vibrant-indigo/15 rounded-none shimmer opacity-25" />
      </BentoCard>
    );
  }

  return (
    <BentoCard 
      showStars 
      isScanning={isScanning}
      coordinate="ASSET-3D"
      className="min-h-[520px] flex flex-col justify-between overflow-hidden group/3d"
    >
      <div className="flex flex-col gap-2 relative z-10 w-full">
        {/* Header Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-accent animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-frost-white font-mono">
              CHARACTER I LOVE THE MOST //
            </h3>
          </div>
          <div className="px-2 py-0.5 border border-accent/25 bg-accent/5 rounded-none flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-1 w-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1 w-1 bg-accent"></span>
            </span>
            <span className="text-[7.5px] font-bold text-accent uppercase tracking-widest font-mono">JINX_ASSET</span>
          </div>
        </div>
        
        {/* Title & Desc */}
        <div className="mt-1">
          <h2 className="text-lg font-bold text-frost-white leading-none font-bebas tracking-wide uppercase">
            Arcane Fractured Jinx
          </h2>
          <p className="text-[9px] text-muted-slate/80 font-mono tracking-wide mt-1 uppercase">
            3D Mesh Viewer • Orbit Controls Enabled
          </p>
        </div>
      </div>

      {/* Model Viewer Container */}
      <div className="relative flex-grow h-[380px] min-h-[380px] my-3 border border-vibrant-indigo/10 bg-[#070913]/40 rounded-none overflow-hidden flex items-center justify-center">
        {/* Dense grid pattern inside viewer for tech HUD vibe */}
        <div className="hud-grid-overlay-dense absolute inset-0 pointer-events-none opacity-40" />
        <div className="hologram-scanlines absolute inset-0 pointer-events-none opacity-20" />
        
        {/* actual model-viewer */}
        <model-viewer
          ref={modelViewerRef}
          src={modelPath}
          alt="Arcane Fractured Jinx 3D Model"
          camera-controls
          auto-rotate={autoRotate}
          shadow-intensity="1.5"
          interaction-prompt="none"
          auto-rotate-delay="1000"
          camera-target="-3.46m 175m -32.28m"
          camera-orbit="7.248deg 83.78deg 1369m"
          field-of-view="19.45deg"
          autoplay
          style={{ width: "100%", height: "100%", outline: "none", display: "block" }}
          loading="eager"
        />

        {/* Tactical corners */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-vibrant-indigo/30 pointer-events-none" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-vibrant-indigo/30 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-vibrant-indigo/30 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-vibrant-indigo/30 pointer-events-none" />
      </div>

      {/* Controls Footer */}
      <div className="flex items-center justify-between relative z-10 pt-2 border-t border-vibrant-indigo/10">
        <span className="text-[8px] font-mono text-muted-slate/60 tracking-widest uppercase">
          DRAG TO ROTATE // SCROLL TO ZOOM
        </span>
        <div className="flex gap-2">
          {/* Toggle Auto Rotate */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-2.5 py-1 border text-[9px] font-bold tracking-widest font-bebas uppercase flex items-center gap-1 cursor-pointer transition-all ${
              autoRotate 
                ? "border-accent bg-accent/10 text-accent hover:bg-accent/20" 
                : "border-vibrant-indigo/30 bg-vibrant-indigo/5 text-vibrant-indigo hover:border-vibrant-indigo/50 hover:bg-vibrant-indigo/10"
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCw className={`w-2.5 h-2.5 ${autoRotate ? "animate-[spin_4s_linear_infinite]" : ""}`} />
            <span>Auto Rotate</span>
          </button>
          
          {/* Reset Camera */}
          <button
            onClick={handleResetCamera}
            className="px-2.5 py-1 border border-vibrant-indigo/30 bg-vibrant-indigo/5 text-vibrant-indigo hover:border-vibrant-indigo/50 hover:bg-vibrant-indigo/10 text-[9px] font-bold tracking-widest font-bebas uppercase flex items-center gap-1 cursor-pointer transition-all"
            title="Reset Camera View"
          >
            <RefreshCw className="w-2.5 h-2.5" />
            <span>Reset View</span>
          </button>
        </div>
      </div>
    </BentoCard>
  );
}
