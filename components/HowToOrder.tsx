const steps = [
  {
    number: "01",
    title: "Podatke o događaju",
    description:
      "Pošaljite nam datum, lokaciju i tačno vrijeme posebnog trenutka.",
  },
  {
    number: "02",
    title: "Odaberite model",
    description:
      "Izaberite dizajn koji vam se najviše sviđa iz naše kolekcije.",
  },
  {
    number: "03",
    title: "Tekst po želji",
    description:
      "Dodajte imena, datum ili poruku koja će biti ispisana na karti.",
  },
  {
    number: "04",
    title: "Dimenzije i dostava",
    description:
      "Odaberite željenu veličinu i navedite adresu za dostavu.",
  },
];

export default function HowToOrder() {
  return (
    <section className="px-5 py-16 bg-night-950">
      <div className="max-w-screen-sm mx-auto">
        {/* Label */}
        <p className="text-gold-400 text-xs uppercase tracking-[0.3em] text-center mb-3 font-medium">
          Naručivanje
        </p>
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Kako naručiti?
        </h2>
        <div className="section-divider" />
        <p className="text-white/50 text-sm text-center mb-10">
          Pošaljite nam poruku na Instagramu u 4 jednostavna koraka
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-gold-400/40 via-gold-400/20 to-transparent" />

          <div className="flex flex-col gap-7">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                {/* Step number circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-night-800 border border-gold-400/40 flex items-center justify-center">
                    <span className="text-gold-400 text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 pb-1">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/skymap.bih"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 active:scale-95"
          >
            Počni narudžbu →
          </a>
        </div>
      </div>
    </section>
  );
}
