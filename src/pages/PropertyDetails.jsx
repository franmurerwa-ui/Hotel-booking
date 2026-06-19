import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import properties from "../data/properties.json";

const sampleReviews = [
  { name: "Amelia", country: "🇬🇧", rating: 9.2, text: "Loved the location and the staff were incredibly helpful from check-in to check-out." },
  { name: "Diego", country: "🇪🇸", rating: 8.6, text: "Clean, comfortable, and great value for the price. Would definitely book again." },
  { name: "Hana", country: "🇯🇵", rating: 9.5, text: "The room was spacious and the breakfast spread was excellent. Highly recommended." },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Property not found</h1>
        <p className="text-gray-600 mb-4">This listing doesn't exist in our sample data.</p>
        <Link to="/search" className="text-[#0071c2] font-semibold hover:underline">
          ← Back to search results
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* ── Sticky sub-header (sm+) ── */}
      <div className="hidden sm:block border-b border-gray-200 bg-white sticky top-14 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight truncate">
              {property.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 truncate">{property.location}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="shrink-0 bg-[#0071c2] hover:bg-[#005ea2] text-white font-semibold rounded px-4 sm:px-5 py-2 sm:py-2.5 text-sm transition">
            Reserve
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        {/* ── Mobile title block ── */}
        <div className="sm:hidden mb-4">
          <h1 className="text-xl font-bold text-gray-900 leading-tight">{property.name}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{property.location}</p>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className="bg-[#003580] text-white text-xs font-bold rounded px-1.5 py-0.5">
              {property.rating.toFixed(1)}
            </span>
            <span className="text-sm font-semibold text-gray-800">{property.ratingLabel}</span>
            <span className="text-gray-400">·</span>
            <span className="text-sm text-gray-500">{property.reviews.toLocaleString()} reviews</span>
          </div>
        </div>

        {/* ── Desktop rating row ── */}
        <div className="hidden sm:flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-[#febb02] text-lg" aria-label="4 stars">★★★★☆</span>
          <span className="bg-[#003580] text-white text-xs font-bold rounded px-1.5 py-0.5 ml-1">
            {property.rating.toFixed(1)}
          </span>
          <span className="text-sm font-semibold text-gray-800">{property.ratingLabel}</span>
          <span className="text-gray-400 text-sm">·</span>
          <span className="text-sm text-[#0071c2] hover:underline cursor-pointer">
            {property.reviews.toLocaleString()} reviews
          </span>
        </div>

        {/* ── Image gallery ── */}
        {/*
         * Mobile:  single large image
         * sm+:     main image left (2×2) + 2 thumbnails right
         */}
        <div className="mb-5 sm:mb-6 rounded-xl overflow-hidden">
          {/* Mobile: just the first image */}
          <div className="sm:hidden">
            <button
              className="w-full h-52 block overflow-hidden"
              onClick={() => { setActiveImage(0); setLightboxOpen(true); }}
            >
              <img
                src={property.images[0]}
                alt={`${property.name} main photo`}
                className="w-full h-full object-cover"
              />
            </button>
            {property.images.length > 1 && (
              <div className="flex gap-1.5 mt-1.5">
                {property.images.slice(1, 3).map((img, i) => (
                  <button
                    key={img}
                    className="flex-1 h-24 overflow-hidden rounded"
                    onClick={() => { setActiveImage(i + 1); setLightboxOpen(true); }}
                  >
                    <img src={img} alt={`${property.name} photo ${i + 2}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* sm+: bento grid */}
          <div className="hidden sm:grid sm:grid-cols-4 sm:grid-rows-2 gap-1.5 h-64 sm:h-72 lg:h-80">
            {property.images.slice(0, 3).map((img, i) => (
              <button
                key={img}
                onClick={() => { setActiveImage(i); setLightboxOpen(true); }}
                className={`relative block w-full h-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071c2] ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`${property.name} photo ${i + 1}`}
                  className="w-full h-full object-cover hover:opacity-90 transition"
                />
                {i === 2 && property.images.length > 3 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold text-sm">
                    +{property.images.length - 3} more
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Lightbox ── */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 w-10 h-10 flex items-center justify-center"
              aria-label="Close"
              onClick={() => setLightboxOpen(false)}
            >
              ✕
            </button>
            <button
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); setActiveImage((i) => (i > 0 ? i - 1 : property.images.length - 1)); }}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <img
              src={property.images[activeImage]}
              alt={`${property.name} — photo ${activeImage + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); setActiveImage((i) => (i < property.images.length - 1 ? i + 1 : 0)); }}
              aria-label="Next photo"
            >
              ›
            </button>
            <div className="absolute bottom-4 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
              {activeImage + 1} / {property.images.length}
            </div>
          </div>
        )}

        {/* ── Main content layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left / main column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-7">

            {/* About */}
            <section>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">About this property</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{property.description}</p>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Most popular facilities</h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded px-3 py-2">
                    <span className="text-[#0071c2] shrink-0">✓</span>
                    <span className="truncate">{a}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Room types — scrollable table on mobile */}
            <section>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Available rooms</h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="min-w-[480px] sm:min-w-0 px-4 sm:px-0">
                  <table className="w-full text-sm rounded-lg overflow-hidden border border-gray-200">
                    <thead className="bg-[#ebf3ff] text-left text-[#003580]">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Room type</th>
                        <th className="px-4 py-3 font-semibold">Sleeps</th>
                        <th className="px-4 py-3 font-semibold">Price / night</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.roomTypes.map((room, i) => (
                        <tr
                          key={room.name}
                          className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                          <td className="px-4 py-3 font-medium text-[#0071c2]">{room.name}</td>
                          <td className="px-4 py-3 text-gray-600">{room.capacity} guests</td>
                          <td className="px-4 py-3 font-bold text-gray-900">US${room.price}</td>
                          <td className="px-4 py-3 text-right">
                            <button className="bg-[#0071c2] hover:bg-[#005ea2] text-white rounded px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition whitespace-nowrap">
                              Reserve
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Booking widget inline on mobile */}
              <div className="lg:hidden mt-5">
                <BookingWidget property={property} />
              </div>
            </section>

            {/* Reviews */}
            <section>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">Guest reviews</h2>
                <span className="bg-[#003580] text-white text-sm font-bold rounded px-2 py-0.5 shrink-0">
                  {property.rating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-600">
                  {property.ratingLabel} · {property.reviews.toLocaleString()} reviews
                </span>
              </div>
              <div className="space-y-3">
                {sampleReviews.map((r) => (
                  <div key={r.name} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-sm transition">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#003580] text-white text-xs font-bold rounded px-1.5 py-0.5 shrink-0">
                        {r.rating}
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">{r.name}</span>
                      <span aria-hidden>{r.country}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky booking widget — desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <BookingWidget property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingWidget({ property }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 sm:p-5 bg-white">
      <div className="flex items-start justify-between mb-4 gap-3">
        <div>
          <div className="text-xs text-gray-500 mb-0.5">Starting from</div>
          <div className="text-2xl font-bold text-gray-900">US${property.pricePerNight}</div>
          <div className="text-xs text-gray-500">per night</div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="bg-[#003580] text-white text-xs font-bold rounded px-1.5 py-0.5">
            {property.rating.toFixed(1)}
          </span>
          <div className="text-xs">
            <div className="font-semibold text-gray-800">{property.ratingLabel}</div>
            <div className="text-gray-500">{property.reviews.toLocaleString()} reviews</div>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {/* Date grid */}
        <div className="grid grid-cols-2 border border-gray-300 rounded overflow-hidden">
          <div className="border-r border-gray-300 p-2.5">
            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wide mb-1">Check-in</div>
            <input
              type="date"
              className="w-full text-xs sm:text-sm text-gray-800 outline-none bg-transparent cursor-pointer"
              aria-label="Check-in date"
            />
          </div>
          <div className="p-2.5">
            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wide mb-1">Check-out</div>
            <input
              type="date"
              className="w-full text-xs sm:text-sm text-gray-800 outline-none bg-transparent cursor-pointer"
              aria-label="Check-out date"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="border border-gray-300 rounded p-2.5">
          <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wide mb-0.5">Guests</div>
          <input
            type="text"
            defaultValue="2 adults · 0 children · 1 room"
            className="w-full text-xs sm:text-sm text-gray-800 outline-none bg-transparent"
            readOnly
          />
        </div>
      </div>

      <button className="w-full bg-[#0071c2] hover:bg-[#005ea2] text-white font-bold rounded py-3 text-sm transition">
        Reserve
      </button>
      <p className="text-xs text-gray-500 text-center mt-2">You won't be charged yet</p>
    </div>
  );
}
