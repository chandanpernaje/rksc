import React from "react";
import logoLight from "../../assets/images/rks_logo_light.png";
import logoDark from "../../assets/images/rks_logo_dark.png";

interface RKSLogoProps {
  className?: string;
  alt?: string;
}

export function RKSLogo({
  className = "h-12 w-auto object-contain",
  alt = "RKS Consulting",
}: RKSLogoProps) {
  return (
    <div className="relative inline-flex items-center select-none">
      {/* Light Theme Logo: Transparent background with deep corporate navy & electric blue */}
      <img
        src={logoLight}
        alt={alt}
        className={`${className} rks-logo-light object-contain transition-transform duration-200`}
        loading="eager"
        decoding="async"
      />
      {/* Dark Theme Logo: Transparent background with crisp luminous white & electric cyan */}
      <img
        src={logoDark}
        alt={alt}
        className={`${className} rks-logo-dark object-contain transition-transform duration-200`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

