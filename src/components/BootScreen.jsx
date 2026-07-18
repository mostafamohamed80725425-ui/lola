import React, { useEffect, useState } from "react";
import { Power, Radar as RadarIcon } from "lucide-react";
import { S } from "../styles/tokens";

const bootSequence = [
  "> جارِ تشغيل نظام إعادة الاتصال...",
  "> فحص الذاكرة العاطفية... تم",
  "> البحث عن: ليلى",
  "> تشغيل التردد العاطفي...",
  "> تم العثور على قلب واحد. جارِ الاتصال...",
];

export default function BootScreen({ started, onStart, onBooted }) {
  const [bootLines, setBootLines] = useState([]);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const lineTimer = setInterval(() => {
      setBootLines((prev) => [...prev, bootSequence[i]]);
      i++;
      if (i >= bootSequence.length) clearInterval(lineTimer);
    }, 480);
    const progTimer = setInterval(() => {
      setBootProgress((p) => {
        const next = Math.min(100, p + 3);
        if (next >= 100) {
          clearInterval(progTimer);
          setTimeout(() => onBooted(), 500);
        }
        return next;
      });
    }, 55);
    return () => {
      clearInterval(lineTimer);
      clearInterval(progTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  if (!started) {
    return (
      <div style={S.center}>
        <RadarIcon size={54} color="#d9a463" className="spinSlow" />
        <p style={S.sysLabel}>SYSTEM.LOVE — v4.0</p>
        <h1 style={S.bootTitle}>نظام إعادة الاتصال بقلب ليلى</h1>
        <button style={S.neonBtn} onClick={onStart}>
          <Power size={18} />
          ابدأ التشغيل
        </button>
      </div>
    );
  }

  return (
    <div style={S.center}>
      <div style={S.terminal}>
        {bootLines.map((l, i) => (
          <p key={i} style={S.terminalLine}>
            {l}
          </p>
        ))}
        <div style={S.progressTrack}>
          <div style={{ ...S.progressFill, width: `${bootProgress}%` }} />
        </div>
        <p style={S.sysLabel}>{bootProgress}%</p>
      </div>
    </div>
  );
}
