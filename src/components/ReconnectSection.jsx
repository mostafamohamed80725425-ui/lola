import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Heart, Power } from "lucide-react";
import { S } from "../styles/tokens";

export default function ReconnectSection() {
  const [charge, setCharge] = useState(0);
  const [done, setDone] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const growRef = useRef(null);
  const decayRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 80 + Math.random() * 140;
        return {
          id: i,
          tx: Math.cos(angle) * dist,
          ty: Math.sin(angle) * dist,
          delay: Math.random() * 0.2,
          size: 8 + Math.random() * 12,
        };
      }),
    [burstKey]
  );

  const stopGrow = useCallback(() => {
    if (growRef.current) clearInterval(growRef.current);
  }, []);

  function startCharge() {
    if (done) return;
    stopGrow();
    if (decayRef.current) clearInterval(decayRef.current);
    growRef.current = setInterval(() => {
      setCharge((c) => {
        const next = Math.min(100, c + 3.2);
        if (next >= 100) {
          stopGrow();
          setDone(true);
          setBurstKey((k) => k + 1);
        }
        return next;
      });
    }, 40);
  }

  function releaseCharge() {
    stopGrow();
    if (done) return;
    decayRef.current = setInterval(() => {
      setCharge((c) => {
        const next = Math.max(0, c - 4);
        if (next <= 0 && decayRef.current) clearInterval(decayRef.current);
        return next;
      });
    }, 30);
  }

  useEffect(() => stopGrow, [stopGrow]);

  return (
    <section style={{ ...S.section, textAlign: "center", paddingBottom: 100 }}>
      <p style={S.sysLabel}>RECONNECT.EXE</p>
      <h2 style={S.h2}>اضغطي واستني… سيبي القلب يشحن</h2>

      <div style={S.chargeWrap}>
        <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="90" cy="90" r="78" stroke="#33202c" strokeWidth="10" fill="none" />
          <circle
            cx="90"
            cy="90"
            r="78"
            stroke="url(#g1)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 78}
            strokeDashoffset={2 * Math.PI * 78 * (1 - charge / 100)}
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0849f" />
              <stop offset="100%" stopColor="#9c5a82" />
            </linearGradient>
          </defs>
        </svg>
        <button
          className={done ? "pulse" : ""}
          style={S.chargeBtn}
          onMouseDown={startCharge}
          onMouseUp={releaseCharge}
          onMouseLeave={releaseCharge}
          onTouchStart={startCharge}
          onTouchEnd={releaseCharge}
        >
          {done ? <Heart size={30} fill="#fff" /> : <Power size={28} />}
        </button>

        {done &&
          particles.map((p) => (
            <span
              key={p.id + "_" + burstKey}
              className="burstHeart"
              style={{
                "--tx": `${p.tx}px`,
                "--ty": `${p.ty}px`,
                animationDelay: `${p.delay}s`,
                fontSize: p.size,
              }}
            >
              ❤
            </span>
          ))}
      </div>

      <p style={S.pctText}>{Math.round(charge)}%</p>

      {done && (
        <div className="fadeIn" style={{ ...S.glassCard, maxWidth: 420, margin: "20px auto" }}>
          <h3 style={S.h2small}>تم الاتصال بنجاح ❤</h3>
          <p style={S.arabicBody}>سامحيني يا قمر. مهما كان قرارك، شكرًا إنك وصلتي للنقطة دي معايا.</p>
        </div>
      )}
    </section>
  );
}
