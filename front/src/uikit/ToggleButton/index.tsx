import React from "react";

import "./ToggleButtonStyles.css";

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
      <label className="toggle-control">
        <input type="checkbox" checked={isActive} onChange={onChange} />
        <span className="control" />
        {isActive ? (
          <p className="toggle-on">ON</p>
        ) : (
          <p className="toggle-off">OFF</p>
        )}
      </label>
    </>
  );
};
