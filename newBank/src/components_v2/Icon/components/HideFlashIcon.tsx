import React from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};

export const HideFlashIcon: React.FC<Props> = ({ className, onClick }) => (
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
      d="M13.488 16.14l-2.018-2.019A4.375 4.375 0 015.877 8.53L3.304 5.954C1.173 7.848 0 10 0 10s3.75 6.875 10 6.875a8.787 8.787 0 003.488-.735zM6.513 3.86c1.1-.48 2.286-.73 3.487-.735C16.25 3.125 20 10 20 10s-1.174 2.151-3.301 4.047L14.12 11.47A4.375 4.375 0 008.53 5.877L6.513 3.862V3.86z"
    />
    <path
      fill="#A0A0A6"
      d="M6.905 9.558a3.125 3.125 0 003.537 3.536L6.904 9.558h.001zm6.188.885L9.557 6.905a3.125 3.125 0 013.536 3.536v.002zm3.964 7.5l-15-15 .885-.885 15 15-.885.885z"
    />
  </svg>
);
