import { Link } from "react-router-dom";

export default function GeniusBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
        Travel more, spend less
      </h2>

      <div className="bg-[#ebf3ff] border border-[#bdd3f0] rounded-lg p-4 sm:p-6 flex items-center justify-between gap-4 sm:gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-sm sm:text-base font-bold text-gray-900">Sign in, save money</h3>
            <span className="bg-[#003580] text-[#febb02] text-[10px] font-black rounded px-1.5 py-0.5 tracking-wide uppercase shrink-0">
              Genius
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed max-w-sm">
            Save 10% or more at participating properties — just look for the blue Perks label on
            your next stay, and enjoy member-only deals
          </p>
          <div className="flex gap-3 items-center flex-wrap">
            <Link
              to="/login"
              className="bg-[#003580] text-white rounded px-4 py-2 text-sm font-semibold hover:bg-[#0a4fb0] transition"
            >
              Sign in
            </Link>
            <Link to="/signup" className="text-[#0071c2] text-sm font-semibold hover:underline">
              Register
            </Link>
          </div>
        </div>

        <div className="text-5xl sm:text-6xl lg:text-7xl select-none shrink-0" aria-hidden>
          🎁
        </div>
      </div>
    </section>
  );
}
