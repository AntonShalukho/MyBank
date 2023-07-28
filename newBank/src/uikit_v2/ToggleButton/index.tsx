import React from "react";

import styles from "./ToggleButton.module.css";

type ToggleButtonProps = {
  isActive: boolean;
  handleToggle: () => void;
};
export const ToggleButton = ({ isActive, handleToggle }: ToggleButtonProps) => {
  const onChange = () => {
    handleToggle();
  };
  return (
    <>
      <label className={styles.toggle_control}>
        <input type="checkbox" checked={isActive} onChange={onChange} />
        <span className={styles.control} />
        {isActive ? (
          <p className={styles.toggle_on}>ON</p>
        ) : (
          <p className={styles.toggle_off}>OFF</p>
        )}
      </label>
    </>
  );
};
