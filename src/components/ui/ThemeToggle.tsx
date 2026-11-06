import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative inline-flex items-center justify-center gap-2 p-2 sm:px-2.5 sm:py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] cursor-pointer ${
        isDark
          ? "bg-[#111317] border-[#242933] text-[#969BA3] hover:text-[#FAFAF8] hover:border-[#C9A46C]/60 hover:bg-[#1B1E24]"
          : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-[#C9A46C] hover:bg-slate-50 shadow-xs"
      } ${className}`}
      aria-label={isDark ? "Switch to fresh light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#C9A46C] transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#0284C7] transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="font-mono text-[11px] uppercase tracking-wider hidden sm:inline">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
