import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = {
  "Domestic cities": [
    "Kigali",
    "Musanze",
    "Rubavu",
    "Huye",
    "Muhanga",
    "Nyagatare",
    "Rusizi",
    "Karongi",
  ],
  "International cities": ["Nairobi", "Dubai", "Paris", "London", "Brussels", "Cape Town"],
  Countries: ["Rwanda", "Kenya", "Uganda", "Tanzania", "France", "Belgium"],
};

export default function PopularDestinations() {
  const [active, setActive] = useState("Domestic cities");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 pb-6">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
        Popular with travelers from Rwanda
      </h2>

      {/* Pill tabs — scrollable on mobile */}
      <div
        className="flex gap-2 mb-4 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition whitespace-nowrap shrink-0 ${
              active === tab
                ? "border-[#003580] text-[#003580] bg-[#ebf3ff]"
                : "border-gray-300 text-gray-600 hover:border-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-sm text-gray-700 leading-loose">
        {tabs[active].map((item, i) => (
          <span key={item}>
            <Link
              to={`/search?destination=${encodeURIComponent(item)}`}
              className="hover:underline hover:text-[#0071c2] transition"
            >
              {item}
            </Link>
            {i < tabs[active].length - 1 && (
              <span className="mx-2 text-gray-300" aria-hidden>
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
