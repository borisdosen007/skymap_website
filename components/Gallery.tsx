import Image from "next/image";

export default function Gallery() {
  return (
    <section className="px-5 py-16 bg-night-950">
      <div className="max-w-screen-sm mx-auto">
        {/* Label */}
        <p className="text-gold-400 text-xs uppercase tracking-[0.3em] text-center mb-3 font-medium">
          Galerija
        </p>
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Naši modeli
        </h2>
        <div className="section-divider mb-8" />

        {/* Bento grid */}
        <div className="grid grid-cols-2 gap-3">

          {/* No1 — tall, spans 2 rows */}
          <div className="row-span-2 relative rounded-2xl overflow-hidden">
            <Image
              src="/images/No1.jpg"
              alt="Skymap model 1"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 300px"
            />
          </div>

          {/* No2 — top right */}
          <div className="aspect-square relative rounded-2xl overflow-hidden">
            <Image
              src="/images/No2.jpg"
              alt="Skymap model 2"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 300px"
            />
          </div>

          {/* Stats block — bottom right */}
          <div className="aspect-square rounded-2xl bg-night-800 border border-gold-400/20 flex flex-col items-center justify-center gap-1">
            <span className="text-4xl font-bold text-gold-400 leading-none">
              1200+
            </span>
            <span className="text-white/50 text-sm">narudžbi</span>
          </div>

          {/* No3 — bottom left */}
          <div className="aspect-square relative rounded-2xl overflow-hidden">
            <Image
              src="/images/No3.jpg"
              alt="Skymap model 3"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 300px"
            />
          </div>

          {/* No4 — bottom right */}
          <div className="aspect-square relative rounded-2xl overflow-hidden">
            <Image
              src="/images/No4.jpg"
              alt="Skymap model 4"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 300px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
