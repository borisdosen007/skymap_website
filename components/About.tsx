export default function About() {
  const occasions = [
    { icon: "💍", label: "Vjenčanje" },
    { icon: "🎂", label: "Rođendan" },
    { icon: "💑", label: "Godišnjica" },
    { icon: "💋", label: "Prvi susret" },
  ];

  return (
    <section className="px-5 py-16 bg-night-900">
      <div className="max-w-screen-sm mx-auto">
        {/* Label */}
        <p className="text-gold-400 text-xs uppercase tracking-[0.3em] text-center mb-3 font-medium">
          O nama
        </p>
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Šta je zvjezdano nebo?
        </h2>
        <div className="section-divider" />

        <p className="text-white/65 text-sm leading-relaxed text-center mb-8">
          Zvjezdano nebo je personalizovana karta koja prikazuje tačan raspored
          zvijezda na određenoj lokaciji i u određenom trenutku. Svaki detalj
          je jedinstven – kao i trenutak koji čuvate.
        </p>

        {/* Feature box */}
        <div className="bg-night-800 rounded-2xl p-5 mb-8 border border-white/5">
          <p className="text-white/80 text-sm leading-relaxed">
            Vi nam date{" "}
            <span className="text-gold-400 font-medium">datum</span>,{" "}
            <span className="text-gold-400 font-medium">lokaciju</span> i{" "}
            <span className="text-gold-400 font-medium">željeni tekst</span> –
            mi kreiramo unikatno zvjezdano nebo koje možete uokviriti i čuvati
            zauvijek.
          </p>
        </div>

        {/* Occasions */}
        <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-4">
          Idealno za
        </p>
        <div className="grid grid-cols-2 gap-3">
          {occasions.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-night-800/60 rounded-xl px-4 py-3 border border-white/5"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-white/75 text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
