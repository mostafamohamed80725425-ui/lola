import { useEffect } from "react";

export default function ClickBurst() {
  useEffect(() => {
    function onClick(e) {
      for (let i = 0; i < 6; i++) {
        const el = document.createElement("span");
        el.className = "clickHeart";
        el.textContent = "❤";
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 50;
        el.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
        el.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
        el.style.left = e.clientX + "px";
        el.style.top = e.clientY + "px";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 700);
      }
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
