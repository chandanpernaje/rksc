import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { SERVICES_DATA } from "../../data/services";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";
import { RKSLogo } from "../ui/RKSLogo";

export function Navbar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Smart navbar hiding on scroll down, reappearing on scroll up
      if (currentScrollY > 180 && currentScrollY > lastScrollY && !servicesDropdownOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, servicesDropdownOpen]);

  // Keep dropdown open during hover transition
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isDark
            ? scrolled
              ? "bg-[#131B2E]/95 backdrop-blur-md border-b border-[#1E2638] py-3 shadow-xl shadow-black/30"
              : "bg-[#131B2E] border-b border-[#1E2638] py-3.5"
            : scrolled
              ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-900/5"
              : "bg-[#F8F9FA] border-b border-slate-200 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="flex items-center group select-none py-0.5 focus:outline-none"
            aria-label="RKS Consulting Home"
          >
            <RKSLogo
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-[1.02] transition-transform"
              alt="RKS Consulting"
            />
          </Link>

          {/* Right: Integrated Single-Row Navigation Bar matching exact PDF pattern */}
          <div className="flex items-center gap-6 xl:gap-8">
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-sans tracking-wide text-[#969BA3]">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-[#FAFAF8] transition-colors relative py-1 ${
                    isActive ? "text-[#FAFAF8] font-semibold" : ""
                  }`
                }
              >
                About
              </NavLink>

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 py-1 text-xs font-sans transition-colors cursor-pointer ${
                    isServicesActive
                      ? "text-[#FAFAF8] font-semibold"
                      : "text-[#969BA3] hover:text-[#FAFAF8]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#969BA3] transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Services Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-[#111317] border border-[#242933] shadow-2xl shadow-black/80 py-2.5 z-50 animate-page-fade-in backdrop-blur-md">
                    <div className="px-4 py-2 border-b border-[#242933]/60 text-[10px] font-mono uppercase tracking-widest text-[#38BDF8]">
                      Advisory Practices
                    </div>

                    <div className="py-1">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`flex items-center justify-between px-4 py-2.5 hover:bg-[#1B1E24] text-xs font-sans transition-colors group ${
                            location.pathname === service.path
                              ? "text-[#38BDF8] bg-[#1B1E24]/60 font-medium"
                              : "text-[#FAFAF8]/90 hover:text-[#FAFAF8]"
                          }`}
                        >
                          <span className="group-hover:translate-x-1 transition-transform truncate pr-2">
                            {service.title}
                          </span>
                          <span className="text-[10px] font-mono text-[#66717D] group-hover:text-[#38BDF8] shrink-0">
                            {service.num}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="px-4 pt-2 pb-1 border-t border-[#242933]/60">
                      <Link
                        to="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[11px] font-mono text-[#38BDF8] hover:text-[#7DD3FC] transition-colors flex items-center justify-between py-1"
                      >
                        <span>View All Services Overview →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Customers Link */}
              <NavLink
                to="/customers"
                className={({ isActive }) =>
                  `hover:text-[#FAFAF8] transition-colors relative py-1 ${
                    isActive ? "text-[#FAFAF8] font-semibold" : ""
                  }`
                }
              >
                Customers
              </NavLink>

              {/* Experience Link */}
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `hover:text-[#FAFAF8] transition-colors relative py-1 ${
                    isActive ? "text-[#FAFAF8] font-semibold" : ""
                  }`
                }
              >
                Experience
              </NavLink>

              {/* Insights Link */}
              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  `hover:text-[#FAFAF8] transition-colors relative py-1 ${
                    isActive ? "text-[#FAFAF8] font-semibold" : ""
                  }`
                }
              >
                Insights
              </NavLink>

              {/* Speaking Link */}
              <NavLink
                to="/speaking"
                className={({ isActive }) =>
                  `hover:text-[#FAFAF8] transition-colors relative py-1 ${
                    isActive ? "text-[#FAFAF8] font-semibold" : ""
                  }`
                }
              >
                Speaking
              </NavLink>

              {/* Book a conversation action (replaces Contact) */}
              <Link
                to="/contact"
                className="text-xs font-sans font-semibold text-[#38BDF8] hover:text-[#7DD3FC] py-1 border-b border-[#38BDF8] transition-colors whitespace-nowrap"
              >
                Book a conversation
              </Link>
            </nav>

            {/* Dark / Light Theme Toggle on the far right */}
            <div className="flex items-center gap-2">
              <ThemeToggle showLabel={false} />

              {/* Mobile menu trigger button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#969BA3] hover:text-[#FAFAF8] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
