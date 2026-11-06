import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ArrowUpRight, ChevronDown, Linkedin, ArrowRight } from "lucide-react";
import { PROFILE } from "../../data/profile";
import { SERVICES_DATA } from "../../data/services";
import { ThemeToggle } from "../ui/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const location = useLocation();

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    if (firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 bg-[#08090B] flex flex-col justify-between p-6 sm:p-10 transition-opacity duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#242933] pb-6">
        <Link
          to="/"
          onClick={onClose}
          className="flex flex-col items-start leading-none focus:outline-none"
          aria-label="RKS Consulting Home"
        >
          <span className="font-mono text-xl font-bold tracking-tight text-[#FAFAF8]">
            RKS
          </span>
          <span className="text-[10px] font-mono tracking-[0.24em] text-[#969BA3] uppercase font-semibold mt-0.5">
            CONSULTING
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle showLabel={false} />
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="p-2 text-[#969BA3] hover:text-[#FAFAF8] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Nav List */}
      <nav className="my-auto py-6 overflow-y-auto max-h-[70vh]">
        <ul className="flex flex-col gap-3">
          {/* 01: About */}
          <li>
            <Link
              to="/about"
              onClick={onClose}
              className="w-full text-left py-2 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors tabular-nums">
                  01
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                  About
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] transition-transform" />
            </Link>
          </li>

          {/* 02: Services Accordion */}
          <li className="border-y border-[#242933]/60 py-2">
            <button
              type="button"
              onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
              className="w-full text-left py-1 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors tabular-nums">
                  02
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                  Services
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#C9A46C] transition-transform duration-200 ${
                  servicesAccordionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion Submenu */}
            {servicesAccordionOpen && (
              <div className="mt-3 pl-8 pr-2 py-2 space-y-2.5 border-l border-[#242933] ml-2 animate-page-fade-in">
                <Link
                  to="/services"
                  onClick={onClose}
                  className="flex items-center justify-between text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] pb-1 border-b border-[#242933]/40"
                >
                  <span>Services Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {SERVICES_DATA.map((srv) => (
                  <Link
                    key={srv.id}
                    to={srv.path}
                    onClick={onClose}
                    className={`block py-1 text-sm font-sans transition-colors ${
                      location.pathname === srv.path
                        ? "text-[#C9A46C] font-semibold"
                        : "text-[#969BA3] hover:text-[#FAFAF8]"
                    }`}
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* 03: Customers */}
          <li>
            <Link
              to="/customers"
              onClick={onClose}
              className="w-full text-left py-2 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors tabular-nums">
                  03
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                  Customers &amp; Partners
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] transition-transform" />
            </Link>
          </li>

          {/* 04: Experience */}
          <li>
            <Link
              to="/experience"
              onClick={onClose}
              className="w-full text-left py-2 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors tabular-nums">
                  04
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                  Experience &amp; Impact
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] transition-transform" />
            </Link>
          </li>

          {/* 05: Insights */}
          <li>
            <Link
              to="/insights"
              onClick={onClose}
              className="w-full text-left py-2 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors tabular-nums">
                  05
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                  Insights &amp; Perspectives
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] transition-transform" />
            </Link>
          </li>

          {/* 06: Speaking */}
          <li>
            <Link
              to="/speaking"
              onClick={onClose}
              className="w-full text-left py-2 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors tabular-nums">
                  06
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                  Speaking
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] transition-transform" />
            </Link>
          </li>
        </ul>

        {/* Mobile Action Button */}
        <div className="mt-6 pt-4 border-t border-[#242933]">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#38BDF8] text-[#08090B] font-sans text-xs font-bold tracking-wider uppercase hover:bg-[#7DD3FC] transition-all shadow-lg"
          >
            <span>Book a conversation</span>
            <ArrowUpRight className="w-4 h-4 text-[#08090B]" />
          </Link>
        </div>
      </nav>

      {/* Bottom Footer */}
      <div className="border-t border-[#242933] pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs font-mono text-[#66717D]">
          RKS CONSULTING · STRATEGY · ECOSYSTEMS
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#969BA3] hover:text-[#FAFAF8] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#C9A46C]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}
