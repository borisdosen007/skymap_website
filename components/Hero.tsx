import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background slika */}
      <Image
        src="/images/novaPozadina.jpg"
        alt="Zvjezdano nebo"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Bottom fade overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-[65%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(4,4,15,0.7) 40%, rgba(4,4,15,0.97) 75%, #04040f 100%)",
        }}
      />

      {/* Content – dole */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 flex flex-col items-center text-center gap-4">
        <p className="text-gold-400 text-xs uppercase tracking-[0.3em] font-medium">
          Zvjezdano nebo
        </p>
        <h1 className="text-4xl text-white leading-tight">
          Savršen poklon za{" "}
          <span className="text-gradient-gold italic">voljenu osobu</span>
        </h1>
        <p className="text-white/55 text-sm leading-relaxed max-w-[280px]">
          Personalizovana karta zvijezda tačno onakvih kakve su bile u vašem posebnom trenutku.
        </p>

      </div>
    </section>
  );
}
