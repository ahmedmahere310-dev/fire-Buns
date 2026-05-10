import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function LandingAnimation() {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("fb_intro_seen")) return;
      sessionStorage.setItem("fb_intro_seen", "1");
    } catch {}
    setShow(true);
    const t1 = setTimeout(() => setFade(true), 1600);
    const t2 = setTimeout(() => setShow(false), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.74_0.17_50/0.18),transparent_60%)] animate-pulse" />
      <div className="relative flex flex-col items-center gap-5 animate-[scale-in_0.6s_ease-out]">
        <div className="absolute -inset-10 rounded-full bg-gradient-flame opacity-40 blur-3xl" />
        <img
          src={logo}
          alt=""
          width={140}
          height={140}
          className="relative w-32 h-32 drop-shadow-[0_0_30px_oklch(0.74_0.17_50/0.7)]"
        />
        <div className="relative font-display text-5xl tracking-[0.25em] text-cream">
          <span>FIRE</span> <span className="text-flame">BUNS</span>
        </div>
        <div className="relative h-0.5 w-40 overflow-hidden rounded-full bg-card">
          <div className="h-full w-full bg-gradient-flame animate-[slide-in-right_1.4s_ease-out]" />
        </div>
      </div>
    </div>
  );
}
