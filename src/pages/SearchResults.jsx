import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import properties from "../data/properties.json";

const allTypes = ["Hotels", "Apartments", "Resorts", "Villas"];

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const destinationQuery = searchParams.get("destination") || "";
  const typeQuery = searchParams.get("type") || "";

  const [selectedTypes, setSelectedTypes] = useState(typeQuery ? [typeQuery] : []);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Lock body scroll while mobile filter drawer is open
  useEffect(() => {
    document.body.style.overflow = filtersOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [filtersOpen]);

  function toggleType(type) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  const results = useMemo(() => {
    let list = properties.filter((p) => {
      const matchesDestination = destinationQuery
        ? p.location.toLowerCase().includes(destinationQuery.toLowerCase()) ||
          p.name.toLowerCase().includes(destinationQuery.toLowerCase())
        : true;
      const matchesType = selectedTypes.length ? selectedTypes.includes(p.type) : true;
      return matchesDestination && matchesType && p.rating >= minRating;
    });
    if (sortBy === "price-low") list = [...list].sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sortBy === "price-high") list = [...list].sort((a, b) => b.pricePerNight - a.pricePerNight);
    if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [destinationQuery, selectedTypes, minRating, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Blue header bar ── */}
      <div className="bg-[#003580] py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg sm:text-xl font-bold text-white">
            {destinationQuery ? `Stays in ${destinationQuery}` : "All stays"}
          </h1>
          <p className="text-sm text-white/70">{results.length} properties found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">

          {/* ── Mobile: filter toggle button ── */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              className="flex items-center gap-2 border border-gray-300 bg-white rounded-lg px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 transition"
              onClick={() => setFiltersOpen(true)}
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Filters
              {(selectedTypes.length > 0 || minRating > 0) && (
                <span className="bg-[#003580] text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
                  {selectedTypes.length + (minRating > 0 ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Inline sort on mobile */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#0071c2] shadow-sm"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>

          {/* ── Filter drawer overlay (mobile) / sidebar (desktop) ── */}
          {/* Backdrop */}
          {filtersOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setFiltersOpen(false)}
              aria-hidden
            />
          )}

          <aside
            className={`
              fixed top-0 left-0 h-full z-50 bg-white w-72 shadow-2xl transition-transform duration-300 ease-in-out
              lg:static lg:w-60 lg:h-auto lg:shadow-none lg:translate-x-0 lg:z-auto lg:shrink-0
              ${filtersOpen ? "translate-x-0" : "-translate-x-full"}
              lg:block
            `}
          >
            {/* Drawer header (mobile only) */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 lg:hidden">
              <h2 className="font-bold text-gray-900">Filter by</h2>
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition"
                aria-label="Close filters"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto h-[calc(100%-64px)] lg:h-auto lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-sm">
              <div className="p-5 space-y-6">
                {/* Property type */}
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-3 pb-2 border-b border-gray-100">
                    Property type
                  </h3>
                  <div className="space-y-2.5">
                    {allTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() => toggleType(type)}
                          className="h-4 w-4 rounded accent-[#003580]"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Review score */}
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-3 pb-2 border-b border-gray-100">
                    Review score
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      { val: 0, label: "Any rating" },
                      { val: 7, label: "Good: 7+" },
                      { val: 8, label: "Very Good: 8+" },
                      { val: 9, label: "Excellent: 9+" },
                    ].map(({ val, label }) => (
                      <label key={val} className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === val}
                          onChange={() => setMinRating(val)}
                          className="h-4 w-4 accent-[#003580]"
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Apply button (mobile only) */}
              <div className="lg:hidden px-5 pb-5">
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="w-full bg-[#003580] text-white rounded-lg py-3 font-semibold text-sm hover:bg-[#0a4fb0] transition"
                >
                  Show {results.length} properties
                </button>
              </div>
            </div>
          </aside>

          {/* ── Results list ── */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort row */}
            <div className="hidden lg:flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">{results.length} properties found</p>
              <label className="text-sm text-gray-600 flex items-center gap-2">
                Sort by:
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1.5 text-sm bg-white focus:outline-none focus:border-[#0071c2]"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top rated</option>
                </select>
              </label>
            </div>

            {results.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-8 sm:p-12 text-center">
                <p className="text-gray-500 text-sm">No properties match your search.</p>
                <button
                  onClick={() => { setSelectedTypes([]); setMinRating(0); }}
                  className="mt-3 text-[#0071c2] text-sm font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map((p) => (
                  <ResultCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ property: p }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition flex flex-col sm:flex-row">
      {/* Image */}
      <a
        href={`/property/${p.id}`}
        className="block shrink-0 h-48 sm:w-52 sm:h-auto overflow-hidden"
      >
        <img
          src={p.images[0]}
          alt={p.name}
          className="w-full h-full object-cover hover:scale-[1.02] transition duration-300"
          loading="lazy"
        />
      </a>

      {/* Body */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-3 min-w-0">
        {/* Top: name + rating+price */}
        <div className="flex items-start justify-between gap-3">
          {/* Left: title, location, amenities */}
          <div className="min-w-0 flex-1">
            <a href={`/property/${p.id}`}>
              <h3 className="font-bold text-[#0071c2] hover:underline text-sm sm:text-base leading-snug line-clamp-2">
                {p.name}
              </h3>
            </a>
            <p className="text-xs text-gray-500 mt-0.5 truncate">{p.location}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {p.amenities.slice(0, 3).map((a) => (
                <span
                  key={a}
                  className="text-xs bg-[#ebf3ff] text-[#003580] rounded px-2 py-0.5 font-medium"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Right: rating + price + CTA */}
          <div className="shrink-0 text-right flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-semibold text-gray-800">{p.ratingLabel}</div>
                <div className="text-xs text-gray-500">{p.reviews.toLocaleString()} reviews</div>
              </div>
              <span className="bg-[#003580] text-white text-sm font-bold rounded px-2 py-1 shrink-0">
                {p.rating.toFixed(1)}
              </span>
            </div>
            <div className="mt-1 sm:mt-2">
              <div className="text-xs text-gray-500">from</div>
              <div className="text-lg sm:text-xl font-bold text-gray-900">
                US${p.pricePerNight}
              </div>
              <div className="text-xs text-gray-500">per night</div>
            </div>
            <a
              href={`/property/${p.id}`}
              className="mt-1 sm:mt-2 inline-block bg-[#0071c2] hover:bg-[#005ea2] text-white text-xs sm:text-sm font-semibold rounded px-3 sm:px-4 py-1.5 sm:py-2 transition whitespace-nowrap"
            >
              See availability
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
