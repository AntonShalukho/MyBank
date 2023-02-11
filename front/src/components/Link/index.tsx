import React, { ReactNode } from "react";

import { NavLink } from "react-router-dom";

import "./LinkStyles.css";

type LinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export const Link = ({ to, className = "", children, onClick }: LinkProps) => (
  <NavLink to={to} className={`customLink ${className}`} onClick={onClick}>
    {children}
  </NavLink>
);
