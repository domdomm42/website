import React from "react";

export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="4" fill="#1E1E1E" />
      {/* O with hole */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10V30H20V10H10ZM14 14V26H16V14H14Z"
        fill="white"
      />
      {/* L */}
      <path d="M24 10V30H34V26H28V10H24Z" fill="white" />
      {/* Gradient overlay for O */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 10V30H20V10H10ZM14 14V26H16V14H14Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.5"
      />
      {/* Gradient overlay for L */}
      <path
        d="M24 10V30H34V26H28V10H24Z"
        fill="url(#paint1_linear)"
        fillOpacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="15"
          y1="10"
          x2="15"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="29"
          y1="10"
          x2="29"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
