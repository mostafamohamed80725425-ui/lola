import React, { useState } from "react";
import { Shuffle } from "lucide-react";
import { S } from "../styles/tokens";

const messages = [
  "انتي مش مجرد حب، انتي بيتي اللي بارتاح فيه.",
  "لو الدنيا زعلتني، وشك بس اللي بيصلحها.",
  "مفيش اعتذار يوصف قد إيه انتي مهمة ليا.",
  "حبك خلاني أحسن، ومش هسيبه يضيع بغلطة.",
  "كل يوم من غيرك حاسس إنه ناقص حاجة.",
  "انتي القرار الصح اللي هفضل أاخده كل يوم.",
  "مستني بس كلمة منك عشان أرجع أتنفس صح.",
  "قلبي عارف طريقه ليكي حتى لو انا تهت شوية.",
];

export default function MessageGenerator() {
  const [msg, setMsg] = useState(messages[0]);
  const [spinning, setSpinning] = useState(false);

  function shuffle() {
    setSpinning(true);
    let count = 0;
    const t = setInterval(() => {
      setMsg(messages[Math.floor(Math.random() * messages.length)]);
      count++;
      if (count > 8) {
        clearInterval(t);
        setSpinning(false);
      }
    }, 80);
  }

  return (
    <section style={S.section}>
      <p style={S.sysLabel}>MESSAGE_GENERATOR.RANDOM</p>
      <div style={{ ...S.glassCard, maxWidth: 440 }}>
        <p className={spinning ? "shuffleText" : "fadeIn"} style={S.arabicBody}>
          {msg}
        </p>
        <button style={{ ...S.neonBtnOutline, marginTop: 18 }} onClick={shuffle}>
          <Shuffle size={16} />
          هاتلي رسالة تانية
        </button>
      </div>
    </section>
  );
}
