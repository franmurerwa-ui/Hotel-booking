const columns = [
  {
    title: "Support",
    links: ["Manage your trips", "Contact customer service", "Safety resource center"],
  },
  {
    title: "Discover",
    links: [
      "Perks loyalty program",
      "Seasonal and holiday deals",
      "Travel articles",
      "Stayfinder for Business",
      "Traveller review awards",
      "Car rental",
      "Flight finder",
      "Restaurant reservations",
    ],
  },
  {
    title: "Terms and settings",
    links: [
      "Privacy notice",
      "Terms of service",
      "Accessibility statement",
      "Partner dispute",
      "Modern slavery statement",
      "Human rights statement",
    ],
  },
  {
    title: "Partners",
    links: ["Extranet login", "Partner help", "List your property", "Become an affiliate"],
  },
  {
    title: "About",
    links: [
      "About Stayfinder",
      "How we work",
      "Sustainability",
      "Press center",
      "Careers",
      "Investor relations",
      "Corporate contact & press",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-8 sm:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/*
         * Mobile:  2 columns
         * md:      3 columns
         * lg:      5 columns
         */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-gray-900 text-sm mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-gray-600 hover:underline hover:text-[#0071c2] transition leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Language / currency */}
        <div className="flex items-center gap-2 mt-6 sm:mt-8 flex-wrap">
          <button className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-100 transition text-xs">
            <span aria-hidden>🌐</span> English (UK)
          </button>
          <button className="border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-100 transition text-xs">
            USD
          </button>
        </div>

        <hr className="border-gray-200 mt-5 mb-4" />

        <p className="text-xs text-gray-500 leading-relaxed">
          Stayfinder is a student clone project built for learning purposes and is not affiliated
          with or endorsed by Booking.com or its subsidiaries. © 2026 Stayfinder. All rights
          reserved.
        </p>

        <div className="mt-3 flex items-center gap-3 flex-wrap">
          <span className="text-[#003580] font-extrabold text-sm">stayfinder</span>
          {["priceline", "KAYAK", "agoda", "rentalcars", "OpenTable"].map((brand) => (
            <span key={brand} className="text-gray-500 text-xs">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
