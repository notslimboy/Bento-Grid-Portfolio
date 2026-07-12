import { useEffect, useState } from "react";

const mobileMediaQuery = "(max-width: 767px)";

function getIsMobile() {
  return typeof window !== "undefined" && window.matchMedia(mobileMediaQuery).matches;
}

export function useMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileMediaQuery);
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return isMobile;
}
