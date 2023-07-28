import React from "react";

type Props = {
  className?: string;
};

export function CreditCardIcon({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g clipPath="url(#clip0_4022_21870)">
        <path
          fill="#A0A0A6"
          d="M22 11a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
        />
        <path d="M4 4a4 4 0 00-4 4v16a4 4 0 004 4h24a4 4 0 004-4V8a4 4 0 00-4-4H4zm26 4v10H2V8a2 2 0 012-2h24a2 2 0 012 2zm-2 18H4a2 2 0 01-2-2v-2h28v2a2 2 0 01-2 2z" />
      </g>
      <defs>
        <clipPath id="clip0_4022_21870">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
