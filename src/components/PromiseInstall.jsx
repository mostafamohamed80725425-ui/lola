import React from "react";
import { CheckCircle2 } from "lucide-react";
import { S } from "../styles/tokens";
import { useInView } from "../hooks/useInView";

const promises = [
  "هسمعك أكتر قبل ما أتكلم",
  "مش هسيب الغضب يكبر من غير ما نحله",
  "هبقى الشخص اللي يستاهل ثقتك",
  "هفضل جنبك في كل حاجة",
  "هحتفل بالتفاصيل الصغيرة بدل ما أستناها تكبر",
];

export default function PromiseInstall() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} style={S.section}>
      <p style={S.sysLabel}>PROMISE_PROTOCOL.INSTALL</p>
      <div style={S.glassCard}>
        {promises.map((p, i) => (
          <div
            key={i}
            className={`installRow ${inView ? "installIn" : ""}`}
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <CheckCircle2 size={18} color="#d9a463" />
            <span style={S.installText}>{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
