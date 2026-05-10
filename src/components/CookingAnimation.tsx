import { useEffect, useState } from "react";

const STEPS = [
  { t: "بنشعل الجريل 🔥", layer: "bun-bottom" },
  { t: "بنشوي اللحمة 🥩", layer: "patty" },
  { t: "بنذوب الجبنة 🧀", layer: "cheese" },
  { t: "بنحط الخضار 🥬", layer: "veg" },
  { t: "بنغطي بالخبزة 🍞", layer: "bun-top" },
];

const TOTAL_MS = 5000;

export function CookingAnimation({
  open,
  onDone,
}: {
  open: boolean;
  onDone: () => void;
}) {
  const [step, setStep] = useState(0);
  const [seconds, setSeconds] = useState(Math.ceil(TOTAL_MS / 1000));

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setSeconds(Math.ceil(TOTAL_MS / 1000));
    const stepMs = TOTAL_MS / STEPS.length;
    const stepTimer = setInterval(() => {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    }, stepMs);
    const tick = setInterval(() => {
      setSeconds((s) => Math.max(s - 1, 0));
    }, 1000);
    const done = setTimeout(onDone, TOTAL_MS);
    return () => {
      clearInterval(stepTimer);
      clearInterval(tick);
      clearTimeout(done);
    };
  }, [open, onDone]);

  if (!open) return null;

  const progress = ((STEPS.length - 1 - (STEPS.length - 1 - step)) / (STEPS.length - 1)) * 100;

  return (
    <div
      role="dialog"
      aria-label="جاري تجهيز طلبك"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-md p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.66_0.14_50/0.18),transparent_60%)]" />
      <div className="relative w-full max-w-sm text-center">
        {/* Burger stack */}
        <div className="relative h-56 mx-auto w-48 mb-6">
          {/* sizzle smoke */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-2 h-8 rounded-full bg-cream/30 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          {/* bun-top */}
          <Layer
            visible={step >= 4}
            className="bottom-32 h-12 rounded-t-[5rem] rounded-b-lg bg-gradient-to-b from-[oklch(0.78_0.13_70)] to-[oklch(0.62_0.14_55)]"
          >
            <span className="absolute top-2 left-4 w-1 h-1 rounded-full bg-cream/60" />
            <span className="absolute top-3 right-6 w-1 h-1 rounded-full bg-cream/60" />
            <span className="absolute top-1.5 left-1/2 w-1 h-1 rounded-full bg-cream/60" />
          </Layer>

          {/* veg */}
          <Layer
            visible={step >= 3}
            className="bottom-28 h-3 rounded-full bg-[oklch(0.7_0.18_140)] mx-1"
          />

          {/* cheese */}
          <Layer
            visible={step >= 2}
            className="bottom-24 h-4 rounded-md bg-[oklch(0.85_0.17_85)] -mx-1"
          />

          {/* patty */}
          <Layer
            visible={step >= 1}
            className="bottom-18 h-7 rounded-xl bg-gradient-to-b from-[oklch(0.42_0.07_30)] to-[oklch(0.28_0.05_30)]"
            style={{ bottom: "4.5rem" }}
          />

          {/* bun-bottom */}
          <Layer
            visible={step >= 0}
            className="bottom-12 h-8 rounded-b-[3rem] rounded-t-md bg-gradient-to-b from-[oklch(0.62_0.14_55)] to-[oklch(0.5_0.13_45)]"
          />

          {/* grill flames */}
          <div className="absolute bottom-0 left-0 right-0 h-10 flex justify-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="block w-3 rounded-full bg-gradient-to-t from-flame to-[oklch(0.8_0.18_85)]"
                style={{
                  height: `${20 + Math.sin(i + step) * 8 + step * 2}px`,
                  animation: `pulse 0.6s ease-in-out ${i * 0.1}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <h3 className="font-display text-3xl tracking-wider text-cream mb-2">
          جاري تجهيز طلبك
        </h3>
        <p className="text-flame font-bold text-lg mb-4 min-h-[28px]">
          {STEPS[step]?.t}
        </p>

        {/* timer */}
        <div className="mb-3 text-cream/80 text-sm">
          باقي{" "}
          <span className="font-display text-2xl text-flame mx-1">{seconds}</span>{" "}
          ثواني
        </div>

        {/* progress bar */}
        <div className="h-2 w-full rounded-full bg-card overflow-hidden">
          <div
            className="h-full bg-gradient-flame transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-muted-foreground mt-5">
          هنحوّلك على واتساب علشان تأكد الطلب 🚀
        </p>
      </div>
    </div>
  );
}

function Layer({
  visible,
  className,
  style,
  children,
}: {
  visible: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={style}
      className={`absolute inset-x-0 mx-auto transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
