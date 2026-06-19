import { Link } from "react-router-dom";

const destinations = [
  {
    city: "Dubai",
    flag: "🇦🇪",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80&auto=format&fit=crop",
    size: "large",
  },
  {
    city: "Brussels",
    flag: "🇧🇪",
    image:
      "https://images.unsplash.com/photo-1559113202-c916b8e44373?w=900&q=80&auto=format&fit=crop",
    size: "large",
  },
  {
    city: "Paris",
    flag: "🇫🇷",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700&q=80&auto=format&fit=crop",
    size: "small",
  },
  {
    city: "Nairobi",
    flag: "🇰🇪",
    image:
      "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=700&q=80&auto=format&fit=crop",
    size: "small",
  },
  {
    city: "London",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=80&auto=format&fit=crop",
    size: "small",
  },
];

export default function TrendingDestinations() {
  const large = destinations.filter((d) => d.size === "large");
  const small = destinations.filter((d) => d.size === "small");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
        Trending destinations
      </h2>

      {/*
       * Mobile:  single column, all cards stacked
       * Tablet+: 2-col for large, 3-col for small
       */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Large cards — side by side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {large.map((d) => (
            <DestCard key={d.city} destination={d} className="h-44 sm:h-56 lg:h-64" />
          ))}
        </div>

        {/* Small cards — 1-col mobile, 3-col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {small.map((d) => (
            <DestCard key={d.city} destination={d} className="h-36 sm:h-44" />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestCard({ destination, className }) {
  return (
    <Link
      to={`/search?destination=${encodeURIComponent(destination.city)}`}
      className={`relative rounded-lg overflow-hidden block group ${className}`}
    >
      <img
        src={destination.image}
        alt={destination.city}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
        loading="lazy"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      {/* label */}
      <div className="absolute bottom-3 left-4 text-white font-bold text-base sm:text-lg flex items-center gap-2 drop-shadow-md">
        <span aria-hidden>{destination.flag}</span>
        {destination.city}
      </div>
    </Link>
  );
}
