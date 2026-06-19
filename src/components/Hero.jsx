import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400 shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400 shrink-0">
    <path d="M3 9V19M3 13h18M21 19V9a2 2 0 00-2-2H5a2 2 0 00-2 2" />
    <path d="M7 13V9h4v4M13 13V9h4v4" />
  </svg>
);
const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400 shrink-0">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500 shrink-0">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Hero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkIn,  setCheckIn]  = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [forWork, setForWork] = useState(false);
  const guestsRef = useRef(null);

  useEffect(() => {
    function onOut(e) {
      if (guestsRef.current && !guestsRef.current.contains(e.target)) setGuestsOpen(false);
    }
    document.addEventListener("mousedown", onOut);
    return () => document.removeEventListener("mousedown", onOut);
  }, []);

  const guestLabel =
    `${guests.adults} adult${guests.adults !== 1 ? "s" : ""} · ` +
    `${guests.children} children · ` +
    `${guests.rooms} room${guests.rooms !== 1 ? "s" : ""}`;

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search?${new URLSearchParams({ destination, checkIn, checkOut, guests: guestLabel })}`);
  }

  function fmtDate(iso) {
    if (!iso) return null;
    return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  }

  const dateDisplay = checkIn ? `${fmtDate(checkIn)}${checkOut ? " — " + fmtDate(checkOut) : ""}` : null;

  return (
    <>
      {/* ── Blue hero band ── */}
      <section className="bg-[#003580] text-white pt-8 sm:pt-12 pb-14 sm:pb-16 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold leading-tight mb-2">
            Find your next stay
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white/90">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </section>

      {/*
       * Search bar sits OUTSIDE the blue section so it naturally aligns
       * with the content width below. Negative top margin pulls it up to
       * overlap the hero's bottom edge — same visual as the reference.
       */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 -mt-7 relative z-10 w-full">
        <form
          onSubmit={handleSearch}
          className="bg-[#febb02] rounded-lg p-[3px] flex flex-col sm:flex-row shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        >
          {/* Destination */}
          <label className="flex items-center gap-2.5 bg-white rounded-[5px] px-3 py-3.5 sm:flex-1 min-w-0 cursor-text">
            <BedIcon />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you going?"
              className="w-full outline-none text-gray-800 placeholder:text-gray-500 text-sm bg-transparent"
              aria-label="Destination"
            />
          </label>

          <div className="w-px bg-[#febb02] hidden sm:block" aria-hidden />

          {/* Dates */}
          <div className="relative flex items-center gap-2.5 bg-white rounded-[5px] px-3 py-3.5 sm:flex-1 min-w-0">
            <CalendarIcon />
            <div className="flex-1 min-w-0">
              {dateDisplay
                ? <span className="text-sm text-gray-800 truncate block">{dateDisplay}</span>
                : <span className="text-sm text-gray-500">Check-in date — Check-out date</span>
              }
            </div>
            <div className="absolute inset-0 flex">
              <input type="date" value={checkIn}  onChange={(e) => setCheckIn(e.target.value)}  className="opacity-0 w-1/2 h-full cursor-pointer" aria-label="Check-in date"  max={checkOut || undefined} />
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="opacity-0 w-1/2 h-full cursor-pointer" aria-label="Check-out date" min={checkIn  || undefined} />
            </div>
          </div>

          <div className="w-px bg-[#febb02] hidden sm:block" aria-hidden />

          {/* Guests */}
          <div className="relative sm:flex-1 min-w-0" ref={guestsRef}>
            <button
              type="button"
              onClick={() => setGuestsOpen((o) => !o)}
              className="w-full h-full bg-white rounded-[5px] flex items-center gap-2.5 px-3 py-3.5 text-left focus:outline-none"
              aria-haspopup="listbox"
              aria-expanded={guestsOpen}
            >
              <PersonIcon />
              <span className="flex-1 text-sm text-gray-800 truncate">{guestLabel}</span>
              <ChevronDown />
            </button>

            {guestsOpen && (
              <div className="absolute z-40 top-[calc(100%+6px)] left-0 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 space-y-4 w-72 max-w-[calc(100vw-2rem)]">
                <GuestStepper label="Adults"   subLabel="Age 18 or above" value={guests.adults}   min={1} onChange={(v) => setGuests((g) => ({ ...g, adults: v }))} />
                <GuestStepper label="Children" subLabel="Ages 0–17"       value={guests.children} min={0} onChange={(v) => setGuests((g) => ({ ...g, children: v }))} />
                <GuestStepper label="Rooms"    subLabel=""                 value={guests.rooms}    min={1} onChange={(v) => setGuests((g) => ({ ...g, rooms: v }))} />
                <button type="button" onClick={() => setGuestsOpen(false)} className="w-full bg-[#0071c2] hover:bg-[#005ea2] text-white rounded py-2 text-sm font-semibold transition">
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Search */}
          <button type="submit" className="bg-[#0071c2] hover:bg-[#005ea2] text-white font-bold rounded-[5px] px-6 sm:px-8 py-3.5 text-sm whitespace-nowrap transition shrink-0">
            Search
          </button>
        </form>

        {/* Checkbox */}
        <label className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={forWork}
            onChange={(e) => setForWork(e.target.checked)}
            className="h-4 w-4 accent-[#0071c2]"
          />
          I'm traveling for work
        </label>
      </div>
    </>
  );
}

function GuestStepper({ label, subLabel, value, min, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {subLabel && <p className="text-xs text-gray-500">{subLabel}</p>}
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Decrease ${label}`} className="w-8 h-8 rounded-full border-2 border-[#0071c2] text-[#0071c2] font-bold flex items-center justify-center hover:bg-[#0071c2]/10 transition disabled:opacity-30 disabled:cursor-not-allowed">−</button>
        <span className="w-5 text-center font-semibold text-sm text-gray-900">{value}</span>
        <button type="button" onClick={() => onChange(value + 1)} aria-label={`Increase ${label}`} className="w-8 h-8 rounded-full border-2 border-[#0071c2] text-[#0071c2] font-bold flex items-center justify-center hover:bg-[#0071c2]/10 transition">+</button>
      </div>
    </div>
  );
}
