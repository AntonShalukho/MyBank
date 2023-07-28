import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement> | null,
  handler: () => void
) => {
  if (!ref) return;
  useEffect(() => {
    const listener = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
