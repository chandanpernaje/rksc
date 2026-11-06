import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SERVICES_DATA } from "../data/services";
import { MagneticButton } from "../components/motion/MagneticButton";
import { useTheme } from "../context/ThemeContext";

interface ServiceDetailPageProps {
  customSlug?: string;
}

export function ServiceDetailPage({ customSlug }: ServiceDetailPageProps) {
  const { theme } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = customSlug || slug;

  const currentIndex = SERVICES_DATA.findIndex((s) => s.slug === activeSlug);
  const service = SERVICES_DATA[currentIndex];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Next service in round-robin cycle
  const nextIndex = (currentIndex + 1) % SERVICES_DATA.length;
  const nextService = SERVICES_DATA[nextIndex];

  return (
    <div className="pt-28 pb-24">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#66717D]">
          <Link to="/" className="hover:text-[#FAFAF8] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#242933]" />
          <Link to="/services" className="hover:text-[#FAFAF8] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#242933]" />
          <span className="text-[#C9A46C] truncate max-w-[200px] sm:max-w-none">
            {service.title}
          </span>
        </nav>
      </div>

      {/* 2. Hero Header with Supporting Visual */}
      <section className="px-6 lg:px-12 py-12 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Copy */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest font-semibold">
                  SERVICE {service.num} // {service.visualMeta.domain}
                </span>
                <div className="h-[1px] w-12 bg-[#242933]" />
              </div>

              {/* Service Title */}
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-6">
                {service.title}
              </h1>

              {/* Tagline */}
              <div className="text-sm font-mono text-[#E1C58F] uppercase tracking-wider mb-6">
                {service.tagline}
              </div>

              {/* Customer-Friendly Introduction */}
              <p className="text-lg sm:text-xl text-[#969BA3] leading-relaxed mb-8 max-w-2xl font-normal">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <MagneticButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10">
                    <span>Let's Talk</span>
                    <ArrowRight className="w-4 h-4 text-[#08090B]" />
                  </MagneticButton>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-mono text-[#969BA3] hover:text-[#FAFAF8] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#C9A46C]" />
                  <span>All Services</span>
                </Link>
              </div>
            </div>

            {/* Right Supporting Visual Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#111317] via-[#1B1E24] to-[#111317] border border-[#242933] shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(201,164,108,0.1)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#242933]">
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest font-semibold practice-architecture-badge"
                      style={{ color: theme === "light" ? "#0284C7" : "#C9A46C" }}
                    >
                      PRACTICE ARCHITECTURE
                    </span>
                    <span className="text-xs font-mono text-[#66717D]">
                      RKS CONSULTING
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-[#969BA3] mb-1">
                      Advisory Focus
                    </div>
                    <div className="font-display text-2xl font-bold text-[#FAFAF8]">
                      {service.visualMeta.focus}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090B]/80 border border-[#242933] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#66717D]">
                        Target Outcome Metric
                      </div>
                      <div className="text-xs font-medium text-[#969BA3] mt-0.5">
                        {service.visualMeta.metricLabel}
                      </div>
                    </div>
                    <div className="font-display text-2xl font-bold text-[#C9A46C]">
                      {service.visualMeta.metric}
                    </div>
                  </div>

                  <div className="text-xs text-[#969BA3] leading-relaxed">
                    {service.detailedDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Help With */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              CONSULTING SCOPE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              What We Help With
            </h2>
            <p className="text-sm text-[#969BA3] mt-2">
              Transforming strategic ambiguities into concrete business and technological deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatWeHelpWith.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-[#242933] flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-[#1B1E24] text-[#C9A46C] shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base text-[#FAFAF8] leading-relaxed">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Areas / Capabilities */}
      <section className="py-20 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              CORE CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Key Areas &amp; Methodologies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#08090B] border border-[#242933] hover:border-[#C9A46C]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-[#C9A46C] font-semibold mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#FAFAF8] mb-3">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#969BA3] leading-relaxed">
                    {area.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#242933] text-[9px] font-mono text-[#66717D]">
                  PRACTICE AREA
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who This Service Is For & 6. How Sharat's Experience Adds Value */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Who this is for */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933]">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#C9A46C] uppercase tracking-wider mb-4">
                <Users className="w-4 h-4" />
                <span>Target Client Profile</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-6">
                Who This Service Is For
              </h3>

              <ul className="space-y-4">
                {service.whoThisIsFor.map((target, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#969BA3]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A46C] shrink-0 mt-2" />
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Sharat's experience adds value */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#C9A46C] uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Advisory Advantage</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-4">
                  How Sharat's Experience Adds Value
                </h3>

                <p className="text-sm sm:text-base text-[#969BA3] leading-relaxed mb-6">
                  {service.howExperienceAddsValue}
                </p>

                <div className="p-4 rounded-xl bg-[#1B1E24]/60 border border-[#242933] text-xs font-mono text-[#C9A46C]">
                  30+ Years Leadership · Texas Instruments · Synopsys · Global Semiconductor EMS · iMAPS India
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#242933]">
                <Link
                  to="/about"
                  className="text-xs font-mono text-[#FAFAF8] hover:text-[#C9A46C] transition-colors flex items-center gap-1.5"
                >
                  <span>Read Full Executive Background</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A46C]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Clear CTA — Let's Talk */}
      <section className="py-20 px-6 lg:px-12 bg-[#111317] border-t border-[#242933] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#C9A46C] uppercase tracking-wider mb-4">
            NEXT STEPS
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] mb-4">
            Ready to Discuss {service.title}?
          </h2>

          <p className="text-base text-[#969BA3] max-w-xl mx-auto mb-8">
            Schedule a confidential dialogue to review your organization's specific challenges, timeline, and strategic requirements.
          </p>

          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10">
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </MagneticButton>
          </Link>
        </div>
      </section>

      {/* 10. Consistent Next Service → Navigation */}
      <section className="px-6 lg:px-12 py-12 bg-[#08090B] border-t border-[#242933]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            to="/services"
            className="text-xs font-mono text-[#969BA3] hover:text-[#FAFAF8] transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C9A46C]" />
            <span>Back to All Services</span>
          </Link>

          <Link
            to={nextService.path}
            className="group flex items-center gap-4 text-left sm:text-right p-4 rounded-xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/60 hover:bg-[#1B1E24] transition-all"
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#C9A46C]">
                NEXT SERVICE (0{nextIndex + 1})
              </div>
              <div className="font-display text-base font-bold text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                {nextService.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#C9A46C] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
