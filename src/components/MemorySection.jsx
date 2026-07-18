import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { S } from "../styles/tokens";
import { useInView } from "../hooks/useInView";

const memories = [
  { t: "ضحكتك", d: "بتنور أي أوضة تدخليها وتنسيني هموم يومي." },
  { t: "قلبك", d: "بيسامح بسهولة وبيحب بصدق زي محدش." },
  { t: "وجودك", d: "سندي حتى لما مكنتش بستاهل ده." },
  { t: "اهتمامك", d: "تفاصيل صغيرة حاسس بيها كل مرة." },
  { t: "صبرك عليا", d: "بتستحمليني في أوقات مكنتش سهل أتحمل فيها نفسي." },
  { t: "الأمان", d: "حاسس معاكي إني مش لازم أثبت حاجة، بس أكون أنا." },
  { t: "طريقة تفكيرك", d: "بتخليني أشوف حاجات كتير من زاوية تانية." },
  { t: "عنيكي", d: "فيهم حكاية كل مرة أقابلك بحس إني بشوفها لأول مرة." },
];

export default function MemorySection() {
  const [ref, inView] = useInView(0.15);
  const [flipped, setFlipped] = useState({});

  return (
    <section ref={ref} style={S.section}>
      <p style={S.sysLabel}>MEMORY_BANK — {memories.length} FILES</p>
      <h2 style={S.h2}>افتحي كل كبسولة ذكرى</h2>
      <div className="capsuleGrid">
        {memories.map((m, i) => (
          <div
            key={i}
            className={`capsule ${flipped[i] ? "flipped" : ""} ${inView ? "capsuleIn" : ""}`}
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => setFlipped((f) => ({ ...f, [i]: !f[i] }))}
          >
            <div className="capsuleInner">
              <div className="capsuleFace capsuleFront">
                <Sparkles size={18} color="#d9a463" />
                <span style={S.capsuleLabel}>{m.t}</span>
              </div>
              <div className="capsuleFace capsuleBack">
                <p style={S.capsuleText}>{m.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
