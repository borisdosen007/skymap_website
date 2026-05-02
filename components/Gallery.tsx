"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const galleries = [
  {
    id: 1,
    title: "Klasični modeli",
    images: [
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/1-min.jpg",
        alt: "Skymap model 1",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/2-min.jpg",
        alt: "Skymap model 2",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/3-min.jpg",
        alt: "Skymap model 3",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/4-min.jpg",
        alt: "Skymap model 4",
      },
    ],
  },
  {
    id: 2,
    title: "Premium modeli",
    images: [
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/5-min.jpg",
        alt: "Skymap premium 1",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/6-min.jpg",
        alt: "Skymap premium 2",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/7-min.jpg",
        alt: "Skymap premium 3",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/8-min.jpg",
        alt: "Skymap premium 4",
      },
    ],
  },
  {
    id: 3,
    title: "Posebne verzije",
    images: [
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/9-min.jpg",
        alt: "Skymap special 1",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/10-min.jpg",
        alt: "Skymap special 2",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/1-min-1.jpg",
        alt: "Skymap special 3",
      },
      {
        src: "https://skymapbih.com/wp-content/uploads/2021/11/2-min-1.jpg",
        alt: "Skymap special 4",
      },
    ],
  },
];

function Carousel({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-night-800"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-400 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="flex-shrink-0 w-full h-full relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 600px"
            />
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        aria-label="Prethodni"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-night-950/70 border border-white/20 flex items-center justify-center text-white/80 hover:bg-night-950 transition-all"
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Sljedeći"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-night-950/70 border border-white/20 flex items-center justify-center text-white/80 hover:bg-night-950 transition-all"
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slika ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "w-4 h-1.5 bg-gold-400"
                : "w-1.5 h-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
        <div className="section-divider" />
        <p className="text-white/50 text-sm text-center mb-10">
          Prevucite za više →
        </p>

        <div className="flex flex-col gap-10">
          {galleries.map((gallery) => (
            <div key={gallery.id}>
              <h3 className="text-white/70 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="text-gold-400">✦</span>
                {gallery.title}
              </h3>
              <Carousel images={gallery.images} />
              <div className="mt-3 text-right">
                <a
                  href="https://www.instagram.com/skymap.bih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400/70 text-xs hover:text-gold-400 transition-colors"
                >
                  Pogledaj sve na Instagramu →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
