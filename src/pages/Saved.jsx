import { Link } from "react-router-dom";
import { useSaved } from "../context/SavedContext";
import allProperties from "../data/properties.json";
import SaveButton from "../components/SaveButton";

export default function Saved() {
  const { saved } = useSaved();
  const list = allProperties.filter((p) => saved.has(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Saved properties</h1>
      <p className="text-sm text-gray-500 mb-6">{list.length} saved</p>

      {list.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🤍</div>
          <p className="text-gray-600 text-base mb-4">You haven't saved any properties yet.</p>
          <Link
            to="/search"
            className="inline-block bg-[#0071c2] hover:bg-[#005ea2] text-white font-semibold rounded px-6 py-2.5 text-sm transition"
          >
            Browse properties
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group flex flex-col"
            >
              <div className="relative h-44 overflow-hidden shrink-0">
                <Link to={`/property/${p.id}`}>
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
                    loading="lazy"
                  />
                </Link>
                <SaveButton id={p.id} className="absolute top-2 right-2" />
              </div>

              <div className="p-3 flex flex-col gap-1 flex-1">
                <Link to={`/property/${p.id}`}>
                  <h3 className="font-bold text-[#0071c2] text-sm hover:underline line-clamp-1 leading-snug">
                    {p.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-500 truncate">{p.location}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="bg-[#003580] text-white text-xs font-bold rounded px-1.5 py-0.5">
                    {p.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-gray-700 font-medium">{p.ratingLabel}</span>
                </div>
                <div className="mt-auto pt-2">
                  <span className="text-xs text-gray-500">Starting from </span>
                  <span className="font-bold text-gray-900 text-sm">US${p.pricePerNight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
