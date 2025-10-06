import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        // Responsive position: top-right on desktop, bottom-right on mobile/tablet
        "fixed z-50 rounded-full transition-colors duration-300 focus:outline-none",
        "bg-background shadow-md border border-border",
        "p-2 md:p-3", // Larger padding on desktop
        "top-auto bottom-6 right-6 md:top-5 md:bottom-auto md:right-5", // Bottom on mobile/tablet, top on desktop
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 md:h-7 md:w-7 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 md:h-7 md:w-7 text-blue-900" />
      )}
    </button>
  );
};
