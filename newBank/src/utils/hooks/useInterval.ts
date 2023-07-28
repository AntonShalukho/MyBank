import { useEffect, useRef } from "react";

export const useInterval = (
  isIntervalSlider: boolean,
  activeCounter: number,
  counterState: number,
  setCounter: (value: number) => void,
  interval: number
) => {
  const intervalId = useRef<NodeJS.Timeout>();
  return useEffect(() => {
    if (isIntervalSlider) {
      intervalId.current = setInterval(() => {
        if (activeCounter < counterState) {
          setCounter(activeCounter + 1);
        } else {
          setCounter(0);
        }
      }, interval);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [activeCounter, counterState, isIntervalSlider, setCounter, interval]);
};
