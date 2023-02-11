import React from "react";

import "./ContainerStyles.css";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className="container-wrapper">{children}</div>
);
