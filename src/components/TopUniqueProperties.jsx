import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import properties from "../data/properties.json";

function Stars({ count = 4 }) {
  return (
    <span className="text-[#febb02] text-xs leading-none">
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

function GeniusBadge() {
  return (
    <span className="bg-[#003580] text-[#febb02] text-[9px] font-black rounded px-1.5 py-0.5 uppercase tracking-wide leading-none">
      Genius
    </span>
  );
}

const unique = [
  { ...properties[4], type: "Resort", stars: 5, genius: false },
  { ...properties[6], type: "Villa",  stars: 4, genius: true  },
  { ...properties[1], type: "Hotel",  stars: 5, genius: false },
  { ...properties[7], type: "Villa",  stars: 5, genius: true  },
  { ...properties[5], type: "Resort", stars: 4, genius: false },
];

export default function TopUniqueProperties() {
  const scrollRef = useRef(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(false);

  function check() {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function scroll(dir) {
    scrollRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
    setTimeout(check, 350);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5">
        Stay at our top unique properties
      </h2>
      <p className="text-sm text-gray-500 mb-4">From castles and villas to boats and igloos, we have it all</p>

      <div className="relative">
        {canLeft && (
          <button onClick={() => scroll(-1)} aria-label="Scroll left" className="absolute -left-4 top-[42%] -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-700"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        )}

        <div ref={scrollRef} onScroll={check} className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {unique.map((p) => (
            <UniqueCard key={p.id} p={p} />
          ))}
        </div>

        {canRight && (
          <button onClick={() => scroll(1)} aria-label="Scroll right" className="absolute -right-4 top-[42%] -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-700"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        )}
      </div>
    </section>
  );
}

function UniqueCard({ p }) {
  const [saved, setSaved] = useState(false);
  return (
    <Link to={`/property/${p.id}`} className="group flex-shrink-0 w-[calc(50%-6px)] sm:w-52 lg:w-56 flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative h-36 sm:h-40 overflow-hidden shrink-0">
        <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300" loading="lazy" />
        <button
          type="button"
          aria-label={saved ? "Remove from saved" : "Save property"}
          aria-pressed={saved}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSaved((s) => !s); }}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-transform active:scale-90"
        >
          {saved ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          )}
        </button>
      </div>
      <div className="p-3 flex flex-col gap-1 flex-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-gray-500 capitalize">{p.type}</span>
          <Stars count={p.stars} />
          {p.genius && <GeniusBadge />}
        </div>
        <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-[#0071c2] transition">{p.name}</h3>
        <p className="text-xs text-gray-500 truncate">{p.location}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="bg-[#003580] text-white text-xs font-bold rounded px-1.5 py-0.5">{p.rating.toFixed(1)}</span>
          <span className="text-xs text-gray-700 font-medium">{p.ratingLabel}</span>
          <span className="text-xs text-gray-500">{p.reviews.toLocaleString()} reviews</span>
        </div>
        <div className="mt-auto pt-2">
          <span className="text-xs text-gray-500">Starting from </span>
          <span className="font-bold text-gray-900 text-sm">US${p.pricePerNight}</span>
        </div>
      </div>
    </Link>
  );
}
