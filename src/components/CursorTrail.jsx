import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    let last = 0;
    function onMove(e) {
      const now = Date.now();
      if (now - last < 90) return;
      last = now;
      const el = document.createElement("span");
      el.className = "trailHeart";
      el.textContent = "❤";
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 900);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
