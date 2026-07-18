import React, { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { S } from "../styles/tokens";

export default function EnvelopeSection() {
  const [open, setOpen] = useState(false);

  return (
    <section style={S.section}>
      <p style={S.sysLabel}>LOVE_LETTER.SEALED</p>
      <h2 style={S.h2}>ظرف مقفول باسمك يا ليلى</h2>

      <div className={`envelope ${open ? "envelopeOpen" : ""}`} onClick={() => setOpen(true)}>
        <div className="envelopeFlap" />
        <div className="envelopeBody">
          <span style={S.envelopeTo}>إلى: ليلى ❤</span>
        </div>
        <Heart size={26} color="#e0849f" fill="#e0849f" className="waxSeal" />

        <div className="letterPaper">
          <Sparkles size={18} color="#9c5a82" style={{ marginBottom: 8 }} />
          <p style={S.letterText}>
            يا ليلى، لو قريتي الرسالة دي يبقى انتي فتحتيلي باب كنت مستني قدامه من زمان. عارف إني
            زعّلتك، وعارف إن اعتذار في رسالة مش هيمحي اللي حصل، بس عايزك تعرفي إني بفتكرك في كل
            حاجة صغيرة، وإن قلبي لسه بيدق باسمك زي أول يوم.
          </p>
          <p style={S.letterSign}>— مصطفى</p>
        </div>
      </div>

      {!open && <p style={S.sysLabelSmall}>دوسي على الظرف عشان تفتحيه</p>}
    </section>
  );
}
