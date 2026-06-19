import { createContext, useContext, useState, useCallback } from "react";

const SavedContext = createContext(null);

export function SavedProvider({ children }) {
  // Initialize from localStorage so saves survive page refresh
  const [saved, setSaved] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("savedProperties") || "[]"));
    } catch {
      return new Set();
    }
  });

  const toggle = useCallback((id) => {
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      // Persist to localStorage
      localStorage.setItem("savedProperties", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isSaved = useCallback((id) => saved.has(id), [saved]);

  return (
    <SavedContext.Provider value={{ saved, toggle, isSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved must be used inside SavedProvider");
  return ctx;
}
