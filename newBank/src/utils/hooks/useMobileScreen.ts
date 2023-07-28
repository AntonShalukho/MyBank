import { useEffect } from "react";

export const useMobileScreen = (callback: () => void) =>
  useEffect(() => {
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, []);
