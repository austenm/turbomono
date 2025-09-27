"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="text-sm text-foreground rounded-md border border-border bg-muted px-3 py-1 hover:bg-accent"
    >
      {isDark ? 'Dark ✓' : 'Light ✓'}
    </button>
  )
}

export default ThemeToggle;
