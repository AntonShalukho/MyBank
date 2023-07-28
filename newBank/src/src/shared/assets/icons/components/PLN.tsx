import React from "react";

import { ClassNameProps } from "./types";

export const PLN = ({ className }: ClassNameProps) => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_4802_9504)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 18H0V0H24V18Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 18H0V9H24V18Z"
        fill="#DC143C"
      />
    </g>
    <rect x="0.5" y="0.5" width="23" height="17" rx="1.5" stroke="#F4F4F6" />
    <defs>
      <clipPath id="clip0_4802_9504">
        <rect width="24" height="18" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
