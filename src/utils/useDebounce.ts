import { useCallback, useRef } from "react";

export const useDebounce = (
  callback: (...args: unknown[]) => unknown,
  delay: number
) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const debouncedCallback = useCallback(
    (...args: unknown[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
  return debouncedCallback;
};
