import { useEffect, useState } from "react";

export const useCapsLock = () => {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) =>
      setToggled(event.getModifierState("CapsLock"));

    const onClick = (event: MouseEvent) =>
      setToggled(event.getModifierState("CapsLock"));

    document.addEventListener("keyup", onKeyUp);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return toggled;
};
