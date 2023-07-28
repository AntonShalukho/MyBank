import React from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};

export const HideIcon: React.FC<Props> = ({ className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#A0A0A6"
      d="M13.125 10a3.125 3.125 0 11-6.25 0 3.125 3.125 0 016.25 0z"
    />
    <path
      fill="#A0A0A6"
      d="M0 10s3.75-6.875 10-6.875S20 10 20 10s-3.75 6.875-10 6.875S0 10 0 10zm10 4.375a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75z"
    />
  </svg>
);
