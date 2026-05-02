export default function AnnouncementBar() {
  const text = "BESPLATNA DOSTAVA ZA 2+ NARUDŽBE";
  const items = Array(8).fill(text);

  return (
    <div className="w-full bg-night-800 border-b border-white/5 overflow-hidden py-1.5">
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marquee-scroll 12s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-white/40 text-[10px] font-medium tracking-[0.2em] uppercase"
          >
            {item}
            <span className="text-white/20">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
