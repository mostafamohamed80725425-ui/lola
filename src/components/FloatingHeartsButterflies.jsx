import React, { useMemo } from "react";
import { Heart } from "lucide-react";
import { S } from "../styles/tokens";
import ButterflySVG from "./ButterflySVG";

export default function FloatingHeartsButterflies() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 34 }).map((_, i) => {
        const palette = ["#e0849f", "#9c5a82", "#d9a463"];
        return {
          id: i,
          left: Math.random() * 100,
          size: 8 + Math.random() * 20,
          delay: Math.random() * 14,
          duration: 8 + Math.random() * 10,
          color: palette[i % palette.length],
          opacity: 0.25 + Math.random() * 0.5,
        };
      }),
    []
  );

  const butterflies = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        top: 5 + Math.random() * 80,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 12,
        size: 18 + Math.random() * 16,
        reverse: i % 2 === 0,
      })),
    []
  );

  return (
    <div style={S.heartsLayer} aria-hidden="true">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="floatHeart"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            color: h.color,
          }}
          fill={h.color}
        />
      ))}
      {butterflies.map((b) => (
        <div
          key={b.id}
          className={`butterfly ${b.reverse ? "butterflyRev" : ""}`}
          style={{
            top: `${b.top}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            width: b.size,
            height: b.size,
          }}
        >
          <ButterflySVG />
        </div>
      ))}
    </div>
  );
}
