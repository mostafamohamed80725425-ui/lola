import React, { useMemo } from "react";
import { S } from "../styles/tokens";

export default function ShootingStars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        top: Math.random() * 50,
        delay: i * 3 + Math.random() * 4,
      })),
    []
  );

  return (
    <div style={S.heartsLayer} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="shootingStar"
          style={{ top: `${s.top}%`, animationDelay: `${s.delay}s` }}
        />
      ))}
    </div>
  );
}
