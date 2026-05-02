import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-60 pointer-events-none" />

      {/* Radial glow in center */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(248,196,66,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative star ring */}
      <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full border border-gold-400/20 flex items-center justify-center mx-auto">
          <div className="w-28 h-28 rounded-full border border-gold-400/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-gold-400/40 flex items-center justify-center">
              <span className="text-gold-400 text-3xl">✦</span>
            </div>
          </div>
        </div>

        {/* Small stars around ring */}
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-gold-300/70 text-xs animate-twinkle">★</span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gold-300/70 text-xs animate-twinkle" style={{ animationDelay: "1s" }}>★</span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gold-300/70 text-xs animate-twinkle" style={{ animationDelay: "0.5s" }}>★</span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gold-300/70 text-xs animate-twinkle" style={{ animationDelay: "1.5s" }}>★</span>
      </div>

      {/* Headline */}
      <div className="relative z-10 max-w-xs mx-auto">
        <p className="text-gold-400 text-xs uppercase tracking-[0.3em] mb-3 font-medium">
          Zvjezdano nebo
        </p>
        <h1 className="text-3xl font-bold text-white leading-tight mb-4">
          Savršen poklon za{" "}
          <span className="text-gradient-gold">voljenu osobu</span>
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          Poklonite im noć pod zvijezdama – tačno onu koja je bila nad vama u
          posebnom trenutku.
        </p>

        {/* CTA */}
        <a
          href="https://www.instagram.com/skymap.bih"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-night-950 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 active:scale-95"
        >
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Naruči na Instagramu
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">skroluj</span>
        <svg
          className="text-gold-400/50"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
