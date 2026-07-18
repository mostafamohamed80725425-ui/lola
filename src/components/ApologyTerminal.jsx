import React, { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { S } from "../styles/tokens";
import { useInView } from "../hooks/useInView";

const logLines = [
  "آسف على الكلام اللي جرحك.",
  "آسف على اللحظات اللي سبتك فيها لوحدك.",
  "آسف إني ماكنتش الشخص اللي انتي مستاهلاه في اللحظة دي.",
  "بوعدك إني بتعلم من كل غلطة.",
];

export default function ApologyTerminal() {
  const [ref, inView] = useInView(0.4);
  const [visibleLines, setVisibleLines] = useState([]);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    let lineIndex = 0;
    let charIndex = 0;

    function typeNext() {
      if (lineIndex >= logLines.length) return;
      const current = logLines[lineIndex];
      if (charIndex <= current.length) {
        setTyped(current.slice(0, charIndex));
        charIndex++;
        setTimeout(typeNext, 26);
      } else {
        setVisibleLines((v) => [...v, current]);
        setTyped("");
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, 350);
      }
    }
    typeNext();
  }, [inView]);

  return (
    <section ref={ref} style={S.section}>
      <p style={S.sysLabel}>APOLOGY.LOG</p>
      <div style={S.terminal}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
          <Terminal size={16} color="#d9a463" />
          <span style={S.sysLabelSmall}>root@heart:~$</span>
        </div>
        {visibleLines.map((l, i) => (
          <p key={i} style={S.terminalDone}>
            [{String(i + 1).padStart(2, "0")}] {l}
          </p>
        ))}
        {typed && (
          <p style={S.terminalTyped}>
            {typed}
            <span className="cursorBlink">|</span>
          </p>
        )}
      </div>
    </section>
  );
}
