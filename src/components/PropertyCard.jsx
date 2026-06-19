import { useState } from "react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property, layout = "grid" }) {
  const [saved, setSaved] = useState(false);
  const isList = layout === "list";

  return (
    <div className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition group ${isList ? "flex flex-col sm:flex-row" : "flex flex-col"}`}>
      <Link to={`/property/${property.id}`} className={`relative block shrink-0 overflow-hidden ${isList ? "sm:w-52 lg:w-56 h-48 sm:h-full" : "h-40 sm:h-44"}`}>
        <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300" loading="lazy" />
        <button
          type="button"
          aria-label={saved ? "Remove from saved" : "Save property"}
          aria-pressed={saved}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSaved((s) => !s); }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-transform active:scale-90"
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
      </Link>

      <div className="p-3 flex flex-col flex-1 justify-between gap-2">
        <div>
          <Link to={`/property/${property.id}`}>
            <h3 className="font-semibold text-[#0071c2] text-sm hover:underline line-clamp-1 leading-snug">{property.name}</h3>
          </Link>
          <p className="text-xs text-gray-500 mt-0.5 truncate">{property.location}</p>
        </div>
        <div className="flex items-end justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="bg-[#003580] text-white text-xs font-bold rounded px-1.5 py-0.5 shrink-0">{property.rating.toFixed(1)}</span>
            <div className="text-xs text-gray-600 leading-tight min-w-0">
              <div className="font-semibold text-gray-800 truncate">{property.ratingLabel}</div>
              <div className="text-gray-500 truncate">{property.reviews.toLocaleString()} reviews</div>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-xs text-gray-500">from</div>
            <div className="font-bold text-gray-900 text-sm">US${property.pricePerNight}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
