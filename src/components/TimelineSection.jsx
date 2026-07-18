import React from "react";
import { Star } from "lucide-react";
import { S } from "../styles/tokens";
import { useInView } from "../hooks/useInView";

const events = [
  { k: "أول لقا", d: "اللحظة اللي كل حاجة بدأت فيها بيننا." },
  { k: "أول ضحكة", d: "لحظة حسيت فيها إن ده الشخص اللي بدور عليه." },
  { k: "أول خناقة", d: "وأول مرة حسينا إن الحب محتاج مجهود مش بس إحساس." },
  { k: "دلوقتي", d: "وأنا هنا بحاول أرجعلك تاني، بجد." },
];

export default function TimelineSection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} style={S.section}>
      <p style={S.sysLabel}>TIMELINE.LOG</p>
      <h2 style={S.h2}>حكايتنا لحد دلوقتي</h2>
      <div style={S.timelineWrap}>
        <div style={S.timelineLine} />
        {events.map((e, i) => (
          <div
            key={i}
            className={`timelineItem ${inView ? "timelineIn" : ""}`}
            style={{ animationDelay: `${i * 0.22}s` }}
          >
            <div style={S.timelineDot}>
              <Star size={12} color="#170a12" fill="#170a12" />
            </div>
            <div style={S.timelineCard}>
              <p style={S.timelineKey}>{e.k}</p>
              <p style={S.timelineDesc}>{e.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
