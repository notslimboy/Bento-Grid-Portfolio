/**
 * Menghasilkan kelas gaya CSS Tailwind secara dinamis berdasarkan nama teknologi.
 * Ini memastikan konsistensi warna badge tech stack di seluruh aplikasi.
 */
export function getTechBadgeStyles(tech: string): string {
  const normalized = tech.toLowerCase();
  
  // Unity (Cyan/Teal)
  if (normalized.includes("unity") && !normalized.includes("networking")) {
    return "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/15";
  }
  // C#, Luau (Programming Languages: Purple/Fuchsia)
  if (normalized === "c#" || normalized === "luau") {
    return "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:border-purple-500/40 hover:bg-purple-500/15";
  }
  // Hardware, Sensors, LED Systems (Immersive/IoT: Emerald/Mint)
  if (
    normalized.includes("led") || 
    normalized.includes("sensor") || 
    normalized.includes("interactive") ||
    normalized.includes("hardware")
  ) {
    return "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-500/40 hover:bg-emerald-500/15";
  }
  // Platforms, Tools (Roblox Studio, Machinations, Vuforia: Rose/Pink)
  if (
    normalized.includes("roblox") || 
    normalized.includes("machinations") || 
    normalized.includes("vuforia")
  ) {
    return "bg-rose-500/10 border-rose-500/20 text-rose-300 hover:border-rose-500/40 hover:bg-rose-500/15";
  }
  // APIs, Databases, Network (Photon, Web3, Database: Blue/Sky)
  if (
    normalized.includes("api") || 
    normalized.includes("database") || 
    normalized.includes("photon") || 
    normalized.includes("network")
  ) {
    return "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:border-blue-500/40 hover:bg-blue-500/15";
  }
  // Physics, AI (Systems/Engine/Logic: Amber/Gold)
  if (
    normalized.includes("physics") || 
    normalized.includes("ai") || 
    normalized.includes("behavior")
  ) {
    return "bg-amber-500/10 border-amber-500/20 text-amber-300 hover:border-amber-500/40 hover:bg-amber-500/15";
  }
  
  // Default Indigo Theme
  return "bg-vibrant-indigo/10 border-vibrant-indigo/20 text-frost-white hover:border-vibrant-indigo/40 hover:bg-vibrant-indigo/15";
}
