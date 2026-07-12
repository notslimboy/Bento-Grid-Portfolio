import { useCallback, useRef, useState } from "react";
import { BentoCard } from "@/components/bento-grid";
import { RotateCw, RefreshCw, Box, LoaderCircle } from "lucide-react";

interface ModelViewerCardProps {
  isScanning?: boolean;
  isSkeleton?: boolean;
}

type ModelViewerElement = HTMLElement & {
  cameraOrbit: string;
  cameraTarget: string;
  fieldOfView: string;
  loaded?: boolean;
};

export function ModelViewerCard({ isScanning, isSkeleton }: ModelViewerCardProps) {
  const [autoRotate, setAutoRotate] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [isModelRequested, setIsModelRequested] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [modelLoadError, setModelLoadError] = useState(false);
  const modelViewerRef = useRef<ModelViewerElement | null>(null);
  const removeModelListenersRef = useRef<(() => void) | null>(null);

  const handleModelViewerRef = useCallback((viewer: ModelViewerElement | null) => {
    removeModelListenersRef.current?.();
    removeModelListenersRef.current = null;
    modelViewerRef.current = viewer;

    if (!viewer) return;

    const handleModelLoaded = () => {
      setIsModelLoading(false);
      setIsModelReady(true);
    };
    const handleModelError = () => {
      setIsModelLoading(false);
      setModelLoadError(true);
    };

    // model-viewer emits native CustomEvents. Attach during the ref callback
    // so a cached GLB cannot finish before a React effect subscribes.
    viewer.addEventListener("load", handleModelLoaded);
    viewer.addEventListener("error", handleModelError);
    removeModelListenersRef.current = () => {
      viewer.removeEventListener("load", handleModelLoaded);
      viewer.removeEventListener("error", handleModelError);
    };

    if (viewer.loaded) handleModelLoaded();
  }, []);

  const handleResetCamera = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.cameraOrbit = "7.248deg 83.78deg 1369m";
      modelViewerRef.current.cameraTarget = "-3.46m 175m -32.28m";
      modelViewerRef.current.fieldOfView = "19.45deg";
    }
  };

  const handleLoadModel = async () => {
    if (isModelLoading || isModelReady) return;

    setModelLoadError(false);
    setIsModelLoading(true);

    try {
      await import("@google/model-viewer");
      setIsModelRequested(true);
    } catch {
      setModelLoadError(true);
      setIsModelLoading(false);
    }
  };

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
        
        {!isModelReady && !isModelLoading && (
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
            <Box className="h-7 w-7 text-vibrant-indigo/70" />
            <div className="space-y-1">
              <p className="font-bebas text-base tracking-widest text-frost-white">3D ASSET ON DEMAND</p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted-slate/75">Load the interactive Jinx mesh when you are ready.</p>
            </div>
            <button
              type="button"
              onClick={handleLoadModel}
              className="btn-tactical btn-tactical-cyan border border-accent/45 bg-accent/5 px-3 py-1.5 font-bebas text-xs tracking-widest text-accent transition-colors hover:text-[#070913]"
            >
              LOAD 3D MODEL
            </button>
            {modelLoadError && <p className="font-mono text-[9px] text-rose-300">MODEL LINK FAILED — RETRY AVAILABLE</p>}
          </div>
        )}

        {isModelLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[#070913] font-mono text-[10px] uppercase tracking-widest text-accent">
            <LoaderCircle className="h-5 w-5 animate-spin" />
            Loading Jinx asset...
          </div>
        )}

        {isModelRequested && (
          <model-viewer
            ref={handleModelViewerRef}
            src={`${import.meta.env.BASE_URL}games/arcane_fractured_jinx.glb`}
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
        )}

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
            disabled={!isModelReady}
            className={`px-2.5 py-1 border text-[9px] font-bold tracking-widest font-bebas uppercase flex items-center gap-1 cursor-pointer transition-all ${
              autoRotate && isModelReady
                ? "border-accent bg-accent/10 text-accent hover:bg-accent/20" 
                : "border-vibrant-indigo/30 bg-vibrant-indigo/5 text-vibrant-indigo hover:border-vibrant-indigo/50 hover:bg-vibrant-indigo/10"
            }`}
            title="Toggle Auto Rotation"
          >
            <RotateCw className={`w-2.5 h-2.5 ${autoRotate && isModelReady ? "animate-[spin_4s_linear_infinite]" : ""}`} />
            <span>Auto Rotate</span>
          </button>
          
          {/* Reset Camera */}
          <button
            onClick={handleResetCamera}
            disabled={!isModelReady}
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
