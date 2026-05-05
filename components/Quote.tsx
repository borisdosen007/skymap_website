export default function Quote() {
  return (
    <section
      className="px-5 py-16 bg-night-900 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pozadina par.jpeg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-night-900/80 pointer-events-none" />

      {/* Decorative stars */}
      <div className="absolute top-8 left-8 text-gold-400/20 text-4xl pointer-events-none">✦</div>
      <div className="absolute bottom-8 right-8 text-gold-400/15 text-2xl pointer-events-none">★</div>
      <div className="absolute top-1/2 right-6 text-gold-400/10 text-5xl pointer-events-none">✦</div>

      <div className="relative max-w-screen-sm mx-auto text-center">
        {/* Quote mark */}
        <div className="text-gold-400/30 text-6xl font-serif leading-none mb-4 select-none">
          "
        </div>

        <blockquote className="text-white/75 text-base leading-loose font-light italic mb-6 px-2">
          Volio bih da znam zašto zvijezde sijaju... Vjerovatno, da bi prije
          ili kasnije svako od nas mogao pronaći svoju.
        </blockquote>

        <div className="section-divider mb-4" />

        <cite className="text-gold-400/80 text-xs uppercase tracking-widest not-italic">
          Antoine de Saint-Exupéry
        </cite>
        <p className="text-white/30 text-xs mt-1">Mali Princ</p>
      </div>
    </section>
  );
}
