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

const CARD_PEEK = 10; // px — koliko prethodne kartice vire iznad sljedeće
const CARD_TOP_BASE = 80; // px od vrha viewporta (ispod header-a)

export default function HowToOrder() {
  return (
    <section className="px-5 pt-16 pb-16 bg-night-950">
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

        {/* Stacking cards */}
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="sticky bg-night-800 rounded-2xl border border-white/10 p-6 mb-4 shadow-2xl"
              style={{
                top: `${CARD_TOP_BASE + index * CARD_PEEK}px`,
                zIndex: index + 1,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Step number */}
                <div className="w-11 h-11 rounded-full bg-night-900 border border-gold-400/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 text-xs font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center" style={{ position: "relative", zIndex: 10 }}>
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
