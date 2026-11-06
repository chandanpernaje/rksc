import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, ShieldCheck } from "lucide-react";
import { PROFILE } from "../../data/profile";
import { RKSLogo } from "../ui/RKSLogo";

export function Footer() {
  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/customers", label: "Customers" },
    { path: "/experience", label: "Experience" },
    { path: "/insights", label: "Insights" },
    { path: "/speaking", label: "Speaking" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-[#08090B] border-t border-[#242933] pt-8 pb-12 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row with Logo on Left and Menu List on the Right Side */}
        <div className="border-b border-[#242933] pb-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <Link to="/" className="inline-flex items-center group" aria-label="RKS Consulting">
              <RKSLogo
                className="h-10 sm:h-12 md:h-13 w-auto object-contain group-hover:scale-[1.02] transition-transform"
                alt="RKS Consulting"
              />
            </Link>
          </div>

          {/* Clean Consulting Navigation Links on Right Side of Logo */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-7 lg:gap-8 text-xs font-mono uppercase tracking-wider text-[#969BA3]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-[#C9A46C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Verification & Legal Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono text-[#66717D]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A46C]" />
            <span>
              Executive advisory profile &amp; verified professional milestones.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#969BA3] hover:text-[#C9A46C] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn ↗</span>
            </a>
            <span>© 2026 RKS Consulting. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
