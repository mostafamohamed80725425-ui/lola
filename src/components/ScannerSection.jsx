import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { S } from "../styles/tokens";
import { useInView } from "../hooks/useInView";

export default function ScannerSection() {
  const [ref, inView] = useInView(0.4);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(t);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <section ref={ref} style={S.section}>
      <p style={S.sysLabel}>SCAN.EXE</p>
      <div style={S.scannerWrap}>
        <div className="sweep" style={S.scannerRing} />
        <div style={S.scannerRing2} />
        <Heart size={46} color="#e0849f" fill="#e0849f" className="pulse" />
      </div>
      <p style={S.pctText}>نسبة التوافق: {pct}%</p>
      {pct >= 100 && (
        <div className="fadeIn" style={S.glassCard}>
          <p style={S.arabicBody}>
            يا ليلى، عارف إني زعّلتك، وعارف إن الكلام مش هيمسح اللي حصل، بس حابب تعرفي إني حاسس بكل
            تفصيلة زعلتك فيها، وإني مش هرتاح غير لما أشوف ابتسامتك تاني.
          </p>
        </div>
      )}
    </section>
  );
}
