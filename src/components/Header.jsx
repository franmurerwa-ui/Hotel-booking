import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// SVG icons matching Booking.com's nav tab style
const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M3 9V19M3 13h18M21 19V9a2 2 0 00-2-2H5a2 2 0 00-2 2" />
    <path d="M7 13V9h4v4M13 13V9h4v4" />
  </svg>
);
const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);
const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M5 17H3v-5l2-5h14l2 5v5h-2M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
  </svg>
);
const AttractionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    <path d="M2 12h20" />
  </svg>
);
const TaxiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M7 17H5v-5l2-4h10l2 4v5h-2M7 17a2 2 0 104 0M13 17a2 2 0 104 0" />
    <path d="M9 5h6M5 12h14" />
  </svg>
);

const navTabs = [
  { label: "Stays",        Icon: BedIcon },
  { label: "Flights",      Icon: PlaneIcon },
  { label: "Car rental",   Icon: CarIcon },
  { label: "Attractions",  Icon: AttractionIcon },
  { label: "Airport taxis",Icon: TaxiIcon },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("Stays");
  const [menuOpen, setMenuOpen]   = useState(false);

  return (
    <header className="bg-[#003580] text-white sticky top-0 z-30 w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">

        {/* ── Top row ── */}
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link
            to="/"
            aria-label="Stayfinder home"
            className="shrink-0 flex items-center"
          >
            <span className="font-extrabold text-xl sm:text-2xl text-white leading-none tracking-tight">
              Booking
            </span>
            <span className="ml-0.5 text-white font-extrabold text-xl sm:text-2xl leading-none">
              .com
            </span>
          </Link>

          {/* Desktop utility actions */}
          <div className="hidden md:flex items-center gap-0.5 text-sm font-medium">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded hover:bg-white/10 transition text-sm font-medium">
              USD
            </button>

            {/* Flag icon */}
            <button
              aria-label="Select language"
              className="px-2 py-2 rounded hover:bg-white/10 transition"
            >
              <span className="text-base leading-none">🇺🇸</span>
            </button>

            {/* Help */}
            <button
              aria-label="Help"
              className="px-2 py-2 rounded hover:bg-white/10 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
              </svg>
            </button>

            <Link
              to="/login"
              className="px-3 py-2 rounded hover:bg-white/10 transition whitespace-nowrap text-sm font-medium ml-1"
            >
              List your property
            </Link>

            <Link
              to="/signup"
              className="ml-2 border border-white text-white rounded px-3.5 py-1.5 text-sm font-semibold hover:bg-white/10 transition whitespace-nowrap"
            >
              Register
            </Link>

            <Link
              to="/login"
              className="ml-1.5 bg-white text-[#003580] rounded px-3.5 py-1.5 text-sm font-semibold hover:bg-blue-50 transition whitespace-nowrap"
            >
              Sign in
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-white/10 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* ── Nav tabs — desktop/tablet ── */}
        <nav
          aria-label="Travel categories"
          className="hidden sm:flex items-center gap-0 pb-0 -mb-px overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {navTabs.map(({ label, Icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`
                flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors
                ${activeTab === label
                  ? "border-white text-white"
                  : "border-transparent text-white/75 hover:text-white hover:border-white/40"}
              `}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Mobile slide-down menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#00224f] border-t border-white/10 px-4 py-3 space-y-0.5">
          {navTabs.map(({ label, Icon }) => (
            <button
              key={label}
              onClick={() => { setActiveTab(label); setMenuOpen(false); }}
              className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded text-sm font-medium transition ${
                activeTab === label ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon />
              {label}
            </button>
          ))}

          <div className="border-t border-white/10 pt-3 mt-3 space-y-0.5">
            <NavLink
              to="/login"
              className="block px-3 py-2.5 rounded text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              List your property
            </NavLink>
            <div className="flex gap-2 pt-1">
              <NavLink
                to="/signup"
                className="flex-1 border border-white/60 text-white rounded px-3 py-2 text-sm font-semibold text-center hover:bg-white/10 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="flex-1 bg-white text-[#003580] rounded px-3 py-2 text-sm font-semibold text-center hover:bg-blue-50 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign in
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
