import { useSaved } from "../context/SavedContext";

/**
 * Reusable heart/save button.
 *
 * Props:
 *   id       — property id string
 *   size     — "sm" (28px, for cards) | "md" (32px, for detail page)  default "sm"
 *   className — extra classes for positioning (e.g. "absolute top-2 right-2")
 */
export default function SaveButton({ id, size = "sm", className = "" }) {
  const { isSaved, toggle } = useSaved();
  const active = isSaved(id);

  const dim = size === "md" ? "w-8 h-8" : "w-7 h-7";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      aria-label={active ? "Remove from saved" : "Save property"}
      aria-pressed={active}
      className={`${dim} rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-transform active:scale-90 ${className}`}
    >
      {active ? (
        /* Filled red heart */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        /* Outline heart */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      )}
    </button>
  );
}
