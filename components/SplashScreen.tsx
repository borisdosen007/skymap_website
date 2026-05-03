"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "visible" | "moving" | "hidden";

export default function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("moving"), 1400);
    const t2 = setTimeout(() => setPhase("hidden"), 1950);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/1080x1080 pozadina.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: phase === "moving" ? 0 : 1,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {/* Centralni logo */}
      <Image
        src="/images/Logo.png"
        alt="Skymap BiH"
        width={200}
        height={95}
        className="object-contain"
        style={{
          transform: phase === "moving" ? "translateY(-45vh) scale(0.45)" : "translateY(0) scale(1)",
          opacity: phase === "moving" ? 0 : 1,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out",
        }}
        priority
      />
    </div>
  );
}
