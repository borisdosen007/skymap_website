"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ value, label }: { value: number; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-gradient-gold mb-1">
        {count}+
      </p>
      <p className="text-white/50 text-xs uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="px-5 py-14 bg-night-900 relative overflow-hidden">
      {/* Background subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(248,196,66,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-screen-sm mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <StatCard value={50} label="Modela" />
          <StatCard value={200} label="Izrađenih radova" />
        </div>
      </div>
    </section>
  );
}
