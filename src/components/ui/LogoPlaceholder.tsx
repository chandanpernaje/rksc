import React from "react";

// TODO: Replace placeholder logo with verified customer/partner logo.
interface LogoPlaceholderProps {
  name?: string;
  slotLabel?: string;
  className?: string;
}

export function LogoPlaceholder({
  name = "NEXORA",
  slotLabel = "Verified Partner Slot",
  className = "",
}: LogoPlaceholderProps) {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-6 rounded-xl border border-[#242933] bg-[#111317]/60 hover:bg-[#1B1E24]/70 hover:border-[#C9A46C]/40 transition-all duration-300 ${className}`}
      title="Partner & Client Slot (Placeholder)"
    >
      {/* Sleek Fictional Nexora Emblem */}
      <div className="flex items-center gap-2.5 opacity-60 group-hover:opacity-100 transition-opacity">
        <svg
          className="w-5 h-5 text-[#C9A46C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <span className="font-display font-semibold tracking-widest text-sm text-[#FAFAF8]">
          {name}
        </span>
      </div>

      <div className="mt-2 text-[9px] font-mono tracking-widest uppercase text-[#969BA3]/60">
        {slotLabel}
      </div>
    </div>
  );
}
