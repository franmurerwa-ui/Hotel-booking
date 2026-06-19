import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const types = [
  {
    label: "Hotels",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Apartments",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Resorts",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Villas",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80&auto=format&fit=crop",
  },
];

export default function PropertyTypes() {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);

  function checkScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  function scroll(dir) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 260, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  }

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 mt-8 sm:mt-10 w-full overflow-hidden">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
        Browse by property type
      </h2>

      <div className="relative -mx-3 sm:mx-0">
        {/* Left arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="absolute left-1 sm:-left-4 top-[45%] -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-700">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 overflow-x-auto pb-1 px-3 sm:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {types.map((t) => (
            <Link
              key={t.label}
              to={`/search?type=${encodeURIComponent(t.label)}`}
              className="group flex-shrink-0 w-[calc(50%-6px)] sm:w-56 lg:w-64 block"
            >
              {/* Image — tall rectangle matching the reference */}
              <div className="rounded-lg overflow-hidden aspect-[3/2.5]">
                <img
                  src={t.image}
                  alt={t.label}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-gray-900 mt-2 text-sm sm:text-[15px]">{t.label}</h3>
            </Link>
          ))}
        </div>

        {/* Right arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="absolute -right-4 top-[45%] -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-700">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
