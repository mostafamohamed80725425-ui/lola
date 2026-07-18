import React from "react";

export default function ButterflySVG() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <g>
        <path d="M50 50 C20 10, 0 20, 10 45 C20 65, 40 55, 50 50Z" fill="#e0849f" opacity="0.85" />
        <path d="M50 50 C80 10, 100 20, 90 45 C80 65, 60 55, 50 50Z" fill="#d9a463" opacity="0.85" />
        <path d="M50 50 C30 70, 15 75, 22 90 C30 100, 45 80, 50 50Z" fill="#9c5a82" opacity="0.7" />
        <path d="M50 50 C70 70, 85 75, 78 90 C70 100, 55 80, 50 50Z" fill="#e0849f" opacity="0.7" />
        <line x1="50" y1="45" x2="50" y2="80" stroke="#2a1420" strokeWidth="2" />
      </g>
    </svg>
  );
}
