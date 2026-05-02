export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 py-10 bg-night-950 border-t border-white/5">
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-gold-400 text-lg">✦</span>
          <span className="text-white/80 font-semibold tracking-widest text-sm uppercase">
            Skymap BiH
          </span>
        </div>

        {/* Tagline */}
        <p className="text-white/30 text-xs text-center leading-relaxed max-w-[200px]">
          Personalizovano zvjezdano nebo za vaš poseban trenutak
        </p>

        {/* Social links */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/skymap.bih"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-gold-400 transition-colors text-xs uppercase tracking-widest"
          >
            Instagram
          </a>
          <span className="text-white/15">·</span>
          <a
            href="https://www.facebook.com/skymap.bih20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-gold-400 transition-colors text-xs uppercase tracking-widest"
          >
            Facebook
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/20 text-xs">
          © {year} Skymap BiH. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
