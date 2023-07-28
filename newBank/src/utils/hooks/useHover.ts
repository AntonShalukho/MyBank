import { RefObject, useEffect } from "react";

export const useHover = (
  ref: RefObject<HTMLDivElement>,
  handlerOver: () => void,
  handleLeave: () => void
) => {
  const handleMouseOver = (e: MouseEvent) => {
    if (ref) {
      if (e.currentTarget === ref.current) {
        handlerOver();
      }
    }
  };
  const handleMouseLeave = (e: MouseEvent) => {
    if (ref) {
      if (e.currentTarget === ref.current) {
        handleLeave();
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", handleMouseOver);
      ref.current.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", handleMouseOver);
        ref.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
};
