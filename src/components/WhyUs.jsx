const features = [
  {
    icon: "📅",
    title: "Book now, pay at the property",
    text: "FREE cancellation on most rooms",
  },
  {
    icon: "👍",
    title: "300M+ reviews from fellow travelers",
    text: "Get trusted information from guests like you",
  },
  {
    icon: "🌍",
    title: "2+ million properties worldwide",
    text: "Hotels, guest houses, apartments, and more...",
  },
  {
    icon: "🎧",
    title: "Trusted 24/7 customer service",
    text: "We're always here to help",
  },
];

export default function WhyUs() {
  return (
    /*
     * Negative margin pulls this section up to overlap the Hero's bottom padding.
     * We use a smaller overlap on mobile so the hero text never gets hidden.
     */
    <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 relative z-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
        Why Stayfinder?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 hover:shadow-md transition"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3" aria-hidden>
              {f.icon}
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-snug">{f.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
